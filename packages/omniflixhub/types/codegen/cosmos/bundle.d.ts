import * as _16 from "./auth/v1beta1/auth";
import * as _17 from "./auth/v1beta1/genesis";
import * as _18 from "./auth/v1beta1/query";
import * as _19 from "./authz/v1beta1/authz";
import * as _20 from "./authz/v1beta1/event";
import * as _21 from "./authz/v1beta1/genesis";
import * as _22 from "./authz/v1beta1/query";
import * as _23 from "./authz/v1beta1/tx";
import * as _24 from "./bank/v1beta1/authz";
import * as _25 from "./bank/v1beta1/bank";
import * as _26 from "./bank/v1beta1/genesis";
import * as _27 from "./bank/v1beta1/query";
import * as _28 from "./bank/v1beta1/tx";
import * as _29 from "./base/abci/v1beta1/abci";
import * as _30 from "./base/kv/v1beta1/kv";
import * as _31 from "./base/node/v1beta1/query";
import * as _32 from "./base/query/v1beta1/pagination";
import * as _33 from "./base/reflection/v1beta1/reflection";
import * as _34 from "./base/reflection/v2alpha1/reflection";
import * as _35 from "./base/snapshots/v1beta1/snapshot";
import * as _36 from "./base/store/v1beta1/commit_info";
import * as _37 from "./base/store/v1beta1/listening";
import * as _38 from "./base/tendermint/v1beta1/query";
import * as _40 from "../cosmos_proto/coin";
import * as _41 from "./capability/v1beta1/capability";
import * as _42 from "./capability/v1beta1/genesis";
import * as _43 from "./crisis/v1beta1/genesis";
import * as _44 from "./crisis/v1beta1/tx";
import * as _45 from "./crypto/ed25519/keys";
import * as _46 from "./crypto/multisig/keys";
import * as _47 from "./crypto/secp256k1/keys";
import * as _48 from "./crypto/secp256r1/keys";
import * as _49 from "./distribution/v1beta1/distribution";
import * as _50 from "./distribution/v1beta1/genesis";
import * as _51 from "./distribution/v1beta1/query";
import * as _52 from "./distribution/v1beta1/tx";
import * as _53 from "./evidence/v1beta1/evidence";
import * as _54 from "./evidence/v1beta1/genesis";
import * as _55 from "./evidence/v1beta1/query";
import * as _56 from "./evidence/v1beta1/tx";
import * as _57 from "./feegrant/v1beta1/feegrant";
import * as _58 from "./feegrant/v1beta1/genesis";
import * as _59 from "./feegrant/v1beta1/query";
import * as _60 from "./feegrant/v1beta1/tx";
import * as _61 from "./genutil/v1beta1/genesis";
import * as _62 from "./gov/v1beta1/genesis";
import * as _63 from "./gov/v1beta1/gov";
import * as _64 from "./gov/v1beta1/query";
import * as _65 from "./gov/v1beta1/tx";
import * as _66 from "./mint/v1beta1/genesis";
import * as _67 from "./mint/v1beta1/mint";
import * as _68 from "./mint/v1beta1/query";
import * as _69 from "./params/v1beta1/params";
import * as _70 from "./params/v1beta1/query";
import * as _71 from "./slashing/v1beta1/genesis";
import * as _72 from "./slashing/v1beta1/query";
import * as _73 from "./slashing/v1beta1/slashing";
import * as _74 from "./slashing/v1beta1/tx";
import * as _75 from "./staking/v1beta1/authz";
import * as _76 from "./staking/v1beta1/genesis";
import * as _77 from "./staking/v1beta1/query";
import * as _78 from "./staking/v1beta1/staking";
import * as _79 from "./staking/v1beta1/tx";
import * as _80 from "./tx/signing/v1beta1/signing";
import * as _81 from "./tx/v1beta1/service";
import * as _82 from "./tx/v1beta1/tx";
import * as _83 from "./upgrade/v1beta1/query";
import * as _84 from "./upgrade/v1beta1/upgrade";
import * as _85 from "./vesting/v1beta1/tx";
import * as _86 from "./vesting/v1beta1/vesting";
import * as _87 from "../cosmos_proto/pagination";
import * as _141 from "./auth/v1beta1/query.lcd";
import * as _142 from "./authz/v1beta1/query.lcd";
import * as _143 from "./bank/v1beta1/query.lcd";
import * as _144 from "./base/node/v1beta1/query.lcd";
import * as _145 from "./base/tendermint/v1beta1/query.lcd";
import * as _146 from "./distribution/v1beta1/query.lcd";
import * as _147 from "./evidence/v1beta1/query.lcd";
import * as _148 from "./feegrant/v1beta1/query.lcd";
import * as _149 from "./gov/v1beta1/query.lcd";
import * as _150 from "./mint/v1beta1/query.lcd";
import * as _151 from "./params/v1beta1/query.lcd";
import * as _152 from "./slashing/v1beta1/query.lcd";
import * as _153 from "./staking/v1beta1/query.lcd";
import * as _154 from "./tx/v1beta1/service.lcd";
import * as _155 from "./upgrade/v1beta1/query.lcd";
import * as _156 from "./auth/v1beta1/query.rpc.Query";
import * as _157 from "./authz/v1beta1/query.rpc.Query";
import * as _158 from "./bank/v1beta1/query.rpc.Query";
import * as _159 from "./base/node/v1beta1/query.rpc.Service";
import * as _160 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _161 from "./distribution/v1beta1/query.rpc.Query";
import * as _162 from "./evidence/v1beta1/query.rpc.Query";
import * as _163 from "./feegrant/v1beta1/query.rpc.Query";
import * as _164 from "./gov/v1beta1/query.rpc.Query";
import * as _165 from "./mint/v1beta1/query.rpc.Query";
import * as _166 from "./params/v1beta1/query.rpc.Query";
import * as _167 from "./slashing/v1beta1/query.rpc.Query";
import * as _168 from "./staking/v1beta1/query.rpc.Query";
import * as _169 from "./tx/v1beta1/service.rpc.Service";
import * as _170 from "./upgrade/v1beta1/query.rpc.Query";
import * as _171 from "./authz/v1beta1/tx.rpc.msg";
import * as _172 from "./bank/v1beta1/tx.rpc.msg";
import * as _173 from "./crisis/v1beta1/tx.rpc.msg";
import * as _174 from "./distribution/v1beta1/tx.rpc.msg";
import * as _175 from "./evidence/v1beta1/tx.rpc.msg";
import * as _176 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _177 from "./gov/v1beta1/tx.rpc.msg";
import * as _178 from "./slashing/v1beta1/tx.rpc.msg";
import * as _179 from "./staking/v1beta1/tx.rpc.msg";
import * as _180 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _156.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _18.QueryAccountsRequest): Promise<_18.QueryAccountsResponse>;
                account(request: _18.QueryAccountRequest): Promise<_18.QueryAccountResponse>;
                params(request?: _18.QueryParamsRequest): Promise<_18.QueryParamsResponse>;
                moduleAccountByName(request: _18.QueryModuleAccountByNameRequest): Promise<_18.QueryModuleAccountByNameResponse>;
            };
            LCDQueryClient: typeof _141.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _18.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryAccountsRequest;
                fromPartial(object: Partial<_18.QueryAccountsRequest>): _18.QueryAccountsRequest;
                fromAmino(object: _18.QueryAccountsRequestAmino): _18.QueryAccountsRequest;
                toAmino(message: _18.QueryAccountsRequest): _18.QueryAccountsRequestAmino;
                fromAminoMsg(object: _18.QueryAccountsRequestAminoMsg): _18.QueryAccountsRequest;
                toAminoMsg(message: _18.QueryAccountsRequest): _18.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _18.QueryAccountsRequestProtoMsg): _18.QueryAccountsRequest;
                toProto(message: _18.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _18.QueryAccountsRequest): _18.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _18.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryAccountsResponse;
                fromPartial(object: Partial<_18.QueryAccountsResponse>): _18.QueryAccountsResponse;
                fromAmino(object: _18.QueryAccountsResponseAmino): _18.QueryAccountsResponse;
                toAmino(message: _18.QueryAccountsResponse): _18.QueryAccountsResponseAmino;
                fromAminoMsg(object: _18.QueryAccountsResponseAminoMsg): _18.QueryAccountsResponse;
                toAminoMsg(message: _18.QueryAccountsResponse): _18.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _18.QueryAccountsResponseProtoMsg): _18.QueryAccountsResponse;
                toProto(message: _18.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _18.QueryAccountsResponse): _18.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _18.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryAccountRequest;
                fromPartial(object: Partial<_18.QueryAccountRequest>): _18.QueryAccountRequest;
                fromAmino(object: _18.QueryAccountRequestAmino): _18.QueryAccountRequest;
                toAmino(message: _18.QueryAccountRequest): _18.QueryAccountRequestAmino;
                fromAminoMsg(object: _18.QueryAccountRequestAminoMsg): _18.QueryAccountRequest;
                toAminoMsg(message: _18.QueryAccountRequest): _18.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _18.QueryAccountRequestProtoMsg): _18.QueryAccountRequest;
                toProto(message: _18.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _18.QueryAccountRequest): _18.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _18.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryAccountResponse;
                fromPartial(object: Partial<_18.QueryAccountResponse>): _18.QueryAccountResponse;
                fromAmino(object: _18.QueryAccountResponseAmino): _18.QueryAccountResponse;
                toAmino(message: _18.QueryAccountResponse): _18.QueryAccountResponseAmino;
                fromAminoMsg(object: _18.QueryAccountResponseAminoMsg): _18.QueryAccountResponse;
                toAminoMsg(message: _18.QueryAccountResponse): _18.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _18.QueryAccountResponseProtoMsg): _18.QueryAccountResponse;
                toProto(message: _18.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _18.QueryAccountResponse): _18.QueryAccountResponseProtoMsg;
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
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _18.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_18.QueryModuleAccountByNameRequest>): _18.QueryModuleAccountByNameRequest;
                fromAmino(object: _18.QueryModuleAccountByNameRequestAmino): _18.QueryModuleAccountByNameRequest;
                toAmino(message: _18.QueryModuleAccountByNameRequest): _18.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _18.QueryModuleAccountByNameRequestAminoMsg): _18.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _18.QueryModuleAccountByNameRequest): _18.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _18.QueryModuleAccountByNameRequestProtoMsg): _18.QueryModuleAccountByNameRequest;
                toProto(message: _18.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _18.QueryModuleAccountByNameRequest): _18.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _18.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_18.QueryModuleAccountByNameResponse>): _18.QueryModuleAccountByNameResponse;
                fromAmino(object: _18.QueryModuleAccountByNameResponseAmino): _18.QueryModuleAccountByNameResponse;
                toAmino(message: _18.QueryModuleAccountByNameResponse): _18.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _18.QueryModuleAccountByNameResponseAminoMsg): _18.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _18.QueryModuleAccountByNameResponse): _18.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _18.QueryModuleAccountByNameResponseProtoMsg): _18.QueryModuleAccountByNameResponse;
                toProto(message: _18.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _18.QueryModuleAccountByNameResponse): _18.QueryModuleAccountByNameResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _16.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _16.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
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
            BaseAccount: {
                typeUrl: string;
                encode(message: _16.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.BaseAccount;
                fromPartial(object: Partial<_16.BaseAccount>): _16.BaseAccount;
                fromAmino(object: _16.BaseAccountAmino): _16.BaseAccount;
                toAmino(message: _16.BaseAccount): _16.BaseAccountAmino;
                fromAminoMsg(object: _16.BaseAccountAminoMsg): _16.BaseAccount;
                toAminoMsg(message: _16.BaseAccount): _16.BaseAccountAminoMsg;
                fromProtoMsg(message: _16.BaseAccountProtoMsg): _16.BaseAccount;
                toProto(message: _16.BaseAccount): Uint8Array;
                toProtoMsg(message: _16.BaseAccount): _16.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _16.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.ModuleAccount;
                fromPartial(object: Partial<_16.ModuleAccount>): _16.ModuleAccount;
                fromAmino(object: _16.ModuleAccountAmino): _16.ModuleAccount;
                toAmino(message: _16.ModuleAccount): _16.ModuleAccountAmino;
                fromAminoMsg(object: _16.ModuleAccountAminoMsg): _16.ModuleAccount;
                toAminoMsg(message: _16.ModuleAccount): _16.ModuleAccountAminoMsg;
                fromProtoMsg(message: _16.ModuleAccountProtoMsg): _16.ModuleAccount;
                toProto(message: _16.ModuleAccount): Uint8Array;
                toProtoMsg(message: _16.ModuleAccount): _16.ModuleAccountProtoMsg;
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
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _171.MsgClientImpl;
            QueryClientImpl: typeof _157.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _22.QueryGrantsRequest): Promise<_22.QueryGrantsResponse>;
                granterGrants(request: _22.QueryGranterGrantsRequest): Promise<_22.QueryGranterGrantsResponse>;
                granteeGrants(request: _22.QueryGranteeGrantsRequest): Promise<_22.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _142.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _23.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _23.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _23.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _23.MsgGrant): {
                        typeUrl: string;
                        value: _23.MsgGrant;
                    };
                    exec(value: _23.MsgExec): {
                        typeUrl: string;
                        value: _23.MsgExec;
                    };
                    revoke(value: _23.MsgRevoke): {
                        typeUrl: string;
                        value: _23.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _23.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _23.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _23.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _23.MsgGrant): {
                        typeUrl: string;
                        value: _23.MsgGrant;
                    };
                    exec(value: _23.MsgExec): {
                        typeUrl: string;
                        value: _23.MsgExec;
                    };
                    revoke(value: _23.MsgRevoke): {
                        typeUrl: string;
                        value: _23.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _23.MsgGrant) => _23.MsgGrantAmino;
                    fromAmino: (object: _23.MsgGrantAmino) => _23.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _23.MsgExec) => _23.MsgExecAmino;
                    fromAmino: (object: _23.MsgExecAmino) => _23.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _23.MsgRevoke) => _23.MsgRevokeAmino;
                    fromAmino: (object: _23.MsgRevokeAmino) => _23.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _23.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgGrant;
                fromPartial(object: Partial<_23.MsgGrant>): _23.MsgGrant;
                fromAmino(object: _23.MsgGrantAmino): _23.MsgGrant;
                toAmino(message: _23.MsgGrant): _23.MsgGrantAmino;
                fromAminoMsg(object: _23.MsgGrantAminoMsg): _23.MsgGrant;
                toAminoMsg(message: _23.MsgGrant): _23.MsgGrantAminoMsg;
                fromProtoMsg(message: _23.MsgGrantProtoMsg): _23.MsgGrant;
                toProto(message: _23.MsgGrant): Uint8Array;
                toProtoMsg(message: _23.MsgGrant): _23.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _23.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgExecResponse;
                fromPartial(object: Partial<_23.MsgExecResponse>): _23.MsgExecResponse;
                fromAmino(object: _23.MsgExecResponseAmino): _23.MsgExecResponse;
                toAmino(message: _23.MsgExecResponse): _23.MsgExecResponseAmino;
                fromAminoMsg(object: _23.MsgExecResponseAminoMsg): _23.MsgExecResponse;
                toAminoMsg(message: _23.MsgExecResponse): _23.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _23.MsgExecResponseProtoMsg): _23.MsgExecResponse;
                toProto(message: _23.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _23.MsgExecResponse): _23.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _23.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgExec;
                fromPartial(object: Partial<_23.MsgExec>): _23.MsgExec;
                fromAmino(object: _23.MsgExecAmino): _23.MsgExec;
                toAmino(message: _23.MsgExec): _23.MsgExecAmino;
                fromAminoMsg(object: _23.MsgExecAminoMsg): _23.MsgExec;
                toAminoMsg(message: _23.MsgExec): _23.MsgExecAminoMsg;
                fromProtoMsg(message: _23.MsgExecProtoMsg): _23.MsgExec;
                toProto(message: _23.MsgExec): Uint8Array;
                toProtoMsg(message: _23.MsgExec): _23.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _23.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.MsgGrantResponse;
                fromPartial(_: Partial<_23.MsgGrantResponse>): _23.MsgGrantResponse;
                fromAmino(_: _23.MsgGrantResponseAmino): _23.MsgGrantResponse;
                toAmino(_: _23.MsgGrantResponse): _23.MsgGrantResponseAmino;
                fromAminoMsg(object: _23.MsgGrantResponseAminoMsg): _23.MsgGrantResponse;
                toAminoMsg(message: _23.MsgGrantResponse): _23.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _23.MsgGrantResponseProtoMsg): _23.MsgGrantResponse;
                toProto(message: _23.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _23.MsgGrantResponse): _23.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _23.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgRevoke;
                fromPartial(object: Partial<_23.MsgRevoke>): _23.MsgRevoke;
                fromAmino(object: _23.MsgRevokeAmino): _23.MsgRevoke;
                toAmino(message: _23.MsgRevoke): _23.MsgRevokeAmino;
                fromAminoMsg(object: _23.MsgRevokeAminoMsg): _23.MsgRevoke;
                toAminoMsg(message: _23.MsgRevoke): _23.MsgRevokeAminoMsg;
                fromProtoMsg(message: _23.MsgRevokeProtoMsg): _23.MsgRevoke;
                toProto(message: _23.MsgRevoke): Uint8Array;
                toProtoMsg(message: _23.MsgRevoke): _23.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _23.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.MsgRevokeResponse;
                fromPartial(_: Partial<_23.MsgRevokeResponse>): _23.MsgRevokeResponse;
                fromAmino(_: _23.MsgRevokeResponseAmino): _23.MsgRevokeResponse;
                toAmino(_: _23.MsgRevokeResponse): _23.MsgRevokeResponseAmino;
                fromAminoMsg(object: _23.MsgRevokeResponseAminoMsg): _23.MsgRevokeResponse;
                toAminoMsg(message: _23.MsgRevokeResponse): _23.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _23.MsgRevokeResponseProtoMsg): _23.MsgRevokeResponse;
                toProto(message: _23.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _23.MsgRevokeResponse): _23.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _22.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryGrantsRequest;
                fromPartial(object: Partial<_22.QueryGrantsRequest>): _22.QueryGrantsRequest;
                fromAmino(object: _22.QueryGrantsRequestAmino): _22.QueryGrantsRequest;
                toAmino(message: _22.QueryGrantsRequest): _22.QueryGrantsRequestAmino;
                fromAminoMsg(object: _22.QueryGrantsRequestAminoMsg): _22.QueryGrantsRequest;
                toAminoMsg(message: _22.QueryGrantsRequest): _22.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _22.QueryGrantsRequestProtoMsg): _22.QueryGrantsRequest;
                toProto(message: _22.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _22.QueryGrantsRequest): _22.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _22.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryGrantsResponse;
                fromPartial(object: Partial<_22.QueryGrantsResponse>): _22.QueryGrantsResponse;
                fromAmino(object: _22.QueryGrantsResponseAmino): _22.QueryGrantsResponse;
                toAmino(message: _22.QueryGrantsResponse): _22.QueryGrantsResponseAmino;
                fromAminoMsg(object: _22.QueryGrantsResponseAminoMsg): _22.QueryGrantsResponse;
                toAminoMsg(message: _22.QueryGrantsResponse): _22.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _22.QueryGrantsResponseProtoMsg): _22.QueryGrantsResponse;
                toProto(message: _22.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _22.QueryGrantsResponse): _22.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _22.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_22.QueryGranterGrantsRequest>): _22.QueryGranterGrantsRequest;
                fromAmino(object: _22.QueryGranterGrantsRequestAmino): _22.QueryGranterGrantsRequest;
                toAmino(message: _22.QueryGranterGrantsRequest): _22.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _22.QueryGranterGrantsRequestAminoMsg): _22.QueryGranterGrantsRequest;
                toAminoMsg(message: _22.QueryGranterGrantsRequest): _22.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _22.QueryGranterGrantsRequestProtoMsg): _22.QueryGranterGrantsRequest;
                toProto(message: _22.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _22.QueryGranterGrantsRequest): _22.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _22.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_22.QueryGranterGrantsResponse>): _22.QueryGranterGrantsResponse;
                fromAmino(object: _22.QueryGranterGrantsResponseAmino): _22.QueryGranterGrantsResponse;
                toAmino(message: _22.QueryGranterGrantsResponse): _22.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _22.QueryGranterGrantsResponseAminoMsg): _22.QueryGranterGrantsResponse;
                toAminoMsg(message: _22.QueryGranterGrantsResponse): _22.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _22.QueryGranterGrantsResponseProtoMsg): _22.QueryGranterGrantsResponse;
                toProto(message: _22.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _22.QueryGranterGrantsResponse): _22.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _22.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_22.QueryGranteeGrantsRequest>): _22.QueryGranteeGrantsRequest;
                fromAmino(object: _22.QueryGranteeGrantsRequestAmino): _22.QueryGranteeGrantsRequest;
                toAmino(message: _22.QueryGranteeGrantsRequest): _22.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _22.QueryGranteeGrantsRequestAminoMsg): _22.QueryGranteeGrantsRequest;
                toAminoMsg(message: _22.QueryGranteeGrantsRequest): _22.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _22.QueryGranteeGrantsRequestProtoMsg): _22.QueryGranteeGrantsRequest;
                toProto(message: _22.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _22.QueryGranteeGrantsRequest): _22.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _22.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_22.QueryGranteeGrantsResponse>): _22.QueryGranteeGrantsResponse;
                fromAmino(object: _22.QueryGranteeGrantsResponseAmino): _22.QueryGranteeGrantsResponse;
                toAmino(message: _22.QueryGranteeGrantsResponse): _22.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _22.QueryGranteeGrantsResponseAminoMsg): _22.QueryGranteeGrantsResponse;
                toAminoMsg(message: _22.QueryGranteeGrantsResponse): _22.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _22.QueryGranteeGrantsResponseProtoMsg): _22.QueryGranteeGrantsResponse;
                toProto(message: _22.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _22.QueryGranteeGrantsResponse): _22.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _21.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.GenesisState;
                fromPartial(object: Partial<_21.GenesisState>): _21.GenesisState;
                fromAmino(object: _21.GenesisStateAmino): _21.GenesisState;
                toAmino(message: _21.GenesisState): _21.GenesisStateAmino;
                fromAminoMsg(object: _21.GenesisStateAminoMsg): _21.GenesisState;
                toAminoMsg(message: _21.GenesisState): _21.GenesisStateAminoMsg;
                fromProtoMsg(message: _21.GenesisStateProtoMsg): _21.GenesisState;
                toProto(message: _21.GenesisState): Uint8Array;
                toProtoMsg(message: _21.GenesisState): _21.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _20.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.EventGrant;
                fromPartial(object: Partial<_20.EventGrant>): _20.EventGrant;
                fromAmino(object: _20.EventGrantAmino): _20.EventGrant;
                toAmino(message: _20.EventGrant): _20.EventGrantAmino;
                fromAminoMsg(object: _20.EventGrantAminoMsg): _20.EventGrant;
                toAminoMsg(message: _20.EventGrant): _20.EventGrantAminoMsg;
                fromProtoMsg(message: _20.EventGrantProtoMsg): _20.EventGrant;
                toProto(message: _20.EventGrant): Uint8Array;
                toProtoMsg(message: _20.EventGrant): _20.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _20.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.EventRevoke;
                fromPartial(object: Partial<_20.EventRevoke>): _20.EventRevoke;
                fromAmino(object: _20.EventRevokeAmino): _20.EventRevoke;
                toAmino(message: _20.EventRevoke): _20.EventRevokeAmino;
                fromAminoMsg(object: _20.EventRevokeAminoMsg): _20.EventRevoke;
                toAminoMsg(message: _20.EventRevoke): _20.EventRevokeAminoMsg;
                fromProtoMsg(message: _20.EventRevokeProtoMsg): _20.EventRevoke;
                toProto(message: _20.EventRevoke): Uint8Array;
                toProtoMsg(message: _20.EventRevoke): _20.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _19.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.GenericAuthorization;
                fromPartial(object: Partial<_19.GenericAuthorization>): _19.GenericAuthorization;
                fromAmino(object: _19.GenericAuthorizationAmino): _19.GenericAuthorization;
                toAmino(message: _19.GenericAuthorization): _19.GenericAuthorizationAmino;
                fromAminoMsg(object: _19.GenericAuthorizationAminoMsg): _19.GenericAuthorization;
                toAminoMsg(message: _19.GenericAuthorization): _19.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _19.GenericAuthorizationProtoMsg): _19.GenericAuthorization;
                toProto(message: _19.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _19.GenericAuthorization): _19.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _19.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.Grant;
                fromPartial(object: Partial<_19.Grant>): _19.Grant;
                fromAmino(object: _19.GrantAmino): _19.Grant;
                toAmino(message: _19.Grant): _19.GrantAmino;
                fromAminoMsg(object: _19.GrantAminoMsg): _19.Grant;
                toAminoMsg(message: _19.Grant): _19.GrantAminoMsg;
                fromProtoMsg(message: _19.GrantProtoMsg): _19.Grant;
                toProto(message: _19.Grant): Uint8Array;
                toProtoMsg(message: _19.Grant): _19.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _19.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.GrantAuthorization;
                fromPartial(object: Partial<_19.GrantAuthorization>): _19.GrantAuthorization;
                fromAmino(object: _19.GrantAuthorizationAmino): _19.GrantAuthorization;
                toAmino(message: _19.GrantAuthorization): _19.GrantAuthorizationAmino;
                fromAminoMsg(object: _19.GrantAuthorizationAminoMsg): _19.GrantAuthorization;
                toAminoMsg(message: _19.GrantAuthorization): _19.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _19.GrantAuthorizationProtoMsg): _19.GrantAuthorization;
                toProto(message: _19.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _19.GrantAuthorization): _19.GrantAuthorizationProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _24.SendAuthorization | _75.StakeAuthorization | _19.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _172.MsgClientImpl;
            QueryClientImpl: typeof _158.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _27.QueryBalanceRequest): Promise<_27.QueryBalanceResponse>;
                allBalances(request: _27.QueryAllBalancesRequest): Promise<_27.QueryAllBalancesResponse>;
                spendableBalances(request: _27.QuerySpendableBalancesRequest): Promise<_27.QuerySpendableBalancesResponse>;
                totalSupply(request?: _27.QueryTotalSupplyRequest): Promise<_27.QueryTotalSupplyResponse>;
                supplyOf(request: _27.QuerySupplyOfRequest): Promise<_27.QuerySupplyOfResponse>;
                params(request?: _27.QueryParamsRequest): Promise<_27.QueryParamsResponse>;
                denomMetadata(request: _27.QueryDenomMetadataRequest): Promise<_27.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _27.QueryDenomsMetadataRequest): Promise<_27.QueryDenomsMetadataResponse>;
            };
            LCDQueryClient: typeof _143.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _28.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _28.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _28.MsgSend): {
                        typeUrl: string;
                        value: _28.MsgSend;
                    };
                    multiSend(value: _28.MsgMultiSend): {
                        typeUrl: string;
                        value: _28.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _28.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _28.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _28.MsgSend): {
                        typeUrl: string;
                        value: _28.MsgSend;
                    };
                    multiSend(value: _28.MsgMultiSend): {
                        typeUrl: string;
                        value: _28.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _28.MsgSend) => _28.MsgSendAmino;
                    fromAmino: (object: _28.MsgSendAmino) => _28.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _28.MsgMultiSend) => _28.MsgMultiSendAmino;
                    fromAmino: (object: _28.MsgMultiSendAmino) => _28.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _28.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.MsgSend;
                fromPartial(object: Partial<_28.MsgSend>): _28.MsgSend;
                fromAmino(object: _28.MsgSendAmino): _28.MsgSend;
                toAmino(message: _28.MsgSend): _28.MsgSendAmino;
                fromAminoMsg(object: _28.MsgSendAminoMsg): _28.MsgSend;
                toAminoMsg(message: _28.MsgSend): _28.MsgSendAminoMsg;
                fromProtoMsg(message: _28.MsgSendProtoMsg): _28.MsgSend;
                toProto(message: _28.MsgSend): Uint8Array;
                toProtoMsg(message: _28.MsgSend): _28.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _28.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _28.MsgSendResponse;
                fromPartial(_: Partial<_28.MsgSendResponse>): _28.MsgSendResponse;
                fromAmino(_: _28.MsgSendResponseAmino): _28.MsgSendResponse;
                toAmino(_: _28.MsgSendResponse): _28.MsgSendResponseAmino;
                fromAminoMsg(object: _28.MsgSendResponseAminoMsg): _28.MsgSendResponse;
                toAminoMsg(message: _28.MsgSendResponse): _28.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _28.MsgSendResponseProtoMsg): _28.MsgSendResponse;
                toProto(message: _28.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _28.MsgSendResponse): _28.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _28.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.MsgMultiSend;
                fromPartial(object: Partial<_28.MsgMultiSend>): _28.MsgMultiSend;
                fromAmino(object: _28.MsgMultiSendAmino): _28.MsgMultiSend;
                toAmino(message: _28.MsgMultiSend): _28.MsgMultiSendAmino;
                fromAminoMsg(object: _28.MsgMultiSendAminoMsg): _28.MsgMultiSend;
                toAminoMsg(message: _28.MsgMultiSend): _28.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _28.MsgMultiSendProtoMsg): _28.MsgMultiSend;
                toProto(message: _28.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _28.MsgMultiSend): _28.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _28.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _28.MsgMultiSendResponse;
                fromPartial(_: Partial<_28.MsgMultiSendResponse>): _28.MsgMultiSendResponse;
                fromAmino(_: _28.MsgMultiSendResponseAmino): _28.MsgMultiSendResponse;
                toAmino(_: _28.MsgMultiSendResponse): _28.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _28.MsgMultiSendResponseAminoMsg): _28.MsgMultiSendResponse;
                toAminoMsg(message: _28.MsgMultiSendResponse): _28.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _28.MsgMultiSendResponseProtoMsg): _28.MsgMultiSendResponse;
                toProto(message: _28.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _28.MsgMultiSendResponse): _28.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _27.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryBalanceRequest;
                fromPartial(object: Partial<_27.QueryBalanceRequest>): _27.QueryBalanceRequest;
                fromAmino(object: _27.QueryBalanceRequestAmino): _27.QueryBalanceRequest;
                toAmino(message: _27.QueryBalanceRequest): _27.QueryBalanceRequestAmino;
                fromAminoMsg(object: _27.QueryBalanceRequestAminoMsg): _27.QueryBalanceRequest;
                toAminoMsg(message: _27.QueryBalanceRequest): _27.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _27.QueryBalanceRequestProtoMsg): _27.QueryBalanceRequest;
                toProto(message: _27.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _27.QueryBalanceRequest): _27.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _27.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryBalanceResponse;
                fromPartial(object: Partial<_27.QueryBalanceResponse>): _27.QueryBalanceResponse;
                fromAmino(object: _27.QueryBalanceResponseAmino): _27.QueryBalanceResponse;
                toAmino(message: _27.QueryBalanceResponse): _27.QueryBalanceResponseAmino;
                fromAminoMsg(object: _27.QueryBalanceResponseAminoMsg): _27.QueryBalanceResponse;
                toAminoMsg(message: _27.QueryBalanceResponse): _27.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _27.QueryBalanceResponseProtoMsg): _27.QueryBalanceResponse;
                toProto(message: _27.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _27.QueryBalanceResponse): _27.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _27.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryAllBalancesRequest;
                fromPartial(object: Partial<_27.QueryAllBalancesRequest>): _27.QueryAllBalancesRequest;
                fromAmino(object: _27.QueryAllBalancesRequestAmino): _27.QueryAllBalancesRequest;
                toAmino(message: _27.QueryAllBalancesRequest): _27.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _27.QueryAllBalancesRequestAminoMsg): _27.QueryAllBalancesRequest;
                toAminoMsg(message: _27.QueryAllBalancesRequest): _27.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _27.QueryAllBalancesRequestProtoMsg): _27.QueryAllBalancesRequest;
                toProto(message: _27.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _27.QueryAllBalancesRequest): _27.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _27.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryAllBalancesResponse;
                fromPartial(object: Partial<_27.QueryAllBalancesResponse>): _27.QueryAllBalancesResponse;
                fromAmino(object: _27.QueryAllBalancesResponseAmino): _27.QueryAllBalancesResponse;
                toAmino(message: _27.QueryAllBalancesResponse): _27.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _27.QueryAllBalancesResponseAminoMsg): _27.QueryAllBalancesResponse;
                toAminoMsg(message: _27.QueryAllBalancesResponse): _27.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _27.QueryAllBalancesResponseProtoMsg): _27.QueryAllBalancesResponse;
                toProto(message: _27.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _27.QueryAllBalancesResponse): _27.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _27.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_27.QuerySpendableBalancesRequest>): _27.QuerySpendableBalancesRequest;
                fromAmino(object: _27.QuerySpendableBalancesRequestAmino): _27.QuerySpendableBalancesRequest;
                toAmino(message: _27.QuerySpendableBalancesRequest): _27.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _27.QuerySpendableBalancesRequestAminoMsg): _27.QuerySpendableBalancesRequest;
                toAminoMsg(message: _27.QuerySpendableBalancesRequest): _27.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _27.QuerySpendableBalancesRequestProtoMsg): _27.QuerySpendableBalancesRequest;
                toProto(message: _27.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _27.QuerySpendableBalancesRequest): _27.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _27.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_27.QuerySpendableBalancesResponse>): _27.QuerySpendableBalancesResponse;
                fromAmino(object: _27.QuerySpendableBalancesResponseAmino): _27.QuerySpendableBalancesResponse;
                toAmino(message: _27.QuerySpendableBalancesResponse): _27.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _27.QuerySpendableBalancesResponseAminoMsg): _27.QuerySpendableBalancesResponse;
                toAminoMsg(message: _27.QuerySpendableBalancesResponse): _27.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _27.QuerySpendableBalancesResponseProtoMsg): _27.QuerySpendableBalancesResponse;
                toProto(message: _27.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _27.QuerySpendableBalancesResponse): _27.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _27.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_27.QueryTotalSupplyRequest>): _27.QueryTotalSupplyRequest;
                fromAmino(object: _27.QueryTotalSupplyRequestAmino): _27.QueryTotalSupplyRequest;
                toAmino(message: _27.QueryTotalSupplyRequest): _27.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _27.QueryTotalSupplyRequestAminoMsg): _27.QueryTotalSupplyRequest;
                toAminoMsg(message: _27.QueryTotalSupplyRequest): _27.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _27.QueryTotalSupplyRequestProtoMsg): _27.QueryTotalSupplyRequest;
                toProto(message: _27.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _27.QueryTotalSupplyRequest): _27.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _27.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_27.QueryTotalSupplyResponse>): _27.QueryTotalSupplyResponse;
                fromAmino(object: _27.QueryTotalSupplyResponseAmino): _27.QueryTotalSupplyResponse;
                toAmino(message: _27.QueryTotalSupplyResponse): _27.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _27.QueryTotalSupplyResponseAminoMsg): _27.QueryTotalSupplyResponse;
                toAminoMsg(message: _27.QueryTotalSupplyResponse): _27.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _27.QueryTotalSupplyResponseProtoMsg): _27.QueryTotalSupplyResponse;
                toProto(message: _27.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _27.QueryTotalSupplyResponse): _27.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _27.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QuerySupplyOfRequest;
                fromPartial(object: Partial<_27.QuerySupplyOfRequest>): _27.QuerySupplyOfRequest;
                fromAmino(object: _27.QuerySupplyOfRequestAmino): _27.QuerySupplyOfRequest;
                toAmino(message: _27.QuerySupplyOfRequest): _27.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _27.QuerySupplyOfRequestAminoMsg): _27.QuerySupplyOfRequest;
                toAminoMsg(message: _27.QuerySupplyOfRequest): _27.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _27.QuerySupplyOfRequestProtoMsg): _27.QuerySupplyOfRequest;
                toProto(message: _27.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _27.QuerySupplyOfRequest): _27.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _27.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QuerySupplyOfResponse;
                fromPartial(object: Partial<_27.QuerySupplyOfResponse>): _27.QuerySupplyOfResponse;
                fromAmino(object: _27.QuerySupplyOfResponseAmino): _27.QuerySupplyOfResponse;
                toAmino(message: _27.QuerySupplyOfResponse): _27.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _27.QuerySupplyOfResponseAminoMsg): _27.QuerySupplyOfResponse;
                toAminoMsg(message: _27.QuerySupplyOfResponse): _27.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _27.QuerySupplyOfResponseProtoMsg): _27.QuerySupplyOfResponse;
                toProto(message: _27.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _27.QuerySupplyOfResponse): _27.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _27.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _27.QueryParamsRequest;
                fromPartial(_: Partial<_27.QueryParamsRequest>): _27.QueryParamsRequest;
                fromAmino(_: _27.QueryParamsRequestAmino): _27.QueryParamsRequest;
                toAmino(_: _27.QueryParamsRequest): _27.QueryParamsRequestAmino;
                fromAminoMsg(object: _27.QueryParamsRequestAminoMsg): _27.QueryParamsRequest;
                toAminoMsg(message: _27.QueryParamsRequest): _27.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _27.QueryParamsRequestProtoMsg): _27.QueryParamsRequest;
                toProto(message: _27.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _27.QueryParamsRequest): _27.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _27.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryParamsResponse;
                fromPartial(object: Partial<_27.QueryParamsResponse>): _27.QueryParamsResponse;
                fromAmino(object: _27.QueryParamsResponseAmino): _27.QueryParamsResponse;
                toAmino(message: _27.QueryParamsResponse): _27.QueryParamsResponseAmino;
                fromAminoMsg(object: _27.QueryParamsResponseAminoMsg): _27.QueryParamsResponse;
                toAminoMsg(message: _27.QueryParamsResponse): _27.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _27.QueryParamsResponseProtoMsg): _27.QueryParamsResponse;
                toProto(message: _27.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _27.QueryParamsResponse): _27.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _27.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_27.QueryDenomsMetadataRequest>): _27.QueryDenomsMetadataRequest;
                fromAmino(object: _27.QueryDenomsMetadataRequestAmino): _27.QueryDenomsMetadataRequest;
                toAmino(message: _27.QueryDenomsMetadataRequest): _27.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _27.QueryDenomsMetadataRequestAminoMsg): _27.QueryDenomsMetadataRequest;
                toAminoMsg(message: _27.QueryDenomsMetadataRequest): _27.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _27.QueryDenomsMetadataRequestProtoMsg): _27.QueryDenomsMetadataRequest;
                toProto(message: _27.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _27.QueryDenomsMetadataRequest): _27.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _27.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_27.QueryDenomsMetadataResponse>): _27.QueryDenomsMetadataResponse;
                fromAmino(object: _27.QueryDenomsMetadataResponseAmino): _27.QueryDenomsMetadataResponse;
                toAmino(message: _27.QueryDenomsMetadataResponse): _27.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _27.QueryDenomsMetadataResponseAminoMsg): _27.QueryDenomsMetadataResponse;
                toAminoMsg(message: _27.QueryDenomsMetadataResponse): _27.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _27.QueryDenomsMetadataResponseProtoMsg): _27.QueryDenomsMetadataResponse;
                toProto(message: _27.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _27.QueryDenomsMetadataResponse): _27.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _27.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_27.QueryDenomMetadataRequest>): _27.QueryDenomMetadataRequest;
                fromAmino(object: _27.QueryDenomMetadataRequestAmino): _27.QueryDenomMetadataRequest;
                toAmino(message: _27.QueryDenomMetadataRequest): _27.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _27.QueryDenomMetadataRequestAminoMsg): _27.QueryDenomMetadataRequest;
                toAminoMsg(message: _27.QueryDenomMetadataRequest): _27.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _27.QueryDenomMetadataRequestProtoMsg): _27.QueryDenomMetadataRequest;
                toProto(message: _27.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _27.QueryDenomMetadataRequest): _27.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _27.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_27.QueryDenomMetadataResponse>): _27.QueryDenomMetadataResponse;
                fromAmino(object: _27.QueryDenomMetadataResponseAmino): _27.QueryDenomMetadataResponse;
                toAmino(message: _27.QueryDenomMetadataResponse): _27.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _27.QueryDenomMetadataResponseAminoMsg): _27.QueryDenomMetadataResponse;
                toAminoMsg(message: _27.QueryDenomMetadataResponse): _27.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _27.QueryDenomMetadataResponseProtoMsg): _27.QueryDenomMetadataResponse;
                toProto(message: _27.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _27.QueryDenomMetadataResponse): _27.QueryDenomMetadataResponseProtoMsg;
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
            Balance: {
                typeUrl: string;
                encode(message: _26.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.Balance;
                fromPartial(object: Partial<_26.Balance>): _26.Balance;
                fromAmino(object: _26.BalanceAmino): _26.Balance;
                toAmino(message: _26.Balance): _26.BalanceAmino;
                fromAminoMsg(object: _26.BalanceAminoMsg): _26.Balance;
                toAminoMsg(message: _26.Balance): _26.BalanceAminoMsg;
                fromProtoMsg(message: _26.BalanceProtoMsg): _26.Balance;
                toProto(message: _26.Balance): Uint8Array;
                toProtoMsg(message: _26.Balance): _26.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _25.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.Params;
                fromPartial(object: Partial<_25.Params>): _25.Params;
                fromAmino(object: _25.ParamsAmino): _25.Params;
                toAmino(message: _25.Params): _25.ParamsAmino;
                fromAminoMsg(object: _25.ParamsAminoMsg): _25.Params;
                toAminoMsg(message: _25.Params): _25.ParamsAminoMsg;
                fromProtoMsg(message: _25.ParamsProtoMsg): _25.Params;
                toProto(message: _25.Params): Uint8Array;
                toProtoMsg(message: _25.Params): _25.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _25.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.SendEnabled;
                fromPartial(object: Partial<_25.SendEnabled>): _25.SendEnabled;
                fromAmino(object: _25.SendEnabledAmino): _25.SendEnabled;
                toAmino(message: _25.SendEnabled): _25.SendEnabledAmino;
                fromAminoMsg(object: _25.SendEnabledAminoMsg): _25.SendEnabled;
                toAminoMsg(message: _25.SendEnabled): _25.SendEnabledAminoMsg;
                fromProtoMsg(message: _25.SendEnabledProtoMsg): _25.SendEnabled;
                toProto(message: _25.SendEnabled): Uint8Array;
                toProtoMsg(message: _25.SendEnabled): _25.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _25.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.Input;
                fromPartial(object: Partial<_25.Input>): _25.Input;
                fromAmino(object: _25.InputAmino): _25.Input;
                toAmino(message: _25.Input): _25.InputAmino;
                fromAminoMsg(object: _25.InputAminoMsg): _25.Input;
                toAminoMsg(message: _25.Input): _25.InputAminoMsg;
                fromProtoMsg(message: _25.InputProtoMsg): _25.Input;
                toProto(message: _25.Input): Uint8Array;
                toProtoMsg(message: _25.Input): _25.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _25.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.Output;
                fromPartial(object: Partial<_25.Output>): _25.Output;
                fromAmino(object: _25.OutputAmino): _25.Output;
                toAmino(message: _25.Output): _25.OutputAmino;
                fromAminoMsg(object: _25.OutputAminoMsg): _25.Output;
                toAminoMsg(message: _25.Output): _25.OutputAminoMsg;
                fromProtoMsg(message: _25.OutputProtoMsg): _25.Output;
                toProto(message: _25.Output): Uint8Array;
                toProtoMsg(message: _25.Output): _25.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _25.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.Supply;
                fromPartial(object: Partial<_25.Supply>): _25.Supply;
                fromAmino(object: _25.SupplyAmino): _25.Supply;
                toAmino(message: _25.Supply): _25.SupplyAmino;
                fromAminoMsg(object: _25.SupplyAminoMsg): _25.Supply;
                toAminoMsg(message: _25.Supply): _25.SupplyAminoMsg;
                fromProtoMsg(message: _25.SupplyProtoMsg): _25.Supply;
                toProto(message: _25.Supply): Uint8Array;
                toProtoMsg(message: _25.Supply): _25.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _25.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.DenomUnit;
                fromPartial(object: Partial<_25.DenomUnit>): _25.DenomUnit;
                fromAmino(object: _25.DenomUnitAmino): _25.DenomUnit;
                toAmino(message: _25.DenomUnit): _25.DenomUnitAmino;
                fromAminoMsg(object: _25.DenomUnitAminoMsg): _25.DenomUnit;
                toAminoMsg(message: _25.DenomUnit): _25.DenomUnitAminoMsg;
                fromProtoMsg(message: _25.DenomUnitProtoMsg): _25.DenomUnit;
                toProto(message: _25.DenomUnit): Uint8Array;
                toProtoMsg(message: _25.DenomUnit): _25.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _25.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.Metadata;
                fromPartial(object: Partial<_25.Metadata>): _25.Metadata;
                fromAmino(object: _25.MetadataAmino): _25.Metadata;
                toAmino(message: _25.Metadata): _25.MetadataAmino;
                fromAminoMsg(object: _25.MetadataAminoMsg): _25.Metadata;
                toAminoMsg(message: _25.Metadata): _25.MetadataAminoMsg;
                fromProtoMsg(message: _25.MetadataProtoMsg): _25.Metadata;
                toProto(message: _25.Metadata): Uint8Array;
                toProtoMsg(message: _25.Metadata): _25.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _24.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.SendAuthorization;
                fromPartial(object: Partial<_24.SendAuthorization>): _24.SendAuthorization;
                fromAmino(object: _24.SendAuthorizationAmino): _24.SendAuthorization;
                toAmino(message: _24.SendAuthorization): _24.SendAuthorizationAmino;
                fromAminoMsg(object: _24.SendAuthorizationAminoMsg): _24.SendAuthorization;
                toAminoMsg(message: _24.SendAuthorization): _24.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _24.SendAuthorizationProtoMsg): _24.SendAuthorization;
                toProto(message: _24.SendAuthorization): Uint8Array;
                toProtoMsg(message: _24.SendAuthorization): _24.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _29.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.TxResponse;
                    fromPartial(object: Partial<_29.TxResponse>): _29.TxResponse;
                    fromAmino(object: _29.TxResponseAmino): _29.TxResponse;
                    toAmino(message: _29.TxResponse): _29.TxResponseAmino;
                    fromAminoMsg(object: _29.TxResponseAminoMsg): _29.TxResponse;
                    toAminoMsg(message: _29.TxResponse): _29.TxResponseAminoMsg;
                    fromProtoMsg(message: _29.TxResponseProtoMsg): _29.TxResponse;
                    toProto(message: _29.TxResponse): Uint8Array;
                    toProtoMsg(message: _29.TxResponse): _29.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _29.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.ABCIMessageLog;
                    fromPartial(object: Partial<_29.ABCIMessageLog>): _29.ABCIMessageLog;
                    fromAmino(object: _29.ABCIMessageLogAmino): _29.ABCIMessageLog;
                    toAmino(message: _29.ABCIMessageLog): _29.ABCIMessageLogAmino;
                    fromAminoMsg(object: _29.ABCIMessageLogAminoMsg): _29.ABCIMessageLog;
                    toAminoMsg(message: _29.ABCIMessageLog): _29.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _29.ABCIMessageLogProtoMsg): _29.ABCIMessageLog;
                    toProto(message: _29.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _29.ABCIMessageLog): _29.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _29.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.StringEvent;
                    fromPartial(object: Partial<_29.StringEvent>): _29.StringEvent;
                    fromAmino(object: _29.StringEventAmino): _29.StringEvent;
                    toAmino(message: _29.StringEvent): _29.StringEventAmino;
                    fromAminoMsg(object: _29.StringEventAminoMsg): _29.StringEvent;
                    toAminoMsg(message: _29.StringEvent): _29.StringEventAminoMsg;
                    fromProtoMsg(message: _29.StringEventProtoMsg): _29.StringEvent;
                    toProto(message: _29.StringEvent): Uint8Array;
                    toProtoMsg(message: _29.StringEvent): _29.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _29.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.Attribute;
                    fromPartial(object: Partial<_29.Attribute>): _29.Attribute;
                    fromAmino(object: _29.AttributeAmino): _29.Attribute;
                    toAmino(message: _29.Attribute): _29.AttributeAmino;
                    fromAminoMsg(object: _29.AttributeAminoMsg): _29.Attribute;
                    toAminoMsg(message: _29.Attribute): _29.AttributeAminoMsg;
                    fromProtoMsg(message: _29.AttributeProtoMsg): _29.Attribute;
                    toProto(message: _29.Attribute): Uint8Array;
                    toProtoMsg(message: _29.Attribute): _29.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _29.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.GasInfo;
                    fromPartial(object: Partial<_29.GasInfo>): _29.GasInfo;
                    fromAmino(object: _29.GasInfoAmino): _29.GasInfo;
                    toAmino(message: _29.GasInfo): _29.GasInfoAmino;
                    fromAminoMsg(object: _29.GasInfoAminoMsg): _29.GasInfo;
                    toAminoMsg(message: _29.GasInfo): _29.GasInfoAminoMsg;
                    fromProtoMsg(message: _29.GasInfoProtoMsg): _29.GasInfo;
                    toProto(message: _29.GasInfo): Uint8Array;
                    toProtoMsg(message: _29.GasInfo): _29.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _29.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.Result;
                    fromPartial(object: Partial<_29.Result>): _29.Result;
                    fromAmino(object: _29.ResultAmino): _29.Result;
                    toAmino(message: _29.Result): _29.ResultAmino;
                    fromAminoMsg(object: _29.ResultAminoMsg): _29.Result;
                    toAminoMsg(message: _29.Result): _29.ResultAminoMsg;
                    fromProtoMsg(message: _29.ResultProtoMsg): _29.Result;
                    toProto(message: _29.Result): Uint8Array;
                    toProtoMsg(message: _29.Result): _29.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _29.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.SimulationResponse;
                    fromPartial(object: Partial<_29.SimulationResponse>): _29.SimulationResponse;
                    fromAmino(object: _29.SimulationResponseAmino): _29.SimulationResponse;
                    toAmino(message: _29.SimulationResponse): _29.SimulationResponseAmino;
                    fromAminoMsg(object: _29.SimulationResponseAminoMsg): _29.SimulationResponse;
                    toAminoMsg(message: _29.SimulationResponse): _29.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _29.SimulationResponseProtoMsg): _29.SimulationResponse;
                    toProto(message: _29.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _29.SimulationResponse): _29.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _29.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.MsgData;
                    fromPartial(object: Partial<_29.MsgData>): _29.MsgData;
                    fromAmino(object: _29.MsgDataAmino): _29.MsgData;
                    toAmino(message: _29.MsgData): _29.MsgDataAmino;
                    fromAminoMsg(object: _29.MsgDataAminoMsg): _29.MsgData;
                    toAminoMsg(message: _29.MsgData): _29.MsgDataAminoMsg;
                    fromProtoMsg(message: _29.MsgDataProtoMsg): _29.MsgData;
                    toProto(message: _29.MsgData): Uint8Array;
                    toProtoMsg(message: _29.MsgData): _29.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _29.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.TxMsgData;
                    fromPartial(object: Partial<_29.TxMsgData>): _29.TxMsgData;
                    fromAmino(object: _29.TxMsgDataAmino): _29.TxMsgData;
                    toAmino(message: _29.TxMsgData): _29.TxMsgDataAmino;
                    fromAminoMsg(object: _29.TxMsgDataAminoMsg): _29.TxMsgData;
                    toAminoMsg(message: _29.TxMsgData): _29.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _29.TxMsgDataProtoMsg): _29.TxMsgData;
                    toProto(message: _29.TxMsgData): Uint8Array;
                    toProtoMsg(message: _29.TxMsgData): _29.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _29.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.SearchTxsResult;
                    fromPartial(object: Partial<_29.SearchTxsResult>): _29.SearchTxsResult;
                    fromAmino(object: _29.SearchTxsResultAmino): _29.SearchTxsResult;
                    toAmino(message: _29.SearchTxsResult): _29.SearchTxsResultAmino;
                    fromAminoMsg(object: _29.SearchTxsResultAminoMsg): _29.SearchTxsResult;
                    toAminoMsg(message: _29.SearchTxsResult): _29.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _29.SearchTxsResultProtoMsg): _29.SearchTxsResult;
                    toProto(message: _29.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _29.SearchTxsResult): _29.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _30.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.Pairs;
                    fromPartial(object: Partial<_30.Pairs>): _30.Pairs;
                    fromAmino(object: _30.PairsAmino): _30.Pairs;
                    toAmino(message: _30.Pairs): _30.PairsAmino;
                    fromAminoMsg(object: _30.PairsAminoMsg): _30.Pairs;
                    toAminoMsg(message: _30.Pairs): _30.PairsAminoMsg;
                    fromProtoMsg(message: _30.PairsProtoMsg): _30.Pairs;
                    toProto(message: _30.Pairs): Uint8Array;
                    toProtoMsg(message: _30.Pairs): _30.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _30.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.Pair;
                    fromPartial(object: Partial<_30.Pair>): _30.Pair;
                    fromAmino(object: _30.PairAmino): _30.Pair;
                    toAmino(message: _30.Pair): _30.PairAmino;
                    fromAminoMsg(object: _30.PairAminoMsg): _30.Pair;
                    toAminoMsg(message: _30.Pair): _30.PairAminoMsg;
                    fromProtoMsg(message: _30.PairProtoMsg): _30.Pair;
                    toProto(message: _30.Pair): Uint8Array;
                    toProtoMsg(message: _30.Pair): _30.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _159.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _31.ConfigRequest): Promise<_31.ConfigResponse>;
                };
                LCDQueryClient: typeof _144.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _31.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _31.ConfigRequest;
                    fromPartial(_: Partial<_31.ConfigRequest>): _31.ConfigRequest;
                    fromAmino(_: _31.ConfigRequestAmino): _31.ConfigRequest;
                    toAmino(_: _31.ConfigRequest): _31.ConfigRequestAmino;
                    fromAminoMsg(object: _31.ConfigRequestAminoMsg): _31.ConfigRequest;
                    toAminoMsg(message: _31.ConfigRequest): _31.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _31.ConfigRequestProtoMsg): _31.ConfigRequest;
                    toProto(message: _31.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _31.ConfigRequest): _31.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _31.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.ConfigResponse;
                    fromPartial(object: Partial<_31.ConfigResponse>): _31.ConfigResponse;
                    fromAmino(object: _31.ConfigResponseAmino): _31.ConfigResponse;
                    toAmino(message: _31.ConfigResponse): _31.ConfigResponseAmino;
                    fromAminoMsg(object: _31.ConfigResponseAminoMsg): _31.ConfigResponse;
                    toAminoMsg(message: _31.ConfigResponse): _31.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _31.ConfigResponseProtoMsg): _31.ConfigResponse;
                    toProto(message: _31.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _31.ConfigResponse): _31.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _32.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.PageRequest;
                    fromPartial(object: Partial<_32.PageRequest>): _32.PageRequest;
                    fromAmino(object: _32.PageRequestAmino): _32.PageRequest;
                    toAmino(message: _32.PageRequest): _32.PageRequestAmino;
                    fromAminoMsg(object: _32.PageRequestAminoMsg): _32.PageRequest;
                    toAminoMsg(message: _32.PageRequest): _32.PageRequestAminoMsg;
                    fromProtoMsg(message: _32.PageRequestProtoMsg): _32.PageRequest;
                    toProto(message: _32.PageRequest): Uint8Array;
                    toProtoMsg(message: _32.PageRequest): _32.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _32.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.PageResponse;
                    fromPartial(object: Partial<_32.PageResponse>): _32.PageResponse;
                    fromAmino(object: _32.PageResponseAmino): _32.PageResponse;
                    toAmino(message: _32.PageResponse): _32.PageResponseAmino;
                    fromAminoMsg(object: _32.PageResponseAminoMsg): _32.PageResponse;
                    toAminoMsg(message: _32.PageResponse): _32.PageResponseAminoMsg;
                    fromProtoMsg(message: _32.PageResponseProtoMsg): _32.PageResponse;
                    toProto(message: _32.PageResponse): Uint8Array;
                    toProtoMsg(message: _32.PageResponse): _32.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _33.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _33.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_33.ListAllInterfacesRequest>): _33.ListAllInterfacesRequest;
                    fromAmino(_: _33.ListAllInterfacesRequestAmino): _33.ListAllInterfacesRequest;
                    toAmino(_: _33.ListAllInterfacesRequest): _33.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _33.ListAllInterfacesRequestAminoMsg): _33.ListAllInterfacesRequest;
                    toAminoMsg(message: _33.ListAllInterfacesRequest): _33.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _33.ListAllInterfacesRequestProtoMsg): _33.ListAllInterfacesRequest;
                    toProto(message: _33.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _33.ListAllInterfacesRequest): _33.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _33.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_33.ListAllInterfacesResponse>): _33.ListAllInterfacesResponse;
                    fromAmino(object: _33.ListAllInterfacesResponseAmino): _33.ListAllInterfacesResponse;
                    toAmino(message: _33.ListAllInterfacesResponse): _33.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _33.ListAllInterfacesResponseAminoMsg): _33.ListAllInterfacesResponse;
                    toAminoMsg(message: _33.ListAllInterfacesResponse): _33.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _33.ListAllInterfacesResponseProtoMsg): _33.ListAllInterfacesResponse;
                    toProto(message: _33.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _33.ListAllInterfacesResponse): _33.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _33.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.ListImplementationsRequest;
                    fromPartial(object: Partial<_33.ListImplementationsRequest>): _33.ListImplementationsRequest;
                    fromAmino(object: _33.ListImplementationsRequestAmino): _33.ListImplementationsRequest;
                    toAmino(message: _33.ListImplementationsRequest): _33.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _33.ListImplementationsRequestAminoMsg): _33.ListImplementationsRequest;
                    toAminoMsg(message: _33.ListImplementationsRequest): _33.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _33.ListImplementationsRequestProtoMsg): _33.ListImplementationsRequest;
                    toProto(message: _33.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _33.ListImplementationsRequest): _33.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _33.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.ListImplementationsResponse;
                    fromPartial(object: Partial<_33.ListImplementationsResponse>): _33.ListImplementationsResponse;
                    fromAmino(object: _33.ListImplementationsResponseAmino): _33.ListImplementationsResponse;
                    toAmino(message: _33.ListImplementationsResponse): _33.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _33.ListImplementationsResponseAminoMsg): _33.ListImplementationsResponse;
                    toAminoMsg(message: _33.ListImplementationsResponse): _33.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _33.ListImplementationsResponseProtoMsg): _33.ListImplementationsResponse;
                    toProto(message: _33.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _33.ListImplementationsResponse): _33.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _34.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.AppDescriptor;
                    fromPartial(object: Partial<_34.AppDescriptor>): _34.AppDescriptor;
                    fromAmino(object: _34.AppDescriptorAmino): _34.AppDescriptor;
                    toAmino(message: _34.AppDescriptor): _34.AppDescriptorAmino;
                    fromAminoMsg(object: _34.AppDescriptorAminoMsg): _34.AppDescriptor;
                    toAminoMsg(message: _34.AppDescriptor): _34.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _34.AppDescriptorProtoMsg): _34.AppDescriptor;
                    toProto(message: _34.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _34.AppDescriptor): _34.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _34.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.TxDescriptor;
                    fromPartial(object: Partial<_34.TxDescriptor>): _34.TxDescriptor;
                    fromAmino(object: _34.TxDescriptorAmino): _34.TxDescriptor;
                    toAmino(message: _34.TxDescriptor): _34.TxDescriptorAmino;
                    fromAminoMsg(object: _34.TxDescriptorAminoMsg): _34.TxDescriptor;
                    toAminoMsg(message: _34.TxDescriptor): _34.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _34.TxDescriptorProtoMsg): _34.TxDescriptor;
                    toProto(message: _34.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _34.TxDescriptor): _34.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _34.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.AuthnDescriptor;
                    fromPartial(object: Partial<_34.AuthnDescriptor>): _34.AuthnDescriptor;
                    fromAmino(object: _34.AuthnDescriptorAmino): _34.AuthnDescriptor;
                    toAmino(message: _34.AuthnDescriptor): _34.AuthnDescriptorAmino;
                    fromAminoMsg(object: _34.AuthnDescriptorAminoMsg): _34.AuthnDescriptor;
                    toAminoMsg(message: _34.AuthnDescriptor): _34.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _34.AuthnDescriptorProtoMsg): _34.AuthnDescriptor;
                    toProto(message: _34.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _34.AuthnDescriptor): _34.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _34.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.SigningModeDescriptor;
                    fromPartial(object: Partial<_34.SigningModeDescriptor>): _34.SigningModeDescriptor;
                    fromAmino(object: _34.SigningModeDescriptorAmino): _34.SigningModeDescriptor;
                    toAmino(message: _34.SigningModeDescriptor): _34.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _34.SigningModeDescriptorAminoMsg): _34.SigningModeDescriptor;
                    toAminoMsg(message: _34.SigningModeDescriptor): _34.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _34.SigningModeDescriptorProtoMsg): _34.SigningModeDescriptor;
                    toProto(message: _34.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _34.SigningModeDescriptor): _34.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _34.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.ChainDescriptor;
                    fromPartial(object: Partial<_34.ChainDescriptor>): _34.ChainDescriptor;
                    fromAmino(object: _34.ChainDescriptorAmino): _34.ChainDescriptor;
                    toAmino(message: _34.ChainDescriptor): _34.ChainDescriptorAmino;
                    fromAminoMsg(object: _34.ChainDescriptorAminoMsg): _34.ChainDescriptor;
                    toAminoMsg(message: _34.ChainDescriptor): _34.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _34.ChainDescriptorProtoMsg): _34.ChainDescriptor;
                    toProto(message: _34.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _34.ChainDescriptor): _34.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _34.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.CodecDescriptor;
                    fromPartial(object: Partial<_34.CodecDescriptor>): _34.CodecDescriptor;
                    fromAmino(object: _34.CodecDescriptorAmino): _34.CodecDescriptor;
                    toAmino(message: _34.CodecDescriptor): _34.CodecDescriptorAmino;
                    fromAminoMsg(object: _34.CodecDescriptorAminoMsg): _34.CodecDescriptor;
                    toAminoMsg(message: _34.CodecDescriptor): _34.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _34.CodecDescriptorProtoMsg): _34.CodecDescriptor;
                    toProto(message: _34.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _34.CodecDescriptor): _34.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _34.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.InterfaceDescriptor;
                    fromPartial(object: Partial<_34.InterfaceDescriptor>): _34.InterfaceDescriptor;
                    fromAmino(object: _34.InterfaceDescriptorAmino): _34.InterfaceDescriptor;
                    toAmino(message: _34.InterfaceDescriptor): _34.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _34.InterfaceDescriptorAminoMsg): _34.InterfaceDescriptor;
                    toAminoMsg(message: _34.InterfaceDescriptor): _34.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _34.InterfaceDescriptorProtoMsg): _34.InterfaceDescriptor;
                    toProto(message: _34.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _34.InterfaceDescriptor): _34.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _34.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_34.InterfaceImplementerDescriptor>): _34.InterfaceImplementerDescriptor;
                    fromAmino(object: _34.InterfaceImplementerDescriptorAmino): _34.InterfaceImplementerDescriptor;
                    toAmino(message: _34.InterfaceImplementerDescriptor): _34.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _34.InterfaceImplementerDescriptorAminoMsg): _34.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _34.InterfaceImplementerDescriptor): _34.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _34.InterfaceImplementerDescriptorProtoMsg): _34.InterfaceImplementerDescriptor;
                    toProto(message: _34.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _34.InterfaceImplementerDescriptor): _34.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _34.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_34.InterfaceAcceptingMessageDescriptor>): _34.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _34.InterfaceAcceptingMessageDescriptorAmino): _34.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _34.InterfaceAcceptingMessageDescriptor): _34.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _34.InterfaceAcceptingMessageDescriptorAminoMsg): _34.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _34.InterfaceAcceptingMessageDescriptor): _34.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _34.InterfaceAcceptingMessageDescriptorProtoMsg): _34.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _34.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _34.InterfaceAcceptingMessageDescriptor): _34.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _34.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.ConfigurationDescriptor;
                    fromPartial(object: Partial<_34.ConfigurationDescriptor>): _34.ConfigurationDescriptor;
                    fromAmino(object: _34.ConfigurationDescriptorAmino): _34.ConfigurationDescriptor;
                    toAmino(message: _34.ConfigurationDescriptor): _34.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _34.ConfigurationDescriptorAminoMsg): _34.ConfigurationDescriptor;
                    toAminoMsg(message: _34.ConfigurationDescriptor): _34.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _34.ConfigurationDescriptorProtoMsg): _34.ConfigurationDescriptor;
                    toProto(message: _34.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _34.ConfigurationDescriptor): _34.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _34.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.MsgDescriptor;
                    fromPartial(object: Partial<_34.MsgDescriptor>): _34.MsgDescriptor;
                    fromAmino(object: _34.MsgDescriptorAmino): _34.MsgDescriptor;
                    toAmino(message: _34.MsgDescriptor): _34.MsgDescriptorAmino;
                    fromAminoMsg(object: _34.MsgDescriptorAminoMsg): _34.MsgDescriptor;
                    toAminoMsg(message: _34.MsgDescriptor): _34.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _34.MsgDescriptorProtoMsg): _34.MsgDescriptor;
                    toProto(message: _34.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _34.MsgDescriptor): _34.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _34.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _34.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_34.GetAuthnDescriptorRequest>): _34.GetAuthnDescriptorRequest;
                    fromAmino(_: _34.GetAuthnDescriptorRequestAmino): _34.GetAuthnDescriptorRequest;
                    toAmino(_: _34.GetAuthnDescriptorRequest): _34.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _34.GetAuthnDescriptorRequestAminoMsg): _34.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _34.GetAuthnDescriptorRequest): _34.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _34.GetAuthnDescriptorRequestProtoMsg): _34.GetAuthnDescriptorRequest;
                    toProto(message: _34.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _34.GetAuthnDescriptorRequest): _34.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _34.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_34.GetAuthnDescriptorResponse>): _34.GetAuthnDescriptorResponse;
                    fromAmino(object: _34.GetAuthnDescriptorResponseAmino): _34.GetAuthnDescriptorResponse;
                    toAmino(message: _34.GetAuthnDescriptorResponse): _34.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _34.GetAuthnDescriptorResponseAminoMsg): _34.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _34.GetAuthnDescriptorResponse): _34.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _34.GetAuthnDescriptorResponseProtoMsg): _34.GetAuthnDescriptorResponse;
                    toProto(message: _34.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _34.GetAuthnDescriptorResponse): _34.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _34.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _34.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_34.GetChainDescriptorRequest>): _34.GetChainDescriptorRequest;
                    fromAmino(_: _34.GetChainDescriptorRequestAmino): _34.GetChainDescriptorRequest;
                    toAmino(_: _34.GetChainDescriptorRequest): _34.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _34.GetChainDescriptorRequestAminoMsg): _34.GetChainDescriptorRequest;
                    toAminoMsg(message: _34.GetChainDescriptorRequest): _34.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _34.GetChainDescriptorRequestProtoMsg): _34.GetChainDescriptorRequest;
                    toProto(message: _34.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _34.GetChainDescriptorRequest): _34.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _34.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_34.GetChainDescriptorResponse>): _34.GetChainDescriptorResponse;
                    fromAmino(object: _34.GetChainDescriptorResponseAmino): _34.GetChainDescriptorResponse;
                    toAmino(message: _34.GetChainDescriptorResponse): _34.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _34.GetChainDescriptorResponseAminoMsg): _34.GetChainDescriptorResponse;
                    toAminoMsg(message: _34.GetChainDescriptorResponse): _34.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _34.GetChainDescriptorResponseProtoMsg): _34.GetChainDescriptorResponse;
                    toProto(message: _34.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _34.GetChainDescriptorResponse): _34.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _34.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _34.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_34.GetCodecDescriptorRequest>): _34.GetCodecDescriptorRequest;
                    fromAmino(_: _34.GetCodecDescriptorRequestAmino): _34.GetCodecDescriptorRequest;
                    toAmino(_: _34.GetCodecDescriptorRequest): _34.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _34.GetCodecDescriptorRequestAminoMsg): _34.GetCodecDescriptorRequest;
                    toAminoMsg(message: _34.GetCodecDescriptorRequest): _34.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _34.GetCodecDescriptorRequestProtoMsg): _34.GetCodecDescriptorRequest;
                    toProto(message: _34.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _34.GetCodecDescriptorRequest): _34.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _34.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_34.GetCodecDescriptorResponse>): _34.GetCodecDescriptorResponse;
                    fromAmino(object: _34.GetCodecDescriptorResponseAmino): _34.GetCodecDescriptorResponse;
                    toAmino(message: _34.GetCodecDescriptorResponse): _34.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _34.GetCodecDescriptorResponseAminoMsg): _34.GetCodecDescriptorResponse;
                    toAminoMsg(message: _34.GetCodecDescriptorResponse): _34.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _34.GetCodecDescriptorResponseProtoMsg): _34.GetCodecDescriptorResponse;
                    toProto(message: _34.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _34.GetCodecDescriptorResponse): _34.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _34.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _34.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_34.GetConfigurationDescriptorRequest>): _34.GetConfigurationDescriptorRequest;
                    fromAmino(_: _34.GetConfigurationDescriptorRequestAmino): _34.GetConfigurationDescriptorRequest;
                    toAmino(_: _34.GetConfigurationDescriptorRequest): _34.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _34.GetConfigurationDescriptorRequestAminoMsg): _34.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _34.GetConfigurationDescriptorRequest): _34.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _34.GetConfigurationDescriptorRequestProtoMsg): _34.GetConfigurationDescriptorRequest;
                    toProto(message: _34.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _34.GetConfigurationDescriptorRequest): _34.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _34.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_34.GetConfigurationDescriptorResponse>): _34.GetConfigurationDescriptorResponse;
                    fromAmino(object: _34.GetConfigurationDescriptorResponseAmino): _34.GetConfigurationDescriptorResponse;
                    toAmino(message: _34.GetConfigurationDescriptorResponse): _34.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _34.GetConfigurationDescriptorResponseAminoMsg): _34.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _34.GetConfigurationDescriptorResponse): _34.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _34.GetConfigurationDescriptorResponseProtoMsg): _34.GetConfigurationDescriptorResponse;
                    toProto(message: _34.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _34.GetConfigurationDescriptorResponse): _34.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _34.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _34.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_34.GetQueryServicesDescriptorRequest>): _34.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _34.GetQueryServicesDescriptorRequestAmino): _34.GetQueryServicesDescriptorRequest;
                    toAmino(_: _34.GetQueryServicesDescriptorRequest): _34.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _34.GetQueryServicesDescriptorRequestAminoMsg): _34.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _34.GetQueryServicesDescriptorRequest): _34.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _34.GetQueryServicesDescriptorRequestProtoMsg): _34.GetQueryServicesDescriptorRequest;
                    toProto(message: _34.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _34.GetQueryServicesDescriptorRequest): _34.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _34.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_34.GetQueryServicesDescriptorResponse>): _34.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _34.GetQueryServicesDescriptorResponseAmino): _34.GetQueryServicesDescriptorResponse;
                    toAmino(message: _34.GetQueryServicesDescriptorResponse): _34.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _34.GetQueryServicesDescriptorResponseAminoMsg): _34.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _34.GetQueryServicesDescriptorResponse): _34.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _34.GetQueryServicesDescriptorResponseProtoMsg): _34.GetQueryServicesDescriptorResponse;
                    toProto(message: _34.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _34.GetQueryServicesDescriptorResponse): _34.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _34.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _34.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_34.GetTxDescriptorRequest>): _34.GetTxDescriptorRequest;
                    fromAmino(_: _34.GetTxDescriptorRequestAmino): _34.GetTxDescriptorRequest;
                    toAmino(_: _34.GetTxDescriptorRequest): _34.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _34.GetTxDescriptorRequestAminoMsg): _34.GetTxDescriptorRequest;
                    toAminoMsg(message: _34.GetTxDescriptorRequest): _34.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _34.GetTxDescriptorRequestProtoMsg): _34.GetTxDescriptorRequest;
                    toProto(message: _34.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _34.GetTxDescriptorRequest): _34.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _34.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_34.GetTxDescriptorResponse>): _34.GetTxDescriptorResponse;
                    fromAmino(object: _34.GetTxDescriptorResponseAmino): _34.GetTxDescriptorResponse;
                    toAmino(message: _34.GetTxDescriptorResponse): _34.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _34.GetTxDescriptorResponseAminoMsg): _34.GetTxDescriptorResponse;
                    toAminoMsg(message: _34.GetTxDescriptorResponse): _34.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _34.GetTxDescriptorResponseProtoMsg): _34.GetTxDescriptorResponse;
                    toProto(message: _34.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _34.GetTxDescriptorResponse): _34.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _34.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.QueryServicesDescriptor;
                    fromPartial(object: Partial<_34.QueryServicesDescriptor>): _34.QueryServicesDescriptor;
                    fromAmino(object: _34.QueryServicesDescriptorAmino): _34.QueryServicesDescriptor;
                    toAmino(message: _34.QueryServicesDescriptor): _34.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _34.QueryServicesDescriptorAminoMsg): _34.QueryServicesDescriptor;
                    toAminoMsg(message: _34.QueryServicesDescriptor): _34.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _34.QueryServicesDescriptorProtoMsg): _34.QueryServicesDescriptor;
                    toProto(message: _34.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _34.QueryServicesDescriptor): _34.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _34.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.QueryServiceDescriptor;
                    fromPartial(object: Partial<_34.QueryServiceDescriptor>): _34.QueryServiceDescriptor;
                    fromAmino(object: _34.QueryServiceDescriptorAmino): _34.QueryServiceDescriptor;
                    toAmino(message: _34.QueryServiceDescriptor): _34.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _34.QueryServiceDescriptorAminoMsg): _34.QueryServiceDescriptor;
                    toAminoMsg(message: _34.QueryServiceDescriptor): _34.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _34.QueryServiceDescriptorProtoMsg): _34.QueryServiceDescriptor;
                    toProto(message: _34.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _34.QueryServiceDescriptor): _34.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _34.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.QueryMethodDescriptor;
                    fromPartial(object: Partial<_34.QueryMethodDescriptor>): _34.QueryMethodDescriptor;
                    fromAmino(object: _34.QueryMethodDescriptorAmino): _34.QueryMethodDescriptor;
                    toAmino(message: _34.QueryMethodDescriptor): _34.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _34.QueryMethodDescriptorAminoMsg): _34.QueryMethodDescriptor;
                    toAminoMsg(message: _34.QueryMethodDescriptor): _34.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _34.QueryMethodDescriptorProtoMsg): _34.QueryMethodDescriptor;
                    toProto(message: _34.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _34.QueryMethodDescriptor): _34.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _35.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.Snapshot;
                    fromPartial(object: Partial<_35.Snapshot>): _35.Snapshot;
                    fromAmino(object: _35.SnapshotAmino): _35.Snapshot;
                    toAmino(message: _35.Snapshot): _35.SnapshotAmino;
                    fromAminoMsg(object: _35.SnapshotAminoMsg): _35.Snapshot;
                    toAminoMsg(message: _35.Snapshot): _35.SnapshotAminoMsg;
                    fromProtoMsg(message: _35.SnapshotProtoMsg): _35.Snapshot;
                    toProto(message: _35.Snapshot): Uint8Array;
                    toProtoMsg(message: _35.Snapshot): _35.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _35.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.Metadata;
                    fromPartial(object: Partial<_35.Metadata>): _35.Metadata;
                    fromAmino(object: _35.MetadataAmino): _35.Metadata;
                    toAmino(message: _35.Metadata): _35.MetadataAmino;
                    fromAminoMsg(object: _35.MetadataAminoMsg): _35.Metadata;
                    toAminoMsg(message: _35.Metadata): _35.MetadataAminoMsg;
                    fromProtoMsg(message: _35.MetadataProtoMsg): _35.Metadata;
                    toProto(message: _35.Metadata): Uint8Array;
                    toProtoMsg(message: _35.Metadata): _35.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _35.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.SnapshotItem;
                    fromPartial(object: Partial<_35.SnapshotItem>): _35.SnapshotItem;
                    fromAmino(object: _35.SnapshotItemAmino): _35.SnapshotItem;
                    toAmino(message: _35.SnapshotItem): _35.SnapshotItemAmino;
                    fromAminoMsg(object: _35.SnapshotItemAminoMsg): _35.SnapshotItem;
                    toAminoMsg(message: _35.SnapshotItem): _35.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _35.SnapshotItemProtoMsg): _35.SnapshotItem;
                    toProto(message: _35.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _35.SnapshotItem): _35.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _35.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.SnapshotStoreItem;
                    fromPartial(object: Partial<_35.SnapshotStoreItem>): _35.SnapshotStoreItem;
                    fromAmino(object: _35.SnapshotStoreItemAmino): _35.SnapshotStoreItem;
                    toAmino(message: _35.SnapshotStoreItem): _35.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _35.SnapshotStoreItemAminoMsg): _35.SnapshotStoreItem;
                    toAminoMsg(message: _35.SnapshotStoreItem): _35.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _35.SnapshotStoreItemProtoMsg): _35.SnapshotStoreItem;
                    toProto(message: _35.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _35.SnapshotStoreItem): _35.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _35.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.SnapshotIAVLItem;
                    fromPartial(object: Partial<_35.SnapshotIAVLItem>): _35.SnapshotIAVLItem;
                    fromAmino(object: _35.SnapshotIAVLItemAmino): _35.SnapshotIAVLItem;
                    toAmino(message: _35.SnapshotIAVLItem): _35.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _35.SnapshotIAVLItemAminoMsg): _35.SnapshotIAVLItem;
                    toAminoMsg(message: _35.SnapshotIAVLItem): _35.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _35.SnapshotIAVLItemProtoMsg): _35.SnapshotIAVLItem;
                    toProto(message: _35.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _35.SnapshotIAVLItem): _35.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _35.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_35.SnapshotExtensionMeta>): _35.SnapshotExtensionMeta;
                    fromAmino(object: _35.SnapshotExtensionMetaAmino): _35.SnapshotExtensionMeta;
                    toAmino(message: _35.SnapshotExtensionMeta): _35.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _35.SnapshotExtensionMetaAminoMsg): _35.SnapshotExtensionMeta;
                    toAminoMsg(message: _35.SnapshotExtensionMeta): _35.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _35.SnapshotExtensionMetaProtoMsg): _35.SnapshotExtensionMeta;
                    toProto(message: _35.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _35.SnapshotExtensionMeta): _35.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _35.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_35.SnapshotExtensionPayload>): _35.SnapshotExtensionPayload;
                    fromAmino(object: _35.SnapshotExtensionPayloadAmino): _35.SnapshotExtensionPayload;
                    toAmino(message: _35.SnapshotExtensionPayload): _35.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _35.SnapshotExtensionPayloadAminoMsg): _35.SnapshotExtensionPayload;
                    toAminoMsg(message: _35.SnapshotExtensionPayload): _35.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _35.SnapshotExtensionPayloadProtoMsg): _35.SnapshotExtensionPayload;
                    toProto(message: _35.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _35.SnapshotExtensionPayload): _35.SnapshotExtensionPayloadProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _37.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.StoreKVPair;
                    fromPartial(object: Partial<_37.StoreKVPair>): _37.StoreKVPair;
                    fromAmino(object: _37.StoreKVPairAmino): _37.StoreKVPair;
                    toAmino(message: _37.StoreKVPair): _37.StoreKVPairAmino;
                    fromAminoMsg(object: _37.StoreKVPairAminoMsg): _37.StoreKVPair;
                    toAminoMsg(message: _37.StoreKVPair): _37.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _37.StoreKVPairProtoMsg): _37.StoreKVPair;
                    toProto(message: _37.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _37.StoreKVPair): _37.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _37.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.BlockMetadata;
                    fromPartial(object: Partial<_37.BlockMetadata>): _37.BlockMetadata;
                    fromAmino(object: _37.BlockMetadataAmino): _37.BlockMetadata;
                    toAmino(message: _37.BlockMetadata): _37.BlockMetadataAmino;
                    fromAminoMsg(object: _37.BlockMetadataAminoMsg): _37.BlockMetadata;
                    toAminoMsg(message: _37.BlockMetadata): _37.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _37.BlockMetadataProtoMsg): _37.BlockMetadata;
                    toProto(message: _37.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _37.BlockMetadata): _37.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _37.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_37.BlockMetadata_DeliverTx>): _37.BlockMetadata_DeliverTx;
                    fromAmino(object: _37.BlockMetadata_DeliverTxAmino): _37.BlockMetadata_DeliverTx;
                    toAmino(message: _37.BlockMetadata_DeliverTx): _37.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _37.BlockMetadata_DeliverTxAminoMsg): _37.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _37.BlockMetadata_DeliverTx): _37.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _37.BlockMetadata_DeliverTxProtoMsg): _37.BlockMetadata_DeliverTx;
                    toProto(message: _37.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _37.BlockMetadata_DeliverTx): _37.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _36.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.CommitInfo;
                    fromPartial(object: Partial<_36.CommitInfo>): _36.CommitInfo;
                    fromAmino(object: _36.CommitInfoAmino): _36.CommitInfo;
                    toAmino(message: _36.CommitInfo): _36.CommitInfoAmino;
                    fromAminoMsg(object: _36.CommitInfoAminoMsg): _36.CommitInfo;
                    toAminoMsg(message: _36.CommitInfo): _36.CommitInfoAminoMsg;
                    fromProtoMsg(message: _36.CommitInfoProtoMsg): _36.CommitInfo;
                    toProto(message: _36.CommitInfo): Uint8Array;
                    toProtoMsg(message: _36.CommitInfo): _36.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _36.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.StoreInfo;
                    fromPartial(object: Partial<_36.StoreInfo>): _36.StoreInfo;
                    fromAmino(object: _36.StoreInfoAmino): _36.StoreInfo;
                    toAmino(message: _36.StoreInfo): _36.StoreInfoAmino;
                    fromAminoMsg(object: _36.StoreInfoAminoMsg): _36.StoreInfo;
                    toAminoMsg(message: _36.StoreInfo): _36.StoreInfoAminoMsg;
                    fromProtoMsg(message: _36.StoreInfoProtoMsg): _36.StoreInfo;
                    toProto(message: _36.StoreInfo): Uint8Array;
                    toProtoMsg(message: _36.StoreInfo): _36.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _36.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.CommitID;
                    fromPartial(object: Partial<_36.CommitID>): _36.CommitID;
                    fromAmino(object: _36.CommitIDAmino): _36.CommitID;
                    toAmino(message: _36.CommitID): _36.CommitIDAmino;
                    fromAminoMsg(object: _36.CommitIDAminoMsg): _36.CommitID;
                    toAminoMsg(message: _36.CommitID): _36.CommitIDAminoMsg;
                    fromProtoMsg(message: _36.CommitIDProtoMsg): _36.CommitID;
                    toProto(message: _36.CommitID): Uint8Array;
                    toProtoMsg(message: _36.CommitID): _36.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _160.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _38.GetNodeInfoRequest): Promise<_38.GetNodeInfoResponse>;
                    getSyncing(request?: _38.GetSyncingRequest): Promise<_38.GetSyncingResponse>;
                    getLatestBlock(request?: _38.GetLatestBlockRequest): Promise<_38.GetLatestBlockResponse>;
                    getBlockByHeight(request: _38.GetBlockByHeightRequest): Promise<_38.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _38.GetLatestValidatorSetRequest): Promise<_38.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _38.GetValidatorSetByHeightRequest): Promise<_38.GetValidatorSetByHeightResponse>;
                };
                LCDQueryClient: typeof _145.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _38.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_38.GetValidatorSetByHeightRequest>): _38.GetValidatorSetByHeightRequest;
                    fromAmino(object: _38.GetValidatorSetByHeightRequestAmino): _38.GetValidatorSetByHeightRequest;
                    toAmino(message: _38.GetValidatorSetByHeightRequest): _38.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _38.GetValidatorSetByHeightRequestAminoMsg): _38.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _38.GetValidatorSetByHeightRequest): _38.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _38.GetValidatorSetByHeightRequestProtoMsg): _38.GetValidatorSetByHeightRequest;
                    toProto(message: _38.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _38.GetValidatorSetByHeightRequest): _38.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _38.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_38.GetValidatorSetByHeightResponse>): _38.GetValidatorSetByHeightResponse;
                    fromAmino(object: _38.GetValidatorSetByHeightResponseAmino): _38.GetValidatorSetByHeightResponse;
                    toAmino(message: _38.GetValidatorSetByHeightResponse): _38.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _38.GetValidatorSetByHeightResponseAminoMsg): _38.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _38.GetValidatorSetByHeightResponse): _38.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _38.GetValidatorSetByHeightResponseProtoMsg): _38.GetValidatorSetByHeightResponse;
                    toProto(message: _38.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _38.GetValidatorSetByHeightResponse): _38.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _38.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_38.GetLatestValidatorSetRequest>): _38.GetLatestValidatorSetRequest;
                    fromAmino(object: _38.GetLatestValidatorSetRequestAmino): _38.GetLatestValidatorSetRequest;
                    toAmino(message: _38.GetLatestValidatorSetRequest): _38.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _38.GetLatestValidatorSetRequestAminoMsg): _38.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _38.GetLatestValidatorSetRequest): _38.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _38.GetLatestValidatorSetRequestProtoMsg): _38.GetLatestValidatorSetRequest;
                    toProto(message: _38.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _38.GetLatestValidatorSetRequest): _38.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _38.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_38.GetLatestValidatorSetResponse>): _38.GetLatestValidatorSetResponse;
                    fromAmino(object: _38.GetLatestValidatorSetResponseAmino): _38.GetLatestValidatorSetResponse;
                    toAmino(message: _38.GetLatestValidatorSetResponse): _38.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _38.GetLatestValidatorSetResponseAminoMsg): _38.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _38.GetLatestValidatorSetResponse): _38.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _38.GetLatestValidatorSetResponseProtoMsg): _38.GetLatestValidatorSetResponse;
                    toProto(message: _38.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _38.GetLatestValidatorSetResponse): _38.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _38.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.Validator;
                    fromPartial(object: Partial<_38.Validator>): _38.Validator;
                    fromAmino(object: _38.ValidatorAmino): _38.Validator;
                    toAmino(message: _38.Validator): _38.ValidatorAmino;
                    fromAminoMsg(object: _38.ValidatorAminoMsg): _38.Validator;
                    toAminoMsg(message: _38.Validator): _38.ValidatorAminoMsg;
                    fromProtoMsg(message: _38.ValidatorProtoMsg): _38.Validator;
                    toProto(message: _38.Validator): Uint8Array;
                    toProtoMsg(message: _38.Validator): _38.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _38.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_38.GetBlockByHeightRequest>): _38.GetBlockByHeightRequest;
                    fromAmino(object: _38.GetBlockByHeightRequestAmino): _38.GetBlockByHeightRequest;
                    toAmino(message: _38.GetBlockByHeightRequest): _38.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _38.GetBlockByHeightRequestAminoMsg): _38.GetBlockByHeightRequest;
                    toAminoMsg(message: _38.GetBlockByHeightRequest): _38.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _38.GetBlockByHeightRequestProtoMsg): _38.GetBlockByHeightRequest;
                    toProto(message: _38.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _38.GetBlockByHeightRequest): _38.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _38.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_38.GetBlockByHeightResponse>): _38.GetBlockByHeightResponse;
                    fromAmino(object: _38.GetBlockByHeightResponseAmino): _38.GetBlockByHeightResponse;
                    toAmino(message: _38.GetBlockByHeightResponse): _38.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _38.GetBlockByHeightResponseAminoMsg): _38.GetBlockByHeightResponse;
                    toAminoMsg(message: _38.GetBlockByHeightResponse): _38.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _38.GetBlockByHeightResponseProtoMsg): _38.GetBlockByHeightResponse;
                    toProto(message: _38.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _38.GetBlockByHeightResponse): _38.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _38.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _38.GetLatestBlockRequest;
                    fromPartial(_: Partial<_38.GetLatestBlockRequest>): _38.GetLatestBlockRequest;
                    fromAmino(_: _38.GetLatestBlockRequestAmino): _38.GetLatestBlockRequest;
                    toAmino(_: _38.GetLatestBlockRequest): _38.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _38.GetLatestBlockRequestAminoMsg): _38.GetLatestBlockRequest;
                    toAminoMsg(message: _38.GetLatestBlockRequest): _38.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _38.GetLatestBlockRequestProtoMsg): _38.GetLatestBlockRequest;
                    toProto(message: _38.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _38.GetLatestBlockRequest): _38.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _38.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.GetLatestBlockResponse;
                    fromPartial(object: Partial<_38.GetLatestBlockResponse>): _38.GetLatestBlockResponse;
                    fromAmino(object: _38.GetLatestBlockResponseAmino): _38.GetLatestBlockResponse;
                    toAmino(message: _38.GetLatestBlockResponse): _38.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _38.GetLatestBlockResponseAminoMsg): _38.GetLatestBlockResponse;
                    toAminoMsg(message: _38.GetLatestBlockResponse): _38.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _38.GetLatestBlockResponseProtoMsg): _38.GetLatestBlockResponse;
                    toProto(message: _38.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _38.GetLatestBlockResponse): _38.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _38.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _38.GetSyncingRequest;
                    fromPartial(_: Partial<_38.GetSyncingRequest>): _38.GetSyncingRequest;
                    fromAmino(_: _38.GetSyncingRequestAmino): _38.GetSyncingRequest;
                    toAmino(_: _38.GetSyncingRequest): _38.GetSyncingRequestAmino;
                    fromAminoMsg(object: _38.GetSyncingRequestAminoMsg): _38.GetSyncingRequest;
                    toAminoMsg(message: _38.GetSyncingRequest): _38.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _38.GetSyncingRequestProtoMsg): _38.GetSyncingRequest;
                    toProto(message: _38.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _38.GetSyncingRequest): _38.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _38.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.GetSyncingResponse;
                    fromPartial(object: Partial<_38.GetSyncingResponse>): _38.GetSyncingResponse;
                    fromAmino(object: _38.GetSyncingResponseAmino): _38.GetSyncingResponse;
                    toAmino(message: _38.GetSyncingResponse): _38.GetSyncingResponseAmino;
                    fromAminoMsg(object: _38.GetSyncingResponseAminoMsg): _38.GetSyncingResponse;
                    toAminoMsg(message: _38.GetSyncingResponse): _38.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _38.GetSyncingResponseProtoMsg): _38.GetSyncingResponse;
                    toProto(message: _38.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _38.GetSyncingResponse): _38.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _38.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _38.GetNodeInfoRequest;
                    fromPartial(_: Partial<_38.GetNodeInfoRequest>): _38.GetNodeInfoRequest;
                    fromAmino(_: _38.GetNodeInfoRequestAmino): _38.GetNodeInfoRequest;
                    toAmino(_: _38.GetNodeInfoRequest): _38.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _38.GetNodeInfoRequestAminoMsg): _38.GetNodeInfoRequest;
                    toAminoMsg(message: _38.GetNodeInfoRequest): _38.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _38.GetNodeInfoRequestProtoMsg): _38.GetNodeInfoRequest;
                    toProto(message: _38.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _38.GetNodeInfoRequest): _38.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _38.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.GetNodeInfoResponse;
                    fromPartial(object: Partial<_38.GetNodeInfoResponse>): _38.GetNodeInfoResponse;
                    fromAmino(object: _38.GetNodeInfoResponseAmino): _38.GetNodeInfoResponse;
                    toAmino(message: _38.GetNodeInfoResponse): _38.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _38.GetNodeInfoResponseAminoMsg): _38.GetNodeInfoResponse;
                    toAminoMsg(message: _38.GetNodeInfoResponse): _38.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _38.GetNodeInfoResponseProtoMsg): _38.GetNodeInfoResponse;
                    toProto(message: _38.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _38.GetNodeInfoResponse): _38.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _38.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.VersionInfo;
                    fromPartial(object: Partial<_38.VersionInfo>): _38.VersionInfo;
                    fromAmino(object: _38.VersionInfoAmino): _38.VersionInfo;
                    toAmino(message: _38.VersionInfo): _38.VersionInfoAmino;
                    fromAminoMsg(object: _38.VersionInfoAminoMsg): _38.VersionInfo;
                    toAminoMsg(message: _38.VersionInfo): _38.VersionInfoAminoMsg;
                    fromProtoMsg(message: _38.VersionInfoProtoMsg): _38.VersionInfo;
                    toProto(message: _38.VersionInfo): Uint8Array;
                    toProtoMsg(message: _38.VersionInfo): _38.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _38.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.Module;
                    fromPartial(object: Partial<_38.Module>): _38.Module;
                    fromAmino(object: _38.ModuleAmino): _38.Module;
                    toAmino(message: _38.Module): _38.ModuleAmino;
                    fromAminoMsg(object: _38.ModuleAminoMsg): _38.Module;
                    toAminoMsg(message: _38.Module): _38.ModuleAminoMsg;
                    fromProtoMsg(message: _38.ModuleProtoMsg): _38.Module;
                    toProto(message: _38.Module): Uint8Array;
                    toProtoMsg(message: _38.Module): _38.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _40.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.Coin;
                fromPartial(object: Partial<_40.Coin>): _40.Coin;
                fromAmino(object: _40.CoinAmino): _40.Coin;
                toAmino(message: _40.Coin): _40.CoinAmino;
                fromAminoMsg(object: _40.CoinAminoMsg): _40.Coin;
                toAminoMsg(message: _40.Coin): _40.CoinAminoMsg;
                fromProtoMsg(message: _40.CoinProtoMsg): _40.Coin;
                toProto(message: _40.Coin): Uint8Array;
                toProtoMsg(message: _40.Coin): _40.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _40.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.DecCoin;
                fromPartial(object: Partial<_40.DecCoin>): _40.DecCoin;
                fromAmino(object: _40.DecCoinAmino): _40.DecCoin;
                toAmino(message: _40.DecCoin): _40.DecCoinAmino;
                fromAminoMsg(object: _40.DecCoinAminoMsg): _40.DecCoin;
                toAminoMsg(message: _40.DecCoin): _40.DecCoinAminoMsg;
                fromProtoMsg(message: _40.DecCoinProtoMsg): _40.DecCoin;
                toProto(message: _40.DecCoin): Uint8Array;
                toProtoMsg(message: _40.DecCoin): _40.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _40.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.IntProto;
                fromPartial(object: Partial<_40.IntProto>): _40.IntProto;
                fromAmino(object: _40.IntProtoAmino): _40.IntProto;
                toAmino(message: _40.IntProto): _40.IntProtoAmino;
                fromAminoMsg(object: _40.IntProtoAminoMsg): _40.IntProto;
                toAminoMsg(message: _40.IntProto): _40.IntProtoAminoMsg;
                fromProtoMsg(message: _40.IntProtoProtoMsg): _40.IntProto;
                toProto(message: _40.IntProto): Uint8Array;
                toProtoMsg(message: _40.IntProto): _40.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _40.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.DecProto;
                fromPartial(object: Partial<_40.DecProto>): _40.DecProto;
                fromAmino(object: _40.DecProtoAmino): _40.DecProto;
                toAmino(message: _40.DecProto): _40.DecProtoAmino;
                fromAminoMsg(object: _40.DecProtoAminoMsg): _40.DecProto;
                toAminoMsg(message: _40.DecProto): _40.DecProtoAminoMsg;
                fromProtoMsg(message: _40.DecProtoProtoMsg): _40.DecProto;
                toProto(message: _40.DecProto): Uint8Array;
                toProtoMsg(message: _40.DecProto): _40.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _42.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.GenesisOwners;
                fromPartial(object: Partial<_42.GenesisOwners>): _42.GenesisOwners;
                fromAmino(object: _42.GenesisOwnersAmino): _42.GenesisOwners;
                toAmino(message: _42.GenesisOwners): _42.GenesisOwnersAmino;
                fromAminoMsg(object: _42.GenesisOwnersAminoMsg): _42.GenesisOwners;
                toAminoMsg(message: _42.GenesisOwners): _42.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _42.GenesisOwnersProtoMsg): _42.GenesisOwners;
                toProto(message: _42.GenesisOwners): Uint8Array;
                toProtoMsg(message: _42.GenesisOwners): _42.GenesisOwnersProtoMsg;
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
            Capability: {
                typeUrl: string;
                encode(message: _41.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.Capability;
                fromPartial(object: Partial<_41.Capability>): _41.Capability;
                fromAmino(object: _41.CapabilityAmino): _41.Capability;
                toAmino(message: _41.Capability): _41.CapabilityAmino;
                fromAminoMsg(object: _41.CapabilityAminoMsg): _41.Capability;
                toAminoMsg(message: _41.Capability): _41.CapabilityAminoMsg;
                fromProtoMsg(message: _41.CapabilityProtoMsg): _41.Capability;
                toProto(message: _41.Capability): Uint8Array;
                toProtoMsg(message: _41.Capability): _41.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _41.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.Owner;
                fromPartial(object: Partial<_41.Owner>): _41.Owner;
                fromAmino(object: _41.OwnerAmino): _41.Owner;
                toAmino(message: _41.Owner): _41.OwnerAmino;
                fromAminoMsg(object: _41.OwnerAminoMsg): _41.Owner;
                toAminoMsg(message: _41.Owner): _41.OwnerAminoMsg;
                fromProtoMsg(message: _41.OwnerProtoMsg): _41.Owner;
                toProto(message: _41.Owner): Uint8Array;
                toProtoMsg(message: _41.Owner): _41.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _41.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.CapabilityOwners;
                fromPartial(object: Partial<_41.CapabilityOwners>): _41.CapabilityOwners;
                fromAmino(object: _41.CapabilityOwnersAmino): _41.CapabilityOwners;
                toAmino(message: _41.CapabilityOwners): _41.CapabilityOwnersAmino;
                fromAminoMsg(object: _41.CapabilityOwnersAminoMsg): _41.CapabilityOwners;
                toAminoMsg(message: _41.CapabilityOwners): _41.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _41.CapabilityOwnersProtoMsg): _41.CapabilityOwners;
                toProto(message: _41.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _41.CapabilityOwners): _41.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _173.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _44.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _44.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _44.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _44.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _44.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _44.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _44.MsgVerifyInvariant) => _44.MsgVerifyInvariantAmino;
                    fromAmino: (object: _44.MsgVerifyInvariantAmino) => _44.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _44.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.MsgVerifyInvariant;
                fromPartial(object: Partial<_44.MsgVerifyInvariant>): _44.MsgVerifyInvariant;
                fromAmino(object: _44.MsgVerifyInvariantAmino): _44.MsgVerifyInvariant;
                toAmino(message: _44.MsgVerifyInvariant): _44.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _44.MsgVerifyInvariantAminoMsg): _44.MsgVerifyInvariant;
                toAminoMsg(message: _44.MsgVerifyInvariant): _44.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _44.MsgVerifyInvariantProtoMsg): _44.MsgVerifyInvariant;
                toProto(message: _44.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _44.MsgVerifyInvariant): _44.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _44.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _44.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_44.MsgVerifyInvariantResponse>): _44.MsgVerifyInvariantResponse;
                fromAmino(_: _44.MsgVerifyInvariantResponseAmino): _44.MsgVerifyInvariantResponse;
                toAmino(_: _44.MsgVerifyInvariantResponse): _44.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _44.MsgVerifyInvariantResponseAminoMsg): _44.MsgVerifyInvariantResponse;
                toAminoMsg(message: _44.MsgVerifyInvariantResponse): _44.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _44.MsgVerifyInvariantResponseProtoMsg): _44.MsgVerifyInvariantResponse;
                toProto(message: _44.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _44.MsgVerifyInvariantResponse): _44.MsgVerifyInvariantResponseProtoMsg;
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
        };
    }
    namespace crypto {
        const ed25519: {
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
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _46.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.LegacyAminoPubKey;
                fromPartial(object: Partial<_46.LegacyAminoPubKey>): _46.LegacyAminoPubKey;
                fromAmino(object: _46.LegacyAminoPubKeyAmino): _46.LegacyAminoPubKey;
                toAmino(message: _46.LegacyAminoPubKey): _46.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _46.LegacyAminoPubKeyAminoMsg): _46.LegacyAminoPubKey;
                toAminoMsg(message: _46.LegacyAminoPubKey): _46.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _46.LegacyAminoPubKeyProtoMsg): _46.LegacyAminoPubKey;
                toProto(message: _46.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _46.LegacyAminoPubKey): _46.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _47.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.PubKey;
                fromPartial(object: Partial<_47.PubKey>): _47.PubKey;
                fromAmino(object: _47.PubKeyAmino): _47.PubKey;
                toAmino(message: _47.PubKey): _47.PubKeyAmino;
                fromAminoMsg(object: _47.PubKeyAminoMsg): _47.PubKey;
                toAminoMsg(message: _47.PubKey): _47.PubKeyAminoMsg;
                fromProtoMsg(message: _47.PubKeyProtoMsg): _47.PubKey;
                toProto(message: _47.PubKey): Uint8Array;
                toProtoMsg(message: _47.PubKey): _47.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _47.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.PrivKey;
                fromPartial(object: Partial<_47.PrivKey>): _47.PrivKey;
                fromAmino(object: _47.PrivKeyAmino): _47.PrivKey;
                toAmino(message: _47.PrivKey): _47.PrivKeyAmino;
                fromAminoMsg(object: _47.PrivKeyAminoMsg): _47.PrivKey;
                toAminoMsg(message: _47.PrivKey): _47.PrivKeyAminoMsg;
                fromProtoMsg(message: _47.PrivKeyProtoMsg): _47.PrivKey;
                toProto(message: _47.PrivKey): Uint8Array;
                toProtoMsg(message: _47.PrivKey): _47.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _48.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.PubKey;
                fromPartial(object: Partial<_48.PubKey>): _48.PubKey;
                fromAmino(object: _48.PubKeyAmino): _48.PubKey;
                toAmino(message: _48.PubKey): _48.PubKeyAmino;
                fromAminoMsg(object: _48.PubKeyAminoMsg): _48.PubKey;
                toAminoMsg(message: _48.PubKey): _48.PubKeyAminoMsg;
                fromProtoMsg(message: _48.PubKeyProtoMsg): _48.PubKey;
                toProto(message: _48.PubKey): Uint8Array;
                toProtoMsg(message: _48.PubKey): _48.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _48.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.PrivKey;
                fromPartial(object: Partial<_48.PrivKey>): _48.PrivKey;
                fromAmino(object: _48.PrivKeyAmino): _48.PrivKey;
                toAmino(message: _48.PrivKey): _48.PrivKeyAmino;
                fromAminoMsg(object: _48.PrivKeyAminoMsg): _48.PrivKey;
                toAminoMsg(message: _48.PrivKey): _48.PrivKeyAminoMsg;
                fromProtoMsg(message: _48.PrivKeyProtoMsg): _48.PrivKey;
                toProto(message: _48.PrivKey): Uint8Array;
                toProtoMsg(message: _48.PrivKey): _48.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _174.MsgClientImpl;
            QueryClientImpl: typeof _161.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _51.QueryParamsRequest): Promise<_51.QueryParamsResponse>;
                validatorOutstandingRewards(request: _51.QueryValidatorOutstandingRewardsRequest): Promise<_51.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _51.QueryValidatorCommissionRequest): Promise<_51.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _51.QueryValidatorSlashesRequest): Promise<_51.QueryValidatorSlashesResponse>;
                delegationRewards(request: _51.QueryDelegationRewardsRequest): Promise<_51.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _51.QueryDelegationTotalRewardsRequest): Promise<_51.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _51.QueryDelegatorValidatorsRequest): Promise<_51.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _51.QueryDelegatorWithdrawAddressRequest): Promise<_51.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _51.QueryCommunityPoolRequest): Promise<_51.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _146.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _52.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _52.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _52.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _52.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _52.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _52.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _52.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _52.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _52.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _52.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _52.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _52.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _52.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _52.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _52.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _52.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _52.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _52.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _52.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _52.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _52.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _52.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _52.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _52.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _52.MsgSetWithdrawAddress) => _52.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _52.MsgSetWithdrawAddressAmino) => _52.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _52.MsgWithdrawDelegatorReward) => _52.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _52.MsgWithdrawDelegatorRewardAmino) => _52.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _52.MsgWithdrawValidatorCommission) => _52.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _52.MsgWithdrawValidatorCommissionAmino) => _52.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _52.MsgFundCommunityPool) => _52.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _52.MsgFundCommunityPoolAmino) => _52.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _52.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_52.MsgSetWithdrawAddress>): _52.MsgSetWithdrawAddress;
                fromAmino(object: _52.MsgSetWithdrawAddressAmino): _52.MsgSetWithdrawAddress;
                toAmino(message: _52.MsgSetWithdrawAddress): _52.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _52.MsgSetWithdrawAddressAminoMsg): _52.MsgSetWithdrawAddress;
                toAminoMsg(message: _52.MsgSetWithdrawAddress): _52.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _52.MsgSetWithdrawAddressProtoMsg): _52.MsgSetWithdrawAddress;
                toProto(message: _52.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _52.MsgSetWithdrawAddress): _52.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _52.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _52.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_52.MsgSetWithdrawAddressResponse>): _52.MsgSetWithdrawAddressResponse;
                fromAmino(_: _52.MsgSetWithdrawAddressResponseAmino): _52.MsgSetWithdrawAddressResponse;
                toAmino(_: _52.MsgSetWithdrawAddressResponse): _52.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _52.MsgSetWithdrawAddressResponseAminoMsg): _52.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _52.MsgSetWithdrawAddressResponse): _52.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _52.MsgSetWithdrawAddressResponseProtoMsg): _52.MsgSetWithdrawAddressResponse;
                toProto(message: _52.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _52.MsgSetWithdrawAddressResponse): _52.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _52.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_52.MsgWithdrawDelegatorReward>): _52.MsgWithdrawDelegatorReward;
                fromAmino(object: _52.MsgWithdrawDelegatorRewardAmino): _52.MsgWithdrawDelegatorReward;
                toAmino(message: _52.MsgWithdrawDelegatorReward): _52.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _52.MsgWithdrawDelegatorRewardAminoMsg): _52.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _52.MsgWithdrawDelegatorReward): _52.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _52.MsgWithdrawDelegatorRewardProtoMsg): _52.MsgWithdrawDelegatorReward;
                toProto(message: _52.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _52.MsgWithdrawDelegatorReward): _52.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(_: _52.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _52.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_52.MsgWithdrawDelegatorRewardResponse>): _52.MsgWithdrawDelegatorRewardResponse;
                fromAmino(_: _52.MsgWithdrawDelegatorRewardResponseAmino): _52.MsgWithdrawDelegatorRewardResponse;
                toAmino(_: _52.MsgWithdrawDelegatorRewardResponse): _52.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _52.MsgWithdrawDelegatorRewardResponseAminoMsg): _52.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _52.MsgWithdrawDelegatorRewardResponse): _52.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _52.MsgWithdrawDelegatorRewardResponseProtoMsg): _52.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _52.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _52.MsgWithdrawDelegatorRewardResponse): _52.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _52.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_52.MsgWithdrawValidatorCommission>): _52.MsgWithdrawValidatorCommission;
                fromAmino(object: _52.MsgWithdrawValidatorCommissionAmino): _52.MsgWithdrawValidatorCommission;
                toAmino(message: _52.MsgWithdrawValidatorCommission): _52.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _52.MsgWithdrawValidatorCommissionAminoMsg): _52.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _52.MsgWithdrawValidatorCommission): _52.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _52.MsgWithdrawValidatorCommissionProtoMsg): _52.MsgWithdrawValidatorCommission;
                toProto(message: _52.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _52.MsgWithdrawValidatorCommission): _52.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(_: _52.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _52.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_52.MsgWithdrawValidatorCommissionResponse>): _52.MsgWithdrawValidatorCommissionResponse;
                fromAmino(_: _52.MsgWithdrawValidatorCommissionResponseAmino): _52.MsgWithdrawValidatorCommissionResponse;
                toAmino(_: _52.MsgWithdrawValidatorCommissionResponse): _52.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _52.MsgWithdrawValidatorCommissionResponseAminoMsg): _52.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _52.MsgWithdrawValidatorCommissionResponse): _52.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _52.MsgWithdrawValidatorCommissionResponseProtoMsg): _52.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _52.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _52.MsgWithdrawValidatorCommissionResponse): _52.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _52.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.MsgFundCommunityPool;
                fromPartial(object: Partial<_52.MsgFundCommunityPool>): _52.MsgFundCommunityPool;
                fromAmino(object: _52.MsgFundCommunityPoolAmino): _52.MsgFundCommunityPool;
                toAmino(message: _52.MsgFundCommunityPool): _52.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _52.MsgFundCommunityPoolAminoMsg): _52.MsgFundCommunityPool;
                toAminoMsg(message: _52.MsgFundCommunityPool): _52.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _52.MsgFundCommunityPoolProtoMsg): _52.MsgFundCommunityPool;
                toProto(message: _52.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _52.MsgFundCommunityPool): _52.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _52.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _52.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_52.MsgFundCommunityPoolResponse>): _52.MsgFundCommunityPoolResponse;
                fromAmino(_: _52.MsgFundCommunityPoolResponseAmino): _52.MsgFundCommunityPoolResponse;
                toAmino(_: _52.MsgFundCommunityPoolResponse): _52.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _52.MsgFundCommunityPoolResponseAminoMsg): _52.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _52.MsgFundCommunityPoolResponse): _52.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _52.MsgFundCommunityPoolResponseProtoMsg): _52.MsgFundCommunityPoolResponse;
                toProto(message: _52.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _52.MsgFundCommunityPoolResponse): _52.MsgFundCommunityPoolResponseProtoMsg;
            };
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
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _51.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_51.QueryValidatorOutstandingRewardsRequest>): _51.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _51.QueryValidatorOutstandingRewardsRequestAmino): _51.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _51.QueryValidatorOutstandingRewardsRequest): _51.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _51.QueryValidatorOutstandingRewardsRequestAminoMsg): _51.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _51.QueryValidatorOutstandingRewardsRequest): _51.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _51.QueryValidatorOutstandingRewardsRequestProtoMsg): _51.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _51.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _51.QueryValidatorOutstandingRewardsRequest): _51.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _51.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_51.QueryValidatorOutstandingRewardsResponse>): _51.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _51.QueryValidatorOutstandingRewardsResponseAmino): _51.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _51.QueryValidatorOutstandingRewardsResponse): _51.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _51.QueryValidatorOutstandingRewardsResponseAminoMsg): _51.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _51.QueryValidatorOutstandingRewardsResponse): _51.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _51.QueryValidatorOutstandingRewardsResponseProtoMsg): _51.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _51.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _51.QueryValidatorOutstandingRewardsResponse): _51.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _51.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_51.QueryValidatorCommissionRequest>): _51.QueryValidatorCommissionRequest;
                fromAmino(object: _51.QueryValidatorCommissionRequestAmino): _51.QueryValidatorCommissionRequest;
                toAmino(message: _51.QueryValidatorCommissionRequest): _51.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _51.QueryValidatorCommissionRequestAminoMsg): _51.QueryValidatorCommissionRequest;
                toAminoMsg(message: _51.QueryValidatorCommissionRequest): _51.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _51.QueryValidatorCommissionRequestProtoMsg): _51.QueryValidatorCommissionRequest;
                toProto(message: _51.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _51.QueryValidatorCommissionRequest): _51.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _51.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_51.QueryValidatorCommissionResponse>): _51.QueryValidatorCommissionResponse;
                fromAmino(object: _51.QueryValidatorCommissionResponseAmino): _51.QueryValidatorCommissionResponse;
                toAmino(message: _51.QueryValidatorCommissionResponse): _51.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _51.QueryValidatorCommissionResponseAminoMsg): _51.QueryValidatorCommissionResponse;
                toAminoMsg(message: _51.QueryValidatorCommissionResponse): _51.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _51.QueryValidatorCommissionResponseProtoMsg): _51.QueryValidatorCommissionResponse;
                toProto(message: _51.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _51.QueryValidatorCommissionResponse): _51.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _51.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_51.QueryValidatorSlashesRequest>): _51.QueryValidatorSlashesRequest;
                fromAmino(object: _51.QueryValidatorSlashesRequestAmino): _51.QueryValidatorSlashesRequest;
                toAmino(message: _51.QueryValidatorSlashesRequest): _51.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _51.QueryValidatorSlashesRequestAminoMsg): _51.QueryValidatorSlashesRequest;
                toAminoMsg(message: _51.QueryValidatorSlashesRequest): _51.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _51.QueryValidatorSlashesRequestProtoMsg): _51.QueryValidatorSlashesRequest;
                toProto(message: _51.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _51.QueryValidatorSlashesRequest): _51.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _51.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_51.QueryValidatorSlashesResponse>): _51.QueryValidatorSlashesResponse;
                fromAmino(object: _51.QueryValidatorSlashesResponseAmino): _51.QueryValidatorSlashesResponse;
                toAmino(message: _51.QueryValidatorSlashesResponse): _51.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _51.QueryValidatorSlashesResponseAminoMsg): _51.QueryValidatorSlashesResponse;
                toAminoMsg(message: _51.QueryValidatorSlashesResponse): _51.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _51.QueryValidatorSlashesResponseProtoMsg): _51.QueryValidatorSlashesResponse;
                toProto(message: _51.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _51.QueryValidatorSlashesResponse): _51.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _51.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_51.QueryDelegationRewardsRequest>): _51.QueryDelegationRewardsRequest;
                fromAmino(object: _51.QueryDelegationRewardsRequestAmino): _51.QueryDelegationRewardsRequest;
                toAmino(message: _51.QueryDelegationRewardsRequest): _51.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _51.QueryDelegationRewardsRequestAminoMsg): _51.QueryDelegationRewardsRequest;
                toAminoMsg(message: _51.QueryDelegationRewardsRequest): _51.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _51.QueryDelegationRewardsRequestProtoMsg): _51.QueryDelegationRewardsRequest;
                toProto(message: _51.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _51.QueryDelegationRewardsRequest): _51.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _51.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_51.QueryDelegationRewardsResponse>): _51.QueryDelegationRewardsResponse;
                fromAmino(object: _51.QueryDelegationRewardsResponseAmino): _51.QueryDelegationRewardsResponse;
                toAmino(message: _51.QueryDelegationRewardsResponse): _51.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _51.QueryDelegationRewardsResponseAminoMsg): _51.QueryDelegationRewardsResponse;
                toAminoMsg(message: _51.QueryDelegationRewardsResponse): _51.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _51.QueryDelegationRewardsResponseProtoMsg): _51.QueryDelegationRewardsResponse;
                toProto(message: _51.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _51.QueryDelegationRewardsResponse): _51.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _51.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_51.QueryDelegationTotalRewardsRequest>): _51.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _51.QueryDelegationTotalRewardsRequestAmino): _51.QueryDelegationTotalRewardsRequest;
                toAmino(message: _51.QueryDelegationTotalRewardsRequest): _51.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _51.QueryDelegationTotalRewardsRequestAminoMsg): _51.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _51.QueryDelegationTotalRewardsRequest): _51.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _51.QueryDelegationTotalRewardsRequestProtoMsg): _51.QueryDelegationTotalRewardsRequest;
                toProto(message: _51.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _51.QueryDelegationTotalRewardsRequest): _51.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _51.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_51.QueryDelegationTotalRewardsResponse>): _51.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _51.QueryDelegationTotalRewardsResponseAmino): _51.QueryDelegationTotalRewardsResponse;
                toAmino(message: _51.QueryDelegationTotalRewardsResponse): _51.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _51.QueryDelegationTotalRewardsResponseAminoMsg): _51.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _51.QueryDelegationTotalRewardsResponse): _51.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _51.QueryDelegationTotalRewardsResponseProtoMsg): _51.QueryDelegationTotalRewardsResponse;
                toProto(message: _51.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _51.QueryDelegationTotalRewardsResponse): _51.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _51.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_51.QueryDelegatorValidatorsRequest>): _51.QueryDelegatorValidatorsRequest;
                fromAmino(object: _51.QueryDelegatorValidatorsRequestAmino): _51.QueryDelegatorValidatorsRequest;
                toAmino(message: _51.QueryDelegatorValidatorsRequest): _51.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _51.QueryDelegatorValidatorsRequestAminoMsg): _51.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _51.QueryDelegatorValidatorsRequest): _51.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _51.QueryDelegatorValidatorsRequestProtoMsg): _51.QueryDelegatorValidatorsRequest;
                toProto(message: _51.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _51.QueryDelegatorValidatorsRequest): _51.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _51.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_51.QueryDelegatorValidatorsResponse>): _51.QueryDelegatorValidatorsResponse;
                fromAmino(object: _51.QueryDelegatorValidatorsResponseAmino): _51.QueryDelegatorValidatorsResponse;
                toAmino(message: _51.QueryDelegatorValidatorsResponse): _51.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _51.QueryDelegatorValidatorsResponseAminoMsg): _51.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _51.QueryDelegatorValidatorsResponse): _51.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _51.QueryDelegatorValidatorsResponseProtoMsg): _51.QueryDelegatorValidatorsResponse;
                toProto(message: _51.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _51.QueryDelegatorValidatorsResponse): _51.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _51.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_51.QueryDelegatorWithdrawAddressRequest>): _51.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _51.QueryDelegatorWithdrawAddressRequestAmino): _51.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _51.QueryDelegatorWithdrawAddressRequest): _51.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _51.QueryDelegatorWithdrawAddressRequestAminoMsg): _51.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _51.QueryDelegatorWithdrawAddressRequest): _51.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _51.QueryDelegatorWithdrawAddressRequestProtoMsg): _51.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _51.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _51.QueryDelegatorWithdrawAddressRequest): _51.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _51.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_51.QueryDelegatorWithdrawAddressResponse>): _51.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _51.QueryDelegatorWithdrawAddressResponseAmino): _51.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _51.QueryDelegatorWithdrawAddressResponse): _51.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _51.QueryDelegatorWithdrawAddressResponseAminoMsg): _51.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _51.QueryDelegatorWithdrawAddressResponse): _51.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _51.QueryDelegatorWithdrawAddressResponseProtoMsg): _51.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _51.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _51.QueryDelegatorWithdrawAddressResponse): _51.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _51.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _51.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_51.QueryCommunityPoolRequest>): _51.QueryCommunityPoolRequest;
                fromAmino(_: _51.QueryCommunityPoolRequestAmino): _51.QueryCommunityPoolRequest;
                toAmino(_: _51.QueryCommunityPoolRequest): _51.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _51.QueryCommunityPoolRequestAminoMsg): _51.QueryCommunityPoolRequest;
                toAminoMsg(message: _51.QueryCommunityPoolRequest): _51.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _51.QueryCommunityPoolRequestProtoMsg): _51.QueryCommunityPoolRequest;
                toProto(message: _51.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _51.QueryCommunityPoolRequest): _51.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _51.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_51.QueryCommunityPoolResponse>): _51.QueryCommunityPoolResponse;
                fromAmino(object: _51.QueryCommunityPoolResponseAmino): _51.QueryCommunityPoolResponse;
                toAmino(message: _51.QueryCommunityPoolResponse): _51.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _51.QueryCommunityPoolResponseAminoMsg): _51.QueryCommunityPoolResponse;
                toAminoMsg(message: _51.QueryCommunityPoolResponse): _51.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _51.QueryCommunityPoolResponseProtoMsg): _51.QueryCommunityPoolResponse;
                toProto(message: _51.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _51.QueryCommunityPoolResponse): _51.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _50.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_50.DelegatorWithdrawInfo>): _50.DelegatorWithdrawInfo;
                fromAmino(object: _50.DelegatorWithdrawInfoAmino): _50.DelegatorWithdrawInfo;
                toAmino(message: _50.DelegatorWithdrawInfo): _50.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _50.DelegatorWithdrawInfoAminoMsg): _50.DelegatorWithdrawInfo;
                toAminoMsg(message: _50.DelegatorWithdrawInfo): _50.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _50.DelegatorWithdrawInfoProtoMsg): _50.DelegatorWithdrawInfo;
                toProto(message: _50.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _50.DelegatorWithdrawInfo): _50.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _50.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_50.ValidatorOutstandingRewardsRecord>): _50.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _50.ValidatorOutstandingRewardsRecordAmino): _50.ValidatorOutstandingRewardsRecord;
                toAmino(message: _50.ValidatorOutstandingRewardsRecord): _50.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _50.ValidatorOutstandingRewardsRecordAminoMsg): _50.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _50.ValidatorOutstandingRewardsRecord): _50.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _50.ValidatorOutstandingRewardsRecordProtoMsg): _50.ValidatorOutstandingRewardsRecord;
                toProto(message: _50.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _50.ValidatorOutstandingRewardsRecord): _50.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _50.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_50.ValidatorAccumulatedCommissionRecord>): _50.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _50.ValidatorAccumulatedCommissionRecordAmino): _50.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _50.ValidatorAccumulatedCommissionRecord): _50.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _50.ValidatorAccumulatedCommissionRecordAminoMsg): _50.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _50.ValidatorAccumulatedCommissionRecord): _50.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _50.ValidatorAccumulatedCommissionRecordProtoMsg): _50.ValidatorAccumulatedCommissionRecord;
                toProto(message: _50.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _50.ValidatorAccumulatedCommissionRecord): _50.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _50.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_50.ValidatorHistoricalRewardsRecord>): _50.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _50.ValidatorHistoricalRewardsRecordAmino): _50.ValidatorHistoricalRewardsRecord;
                toAmino(message: _50.ValidatorHistoricalRewardsRecord): _50.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _50.ValidatorHistoricalRewardsRecordAminoMsg): _50.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _50.ValidatorHistoricalRewardsRecord): _50.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _50.ValidatorHistoricalRewardsRecordProtoMsg): _50.ValidatorHistoricalRewardsRecord;
                toProto(message: _50.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _50.ValidatorHistoricalRewardsRecord): _50.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _50.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_50.ValidatorCurrentRewardsRecord>): _50.ValidatorCurrentRewardsRecord;
                fromAmino(object: _50.ValidatorCurrentRewardsRecordAmino): _50.ValidatorCurrentRewardsRecord;
                toAmino(message: _50.ValidatorCurrentRewardsRecord): _50.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _50.ValidatorCurrentRewardsRecordAminoMsg): _50.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _50.ValidatorCurrentRewardsRecord): _50.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _50.ValidatorCurrentRewardsRecordProtoMsg): _50.ValidatorCurrentRewardsRecord;
                toProto(message: _50.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _50.ValidatorCurrentRewardsRecord): _50.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _50.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_50.DelegatorStartingInfoRecord>): _50.DelegatorStartingInfoRecord;
                fromAmino(object: _50.DelegatorStartingInfoRecordAmino): _50.DelegatorStartingInfoRecord;
                toAmino(message: _50.DelegatorStartingInfoRecord): _50.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _50.DelegatorStartingInfoRecordAminoMsg): _50.DelegatorStartingInfoRecord;
                toAminoMsg(message: _50.DelegatorStartingInfoRecord): _50.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _50.DelegatorStartingInfoRecordProtoMsg): _50.DelegatorStartingInfoRecord;
                toProto(message: _50.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _50.DelegatorStartingInfoRecord): _50.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _50.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_50.ValidatorSlashEventRecord>): _50.ValidatorSlashEventRecord;
                fromAmino(object: _50.ValidatorSlashEventRecordAmino): _50.ValidatorSlashEventRecord;
                toAmino(message: _50.ValidatorSlashEventRecord): _50.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _50.ValidatorSlashEventRecordAminoMsg): _50.ValidatorSlashEventRecord;
                toAminoMsg(message: _50.ValidatorSlashEventRecord): _50.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _50.ValidatorSlashEventRecordProtoMsg): _50.ValidatorSlashEventRecord;
                toProto(message: _50.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _50.ValidatorSlashEventRecord): _50.ValidatorSlashEventRecordProtoMsg;
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
            Params: {
                typeUrl: string;
                encode(message: _49.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.Params;
                fromPartial(object: Partial<_49.Params>): _49.Params;
                fromAmino(object: _49.ParamsAmino): _49.Params;
                toAmino(message: _49.Params): _49.ParamsAmino;
                fromAminoMsg(object: _49.ParamsAminoMsg): _49.Params;
                toAminoMsg(message: _49.Params): _49.ParamsAminoMsg;
                fromProtoMsg(message: _49.ParamsProtoMsg): _49.Params;
                toProto(message: _49.Params): Uint8Array;
                toProtoMsg(message: _49.Params): _49.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _49.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_49.ValidatorHistoricalRewards>): _49.ValidatorHistoricalRewards;
                fromAmino(object: _49.ValidatorHistoricalRewardsAmino): _49.ValidatorHistoricalRewards;
                toAmino(message: _49.ValidatorHistoricalRewards): _49.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _49.ValidatorHistoricalRewardsAminoMsg): _49.ValidatorHistoricalRewards;
                toAminoMsg(message: _49.ValidatorHistoricalRewards): _49.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _49.ValidatorHistoricalRewardsProtoMsg): _49.ValidatorHistoricalRewards;
                toProto(message: _49.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _49.ValidatorHistoricalRewards): _49.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _49.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.ValidatorCurrentRewards;
                fromPartial(object: Partial<_49.ValidatorCurrentRewards>): _49.ValidatorCurrentRewards;
                fromAmino(object: _49.ValidatorCurrentRewardsAmino): _49.ValidatorCurrentRewards;
                toAmino(message: _49.ValidatorCurrentRewards): _49.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _49.ValidatorCurrentRewardsAminoMsg): _49.ValidatorCurrentRewards;
                toAminoMsg(message: _49.ValidatorCurrentRewards): _49.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _49.ValidatorCurrentRewardsProtoMsg): _49.ValidatorCurrentRewards;
                toProto(message: _49.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _49.ValidatorCurrentRewards): _49.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _49.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_49.ValidatorAccumulatedCommission>): _49.ValidatorAccumulatedCommission;
                fromAmino(object: _49.ValidatorAccumulatedCommissionAmino): _49.ValidatorAccumulatedCommission;
                toAmino(message: _49.ValidatorAccumulatedCommission): _49.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _49.ValidatorAccumulatedCommissionAminoMsg): _49.ValidatorAccumulatedCommission;
                toAminoMsg(message: _49.ValidatorAccumulatedCommission): _49.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _49.ValidatorAccumulatedCommissionProtoMsg): _49.ValidatorAccumulatedCommission;
                toProto(message: _49.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _49.ValidatorAccumulatedCommission): _49.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _49.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_49.ValidatorOutstandingRewards>): _49.ValidatorOutstandingRewards;
                fromAmino(object: _49.ValidatorOutstandingRewardsAmino): _49.ValidatorOutstandingRewards;
                toAmino(message: _49.ValidatorOutstandingRewards): _49.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _49.ValidatorOutstandingRewardsAminoMsg): _49.ValidatorOutstandingRewards;
                toAminoMsg(message: _49.ValidatorOutstandingRewards): _49.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _49.ValidatorOutstandingRewardsProtoMsg): _49.ValidatorOutstandingRewards;
                toProto(message: _49.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _49.ValidatorOutstandingRewards): _49.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _49.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.ValidatorSlashEvent;
                fromPartial(object: Partial<_49.ValidatorSlashEvent>): _49.ValidatorSlashEvent;
                fromAmino(object: _49.ValidatorSlashEventAmino): _49.ValidatorSlashEvent;
                toAmino(message: _49.ValidatorSlashEvent): _49.ValidatorSlashEventAmino;
                fromAminoMsg(object: _49.ValidatorSlashEventAminoMsg): _49.ValidatorSlashEvent;
                toAminoMsg(message: _49.ValidatorSlashEvent): _49.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _49.ValidatorSlashEventProtoMsg): _49.ValidatorSlashEvent;
                toProto(message: _49.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _49.ValidatorSlashEvent): _49.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _49.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.ValidatorSlashEvents;
                fromPartial(object: Partial<_49.ValidatorSlashEvents>): _49.ValidatorSlashEvents;
                fromAmino(object: _49.ValidatorSlashEventsAmino): _49.ValidatorSlashEvents;
                toAmino(message: _49.ValidatorSlashEvents): _49.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _49.ValidatorSlashEventsAminoMsg): _49.ValidatorSlashEvents;
                toAminoMsg(message: _49.ValidatorSlashEvents): _49.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _49.ValidatorSlashEventsProtoMsg): _49.ValidatorSlashEvents;
                toProto(message: _49.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _49.ValidatorSlashEvents): _49.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _49.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.FeePool;
                fromPartial(object: Partial<_49.FeePool>): _49.FeePool;
                fromAmino(object: _49.FeePoolAmino): _49.FeePool;
                toAmino(message: _49.FeePool): _49.FeePoolAmino;
                fromAminoMsg(object: _49.FeePoolAminoMsg): _49.FeePool;
                toAminoMsg(message: _49.FeePool): _49.FeePoolAminoMsg;
                fromProtoMsg(message: _49.FeePoolProtoMsg): _49.FeePool;
                toProto(message: _49.FeePool): Uint8Array;
                toProtoMsg(message: _49.FeePool): _49.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _49.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_49.CommunityPoolSpendProposal>): _49.CommunityPoolSpendProposal;
                fromAmino(object: _49.CommunityPoolSpendProposalAmino): _49.CommunityPoolSpendProposal;
                toAmino(message: _49.CommunityPoolSpendProposal): _49.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _49.CommunityPoolSpendProposalAminoMsg): _49.CommunityPoolSpendProposal;
                toAminoMsg(message: _49.CommunityPoolSpendProposal): _49.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _49.CommunityPoolSpendProposalProtoMsg): _49.CommunityPoolSpendProposal;
                toProto(message: _49.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _49.CommunityPoolSpendProposal): _49.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _49.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.DelegatorStartingInfo;
                fromPartial(object: Partial<_49.DelegatorStartingInfo>): _49.DelegatorStartingInfo;
                fromAmino(object: _49.DelegatorStartingInfoAmino): _49.DelegatorStartingInfo;
                toAmino(message: _49.DelegatorStartingInfo): _49.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _49.DelegatorStartingInfoAminoMsg): _49.DelegatorStartingInfo;
                toAminoMsg(message: _49.DelegatorStartingInfo): _49.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _49.DelegatorStartingInfoProtoMsg): _49.DelegatorStartingInfo;
                toProto(message: _49.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _49.DelegatorStartingInfo): _49.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _49.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.DelegationDelegatorReward;
                fromPartial(object: Partial<_49.DelegationDelegatorReward>): _49.DelegationDelegatorReward;
                fromAmino(object: _49.DelegationDelegatorRewardAmino): _49.DelegationDelegatorReward;
                toAmino(message: _49.DelegationDelegatorReward): _49.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _49.DelegationDelegatorRewardAminoMsg): _49.DelegationDelegatorReward;
                toAminoMsg(message: _49.DelegationDelegatorReward): _49.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _49.DelegationDelegatorRewardProtoMsg): _49.DelegationDelegatorReward;
                toProto(message: _49.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _49.DelegationDelegatorReward): _49.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _49.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_49.CommunityPoolSpendProposalWithDeposit>): _49.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _49.CommunityPoolSpendProposalWithDepositAmino): _49.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _49.CommunityPoolSpendProposalWithDeposit): _49.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _49.CommunityPoolSpendProposalWithDepositAminoMsg): _49.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _49.CommunityPoolSpendProposalWithDeposit): _49.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _49.CommunityPoolSpendProposalWithDepositProtoMsg): _49.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _49.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _49.CommunityPoolSpendProposalWithDeposit): _49.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _175.MsgClientImpl;
            QueryClientImpl: typeof _162.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _55.QueryEvidenceRequest): Promise<_55.QueryEvidenceResponse>;
                allEvidence(request?: _55.QueryAllEvidenceRequest): Promise<_55.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _147.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _56.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _56.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _56.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _56.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _56.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _56.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _56.MsgSubmitEvidence) => _56.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _56.MsgSubmitEvidenceAmino) => _56.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _56.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.MsgSubmitEvidence;
                fromPartial(object: Partial<_56.MsgSubmitEvidence>): _56.MsgSubmitEvidence;
                fromAmino(object: _56.MsgSubmitEvidenceAmino): _56.MsgSubmitEvidence;
                toAmino(message: _56.MsgSubmitEvidence): _56.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _56.MsgSubmitEvidenceAminoMsg): _56.MsgSubmitEvidence;
                toAminoMsg(message: _56.MsgSubmitEvidence): _56.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _56.MsgSubmitEvidenceProtoMsg): _56.MsgSubmitEvidence;
                toProto(message: _56.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _56.MsgSubmitEvidence): _56.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _56.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_56.MsgSubmitEvidenceResponse>): _56.MsgSubmitEvidenceResponse;
                fromAmino(object: _56.MsgSubmitEvidenceResponseAmino): _56.MsgSubmitEvidenceResponse;
                toAmino(message: _56.MsgSubmitEvidenceResponse): _56.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _56.MsgSubmitEvidenceResponseAminoMsg): _56.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _56.MsgSubmitEvidenceResponse): _56.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _56.MsgSubmitEvidenceResponseProtoMsg): _56.MsgSubmitEvidenceResponse;
                toProto(message: _56.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _56.MsgSubmitEvidenceResponse): _56.MsgSubmitEvidenceResponseProtoMsg;
            };
            Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _55.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryEvidenceRequest;
                fromPartial(object: Partial<_55.QueryEvidenceRequest>): _55.QueryEvidenceRequest;
                fromAmino(object: _55.QueryEvidenceRequestAmino): _55.QueryEvidenceRequest;
                toAmino(message: _55.QueryEvidenceRequest): _55.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _55.QueryEvidenceRequestAminoMsg): _55.QueryEvidenceRequest;
                toAminoMsg(message: _55.QueryEvidenceRequest): _55.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _55.QueryEvidenceRequestProtoMsg): _55.QueryEvidenceRequest;
                toProto(message: _55.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _55.QueryEvidenceRequest): _55.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _55.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryEvidenceResponse;
                fromPartial(object: Partial<_55.QueryEvidenceResponse>): _55.QueryEvidenceResponse;
                fromAmino(object: _55.QueryEvidenceResponseAmino): _55.QueryEvidenceResponse;
                toAmino(message: _55.QueryEvidenceResponse): _55.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _55.QueryEvidenceResponseAminoMsg): _55.QueryEvidenceResponse;
                toAminoMsg(message: _55.QueryEvidenceResponse): _55.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _55.QueryEvidenceResponseProtoMsg): _55.QueryEvidenceResponse;
                toProto(message: _55.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _55.QueryEvidenceResponse): _55.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _55.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_55.QueryAllEvidenceRequest>): _55.QueryAllEvidenceRequest;
                fromAmino(object: _55.QueryAllEvidenceRequestAmino): _55.QueryAllEvidenceRequest;
                toAmino(message: _55.QueryAllEvidenceRequest): _55.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _55.QueryAllEvidenceRequestAminoMsg): _55.QueryAllEvidenceRequest;
                toAminoMsg(message: _55.QueryAllEvidenceRequest): _55.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _55.QueryAllEvidenceRequestProtoMsg): _55.QueryAllEvidenceRequest;
                toProto(message: _55.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _55.QueryAllEvidenceRequest): _55.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _55.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_55.QueryAllEvidenceResponse>): _55.QueryAllEvidenceResponse;
                fromAmino(object: _55.QueryAllEvidenceResponseAmino): _55.QueryAllEvidenceResponse;
                toAmino(message: _55.QueryAllEvidenceResponse): _55.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _55.QueryAllEvidenceResponseAminoMsg): _55.QueryAllEvidenceResponse;
                toAminoMsg(message: _55.QueryAllEvidenceResponse): _55.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _55.QueryAllEvidenceResponseProtoMsg): _55.QueryAllEvidenceResponse;
                toProto(message: _55.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _55.QueryAllEvidenceResponse): _55.QueryAllEvidenceResponseProtoMsg;
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
            Equivocation: {
                typeUrl: string;
                encode(message: _53.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.Equivocation;
                fromPartial(object: Partial<_53.Equivocation>): _53.Equivocation;
                fromAmino(object: _53.EquivocationAmino): _53.Equivocation;
                toAmino(message: _53.Equivocation): _53.EquivocationAmino;
                fromAminoMsg(object: _53.EquivocationAminoMsg): _53.Equivocation;
                toAminoMsg(message: _53.Equivocation): _53.EquivocationAminoMsg;
                fromProtoMsg(message: _53.EquivocationProtoMsg): _53.Equivocation;
                toProto(message: _53.Equivocation): Uint8Array;
                toProtoMsg(message: _53.Equivocation): _53.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _176.MsgClientImpl;
            QueryClientImpl: typeof _163.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _59.QueryAllowanceRequest): Promise<_59.QueryAllowanceResponse>;
                allowances(request: _59.QueryAllowancesRequest): Promise<_59.QueryAllowancesResponse>;
                allowancesByGranter(request: _59.QueryAllowancesByGranterRequest): Promise<_59.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _148.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _60.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _60.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _60.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _60.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _60.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _60.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _60.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _60.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _60.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _60.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _60.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _60.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _60.MsgGrantAllowance) => _60.MsgGrantAllowanceAmino;
                    fromAmino: (object: _60.MsgGrantAllowanceAmino) => _60.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _60.MsgRevokeAllowance) => _60.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _60.MsgRevokeAllowanceAmino) => _60.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _60.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.MsgGrantAllowance;
                fromPartial(object: Partial<_60.MsgGrantAllowance>): _60.MsgGrantAllowance;
                fromAmino(object: _60.MsgGrantAllowanceAmino): _60.MsgGrantAllowance;
                toAmino(message: _60.MsgGrantAllowance): _60.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _60.MsgGrantAllowanceAminoMsg): _60.MsgGrantAllowance;
                toAminoMsg(message: _60.MsgGrantAllowance): _60.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _60.MsgGrantAllowanceProtoMsg): _60.MsgGrantAllowance;
                toProto(message: _60.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _60.MsgGrantAllowance): _60.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _60.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _60.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_60.MsgGrantAllowanceResponse>): _60.MsgGrantAllowanceResponse;
                fromAmino(_: _60.MsgGrantAllowanceResponseAmino): _60.MsgGrantAllowanceResponse;
                toAmino(_: _60.MsgGrantAllowanceResponse): _60.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _60.MsgGrantAllowanceResponseAminoMsg): _60.MsgGrantAllowanceResponse;
                toAminoMsg(message: _60.MsgGrantAllowanceResponse): _60.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _60.MsgGrantAllowanceResponseProtoMsg): _60.MsgGrantAllowanceResponse;
                toProto(message: _60.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _60.MsgGrantAllowanceResponse): _60.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _60.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.MsgRevokeAllowance;
                fromPartial(object: Partial<_60.MsgRevokeAllowance>): _60.MsgRevokeAllowance;
                fromAmino(object: _60.MsgRevokeAllowanceAmino): _60.MsgRevokeAllowance;
                toAmino(message: _60.MsgRevokeAllowance): _60.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _60.MsgRevokeAllowanceAminoMsg): _60.MsgRevokeAllowance;
                toAminoMsg(message: _60.MsgRevokeAllowance): _60.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _60.MsgRevokeAllowanceProtoMsg): _60.MsgRevokeAllowance;
                toProto(message: _60.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _60.MsgRevokeAllowance): _60.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _60.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _60.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_60.MsgRevokeAllowanceResponse>): _60.MsgRevokeAllowanceResponse;
                fromAmino(_: _60.MsgRevokeAllowanceResponseAmino): _60.MsgRevokeAllowanceResponse;
                toAmino(_: _60.MsgRevokeAllowanceResponse): _60.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _60.MsgRevokeAllowanceResponseAminoMsg): _60.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _60.MsgRevokeAllowanceResponse): _60.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _60.MsgRevokeAllowanceResponseProtoMsg): _60.MsgRevokeAllowanceResponse;
                toProto(message: _60.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _60.MsgRevokeAllowanceResponse): _60.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _57.BasicAllowance | _57.PeriodicAllowance | _57.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _59.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.QueryAllowanceRequest;
                fromPartial(object: Partial<_59.QueryAllowanceRequest>): _59.QueryAllowanceRequest;
                fromAmino(object: _59.QueryAllowanceRequestAmino): _59.QueryAllowanceRequest;
                toAmino(message: _59.QueryAllowanceRequest): _59.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _59.QueryAllowanceRequestAminoMsg): _59.QueryAllowanceRequest;
                toAminoMsg(message: _59.QueryAllowanceRequest): _59.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _59.QueryAllowanceRequestProtoMsg): _59.QueryAllowanceRequest;
                toProto(message: _59.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _59.QueryAllowanceRequest): _59.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _59.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.QueryAllowanceResponse;
                fromPartial(object: Partial<_59.QueryAllowanceResponse>): _59.QueryAllowanceResponse;
                fromAmino(object: _59.QueryAllowanceResponseAmino): _59.QueryAllowanceResponse;
                toAmino(message: _59.QueryAllowanceResponse): _59.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _59.QueryAllowanceResponseAminoMsg): _59.QueryAllowanceResponse;
                toAminoMsg(message: _59.QueryAllowanceResponse): _59.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _59.QueryAllowanceResponseProtoMsg): _59.QueryAllowanceResponse;
                toProto(message: _59.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _59.QueryAllowanceResponse): _59.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _59.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.QueryAllowancesRequest;
                fromPartial(object: Partial<_59.QueryAllowancesRequest>): _59.QueryAllowancesRequest;
                fromAmino(object: _59.QueryAllowancesRequestAmino): _59.QueryAllowancesRequest;
                toAmino(message: _59.QueryAllowancesRequest): _59.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _59.QueryAllowancesRequestAminoMsg): _59.QueryAllowancesRequest;
                toAminoMsg(message: _59.QueryAllowancesRequest): _59.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _59.QueryAllowancesRequestProtoMsg): _59.QueryAllowancesRequest;
                toProto(message: _59.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _59.QueryAllowancesRequest): _59.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _59.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.QueryAllowancesResponse;
                fromPartial(object: Partial<_59.QueryAllowancesResponse>): _59.QueryAllowancesResponse;
                fromAmino(object: _59.QueryAllowancesResponseAmino): _59.QueryAllowancesResponse;
                toAmino(message: _59.QueryAllowancesResponse): _59.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _59.QueryAllowancesResponseAminoMsg): _59.QueryAllowancesResponse;
                toAminoMsg(message: _59.QueryAllowancesResponse): _59.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _59.QueryAllowancesResponseProtoMsg): _59.QueryAllowancesResponse;
                toProto(message: _59.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _59.QueryAllowancesResponse): _59.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _59.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_59.QueryAllowancesByGranterRequest>): _59.QueryAllowancesByGranterRequest;
                fromAmino(object: _59.QueryAllowancesByGranterRequestAmino): _59.QueryAllowancesByGranterRequest;
                toAmino(message: _59.QueryAllowancesByGranterRequest): _59.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _59.QueryAllowancesByGranterRequestAminoMsg): _59.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _59.QueryAllowancesByGranterRequest): _59.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _59.QueryAllowancesByGranterRequestProtoMsg): _59.QueryAllowancesByGranterRequest;
                toProto(message: _59.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _59.QueryAllowancesByGranterRequest): _59.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _59.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_59.QueryAllowancesByGranterResponse>): _59.QueryAllowancesByGranterResponse;
                fromAmino(object: _59.QueryAllowancesByGranterResponseAmino): _59.QueryAllowancesByGranterResponse;
                toAmino(message: _59.QueryAllowancesByGranterResponse): _59.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _59.QueryAllowancesByGranterResponseAminoMsg): _59.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _59.QueryAllowancesByGranterResponse): _59.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _59.QueryAllowancesByGranterResponseProtoMsg): _59.QueryAllowancesByGranterResponse;
                toProto(message: _59.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _59.QueryAllowancesByGranterResponse): _59.QueryAllowancesByGranterResponseProtoMsg;
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
            BasicAllowance: {
                typeUrl: string;
                encode(message: _57.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.BasicAllowance;
                fromPartial(object: Partial<_57.BasicAllowance>): _57.BasicAllowance;
                fromAmino(object: _57.BasicAllowanceAmino): _57.BasicAllowance;
                toAmino(message: _57.BasicAllowance): _57.BasicAllowanceAmino;
                fromAminoMsg(object: _57.BasicAllowanceAminoMsg): _57.BasicAllowance;
                toAminoMsg(message: _57.BasicAllowance): _57.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _57.BasicAllowanceProtoMsg): _57.BasicAllowance;
                toProto(message: _57.BasicAllowance): Uint8Array;
                toProtoMsg(message: _57.BasicAllowance): _57.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _57.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.PeriodicAllowance;
                fromPartial(object: Partial<_57.PeriodicAllowance>): _57.PeriodicAllowance;
                fromAmino(object: _57.PeriodicAllowanceAmino): _57.PeriodicAllowance;
                toAmino(message: _57.PeriodicAllowance): _57.PeriodicAllowanceAmino;
                fromAminoMsg(object: _57.PeriodicAllowanceAminoMsg): _57.PeriodicAllowance;
                toAminoMsg(message: _57.PeriodicAllowance): _57.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _57.PeriodicAllowanceProtoMsg): _57.PeriodicAllowance;
                toProto(message: _57.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _57.PeriodicAllowance): _57.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _57.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.AllowedMsgAllowance;
                fromPartial(object: Partial<_57.AllowedMsgAllowance>): _57.AllowedMsgAllowance;
                fromAmino(object: _57.AllowedMsgAllowanceAmino): _57.AllowedMsgAllowance;
                toAmino(message: _57.AllowedMsgAllowance): _57.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _57.AllowedMsgAllowanceAminoMsg): _57.AllowedMsgAllowance;
                toAminoMsg(message: _57.AllowedMsgAllowance): _57.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _57.AllowedMsgAllowanceProtoMsg): _57.AllowedMsgAllowance;
                toProto(message: _57.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _57.AllowedMsgAllowance): _57.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _57.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.Grant;
                fromPartial(object: Partial<_57.Grant>): _57.Grant;
                fromAmino(object: _57.GrantAmino): _57.Grant;
                toAmino(message: _57.Grant): _57.GrantAmino;
                fromAminoMsg(object: _57.GrantAminoMsg): _57.Grant;
                toAminoMsg(message: _57.Grant): _57.GrantAminoMsg;
                fromProtoMsg(message: _57.GrantProtoMsg): _57.Grant;
                toProto(message: _57.Grant): Uint8Array;
                toProtoMsg(message: _57.Grant): _57.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
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
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _177.MsgClientImpl;
            QueryClientImpl: typeof _164.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _64.QueryProposalRequest): Promise<_64.QueryProposalResponse>;
                proposals(request: _64.QueryProposalsRequest): Promise<_64.QueryProposalsResponse>;
                vote(request: _64.QueryVoteRequest): Promise<_64.QueryVoteResponse>;
                votes(request: _64.QueryVotesRequest): Promise<_64.QueryVotesResponse>;
                params(request: _64.QueryParamsRequest): Promise<_64.QueryParamsResponse>;
                deposit(request: _64.QueryDepositRequest): Promise<_64.QueryDepositResponse>;
                deposits(request: _64.QueryDepositsRequest): Promise<_64.QueryDepositsResponse>;
                tallyResult(request: _64.QueryTallyResultRequest): Promise<_64.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _149.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _65.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _65.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _65.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _65.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _65.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _65.MsgSubmitProposal;
                    };
                    vote(value: _65.MsgVote): {
                        typeUrl: string;
                        value: _65.MsgVote;
                    };
                    voteWeighted(value: _65.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _65.MsgVoteWeighted;
                    };
                    deposit(value: _65.MsgDeposit): {
                        typeUrl: string;
                        value: _65.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _65.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _65.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _65.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _65.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _65.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _65.MsgSubmitProposal;
                    };
                    vote(value: _65.MsgVote): {
                        typeUrl: string;
                        value: _65.MsgVote;
                    };
                    voteWeighted(value: _65.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _65.MsgVoteWeighted;
                    };
                    deposit(value: _65.MsgDeposit): {
                        typeUrl: string;
                        value: _65.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _65.MsgSubmitProposal) => _65.MsgSubmitProposalAmino;
                    fromAmino: (object: _65.MsgSubmitProposalAmino) => _65.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _65.MsgVote) => _65.MsgVoteAmino;
                    fromAmino: (object: _65.MsgVoteAmino) => _65.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _65.MsgVoteWeighted) => _65.MsgVoteWeightedAmino;
                    fromAmino: (object: _65.MsgVoteWeightedAmino) => _65.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _65.MsgDeposit) => _65.MsgDepositAmino;
                    fromAmino: (object: _65.MsgDepositAmino) => _65.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _65.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.MsgSubmitProposal;
                fromPartial(object: Partial<_65.MsgSubmitProposal>): _65.MsgSubmitProposal;
                fromAmino(object: _65.MsgSubmitProposalAmino): _65.MsgSubmitProposal;
                toAmino(message: _65.MsgSubmitProposal): _65.MsgSubmitProposalAmino;
                fromAminoMsg(object: _65.MsgSubmitProposalAminoMsg): _65.MsgSubmitProposal;
                toAminoMsg(message: _65.MsgSubmitProposal): _65.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _65.MsgSubmitProposalProtoMsg): _65.MsgSubmitProposal;
                toProto(message: _65.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _65.MsgSubmitProposal): _65.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _65.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_65.MsgSubmitProposalResponse>): _65.MsgSubmitProposalResponse;
                fromAmino(object: _65.MsgSubmitProposalResponseAmino): _65.MsgSubmitProposalResponse;
                toAmino(message: _65.MsgSubmitProposalResponse): _65.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _65.MsgSubmitProposalResponseAminoMsg): _65.MsgSubmitProposalResponse;
                toAminoMsg(message: _65.MsgSubmitProposalResponse): _65.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _65.MsgSubmitProposalResponseProtoMsg): _65.MsgSubmitProposalResponse;
                toProto(message: _65.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _65.MsgSubmitProposalResponse): _65.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _65.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.MsgVote;
                fromPartial(object: Partial<_65.MsgVote>): _65.MsgVote;
                fromAmino(object: _65.MsgVoteAmino): _65.MsgVote;
                toAmino(message: _65.MsgVote): _65.MsgVoteAmino;
                fromAminoMsg(object: _65.MsgVoteAminoMsg): _65.MsgVote;
                toAminoMsg(message: _65.MsgVote): _65.MsgVoteAminoMsg;
                fromProtoMsg(message: _65.MsgVoteProtoMsg): _65.MsgVote;
                toProto(message: _65.MsgVote): Uint8Array;
                toProtoMsg(message: _65.MsgVote): _65.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _65.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _65.MsgVoteResponse;
                fromPartial(_: Partial<_65.MsgVoteResponse>): _65.MsgVoteResponse;
                fromAmino(_: _65.MsgVoteResponseAmino): _65.MsgVoteResponse;
                toAmino(_: _65.MsgVoteResponse): _65.MsgVoteResponseAmino;
                fromAminoMsg(object: _65.MsgVoteResponseAminoMsg): _65.MsgVoteResponse;
                toAminoMsg(message: _65.MsgVoteResponse): _65.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _65.MsgVoteResponseProtoMsg): _65.MsgVoteResponse;
                toProto(message: _65.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _65.MsgVoteResponse): _65.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _65.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.MsgVoteWeighted;
                fromPartial(object: Partial<_65.MsgVoteWeighted>): _65.MsgVoteWeighted;
                fromAmino(object: _65.MsgVoteWeightedAmino): _65.MsgVoteWeighted;
                toAmino(message: _65.MsgVoteWeighted): _65.MsgVoteWeightedAmino;
                fromAminoMsg(object: _65.MsgVoteWeightedAminoMsg): _65.MsgVoteWeighted;
                toAminoMsg(message: _65.MsgVoteWeighted): _65.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _65.MsgVoteWeightedProtoMsg): _65.MsgVoteWeighted;
                toProto(message: _65.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _65.MsgVoteWeighted): _65.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _65.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _65.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_65.MsgVoteWeightedResponse>): _65.MsgVoteWeightedResponse;
                fromAmino(_: _65.MsgVoteWeightedResponseAmino): _65.MsgVoteWeightedResponse;
                toAmino(_: _65.MsgVoteWeightedResponse): _65.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _65.MsgVoteWeightedResponseAminoMsg): _65.MsgVoteWeightedResponse;
                toAminoMsg(message: _65.MsgVoteWeightedResponse): _65.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _65.MsgVoteWeightedResponseProtoMsg): _65.MsgVoteWeightedResponse;
                toProto(message: _65.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _65.MsgVoteWeightedResponse): _65.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _65.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.MsgDeposit;
                fromPartial(object: Partial<_65.MsgDeposit>): _65.MsgDeposit;
                fromAmino(object: _65.MsgDepositAmino): _65.MsgDeposit;
                toAmino(message: _65.MsgDeposit): _65.MsgDepositAmino;
                fromAminoMsg(object: _65.MsgDepositAminoMsg): _65.MsgDeposit;
                toAminoMsg(message: _65.MsgDeposit): _65.MsgDepositAminoMsg;
                fromProtoMsg(message: _65.MsgDepositProtoMsg): _65.MsgDeposit;
                toProto(message: _65.MsgDeposit): Uint8Array;
                toProtoMsg(message: _65.MsgDeposit): _65.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _65.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _65.MsgDepositResponse;
                fromPartial(_: Partial<_65.MsgDepositResponse>): _65.MsgDepositResponse;
                fromAmino(_: _65.MsgDepositResponseAmino): _65.MsgDepositResponse;
                toAmino(_: _65.MsgDepositResponse): _65.MsgDepositResponseAmino;
                fromAminoMsg(object: _65.MsgDepositResponseAminoMsg): _65.MsgDepositResponse;
                toAminoMsg(message: _65.MsgDepositResponse): _65.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _65.MsgDepositResponseProtoMsg): _65.MsgDepositResponse;
                toProto(message: _65.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _65.MsgDepositResponse): _65.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _63.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _64.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryProposalRequest;
                fromPartial(object: Partial<_64.QueryProposalRequest>): _64.QueryProposalRequest;
                fromAmino(object: _64.QueryProposalRequestAmino): _64.QueryProposalRequest;
                toAmino(message: _64.QueryProposalRequest): _64.QueryProposalRequestAmino;
                fromAminoMsg(object: _64.QueryProposalRequestAminoMsg): _64.QueryProposalRequest;
                toAminoMsg(message: _64.QueryProposalRequest): _64.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _64.QueryProposalRequestProtoMsg): _64.QueryProposalRequest;
                toProto(message: _64.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _64.QueryProposalRequest): _64.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _64.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryProposalResponse;
                fromPartial(object: Partial<_64.QueryProposalResponse>): _64.QueryProposalResponse;
                fromAmino(object: _64.QueryProposalResponseAmino): _64.QueryProposalResponse;
                toAmino(message: _64.QueryProposalResponse): _64.QueryProposalResponseAmino;
                fromAminoMsg(object: _64.QueryProposalResponseAminoMsg): _64.QueryProposalResponse;
                toAminoMsg(message: _64.QueryProposalResponse): _64.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _64.QueryProposalResponseProtoMsg): _64.QueryProposalResponse;
                toProto(message: _64.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _64.QueryProposalResponse): _64.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _64.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryProposalsRequest;
                fromPartial(object: Partial<_64.QueryProposalsRequest>): _64.QueryProposalsRequest;
                fromAmino(object: _64.QueryProposalsRequestAmino): _64.QueryProposalsRequest;
                toAmino(message: _64.QueryProposalsRequest): _64.QueryProposalsRequestAmino;
                fromAminoMsg(object: _64.QueryProposalsRequestAminoMsg): _64.QueryProposalsRequest;
                toAminoMsg(message: _64.QueryProposalsRequest): _64.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _64.QueryProposalsRequestProtoMsg): _64.QueryProposalsRequest;
                toProto(message: _64.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _64.QueryProposalsRequest): _64.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _64.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryProposalsResponse;
                fromPartial(object: Partial<_64.QueryProposalsResponse>): _64.QueryProposalsResponse;
                fromAmino(object: _64.QueryProposalsResponseAmino): _64.QueryProposalsResponse;
                toAmino(message: _64.QueryProposalsResponse): _64.QueryProposalsResponseAmino;
                fromAminoMsg(object: _64.QueryProposalsResponseAminoMsg): _64.QueryProposalsResponse;
                toAminoMsg(message: _64.QueryProposalsResponse): _64.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _64.QueryProposalsResponseProtoMsg): _64.QueryProposalsResponse;
                toProto(message: _64.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _64.QueryProposalsResponse): _64.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _64.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryVoteRequest;
                fromPartial(object: Partial<_64.QueryVoteRequest>): _64.QueryVoteRequest;
                fromAmino(object: _64.QueryVoteRequestAmino): _64.QueryVoteRequest;
                toAmino(message: _64.QueryVoteRequest): _64.QueryVoteRequestAmino;
                fromAminoMsg(object: _64.QueryVoteRequestAminoMsg): _64.QueryVoteRequest;
                toAminoMsg(message: _64.QueryVoteRequest): _64.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _64.QueryVoteRequestProtoMsg): _64.QueryVoteRequest;
                toProto(message: _64.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _64.QueryVoteRequest): _64.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _64.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryVoteResponse;
                fromPartial(object: Partial<_64.QueryVoteResponse>): _64.QueryVoteResponse;
                fromAmino(object: _64.QueryVoteResponseAmino): _64.QueryVoteResponse;
                toAmino(message: _64.QueryVoteResponse): _64.QueryVoteResponseAmino;
                fromAminoMsg(object: _64.QueryVoteResponseAminoMsg): _64.QueryVoteResponse;
                toAminoMsg(message: _64.QueryVoteResponse): _64.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _64.QueryVoteResponseProtoMsg): _64.QueryVoteResponse;
                toProto(message: _64.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _64.QueryVoteResponse): _64.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _64.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryVotesRequest;
                fromPartial(object: Partial<_64.QueryVotesRequest>): _64.QueryVotesRequest;
                fromAmino(object: _64.QueryVotesRequestAmino): _64.QueryVotesRequest;
                toAmino(message: _64.QueryVotesRequest): _64.QueryVotesRequestAmino;
                fromAminoMsg(object: _64.QueryVotesRequestAminoMsg): _64.QueryVotesRequest;
                toAminoMsg(message: _64.QueryVotesRequest): _64.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _64.QueryVotesRequestProtoMsg): _64.QueryVotesRequest;
                toProto(message: _64.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _64.QueryVotesRequest): _64.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _64.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryVotesResponse;
                fromPartial(object: Partial<_64.QueryVotesResponse>): _64.QueryVotesResponse;
                fromAmino(object: _64.QueryVotesResponseAmino): _64.QueryVotesResponse;
                toAmino(message: _64.QueryVotesResponse): _64.QueryVotesResponseAmino;
                fromAminoMsg(object: _64.QueryVotesResponseAminoMsg): _64.QueryVotesResponse;
                toAminoMsg(message: _64.QueryVotesResponse): _64.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _64.QueryVotesResponseProtoMsg): _64.QueryVotesResponse;
                toProto(message: _64.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _64.QueryVotesResponse): _64.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _64.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryParamsRequest;
                fromPartial(object: Partial<_64.QueryParamsRequest>): _64.QueryParamsRequest;
                fromAmino(object: _64.QueryParamsRequestAmino): _64.QueryParamsRequest;
                toAmino(message: _64.QueryParamsRequest): _64.QueryParamsRequestAmino;
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
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _64.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryDepositRequest;
                fromPartial(object: Partial<_64.QueryDepositRequest>): _64.QueryDepositRequest;
                fromAmino(object: _64.QueryDepositRequestAmino): _64.QueryDepositRequest;
                toAmino(message: _64.QueryDepositRequest): _64.QueryDepositRequestAmino;
                fromAminoMsg(object: _64.QueryDepositRequestAminoMsg): _64.QueryDepositRequest;
                toAminoMsg(message: _64.QueryDepositRequest): _64.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _64.QueryDepositRequestProtoMsg): _64.QueryDepositRequest;
                toProto(message: _64.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _64.QueryDepositRequest): _64.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _64.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryDepositResponse;
                fromPartial(object: Partial<_64.QueryDepositResponse>): _64.QueryDepositResponse;
                fromAmino(object: _64.QueryDepositResponseAmino): _64.QueryDepositResponse;
                toAmino(message: _64.QueryDepositResponse): _64.QueryDepositResponseAmino;
                fromAminoMsg(object: _64.QueryDepositResponseAminoMsg): _64.QueryDepositResponse;
                toAminoMsg(message: _64.QueryDepositResponse): _64.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _64.QueryDepositResponseProtoMsg): _64.QueryDepositResponse;
                toProto(message: _64.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _64.QueryDepositResponse): _64.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _64.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryDepositsRequest;
                fromPartial(object: Partial<_64.QueryDepositsRequest>): _64.QueryDepositsRequest;
                fromAmino(object: _64.QueryDepositsRequestAmino): _64.QueryDepositsRequest;
                toAmino(message: _64.QueryDepositsRequest): _64.QueryDepositsRequestAmino;
                fromAminoMsg(object: _64.QueryDepositsRequestAminoMsg): _64.QueryDepositsRequest;
                toAminoMsg(message: _64.QueryDepositsRequest): _64.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _64.QueryDepositsRequestProtoMsg): _64.QueryDepositsRequest;
                toProto(message: _64.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _64.QueryDepositsRequest): _64.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _64.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryDepositsResponse;
                fromPartial(object: Partial<_64.QueryDepositsResponse>): _64.QueryDepositsResponse;
                fromAmino(object: _64.QueryDepositsResponseAmino): _64.QueryDepositsResponse;
                toAmino(message: _64.QueryDepositsResponse): _64.QueryDepositsResponseAmino;
                fromAminoMsg(object: _64.QueryDepositsResponseAminoMsg): _64.QueryDepositsResponse;
                toAminoMsg(message: _64.QueryDepositsResponse): _64.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _64.QueryDepositsResponseProtoMsg): _64.QueryDepositsResponse;
                toProto(message: _64.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _64.QueryDepositsResponse): _64.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _64.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryTallyResultRequest;
                fromPartial(object: Partial<_64.QueryTallyResultRequest>): _64.QueryTallyResultRequest;
                fromAmino(object: _64.QueryTallyResultRequestAmino): _64.QueryTallyResultRequest;
                toAmino(message: _64.QueryTallyResultRequest): _64.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _64.QueryTallyResultRequestAminoMsg): _64.QueryTallyResultRequest;
                toAminoMsg(message: _64.QueryTallyResultRequest): _64.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _64.QueryTallyResultRequestProtoMsg): _64.QueryTallyResultRequest;
                toProto(message: _64.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _64.QueryTallyResultRequest): _64.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _64.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryTallyResultResponse;
                fromPartial(object: Partial<_64.QueryTallyResultResponse>): _64.QueryTallyResultResponse;
                fromAmino(object: _64.QueryTallyResultResponseAmino): _64.QueryTallyResultResponse;
                toAmino(message: _64.QueryTallyResultResponse): _64.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _64.QueryTallyResultResponseAminoMsg): _64.QueryTallyResultResponse;
                toAminoMsg(message: _64.QueryTallyResultResponse): _64.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _64.QueryTallyResultResponseProtoMsg): _64.QueryTallyResultResponse;
                toProto(message: _64.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _64.QueryTallyResultResponse): _64.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _63.VoteOption;
            voteOptionToJSON(object: _63.VoteOption): string;
            proposalStatusFromJSON(object: any): _63.ProposalStatus;
            proposalStatusToJSON(object: _63.ProposalStatus): string;
            VoteOption: typeof _63.VoteOption;
            VoteOptionSDKType: typeof _63.VoteOption;
            VoteOptionAmino: typeof _63.VoteOption;
            ProposalStatus: typeof _63.ProposalStatus;
            ProposalStatusSDKType: typeof _63.ProposalStatus;
            ProposalStatusAmino: typeof _63.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _63.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.WeightedVoteOption;
                fromPartial(object: Partial<_63.WeightedVoteOption>): _63.WeightedVoteOption;
                fromAmino(object: _63.WeightedVoteOptionAmino): _63.WeightedVoteOption;
                toAmino(message: _63.WeightedVoteOption): _63.WeightedVoteOptionAmino;
                fromAminoMsg(object: _63.WeightedVoteOptionAminoMsg): _63.WeightedVoteOption;
                toAminoMsg(message: _63.WeightedVoteOption): _63.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _63.WeightedVoteOptionProtoMsg): _63.WeightedVoteOption;
                toProto(message: _63.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _63.WeightedVoteOption): _63.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _63.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.TextProposal;
                fromPartial(object: Partial<_63.TextProposal>): _63.TextProposal;
                fromAmino(object: _63.TextProposalAmino): _63.TextProposal;
                toAmino(message: _63.TextProposal): _63.TextProposalAmino;
                fromAminoMsg(object: _63.TextProposalAminoMsg): _63.TextProposal;
                toAminoMsg(message: _63.TextProposal): _63.TextProposalAminoMsg;
                fromProtoMsg(message: _63.TextProposalProtoMsg): _63.TextProposal;
                toProto(message: _63.TextProposal): Uint8Array;
                toProtoMsg(message: _63.TextProposal): _63.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _63.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.Deposit;
                fromPartial(object: Partial<_63.Deposit>): _63.Deposit;
                fromAmino(object: _63.DepositAmino): _63.Deposit;
                toAmino(message: _63.Deposit): _63.DepositAmino;
                fromAminoMsg(object: _63.DepositAminoMsg): _63.Deposit;
                toAminoMsg(message: _63.Deposit): _63.DepositAminoMsg;
                fromProtoMsg(message: _63.DepositProtoMsg): _63.Deposit;
                toProto(message: _63.Deposit): Uint8Array;
                toProtoMsg(message: _63.Deposit): _63.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _63.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.Proposal;
                fromPartial(object: Partial<_63.Proposal>): _63.Proposal;
                fromAmino(object: _63.ProposalAmino): _63.Proposal;
                toAmino(message: _63.Proposal): _63.ProposalAmino;
                fromAminoMsg(object: _63.ProposalAminoMsg): _63.Proposal;
                toAminoMsg(message: _63.Proposal): _63.ProposalAminoMsg;
                fromProtoMsg(message: _63.ProposalProtoMsg): _63.Proposal;
                toProto(message: _63.Proposal): Uint8Array;
                toProtoMsg(message: _63.Proposal): _63.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _63.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.TallyResult;
                fromPartial(object: Partial<_63.TallyResult>): _63.TallyResult;
                fromAmino(object: _63.TallyResultAmino): _63.TallyResult;
                toAmino(message: _63.TallyResult): _63.TallyResultAmino;
                fromAminoMsg(object: _63.TallyResultAminoMsg): _63.TallyResult;
                toAminoMsg(message: _63.TallyResult): _63.TallyResultAminoMsg;
                fromProtoMsg(message: _63.TallyResultProtoMsg): _63.TallyResult;
                toProto(message: _63.TallyResult): Uint8Array;
                toProtoMsg(message: _63.TallyResult): _63.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _63.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.Vote;
                fromPartial(object: Partial<_63.Vote>): _63.Vote;
                fromAmino(object: _63.VoteAmino): _63.Vote;
                toAmino(message: _63.Vote): _63.VoteAmino;
                fromAminoMsg(object: _63.VoteAminoMsg): _63.Vote;
                toAminoMsg(message: _63.Vote): _63.VoteAminoMsg;
                fromProtoMsg(message: _63.VoteProtoMsg): _63.Vote;
                toProto(message: _63.Vote): Uint8Array;
                toProtoMsg(message: _63.Vote): _63.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _63.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.DepositParams;
                fromPartial(object: Partial<_63.DepositParams>): _63.DepositParams;
                fromAmino(object: _63.DepositParamsAmino): _63.DepositParams;
                toAmino(message: _63.DepositParams): _63.DepositParamsAmino;
                fromAminoMsg(object: _63.DepositParamsAminoMsg): _63.DepositParams;
                toAminoMsg(message: _63.DepositParams): _63.DepositParamsAminoMsg;
                fromProtoMsg(message: _63.DepositParamsProtoMsg): _63.DepositParams;
                toProto(message: _63.DepositParams): Uint8Array;
                toProtoMsg(message: _63.DepositParams): _63.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _63.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.VotingParams;
                fromPartial(object: Partial<_63.VotingParams>): _63.VotingParams;
                fromAmino(object: _63.VotingParamsAmino): _63.VotingParams;
                toAmino(message: _63.VotingParams): _63.VotingParamsAmino;
                fromAminoMsg(object: _63.VotingParamsAminoMsg): _63.VotingParams;
                toAminoMsg(message: _63.VotingParams): _63.VotingParamsAminoMsg;
                fromProtoMsg(message: _63.VotingParamsProtoMsg): _63.VotingParams;
                toProto(message: _63.VotingParams): Uint8Array;
                toProtoMsg(message: _63.VotingParams): _63.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _63.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.TallyParams;
                fromPartial(object: Partial<_63.TallyParams>): _63.TallyParams;
                fromAmino(object: _63.TallyParamsAmino): _63.TallyParams;
                toAmino(message: _63.TallyParams): _63.TallyParamsAmino;
                fromAminoMsg(object: _63.TallyParamsAminoMsg): _63.TallyParams;
                toAminoMsg(message: _63.TallyParams): _63.TallyParamsAminoMsg;
                fromProtoMsg(message: _63.TallyParamsProtoMsg): _63.TallyParams;
                toProto(message: _63.TallyParams): Uint8Array;
                toProtoMsg(message: _63.TallyParams): _63.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _62.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.GenesisState;
                fromPartial(object: Partial<_62.GenesisState>): _62.GenesisState;
                fromAmino(object: _62.GenesisStateAmino): _62.GenesisState;
                toAmino(message: _62.GenesisState): _62.GenesisStateAmino;
                fromAminoMsg(object: _62.GenesisStateAminoMsg): _62.GenesisState;
                toAminoMsg(message: _62.GenesisState): _62.GenesisStateAminoMsg;
                fromProtoMsg(message: _62.GenesisStateProtoMsg): _62.GenesisState;
                toProto(message: _62.GenesisState): Uint8Array;
                toProtoMsg(message: _62.GenesisState): _62.GenesisStateProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _165.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _68.QueryParamsRequest): Promise<_68.QueryParamsResponse>;
                inflation(request?: _68.QueryInflationRequest): Promise<_68.QueryInflationResponse>;
                annualProvisions(request?: _68.QueryAnnualProvisionsRequest): Promise<_68.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _150.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _68.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _68.QueryParamsRequest;
                fromPartial(_: Partial<_68.QueryParamsRequest>): _68.QueryParamsRequest;
                fromAmino(_: _68.QueryParamsRequestAmino): _68.QueryParamsRequest;
                toAmino(_: _68.QueryParamsRequest): _68.QueryParamsRequestAmino;
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
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _68.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _68.QueryInflationRequest;
                fromPartial(_: Partial<_68.QueryInflationRequest>): _68.QueryInflationRequest;
                fromAmino(_: _68.QueryInflationRequestAmino): _68.QueryInflationRequest;
                toAmino(_: _68.QueryInflationRequest): _68.QueryInflationRequestAmino;
                fromAminoMsg(object: _68.QueryInflationRequestAminoMsg): _68.QueryInflationRequest;
                toAminoMsg(message: _68.QueryInflationRequest): _68.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _68.QueryInflationRequestProtoMsg): _68.QueryInflationRequest;
                toProto(message: _68.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _68.QueryInflationRequest): _68.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _68.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryInflationResponse;
                fromPartial(object: Partial<_68.QueryInflationResponse>): _68.QueryInflationResponse;
                fromAmino(object: _68.QueryInflationResponseAmino): _68.QueryInflationResponse;
                toAmino(message: _68.QueryInflationResponse): _68.QueryInflationResponseAmino;
                fromAminoMsg(object: _68.QueryInflationResponseAminoMsg): _68.QueryInflationResponse;
                toAminoMsg(message: _68.QueryInflationResponse): _68.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _68.QueryInflationResponseProtoMsg): _68.QueryInflationResponse;
                toProto(message: _68.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _68.QueryInflationResponse): _68.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _68.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _68.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_68.QueryAnnualProvisionsRequest>): _68.QueryAnnualProvisionsRequest;
                fromAmino(_: _68.QueryAnnualProvisionsRequestAmino): _68.QueryAnnualProvisionsRequest;
                toAmino(_: _68.QueryAnnualProvisionsRequest): _68.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _68.QueryAnnualProvisionsRequestAminoMsg): _68.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _68.QueryAnnualProvisionsRequest): _68.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _68.QueryAnnualProvisionsRequestProtoMsg): _68.QueryAnnualProvisionsRequest;
                toProto(message: _68.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _68.QueryAnnualProvisionsRequest): _68.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _68.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_68.QueryAnnualProvisionsResponse>): _68.QueryAnnualProvisionsResponse;
                fromAmino(object: _68.QueryAnnualProvisionsResponseAmino): _68.QueryAnnualProvisionsResponse;
                toAmino(message: _68.QueryAnnualProvisionsResponse): _68.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _68.QueryAnnualProvisionsResponseAminoMsg): _68.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _68.QueryAnnualProvisionsResponse): _68.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _68.QueryAnnualProvisionsResponseProtoMsg): _68.QueryAnnualProvisionsResponse;
                toProto(message: _68.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _68.QueryAnnualProvisionsResponse): _68.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _67.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.Minter;
                fromPartial(object: Partial<_67.Minter>): _67.Minter;
                fromAmino(object: _67.MinterAmino): _67.Minter;
                toAmino(message: _67.Minter): _67.MinterAmino;
                fromAminoMsg(object: _67.MinterAminoMsg): _67.Minter;
                toAminoMsg(message: _67.Minter): _67.MinterAminoMsg;
                fromProtoMsg(message: _67.MinterProtoMsg): _67.Minter;
                toProto(message: _67.Minter): Uint8Array;
                toProtoMsg(message: _67.Minter): _67.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _67.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.Params;
                fromPartial(object: Partial<_67.Params>): _67.Params;
                fromAmino(object: _67.ParamsAmino): _67.Params;
                toAmino(message: _67.Params): _67.ParamsAmino;
                fromAminoMsg(object: _67.ParamsAminoMsg): _67.Params;
                toAminoMsg(message: _67.Params): _67.ParamsAminoMsg;
                fromProtoMsg(message: _67.ParamsProtoMsg): _67.Params;
                toProto(message: _67.Params): Uint8Array;
                toProtoMsg(message: _67.Params): _67.ParamsProtoMsg;
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
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _166.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _70.QueryParamsRequest): Promise<_70.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _151.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _70.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryParamsRequest;
                fromPartial(object: Partial<_70.QueryParamsRequest>): _70.QueryParamsRequest;
                fromAmino(object: _70.QueryParamsRequestAmino): _70.QueryParamsRequest;
                toAmino(message: _70.QueryParamsRequest): _70.QueryParamsRequestAmino;
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
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _69.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.ParameterChangeProposal;
                fromPartial(object: Partial<_69.ParameterChangeProposal>): _69.ParameterChangeProposal;
                fromAmino(object: _69.ParameterChangeProposalAmino): _69.ParameterChangeProposal;
                toAmino(message: _69.ParameterChangeProposal): _69.ParameterChangeProposalAmino;
                fromAminoMsg(object: _69.ParameterChangeProposalAminoMsg): _69.ParameterChangeProposal;
                toAminoMsg(message: _69.ParameterChangeProposal): _69.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _69.ParameterChangeProposalProtoMsg): _69.ParameterChangeProposal;
                toProto(message: _69.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _69.ParameterChangeProposal): _69.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _69.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.ParamChange;
                fromPartial(object: Partial<_69.ParamChange>): _69.ParamChange;
                fromAmino(object: _69.ParamChangeAmino): _69.ParamChange;
                toAmino(message: _69.ParamChange): _69.ParamChangeAmino;
                fromAminoMsg(object: _69.ParamChangeAminoMsg): _69.ParamChange;
                toAminoMsg(message: _69.ParamChange): _69.ParamChangeAminoMsg;
                fromProtoMsg(message: _69.ParamChangeProtoMsg): _69.ParamChange;
                toProto(message: _69.ParamChange): Uint8Array;
                toProtoMsg(message: _69.ParamChange): _69.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _178.MsgClientImpl;
            QueryClientImpl: typeof _167.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _72.QueryParamsRequest): Promise<_72.QueryParamsResponse>;
                signingInfo(request: _72.QuerySigningInfoRequest): Promise<_72.QuerySigningInfoResponse>;
                signingInfos(request?: _72.QuerySigningInfosRequest): Promise<_72.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _152.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _74.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _74.MsgUnjail): {
                        typeUrl: string;
                        value: _74.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _74.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _74.MsgUnjail): {
                        typeUrl: string;
                        value: _74.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _74.MsgUnjail) => _74.MsgUnjailAmino;
                    fromAmino: (object: _74.MsgUnjailAmino) => _74.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _74.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.MsgUnjail;
                fromPartial(object: Partial<_74.MsgUnjail>): _74.MsgUnjail;
                fromAmino(object: _74.MsgUnjailAmino): _74.MsgUnjail;
                toAmino(message: _74.MsgUnjail): _74.MsgUnjailAmino;
                fromAminoMsg(object: _74.MsgUnjailAminoMsg): _74.MsgUnjail;
                toAminoMsg(message: _74.MsgUnjail): _74.MsgUnjailAminoMsg;
                fromProtoMsg(message: _74.MsgUnjailProtoMsg): _74.MsgUnjail;
                toProto(message: _74.MsgUnjail): Uint8Array;
                toProtoMsg(message: _74.MsgUnjail): _74.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _74.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _74.MsgUnjailResponse;
                fromPartial(_: Partial<_74.MsgUnjailResponse>): _74.MsgUnjailResponse;
                fromAmino(_: _74.MsgUnjailResponseAmino): _74.MsgUnjailResponse;
                toAmino(_: _74.MsgUnjailResponse): _74.MsgUnjailResponseAmino;
                fromAminoMsg(object: _74.MsgUnjailResponseAminoMsg): _74.MsgUnjailResponse;
                toAminoMsg(message: _74.MsgUnjailResponse): _74.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _74.MsgUnjailResponseProtoMsg): _74.MsgUnjailResponse;
                toProto(message: _74.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _74.MsgUnjailResponse): _74.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _73.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.ValidatorSigningInfo;
                fromPartial(object: Partial<_73.ValidatorSigningInfo>): _73.ValidatorSigningInfo;
                fromAmino(object: _73.ValidatorSigningInfoAmino): _73.ValidatorSigningInfo;
                toAmino(message: _73.ValidatorSigningInfo): _73.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _73.ValidatorSigningInfoAminoMsg): _73.ValidatorSigningInfo;
                toAminoMsg(message: _73.ValidatorSigningInfo): _73.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _73.ValidatorSigningInfoProtoMsg): _73.ValidatorSigningInfo;
                toProto(message: _73.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _73.ValidatorSigningInfo): _73.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _73.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.Params;
                fromPartial(object: Partial<_73.Params>): _73.Params;
                fromAmino(object: _73.ParamsAmino): _73.Params;
                toAmino(message: _73.Params): _73.ParamsAmino;
                fromAminoMsg(object: _73.ParamsAminoMsg): _73.Params;
                toAminoMsg(message: _73.Params): _73.ParamsAminoMsg;
                fromProtoMsg(message: _73.ParamsProtoMsg): _73.Params;
                toProto(message: _73.Params): Uint8Array;
                toProtoMsg(message: _73.Params): _73.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _72.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _72.QueryParamsRequest;
                fromPartial(_: Partial<_72.QueryParamsRequest>): _72.QueryParamsRequest;
                fromAmino(_: _72.QueryParamsRequestAmino): _72.QueryParamsRequest;
                toAmino(_: _72.QueryParamsRequest): _72.QueryParamsRequestAmino;
                fromAminoMsg(object: _72.QueryParamsRequestAminoMsg): _72.QueryParamsRequest;
                toAminoMsg(message: _72.QueryParamsRequest): _72.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _72.QueryParamsRequestProtoMsg): _72.QueryParamsRequest;
                toProto(message: _72.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _72.QueryParamsRequest): _72.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _72.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryParamsResponse;
                fromPartial(object: Partial<_72.QueryParamsResponse>): _72.QueryParamsResponse;
                fromAmino(object: _72.QueryParamsResponseAmino): _72.QueryParamsResponse;
                toAmino(message: _72.QueryParamsResponse): _72.QueryParamsResponseAmino;
                fromAminoMsg(object: _72.QueryParamsResponseAminoMsg): _72.QueryParamsResponse;
                toAminoMsg(message: _72.QueryParamsResponse): _72.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _72.QueryParamsResponseProtoMsg): _72.QueryParamsResponse;
                toProto(message: _72.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _72.QueryParamsResponse): _72.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _72.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QuerySigningInfoRequest;
                fromPartial(object: Partial<_72.QuerySigningInfoRequest>): _72.QuerySigningInfoRequest;
                fromAmino(object: _72.QuerySigningInfoRequestAmino): _72.QuerySigningInfoRequest;
                toAmino(message: _72.QuerySigningInfoRequest): _72.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _72.QuerySigningInfoRequestAminoMsg): _72.QuerySigningInfoRequest;
                toAminoMsg(message: _72.QuerySigningInfoRequest): _72.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _72.QuerySigningInfoRequestProtoMsg): _72.QuerySigningInfoRequest;
                toProto(message: _72.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _72.QuerySigningInfoRequest): _72.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _72.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QuerySigningInfoResponse;
                fromPartial(object: Partial<_72.QuerySigningInfoResponse>): _72.QuerySigningInfoResponse;
                fromAmino(object: _72.QuerySigningInfoResponseAmino): _72.QuerySigningInfoResponse;
                toAmino(message: _72.QuerySigningInfoResponse): _72.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _72.QuerySigningInfoResponseAminoMsg): _72.QuerySigningInfoResponse;
                toAminoMsg(message: _72.QuerySigningInfoResponse): _72.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _72.QuerySigningInfoResponseProtoMsg): _72.QuerySigningInfoResponse;
                toProto(message: _72.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _72.QuerySigningInfoResponse): _72.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _72.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QuerySigningInfosRequest;
                fromPartial(object: Partial<_72.QuerySigningInfosRequest>): _72.QuerySigningInfosRequest;
                fromAmino(object: _72.QuerySigningInfosRequestAmino): _72.QuerySigningInfosRequest;
                toAmino(message: _72.QuerySigningInfosRequest): _72.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _72.QuerySigningInfosRequestAminoMsg): _72.QuerySigningInfosRequest;
                toAminoMsg(message: _72.QuerySigningInfosRequest): _72.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _72.QuerySigningInfosRequestProtoMsg): _72.QuerySigningInfosRequest;
                toProto(message: _72.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _72.QuerySigningInfosRequest): _72.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _72.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QuerySigningInfosResponse;
                fromPartial(object: Partial<_72.QuerySigningInfosResponse>): _72.QuerySigningInfosResponse;
                fromAmino(object: _72.QuerySigningInfosResponseAmino): _72.QuerySigningInfosResponse;
                toAmino(message: _72.QuerySigningInfosResponse): _72.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _72.QuerySigningInfosResponseAminoMsg): _72.QuerySigningInfosResponse;
                toAminoMsg(message: _72.QuerySigningInfosResponse): _72.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _72.QuerySigningInfosResponseProtoMsg): _72.QuerySigningInfosResponse;
                toProto(message: _72.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _72.QuerySigningInfosResponse): _72.QuerySigningInfosResponseProtoMsg;
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
            SigningInfo: {
                typeUrl: string;
                encode(message: _71.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.SigningInfo;
                fromPartial(object: Partial<_71.SigningInfo>): _71.SigningInfo;
                fromAmino(object: _71.SigningInfoAmino): _71.SigningInfo;
                toAmino(message: _71.SigningInfo): _71.SigningInfoAmino;
                fromAminoMsg(object: _71.SigningInfoAminoMsg): _71.SigningInfo;
                toAminoMsg(message: _71.SigningInfo): _71.SigningInfoAminoMsg;
                fromProtoMsg(message: _71.SigningInfoProtoMsg): _71.SigningInfo;
                toProto(message: _71.SigningInfo): Uint8Array;
                toProtoMsg(message: _71.SigningInfo): _71.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _71.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.ValidatorMissedBlocks;
                fromPartial(object: Partial<_71.ValidatorMissedBlocks>): _71.ValidatorMissedBlocks;
                fromAmino(object: _71.ValidatorMissedBlocksAmino): _71.ValidatorMissedBlocks;
                toAmino(message: _71.ValidatorMissedBlocks): _71.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _71.ValidatorMissedBlocksAminoMsg): _71.ValidatorMissedBlocks;
                toAminoMsg(message: _71.ValidatorMissedBlocks): _71.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _71.ValidatorMissedBlocksProtoMsg): _71.ValidatorMissedBlocks;
                toProto(message: _71.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _71.ValidatorMissedBlocks): _71.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _71.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.MissedBlock;
                fromPartial(object: Partial<_71.MissedBlock>): _71.MissedBlock;
                fromAmino(object: _71.MissedBlockAmino): _71.MissedBlock;
                toAmino(message: _71.MissedBlock): _71.MissedBlockAmino;
                fromAminoMsg(object: _71.MissedBlockAminoMsg): _71.MissedBlock;
                toAminoMsg(message: _71.MissedBlock): _71.MissedBlockAminoMsg;
                fromProtoMsg(message: _71.MissedBlockProtoMsg): _71.MissedBlock;
                toProto(message: _71.MissedBlock): Uint8Array;
                toProtoMsg(message: _71.MissedBlock): _71.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _179.MsgClientImpl;
            QueryClientImpl: typeof _168.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _77.QueryValidatorsRequest): Promise<_77.QueryValidatorsResponse>;
                validator(request: _77.QueryValidatorRequest): Promise<_77.QueryValidatorResponse>;
                validatorDelegations(request: _77.QueryValidatorDelegationsRequest): Promise<_77.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _77.QueryValidatorUnbondingDelegationsRequest): Promise<_77.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _77.QueryDelegationRequest): Promise<_77.QueryDelegationResponse>;
                unbondingDelegation(request: _77.QueryUnbondingDelegationRequest): Promise<_77.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _77.QueryDelegatorDelegationsRequest): Promise<_77.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _77.QueryDelegatorUnbondingDelegationsRequest): Promise<_77.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _77.QueryRedelegationsRequest): Promise<_77.QueryRedelegationsResponse>;
                delegatorValidators(request: _77.QueryDelegatorValidatorsRequest): Promise<_77.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _77.QueryDelegatorValidatorRequest): Promise<_77.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _77.QueryHistoricalInfoRequest): Promise<_77.QueryHistoricalInfoResponse>;
                pool(request?: _77.QueryPoolRequest): Promise<_77.QueryPoolResponse>;
                params(request?: _77.QueryParamsRequest): Promise<_77.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _153.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _79.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _79.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _79.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _79.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _79.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _79.MsgCreateValidator): {
                        typeUrl: string;
                        value: _79.MsgCreateValidator;
                    };
                    editValidator(value: _79.MsgEditValidator): {
                        typeUrl: string;
                        value: _79.MsgEditValidator;
                    };
                    delegate(value: _79.MsgDelegate): {
                        typeUrl: string;
                        value: _79.MsgDelegate;
                    };
                    beginRedelegate(value: _79.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _79.MsgBeginRedelegate;
                    };
                    undelegate(value: _79.MsgUndelegate): {
                        typeUrl: string;
                        value: _79.MsgUndelegate;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _79.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _79.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _79.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _79.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _79.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _79.MsgCreateValidator): {
                        typeUrl: string;
                        value: _79.MsgCreateValidator;
                    };
                    editValidator(value: _79.MsgEditValidator): {
                        typeUrl: string;
                        value: _79.MsgEditValidator;
                    };
                    delegate(value: _79.MsgDelegate): {
                        typeUrl: string;
                        value: _79.MsgDelegate;
                    };
                    beginRedelegate(value: _79.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _79.MsgBeginRedelegate;
                    };
                    undelegate(value: _79.MsgUndelegate): {
                        typeUrl: string;
                        value: _79.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _79.MsgCreateValidator) => _79.MsgCreateValidatorAmino;
                    fromAmino: (object: _79.MsgCreateValidatorAmino) => _79.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _79.MsgEditValidator) => _79.MsgEditValidatorAmino;
                    fromAmino: (object: _79.MsgEditValidatorAmino) => _79.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _79.MsgDelegate) => _79.MsgDelegateAmino;
                    fromAmino: (object: _79.MsgDelegateAmino) => _79.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _79.MsgBeginRedelegate) => _79.MsgBeginRedelegateAmino;
                    fromAmino: (object: _79.MsgBeginRedelegateAmino) => _79.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _79.MsgUndelegate) => _79.MsgUndelegateAmino;
                    fromAmino: (object: _79.MsgUndelegateAmino) => _79.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _79.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.MsgCreateValidator;
                fromPartial(object: Partial<_79.MsgCreateValidator>): _79.MsgCreateValidator;
                fromAmino(object: _79.MsgCreateValidatorAmino): _79.MsgCreateValidator;
                toAmino(message: _79.MsgCreateValidator): _79.MsgCreateValidatorAmino;
                fromAminoMsg(object: _79.MsgCreateValidatorAminoMsg): _79.MsgCreateValidator;
                toAminoMsg(message: _79.MsgCreateValidator): _79.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _79.MsgCreateValidatorProtoMsg): _79.MsgCreateValidator;
                toProto(message: _79.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _79.MsgCreateValidator): _79.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _79.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _79.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_79.MsgCreateValidatorResponse>): _79.MsgCreateValidatorResponse;
                fromAmino(_: _79.MsgCreateValidatorResponseAmino): _79.MsgCreateValidatorResponse;
                toAmino(_: _79.MsgCreateValidatorResponse): _79.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _79.MsgCreateValidatorResponseAminoMsg): _79.MsgCreateValidatorResponse;
                toAminoMsg(message: _79.MsgCreateValidatorResponse): _79.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _79.MsgCreateValidatorResponseProtoMsg): _79.MsgCreateValidatorResponse;
                toProto(message: _79.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _79.MsgCreateValidatorResponse): _79.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _79.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.MsgEditValidator;
                fromPartial(object: Partial<_79.MsgEditValidator>): _79.MsgEditValidator;
                fromAmino(object: _79.MsgEditValidatorAmino): _79.MsgEditValidator;
                toAmino(message: _79.MsgEditValidator): _79.MsgEditValidatorAmino;
                fromAminoMsg(object: _79.MsgEditValidatorAminoMsg): _79.MsgEditValidator;
                toAminoMsg(message: _79.MsgEditValidator): _79.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _79.MsgEditValidatorProtoMsg): _79.MsgEditValidator;
                toProto(message: _79.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _79.MsgEditValidator): _79.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _79.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _79.MsgEditValidatorResponse;
                fromPartial(_: Partial<_79.MsgEditValidatorResponse>): _79.MsgEditValidatorResponse;
                fromAmino(_: _79.MsgEditValidatorResponseAmino): _79.MsgEditValidatorResponse;
                toAmino(_: _79.MsgEditValidatorResponse): _79.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _79.MsgEditValidatorResponseAminoMsg): _79.MsgEditValidatorResponse;
                toAminoMsg(message: _79.MsgEditValidatorResponse): _79.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _79.MsgEditValidatorResponseProtoMsg): _79.MsgEditValidatorResponse;
                toProto(message: _79.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _79.MsgEditValidatorResponse): _79.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _79.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.MsgDelegate;
                fromPartial(object: Partial<_79.MsgDelegate>): _79.MsgDelegate;
                fromAmino(object: _79.MsgDelegateAmino): _79.MsgDelegate;
                toAmino(message: _79.MsgDelegate): _79.MsgDelegateAmino;
                fromAminoMsg(object: _79.MsgDelegateAminoMsg): _79.MsgDelegate;
                toAminoMsg(message: _79.MsgDelegate): _79.MsgDelegateAminoMsg;
                fromProtoMsg(message: _79.MsgDelegateProtoMsg): _79.MsgDelegate;
                toProto(message: _79.MsgDelegate): Uint8Array;
                toProtoMsg(message: _79.MsgDelegate): _79.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _79.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _79.MsgDelegateResponse;
                fromPartial(_: Partial<_79.MsgDelegateResponse>): _79.MsgDelegateResponse;
                fromAmino(_: _79.MsgDelegateResponseAmino): _79.MsgDelegateResponse;
                toAmino(_: _79.MsgDelegateResponse): _79.MsgDelegateResponseAmino;
                fromAminoMsg(object: _79.MsgDelegateResponseAminoMsg): _79.MsgDelegateResponse;
                toAminoMsg(message: _79.MsgDelegateResponse): _79.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _79.MsgDelegateResponseProtoMsg): _79.MsgDelegateResponse;
                toProto(message: _79.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _79.MsgDelegateResponse): _79.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _79.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.MsgBeginRedelegate;
                fromPartial(object: Partial<_79.MsgBeginRedelegate>): _79.MsgBeginRedelegate;
                fromAmino(object: _79.MsgBeginRedelegateAmino): _79.MsgBeginRedelegate;
                toAmino(message: _79.MsgBeginRedelegate): _79.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _79.MsgBeginRedelegateAminoMsg): _79.MsgBeginRedelegate;
                toAminoMsg(message: _79.MsgBeginRedelegate): _79.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _79.MsgBeginRedelegateProtoMsg): _79.MsgBeginRedelegate;
                toProto(message: _79.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _79.MsgBeginRedelegate): _79.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _79.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_79.MsgBeginRedelegateResponse>): _79.MsgBeginRedelegateResponse;
                fromAmino(object: _79.MsgBeginRedelegateResponseAmino): _79.MsgBeginRedelegateResponse;
                toAmino(message: _79.MsgBeginRedelegateResponse): _79.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _79.MsgBeginRedelegateResponseAminoMsg): _79.MsgBeginRedelegateResponse;
                toAminoMsg(message: _79.MsgBeginRedelegateResponse): _79.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _79.MsgBeginRedelegateResponseProtoMsg): _79.MsgBeginRedelegateResponse;
                toProto(message: _79.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _79.MsgBeginRedelegateResponse): _79.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _79.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.MsgUndelegate;
                fromPartial(object: Partial<_79.MsgUndelegate>): _79.MsgUndelegate;
                fromAmino(object: _79.MsgUndelegateAmino): _79.MsgUndelegate;
                toAmino(message: _79.MsgUndelegate): _79.MsgUndelegateAmino;
                fromAminoMsg(object: _79.MsgUndelegateAminoMsg): _79.MsgUndelegate;
                toAminoMsg(message: _79.MsgUndelegate): _79.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _79.MsgUndelegateProtoMsg): _79.MsgUndelegate;
                toProto(message: _79.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _79.MsgUndelegate): _79.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _79.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.MsgUndelegateResponse;
                fromPartial(object: Partial<_79.MsgUndelegateResponse>): _79.MsgUndelegateResponse;
                fromAmino(object: _79.MsgUndelegateResponseAmino): _79.MsgUndelegateResponse;
                toAmino(message: _79.MsgUndelegateResponse): _79.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _79.MsgUndelegateResponseAminoMsg): _79.MsgUndelegateResponse;
                toAminoMsg(message: _79.MsgUndelegateResponse): _79.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _79.MsgUndelegateResponseProtoMsg): _79.MsgUndelegateResponse;
                toProto(message: _79.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _79.MsgUndelegateResponse): _79.MsgUndelegateResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _78.BondStatus;
            bondStatusToJSON(object: _78.BondStatus): string;
            BondStatus: typeof _78.BondStatus;
            BondStatusSDKType: typeof _78.BondStatus;
            BondStatusAmino: typeof _78.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _78.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.HistoricalInfo;
                fromPartial(object: Partial<_78.HistoricalInfo>): _78.HistoricalInfo;
                fromAmino(object: _78.HistoricalInfoAmino): _78.HistoricalInfo;
                toAmino(message: _78.HistoricalInfo): _78.HistoricalInfoAmino;
                fromAminoMsg(object: _78.HistoricalInfoAminoMsg): _78.HistoricalInfo;
                toAminoMsg(message: _78.HistoricalInfo): _78.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _78.HistoricalInfoProtoMsg): _78.HistoricalInfo;
                toProto(message: _78.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _78.HistoricalInfo): _78.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _78.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.CommissionRates;
                fromPartial(object: Partial<_78.CommissionRates>): _78.CommissionRates;
                fromAmino(object: _78.CommissionRatesAmino): _78.CommissionRates;
                toAmino(message: _78.CommissionRates): _78.CommissionRatesAmino;
                fromAminoMsg(object: _78.CommissionRatesAminoMsg): _78.CommissionRates;
                toAminoMsg(message: _78.CommissionRates): _78.CommissionRatesAminoMsg;
                fromProtoMsg(message: _78.CommissionRatesProtoMsg): _78.CommissionRates;
                toProto(message: _78.CommissionRates): Uint8Array;
                toProtoMsg(message: _78.CommissionRates): _78.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _78.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.Commission;
                fromPartial(object: Partial<_78.Commission>): _78.Commission;
                fromAmino(object: _78.CommissionAmino): _78.Commission;
                toAmino(message: _78.Commission): _78.CommissionAmino;
                fromAminoMsg(object: _78.CommissionAminoMsg): _78.Commission;
                toAminoMsg(message: _78.Commission): _78.CommissionAminoMsg;
                fromProtoMsg(message: _78.CommissionProtoMsg): _78.Commission;
                toProto(message: _78.Commission): Uint8Array;
                toProtoMsg(message: _78.Commission): _78.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _78.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.Description;
                fromPartial(object: Partial<_78.Description>): _78.Description;
                fromAmino(object: _78.DescriptionAmino): _78.Description;
                toAmino(message: _78.Description): _78.DescriptionAmino;
                fromAminoMsg(object: _78.DescriptionAminoMsg): _78.Description;
                toAminoMsg(message: _78.Description): _78.DescriptionAminoMsg;
                fromProtoMsg(message: _78.DescriptionProtoMsg): _78.Description;
                toProto(message: _78.Description): Uint8Array;
                toProtoMsg(message: _78.Description): _78.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _78.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.Validator;
                fromPartial(object: Partial<_78.Validator>): _78.Validator;
                fromAmino(object: _78.ValidatorAmino): _78.Validator;
                toAmino(message: _78.Validator): _78.ValidatorAmino;
                fromAminoMsg(object: _78.ValidatorAminoMsg): _78.Validator;
                toAminoMsg(message: _78.Validator): _78.ValidatorAminoMsg;
                fromProtoMsg(message: _78.ValidatorProtoMsg): _78.Validator;
                toProto(message: _78.Validator): Uint8Array;
                toProtoMsg(message: _78.Validator): _78.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _78.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.ValAddresses;
                fromPartial(object: Partial<_78.ValAddresses>): _78.ValAddresses;
                fromAmino(object: _78.ValAddressesAmino): _78.ValAddresses;
                toAmino(message: _78.ValAddresses): _78.ValAddressesAmino;
                fromAminoMsg(object: _78.ValAddressesAminoMsg): _78.ValAddresses;
                toAminoMsg(message: _78.ValAddresses): _78.ValAddressesAminoMsg;
                fromProtoMsg(message: _78.ValAddressesProtoMsg): _78.ValAddresses;
                toProto(message: _78.ValAddresses): Uint8Array;
                toProtoMsg(message: _78.ValAddresses): _78.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _78.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.DVPair;
                fromPartial(object: Partial<_78.DVPair>): _78.DVPair;
                fromAmino(object: _78.DVPairAmino): _78.DVPair;
                toAmino(message: _78.DVPair): _78.DVPairAmino;
                fromAminoMsg(object: _78.DVPairAminoMsg): _78.DVPair;
                toAminoMsg(message: _78.DVPair): _78.DVPairAminoMsg;
                fromProtoMsg(message: _78.DVPairProtoMsg): _78.DVPair;
                toProto(message: _78.DVPair): Uint8Array;
                toProtoMsg(message: _78.DVPair): _78.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _78.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.DVPairs;
                fromPartial(object: Partial<_78.DVPairs>): _78.DVPairs;
                fromAmino(object: _78.DVPairsAmino): _78.DVPairs;
                toAmino(message: _78.DVPairs): _78.DVPairsAmino;
                fromAminoMsg(object: _78.DVPairsAminoMsg): _78.DVPairs;
                toAminoMsg(message: _78.DVPairs): _78.DVPairsAminoMsg;
                fromProtoMsg(message: _78.DVPairsProtoMsg): _78.DVPairs;
                toProto(message: _78.DVPairs): Uint8Array;
                toProtoMsg(message: _78.DVPairs): _78.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _78.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.DVVTriplet;
                fromPartial(object: Partial<_78.DVVTriplet>): _78.DVVTriplet;
                fromAmino(object: _78.DVVTripletAmino): _78.DVVTriplet;
                toAmino(message: _78.DVVTriplet): _78.DVVTripletAmino;
                fromAminoMsg(object: _78.DVVTripletAminoMsg): _78.DVVTriplet;
                toAminoMsg(message: _78.DVVTriplet): _78.DVVTripletAminoMsg;
                fromProtoMsg(message: _78.DVVTripletProtoMsg): _78.DVVTriplet;
                toProto(message: _78.DVVTriplet): Uint8Array;
                toProtoMsg(message: _78.DVVTriplet): _78.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _78.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.DVVTriplets;
                fromPartial(object: Partial<_78.DVVTriplets>): _78.DVVTriplets;
                fromAmino(object: _78.DVVTripletsAmino): _78.DVVTriplets;
                toAmino(message: _78.DVVTriplets): _78.DVVTripletsAmino;
                fromAminoMsg(object: _78.DVVTripletsAminoMsg): _78.DVVTriplets;
                toAminoMsg(message: _78.DVVTriplets): _78.DVVTripletsAminoMsg;
                fromProtoMsg(message: _78.DVVTripletsProtoMsg): _78.DVVTriplets;
                toProto(message: _78.DVVTriplets): Uint8Array;
                toProtoMsg(message: _78.DVVTriplets): _78.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _78.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.Delegation;
                fromPartial(object: Partial<_78.Delegation>): _78.Delegation;
                fromAmino(object: _78.DelegationAmino): _78.Delegation;
                toAmino(message: _78.Delegation): _78.DelegationAmino;
                fromAminoMsg(object: _78.DelegationAminoMsg): _78.Delegation;
                toAminoMsg(message: _78.Delegation): _78.DelegationAminoMsg;
                fromProtoMsg(message: _78.DelegationProtoMsg): _78.Delegation;
                toProto(message: _78.Delegation): Uint8Array;
                toProtoMsg(message: _78.Delegation): _78.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _78.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.UnbondingDelegation;
                fromPartial(object: Partial<_78.UnbondingDelegation>): _78.UnbondingDelegation;
                fromAmino(object: _78.UnbondingDelegationAmino): _78.UnbondingDelegation;
                toAmino(message: _78.UnbondingDelegation): _78.UnbondingDelegationAmino;
                fromAminoMsg(object: _78.UnbondingDelegationAminoMsg): _78.UnbondingDelegation;
                toAminoMsg(message: _78.UnbondingDelegation): _78.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _78.UnbondingDelegationProtoMsg): _78.UnbondingDelegation;
                toProto(message: _78.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _78.UnbondingDelegation): _78.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _78.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.UnbondingDelegationEntry;
                fromPartial(object: Partial<_78.UnbondingDelegationEntry>): _78.UnbondingDelegationEntry;
                fromAmino(object: _78.UnbondingDelegationEntryAmino): _78.UnbondingDelegationEntry;
                toAmino(message: _78.UnbondingDelegationEntry): _78.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _78.UnbondingDelegationEntryAminoMsg): _78.UnbondingDelegationEntry;
                toAminoMsg(message: _78.UnbondingDelegationEntry): _78.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _78.UnbondingDelegationEntryProtoMsg): _78.UnbondingDelegationEntry;
                toProto(message: _78.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _78.UnbondingDelegationEntry): _78.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _78.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.RedelegationEntry;
                fromPartial(object: Partial<_78.RedelegationEntry>): _78.RedelegationEntry;
                fromAmino(object: _78.RedelegationEntryAmino): _78.RedelegationEntry;
                toAmino(message: _78.RedelegationEntry): _78.RedelegationEntryAmino;
                fromAminoMsg(object: _78.RedelegationEntryAminoMsg): _78.RedelegationEntry;
                toAminoMsg(message: _78.RedelegationEntry): _78.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _78.RedelegationEntryProtoMsg): _78.RedelegationEntry;
                toProto(message: _78.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _78.RedelegationEntry): _78.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _78.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.Redelegation;
                fromPartial(object: Partial<_78.Redelegation>): _78.Redelegation;
                fromAmino(object: _78.RedelegationAmino): _78.Redelegation;
                toAmino(message: _78.Redelegation): _78.RedelegationAmino;
                fromAminoMsg(object: _78.RedelegationAminoMsg): _78.Redelegation;
                toAminoMsg(message: _78.Redelegation): _78.RedelegationAminoMsg;
                fromProtoMsg(message: _78.RedelegationProtoMsg): _78.Redelegation;
                toProto(message: _78.Redelegation): Uint8Array;
                toProtoMsg(message: _78.Redelegation): _78.RedelegationProtoMsg;
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
            DelegationResponse: {
                typeUrl: string;
                encode(message: _78.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.DelegationResponse;
                fromPartial(object: Partial<_78.DelegationResponse>): _78.DelegationResponse;
                fromAmino(object: _78.DelegationResponseAmino): _78.DelegationResponse;
                toAmino(message: _78.DelegationResponse): _78.DelegationResponseAmino;
                fromAminoMsg(object: _78.DelegationResponseAminoMsg): _78.DelegationResponse;
                toAminoMsg(message: _78.DelegationResponse): _78.DelegationResponseAminoMsg;
                fromProtoMsg(message: _78.DelegationResponseProtoMsg): _78.DelegationResponse;
                toProto(message: _78.DelegationResponse): Uint8Array;
                toProtoMsg(message: _78.DelegationResponse): _78.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _78.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.RedelegationEntryResponse;
                fromPartial(object: Partial<_78.RedelegationEntryResponse>): _78.RedelegationEntryResponse;
                fromAmino(object: _78.RedelegationEntryResponseAmino): _78.RedelegationEntryResponse;
                toAmino(message: _78.RedelegationEntryResponse): _78.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _78.RedelegationEntryResponseAminoMsg): _78.RedelegationEntryResponse;
                toAminoMsg(message: _78.RedelegationEntryResponse): _78.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _78.RedelegationEntryResponseProtoMsg): _78.RedelegationEntryResponse;
                toProto(message: _78.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _78.RedelegationEntryResponse): _78.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _78.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.RedelegationResponse;
                fromPartial(object: Partial<_78.RedelegationResponse>): _78.RedelegationResponse;
                fromAmino(object: _78.RedelegationResponseAmino): _78.RedelegationResponse;
                toAmino(message: _78.RedelegationResponse): _78.RedelegationResponseAmino;
                fromAminoMsg(object: _78.RedelegationResponseAminoMsg): _78.RedelegationResponse;
                toAminoMsg(message: _78.RedelegationResponse): _78.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _78.RedelegationResponseProtoMsg): _78.RedelegationResponse;
                toProto(message: _78.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _78.RedelegationResponse): _78.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _78.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.Pool;
                fromPartial(object: Partial<_78.Pool>): _78.Pool;
                fromAmino(object: _78.PoolAmino): _78.Pool;
                toAmino(message: _78.Pool): _78.PoolAmino;
                fromAminoMsg(object: _78.PoolAminoMsg): _78.Pool;
                toAminoMsg(message: _78.Pool): _78.PoolAminoMsg;
                fromProtoMsg(message: _78.PoolProtoMsg): _78.Pool;
                toProto(message: _78.Pool): Uint8Array;
                toProtoMsg(message: _78.Pool): _78.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _77.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryValidatorsRequest;
                fromPartial(object: Partial<_77.QueryValidatorsRequest>): _77.QueryValidatorsRequest;
                fromAmino(object: _77.QueryValidatorsRequestAmino): _77.QueryValidatorsRequest;
                toAmino(message: _77.QueryValidatorsRequest): _77.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _77.QueryValidatorsRequestAminoMsg): _77.QueryValidatorsRequest;
                toAminoMsg(message: _77.QueryValidatorsRequest): _77.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _77.QueryValidatorsRequestProtoMsg): _77.QueryValidatorsRequest;
                toProto(message: _77.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _77.QueryValidatorsRequest): _77.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _77.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryValidatorsResponse;
                fromPartial(object: Partial<_77.QueryValidatorsResponse>): _77.QueryValidatorsResponse;
                fromAmino(object: _77.QueryValidatorsResponseAmino): _77.QueryValidatorsResponse;
                toAmino(message: _77.QueryValidatorsResponse): _77.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _77.QueryValidatorsResponseAminoMsg): _77.QueryValidatorsResponse;
                toAminoMsg(message: _77.QueryValidatorsResponse): _77.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _77.QueryValidatorsResponseProtoMsg): _77.QueryValidatorsResponse;
                toProto(message: _77.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _77.QueryValidatorsResponse): _77.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _77.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryValidatorRequest;
                fromPartial(object: Partial<_77.QueryValidatorRequest>): _77.QueryValidatorRequest;
                fromAmino(object: _77.QueryValidatorRequestAmino): _77.QueryValidatorRequest;
                toAmino(message: _77.QueryValidatorRequest): _77.QueryValidatorRequestAmino;
                fromAminoMsg(object: _77.QueryValidatorRequestAminoMsg): _77.QueryValidatorRequest;
                toAminoMsg(message: _77.QueryValidatorRequest): _77.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _77.QueryValidatorRequestProtoMsg): _77.QueryValidatorRequest;
                toProto(message: _77.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _77.QueryValidatorRequest): _77.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _77.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryValidatorResponse;
                fromPartial(object: Partial<_77.QueryValidatorResponse>): _77.QueryValidatorResponse;
                fromAmino(object: _77.QueryValidatorResponseAmino): _77.QueryValidatorResponse;
                toAmino(message: _77.QueryValidatorResponse): _77.QueryValidatorResponseAmino;
                fromAminoMsg(object: _77.QueryValidatorResponseAminoMsg): _77.QueryValidatorResponse;
                toAminoMsg(message: _77.QueryValidatorResponse): _77.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _77.QueryValidatorResponseProtoMsg): _77.QueryValidatorResponse;
                toProto(message: _77.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _77.QueryValidatorResponse): _77.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _77.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_77.QueryValidatorDelegationsRequest>): _77.QueryValidatorDelegationsRequest;
                fromAmino(object: _77.QueryValidatorDelegationsRequestAmino): _77.QueryValidatorDelegationsRequest;
                toAmino(message: _77.QueryValidatorDelegationsRequest): _77.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _77.QueryValidatorDelegationsRequestAminoMsg): _77.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _77.QueryValidatorDelegationsRequest): _77.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _77.QueryValidatorDelegationsRequestProtoMsg): _77.QueryValidatorDelegationsRequest;
                toProto(message: _77.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _77.QueryValidatorDelegationsRequest): _77.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _77.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_77.QueryValidatorDelegationsResponse>): _77.QueryValidatorDelegationsResponse;
                fromAmino(object: _77.QueryValidatorDelegationsResponseAmino): _77.QueryValidatorDelegationsResponse;
                toAmino(message: _77.QueryValidatorDelegationsResponse): _77.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _77.QueryValidatorDelegationsResponseAminoMsg): _77.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _77.QueryValidatorDelegationsResponse): _77.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _77.QueryValidatorDelegationsResponseProtoMsg): _77.QueryValidatorDelegationsResponse;
                toProto(message: _77.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _77.QueryValidatorDelegationsResponse): _77.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _77.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_77.QueryValidatorUnbondingDelegationsRequest>): _77.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _77.QueryValidatorUnbondingDelegationsRequestAmino): _77.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _77.QueryValidatorUnbondingDelegationsRequest): _77.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _77.QueryValidatorUnbondingDelegationsRequestAminoMsg): _77.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _77.QueryValidatorUnbondingDelegationsRequest): _77.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _77.QueryValidatorUnbondingDelegationsRequestProtoMsg): _77.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _77.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _77.QueryValidatorUnbondingDelegationsRequest): _77.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _77.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_77.QueryValidatorUnbondingDelegationsResponse>): _77.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _77.QueryValidatorUnbondingDelegationsResponseAmino): _77.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _77.QueryValidatorUnbondingDelegationsResponse): _77.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _77.QueryValidatorUnbondingDelegationsResponseAminoMsg): _77.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _77.QueryValidatorUnbondingDelegationsResponse): _77.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _77.QueryValidatorUnbondingDelegationsResponseProtoMsg): _77.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _77.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _77.QueryValidatorUnbondingDelegationsResponse): _77.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _77.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryDelegationRequest;
                fromPartial(object: Partial<_77.QueryDelegationRequest>): _77.QueryDelegationRequest;
                fromAmino(object: _77.QueryDelegationRequestAmino): _77.QueryDelegationRequest;
                toAmino(message: _77.QueryDelegationRequest): _77.QueryDelegationRequestAmino;
                fromAminoMsg(object: _77.QueryDelegationRequestAminoMsg): _77.QueryDelegationRequest;
                toAminoMsg(message: _77.QueryDelegationRequest): _77.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _77.QueryDelegationRequestProtoMsg): _77.QueryDelegationRequest;
                toProto(message: _77.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _77.QueryDelegationRequest): _77.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _77.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryDelegationResponse;
                fromPartial(object: Partial<_77.QueryDelegationResponse>): _77.QueryDelegationResponse;
                fromAmino(object: _77.QueryDelegationResponseAmino): _77.QueryDelegationResponse;
                toAmino(message: _77.QueryDelegationResponse): _77.QueryDelegationResponseAmino;
                fromAminoMsg(object: _77.QueryDelegationResponseAminoMsg): _77.QueryDelegationResponse;
                toAminoMsg(message: _77.QueryDelegationResponse): _77.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _77.QueryDelegationResponseProtoMsg): _77.QueryDelegationResponse;
                toProto(message: _77.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _77.QueryDelegationResponse): _77.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _77.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_77.QueryUnbondingDelegationRequest>): _77.QueryUnbondingDelegationRequest;
                fromAmino(object: _77.QueryUnbondingDelegationRequestAmino): _77.QueryUnbondingDelegationRequest;
                toAmino(message: _77.QueryUnbondingDelegationRequest): _77.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _77.QueryUnbondingDelegationRequestAminoMsg): _77.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _77.QueryUnbondingDelegationRequest): _77.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _77.QueryUnbondingDelegationRequestProtoMsg): _77.QueryUnbondingDelegationRequest;
                toProto(message: _77.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _77.QueryUnbondingDelegationRequest): _77.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _77.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_77.QueryUnbondingDelegationResponse>): _77.QueryUnbondingDelegationResponse;
                fromAmino(object: _77.QueryUnbondingDelegationResponseAmino): _77.QueryUnbondingDelegationResponse;
                toAmino(message: _77.QueryUnbondingDelegationResponse): _77.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _77.QueryUnbondingDelegationResponseAminoMsg): _77.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _77.QueryUnbondingDelegationResponse): _77.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _77.QueryUnbondingDelegationResponseProtoMsg): _77.QueryUnbondingDelegationResponse;
                toProto(message: _77.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _77.QueryUnbondingDelegationResponse): _77.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _77.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_77.QueryDelegatorDelegationsRequest>): _77.QueryDelegatorDelegationsRequest;
                fromAmino(object: _77.QueryDelegatorDelegationsRequestAmino): _77.QueryDelegatorDelegationsRequest;
                toAmino(message: _77.QueryDelegatorDelegationsRequest): _77.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _77.QueryDelegatorDelegationsRequestAminoMsg): _77.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _77.QueryDelegatorDelegationsRequest): _77.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _77.QueryDelegatorDelegationsRequestProtoMsg): _77.QueryDelegatorDelegationsRequest;
                toProto(message: _77.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _77.QueryDelegatorDelegationsRequest): _77.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _77.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_77.QueryDelegatorDelegationsResponse>): _77.QueryDelegatorDelegationsResponse;
                fromAmino(object: _77.QueryDelegatorDelegationsResponseAmino): _77.QueryDelegatorDelegationsResponse;
                toAmino(message: _77.QueryDelegatorDelegationsResponse): _77.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _77.QueryDelegatorDelegationsResponseAminoMsg): _77.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _77.QueryDelegatorDelegationsResponse): _77.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _77.QueryDelegatorDelegationsResponseProtoMsg): _77.QueryDelegatorDelegationsResponse;
                toProto(message: _77.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _77.QueryDelegatorDelegationsResponse): _77.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _77.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_77.QueryDelegatorUnbondingDelegationsRequest>): _77.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _77.QueryDelegatorUnbondingDelegationsRequestAmino): _77.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _77.QueryDelegatorUnbondingDelegationsRequest): _77.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _77.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _77.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _77.QueryDelegatorUnbondingDelegationsRequest): _77.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _77.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _77.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _77.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _77.QueryDelegatorUnbondingDelegationsRequest): _77.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _77.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_77.QueryDelegatorUnbondingDelegationsResponse>): _77.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _77.QueryDelegatorUnbondingDelegationsResponseAmino): _77.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _77.QueryDelegatorUnbondingDelegationsResponse): _77.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _77.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _77.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _77.QueryDelegatorUnbondingDelegationsResponse): _77.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _77.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _77.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _77.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _77.QueryDelegatorUnbondingDelegationsResponse): _77.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _77.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryRedelegationsRequest;
                fromPartial(object: Partial<_77.QueryRedelegationsRequest>): _77.QueryRedelegationsRequest;
                fromAmino(object: _77.QueryRedelegationsRequestAmino): _77.QueryRedelegationsRequest;
                toAmino(message: _77.QueryRedelegationsRequest): _77.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _77.QueryRedelegationsRequestAminoMsg): _77.QueryRedelegationsRequest;
                toAminoMsg(message: _77.QueryRedelegationsRequest): _77.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _77.QueryRedelegationsRequestProtoMsg): _77.QueryRedelegationsRequest;
                toProto(message: _77.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _77.QueryRedelegationsRequest): _77.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _77.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryRedelegationsResponse;
                fromPartial(object: Partial<_77.QueryRedelegationsResponse>): _77.QueryRedelegationsResponse;
                fromAmino(object: _77.QueryRedelegationsResponseAmino): _77.QueryRedelegationsResponse;
                toAmino(message: _77.QueryRedelegationsResponse): _77.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _77.QueryRedelegationsResponseAminoMsg): _77.QueryRedelegationsResponse;
                toAminoMsg(message: _77.QueryRedelegationsResponse): _77.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _77.QueryRedelegationsResponseProtoMsg): _77.QueryRedelegationsResponse;
                toProto(message: _77.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _77.QueryRedelegationsResponse): _77.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _77.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_77.QueryDelegatorValidatorsRequest>): _77.QueryDelegatorValidatorsRequest;
                fromAmino(object: _77.QueryDelegatorValidatorsRequestAmino): _77.QueryDelegatorValidatorsRequest;
                toAmino(message: _77.QueryDelegatorValidatorsRequest): _77.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _77.QueryDelegatorValidatorsRequestAminoMsg): _77.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _77.QueryDelegatorValidatorsRequest): _77.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _77.QueryDelegatorValidatorsRequestProtoMsg): _77.QueryDelegatorValidatorsRequest;
                toProto(message: _77.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _77.QueryDelegatorValidatorsRequest): _77.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _77.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_77.QueryDelegatorValidatorsResponse>): _77.QueryDelegatorValidatorsResponse;
                fromAmino(object: _77.QueryDelegatorValidatorsResponseAmino): _77.QueryDelegatorValidatorsResponse;
                toAmino(message: _77.QueryDelegatorValidatorsResponse): _77.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _77.QueryDelegatorValidatorsResponseAminoMsg): _77.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _77.QueryDelegatorValidatorsResponse): _77.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _77.QueryDelegatorValidatorsResponseProtoMsg): _77.QueryDelegatorValidatorsResponse;
                toProto(message: _77.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _77.QueryDelegatorValidatorsResponse): _77.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _77.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_77.QueryDelegatorValidatorRequest>): _77.QueryDelegatorValidatorRequest;
                fromAmino(object: _77.QueryDelegatorValidatorRequestAmino): _77.QueryDelegatorValidatorRequest;
                toAmino(message: _77.QueryDelegatorValidatorRequest): _77.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _77.QueryDelegatorValidatorRequestAminoMsg): _77.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _77.QueryDelegatorValidatorRequest): _77.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _77.QueryDelegatorValidatorRequestProtoMsg): _77.QueryDelegatorValidatorRequest;
                toProto(message: _77.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _77.QueryDelegatorValidatorRequest): _77.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _77.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_77.QueryDelegatorValidatorResponse>): _77.QueryDelegatorValidatorResponse;
                fromAmino(object: _77.QueryDelegatorValidatorResponseAmino): _77.QueryDelegatorValidatorResponse;
                toAmino(message: _77.QueryDelegatorValidatorResponse): _77.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _77.QueryDelegatorValidatorResponseAminoMsg): _77.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _77.QueryDelegatorValidatorResponse): _77.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _77.QueryDelegatorValidatorResponseProtoMsg): _77.QueryDelegatorValidatorResponse;
                toProto(message: _77.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _77.QueryDelegatorValidatorResponse): _77.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _77.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_77.QueryHistoricalInfoRequest>): _77.QueryHistoricalInfoRequest;
                fromAmino(object: _77.QueryHistoricalInfoRequestAmino): _77.QueryHistoricalInfoRequest;
                toAmino(message: _77.QueryHistoricalInfoRequest): _77.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _77.QueryHistoricalInfoRequestAminoMsg): _77.QueryHistoricalInfoRequest;
                toAminoMsg(message: _77.QueryHistoricalInfoRequest): _77.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _77.QueryHistoricalInfoRequestProtoMsg): _77.QueryHistoricalInfoRequest;
                toProto(message: _77.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _77.QueryHistoricalInfoRequest): _77.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _77.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_77.QueryHistoricalInfoResponse>): _77.QueryHistoricalInfoResponse;
                fromAmino(object: _77.QueryHistoricalInfoResponseAmino): _77.QueryHistoricalInfoResponse;
                toAmino(message: _77.QueryHistoricalInfoResponse): _77.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _77.QueryHistoricalInfoResponseAminoMsg): _77.QueryHistoricalInfoResponse;
                toAminoMsg(message: _77.QueryHistoricalInfoResponse): _77.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _77.QueryHistoricalInfoResponseProtoMsg): _77.QueryHistoricalInfoResponse;
                toProto(message: _77.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _77.QueryHistoricalInfoResponse): _77.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _77.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _77.QueryPoolRequest;
                fromPartial(_: Partial<_77.QueryPoolRequest>): _77.QueryPoolRequest;
                fromAmino(_: _77.QueryPoolRequestAmino): _77.QueryPoolRequest;
                toAmino(_: _77.QueryPoolRequest): _77.QueryPoolRequestAmino;
                fromAminoMsg(object: _77.QueryPoolRequestAminoMsg): _77.QueryPoolRequest;
                toAminoMsg(message: _77.QueryPoolRequest): _77.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _77.QueryPoolRequestProtoMsg): _77.QueryPoolRequest;
                toProto(message: _77.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _77.QueryPoolRequest): _77.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _77.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryPoolResponse;
                fromPartial(object: Partial<_77.QueryPoolResponse>): _77.QueryPoolResponse;
                fromAmino(object: _77.QueryPoolResponseAmino): _77.QueryPoolResponse;
                toAmino(message: _77.QueryPoolResponse): _77.QueryPoolResponseAmino;
                fromAminoMsg(object: _77.QueryPoolResponseAminoMsg): _77.QueryPoolResponse;
                toAminoMsg(message: _77.QueryPoolResponse): _77.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _77.QueryPoolResponseProtoMsg): _77.QueryPoolResponse;
                toProto(message: _77.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _77.QueryPoolResponse): _77.QueryPoolResponseProtoMsg;
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
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _76.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.LastValidatorPower;
                fromPartial(object: Partial<_76.LastValidatorPower>): _76.LastValidatorPower;
                fromAmino(object: _76.LastValidatorPowerAmino): _76.LastValidatorPower;
                toAmino(message: _76.LastValidatorPower): _76.LastValidatorPowerAmino;
                fromAminoMsg(object: _76.LastValidatorPowerAminoMsg): _76.LastValidatorPower;
                toAminoMsg(message: _76.LastValidatorPower): _76.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _76.LastValidatorPowerProtoMsg): _76.LastValidatorPower;
                toProto(message: _76.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _76.LastValidatorPower): _76.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _75.AuthorizationType;
            authorizationTypeToJSON(object: _75.AuthorizationType): string;
            AuthorizationType: typeof _75.AuthorizationType;
            AuthorizationTypeSDKType: typeof _75.AuthorizationType;
            AuthorizationTypeAmino: typeof _75.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _75.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.StakeAuthorization;
                fromPartial(object: Partial<_75.StakeAuthorization>): _75.StakeAuthorization;
                fromAmino(object: _75.StakeAuthorizationAmino): _75.StakeAuthorization;
                toAmino(message: _75.StakeAuthorization): _75.StakeAuthorizationAmino;
                fromAminoMsg(object: _75.StakeAuthorizationAminoMsg): _75.StakeAuthorization;
                toAminoMsg(message: _75.StakeAuthorization): _75.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _75.StakeAuthorizationProtoMsg): _75.StakeAuthorization;
                toProto(message: _75.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _75.StakeAuthorization): _75.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _75.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.StakeAuthorization_Validators;
                fromPartial(object: Partial<_75.StakeAuthorization_Validators>): _75.StakeAuthorization_Validators;
                fromAmino(object: _75.StakeAuthorization_ValidatorsAmino): _75.StakeAuthorization_Validators;
                toAmino(message: _75.StakeAuthorization_Validators): _75.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _75.StakeAuthorization_ValidatorsAminoMsg): _75.StakeAuthorization_Validators;
                toAminoMsg(message: _75.StakeAuthorization_Validators): _75.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _75.StakeAuthorization_ValidatorsProtoMsg): _75.StakeAuthorization_Validators;
                toProto(message: _75.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _75.StakeAuthorization_Validators): _75.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _80.SignMode;
                signModeToJSON(object: _80.SignMode): string;
                SignMode: typeof _80.SignMode;
                SignModeSDKType: typeof _80.SignMode;
                SignModeAmino: typeof _80.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _80.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _80.SignatureDescriptors;
                    fromPartial(object: Partial<_80.SignatureDescriptors>): _80.SignatureDescriptors;
                    fromAmino(object: _80.SignatureDescriptorsAmino): _80.SignatureDescriptors;
                    toAmino(message: _80.SignatureDescriptors): _80.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _80.SignatureDescriptorsAminoMsg): _80.SignatureDescriptors;
                    toAminoMsg(message: _80.SignatureDescriptors): _80.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _80.SignatureDescriptorsProtoMsg): _80.SignatureDescriptors;
                    toProto(message: _80.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _80.SignatureDescriptors): _80.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _80.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _80.SignatureDescriptor;
                    fromPartial(object: Partial<_80.SignatureDescriptor>): _80.SignatureDescriptor;
                    fromAmino(object: _80.SignatureDescriptorAmino): _80.SignatureDescriptor;
                    toAmino(message: _80.SignatureDescriptor): _80.SignatureDescriptorAmino;
                    fromAminoMsg(object: _80.SignatureDescriptorAminoMsg): _80.SignatureDescriptor;
                    toAminoMsg(message: _80.SignatureDescriptor): _80.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _80.SignatureDescriptorProtoMsg): _80.SignatureDescriptor;
                    toProto(message: _80.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _80.SignatureDescriptor): _80.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _80.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _80.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_80.SignatureDescriptor_Data>): _80.SignatureDescriptor_Data;
                    fromAmino(object: _80.SignatureDescriptor_DataAmino): _80.SignatureDescriptor_Data;
                    toAmino(message: _80.SignatureDescriptor_Data): _80.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _80.SignatureDescriptor_DataAminoMsg): _80.SignatureDescriptor_Data;
                    toAminoMsg(message: _80.SignatureDescriptor_Data): _80.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _80.SignatureDescriptor_DataProtoMsg): _80.SignatureDescriptor_Data;
                    toProto(message: _80.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _80.SignatureDescriptor_Data): _80.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _80.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _80.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_80.SignatureDescriptor_Data_Single>): _80.SignatureDescriptor_Data_Single;
                    fromAmino(object: _80.SignatureDescriptor_Data_SingleAmino): _80.SignatureDescriptor_Data_Single;
                    toAmino(message: _80.SignatureDescriptor_Data_Single): _80.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _80.SignatureDescriptor_Data_SingleAminoMsg): _80.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _80.SignatureDescriptor_Data_Single): _80.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _80.SignatureDescriptor_Data_SingleProtoMsg): _80.SignatureDescriptor_Data_Single;
                    toProto(message: _80.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _80.SignatureDescriptor_Data_Single): _80.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _80.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _80.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_80.SignatureDescriptor_Data_Multi>): _80.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _80.SignatureDescriptor_Data_MultiAmino): _80.SignatureDescriptor_Data_Multi;
                    toAmino(message: _80.SignatureDescriptor_Data_Multi): _80.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _80.SignatureDescriptor_Data_MultiAminoMsg): _80.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _80.SignatureDescriptor_Data_Multi): _80.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _80.SignatureDescriptor_Data_MultiProtoMsg): _80.SignatureDescriptor_Data_Multi;
                    toProto(message: _80.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _80.SignatureDescriptor_Data_Multi): _80.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _169.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _81.SimulateRequest): Promise<_81.SimulateResponse>;
                getTx(request: _81.GetTxRequest): Promise<_81.GetTxResponse>;
                broadcastTx(request: _81.BroadcastTxRequest): Promise<_81.BroadcastTxResponse>;
                getTxsEvent(request: _81.GetTxsEventRequest): Promise<_81.GetTxsEventResponse>;
                getBlockWithTxs(request: _81.GetBlockWithTxsRequest): Promise<_81.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _154.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _82.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.Tx;
                fromPartial(object: Partial<_82.Tx>): _82.Tx;
                fromAmino(object: _82.TxAmino): _82.Tx;
                toAmino(message: _82.Tx): _82.TxAmino;
                fromAminoMsg(object: _82.TxAminoMsg): _82.Tx;
                toAminoMsg(message: _82.Tx): _82.TxAminoMsg;
                fromProtoMsg(message: _82.TxProtoMsg): _82.Tx;
                toProto(message: _82.Tx): Uint8Array;
                toProtoMsg(message: _82.Tx): _82.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _82.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.TxRaw;
                fromPartial(object: Partial<_82.TxRaw>): _82.TxRaw;
                fromAmino(object: _82.TxRawAmino): _82.TxRaw;
                toAmino(message: _82.TxRaw): _82.TxRawAmino;
                fromAminoMsg(object: _82.TxRawAminoMsg): _82.TxRaw;
                toAminoMsg(message: _82.TxRaw): _82.TxRawAminoMsg;
                fromProtoMsg(message: _82.TxRawProtoMsg): _82.TxRaw;
                toProto(message: _82.TxRaw): Uint8Array;
                toProtoMsg(message: _82.TxRaw): _82.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _82.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.SignDoc;
                fromPartial(object: Partial<_82.SignDoc>): _82.SignDoc;
                fromAmino(object: _82.SignDocAmino): _82.SignDoc;
                toAmino(message: _82.SignDoc): _82.SignDocAmino;
                fromAminoMsg(object: _82.SignDocAminoMsg): _82.SignDoc;
                toAminoMsg(message: _82.SignDoc): _82.SignDocAminoMsg;
                fromProtoMsg(message: _82.SignDocProtoMsg): _82.SignDoc;
                toProto(message: _82.SignDoc): Uint8Array;
                toProtoMsg(message: _82.SignDoc): _82.SignDocProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _82.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.TxBody;
                fromPartial(object: Partial<_82.TxBody>): _82.TxBody;
                fromAmino(object: _82.TxBodyAmino): _82.TxBody;
                toAmino(message: _82.TxBody): _82.TxBodyAmino;
                fromAminoMsg(object: _82.TxBodyAminoMsg): _82.TxBody;
                toAminoMsg(message: _82.TxBody): _82.TxBodyAminoMsg;
                fromProtoMsg(message: _82.TxBodyProtoMsg): _82.TxBody;
                toProto(message: _82.TxBody): Uint8Array;
                toProtoMsg(message: _82.TxBody): _82.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _82.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.AuthInfo;
                fromPartial(object: Partial<_82.AuthInfo>): _82.AuthInfo;
                fromAmino(object: _82.AuthInfoAmino): _82.AuthInfo;
                toAmino(message: _82.AuthInfo): _82.AuthInfoAmino;
                fromAminoMsg(object: _82.AuthInfoAminoMsg): _82.AuthInfo;
                toAminoMsg(message: _82.AuthInfo): _82.AuthInfoAminoMsg;
                fromProtoMsg(message: _82.AuthInfoProtoMsg): _82.AuthInfo;
                toProto(message: _82.AuthInfo): Uint8Array;
                toProtoMsg(message: _82.AuthInfo): _82.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _82.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.SignerInfo;
                fromPartial(object: Partial<_82.SignerInfo>): _82.SignerInfo;
                fromAmino(object: _82.SignerInfoAmino): _82.SignerInfo;
                toAmino(message: _82.SignerInfo): _82.SignerInfoAmino;
                fromAminoMsg(object: _82.SignerInfoAminoMsg): _82.SignerInfo;
                toAminoMsg(message: _82.SignerInfo): _82.SignerInfoAminoMsg;
                fromProtoMsg(message: _82.SignerInfoProtoMsg): _82.SignerInfo;
                toProto(message: _82.SignerInfo): Uint8Array;
                toProtoMsg(message: _82.SignerInfo): _82.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _82.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.ModeInfo;
                fromPartial(object: Partial<_82.ModeInfo>): _82.ModeInfo;
                fromAmino(object: _82.ModeInfoAmino): _82.ModeInfo;
                toAmino(message: _82.ModeInfo): _82.ModeInfoAmino;
                fromAminoMsg(object: _82.ModeInfoAminoMsg): _82.ModeInfo;
                toAminoMsg(message: _82.ModeInfo): _82.ModeInfoAminoMsg;
                fromProtoMsg(message: _82.ModeInfoProtoMsg): _82.ModeInfo;
                toProto(message: _82.ModeInfo): Uint8Array;
                toProtoMsg(message: _82.ModeInfo): _82.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _82.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.ModeInfo_Single;
                fromPartial(object: Partial<_82.ModeInfo_Single>): _82.ModeInfo_Single;
                fromAmino(object: _82.ModeInfo_SingleAmino): _82.ModeInfo_Single;
                toAmino(message: _82.ModeInfo_Single): _82.ModeInfo_SingleAmino;
                fromAminoMsg(object: _82.ModeInfo_SingleAminoMsg): _82.ModeInfo_Single;
                toAminoMsg(message: _82.ModeInfo_Single): _82.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _82.ModeInfo_SingleProtoMsg): _82.ModeInfo_Single;
                toProto(message: _82.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _82.ModeInfo_Single): _82.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _82.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.ModeInfo_Multi;
                fromPartial(object: Partial<_82.ModeInfo_Multi>): _82.ModeInfo_Multi;
                fromAmino(object: _82.ModeInfo_MultiAmino): _82.ModeInfo_Multi;
                toAmino(message: _82.ModeInfo_Multi): _82.ModeInfo_MultiAmino;
                fromAminoMsg(object: _82.ModeInfo_MultiAminoMsg): _82.ModeInfo_Multi;
                toAminoMsg(message: _82.ModeInfo_Multi): _82.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _82.ModeInfo_MultiProtoMsg): _82.ModeInfo_Multi;
                toProto(message: _82.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _82.ModeInfo_Multi): _82.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _82.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.Fee;
                fromPartial(object: Partial<_82.Fee>): _82.Fee;
                fromAmino(object: _82.FeeAmino): _82.Fee;
                toAmino(message: _82.Fee): _82.FeeAmino;
                fromAminoMsg(object: _82.FeeAminoMsg): _82.Fee;
                toAminoMsg(message: _82.Fee): _82.FeeAminoMsg;
                fromProtoMsg(message: _82.FeeProtoMsg): _82.Fee;
                toProto(message: _82.Fee): Uint8Array;
                toProtoMsg(message: _82.Fee): _82.FeeProtoMsg;
            };
            orderByFromJSON(object: any): _81.OrderBy;
            orderByToJSON(object: _81.OrderBy): string;
            broadcastModeFromJSON(object: any): _81.BroadcastMode;
            broadcastModeToJSON(object: _81.BroadcastMode): string;
            OrderBy: typeof _81.OrderBy;
            OrderBySDKType: typeof _81.OrderBy;
            OrderByAmino: typeof _81.OrderBy;
            BroadcastMode: typeof _81.BroadcastMode;
            BroadcastModeSDKType: typeof _81.BroadcastMode;
            BroadcastModeAmino: typeof _81.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _81.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.GetTxsEventRequest;
                fromPartial(object: Partial<_81.GetTxsEventRequest>): _81.GetTxsEventRequest;
                fromAmino(object: _81.GetTxsEventRequestAmino): _81.GetTxsEventRequest;
                toAmino(message: _81.GetTxsEventRequest): _81.GetTxsEventRequestAmino;
                fromAminoMsg(object: _81.GetTxsEventRequestAminoMsg): _81.GetTxsEventRequest;
                toAminoMsg(message: _81.GetTxsEventRequest): _81.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _81.GetTxsEventRequestProtoMsg): _81.GetTxsEventRequest;
                toProto(message: _81.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _81.GetTxsEventRequest): _81.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _81.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.GetTxsEventResponse;
                fromPartial(object: Partial<_81.GetTxsEventResponse>): _81.GetTxsEventResponse;
                fromAmino(object: _81.GetTxsEventResponseAmino): _81.GetTxsEventResponse;
                toAmino(message: _81.GetTxsEventResponse): _81.GetTxsEventResponseAmino;
                fromAminoMsg(object: _81.GetTxsEventResponseAminoMsg): _81.GetTxsEventResponse;
                toAminoMsg(message: _81.GetTxsEventResponse): _81.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _81.GetTxsEventResponseProtoMsg): _81.GetTxsEventResponse;
                toProto(message: _81.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _81.GetTxsEventResponse): _81.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _81.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.BroadcastTxRequest;
                fromPartial(object: Partial<_81.BroadcastTxRequest>): _81.BroadcastTxRequest;
                fromAmino(object: _81.BroadcastTxRequestAmino): _81.BroadcastTxRequest;
                toAmino(message: _81.BroadcastTxRequest): _81.BroadcastTxRequestAmino;
                fromAminoMsg(object: _81.BroadcastTxRequestAminoMsg): _81.BroadcastTxRequest;
                toAminoMsg(message: _81.BroadcastTxRequest): _81.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _81.BroadcastTxRequestProtoMsg): _81.BroadcastTxRequest;
                toProto(message: _81.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _81.BroadcastTxRequest): _81.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _81.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.BroadcastTxResponse;
                fromPartial(object: Partial<_81.BroadcastTxResponse>): _81.BroadcastTxResponse;
                fromAmino(object: _81.BroadcastTxResponseAmino): _81.BroadcastTxResponse;
                toAmino(message: _81.BroadcastTxResponse): _81.BroadcastTxResponseAmino;
                fromAminoMsg(object: _81.BroadcastTxResponseAminoMsg): _81.BroadcastTxResponse;
                toAminoMsg(message: _81.BroadcastTxResponse): _81.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _81.BroadcastTxResponseProtoMsg): _81.BroadcastTxResponse;
                toProto(message: _81.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _81.BroadcastTxResponse): _81.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _81.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.SimulateRequest;
                fromPartial(object: Partial<_81.SimulateRequest>): _81.SimulateRequest;
                fromAmino(object: _81.SimulateRequestAmino): _81.SimulateRequest;
                toAmino(message: _81.SimulateRequest): _81.SimulateRequestAmino;
                fromAminoMsg(object: _81.SimulateRequestAminoMsg): _81.SimulateRequest;
                toAminoMsg(message: _81.SimulateRequest): _81.SimulateRequestAminoMsg;
                fromProtoMsg(message: _81.SimulateRequestProtoMsg): _81.SimulateRequest;
                toProto(message: _81.SimulateRequest): Uint8Array;
                toProtoMsg(message: _81.SimulateRequest): _81.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _81.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.SimulateResponse;
                fromPartial(object: Partial<_81.SimulateResponse>): _81.SimulateResponse;
                fromAmino(object: _81.SimulateResponseAmino): _81.SimulateResponse;
                toAmino(message: _81.SimulateResponse): _81.SimulateResponseAmino;
                fromAminoMsg(object: _81.SimulateResponseAminoMsg): _81.SimulateResponse;
                toAminoMsg(message: _81.SimulateResponse): _81.SimulateResponseAminoMsg;
                fromProtoMsg(message: _81.SimulateResponseProtoMsg): _81.SimulateResponse;
                toProto(message: _81.SimulateResponse): Uint8Array;
                toProtoMsg(message: _81.SimulateResponse): _81.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _81.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.GetTxRequest;
                fromPartial(object: Partial<_81.GetTxRequest>): _81.GetTxRequest;
                fromAmino(object: _81.GetTxRequestAmino): _81.GetTxRequest;
                toAmino(message: _81.GetTxRequest): _81.GetTxRequestAmino;
                fromAminoMsg(object: _81.GetTxRequestAminoMsg): _81.GetTxRequest;
                toAminoMsg(message: _81.GetTxRequest): _81.GetTxRequestAminoMsg;
                fromProtoMsg(message: _81.GetTxRequestProtoMsg): _81.GetTxRequest;
                toProto(message: _81.GetTxRequest): Uint8Array;
                toProtoMsg(message: _81.GetTxRequest): _81.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _81.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.GetTxResponse;
                fromPartial(object: Partial<_81.GetTxResponse>): _81.GetTxResponse;
                fromAmino(object: _81.GetTxResponseAmino): _81.GetTxResponse;
                toAmino(message: _81.GetTxResponse): _81.GetTxResponseAmino;
                fromAminoMsg(object: _81.GetTxResponseAminoMsg): _81.GetTxResponse;
                toAminoMsg(message: _81.GetTxResponse): _81.GetTxResponseAminoMsg;
                fromProtoMsg(message: _81.GetTxResponseProtoMsg): _81.GetTxResponse;
                toProto(message: _81.GetTxResponse): Uint8Array;
                toProtoMsg(message: _81.GetTxResponse): _81.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _81.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_81.GetBlockWithTxsRequest>): _81.GetBlockWithTxsRequest;
                fromAmino(object: _81.GetBlockWithTxsRequestAmino): _81.GetBlockWithTxsRequest;
                toAmino(message: _81.GetBlockWithTxsRequest): _81.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _81.GetBlockWithTxsRequestAminoMsg): _81.GetBlockWithTxsRequest;
                toAminoMsg(message: _81.GetBlockWithTxsRequest): _81.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _81.GetBlockWithTxsRequestProtoMsg): _81.GetBlockWithTxsRequest;
                toProto(message: _81.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _81.GetBlockWithTxsRequest): _81.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _81.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_81.GetBlockWithTxsResponse>): _81.GetBlockWithTxsResponse;
                fromAmino(object: _81.GetBlockWithTxsResponseAmino): _81.GetBlockWithTxsResponse;
                toAmino(message: _81.GetBlockWithTxsResponse): _81.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _81.GetBlockWithTxsResponseAminoMsg): _81.GetBlockWithTxsResponse;
                toAminoMsg(message: _81.GetBlockWithTxsResponse): _81.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _81.GetBlockWithTxsResponseProtoMsg): _81.GetBlockWithTxsResponse;
                toProto(message: _81.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _81.GetBlockWithTxsResponse): _81.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _170.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _83.QueryCurrentPlanRequest): Promise<_83.QueryCurrentPlanResponse>;
                appliedPlan(request: _83.QueryAppliedPlanRequest): Promise<_83.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _83.QueryUpgradedConsensusStateRequest): Promise<_83.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _83.QueryModuleVersionsRequest): Promise<_83.QueryModuleVersionsResponse>;
            };
            LCDQueryClient: typeof _155.LCDQueryClient;
            Plan: {
                typeUrl: string;
                encode(message: _84.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.Plan;
                fromPartial(object: Partial<_84.Plan>): _84.Plan;
                fromAmino(object: _84.PlanAmino): _84.Plan;
                toAmino(message: _84.Plan): _84.PlanAmino;
                fromAminoMsg(object: _84.PlanAminoMsg): _84.Plan;
                toAminoMsg(message: _84.Plan): _84.PlanAminoMsg;
                fromProtoMsg(message: _84.PlanProtoMsg): _84.Plan;
                toProto(message: _84.Plan): Uint8Array;
                toProtoMsg(message: _84.Plan): _84.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _84.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_84.SoftwareUpgradeProposal>): _84.SoftwareUpgradeProposal;
                fromAmino(object: _84.SoftwareUpgradeProposalAmino): _84.SoftwareUpgradeProposal;
                toAmino(message: _84.SoftwareUpgradeProposal): _84.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _84.SoftwareUpgradeProposalAminoMsg): _84.SoftwareUpgradeProposal;
                toAminoMsg(message: _84.SoftwareUpgradeProposal): _84.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _84.SoftwareUpgradeProposalProtoMsg): _84.SoftwareUpgradeProposal;
                toProto(message: _84.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _84.SoftwareUpgradeProposal): _84.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _84.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_84.CancelSoftwareUpgradeProposal>): _84.CancelSoftwareUpgradeProposal;
                fromAmino(object: _84.CancelSoftwareUpgradeProposalAmino): _84.CancelSoftwareUpgradeProposal;
                toAmino(message: _84.CancelSoftwareUpgradeProposal): _84.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _84.CancelSoftwareUpgradeProposalAminoMsg): _84.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _84.CancelSoftwareUpgradeProposal): _84.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _84.CancelSoftwareUpgradeProposalProtoMsg): _84.CancelSoftwareUpgradeProposal;
                toProto(message: _84.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _84.CancelSoftwareUpgradeProposal): _84.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _84.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.ModuleVersion;
                fromPartial(object: Partial<_84.ModuleVersion>): _84.ModuleVersion;
                fromAmino(object: _84.ModuleVersionAmino): _84.ModuleVersion;
                toAmino(message: _84.ModuleVersion): _84.ModuleVersionAmino;
                fromAminoMsg(object: _84.ModuleVersionAminoMsg): _84.ModuleVersion;
                toAminoMsg(message: _84.ModuleVersion): _84.ModuleVersionAminoMsg;
                fromProtoMsg(message: _84.ModuleVersionProtoMsg): _84.ModuleVersion;
                toProto(message: _84.ModuleVersion): Uint8Array;
                toProtoMsg(message: _84.ModuleVersion): _84.ModuleVersionProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _83.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _83.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_83.QueryCurrentPlanRequest>): _83.QueryCurrentPlanRequest;
                fromAmino(_: _83.QueryCurrentPlanRequestAmino): _83.QueryCurrentPlanRequest;
                toAmino(_: _83.QueryCurrentPlanRequest): _83.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _83.QueryCurrentPlanRequestAminoMsg): _83.QueryCurrentPlanRequest;
                toAminoMsg(message: _83.QueryCurrentPlanRequest): _83.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _83.QueryCurrentPlanRequestProtoMsg): _83.QueryCurrentPlanRequest;
                toProto(message: _83.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _83.QueryCurrentPlanRequest): _83.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _83.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_83.QueryCurrentPlanResponse>): _83.QueryCurrentPlanResponse;
                fromAmino(object: _83.QueryCurrentPlanResponseAmino): _83.QueryCurrentPlanResponse;
                toAmino(message: _83.QueryCurrentPlanResponse): _83.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _83.QueryCurrentPlanResponseAminoMsg): _83.QueryCurrentPlanResponse;
                toAminoMsg(message: _83.QueryCurrentPlanResponse): _83.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _83.QueryCurrentPlanResponseProtoMsg): _83.QueryCurrentPlanResponse;
                toProto(message: _83.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _83.QueryCurrentPlanResponse): _83.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _83.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_83.QueryAppliedPlanRequest>): _83.QueryAppliedPlanRequest;
                fromAmino(object: _83.QueryAppliedPlanRequestAmino): _83.QueryAppliedPlanRequest;
                toAmino(message: _83.QueryAppliedPlanRequest): _83.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _83.QueryAppliedPlanRequestAminoMsg): _83.QueryAppliedPlanRequest;
                toAminoMsg(message: _83.QueryAppliedPlanRequest): _83.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _83.QueryAppliedPlanRequestProtoMsg): _83.QueryAppliedPlanRequest;
                toProto(message: _83.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _83.QueryAppliedPlanRequest): _83.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _83.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_83.QueryAppliedPlanResponse>): _83.QueryAppliedPlanResponse;
                fromAmino(object: _83.QueryAppliedPlanResponseAmino): _83.QueryAppliedPlanResponse;
                toAmino(message: _83.QueryAppliedPlanResponse): _83.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _83.QueryAppliedPlanResponseAminoMsg): _83.QueryAppliedPlanResponse;
                toAminoMsg(message: _83.QueryAppliedPlanResponse): _83.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _83.QueryAppliedPlanResponseProtoMsg): _83.QueryAppliedPlanResponse;
                toProto(message: _83.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _83.QueryAppliedPlanResponse): _83.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _83.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_83.QueryUpgradedConsensusStateRequest>): _83.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _83.QueryUpgradedConsensusStateRequestAmino): _83.QueryUpgradedConsensusStateRequest;
                toAmino(message: _83.QueryUpgradedConsensusStateRequest): _83.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _83.QueryUpgradedConsensusStateRequestAminoMsg): _83.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _83.QueryUpgradedConsensusStateRequest): _83.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _83.QueryUpgradedConsensusStateRequestProtoMsg): _83.QueryUpgradedConsensusStateRequest;
                toProto(message: _83.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _83.QueryUpgradedConsensusStateRequest): _83.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _83.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_83.QueryUpgradedConsensusStateResponse>): _83.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _83.QueryUpgradedConsensusStateResponseAmino): _83.QueryUpgradedConsensusStateResponse;
                toAmino(message: _83.QueryUpgradedConsensusStateResponse): _83.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _83.QueryUpgradedConsensusStateResponseAminoMsg): _83.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _83.QueryUpgradedConsensusStateResponse): _83.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _83.QueryUpgradedConsensusStateResponseProtoMsg): _83.QueryUpgradedConsensusStateResponse;
                toProto(message: _83.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _83.QueryUpgradedConsensusStateResponse): _83.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _83.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_83.QueryModuleVersionsRequest>): _83.QueryModuleVersionsRequest;
                fromAmino(object: _83.QueryModuleVersionsRequestAmino): _83.QueryModuleVersionsRequest;
                toAmino(message: _83.QueryModuleVersionsRequest): _83.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _83.QueryModuleVersionsRequestAminoMsg): _83.QueryModuleVersionsRequest;
                toAminoMsg(message: _83.QueryModuleVersionsRequest): _83.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _83.QueryModuleVersionsRequestProtoMsg): _83.QueryModuleVersionsRequest;
                toProto(message: _83.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _83.QueryModuleVersionsRequest): _83.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _83.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_83.QueryModuleVersionsResponse>): _83.QueryModuleVersionsResponse;
                fromAmino(object: _83.QueryModuleVersionsResponseAmino): _83.QueryModuleVersionsResponse;
                toAmino(message: _83.QueryModuleVersionsResponse): _83.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _83.QueryModuleVersionsResponseAminoMsg): _83.QueryModuleVersionsResponse;
                toAminoMsg(message: _83.QueryModuleVersionsResponse): _83.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _83.QueryModuleVersionsResponseProtoMsg): _83.QueryModuleVersionsResponse;
                toProto(message: _83.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _83.QueryModuleVersionsResponse): _83.QueryModuleVersionsResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _180.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _85.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _85.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _85.MsgCreateVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _85.MsgCreateVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _85.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _85.MsgCreateVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _85.MsgCreateVestingAccount) => _85.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _85.MsgCreateVestingAccountAmino) => _85.MsgCreateVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _86.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.BaseVestingAccount;
                fromPartial(object: Partial<_86.BaseVestingAccount>): _86.BaseVestingAccount;
                fromAmino(object: _86.BaseVestingAccountAmino): _86.BaseVestingAccount;
                toAmino(message: _86.BaseVestingAccount): _86.BaseVestingAccountAmino;
                fromAminoMsg(object: _86.BaseVestingAccountAminoMsg): _86.BaseVestingAccount;
                toAminoMsg(message: _86.BaseVestingAccount): _86.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _86.BaseVestingAccountProtoMsg): _86.BaseVestingAccount;
                toProto(message: _86.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _86.BaseVestingAccount): _86.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _86.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.ContinuousVestingAccount;
                fromPartial(object: Partial<_86.ContinuousVestingAccount>): _86.ContinuousVestingAccount;
                fromAmino(object: _86.ContinuousVestingAccountAmino): _86.ContinuousVestingAccount;
                toAmino(message: _86.ContinuousVestingAccount): _86.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _86.ContinuousVestingAccountAminoMsg): _86.ContinuousVestingAccount;
                toAminoMsg(message: _86.ContinuousVestingAccount): _86.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _86.ContinuousVestingAccountProtoMsg): _86.ContinuousVestingAccount;
                toProto(message: _86.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _86.ContinuousVestingAccount): _86.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _86.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.DelayedVestingAccount;
                fromPartial(object: Partial<_86.DelayedVestingAccount>): _86.DelayedVestingAccount;
                fromAmino(object: _86.DelayedVestingAccountAmino): _86.DelayedVestingAccount;
                toAmino(message: _86.DelayedVestingAccount): _86.DelayedVestingAccountAmino;
                fromAminoMsg(object: _86.DelayedVestingAccountAminoMsg): _86.DelayedVestingAccount;
                toAminoMsg(message: _86.DelayedVestingAccount): _86.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _86.DelayedVestingAccountProtoMsg): _86.DelayedVestingAccount;
                toProto(message: _86.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _86.DelayedVestingAccount): _86.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _86.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.Period;
                fromPartial(object: Partial<_86.Period>): _86.Period;
                fromAmino(object: _86.PeriodAmino): _86.Period;
                toAmino(message: _86.Period): _86.PeriodAmino;
                fromAminoMsg(object: _86.PeriodAminoMsg): _86.Period;
                toAminoMsg(message: _86.Period): _86.PeriodAminoMsg;
                fromProtoMsg(message: _86.PeriodProtoMsg): _86.Period;
                toProto(message: _86.Period): Uint8Array;
                toProtoMsg(message: _86.Period): _86.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _86.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.PeriodicVestingAccount;
                fromPartial(object: Partial<_86.PeriodicVestingAccount>): _86.PeriodicVestingAccount;
                fromAmino(object: _86.PeriodicVestingAccountAmino): _86.PeriodicVestingAccount;
                toAmino(message: _86.PeriodicVestingAccount): _86.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _86.PeriodicVestingAccountAminoMsg): _86.PeriodicVestingAccount;
                toAminoMsg(message: _86.PeriodicVestingAccount): _86.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _86.PeriodicVestingAccountProtoMsg): _86.PeriodicVestingAccount;
                toProto(message: _86.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _86.PeriodicVestingAccount): _86.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _86.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.PermanentLockedAccount;
                fromPartial(object: Partial<_86.PermanentLockedAccount>): _86.PermanentLockedAccount;
                fromAmino(object: _86.PermanentLockedAccountAmino): _86.PermanentLockedAccount;
                toAmino(message: _86.PermanentLockedAccount): _86.PermanentLockedAccountAmino;
                fromAminoMsg(object: _86.PermanentLockedAccountAminoMsg): _86.PermanentLockedAccount;
                toAminoMsg(message: _86.PermanentLockedAccount): _86.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _86.PermanentLockedAccountProtoMsg): _86.PermanentLockedAccount;
                toProto(message: _86.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _86.PermanentLockedAccount): _86.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _85.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.MsgCreateVestingAccount;
                fromPartial(object: Partial<_85.MsgCreateVestingAccount>): _85.MsgCreateVestingAccount;
                fromAmino(object: _85.MsgCreateVestingAccountAmino): _85.MsgCreateVestingAccount;
                toAmino(message: _85.MsgCreateVestingAccount): _85.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _85.MsgCreateVestingAccountAminoMsg): _85.MsgCreateVestingAccount;
                toAminoMsg(message: _85.MsgCreateVestingAccount): _85.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _85.MsgCreateVestingAccountProtoMsg): _85.MsgCreateVestingAccount;
                toProto(message: _85.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _85.MsgCreateVestingAccount): _85.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _85.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _85.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_85.MsgCreateVestingAccountResponse>): _85.MsgCreateVestingAccountResponse;
                fromAmino(_: _85.MsgCreateVestingAccountResponseAmino): _85.MsgCreateVestingAccountResponse;
                toAmino(_: _85.MsgCreateVestingAccountResponse): _85.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _85.MsgCreateVestingAccountResponseAminoMsg): _85.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _85.MsgCreateVestingAccountResponse): _85.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _85.MsgCreateVestingAccountResponseProtoMsg): _85.MsgCreateVestingAccountResponse;
                toProto(message: _85.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _85.MsgCreateVestingAccountResponse): _85.MsgCreateVestingAccountResponseProtoMsg;
            };
        };
    }
    const query: {
        PageRequest: {
            typeUrl: string;
            encode(message: _87.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _87.PageRequest;
            fromPartial(object: Partial<_87.PageRequest>): _87.PageRequest;
            fromAmino(object: _87.PageRequestAmino): _87.PageRequest;
            toAmino(message: _87.PageRequest): _87.PageRequestAmino;
            fromAminoMsg(object: _87.PageRequestAminoMsg): _87.PageRequest;
            toAminoMsg(message: _87.PageRequest): _87.PageRequestAminoMsg;
            fromProtoMsg(message: _87.PageRequestProtoMsg): _87.PageRequest;
            toProto(message: _87.PageRequest): Uint8Array;
            toProtoMsg(message: _87.PageRequest): _87.PageRequestProtoMsg;
        };
        PageResponse: {
            typeUrl: string;
            encode(message: _87.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _87.PageResponse;
            fromPartial(object: Partial<_87.PageResponse>): _87.PageResponse;
            fromAmino(object: _87.PageResponseAmino): _87.PageResponse;
            toAmino(message: _87.PageResponse): _87.PageResponseAmino;
            fromAminoMsg(object: _87.PageResponseAminoMsg): _87.PageResponse;
            toAminoMsg(message: _87.PageResponse): _87.PageResponseAminoMsg;
            fromProtoMsg(message: _87.PageResponseProtoMsg): _87.PageResponse;
            toProto(message: _87.PageResponse): Uint8Array;
            toProtoMsg(message: _87.PageResponse): _87.PageResponseProtoMsg;
        };
    };
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _171.MsgClientImpl;
                };
                bank: {
                    v1beta1: _172.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _173.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _174.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _175.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _176.MsgClientImpl;
                };
                gov: {
                    v1beta1: _177.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _178.MsgClientImpl;
                };
                staking: {
                    v1beta1: _179.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _180.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _18.QueryAccountsRequest): Promise<_18.QueryAccountsResponse>;
                        account(request: _18.QueryAccountRequest): Promise<_18.QueryAccountResponse>;
                        params(request?: _18.QueryParamsRequest): Promise<_18.QueryParamsResponse>;
                        moduleAccountByName(request: _18.QueryModuleAccountByNameRequest): Promise<_18.QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _22.QueryGrantsRequest): Promise<_22.QueryGrantsResponse>;
                        granterGrants(request: _22.QueryGranterGrantsRequest): Promise<_22.QueryGranterGrantsResponse>;
                        granteeGrants(request: _22.QueryGranteeGrantsRequest): Promise<_22.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _27.QueryBalanceRequest): Promise<_27.QueryBalanceResponse>;
                        allBalances(request: _27.QueryAllBalancesRequest): Promise<_27.QueryAllBalancesResponse>;
                        spendableBalances(request: _27.QuerySpendableBalancesRequest): Promise<_27.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _27.QueryTotalSupplyRequest): Promise<_27.QueryTotalSupplyResponse>;
                        supplyOf(request: _27.QuerySupplyOfRequest): Promise<_27.QuerySupplyOfResponse>;
                        params(request?: _27.QueryParamsRequest): Promise<_27.QueryParamsResponse>;
                        denomMetadata(request: _27.QueryDenomMetadataRequest): Promise<_27.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _27.QueryDenomsMetadataRequest): Promise<_27.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _31.ConfigRequest): Promise<_31.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _38.GetNodeInfoRequest): Promise<_38.GetNodeInfoResponse>;
                            getSyncing(request?: _38.GetSyncingRequest): Promise<_38.GetSyncingResponse>;
                            getLatestBlock(request?: _38.GetLatestBlockRequest): Promise<_38.GetLatestBlockResponse>;
                            getBlockByHeight(request: _38.GetBlockByHeightRequest): Promise<_38.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _38.GetLatestValidatorSetRequest): Promise<_38.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _38.GetValidatorSetByHeightRequest): Promise<_38.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _51.QueryParamsRequest): Promise<_51.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _51.QueryValidatorOutstandingRewardsRequest): Promise<_51.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _51.QueryValidatorCommissionRequest): Promise<_51.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _51.QueryValidatorSlashesRequest): Promise<_51.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _51.QueryDelegationRewardsRequest): Promise<_51.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _51.QueryDelegationTotalRewardsRequest): Promise<_51.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _51.QueryDelegatorValidatorsRequest): Promise<_51.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _51.QueryDelegatorWithdrawAddressRequest): Promise<_51.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _51.QueryCommunityPoolRequest): Promise<_51.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _55.QueryEvidenceRequest): Promise<_55.QueryEvidenceResponse>;
                        allEvidence(request?: _55.QueryAllEvidenceRequest): Promise<_55.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _59.QueryAllowanceRequest): Promise<_59.QueryAllowanceResponse>;
                        allowances(request: _59.QueryAllowancesRequest): Promise<_59.QueryAllowancesResponse>;
                        allowancesByGranter(request: _59.QueryAllowancesByGranterRequest): Promise<_59.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _64.QueryProposalRequest): Promise<_64.QueryProposalResponse>;
                        proposals(request: _64.QueryProposalsRequest): Promise<_64.QueryProposalsResponse>;
                        vote(request: _64.QueryVoteRequest): Promise<_64.QueryVoteResponse>;
                        votes(request: _64.QueryVotesRequest): Promise<_64.QueryVotesResponse>;
                        params(request: _64.QueryParamsRequest): Promise<_64.QueryParamsResponse>;
                        deposit(request: _64.QueryDepositRequest): Promise<_64.QueryDepositResponse>;
                        deposits(request: _64.QueryDepositsRequest): Promise<_64.QueryDepositsResponse>;
                        tallyResult(request: _64.QueryTallyResultRequest): Promise<_64.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _68.QueryParamsRequest): Promise<_68.QueryParamsResponse>;
                        inflation(request?: _68.QueryInflationRequest): Promise<_68.QueryInflationResponse>;
                        annualProvisions(request?: _68.QueryAnnualProvisionsRequest): Promise<_68.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _70.QueryParamsRequest): Promise<_70.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _72.QueryParamsRequest): Promise<_72.QueryParamsResponse>;
                        signingInfo(request: _72.QuerySigningInfoRequest): Promise<_72.QuerySigningInfoResponse>;
                        signingInfos(request?: _72.QuerySigningInfosRequest): Promise<_72.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _77.QueryValidatorsRequest): Promise<_77.QueryValidatorsResponse>;
                        validator(request: _77.QueryValidatorRequest): Promise<_77.QueryValidatorResponse>;
                        validatorDelegations(request: _77.QueryValidatorDelegationsRequest): Promise<_77.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _77.QueryValidatorUnbondingDelegationsRequest): Promise<_77.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _77.QueryDelegationRequest): Promise<_77.QueryDelegationResponse>;
                        unbondingDelegation(request: _77.QueryUnbondingDelegationRequest): Promise<_77.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _77.QueryDelegatorDelegationsRequest): Promise<_77.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _77.QueryDelegatorUnbondingDelegationsRequest): Promise<_77.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _77.QueryRedelegationsRequest): Promise<_77.QueryRedelegationsResponse>;
                        delegatorValidators(request: _77.QueryDelegatorValidatorsRequest): Promise<_77.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _77.QueryDelegatorValidatorRequest): Promise<_77.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _77.QueryHistoricalInfoRequest): Promise<_77.QueryHistoricalInfoResponse>;
                        pool(request?: _77.QueryPoolRequest): Promise<_77.QueryPoolResponse>;
                        params(request?: _77.QueryParamsRequest): Promise<_77.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _81.SimulateRequest): Promise<_81.SimulateResponse>;
                        getTx(request: _81.GetTxRequest): Promise<_81.GetTxResponse>;
                        broadcastTx(request: _81.BroadcastTxRequest): Promise<_81.BroadcastTxResponse>;
                        getTxsEvent(request: _81.GetTxsEventRequest): Promise<_81.GetTxsEventResponse>;
                        getBlockWithTxs(request: _81.GetBlockWithTxsRequest): Promise<_81.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _83.QueryCurrentPlanRequest): Promise<_83.QueryCurrentPlanResponse>;
                        appliedPlan(request: _83.QueryAppliedPlanRequest): Promise<_83.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _83.QueryUpgradedConsensusStateRequest): Promise<_83.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _83.QueryModuleVersionsRequest): Promise<_83.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _141.LCDQueryClient;
                };
                authz: {
                    v1beta1: _142.LCDQueryClient;
                };
                bank: {
                    v1beta1: _143.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _144.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _145.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _146.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _147.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _148.LCDQueryClient;
                };
                gov: {
                    v1beta1: _149.LCDQueryClient;
                };
                mint: {
                    v1beta1: _150.LCDQueryClient;
                };
                params: {
                    v1beta1: _151.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _152.LCDQueryClient;
                };
                staking: {
                    v1beta1: _153.LCDQueryClient;
                };
                tx: {
                    v1beta1: _154.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _155.LCDQueryClient;
                };
            };
        }>;
    };
}
