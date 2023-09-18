import * as _14 from "./auth/v1beta1/auth";
import * as _15 from "./auth/v1beta1/genesis";
import * as _16 from "./auth/v1beta1/query";
import * as _17 from "./authz/v1beta1/authz";
import * as _18 from "./authz/v1beta1/event";
import * as _19 from "./authz/v1beta1/genesis";
import * as _20 from "./authz/v1beta1/query";
import * as _21 from "./authz/v1beta1/tx";
import * as _22 from "./bank/v1beta1/authz";
import * as _23 from "./bank/v1beta1/bank";
import * as _24 from "./bank/v1beta1/genesis";
import * as _25 from "./bank/v1beta1/query";
import * as _26 from "./bank/v1beta1/tx";
import * as _27 from "./base/abci/v1beta1/abci";
import * as _28 from "./base/kv/v1beta1/kv";
import * as _29 from "./base/node/v1beta1/query";
import * as _30 from "./base/query/v1beta1/pagination";
import * as _31 from "./base/reflection/v1beta1/reflection";
import * as _32 from "./base/reflection/v2alpha1/reflection";
import * as _33 from "./base/snapshots/v1beta1/snapshot";
import * as _34 from "./base/store/v1beta1/commit_info";
import * as _35 from "./base/store/v1beta1/listening";
import * as _36 from "./base/tendermint/v1beta1/query";
import * as _37 from "./base/v1beta1/coin";
import * as _38 from "./capability/v1beta1/capability";
import * as _39 from "./capability/v1beta1/genesis";
import * as _40 from "./crisis/v1beta1/genesis";
import * as _41 from "./crisis/v1beta1/tx";
import * as _42 from "./crypto/ed25519/keys";
import * as _43 from "./crypto/multisig/keys";
import * as _44 from "./crypto/secp256k1/keys";
import * as _45 from "./crypto/secp256r1/keys";
import * as _46 from "./distribution/v1beta1/distribution";
import * as _47 from "./distribution/v1beta1/genesis";
import * as _48 from "./distribution/v1beta1/query";
import * as _49 from "./distribution/v1beta1/tx";
import * as _50 from "./evidence/v1beta1/evidence";
import * as _51 from "./evidence/v1beta1/genesis";
import * as _52 from "./evidence/v1beta1/query";
import * as _53 from "./evidence/v1beta1/tx";
import * as _54 from "./feegrant/v1beta1/feegrant";
import * as _55 from "./feegrant/v1beta1/genesis";
import * as _56 from "./feegrant/v1beta1/query";
import * as _57 from "./feegrant/v1beta1/tx";
import * as _58 from "./genutil/v1beta1/genesis";
import * as _59 from "./gov/v1beta1/genesis";
import * as _60 from "./gov/v1beta1/gov";
import * as _61 from "./gov/v1beta1/query";
import * as _62 from "./gov/v1beta1/tx";
import * as _63 from "./mint/v1beta1/genesis";
import * as _64 from "./mint/v1beta1/mint";
import * as _65 from "./mint/v1beta1/query";
import * as _66 from "./params/v1beta1/params";
import * as _67 from "./params/v1beta1/query";
import * as _68 from "./slashing/v1beta1/genesis";
import * as _69 from "./slashing/v1beta1/query";
import * as _70 from "./slashing/v1beta1/slashing";
import * as _71 from "./slashing/v1beta1/tx";
import * as _72 from "./staking/v1beta1/authz";
import * as _73 from "./staking/v1beta1/genesis";
import * as _74 from "./staking/v1beta1/query";
import * as _75 from "./staking/v1beta1/staking";
import * as _76 from "./staking/v1beta1/tx";
import * as _77 from "./tx/signing/v1beta1/signing";
import * as _78 from "./tx/v1beta1/service";
import * as _79 from "./tx/v1beta1/tx";
import * as _80 from "./upgrade/v1beta1/query";
import * as _81 from "./upgrade/v1beta1/upgrade";
import * as _82 from "./vesting/v1beta1/tx";
import * as _83 from "./vesting/v1beta1/vesting";
import * as _151 from "./auth/v1beta1/query.lcd";
import * as _152 from "./authz/v1beta1/query.lcd";
import * as _153 from "./bank/v1beta1/query.lcd";
import * as _154 from "./base/node/v1beta1/query.lcd";
import * as _155 from "./base/tendermint/v1beta1/query.lcd";
import * as _156 from "./distribution/v1beta1/query.lcd";
import * as _157 from "./evidence/v1beta1/query.lcd";
import * as _158 from "./feegrant/v1beta1/query.lcd";
import * as _159 from "./gov/v1beta1/query.lcd";
import * as _160 from "./mint/v1beta1/query.lcd";
import * as _161 from "./params/v1beta1/query.lcd";
import * as _162 from "./slashing/v1beta1/query.lcd";
import * as _163 from "./staking/v1beta1/query.lcd";
import * as _164 from "./tx/v1beta1/service.lcd";
import * as _165 from "./upgrade/v1beta1/query.lcd";
import * as _166 from "./auth/v1beta1/query.rpc.Query";
import * as _167 from "./authz/v1beta1/query.rpc.Query";
import * as _168 from "./bank/v1beta1/query.rpc.Query";
import * as _169 from "./base/node/v1beta1/query.rpc.Service";
import * as _170 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _171 from "./distribution/v1beta1/query.rpc.Query";
import * as _172 from "./evidence/v1beta1/query.rpc.Query";
import * as _173 from "./feegrant/v1beta1/query.rpc.Query";
import * as _174 from "./gov/v1beta1/query.rpc.Query";
import * as _175 from "./mint/v1beta1/query.rpc.Query";
import * as _176 from "./params/v1beta1/query.rpc.Query";
import * as _177 from "./slashing/v1beta1/query.rpc.Query";
import * as _178 from "./staking/v1beta1/query.rpc.Query";
import * as _179 from "./tx/v1beta1/service.rpc.Service";
import * as _180 from "./upgrade/v1beta1/query.rpc.Query";
import * as _181 from "./authz/v1beta1/tx.rpc.msg";
import * as _182 from "./bank/v1beta1/tx.rpc.msg";
import * as _183 from "./crisis/v1beta1/tx.rpc.msg";
import * as _184 from "./distribution/v1beta1/tx.rpc.msg";
import * as _185 from "./evidence/v1beta1/tx.rpc.msg";
import * as _186 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _187 from "./gov/v1beta1/tx.rpc.msg";
import * as _188 from "./slashing/v1beta1/tx.rpc.msg";
import * as _189 from "./staking/v1beta1/tx.rpc.msg";
import * as _190 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _166.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _16.QueryAccountsRequest): Promise<_16.QueryAccountsResponse>;
                account(request: _16.QueryAccountRequest): Promise<_16.QueryAccountResponse>;
                params(request?: _16.QueryParamsRequest): Promise<_16.QueryParamsResponse>;
                moduleAccountByName(request: _16.QueryModuleAccountByNameRequest): Promise<_16.QueryModuleAccountByNameResponse>;
            };
            LCDQueryClient: typeof _151.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _16.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryAccountsRequest;
                fromPartial(object: Partial<_16.QueryAccountsRequest>): _16.QueryAccountsRequest;
                fromAmino(object: _16.QueryAccountsRequestAmino): _16.QueryAccountsRequest;
                toAmino(message: _16.QueryAccountsRequest): _16.QueryAccountsRequestAmino;
                fromAminoMsg(object: _16.QueryAccountsRequestAminoMsg): _16.QueryAccountsRequest;
                toAminoMsg(message: _16.QueryAccountsRequest): _16.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _16.QueryAccountsRequestProtoMsg): _16.QueryAccountsRequest;
                toProto(message: _16.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _16.QueryAccountsRequest): _16.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _16.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryAccountsResponse;
                fromPartial(object: Partial<_16.QueryAccountsResponse>): _16.QueryAccountsResponse;
                fromAmino(object: _16.QueryAccountsResponseAmino): _16.QueryAccountsResponse;
                toAmino(message: _16.QueryAccountsResponse): _16.QueryAccountsResponseAmino;
                fromAminoMsg(object: _16.QueryAccountsResponseAminoMsg): _16.QueryAccountsResponse;
                toAminoMsg(message: _16.QueryAccountsResponse): _16.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _16.QueryAccountsResponseProtoMsg): _16.QueryAccountsResponse;
                toProto(message: _16.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _16.QueryAccountsResponse): _16.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _16.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryAccountRequest;
                fromPartial(object: Partial<_16.QueryAccountRequest>): _16.QueryAccountRequest;
                fromAmino(object: _16.QueryAccountRequestAmino): _16.QueryAccountRequest;
                toAmino(message: _16.QueryAccountRequest): _16.QueryAccountRequestAmino;
                fromAminoMsg(object: _16.QueryAccountRequestAminoMsg): _16.QueryAccountRequest;
                toAminoMsg(message: _16.QueryAccountRequest): _16.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _16.QueryAccountRequestProtoMsg): _16.QueryAccountRequest;
                toProto(message: _16.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _16.QueryAccountRequest): _16.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _16.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryAccountResponse;
                fromPartial(object: Partial<_16.QueryAccountResponse>): _16.QueryAccountResponse;
                fromAmino(object: _16.QueryAccountResponseAmino): _16.QueryAccountResponse;
                toAmino(message: _16.QueryAccountResponse): _16.QueryAccountResponseAmino;
                fromAminoMsg(object: _16.QueryAccountResponseAminoMsg): _16.QueryAccountResponse;
                toAminoMsg(message: _16.QueryAccountResponse): _16.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _16.QueryAccountResponseProtoMsg): _16.QueryAccountResponse;
                toProto(message: _16.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _16.QueryAccountResponse): _16.QueryAccountResponseProtoMsg;
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
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _16.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_16.QueryModuleAccountByNameRequest>): _16.QueryModuleAccountByNameRequest;
                fromAmino(object: _16.QueryModuleAccountByNameRequestAmino): _16.QueryModuleAccountByNameRequest;
                toAmino(message: _16.QueryModuleAccountByNameRequest): _16.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _16.QueryModuleAccountByNameRequestAminoMsg): _16.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _16.QueryModuleAccountByNameRequest): _16.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _16.QueryModuleAccountByNameRequestProtoMsg): _16.QueryModuleAccountByNameRequest;
                toProto(message: _16.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _16.QueryModuleAccountByNameRequest): _16.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _16.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_16.QueryModuleAccountByNameResponse>): _16.QueryModuleAccountByNameResponse;
                fromAmino(object: _16.QueryModuleAccountByNameResponseAmino): _16.QueryModuleAccountByNameResponse;
                toAmino(message: _16.QueryModuleAccountByNameResponse): _16.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _16.QueryModuleAccountByNameResponseAminoMsg): _16.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _16.QueryModuleAccountByNameResponse): _16.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _16.QueryModuleAccountByNameResponseProtoMsg): _16.QueryModuleAccountByNameResponse;
                toProto(message: _16.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _16.QueryModuleAccountByNameResponse): _16.QueryModuleAccountByNameResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _14.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _14.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
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
            BaseAccount: {
                typeUrl: string;
                encode(message: _14.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.BaseAccount;
                fromPartial(object: Partial<_14.BaseAccount>): _14.BaseAccount;
                fromAmino(object: _14.BaseAccountAmino): _14.BaseAccount;
                toAmino(message: _14.BaseAccount): _14.BaseAccountAmino;
                fromAminoMsg(object: _14.BaseAccountAminoMsg): _14.BaseAccount;
                toAminoMsg(message: _14.BaseAccount): _14.BaseAccountAminoMsg;
                fromProtoMsg(message: _14.BaseAccountProtoMsg): _14.BaseAccount;
                toProto(message: _14.BaseAccount): Uint8Array;
                toProtoMsg(message: _14.BaseAccount): _14.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _14.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.ModuleAccount;
                fromPartial(object: Partial<_14.ModuleAccount>): _14.ModuleAccount;
                fromAmino(object: _14.ModuleAccountAmino): _14.ModuleAccount;
                toAmino(message: _14.ModuleAccount): _14.ModuleAccountAmino;
                fromAminoMsg(object: _14.ModuleAccountAminoMsg): _14.ModuleAccount;
                toAminoMsg(message: _14.ModuleAccount): _14.ModuleAccountAminoMsg;
                fromProtoMsg(message: _14.ModuleAccountProtoMsg): _14.ModuleAccount;
                toProto(message: _14.ModuleAccount): Uint8Array;
                toProtoMsg(message: _14.ModuleAccount): _14.ModuleAccountProtoMsg;
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
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _181.MsgClientImpl;
            QueryClientImpl: typeof _167.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _20.QueryGrantsRequest): Promise<_20.QueryGrantsResponse>;
                granterGrants(request: _20.QueryGranterGrantsRequest): Promise<_20.QueryGranterGrantsResponse>;
                granteeGrants(request: _20.QueryGranteeGrantsRequest): Promise<_20.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _152.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _21.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _21.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _21.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _21.MsgGrant): {
                        typeUrl: string;
                        value: _21.MsgGrant;
                    };
                    exec(value: _21.MsgExec): {
                        typeUrl: string;
                        value: _21.MsgExec;
                    };
                    revoke(value: _21.MsgRevoke): {
                        typeUrl: string;
                        value: _21.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _21.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _21.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _21.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _21.MsgGrant): {
                        typeUrl: string;
                        value: _21.MsgGrant;
                    };
                    exec(value: _21.MsgExec): {
                        typeUrl: string;
                        value: _21.MsgExec;
                    };
                    revoke(value: _21.MsgRevoke): {
                        typeUrl: string;
                        value: _21.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _21.MsgGrant) => _21.MsgGrantAmino;
                    fromAmino: (object: _21.MsgGrantAmino) => _21.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _21.MsgExec) => _21.MsgExecAmino;
                    fromAmino: (object: _21.MsgExecAmino) => _21.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _21.MsgRevoke) => _21.MsgRevokeAmino;
                    fromAmino: (object: _21.MsgRevokeAmino) => _21.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _21.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.MsgGrant;
                fromPartial(object: Partial<_21.MsgGrant>): _21.MsgGrant;
                fromAmino(object: _21.MsgGrantAmino): _21.MsgGrant;
                toAmino(message: _21.MsgGrant): _21.MsgGrantAmino;
                fromAminoMsg(object: _21.MsgGrantAminoMsg): _21.MsgGrant;
                toAminoMsg(message: _21.MsgGrant): _21.MsgGrantAminoMsg;
                fromProtoMsg(message: _21.MsgGrantProtoMsg): _21.MsgGrant;
                toProto(message: _21.MsgGrant): Uint8Array;
                toProtoMsg(message: _21.MsgGrant): _21.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _21.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.MsgExecResponse;
                fromPartial(object: Partial<_21.MsgExecResponse>): _21.MsgExecResponse;
                fromAmino(object: _21.MsgExecResponseAmino): _21.MsgExecResponse;
                toAmino(message: _21.MsgExecResponse): _21.MsgExecResponseAmino;
                fromAminoMsg(object: _21.MsgExecResponseAminoMsg): _21.MsgExecResponse;
                toAminoMsg(message: _21.MsgExecResponse): _21.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _21.MsgExecResponseProtoMsg): _21.MsgExecResponse;
                toProto(message: _21.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _21.MsgExecResponse): _21.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _21.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.MsgExec;
                fromPartial(object: Partial<_21.MsgExec>): _21.MsgExec;
                fromAmino(object: _21.MsgExecAmino): _21.MsgExec;
                toAmino(message: _21.MsgExec): _21.MsgExecAmino;
                fromAminoMsg(object: _21.MsgExecAminoMsg): _21.MsgExec;
                toAminoMsg(message: _21.MsgExec): _21.MsgExecAminoMsg;
                fromProtoMsg(message: _21.MsgExecProtoMsg): _21.MsgExec;
                toProto(message: _21.MsgExec): Uint8Array;
                toProtoMsg(message: _21.MsgExec): _21.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _21.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.MsgGrantResponse;
                fromPartial(_: Partial<_21.MsgGrantResponse>): _21.MsgGrantResponse;
                fromAmino(_: _21.MsgGrantResponseAmino): _21.MsgGrantResponse;
                toAmino(_: _21.MsgGrantResponse): _21.MsgGrantResponseAmino;
                fromAminoMsg(object: _21.MsgGrantResponseAminoMsg): _21.MsgGrantResponse;
                toAminoMsg(message: _21.MsgGrantResponse): _21.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _21.MsgGrantResponseProtoMsg): _21.MsgGrantResponse;
                toProto(message: _21.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _21.MsgGrantResponse): _21.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _21.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.MsgRevoke;
                fromPartial(object: Partial<_21.MsgRevoke>): _21.MsgRevoke;
                fromAmino(object: _21.MsgRevokeAmino): _21.MsgRevoke;
                toAmino(message: _21.MsgRevoke): _21.MsgRevokeAmino;
                fromAminoMsg(object: _21.MsgRevokeAminoMsg): _21.MsgRevoke;
                toAminoMsg(message: _21.MsgRevoke): _21.MsgRevokeAminoMsg;
                fromProtoMsg(message: _21.MsgRevokeProtoMsg): _21.MsgRevoke;
                toProto(message: _21.MsgRevoke): Uint8Array;
                toProtoMsg(message: _21.MsgRevoke): _21.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _21.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.MsgRevokeResponse;
                fromPartial(_: Partial<_21.MsgRevokeResponse>): _21.MsgRevokeResponse;
                fromAmino(_: _21.MsgRevokeResponseAmino): _21.MsgRevokeResponse;
                toAmino(_: _21.MsgRevokeResponse): _21.MsgRevokeResponseAmino;
                fromAminoMsg(object: _21.MsgRevokeResponseAminoMsg): _21.MsgRevokeResponse;
                toAminoMsg(message: _21.MsgRevokeResponse): _21.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _21.MsgRevokeResponseProtoMsg): _21.MsgRevokeResponse;
                toProto(message: _21.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _21.MsgRevokeResponse): _21.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _20.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryGrantsRequest;
                fromPartial(object: Partial<_20.QueryGrantsRequest>): _20.QueryGrantsRequest;
                fromAmino(object: _20.QueryGrantsRequestAmino): _20.QueryGrantsRequest;
                toAmino(message: _20.QueryGrantsRequest): _20.QueryGrantsRequestAmino;
                fromAminoMsg(object: _20.QueryGrantsRequestAminoMsg): _20.QueryGrantsRequest;
                toAminoMsg(message: _20.QueryGrantsRequest): _20.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _20.QueryGrantsRequestProtoMsg): _20.QueryGrantsRequest;
                toProto(message: _20.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _20.QueryGrantsRequest): _20.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _20.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryGrantsResponse;
                fromPartial(object: Partial<_20.QueryGrantsResponse>): _20.QueryGrantsResponse;
                fromAmino(object: _20.QueryGrantsResponseAmino): _20.QueryGrantsResponse;
                toAmino(message: _20.QueryGrantsResponse): _20.QueryGrantsResponseAmino;
                fromAminoMsg(object: _20.QueryGrantsResponseAminoMsg): _20.QueryGrantsResponse;
                toAminoMsg(message: _20.QueryGrantsResponse): _20.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _20.QueryGrantsResponseProtoMsg): _20.QueryGrantsResponse;
                toProto(message: _20.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _20.QueryGrantsResponse): _20.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _20.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_20.QueryGranterGrantsRequest>): _20.QueryGranterGrantsRequest;
                fromAmino(object: _20.QueryGranterGrantsRequestAmino): _20.QueryGranterGrantsRequest;
                toAmino(message: _20.QueryGranterGrantsRequest): _20.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _20.QueryGranterGrantsRequestAminoMsg): _20.QueryGranterGrantsRequest;
                toAminoMsg(message: _20.QueryGranterGrantsRequest): _20.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _20.QueryGranterGrantsRequestProtoMsg): _20.QueryGranterGrantsRequest;
                toProto(message: _20.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _20.QueryGranterGrantsRequest): _20.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _20.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_20.QueryGranterGrantsResponse>): _20.QueryGranterGrantsResponse;
                fromAmino(object: _20.QueryGranterGrantsResponseAmino): _20.QueryGranterGrantsResponse;
                toAmino(message: _20.QueryGranterGrantsResponse): _20.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _20.QueryGranterGrantsResponseAminoMsg): _20.QueryGranterGrantsResponse;
                toAminoMsg(message: _20.QueryGranterGrantsResponse): _20.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _20.QueryGranterGrantsResponseProtoMsg): _20.QueryGranterGrantsResponse;
                toProto(message: _20.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _20.QueryGranterGrantsResponse): _20.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _20.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_20.QueryGranteeGrantsRequest>): _20.QueryGranteeGrantsRequest;
                fromAmino(object: _20.QueryGranteeGrantsRequestAmino): _20.QueryGranteeGrantsRequest;
                toAmino(message: _20.QueryGranteeGrantsRequest): _20.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _20.QueryGranteeGrantsRequestAminoMsg): _20.QueryGranteeGrantsRequest;
                toAminoMsg(message: _20.QueryGranteeGrantsRequest): _20.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _20.QueryGranteeGrantsRequestProtoMsg): _20.QueryGranteeGrantsRequest;
                toProto(message: _20.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _20.QueryGranteeGrantsRequest): _20.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _20.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_20.QueryGranteeGrantsResponse>): _20.QueryGranteeGrantsResponse;
                fromAmino(object: _20.QueryGranteeGrantsResponseAmino): _20.QueryGranteeGrantsResponse;
                toAmino(message: _20.QueryGranteeGrantsResponse): _20.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _20.QueryGranteeGrantsResponseAminoMsg): _20.QueryGranteeGrantsResponse;
                toAminoMsg(message: _20.QueryGranteeGrantsResponse): _20.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _20.QueryGranteeGrantsResponseProtoMsg): _20.QueryGranteeGrantsResponse;
                toProto(message: _20.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _20.QueryGranteeGrantsResponse): _20.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _19.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.GenesisState;
                fromPartial(object: Partial<_19.GenesisState>): _19.GenesisState;
                fromAmino(object: _19.GenesisStateAmino): _19.GenesisState;
                toAmino(message: _19.GenesisState): _19.GenesisStateAmino;
                fromAminoMsg(object: _19.GenesisStateAminoMsg): _19.GenesisState;
                toAminoMsg(message: _19.GenesisState): _19.GenesisStateAminoMsg;
                fromProtoMsg(message: _19.GenesisStateProtoMsg): _19.GenesisState;
                toProto(message: _19.GenesisState): Uint8Array;
                toProtoMsg(message: _19.GenesisState): _19.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _18.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.EventGrant;
                fromPartial(object: Partial<_18.EventGrant>): _18.EventGrant;
                fromAmino(object: _18.EventGrantAmino): _18.EventGrant;
                toAmino(message: _18.EventGrant): _18.EventGrantAmino;
                fromAminoMsg(object: _18.EventGrantAminoMsg): _18.EventGrant;
                toAminoMsg(message: _18.EventGrant): _18.EventGrantAminoMsg;
                fromProtoMsg(message: _18.EventGrantProtoMsg): _18.EventGrant;
                toProto(message: _18.EventGrant): Uint8Array;
                toProtoMsg(message: _18.EventGrant): _18.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _18.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.EventRevoke;
                fromPartial(object: Partial<_18.EventRevoke>): _18.EventRevoke;
                fromAmino(object: _18.EventRevokeAmino): _18.EventRevoke;
                toAmino(message: _18.EventRevoke): _18.EventRevokeAmino;
                fromAminoMsg(object: _18.EventRevokeAminoMsg): _18.EventRevoke;
                toAminoMsg(message: _18.EventRevoke): _18.EventRevokeAminoMsg;
                fromProtoMsg(message: _18.EventRevokeProtoMsg): _18.EventRevoke;
                toProto(message: _18.EventRevoke): Uint8Array;
                toProtoMsg(message: _18.EventRevoke): _18.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _17.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.GenericAuthorization;
                fromPartial(object: Partial<_17.GenericAuthorization>): _17.GenericAuthorization;
                fromAmino(object: _17.GenericAuthorizationAmino): _17.GenericAuthorization;
                toAmino(message: _17.GenericAuthorization): _17.GenericAuthorizationAmino;
                fromAminoMsg(object: _17.GenericAuthorizationAminoMsg): _17.GenericAuthorization;
                toAminoMsg(message: _17.GenericAuthorization): _17.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _17.GenericAuthorizationProtoMsg): _17.GenericAuthorization;
                toProto(message: _17.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _17.GenericAuthorization): _17.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _17.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.Grant;
                fromPartial(object: Partial<_17.Grant>): _17.Grant;
                fromAmino(object: _17.GrantAmino): _17.Grant;
                toAmino(message: _17.Grant): _17.GrantAmino;
                fromAminoMsg(object: _17.GrantAminoMsg): _17.Grant;
                toAminoMsg(message: _17.Grant): _17.GrantAminoMsg;
                fromProtoMsg(message: _17.GrantProtoMsg): _17.Grant;
                toProto(message: _17.Grant): Uint8Array;
                toProtoMsg(message: _17.Grant): _17.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _17.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.GrantAuthorization;
                fromPartial(object: Partial<_17.GrantAuthorization>): _17.GrantAuthorization;
                fromAmino(object: _17.GrantAuthorizationAmino): _17.GrantAuthorization;
                toAmino(message: _17.GrantAuthorization): _17.GrantAuthorizationAmino;
                fromAminoMsg(object: _17.GrantAuthorizationAminoMsg): _17.GrantAuthorization;
                toAminoMsg(message: _17.GrantAuthorization): _17.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _17.GrantAuthorizationProtoMsg): _17.GrantAuthorization;
                toProto(message: _17.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _17.GrantAuthorization): _17.GrantAuthorizationProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _22.SendAuthorization | _72.StakeAuthorization | _17.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _182.MsgClientImpl;
            QueryClientImpl: typeof _168.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _25.QueryBalanceRequest): Promise<_25.QueryBalanceResponse>;
                allBalances(request: _25.QueryAllBalancesRequest): Promise<_25.QueryAllBalancesResponse>;
                spendableBalances(request: _25.QuerySpendableBalancesRequest): Promise<_25.QuerySpendableBalancesResponse>;
                totalSupply(request?: _25.QueryTotalSupplyRequest): Promise<_25.QueryTotalSupplyResponse>;
                supplyOf(request: _25.QuerySupplyOfRequest): Promise<_25.QuerySupplyOfResponse>;
                params(request?: _25.QueryParamsRequest): Promise<_25.QueryParamsResponse>;
                denomMetadata(request: _25.QueryDenomMetadataRequest): Promise<_25.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _25.QueryDenomsMetadataRequest): Promise<_25.QueryDenomsMetadataResponse>;
            };
            LCDQueryClient: typeof _153.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _26.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _26.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _26.MsgSend): {
                        typeUrl: string;
                        value: _26.MsgSend;
                    };
                    multiSend(value: _26.MsgMultiSend): {
                        typeUrl: string;
                        value: _26.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _26.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _26.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _26.MsgSend): {
                        typeUrl: string;
                        value: _26.MsgSend;
                    };
                    multiSend(value: _26.MsgMultiSend): {
                        typeUrl: string;
                        value: _26.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _26.MsgSend) => _26.MsgSendAmino;
                    fromAmino: (object: _26.MsgSendAmino) => _26.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _26.MsgMultiSend) => _26.MsgMultiSendAmino;
                    fromAmino: (object: _26.MsgMultiSendAmino) => _26.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _26.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.MsgSend;
                fromPartial(object: Partial<_26.MsgSend>): _26.MsgSend;
                fromAmino(object: _26.MsgSendAmino): _26.MsgSend;
                toAmino(message: _26.MsgSend): _26.MsgSendAmino;
                fromAminoMsg(object: _26.MsgSendAminoMsg): _26.MsgSend;
                toAminoMsg(message: _26.MsgSend): _26.MsgSendAminoMsg;
                fromProtoMsg(message: _26.MsgSendProtoMsg): _26.MsgSend;
                toProto(message: _26.MsgSend): Uint8Array;
                toProtoMsg(message: _26.MsgSend): _26.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _26.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _26.MsgSendResponse;
                fromPartial(_: Partial<_26.MsgSendResponse>): _26.MsgSendResponse;
                fromAmino(_: _26.MsgSendResponseAmino): _26.MsgSendResponse;
                toAmino(_: _26.MsgSendResponse): _26.MsgSendResponseAmino;
                fromAminoMsg(object: _26.MsgSendResponseAminoMsg): _26.MsgSendResponse;
                toAminoMsg(message: _26.MsgSendResponse): _26.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _26.MsgSendResponseProtoMsg): _26.MsgSendResponse;
                toProto(message: _26.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _26.MsgSendResponse): _26.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _26.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.MsgMultiSend;
                fromPartial(object: Partial<_26.MsgMultiSend>): _26.MsgMultiSend;
                fromAmino(object: _26.MsgMultiSendAmino): _26.MsgMultiSend;
                toAmino(message: _26.MsgMultiSend): _26.MsgMultiSendAmino;
                fromAminoMsg(object: _26.MsgMultiSendAminoMsg): _26.MsgMultiSend;
                toAminoMsg(message: _26.MsgMultiSend): _26.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _26.MsgMultiSendProtoMsg): _26.MsgMultiSend;
                toProto(message: _26.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _26.MsgMultiSend): _26.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _26.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _26.MsgMultiSendResponse;
                fromPartial(_: Partial<_26.MsgMultiSendResponse>): _26.MsgMultiSendResponse;
                fromAmino(_: _26.MsgMultiSendResponseAmino): _26.MsgMultiSendResponse;
                toAmino(_: _26.MsgMultiSendResponse): _26.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _26.MsgMultiSendResponseAminoMsg): _26.MsgMultiSendResponse;
                toAminoMsg(message: _26.MsgMultiSendResponse): _26.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _26.MsgMultiSendResponseProtoMsg): _26.MsgMultiSendResponse;
                toProto(message: _26.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _26.MsgMultiSendResponse): _26.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _25.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryBalanceRequest;
                fromPartial(object: Partial<_25.QueryBalanceRequest>): _25.QueryBalanceRequest;
                fromAmino(object: _25.QueryBalanceRequestAmino): _25.QueryBalanceRequest;
                toAmino(message: _25.QueryBalanceRequest): _25.QueryBalanceRequestAmino;
                fromAminoMsg(object: _25.QueryBalanceRequestAminoMsg): _25.QueryBalanceRequest;
                toAminoMsg(message: _25.QueryBalanceRequest): _25.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _25.QueryBalanceRequestProtoMsg): _25.QueryBalanceRequest;
                toProto(message: _25.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _25.QueryBalanceRequest): _25.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _25.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryBalanceResponse;
                fromPartial(object: Partial<_25.QueryBalanceResponse>): _25.QueryBalanceResponse;
                fromAmino(object: _25.QueryBalanceResponseAmino): _25.QueryBalanceResponse;
                toAmino(message: _25.QueryBalanceResponse): _25.QueryBalanceResponseAmino;
                fromAminoMsg(object: _25.QueryBalanceResponseAminoMsg): _25.QueryBalanceResponse;
                toAminoMsg(message: _25.QueryBalanceResponse): _25.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _25.QueryBalanceResponseProtoMsg): _25.QueryBalanceResponse;
                toProto(message: _25.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _25.QueryBalanceResponse): _25.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _25.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryAllBalancesRequest;
                fromPartial(object: Partial<_25.QueryAllBalancesRequest>): _25.QueryAllBalancesRequest;
                fromAmino(object: _25.QueryAllBalancesRequestAmino): _25.QueryAllBalancesRequest;
                toAmino(message: _25.QueryAllBalancesRequest): _25.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _25.QueryAllBalancesRequestAminoMsg): _25.QueryAllBalancesRequest;
                toAminoMsg(message: _25.QueryAllBalancesRequest): _25.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _25.QueryAllBalancesRequestProtoMsg): _25.QueryAllBalancesRequest;
                toProto(message: _25.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _25.QueryAllBalancesRequest): _25.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _25.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryAllBalancesResponse;
                fromPartial(object: Partial<_25.QueryAllBalancesResponse>): _25.QueryAllBalancesResponse;
                fromAmino(object: _25.QueryAllBalancesResponseAmino): _25.QueryAllBalancesResponse;
                toAmino(message: _25.QueryAllBalancesResponse): _25.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _25.QueryAllBalancesResponseAminoMsg): _25.QueryAllBalancesResponse;
                toAminoMsg(message: _25.QueryAllBalancesResponse): _25.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _25.QueryAllBalancesResponseProtoMsg): _25.QueryAllBalancesResponse;
                toProto(message: _25.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _25.QueryAllBalancesResponse): _25.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _25.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_25.QuerySpendableBalancesRequest>): _25.QuerySpendableBalancesRequest;
                fromAmino(object: _25.QuerySpendableBalancesRequestAmino): _25.QuerySpendableBalancesRequest;
                toAmino(message: _25.QuerySpendableBalancesRequest): _25.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _25.QuerySpendableBalancesRequestAminoMsg): _25.QuerySpendableBalancesRequest;
                toAminoMsg(message: _25.QuerySpendableBalancesRequest): _25.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _25.QuerySpendableBalancesRequestProtoMsg): _25.QuerySpendableBalancesRequest;
                toProto(message: _25.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _25.QuerySpendableBalancesRequest): _25.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _25.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_25.QuerySpendableBalancesResponse>): _25.QuerySpendableBalancesResponse;
                fromAmino(object: _25.QuerySpendableBalancesResponseAmino): _25.QuerySpendableBalancesResponse;
                toAmino(message: _25.QuerySpendableBalancesResponse): _25.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _25.QuerySpendableBalancesResponseAminoMsg): _25.QuerySpendableBalancesResponse;
                toAminoMsg(message: _25.QuerySpendableBalancesResponse): _25.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _25.QuerySpendableBalancesResponseProtoMsg): _25.QuerySpendableBalancesResponse;
                toProto(message: _25.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _25.QuerySpendableBalancesResponse): _25.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _25.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_25.QueryTotalSupplyRequest>): _25.QueryTotalSupplyRequest;
                fromAmino(object: _25.QueryTotalSupplyRequestAmino): _25.QueryTotalSupplyRequest;
                toAmino(message: _25.QueryTotalSupplyRequest): _25.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _25.QueryTotalSupplyRequestAminoMsg): _25.QueryTotalSupplyRequest;
                toAminoMsg(message: _25.QueryTotalSupplyRequest): _25.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _25.QueryTotalSupplyRequestProtoMsg): _25.QueryTotalSupplyRequest;
                toProto(message: _25.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _25.QueryTotalSupplyRequest): _25.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _25.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_25.QueryTotalSupplyResponse>): _25.QueryTotalSupplyResponse;
                fromAmino(object: _25.QueryTotalSupplyResponseAmino): _25.QueryTotalSupplyResponse;
                toAmino(message: _25.QueryTotalSupplyResponse): _25.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _25.QueryTotalSupplyResponseAminoMsg): _25.QueryTotalSupplyResponse;
                toAminoMsg(message: _25.QueryTotalSupplyResponse): _25.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _25.QueryTotalSupplyResponseProtoMsg): _25.QueryTotalSupplyResponse;
                toProto(message: _25.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _25.QueryTotalSupplyResponse): _25.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _25.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QuerySupplyOfRequest;
                fromPartial(object: Partial<_25.QuerySupplyOfRequest>): _25.QuerySupplyOfRequest;
                fromAmino(object: _25.QuerySupplyOfRequestAmino): _25.QuerySupplyOfRequest;
                toAmino(message: _25.QuerySupplyOfRequest): _25.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _25.QuerySupplyOfRequestAminoMsg): _25.QuerySupplyOfRequest;
                toAminoMsg(message: _25.QuerySupplyOfRequest): _25.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _25.QuerySupplyOfRequestProtoMsg): _25.QuerySupplyOfRequest;
                toProto(message: _25.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _25.QuerySupplyOfRequest): _25.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _25.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QuerySupplyOfResponse;
                fromPartial(object: Partial<_25.QuerySupplyOfResponse>): _25.QuerySupplyOfResponse;
                fromAmino(object: _25.QuerySupplyOfResponseAmino): _25.QuerySupplyOfResponse;
                toAmino(message: _25.QuerySupplyOfResponse): _25.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _25.QuerySupplyOfResponseAminoMsg): _25.QuerySupplyOfResponse;
                toAminoMsg(message: _25.QuerySupplyOfResponse): _25.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _25.QuerySupplyOfResponseProtoMsg): _25.QuerySupplyOfResponse;
                toProto(message: _25.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _25.QuerySupplyOfResponse): _25.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _25.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _25.QueryParamsRequest;
                fromPartial(_: Partial<_25.QueryParamsRequest>): _25.QueryParamsRequest;
                fromAmino(_: _25.QueryParamsRequestAmino): _25.QueryParamsRequest;
                toAmino(_: _25.QueryParamsRequest): _25.QueryParamsRequestAmino;
                fromAminoMsg(object: _25.QueryParamsRequestAminoMsg): _25.QueryParamsRequest;
                toAminoMsg(message: _25.QueryParamsRequest): _25.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _25.QueryParamsRequestProtoMsg): _25.QueryParamsRequest;
                toProto(message: _25.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _25.QueryParamsRequest): _25.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _25.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryParamsResponse;
                fromPartial(object: Partial<_25.QueryParamsResponse>): _25.QueryParamsResponse;
                fromAmino(object: _25.QueryParamsResponseAmino): _25.QueryParamsResponse;
                toAmino(message: _25.QueryParamsResponse): _25.QueryParamsResponseAmino;
                fromAminoMsg(object: _25.QueryParamsResponseAminoMsg): _25.QueryParamsResponse;
                toAminoMsg(message: _25.QueryParamsResponse): _25.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _25.QueryParamsResponseProtoMsg): _25.QueryParamsResponse;
                toProto(message: _25.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _25.QueryParamsResponse): _25.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _25.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_25.QueryDenomsMetadataRequest>): _25.QueryDenomsMetadataRequest;
                fromAmino(object: _25.QueryDenomsMetadataRequestAmino): _25.QueryDenomsMetadataRequest;
                toAmino(message: _25.QueryDenomsMetadataRequest): _25.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _25.QueryDenomsMetadataRequestAminoMsg): _25.QueryDenomsMetadataRequest;
                toAminoMsg(message: _25.QueryDenomsMetadataRequest): _25.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _25.QueryDenomsMetadataRequestProtoMsg): _25.QueryDenomsMetadataRequest;
                toProto(message: _25.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _25.QueryDenomsMetadataRequest): _25.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _25.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_25.QueryDenomsMetadataResponse>): _25.QueryDenomsMetadataResponse;
                fromAmino(object: _25.QueryDenomsMetadataResponseAmino): _25.QueryDenomsMetadataResponse;
                toAmino(message: _25.QueryDenomsMetadataResponse): _25.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _25.QueryDenomsMetadataResponseAminoMsg): _25.QueryDenomsMetadataResponse;
                toAminoMsg(message: _25.QueryDenomsMetadataResponse): _25.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _25.QueryDenomsMetadataResponseProtoMsg): _25.QueryDenomsMetadataResponse;
                toProto(message: _25.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _25.QueryDenomsMetadataResponse): _25.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _25.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_25.QueryDenomMetadataRequest>): _25.QueryDenomMetadataRequest;
                fromAmino(object: _25.QueryDenomMetadataRequestAmino): _25.QueryDenomMetadataRequest;
                toAmino(message: _25.QueryDenomMetadataRequest): _25.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _25.QueryDenomMetadataRequestAminoMsg): _25.QueryDenomMetadataRequest;
                toAminoMsg(message: _25.QueryDenomMetadataRequest): _25.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _25.QueryDenomMetadataRequestProtoMsg): _25.QueryDenomMetadataRequest;
                toProto(message: _25.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _25.QueryDenomMetadataRequest): _25.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _25.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_25.QueryDenomMetadataResponse>): _25.QueryDenomMetadataResponse;
                fromAmino(object: _25.QueryDenomMetadataResponseAmino): _25.QueryDenomMetadataResponse;
                toAmino(message: _25.QueryDenomMetadataResponse): _25.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _25.QueryDenomMetadataResponseAminoMsg): _25.QueryDenomMetadataResponse;
                toAminoMsg(message: _25.QueryDenomMetadataResponse): _25.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _25.QueryDenomMetadataResponseProtoMsg): _25.QueryDenomMetadataResponse;
                toProto(message: _25.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _25.QueryDenomMetadataResponse): _25.QueryDenomMetadataResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _24.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.GenesisState;
                fromPartial(object: Partial<_24.GenesisState>): _24.GenesisState;
                fromAmino(object: _24.GenesisStateAmino): _24.GenesisState;
                toAmino(message: _24.GenesisState): _24.GenesisStateAmino;
                fromAminoMsg(object: _24.GenesisStateAminoMsg): _24.GenesisState;
                toAminoMsg(message: _24.GenesisState): _24.GenesisStateAminoMsg;
                fromProtoMsg(message: _24.GenesisStateProtoMsg): _24.GenesisState;
                toProto(message: _24.GenesisState): Uint8Array;
                toProtoMsg(message: _24.GenesisState): _24.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _24.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.Balance;
                fromPartial(object: Partial<_24.Balance>): _24.Balance;
                fromAmino(object: _24.BalanceAmino): _24.Balance;
                toAmino(message: _24.Balance): _24.BalanceAmino;
                fromAminoMsg(object: _24.BalanceAminoMsg): _24.Balance;
                toAminoMsg(message: _24.Balance): _24.BalanceAminoMsg;
                fromProtoMsg(message: _24.BalanceProtoMsg): _24.Balance;
                toProto(message: _24.Balance): Uint8Array;
                toProtoMsg(message: _24.Balance): _24.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _23.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.Params;
                fromPartial(object: Partial<_23.Params>): _23.Params;
                fromAmino(object: _23.ParamsAmino): _23.Params;
                toAmino(message: _23.Params): _23.ParamsAmino;
                fromAminoMsg(object: _23.ParamsAminoMsg): _23.Params;
                toAminoMsg(message: _23.Params): _23.ParamsAminoMsg;
                fromProtoMsg(message: _23.ParamsProtoMsg): _23.Params;
                toProto(message: _23.Params): Uint8Array;
                toProtoMsg(message: _23.Params): _23.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _23.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.SendEnabled;
                fromPartial(object: Partial<_23.SendEnabled>): _23.SendEnabled;
                fromAmino(object: _23.SendEnabledAmino): _23.SendEnabled;
                toAmino(message: _23.SendEnabled): _23.SendEnabledAmino;
                fromAminoMsg(object: _23.SendEnabledAminoMsg): _23.SendEnabled;
                toAminoMsg(message: _23.SendEnabled): _23.SendEnabledAminoMsg;
                fromProtoMsg(message: _23.SendEnabledProtoMsg): _23.SendEnabled;
                toProto(message: _23.SendEnabled): Uint8Array;
                toProtoMsg(message: _23.SendEnabled): _23.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _23.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.Input;
                fromPartial(object: Partial<_23.Input>): _23.Input;
                fromAmino(object: _23.InputAmino): _23.Input;
                toAmino(message: _23.Input): _23.InputAmino;
                fromAminoMsg(object: _23.InputAminoMsg): _23.Input;
                toAminoMsg(message: _23.Input): _23.InputAminoMsg;
                fromProtoMsg(message: _23.InputProtoMsg): _23.Input;
                toProto(message: _23.Input): Uint8Array;
                toProtoMsg(message: _23.Input): _23.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _23.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.Output;
                fromPartial(object: Partial<_23.Output>): _23.Output;
                fromAmino(object: _23.OutputAmino): _23.Output;
                toAmino(message: _23.Output): _23.OutputAmino;
                fromAminoMsg(object: _23.OutputAminoMsg): _23.Output;
                toAminoMsg(message: _23.Output): _23.OutputAminoMsg;
                fromProtoMsg(message: _23.OutputProtoMsg): _23.Output;
                toProto(message: _23.Output): Uint8Array;
                toProtoMsg(message: _23.Output): _23.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _23.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.Supply;
                fromPartial(object: Partial<_23.Supply>): _23.Supply;
                fromAmino(object: _23.SupplyAmino): _23.Supply;
                toAmino(message: _23.Supply): _23.SupplyAmino;
                fromAminoMsg(object: _23.SupplyAminoMsg): _23.Supply;
                toAminoMsg(message: _23.Supply): _23.SupplyAminoMsg;
                fromProtoMsg(message: _23.SupplyProtoMsg): _23.Supply;
                toProto(message: _23.Supply): Uint8Array;
                toProtoMsg(message: _23.Supply): _23.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _23.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.DenomUnit;
                fromPartial(object: Partial<_23.DenomUnit>): _23.DenomUnit;
                fromAmino(object: _23.DenomUnitAmino): _23.DenomUnit;
                toAmino(message: _23.DenomUnit): _23.DenomUnitAmino;
                fromAminoMsg(object: _23.DenomUnitAminoMsg): _23.DenomUnit;
                toAminoMsg(message: _23.DenomUnit): _23.DenomUnitAminoMsg;
                fromProtoMsg(message: _23.DenomUnitProtoMsg): _23.DenomUnit;
                toProto(message: _23.DenomUnit): Uint8Array;
                toProtoMsg(message: _23.DenomUnit): _23.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _23.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.Metadata;
                fromPartial(object: Partial<_23.Metadata>): _23.Metadata;
                fromAmino(object: _23.MetadataAmino): _23.Metadata;
                toAmino(message: _23.Metadata): _23.MetadataAmino;
                fromAminoMsg(object: _23.MetadataAminoMsg): _23.Metadata;
                toAminoMsg(message: _23.Metadata): _23.MetadataAminoMsg;
                fromProtoMsg(message: _23.MetadataProtoMsg): _23.Metadata;
                toProto(message: _23.Metadata): Uint8Array;
                toProtoMsg(message: _23.Metadata): _23.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _22.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.SendAuthorization;
                fromPartial(object: Partial<_22.SendAuthorization>): _22.SendAuthorization;
                fromAmino(object: _22.SendAuthorizationAmino): _22.SendAuthorization;
                toAmino(message: _22.SendAuthorization): _22.SendAuthorizationAmino;
                fromAminoMsg(object: _22.SendAuthorizationAminoMsg): _22.SendAuthorization;
                toAminoMsg(message: _22.SendAuthorization): _22.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _22.SendAuthorizationProtoMsg): _22.SendAuthorization;
                toProto(message: _22.SendAuthorization): Uint8Array;
                toProtoMsg(message: _22.SendAuthorization): _22.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _27.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.TxResponse;
                    fromPartial(object: Partial<_27.TxResponse>): _27.TxResponse;
                    fromAmino(object: _27.TxResponseAmino): _27.TxResponse;
                    toAmino(message: _27.TxResponse): _27.TxResponseAmino;
                    fromAminoMsg(object: _27.TxResponseAminoMsg): _27.TxResponse;
                    toAminoMsg(message: _27.TxResponse): _27.TxResponseAminoMsg;
                    fromProtoMsg(message: _27.TxResponseProtoMsg): _27.TxResponse;
                    toProto(message: _27.TxResponse): Uint8Array;
                    toProtoMsg(message: _27.TxResponse): _27.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _27.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.ABCIMessageLog;
                    fromPartial(object: Partial<_27.ABCIMessageLog>): _27.ABCIMessageLog;
                    fromAmino(object: _27.ABCIMessageLogAmino): _27.ABCIMessageLog;
                    toAmino(message: _27.ABCIMessageLog): _27.ABCIMessageLogAmino;
                    fromAminoMsg(object: _27.ABCIMessageLogAminoMsg): _27.ABCIMessageLog;
                    toAminoMsg(message: _27.ABCIMessageLog): _27.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _27.ABCIMessageLogProtoMsg): _27.ABCIMessageLog;
                    toProto(message: _27.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _27.ABCIMessageLog): _27.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _27.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.StringEvent;
                    fromPartial(object: Partial<_27.StringEvent>): _27.StringEvent;
                    fromAmino(object: _27.StringEventAmino): _27.StringEvent;
                    toAmino(message: _27.StringEvent): _27.StringEventAmino;
                    fromAminoMsg(object: _27.StringEventAminoMsg): _27.StringEvent;
                    toAminoMsg(message: _27.StringEvent): _27.StringEventAminoMsg;
                    fromProtoMsg(message: _27.StringEventProtoMsg): _27.StringEvent;
                    toProto(message: _27.StringEvent): Uint8Array;
                    toProtoMsg(message: _27.StringEvent): _27.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _27.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.Attribute;
                    fromPartial(object: Partial<_27.Attribute>): _27.Attribute;
                    fromAmino(object: _27.AttributeAmino): _27.Attribute;
                    toAmino(message: _27.Attribute): _27.AttributeAmino;
                    fromAminoMsg(object: _27.AttributeAminoMsg): _27.Attribute;
                    toAminoMsg(message: _27.Attribute): _27.AttributeAminoMsg;
                    fromProtoMsg(message: _27.AttributeProtoMsg): _27.Attribute;
                    toProto(message: _27.Attribute): Uint8Array;
                    toProtoMsg(message: _27.Attribute): _27.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _27.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.GasInfo;
                    fromPartial(object: Partial<_27.GasInfo>): _27.GasInfo;
                    fromAmino(object: _27.GasInfoAmino): _27.GasInfo;
                    toAmino(message: _27.GasInfo): _27.GasInfoAmino;
                    fromAminoMsg(object: _27.GasInfoAminoMsg): _27.GasInfo;
                    toAminoMsg(message: _27.GasInfo): _27.GasInfoAminoMsg;
                    fromProtoMsg(message: _27.GasInfoProtoMsg): _27.GasInfo;
                    toProto(message: _27.GasInfo): Uint8Array;
                    toProtoMsg(message: _27.GasInfo): _27.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _27.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.Result;
                    fromPartial(object: Partial<_27.Result>): _27.Result;
                    fromAmino(object: _27.ResultAmino): _27.Result;
                    toAmino(message: _27.Result): _27.ResultAmino;
                    fromAminoMsg(object: _27.ResultAminoMsg): _27.Result;
                    toAminoMsg(message: _27.Result): _27.ResultAminoMsg;
                    fromProtoMsg(message: _27.ResultProtoMsg): _27.Result;
                    toProto(message: _27.Result): Uint8Array;
                    toProtoMsg(message: _27.Result): _27.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _27.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.SimulationResponse;
                    fromPartial(object: Partial<_27.SimulationResponse>): _27.SimulationResponse;
                    fromAmino(object: _27.SimulationResponseAmino): _27.SimulationResponse;
                    toAmino(message: _27.SimulationResponse): _27.SimulationResponseAmino;
                    fromAminoMsg(object: _27.SimulationResponseAminoMsg): _27.SimulationResponse;
                    toAminoMsg(message: _27.SimulationResponse): _27.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _27.SimulationResponseProtoMsg): _27.SimulationResponse;
                    toProto(message: _27.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _27.SimulationResponse): _27.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _27.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.MsgData;
                    fromPartial(object: Partial<_27.MsgData>): _27.MsgData;
                    fromAmino(object: _27.MsgDataAmino): _27.MsgData;
                    toAmino(message: _27.MsgData): _27.MsgDataAmino;
                    fromAminoMsg(object: _27.MsgDataAminoMsg): _27.MsgData;
                    toAminoMsg(message: _27.MsgData): _27.MsgDataAminoMsg;
                    fromProtoMsg(message: _27.MsgDataProtoMsg): _27.MsgData;
                    toProto(message: _27.MsgData): Uint8Array;
                    toProtoMsg(message: _27.MsgData): _27.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _27.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.TxMsgData;
                    fromPartial(object: Partial<_27.TxMsgData>): _27.TxMsgData;
                    fromAmino(object: _27.TxMsgDataAmino): _27.TxMsgData;
                    toAmino(message: _27.TxMsgData): _27.TxMsgDataAmino;
                    fromAminoMsg(object: _27.TxMsgDataAminoMsg): _27.TxMsgData;
                    toAminoMsg(message: _27.TxMsgData): _27.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _27.TxMsgDataProtoMsg): _27.TxMsgData;
                    toProto(message: _27.TxMsgData): Uint8Array;
                    toProtoMsg(message: _27.TxMsgData): _27.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _27.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.SearchTxsResult;
                    fromPartial(object: Partial<_27.SearchTxsResult>): _27.SearchTxsResult;
                    fromAmino(object: _27.SearchTxsResultAmino): _27.SearchTxsResult;
                    toAmino(message: _27.SearchTxsResult): _27.SearchTxsResultAmino;
                    fromAminoMsg(object: _27.SearchTxsResultAminoMsg): _27.SearchTxsResult;
                    toAminoMsg(message: _27.SearchTxsResult): _27.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _27.SearchTxsResultProtoMsg): _27.SearchTxsResult;
                    toProto(message: _27.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _27.SearchTxsResult): _27.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _28.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.Pairs;
                    fromPartial(object: Partial<_28.Pairs>): _28.Pairs;
                    fromAmino(object: _28.PairsAmino): _28.Pairs;
                    toAmino(message: _28.Pairs): _28.PairsAmino;
                    fromAminoMsg(object: _28.PairsAminoMsg): _28.Pairs;
                    toAminoMsg(message: _28.Pairs): _28.PairsAminoMsg;
                    fromProtoMsg(message: _28.PairsProtoMsg): _28.Pairs;
                    toProto(message: _28.Pairs): Uint8Array;
                    toProtoMsg(message: _28.Pairs): _28.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _28.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.Pair;
                    fromPartial(object: Partial<_28.Pair>): _28.Pair;
                    fromAmino(object: _28.PairAmino): _28.Pair;
                    toAmino(message: _28.Pair): _28.PairAmino;
                    fromAminoMsg(object: _28.PairAminoMsg): _28.Pair;
                    toAminoMsg(message: _28.Pair): _28.PairAminoMsg;
                    fromProtoMsg(message: _28.PairProtoMsg): _28.Pair;
                    toProto(message: _28.Pair): Uint8Array;
                    toProtoMsg(message: _28.Pair): _28.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _169.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _29.ConfigRequest): Promise<_29.ConfigResponse>;
                };
                LCDQueryClient: typeof _154.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _29.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _29.ConfigRequest;
                    fromPartial(_: Partial<_29.ConfigRequest>): _29.ConfigRequest;
                    fromAmino(_: _29.ConfigRequestAmino): _29.ConfigRequest;
                    toAmino(_: _29.ConfigRequest): _29.ConfigRequestAmino;
                    fromAminoMsg(object: _29.ConfigRequestAminoMsg): _29.ConfigRequest;
                    toAminoMsg(message: _29.ConfigRequest): _29.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _29.ConfigRequestProtoMsg): _29.ConfigRequest;
                    toProto(message: _29.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _29.ConfigRequest): _29.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _29.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.ConfigResponse;
                    fromPartial(object: Partial<_29.ConfigResponse>): _29.ConfigResponse;
                    fromAmino(object: _29.ConfigResponseAmino): _29.ConfigResponse;
                    toAmino(message: _29.ConfigResponse): _29.ConfigResponseAmino;
                    fromAminoMsg(object: _29.ConfigResponseAminoMsg): _29.ConfigResponse;
                    toAminoMsg(message: _29.ConfigResponse): _29.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _29.ConfigResponseProtoMsg): _29.ConfigResponse;
                    toProto(message: _29.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _29.ConfigResponse): _29.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _30.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.PageRequest;
                    fromPartial(object: Partial<_30.PageRequest>): _30.PageRequest;
                    fromAmino(object: _30.PageRequestAmino): _30.PageRequest;
                    toAmino(message: _30.PageRequest): _30.PageRequestAmino;
                    fromAminoMsg(object: _30.PageRequestAminoMsg): _30.PageRequest;
                    toAminoMsg(message: _30.PageRequest): _30.PageRequestAminoMsg;
                    fromProtoMsg(message: _30.PageRequestProtoMsg): _30.PageRequest;
                    toProto(message: _30.PageRequest): Uint8Array;
                    toProtoMsg(message: _30.PageRequest): _30.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _30.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.PageResponse;
                    fromPartial(object: Partial<_30.PageResponse>): _30.PageResponse;
                    fromAmino(object: _30.PageResponseAmino): _30.PageResponse;
                    toAmino(message: _30.PageResponse): _30.PageResponseAmino;
                    fromAminoMsg(object: _30.PageResponseAminoMsg): _30.PageResponse;
                    toAminoMsg(message: _30.PageResponse): _30.PageResponseAminoMsg;
                    fromProtoMsg(message: _30.PageResponseProtoMsg): _30.PageResponse;
                    toProto(message: _30.PageResponse): Uint8Array;
                    toProtoMsg(message: _30.PageResponse): _30.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _31.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _31.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_31.ListAllInterfacesRequest>): _31.ListAllInterfacesRequest;
                    fromAmino(_: _31.ListAllInterfacesRequestAmino): _31.ListAllInterfacesRequest;
                    toAmino(_: _31.ListAllInterfacesRequest): _31.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _31.ListAllInterfacesRequestAminoMsg): _31.ListAllInterfacesRequest;
                    toAminoMsg(message: _31.ListAllInterfacesRequest): _31.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _31.ListAllInterfacesRequestProtoMsg): _31.ListAllInterfacesRequest;
                    toProto(message: _31.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _31.ListAllInterfacesRequest): _31.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _31.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_31.ListAllInterfacesResponse>): _31.ListAllInterfacesResponse;
                    fromAmino(object: _31.ListAllInterfacesResponseAmino): _31.ListAllInterfacesResponse;
                    toAmino(message: _31.ListAllInterfacesResponse): _31.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _31.ListAllInterfacesResponseAminoMsg): _31.ListAllInterfacesResponse;
                    toAminoMsg(message: _31.ListAllInterfacesResponse): _31.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _31.ListAllInterfacesResponseProtoMsg): _31.ListAllInterfacesResponse;
                    toProto(message: _31.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _31.ListAllInterfacesResponse): _31.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _31.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.ListImplementationsRequest;
                    fromPartial(object: Partial<_31.ListImplementationsRequest>): _31.ListImplementationsRequest;
                    fromAmino(object: _31.ListImplementationsRequestAmino): _31.ListImplementationsRequest;
                    toAmino(message: _31.ListImplementationsRequest): _31.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _31.ListImplementationsRequestAminoMsg): _31.ListImplementationsRequest;
                    toAminoMsg(message: _31.ListImplementationsRequest): _31.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _31.ListImplementationsRequestProtoMsg): _31.ListImplementationsRequest;
                    toProto(message: _31.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _31.ListImplementationsRequest): _31.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _31.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.ListImplementationsResponse;
                    fromPartial(object: Partial<_31.ListImplementationsResponse>): _31.ListImplementationsResponse;
                    fromAmino(object: _31.ListImplementationsResponseAmino): _31.ListImplementationsResponse;
                    toAmino(message: _31.ListImplementationsResponse): _31.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _31.ListImplementationsResponseAminoMsg): _31.ListImplementationsResponse;
                    toAminoMsg(message: _31.ListImplementationsResponse): _31.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _31.ListImplementationsResponseProtoMsg): _31.ListImplementationsResponse;
                    toProto(message: _31.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _31.ListImplementationsResponse): _31.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _32.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.AppDescriptor;
                    fromPartial(object: Partial<_32.AppDescriptor>): _32.AppDescriptor;
                    fromAmino(object: _32.AppDescriptorAmino): _32.AppDescriptor;
                    toAmino(message: _32.AppDescriptor): _32.AppDescriptorAmino;
                    fromAminoMsg(object: _32.AppDescriptorAminoMsg): _32.AppDescriptor;
                    toAminoMsg(message: _32.AppDescriptor): _32.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _32.AppDescriptorProtoMsg): _32.AppDescriptor;
                    toProto(message: _32.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _32.AppDescriptor): _32.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _32.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.TxDescriptor;
                    fromPartial(object: Partial<_32.TxDescriptor>): _32.TxDescriptor;
                    fromAmino(object: _32.TxDescriptorAmino): _32.TxDescriptor;
                    toAmino(message: _32.TxDescriptor): _32.TxDescriptorAmino;
                    fromAminoMsg(object: _32.TxDescriptorAminoMsg): _32.TxDescriptor;
                    toAminoMsg(message: _32.TxDescriptor): _32.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _32.TxDescriptorProtoMsg): _32.TxDescriptor;
                    toProto(message: _32.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _32.TxDescriptor): _32.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _32.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.AuthnDescriptor;
                    fromPartial(object: Partial<_32.AuthnDescriptor>): _32.AuthnDescriptor;
                    fromAmino(object: _32.AuthnDescriptorAmino): _32.AuthnDescriptor;
                    toAmino(message: _32.AuthnDescriptor): _32.AuthnDescriptorAmino;
                    fromAminoMsg(object: _32.AuthnDescriptorAminoMsg): _32.AuthnDescriptor;
                    toAminoMsg(message: _32.AuthnDescriptor): _32.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _32.AuthnDescriptorProtoMsg): _32.AuthnDescriptor;
                    toProto(message: _32.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _32.AuthnDescriptor): _32.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _32.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.SigningModeDescriptor;
                    fromPartial(object: Partial<_32.SigningModeDescriptor>): _32.SigningModeDescriptor;
                    fromAmino(object: _32.SigningModeDescriptorAmino): _32.SigningModeDescriptor;
                    toAmino(message: _32.SigningModeDescriptor): _32.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _32.SigningModeDescriptorAminoMsg): _32.SigningModeDescriptor;
                    toAminoMsg(message: _32.SigningModeDescriptor): _32.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _32.SigningModeDescriptorProtoMsg): _32.SigningModeDescriptor;
                    toProto(message: _32.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _32.SigningModeDescriptor): _32.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _32.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.ChainDescriptor;
                    fromPartial(object: Partial<_32.ChainDescriptor>): _32.ChainDescriptor;
                    fromAmino(object: _32.ChainDescriptorAmino): _32.ChainDescriptor;
                    toAmino(message: _32.ChainDescriptor): _32.ChainDescriptorAmino;
                    fromAminoMsg(object: _32.ChainDescriptorAminoMsg): _32.ChainDescriptor;
                    toAminoMsg(message: _32.ChainDescriptor): _32.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _32.ChainDescriptorProtoMsg): _32.ChainDescriptor;
                    toProto(message: _32.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _32.ChainDescriptor): _32.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _32.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.CodecDescriptor;
                    fromPartial(object: Partial<_32.CodecDescriptor>): _32.CodecDescriptor;
                    fromAmino(object: _32.CodecDescriptorAmino): _32.CodecDescriptor;
                    toAmino(message: _32.CodecDescriptor): _32.CodecDescriptorAmino;
                    fromAminoMsg(object: _32.CodecDescriptorAminoMsg): _32.CodecDescriptor;
                    toAminoMsg(message: _32.CodecDescriptor): _32.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _32.CodecDescriptorProtoMsg): _32.CodecDescriptor;
                    toProto(message: _32.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _32.CodecDescriptor): _32.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _32.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.InterfaceDescriptor;
                    fromPartial(object: Partial<_32.InterfaceDescriptor>): _32.InterfaceDescriptor;
                    fromAmino(object: _32.InterfaceDescriptorAmino): _32.InterfaceDescriptor;
                    toAmino(message: _32.InterfaceDescriptor): _32.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _32.InterfaceDescriptorAminoMsg): _32.InterfaceDescriptor;
                    toAminoMsg(message: _32.InterfaceDescriptor): _32.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _32.InterfaceDescriptorProtoMsg): _32.InterfaceDescriptor;
                    toProto(message: _32.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _32.InterfaceDescriptor): _32.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _32.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_32.InterfaceImplementerDescriptor>): _32.InterfaceImplementerDescriptor;
                    fromAmino(object: _32.InterfaceImplementerDescriptorAmino): _32.InterfaceImplementerDescriptor;
                    toAmino(message: _32.InterfaceImplementerDescriptor): _32.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _32.InterfaceImplementerDescriptorAminoMsg): _32.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _32.InterfaceImplementerDescriptor): _32.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _32.InterfaceImplementerDescriptorProtoMsg): _32.InterfaceImplementerDescriptor;
                    toProto(message: _32.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _32.InterfaceImplementerDescriptor): _32.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _32.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_32.InterfaceAcceptingMessageDescriptor>): _32.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _32.InterfaceAcceptingMessageDescriptorAmino): _32.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _32.InterfaceAcceptingMessageDescriptor): _32.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _32.InterfaceAcceptingMessageDescriptorAminoMsg): _32.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _32.InterfaceAcceptingMessageDescriptor): _32.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _32.InterfaceAcceptingMessageDescriptorProtoMsg): _32.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _32.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _32.InterfaceAcceptingMessageDescriptor): _32.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _32.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.ConfigurationDescriptor;
                    fromPartial(object: Partial<_32.ConfigurationDescriptor>): _32.ConfigurationDescriptor;
                    fromAmino(object: _32.ConfigurationDescriptorAmino): _32.ConfigurationDescriptor;
                    toAmino(message: _32.ConfigurationDescriptor): _32.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _32.ConfigurationDescriptorAminoMsg): _32.ConfigurationDescriptor;
                    toAminoMsg(message: _32.ConfigurationDescriptor): _32.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _32.ConfigurationDescriptorProtoMsg): _32.ConfigurationDescriptor;
                    toProto(message: _32.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _32.ConfigurationDescriptor): _32.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _32.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.MsgDescriptor;
                    fromPartial(object: Partial<_32.MsgDescriptor>): _32.MsgDescriptor;
                    fromAmino(object: _32.MsgDescriptorAmino): _32.MsgDescriptor;
                    toAmino(message: _32.MsgDescriptor): _32.MsgDescriptorAmino;
                    fromAminoMsg(object: _32.MsgDescriptorAminoMsg): _32.MsgDescriptor;
                    toAminoMsg(message: _32.MsgDescriptor): _32.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _32.MsgDescriptorProtoMsg): _32.MsgDescriptor;
                    toProto(message: _32.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _32.MsgDescriptor): _32.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _32.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _32.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_32.GetAuthnDescriptorRequest>): _32.GetAuthnDescriptorRequest;
                    fromAmino(_: _32.GetAuthnDescriptorRequestAmino): _32.GetAuthnDescriptorRequest;
                    toAmino(_: _32.GetAuthnDescriptorRequest): _32.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _32.GetAuthnDescriptorRequestAminoMsg): _32.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _32.GetAuthnDescriptorRequest): _32.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _32.GetAuthnDescriptorRequestProtoMsg): _32.GetAuthnDescriptorRequest;
                    toProto(message: _32.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _32.GetAuthnDescriptorRequest): _32.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _32.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_32.GetAuthnDescriptorResponse>): _32.GetAuthnDescriptorResponse;
                    fromAmino(object: _32.GetAuthnDescriptorResponseAmino): _32.GetAuthnDescriptorResponse;
                    toAmino(message: _32.GetAuthnDescriptorResponse): _32.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _32.GetAuthnDescriptorResponseAminoMsg): _32.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _32.GetAuthnDescriptorResponse): _32.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _32.GetAuthnDescriptorResponseProtoMsg): _32.GetAuthnDescriptorResponse;
                    toProto(message: _32.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _32.GetAuthnDescriptorResponse): _32.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _32.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _32.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_32.GetChainDescriptorRequest>): _32.GetChainDescriptorRequest;
                    fromAmino(_: _32.GetChainDescriptorRequestAmino): _32.GetChainDescriptorRequest;
                    toAmino(_: _32.GetChainDescriptorRequest): _32.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _32.GetChainDescriptorRequestAminoMsg): _32.GetChainDescriptorRequest;
                    toAminoMsg(message: _32.GetChainDescriptorRequest): _32.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _32.GetChainDescriptorRequestProtoMsg): _32.GetChainDescriptorRequest;
                    toProto(message: _32.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _32.GetChainDescriptorRequest): _32.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _32.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_32.GetChainDescriptorResponse>): _32.GetChainDescriptorResponse;
                    fromAmino(object: _32.GetChainDescriptorResponseAmino): _32.GetChainDescriptorResponse;
                    toAmino(message: _32.GetChainDescriptorResponse): _32.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _32.GetChainDescriptorResponseAminoMsg): _32.GetChainDescriptorResponse;
                    toAminoMsg(message: _32.GetChainDescriptorResponse): _32.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _32.GetChainDescriptorResponseProtoMsg): _32.GetChainDescriptorResponse;
                    toProto(message: _32.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _32.GetChainDescriptorResponse): _32.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _32.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _32.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_32.GetCodecDescriptorRequest>): _32.GetCodecDescriptorRequest;
                    fromAmino(_: _32.GetCodecDescriptorRequestAmino): _32.GetCodecDescriptorRequest;
                    toAmino(_: _32.GetCodecDescriptorRequest): _32.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _32.GetCodecDescriptorRequestAminoMsg): _32.GetCodecDescriptorRequest;
                    toAminoMsg(message: _32.GetCodecDescriptorRequest): _32.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _32.GetCodecDescriptorRequestProtoMsg): _32.GetCodecDescriptorRequest;
                    toProto(message: _32.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _32.GetCodecDescriptorRequest): _32.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _32.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_32.GetCodecDescriptorResponse>): _32.GetCodecDescriptorResponse;
                    fromAmino(object: _32.GetCodecDescriptorResponseAmino): _32.GetCodecDescriptorResponse;
                    toAmino(message: _32.GetCodecDescriptorResponse): _32.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _32.GetCodecDescriptorResponseAminoMsg): _32.GetCodecDescriptorResponse;
                    toAminoMsg(message: _32.GetCodecDescriptorResponse): _32.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _32.GetCodecDescriptorResponseProtoMsg): _32.GetCodecDescriptorResponse;
                    toProto(message: _32.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _32.GetCodecDescriptorResponse): _32.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _32.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _32.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_32.GetConfigurationDescriptorRequest>): _32.GetConfigurationDescriptorRequest;
                    fromAmino(_: _32.GetConfigurationDescriptorRequestAmino): _32.GetConfigurationDescriptorRequest;
                    toAmino(_: _32.GetConfigurationDescriptorRequest): _32.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _32.GetConfigurationDescriptorRequestAminoMsg): _32.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _32.GetConfigurationDescriptorRequest): _32.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _32.GetConfigurationDescriptorRequestProtoMsg): _32.GetConfigurationDescriptorRequest;
                    toProto(message: _32.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _32.GetConfigurationDescriptorRequest): _32.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _32.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_32.GetConfigurationDescriptorResponse>): _32.GetConfigurationDescriptorResponse;
                    fromAmino(object: _32.GetConfigurationDescriptorResponseAmino): _32.GetConfigurationDescriptorResponse;
                    toAmino(message: _32.GetConfigurationDescriptorResponse): _32.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _32.GetConfigurationDescriptorResponseAminoMsg): _32.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _32.GetConfigurationDescriptorResponse): _32.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _32.GetConfigurationDescriptorResponseProtoMsg): _32.GetConfigurationDescriptorResponse;
                    toProto(message: _32.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _32.GetConfigurationDescriptorResponse): _32.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _32.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _32.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_32.GetQueryServicesDescriptorRequest>): _32.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _32.GetQueryServicesDescriptorRequestAmino): _32.GetQueryServicesDescriptorRequest;
                    toAmino(_: _32.GetQueryServicesDescriptorRequest): _32.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _32.GetQueryServicesDescriptorRequestAminoMsg): _32.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _32.GetQueryServicesDescriptorRequest): _32.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _32.GetQueryServicesDescriptorRequestProtoMsg): _32.GetQueryServicesDescriptorRequest;
                    toProto(message: _32.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _32.GetQueryServicesDescriptorRequest): _32.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _32.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_32.GetQueryServicesDescriptorResponse>): _32.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _32.GetQueryServicesDescriptorResponseAmino): _32.GetQueryServicesDescriptorResponse;
                    toAmino(message: _32.GetQueryServicesDescriptorResponse): _32.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _32.GetQueryServicesDescriptorResponseAminoMsg): _32.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _32.GetQueryServicesDescriptorResponse): _32.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _32.GetQueryServicesDescriptorResponseProtoMsg): _32.GetQueryServicesDescriptorResponse;
                    toProto(message: _32.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _32.GetQueryServicesDescriptorResponse): _32.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _32.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _32.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_32.GetTxDescriptorRequest>): _32.GetTxDescriptorRequest;
                    fromAmino(_: _32.GetTxDescriptorRequestAmino): _32.GetTxDescriptorRequest;
                    toAmino(_: _32.GetTxDescriptorRequest): _32.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _32.GetTxDescriptorRequestAminoMsg): _32.GetTxDescriptorRequest;
                    toAminoMsg(message: _32.GetTxDescriptorRequest): _32.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _32.GetTxDescriptorRequestProtoMsg): _32.GetTxDescriptorRequest;
                    toProto(message: _32.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _32.GetTxDescriptorRequest): _32.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _32.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_32.GetTxDescriptorResponse>): _32.GetTxDescriptorResponse;
                    fromAmino(object: _32.GetTxDescriptorResponseAmino): _32.GetTxDescriptorResponse;
                    toAmino(message: _32.GetTxDescriptorResponse): _32.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _32.GetTxDescriptorResponseAminoMsg): _32.GetTxDescriptorResponse;
                    toAminoMsg(message: _32.GetTxDescriptorResponse): _32.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _32.GetTxDescriptorResponseProtoMsg): _32.GetTxDescriptorResponse;
                    toProto(message: _32.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _32.GetTxDescriptorResponse): _32.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _32.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.QueryServicesDescriptor;
                    fromPartial(object: Partial<_32.QueryServicesDescriptor>): _32.QueryServicesDescriptor;
                    fromAmino(object: _32.QueryServicesDescriptorAmino): _32.QueryServicesDescriptor;
                    toAmino(message: _32.QueryServicesDescriptor): _32.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _32.QueryServicesDescriptorAminoMsg): _32.QueryServicesDescriptor;
                    toAminoMsg(message: _32.QueryServicesDescriptor): _32.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _32.QueryServicesDescriptorProtoMsg): _32.QueryServicesDescriptor;
                    toProto(message: _32.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _32.QueryServicesDescriptor): _32.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _32.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.QueryServiceDescriptor;
                    fromPartial(object: Partial<_32.QueryServiceDescriptor>): _32.QueryServiceDescriptor;
                    fromAmino(object: _32.QueryServiceDescriptorAmino): _32.QueryServiceDescriptor;
                    toAmino(message: _32.QueryServiceDescriptor): _32.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _32.QueryServiceDescriptorAminoMsg): _32.QueryServiceDescriptor;
                    toAminoMsg(message: _32.QueryServiceDescriptor): _32.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _32.QueryServiceDescriptorProtoMsg): _32.QueryServiceDescriptor;
                    toProto(message: _32.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _32.QueryServiceDescriptor): _32.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _32.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.QueryMethodDescriptor;
                    fromPartial(object: Partial<_32.QueryMethodDescriptor>): _32.QueryMethodDescriptor;
                    fromAmino(object: _32.QueryMethodDescriptorAmino): _32.QueryMethodDescriptor;
                    toAmino(message: _32.QueryMethodDescriptor): _32.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _32.QueryMethodDescriptorAminoMsg): _32.QueryMethodDescriptor;
                    toAminoMsg(message: _32.QueryMethodDescriptor): _32.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _32.QueryMethodDescriptorProtoMsg): _32.QueryMethodDescriptor;
                    toProto(message: _32.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _32.QueryMethodDescriptor): _32.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _33.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.Snapshot;
                    fromPartial(object: Partial<_33.Snapshot>): _33.Snapshot;
                    fromAmino(object: _33.SnapshotAmino): _33.Snapshot;
                    toAmino(message: _33.Snapshot): _33.SnapshotAmino;
                    fromAminoMsg(object: _33.SnapshotAminoMsg): _33.Snapshot;
                    toAminoMsg(message: _33.Snapshot): _33.SnapshotAminoMsg;
                    fromProtoMsg(message: _33.SnapshotProtoMsg): _33.Snapshot;
                    toProto(message: _33.Snapshot): Uint8Array;
                    toProtoMsg(message: _33.Snapshot): _33.SnapshotProtoMsg;
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
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _33.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.SnapshotItem;
                    fromPartial(object: Partial<_33.SnapshotItem>): _33.SnapshotItem;
                    fromAmino(object: _33.SnapshotItemAmino): _33.SnapshotItem;
                    toAmino(message: _33.SnapshotItem): _33.SnapshotItemAmino;
                    fromAminoMsg(object: _33.SnapshotItemAminoMsg): _33.SnapshotItem;
                    toAminoMsg(message: _33.SnapshotItem): _33.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _33.SnapshotItemProtoMsg): _33.SnapshotItem;
                    toProto(message: _33.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _33.SnapshotItem): _33.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _33.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.SnapshotStoreItem;
                    fromPartial(object: Partial<_33.SnapshotStoreItem>): _33.SnapshotStoreItem;
                    fromAmino(object: _33.SnapshotStoreItemAmino): _33.SnapshotStoreItem;
                    toAmino(message: _33.SnapshotStoreItem): _33.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _33.SnapshotStoreItemAminoMsg): _33.SnapshotStoreItem;
                    toAminoMsg(message: _33.SnapshotStoreItem): _33.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _33.SnapshotStoreItemProtoMsg): _33.SnapshotStoreItem;
                    toProto(message: _33.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _33.SnapshotStoreItem): _33.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _33.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.SnapshotIAVLItem;
                    fromPartial(object: Partial<_33.SnapshotIAVLItem>): _33.SnapshotIAVLItem;
                    fromAmino(object: _33.SnapshotIAVLItemAmino): _33.SnapshotIAVLItem;
                    toAmino(message: _33.SnapshotIAVLItem): _33.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _33.SnapshotIAVLItemAminoMsg): _33.SnapshotIAVLItem;
                    toAminoMsg(message: _33.SnapshotIAVLItem): _33.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _33.SnapshotIAVLItemProtoMsg): _33.SnapshotIAVLItem;
                    toProto(message: _33.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _33.SnapshotIAVLItem): _33.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _33.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_33.SnapshotExtensionMeta>): _33.SnapshotExtensionMeta;
                    fromAmino(object: _33.SnapshotExtensionMetaAmino): _33.SnapshotExtensionMeta;
                    toAmino(message: _33.SnapshotExtensionMeta): _33.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _33.SnapshotExtensionMetaAminoMsg): _33.SnapshotExtensionMeta;
                    toAminoMsg(message: _33.SnapshotExtensionMeta): _33.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _33.SnapshotExtensionMetaProtoMsg): _33.SnapshotExtensionMeta;
                    toProto(message: _33.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _33.SnapshotExtensionMeta): _33.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _33.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_33.SnapshotExtensionPayload>): _33.SnapshotExtensionPayload;
                    fromAmino(object: _33.SnapshotExtensionPayloadAmino): _33.SnapshotExtensionPayload;
                    toAmino(message: _33.SnapshotExtensionPayload): _33.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _33.SnapshotExtensionPayloadAminoMsg): _33.SnapshotExtensionPayload;
                    toAminoMsg(message: _33.SnapshotExtensionPayload): _33.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _33.SnapshotExtensionPayloadProtoMsg): _33.SnapshotExtensionPayload;
                    toProto(message: _33.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _33.SnapshotExtensionPayload): _33.SnapshotExtensionPayloadProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _35.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.StoreKVPair;
                    fromPartial(object: Partial<_35.StoreKVPair>): _35.StoreKVPair;
                    fromAmino(object: _35.StoreKVPairAmino): _35.StoreKVPair;
                    toAmino(message: _35.StoreKVPair): _35.StoreKVPairAmino;
                    fromAminoMsg(object: _35.StoreKVPairAminoMsg): _35.StoreKVPair;
                    toAminoMsg(message: _35.StoreKVPair): _35.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _35.StoreKVPairProtoMsg): _35.StoreKVPair;
                    toProto(message: _35.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _35.StoreKVPair): _35.StoreKVPairProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _34.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.CommitInfo;
                    fromPartial(object: Partial<_34.CommitInfo>): _34.CommitInfo;
                    fromAmino(object: _34.CommitInfoAmino): _34.CommitInfo;
                    toAmino(message: _34.CommitInfo): _34.CommitInfoAmino;
                    fromAminoMsg(object: _34.CommitInfoAminoMsg): _34.CommitInfo;
                    toAminoMsg(message: _34.CommitInfo): _34.CommitInfoAminoMsg;
                    fromProtoMsg(message: _34.CommitInfoProtoMsg): _34.CommitInfo;
                    toProto(message: _34.CommitInfo): Uint8Array;
                    toProtoMsg(message: _34.CommitInfo): _34.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _34.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.StoreInfo;
                    fromPartial(object: Partial<_34.StoreInfo>): _34.StoreInfo;
                    fromAmino(object: _34.StoreInfoAmino): _34.StoreInfo;
                    toAmino(message: _34.StoreInfo): _34.StoreInfoAmino;
                    fromAminoMsg(object: _34.StoreInfoAminoMsg): _34.StoreInfo;
                    toAminoMsg(message: _34.StoreInfo): _34.StoreInfoAminoMsg;
                    fromProtoMsg(message: _34.StoreInfoProtoMsg): _34.StoreInfo;
                    toProto(message: _34.StoreInfo): Uint8Array;
                    toProtoMsg(message: _34.StoreInfo): _34.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _34.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.CommitID;
                    fromPartial(object: Partial<_34.CommitID>): _34.CommitID;
                    fromAmino(object: _34.CommitIDAmino): _34.CommitID;
                    toAmino(message: _34.CommitID): _34.CommitIDAmino;
                    fromAminoMsg(object: _34.CommitIDAminoMsg): _34.CommitID;
                    toAminoMsg(message: _34.CommitID): _34.CommitIDAminoMsg;
                    fromProtoMsg(message: _34.CommitIDProtoMsg): _34.CommitID;
                    toProto(message: _34.CommitID): Uint8Array;
                    toProtoMsg(message: _34.CommitID): _34.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _170.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _36.GetNodeInfoRequest): Promise<_36.GetNodeInfoResponse>;
                    getSyncing(request?: _36.GetSyncingRequest): Promise<_36.GetSyncingResponse>;
                    getLatestBlock(request?: _36.GetLatestBlockRequest): Promise<_36.GetLatestBlockResponse>;
                    getBlockByHeight(request: _36.GetBlockByHeightRequest): Promise<_36.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _36.GetLatestValidatorSetRequest): Promise<_36.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _36.GetValidatorSetByHeightRequest): Promise<_36.GetValidatorSetByHeightResponse>;
                };
                LCDQueryClient: typeof _155.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _36.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_36.GetValidatorSetByHeightRequest>): _36.GetValidatorSetByHeightRequest;
                    fromAmino(object: _36.GetValidatorSetByHeightRequestAmino): _36.GetValidatorSetByHeightRequest;
                    toAmino(message: _36.GetValidatorSetByHeightRequest): _36.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _36.GetValidatorSetByHeightRequestAminoMsg): _36.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _36.GetValidatorSetByHeightRequest): _36.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _36.GetValidatorSetByHeightRequestProtoMsg): _36.GetValidatorSetByHeightRequest;
                    toProto(message: _36.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _36.GetValidatorSetByHeightRequest): _36.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _36.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_36.GetValidatorSetByHeightResponse>): _36.GetValidatorSetByHeightResponse;
                    fromAmino(object: _36.GetValidatorSetByHeightResponseAmino): _36.GetValidatorSetByHeightResponse;
                    toAmino(message: _36.GetValidatorSetByHeightResponse): _36.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _36.GetValidatorSetByHeightResponseAminoMsg): _36.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _36.GetValidatorSetByHeightResponse): _36.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _36.GetValidatorSetByHeightResponseProtoMsg): _36.GetValidatorSetByHeightResponse;
                    toProto(message: _36.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _36.GetValidatorSetByHeightResponse): _36.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _36.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_36.GetLatestValidatorSetRequest>): _36.GetLatestValidatorSetRequest;
                    fromAmino(object: _36.GetLatestValidatorSetRequestAmino): _36.GetLatestValidatorSetRequest;
                    toAmino(message: _36.GetLatestValidatorSetRequest): _36.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _36.GetLatestValidatorSetRequestAminoMsg): _36.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _36.GetLatestValidatorSetRequest): _36.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _36.GetLatestValidatorSetRequestProtoMsg): _36.GetLatestValidatorSetRequest;
                    toProto(message: _36.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _36.GetLatestValidatorSetRequest): _36.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _36.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_36.GetLatestValidatorSetResponse>): _36.GetLatestValidatorSetResponse;
                    fromAmino(object: _36.GetLatestValidatorSetResponseAmino): _36.GetLatestValidatorSetResponse;
                    toAmino(message: _36.GetLatestValidatorSetResponse): _36.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _36.GetLatestValidatorSetResponseAminoMsg): _36.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _36.GetLatestValidatorSetResponse): _36.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _36.GetLatestValidatorSetResponseProtoMsg): _36.GetLatestValidatorSetResponse;
                    toProto(message: _36.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _36.GetLatestValidatorSetResponse): _36.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _36.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.Validator;
                    fromPartial(object: Partial<_36.Validator>): _36.Validator;
                    fromAmino(object: _36.ValidatorAmino): _36.Validator;
                    toAmino(message: _36.Validator): _36.ValidatorAmino;
                    fromAminoMsg(object: _36.ValidatorAminoMsg): _36.Validator;
                    toAminoMsg(message: _36.Validator): _36.ValidatorAminoMsg;
                    fromProtoMsg(message: _36.ValidatorProtoMsg): _36.Validator;
                    toProto(message: _36.Validator): Uint8Array;
                    toProtoMsg(message: _36.Validator): _36.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _36.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_36.GetBlockByHeightRequest>): _36.GetBlockByHeightRequest;
                    fromAmino(object: _36.GetBlockByHeightRequestAmino): _36.GetBlockByHeightRequest;
                    toAmino(message: _36.GetBlockByHeightRequest): _36.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _36.GetBlockByHeightRequestAminoMsg): _36.GetBlockByHeightRequest;
                    toAminoMsg(message: _36.GetBlockByHeightRequest): _36.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _36.GetBlockByHeightRequestProtoMsg): _36.GetBlockByHeightRequest;
                    toProto(message: _36.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _36.GetBlockByHeightRequest): _36.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _36.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_36.GetBlockByHeightResponse>): _36.GetBlockByHeightResponse;
                    fromAmino(object: _36.GetBlockByHeightResponseAmino): _36.GetBlockByHeightResponse;
                    toAmino(message: _36.GetBlockByHeightResponse): _36.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _36.GetBlockByHeightResponseAminoMsg): _36.GetBlockByHeightResponse;
                    toAminoMsg(message: _36.GetBlockByHeightResponse): _36.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _36.GetBlockByHeightResponseProtoMsg): _36.GetBlockByHeightResponse;
                    toProto(message: _36.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _36.GetBlockByHeightResponse): _36.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _36.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _36.GetLatestBlockRequest;
                    fromPartial(_: Partial<_36.GetLatestBlockRequest>): _36.GetLatestBlockRequest;
                    fromAmino(_: _36.GetLatestBlockRequestAmino): _36.GetLatestBlockRequest;
                    toAmino(_: _36.GetLatestBlockRequest): _36.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _36.GetLatestBlockRequestAminoMsg): _36.GetLatestBlockRequest;
                    toAminoMsg(message: _36.GetLatestBlockRequest): _36.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _36.GetLatestBlockRequestProtoMsg): _36.GetLatestBlockRequest;
                    toProto(message: _36.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _36.GetLatestBlockRequest): _36.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _36.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.GetLatestBlockResponse;
                    fromPartial(object: Partial<_36.GetLatestBlockResponse>): _36.GetLatestBlockResponse;
                    fromAmino(object: _36.GetLatestBlockResponseAmino): _36.GetLatestBlockResponse;
                    toAmino(message: _36.GetLatestBlockResponse): _36.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _36.GetLatestBlockResponseAminoMsg): _36.GetLatestBlockResponse;
                    toAminoMsg(message: _36.GetLatestBlockResponse): _36.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _36.GetLatestBlockResponseProtoMsg): _36.GetLatestBlockResponse;
                    toProto(message: _36.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _36.GetLatestBlockResponse): _36.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _36.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _36.GetSyncingRequest;
                    fromPartial(_: Partial<_36.GetSyncingRequest>): _36.GetSyncingRequest;
                    fromAmino(_: _36.GetSyncingRequestAmino): _36.GetSyncingRequest;
                    toAmino(_: _36.GetSyncingRequest): _36.GetSyncingRequestAmino;
                    fromAminoMsg(object: _36.GetSyncingRequestAminoMsg): _36.GetSyncingRequest;
                    toAminoMsg(message: _36.GetSyncingRequest): _36.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _36.GetSyncingRequestProtoMsg): _36.GetSyncingRequest;
                    toProto(message: _36.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _36.GetSyncingRequest): _36.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _36.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.GetSyncingResponse;
                    fromPartial(object: Partial<_36.GetSyncingResponse>): _36.GetSyncingResponse;
                    fromAmino(object: _36.GetSyncingResponseAmino): _36.GetSyncingResponse;
                    toAmino(message: _36.GetSyncingResponse): _36.GetSyncingResponseAmino;
                    fromAminoMsg(object: _36.GetSyncingResponseAminoMsg): _36.GetSyncingResponse;
                    toAminoMsg(message: _36.GetSyncingResponse): _36.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _36.GetSyncingResponseProtoMsg): _36.GetSyncingResponse;
                    toProto(message: _36.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _36.GetSyncingResponse): _36.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _36.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _36.GetNodeInfoRequest;
                    fromPartial(_: Partial<_36.GetNodeInfoRequest>): _36.GetNodeInfoRequest;
                    fromAmino(_: _36.GetNodeInfoRequestAmino): _36.GetNodeInfoRequest;
                    toAmino(_: _36.GetNodeInfoRequest): _36.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _36.GetNodeInfoRequestAminoMsg): _36.GetNodeInfoRequest;
                    toAminoMsg(message: _36.GetNodeInfoRequest): _36.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _36.GetNodeInfoRequestProtoMsg): _36.GetNodeInfoRequest;
                    toProto(message: _36.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _36.GetNodeInfoRequest): _36.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _36.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.GetNodeInfoResponse;
                    fromPartial(object: Partial<_36.GetNodeInfoResponse>): _36.GetNodeInfoResponse;
                    fromAmino(object: _36.GetNodeInfoResponseAmino): _36.GetNodeInfoResponse;
                    toAmino(message: _36.GetNodeInfoResponse): _36.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _36.GetNodeInfoResponseAminoMsg): _36.GetNodeInfoResponse;
                    toAminoMsg(message: _36.GetNodeInfoResponse): _36.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _36.GetNodeInfoResponseProtoMsg): _36.GetNodeInfoResponse;
                    toProto(message: _36.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _36.GetNodeInfoResponse): _36.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _36.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.VersionInfo;
                    fromPartial(object: Partial<_36.VersionInfo>): _36.VersionInfo;
                    fromAmino(object: _36.VersionInfoAmino): _36.VersionInfo;
                    toAmino(message: _36.VersionInfo): _36.VersionInfoAmino;
                    fromAminoMsg(object: _36.VersionInfoAminoMsg): _36.VersionInfo;
                    toAminoMsg(message: _36.VersionInfo): _36.VersionInfoAminoMsg;
                    fromProtoMsg(message: _36.VersionInfoProtoMsg): _36.VersionInfo;
                    toProto(message: _36.VersionInfo): Uint8Array;
                    toProtoMsg(message: _36.VersionInfo): _36.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _36.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.Module;
                    fromPartial(object: Partial<_36.Module>): _36.Module;
                    fromAmino(object: _36.ModuleAmino): _36.Module;
                    toAmino(message: _36.Module): _36.ModuleAmino;
                    fromAminoMsg(object: _36.ModuleAminoMsg): _36.Module;
                    toAminoMsg(message: _36.Module): _36.ModuleAminoMsg;
                    fromProtoMsg(message: _36.ModuleProtoMsg): _36.Module;
                    toProto(message: _36.Module): Uint8Array;
                    toProtoMsg(message: _36.Module): _36.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _37.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.Coin;
                fromPartial(object: Partial<_37.Coin>): _37.Coin;
                fromAmino(object: _37.CoinAmino): _37.Coin;
                toAmino(message: _37.Coin): _37.CoinAmino;
                fromAminoMsg(object: _37.CoinAminoMsg): _37.Coin;
                toAminoMsg(message: _37.Coin): _37.CoinAminoMsg;
                fromProtoMsg(message: _37.CoinProtoMsg): _37.Coin;
                toProto(message: _37.Coin): Uint8Array;
                toProtoMsg(message: _37.Coin): _37.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _37.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.DecCoin;
                fromPartial(object: Partial<_37.DecCoin>): _37.DecCoin;
                fromAmino(object: _37.DecCoinAmino): _37.DecCoin;
                toAmino(message: _37.DecCoin): _37.DecCoinAmino;
                fromAminoMsg(object: _37.DecCoinAminoMsg): _37.DecCoin;
                toAminoMsg(message: _37.DecCoin): _37.DecCoinAminoMsg;
                fromProtoMsg(message: _37.DecCoinProtoMsg): _37.DecCoin;
                toProto(message: _37.DecCoin): Uint8Array;
                toProtoMsg(message: _37.DecCoin): _37.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _37.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.IntProto;
                fromPartial(object: Partial<_37.IntProto>): _37.IntProto;
                fromAmino(object: _37.IntProtoAmino): _37.IntProto;
                toAmino(message: _37.IntProto): _37.IntProtoAmino;
                fromAminoMsg(object: _37.IntProtoAminoMsg): _37.IntProto;
                toAminoMsg(message: _37.IntProto): _37.IntProtoAminoMsg;
                fromProtoMsg(message: _37.IntProtoProtoMsg): _37.IntProto;
                toProto(message: _37.IntProto): Uint8Array;
                toProtoMsg(message: _37.IntProto): _37.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _37.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.DecProto;
                fromPartial(object: Partial<_37.DecProto>): _37.DecProto;
                fromAmino(object: _37.DecProtoAmino): _37.DecProto;
                toAmino(message: _37.DecProto): _37.DecProtoAmino;
                fromAminoMsg(object: _37.DecProtoAminoMsg): _37.DecProto;
                toAminoMsg(message: _37.DecProto): _37.DecProtoAminoMsg;
                fromProtoMsg(message: _37.DecProtoProtoMsg): _37.DecProto;
                toProto(message: _37.DecProto): Uint8Array;
                toProtoMsg(message: _37.DecProto): _37.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _39.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.GenesisOwners;
                fromPartial(object: Partial<_39.GenesisOwners>): _39.GenesisOwners;
                fromAmino(object: _39.GenesisOwnersAmino): _39.GenesisOwners;
                toAmino(message: _39.GenesisOwners): _39.GenesisOwnersAmino;
                fromAminoMsg(object: _39.GenesisOwnersAminoMsg): _39.GenesisOwners;
                toAminoMsg(message: _39.GenesisOwners): _39.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _39.GenesisOwnersProtoMsg): _39.GenesisOwners;
                toProto(message: _39.GenesisOwners): Uint8Array;
                toProtoMsg(message: _39.GenesisOwners): _39.GenesisOwnersProtoMsg;
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
            Capability: {
                typeUrl: string;
                encode(message: _38.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.Capability;
                fromPartial(object: Partial<_38.Capability>): _38.Capability;
                fromAmino(object: _38.CapabilityAmino): _38.Capability;
                toAmino(message: _38.Capability): _38.CapabilityAmino;
                fromAminoMsg(object: _38.CapabilityAminoMsg): _38.Capability;
                toAminoMsg(message: _38.Capability): _38.CapabilityAminoMsg;
                fromProtoMsg(message: _38.CapabilityProtoMsg): _38.Capability;
                toProto(message: _38.Capability): Uint8Array;
                toProtoMsg(message: _38.Capability): _38.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _38.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.Owner;
                fromPartial(object: Partial<_38.Owner>): _38.Owner;
                fromAmino(object: _38.OwnerAmino): _38.Owner;
                toAmino(message: _38.Owner): _38.OwnerAmino;
                fromAminoMsg(object: _38.OwnerAminoMsg): _38.Owner;
                toAminoMsg(message: _38.Owner): _38.OwnerAminoMsg;
                fromProtoMsg(message: _38.OwnerProtoMsg): _38.Owner;
                toProto(message: _38.Owner): Uint8Array;
                toProtoMsg(message: _38.Owner): _38.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _38.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.CapabilityOwners;
                fromPartial(object: Partial<_38.CapabilityOwners>): _38.CapabilityOwners;
                fromAmino(object: _38.CapabilityOwnersAmino): _38.CapabilityOwners;
                toAmino(message: _38.CapabilityOwners): _38.CapabilityOwnersAmino;
                fromAminoMsg(object: _38.CapabilityOwnersAminoMsg): _38.CapabilityOwners;
                toAminoMsg(message: _38.CapabilityOwners): _38.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _38.CapabilityOwnersProtoMsg): _38.CapabilityOwners;
                toProto(message: _38.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _38.CapabilityOwners): _38.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _183.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _41.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _41.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _41.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _41.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _41.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _41.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _41.MsgVerifyInvariant) => _41.MsgVerifyInvariantAmino;
                    fromAmino: (object: _41.MsgVerifyInvariantAmino) => _41.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _41.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.MsgVerifyInvariant;
                fromPartial(object: Partial<_41.MsgVerifyInvariant>): _41.MsgVerifyInvariant;
                fromAmino(object: _41.MsgVerifyInvariantAmino): _41.MsgVerifyInvariant;
                toAmino(message: _41.MsgVerifyInvariant): _41.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _41.MsgVerifyInvariantAminoMsg): _41.MsgVerifyInvariant;
                toAminoMsg(message: _41.MsgVerifyInvariant): _41.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _41.MsgVerifyInvariantProtoMsg): _41.MsgVerifyInvariant;
                toProto(message: _41.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _41.MsgVerifyInvariant): _41.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _41.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _41.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_41.MsgVerifyInvariantResponse>): _41.MsgVerifyInvariantResponse;
                fromAmino(_: _41.MsgVerifyInvariantResponseAmino): _41.MsgVerifyInvariantResponse;
                toAmino(_: _41.MsgVerifyInvariantResponse): _41.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _41.MsgVerifyInvariantResponseAminoMsg): _41.MsgVerifyInvariantResponse;
                toAminoMsg(message: _41.MsgVerifyInvariantResponse): _41.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _41.MsgVerifyInvariantResponseProtoMsg): _41.MsgVerifyInvariantResponse;
                toProto(message: _41.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _41.MsgVerifyInvariantResponse): _41.MsgVerifyInvariantResponseProtoMsg;
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
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _42.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.PubKey;
                fromPartial(object: Partial<_42.PubKey>): _42.PubKey;
                fromAmino(object: _42.PubKeyAmino): _42.PubKey;
                toAmino(message: _42.PubKey): _42.PubKeyAmino;
                fromAminoMsg(object: _42.PubKeyAminoMsg): _42.PubKey;
                toAminoMsg(message: _42.PubKey): _42.PubKeyAminoMsg;
                fromProtoMsg(message: _42.PubKeyProtoMsg): _42.PubKey;
                toProto(message: _42.PubKey): Uint8Array;
                toProtoMsg(message: _42.PubKey): _42.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _42.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.PrivKey;
                fromPartial(object: Partial<_42.PrivKey>): _42.PrivKey;
                fromAmino(object: _42.PrivKeyAmino): _42.PrivKey;
                toAmino(message: _42.PrivKey): _42.PrivKeyAmino;
                fromAminoMsg(object: _42.PrivKeyAminoMsg): _42.PrivKey;
                toAminoMsg(message: _42.PrivKey): _42.PrivKeyAminoMsg;
                fromProtoMsg(message: _42.PrivKeyProtoMsg): _42.PrivKey;
                toProto(message: _42.PrivKey): Uint8Array;
                toProtoMsg(message: _42.PrivKey): _42.PrivKeyProtoMsg;
            };
        };
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _43.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.LegacyAminoPubKey;
                fromPartial(object: Partial<_43.LegacyAminoPubKey>): _43.LegacyAminoPubKey;
                fromAmino(object: _43.LegacyAminoPubKeyAmino): _43.LegacyAminoPubKey;
                toAmino(message: _43.LegacyAminoPubKey): _43.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _43.LegacyAminoPubKeyAminoMsg): _43.LegacyAminoPubKey;
                toAminoMsg(message: _43.LegacyAminoPubKey): _43.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _43.LegacyAminoPubKeyProtoMsg): _43.LegacyAminoPubKey;
                toProto(message: _43.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _43.LegacyAminoPubKey): _43.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _44.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.PubKey;
                fromPartial(object: Partial<_44.PubKey>): _44.PubKey;
                fromAmino(object: _44.PubKeyAmino): _44.PubKey;
                toAmino(message: _44.PubKey): _44.PubKeyAmino;
                fromAminoMsg(object: _44.PubKeyAminoMsg): _44.PubKey;
                toAminoMsg(message: _44.PubKey): _44.PubKeyAminoMsg;
                fromProtoMsg(message: _44.PubKeyProtoMsg): _44.PubKey;
                toProto(message: _44.PubKey): Uint8Array;
                toProtoMsg(message: _44.PubKey): _44.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _44.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.PrivKey;
                fromPartial(object: Partial<_44.PrivKey>): _44.PrivKey;
                fromAmino(object: _44.PrivKeyAmino): _44.PrivKey;
                toAmino(message: _44.PrivKey): _44.PrivKeyAmino;
                fromAminoMsg(object: _44.PrivKeyAminoMsg): _44.PrivKey;
                toAminoMsg(message: _44.PrivKey): _44.PrivKeyAminoMsg;
                fromProtoMsg(message: _44.PrivKeyProtoMsg): _44.PrivKey;
                toProto(message: _44.PrivKey): Uint8Array;
                toProtoMsg(message: _44.PrivKey): _44.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
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
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _184.MsgClientImpl;
            QueryClientImpl: typeof _171.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _48.QueryParamsRequest): Promise<_48.QueryParamsResponse>;
                validatorOutstandingRewards(request: _48.QueryValidatorOutstandingRewardsRequest): Promise<_48.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _48.QueryValidatorCommissionRequest): Promise<_48.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _48.QueryValidatorSlashesRequest): Promise<_48.QueryValidatorSlashesResponse>;
                delegationRewards(request: _48.QueryDelegationRewardsRequest): Promise<_48.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _48.QueryDelegationTotalRewardsRequest): Promise<_48.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _48.QueryDelegatorValidatorsRequest): Promise<_48.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _48.QueryDelegatorWithdrawAddressRequest): Promise<_48.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _48.QueryCommunityPoolRequest): Promise<_48.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _156.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _49.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _49.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _49.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _49.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _49.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _49.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _49.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _49.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _49.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _49.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _49.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _49.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _49.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _49.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _49.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _49.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _49.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _49.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _49.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _49.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _49.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _49.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _49.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _49.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _49.MsgSetWithdrawAddress) => _49.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _49.MsgSetWithdrawAddressAmino) => _49.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _49.MsgWithdrawDelegatorReward) => _49.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _49.MsgWithdrawDelegatorRewardAmino) => _49.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _49.MsgWithdrawValidatorCommission) => _49.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _49.MsgWithdrawValidatorCommissionAmino) => _49.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _49.MsgFundCommunityPool) => _49.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _49.MsgFundCommunityPoolAmino) => _49.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _49.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_49.MsgSetWithdrawAddress>): _49.MsgSetWithdrawAddress;
                fromAmino(object: _49.MsgSetWithdrawAddressAmino): _49.MsgSetWithdrawAddress;
                toAmino(message: _49.MsgSetWithdrawAddress): _49.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _49.MsgSetWithdrawAddressAminoMsg): _49.MsgSetWithdrawAddress;
                toAminoMsg(message: _49.MsgSetWithdrawAddress): _49.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _49.MsgSetWithdrawAddressProtoMsg): _49.MsgSetWithdrawAddress;
                toProto(message: _49.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _49.MsgSetWithdrawAddress): _49.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _49.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _49.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_49.MsgSetWithdrawAddressResponse>): _49.MsgSetWithdrawAddressResponse;
                fromAmino(_: _49.MsgSetWithdrawAddressResponseAmino): _49.MsgSetWithdrawAddressResponse;
                toAmino(_: _49.MsgSetWithdrawAddressResponse): _49.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _49.MsgSetWithdrawAddressResponseAminoMsg): _49.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _49.MsgSetWithdrawAddressResponse): _49.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _49.MsgSetWithdrawAddressResponseProtoMsg): _49.MsgSetWithdrawAddressResponse;
                toProto(message: _49.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _49.MsgSetWithdrawAddressResponse): _49.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _49.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_49.MsgWithdrawDelegatorReward>): _49.MsgWithdrawDelegatorReward;
                fromAmino(object: _49.MsgWithdrawDelegatorRewardAmino): _49.MsgWithdrawDelegatorReward;
                toAmino(message: _49.MsgWithdrawDelegatorReward): _49.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _49.MsgWithdrawDelegatorRewardAminoMsg): _49.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _49.MsgWithdrawDelegatorReward): _49.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _49.MsgWithdrawDelegatorRewardProtoMsg): _49.MsgWithdrawDelegatorReward;
                toProto(message: _49.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _49.MsgWithdrawDelegatorReward): _49.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(_: _49.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _49.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_49.MsgWithdrawDelegatorRewardResponse>): _49.MsgWithdrawDelegatorRewardResponse;
                fromAmino(_: _49.MsgWithdrawDelegatorRewardResponseAmino): _49.MsgWithdrawDelegatorRewardResponse;
                toAmino(_: _49.MsgWithdrawDelegatorRewardResponse): _49.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _49.MsgWithdrawDelegatorRewardResponseAminoMsg): _49.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _49.MsgWithdrawDelegatorRewardResponse): _49.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _49.MsgWithdrawDelegatorRewardResponseProtoMsg): _49.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _49.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _49.MsgWithdrawDelegatorRewardResponse): _49.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _49.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_49.MsgWithdrawValidatorCommission>): _49.MsgWithdrawValidatorCommission;
                fromAmino(object: _49.MsgWithdrawValidatorCommissionAmino): _49.MsgWithdrawValidatorCommission;
                toAmino(message: _49.MsgWithdrawValidatorCommission): _49.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _49.MsgWithdrawValidatorCommissionAminoMsg): _49.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _49.MsgWithdrawValidatorCommission): _49.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _49.MsgWithdrawValidatorCommissionProtoMsg): _49.MsgWithdrawValidatorCommission;
                toProto(message: _49.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _49.MsgWithdrawValidatorCommission): _49.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(_: _49.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _49.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_49.MsgWithdrawValidatorCommissionResponse>): _49.MsgWithdrawValidatorCommissionResponse;
                fromAmino(_: _49.MsgWithdrawValidatorCommissionResponseAmino): _49.MsgWithdrawValidatorCommissionResponse;
                toAmino(_: _49.MsgWithdrawValidatorCommissionResponse): _49.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _49.MsgWithdrawValidatorCommissionResponseAminoMsg): _49.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _49.MsgWithdrawValidatorCommissionResponse): _49.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _49.MsgWithdrawValidatorCommissionResponseProtoMsg): _49.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _49.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _49.MsgWithdrawValidatorCommissionResponse): _49.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _49.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.MsgFundCommunityPool;
                fromPartial(object: Partial<_49.MsgFundCommunityPool>): _49.MsgFundCommunityPool;
                fromAmino(object: _49.MsgFundCommunityPoolAmino): _49.MsgFundCommunityPool;
                toAmino(message: _49.MsgFundCommunityPool): _49.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _49.MsgFundCommunityPoolAminoMsg): _49.MsgFundCommunityPool;
                toAminoMsg(message: _49.MsgFundCommunityPool): _49.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _49.MsgFundCommunityPoolProtoMsg): _49.MsgFundCommunityPool;
                toProto(message: _49.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _49.MsgFundCommunityPool): _49.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _49.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _49.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_49.MsgFundCommunityPoolResponse>): _49.MsgFundCommunityPoolResponse;
                fromAmino(_: _49.MsgFundCommunityPoolResponseAmino): _49.MsgFundCommunityPoolResponse;
                toAmino(_: _49.MsgFundCommunityPoolResponse): _49.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _49.MsgFundCommunityPoolResponseAminoMsg): _49.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _49.MsgFundCommunityPoolResponse): _49.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _49.MsgFundCommunityPoolResponseProtoMsg): _49.MsgFundCommunityPoolResponse;
                toProto(message: _49.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _49.MsgFundCommunityPoolResponse): _49.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _48.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _48.QueryParamsRequest;
                fromPartial(_: Partial<_48.QueryParamsRequest>): _48.QueryParamsRequest;
                fromAmino(_: _48.QueryParamsRequestAmino): _48.QueryParamsRequest;
                toAmino(_: _48.QueryParamsRequest): _48.QueryParamsRequestAmino;
                fromAminoMsg(object: _48.QueryParamsRequestAminoMsg): _48.QueryParamsRequest;
                toAminoMsg(message: _48.QueryParamsRequest): _48.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _48.QueryParamsRequestProtoMsg): _48.QueryParamsRequest;
                toProto(message: _48.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _48.QueryParamsRequest): _48.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _48.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryParamsResponse;
                fromPartial(object: Partial<_48.QueryParamsResponse>): _48.QueryParamsResponse;
                fromAmino(object: _48.QueryParamsResponseAmino): _48.QueryParamsResponse;
                toAmino(message: _48.QueryParamsResponse): _48.QueryParamsResponseAmino;
                fromAminoMsg(object: _48.QueryParamsResponseAminoMsg): _48.QueryParamsResponse;
                toAminoMsg(message: _48.QueryParamsResponse): _48.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _48.QueryParamsResponseProtoMsg): _48.QueryParamsResponse;
                toProto(message: _48.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _48.QueryParamsResponse): _48.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _48.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_48.QueryValidatorOutstandingRewardsRequest>): _48.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _48.QueryValidatorOutstandingRewardsRequestAmino): _48.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _48.QueryValidatorOutstandingRewardsRequest): _48.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _48.QueryValidatorOutstandingRewardsRequestAminoMsg): _48.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _48.QueryValidatorOutstandingRewardsRequest): _48.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _48.QueryValidatorOutstandingRewardsRequestProtoMsg): _48.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _48.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _48.QueryValidatorOutstandingRewardsRequest): _48.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _48.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_48.QueryValidatorOutstandingRewardsResponse>): _48.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _48.QueryValidatorOutstandingRewardsResponseAmino): _48.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _48.QueryValidatorOutstandingRewardsResponse): _48.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _48.QueryValidatorOutstandingRewardsResponseAminoMsg): _48.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _48.QueryValidatorOutstandingRewardsResponse): _48.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _48.QueryValidatorOutstandingRewardsResponseProtoMsg): _48.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _48.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _48.QueryValidatorOutstandingRewardsResponse): _48.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _48.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_48.QueryValidatorCommissionRequest>): _48.QueryValidatorCommissionRequest;
                fromAmino(object: _48.QueryValidatorCommissionRequestAmino): _48.QueryValidatorCommissionRequest;
                toAmino(message: _48.QueryValidatorCommissionRequest): _48.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _48.QueryValidatorCommissionRequestAminoMsg): _48.QueryValidatorCommissionRequest;
                toAminoMsg(message: _48.QueryValidatorCommissionRequest): _48.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _48.QueryValidatorCommissionRequestProtoMsg): _48.QueryValidatorCommissionRequest;
                toProto(message: _48.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _48.QueryValidatorCommissionRequest): _48.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _48.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_48.QueryValidatorCommissionResponse>): _48.QueryValidatorCommissionResponse;
                fromAmino(object: _48.QueryValidatorCommissionResponseAmino): _48.QueryValidatorCommissionResponse;
                toAmino(message: _48.QueryValidatorCommissionResponse): _48.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _48.QueryValidatorCommissionResponseAminoMsg): _48.QueryValidatorCommissionResponse;
                toAminoMsg(message: _48.QueryValidatorCommissionResponse): _48.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _48.QueryValidatorCommissionResponseProtoMsg): _48.QueryValidatorCommissionResponse;
                toProto(message: _48.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _48.QueryValidatorCommissionResponse): _48.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _48.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_48.QueryValidatorSlashesRequest>): _48.QueryValidatorSlashesRequest;
                fromAmino(object: _48.QueryValidatorSlashesRequestAmino): _48.QueryValidatorSlashesRequest;
                toAmino(message: _48.QueryValidatorSlashesRequest): _48.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _48.QueryValidatorSlashesRequestAminoMsg): _48.QueryValidatorSlashesRequest;
                toAminoMsg(message: _48.QueryValidatorSlashesRequest): _48.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _48.QueryValidatorSlashesRequestProtoMsg): _48.QueryValidatorSlashesRequest;
                toProto(message: _48.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _48.QueryValidatorSlashesRequest): _48.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _48.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_48.QueryValidatorSlashesResponse>): _48.QueryValidatorSlashesResponse;
                fromAmino(object: _48.QueryValidatorSlashesResponseAmino): _48.QueryValidatorSlashesResponse;
                toAmino(message: _48.QueryValidatorSlashesResponse): _48.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _48.QueryValidatorSlashesResponseAminoMsg): _48.QueryValidatorSlashesResponse;
                toAminoMsg(message: _48.QueryValidatorSlashesResponse): _48.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _48.QueryValidatorSlashesResponseProtoMsg): _48.QueryValidatorSlashesResponse;
                toProto(message: _48.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _48.QueryValidatorSlashesResponse): _48.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _48.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_48.QueryDelegationRewardsRequest>): _48.QueryDelegationRewardsRequest;
                fromAmino(object: _48.QueryDelegationRewardsRequestAmino): _48.QueryDelegationRewardsRequest;
                toAmino(message: _48.QueryDelegationRewardsRequest): _48.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _48.QueryDelegationRewardsRequestAminoMsg): _48.QueryDelegationRewardsRequest;
                toAminoMsg(message: _48.QueryDelegationRewardsRequest): _48.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _48.QueryDelegationRewardsRequestProtoMsg): _48.QueryDelegationRewardsRequest;
                toProto(message: _48.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _48.QueryDelegationRewardsRequest): _48.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _48.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_48.QueryDelegationRewardsResponse>): _48.QueryDelegationRewardsResponse;
                fromAmino(object: _48.QueryDelegationRewardsResponseAmino): _48.QueryDelegationRewardsResponse;
                toAmino(message: _48.QueryDelegationRewardsResponse): _48.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _48.QueryDelegationRewardsResponseAminoMsg): _48.QueryDelegationRewardsResponse;
                toAminoMsg(message: _48.QueryDelegationRewardsResponse): _48.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _48.QueryDelegationRewardsResponseProtoMsg): _48.QueryDelegationRewardsResponse;
                toProto(message: _48.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _48.QueryDelegationRewardsResponse): _48.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _48.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_48.QueryDelegationTotalRewardsRequest>): _48.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _48.QueryDelegationTotalRewardsRequestAmino): _48.QueryDelegationTotalRewardsRequest;
                toAmino(message: _48.QueryDelegationTotalRewardsRequest): _48.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _48.QueryDelegationTotalRewardsRequestAminoMsg): _48.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _48.QueryDelegationTotalRewardsRequest): _48.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _48.QueryDelegationTotalRewardsRequestProtoMsg): _48.QueryDelegationTotalRewardsRequest;
                toProto(message: _48.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _48.QueryDelegationTotalRewardsRequest): _48.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _48.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_48.QueryDelegationTotalRewardsResponse>): _48.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _48.QueryDelegationTotalRewardsResponseAmino): _48.QueryDelegationTotalRewardsResponse;
                toAmino(message: _48.QueryDelegationTotalRewardsResponse): _48.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _48.QueryDelegationTotalRewardsResponseAminoMsg): _48.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _48.QueryDelegationTotalRewardsResponse): _48.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _48.QueryDelegationTotalRewardsResponseProtoMsg): _48.QueryDelegationTotalRewardsResponse;
                toProto(message: _48.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _48.QueryDelegationTotalRewardsResponse): _48.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _48.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_48.QueryDelegatorValidatorsRequest>): _48.QueryDelegatorValidatorsRequest;
                fromAmino(object: _48.QueryDelegatorValidatorsRequestAmino): _48.QueryDelegatorValidatorsRequest;
                toAmino(message: _48.QueryDelegatorValidatorsRequest): _48.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _48.QueryDelegatorValidatorsRequestAminoMsg): _48.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _48.QueryDelegatorValidatorsRequest): _48.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _48.QueryDelegatorValidatorsRequestProtoMsg): _48.QueryDelegatorValidatorsRequest;
                toProto(message: _48.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _48.QueryDelegatorValidatorsRequest): _48.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _48.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_48.QueryDelegatorValidatorsResponse>): _48.QueryDelegatorValidatorsResponse;
                fromAmino(object: _48.QueryDelegatorValidatorsResponseAmino): _48.QueryDelegatorValidatorsResponse;
                toAmino(message: _48.QueryDelegatorValidatorsResponse): _48.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _48.QueryDelegatorValidatorsResponseAminoMsg): _48.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _48.QueryDelegatorValidatorsResponse): _48.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _48.QueryDelegatorValidatorsResponseProtoMsg): _48.QueryDelegatorValidatorsResponse;
                toProto(message: _48.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _48.QueryDelegatorValidatorsResponse): _48.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _48.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_48.QueryDelegatorWithdrawAddressRequest>): _48.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _48.QueryDelegatorWithdrawAddressRequestAmino): _48.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _48.QueryDelegatorWithdrawAddressRequest): _48.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _48.QueryDelegatorWithdrawAddressRequestAminoMsg): _48.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _48.QueryDelegatorWithdrawAddressRequest): _48.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _48.QueryDelegatorWithdrawAddressRequestProtoMsg): _48.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _48.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _48.QueryDelegatorWithdrawAddressRequest): _48.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _48.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_48.QueryDelegatorWithdrawAddressResponse>): _48.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _48.QueryDelegatorWithdrawAddressResponseAmino): _48.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _48.QueryDelegatorWithdrawAddressResponse): _48.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _48.QueryDelegatorWithdrawAddressResponseAminoMsg): _48.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _48.QueryDelegatorWithdrawAddressResponse): _48.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _48.QueryDelegatorWithdrawAddressResponseProtoMsg): _48.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _48.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _48.QueryDelegatorWithdrawAddressResponse): _48.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _48.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _48.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_48.QueryCommunityPoolRequest>): _48.QueryCommunityPoolRequest;
                fromAmino(_: _48.QueryCommunityPoolRequestAmino): _48.QueryCommunityPoolRequest;
                toAmino(_: _48.QueryCommunityPoolRequest): _48.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _48.QueryCommunityPoolRequestAminoMsg): _48.QueryCommunityPoolRequest;
                toAminoMsg(message: _48.QueryCommunityPoolRequest): _48.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _48.QueryCommunityPoolRequestProtoMsg): _48.QueryCommunityPoolRequest;
                toProto(message: _48.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _48.QueryCommunityPoolRequest): _48.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _48.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_48.QueryCommunityPoolResponse>): _48.QueryCommunityPoolResponse;
                fromAmino(object: _48.QueryCommunityPoolResponseAmino): _48.QueryCommunityPoolResponse;
                toAmino(message: _48.QueryCommunityPoolResponse): _48.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _48.QueryCommunityPoolResponseAminoMsg): _48.QueryCommunityPoolResponse;
                toAminoMsg(message: _48.QueryCommunityPoolResponse): _48.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _48.QueryCommunityPoolResponseProtoMsg): _48.QueryCommunityPoolResponse;
                toProto(message: _48.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _48.QueryCommunityPoolResponse): _48.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _47.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_47.DelegatorWithdrawInfo>): _47.DelegatorWithdrawInfo;
                fromAmino(object: _47.DelegatorWithdrawInfoAmino): _47.DelegatorWithdrawInfo;
                toAmino(message: _47.DelegatorWithdrawInfo): _47.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _47.DelegatorWithdrawInfoAminoMsg): _47.DelegatorWithdrawInfo;
                toAminoMsg(message: _47.DelegatorWithdrawInfo): _47.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _47.DelegatorWithdrawInfoProtoMsg): _47.DelegatorWithdrawInfo;
                toProto(message: _47.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _47.DelegatorWithdrawInfo): _47.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _47.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_47.ValidatorOutstandingRewardsRecord>): _47.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _47.ValidatorOutstandingRewardsRecordAmino): _47.ValidatorOutstandingRewardsRecord;
                toAmino(message: _47.ValidatorOutstandingRewardsRecord): _47.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _47.ValidatorOutstandingRewardsRecordAminoMsg): _47.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _47.ValidatorOutstandingRewardsRecord): _47.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _47.ValidatorOutstandingRewardsRecordProtoMsg): _47.ValidatorOutstandingRewardsRecord;
                toProto(message: _47.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _47.ValidatorOutstandingRewardsRecord): _47.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _47.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_47.ValidatorAccumulatedCommissionRecord>): _47.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _47.ValidatorAccumulatedCommissionRecordAmino): _47.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _47.ValidatorAccumulatedCommissionRecord): _47.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _47.ValidatorAccumulatedCommissionRecordAminoMsg): _47.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _47.ValidatorAccumulatedCommissionRecord): _47.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _47.ValidatorAccumulatedCommissionRecordProtoMsg): _47.ValidatorAccumulatedCommissionRecord;
                toProto(message: _47.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _47.ValidatorAccumulatedCommissionRecord): _47.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _47.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_47.ValidatorHistoricalRewardsRecord>): _47.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _47.ValidatorHistoricalRewardsRecordAmino): _47.ValidatorHistoricalRewardsRecord;
                toAmino(message: _47.ValidatorHistoricalRewardsRecord): _47.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _47.ValidatorHistoricalRewardsRecordAminoMsg): _47.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _47.ValidatorHistoricalRewardsRecord): _47.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _47.ValidatorHistoricalRewardsRecordProtoMsg): _47.ValidatorHistoricalRewardsRecord;
                toProto(message: _47.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _47.ValidatorHistoricalRewardsRecord): _47.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _47.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_47.ValidatorCurrentRewardsRecord>): _47.ValidatorCurrentRewardsRecord;
                fromAmino(object: _47.ValidatorCurrentRewardsRecordAmino): _47.ValidatorCurrentRewardsRecord;
                toAmino(message: _47.ValidatorCurrentRewardsRecord): _47.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _47.ValidatorCurrentRewardsRecordAminoMsg): _47.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _47.ValidatorCurrentRewardsRecord): _47.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _47.ValidatorCurrentRewardsRecordProtoMsg): _47.ValidatorCurrentRewardsRecord;
                toProto(message: _47.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _47.ValidatorCurrentRewardsRecord): _47.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _47.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_47.DelegatorStartingInfoRecord>): _47.DelegatorStartingInfoRecord;
                fromAmino(object: _47.DelegatorStartingInfoRecordAmino): _47.DelegatorStartingInfoRecord;
                toAmino(message: _47.DelegatorStartingInfoRecord): _47.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _47.DelegatorStartingInfoRecordAminoMsg): _47.DelegatorStartingInfoRecord;
                toAminoMsg(message: _47.DelegatorStartingInfoRecord): _47.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _47.DelegatorStartingInfoRecordProtoMsg): _47.DelegatorStartingInfoRecord;
                toProto(message: _47.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _47.DelegatorStartingInfoRecord): _47.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _47.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_47.ValidatorSlashEventRecord>): _47.ValidatorSlashEventRecord;
                fromAmino(object: _47.ValidatorSlashEventRecordAmino): _47.ValidatorSlashEventRecord;
                toAmino(message: _47.ValidatorSlashEventRecord): _47.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _47.ValidatorSlashEventRecordAminoMsg): _47.ValidatorSlashEventRecord;
                toAminoMsg(message: _47.ValidatorSlashEventRecord): _47.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _47.ValidatorSlashEventRecordProtoMsg): _47.ValidatorSlashEventRecord;
                toProto(message: _47.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _47.ValidatorSlashEventRecord): _47.ValidatorSlashEventRecordProtoMsg;
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
            Params: {
                typeUrl: string;
                encode(message: _46.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.Params;
                fromPartial(object: Partial<_46.Params>): _46.Params;
                fromAmino(object: _46.ParamsAmino): _46.Params;
                toAmino(message: _46.Params): _46.ParamsAmino;
                fromAminoMsg(object: _46.ParamsAminoMsg): _46.Params;
                toAminoMsg(message: _46.Params): _46.ParamsAminoMsg;
                fromProtoMsg(message: _46.ParamsProtoMsg): _46.Params;
                toProto(message: _46.Params): Uint8Array;
                toProtoMsg(message: _46.Params): _46.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _46.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_46.ValidatorHistoricalRewards>): _46.ValidatorHistoricalRewards;
                fromAmino(object: _46.ValidatorHistoricalRewardsAmino): _46.ValidatorHistoricalRewards;
                toAmino(message: _46.ValidatorHistoricalRewards): _46.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _46.ValidatorHistoricalRewardsAminoMsg): _46.ValidatorHistoricalRewards;
                toAminoMsg(message: _46.ValidatorHistoricalRewards): _46.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _46.ValidatorHistoricalRewardsProtoMsg): _46.ValidatorHistoricalRewards;
                toProto(message: _46.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _46.ValidatorHistoricalRewards): _46.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _46.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.ValidatorCurrentRewards;
                fromPartial(object: Partial<_46.ValidatorCurrentRewards>): _46.ValidatorCurrentRewards;
                fromAmino(object: _46.ValidatorCurrentRewardsAmino): _46.ValidatorCurrentRewards;
                toAmino(message: _46.ValidatorCurrentRewards): _46.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _46.ValidatorCurrentRewardsAminoMsg): _46.ValidatorCurrentRewards;
                toAminoMsg(message: _46.ValidatorCurrentRewards): _46.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _46.ValidatorCurrentRewardsProtoMsg): _46.ValidatorCurrentRewards;
                toProto(message: _46.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _46.ValidatorCurrentRewards): _46.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _46.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_46.ValidatorAccumulatedCommission>): _46.ValidatorAccumulatedCommission;
                fromAmino(object: _46.ValidatorAccumulatedCommissionAmino): _46.ValidatorAccumulatedCommission;
                toAmino(message: _46.ValidatorAccumulatedCommission): _46.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _46.ValidatorAccumulatedCommissionAminoMsg): _46.ValidatorAccumulatedCommission;
                toAminoMsg(message: _46.ValidatorAccumulatedCommission): _46.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _46.ValidatorAccumulatedCommissionProtoMsg): _46.ValidatorAccumulatedCommission;
                toProto(message: _46.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _46.ValidatorAccumulatedCommission): _46.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _46.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_46.ValidatorOutstandingRewards>): _46.ValidatorOutstandingRewards;
                fromAmino(object: _46.ValidatorOutstandingRewardsAmino): _46.ValidatorOutstandingRewards;
                toAmino(message: _46.ValidatorOutstandingRewards): _46.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _46.ValidatorOutstandingRewardsAminoMsg): _46.ValidatorOutstandingRewards;
                toAminoMsg(message: _46.ValidatorOutstandingRewards): _46.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _46.ValidatorOutstandingRewardsProtoMsg): _46.ValidatorOutstandingRewards;
                toProto(message: _46.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _46.ValidatorOutstandingRewards): _46.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _46.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.ValidatorSlashEvent;
                fromPartial(object: Partial<_46.ValidatorSlashEvent>): _46.ValidatorSlashEvent;
                fromAmino(object: _46.ValidatorSlashEventAmino): _46.ValidatorSlashEvent;
                toAmino(message: _46.ValidatorSlashEvent): _46.ValidatorSlashEventAmino;
                fromAminoMsg(object: _46.ValidatorSlashEventAminoMsg): _46.ValidatorSlashEvent;
                toAminoMsg(message: _46.ValidatorSlashEvent): _46.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _46.ValidatorSlashEventProtoMsg): _46.ValidatorSlashEvent;
                toProto(message: _46.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _46.ValidatorSlashEvent): _46.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _46.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.ValidatorSlashEvents;
                fromPartial(object: Partial<_46.ValidatorSlashEvents>): _46.ValidatorSlashEvents;
                fromAmino(object: _46.ValidatorSlashEventsAmino): _46.ValidatorSlashEvents;
                toAmino(message: _46.ValidatorSlashEvents): _46.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _46.ValidatorSlashEventsAminoMsg): _46.ValidatorSlashEvents;
                toAminoMsg(message: _46.ValidatorSlashEvents): _46.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _46.ValidatorSlashEventsProtoMsg): _46.ValidatorSlashEvents;
                toProto(message: _46.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _46.ValidatorSlashEvents): _46.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _46.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.FeePool;
                fromPartial(object: Partial<_46.FeePool>): _46.FeePool;
                fromAmino(object: _46.FeePoolAmino): _46.FeePool;
                toAmino(message: _46.FeePool): _46.FeePoolAmino;
                fromAminoMsg(object: _46.FeePoolAminoMsg): _46.FeePool;
                toAminoMsg(message: _46.FeePool): _46.FeePoolAminoMsg;
                fromProtoMsg(message: _46.FeePoolProtoMsg): _46.FeePool;
                toProto(message: _46.FeePool): Uint8Array;
                toProtoMsg(message: _46.FeePool): _46.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _46.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_46.CommunityPoolSpendProposal>): _46.CommunityPoolSpendProposal;
                fromAmino(object: _46.CommunityPoolSpendProposalAmino): _46.CommunityPoolSpendProposal;
                toAmino(message: _46.CommunityPoolSpendProposal): _46.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _46.CommunityPoolSpendProposalAminoMsg): _46.CommunityPoolSpendProposal;
                toAminoMsg(message: _46.CommunityPoolSpendProposal): _46.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _46.CommunityPoolSpendProposalProtoMsg): _46.CommunityPoolSpendProposal;
                toProto(message: _46.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _46.CommunityPoolSpendProposal): _46.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _46.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.DelegatorStartingInfo;
                fromPartial(object: Partial<_46.DelegatorStartingInfo>): _46.DelegatorStartingInfo;
                fromAmino(object: _46.DelegatorStartingInfoAmino): _46.DelegatorStartingInfo;
                toAmino(message: _46.DelegatorStartingInfo): _46.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _46.DelegatorStartingInfoAminoMsg): _46.DelegatorStartingInfo;
                toAminoMsg(message: _46.DelegatorStartingInfo): _46.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _46.DelegatorStartingInfoProtoMsg): _46.DelegatorStartingInfo;
                toProto(message: _46.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _46.DelegatorStartingInfo): _46.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _46.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.DelegationDelegatorReward;
                fromPartial(object: Partial<_46.DelegationDelegatorReward>): _46.DelegationDelegatorReward;
                fromAmino(object: _46.DelegationDelegatorRewardAmino): _46.DelegationDelegatorReward;
                toAmino(message: _46.DelegationDelegatorReward): _46.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _46.DelegationDelegatorRewardAminoMsg): _46.DelegationDelegatorReward;
                toAminoMsg(message: _46.DelegationDelegatorReward): _46.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _46.DelegationDelegatorRewardProtoMsg): _46.DelegationDelegatorReward;
                toProto(message: _46.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _46.DelegationDelegatorReward): _46.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _46.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_46.CommunityPoolSpendProposalWithDeposit>): _46.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _46.CommunityPoolSpendProposalWithDepositAmino): _46.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _46.CommunityPoolSpendProposalWithDeposit): _46.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _46.CommunityPoolSpendProposalWithDepositAminoMsg): _46.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _46.CommunityPoolSpendProposalWithDeposit): _46.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _46.CommunityPoolSpendProposalWithDepositProtoMsg): _46.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _46.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _46.CommunityPoolSpendProposalWithDeposit): _46.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _185.MsgClientImpl;
            QueryClientImpl: typeof _172.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _52.QueryEvidenceRequest): Promise<_52.QueryEvidenceResponse>;
                allEvidence(request?: _52.QueryAllEvidenceRequest): Promise<_52.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _157.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _53.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _53.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _53.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _53.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _53.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _53.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _53.MsgSubmitEvidence) => _53.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _53.MsgSubmitEvidenceAmino) => _53.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _53.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.MsgSubmitEvidence;
                fromPartial(object: Partial<_53.MsgSubmitEvidence>): _53.MsgSubmitEvidence;
                fromAmino(object: _53.MsgSubmitEvidenceAmino): _53.MsgSubmitEvidence;
                toAmino(message: _53.MsgSubmitEvidence): _53.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _53.MsgSubmitEvidenceAminoMsg): _53.MsgSubmitEvidence;
                toAminoMsg(message: _53.MsgSubmitEvidence): _53.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _53.MsgSubmitEvidenceProtoMsg): _53.MsgSubmitEvidence;
                toProto(message: _53.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _53.MsgSubmitEvidence): _53.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _53.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_53.MsgSubmitEvidenceResponse>): _53.MsgSubmitEvidenceResponse;
                fromAmino(object: _53.MsgSubmitEvidenceResponseAmino): _53.MsgSubmitEvidenceResponse;
                toAmino(message: _53.MsgSubmitEvidenceResponse): _53.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _53.MsgSubmitEvidenceResponseAminoMsg): _53.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _53.MsgSubmitEvidenceResponse): _53.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _53.MsgSubmitEvidenceResponseProtoMsg): _53.MsgSubmitEvidenceResponse;
                toProto(message: _53.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _53.MsgSubmitEvidenceResponse): _53.MsgSubmitEvidenceResponseProtoMsg;
            };
            Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _52.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryEvidenceRequest;
                fromPartial(object: Partial<_52.QueryEvidenceRequest>): _52.QueryEvidenceRequest;
                fromAmino(object: _52.QueryEvidenceRequestAmino): _52.QueryEvidenceRequest;
                toAmino(message: _52.QueryEvidenceRequest): _52.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _52.QueryEvidenceRequestAminoMsg): _52.QueryEvidenceRequest;
                toAminoMsg(message: _52.QueryEvidenceRequest): _52.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _52.QueryEvidenceRequestProtoMsg): _52.QueryEvidenceRequest;
                toProto(message: _52.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _52.QueryEvidenceRequest): _52.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _52.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryEvidenceResponse;
                fromPartial(object: Partial<_52.QueryEvidenceResponse>): _52.QueryEvidenceResponse;
                fromAmino(object: _52.QueryEvidenceResponseAmino): _52.QueryEvidenceResponse;
                toAmino(message: _52.QueryEvidenceResponse): _52.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _52.QueryEvidenceResponseAminoMsg): _52.QueryEvidenceResponse;
                toAminoMsg(message: _52.QueryEvidenceResponse): _52.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _52.QueryEvidenceResponseProtoMsg): _52.QueryEvidenceResponse;
                toProto(message: _52.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _52.QueryEvidenceResponse): _52.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _52.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_52.QueryAllEvidenceRequest>): _52.QueryAllEvidenceRequest;
                fromAmino(object: _52.QueryAllEvidenceRequestAmino): _52.QueryAllEvidenceRequest;
                toAmino(message: _52.QueryAllEvidenceRequest): _52.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _52.QueryAllEvidenceRequestAminoMsg): _52.QueryAllEvidenceRequest;
                toAminoMsg(message: _52.QueryAllEvidenceRequest): _52.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _52.QueryAllEvidenceRequestProtoMsg): _52.QueryAllEvidenceRequest;
                toProto(message: _52.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _52.QueryAllEvidenceRequest): _52.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _52.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_52.QueryAllEvidenceResponse>): _52.QueryAllEvidenceResponse;
                fromAmino(object: _52.QueryAllEvidenceResponseAmino): _52.QueryAllEvidenceResponse;
                toAmino(message: _52.QueryAllEvidenceResponse): _52.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _52.QueryAllEvidenceResponseAminoMsg): _52.QueryAllEvidenceResponse;
                toAminoMsg(message: _52.QueryAllEvidenceResponse): _52.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _52.QueryAllEvidenceResponseProtoMsg): _52.QueryAllEvidenceResponse;
                toProto(message: _52.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _52.QueryAllEvidenceResponse): _52.QueryAllEvidenceResponseProtoMsg;
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
            Equivocation: {
                typeUrl: string;
                encode(message: _50.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.Equivocation;
                fromPartial(object: Partial<_50.Equivocation>): _50.Equivocation;
                fromAmino(object: _50.EquivocationAmino): _50.Equivocation;
                toAmino(message: _50.Equivocation): _50.EquivocationAmino;
                fromAminoMsg(object: _50.EquivocationAminoMsg): _50.Equivocation;
                toAminoMsg(message: _50.Equivocation): _50.EquivocationAminoMsg;
                fromProtoMsg(message: _50.EquivocationProtoMsg): _50.Equivocation;
                toProto(message: _50.Equivocation): Uint8Array;
                toProtoMsg(message: _50.Equivocation): _50.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _186.MsgClientImpl;
            QueryClientImpl: typeof _173.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _56.QueryAllowanceRequest): Promise<_56.QueryAllowanceResponse>;
                allowances(request: _56.QueryAllowancesRequest): Promise<_56.QueryAllowancesResponse>;
                allowancesByGranter(request: _56.QueryAllowancesByGranterRequest): Promise<_56.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _158.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _57.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _57.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _57.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _57.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _57.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _57.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _57.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _57.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _57.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _57.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _57.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _57.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _57.MsgGrantAllowance) => _57.MsgGrantAllowanceAmino;
                    fromAmino: (object: _57.MsgGrantAllowanceAmino) => _57.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _57.MsgRevokeAllowance) => _57.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _57.MsgRevokeAllowanceAmino) => _57.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _57.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.MsgGrantAllowance;
                fromPartial(object: Partial<_57.MsgGrantAllowance>): _57.MsgGrantAllowance;
                fromAmino(object: _57.MsgGrantAllowanceAmino): _57.MsgGrantAllowance;
                toAmino(message: _57.MsgGrantAllowance): _57.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _57.MsgGrantAllowanceAminoMsg): _57.MsgGrantAllowance;
                toAminoMsg(message: _57.MsgGrantAllowance): _57.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _57.MsgGrantAllowanceProtoMsg): _57.MsgGrantAllowance;
                toProto(message: _57.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _57.MsgGrantAllowance): _57.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _57.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _57.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_57.MsgGrantAllowanceResponse>): _57.MsgGrantAllowanceResponse;
                fromAmino(_: _57.MsgGrantAllowanceResponseAmino): _57.MsgGrantAllowanceResponse;
                toAmino(_: _57.MsgGrantAllowanceResponse): _57.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _57.MsgGrantAllowanceResponseAminoMsg): _57.MsgGrantAllowanceResponse;
                toAminoMsg(message: _57.MsgGrantAllowanceResponse): _57.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _57.MsgGrantAllowanceResponseProtoMsg): _57.MsgGrantAllowanceResponse;
                toProto(message: _57.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _57.MsgGrantAllowanceResponse): _57.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _57.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.MsgRevokeAllowance;
                fromPartial(object: Partial<_57.MsgRevokeAllowance>): _57.MsgRevokeAllowance;
                fromAmino(object: _57.MsgRevokeAllowanceAmino): _57.MsgRevokeAllowance;
                toAmino(message: _57.MsgRevokeAllowance): _57.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _57.MsgRevokeAllowanceAminoMsg): _57.MsgRevokeAllowance;
                toAminoMsg(message: _57.MsgRevokeAllowance): _57.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _57.MsgRevokeAllowanceProtoMsg): _57.MsgRevokeAllowance;
                toProto(message: _57.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _57.MsgRevokeAllowance): _57.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _57.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _57.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_57.MsgRevokeAllowanceResponse>): _57.MsgRevokeAllowanceResponse;
                fromAmino(_: _57.MsgRevokeAllowanceResponseAmino): _57.MsgRevokeAllowanceResponse;
                toAmino(_: _57.MsgRevokeAllowanceResponse): _57.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _57.MsgRevokeAllowanceResponseAminoMsg): _57.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _57.MsgRevokeAllowanceResponse): _57.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _57.MsgRevokeAllowanceResponseProtoMsg): _57.MsgRevokeAllowanceResponse;
                toProto(message: _57.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _57.MsgRevokeAllowanceResponse): _57.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _54.BasicAllowance | _54.PeriodicAllowance | _54.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _56.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryAllowanceRequest;
                fromPartial(object: Partial<_56.QueryAllowanceRequest>): _56.QueryAllowanceRequest;
                fromAmino(object: _56.QueryAllowanceRequestAmino): _56.QueryAllowanceRequest;
                toAmino(message: _56.QueryAllowanceRequest): _56.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _56.QueryAllowanceRequestAminoMsg): _56.QueryAllowanceRequest;
                toAminoMsg(message: _56.QueryAllowanceRequest): _56.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _56.QueryAllowanceRequestProtoMsg): _56.QueryAllowanceRequest;
                toProto(message: _56.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _56.QueryAllowanceRequest): _56.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _56.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryAllowanceResponse;
                fromPartial(object: Partial<_56.QueryAllowanceResponse>): _56.QueryAllowanceResponse;
                fromAmino(object: _56.QueryAllowanceResponseAmino): _56.QueryAllowanceResponse;
                toAmino(message: _56.QueryAllowanceResponse): _56.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _56.QueryAllowanceResponseAminoMsg): _56.QueryAllowanceResponse;
                toAminoMsg(message: _56.QueryAllowanceResponse): _56.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _56.QueryAllowanceResponseProtoMsg): _56.QueryAllowanceResponse;
                toProto(message: _56.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _56.QueryAllowanceResponse): _56.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _56.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryAllowancesRequest;
                fromPartial(object: Partial<_56.QueryAllowancesRequest>): _56.QueryAllowancesRequest;
                fromAmino(object: _56.QueryAllowancesRequestAmino): _56.QueryAllowancesRequest;
                toAmino(message: _56.QueryAllowancesRequest): _56.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _56.QueryAllowancesRequestAminoMsg): _56.QueryAllowancesRequest;
                toAminoMsg(message: _56.QueryAllowancesRequest): _56.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _56.QueryAllowancesRequestProtoMsg): _56.QueryAllowancesRequest;
                toProto(message: _56.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _56.QueryAllowancesRequest): _56.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _56.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryAllowancesResponse;
                fromPartial(object: Partial<_56.QueryAllowancesResponse>): _56.QueryAllowancesResponse;
                fromAmino(object: _56.QueryAllowancesResponseAmino): _56.QueryAllowancesResponse;
                toAmino(message: _56.QueryAllowancesResponse): _56.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _56.QueryAllowancesResponseAminoMsg): _56.QueryAllowancesResponse;
                toAminoMsg(message: _56.QueryAllowancesResponse): _56.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _56.QueryAllowancesResponseProtoMsg): _56.QueryAllowancesResponse;
                toProto(message: _56.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _56.QueryAllowancesResponse): _56.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _56.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_56.QueryAllowancesByGranterRequest>): _56.QueryAllowancesByGranterRequest;
                fromAmino(object: _56.QueryAllowancesByGranterRequestAmino): _56.QueryAllowancesByGranterRequest;
                toAmino(message: _56.QueryAllowancesByGranterRequest): _56.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _56.QueryAllowancesByGranterRequestAminoMsg): _56.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _56.QueryAllowancesByGranterRequest): _56.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _56.QueryAllowancesByGranterRequestProtoMsg): _56.QueryAllowancesByGranterRequest;
                toProto(message: _56.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _56.QueryAllowancesByGranterRequest): _56.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _56.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_56.QueryAllowancesByGranterResponse>): _56.QueryAllowancesByGranterResponse;
                fromAmino(object: _56.QueryAllowancesByGranterResponseAmino): _56.QueryAllowancesByGranterResponse;
                toAmino(message: _56.QueryAllowancesByGranterResponse): _56.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _56.QueryAllowancesByGranterResponseAminoMsg): _56.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _56.QueryAllowancesByGranterResponse): _56.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _56.QueryAllowancesByGranterResponseProtoMsg): _56.QueryAllowancesByGranterResponse;
                toProto(message: _56.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _56.QueryAllowancesByGranterResponse): _56.QueryAllowancesByGranterResponseProtoMsg;
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
            BasicAllowance: {
                typeUrl: string;
                encode(message: _54.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.BasicAllowance;
                fromPartial(object: Partial<_54.BasicAllowance>): _54.BasicAllowance;
                fromAmino(object: _54.BasicAllowanceAmino): _54.BasicAllowance;
                toAmino(message: _54.BasicAllowance): _54.BasicAllowanceAmino;
                fromAminoMsg(object: _54.BasicAllowanceAminoMsg): _54.BasicAllowance;
                toAminoMsg(message: _54.BasicAllowance): _54.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _54.BasicAllowanceProtoMsg): _54.BasicAllowance;
                toProto(message: _54.BasicAllowance): Uint8Array;
                toProtoMsg(message: _54.BasicAllowance): _54.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _54.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.PeriodicAllowance;
                fromPartial(object: Partial<_54.PeriodicAllowance>): _54.PeriodicAllowance;
                fromAmino(object: _54.PeriodicAllowanceAmino): _54.PeriodicAllowance;
                toAmino(message: _54.PeriodicAllowance): _54.PeriodicAllowanceAmino;
                fromAminoMsg(object: _54.PeriodicAllowanceAminoMsg): _54.PeriodicAllowance;
                toAminoMsg(message: _54.PeriodicAllowance): _54.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _54.PeriodicAllowanceProtoMsg): _54.PeriodicAllowance;
                toProto(message: _54.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _54.PeriodicAllowance): _54.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _54.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.AllowedMsgAllowance;
                fromPartial(object: Partial<_54.AllowedMsgAllowance>): _54.AllowedMsgAllowance;
                fromAmino(object: _54.AllowedMsgAllowanceAmino): _54.AllowedMsgAllowance;
                toAmino(message: _54.AllowedMsgAllowance): _54.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _54.AllowedMsgAllowanceAminoMsg): _54.AllowedMsgAllowance;
                toAminoMsg(message: _54.AllowedMsgAllowance): _54.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _54.AllowedMsgAllowanceProtoMsg): _54.AllowedMsgAllowance;
                toProto(message: _54.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _54.AllowedMsgAllowance): _54.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _54.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.Grant;
                fromPartial(object: Partial<_54.Grant>): _54.Grant;
                fromAmino(object: _54.GrantAmino): _54.Grant;
                toAmino(message: _54.Grant): _54.GrantAmino;
                fromAminoMsg(object: _54.GrantAminoMsg): _54.Grant;
                toAminoMsg(message: _54.Grant): _54.GrantAminoMsg;
                fromProtoMsg(message: _54.GrantProtoMsg): _54.Grant;
                toProto(message: _54.Grant): Uint8Array;
                toProtoMsg(message: _54.Grant): _54.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
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
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _187.MsgClientImpl;
            QueryClientImpl: typeof _174.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _61.QueryProposalRequest): Promise<_61.QueryProposalResponse>;
                proposals(request: _61.QueryProposalsRequest): Promise<_61.QueryProposalsResponse>;
                vote(request: _61.QueryVoteRequest): Promise<_61.QueryVoteResponse>;
                votes(request: _61.QueryVotesRequest): Promise<_61.QueryVotesResponse>;
                params(request: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
                deposit(request: _61.QueryDepositRequest): Promise<_61.QueryDepositResponse>;
                deposits(request: _61.QueryDepositsRequest): Promise<_61.QueryDepositsResponse>;
                tallyResult(request: _61.QueryTallyResultRequest): Promise<_61.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _159.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _62.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _62.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _62.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _62.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _62.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _62.MsgSubmitProposal;
                    };
                    vote(value: _62.MsgVote): {
                        typeUrl: string;
                        value: _62.MsgVote;
                    };
                    voteWeighted(value: _62.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _62.MsgVoteWeighted;
                    };
                    deposit(value: _62.MsgDeposit): {
                        typeUrl: string;
                        value: _62.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _62.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _62.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _62.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _62.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _62.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _62.MsgSubmitProposal;
                    };
                    vote(value: _62.MsgVote): {
                        typeUrl: string;
                        value: _62.MsgVote;
                    };
                    voteWeighted(value: _62.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _62.MsgVoteWeighted;
                    };
                    deposit(value: _62.MsgDeposit): {
                        typeUrl: string;
                        value: _62.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _62.MsgSubmitProposal) => _62.MsgSubmitProposalAmino;
                    fromAmino: (object: _62.MsgSubmitProposalAmino) => _62.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _62.MsgVote) => _62.MsgVoteAmino;
                    fromAmino: (object: _62.MsgVoteAmino) => _62.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _62.MsgVoteWeighted) => _62.MsgVoteWeightedAmino;
                    fromAmino: (object: _62.MsgVoteWeightedAmino) => _62.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _62.MsgDeposit) => _62.MsgDepositAmino;
                    fromAmino: (object: _62.MsgDepositAmino) => _62.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _62.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.MsgSubmitProposal;
                fromPartial(object: Partial<_62.MsgSubmitProposal>): _62.MsgSubmitProposal;
                fromAmino(object: _62.MsgSubmitProposalAmino): _62.MsgSubmitProposal;
                toAmino(message: _62.MsgSubmitProposal): _62.MsgSubmitProposalAmino;
                fromAminoMsg(object: _62.MsgSubmitProposalAminoMsg): _62.MsgSubmitProposal;
                toAminoMsg(message: _62.MsgSubmitProposal): _62.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _62.MsgSubmitProposalProtoMsg): _62.MsgSubmitProposal;
                toProto(message: _62.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _62.MsgSubmitProposal): _62.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _62.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_62.MsgSubmitProposalResponse>): _62.MsgSubmitProposalResponse;
                fromAmino(object: _62.MsgSubmitProposalResponseAmino): _62.MsgSubmitProposalResponse;
                toAmino(message: _62.MsgSubmitProposalResponse): _62.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _62.MsgSubmitProposalResponseAminoMsg): _62.MsgSubmitProposalResponse;
                toAminoMsg(message: _62.MsgSubmitProposalResponse): _62.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _62.MsgSubmitProposalResponseProtoMsg): _62.MsgSubmitProposalResponse;
                toProto(message: _62.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _62.MsgSubmitProposalResponse): _62.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _62.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.MsgVote;
                fromPartial(object: Partial<_62.MsgVote>): _62.MsgVote;
                fromAmino(object: _62.MsgVoteAmino): _62.MsgVote;
                toAmino(message: _62.MsgVote): _62.MsgVoteAmino;
                fromAminoMsg(object: _62.MsgVoteAminoMsg): _62.MsgVote;
                toAminoMsg(message: _62.MsgVote): _62.MsgVoteAminoMsg;
                fromProtoMsg(message: _62.MsgVoteProtoMsg): _62.MsgVote;
                toProto(message: _62.MsgVote): Uint8Array;
                toProtoMsg(message: _62.MsgVote): _62.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _62.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _62.MsgVoteResponse;
                fromPartial(_: Partial<_62.MsgVoteResponse>): _62.MsgVoteResponse;
                fromAmino(_: _62.MsgVoteResponseAmino): _62.MsgVoteResponse;
                toAmino(_: _62.MsgVoteResponse): _62.MsgVoteResponseAmino;
                fromAminoMsg(object: _62.MsgVoteResponseAminoMsg): _62.MsgVoteResponse;
                toAminoMsg(message: _62.MsgVoteResponse): _62.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _62.MsgVoteResponseProtoMsg): _62.MsgVoteResponse;
                toProto(message: _62.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _62.MsgVoteResponse): _62.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _62.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.MsgVoteWeighted;
                fromPartial(object: Partial<_62.MsgVoteWeighted>): _62.MsgVoteWeighted;
                fromAmino(object: _62.MsgVoteWeightedAmino): _62.MsgVoteWeighted;
                toAmino(message: _62.MsgVoteWeighted): _62.MsgVoteWeightedAmino;
                fromAminoMsg(object: _62.MsgVoteWeightedAminoMsg): _62.MsgVoteWeighted;
                toAminoMsg(message: _62.MsgVoteWeighted): _62.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _62.MsgVoteWeightedProtoMsg): _62.MsgVoteWeighted;
                toProto(message: _62.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _62.MsgVoteWeighted): _62.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _62.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _62.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_62.MsgVoteWeightedResponse>): _62.MsgVoteWeightedResponse;
                fromAmino(_: _62.MsgVoteWeightedResponseAmino): _62.MsgVoteWeightedResponse;
                toAmino(_: _62.MsgVoteWeightedResponse): _62.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _62.MsgVoteWeightedResponseAminoMsg): _62.MsgVoteWeightedResponse;
                toAminoMsg(message: _62.MsgVoteWeightedResponse): _62.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _62.MsgVoteWeightedResponseProtoMsg): _62.MsgVoteWeightedResponse;
                toProto(message: _62.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _62.MsgVoteWeightedResponse): _62.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _62.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.MsgDeposit;
                fromPartial(object: Partial<_62.MsgDeposit>): _62.MsgDeposit;
                fromAmino(object: _62.MsgDepositAmino): _62.MsgDeposit;
                toAmino(message: _62.MsgDeposit): _62.MsgDepositAmino;
                fromAminoMsg(object: _62.MsgDepositAminoMsg): _62.MsgDeposit;
                toAminoMsg(message: _62.MsgDeposit): _62.MsgDepositAminoMsg;
                fromProtoMsg(message: _62.MsgDepositProtoMsg): _62.MsgDeposit;
                toProto(message: _62.MsgDeposit): Uint8Array;
                toProtoMsg(message: _62.MsgDeposit): _62.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _62.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _62.MsgDepositResponse;
                fromPartial(_: Partial<_62.MsgDepositResponse>): _62.MsgDepositResponse;
                fromAmino(_: _62.MsgDepositResponseAmino): _62.MsgDepositResponse;
                toAmino(_: _62.MsgDepositResponse): _62.MsgDepositResponseAmino;
                fromAminoMsg(object: _62.MsgDepositResponseAminoMsg): _62.MsgDepositResponse;
                toAminoMsg(message: _62.MsgDepositResponse): _62.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _62.MsgDepositResponseProtoMsg): _62.MsgDepositResponse;
                toProto(message: _62.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _62.MsgDepositResponse): _62.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _60.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _61.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryProposalRequest;
                fromPartial(object: Partial<_61.QueryProposalRequest>): _61.QueryProposalRequest;
                fromAmino(object: _61.QueryProposalRequestAmino): _61.QueryProposalRequest;
                toAmino(message: _61.QueryProposalRequest): _61.QueryProposalRequestAmino;
                fromAminoMsg(object: _61.QueryProposalRequestAminoMsg): _61.QueryProposalRequest;
                toAminoMsg(message: _61.QueryProposalRequest): _61.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _61.QueryProposalRequestProtoMsg): _61.QueryProposalRequest;
                toProto(message: _61.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _61.QueryProposalRequest): _61.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _61.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryProposalResponse;
                fromPartial(object: Partial<_61.QueryProposalResponse>): _61.QueryProposalResponse;
                fromAmino(object: _61.QueryProposalResponseAmino): _61.QueryProposalResponse;
                toAmino(message: _61.QueryProposalResponse): _61.QueryProposalResponseAmino;
                fromAminoMsg(object: _61.QueryProposalResponseAminoMsg): _61.QueryProposalResponse;
                toAminoMsg(message: _61.QueryProposalResponse): _61.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _61.QueryProposalResponseProtoMsg): _61.QueryProposalResponse;
                toProto(message: _61.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _61.QueryProposalResponse): _61.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _61.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryProposalsRequest;
                fromPartial(object: Partial<_61.QueryProposalsRequest>): _61.QueryProposalsRequest;
                fromAmino(object: _61.QueryProposalsRequestAmino): _61.QueryProposalsRequest;
                toAmino(message: _61.QueryProposalsRequest): _61.QueryProposalsRequestAmino;
                fromAminoMsg(object: _61.QueryProposalsRequestAminoMsg): _61.QueryProposalsRequest;
                toAminoMsg(message: _61.QueryProposalsRequest): _61.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _61.QueryProposalsRequestProtoMsg): _61.QueryProposalsRequest;
                toProto(message: _61.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _61.QueryProposalsRequest): _61.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _61.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryProposalsResponse;
                fromPartial(object: Partial<_61.QueryProposalsResponse>): _61.QueryProposalsResponse;
                fromAmino(object: _61.QueryProposalsResponseAmino): _61.QueryProposalsResponse;
                toAmino(message: _61.QueryProposalsResponse): _61.QueryProposalsResponseAmino;
                fromAminoMsg(object: _61.QueryProposalsResponseAminoMsg): _61.QueryProposalsResponse;
                toAminoMsg(message: _61.QueryProposalsResponse): _61.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _61.QueryProposalsResponseProtoMsg): _61.QueryProposalsResponse;
                toProto(message: _61.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _61.QueryProposalsResponse): _61.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _61.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryVoteRequest;
                fromPartial(object: Partial<_61.QueryVoteRequest>): _61.QueryVoteRequest;
                fromAmino(object: _61.QueryVoteRequestAmino): _61.QueryVoteRequest;
                toAmino(message: _61.QueryVoteRequest): _61.QueryVoteRequestAmino;
                fromAminoMsg(object: _61.QueryVoteRequestAminoMsg): _61.QueryVoteRequest;
                toAminoMsg(message: _61.QueryVoteRequest): _61.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _61.QueryVoteRequestProtoMsg): _61.QueryVoteRequest;
                toProto(message: _61.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _61.QueryVoteRequest): _61.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _61.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryVoteResponse;
                fromPartial(object: Partial<_61.QueryVoteResponse>): _61.QueryVoteResponse;
                fromAmino(object: _61.QueryVoteResponseAmino): _61.QueryVoteResponse;
                toAmino(message: _61.QueryVoteResponse): _61.QueryVoteResponseAmino;
                fromAminoMsg(object: _61.QueryVoteResponseAminoMsg): _61.QueryVoteResponse;
                toAminoMsg(message: _61.QueryVoteResponse): _61.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _61.QueryVoteResponseProtoMsg): _61.QueryVoteResponse;
                toProto(message: _61.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _61.QueryVoteResponse): _61.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _61.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryVotesRequest;
                fromPartial(object: Partial<_61.QueryVotesRequest>): _61.QueryVotesRequest;
                fromAmino(object: _61.QueryVotesRequestAmino): _61.QueryVotesRequest;
                toAmino(message: _61.QueryVotesRequest): _61.QueryVotesRequestAmino;
                fromAminoMsg(object: _61.QueryVotesRequestAminoMsg): _61.QueryVotesRequest;
                toAminoMsg(message: _61.QueryVotesRequest): _61.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _61.QueryVotesRequestProtoMsg): _61.QueryVotesRequest;
                toProto(message: _61.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _61.QueryVotesRequest): _61.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _61.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryVotesResponse;
                fromPartial(object: Partial<_61.QueryVotesResponse>): _61.QueryVotesResponse;
                fromAmino(object: _61.QueryVotesResponseAmino): _61.QueryVotesResponse;
                toAmino(message: _61.QueryVotesResponse): _61.QueryVotesResponseAmino;
                fromAminoMsg(object: _61.QueryVotesResponseAminoMsg): _61.QueryVotesResponse;
                toAminoMsg(message: _61.QueryVotesResponse): _61.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _61.QueryVotesResponseProtoMsg): _61.QueryVotesResponse;
                toProto(message: _61.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _61.QueryVotesResponse): _61.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _61.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryParamsRequest;
                fromPartial(object: Partial<_61.QueryParamsRequest>): _61.QueryParamsRequest;
                fromAmino(object: _61.QueryParamsRequestAmino): _61.QueryParamsRequest;
                toAmino(message: _61.QueryParamsRequest): _61.QueryParamsRequestAmino;
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
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _61.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryDepositRequest;
                fromPartial(object: Partial<_61.QueryDepositRequest>): _61.QueryDepositRequest;
                fromAmino(object: _61.QueryDepositRequestAmino): _61.QueryDepositRequest;
                toAmino(message: _61.QueryDepositRequest): _61.QueryDepositRequestAmino;
                fromAminoMsg(object: _61.QueryDepositRequestAminoMsg): _61.QueryDepositRequest;
                toAminoMsg(message: _61.QueryDepositRequest): _61.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _61.QueryDepositRequestProtoMsg): _61.QueryDepositRequest;
                toProto(message: _61.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _61.QueryDepositRequest): _61.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _61.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryDepositResponse;
                fromPartial(object: Partial<_61.QueryDepositResponse>): _61.QueryDepositResponse;
                fromAmino(object: _61.QueryDepositResponseAmino): _61.QueryDepositResponse;
                toAmino(message: _61.QueryDepositResponse): _61.QueryDepositResponseAmino;
                fromAminoMsg(object: _61.QueryDepositResponseAminoMsg): _61.QueryDepositResponse;
                toAminoMsg(message: _61.QueryDepositResponse): _61.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _61.QueryDepositResponseProtoMsg): _61.QueryDepositResponse;
                toProto(message: _61.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _61.QueryDepositResponse): _61.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _61.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryDepositsRequest;
                fromPartial(object: Partial<_61.QueryDepositsRequest>): _61.QueryDepositsRequest;
                fromAmino(object: _61.QueryDepositsRequestAmino): _61.QueryDepositsRequest;
                toAmino(message: _61.QueryDepositsRequest): _61.QueryDepositsRequestAmino;
                fromAminoMsg(object: _61.QueryDepositsRequestAminoMsg): _61.QueryDepositsRequest;
                toAminoMsg(message: _61.QueryDepositsRequest): _61.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _61.QueryDepositsRequestProtoMsg): _61.QueryDepositsRequest;
                toProto(message: _61.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _61.QueryDepositsRequest): _61.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _61.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryDepositsResponse;
                fromPartial(object: Partial<_61.QueryDepositsResponse>): _61.QueryDepositsResponse;
                fromAmino(object: _61.QueryDepositsResponseAmino): _61.QueryDepositsResponse;
                toAmino(message: _61.QueryDepositsResponse): _61.QueryDepositsResponseAmino;
                fromAminoMsg(object: _61.QueryDepositsResponseAminoMsg): _61.QueryDepositsResponse;
                toAminoMsg(message: _61.QueryDepositsResponse): _61.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _61.QueryDepositsResponseProtoMsg): _61.QueryDepositsResponse;
                toProto(message: _61.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _61.QueryDepositsResponse): _61.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _61.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryTallyResultRequest;
                fromPartial(object: Partial<_61.QueryTallyResultRequest>): _61.QueryTallyResultRequest;
                fromAmino(object: _61.QueryTallyResultRequestAmino): _61.QueryTallyResultRequest;
                toAmino(message: _61.QueryTallyResultRequest): _61.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _61.QueryTallyResultRequestAminoMsg): _61.QueryTallyResultRequest;
                toAminoMsg(message: _61.QueryTallyResultRequest): _61.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _61.QueryTallyResultRequestProtoMsg): _61.QueryTallyResultRequest;
                toProto(message: _61.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _61.QueryTallyResultRequest): _61.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _61.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryTallyResultResponse;
                fromPartial(object: Partial<_61.QueryTallyResultResponse>): _61.QueryTallyResultResponse;
                fromAmino(object: _61.QueryTallyResultResponseAmino): _61.QueryTallyResultResponse;
                toAmino(message: _61.QueryTallyResultResponse): _61.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _61.QueryTallyResultResponseAminoMsg): _61.QueryTallyResultResponse;
                toAminoMsg(message: _61.QueryTallyResultResponse): _61.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _61.QueryTallyResultResponseProtoMsg): _61.QueryTallyResultResponse;
                toProto(message: _61.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _61.QueryTallyResultResponse): _61.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _60.VoteOption;
            voteOptionToJSON(object: _60.VoteOption): string;
            proposalStatusFromJSON(object: any): _60.ProposalStatus;
            proposalStatusToJSON(object: _60.ProposalStatus): string;
            VoteOption: typeof _60.VoteOption;
            VoteOptionSDKType: typeof _60.VoteOption;
            VoteOptionAmino: typeof _60.VoteOption;
            ProposalStatus: typeof _60.ProposalStatus;
            ProposalStatusSDKType: typeof _60.ProposalStatus;
            ProposalStatusAmino: typeof _60.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _60.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.WeightedVoteOption;
                fromPartial(object: Partial<_60.WeightedVoteOption>): _60.WeightedVoteOption;
                fromAmino(object: _60.WeightedVoteOptionAmino): _60.WeightedVoteOption;
                toAmino(message: _60.WeightedVoteOption): _60.WeightedVoteOptionAmino;
                fromAminoMsg(object: _60.WeightedVoteOptionAminoMsg): _60.WeightedVoteOption;
                toAminoMsg(message: _60.WeightedVoteOption): _60.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _60.WeightedVoteOptionProtoMsg): _60.WeightedVoteOption;
                toProto(message: _60.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _60.WeightedVoteOption): _60.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _60.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.TextProposal;
                fromPartial(object: Partial<_60.TextProposal>): _60.TextProposal;
                fromAmino(object: _60.TextProposalAmino): _60.TextProposal;
                toAmino(message: _60.TextProposal): _60.TextProposalAmino;
                fromAminoMsg(object: _60.TextProposalAminoMsg): _60.TextProposal;
                toAminoMsg(message: _60.TextProposal): _60.TextProposalAminoMsg;
                fromProtoMsg(message: _60.TextProposalProtoMsg): _60.TextProposal;
                toProto(message: _60.TextProposal): Uint8Array;
                toProtoMsg(message: _60.TextProposal): _60.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _60.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.Deposit;
                fromPartial(object: Partial<_60.Deposit>): _60.Deposit;
                fromAmino(object: _60.DepositAmino): _60.Deposit;
                toAmino(message: _60.Deposit): _60.DepositAmino;
                fromAminoMsg(object: _60.DepositAminoMsg): _60.Deposit;
                toAminoMsg(message: _60.Deposit): _60.DepositAminoMsg;
                fromProtoMsg(message: _60.DepositProtoMsg): _60.Deposit;
                toProto(message: _60.Deposit): Uint8Array;
                toProtoMsg(message: _60.Deposit): _60.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _60.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.Proposal;
                fromPartial(object: Partial<_60.Proposal>): _60.Proposal;
                fromAmino(object: _60.ProposalAmino): _60.Proposal;
                toAmino(message: _60.Proposal): _60.ProposalAmino;
                fromAminoMsg(object: _60.ProposalAminoMsg): _60.Proposal;
                toAminoMsg(message: _60.Proposal): _60.ProposalAminoMsg;
                fromProtoMsg(message: _60.ProposalProtoMsg): _60.Proposal;
                toProto(message: _60.Proposal): Uint8Array;
                toProtoMsg(message: _60.Proposal): _60.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _60.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.TallyResult;
                fromPartial(object: Partial<_60.TallyResult>): _60.TallyResult;
                fromAmino(object: _60.TallyResultAmino): _60.TallyResult;
                toAmino(message: _60.TallyResult): _60.TallyResultAmino;
                fromAminoMsg(object: _60.TallyResultAminoMsg): _60.TallyResult;
                toAminoMsg(message: _60.TallyResult): _60.TallyResultAminoMsg;
                fromProtoMsg(message: _60.TallyResultProtoMsg): _60.TallyResult;
                toProto(message: _60.TallyResult): Uint8Array;
                toProtoMsg(message: _60.TallyResult): _60.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _60.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.Vote;
                fromPartial(object: Partial<_60.Vote>): _60.Vote;
                fromAmino(object: _60.VoteAmino): _60.Vote;
                toAmino(message: _60.Vote): _60.VoteAmino;
                fromAminoMsg(object: _60.VoteAminoMsg): _60.Vote;
                toAminoMsg(message: _60.Vote): _60.VoteAminoMsg;
                fromProtoMsg(message: _60.VoteProtoMsg): _60.Vote;
                toProto(message: _60.Vote): Uint8Array;
                toProtoMsg(message: _60.Vote): _60.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _60.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.DepositParams;
                fromPartial(object: Partial<_60.DepositParams>): _60.DepositParams;
                fromAmino(object: _60.DepositParamsAmino): _60.DepositParams;
                toAmino(message: _60.DepositParams): _60.DepositParamsAmino;
                fromAminoMsg(object: _60.DepositParamsAminoMsg): _60.DepositParams;
                toAminoMsg(message: _60.DepositParams): _60.DepositParamsAminoMsg;
                fromProtoMsg(message: _60.DepositParamsProtoMsg): _60.DepositParams;
                toProto(message: _60.DepositParams): Uint8Array;
                toProtoMsg(message: _60.DepositParams): _60.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _60.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.VotingParams;
                fromPartial(object: Partial<_60.VotingParams>): _60.VotingParams;
                fromAmino(object: _60.VotingParamsAmino): _60.VotingParams;
                toAmino(message: _60.VotingParams): _60.VotingParamsAmino;
                fromAminoMsg(object: _60.VotingParamsAminoMsg): _60.VotingParams;
                toAminoMsg(message: _60.VotingParams): _60.VotingParamsAminoMsg;
                fromProtoMsg(message: _60.VotingParamsProtoMsg): _60.VotingParams;
                toProto(message: _60.VotingParams): Uint8Array;
                toProtoMsg(message: _60.VotingParams): _60.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _60.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.TallyParams;
                fromPartial(object: Partial<_60.TallyParams>): _60.TallyParams;
                fromAmino(object: _60.TallyParamsAmino): _60.TallyParams;
                toAmino(message: _60.TallyParams): _60.TallyParamsAmino;
                fromAminoMsg(object: _60.TallyParamsAminoMsg): _60.TallyParams;
                toAminoMsg(message: _60.TallyParams): _60.TallyParamsAminoMsg;
                fromProtoMsg(message: _60.TallyParamsProtoMsg): _60.TallyParams;
                toProto(message: _60.TallyParams): Uint8Array;
                toProtoMsg(message: _60.TallyParams): _60.TallyParamsProtoMsg;
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
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _175.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _65.QueryParamsRequest): Promise<_65.QueryParamsResponse>;
                inflation(request?: _65.QueryInflationRequest): Promise<_65.QueryInflationResponse>;
                annualProvisions(request?: _65.QueryAnnualProvisionsRequest): Promise<_65.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _160.LCDQueryClient;
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
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _65.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _65.QueryInflationRequest;
                fromPartial(_: Partial<_65.QueryInflationRequest>): _65.QueryInflationRequest;
                fromAmino(_: _65.QueryInflationRequestAmino): _65.QueryInflationRequest;
                toAmino(_: _65.QueryInflationRequest): _65.QueryInflationRequestAmino;
                fromAminoMsg(object: _65.QueryInflationRequestAminoMsg): _65.QueryInflationRequest;
                toAminoMsg(message: _65.QueryInflationRequest): _65.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _65.QueryInflationRequestProtoMsg): _65.QueryInflationRequest;
                toProto(message: _65.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _65.QueryInflationRequest): _65.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _65.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryInflationResponse;
                fromPartial(object: Partial<_65.QueryInflationResponse>): _65.QueryInflationResponse;
                fromAmino(object: _65.QueryInflationResponseAmino): _65.QueryInflationResponse;
                toAmino(message: _65.QueryInflationResponse): _65.QueryInflationResponseAmino;
                fromAminoMsg(object: _65.QueryInflationResponseAminoMsg): _65.QueryInflationResponse;
                toAminoMsg(message: _65.QueryInflationResponse): _65.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _65.QueryInflationResponseProtoMsg): _65.QueryInflationResponse;
                toProto(message: _65.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _65.QueryInflationResponse): _65.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _65.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _65.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_65.QueryAnnualProvisionsRequest>): _65.QueryAnnualProvisionsRequest;
                fromAmino(_: _65.QueryAnnualProvisionsRequestAmino): _65.QueryAnnualProvisionsRequest;
                toAmino(_: _65.QueryAnnualProvisionsRequest): _65.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _65.QueryAnnualProvisionsRequestAminoMsg): _65.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _65.QueryAnnualProvisionsRequest): _65.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _65.QueryAnnualProvisionsRequestProtoMsg): _65.QueryAnnualProvisionsRequest;
                toProto(message: _65.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _65.QueryAnnualProvisionsRequest): _65.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _65.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_65.QueryAnnualProvisionsResponse>): _65.QueryAnnualProvisionsResponse;
                fromAmino(object: _65.QueryAnnualProvisionsResponseAmino): _65.QueryAnnualProvisionsResponse;
                toAmino(message: _65.QueryAnnualProvisionsResponse): _65.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _65.QueryAnnualProvisionsResponseAminoMsg): _65.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _65.QueryAnnualProvisionsResponse): _65.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _65.QueryAnnualProvisionsResponseProtoMsg): _65.QueryAnnualProvisionsResponse;
                toProto(message: _65.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _65.QueryAnnualProvisionsResponse): _65.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _64.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.Minter;
                fromPartial(object: Partial<_64.Minter>): _64.Minter;
                fromAmino(object: _64.MinterAmino): _64.Minter;
                toAmino(message: _64.Minter): _64.MinterAmino;
                fromAminoMsg(object: _64.MinterAminoMsg): _64.Minter;
                toAminoMsg(message: _64.Minter): _64.MinterAminoMsg;
                fromProtoMsg(message: _64.MinterProtoMsg): _64.Minter;
                toProto(message: _64.Minter): Uint8Array;
                toProtoMsg(message: _64.Minter): _64.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _64.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.Params;
                fromPartial(object: Partial<_64.Params>): _64.Params;
                fromAmino(object: _64.ParamsAmino): _64.Params;
                toAmino(message: _64.Params): _64.ParamsAmino;
                fromAminoMsg(object: _64.ParamsAminoMsg): _64.Params;
                toAminoMsg(message: _64.Params): _64.ParamsAminoMsg;
                fromProtoMsg(message: _64.ParamsProtoMsg): _64.Params;
                toProto(message: _64.Params): Uint8Array;
                toProtoMsg(message: _64.Params): _64.ParamsProtoMsg;
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
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _176.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _67.QueryParamsRequest): Promise<_67.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _161.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _67.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryParamsRequest;
                fromPartial(object: Partial<_67.QueryParamsRequest>): _67.QueryParamsRequest;
                fromAmino(object: _67.QueryParamsRequestAmino): _67.QueryParamsRequest;
                toAmino(message: _67.QueryParamsRequest): _67.QueryParamsRequestAmino;
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
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _66.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.ParameterChangeProposal;
                fromPartial(object: Partial<_66.ParameterChangeProposal>): _66.ParameterChangeProposal;
                fromAmino(object: _66.ParameterChangeProposalAmino): _66.ParameterChangeProposal;
                toAmino(message: _66.ParameterChangeProposal): _66.ParameterChangeProposalAmino;
                fromAminoMsg(object: _66.ParameterChangeProposalAminoMsg): _66.ParameterChangeProposal;
                toAminoMsg(message: _66.ParameterChangeProposal): _66.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _66.ParameterChangeProposalProtoMsg): _66.ParameterChangeProposal;
                toProto(message: _66.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _66.ParameterChangeProposal): _66.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _66.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.ParamChange;
                fromPartial(object: Partial<_66.ParamChange>): _66.ParamChange;
                fromAmino(object: _66.ParamChangeAmino): _66.ParamChange;
                toAmino(message: _66.ParamChange): _66.ParamChangeAmino;
                fromAminoMsg(object: _66.ParamChangeAminoMsg): _66.ParamChange;
                toAminoMsg(message: _66.ParamChange): _66.ParamChangeAminoMsg;
                fromProtoMsg(message: _66.ParamChangeProtoMsg): _66.ParamChange;
                toProto(message: _66.ParamChange): Uint8Array;
                toProtoMsg(message: _66.ParamChange): _66.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _188.MsgClientImpl;
            QueryClientImpl: typeof _177.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _69.QueryParamsRequest): Promise<_69.QueryParamsResponse>;
                signingInfo(request: _69.QuerySigningInfoRequest): Promise<_69.QuerySigningInfoResponse>;
                signingInfos(request?: _69.QuerySigningInfosRequest): Promise<_69.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _162.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _71.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _71.MsgUnjail): {
                        typeUrl: string;
                        value: _71.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _71.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _71.MsgUnjail): {
                        typeUrl: string;
                        value: _71.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _71.MsgUnjail) => _71.MsgUnjailAmino;
                    fromAmino: (object: _71.MsgUnjailAmino) => _71.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _71.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.MsgUnjail;
                fromPartial(object: Partial<_71.MsgUnjail>): _71.MsgUnjail;
                fromAmino(object: _71.MsgUnjailAmino): _71.MsgUnjail;
                toAmino(message: _71.MsgUnjail): _71.MsgUnjailAmino;
                fromAminoMsg(object: _71.MsgUnjailAminoMsg): _71.MsgUnjail;
                toAminoMsg(message: _71.MsgUnjail): _71.MsgUnjailAminoMsg;
                fromProtoMsg(message: _71.MsgUnjailProtoMsg): _71.MsgUnjail;
                toProto(message: _71.MsgUnjail): Uint8Array;
                toProtoMsg(message: _71.MsgUnjail): _71.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _71.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _71.MsgUnjailResponse;
                fromPartial(_: Partial<_71.MsgUnjailResponse>): _71.MsgUnjailResponse;
                fromAmino(_: _71.MsgUnjailResponseAmino): _71.MsgUnjailResponse;
                toAmino(_: _71.MsgUnjailResponse): _71.MsgUnjailResponseAmino;
                fromAminoMsg(object: _71.MsgUnjailResponseAminoMsg): _71.MsgUnjailResponse;
                toAminoMsg(message: _71.MsgUnjailResponse): _71.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _71.MsgUnjailResponseProtoMsg): _71.MsgUnjailResponse;
                toProto(message: _71.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _71.MsgUnjailResponse): _71.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _70.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.ValidatorSigningInfo;
                fromPartial(object: Partial<_70.ValidatorSigningInfo>): _70.ValidatorSigningInfo;
                fromAmino(object: _70.ValidatorSigningInfoAmino): _70.ValidatorSigningInfo;
                toAmino(message: _70.ValidatorSigningInfo): _70.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _70.ValidatorSigningInfoAminoMsg): _70.ValidatorSigningInfo;
                toAminoMsg(message: _70.ValidatorSigningInfo): _70.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _70.ValidatorSigningInfoProtoMsg): _70.ValidatorSigningInfo;
                toProto(message: _70.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _70.ValidatorSigningInfo): _70.ValidatorSigningInfoProtoMsg;
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
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _69.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QuerySigningInfoRequest;
                fromPartial(object: Partial<_69.QuerySigningInfoRequest>): _69.QuerySigningInfoRequest;
                fromAmino(object: _69.QuerySigningInfoRequestAmino): _69.QuerySigningInfoRequest;
                toAmino(message: _69.QuerySigningInfoRequest): _69.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _69.QuerySigningInfoRequestAminoMsg): _69.QuerySigningInfoRequest;
                toAminoMsg(message: _69.QuerySigningInfoRequest): _69.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _69.QuerySigningInfoRequestProtoMsg): _69.QuerySigningInfoRequest;
                toProto(message: _69.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _69.QuerySigningInfoRequest): _69.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _69.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QuerySigningInfoResponse;
                fromPartial(object: Partial<_69.QuerySigningInfoResponse>): _69.QuerySigningInfoResponse;
                fromAmino(object: _69.QuerySigningInfoResponseAmino): _69.QuerySigningInfoResponse;
                toAmino(message: _69.QuerySigningInfoResponse): _69.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _69.QuerySigningInfoResponseAminoMsg): _69.QuerySigningInfoResponse;
                toAminoMsg(message: _69.QuerySigningInfoResponse): _69.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _69.QuerySigningInfoResponseProtoMsg): _69.QuerySigningInfoResponse;
                toProto(message: _69.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _69.QuerySigningInfoResponse): _69.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _69.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QuerySigningInfosRequest;
                fromPartial(object: Partial<_69.QuerySigningInfosRequest>): _69.QuerySigningInfosRequest;
                fromAmino(object: _69.QuerySigningInfosRequestAmino): _69.QuerySigningInfosRequest;
                toAmino(message: _69.QuerySigningInfosRequest): _69.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _69.QuerySigningInfosRequestAminoMsg): _69.QuerySigningInfosRequest;
                toAminoMsg(message: _69.QuerySigningInfosRequest): _69.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _69.QuerySigningInfosRequestProtoMsg): _69.QuerySigningInfosRequest;
                toProto(message: _69.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _69.QuerySigningInfosRequest): _69.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _69.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QuerySigningInfosResponse;
                fromPartial(object: Partial<_69.QuerySigningInfosResponse>): _69.QuerySigningInfosResponse;
                fromAmino(object: _69.QuerySigningInfosResponseAmino): _69.QuerySigningInfosResponse;
                toAmino(message: _69.QuerySigningInfosResponse): _69.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _69.QuerySigningInfosResponseAminoMsg): _69.QuerySigningInfosResponse;
                toAminoMsg(message: _69.QuerySigningInfosResponse): _69.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _69.QuerySigningInfosResponseProtoMsg): _69.QuerySigningInfosResponse;
                toProto(message: _69.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _69.QuerySigningInfosResponse): _69.QuerySigningInfosResponseProtoMsg;
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
            SigningInfo: {
                typeUrl: string;
                encode(message: _68.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.SigningInfo;
                fromPartial(object: Partial<_68.SigningInfo>): _68.SigningInfo;
                fromAmino(object: _68.SigningInfoAmino): _68.SigningInfo;
                toAmino(message: _68.SigningInfo): _68.SigningInfoAmino;
                fromAminoMsg(object: _68.SigningInfoAminoMsg): _68.SigningInfo;
                toAminoMsg(message: _68.SigningInfo): _68.SigningInfoAminoMsg;
                fromProtoMsg(message: _68.SigningInfoProtoMsg): _68.SigningInfo;
                toProto(message: _68.SigningInfo): Uint8Array;
                toProtoMsg(message: _68.SigningInfo): _68.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _68.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.ValidatorMissedBlocks;
                fromPartial(object: Partial<_68.ValidatorMissedBlocks>): _68.ValidatorMissedBlocks;
                fromAmino(object: _68.ValidatorMissedBlocksAmino): _68.ValidatorMissedBlocks;
                toAmino(message: _68.ValidatorMissedBlocks): _68.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _68.ValidatorMissedBlocksAminoMsg): _68.ValidatorMissedBlocks;
                toAminoMsg(message: _68.ValidatorMissedBlocks): _68.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _68.ValidatorMissedBlocksProtoMsg): _68.ValidatorMissedBlocks;
                toProto(message: _68.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _68.ValidatorMissedBlocks): _68.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _68.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.MissedBlock;
                fromPartial(object: Partial<_68.MissedBlock>): _68.MissedBlock;
                fromAmino(object: _68.MissedBlockAmino): _68.MissedBlock;
                toAmino(message: _68.MissedBlock): _68.MissedBlockAmino;
                fromAminoMsg(object: _68.MissedBlockAminoMsg): _68.MissedBlock;
                toAminoMsg(message: _68.MissedBlock): _68.MissedBlockAminoMsg;
                fromProtoMsg(message: _68.MissedBlockProtoMsg): _68.MissedBlock;
                toProto(message: _68.MissedBlock): Uint8Array;
                toProtoMsg(message: _68.MissedBlock): _68.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _189.MsgClientImpl;
            QueryClientImpl: typeof _178.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _74.QueryValidatorsRequest): Promise<_74.QueryValidatorsResponse>;
                validator(request: _74.QueryValidatorRequest): Promise<_74.QueryValidatorResponse>;
                validatorDelegations(request: _74.QueryValidatorDelegationsRequest): Promise<_74.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _74.QueryValidatorUnbondingDelegationsRequest): Promise<_74.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _74.QueryDelegationRequest): Promise<_74.QueryDelegationResponse>;
                unbondingDelegation(request: _74.QueryUnbondingDelegationRequest): Promise<_74.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _74.QueryDelegatorDelegationsRequest): Promise<_74.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _74.QueryDelegatorUnbondingDelegationsRequest): Promise<_74.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _74.QueryRedelegationsRequest): Promise<_74.QueryRedelegationsResponse>;
                delegatorValidators(request: _74.QueryDelegatorValidatorsRequest): Promise<_74.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _74.QueryDelegatorValidatorRequest): Promise<_74.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _74.QueryHistoricalInfoRequest): Promise<_74.QueryHistoricalInfoResponse>;
                pool(request?: _74.QueryPoolRequest): Promise<_74.QueryPoolResponse>;
                params(request?: _74.QueryParamsRequest): Promise<_74.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _163.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _76.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _76.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _76.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _76.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _76.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _76.MsgCreateValidator): {
                        typeUrl: string;
                        value: _76.MsgCreateValidator;
                    };
                    editValidator(value: _76.MsgEditValidator): {
                        typeUrl: string;
                        value: _76.MsgEditValidator;
                    };
                    delegate(value: _76.MsgDelegate): {
                        typeUrl: string;
                        value: _76.MsgDelegate;
                    };
                    beginRedelegate(value: _76.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _76.MsgBeginRedelegate;
                    };
                    undelegate(value: _76.MsgUndelegate): {
                        typeUrl: string;
                        value: _76.MsgUndelegate;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _76.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _76.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _76.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _76.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _76.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _76.MsgCreateValidator): {
                        typeUrl: string;
                        value: _76.MsgCreateValidator;
                    };
                    editValidator(value: _76.MsgEditValidator): {
                        typeUrl: string;
                        value: _76.MsgEditValidator;
                    };
                    delegate(value: _76.MsgDelegate): {
                        typeUrl: string;
                        value: _76.MsgDelegate;
                    };
                    beginRedelegate(value: _76.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _76.MsgBeginRedelegate;
                    };
                    undelegate(value: _76.MsgUndelegate): {
                        typeUrl: string;
                        value: _76.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _76.MsgCreateValidator) => _76.MsgCreateValidatorAmino;
                    fromAmino: (object: _76.MsgCreateValidatorAmino) => _76.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _76.MsgEditValidator) => _76.MsgEditValidatorAmino;
                    fromAmino: (object: _76.MsgEditValidatorAmino) => _76.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _76.MsgDelegate) => _76.MsgDelegateAmino;
                    fromAmino: (object: _76.MsgDelegateAmino) => _76.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _76.MsgBeginRedelegate) => _76.MsgBeginRedelegateAmino;
                    fromAmino: (object: _76.MsgBeginRedelegateAmino) => _76.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _76.MsgUndelegate) => _76.MsgUndelegateAmino;
                    fromAmino: (object: _76.MsgUndelegateAmino) => _76.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _76.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgCreateValidator;
                fromPartial(object: Partial<_76.MsgCreateValidator>): _76.MsgCreateValidator;
                fromAmino(object: _76.MsgCreateValidatorAmino): _76.MsgCreateValidator;
                toAmino(message: _76.MsgCreateValidator): _76.MsgCreateValidatorAmino;
                fromAminoMsg(object: _76.MsgCreateValidatorAminoMsg): _76.MsgCreateValidator;
                toAminoMsg(message: _76.MsgCreateValidator): _76.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _76.MsgCreateValidatorProtoMsg): _76.MsgCreateValidator;
                toProto(message: _76.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _76.MsgCreateValidator): _76.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _76.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _76.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_76.MsgCreateValidatorResponse>): _76.MsgCreateValidatorResponse;
                fromAmino(_: _76.MsgCreateValidatorResponseAmino): _76.MsgCreateValidatorResponse;
                toAmino(_: _76.MsgCreateValidatorResponse): _76.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _76.MsgCreateValidatorResponseAminoMsg): _76.MsgCreateValidatorResponse;
                toAminoMsg(message: _76.MsgCreateValidatorResponse): _76.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _76.MsgCreateValidatorResponseProtoMsg): _76.MsgCreateValidatorResponse;
                toProto(message: _76.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _76.MsgCreateValidatorResponse): _76.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _76.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgEditValidator;
                fromPartial(object: Partial<_76.MsgEditValidator>): _76.MsgEditValidator;
                fromAmino(object: _76.MsgEditValidatorAmino): _76.MsgEditValidator;
                toAmino(message: _76.MsgEditValidator): _76.MsgEditValidatorAmino;
                fromAminoMsg(object: _76.MsgEditValidatorAminoMsg): _76.MsgEditValidator;
                toAminoMsg(message: _76.MsgEditValidator): _76.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _76.MsgEditValidatorProtoMsg): _76.MsgEditValidator;
                toProto(message: _76.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _76.MsgEditValidator): _76.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _76.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _76.MsgEditValidatorResponse;
                fromPartial(_: Partial<_76.MsgEditValidatorResponse>): _76.MsgEditValidatorResponse;
                fromAmino(_: _76.MsgEditValidatorResponseAmino): _76.MsgEditValidatorResponse;
                toAmino(_: _76.MsgEditValidatorResponse): _76.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _76.MsgEditValidatorResponseAminoMsg): _76.MsgEditValidatorResponse;
                toAminoMsg(message: _76.MsgEditValidatorResponse): _76.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _76.MsgEditValidatorResponseProtoMsg): _76.MsgEditValidatorResponse;
                toProto(message: _76.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _76.MsgEditValidatorResponse): _76.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _76.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgDelegate;
                fromPartial(object: Partial<_76.MsgDelegate>): _76.MsgDelegate;
                fromAmino(object: _76.MsgDelegateAmino): _76.MsgDelegate;
                toAmino(message: _76.MsgDelegate): _76.MsgDelegateAmino;
                fromAminoMsg(object: _76.MsgDelegateAminoMsg): _76.MsgDelegate;
                toAminoMsg(message: _76.MsgDelegate): _76.MsgDelegateAminoMsg;
                fromProtoMsg(message: _76.MsgDelegateProtoMsg): _76.MsgDelegate;
                toProto(message: _76.MsgDelegate): Uint8Array;
                toProtoMsg(message: _76.MsgDelegate): _76.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _76.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _76.MsgDelegateResponse;
                fromPartial(_: Partial<_76.MsgDelegateResponse>): _76.MsgDelegateResponse;
                fromAmino(_: _76.MsgDelegateResponseAmino): _76.MsgDelegateResponse;
                toAmino(_: _76.MsgDelegateResponse): _76.MsgDelegateResponseAmino;
                fromAminoMsg(object: _76.MsgDelegateResponseAminoMsg): _76.MsgDelegateResponse;
                toAminoMsg(message: _76.MsgDelegateResponse): _76.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _76.MsgDelegateResponseProtoMsg): _76.MsgDelegateResponse;
                toProto(message: _76.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _76.MsgDelegateResponse): _76.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _76.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgBeginRedelegate;
                fromPartial(object: Partial<_76.MsgBeginRedelegate>): _76.MsgBeginRedelegate;
                fromAmino(object: _76.MsgBeginRedelegateAmino): _76.MsgBeginRedelegate;
                toAmino(message: _76.MsgBeginRedelegate): _76.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _76.MsgBeginRedelegateAminoMsg): _76.MsgBeginRedelegate;
                toAminoMsg(message: _76.MsgBeginRedelegate): _76.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _76.MsgBeginRedelegateProtoMsg): _76.MsgBeginRedelegate;
                toProto(message: _76.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _76.MsgBeginRedelegate): _76.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _76.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_76.MsgBeginRedelegateResponse>): _76.MsgBeginRedelegateResponse;
                fromAmino(object: _76.MsgBeginRedelegateResponseAmino): _76.MsgBeginRedelegateResponse;
                toAmino(message: _76.MsgBeginRedelegateResponse): _76.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _76.MsgBeginRedelegateResponseAminoMsg): _76.MsgBeginRedelegateResponse;
                toAminoMsg(message: _76.MsgBeginRedelegateResponse): _76.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _76.MsgBeginRedelegateResponseProtoMsg): _76.MsgBeginRedelegateResponse;
                toProto(message: _76.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _76.MsgBeginRedelegateResponse): _76.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _76.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgUndelegate;
                fromPartial(object: Partial<_76.MsgUndelegate>): _76.MsgUndelegate;
                fromAmino(object: _76.MsgUndelegateAmino): _76.MsgUndelegate;
                toAmino(message: _76.MsgUndelegate): _76.MsgUndelegateAmino;
                fromAminoMsg(object: _76.MsgUndelegateAminoMsg): _76.MsgUndelegate;
                toAminoMsg(message: _76.MsgUndelegate): _76.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _76.MsgUndelegateProtoMsg): _76.MsgUndelegate;
                toProto(message: _76.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _76.MsgUndelegate): _76.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _76.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgUndelegateResponse;
                fromPartial(object: Partial<_76.MsgUndelegateResponse>): _76.MsgUndelegateResponse;
                fromAmino(object: _76.MsgUndelegateResponseAmino): _76.MsgUndelegateResponse;
                toAmino(message: _76.MsgUndelegateResponse): _76.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _76.MsgUndelegateResponseAminoMsg): _76.MsgUndelegateResponse;
                toAminoMsg(message: _76.MsgUndelegateResponse): _76.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _76.MsgUndelegateResponseProtoMsg): _76.MsgUndelegateResponse;
                toProto(message: _76.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _76.MsgUndelegateResponse): _76.MsgUndelegateResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _75.BondStatus;
            bondStatusToJSON(object: _75.BondStatus): string;
            BondStatus: typeof _75.BondStatus;
            BondStatusSDKType: typeof _75.BondStatus;
            BondStatusAmino: typeof _75.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _75.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.HistoricalInfo;
                fromPartial(object: Partial<_75.HistoricalInfo>): _75.HistoricalInfo;
                fromAmino(object: _75.HistoricalInfoAmino): _75.HistoricalInfo;
                toAmino(message: _75.HistoricalInfo): _75.HistoricalInfoAmino;
                fromAminoMsg(object: _75.HistoricalInfoAminoMsg): _75.HistoricalInfo;
                toAminoMsg(message: _75.HistoricalInfo): _75.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _75.HistoricalInfoProtoMsg): _75.HistoricalInfo;
                toProto(message: _75.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _75.HistoricalInfo): _75.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _75.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.CommissionRates;
                fromPartial(object: Partial<_75.CommissionRates>): _75.CommissionRates;
                fromAmino(object: _75.CommissionRatesAmino): _75.CommissionRates;
                toAmino(message: _75.CommissionRates): _75.CommissionRatesAmino;
                fromAminoMsg(object: _75.CommissionRatesAminoMsg): _75.CommissionRates;
                toAminoMsg(message: _75.CommissionRates): _75.CommissionRatesAminoMsg;
                fromProtoMsg(message: _75.CommissionRatesProtoMsg): _75.CommissionRates;
                toProto(message: _75.CommissionRates): Uint8Array;
                toProtoMsg(message: _75.CommissionRates): _75.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _75.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.Commission;
                fromPartial(object: Partial<_75.Commission>): _75.Commission;
                fromAmino(object: _75.CommissionAmino): _75.Commission;
                toAmino(message: _75.Commission): _75.CommissionAmino;
                fromAminoMsg(object: _75.CommissionAminoMsg): _75.Commission;
                toAminoMsg(message: _75.Commission): _75.CommissionAminoMsg;
                fromProtoMsg(message: _75.CommissionProtoMsg): _75.Commission;
                toProto(message: _75.Commission): Uint8Array;
                toProtoMsg(message: _75.Commission): _75.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _75.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.Description;
                fromPartial(object: Partial<_75.Description>): _75.Description;
                fromAmino(object: _75.DescriptionAmino): _75.Description;
                toAmino(message: _75.Description): _75.DescriptionAmino;
                fromAminoMsg(object: _75.DescriptionAminoMsg): _75.Description;
                toAminoMsg(message: _75.Description): _75.DescriptionAminoMsg;
                fromProtoMsg(message: _75.DescriptionProtoMsg): _75.Description;
                toProto(message: _75.Description): Uint8Array;
                toProtoMsg(message: _75.Description): _75.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _75.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.Validator;
                fromPartial(object: Partial<_75.Validator>): _75.Validator;
                fromAmino(object: _75.ValidatorAmino): _75.Validator;
                toAmino(message: _75.Validator): _75.ValidatorAmino;
                fromAminoMsg(object: _75.ValidatorAminoMsg): _75.Validator;
                toAminoMsg(message: _75.Validator): _75.ValidatorAminoMsg;
                fromProtoMsg(message: _75.ValidatorProtoMsg): _75.Validator;
                toProto(message: _75.Validator): Uint8Array;
                toProtoMsg(message: _75.Validator): _75.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _75.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.ValAddresses;
                fromPartial(object: Partial<_75.ValAddresses>): _75.ValAddresses;
                fromAmino(object: _75.ValAddressesAmino): _75.ValAddresses;
                toAmino(message: _75.ValAddresses): _75.ValAddressesAmino;
                fromAminoMsg(object: _75.ValAddressesAminoMsg): _75.ValAddresses;
                toAminoMsg(message: _75.ValAddresses): _75.ValAddressesAminoMsg;
                fromProtoMsg(message: _75.ValAddressesProtoMsg): _75.ValAddresses;
                toProto(message: _75.ValAddresses): Uint8Array;
                toProtoMsg(message: _75.ValAddresses): _75.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _75.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.DVPair;
                fromPartial(object: Partial<_75.DVPair>): _75.DVPair;
                fromAmino(object: _75.DVPairAmino): _75.DVPair;
                toAmino(message: _75.DVPair): _75.DVPairAmino;
                fromAminoMsg(object: _75.DVPairAminoMsg): _75.DVPair;
                toAminoMsg(message: _75.DVPair): _75.DVPairAminoMsg;
                fromProtoMsg(message: _75.DVPairProtoMsg): _75.DVPair;
                toProto(message: _75.DVPair): Uint8Array;
                toProtoMsg(message: _75.DVPair): _75.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _75.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.DVPairs;
                fromPartial(object: Partial<_75.DVPairs>): _75.DVPairs;
                fromAmino(object: _75.DVPairsAmino): _75.DVPairs;
                toAmino(message: _75.DVPairs): _75.DVPairsAmino;
                fromAminoMsg(object: _75.DVPairsAminoMsg): _75.DVPairs;
                toAminoMsg(message: _75.DVPairs): _75.DVPairsAminoMsg;
                fromProtoMsg(message: _75.DVPairsProtoMsg): _75.DVPairs;
                toProto(message: _75.DVPairs): Uint8Array;
                toProtoMsg(message: _75.DVPairs): _75.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _75.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.DVVTriplet;
                fromPartial(object: Partial<_75.DVVTriplet>): _75.DVVTriplet;
                fromAmino(object: _75.DVVTripletAmino): _75.DVVTriplet;
                toAmino(message: _75.DVVTriplet): _75.DVVTripletAmino;
                fromAminoMsg(object: _75.DVVTripletAminoMsg): _75.DVVTriplet;
                toAminoMsg(message: _75.DVVTriplet): _75.DVVTripletAminoMsg;
                fromProtoMsg(message: _75.DVVTripletProtoMsg): _75.DVVTriplet;
                toProto(message: _75.DVVTriplet): Uint8Array;
                toProtoMsg(message: _75.DVVTriplet): _75.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _75.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.DVVTriplets;
                fromPartial(object: Partial<_75.DVVTriplets>): _75.DVVTriplets;
                fromAmino(object: _75.DVVTripletsAmino): _75.DVVTriplets;
                toAmino(message: _75.DVVTriplets): _75.DVVTripletsAmino;
                fromAminoMsg(object: _75.DVVTripletsAminoMsg): _75.DVVTriplets;
                toAminoMsg(message: _75.DVVTriplets): _75.DVVTripletsAminoMsg;
                fromProtoMsg(message: _75.DVVTripletsProtoMsg): _75.DVVTriplets;
                toProto(message: _75.DVVTriplets): Uint8Array;
                toProtoMsg(message: _75.DVVTriplets): _75.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _75.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.Delegation;
                fromPartial(object: Partial<_75.Delegation>): _75.Delegation;
                fromAmino(object: _75.DelegationAmino): _75.Delegation;
                toAmino(message: _75.Delegation): _75.DelegationAmino;
                fromAminoMsg(object: _75.DelegationAminoMsg): _75.Delegation;
                toAminoMsg(message: _75.Delegation): _75.DelegationAminoMsg;
                fromProtoMsg(message: _75.DelegationProtoMsg): _75.Delegation;
                toProto(message: _75.Delegation): Uint8Array;
                toProtoMsg(message: _75.Delegation): _75.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _75.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.UnbondingDelegation;
                fromPartial(object: Partial<_75.UnbondingDelegation>): _75.UnbondingDelegation;
                fromAmino(object: _75.UnbondingDelegationAmino): _75.UnbondingDelegation;
                toAmino(message: _75.UnbondingDelegation): _75.UnbondingDelegationAmino;
                fromAminoMsg(object: _75.UnbondingDelegationAminoMsg): _75.UnbondingDelegation;
                toAminoMsg(message: _75.UnbondingDelegation): _75.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _75.UnbondingDelegationProtoMsg): _75.UnbondingDelegation;
                toProto(message: _75.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _75.UnbondingDelegation): _75.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _75.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.UnbondingDelegationEntry;
                fromPartial(object: Partial<_75.UnbondingDelegationEntry>): _75.UnbondingDelegationEntry;
                fromAmino(object: _75.UnbondingDelegationEntryAmino): _75.UnbondingDelegationEntry;
                toAmino(message: _75.UnbondingDelegationEntry): _75.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _75.UnbondingDelegationEntryAminoMsg): _75.UnbondingDelegationEntry;
                toAminoMsg(message: _75.UnbondingDelegationEntry): _75.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _75.UnbondingDelegationEntryProtoMsg): _75.UnbondingDelegationEntry;
                toProto(message: _75.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _75.UnbondingDelegationEntry): _75.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _75.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.RedelegationEntry;
                fromPartial(object: Partial<_75.RedelegationEntry>): _75.RedelegationEntry;
                fromAmino(object: _75.RedelegationEntryAmino): _75.RedelegationEntry;
                toAmino(message: _75.RedelegationEntry): _75.RedelegationEntryAmino;
                fromAminoMsg(object: _75.RedelegationEntryAminoMsg): _75.RedelegationEntry;
                toAminoMsg(message: _75.RedelegationEntry): _75.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _75.RedelegationEntryProtoMsg): _75.RedelegationEntry;
                toProto(message: _75.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _75.RedelegationEntry): _75.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _75.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.Redelegation;
                fromPartial(object: Partial<_75.Redelegation>): _75.Redelegation;
                fromAmino(object: _75.RedelegationAmino): _75.Redelegation;
                toAmino(message: _75.Redelegation): _75.RedelegationAmino;
                fromAminoMsg(object: _75.RedelegationAminoMsg): _75.Redelegation;
                toAminoMsg(message: _75.Redelegation): _75.RedelegationAminoMsg;
                fromProtoMsg(message: _75.RedelegationProtoMsg): _75.Redelegation;
                toProto(message: _75.Redelegation): Uint8Array;
                toProtoMsg(message: _75.Redelegation): _75.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _75.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.Params;
                fromPartial(object: Partial<_75.Params>): _75.Params;
                fromAmino(object: _75.ParamsAmino): _75.Params;
                toAmino(message: _75.Params): _75.ParamsAmino;
                fromAminoMsg(object: _75.ParamsAminoMsg): _75.Params;
                toAminoMsg(message: _75.Params): _75.ParamsAminoMsg;
                fromProtoMsg(message: _75.ParamsProtoMsg): _75.Params;
                toProto(message: _75.Params): Uint8Array;
                toProtoMsg(message: _75.Params): _75.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _75.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.DelegationResponse;
                fromPartial(object: Partial<_75.DelegationResponse>): _75.DelegationResponse;
                fromAmino(object: _75.DelegationResponseAmino): _75.DelegationResponse;
                toAmino(message: _75.DelegationResponse): _75.DelegationResponseAmino;
                fromAminoMsg(object: _75.DelegationResponseAminoMsg): _75.DelegationResponse;
                toAminoMsg(message: _75.DelegationResponse): _75.DelegationResponseAminoMsg;
                fromProtoMsg(message: _75.DelegationResponseProtoMsg): _75.DelegationResponse;
                toProto(message: _75.DelegationResponse): Uint8Array;
                toProtoMsg(message: _75.DelegationResponse): _75.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _75.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.RedelegationEntryResponse;
                fromPartial(object: Partial<_75.RedelegationEntryResponse>): _75.RedelegationEntryResponse;
                fromAmino(object: _75.RedelegationEntryResponseAmino): _75.RedelegationEntryResponse;
                toAmino(message: _75.RedelegationEntryResponse): _75.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _75.RedelegationEntryResponseAminoMsg): _75.RedelegationEntryResponse;
                toAminoMsg(message: _75.RedelegationEntryResponse): _75.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _75.RedelegationEntryResponseProtoMsg): _75.RedelegationEntryResponse;
                toProto(message: _75.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _75.RedelegationEntryResponse): _75.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _75.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.RedelegationResponse;
                fromPartial(object: Partial<_75.RedelegationResponse>): _75.RedelegationResponse;
                fromAmino(object: _75.RedelegationResponseAmino): _75.RedelegationResponse;
                toAmino(message: _75.RedelegationResponse): _75.RedelegationResponseAmino;
                fromAminoMsg(object: _75.RedelegationResponseAminoMsg): _75.RedelegationResponse;
                toAminoMsg(message: _75.RedelegationResponse): _75.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _75.RedelegationResponseProtoMsg): _75.RedelegationResponse;
                toProto(message: _75.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _75.RedelegationResponse): _75.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _75.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.Pool;
                fromPartial(object: Partial<_75.Pool>): _75.Pool;
                fromAmino(object: _75.PoolAmino): _75.Pool;
                toAmino(message: _75.Pool): _75.PoolAmino;
                fromAminoMsg(object: _75.PoolAminoMsg): _75.Pool;
                toAminoMsg(message: _75.Pool): _75.PoolAminoMsg;
                fromProtoMsg(message: _75.PoolProtoMsg): _75.Pool;
                toProto(message: _75.Pool): Uint8Array;
                toProtoMsg(message: _75.Pool): _75.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _74.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryValidatorsRequest;
                fromPartial(object: Partial<_74.QueryValidatorsRequest>): _74.QueryValidatorsRequest;
                fromAmino(object: _74.QueryValidatorsRequestAmino): _74.QueryValidatorsRequest;
                toAmino(message: _74.QueryValidatorsRequest): _74.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _74.QueryValidatorsRequestAminoMsg): _74.QueryValidatorsRequest;
                toAminoMsg(message: _74.QueryValidatorsRequest): _74.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _74.QueryValidatorsRequestProtoMsg): _74.QueryValidatorsRequest;
                toProto(message: _74.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _74.QueryValidatorsRequest): _74.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _74.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryValidatorsResponse;
                fromPartial(object: Partial<_74.QueryValidatorsResponse>): _74.QueryValidatorsResponse;
                fromAmino(object: _74.QueryValidatorsResponseAmino): _74.QueryValidatorsResponse;
                toAmino(message: _74.QueryValidatorsResponse): _74.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _74.QueryValidatorsResponseAminoMsg): _74.QueryValidatorsResponse;
                toAminoMsg(message: _74.QueryValidatorsResponse): _74.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _74.QueryValidatorsResponseProtoMsg): _74.QueryValidatorsResponse;
                toProto(message: _74.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _74.QueryValidatorsResponse): _74.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _74.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryValidatorRequest;
                fromPartial(object: Partial<_74.QueryValidatorRequest>): _74.QueryValidatorRequest;
                fromAmino(object: _74.QueryValidatorRequestAmino): _74.QueryValidatorRequest;
                toAmino(message: _74.QueryValidatorRequest): _74.QueryValidatorRequestAmino;
                fromAminoMsg(object: _74.QueryValidatorRequestAminoMsg): _74.QueryValidatorRequest;
                toAminoMsg(message: _74.QueryValidatorRequest): _74.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _74.QueryValidatorRequestProtoMsg): _74.QueryValidatorRequest;
                toProto(message: _74.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _74.QueryValidatorRequest): _74.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _74.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryValidatorResponse;
                fromPartial(object: Partial<_74.QueryValidatorResponse>): _74.QueryValidatorResponse;
                fromAmino(object: _74.QueryValidatorResponseAmino): _74.QueryValidatorResponse;
                toAmino(message: _74.QueryValidatorResponse): _74.QueryValidatorResponseAmino;
                fromAminoMsg(object: _74.QueryValidatorResponseAminoMsg): _74.QueryValidatorResponse;
                toAminoMsg(message: _74.QueryValidatorResponse): _74.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _74.QueryValidatorResponseProtoMsg): _74.QueryValidatorResponse;
                toProto(message: _74.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _74.QueryValidatorResponse): _74.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _74.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_74.QueryValidatorDelegationsRequest>): _74.QueryValidatorDelegationsRequest;
                fromAmino(object: _74.QueryValidatorDelegationsRequestAmino): _74.QueryValidatorDelegationsRequest;
                toAmino(message: _74.QueryValidatorDelegationsRequest): _74.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _74.QueryValidatorDelegationsRequestAminoMsg): _74.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _74.QueryValidatorDelegationsRequest): _74.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _74.QueryValidatorDelegationsRequestProtoMsg): _74.QueryValidatorDelegationsRequest;
                toProto(message: _74.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _74.QueryValidatorDelegationsRequest): _74.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _74.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_74.QueryValidatorDelegationsResponse>): _74.QueryValidatorDelegationsResponse;
                fromAmino(object: _74.QueryValidatorDelegationsResponseAmino): _74.QueryValidatorDelegationsResponse;
                toAmino(message: _74.QueryValidatorDelegationsResponse): _74.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _74.QueryValidatorDelegationsResponseAminoMsg): _74.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _74.QueryValidatorDelegationsResponse): _74.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _74.QueryValidatorDelegationsResponseProtoMsg): _74.QueryValidatorDelegationsResponse;
                toProto(message: _74.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _74.QueryValidatorDelegationsResponse): _74.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _74.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_74.QueryValidatorUnbondingDelegationsRequest>): _74.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _74.QueryValidatorUnbondingDelegationsRequestAmino): _74.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _74.QueryValidatorUnbondingDelegationsRequest): _74.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _74.QueryValidatorUnbondingDelegationsRequestAminoMsg): _74.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _74.QueryValidatorUnbondingDelegationsRequest): _74.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _74.QueryValidatorUnbondingDelegationsRequestProtoMsg): _74.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _74.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _74.QueryValidatorUnbondingDelegationsRequest): _74.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _74.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_74.QueryValidatorUnbondingDelegationsResponse>): _74.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _74.QueryValidatorUnbondingDelegationsResponseAmino): _74.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _74.QueryValidatorUnbondingDelegationsResponse): _74.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _74.QueryValidatorUnbondingDelegationsResponseAminoMsg): _74.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _74.QueryValidatorUnbondingDelegationsResponse): _74.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _74.QueryValidatorUnbondingDelegationsResponseProtoMsg): _74.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _74.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _74.QueryValidatorUnbondingDelegationsResponse): _74.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _74.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryDelegationRequest;
                fromPartial(object: Partial<_74.QueryDelegationRequest>): _74.QueryDelegationRequest;
                fromAmino(object: _74.QueryDelegationRequestAmino): _74.QueryDelegationRequest;
                toAmino(message: _74.QueryDelegationRequest): _74.QueryDelegationRequestAmino;
                fromAminoMsg(object: _74.QueryDelegationRequestAminoMsg): _74.QueryDelegationRequest;
                toAminoMsg(message: _74.QueryDelegationRequest): _74.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _74.QueryDelegationRequestProtoMsg): _74.QueryDelegationRequest;
                toProto(message: _74.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _74.QueryDelegationRequest): _74.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _74.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryDelegationResponse;
                fromPartial(object: Partial<_74.QueryDelegationResponse>): _74.QueryDelegationResponse;
                fromAmino(object: _74.QueryDelegationResponseAmino): _74.QueryDelegationResponse;
                toAmino(message: _74.QueryDelegationResponse): _74.QueryDelegationResponseAmino;
                fromAminoMsg(object: _74.QueryDelegationResponseAminoMsg): _74.QueryDelegationResponse;
                toAminoMsg(message: _74.QueryDelegationResponse): _74.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _74.QueryDelegationResponseProtoMsg): _74.QueryDelegationResponse;
                toProto(message: _74.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _74.QueryDelegationResponse): _74.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _74.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_74.QueryUnbondingDelegationRequest>): _74.QueryUnbondingDelegationRequest;
                fromAmino(object: _74.QueryUnbondingDelegationRequestAmino): _74.QueryUnbondingDelegationRequest;
                toAmino(message: _74.QueryUnbondingDelegationRequest): _74.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _74.QueryUnbondingDelegationRequestAminoMsg): _74.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _74.QueryUnbondingDelegationRequest): _74.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _74.QueryUnbondingDelegationRequestProtoMsg): _74.QueryUnbondingDelegationRequest;
                toProto(message: _74.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _74.QueryUnbondingDelegationRequest): _74.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _74.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_74.QueryUnbondingDelegationResponse>): _74.QueryUnbondingDelegationResponse;
                fromAmino(object: _74.QueryUnbondingDelegationResponseAmino): _74.QueryUnbondingDelegationResponse;
                toAmino(message: _74.QueryUnbondingDelegationResponse): _74.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _74.QueryUnbondingDelegationResponseAminoMsg): _74.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _74.QueryUnbondingDelegationResponse): _74.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _74.QueryUnbondingDelegationResponseProtoMsg): _74.QueryUnbondingDelegationResponse;
                toProto(message: _74.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _74.QueryUnbondingDelegationResponse): _74.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _74.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_74.QueryDelegatorDelegationsRequest>): _74.QueryDelegatorDelegationsRequest;
                fromAmino(object: _74.QueryDelegatorDelegationsRequestAmino): _74.QueryDelegatorDelegationsRequest;
                toAmino(message: _74.QueryDelegatorDelegationsRequest): _74.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _74.QueryDelegatorDelegationsRequestAminoMsg): _74.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _74.QueryDelegatorDelegationsRequest): _74.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _74.QueryDelegatorDelegationsRequestProtoMsg): _74.QueryDelegatorDelegationsRequest;
                toProto(message: _74.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _74.QueryDelegatorDelegationsRequest): _74.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _74.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_74.QueryDelegatorDelegationsResponse>): _74.QueryDelegatorDelegationsResponse;
                fromAmino(object: _74.QueryDelegatorDelegationsResponseAmino): _74.QueryDelegatorDelegationsResponse;
                toAmino(message: _74.QueryDelegatorDelegationsResponse): _74.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _74.QueryDelegatorDelegationsResponseAminoMsg): _74.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _74.QueryDelegatorDelegationsResponse): _74.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _74.QueryDelegatorDelegationsResponseProtoMsg): _74.QueryDelegatorDelegationsResponse;
                toProto(message: _74.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _74.QueryDelegatorDelegationsResponse): _74.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _74.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_74.QueryDelegatorUnbondingDelegationsRequest>): _74.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _74.QueryDelegatorUnbondingDelegationsRequestAmino): _74.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _74.QueryDelegatorUnbondingDelegationsRequest): _74.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _74.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _74.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _74.QueryDelegatorUnbondingDelegationsRequest): _74.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _74.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _74.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _74.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _74.QueryDelegatorUnbondingDelegationsRequest): _74.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _74.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_74.QueryDelegatorUnbondingDelegationsResponse>): _74.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _74.QueryDelegatorUnbondingDelegationsResponseAmino): _74.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _74.QueryDelegatorUnbondingDelegationsResponse): _74.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _74.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _74.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _74.QueryDelegatorUnbondingDelegationsResponse): _74.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _74.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _74.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _74.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _74.QueryDelegatorUnbondingDelegationsResponse): _74.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _74.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryRedelegationsRequest;
                fromPartial(object: Partial<_74.QueryRedelegationsRequest>): _74.QueryRedelegationsRequest;
                fromAmino(object: _74.QueryRedelegationsRequestAmino): _74.QueryRedelegationsRequest;
                toAmino(message: _74.QueryRedelegationsRequest): _74.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _74.QueryRedelegationsRequestAminoMsg): _74.QueryRedelegationsRequest;
                toAminoMsg(message: _74.QueryRedelegationsRequest): _74.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _74.QueryRedelegationsRequestProtoMsg): _74.QueryRedelegationsRequest;
                toProto(message: _74.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _74.QueryRedelegationsRequest): _74.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _74.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryRedelegationsResponse;
                fromPartial(object: Partial<_74.QueryRedelegationsResponse>): _74.QueryRedelegationsResponse;
                fromAmino(object: _74.QueryRedelegationsResponseAmino): _74.QueryRedelegationsResponse;
                toAmino(message: _74.QueryRedelegationsResponse): _74.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _74.QueryRedelegationsResponseAminoMsg): _74.QueryRedelegationsResponse;
                toAminoMsg(message: _74.QueryRedelegationsResponse): _74.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _74.QueryRedelegationsResponseProtoMsg): _74.QueryRedelegationsResponse;
                toProto(message: _74.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _74.QueryRedelegationsResponse): _74.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _74.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_74.QueryDelegatorValidatorsRequest>): _74.QueryDelegatorValidatorsRequest;
                fromAmino(object: _74.QueryDelegatorValidatorsRequestAmino): _74.QueryDelegatorValidatorsRequest;
                toAmino(message: _74.QueryDelegatorValidatorsRequest): _74.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _74.QueryDelegatorValidatorsRequestAminoMsg): _74.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _74.QueryDelegatorValidatorsRequest): _74.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _74.QueryDelegatorValidatorsRequestProtoMsg): _74.QueryDelegatorValidatorsRequest;
                toProto(message: _74.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _74.QueryDelegatorValidatorsRequest): _74.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _74.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_74.QueryDelegatorValidatorsResponse>): _74.QueryDelegatorValidatorsResponse;
                fromAmino(object: _74.QueryDelegatorValidatorsResponseAmino): _74.QueryDelegatorValidatorsResponse;
                toAmino(message: _74.QueryDelegatorValidatorsResponse): _74.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _74.QueryDelegatorValidatorsResponseAminoMsg): _74.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _74.QueryDelegatorValidatorsResponse): _74.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _74.QueryDelegatorValidatorsResponseProtoMsg): _74.QueryDelegatorValidatorsResponse;
                toProto(message: _74.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _74.QueryDelegatorValidatorsResponse): _74.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _74.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_74.QueryDelegatorValidatorRequest>): _74.QueryDelegatorValidatorRequest;
                fromAmino(object: _74.QueryDelegatorValidatorRequestAmino): _74.QueryDelegatorValidatorRequest;
                toAmino(message: _74.QueryDelegatorValidatorRequest): _74.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _74.QueryDelegatorValidatorRequestAminoMsg): _74.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _74.QueryDelegatorValidatorRequest): _74.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _74.QueryDelegatorValidatorRequestProtoMsg): _74.QueryDelegatorValidatorRequest;
                toProto(message: _74.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _74.QueryDelegatorValidatorRequest): _74.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _74.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_74.QueryDelegatorValidatorResponse>): _74.QueryDelegatorValidatorResponse;
                fromAmino(object: _74.QueryDelegatorValidatorResponseAmino): _74.QueryDelegatorValidatorResponse;
                toAmino(message: _74.QueryDelegatorValidatorResponse): _74.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _74.QueryDelegatorValidatorResponseAminoMsg): _74.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _74.QueryDelegatorValidatorResponse): _74.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _74.QueryDelegatorValidatorResponseProtoMsg): _74.QueryDelegatorValidatorResponse;
                toProto(message: _74.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _74.QueryDelegatorValidatorResponse): _74.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _74.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_74.QueryHistoricalInfoRequest>): _74.QueryHistoricalInfoRequest;
                fromAmino(object: _74.QueryHistoricalInfoRequestAmino): _74.QueryHistoricalInfoRequest;
                toAmino(message: _74.QueryHistoricalInfoRequest): _74.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _74.QueryHistoricalInfoRequestAminoMsg): _74.QueryHistoricalInfoRequest;
                toAminoMsg(message: _74.QueryHistoricalInfoRequest): _74.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _74.QueryHistoricalInfoRequestProtoMsg): _74.QueryHistoricalInfoRequest;
                toProto(message: _74.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _74.QueryHistoricalInfoRequest): _74.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _74.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_74.QueryHistoricalInfoResponse>): _74.QueryHistoricalInfoResponse;
                fromAmino(object: _74.QueryHistoricalInfoResponseAmino): _74.QueryHistoricalInfoResponse;
                toAmino(message: _74.QueryHistoricalInfoResponse): _74.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _74.QueryHistoricalInfoResponseAminoMsg): _74.QueryHistoricalInfoResponse;
                toAminoMsg(message: _74.QueryHistoricalInfoResponse): _74.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _74.QueryHistoricalInfoResponseProtoMsg): _74.QueryHistoricalInfoResponse;
                toProto(message: _74.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _74.QueryHistoricalInfoResponse): _74.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _74.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _74.QueryPoolRequest;
                fromPartial(_: Partial<_74.QueryPoolRequest>): _74.QueryPoolRequest;
                fromAmino(_: _74.QueryPoolRequestAmino): _74.QueryPoolRequest;
                toAmino(_: _74.QueryPoolRequest): _74.QueryPoolRequestAmino;
                fromAminoMsg(object: _74.QueryPoolRequestAminoMsg): _74.QueryPoolRequest;
                toAminoMsg(message: _74.QueryPoolRequest): _74.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _74.QueryPoolRequestProtoMsg): _74.QueryPoolRequest;
                toProto(message: _74.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _74.QueryPoolRequest): _74.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _74.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryPoolResponse;
                fromPartial(object: Partial<_74.QueryPoolResponse>): _74.QueryPoolResponse;
                fromAmino(object: _74.QueryPoolResponseAmino): _74.QueryPoolResponse;
                toAmino(message: _74.QueryPoolResponse): _74.QueryPoolResponseAmino;
                fromAminoMsg(object: _74.QueryPoolResponseAminoMsg): _74.QueryPoolResponse;
                toAminoMsg(message: _74.QueryPoolResponse): _74.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _74.QueryPoolResponseProtoMsg): _74.QueryPoolResponse;
                toProto(message: _74.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _74.QueryPoolResponse): _74.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _74.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _74.QueryParamsRequest;
                fromPartial(_: Partial<_74.QueryParamsRequest>): _74.QueryParamsRequest;
                fromAmino(_: _74.QueryParamsRequestAmino): _74.QueryParamsRequest;
                toAmino(_: _74.QueryParamsRequest): _74.QueryParamsRequestAmino;
                fromAminoMsg(object: _74.QueryParamsRequestAminoMsg): _74.QueryParamsRequest;
                toAminoMsg(message: _74.QueryParamsRequest): _74.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _74.QueryParamsRequestProtoMsg): _74.QueryParamsRequest;
                toProto(message: _74.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _74.QueryParamsRequest): _74.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _74.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryParamsResponse;
                fromPartial(object: Partial<_74.QueryParamsResponse>): _74.QueryParamsResponse;
                fromAmino(object: _74.QueryParamsResponseAmino): _74.QueryParamsResponse;
                toAmino(message: _74.QueryParamsResponse): _74.QueryParamsResponseAmino;
                fromAminoMsg(object: _74.QueryParamsResponseAminoMsg): _74.QueryParamsResponse;
                toAminoMsg(message: _74.QueryParamsResponse): _74.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _74.QueryParamsResponseProtoMsg): _74.QueryParamsResponse;
                toProto(message: _74.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _74.QueryParamsResponse): _74.QueryParamsResponseProtoMsg;
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
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _73.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.LastValidatorPower;
                fromPartial(object: Partial<_73.LastValidatorPower>): _73.LastValidatorPower;
                fromAmino(object: _73.LastValidatorPowerAmino): _73.LastValidatorPower;
                toAmino(message: _73.LastValidatorPower): _73.LastValidatorPowerAmino;
                fromAminoMsg(object: _73.LastValidatorPowerAminoMsg): _73.LastValidatorPower;
                toAminoMsg(message: _73.LastValidatorPower): _73.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _73.LastValidatorPowerProtoMsg): _73.LastValidatorPower;
                toProto(message: _73.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _73.LastValidatorPower): _73.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _72.AuthorizationType;
            authorizationTypeToJSON(object: _72.AuthorizationType): string;
            AuthorizationType: typeof _72.AuthorizationType;
            AuthorizationTypeSDKType: typeof _72.AuthorizationType;
            AuthorizationTypeAmino: typeof _72.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _72.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.StakeAuthorization;
                fromPartial(object: Partial<_72.StakeAuthorization>): _72.StakeAuthorization;
                fromAmino(object: _72.StakeAuthorizationAmino): _72.StakeAuthorization;
                toAmino(message: _72.StakeAuthorization): _72.StakeAuthorizationAmino;
                fromAminoMsg(object: _72.StakeAuthorizationAminoMsg): _72.StakeAuthorization;
                toAminoMsg(message: _72.StakeAuthorization): _72.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _72.StakeAuthorizationProtoMsg): _72.StakeAuthorization;
                toProto(message: _72.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _72.StakeAuthorization): _72.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _72.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.StakeAuthorization_Validators;
                fromPartial(object: Partial<_72.StakeAuthorization_Validators>): _72.StakeAuthorization_Validators;
                fromAmino(object: _72.StakeAuthorization_ValidatorsAmino): _72.StakeAuthorization_Validators;
                toAmino(message: _72.StakeAuthorization_Validators): _72.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _72.StakeAuthorization_ValidatorsAminoMsg): _72.StakeAuthorization_Validators;
                toAminoMsg(message: _72.StakeAuthorization_Validators): _72.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _72.StakeAuthorization_ValidatorsProtoMsg): _72.StakeAuthorization_Validators;
                toProto(message: _72.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _72.StakeAuthorization_Validators): _72.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _77.SignMode;
                signModeToJSON(object: _77.SignMode): string;
                SignMode: typeof _77.SignMode;
                SignModeSDKType: typeof _77.SignMode;
                SignModeAmino: typeof _77.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _77.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.SignatureDescriptors;
                    fromPartial(object: Partial<_77.SignatureDescriptors>): _77.SignatureDescriptors;
                    fromAmino(object: _77.SignatureDescriptorsAmino): _77.SignatureDescriptors;
                    toAmino(message: _77.SignatureDescriptors): _77.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _77.SignatureDescriptorsAminoMsg): _77.SignatureDescriptors;
                    toAminoMsg(message: _77.SignatureDescriptors): _77.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _77.SignatureDescriptorsProtoMsg): _77.SignatureDescriptors;
                    toProto(message: _77.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _77.SignatureDescriptors): _77.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _77.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.SignatureDescriptor;
                    fromPartial(object: Partial<_77.SignatureDescriptor>): _77.SignatureDescriptor;
                    fromAmino(object: _77.SignatureDescriptorAmino): _77.SignatureDescriptor;
                    toAmino(message: _77.SignatureDescriptor): _77.SignatureDescriptorAmino;
                    fromAminoMsg(object: _77.SignatureDescriptorAminoMsg): _77.SignatureDescriptor;
                    toAminoMsg(message: _77.SignatureDescriptor): _77.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _77.SignatureDescriptorProtoMsg): _77.SignatureDescriptor;
                    toProto(message: _77.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _77.SignatureDescriptor): _77.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _77.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_77.SignatureDescriptor_Data>): _77.SignatureDescriptor_Data;
                    fromAmino(object: _77.SignatureDescriptor_DataAmino): _77.SignatureDescriptor_Data;
                    toAmino(message: _77.SignatureDescriptor_Data): _77.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _77.SignatureDescriptor_DataAminoMsg): _77.SignatureDescriptor_Data;
                    toAminoMsg(message: _77.SignatureDescriptor_Data): _77.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _77.SignatureDescriptor_DataProtoMsg): _77.SignatureDescriptor_Data;
                    toProto(message: _77.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _77.SignatureDescriptor_Data): _77.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _77.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_77.SignatureDescriptor_Data_Single>): _77.SignatureDescriptor_Data_Single;
                    fromAmino(object: _77.SignatureDescriptor_Data_SingleAmino): _77.SignatureDescriptor_Data_Single;
                    toAmino(message: _77.SignatureDescriptor_Data_Single): _77.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _77.SignatureDescriptor_Data_SingleAminoMsg): _77.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _77.SignatureDescriptor_Data_Single): _77.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _77.SignatureDescriptor_Data_SingleProtoMsg): _77.SignatureDescriptor_Data_Single;
                    toProto(message: _77.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _77.SignatureDescriptor_Data_Single): _77.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _77.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_77.SignatureDescriptor_Data_Multi>): _77.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _77.SignatureDescriptor_Data_MultiAmino): _77.SignatureDescriptor_Data_Multi;
                    toAmino(message: _77.SignatureDescriptor_Data_Multi): _77.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _77.SignatureDescriptor_Data_MultiAminoMsg): _77.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _77.SignatureDescriptor_Data_Multi): _77.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _77.SignatureDescriptor_Data_MultiProtoMsg): _77.SignatureDescriptor_Data_Multi;
                    toProto(message: _77.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _77.SignatureDescriptor_Data_Multi): _77.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _179.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _78.SimulateRequest): Promise<_78.SimulateResponse>;
                getTx(request: _78.GetTxRequest): Promise<_78.GetTxResponse>;
                broadcastTx(request: _78.BroadcastTxRequest): Promise<_78.BroadcastTxResponse>;
                getTxsEvent(request: _78.GetTxsEventRequest): Promise<_78.GetTxsEventResponse>;
                getBlockWithTxs(request: _78.GetBlockWithTxsRequest): Promise<_78.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _164.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _79.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.Tx;
                fromPartial(object: Partial<_79.Tx>): _79.Tx;
                fromAmino(object: _79.TxAmino): _79.Tx;
                toAmino(message: _79.Tx): _79.TxAmino;
                fromAminoMsg(object: _79.TxAminoMsg): _79.Tx;
                toAminoMsg(message: _79.Tx): _79.TxAminoMsg;
                fromProtoMsg(message: _79.TxProtoMsg): _79.Tx;
                toProto(message: _79.Tx): Uint8Array;
                toProtoMsg(message: _79.Tx): _79.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _79.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.TxRaw;
                fromPartial(object: Partial<_79.TxRaw>): _79.TxRaw;
                fromAmino(object: _79.TxRawAmino): _79.TxRaw;
                toAmino(message: _79.TxRaw): _79.TxRawAmino;
                fromAminoMsg(object: _79.TxRawAminoMsg): _79.TxRaw;
                toAminoMsg(message: _79.TxRaw): _79.TxRawAminoMsg;
                fromProtoMsg(message: _79.TxRawProtoMsg): _79.TxRaw;
                toProto(message: _79.TxRaw): Uint8Array;
                toProtoMsg(message: _79.TxRaw): _79.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _79.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.SignDoc;
                fromPartial(object: Partial<_79.SignDoc>): _79.SignDoc;
                fromAmino(object: _79.SignDocAmino): _79.SignDoc;
                toAmino(message: _79.SignDoc): _79.SignDocAmino;
                fromAminoMsg(object: _79.SignDocAminoMsg): _79.SignDoc;
                toAminoMsg(message: _79.SignDoc): _79.SignDocAminoMsg;
                fromProtoMsg(message: _79.SignDocProtoMsg): _79.SignDoc;
                toProto(message: _79.SignDoc): Uint8Array;
                toProtoMsg(message: _79.SignDoc): _79.SignDocProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _79.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.TxBody;
                fromPartial(object: Partial<_79.TxBody>): _79.TxBody;
                fromAmino(object: _79.TxBodyAmino): _79.TxBody;
                toAmino(message: _79.TxBody): _79.TxBodyAmino;
                fromAminoMsg(object: _79.TxBodyAminoMsg): _79.TxBody;
                toAminoMsg(message: _79.TxBody): _79.TxBodyAminoMsg;
                fromProtoMsg(message: _79.TxBodyProtoMsg): _79.TxBody;
                toProto(message: _79.TxBody): Uint8Array;
                toProtoMsg(message: _79.TxBody): _79.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _79.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.AuthInfo;
                fromPartial(object: Partial<_79.AuthInfo>): _79.AuthInfo;
                fromAmino(object: _79.AuthInfoAmino): _79.AuthInfo;
                toAmino(message: _79.AuthInfo): _79.AuthInfoAmino;
                fromAminoMsg(object: _79.AuthInfoAminoMsg): _79.AuthInfo;
                toAminoMsg(message: _79.AuthInfo): _79.AuthInfoAminoMsg;
                fromProtoMsg(message: _79.AuthInfoProtoMsg): _79.AuthInfo;
                toProto(message: _79.AuthInfo): Uint8Array;
                toProtoMsg(message: _79.AuthInfo): _79.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _79.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.SignerInfo;
                fromPartial(object: Partial<_79.SignerInfo>): _79.SignerInfo;
                fromAmino(object: _79.SignerInfoAmino): _79.SignerInfo;
                toAmino(message: _79.SignerInfo): _79.SignerInfoAmino;
                fromAminoMsg(object: _79.SignerInfoAminoMsg): _79.SignerInfo;
                toAminoMsg(message: _79.SignerInfo): _79.SignerInfoAminoMsg;
                fromProtoMsg(message: _79.SignerInfoProtoMsg): _79.SignerInfo;
                toProto(message: _79.SignerInfo): Uint8Array;
                toProtoMsg(message: _79.SignerInfo): _79.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _79.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.ModeInfo;
                fromPartial(object: Partial<_79.ModeInfo>): _79.ModeInfo;
                fromAmino(object: _79.ModeInfoAmino): _79.ModeInfo;
                toAmino(message: _79.ModeInfo): _79.ModeInfoAmino;
                fromAminoMsg(object: _79.ModeInfoAminoMsg): _79.ModeInfo;
                toAminoMsg(message: _79.ModeInfo): _79.ModeInfoAminoMsg;
                fromProtoMsg(message: _79.ModeInfoProtoMsg): _79.ModeInfo;
                toProto(message: _79.ModeInfo): Uint8Array;
                toProtoMsg(message: _79.ModeInfo): _79.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _79.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.ModeInfo_Single;
                fromPartial(object: Partial<_79.ModeInfo_Single>): _79.ModeInfo_Single;
                fromAmino(object: _79.ModeInfo_SingleAmino): _79.ModeInfo_Single;
                toAmino(message: _79.ModeInfo_Single): _79.ModeInfo_SingleAmino;
                fromAminoMsg(object: _79.ModeInfo_SingleAminoMsg): _79.ModeInfo_Single;
                toAminoMsg(message: _79.ModeInfo_Single): _79.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _79.ModeInfo_SingleProtoMsg): _79.ModeInfo_Single;
                toProto(message: _79.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _79.ModeInfo_Single): _79.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _79.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.ModeInfo_Multi;
                fromPartial(object: Partial<_79.ModeInfo_Multi>): _79.ModeInfo_Multi;
                fromAmino(object: _79.ModeInfo_MultiAmino): _79.ModeInfo_Multi;
                toAmino(message: _79.ModeInfo_Multi): _79.ModeInfo_MultiAmino;
                fromAminoMsg(object: _79.ModeInfo_MultiAminoMsg): _79.ModeInfo_Multi;
                toAminoMsg(message: _79.ModeInfo_Multi): _79.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _79.ModeInfo_MultiProtoMsg): _79.ModeInfo_Multi;
                toProto(message: _79.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _79.ModeInfo_Multi): _79.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _79.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.Fee;
                fromPartial(object: Partial<_79.Fee>): _79.Fee;
                fromAmino(object: _79.FeeAmino): _79.Fee;
                toAmino(message: _79.Fee): _79.FeeAmino;
                fromAminoMsg(object: _79.FeeAminoMsg): _79.Fee;
                toAminoMsg(message: _79.Fee): _79.FeeAminoMsg;
                fromProtoMsg(message: _79.FeeProtoMsg): _79.Fee;
                toProto(message: _79.Fee): Uint8Array;
                toProtoMsg(message: _79.Fee): _79.FeeProtoMsg;
            };
            orderByFromJSON(object: any): _78.OrderBy;
            orderByToJSON(object: _78.OrderBy): string;
            broadcastModeFromJSON(object: any): _78.BroadcastMode;
            broadcastModeToJSON(object: _78.BroadcastMode): string;
            OrderBy: typeof _78.OrderBy;
            OrderBySDKType: typeof _78.OrderBy;
            OrderByAmino: typeof _78.OrderBy;
            BroadcastMode: typeof _78.BroadcastMode;
            BroadcastModeSDKType: typeof _78.BroadcastMode;
            BroadcastModeAmino: typeof _78.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _78.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.GetTxsEventRequest;
                fromPartial(object: Partial<_78.GetTxsEventRequest>): _78.GetTxsEventRequest;
                fromAmino(object: _78.GetTxsEventRequestAmino): _78.GetTxsEventRequest;
                toAmino(message: _78.GetTxsEventRequest): _78.GetTxsEventRequestAmino;
                fromAminoMsg(object: _78.GetTxsEventRequestAminoMsg): _78.GetTxsEventRequest;
                toAminoMsg(message: _78.GetTxsEventRequest): _78.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _78.GetTxsEventRequestProtoMsg): _78.GetTxsEventRequest;
                toProto(message: _78.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _78.GetTxsEventRequest): _78.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _78.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.GetTxsEventResponse;
                fromPartial(object: Partial<_78.GetTxsEventResponse>): _78.GetTxsEventResponse;
                fromAmino(object: _78.GetTxsEventResponseAmino): _78.GetTxsEventResponse;
                toAmino(message: _78.GetTxsEventResponse): _78.GetTxsEventResponseAmino;
                fromAminoMsg(object: _78.GetTxsEventResponseAminoMsg): _78.GetTxsEventResponse;
                toAminoMsg(message: _78.GetTxsEventResponse): _78.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _78.GetTxsEventResponseProtoMsg): _78.GetTxsEventResponse;
                toProto(message: _78.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _78.GetTxsEventResponse): _78.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _78.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.BroadcastTxRequest;
                fromPartial(object: Partial<_78.BroadcastTxRequest>): _78.BroadcastTxRequest;
                fromAmino(object: _78.BroadcastTxRequestAmino): _78.BroadcastTxRequest;
                toAmino(message: _78.BroadcastTxRequest): _78.BroadcastTxRequestAmino;
                fromAminoMsg(object: _78.BroadcastTxRequestAminoMsg): _78.BroadcastTxRequest;
                toAminoMsg(message: _78.BroadcastTxRequest): _78.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _78.BroadcastTxRequestProtoMsg): _78.BroadcastTxRequest;
                toProto(message: _78.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _78.BroadcastTxRequest): _78.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _78.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.BroadcastTxResponse;
                fromPartial(object: Partial<_78.BroadcastTxResponse>): _78.BroadcastTxResponse;
                fromAmino(object: _78.BroadcastTxResponseAmino): _78.BroadcastTxResponse;
                toAmino(message: _78.BroadcastTxResponse): _78.BroadcastTxResponseAmino;
                fromAminoMsg(object: _78.BroadcastTxResponseAminoMsg): _78.BroadcastTxResponse;
                toAminoMsg(message: _78.BroadcastTxResponse): _78.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _78.BroadcastTxResponseProtoMsg): _78.BroadcastTxResponse;
                toProto(message: _78.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _78.BroadcastTxResponse): _78.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _78.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.SimulateRequest;
                fromPartial(object: Partial<_78.SimulateRequest>): _78.SimulateRequest;
                fromAmino(object: _78.SimulateRequestAmino): _78.SimulateRequest;
                toAmino(message: _78.SimulateRequest): _78.SimulateRequestAmino;
                fromAminoMsg(object: _78.SimulateRequestAminoMsg): _78.SimulateRequest;
                toAminoMsg(message: _78.SimulateRequest): _78.SimulateRequestAminoMsg;
                fromProtoMsg(message: _78.SimulateRequestProtoMsg): _78.SimulateRequest;
                toProto(message: _78.SimulateRequest): Uint8Array;
                toProtoMsg(message: _78.SimulateRequest): _78.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _78.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.SimulateResponse;
                fromPartial(object: Partial<_78.SimulateResponse>): _78.SimulateResponse;
                fromAmino(object: _78.SimulateResponseAmino): _78.SimulateResponse;
                toAmino(message: _78.SimulateResponse): _78.SimulateResponseAmino;
                fromAminoMsg(object: _78.SimulateResponseAminoMsg): _78.SimulateResponse;
                toAminoMsg(message: _78.SimulateResponse): _78.SimulateResponseAminoMsg;
                fromProtoMsg(message: _78.SimulateResponseProtoMsg): _78.SimulateResponse;
                toProto(message: _78.SimulateResponse): Uint8Array;
                toProtoMsg(message: _78.SimulateResponse): _78.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _78.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.GetTxRequest;
                fromPartial(object: Partial<_78.GetTxRequest>): _78.GetTxRequest;
                fromAmino(object: _78.GetTxRequestAmino): _78.GetTxRequest;
                toAmino(message: _78.GetTxRequest): _78.GetTxRequestAmino;
                fromAminoMsg(object: _78.GetTxRequestAminoMsg): _78.GetTxRequest;
                toAminoMsg(message: _78.GetTxRequest): _78.GetTxRequestAminoMsg;
                fromProtoMsg(message: _78.GetTxRequestProtoMsg): _78.GetTxRequest;
                toProto(message: _78.GetTxRequest): Uint8Array;
                toProtoMsg(message: _78.GetTxRequest): _78.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _78.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.GetTxResponse;
                fromPartial(object: Partial<_78.GetTxResponse>): _78.GetTxResponse;
                fromAmino(object: _78.GetTxResponseAmino): _78.GetTxResponse;
                toAmino(message: _78.GetTxResponse): _78.GetTxResponseAmino;
                fromAminoMsg(object: _78.GetTxResponseAminoMsg): _78.GetTxResponse;
                toAminoMsg(message: _78.GetTxResponse): _78.GetTxResponseAminoMsg;
                fromProtoMsg(message: _78.GetTxResponseProtoMsg): _78.GetTxResponse;
                toProto(message: _78.GetTxResponse): Uint8Array;
                toProtoMsg(message: _78.GetTxResponse): _78.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _78.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_78.GetBlockWithTxsRequest>): _78.GetBlockWithTxsRequest;
                fromAmino(object: _78.GetBlockWithTxsRequestAmino): _78.GetBlockWithTxsRequest;
                toAmino(message: _78.GetBlockWithTxsRequest): _78.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _78.GetBlockWithTxsRequestAminoMsg): _78.GetBlockWithTxsRequest;
                toAminoMsg(message: _78.GetBlockWithTxsRequest): _78.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _78.GetBlockWithTxsRequestProtoMsg): _78.GetBlockWithTxsRequest;
                toProto(message: _78.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _78.GetBlockWithTxsRequest): _78.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _78.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_78.GetBlockWithTxsResponse>): _78.GetBlockWithTxsResponse;
                fromAmino(object: _78.GetBlockWithTxsResponseAmino): _78.GetBlockWithTxsResponse;
                toAmino(message: _78.GetBlockWithTxsResponse): _78.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _78.GetBlockWithTxsResponseAminoMsg): _78.GetBlockWithTxsResponse;
                toAminoMsg(message: _78.GetBlockWithTxsResponse): _78.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _78.GetBlockWithTxsResponseProtoMsg): _78.GetBlockWithTxsResponse;
                toProto(message: _78.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _78.GetBlockWithTxsResponse): _78.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _180.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _80.QueryCurrentPlanRequest): Promise<_80.QueryCurrentPlanResponse>;
                appliedPlan(request: _80.QueryAppliedPlanRequest): Promise<_80.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _80.QueryUpgradedConsensusStateRequest): Promise<_80.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _80.QueryModuleVersionsRequest): Promise<_80.QueryModuleVersionsResponse>;
            };
            LCDQueryClient: typeof _165.LCDQueryClient;
            Plan: {
                typeUrl: string;
                encode(message: _81.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.Plan;
                fromPartial(object: Partial<_81.Plan>): _81.Plan;
                fromAmino(object: _81.PlanAmino): _81.Plan;
                toAmino(message: _81.Plan): _81.PlanAmino;
                fromAminoMsg(object: _81.PlanAminoMsg): _81.Plan;
                toAminoMsg(message: _81.Plan): _81.PlanAminoMsg;
                fromProtoMsg(message: _81.PlanProtoMsg): _81.Plan;
                toProto(message: _81.Plan): Uint8Array;
                toProtoMsg(message: _81.Plan): _81.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _81.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_81.SoftwareUpgradeProposal>): _81.SoftwareUpgradeProposal;
                fromAmino(object: _81.SoftwareUpgradeProposalAmino): _81.SoftwareUpgradeProposal;
                toAmino(message: _81.SoftwareUpgradeProposal): _81.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _81.SoftwareUpgradeProposalAminoMsg): _81.SoftwareUpgradeProposal;
                toAminoMsg(message: _81.SoftwareUpgradeProposal): _81.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _81.SoftwareUpgradeProposalProtoMsg): _81.SoftwareUpgradeProposal;
                toProto(message: _81.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _81.SoftwareUpgradeProposal): _81.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _81.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_81.CancelSoftwareUpgradeProposal>): _81.CancelSoftwareUpgradeProposal;
                fromAmino(object: _81.CancelSoftwareUpgradeProposalAmino): _81.CancelSoftwareUpgradeProposal;
                toAmino(message: _81.CancelSoftwareUpgradeProposal): _81.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _81.CancelSoftwareUpgradeProposalAminoMsg): _81.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _81.CancelSoftwareUpgradeProposal): _81.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _81.CancelSoftwareUpgradeProposalProtoMsg): _81.CancelSoftwareUpgradeProposal;
                toProto(message: _81.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _81.CancelSoftwareUpgradeProposal): _81.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _81.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.ModuleVersion;
                fromPartial(object: Partial<_81.ModuleVersion>): _81.ModuleVersion;
                fromAmino(object: _81.ModuleVersionAmino): _81.ModuleVersion;
                toAmino(message: _81.ModuleVersion): _81.ModuleVersionAmino;
                fromAminoMsg(object: _81.ModuleVersionAminoMsg): _81.ModuleVersion;
                toAminoMsg(message: _81.ModuleVersion): _81.ModuleVersionAminoMsg;
                fromProtoMsg(message: _81.ModuleVersionProtoMsg): _81.ModuleVersion;
                toProto(message: _81.ModuleVersion): Uint8Array;
                toProtoMsg(message: _81.ModuleVersion): _81.ModuleVersionProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _80.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _80.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_80.QueryCurrentPlanRequest>): _80.QueryCurrentPlanRequest;
                fromAmino(_: _80.QueryCurrentPlanRequestAmino): _80.QueryCurrentPlanRequest;
                toAmino(_: _80.QueryCurrentPlanRequest): _80.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _80.QueryCurrentPlanRequestAminoMsg): _80.QueryCurrentPlanRequest;
                toAminoMsg(message: _80.QueryCurrentPlanRequest): _80.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _80.QueryCurrentPlanRequestProtoMsg): _80.QueryCurrentPlanRequest;
                toProto(message: _80.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _80.QueryCurrentPlanRequest): _80.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _80.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_80.QueryCurrentPlanResponse>): _80.QueryCurrentPlanResponse;
                fromAmino(object: _80.QueryCurrentPlanResponseAmino): _80.QueryCurrentPlanResponse;
                toAmino(message: _80.QueryCurrentPlanResponse): _80.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _80.QueryCurrentPlanResponseAminoMsg): _80.QueryCurrentPlanResponse;
                toAminoMsg(message: _80.QueryCurrentPlanResponse): _80.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _80.QueryCurrentPlanResponseProtoMsg): _80.QueryCurrentPlanResponse;
                toProto(message: _80.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _80.QueryCurrentPlanResponse): _80.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _80.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_80.QueryAppliedPlanRequest>): _80.QueryAppliedPlanRequest;
                fromAmino(object: _80.QueryAppliedPlanRequestAmino): _80.QueryAppliedPlanRequest;
                toAmino(message: _80.QueryAppliedPlanRequest): _80.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _80.QueryAppliedPlanRequestAminoMsg): _80.QueryAppliedPlanRequest;
                toAminoMsg(message: _80.QueryAppliedPlanRequest): _80.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _80.QueryAppliedPlanRequestProtoMsg): _80.QueryAppliedPlanRequest;
                toProto(message: _80.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _80.QueryAppliedPlanRequest): _80.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _80.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_80.QueryAppliedPlanResponse>): _80.QueryAppliedPlanResponse;
                fromAmino(object: _80.QueryAppliedPlanResponseAmino): _80.QueryAppliedPlanResponse;
                toAmino(message: _80.QueryAppliedPlanResponse): _80.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _80.QueryAppliedPlanResponseAminoMsg): _80.QueryAppliedPlanResponse;
                toAminoMsg(message: _80.QueryAppliedPlanResponse): _80.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _80.QueryAppliedPlanResponseProtoMsg): _80.QueryAppliedPlanResponse;
                toProto(message: _80.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _80.QueryAppliedPlanResponse): _80.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _80.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_80.QueryUpgradedConsensusStateRequest>): _80.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _80.QueryUpgradedConsensusStateRequestAmino): _80.QueryUpgradedConsensusStateRequest;
                toAmino(message: _80.QueryUpgradedConsensusStateRequest): _80.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _80.QueryUpgradedConsensusStateRequestAminoMsg): _80.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _80.QueryUpgradedConsensusStateRequest): _80.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _80.QueryUpgradedConsensusStateRequestProtoMsg): _80.QueryUpgradedConsensusStateRequest;
                toProto(message: _80.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _80.QueryUpgradedConsensusStateRequest): _80.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _80.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_80.QueryUpgradedConsensusStateResponse>): _80.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _80.QueryUpgradedConsensusStateResponseAmino): _80.QueryUpgradedConsensusStateResponse;
                toAmino(message: _80.QueryUpgradedConsensusStateResponse): _80.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _80.QueryUpgradedConsensusStateResponseAminoMsg): _80.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _80.QueryUpgradedConsensusStateResponse): _80.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _80.QueryUpgradedConsensusStateResponseProtoMsg): _80.QueryUpgradedConsensusStateResponse;
                toProto(message: _80.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _80.QueryUpgradedConsensusStateResponse): _80.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _80.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_80.QueryModuleVersionsRequest>): _80.QueryModuleVersionsRequest;
                fromAmino(object: _80.QueryModuleVersionsRequestAmino): _80.QueryModuleVersionsRequest;
                toAmino(message: _80.QueryModuleVersionsRequest): _80.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _80.QueryModuleVersionsRequestAminoMsg): _80.QueryModuleVersionsRequest;
                toAminoMsg(message: _80.QueryModuleVersionsRequest): _80.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _80.QueryModuleVersionsRequestProtoMsg): _80.QueryModuleVersionsRequest;
                toProto(message: _80.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _80.QueryModuleVersionsRequest): _80.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _80.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_80.QueryModuleVersionsResponse>): _80.QueryModuleVersionsResponse;
                fromAmino(object: _80.QueryModuleVersionsResponseAmino): _80.QueryModuleVersionsResponse;
                toAmino(message: _80.QueryModuleVersionsResponse): _80.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _80.QueryModuleVersionsResponseAminoMsg): _80.QueryModuleVersionsResponse;
                toAminoMsg(message: _80.QueryModuleVersionsResponse): _80.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _80.QueryModuleVersionsResponseProtoMsg): _80.QueryModuleVersionsResponse;
                toProto(message: _80.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _80.QueryModuleVersionsResponse): _80.QueryModuleVersionsResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _190.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _82.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _82.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createClawbackVestingAccount(value: _82.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clawback(value: _82.MsgClawback): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _82.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _82.MsgCreateVestingAccount;
                    };
                    createPeriodicVestingAccount(value: _82.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _82.MsgCreatePeriodicVestingAccount;
                    };
                    createClawbackVestingAccount(value: _82.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: _82.MsgCreateClawbackVestingAccount;
                    };
                    clawback(value: _82.MsgClawback): {
                        typeUrl: string;
                        value: _82.MsgClawback;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _82.MsgCreateVestingAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _82.MsgCreatePeriodicVestingAccount;
                    };
                    createClawbackVestingAccount(value: any): {
                        typeUrl: string;
                        value: _82.MsgCreateClawbackVestingAccount;
                    };
                    clawback(value: any): {
                        typeUrl: string;
                        value: _82.MsgClawback;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _82.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _82.MsgCreateVestingAccount;
                    };
                    createPeriodicVestingAccount(value: _82.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _82.MsgCreatePeriodicVestingAccount;
                    };
                    createClawbackVestingAccount(value: _82.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: _82.MsgCreateClawbackVestingAccount;
                    };
                    clawback(value: _82.MsgClawback): {
                        typeUrl: string;
                        value: _82.MsgClawback;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _82.MsgCreateVestingAccount) => _82.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _82.MsgCreateVestingAccountAmino) => _82.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _82.MsgCreatePeriodicVestingAccount) => _82.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _82.MsgCreatePeriodicVestingAccountAmino) => _82.MsgCreatePeriodicVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreateClawbackVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _82.MsgCreateClawbackVestingAccount) => _82.MsgCreateClawbackVestingAccountAmino;
                    fromAmino: (object: _82.MsgCreateClawbackVestingAccountAmino) => _82.MsgCreateClawbackVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgClawback": {
                    aminoType: string;
                    toAmino: (message: _82.MsgClawback) => _82.MsgClawbackAmino;
                    fromAmino: (object: _82.MsgClawbackAmino) => _82.MsgClawback;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _83.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.BaseVestingAccount;
                fromPartial(object: Partial<_83.BaseVestingAccount>): _83.BaseVestingAccount;
                fromAmino(object: _83.BaseVestingAccountAmino): _83.BaseVestingAccount;
                toAmino(message: _83.BaseVestingAccount): _83.BaseVestingAccountAmino;
                fromAminoMsg(object: _83.BaseVestingAccountAminoMsg): _83.BaseVestingAccount;
                toAminoMsg(message: _83.BaseVestingAccount): _83.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _83.BaseVestingAccountProtoMsg): _83.BaseVestingAccount;
                toProto(message: _83.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _83.BaseVestingAccount): _83.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _83.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.ContinuousVestingAccount;
                fromPartial(object: Partial<_83.ContinuousVestingAccount>): _83.ContinuousVestingAccount;
                fromAmino(object: _83.ContinuousVestingAccountAmino): _83.ContinuousVestingAccount;
                toAmino(message: _83.ContinuousVestingAccount): _83.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _83.ContinuousVestingAccountAminoMsg): _83.ContinuousVestingAccount;
                toAminoMsg(message: _83.ContinuousVestingAccount): _83.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _83.ContinuousVestingAccountProtoMsg): _83.ContinuousVestingAccount;
                toProto(message: _83.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _83.ContinuousVestingAccount): _83.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _83.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.DelayedVestingAccount;
                fromPartial(object: Partial<_83.DelayedVestingAccount>): _83.DelayedVestingAccount;
                fromAmino(object: _83.DelayedVestingAccountAmino): _83.DelayedVestingAccount;
                toAmino(message: _83.DelayedVestingAccount): _83.DelayedVestingAccountAmino;
                fromAminoMsg(object: _83.DelayedVestingAccountAminoMsg): _83.DelayedVestingAccount;
                toAminoMsg(message: _83.DelayedVestingAccount): _83.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _83.DelayedVestingAccountProtoMsg): _83.DelayedVestingAccount;
                toProto(message: _83.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _83.DelayedVestingAccount): _83.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _83.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.Period;
                fromPartial(object: Partial<_83.Period>): _83.Period;
                fromAmino(object: _83.PeriodAmino): _83.Period;
                toAmino(message: _83.Period): _83.PeriodAmino;
                fromAminoMsg(object: _83.PeriodAminoMsg): _83.Period;
                toAminoMsg(message: _83.Period): _83.PeriodAminoMsg;
                fromProtoMsg(message: _83.PeriodProtoMsg): _83.Period;
                toProto(message: _83.Period): Uint8Array;
                toProtoMsg(message: _83.Period): _83.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _83.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.PeriodicVestingAccount;
                fromPartial(object: Partial<_83.PeriodicVestingAccount>): _83.PeriodicVestingAccount;
                fromAmino(object: _83.PeriodicVestingAccountAmino): _83.PeriodicVestingAccount;
                toAmino(message: _83.PeriodicVestingAccount): _83.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _83.PeriodicVestingAccountAminoMsg): _83.PeriodicVestingAccount;
                toAminoMsg(message: _83.PeriodicVestingAccount): _83.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _83.PeriodicVestingAccountProtoMsg): _83.PeriodicVestingAccount;
                toProto(message: _83.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _83.PeriodicVestingAccount): _83.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _83.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.PermanentLockedAccount;
                fromPartial(object: Partial<_83.PermanentLockedAccount>): _83.PermanentLockedAccount;
                fromAmino(object: _83.PermanentLockedAccountAmino): _83.PermanentLockedAccount;
                toAmino(message: _83.PermanentLockedAccount): _83.PermanentLockedAccountAmino;
                fromAminoMsg(object: _83.PermanentLockedAccountAminoMsg): _83.PermanentLockedAccount;
                toAminoMsg(message: _83.PermanentLockedAccount): _83.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _83.PermanentLockedAccountProtoMsg): _83.PermanentLockedAccount;
                toProto(message: _83.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _83.PermanentLockedAccount): _83.PermanentLockedAccountProtoMsg;
            };
            ClawbackVestingAccount: {
                typeUrl: string;
                encode(message: _83.ClawbackVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.ClawbackVestingAccount;
                fromPartial(object: Partial<_83.ClawbackVestingAccount>): _83.ClawbackVestingAccount;
                fromAmino(object: _83.ClawbackVestingAccountAmino): _83.ClawbackVestingAccount;
                toAmino(message: _83.ClawbackVestingAccount): _83.ClawbackVestingAccountAmino;
                fromAminoMsg(object: _83.ClawbackVestingAccountAminoMsg): _83.ClawbackVestingAccount;
                toAminoMsg(message: _83.ClawbackVestingAccount): _83.ClawbackVestingAccountAminoMsg;
                fromProtoMsg(message: _83.ClawbackVestingAccountProtoMsg): _83.ClawbackVestingAccount;
                toProto(message: _83.ClawbackVestingAccount): Uint8Array;
                toProtoMsg(message: _83.ClawbackVestingAccount): _83.ClawbackVestingAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _82.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.MsgCreateVestingAccount;
                fromPartial(object: Partial<_82.MsgCreateVestingAccount>): _82.MsgCreateVestingAccount;
                fromAmino(object: _82.MsgCreateVestingAccountAmino): _82.MsgCreateVestingAccount;
                toAmino(message: _82.MsgCreateVestingAccount): _82.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _82.MsgCreateVestingAccountAminoMsg): _82.MsgCreateVestingAccount;
                toAminoMsg(message: _82.MsgCreateVestingAccount): _82.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _82.MsgCreateVestingAccountProtoMsg): _82.MsgCreateVestingAccount;
                toProto(message: _82.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _82.MsgCreateVestingAccount): _82.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _82.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _82.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_82.MsgCreateVestingAccountResponse>): _82.MsgCreateVestingAccountResponse;
                fromAmino(_: _82.MsgCreateVestingAccountResponseAmino): _82.MsgCreateVestingAccountResponse;
                toAmino(_: _82.MsgCreateVestingAccountResponse): _82.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _82.MsgCreateVestingAccountResponseAminoMsg): _82.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _82.MsgCreateVestingAccountResponse): _82.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _82.MsgCreateVestingAccountResponseProtoMsg): _82.MsgCreateVestingAccountResponse;
                toProto(message: _82.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _82.MsgCreateVestingAccountResponse): _82.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _82.MsgCreatePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_82.MsgCreatePeriodicVestingAccount>): _82.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _82.MsgCreatePeriodicVestingAccountAmino): _82.MsgCreatePeriodicVestingAccount;
                toAmino(message: _82.MsgCreatePeriodicVestingAccount): _82.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _82.MsgCreatePeriodicVestingAccountAminoMsg): _82.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _82.MsgCreatePeriodicVestingAccount): _82.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _82.MsgCreatePeriodicVestingAccountProtoMsg): _82.MsgCreatePeriodicVestingAccount;
                toProto(message: _82.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _82.MsgCreatePeriodicVestingAccount): _82.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _82.MsgCreatePeriodicVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _82.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_82.MsgCreatePeriodicVestingAccountResponse>): _82.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _82.MsgCreatePeriodicVestingAccountResponseAmino): _82.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _82.MsgCreatePeriodicVestingAccountResponse): _82.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _82.MsgCreatePeriodicVestingAccountResponseAminoMsg): _82.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _82.MsgCreatePeriodicVestingAccountResponse): _82.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _82.MsgCreatePeriodicVestingAccountResponseProtoMsg): _82.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _82.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _82.MsgCreatePeriodicVestingAccountResponse): _82.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
            MsgCreateClawbackVestingAccount: {
                typeUrl: string;
                encode(message: _82.MsgCreateClawbackVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.MsgCreateClawbackVestingAccount;
                fromPartial(object: Partial<_82.MsgCreateClawbackVestingAccount>): _82.MsgCreateClawbackVestingAccount;
                fromAmino(object: _82.MsgCreateClawbackVestingAccountAmino): _82.MsgCreateClawbackVestingAccount;
                toAmino(message: _82.MsgCreateClawbackVestingAccount): _82.MsgCreateClawbackVestingAccountAmino;
                fromAminoMsg(object: _82.MsgCreateClawbackVestingAccountAminoMsg): _82.MsgCreateClawbackVestingAccount;
                toAminoMsg(message: _82.MsgCreateClawbackVestingAccount): _82.MsgCreateClawbackVestingAccountAminoMsg;
                fromProtoMsg(message: _82.MsgCreateClawbackVestingAccountProtoMsg): _82.MsgCreateClawbackVestingAccount;
                toProto(message: _82.MsgCreateClawbackVestingAccount): Uint8Array;
                toProtoMsg(message: _82.MsgCreateClawbackVestingAccount): _82.MsgCreateClawbackVestingAccountProtoMsg;
            };
            MsgCreateClawbackVestingAccountResponse: {
                typeUrl: string;
                encode(_: _82.MsgCreateClawbackVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _82.MsgCreateClawbackVestingAccountResponse;
                fromPartial(_: Partial<_82.MsgCreateClawbackVestingAccountResponse>): _82.MsgCreateClawbackVestingAccountResponse;
                fromAmino(_: _82.MsgCreateClawbackVestingAccountResponseAmino): _82.MsgCreateClawbackVestingAccountResponse;
                toAmino(_: _82.MsgCreateClawbackVestingAccountResponse): _82.MsgCreateClawbackVestingAccountResponseAmino;
                fromAminoMsg(object: _82.MsgCreateClawbackVestingAccountResponseAminoMsg): _82.MsgCreateClawbackVestingAccountResponse;
                toAminoMsg(message: _82.MsgCreateClawbackVestingAccountResponse): _82.MsgCreateClawbackVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _82.MsgCreateClawbackVestingAccountResponseProtoMsg): _82.MsgCreateClawbackVestingAccountResponse;
                toProto(message: _82.MsgCreateClawbackVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _82.MsgCreateClawbackVestingAccountResponse): _82.MsgCreateClawbackVestingAccountResponseProtoMsg;
            };
            MsgClawback: {
                typeUrl: string;
                encode(message: _82.MsgClawback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.MsgClawback;
                fromPartial(object: Partial<_82.MsgClawback>): _82.MsgClawback;
                fromAmino(object: _82.MsgClawbackAmino): _82.MsgClawback;
                toAmino(message: _82.MsgClawback): _82.MsgClawbackAmino;
                fromAminoMsg(object: _82.MsgClawbackAminoMsg): _82.MsgClawback;
                toAminoMsg(message: _82.MsgClawback): _82.MsgClawbackAminoMsg;
                fromProtoMsg(message: _82.MsgClawbackProtoMsg): _82.MsgClawback;
                toProto(message: _82.MsgClawback): Uint8Array;
                toProtoMsg(message: _82.MsgClawback): _82.MsgClawbackProtoMsg;
            };
            MsgClawbackResponse: {
                typeUrl: string;
                encode(_: _82.MsgClawbackResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _82.MsgClawbackResponse;
                fromPartial(_: Partial<_82.MsgClawbackResponse>): _82.MsgClawbackResponse;
                fromAmino(_: _82.MsgClawbackResponseAmino): _82.MsgClawbackResponse;
                toAmino(_: _82.MsgClawbackResponse): _82.MsgClawbackResponseAmino;
                fromAminoMsg(object: _82.MsgClawbackResponseAminoMsg): _82.MsgClawbackResponse;
                toAminoMsg(message: _82.MsgClawbackResponse): _82.MsgClawbackResponseAminoMsg;
                fromProtoMsg(message: _82.MsgClawbackResponseProtoMsg): _82.MsgClawbackResponse;
                toProto(message: _82.MsgClawbackResponse): Uint8Array;
                toProtoMsg(message: _82.MsgClawbackResponse): _82.MsgClawbackResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _181.MsgClientImpl;
                };
                bank: {
                    v1beta1: _182.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _183.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _184.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _185.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _186.MsgClientImpl;
                };
                gov: {
                    v1beta1: _187.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _188.MsgClientImpl;
                };
                staking: {
                    v1beta1: _189.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _190.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _16.QueryAccountsRequest): Promise<_16.QueryAccountsResponse>;
                        account(request: _16.QueryAccountRequest): Promise<_16.QueryAccountResponse>;
                        params(request?: _16.QueryParamsRequest): Promise<_16.QueryParamsResponse>;
                        moduleAccountByName(request: _16.QueryModuleAccountByNameRequest): Promise<_16.QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _20.QueryGrantsRequest): Promise<_20.QueryGrantsResponse>;
                        granterGrants(request: _20.QueryGranterGrantsRequest): Promise<_20.QueryGranterGrantsResponse>;
                        granteeGrants(request: _20.QueryGranteeGrantsRequest): Promise<_20.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _25.QueryBalanceRequest): Promise<_25.QueryBalanceResponse>;
                        allBalances(request: _25.QueryAllBalancesRequest): Promise<_25.QueryAllBalancesResponse>;
                        spendableBalances(request: _25.QuerySpendableBalancesRequest): Promise<_25.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _25.QueryTotalSupplyRequest): Promise<_25.QueryTotalSupplyResponse>;
                        supplyOf(request: _25.QuerySupplyOfRequest): Promise<_25.QuerySupplyOfResponse>;
                        params(request?: _25.QueryParamsRequest): Promise<_25.QueryParamsResponse>;
                        denomMetadata(request: _25.QueryDenomMetadataRequest): Promise<_25.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _25.QueryDenomsMetadataRequest): Promise<_25.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _29.ConfigRequest): Promise<_29.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _36.GetNodeInfoRequest): Promise<_36.GetNodeInfoResponse>;
                            getSyncing(request?: _36.GetSyncingRequest): Promise<_36.GetSyncingResponse>;
                            getLatestBlock(request?: _36.GetLatestBlockRequest): Promise<_36.GetLatestBlockResponse>;
                            getBlockByHeight(request: _36.GetBlockByHeightRequest): Promise<_36.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _36.GetLatestValidatorSetRequest): Promise<_36.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _36.GetValidatorSetByHeightRequest): Promise<_36.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _48.QueryParamsRequest): Promise<_48.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _48.QueryValidatorOutstandingRewardsRequest): Promise<_48.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _48.QueryValidatorCommissionRequest): Promise<_48.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _48.QueryValidatorSlashesRequest): Promise<_48.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _48.QueryDelegationRewardsRequest): Promise<_48.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _48.QueryDelegationTotalRewardsRequest): Promise<_48.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _48.QueryDelegatorValidatorsRequest): Promise<_48.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _48.QueryDelegatorWithdrawAddressRequest): Promise<_48.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _48.QueryCommunityPoolRequest): Promise<_48.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _52.QueryEvidenceRequest): Promise<_52.QueryEvidenceResponse>;
                        allEvidence(request?: _52.QueryAllEvidenceRequest): Promise<_52.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _56.QueryAllowanceRequest): Promise<_56.QueryAllowanceResponse>;
                        allowances(request: _56.QueryAllowancesRequest): Promise<_56.QueryAllowancesResponse>;
                        allowancesByGranter(request: _56.QueryAllowancesByGranterRequest): Promise<_56.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _61.QueryProposalRequest): Promise<_61.QueryProposalResponse>;
                        proposals(request: _61.QueryProposalsRequest): Promise<_61.QueryProposalsResponse>;
                        vote(request: _61.QueryVoteRequest): Promise<_61.QueryVoteResponse>;
                        votes(request: _61.QueryVotesRequest): Promise<_61.QueryVotesResponse>;
                        params(request: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
                        deposit(request: _61.QueryDepositRequest): Promise<_61.QueryDepositResponse>;
                        deposits(request: _61.QueryDepositsRequest): Promise<_61.QueryDepositsResponse>;
                        tallyResult(request: _61.QueryTallyResultRequest): Promise<_61.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _65.QueryParamsRequest): Promise<_65.QueryParamsResponse>;
                        inflation(request?: _65.QueryInflationRequest): Promise<_65.QueryInflationResponse>;
                        annualProvisions(request?: _65.QueryAnnualProvisionsRequest): Promise<_65.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _67.QueryParamsRequest): Promise<_67.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _69.QueryParamsRequest): Promise<_69.QueryParamsResponse>;
                        signingInfo(request: _69.QuerySigningInfoRequest): Promise<_69.QuerySigningInfoResponse>;
                        signingInfos(request?: _69.QuerySigningInfosRequest): Promise<_69.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _74.QueryValidatorsRequest): Promise<_74.QueryValidatorsResponse>;
                        validator(request: _74.QueryValidatorRequest): Promise<_74.QueryValidatorResponse>;
                        validatorDelegations(request: _74.QueryValidatorDelegationsRequest): Promise<_74.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _74.QueryValidatorUnbondingDelegationsRequest): Promise<_74.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _74.QueryDelegationRequest): Promise<_74.QueryDelegationResponse>;
                        unbondingDelegation(request: _74.QueryUnbondingDelegationRequest): Promise<_74.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _74.QueryDelegatorDelegationsRequest): Promise<_74.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _74.QueryDelegatorUnbondingDelegationsRequest): Promise<_74.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _74.QueryRedelegationsRequest): Promise<_74.QueryRedelegationsResponse>;
                        delegatorValidators(request: _74.QueryDelegatorValidatorsRequest): Promise<_74.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _74.QueryDelegatorValidatorRequest): Promise<_74.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _74.QueryHistoricalInfoRequest): Promise<_74.QueryHistoricalInfoResponse>;
                        pool(request?: _74.QueryPoolRequest): Promise<_74.QueryPoolResponse>;
                        params(request?: _74.QueryParamsRequest): Promise<_74.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _78.SimulateRequest): Promise<_78.SimulateResponse>;
                        getTx(request: _78.GetTxRequest): Promise<_78.GetTxResponse>;
                        broadcastTx(request: _78.BroadcastTxRequest): Promise<_78.BroadcastTxResponse>;
                        getTxsEvent(request: _78.GetTxsEventRequest): Promise<_78.GetTxsEventResponse>;
                        getBlockWithTxs(request: _78.GetBlockWithTxsRequest): Promise<_78.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _80.QueryCurrentPlanRequest): Promise<_80.QueryCurrentPlanResponse>;
                        appliedPlan(request: _80.QueryAppliedPlanRequest): Promise<_80.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _80.QueryUpgradedConsensusStateRequest): Promise<_80.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _80.QueryModuleVersionsRequest): Promise<_80.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _151.LCDQueryClient;
                };
                authz: {
                    v1beta1: _152.LCDQueryClient;
                };
                bank: {
                    v1beta1: _153.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _154.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _155.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _156.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _157.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _158.LCDQueryClient;
                };
                gov: {
                    v1beta1: _159.LCDQueryClient;
                };
                mint: {
                    v1beta1: _160.LCDQueryClient;
                };
                params: {
                    v1beta1: _161.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _162.LCDQueryClient;
                };
                staking: {
                    v1beta1: _163.LCDQueryClient;
                };
                tx: {
                    v1beta1: _164.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _165.LCDQueryClient;
                };
            };
        }>;
    };
}
