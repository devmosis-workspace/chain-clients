import * as _24 from "../shentu/auth/v1alpha1/vesting";
import * as _25 from "./auth/v1beta1/auth";
import * as _26 from "./auth/v1beta1/genesis";
import * as _27 from "./auth/v1beta1/query";
import * as _28 from "./authz/v1beta1/authz";
import * as _29 from "./authz/v1beta1/event";
import * as _30 from "./authz/v1beta1/genesis";
import * as _31 from "./authz/v1beta1/query";
import * as _32 from "./authz/v1beta1/tx";
import * as _33 from "./bank/v1beta1/authz";
import * as _34 from "./bank/v1beta1/bank";
import * as _35 from "./bank/v1beta1/genesis";
import * as _36 from "./bank/v1beta1/query";
import * as _37 from "./bank/v1beta1/tx";
import * as _38 from "./base/abci/v1beta1/abci";
import * as _39 from "./base/kv/v1beta1/kv";
import * as _40 from "./base/node/v1beta1/query";
import * as _41 from "./base/query/v1beta1/pagination";
import * as _42 from "./base/reflection/v1beta1/reflection";
import * as _43 from "./base/reflection/v2alpha1/reflection";
import * as _44 from "./base/snapshots/v1beta1/snapshot";
import * as _45 from "./base/store/v1beta1/commit_info";
import * as _46 from "./base/store/v1beta1/listening";
import * as _47 from "./base/store/v1beta1/snapshot";
import * as _48 from "./base/tendermint/v1beta1/query";
import * as _49 from "./base/v1beta1/coin";
import * as _50 from "./capability/v1beta1/capability";
import * as _51 from "./capability/v1beta1/genesis";
import * as _52 from "./crisis/v1beta1/genesis";
import * as _53 from "./crisis/v1beta1/tx";
import * as _54 from "./crypto/ed25519/keys";
import * as _55 from "./crypto/multisig/keys";
import * as _56 from "./crypto/secp256k1/keys";
import * as _57 from "./crypto/secp256r1/keys";
import * as _58 from "./distribution/v1beta1/distribution";
import * as _59 from "./distribution/v1beta1/genesis";
import * as _60 from "./distribution/v1beta1/query";
import * as _61 from "./distribution/v1beta1/tx";
import * as _62 from "./evidence/v1beta1/evidence";
import * as _63 from "./evidence/v1beta1/genesis";
import * as _64 from "./evidence/v1beta1/query";
import * as _65 from "./evidence/v1beta1/tx";
import * as _66 from "./feegrant/v1beta1/feegrant";
import * as _67 from "./feegrant/v1beta1/genesis";
import * as _68 from "./feegrant/v1beta1/query";
import * as _69 from "./feegrant/v1beta1/tx";
import * as _70 from "./genutil/v1beta1/genesis";
import * as _71 from "./gov/v1beta1/genesis";
import * as _72 from "./gov/v1beta1/gov";
import * as _73 from "./gov/v1beta1/query";
import * as _74 from "./gov/v1beta1/tx";
import * as _75 from "./mint/v1beta1/genesis";
import * as _76 from "./mint/v1beta1/mint";
import * as _77 from "./mint/v1beta1/query";
import * as _78 from "./params/v1beta1/params";
import * as _79 from "./params/v1beta1/query";
import * as _80 from "./slashing/v1beta1/genesis";
import * as _81 from "./slashing/v1beta1/query";
import * as _82 from "./slashing/v1beta1/slashing";
import * as _83 from "./slashing/v1beta1/tx";
import * as _84 from "./staking/v1beta1/authz";
import * as _85 from "./staking/v1beta1/genesis";
import * as _86 from "./staking/v1beta1/query";
import * as _87 from "./staking/v1beta1/staking";
import * as _88 from "./staking/v1beta1/tx";
import * as _89 from "./tx/signing/v1beta1/signing";
import * as _90 from "./tx/v1beta1/service";
import * as _91 from "./tx/v1beta1/tx";
import * as _92 from "./upgrade/v1beta1/query";
import * as _93 from "./upgrade/v1beta1/upgrade";
import * as _94 from "./vesting/v1beta1/tx";
import * as _95 from "./vesting/v1beta1/vesting";
import * as _176 from "./auth/v1beta1/query.lcd";
import * as _177 from "./authz/v1beta1/query.lcd";
import * as _178 from "./bank/v1beta1/query.lcd";
import * as _179 from "./base/node/v1beta1/query.lcd";
import * as _180 from "./base/tendermint/v1beta1/query.lcd";
import * as _181 from "./distribution/v1beta1/query.lcd";
import * as _182 from "./evidence/v1beta1/query.lcd";
import * as _183 from "./feegrant/v1beta1/query.lcd";
import * as _184 from "./gov/v1beta1/query.lcd";
import * as _185 from "./mint/v1beta1/query.lcd";
import * as _186 from "./params/v1beta1/query.lcd";
import * as _187 from "./slashing/v1beta1/query.lcd";
import * as _188 from "./staking/v1beta1/query.lcd";
import * as _189 from "./tx/v1beta1/service.lcd";
import * as _190 from "./upgrade/v1beta1/query.lcd";
import * as _191 from "./auth/v1beta1/query.rpc.Query";
import * as _192 from "./authz/v1beta1/query.rpc.Query";
import * as _193 from "./bank/v1beta1/query.rpc.Query";
import * as _194 from "./base/node/v1beta1/query.rpc.Service";
import * as _195 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _196 from "./distribution/v1beta1/query.rpc.Query";
import * as _197 from "./evidence/v1beta1/query.rpc.Query";
import * as _198 from "./feegrant/v1beta1/query.rpc.Query";
import * as _199 from "./gov/v1beta1/query.rpc.Query";
import * as _200 from "./mint/v1beta1/query.rpc.Query";
import * as _201 from "./params/v1beta1/query.rpc.Query";
import * as _202 from "./slashing/v1beta1/query.rpc.Query";
import * as _203 from "./staking/v1beta1/query.rpc.Query";
import * as _204 from "./tx/v1beta1/service.rpc.Service";
import * as _205 from "./upgrade/v1beta1/query.rpc.Query";
import * as _206 from "./authz/v1beta1/tx.rpc.msg";
import * as _207 from "./bank/v1beta1/tx.rpc.msg";
import * as _208 from "./crisis/v1beta1/tx.rpc.msg";
import * as _209 from "./distribution/v1beta1/tx.rpc.msg";
import * as _210 from "./evidence/v1beta1/tx.rpc.msg";
import * as _211 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _212 from "./gov/v1beta1/tx.rpc.msg";
import * as _213 from "./slashing/v1beta1/tx.rpc.msg";
import * as _214 from "./staking/v1beta1/tx.rpc.msg";
import * as _215 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1alpha1: {
            ManualVestingAccount: {
                typeUrl: string;
                encode(message: _24.ManualVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.ManualVestingAccount;
                fromPartial(object: Partial<_24.ManualVestingAccount>): _24.ManualVestingAccount;
                fromAmino(object: _24.ManualVestingAccountAmino): _24.ManualVestingAccount;
                toAmino(message: _24.ManualVestingAccount): _24.ManualVestingAccountAmino;
                fromAminoMsg(object: _24.ManualVestingAccountAminoMsg): _24.ManualVestingAccount;
                toAminoMsg(message: _24.ManualVestingAccount): _24.ManualVestingAccountAminoMsg;
                fromProtoMsg(message: _24.ManualVestingAccountProtoMsg): _24.ManualVestingAccount;
                toProto(message: _24.ManualVestingAccount): Uint8Array;
                toProtoMsg(message: _24.ManualVestingAccount): _24.ManualVestingAccountProtoMsg;
            };
        };
        const v1beta1: {
            QueryClientImpl: typeof _191.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                accounts(request?: _27.QueryAccountsRequest): Promise<_27.QueryAccountsResponse>;
                account(request: _27.QueryAccountRequest): Promise<_27.QueryAccountResponse>;
                params(request?: _27.QueryParamsRequest): Promise<_27.QueryParamsResponse>;
                moduleAccountByName(request: _27.QueryModuleAccountByNameRequest): Promise<_27.QueryModuleAccountByNameResponse>;
            };
            LCDQueryClient: typeof _176.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _27.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryAccountsRequest;
                fromPartial(object: Partial<_27.QueryAccountsRequest>): _27.QueryAccountsRequest;
                fromAmino(object: _27.QueryAccountsRequestAmino): _27.QueryAccountsRequest;
                toAmino(message: _27.QueryAccountsRequest): _27.QueryAccountsRequestAmino;
                fromAminoMsg(object: _27.QueryAccountsRequestAminoMsg): _27.QueryAccountsRequest;
                toAminoMsg(message: _27.QueryAccountsRequest): _27.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _27.QueryAccountsRequestProtoMsg): _27.QueryAccountsRequest;
                toProto(message: _27.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _27.QueryAccountsRequest): _27.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _27.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryAccountsResponse;
                fromPartial(object: Partial<_27.QueryAccountsResponse>): _27.QueryAccountsResponse;
                fromAmino(object: _27.QueryAccountsResponseAmino): _27.QueryAccountsResponse;
                toAmino(message: _27.QueryAccountsResponse): _27.QueryAccountsResponseAmino;
                fromAminoMsg(object: _27.QueryAccountsResponseAminoMsg): _27.QueryAccountsResponse;
                toAminoMsg(message: _27.QueryAccountsResponse): _27.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _27.QueryAccountsResponseProtoMsg): _27.QueryAccountsResponse;
                toProto(message: _27.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _27.QueryAccountsResponse): _27.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _27.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryAccountRequest;
                fromPartial(object: Partial<_27.QueryAccountRequest>): _27.QueryAccountRequest;
                fromAmino(object: _27.QueryAccountRequestAmino): _27.QueryAccountRequest;
                toAmino(message: _27.QueryAccountRequest): _27.QueryAccountRequestAmino;
                fromAminoMsg(object: _27.QueryAccountRequestAminoMsg): _27.QueryAccountRequest;
                toAminoMsg(message: _27.QueryAccountRequest): _27.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _27.QueryAccountRequestProtoMsg): _27.QueryAccountRequest;
                toProto(message: _27.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _27.QueryAccountRequest): _27.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _27.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryAccountResponse;
                fromPartial(object: Partial<_27.QueryAccountResponse>): _27.QueryAccountResponse;
                fromAmino(object: _27.QueryAccountResponseAmino): _27.QueryAccountResponse;
                toAmino(message: _27.QueryAccountResponse): _27.QueryAccountResponseAmino;
                fromAminoMsg(object: _27.QueryAccountResponseAminoMsg): _27.QueryAccountResponse;
                toAminoMsg(message: _27.QueryAccountResponse): _27.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _27.QueryAccountResponseProtoMsg): _27.QueryAccountResponse;
                toProto(message: _27.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _27.QueryAccountResponse): _27.QueryAccountResponseProtoMsg;
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
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _27.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_27.QueryModuleAccountByNameRequest>): _27.QueryModuleAccountByNameRequest;
                fromAmino(object: _27.QueryModuleAccountByNameRequestAmino): _27.QueryModuleAccountByNameRequest;
                toAmino(message: _27.QueryModuleAccountByNameRequest): _27.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _27.QueryModuleAccountByNameRequestAminoMsg): _27.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _27.QueryModuleAccountByNameRequest): _27.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _27.QueryModuleAccountByNameRequestProtoMsg): _27.QueryModuleAccountByNameRequest;
                toProto(message: _27.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _27.QueryModuleAccountByNameRequest): _27.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _27.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_27.QueryModuleAccountByNameResponse>): _27.QueryModuleAccountByNameResponse;
                fromAmino(object: _27.QueryModuleAccountByNameResponseAmino): _27.QueryModuleAccountByNameResponse;
                toAmino(message: _27.QueryModuleAccountByNameResponse): _27.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _27.QueryModuleAccountByNameResponseAminoMsg): _27.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _27.QueryModuleAccountByNameResponse): _27.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _27.QueryModuleAccountByNameResponseProtoMsg): _27.QueryModuleAccountByNameResponse;
                toProto(message: _27.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _27.QueryModuleAccountByNameResponse): _27.QueryModuleAccountByNameResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _25.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _25.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
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
            BaseAccount: {
                typeUrl: string;
                encode(message: _25.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.BaseAccount;
                fromPartial(object: Partial<_25.BaseAccount>): _25.BaseAccount;
                fromAmino(object: _25.BaseAccountAmino): _25.BaseAccount;
                toAmino(message: _25.BaseAccount): _25.BaseAccountAmino;
                fromAminoMsg(object: _25.BaseAccountAminoMsg): _25.BaseAccount;
                toAminoMsg(message: _25.BaseAccount): _25.BaseAccountAminoMsg;
                fromProtoMsg(message: _25.BaseAccountProtoMsg): _25.BaseAccount;
                toProto(message: _25.BaseAccount): Uint8Array;
                toProtoMsg(message: _25.BaseAccount): _25.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _25.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.ModuleAccount;
                fromPartial(object: Partial<_25.ModuleAccount>): _25.ModuleAccount;
                fromAmino(object: _25.ModuleAccountAmino): _25.ModuleAccount;
                toAmino(message: _25.ModuleAccount): _25.ModuleAccountAmino;
                fromAminoMsg(object: _25.ModuleAccountAminoMsg): _25.ModuleAccount;
                toAminoMsg(message: _25.ModuleAccount): _25.ModuleAccountAminoMsg;
                fromProtoMsg(message: _25.ModuleAccountProtoMsg): _25.ModuleAccount;
                toProto(message: _25.ModuleAccount): Uint8Array;
                toProtoMsg(message: _25.ModuleAccount): _25.ModuleAccountProtoMsg;
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
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _206.MsgClientImpl;
            QueryClientImpl: typeof _192.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                grants(request: _31.QueryGrantsRequest): Promise<_31.QueryGrantsResponse>;
                granterGrants(request: _31.QueryGranterGrantsRequest): Promise<_31.QueryGranterGrantsResponse>;
                granteeGrants(request: _31.QueryGranteeGrantsRequest): Promise<_31.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _177.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _32.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _32.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _32.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _32.MsgGrant): {
                        typeUrl: string;
                        value: _32.MsgGrant;
                    };
                    exec(value: _32.MsgExec): {
                        typeUrl: string;
                        value: _32.MsgExec;
                    };
                    revoke(value: _32.MsgRevoke): {
                        typeUrl: string;
                        value: _32.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _32.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _32.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _32.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _32.MsgGrant): {
                        typeUrl: string;
                        value: _32.MsgGrant;
                    };
                    exec(value: _32.MsgExec): {
                        typeUrl: string;
                        value: _32.MsgExec;
                    };
                    revoke(value: _32.MsgRevoke): {
                        typeUrl: string;
                        value: _32.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _32.MsgGrant) => _32.MsgGrantAmino;
                    fromAmino: (object: _32.MsgGrantAmino) => _32.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _32.MsgExec) => _32.MsgExecAmino;
                    fromAmino: (object: _32.MsgExecAmino) => _32.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _32.MsgRevoke) => _32.MsgRevokeAmino;
                    fromAmino: (object: _32.MsgRevokeAmino) => _32.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _32.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.MsgGrant;
                fromPartial(object: Partial<_32.MsgGrant>): _32.MsgGrant;
                fromAmino(object: _32.MsgGrantAmino): _32.MsgGrant;
                toAmino(message: _32.MsgGrant): _32.MsgGrantAmino;
                fromAminoMsg(object: _32.MsgGrantAminoMsg): _32.MsgGrant;
                toAminoMsg(message: _32.MsgGrant): _32.MsgGrantAminoMsg;
                fromProtoMsg(message: _32.MsgGrantProtoMsg): _32.MsgGrant;
                toProto(message: _32.MsgGrant): Uint8Array;
                toProtoMsg(message: _32.MsgGrant): _32.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _32.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.MsgExecResponse;
                fromPartial(object: Partial<_32.MsgExecResponse>): _32.MsgExecResponse;
                fromAmino(object: _32.MsgExecResponseAmino): _32.MsgExecResponse;
                toAmino(message: _32.MsgExecResponse): _32.MsgExecResponseAmino;
                fromAminoMsg(object: _32.MsgExecResponseAminoMsg): _32.MsgExecResponse;
                toAminoMsg(message: _32.MsgExecResponse): _32.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _32.MsgExecResponseProtoMsg): _32.MsgExecResponse;
                toProto(message: _32.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _32.MsgExecResponse): _32.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _32.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.MsgExec;
                fromPartial(object: Partial<_32.MsgExec>): _32.MsgExec;
                fromAmino(object: _32.MsgExecAmino): _32.MsgExec;
                toAmino(message: _32.MsgExec): _32.MsgExecAmino;
                fromAminoMsg(object: _32.MsgExecAminoMsg): _32.MsgExec;
                toAminoMsg(message: _32.MsgExec): _32.MsgExecAminoMsg;
                fromProtoMsg(message: _32.MsgExecProtoMsg): _32.MsgExec;
                toProto(message: _32.MsgExec): Uint8Array;
                toProtoMsg(message: _32.MsgExec): _32.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _32.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _32.MsgGrantResponse;
                fromPartial(_: Partial<_32.MsgGrantResponse>): _32.MsgGrantResponse;
                fromAmino(_: _32.MsgGrantResponseAmino): _32.MsgGrantResponse;
                toAmino(_: _32.MsgGrantResponse): _32.MsgGrantResponseAmino;
                fromAminoMsg(object: _32.MsgGrantResponseAminoMsg): _32.MsgGrantResponse;
                toAminoMsg(message: _32.MsgGrantResponse): _32.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _32.MsgGrantResponseProtoMsg): _32.MsgGrantResponse;
                toProto(message: _32.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _32.MsgGrantResponse): _32.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _32.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.MsgRevoke;
                fromPartial(object: Partial<_32.MsgRevoke>): _32.MsgRevoke;
                fromAmino(object: _32.MsgRevokeAmino): _32.MsgRevoke;
                toAmino(message: _32.MsgRevoke): _32.MsgRevokeAmino;
                fromAminoMsg(object: _32.MsgRevokeAminoMsg): _32.MsgRevoke;
                toAminoMsg(message: _32.MsgRevoke): _32.MsgRevokeAminoMsg;
                fromProtoMsg(message: _32.MsgRevokeProtoMsg): _32.MsgRevoke;
                toProto(message: _32.MsgRevoke): Uint8Array;
                toProtoMsg(message: _32.MsgRevoke): _32.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _32.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _32.MsgRevokeResponse;
                fromPartial(_: Partial<_32.MsgRevokeResponse>): _32.MsgRevokeResponse;
                fromAmino(_: _32.MsgRevokeResponseAmino): _32.MsgRevokeResponse;
                toAmino(_: _32.MsgRevokeResponse): _32.MsgRevokeResponseAmino;
                fromAminoMsg(object: _32.MsgRevokeResponseAminoMsg): _32.MsgRevokeResponse;
                toAminoMsg(message: _32.MsgRevokeResponse): _32.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _32.MsgRevokeResponseProtoMsg): _32.MsgRevokeResponse;
                toProto(message: _32.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _32.MsgRevokeResponse): _32.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _31.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryGrantsRequest;
                fromPartial(object: Partial<_31.QueryGrantsRequest>): _31.QueryGrantsRequest;
                fromAmino(object: _31.QueryGrantsRequestAmino): _31.QueryGrantsRequest;
                toAmino(message: _31.QueryGrantsRequest): _31.QueryGrantsRequestAmino;
                fromAminoMsg(object: _31.QueryGrantsRequestAminoMsg): _31.QueryGrantsRequest;
                toAminoMsg(message: _31.QueryGrantsRequest): _31.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _31.QueryGrantsRequestProtoMsg): _31.QueryGrantsRequest;
                toProto(message: _31.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _31.QueryGrantsRequest): _31.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _31.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryGrantsResponse;
                fromPartial(object: Partial<_31.QueryGrantsResponse>): _31.QueryGrantsResponse;
                fromAmino(object: _31.QueryGrantsResponseAmino): _31.QueryGrantsResponse;
                toAmino(message: _31.QueryGrantsResponse): _31.QueryGrantsResponseAmino;
                fromAminoMsg(object: _31.QueryGrantsResponseAminoMsg): _31.QueryGrantsResponse;
                toAminoMsg(message: _31.QueryGrantsResponse): _31.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _31.QueryGrantsResponseProtoMsg): _31.QueryGrantsResponse;
                toProto(message: _31.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _31.QueryGrantsResponse): _31.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _31.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_31.QueryGranterGrantsRequest>): _31.QueryGranterGrantsRequest;
                fromAmino(object: _31.QueryGranterGrantsRequestAmino): _31.QueryGranterGrantsRequest;
                toAmino(message: _31.QueryGranterGrantsRequest): _31.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _31.QueryGranterGrantsRequestAminoMsg): _31.QueryGranterGrantsRequest;
                toAminoMsg(message: _31.QueryGranterGrantsRequest): _31.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _31.QueryGranterGrantsRequestProtoMsg): _31.QueryGranterGrantsRequest;
                toProto(message: _31.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _31.QueryGranterGrantsRequest): _31.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _31.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_31.QueryGranterGrantsResponse>): _31.QueryGranterGrantsResponse;
                fromAmino(object: _31.QueryGranterGrantsResponseAmino): _31.QueryGranterGrantsResponse;
                toAmino(message: _31.QueryGranterGrantsResponse): _31.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _31.QueryGranterGrantsResponseAminoMsg): _31.QueryGranterGrantsResponse;
                toAminoMsg(message: _31.QueryGranterGrantsResponse): _31.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _31.QueryGranterGrantsResponseProtoMsg): _31.QueryGranterGrantsResponse;
                toProto(message: _31.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _31.QueryGranterGrantsResponse): _31.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _31.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_31.QueryGranteeGrantsRequest>): _31.QueryGranteeGrantsRequest;
                fromAmino(object: _31.QueryGranteeGrantsRequestAmino): _31.QueryGranteeGrantsRequest;
                toAmino(message: _31.QueryGranteeGrantsRequest): _31.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _31.QueryGranteeGrantsRequestAminoMsg): _31.QueryGranteeGrantsRequest;
                toAminoMsg(message: _31.QueryGranteeGrantsRequest): _31.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _31.QueryGranteeGrantsRequestProtoMsg): _31.QueryGranteeGrantsRequest;
                toProto(message: _31.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _31.QueryGranteeGrantsRequest): _31.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _31.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_31.QueryGranteeGrantsResponse>): _31.QueryGranteeGrantsResponse;
                fromAmino(object: _31.QueryGranteeGrantsResponseAmino): _31.QueryGranteeGrantsResponse;
                toAmino(message: _31.QueryGranteeGrantsResponse): _31.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _31.QueryGranteeGrantsResponseAminoMsg): _31.QueryGranteeGrantsResponse;
                toAminoMsg(message: _31.QueryGranteeGrantsResponse): _31.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _31.QueryGranteeGrantsResponseProtoMsg): _31.QueryGranteeGrantsResponse;
                toProto(message: _31.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _31.QueryGranteeGrantsResponse): _31.QueryGranteeGrantsResponseProtoMsg;
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
            EventGrant: {
                typeUrl: string;
                encode(message: _29.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.EventGrant;
                fromPartial(object: Partial<_29.EventGrant>): _29.EventGrant;
                fromAmino(object: _29.EventGrantAmino): _29.EventGrant;
                toAmino(message: _29.EventGrant): _29.EventGrantAmino;
                fromAminoMsg(object: _29.EventGrantAminoMsg): _29.EventGrant;
                toAminoMsg(message: _29.EventGrant): _29.EventGrantAminoMsg;
                fromProtoMsg(message: _29.EventGrantProtoMsg): _29.EventGrant;
                toProto(message: _29.EventGrant): Uint8Array;
                toProtoMsg(message: _29.EventGrant): _29.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _29.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.EventRevoke;
                fromPartial(object: Partial<_29.EventRevoke>): _29.EventRevoke;
                fromAmino(object: _29.EventRevokeAmino): _29.EventRevoke;
                toAmino(message: _29.EventRevoke): _29.EventRevokeAmino;
                fromAminoMsg(object: _29.EventRevokeAminoMsg): _29.EventRevoke;
                toAminoMsg(message: _29.EventRevoke): _29.EventRevokeAminoMsg;
                fromProtoMsg(message: _29.EventRevokeProtoMsg): _29.EventRevoke;
                toProto(message: _29.EventRevoke): Uint8Array;
                toProtoMsg(message: _29.EventRevoke): _29.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _28.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.GenericAuthorization;
                fromPartial(object: Partial<_28.GenericAuthorization>): _28.GenericAuthorization;
                fromAmino(object: _28.GenericAuthorizationAmino): _28.GenericAuthorization;
                toAmino(message: _28.GenericAuthorization): _28.GenericAuthorizationAmino;
                fromAminoMsg(object: _28.GenericAuthorizationAminoMsg): _28.GenericAuthorization;
                toAminoMsg(message: _28.GenericAuthorization): _28.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _28.GenericAuthorizationProtoMsg): _28.GenericAuthorization;
                toProto(message: _28.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _28.GenericAuthorization): _28.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _28.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.Grant;
                fromPartial(object: Partial<_28.Grant>): _28.Grant;
                fromAmino(object: _28.GrantAmino): _28.Grant;
                toAmino(message: _28.Grant): _28.GrantAmino;
                fromAminoMsg(object: _28.GrantAminoMsg): _28.Grant;
                toAminoMsg(message: _28.Grant): _28.GrantAminoMsg;
                fromProtoMsg(message: _28.GrantProtoMsg): _28.Grant;
                toProto(message: _28.Grant): Uint8Array;
                toProtoMsg(message: _28.Grant): _28.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _28.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.GrantAuthorization;
                fromPartial(object: Partial<_28.GrantAuthorization>): _28.GrantAuthorization;
                fromAmino(object: _28.GrantAuthorizationAmino): _28.GrantAuthorization;
                toAmino(message: _28.GrantAuthorization): _28.GrantAuthorizationAmino;
                fromAminoMsg(object: _28.GrantAuthorizationAminoMsg): _28.GrantAuthorization;
                toAminoMsg(message: _28.GrantAuthorization): _28.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _28.GrantAuthorizationProtoMsg): _28.GrantAuthorization;
                toProto(message: _28.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _28.GrantAuthorization): _28.GrantAuthorizationProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _33.SendAuthorization | _84.StakeAuthorization | _28.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _207.MsgClientImpl;
            QueryClientImpl: typeof _193.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                balance(request: _36.QueryBalanceRequest): Promise<_36.QueryBalanceResponse>;
                allBalances(request: _36.QueryAllBalancesRequest): Promise<_36.QueryAllBalancesResponse>;
                spendableBalances(request: _36.QuerySpendableBalancesRequest): Promise<_36.QuerySpendableBalancesResponse>;
                totalSupply(request?: _36.QueryTotalSupplyRequest): Promise<_36.QueryTotalSupplyResponse>;
                supplyOf(request: _36.QuerySupplyOfRequest): Promise<_36.QuerySupplyOfResponse>;
                params(request?: _36.QueryParamsRequest): Promise<_36.QueryParamsResponse>;
                denomMetadata(request: _36.QueryDenomMetadataRequest): Promise<_36.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _36.QueryDenomsMetadataRequest): Promise<_36.QueryDenomsMetadataResponse>;
            };
            LCDQueryClient: typeof _178.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _37.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _37.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _37.MsgSend): {
                        typeUrl: string;
                        value: _37.MsgSend;
                    };
                    multiSend(value: _37.MsgMultiSend): {
                        typeUrl: string;
                        value: _37.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _37.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _37.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _37.MsgSend): {
                        typeUrl: string;
                        value: _37.MsgSend;
                    };
                    multiSend(value: _37.MsgMultiSend): {
                        typeUrl: string;
                        value: _37.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _37.MsgSend) => _37.MsgSendAmino;
                    fromAmino: (object: _37.MsgSendAmino) => _37.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _37.MsgMultiSend) => _37.MsgMultiSendAmino;
                    fromAmino: (object: _37.MsgMultiSendAmino) => _37.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _37.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.MsgSend;
                fromPartial(object: Partial<_37.MsgSend>): _37.MsgSend;
                fromAmino(object: _37.MsgSendAmino): _37.MsgSend;
                toAmino(message: _37.MsgSend): _37.MsgSendAmino;
                fromAminoMsg(object: _37.MsgSendAminoMsg): _37.MsgSend;
                toAminoMsg(message: _37.MsgSend): _37.MsgSendAminoMsg;
                fromProtoMsg(message: _37.MsgSendProtoMsg): _37.MsgSend;
                toProto(message: _37.MsgSend): Uint8Array;
                toProtoMsg(message: _37.MsgSend): _37.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _37.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _37.MsgSendResponse;
                fromPartial(_: Partial<_37.MsgSendResponse>): _37.MsgSendResponse;
                fromAmino(_: _37.MsgSendResponseAmino): _37.MsgSendResponse;
                toAmino(_: _37.MsgSendResponse): _37.MsgSendResponseAmino;
                fromAminoMsg(object: _37.MsgSendResponseAminoMsg): _37.MsgSendResponse;
                toAminoMsg(message: _37.MsgSendResponse): _37.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _37.MsgSendResponseProtoMsg): _37.MsgSendResponse;
                toProto(message: _37.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _37.MsgSendResponse): _37.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _37.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.MsgMultiSend;
                fromPartial(object: Partial<_37.MsgMultiSend>): _37.MsgMultiSend;
                fromAmino(object: _37.MsgMultiSendAmino): _37.MsgMultiSend;
                toAmino(message: _37.MsgMultiSend): _37.MsgMultiSendAmino;
                fromAminoMsg(object: _37.MsgMultiSendAminoMsg): _37.MsgMultiSend;
                toAminoMsg(message: _37.MsgMultiSend): _37.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _37.MsgMultiSendProtoMsg): _37.MsgMultiSend;
                toProto(message: _37.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _37.MsgMultiSend): _37.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _37.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _37.MsgMultiSendResponse;
                fromPartial(_: Partial<_37.MsgMultiSendResponse>): _37.MsgMultiSendResponse;
                fromAmino(_: _37.MsgMultiSendResponseAmino): _37.MsgMultiSendResponse;
                toAmino(_: _37.MsgMultiSendResponse): _37.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _37.MsgMultiSendResponseAminoMsg): _37.MsgMultiSendResponse;
                toAminoMsg(message: _37.MsgMultiSendResponse): _37.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _37.MsgMultiSendResponseProtoMsg): _37.MsgMultiSendResponse;
                toProto(message: _37.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _37.MsgMultiSendResponse): _37.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _36.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryBalanceRequest;
                fromPartial(object: Partial<_36.QueryBalanceRequest>): _36.QueryBalanceRequest;
                fromAmino(object: _36.QueryBalanceRequestAmino): _36.QueryBalanceRequest;
                toAmino(message: _36.QueryBalanceRequest): _36.QueryBalanceRequestAmino;
                fromAminoMsg(object: _36.QueryBalanceRequestAminoMsg): _36.QueryBalanceRequest;
                toAminoMsg(message: _36.QueryBalanceRequest): _36.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _36.QueryBalanceRequestProtoMsg): _36.QueryBalanceRequest;
                toProto(message: _36.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _36.QueryBalanceRequest): _36.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _36.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryBalanceResponse;
                fromPartial(object: Partial<_36.QueryBalanceResponse>): _36.QueryBalanceResponse;
                fromAmino(object: _36.QueryBalanceResponseAmino): _36.QueryBalanceResponse;
                toAmino(message: _36.QueryBalanceResponse): _36.QueryBalanceResponseAmino;
                fromAminoMsg(object: _36.QueryBalanceResponseAminoMsg): _36.QueryBalanceResponse;
                toAminoMsg(message: _36.QueryBalanceResponse): _36.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _36.QueryBalanceResponseProtoMsg): _36.QueryBalanceResponse;
                toProto(message: _36.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _36.QueryBalanceResponse): _36.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _36.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryAllBalancesRequest;
                fromPartial(object: Partial<_36.QueryAllBalancesRequest>): _36.QueryAllBalancesRequest;
                fromAmino(object: _36.QueryAllBalancesRequestAmino): _36.QueryAllBalancesRequest;
                toAmino(message: _36.QueryAllBalancesRequest): _36.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _36.QueryAllBalancesRequestAminoMsg): _36.QueryAllBalancesRequest;
                toAminoMsg(message: _36.QueryAllBalancesRequest): _36.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _36.QueryAllBalancesRequestProtoMsg): _36.QueryAllBalancesRequest;
                toProto(message: _36.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _36.QueryAllBalancesRequest): _36.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _36.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryAllBalancesResponse;
                fromPartial(object: Partial<_36.QueryAllBalancesResponse>): _36.QueryAllBalancesResponse;
                fromAmino(object: _36.QueryAllBalancesResponseAmino): _36.QueryAllBalancesResponse;
                toAmino(message: _36.QueryAllBalancesResponse): _36.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _36.QueryAllBalancesResponseAminoMsg): _36.QueryAllBalancesResponse;
                toAminoMsg(message: _36.QueryAllBalancesResponse): _36.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _36.QueryAllBalancesResponseProtoMsg): _36.QueryAllBalancesResponse;
                toProto(message: _36.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _36.QueryAllBalancesResponse): _36.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _36.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_36.QuerySpendableBalancesRequest>): _36.QuerySpendableBalancesRequest;
                fromAmino(object: _36.QuerySpendableBalancesRequestAmino): _36.QuerySpendableBalancesRequest;
                toAmino(message: _36.QuerySpendableBalancesRequest): _36.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _36.QuerySpendableBalancesRequestAminoMsg): _36.QuerySpendableBalancesRequest;
                toAminoMsg(message: _36.QuerySpendableBalancesRequest): _36.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _36.QuerySpendableBalancesRequestProtoMsg): _36.QuerySpendableBalancesRequest;
                toProto(message: _36.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _36.QuerySpendableBalancesRequest): _36.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _36.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_36.QuerySpendableBalancesResponse>): _36.QuerySpendableBalancesResponse;
                fromAmino(object: _36.QuerySpendableBalancesResponseAmino): _36.QuerySpendableBalancesResponse;
                toAmino(message: _36.QuerySpendableBalancesResponse): _36.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _36.QuerySpendableBalancesResponseAminoMsg): _36.QuerySpendableBalancesResponse;
                toAminoMsg(message: _36.QuerySpendableBalancesResponse): _36.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _36.QuerySpendableBalancesResponseProtoMsg): _36.QuerySpendableBalancesResponse;
                toProto(message: _36.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _36.QuerySpendableBalancesResponse): _36.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _36.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_36.QueryTotalSupplyRequest>): _36.QueryTotalSupplyRequest;
                fromAmino(object: _36.QueryTotalSupplyRequestAmino): _36.QueryTotalSupplyRequest;
                toAmino(message: _36.QueryTotalSupplyRequest): _36.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _36.QueryTotalSupplyRequestAminoMsg): _36.QueryTotalSupplyRequest;
                toAminoMsg(message: _36.QueryTotalSupplyRequest): _36.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _36.QueryTotalSupplyRequestProtoMsg): _36.QueryTotalSupplyRequest;
                toProto(message: _36.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _36.QueryTotalSupplyRequest): _36.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _36.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_36.QueryTotalSupplyResponse>): _36.QueryTotalSupplyResponse;
                fromAmino(object: _36.QueryTotalSupplyResponseAmino): _36.QueryTotalSupplyResponse;
                toAmino(message: _36.QueryTotalSupplyResponse): _36.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _36.QueryTotalSupplyResponseAminoMsg): _36.QueryTotalSupplyResponse;
                toAminoMsg(message: _36.QueryTotalSupplyResponse): _36.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _36.QueryTotalSupplyResponseProtoMsg): _36.QueryTotalSupplyResponse;
                toProto(message: _36.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _36.QueryTotalSupplyResponse): _36.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _36.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QuerySupplyOfRequest;
                fromPartial(object: Partial<_36.QuerySupplyOfRequest>): _36.QuerySupplyOfRequest;
                fromAmino(object: _36.QuerySupplyOfRequestAmino): _36.QuerySupplyOfRequest;
                toAmino(message: _36.QuerySupplyOfRequest): _36.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _36.QuerySupplyOfRequestAminoMsg): _36.QuerySupplyOfRequest;
                toAminoMsg(message: _36.QuerySupplyOfRequest): _36.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _36.QuerySupplyOfRequestProtoMsg): _36.QuerySupplyOfRequest;
                toProto(message: _36.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _36.QuerySupplyOfRequest): _36.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _36.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QuerySupplyOfResponse;
                fromPartial(object: Partial<_36.QuerySupplyOfResponse>): _36.QuerySupplyOfResponse;
                fromAmino(object: _36.QuerySupplyOfResponseAmino): _36.QuerySupplyOfResponse;
                toAmino(message: _36.QuerySupplyOfResponse): _36.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _36.QuerySupplyOfResponseAminoMsg): _36.QuerySupplyOfResponse;
                toAminoMsg(message: _36.QuerySupplyOfResponse): _36.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _36.QuerySupplyOfResponseProtoMsg): _36.QuerySupplyOfResponse;
                toProto(message: _36.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _36.QuerySupplyOfResponse): _36.QuerySupplyOfResponseProtoMsg;
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
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _36.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_36.QueryDenomsMetadataRequest>): _36.QueryDenomsMetadataRequest;
                fromAmino(object: _36.QueryDenomsMetadataRequestAmino): _36.QueryDenomsMetadataRequest;
                toAmino(message: _36.QueryDenomsMetadataRequest): _36.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _36.QueryDenomsMetadataRequestAminoMsg): _36.QueryDenomsMetadataRequest;
                toAminoMsg(message: _36.QueryDenomsMetadataRequest): _36.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _36.QueryDenomsMetadataRequestProtoMsg): _36.QueryDenomsMetadataRequest;
                toProto(message: _36.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _36.QueryDenomsMetadataRequest): _36.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _36.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_36.QueryDenomsMetadataResponse>): _36.QueryDenomsMetadataResponse;
                fromAmino(object: _36.QueryDenomsMetadataResponseAmino): _36.QueryDenomsMetadataResponse;
                toAmino(message: _36.QueryDenomsMetadataResponse): _36.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _36.QueryDenomsMetadataResponseAminoMsg): _36.QueryDenomsMetadataResponse;
                toAminoMsg(message: _36.QueryDenomsMetadataResponse): _36.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _36.QueryDenomsMetadataResponseProtoMsg): _36.QueryDenomsMetadataResponse;
                toProto(message: _36.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _36.QueryDenomsMetadataResponse): _36.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _36.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_36.QueryDenomMetadataRequest>): _36.QueryDenomMetadataRequest;
                fromAmino(object: _36.QueryDenomMetadataRequestAmino): _36.QueryDenomMetadataRequest;
                toAmino(message: _36.QueryDenomMetadataRequest): _36.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _36.QueryDenomMetadataRequestAminoMsg): _36.QueryDenomMetadataRequest;
                toAminoMsg(message: _36.QueryDenomMetadataRequest): _36.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _36.QueryDenomMetadataRequestProtoMsg): _36.QueryDenomMetadataRequest;
                toProto(message: _36.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _36.QueryDenomMetadataRequest): _36.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _36.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_36.QueryDenomMetadataResponse>): _36.QueryDenomMetadataResponse;
                fromAmino(object: _36.QueryDenomMetadataResponseAmino): _36.QueryDenomMetadataResponse;
                toAmino(message: _36.QueryDenomMetadataResponse): _36.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _36.QueryDenomMetadataResponseAminoMsg): _36.QueryDenomMetadataResponse;
                toAminoMsg(message: _36.QueryDenomMetadataResponse): _36.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _36.QueryDenomMetadataResponseProtoMsg): _36.QueryDenomMetadataResponse;
                toProto(message: _36.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _36.QueryDenomMetadataResponse): _36.QueryDenomMetadataResponseProtoMsg;
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
            Balance: {
                typeUrl: string;
                encode(message: _35.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.Balance;
                fromPartial(object: Partial<_35.Balance>): _35.Balance;
                fromAmino(object: _35.BalanceAmino): _35.Balance;
                toAmino(message: _35.Balance): _35.BalanceAmino;
                fromAminoMsg(object: _35.BalanceAminoMsg): _35.Balance;
                toAminoMsg(message: _35.Balance): _35.BalanceAminoMsg;
                fromProtoMsg(message: _35.BalanceProtoMsg): _35.Balance;
                toProto(message: _35.Balance): Uint8Array;
                toProtoMsg(message: _35.Balance): _35.BalanceProtoMsg;
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
            SendEnabled: {
                typeUrl: string;
                encode(message: _34.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.SendEnabled;
                fromPartial(object: Partial<_34.SendEnabled>): _34.SendEnabled;
                fromAmino(object: _34.SendEnabledAmino): _34.SendEnabled;
                toAmino(message: _34.SendEnabled): _34.SendEnabledAmino;
                fromAminoMsg(object: _34.SendEnabledAminoMsg): _34.SendEnabled;
                toAminoMsg(message: _34.SendEnabled): _34.SendEnabledAminoMsg;
                fromProtoMsg(message: _34.SendEnabledProtoMsg): _34.SendEnabled;
                toProto(message: _34.SendEnabled): Uint8Array;
                toProtoMsg(message: _34.SendEnabled): _34.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _34.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.Input;
                fromPartial(object: Partial<_34.Input>): _34.Input;
                fromAmino(object: _34.InputAmino): _34.Input;
                toAmino(message: _34.Input): _34.InputAmino;
                fromAminoMsg(object: _34.InputAminoMsg): _34.Input;
                toAminoMsg(message: _34.Input): _34.InputAminoMsg;
                fromProtoMsg(message: _34.InputProtoMsg): _34.Input;
                toProto(message: _34.Input): Uint8Array;
                toProtoMsg(message: _34.Input): _34.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _34.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.Output;
                fromPartial(object: Partial<_34.Output>): _34.Output;
                fromAmino(object: _34.OutputAmino): _34.Output;
                toAmino(message: _34.Output): _34.OutputAmino;
                fromAminoMsg(object: _34.OutputAminoMsg): _34.Output;
                toAminoMsg(message: _34.Output): _34.OutputAminoMsg;
                fromProtoMsg(message: _34.OutputProtoMsg): _34.Output;
                toProto(message: _34.Output): Uint8Array;
                toProtoMsg(message: _34.Output): _34.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _34.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.Supply;
                fromPartial(object: Partial<_34.Supply>): _34.Supply;
                fromAmino(object: _34.SupplyAmino): _34.Supply;
                toAmino(message: _34.Supply): _34.SupplyAmino;
                fromAminoMsg(object: _34.SupplyAminoMsg): _34.Supply;
                toAminoMsg(message: _34.Supply): _34.SupplyAminoMsg;
                fromProtoMsg(message: _34.SupplyProtoMsg): _34.Supply;
                toProto(message: _34.Supply): Uint8Array;
                toProtoMsg(message: _34.Supply): _34.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _34.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.DenomUnit;
                fromPartial(object: Partial<_34.DenomUnit>): _34.DenomUnit;
                fromAmino(object: _34.DenomUnitAmino): _34.DenomUnit;
                toAmino(message: _34.DenomUnit): _34.DenomUnitAmino;
                fromAminoMsg(object: _34.DenomUnitAminoMsg): _34.DenomUnit;
                toAminoMsg(message: _34.DenomUnit): _34.DenomUnitAminoMsg;
                fromProtoMsg(message: _34.DenomUnitProtoMsg): _34.DenomUnit;
                toProto(message: _34.DenomUnit): Uint8Array;
                toProtoMsg(message: _34.DenomUnit): _34.DenomUnitProtoMsg;
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
            SendAuthorization: {
                typeUrl: string;
                encode(message: _33.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.SendAuthorization;
                fromPartial(object: Partial<_33.SendAuthorization>): _33.SendAuthorization;
                fromAmino(object: _33.SendAuthorizationAmino): _33.SendAuthorization;
                toAmino(message: _33.SendAuthorization): _33.SendAuthorizationAmino;
                fromAminoMsg(object: _33.SendAuthorizationAminoMsg): _33.SendAuthorization;
                toAminoMsg(message: _33.SendAuthorization): _33.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _33.SendAuthorizationProtoMsg): _33.SendAuthorization;
                toProto(message: _33.SendAuthorization): Uint8Array;
                toProtoMsg(message: _33.SendAuthorization): _33.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _38.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.TxResponse;
                    fromPartial(object: Partial<_38.TxResponse>): _38.TxResponse;
                    fromAmino(object: _38.TxResponseAmino): _38.TxResponse;
                    toAmino(message: _38.TxResponse): _38.TxResponseAmino;
                    fromAminoMsg(object: _38.TxResponseAminoMsg): _38.TxResponse;
                    toAminoMsg(message: _38.TxResponse): _38.TxResponseAminoMsg;
                    fromProtoMsg(message: _38.TxResponseProtoMsg): _38.TxResponse;
                    toProto(message: _38.TxResponse): Uint8Array;
                    toProtoMsg(message: _38.TxResponse): _38.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _38.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.ABCIMessageLog;
                    fromPartial(object: Partial<_38.ABCIMessageLog>): _38.ABCIMessageLog;
                    fromAmino(object: _38.ABCIMessageLogAmino): _38.ABCIMessageLog;
                    toAmino(message: _38.ABCIMessageLog): _38.ABCIMessageLogAmino;
                    fromAminoMsg(object: _38.ABCIMessageLogAminoMsg): _38.ABCIMessageLog;
                    toAminoMsg(message: _38.ABCIMessageLog): _38.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _38.ABCIMessageLogProtoMsg): _38.ABCIMessageLog;
                    toProto(message: _38.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _38.ABCIMessageLog): _38.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _38.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.StringEvent;
                    fromPartial(object: Partial<_38.StringEvent>): _38.StringEvent;
                    fromAmino(object: _38.StringEventAmino): _38.StringEvent;
                    toAmino(message: _38.StringEvent): _38.StringEventAmino;
                    fromAminoMsg(object: _38.StringEventAminoMsg): _38.StringEvent;
                    toAminoMsg(message: _38.StringEvent): _38.StringEventAminoMsg;
                    fromProtoMsg(message: _38.StringEventProtoMsg): _38.StringEvent;
                    toProto(message: _38.StringEvent): Uint8Array;
                    toProtoMsg(message: _38.StringEvent): _38.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _38.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.Attribute;
                    fromPartial(object: Partial<_38.Attribute>): _38.Attribute;
                    fromAmino(object: _38.AttributeAmino): _38.Attribute;
                    toAmino(message: _38.Attribute): _38.AttributeAmino;
                    fromAminoMsg(object: _38.AttributeAminoMsg): _38.Attribute;
                    toAminoMsg(message: _38.Attribute): _38.AttributeAminoMsg;
                    fromProtoMsg(message: _38.AttributeProtoMsg): _38.Attribute;
                    toProto(message: _38.Attribute): Uint8Array;
                    toProtoMsg(message: _38.Attribute): _38.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _38.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.GasInfo;
                    fromPartial(object: Partial<_38.GasInfo>): _38.GasInfo;
                    fromAmino(object: _38.GasInfoAmino): _38.GasInfo;
                    toAmino(message: _38.GasInfo): _38.GasInfoAmino;
                    fromAminoMsg(object: _38.GasInfoAminoMsg): _38.GasInfo;
                    toAminoMsg(message: _38.GasInfo): _38.GasInfoAminoMsg;
                    fromProtoMsg(message: _38.GasInfoProtoMsg): _38.GasInfo;
                    toProto(message: _38.GasInfo): Uint8Array;
                    toProtoMsg(message: _38.GasInfo): _38.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _38.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.Result;
                    fromPartial(object: Partial<_38.Result>): _38.Result;
                    fromAmino(object: _38.ResultAmino): _38.Result;
                    toAmino(message: _38.Result): _38.ResultAmino;
                    fromAminoMsg(object: _38.ResultAminoMsg): _38.Result;
                    toAminoMsg(message: _38.Result): _38.ResultAminoMsg;
                    fromProtoMsg(message: _38.ResultProtoMsg): _38.Result;
                    toProto(message: _38.Result): Uint8Array;
                    toProtoMsg(message: _38.Result): _38.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _38.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.SimulationResponse;
                    fromPartial(object: Partial<_38.SimulationResponse>): _38.SimulationResponse;
                    fromAmino(object: _38.SimulationResponseAmino): _38.SimulationResponse;
                    toAmino(message: _38.SimulationResponse): _38.SimulationResponseAmino;
                    fromAminoMsg(object: _38.SimulationResponseAminoMsg): _38.SimulationResponse;
                    toAminoMsg(message: _38.SimulationResponse): _38.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _38.SimulationResponseProtoMsg): _38.SimulationResponse;
                    toProto(message: _38.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _38.SimulationResponse): _38.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _38.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.MsgData;
                    fromPartial(object: Partial<_38.MsgData>): _38.MsgData;
                    fromAmino(object: _38.MsgDataAmino): _38.MsgData;
                    toAmino(message: _38.MsgData): _38.MsgDataAmino;
                    fromAminoMsg(object: _38.MsgDataAminoMsg): _38.MsgData;
                    toAminoMsg(message: _38.MsgData): _38.MsgDataAminoMsg;
                    fromProtoMsg(message: _38.MsgDataProtoMsg): _38.MsgData;
                    toProto(message: _38.MsgData): Uint8Array;
                    toProtoMsg(message: _38.MsgData): _38.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _38.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.TxMsgData;
                    fromPartial(object: Partial<_38.TxMsgData>): _38.TxMsgData;
                    fromAmino(object: _38.TxMsgDataAmino): _38.TxMsgData;
                    toAmino(message: _38.TxMsgData): _38.TxMsgDataAmino;
                    fromAminoMsg(object: _38.TxMsgDataAminoMsg): _38.TxMsgData;
                    toAminoMsg(message: _38.TxMsgData): _38.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _38.TxMsgDataProtoMsg): _38.TxMsgData;
                    toProto(message: _38.TxMsgData): Uint8Array;
                    toProtoMsg(message: _38.TxMsgData): _38.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _38.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.SearchTxsResult;
                    fromPartial(object: Partial<_38.SearchTxsResult>): _38.SearchTxsResult;
                    fromAmino(object: _38.SearchTxsResultAmino): _38.SearchTxsResult;
                    toAmino(message: _38.SearchTxsResult): _38.SearchTxsResultAmino;
                    fromAminoMsg(object: _38.SearchTxsResultAminoMsg): _38.SearchTxsResult;
                    toAminoMsg(message: _38.SearchTxsResult): _38.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _38.SearchTxsResultProtoMsg): _38.SearchTxsResult;
                    toProto(message: _38.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _38.SearchTxsResult): _38.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _39.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.Pairs;
                    fromPartial(object: Partial<_39.Pairs>): _39.Pairs;
                    fromAmino(object: _39.PairsAmino): _39.Pairs;
                    toAmino(message: _39.Pairs): _39.PairsAmino;
                    fromAminoMsg(object: _39.PairsAminoMsg): _39.Pairs;
                    toAminoMsg(message: _39.Pairs): _39.PairsAminoMsg;
                    fromProtoMsg(message: _39.PairsProtoMsg): _39.Pairs;
                    toProto(message: _39.Pairs): Uint8Array;
                    toProtoMsg(message: _39.Pairs): _39.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _39.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.Pair;
                    fromPartial(object: Partial<_39.Pair>): _39.Pair;
                    fromAmino(object: _39.PairAmino): _39.Pair;
                    toAmino(message: _39.Pair): _39.PairAmino;
                    fromAminoMsg(object: _39.PairAminoMsg): _39.Pair;
                    toAminoMsg(message: _39.Pair): _39.PairAminoMsg;
                    fromProtoMsg(message: _39.PairProtoMsg): _39.Pair;
                    toProto(message: _39.Pair): Uint8Array;
                    toProtoMsg(message: _39.Pair): _39.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _194.ServiceClientImpl;
                createRpcQueryExtension: (base: QueryClient) => {
                    config(request?: _40.ConfigRequest): Promise<_40.ConfigResponse>;
                };
                LCDQueryClient: typeof _179.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _40.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _40.ConfigRequest;
                    fromPartial(_: Partial<_40.ConfigRequest>): _40.ConfigRequest;
                    fromAmino(_: _40.ConfigRequestAmino): _40.ConfigRequest;
                    toAmino(_: _40.ConfigRequest): _40.ConfigRequestAmino;
                    fromAminoMsg(object: _40.ConfigRequestAminoMsg): _40.ConfigRequest;
                    toAminoMsg(message: _40.ConfigRequest): _40.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _40.ConfigRequestProtoMsg): _40.ConfigRequest;
                    toProto(message: _40.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _40.ConfigRequest): _40.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _40.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.ConfigResponse;
                    fromPartial(object: Partial<_40.ConfigResponse>): _40.ConfigResponse;
                    fromAmino(object: _40.ConfigResponseAmino): _40.ConfigResponse;
                    toAmino(message: _40.ConfigResponse): _40.ConfigResponseAmino;
                    fromAminoMsg(object: _40.ConfigResponseAminoMsg): _40.ConfigResponse;
                    toAminoMsg(message: _40.ConfigResponse): _40.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _40.ConfigResponseProtoMsg): _40.ConfigResponse;
                    toProto(message: _40.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _40.ConfigResponse): _40.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _41.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.PageRequest;
                    fromPartial(object: Partial<_41.PageRequest>): _41.PageRequest;
                    fromAmino(object: _41.PageRequestAmino): _41.PageRequest;
                    toAmino(message: _41.PageRequest): _41.PageRequestAmino;
                    fromAminoMsg(object: _41.PageRequestAminoMsg): _41.PageRequest;
                    toAminoMsg(message: _41.PageRequest): _41.PageRequestAminoMsg;
                    fromProtoMsg(message: _41.PageRequestProtoMsg): _41.PageRequest;
                    toProto(message: _41.PageRequest): Uint8Array;
                    toProtoMsg(message: _41.PageRequest): _41.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _41.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.PageResponse;
                    fromPartial(object: Partial<_41.PageResponse>): _41.PageResponse;
                    fromAmino(object: _41.PageResponseAmino): _41.PageResponse;
                    toAmino(message: _41.PageResponse): _41.PageResponseAmino;
                    fromAminoMsg(object: _41.PageResponseAminoMsg): _41.PageResponse;
                    toAminoMsg(message: _41.PageResponse): _41.PageResponseAminoMsg;
                    fromProtoMsg(message: _41.PageResponseProtoMsg): _41.PageResponse;
                    toProto(message: _41.PageResponse): Uint8Array;
                    toProtoMsg(message: _41.PageResponse): _41.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _42.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _42.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_42.ListAllInterfacesRequest>): _42.ListAllInterfacesRequest;
                    fromAmino(_: _42.ListAllInterfacesRequestAmino): _42.ListAllInterfacesRequest;
                    toAmino(_: _42.ListAllInterfacesRequest): _42.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _42.ListAllInterfacesRequestAminoMsg): _42.ListAllInterfacesRequest;
                    toAminoMsg(message: _42.ListAllInterfacesRequest): _42.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _42.ListAllInterfacesRequestProtoMsg): _42.ListAllInterfacesRequest;
                    toProto(message: _42.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _42.ListAllInterfacesRequest): _42.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _42.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_42.ListAllInterfacesResponse>): _42.ListAllInterfacesResponse;
                    fromAmino(object: _42.ListAllInterfacesResponseAmino): _42.ListAllInterfacesResponse;
                    toAmino(message: _42.ListAllInterfacesResponse): _42.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _42.ListAllInterfacesResponseAminoMsg): _42.ListAllInterfacesResponse;
                    toAminoMsg(message: _42.ListAllInterfacesResponse): _42.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _42.ListAllInterfacesResponseProtoMsg): _42.ListAllInterfacesResponse;
                    toProto(message: _42.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _42.ListAllInterfacesResponse): _42.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _42.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.ListImplementationsRequest;
                    fromPartial(object: Partial<_42.ListImplementationsRequest>): _42.ListImplementationsRequest;
                    fromAmino(object: _42.ListImplementationsRequestAmino): _42.ListImplementationsRequest;
                    toAmino(message: _42.ListImplementationsRequest): _42.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _42.ListImplementationsRequestAminoMsg): _42.ListImplementationsRequest;
                    toAminoMsg(message: _42.ListImplementationsRequest): _42.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _42.ListImplementationsRequestProtoMsg): _42.ListImplementationsRequest;
                    toProto(message: _42.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _42.ListImplementationsRequest): _42.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _42.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.ListImplementationsResponse;
                    fromPartial(object: Partial<_42.ListImplementationsResponse>): _42.ListImplementationsResponse;
                    fromAmino(object: _42.ListImplementationsResponseAmino): _42.ListImplementationsResponse;
                    toAmino(message: _42.ListImplementationsResponse): _42.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _42.ListImplementationsResponseAminoMsg): _42.ListImplementationsResponse;
                    toAminoMsg(message: _42.ListImplementationsResponse): _42.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _42.ListImplementationsResponseProtoMsg): _42.ListImplementationsResponse;
                    toProto(message: _42.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _42.ListImplementationsResponse): _42.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _43.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.AppDescriptor;
                    fromPartial(object: Partial<_43.AppDescriptor>): _43.AppDescriptor;
                    fromAmino(object: _43.AppDescriptorAmino): _43.AppDescriptor;
                    toAmino(message: _43.AppDescriptor): _43.AppDescriptorAmino;
                    fromAminoMsg(object: _43.AppDescriptorAminoMsg): _43.AppDescriptor;
                    toAminoMsg(message: _43.AppDescriptor): _43.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _43.AppDescriptorProtoMsg): _43.AppDescriptor;
                    toProto(message: _43.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _43.AppDescriptor): _43.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _43.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.TxDescriptor;
                    fromPartial(object: Partial<_43.TxDescriptor>): _43.TxDescriptor;
                    fromAmino(object: _43.TxDescriptorAmino): _43.TxDescriptor;
                    toAmino(message: _43.TxDescriptor): _43.TxDescriptorAmino;
                    fromAminoMsg(object: _43.TxDescriptorAminoMsg): _43.TxDescriptor;
                    toAminoMsg(message: _43.TxDescriptor): _43.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _43.TxDescriptorProtoMsg): _43.TxDescriptor;
                    toProto(message: _43.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _43.TxDescriptor): _43.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _43.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.AuthnDescriptor;
                    fromPartial(object: Partial<_43.AuthnDescriptor>): _43.AuthnDescriptor;
                    fromAmino(object: _43.AuthnDescriptorAmino): _43.AuthnDescriptor;
                    toAmino(message: _43.AuthnDescriptor): _43.AuthnDescriptorAmino;
                    fromAminoMsg(object: _43.AuthnDescriptorAminoMsg): _43.AuthnDescriptor;
                    toAminoMsg(message: _43.AuthnDescriptor): _43.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _43.AuthnDescriptorProtoMsg): _43.AuthnDescriptor;
                    toProto(message: _43.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _43.AuthnDescriptor): _43.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _43.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.SigningModeDescriptor;
                    fromPartial(object: Partial<_43.SigningModeDescriptor>): _43.SigningModeDescriptor;
                    fromAmino(object: _43.SigningModeDescriptorAmino): _43.SigningModeDescriptor;
                    toAmino(message: _43.SigningModeDescriptor): _43.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _43.SigningModeDescriptorAminoMsg): _43.SigningModeDescriptor;
                    toAminoMsg(message: _43.SigningModeDescriptor): _43.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _43.SigningModeDescriptorProtoMsg): _43.SigningModeDescriptor;
                    toProto(message: _43.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _43.SigningModeDescriptor): _43.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _43.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.ChainDescriptor;
                    fromPartial(object: Partial<_43.ChainDescriptor>): _43.ChainDescriptor;
                    fromAmino(object: _43.ChainDescriptorAmino): _43.ChainDescriptor;
                    toAmino(message: _43.ChainDescriptor): _43.ChainDescriptorAmino;
                    fromAminoMsg(object: _43.ChainDescriptorAminoMsg): _43.ChainDescriptor;
                    toAminoMsg(message: _43.ChainDescriptor): _43.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _43.ChainDescriptorProtoMsg): _43.ChainDescriptor;
                    toProto(message: _43.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _43.ChainDescriptor): _43.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _43.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.CodecDescriptor;
                    fromPartial(object: Partial<_43.CodecDescriptor>): _43.CodecDescriptor;
                    fromAmino(object: _43.CodecDescriptorAmino): _43.CodecDescriptor;
                    toAmino(message: _43.CodecDescriptor): _43.CodecDescriptorAmino;
                    fromAminoMsg(object: _43.CodecDescriptorAminoMsg): _43.CodecDescriptor;
                    toAminoMsg(message: _43.CodecDescriptor): _43.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _43.CodecDescriptorProtoMsg): _43.CodecDescriptor;
                    toProto(message: _43.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _43.CodecDescriptor): _43.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _43.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.InterfaceDescriptor;
                    fromPartial(object: Partial<_43.InterfaceDescriptor>): _43.InterfaceDescriptor;
                    fromAmino(object: _43.InterfaceDescriptorAmino): _43.InterfaceDescriptor;
                    toAmino(message: _43.InterfaceDescriptor): _43.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _43.InterfaceDescriptorAminoMsg): _43.InterfaceDescriptor;
                    toAminoMsg(message: _43.InterfaceDescriptor): _43.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _43.InterfaceDescriptorProtoMsg): _43.InterfaceDescriptor;
                    toProto(message: _43.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _43.InterfaceDescriptor): _43.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _43.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_43.InterfaceImplementerDescriptor>): _43.InterfaceImplementerDescriptor;
                    fromAmino(object: _43.InterfaceImplementerDescriptorAmino): _43.InterfaceImplementerDescriptor;
                    toAmino(message: _43.InterfaceImplementerDescriptor): _43.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _43.InterfaceImplementerDescriptorAminoMsg): _43.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _43.InterfaceImplementerDescriptor): _43.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _43.InterfaceImplementerDescriptorProtoMsg): _43.InterfaceImplementerDescriptor;
                    toProto(message: _43.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _43.InterfaceImplementerDescriptor): _43.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _43.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_43.InterfaceAcceptingMessageDescriptor>): _43.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _43.InterfaceAcceptingMessageDescriptorAmino): _43.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _43.InterfaceAcceptingMessageDescriptor): _43.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _43.InterfaceAcceptingMessageDescriptorAminoMsg): _43.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _43.InterfaceAcceptingMessageDescriptor): _43.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _43.InterfaceAcceptingMessageDescriptorProtoMsg): _43.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _43.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _43.InterfaceAcceptingMessageDescriptor): _43.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _43.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.ConfigurationDescriptor;
                    fromPartial(object: Partial<_43.ConfigurationDescriptor>): _43.ConfigurationDescriptor;
                    fromAmino(object: _43.ConfigurationDescriptorAmino): _43.ConfigurationDescriptor;
                    toAmino(message: _43.ConfigurationDescriptor): _43.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _43.ConfigurationDescriptorAminoMsg): _43.ConfigurationDescriptor;
                    toAminoMsg(message: _43.ConfigurationDescriptor): _43.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _43.ConfigurationDescriptorProtoMsg): _43.ConfigurationDescriptor;
                    toProto(message: _43.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _43.ConfigurationDescriptor): _43.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _43.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.MsgDescriptor;
                    fromPartial(object: Partial<_43.MsgDescriptor>): _43.MsgDescriptor;
                    fromAmino(object: _43.MsgDescriptorAmino): _43.MsgDescriptor;
                    toAmino(message: _43.MsgDescriptor): _43.MsgDescriptorAmino;
                    fromAminoMsg(object: _43.MsgDescriptorAminoMsg): _43.MsgDescriptor;
                    toAminoMsg(message: _43.MsgDescriptor): _43.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _43.MsgDescriptorProtoMsg): _43.MsgDescriptor;
                    toProto(message: _43.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _43.MsgDescriptor): _43.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _43.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _43.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_43.GetAuthnDescriptorRequest>): _43.GetAuthnDescriptorRequest;
                    fromAmino(_: _43.GetAuthnDescriptorRequestAmino): _43.GetAuthnDescriptorRequest;
                    toAmino(_: _43.GetAuthnDescriptorRequest): _43.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _43.GetAuthnDescriptorRequestAminoMsg): _43.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _43.GetAuthnDescriptorRequest): _43.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _43.GetAuthnDescriptorRequestProtoMsg): _43.GetAuthnDescriptorRequest;
                    toProto(message: _43.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _43.GetAuthnDescriptorRequest): _43.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _43.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_43.GetAuthnDescriptorResponse>): _43.GetAuthnDescriptorResponse;
                    fromAmino(object: _43.GetAuthnDescriptorResponseAmino): _43.GetAuthnDescriptorResponse;
                    toAmino(message: _43.GetAuthnDescriptorResponse): _43.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _43.GetAuthnDescriptorResponseAminoMsg): _43.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _43.GetAuthnDescriptorResponse): _43.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _43.GetAuthnDescriptorResponseProtoMsg): _43.GetAuthnDescriptorResponse;
                    toProto(message: _43.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _43.GetAuthnDescriptorResponse): _43.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _43.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _43.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_43.GetChainDescriptorRequest>): _43.GetChainDescriptorRequest;
                    fromAmino(_: _43.GetChainDescriptorRequestAmino): _43.GetChainDescriptorRequest;
                    toAmino(_: _43.GetChainDescriptorRequest): _43.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _43.GetChainDescriptorRequestAminoMsg): _43.GetChainDescriptorRequest;
                    toAminoMsg(message: _43.GetChainDescriptorRequest): _43.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _43.GetChainDescriptorRequestProtoMsg): _43.GetChainDescriptorRequest;
                    toProto(message: _43.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _43.GetChainDescriptorRequest): _43.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _43.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_43.GetChainDescriptorResponse>): _43.GetChainDescriptorResponse;
                    fromAmino(object: _43.GetChainDescriptorResponseAmino): _43.GetChainDescriptorResponse;
                    toAmino(message: _43.GetChainDescriptorResponse): _43.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _43.GetChainDescriptorResponseAminoMsg): _43.GetChainDescriptorResponse;
                    toAminoMsg(message: _43.GetChainDescriptorResponse): _43.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _43.GetChainDescriptorResponseProtoMsg): _43.GetChainDescriptorResponse;
                    toProto(message: _43.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _43.GetChainDescriptorResponse): _43.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _43.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _43.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_43.GetCodecDescriptorRequest>): _43.GetCodecDescriptorRequest;
                    fromAmino(_: _43.GetCodecDescriptorRequestAmino): _43.GetCodecDescriptorRequest;
                    toAmino(_: _43.GetCodecDescriptorRequest): _43.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _43.GetCodecDescriptorRequestAminoMsg): _43.GetCodecDescriptorRequest;
                    toAminoMsg(message: _43.GetCodecDescriptorRequest): _43.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _43.GetCodecDescriptorRequestProtoMsg): _43.GetCodecDescriptorRequest;
                    toProto(message: _43.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _43.GetCodecDescriptorRequest): _43.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _43.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_43.GetCodecDescriptorResponse>): _43.GetCodecDescriptorResponse;
                    fromAmino(object: _43.GetCodecDescriptorResponseAmino): _43.GetCodecDescriptorResponse;
                    toAmino(message: _43.GetCodecDescriptorResponse): _43.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _43.GetCodecDescriptorResponseAminoMsg): _43.GetCodecDescriptorResponse;
                    toAminoMsg(message: _43.GetCodecDescriptorResponse): _43.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _43.GetCodecDescriptorResponseProtoMsg): _43.GetCodecDescriptorResponse;
                    toProto(message: _43.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _43.GetCodecDescriptorResponse): _43.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _43.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _43.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_43.GetConfigurationDescriptorRequest>): _43.GetConfigurationDescriptorRequest;
                    fromAmino(_: _43.GetConfigurationDescriptorRequestAmino): _43.GetConfigurationDescriptorRequest;
                    toAmino(_: _43.GetConfigurationDescriptorRequest): _43.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _43.GetConfigurationDescriptorRequestAminoMsg): _43.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _43.GetConfigurationDescriptorRequest): _43.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _43.GetConfigurationDescriptorRequestProtoMsg): _43.GetConfigurationDescriptorRequest;
                    toProto(message: _43.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _43.GetConfigurationDescriptorRequest): _43.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _43.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_43.GetConfigurationDescriptorResponse>): _43.GetConfigurationDescriptorResponse;
                    fromAmino(object: _43.GetConfigurationDescriptorResponseAmino): _43.GetConfigurationDescriptorResponse;
                    toAmino(message: _43.GetConfigurationDescriptorResponse): _43.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _43.GetConfigurationDescriptorResponseAminoMsg): _43.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _43.GetConfigurationDescriptorResponse): _43.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _43.GetConfigurationDescriptorResponseProtoMsg): _43.GetConfigurationDescriptorResponse;
                    toProto(message: _43.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _43.GetConfigurationDescriptorResponse): _43.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _43.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _43.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_43.GetQueryServicesDescriptorRequest>): _43.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _43.GetQueryServicesDescriptorRequestAmino): _43.GetQueryServicesDescriptorRequest;
                    toAmino(_: _43.GetQueryServicesDescriptorRequest): _43.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _43.GetQueryServicesDescriptorRequestAminoMsg): _43.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _43.GetQueryServicesDescriptorRequest): _43.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _43.GetQueryServicesDescriptorRequestProtoMsg): _43.GetQueryServicesDescriptorRequest;
                    toProto(message: _43.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _43.GetQueryServicesDescriptorRequest): _43.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _43.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_43.GetQueryServicesDescriptorResponse>): _43.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _43.GetQueryServicesDescriptorResponseAmino): _43.GetQueryServicesDescriptorResponse;
                    toAmino(message: _43.GetQueryServicesDescriptorResponse): _43.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _43.GetQueryServicesDescriptorResponseAminoMsg): _43.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _43.GetQueryServicesDescriptorResponse): _43.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _43.GetQueryServicesDescriptorResponseProtoMsg): _43.GetQueryServicesDescriptorResponse;
                    toProto(message: _43.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _43.GetQueryServicesDescriptorResponse): _43.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _43.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _43.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_43.GetTxDescriptorRequest>): _43.GetTxDescriptorRequest;
                    fromAmino(_: _43.GetTxDescriptorRequestAmino): _43.GetTxDescriptorRequest;
                    toAmino(_: _43.GetTxDescriptorRequest): _43.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _43.GetTxDescriptorRequestAminoMsg): _43.GetTxDescriptorRequest;
                    toAminoMsg(message: _43.GetTxDescriptorRequest): _43.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _43.GetTxDescriptorRequestProtoMsg): _43.GetTxDescriptorRequest;
                    toProto(message: _43.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _43.GetTxDescriptorRequest): _43.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _43.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_43.GetTxDescriptorResponse>): _43.GetTxDescriptorResponse;
                    fromAmino(object: _43.GetTxDescriptorResponseAmino): _43.GetTxDescriptorResponse;
                    toAmino(message: _43.GetTxDescriptorResponse): _43.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _43.GetTxDescriptorResponseAminoMsg): _43.GetTxDescriptorResponse;
                    toAminoMsg(message: _43.GetTxDescriptorResponse): _43.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _43.GetTxDescriptorResponseProtoMsg): _43.GetTxDescriptorResponse;
                    toProto(message: _43.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _43.GetTxDescriptorResponse): _43.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _43.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.QueryServicesDescriptor;
                    fromPartial(object: Partial<_43.QueryServicesDescriptor>): _43.QueryServicesDescriptor;
                    fromAmino(object: _43.QueryServicesDescriptorAmino): _43.QueryServicesDescriptor;
                    toAmino(message: _43.QueryServicesDescriptor): _43.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _43.QueryServicesDescriptorAminoMsg): _43.QueryServicesDescriptor;
                    toAminoMsg(message: _43.QueryServicesDescriptor): _43.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _43.QueryServicesDescriptorProtoMsg): _43.QueryServicesDescriptor;
                    toProto(message: _43.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _43.QueryServicesDescriptor): _43.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _43.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.QueryServiceDescriptor;
                    fromPartial(object: Partial<_43.QueryServiceDescriptor>): _43.QueryServiceDescriptor;
                    fromAmino(object: _43.QueryServiceDescriptorAmino): _43.QueryServiceDescriptor;
                    toAmino(message: _43.QueryServiceDescriptor): _43.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _43.QueryServiceDescriptorAminoMsg): _43.QueryServiceDescriptor;
                    toAminoMsg(message: _43.QueryServiceDescriptor): _43.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _43.QueryServiceDescriptorProtoMsg): _43.QueryServiceDescriptor;
                    toProto(message: _43.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _43.QueryServiceDescriptor): _43.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _43.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.QueryMethodDescriptor;
                    fromPartial(object: Partial<_43.QueryMethodDescriptor>): _43.QueryMethodDescriptor;
                    fromAmino(object: _43.QueryMethodDescriptorAmino): _43.QueryMethodDescriptor;
                    toAmino(message: _43.QueryMethodDescriptor): _43.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _43.QueryMethodDescriptorAminoMsg): _43.QueryMethodDescriptor;
                    toAminoMsg(message: _43.QueryMethodDescriptor): _43.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _43.QueryMethodDescriptorProtoMsg): _43.QueryMethodDescriptor;
                    toProto(message: _43.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _43.QueryMethodDescriptor): _43.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _44.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.Snapshot;
                    fromPartial(object: Partial<_44.Snapshot>): _44.Snapshot;
                    fromAmino(object: _44.SnapshotAmino): _44.Snapshot;
                    toAmino(message: _44.Snapshot): _44.SnapshotAmino;
                    fromAminoMsg(object: _44.SnapshotAminoMsg): _44.Snapshot;
                    toAminoMsg(message: _44.Snapshot): _44.SnapshotAminoMsg;
                    fromProtoMsg(message: _44.SnapshotProtoMsg): _44.Snapshot;
                    toProto(message: _44.Snapshot): Uint8Array;
                    toProtoMsg(message: _44.Snapshot): _44.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _44.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.Metadata;
                    fromPartial(object: Partial<_44.Metadata>): _44.Metadata;
                    fromAmino(object: _44.MetadataAmino): _44.Metadata;
                    toAmino(message: _44.Metadata): _44.MetadataAmino;
                    fromAminoMsg(object: _44.MetadataAminoMsg): _44.Metadata;
                    toAminoMsg(message: _44.Metadata): _44.MetadataAminoMsg;
                    fromProtoMsg(message: _44.MetadataProtoMsg): _44.Metadata;
                    toProto(message: _44.Metadata): Uint8Array;
                    toProtoMsg(message: _44.Metadata): _44.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _44.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.SnapshotItem;
                    fromPartial(object: Partial<_44.SnapshotItem>): _44.SnapshotItem;
                    fromAmino(object: _44.SnapshotItemAmino): _44.SnapshotItem;
                    toAmino(message: _44.SnapshotItem): _44.SnapshotItemAmino;
                    fromAminoMsg(object: _44.SnapshotItemAminoMsg): _44.SnapshotItem;
                    toAminoMsg(message: _44.SnapshotItem): _44.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _44.SnapshotItemProtoMsg): _44.SnapshotItem;
                    toProto(message: _44.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _44.SnapshotItem): _44.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _44.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.SnapshotStoreItem;
                    fromPartial(object: Partial<_44.SnapshotStoreItem>): _44.SnapshotStoreItem;
                    fromAmino(object: _44.SnapshotStoreItemAmino): _44.SnapshotStoreItem;
                    toAmino(message: _44.SnapshotStoreItem): _44.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _44.SnapshotStoreItemAminoMsg): _44.SnapshotStoreItem;
                    toAminoMsg(message: _44.SnapshotStoreItem): _44.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _44.SnapshotStoreItemProtoMsg): _44.SnapshotStoreItem;
                    toProto(message: _44.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _44.SnapshotStoreItem): _44.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _44.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.SnapshotIAVLItem;
                    fromPartial(object: Partial<_44.SnapshotIAVLItem>): _44.SnapshotIAVLItem;
                    fromAmino(object: _44.SnapshotIAVLItemAmino): _44.SnapshotIAVLItem;
                    toAmino(message: _44.SnapshotIAVLItem): _44.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _44.SnapshotIAVLItemAminoMsg): _44.SnapshotIAVLItem;
                    toAminoMsg(message: _44.SnapshotIAVLItem): _44.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _44.SnapshotIAVLItemProtoMsg): _44.SnapshotIAVLItem;
                    toProto(message: _44.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _44.SnapshotIAVLItem): _44.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _44.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_44.SnapshotExtensionMeta>): _44.SnapshotExtensionMeta;
                    fromAmino(object: _44.SnapshotExtensionMetaAmino): _44.SnapshotExtensionMeta;
                    toAmino(message: _44.SnapshotExtensionMeta): _44.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _44.SnapshotExtensionMetaAminoMsg): _44.SnapshotExtensionMeta;
                    toAminoMsg(message: _44.SnapshotExtensionMeta): _44.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _44.SnapshotExtensionMetaProtoMsg): _44.SnapshotExtensionMeta;
                    toProto(message: _44.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _44.SnapshotExtensionMeta): _44.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _44.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_44.SnapshotExtensionPayload>): _44.SnapshotExtensionPayload;
                    fromAmino(object: _44.SnapshotExtensionPayloadAmino): _44.SnapshotExtensionPayload;
                    toAmino(message: _44.SnapshotExtensionPayload): _44.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _44.SnapshotExtensionPayloadAminoMsg): _44.SnapshotExtensionPayload;
                    toAminoMsg(message: _44.SnapshotExtensionPayload): _44.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _44.SnapshotExtensionPayloadProtoMsg): _44.SnapshotExtensionPayload;
                    toProto(message: _44.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _44.SnapshotExtensionPayload): _44.SnapshotExtensionPayloadProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _47.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.SnapshotItem;
                    fromPartial(object: Partial<_47.SnapshotItem>): _47.SnapshotItem;
                    fromAmino(object: _47.SnapshotItemAmino): _47.SnapshotItem;
                    toAmino(message: _47.SnapshotItem): _47.SnapshotItemAmino;
                    fromAminoMsg(object: _47.SnapshotItemAminoMsg): _47.SnapshotItem;
                    toAminoMsg(message: _47.SnapshotItem): _47.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _47.SnapshotItemProtoMsg): _47.SnapshotItem;
                    toProto(message: _47.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _47.SnapshotItem): _47.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _47.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.SnapshotStoreItem;
                    fromPartial(object: Partial<_47.SnapshotStoreItem>): _47.SnapshotStoreItem;
                    fromAmino(object: _47.SnapshotStoreItemAmino): _47.SnapshotStoreItem;
                    toAmino(message: _47.SnapshotStoreItem): _47.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _47.SnapshotStoreItemAminoMsg): _47.SnapshotStoreItem;
                    toAminoMsg(message: _47.SnapshotStoreItem): _47.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _47.SnapshotStoreItemProtoMsg): _47.SnapshotStoreItem;
                    toProto(message: _47.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _47.SnapshotStoreItem): _47.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _47.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.SnapshotIAVLItem;
                    fromPartial(object: Partial<_47.SnapshotIAVLItem>): _47.SnapshotIAVLItem;
                    fromAmino(object: _47.SnapshotIAVLItemAmino): _47.SnapshotIAVLItem;
                    toAmino(message: _47.SnapshotIAVLItem): _47.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _47.SnapshotIAVLItemAminoMsg): _47.SnapshotIAVLItem;
                    toAminoMsg(message: _47.SnapshotIAVLItem): _47.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _47.SnapshotIAVLItemProtoMsg): _47.SnapshotIAVLItem;
                    toProto(message: _47.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _47.SnapshotIAVLItem): _47.SnapshotIAVLItemProtoMsg;
                };
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _46.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.StoreKVPair;
                    fromPartial(object: Partial<_46.StoreKVPair>): _46.StoreKVPair;
                    fromAmino(object: _46.StoreKVPairAmino): _46.StoreKVPair;
                    toAmino(message: _46.StoreKVPair): _46.StoreKVPairAmino;
                    fromAminoMsg(object: _46.StoreKVPairAminoMsg): _46.StoreKVPair;
                    toAminoMsg(message: _46.StoreKVPair): _46.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _46.StoreKVPairProtoMsg): _46.StoreKVPair;
                    toProto(message: _46.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _46.StoreKVPair): _46.StoreKVPairProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _45.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.CommitInfo;
                    fromPartial(object: Partial<_45.CommitInfo>): _45.CommitInfo;
                    fromAmino(object: _45.CommitInfoAmino): _45.CommitInfo;
                    toAmino(message: _45.CommitInfo): _45.CommitInfoAmino;
                    fromAminoMsg(object: _45.CommitInfoAminoMsg): _45.CommitInfo;
                    toAminoMsg(message: _45.CommitInfo): _45.CommitInfoAminoMsg;
                    fromProtoMsg(message: _45.CommitInfoProtoMsg): _45.CommitInfo;
                    toProto(message: _45.CommitInfo): Uint8Array;
                    toProtoMsg(message: _45.CommitInfo): _45.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _45.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.StoreInfo;
                    fromPartial(object: Partial<_45.StoreInfo>): _45.StoreInfo;
                    fromAmino(object: _45.StoreInfoAmino): _45.StoreInfo;
                    toAmino(message: _45.StoreInfo): _45.StoreInfoAmino;
                    fromAminoMsg(object: _45.StoreInfoAminoMsg): _45.StoreInfo;
                    toAminoMsg(message: _45.StoreInfo): _45.StoreInfoAminoMsg;
                    fromProtoMsg(message: _45.StoreInfoProtoMsg): _45.StoreInfo;
                    toProto(message: _45.StoreInfo): Uint8Array;
                    toProtoMsg(message: _45.StoreInfo): _45.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _45.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.CommitID;
                    fromPartial(object: Partial<_45.CommitID>): _45.CommitID;
                    fromAmino(object: _45.CommitIDAmino): _45.CommitID;
                    toAmino(message: _45.CommitID): _45.CommitIDAmino;
                    fromAminoMsg(object: _45.CommitIDAminoMsg): _45.CommitID;
                    toAminoMsg(message: _45.CommitID): _45.CommitIDAminoMsg;
                    fromProtoMsg(message: _45.CommitIDProtoMsg): _45.CommitID;
                    toProto(message: _45.CommitID): Uint8Array;
                    toProtoMsg(message: _45.CommitID): _45.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _195.ServiceClientImpl;
                createRpcQueryExtension: (base: QueryClient) => {
                    getNodeInfo(request?: _48.GetNodeInfoRequest): Promise<_48.GetNodeInfoResponse>;
                    getSyncing(request?: _48.GetSyncingRequest): Promise<_48.GetSyncingResponse>;
                    getLatestBlock(request?: _48.GetLatestBlockRequest): Promise<_48.GetLatestBlockResponse>;
                    getBlockByHeight(request: _48.GetBlockByHeightRequest): Promise<_48.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _48.GetLatestValidatorSetRequest): Promise<_48.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _48.GetValidatorSetByHeightRequest): Promise<_48.GetValidatorSetByHeightResponse>;
                };
                LCDQueryClient: typeof _180.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _48.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_48.GetValidatorSetByHeightRequest>): _48.GetValidatorSetByHeightRequest;
                    fromAmino(object: _48.GetValidatorSetByHeightRequestAmino): _48.GetValidatorSetByHeightRequest;
                    toAmino(message: _48.GetValidatorSetByHeightRequest): _48.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _48.GetValidatorSetByHeightRequestAminoMsg): _48.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _48.GetValidatorSetByHeightRequest): _48.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _48.GetValidatorSetByHeightRequestProtoMsg): _48.GetValidatorSetByHeightRequest;
                    toProto(message: _48.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _48.GetValidatorSetByHeightRequest): _48.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _48.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_48.GetValidatorSetByHeightResponse>): _48.GetValidatorSetByHeightResponse;
                    fromAmino(object: _48.GetValidatorSetByHeightResponseAmino): _48.GetValidatorSetByHeightResponse;
                    toAmino(message: _48.GetValidatorSetByHeightResponse): _48.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _48.GetValidatorSetByHeightResponseAminoMsg): _48.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _48.GetValidatorSetByHeightResponse): _48.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _48.GetValidatorSetByHeightResponseProtoMsg): _48.GetValidatorSetByHeightResponse;
                    toProto(message: _48.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _48.GetValidatorSetByHeightResponse): _48.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _48.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_48.GetLatestValidatorSetRequest>): _48.GetLatestValidatorSetRequest;
                    fromAmino(object: _48.GetLatestValidatorSetRequestAmino): _48.GetLatestValidatorSetRequest;
                    toAmino(message: _48.GetLatestValidatorSetRequest): _48.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _48.GetLatestValidatorSetRequestAminoMsg): _48.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _48.GetLatestValidatorSetRequest): _48.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _48.GetLatestValidatorSetRequestProtoMsg): _48.GetLatestValidatorSetRequest;
                    toProto(message: _48.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _48.GetLatestValidatorSetRequest): _48.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _48.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_48.GetLatestValidatorSetResponse>): _48.GetLatestValidatorSetResponse;
                    fromAmino(object: _48.GetLatestValidatorSetResponseAmino): _48.GetLatestValidatorSetResponse;
                    toAmino(message: _48.GetLatestValidatorSetResponse): _48.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _48.GetLatestValidatorSetResponseAminoMsg): _48.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _48.GetLatestValidatorSetResponse): _48.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _48.GetLatestValidatorSetResponseProtoMsg): _48.GetLatestValidatorSetResponse;
                    toProto(message: _48.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _48.GetLatestValidatorSetResponse): _48.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _48.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.Validator;
                    fromPartial(object: Partial<_48.Validator>): _48.Validator;
                    fromAmino(object: _48.ValidatorAmino): _48.Validator;
                    toAmino(message: _48.Validator): _48.ValidatorAmino;
                    fromAminoMsg(object: _48.ValidatorAminoMsg): _48.Validator;
                    toAminoMsg(message: _48.Validator): _48.ValidatorAminoMsg;
                    fromProtoMsg(message: _48.ValidatorProtoMsg): _48.Validator;
                    toProto(message: _48.Validator): Uint8Array;
                    toProtoMsg(message: _48.Validator): _48.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _48.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_48.GetBlockByHeightRequest>): _48.GetBlockByHeightRequest;
                    fromAmino(object: _48.GetBlockByHeightRequestAmino): _48.GetBlockByHeightRequest;
                    toAmino(message: _48.GetBlockByHeightRequest): _48.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _48.GetBlockByHeightRequestAminoMsg): _48.GetBlockByHeightRequest;
                    toAminoMsg(message: _48.GetBlockByHeightRequest): _48.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _48.GetBlockByHeightRequestProtoMsg): _48.GetBlockByHeightRequest;
                    toProto(message: _48.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _48.GetBlockByHeightRequest): _48.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _48.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_48.GetBlockByHeightResponse>): _48.GetBlockByHeightResponse;
                    fromAmino(object: _48.GetBlockByHeightResponseAmino): _48.GetBlockByHeightResponse;
                    toAmino(message: _48.GetBlockByHeightResponse): _48.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _48.GetBlockByHeightResponseAminoMsg): _48.GetBlockByHeightResponse;
                    toAminoMsg(message: _48.GetBlockByHeightResponse): _48.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _48.GetBlockByHeightResponseProtoMsg): _48.GetBlockByHeightResponse;
                    toProto(message: _48.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _48.GetBlockByHeightResponse): _48.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _48.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _48.GetLatestBlockRequest;
                    fromPartial(_: Partial<_48.GetLatestBlockRequest>): _48.GetLatestBlockRequest;
                    fromAmino(_: _48.GetLatestBlockRequestAmino): _48.GetLatestBlockRequest;
                    toAmino(_: _48.GetLatestBlockRequest): _48.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _48.GetLatestBlockRequestAminoMsg): _48.GetLatestBlockRequest;
                    toAminoMsg(message: _48.GetLatestBlockRequest): _48.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _48.GetLatestBlockRequestProtoMsg): _48.GetLatestBlockRequest;
                    toProto(message: _48.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _48.GetLatestBlockRequest): _48.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _48.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.GetLatestBlockResponse;
                    fromPartial(object: Partial<_48.GetLatestBlockResponse>): _48.GetLatestBlockResponse;
                    fromAmino(object: _48.GetLatestBlockResponseAmino): _48.GetLatestBlockResponse;
                    toAmino(message: _48.GetLatestBlockResponse): _48.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _48.GetLatestBlockResponseAminoMsg): _48.GetLatestBlockResponse;
                    toAminoMsg(message: _48.GetLatestBlockResponse): _48.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _48.GetLatestBlockResponseProtoMsg): _48.GetLatestBlockResponse;
                    toProto(message: _48.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _48.GetLatestBlockResponse): _48.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _48.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _48.GetSyncingRequest;
                    fromPartial(_: Partial<_48.GetSyncingRequest>): _48.GetSyncingRequest;
                    fromAmino(_: _48.GetSyncingRequestAmino): _48.GetSyncingRequest;
                    toAmino(_: _48.GetSyncingRequest): _48.GetSyncingRequestAmino;
                    fromAminoMsg(object: _48.GetSyncingRequestAminoMsg): _48.GetSyncingRequest;
                    toAminoMsg(message: _48.GetSyncingRequest): _48.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _48.GetSyncingRequestProtoMsg): _48.GetSyncingRequest;
                    toProto(message: _48.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _48.GetSyncingRequest): _48.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _48.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.GetSyncingResponse;
                    fromPartial(object: Partial<_48.GetSyncingResponse>): _48.GetSyncingResponse;
                    fromAmino(object: _48.GetSyncingResponseAmino): _48.GetSyncingResponse;
                    toAmino(message: _48.GetSyncingResponse): _48.GetSyncingResponseAmino;
                    fromAminoMsg(object: _48.GetSyncingResponseAminoMsg): _48.GetSyncingResponse;
                    toAminoMsg(message: _48.GetSyncingResponse): _48.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _48.GetSyncingResponseProtoMsg): _48.GetSyncingResponse;
                    toProto(message: _48.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _48.GetSyncingResponse): _48.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _48.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _48.GetNodeInfoRequest;
                    fromPartial(_: Partial<_48.GetNodeInfoRequest>): _48.GetNodeInfoRequest;
                    fromAmino(_: _48.GetNodeInfoRequestAmino): _48.GetNodeInfoRequest;
                    toAmino(_: _48.GetNodeInfoRequest): _48.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _48.GetNodeInfoRequestAminoMsg): _48.GetNodeInfoRequest;
                    toAminoMsg(message: _48.GetNodeInfoRequest): _48.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _48.GetNodeInfoRequestProtoMsg): _48.GetNodeInfoRequest;
                    toProto(message: _48.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _48.GetNodeInfoRequest): _48.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _48.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.GetNodeInfoResponse;
                    fromPartial(object: Partial<_48.GetNodeInfoResponse>): _48.GetNodeInfoResponse;
                    fromAmino(object: _48.GetNodeInfoResponseAmino): _48.GetNodeInfoResponse;
                    toAmino(message: _48.GetNodeInfoResponse): _48.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _48.GetNodeInfoResponseAminoMsg): _48.GetNodeInfoResponse;
                    toAminoMsg(message: _48.GetNodeInfoResponse): _48.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _48.GetNodeInfoResponseProtoMsg): _48.GetNodeInfoResponse;
                    toProto(message: _48.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _48.GetNodeInfoResponse): _48.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _48.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.VersionInfo;
                    fromPartial(object: Partial<_48.VersionInfo>): _48.VersionInfo;
                    fromAmino(object: _48.VersionInfoAmino): _48.VersionInfo;
                    toAmino(message: _48.VersionInfo): _48.VersionInfoAmino;
                    fromAminoMsg(object: _48.VersionInfoAminoMsg): _48.VersionInfo;
                    toAminoMsg(message: _48.VersionInfo): _48.VersionInfoAminoMsg;
                    fromProtoMsg(message: _48.VersionInfoProtoMsg): _48.VersionInfo;
                    toProto(message: _48.VersionInfo): Uint8Array;
                    toProtoMsg(message: _48.VersionInfo): _48.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _48.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.Module;
                    fromPartial(object: Partial<_48.Module>): _48.Module;
                    fromAmino(object: _48.ModuleAmino): _48.Module;
                    toAmino(message: _48.Module): _48.ModuleAmino;
                    fromAminoMsg(object: _48.ModuleAminoMsg): _48.Module;
                    toAminoMsg(message: _48.Module): _48.ModuleAminoMsg;
                    fromProtoMsg(message: _48.ModuleProtoMsg): _48.Module;
                    toProto(message: _48.Module): Uint8Array;
                    toProtoMsg(message: _48.Module): _48.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _49.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.Coin;
                fromPartial(object: Partial<_49.Coin>): _49.Coin;
                fromAmino(object: _49.CoinAmino): _49.Coin;
                toAmino(message: _49.Coin): _49.CoinAmino;
                fromAminoMsg(object: _49.CoinAminoMsg): _49.Coin;
                toAminoMsg(message: _49.Coin): _49.CoinAminoMsg;
                fromProtoMsg(message: _49.CoinProtoMsg): _49.Coin;
                toProto(message: _49.Coin): Uint8Array;
                toProtoMsg(message: _49.Coin): _49.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _49.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.DecCoin;
                fromPartial(object: Partial<_49.DecCoin>): _49.DecCoin;
                fromAmino(object: _49.DecCoinAmino): _49.DecCoin;
                toAmino(message: _49.DecCoin): _49.DecCoinAmino;
                fromAminoMsg(object: _49.DecCoinAminoMsg): _49.DecCoin;
                toAminoMsg(message: _49.DecCoin): _49.DecCoinAminoMsg;
                fromProtoMsg(message: _49.DecCoinProtoMsg): _49.DecCoin;
                toProto(message: _49.DecCoin): Uint8Array;
                toProtoMsg(message: _49.DecCoin): _49.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _49.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.IntProto;
                fromPartial(object: Partial<_49.IntProto>): _49.IntProto;
                fromAmino(object: _49.IntProtoAmino): _49.IntProto;
                toAmino(message: _49.IntProto): _49.IntProtoAmino;
                fromAminoMsg(object: _49.IntProtoAminoMsg): _49.IntProto;
                toAminoMsg(message: _49.IntProto): _49.IntProtoAminoMsg;
                fromProtoMsg(message: _49.IntProtoProtoMsg): _49.IntProto;
                toProto(message: _49.IntProto): Uint8Array;
                toProtoMsg(message: _49.IntProto): _49.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _49.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.DecProto;
                fromPartial(object: Partial<_49.DecProto>): _49.DecProto;
                fromAmino(object: _49.DecProtoAmino): _49.DecProto;
                toAmino(message: _49.DecProto): _49.DecProtoAmino;
                fromAminoMsg(object: _49.DecProtoAminoMsg): _49.DecProto;
                toAminoMsg(message: _49.DecProto): _49.DecProtoAminoMsg;
                fromProtoMsg(message: _49.DecProtoProtoMsg): _49.DecProto;
                toProto(message: _49.DecProto): Uint8Array;
                toProtoMsg(message: _49.DecProto): _49.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _51.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.GenesisOwners;
                fromPartial(object: Partial<_51.GenesisOwners>): _51.GenesisOwners;
                fromAmino(object: _51.GenesisOwnersAmino): _51.GenesisOwners;
                toAmino(message: _51.GenesisOwners): _51.GenesisOwnersAmino;
                fromAminoMsg(object: _51.GenesisOwnersAminoMsg): _51.GenesisOwners;
                toAminoMsg(message: _51.GenesisOwners): _51.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _51.GenesisOwnersProtoMsg): _51.GenesisOwners;
                toProto(message: _51.GenesisOwners): Uint8Array;
                toProtoMsg(message: _51.GenesisOwners): _51.GenesisOwnersProtoMsg;
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
            Capability: {
                typeUrl: string;
                encode(message: _50.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.Capability;
                fromPartial(object: Partial<_50.Capability>): _50.Capability;
                fromAmino(object: _50.CapabilityAmino): _50.Capability;
                toAmino(message: _50.Capability): _50.CapabilityAmino;
                fromAminoMsg(object: _50.CapabilityAminoMsg): _50.Capability;
                toAminoMsg(message: _50.Capability): _50.CapabilityAminoMsg;
                fromProtoMsg(message: _50.CapabilityProtoMsg): _50.Capability;
                toProto(message: _50.Capability): Uint8Array;
                toProtoMsg(message: _50.Capability): _50.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _50.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.Owner;
                fromPartial(object: Partial<_50.Owner>): _50.Owner;
                fromAmino(object: _50.OwnerAmino): _50.Owner;
                toAmino(message: _50.Owner): _50.OwnerAmino;
                fromAminoMsg(object: _50.OwnerAminoMsg): _50.Owner;
                toAminoMsg(message: _50.Owner): _50.OwnerAminoMsg;
                fromProtoMsg(message: _50.OwnerProtoMsg): _50.Owner;
                toProto(message: _50.Owner): Uint8Array;
                toProtoMsg(message: _50.Owner): _50.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _50.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.CapabilityOwners;
                fromPartial(object: Partial<_50.CapabilityOwners>): _50.CapabilityOwners;
                fromAmino(object: _50.CapabilityOwnersAmino): _50.CapabilityOwners;
                toAmino(message: _50.CapabilityOwners): _50.CapabilityOwnersAmino;
                fromAminoMsg(object: _50.CapabilityOwnersAminoMsg): _50.CapabilityOwners;
                toAminoMsg(message: _50.CapabilityOwners): _50.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _50.CapabilityOwnersProtoMsg): _50.CapabilityOwners;
                toProto(message: _50.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _50.CapabilityOwners): _50.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _208.MsgClientImpl;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _53.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _53.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _53.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _53.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _53.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _53.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _53.MsgVerifyInvariant) => _53.MsgVerifyInvariantAmino;
                    fromAmino: (object: _53.MsgVerifyInvariantAmino) => _53.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _53.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.MsgVerifyInvariant;
                fromPartial(object: Partial<_53.MsgVerifyInvariant>): _53.MsgVerifyInvariant;
                fromAmino(object: _53.MsgVerifyInvariantAmino): _53.MsgVerifyInvariant;
                toAmino(message: _53.MsgVerifyInvariant): _53.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _53.MsgVerifyInvariantAminoMsg): _53.MsgVerifyInvariant;
                toAminoMsg(message: _53.MsgVerifyInvariant): _53.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _53.MsgVerifyInvariantProtoMsg): _53.MsgVerifyInvariant;
                toProto(message: _53.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _53.MsgVerifyInvariant): _53.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _53.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _53.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_53.MsgVerifyInvariantResponse>): _53.MsgVerifyInvariantResponse;
                fromAmino(_: _53.MsgVerifyInvariantResponseAmino): _53.MsgVerifyInvariantResponse;
                toAmino(_: _53.MsgVerifyInvariantResponse): _53.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _53.MsgVerifyInvariantResponseAminoMsg): _53.MsgVerifyInvariantResponse;
                toAminoMsg(message: _53.MsgVerifyInvariantResponse): _53.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _53.MsgVerifyInvariantResponseProtoMsg): _53.MsgVerifyInvariantResponse;
                toProto(message: _53.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _53.MsgVerifyInvariantResponse): _53.MsgVerifyInvariantResponseProtoMsg;
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
    namespace crypto {
        const ed25519: {
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
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _55.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.LegacyAminoPubKey;
                fromPartial(object: Partial<_55.LegacyAminoPubKey>): _55.LegacyAminoPubKey;
                fromAmino(object: _55.LegacyAminoPubKeyAmino): _55.LegacyAminoPubKey;
                toAmino(message: _55.LegacyAminoPubKey): _55.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _55.LegacyAminoPubKeyAminoMsg): _55.LegacyAminoPubKey;
                toAminoMsg(message: _55.LegacyAminoPubKey): _55.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _55.LegacyAminoPubKeyProtoMsg): _55.LegacyAminoPubKey;
                toProto(message: _55.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _55.LegacyAminoPubKey): _55.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _56.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.PubKey;
                fromPartial(object: Partial<_56.PubKey>): _56.PubKey;
                fromAmino(object: _56.PubKeyAmino): _56.PubKey;
                toAmino(message: _56.PubKey): _56.PubKeyAmino;
                fromAminoMsg(object: _56.PubKeyAminoMsg): _56.PubKey;
                toAminoMsg(message: _56.PubKey): _56.PubKeyAminoMsg;
                fromProtoMsg(message: _56.PubKeyProtoMsg): _56.PubKey;
                toProto(message: _56.PubKey): Uint8Array;
                toProtoMsg(message: _56.PubKey): _56.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _56.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.PrivKey;
                fromPartial(object: Partial<_56.PrivKey>): _56.PrivKey;
                fromAmino(object: _56.PrivKeyAmino): _56.PrivKey;
                toAmino(message: _56.PrivKey): _56.PrivKeyAmino;
                fromAminoMsg(object: _56.PrivKeyAminoMsg): _56.PrivKey;
                toAminoMsg(message: _56.PrivKey): _56.PrivKeyAminoMsg;
                fromProtoMsg(message: _56.PrivKeyProtoMsg): _56.PrivKey;
                toProto(message: _56.PrivKey): Uint8Array;
                toProtoMsg(message: _56.PrivKey): _56.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _57.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.PubKey;
                fromPartial(object: Partial<_57.PubKey>): _57.PubKey;
                fromAmino(object: _57.PubKeyAmino): _57.PubKey;
                toAmino(message: _57.PubKey): _57.PubKeyAmino;
                fromAminoMsg(object: _57.PubKeyAminoMsg): _57.PubKey;
                toAminoMsg(message: _57.PubKey): _57.PubKeyAminoMsg;
                fromProtoMsg(message: _57.PubKeyProtoMsg): _57.PubKey;
                toProto(message: _57.PubKey): Uint8Array;
                toProtoMsg(message: _57.PubKey): _57.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _57.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.PrivKey;
                fromPartial(object: Partial<_57.PrivKey>): _57.PrivKey;
                fromAmino(object: _57.PrivKeyAmino): _57.PrivKey;
                toAmino(message: _57.PrivKey): _57.PrivKeyAmino;
                fromAminoMsg(object: _57.PrivKeyAminoMsg): _57.PrivKey;
                toAminoMsg(message: _57.PrivKey): _57.PrivKeyAminoMsg;
                fromProtoMsg(message: _57.PrivKeyProtoMsg): _57.PrivKey;
                toProto(message: _57.PrivKey): Uint8Array;
                toProtoMsg(message: _57.PrivKey): _57.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _209.MsgClientImpl;
            QueryClientImpl: typeof _196.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _60.QueryParamsRequest): Promise<_60.QueryParamsResponse>;
                validatorOutstandingRewards(request: _60.QueryValidatorOutstandingRewardsRequest): Promise<_60.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _60.QueryValidatorCommissionRequest): Promise<_60.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _60.QueryValidatorSlashesRequest): Promise<_60.QueryValidatorSlashesResponse>;
                delegationRewards(request: _60.QueryDelegationRewardsRequest): Promise<_60.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _60.QueryDelegationTotalRewardsRequest): Promise<_60.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _60.QueryDelegatorValidatorsRequest): Promise<_60.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _60.QueryDelegatorWithdrawAddressRequest): Promise<_60.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _60.QueryCommunityPoolRequest): Promise<_60.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _181.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _61.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _61.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _61.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _61.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _61.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _61.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _61.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _61.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _61.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _61.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _61.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _61.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _61.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _61.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _61.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _61.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _61.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _61.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _61.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _61.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _61.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _61.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _61.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _61.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _61.MsgSetWithdrawAddress) => _61.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _61.MsgSetWithdrawAddressAmino) => _61.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _61.MsgWithdrawDelegatorReward) => _61.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _61.MsgWithdrawDelegatorRewardAmino) => _61.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _61.MsgWithdrawValidatorCommission) => _61.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _61.MsgWithdrawValidatorCommissionAmino) => _61.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _61.MsgFundCommunityPool) => _61.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _61.MsgFundCommunityPoolAmino) => _61.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _61.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_61.MsgSetWithdrawAddress>): _61.MsgSetWithdrawAddress;
                fromAmino(object: _61.MsgSetWithdrawAddressAmino): _61.MsgSetWithdrawAddress;
                toAmino(message: _61.MsgSetWithdrawAddress): _61.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _61.MsgSetWithdrawAddressAminoMsg): _61.MsgSetWithdrawAddress;
                toAminoMsg(message: _61.MsgSetWithdrawAddress): _61.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _61.MsgSetWithdrawAddressProtoMsg): _61.MsgSetWithdrawAddress;
                toProto(message: _61.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _61.MsgSetWithdrawAddress): _61.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _61.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _61.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_61.MsgSetWithdrawAddressResponse>): _61.MsgSetWithdrawAddressResponse;
                fromAmino(_: _61.MsgSetWithdrawAddressResponseAmino): _61.MsgSetWithdrawAddressResponse;
                toAmino(_: _61.MsgSetWithdrawAddressResponse): _61.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _61.MsgSetWithdrawAddressResponseAminoMsg): _61.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _61.MsgSetWithdrawAddressResponse): _61.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _61.MsgSetWithdrawAddressResponseProtoMsg): _61.MsgSetWithdrawAddressResponse;
                toProto(message: _61.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _61.MsgSetWithdrawAddressResponse): _61.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _61.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_61.MsgWithdrawDelegatorReward>): _61.MsgWithdrawDelegatorReward;
                fromAmino(object: _61.MsgWithdrawDelegatorRewardAmino): _61.MsgWithdrawDelegatorReward;
                toAmino(message: _61.MsgWithdrawDelegatorReward): _61.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _61.MsgWithdrawDelegatorRewardAminoMsg): _61.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _61.MsgWithdrawDelegatorReward): _61.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _61.MsgWithdrawDelegatorRewardProtoMsg): _61.MsgWithdrawDelegatorReward;
                toProto(message: _61.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _61.MsgWithdrawDelegatorReward): _61.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(_: _61.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _61.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_61.MsgWithdrawDelegatorRewardResponse>): _61.MsgWithdrawDelegatorRewardResponse;
                fromAmino(_: _61.MsgWithdrawDelegatorRewardResponseAmino): _61.MsgWithdrawDelegatorRewardResponse;
                toAmino(_: _61.MsgWithdrawDelegatorRewardResponse): _61.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _61.MsgWithdrawDelegatorRewardResponseAminoMsg): _61.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _61.MsgWithdrawDelegatorRewardResponse): _61.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _61.MsgWithdrawDelegatorRewardResponseProtoMsg): _61.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _61.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _61.MsgWithdrawDelegatorRewardResponse): _61.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _61.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_61.MsgWithdrawValidatorCommission>): _61.MsgWithdrawValidatorCommission;
                fromAmino(object: _61.MsgWithdrawValidatorCommissionAmino): _61.MsgWithdrawValidatorCommission;
                toAmino(message: _61.MsgWithdrawValidatorCommission): _61.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _61.MsgWithdrawValidatorCommissionAminoMsg): _61.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _61.MsgWithdrawValidatorCommission): _61.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _61.MsgWithdrawValidatorCommissionProtoMsg): _61.MsgWithdrawValidatorCommission;
                toProto(message: _61.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _61.MsgWithdrawValidatorCommission): _61.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(_: _61.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _61.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_61.MsgWithdrawValidatorCommissionResponse>): _61.MsgWithdrawValidatorCommissionResponse;
                fromAmino(_: _61.MsgWithdrawValidatorCommissionResponseAmino): _61.MsgWithdrawValidatorCommissionResponse;
                toAmino(_: _61.MsgWithdrawValidatorCommissionResponse): _61.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _61.MsgWithdrawValidatorCommissionResponseAminoMsg): _61.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _61.MsgWithdrawValidatorCommissionResponse): _61.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _61.MsgWithdrawValidatorCommissionResponseProtoMsg): _61.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _61.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _61.MsgWithdrawValidatorCommissionResponse): _61.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _61.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.MsgFundCommunityPool;
                fromPartial(object: Partial<_61.MsgFundCommunityPool>): _61.MsgFundCommunityPool;
                fromAmino(object: _61.MsgFundCommunityPoolAmino): _61.MsgFundCommunityPool;
                toAmino(message: _61.MsgFundCommunityPool): _61.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _61.MsgFundCommunityPoolAminoMsg): _61.MsgFundCommunityPool;
                toAminoMsg(message: _61.MsgFundCommunityPool): _61.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _61.MsgFundCommunityPoolProtoMsg): _61.MsgFundCommunityPool;
                toProto(message: _61.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _61.MsgFundCommunityPool): _61.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _61.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _61.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_61.MsgFundCommunityPoolResponse>): _61.MsgFundCommunityPoolResponse;
                fromAmino(_: _61.MsgFundCommunityPoolResponseAmino): _61.MsgFundCommunityPoolResponse;
                toAmino(_: _61.MsgFundCommunityPoolResponse): _61.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _61.MsgFundCommunityPoolResponseAminoMsg): _61.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _61.MsgFundCommunityPoolResponse): _61.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _61.MsgFundCommunityPoolResponseProtoMsg): _61.MsgFundCommunityPoolResponse;
                toProto(message: _61.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _61.MsgFundCommunityPoolResponse): _61.MsgFundCommunityPoolResponseProtoMsg;
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
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _60.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_60.QueryValidatorOutstandingRewardsRequest>): _60.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _60.QueryValidatorOutstandingRewardsRequestAmino): _60.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _60.QueryValidatorOutstandingRewardsRequest): _60.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _60.QueryValidatorOutstandingRewardsRequestAminoMsg): _60.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _60.QueryValidatorOutstandingRewardsRequest): _60.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _60.QueryValidatorOutstandingRewardsRequestProtoMsg): _60.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _60.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _60.QueryValidatorOutstandingRewardsRequest): _60.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _60.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_60.QueryValidatorOutstandingRewardsResponse>): _60.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _60.QueryValidatorOutstandingRewardsResponseAmino): _60.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _60.QueryValidatorOutstandingRewardsResponse): _60.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _60.QueryValidatorOutstandingRewardsResponseAminoMsg): _60.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _60.QueryValidatorOutstandingRewardsResponse): _60.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _60.QueryValidatorOutstandingRewardsResponseProtoMsg): _60.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _60.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _60.QueryValidatorOutstandingRewardsResponse): _60.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _60.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_60.QueryValidatorCommissionRequest>): _60.QueryValidatorCommissionRequest;
                fromAmino(object: _60.QueryValidatorCommissionRequestAmino): _60.QueryValidatorCommissionRequest;
                toAmino(message: _60.QueryValidatorCommissionRequest): _60.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _60.QueryValidatorCommissionRequestAminoMsg): _60.QueryValidatorCommissionRequest;
                toAminoMsg(message: _60.QueryValidatorCommissionRequest): _60.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _60.QueryValidatorCommissionRequestProtoMsg): _60.QueryValidatorCommissionRequest;
                toProto(message: _60.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _60.QueryValidatorCommissionRequest): _60.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _60.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_60.QueryValidatorCommissionResponse>): _60.QueryValidatorCommissionResponse;
                fromAmino(object: _60.QueryValidatorCommissionResponseAmino): _60.QueryValidatorCommissionResponse;
                toAmino(message: _60.QueryValidatorCommissionResponse): _60.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _60.QueryValidatorCommissionResponseAminoMsg): _60.QueryValidatorCommissionResponse;
                toAminoMsg(message: _60.QueryValidatorCommissionResponse): _60.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _60.QueryValidatorCommissionResponseProtoMsg): _60.QueryValidatorCommissionResponse;
                toProto(message: _60.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _60.QueryValidatorCommissionResponse): _60.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _60.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_60.QueryValidatorSlashesRequest>): _60.QueryValidatorSlashesRequest;
                fromAmino(object: _60.QueryValidatorSlashesRequestAmino): _60.QueryValidatorSlashesRequest;
                toAmino(message: _60.QueryValidatorSlashesRequest): _60.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _60.QueryValidatorSlashesRequestAminoMsg): _60.QueryValidatorSlashesRequest;
                toAminoMsg(message: _60.QueryValidatorSlashesRequest): _60.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _60.QueryValidatorSlashesRequestProtoMsg): _60.QueryValidatorSlashesRequest;
                toProto(message: _60.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _60.QueryValidatorSlashesRequest): _60.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _60.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_60.QueryValidatorSlashesResponse>): _60.QueryValidatorSlashesResponse;
                fromAmino(object: _60.QueryValidatorSlashesResponseAmino): _60.QueryValidatorSlashesResponse;
                toAmino(message: _60.QueryValidatorSlashesResponse): _60.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _60.QueryValidatorSlashesResponseAminoMsg): _60.QueryValidatorSlashesResponse;
                toAminoMsg(message: _60.QueryValidatorSlashesResponse): _60.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _60.QueryValidatorSlashesResponseProtoMsg): _60.QueryValidatorSlashesResponse;
                toProto(message: _60.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _60.QueryValidatorSlashesResponse): _60.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _60.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_60.QueryDelegationRewardsRequest>): _60.QueryDelegationRewardsRequest;
                fromAmino(object: _60.QueryDelegationRewardsRequestAmino): _60.QueryDelegationRewardsRequest;
                toAmino(message: _60.QueryDelegationRewardsRequest): _60.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _60.QueryDelegationRewardsRequestAminoMsg): _60.QueryDelegationRewardsRequest;
                toAminoMsg(message: _60.QueryDelegationRewardsRequest): _60.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _60.QueryDelegationRewardsRequestProtoMsg): _60.QueryDelegationRewardsRequest;
                toProto(message: _60.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _60.QueryDelegationRewardsRequest): _60.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _60.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_60.QueryDelegationRewardsResponse>): _60.QueryDelegationRewardsResponse;
                fromAmino(object: _60.QueryDelegationRewardsResponseAmino): _60.QueryDelegationRewardsResponse;
                toAmino(message: _60.QueryDelegationRewardsResponse): _60.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _60.QueryDelegationRewardsResponseAminoMsg): _60.QueryDelegationRewardsResponse;
                toAminoMsg(message: _60.QueryDelegationRewardsResponse): _60.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _60.QueryDelegationRewardsResponseProtoMsg): _60.QueryDelegationRewardsResponse;
                toProto(message: _60.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _60.QueryDelegationRewardsResponse): _60.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _60.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_60.QueryDelegationTotalRewardsRequest>): _60.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _60.QueryDelegationTotalRewardsRequestAmino): _60.QueryDelegationTotalRewardsRequest;
                toAmino(message: _60.QueryDelegationTotalRewardsRequest): _60.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _60.QueryDelegationTotalRewardsRequestAminoMsg): _60.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _60.QueryDelegationTotalRewardsRequest): _60.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _60.QueryDelegationTotalRewardsRequestProtoMsg): _60.QueryDelegationTotalRewardsRequest;
                toProto(message: _60.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _60.QueryDelegationTotalRewardsRequest): _60.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _60.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_60.QueryDelegationTotalRewardsResponse>): _60.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _60.QueryDelegationTotalRewardsResponseAmino): _60.QueryDelegationTotalRewardsResponse;
                toAmino(message: _60.QueryDelegationTotalRewardsResponse): _60.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _60.QueryDelegationTotalRewardsResponseAminoMsg): _60.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _60.QueryDelegationTotalRewardsResponse): _60.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _60.QueryDelegationTotalRewardsResponseProtoMsg): _60.QueryDelegationTotalRewardsResponse;
                toProto(message: _60.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _60.QueryDelegationTotalRewardsResponse): _60.QueryDelegationTotalRewardsResponseProtoMsg;
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
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _60.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_60.QueryDelegatorWithdrawAddressRequest>): _60.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _60.QueryDelegatorWithdrawAddressRequestAmino): _60.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _60.QueryDelegatorWithdrawAddressRequest): _60.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _60.QueryDelegatorWithdrawAddressRequestAminoMsg): _60.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _60.QueryDelegatorWithdrawAddressRequest): _60.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _60.QueryDelegatorWithdrawAddressRequestProtoMsg): _60.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _60.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _60.QueryDelegatorWithdrawAddressRequest): _60.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _60.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_60.QueryDelegatorWithdrawAddressResponse>): _60.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _60.QueryDelegatorWithdrawAddressResponseAmino): _60.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _60.QueryDelegatorWithdrawAddressResponse): _60.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _60.QueryDelegatorWithdrawAddressResponseAminoMsg): _60.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _60.QueryDelegatorWithdrawAddressResponse): _60.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _60.QueryDelegatorWithdrawAddressResponseProtoMsg): _60.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _60.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _60.QueryDelegatorWithdrawAddressResponse): _60.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _60.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _60.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_60.QueryCommunityPoolRequest>): _60.QueryCommunityPoolRequest;
                fromAmino(_: _60.QueryCommunityPoolRequestAmino): _60.QueryCommunityPoolRequest;
                toAmino(_: _60.QueryCommunityPoolRequest): _60.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _60.QueryCommunityPoolRequestAminoMsg): _60.QueryCommunityPoolRequest;
                toAminoMsg(message: _60.QueryCommunityPoolRequest): _60.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _60.QueryCommunityPoolRequestProtoMsg): _60.QueryCommunityPoolRequest;
                toProto(message: _60.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _60.QueryCommunityPoolRequest): _60.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _60.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_60.QueryCommunityPoolResponse>): _60.QueryCommunityPoolResponse;
                fromAmino(object: _60.QueryCommunityPoolResponseAmino): _60.QueryCommunityPoolResponse;
                toAmino(message: _60.QueryCommunityPoolResponse): _60.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _60.QueryCommunityPoolResponseAminoMsg): _60.QueryCommunityPoolResponse;
                toAminoMsg(message: _60.QueryCommunityPoolResponse): _60.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _60.QueryCommunityPoolResponseProtoMsg): _60.QueryCommunityPoolResponse;
                toProto(message: _60.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _60.QueryCommunityPoolResponse): _60.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _59.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_59.DelegatorWithdrawInfo>): _59.DelegatorWithdrawInfo;
                fromAmino(object: _59.DelegatorWithdrawInfoAmino): _59.DelegatorWithdrawInfo;
                toAmino(message: _59.DelegatorWithdrawInfo): _59.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _59.DelegatorWithdrawInfoAminoMsg): _59.DelegatorWithdrawInfo;
                toAminoMsg(message: _59.DelegatorWithdrawInfo): _59.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _59.DelegatorWithdrawInfoProtoMsg): _59.DelegatorWithdrawInfo;
                toProto(message: _59.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _59.DelegatorWithdrawInfo): _59.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _59.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_59.ValidatorOutstandingRewardsRecord>): _59.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _59.ValidatorOutstandingRewardsRecordAmino): _59.ValidatorOutstandingRewardsRecord;
                toAmino(message: _59.ValidatorOutstandingRewardsRecord): _59.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _59.ValidatorOutstandingRewardsRecordAminoMsg): _59.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _59.ValidatorOutstandingRewardsRecord): _59.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _59.ValidatorOutstandingRewardsRecordProtoMsg): _59.ValidatorOutstandingRewardsRecord;
                toProto(message: _59.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _59.ValidatorOutstandingRewardsRecord): _59.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _59.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_59.ValidatorAccumulatedCommissionRecord>): _59.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _59.ValidatorAccumulatedCommissionRecordAmino): _59.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _59.ValidatorAccumulatedCommissionRecord): _59.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _59.ValidatorAccumulatedCommissionRecordAminoMsg): _59.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _59.ValidatorAccumulatedCommissionRecord): _59.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _59.ValidatorAccumulatedCommissionRecordProtoMsg): _59.ValidatorAccumulatedCommissionRecord;
                toProto(message: _59.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _59.ValidatorAccumulatedCommissionRecord): _59.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _59.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_59.ValidatorHistoricalRewardsRecord>): _59.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _59.ValidatorHistoricalRewardsRecordAmino): _59.ValidatorHistoricalRewardsRecord;
                toAmino(message: _59.ValidatorHistoricalRewardsRecord): _59.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _59.ValidatorHistoricalRewardsRecordAminoMsg): _59.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _59.ValidatorHistoricalRewardsRecord): _59.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _59.ValidatorHistoricalRewardsRecordProtoMsg): _59.ValidatorHistoricalRewardsRecord;
                toProto(message: _59.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _59.ValidatorHistoricalRewardsRecord): _59.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _59.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_59.ValidatorCurrentRewardsRecord>): _59.ValidatorCurrentRewardsRecord;
                fromAmino(object: _59.ValidatorCurrentRewardsRecordAmino): _59.ValidatorCurrentRewardsRecord;
                toAmino(message: _59.ValidatorCurrentRewardsRecord): _59.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _59.ValidatorCurrentRewardsRecordAminoMsg): _59.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _59.ValidatorCurrentRewardsRecord): _59.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _59.ValidatorCurrentRewardsRecordProtoMsg): _59.ValidatorCurrentRewardsRecord;
                toProto(message: _59.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _59.ValidatorCurrentRewardsRecord): _59.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _59.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_59.DelegatorStartingInfoRecord>): _59.DelegatorStartingInfoRecord;
                fromAmino(object: _59.DelegatorStartingInfoRecordAmino): _59.DelegatorStartingInfoRecord;
                toAmino(message: _59.DelegatorStartingInfoRecord): _59.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _59.DelegatorStartingInfoRecordAminoMsg): _59.DelegatorStartingInfoRecord;
                toAminoMsg(message: _59.DelegatorStartingInfoRecord): _59.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _59.DelegatorStartingInfoRecordProtoMsg): _59.DelegatorStartingInfoRecord;
                toProto(message: _59.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _59.DelegatorStartingInfoRecord): _59.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _59.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_59.ValidatorSlashEventRecord>): _59.ValidatorSlashEventRecord;
                fromAmino(object: _59.ValidatorSlashEventRecordAmino): _59.ValidatorSlashEventRecord;
                toAmino(message: _59.ValidatorSlashEventRecord): _59.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _59.ValidatorSlashEventRecordAminoMsg): _59.ValidatorSlashEventRecord;
                toAminoMsg(message: _59.ValidatorSlashEventRecord): _59.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _59.ValidatorSlashEventRecordProtoMsg): _59.ValidatorSlashEventRecord;
                toProto(message: _59.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _59.ValidatorSlashEventRecord): _59.ValidatorSlashEventRecordProtoMsg;
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
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _58.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_58.ValidatorHistoricalRewards>): _58.ValidatorHistoricalRewards;
                fromAmino(object: _58.ValidatorHistoricalRewardsAmino): _58.ValidatorHistoricalRewards;
                toAmino(message: _58.ValidatorHistoricalRewards): _58.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _58.ValidatorHistoricalRewardsAminoMsg): _58.ValidatorHistoricalRewards;
                toAminoMsg(message: _58.ValidatorHistoricalRewards): _58.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _58.ValidatorHistoricalRewardsProtoMsg): _58.ValidatorHistoricalRewards;
                toProto(message: _58.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _58.ValidatorHistoricalRewards): _58.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _58.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.ValidatorCurrentRewards;
                fromPartial(object: Partial<_58.ValidatorCurrentRewards>): _58.ValidatorCurrentRewards;
                fromAmino(object: _58.ValidatorCurrentRewardsAmino): _58.ValidatorCurrentRewards;
                toAmino(message: _58.ValidatorCurrentRewards): _58.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _58.ValidatorCurrentRewardsAminoMsg): _58.ValidatorCurrentRewards;
                toAminoMsg(message: _58.ValidatorCurrentRewards): _58.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _58.ValidatorCurrentRewardsProtoMsg): _58.ValidatorCurrentRewards;
                toProto(message: _58.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _58.ValidatorCurrentRewards): _58.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _58.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_58.ValidatorAccumulatedCommission>): _58.ValidatorAccumulatedCommission;
                fromAmino(object: _58.ValidatorAccumulatedCommissionAmino): _58.ValidatorAccumulatedCommission;
                toAmino(message: _58.ValidatorAccumulatedCommission): _58.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _58.ValidatorAccumulatedCommissionAminoMsg): _58.ValidatorAccumulatedCommission;
                toAminoMsg(message: _58.ValidatorAccumulatedCommission): _58.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _58.ValidatorAccumulatedCommissionProtoMsg): _58.ValidatorAccumulatedCommission;
                toProto(message: _58.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _58.ValidatorAccumulatedCommission): _58.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _58.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_58.ValidatorOutstandingRewards>): _58.ValidatorOutstandingRewards;
                fromAmino(object: _58.ValidatorOutstandingRewardsAmino): _58.ValidatorOutstandingRewards;
                toAmino(message: _58.ValidatorOutstandingRewards): _58.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _58.ValidatorOutstandingRewardsAminoMsg): _58.ValidatorOutstandingRewards;
                toAminoMsg(message: _58.ValidatorOutstandingRewards): _58.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _58.ValidatorOutstandingRewardsProtoMsg): _58.ValidatorOutstandingRewards;
                toProto(message: _58.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _58.ValidatorOutstandingRewards): _58.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _58.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.ValidatorSlashEvent;
                fromPartial(object: Partial<_58.ValidatorSlashEvent>): _58.ValidatorSlashEvent;
                fromAmino(object: _58.ValidatorSlashEventAmino): _58.ValidatorSlashEvent;
                toAmino(message: _58.ValidatorSlashEvent): _58.ValidatorSlashEventAmino;
                fromAminoMsg(object: _58.ValidatorSlashEventAminoMsg): _58.ValidatorSlashEvent;
                toAminoMsg(message: _58.ValidatorSlashEvent): _58.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _58.ValidatorSlashEventProtoMsg): _58.ValidatorSlashEvent;
                toProto(message: _58.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _58.ValidatorSlashEvent): _58.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _58.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.ValidatorSlashEvents;
                fromPartial(object: Partial<_58.ValidatorSlashEvents>): _58.ValidatorSlashEvents;
                fromAmino(object: _58.ValidatorSlashEventsAmino): _58.ValidatorSlashEvents;
                toAmino(message: _58.ValidatorSlashEvents): _58.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _58.ValidatorSlashEventsAminoMsg): _58.ValidatorSlashEvents;
                toAminoMsg(message: _58.ValidatorSlashEvents): _58.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _58.ValidatorSlashEventsProtoMsg): _58.ValidatorSlashEvents;
                toProto(message: _58.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _58.ValidatorSlashEvents): _58.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _58.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.FeePool;
                fromPartial(object: Partial<_58.FeePool>): _58.FeePool;
                fromAmino(object: _58.FeePoolAmino): _58.FeePool;
                toAmino(message: _58.FeePool): _58.FeePoolAmino;
                fromAminoMsg(object: _58.FeePoolAminoMsg): _58.FeePool;
                toAminoMsg(message: _58.FeePool): _58.FeePoolAminoMsg;
                fromProtoMsg(message: _58.FeePoolProtoMsg): _58.FeePool;
                toProto(message: _58.FeePool): Uint8Array;
                toProtoMsg(message: _58.FeePool): _58.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _58.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_58.CommunityPoolSpendProposal>): _58.CommunityPoolSpendProposal;
                fromAmino(object: _58.CommunityPoolSpendProposalAmino): _58.CommunityPoolSpendProposal;
                toAmino(message: _58.CommunityPoolSpendProposal): _58.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _58.CommunityPoolSpendProposalAminoMsg): _58.CommunityPoolSpendProposal;
                toAminoMsg(message: _58.CommunityPoolSpendProposal): _58.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _58.CommunityPoolSpendProposalProtoMsg): _58.CommunityPoolSpendProposal;
                toProto(message: _58.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _58.CommunityPoolSpendProposal): _58.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _58.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.DelegatorStartingInfo;
                fromPartial(object: Partial<_58.DelegatorStartingInfo>): _58.DelegatorStartingInfo;
                fromAmino(object: _58.DelegatorStartingInfoAmino): _58.DelegatorStartingInfo;
                toAmino(message: _58.DelegatorStartingInfo): _58.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _58.DelegatorStartingInfoAminoMsg): _58.DelegatorStartingInfo;
                toAminoMsg(message: _58.DelegatorStartingInfo): _58.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _58.DelegatorStartingInfoProtoMsg): _58.DelegatorStartingInfo;
                toProto(message: _58.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _58.DelegatorStartingInfo): _58.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _58.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.DelegationDelegatorReward;
                fromPartial(object: Partial<_58.DelegationDelegatorReward>): _58.DelegationDelegatorReward;
                fromAmino(object: _58.DelegationDelegatorRewardAmino): _58.DelegationDelegatorReward;
                toAmino(message: _58.DelegationDelegatorReward): _58.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _58.DelegationDelegatorRewardAminoMsg): _58.DelegationDelegatorReward;
                toAminoMsg(message: _58.DelegationDelegatorReward): _58.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _58.DelegationDelegatorRewardProtoMsg): _58.DelegationDelegatorReward;
                toProto(message: _58.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _58.DelegationDelegatorReward): _58.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _58.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_58.CommunityPoolSpendProposalWithDeposit>): _58.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _58.CommunityPoolSpendProposalWithDepositAmino): _58.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _58.CommunityPoolSpendProposalWithDeposit): _58.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _58.CommunityPoolSpendProposalWithDepositAminoMsg): _58.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _58.CommunityPoolSpendProposalWithDeposit): _58.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _58.CommunityPoolSpendProposalWithDepositProtoMsg): _58.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _58.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _58.CommunityPoolSpendProposalWithDeposit): _58.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _210.MsgClientImpl;
            QueryClientImpl: typeof _197.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                evidence(request: _64.QueryEvidenceRequest): Promise<_64.QueryEvidenceResponse>;
                allEvidence(request?: _64.QueryAllEvidenceRequest): Promise<_64.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _182.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _65.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _65.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _65.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _65.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _65.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _65.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _65.MsgSubmitEvidence) => _65.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _65.MsgSubmitEvidenceAmino) => _65.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _65.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.MsgSubmitEvidence;
                fromPartial(object: Partial<_65.MsgSubmitEvidence>): _65.MsgSubmitEvidence;
                fromAmino(object: _65.MsgSubmitEvidenceAmino): _65.MsgSubmitEvidence;
                toAmino(message: _65.MsgSubmitEvidence): _65.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _65.MsgSubmitEvidenceAminoMsg): _65.MsgSubmitEvidence;
                toAminoMsg(message: _65.MsgSubmitEvidence): _65.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _65.MsgSubmitEvidenceProtoMsg): _65.MsgSubmitEvidence;
                toProto(message: _65.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _65.MsgSubmitEvidence): _65.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _65.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_65.MsgSubmitEvidenceResponse>): _65.MsgSubmitEvidenceResponse;
                fromAmino(object: _65.MsgSubmitEvidenceResponseAmino): _65.MsgSubmitEvidenceResponse;
                toAmino(message: _65.MsgSubmitEvidenceResponse): _65.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _65.MsgSubmitEvidenceResponseAminoMsg): _65.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _65.MsgSubmitEvidenceResponse): _65.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _65.MsgSubmitEvidenceResponseProtoMsg): _65.MsgSubmitEvidenceResponse;
                toProto(message: _65.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _65.MsgSubmitEvidenceResponse): _65.MsgSubmitEvidenceResponseProtoMsg;
            };
            Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _64.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryEvidenceRequest;
                fromPartial(object: Partial<_64.QueryEvidenceRequest>): _64.QueryEvidenceRequest;
                fromAmino(object: _64.QueryEvidenceRequestAmino): _64.QueryEvidenceRequest;
                toAmino(message: _64.QueryEvidenceRequest): _64.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _64.QueryEvidenceRequestAminoMsg): _64.QueryEvidenceRequest;
                toAminoMsg(message: _64.QueryEvidenceRequest): _64.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _64.QueryEvidenceRequestProtoMsg): _64.QueryEvidenceRequest;
                toProto(message: _64.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _64.QueryEvidenceRequest): _64.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _64.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryEvidenceResponse;
                fromPartial(object: Partial<_64.QueryEvidenceResponse>): _64.QueryEvidenceResponse;
                fromAmino(object: _64.QueryEvidenceResponseAmino): _64.QueryEvidenceResponse;
                toAmino(message: _64.QueryEvidenceResponse): _64.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _64.QueryEvidenceResponseAminoMsg): _64.QueryEvidenceResponse;
                toAminoMsg(message: _64.QueryEvidenceResponse): _64.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _64.QueryEvidenceResponseProtoMsg): _64.QueryEvidenceResponse;
                toProto(message: _64.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _64.QueryEvidenceResponse): _64.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _64.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_64.QueryAllEvidenceRequest>): _64.QueryAllEvidenceRequest;
                fromAmino(object: _64.QueryAllEvidenceRequestAmino): _64.QueryAllEvidenceRequest;
                toAmino(message: _64.QueryAllEvidenceRequest): _64.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _64.QueryAllEvidenceRequestAminoMsg): _64.QueryAllEvidenceRequest;
                toAminoMsg(message: _64.QueryAllEvidenceRequest): _64.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _64.QueryAllEvidenceRequestProtoMsg): _64.QueryAllEvidenceRequest;
                toProto(message: _64.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _64.QueryAllEvidenceRequest): _64.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _64.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_64.QueryAllEvidenceResponse>): _64.QueryAllEvidenceResponse;
                fromAmino(object: _64.QueryAllEvidenceResponseAmino): _64.QueryAllEvidenceResponse;
                toAmino(message: _64.QueryAllEvidenceResponse): _64.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _64.QueryAllEvidenceResponseAminoMsg): _64.QueryAllEvidenceResponse;
                toAminoMsg(message: _64.QueryAllEvidenceResponse): _64.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _64.QueryAllEvidenceResponseProtoMsg): _64.QueryAllEvidenceResponse;
                toProto(message: _64.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _64.QueryAllEvidenceResponse): _64.QueryAllEvidenceResponseProtoMsg;
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
            Equivocation: {
                typeUrl: string;
                encode(message: _62.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.Equivocation;
                fromPartial(object: Partial<_62.Equivocation>): _62.Equivocation;
                fromAmino(object: _62.EquivocationAmino): _62.Equivocation;
                toAmino(message: _62.Equivocation): _62.EquivocationAmino;
                fromAminoMsg(object: _62.EquivocationAminoMsg): _62.Equivocation;
                toAminoMsg(message: _62.Equivocation): _62.EquivocationAminoMsg;
                fromProtoMsg(message: _62.EquivocationProtoMsg): _62.Equivocation;
                toProto(message: _62.Equivocation): Uint8Array;
                toProtoMsg(message: _62.Equivocation): _62.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _211.MsgClientImpl;
            QueryClientImpl: typeof _198.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                allowance(request: _68.QueryAllowanceRequest): Promise<_68.QueryAllowanceResponse>;
                allowances(request: _68.QueryAllowancesRequest): Promise<_68.QueryAllowancesResponse>;
                allowancesByGranter(request: _68.QueryAllowancesByGranterRequest): Promise<_68.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _183.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _69.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _69.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _69.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _69.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _69.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _69.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _69.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _69.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _69.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _69.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _69.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _69.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _69.MsgGrantAllowance) => _69.MsgGrantAllowanceAmino;
                    fromAmino: (object: _69.MsgGrantAllowanceAmino) => _69.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _69.MsgRevokeAllowance) => _69.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _69.MsgRevokeAllowanceAmino) => _69.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _69.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.MsgGrantAllowance;
                fromPartial(object: Partial<_69.MsgGrantAllowance>): _69.MsgGrantAllowance;
                fromAmino(object: _69.MsgGrantAllowanceAmino): _69.MsgGrantAllowance;
                toAmino(message: _69.MsgGrantAllowance): _69.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _69.MsgGrantAllowanceAminoMsg): _69.MsgGrantAllowance;
                toAminoMsg(message: _69.MsgGrantAllowance): _69.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _69.MsgGrantAllowanceProtoMsg): _69.MsgGrantAllowance;
                toProto(message: _69.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _69.MsgGrantAllowance): _69.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _69.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _69.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_69.MsgGrantAllowanceResponse>): _69.MsgGrantAllowanceResponse;
                fromAmino(_: _69.MsgGrantAllowanceResponseAmino): _69.MsgGrantAllowanceResponse;
                toAmino(_: _69.MsgGrantAllowanceResponse): _69.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _69.MsgGrantAllowanceResponseAminoMsg): _69.MsgGrantAllowanceResponse;
                toAminoMsg(message: _69.MsgGrantAllowanceResponse): _69.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _69.MsgGrantAllowanceResponseProtoMsg): _69.MsgGrantAllowanceResponse;
                toProto(message: _69.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _69.MsgGrantAllowanceResponse): _69.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _69.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.MsgRevokeAllowance;
                fromPartial(object: Partial<_69.MsgRevokeAllowance>): _69.MsgRevokeAllowance;
                fromAmino(object: _69.MsgRevokeAllowanceAmino): _69.MsgRevokeAllowance;
                toAmino(message: _69.MsgRevokeAllowance): _69.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _69.MsgRevokeAllowanceAminoMsg): _69.MsgRevokeAllowance;
                toAminoMsg(message: _69.MsgRevokeAllowance): _69.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _69.MsgRevokeAllowanceProtoMsg): _69.MsgRevokeAllowance;
                toProto(message: _69.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _69.MsgRevokeAllowance): _69.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _69.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _69.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_69.MsgRevokeAllowanceResponse>): _69.MsgRevokeAllowanceResponse;
                fromAmino(_: _69.MsgRevokeAllowanceResponseAmino): _69.MsgRevokeAllowanceResponse;
                toAmino(_: _69.MsgRevokeAllowanceResponse): _69.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _69.MsgRevokeAllowanceResponseAminoMsg): _69.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _69.MsgRevokeAllowanceResponse): _69.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _69.MsgRevokeAllowanceResponseProtoMsg): _69.MsgRevokeAllowanceResponse;
                toProto(message: _69.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _69.MsgRevokeAllowanceResponse): _69.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _66.BasicAllowance | _66.PeriodicAllowance | _66.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _68.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryAllowanceRequest;
                fromPartial(object: Partial<_68.QueryAllowanceRequest>): _68.QueryAllowanceRequest;
                fromAmino(object: _68.QueryAllowanceRequestAmino): _68.QueryAllowanceRequest;
                toAmino(message: _68.QueryAllowanceRequest): _68.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _68.QueryAllowanceRequestAminoMsg): _68.QueryAllowanceRequest;
                toAminoMsg(message: _68.QueryAllowanceRequest): _68.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _68.QueryAllowanceRequestProtoMsg): _68.QueryAllowanceRequest;
                toProto(message: _68.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _68.QueryAllowanceRequest): _68.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _68.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryAllowanceResponse;
                fromPartial(object: Partial<_68.QueryAllowanceResponse>): _68.QueryAllowanceResponse;
                fromAmino(object: _68.QueryAllowanceResponseAmino): _68.QueryAllowanceResponse;
                toAmino(message: _68.QueryAllowanceResponse): _68.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _68.QueryAllowanceResponseAminoMsg): _68.QueryAllowanceResponse;
                toAminoMsg(message: _68.QueryAllowanceResponse): _68.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _68.QueryAllowanceResponseProtoMsg): _68.QueryAllowanceResponse;
                toProto(message: _68.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _68.QueryAllowanceResponse): _68.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _68.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryAllowancesRequest;
                fromPartial(object: Partial<_68.QueryAllowancesRequest>): _68.QueryAllowancesRequest;
                fromAmino(object: _68.QueryAllowancesRequestAmino): _68.QueryAllowancesRequest;
                toAmino(message: _68.QueryAllowancesRequest): _68.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _68.QueryAllowancesRequestAminoMsg): _68.QueryAllowancesRequest;
                toAminoMsg(message: _68.QueryAllowancesRequest): _68.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _68.QueryAllowancesRequestProtoMsg): _68.QueryAllowancesRequest;
                toProto(message: _68.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _68.QueryAllowancesRequest): _68.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _68.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryAllowancesResponse;
                fromPartial(object: Partial<_68.QueryAllowancesResponse>): _68.QueryAllowancesResponse;
                fromAmino(object: _68.QueryAllowancesResponseAmino): _68.QueryAllowancesResponse;
                toAmino(message: _68.QueryAllowancesResponse): _68.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _68.QueryAllowancesResponseAminoMsg): _68.QueryAllowancesResponse;
                toAminoMsg(message: _68.QueryAllowancesResponse): _68.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _68.QueryAllowancesResponseProtoMsg): _68.QueryAllowancesResponse;
                toProto(message: _68.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _68.QueryAllowancesResponse): _68.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _68.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_68.QueryAllowancesByGranterRequest>): _68.QueryAllowancesByGranterRequest;
                fromAmino(object: _68.QueryAllowancesByGranterRequestAmino): _68.QueryAllowancesByGranterRequest;
                toAmino(message: _68.QueryAllowancesByGranterRequest): _68.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _68.QueryAllowancesByGranterRequestAminoMsg): _68.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _68.QueryAllowancesByGranterRequest): _68.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _68.QueryAllowancesByGranterRequestProtoMsg): _68.QueryAllowancesByGranterRequest;
                toProto(message: _68.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _68.QueryAllowancesByGranterRequest): _68.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _68.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_68.QueryAllowancesByGranterResponse>): _68.QueryAllowancesByGranterResponse;
                fromAmino(object: _68.QueryAllowancesByGranterResponseAmino): _68.QueryAllowancesByGranterResponse;
                toAmino(message: _68.QueryAllowancesByGranterResponse): _68.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _68.QueryAllowancesByGranterResponseAminoMsg): _68.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _68.QueryAllowancesByGranterResponse): _68.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _68.QueryAllowancesByGranterResponseProtoMsg): _68.QueryAllowancesByGranterResponse;
                toProto(message: _68.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _68.QueryAllowancesByGranterResponse): _68.QueryAllowancesByGranterResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _67.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.GenesisState;
                fromPartial(object: Partial<_67.GenesisState>): _67.GenesisState;
                fromAmino(object: _67.GenesisStateAmino): _67.GenesisState;
                toAmino(message: _67.GenesisState): _67.GenesisStateAmino;
                fromAminoMsg(object: _67.GenesisStateAminoMsg): _67.GenesisState;
                toAminoMsg(message: _67.GenesisState): _67.GenesisStateAminoMsg;
                fromProtoMsg(message: _67.GenesisStateProtoMsg): _67.GenesisState;
                toProto(message: _67.GenesisState): Uint8Array;
                toProtoMsg(message: _67.GenesisState): _67.GenesisStateProtoMsg;
            };
            BasicAllowance: {
                typeUrl: string;
                encode(message: _66.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.BasicAllowance;
                fromPartial(object: Partial<_66.BasicAllowance>): _66.BasicAllowance;
                fromAmino(object: _66.BasicAllowanceAmino): _66.BasicAllowance;
                toAmino(message: _66.BasicAllowance): _66.BasicAllowanceAmino;
                fromAminoMsg(object: _66.BasicAllowanceAminoMsg): _66.BasicAllowance;
                toAminoMsg(message: _66.BasicAllowance): _66.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _66.BasicAllowanceProtoMsg): _66.BasicAllowance;
                toProto(message: _66.BasicAllowance): Uint8Array;
                toProtoMsg(message: _66.BasicAllowance): _66.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _66.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.PeriodicAllowance;
                fromPartial(object: Partial<_66.PeriodicAllowance>): _66.PeriodicAllowance;
                fromAmino(object: _66.PeriodicAllowanceAmino): _66.PeriodicAllowance;
                toAmino(message: _66.PeriodicAllowance): _66.PeriodicAllowanceAmino;
                fromAminoMsg(object: _66.PeriodicAllowanceAminoMsg): _66.PeriodicAllowance;
                toAminoMsg(message: _66.PeriodicAllowance): _66.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _66.PeriodicAllowanceProtoMsg): _66.PeriodicAllowance;
                toProto(message: _66.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _66.PeriodicAllowance): _66.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _66.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.AllowedMsgAllowance;
                fromPartial(object: Partial<_66.AllowedMsgAllowance>): _66.AllowedMsgAllowance;
                fromAmino(object: _66.AllowedMsgAllowanceAmino): _66.AllowedMsgAllowance;
                toAmino(message: _66.AllowedMsgAllowance): _66.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _66.AllowedMsgAllowanceAminoMsg): _66.AllowedMsgAllowance;
                toAminoMsg(message: _66.AllowedMsgAllowance): _66.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _66.AllowedMsgAllowanceProtoMsg): _66.AllowedMsgAllowance;
                toProto(message: _66.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _66.AllowedMsgAllowance): _66.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _66.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.Grant;
                fromPartial(object: Partial<_66.Grant>): _66.Grant;
                fromAmino(object: _66.GrantAmino): _66.Grant;
                toAmino(message: _66.Grant): _66.GrantAmino;
                fromAminoMsg(object: _66.GrantAminoMsg): _66.Grant;
                toAminoMsg(message: _66.Grant): _66.GrantAminoMsg;
                fromProtoMsg(message: _66.GrantProtoMsg): _66.Grant;
                toProto(message: _66.Grant): Uint8Array;
                toProtoMsg(message: _66.Grant): _66.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                typeUrl: string;
                encode(message: _70.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.GenesisState;
                fromPartial(object: Partial<_70.GenesisState>): _70.GenesisState;
                fromAmino(object: _70.GenesisStateAmino): _70.GenesisState;
                toAmino(message: _70.GenesisState): _70.GenesisStateAmino;
                fromAminoMsg(object: _70.GenesisStateAminoMsg): _70.GenesisState;
                toAminoMsg(message: _70.GenesisState): _70.GenesisStateAminoMsg;
                fromProtoMsg(message: _70.GenesisStateProtoMsg): _70.GenesisState;
                toProto(message: _70.GenesisState): Uint8Array;
                toProtoMsg(message: _70.GenesisState): _70.GenesisStateProtoMsg;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _212.MsgClientImpl;
            QueryClientImpl: typeof _199.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                proposal(request: _73.QueryProposalRequest): Promise<_73.QueryProposalResponse>;
                proposals(request: _73.QueryProposalsRequest): Promise<_73.QueryProposalsResponse>;
                vote(request: _73.QueryVoteRequest): Promise<_73.QueryVoteResponse>;
                votes(request: _73.QueryVotesRequest): Promise<_73.QueryVotesResponse>;
                params(request: _73.QueryParamsRequest): Promise<_73.QueryParamsResponse>;
                deposit(request: _73.QueryDepositRequest): Promise<_73.QueryDepositResponse>;
                deposits(request: _73.QueryDepositsRequest): Promise<_73.QueryDepositsResponse>;
                tallyResult(request: _73.QueryTallyResultRequest): Promise<_73.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _184.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _74.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _74.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _74.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _74.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _74.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _74.MsgSubmitProposal;
                    };
                    vote(value: _74.MsgVote): {
                        typeUrl: string;
                        value: _74.MsgVote;
                    };
                    voteWeighted(value: _74.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _74.MsgVoteWeighted;
                    };
                    deposit(value: _74.MsgDeposit): {
                        typeUrl: string;
                        value: _74.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _74.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _74.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _74.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _74.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _74.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _74.MsgSubmitProposal;
                    };
                    vote(value: _74.MsgVote): {
                        typeUrl: string;
                        value: _74.MsgVote;
                    };
                    voteWeighted(value: _74.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _74.MsgVoteWeighted;
                    };
                    deposit(value: _74.MsgDeposit): {
                        typeUrl: string;
                        value: _74.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _74.MsgSubmitProposal) => _74.MsgSubmitProposalAmino;
                    fromAmino: (object: _74.MsgSubmitProposalAmino) => _74.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _74.MsgVote) => _74.MsgVoteAmino;
                    fromAmino: (object: _74.MsgVoteAmino) => _74.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _74.MsgVoteWeighted) => _74.MsgVoteWeightedAmino;
                    fromAmino: (object: _74.MsgVoteWeightedAmino) => _74.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _74.MsgDeposit) => _74.MsgDepositAmino;
                    fromAmino: (object: _74.MsgDepositAmino) => _74.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _74.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.MsgSubmitProposal;
                fromPartial(object: Partial<_74.MsgSubmitProposal>): _74.MsgSubmitProposal;
                fromAmino(object: _74.MsgSubmitProposalAmino): _74.MsgSubmitProposal;
                toAmino(message: _74.MsgSubmitProposal): _74.MsgSubmitProposalAmino;
                fromAminoMsg(object: _74.MsgSubmitProposalAminoMsg): _74.MsgSubmitProposal;
                toAminoMsg(message: _74.MsgSubmitProposal): _74.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _74.MsgSubmitProposalProtoMsg): _74.MsgSubmitProposal;
                toProto(message: _74.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _74.MsgSubmitProposal): _74.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _74.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_74.MsgSubmitProposalResponse>): _74.MsgSubmitProposalResponse;
                fromAmino(object: _74.MsgSubmitProposalResponseAmino): _74.MsgSubmitProposalResponse;
                toAmino(message: _74.MsgSubmitProposalResponse): _74.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _74.MsgSubmitProposalResponseAminoMsg): _74.MsgSubmitProposalResponse;
                toAminoMsg(message: _74.MsgSubmitProposalResponse): _74.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _74.MsgSubmitProposalResponseProtoMsg): _74.MsgSubmitProposalResponse;
                toProto(message: _74.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _74.MsgSubmitProposalResponse): _74.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _74.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.MsgVote;
                fromPartial(object: Partial<_74.MsgVote>): _74.MsgVote;
                fromAmino(object: _74.MsgVoteAmino): _74.MsgVote;
                toAmino(message: _74.MsgVote): _74.MsgVoteAmino;
                fromAminoMsg(object: _74.MsgVoteAminoMsg): _74.MsgVote;
                toAminoMsg(message: _74.MsgVote): _74.MsgVoteAminoMsg;
                fromProtoMsg(message: _74.MsgVoteProtoMsg): _74.MsgVote;
                toProto(message: _74.MsgVote): Uint8Array;
                toProtoMsg(message: _74.MsgVote): _74.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _74.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _74.MsgVoteResponse;
                fromPartial(_: Partial<_74.MsgVoteResponse>): _74.MsgVoteResponse;
                fromAmino(_: _74.MsgVoteResponseAmino): _74.MsgVoteResponse;
                toAmino(_: _74.MsgVoteResponse): _74.MsgVoteResponseAmino;
                fromAminoMsg(object: _74.MsgVoteResponseAminoMsg): _74.MsgVoteResponse;
                toAminoMsg(message: _74.MsgVoteResponse): _74.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _74.MsgVoteResponseProtoMsg): _74.MsgVoteResponse;
                toProto(message: _74.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _74.MsgVoteResponse): _74.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _74.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.MsgVoteWeighted;
                fromPartial(object: Partial<_74.MsgVoteWeighted>): _74.MsgVoteWeighted;
                fromAmino(object: _74.MsgVoteWeightedAmino): _74.MsgVoteWeighted;
                toAmino(message: _74.MsgVoteWeighted): _74.MsgVoteWeightedAmino;
                fromAminoMsg(object: _74.MsgVoteWeightedAminoMsg): _74.MsgVoteWeighted;
                toAminoMsg(message: _74.MsgVoteWeighted): _74.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _74.MsgVoteWeightedProtoMsg): _74.MsgVoteWeighted;
                toProto(message: _74.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _74.MsgVoteWeighted): _74.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _74.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _74.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_74.MsgVoteWeightedResponse>): _74.MsgVoteWeightedResponse;
                fromAmino(_: _74.MsgVoteWeightedResponseAmino): _74.MsgVoteWeightedResponse;
                toAmino(_: _74.MsgVoteWeightedResponse): _74.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _74.MsgVoteWeightedResponseAminoMsg): _74.MsgVoteWeightedResponse;
                toAminoMsg(message: _74.MsgVoteWeightedResponse): _74.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _74.MsgVoteWeightedResponseProtoMsg): _74.MsgVoteWeightedResponse;
                toProto(message: _74.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _74.MsgVoteWeightedResponse): _74.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _74.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.MsgDeposit;
                fromPartial(object: Partial<_74.MsgDeposit>): _74.MsgDeposit;
                fromAmino(object: _74.MsgDepositAmino): _74.MsgDeposit;
                toAmino(message: _74.MsgDeposit): _74.MsgDepositAmino;
                fromAminoMsg(object: _74.MsgDepositAminoMsg): _74.MsgDeposit;
                toAminoMsg(message: _74.MsgDeposit): _74.MsgDepositAminoMsg;
                fromProtoMsg(message: _74.MsgDepositProtoMsg): _74.MsgDeposit;
                toProto(message: _74.MsgDeposit): Uint8Array;
                toProtoMsg(message: _74.MsgDeposit): _74.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _74.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _74.MsgDepositResponse;
                fromPartial(_: Partial<_74.MsgDepositResponse>): _74.MsgDepositResponse;
                fromAmino(_: _74.MsgDepositResponseAmino): _74.MsgDepositResponse;
                toAmino(_: _74.MsgDepositResponse): _74.MsgDepositResponseAmino;
                fromAminoMsg(object: _74.MsgDepositResponseAminoMsg): _74.MsgDepositResponse;
                toAminoMsg(message: _74.MsgDepositResponse): _74.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _74.MsgDepositResponseProtoMsg): _74.MsgDepositResponse;
                toProto(message: _74.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _74.MsgDepositResponse): _74.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _72.TextProposal | import("../shentu/cert/v1alpha1/cert").Compilation | import("../shentu/cert/v1alpha1/cert").Auditing | import("../shentu/cert/v1alpha1/cert").Proof | import("../shentu/cert/v1alpha1/cert").OracleOperator | import("../shentu/cert/v1alpha1/cert").ShieldPoolCreator | import("../shentu/cert/v1alpha1/cert").Identity | import("../shentu/cert/v1alpha1/cert").General | import("../shentu/cert/v1alpha1/cert").BountyAdmin;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _73.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.QueryProposalRequest;
                fromPartial(object: Partial<_73.QueryProposalRequest>): _73.QueryProposalRequest;
                fromAmino(object: _73.QueryProposalRequestAmino): _73.QueryProposalRequest;
                toAmino(message: _73.QueryProposalRequest): _73.QueryProposalRequestAmino;
                fromAminoMsg(object: _73.QueryProposalRequestAminoMsg): _73.QueryProposalRequest;
                toAminoMsg(message: _73.QueryProposalRequest): _73.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _73.QueryProposalRequestProtoMsg): _73.QueryProposalRequest;
                toProto(message: _73.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _73.QueryProposalRequest): _73.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _73.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.QueryProposalResponse;
                fromPartial(object: Partial<_73.QueryProposalResponse>): _73.QueryProposalResponse;
                fromAmino(object: _73.QueryProposalResponseAmino): _73.QueryProposalResponse;
                toAmino(message: _73.QueryProposalResponse): _73.QueryProposalResponseAmino;
                fromAminoMsg(object: _73.QueryProposalResponseAminoMsg): _73.QueryProposalResponse;
                toAminoMsg(message: _73.QueryProposalResponse): _73.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _73.QueryProposalResponseProtoMsg): _73.QueryProposalResponse;
                toProto(message: _73.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _73.QueryProposalResponse): _73.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _73.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.QueryProposalsRequest;
                fromPartial(object: Partial<_73.QueryProposalsRequest>): _73.QueryProposalsRequest;
                fromAmino(object: _73.QueryProposalsRequestAmino): _73.QueryProposalsRequest;
                toAmino(message: _73.QueryProposalsRequest): _73.QueryProposalsRequestAmino;
                fromAminoMsg(object: _73.QueryProposalsRequestAminoMsg): _73.QueryProposalsRequest;
                toAminoMsg(message: _73.QueryProposalsRequest): _73.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _73.QueryProposalsRequestProtoMsg): _73.QueryProposalsRequest;
                toProto(message: _73.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _73.QueryProposalsRequest): _73.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _73.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.QueryProposalsResponse;
                fromPartial(object: Partial<_73.QueryProposalsResponse>): _73.QueryProposalsResponse;
                fromAmino(object: _73.QueryProposalsResponseAmino): _73.QueryProposalsResponse;
                toAmino(message: _73.QueryProposalsResponse): _73.QueryProposalsResponseAmino;
                fromAminoMsg(object: _73.QueryProposalsResponseAminoMsg): _73.QueryProposalsResponse;
                toAminoMsg(message: _73.QueryProposalsResponse): _73.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _73.QueryProposalsResponseProtoMsg): _73.QueryProposalsResponse;
                toProto(message: _73.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _73.QueryProposalsResponse): _73.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _73.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.QueryVoteRequest;
                fromPartial(object: Partial<_73.QueryVoteRequest>): _73.QueryVoteRequest;
                fromAmino(object: _73.QueryVoteRequestAmino): _73.QueryVoteRequest;
                toAmino(message: _73.QueryVoteRequest): _73.QueryVoteRequestAmino;
                fromAminoMsg(object: _73.QueryVoteRequestAminoMsg): _73.QueryVoteRequest;
                toAminoMsg(message: _73.QueryVoteRequest): _73.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _73.QueryVoteRequestProtoMsg): _73.QueryVoteRequest;
                toProto(message: _73.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _73.QueryVoteRequest): _73.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _73.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.QueryVoteResponse;
                fromPartial(object: Partial<_73.QueryVoteResponse>): _73.QueryVoteResponse;
                fromAmino(object: _73.QueryVoteResponseAmino): _73.QueryVoteResponse;
                toAmino(message: _73.QueryVoteResponse): _73.QueryVoteResponseAmino;
                fromAminoMsg(object: _73.QueryVoteResponseAminoMsg): _73.QueryVoteResponse;
                toAminoMsg(message: _73.QueryVoteResponse): _73.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _73.QueryVoteResponseProtoMsg): _73.QueryVoteResponse;
                toProto(message: _73.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _73.QueryVoteResponse): _73.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _73.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.QueryVotesRequest;
                fromPartial(object: Partial<_73.QueryVotesRequest>): _73.QueryVotesRequest;
                fromAmino(object: _73.QueryVotesRequestAmino): _73.QueryVotesRequest;
                toAmino(message: _73.QueryVotesRequest): _73.QueryVotesRequestAmino;
                fromAminoMsg(object: _73.QueryVotesRequestAminoMsg): _73.QueryVotesRequest;
                toAminoMsg(message: _73.QueryVotesRequest): _73.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _73.QueryVotesRequestProtoMsg): _73.QueryVotesRequest;
                toProto(message: _73.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _73.QueryVotesRequest): _73.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _73.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.QueryVotesResponse;
                fromPartial(object: Partial<_73.QueryVotesResponse>): _73.QueryVotesResponse;
                fromAmino(object: _73.QueryVotesResponseAmino): _73.QueryVotesResponse;
                toAmino(message: _73.QueryVotesResponse): _73.QueryVotesResponseAmino;
                fromAminoMsg(object: _73.QueryVotesResponseAminoMsg): _73.QueryVotesResponse;
                toAminoMsg(message: _73.QueryVotesResponse): _73.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _73.QueryVotesResponseProtoMsg): _73.QueryVotesResponse;
                toProto(message: _73.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _73.QueryVotesResponse): _73.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _73.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.QueryParamsRequest;
                fromPartial(object: Partial<_73.QueryParamsRequest>): _73.QueryParamsRequest;
                fromAmino(object: _73.QueryParamsRequestAmino): _73.QueryParamsRequest;
                toAmino(message: _73.QueryParamsRequest): _73.QueryParamsRequestAmino;
                fromAminoMsg(object: _73.QueryParamsRequestAminoMsg): _73.QueryParamsRequest;
                toAminoMsg(message: _73.QueryParamsRequest): _73.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _73.QueryParamsRequestProtoMsg): _73.QueryParamsRequest;
                toProto(message: _73.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _73.QueryParamsRequest): _73.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _73.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.QueryParamsResponse;
                fromPartial(object: Partial<_73.QueryParamsResponse>): _73.QueryParamsResponse;
                fromAmino(object: _73.QueryParamsResponseAmino): _73.QueryParamsResponse;
                toAmino(message: _73.QueryParamsResponse): _73.QueryParamsResponseAmino;
                fromAminoMsg(object: _73.QueryParamsResponseAminoMsg): _73.QueryParamsResponse;
                toAminoMsg(message: _73.QueryParamsResponse): _73.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _73.QueryParamsResponseProtoMsg): _73.QueryParamsResponse;
                toProto(message: _73.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _73.QueryParamsResponse): _73.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _73.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.QueryDepositRequest;
                fromPartial(object: Partial<_73.QueryDepositRequest>): _73.QueryDepositRequest;
                fromAmino(object: _73.QueryDepositRequestAmino): _73.QueryDepositRequest;
                toAmino(message: _73.QueryDepositRequest): _73.QueryDepositRequestAmino;
                fromAminoMsg(object: _73.QueryDepositRequestAminoMsg): _73.QueryDepositRequest;
                toAminoMsg(message: _73.QueryDepositRequest): _73.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _73.QueryDepositRequestProtoMsg): _73.QueryDepositRequest;
                toProto(message: _73.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _73.QueryDepositRequest): _73.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _73.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.QueryDepositResponse;
                fromPartial(object: Partial<_73.QueryDepositResponse>): _73.QueryDepositResponse;
                fromAmino(object: _73.QueryDepositResponseAmino): _73.QueryDepositResponse;
                toAmino(message: _73.QueryDepositResponse): _73.QueryDepositResponseAmino;
                fromAminoMsg(object: _73.QueryDepositResponseAminoMsg): _73.QueryDepositResponse;
                toAminoMsg(message: _73.QueryDepositResponse): _73.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _73.QueryDepositResponseProtoMsg): _73.QueryDepositResponse;
                toProto(message: _73.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _73.QueryDepositResponse): _73.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _73.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.QueryDepositsRequest;
                fromPartial(object: Partial<_73.QueryDepositsRequest>): _73.QueryDepositsRequest;
                fromAmino(object: _73.QueryDepositsRequestAmino): _73.QueryDepositsRequest;
                toAmino(message: _73.QueryDepositsRequest): _73.QueryDepositsRequestAmino;
                fromAminoMsg(object: _73.QueryDepositsRequestAminoMsg): _73.QueryDepositsRequest;
                toAminoMsg(message: _73.QueryDepositsRequest): _73.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _73.QueryDepositsRequestProtoMsg): _73.QueryDepositsRequest;
                toProto(message: _73.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _73.QueryDepositsRequest): _73.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _73.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.QueryDepositsResponse;
                fromPartial(object: Partial<_73.QueryDepositsResponse>): _73.QueryDepositsResponse;
                fromAmino(object: _73.QueryDepositsResponseAmino): _73.QueryDepositsResponse;
                toAmino(message: _73.QueryDepositsResponse): _73.QueryDepositsResponseAmino;
                fromAminoMsg(object: _73.QueryDepositsResponseAminoMsg): _73.QueryDepositsResponse;
                toAminoMsg(message: _73.QueryDepositsResponse): _73.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _73.QueryDepositsResponseProtoMsg): _73.QueryDepositsResponse;
                toProto(message: _73.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _73.QueryDepositsResponse): _73.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _73.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.QueryTallyResultRequest;
                fromPartial(object: Partial<_73.QueryTallyResultRequest>): _73.QueryTallyResultRequest;
                fromAmino(object: _73.QueryTallyResultRequestAmino): _73.QueryTallyResultRequest;
                toAmino(message: _73.QueryTallyResultRequest): _73.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _73.QueryTallyResultRequestAminoMsg): _73.QueryTallyResultRequest;
                toAminoMsg(message: _73.QueryTallyResultRequest): _73.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _73.QueryTallyResultRequestProtoMsg): _73.QueryTallyResultRequest;
                toProto(message: _73.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _73.QueryTallyResultRequest): _73.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _73.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.QueryTallyResultResponse;
                fromPartial(object: Partial<_73.QueryTallyResultResponse>): _73.QueryTallyResultResponse;
                fromAmino(object: _73.QueryTallyResultResponseAmino): _73.QueryTallyResultResponse;
                toAmino(message: _73.QueryTallyResultResponse): _73.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _73.QueryTallyResultResponseAminoMsg): _73.QueryTallyResultResponse;
                toAminoMsg(message: _73.QueryTallyResultResponse): _73.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _73.QueryTallyResultResponseProtoMsg): _73.QueryTallyResultResponse;
                toProto(message: _73.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _73.QueryTallyResultResponse): _73.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _72.VoteOption;
            voteOptionToJSON(object: _72.VoteOption): string;
            proposalStatusFromJSON(object: any): _72.ProposalStatus;
            proposalStatusToJSON(object: _72.ProposalStatus): string;
            VoteOption: typeof _72.VoteOption;
            VoteOptionSDKType: typeof _72.VoteOption;
            VoteOptionAmino: typeof _72.VoteOption;
            ProposalStatus: typeof _72.ProposalStatus;
            ProposalStatusSDKType: typeof _72.ProposalStatus;
            ProposalStatusAmino: typeof _72.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _72.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.WeightedVoteOption;
                fromPartial(object: Partial<_72.WeightedVoteOption>): _72.WeightedVoteOption;
                fromAmino(object: _72.WeightedVoteOptionAmino): _72.WeightedVoteOption;
                toAmino(message: _72.WeightedVoteOption): _72.WeightedVoteOptionAmino;
                fromAminoMsg(object: _72.WeightedVoteOptionAminoMsg): _72.WeightedVoteOption;
                toAminoMsg(message: _72.WeightedVoteOption): _72.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _72.WeightedVoteOptionProtoMsg): _72.WeightedVoteOption;
                toProto(message: _72.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _72.WeightedVoteOption): _72.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _72.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.TextProposal;
                fromPartial(object: Partial<_72.TextProposal>): _72.TextProposal;
                fromAmino(object: _72.TextProposalAmino): _72.TextProposal;
                toAmino(message: _72.TextProposal): _72.TextProposalAmino;
                fromAminoMsg(object: _72.TextProposalAminoMsg): _72.TextProposal;
                toAminoMsg(message: _72.TextProposal): _72.TextProposalAminoMsg;
                fromProtoMsg(message: _72.TextProposalProtoMsg): _72.TextProposal;
                toProto(message: _72.TextProposal): Uint8Array;
                toProtoMsg(message: _72.TextProposal): _72.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _72.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.Deposit;
                fromPartial(object: Partial<_72.Deposit>): _72.Deposit;
                fromAmino(object: _72.DepositAmino): _72.Deposit;
                toAmino(message: _72.Deposit): _72.DepositAmino;
                fromAminoMsg(object: _72.DepositAminoMsg): _72.Deposit;
                toAminoMsg(message: _72.Deposit): _72.DepositAminoMsg;
                fromProtoMsg(message: _72.DepositProtoMsg): _72.Deposit;
                toProto(message: _72.Deposit): Uint8Array;
                toProtoMsg(message: _72.Deposit): _72.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _72.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.Proposal;
                fromPartial(object: Partial<_72.Proposal>): _72.Proposal;
                fromAmino(object: _72.ProposalAmino): _72.Proposal;
                toAmino(message: _72.Proposal): _72.ProposalAmino;
                fromAminoMsg(object: _72.ProposalAminoMsg): _72.Proposal;
                toAminoMsg(message: _72.Proposal): _72.ProposalAminoMsg;
                fromProtoMsg(message: _72.ProposalProtoMsg): _72.Proposal;
                toProto(message: _72.Proposal): Uint8Array;
                toProtoMsg(message: _72.Proposal): _72.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _72.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.TallyResult;
                fromPartial(object: Partial<_72.TallyResult>): _72.TallyResult;
                fromAmino(object: _72.TallyResultAmino): _72.TallyResult;
                toAmino(message: _72.TallyResult): _72.TallyResultAmino;
                fromAminoMsg(object: _72.TallyResultAminoMsg): _72.TallyResult;
                toAminoMsg(message: _72.TallyResult): _72.TallyResultAminoMsg;
                fromProtoMsg(message: _72.TallyResultProtoMsg): _72.TallyResult;
                toProto(message: _72.TallyResult): Uint8Array;
                toProtoMsg(message: _72.TallyResult): _72.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _72.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.Vote;
                fromPartial(object: Partial<_72.Vote>): _72.Vote;
                fromAmino(object: _72.VoteAmino): _72.Vote;
                toAmino(message: _72.Vote): _72.VoteAmino;
                fromAminoMsg(object: _72.VoteAminoMsg): _72.Vote;
                toAminoMsg(message: _72.Vote): _72.VoteAminoMsg;
                fromProtoMsg(message: _72.VoteProtoMsg): _72.Vote;
                toProto(message: _72.Vote): Uint8Array;
                toProtoMsg(message: _72.Vote): _72.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _72.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.DepositParams;
                fromPartial(object: Partial<_72.DepositParams>): _72.DepositParams;
                fromAmino(object: _72.DepositParamsAmino): _72.DepositParams;
                toAmino(message: _72.DepositParams): _72.DepositParamsAmino;
                fromAminoMsg(object: _72.DepositParamsAminoMsg): _72.DepositParams;
                toAminoMsg(message: _72.DepositParams): _72.DepositParamsAminoMsg;
                fromProtoMsg(message: _72.DepositParamsProtoMsg): _72.DepositParams;
                toProto(message: _72.DepositParams): Uint8Array;
                toProtoMsg(message: _72.DepositParams): _72.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _72.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.VotingParams;
                fromPartial(object: Partial<_72.VotingParams>): _72.VotingParams;
                fromAmino(object: _72.VotingParamsAmino): _72.VotingParams;
                toAmino(message: _72.VotingParams): _72.VotingParamsAmino;
                fromAminoMsg(object: _72.VotingParamsAminoMsg): _72.VotingParams;
                toAminoMsg(message: _72.VotingParams): _72.VotingParamsAminoMsg;
                fromProtoMsg(message: _72.VotingParamsProtoMsg): _72.VotingParams;
                toProto(message: _72.VotingParams): Uint8Array;
                toProtoMsg(message: _72.VotingParams): _72.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _72.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.TallyParams;
                fromPartial(object: Partial<_72.TallyParams>): _72.TallyParams;
                fromAmino(object: _72.TallyParamsAmino): _72.TallyParams;
                toAmino(message: _72.TallyParams): _72.TallyParamsAmino;
                fromAminoMsg(object: _72.TallyParamsAminoMsg): _72.TallyParams;
                toAminoMsg(message: _72.TallyParams): _72.TallyParamsAminoMsg;
                fromProtoMsg(message: _72.TallyParamsProtoMsg): _72.TallyParams;
                toProto(message: _72.TallyParams): Uint8Array;
                toProtoMsg(message: _72.TallyParams): _72.TallyParamsProtoMsg;
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
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _200.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _77.QueryParamsRequest): Promise<_77.QueryParamsResponse>;
                inflation(request?: _77.QueryInflationRequest): Promise<_77.QueryInflationResponse>;
                annualProvisions(request?: _77.QueryAnnualProvisionsRequest): Promise<_77.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _185.LCDQueryClient;
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
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _77.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _77.QueryInflationRequest;
                fromPartial(_: Partial<_77.QueryInflationRequest>): _77.QueryInflationRequest;
                fromAmino(_: _77.QueryInflationRequestAmino): _77.QueryInflationRequest;
                toAmino(_: _77.QueryInflationRequest): _77.QueryInflationRequestAmino;
                fromAminoMsg(object: _77.QueryInflationRequestAminoMsg): _77.QueryInflationRequest;
                toAminoMsg(message: _77.QueryInflationRequest): _77.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _77.QueryInflationRequestProtoMsg): _77.QueryInflationRequest;
                toProto(message: _77.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _77.QueryInflationRequest): _77.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _77.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryInflationResponse;
                fromPartial(object: Partial<_77.QueryInflationResponse>): _77.QueryInflationResponse;
                fromAmino(object: _77.QueryInflationResponseAmino): _77.QueryInflationResponse;
                toAmino(message: _77.QueryInflationResponse): _77.QueryInflationResponseAmino;
                fromAminoMsg(object: _77.QueryInflationResponseAminoMsg): _77.QueryInflationResponse;
                toAminoMsg(message: _77.QueryInflationResponse): _77.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _77.QueryInflationResponseProtoMsg): _77.QueryInflationResponse;
                toProto(message: _77.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _77.QueryInflationResponse): _77.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _77.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _77.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_77.QueryAnnualProvisionsRequest>): _77.QueryAnnualProvisionsRequest;
                fromAmino(_: _77.QueryAnnualProvisionsRequestAmino): _77.QueryAnnualProvisionsRequest;
                toAmino(_: _77.QueryAnnualProvisionsRequest): _77.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _77.QueryAnnualProvisionsRequestAminoMsg): _77.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _77.QueryAnnualProvisionsRequest): _77.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _77.QueryAnnualProvisionsRequestProtoMsg): _77.QueryAnnualProvisionsRequest;
                toProto(message: _77.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _77.QueryAnnualProvisionsRequest): _77.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _77.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_77.QueryAnnualProvisionsResponse>): _77.QueryAnnualProvisionsResponse;
                fromAmino(object: _77.QueryAnnualProvisionsResponseAmino): _77.QueryAnnualProvisionsResponse;
                toAmino(message: _77.QueryAnnualProvisionsResponse): _77.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _77.QueryAnnualProvisionsResponseAminoMsg): _77.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _77.QueryAnnualProvisionsResponse): _77.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _77.QueryAnnualProvisionsResponseProtoMsg): _77.QueryAnnualProvisionsResponse;
                toProto(message: _77.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _77.QueryAnnualProvisionsResponse): _77.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _76.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.Minter;
                fromPartial(object: Partial<_76.Minter>): _76.Minter;
                fromAmino(object: _76.MinterAmino): _76.Minter;
                toAmino(message: _76.Minter): _76.MinterAmino;
                fromAminoMsg(object: _76.MinterAminoMsg): _76.Minter;
                toAminoMsg(message: _76.Minter): _76.MinterAminoMsg;
                fromProtoMsg(message: _76.MinterProtoMsg): _76.Minter;
                toProto(message: _76.Minter): Uint8Array;
                toProtoMsg(message: _76.Minter): _76.MinterProtoMsg;
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
            GenesisState: {
                typeUrl: string;
                encode(message: _75.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.GenesisState;
                fromPartial(object: Partial<_75.GenesisState>): _75.GenesisState;
                fromAmino(object: _75.GenesisStateAmino): _75.GenesisState;
                toAmino(message: _75.GenesisState): _75.GenesisStateAmino;
                fromAminoMsg(object: _75.GenesisStateAminoMsg): _75.GenesisState;
                toAminoMsg(message: _75.GenesisState): _75.GenesisStateAminoMsg;
                fromProtoMsg(message: _75.GenesisStateProtoMsg): _75.GenesisState;
                toProto(message: _75.GenesisState): Uint8Array;
                toProtoMsg(message: _75.GenesisState): _75.GenesisStateProtoMsg;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _201.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request: _79.QueryParamsRequest): Promise<_79.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _186.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _79.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryParamsRequest;
                fromPartial(object: Partial<_79.QueryParamsRequest>): _79.QueryParamsRequest;
                fromAmino(object: _79.QueryParamsRequestAmino): _79.QueryParamsRequest;
                toAmino(message: _79.QueryParamsRequest): _79.QueryParamsRequestAmino;
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
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _78.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.ParameterChangeProposal;
                fromPartial(object: Partial<_78.ParameterChangeProposal>): _78.ParameterChangeProposal;
                fromAmino(object: _78.ParameterChangeProposalAmino): _78.ParameterChangeProposal;
                toAmino(message: _78.ParameterChangeProposal): _78.ParameterChangeProposalAmino;
                fromAminoMsg(object: _78.ParameterChangeProposalAminoMsg): _78.ParameterChangeProposal;
                toAminoMsg(message: _78.ParameterChangeProposal): _78.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _78.ParameterChangeProposalProtoMsg): _78.ParameterChangeProposal;
                toProto(message: _78.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _78.ParameterChangeProposal): _78.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _78.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.ParamChange;
                fromPartial(object: Partial<_78.ParamChange>): _78.ParamChange;
                fromAmino(object: _78.ParamChangeAmino): _78.ParamChange;
                toAmino(message: _78.ParamChange): _78.ParamChangeAmino;
                fromAminoMsg(object: _78.ParamChangeAminoMsg): _78.ParamChange;
                toAminoMsg(message: _78.ParamChange): _78.ParamChangeAminoMsg;
                fromProtoMsg(message: _78.ParamChangeProtoMsg): _78.ParamChange;
                toProto(message: _78.ParamChange): Uint8Array;
                toProtoMsg(message: _78.ParamChange): _78.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _213.MsgClientImpl;
            QueryClientImpl: typeof _202.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _81.QueryParamsRequest): Promise<_81.QueryParamsResponse>;
                signingInfo(request: _81.QuerySigningInfoRequest): Promise<_81.QuerySigningInfoResponse>;
                signingInfos(request?: _81.QuerySigningInfosRequest): Promise<_81.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _187.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _83.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _83.MsgUnjail): {
                        typeUrl: string;
                        value: _83.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _83.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _83.MsgUnjail): {
                        typeUrl: string;
                        value: _83.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _83.MsgUnjail) => _83.MsgUnjailAmino;
                    fromAmino: (object: _83.MsgUnjailAmino) => _83.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _83.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgUnjail;
                fromPartial(object: Partial<_83.MsgUnjail>): _83.MsgUnjail;
                fromAmino(object: _83.MsgUnjailAmino): _83.MsgUnjail;
                toAmino(message: _83.MsgUnjail): _83.MsgUnjailAmino;
                fromAminoMsg(object: _83.MsgUnjailAminoMsg): _83.MsgUnjail;
                toAminoMsg(message: _83.MsgUnjail): _83.MsgUnjailAminoMsg;
                fromProtoMsg(message: _83.MsgUnjailProtoMsg): _83.MsgUnjail;
                toProto(message: _83.MsgUnjail): Uint8Array;
                toProtoMsg(message: _83.MsgUnjail): _83.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _83.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _83.MsgUnjailResponse;
                fromPartial(_: Partial<_83.MsgUnjailResponse>): _83.MsgUnjailResponse;
                fromAmino(_: _83.MsgUnjailResponseAmino): _83.MsgUnjailResponse;
                toAmino(_: _83.MsgUnjailResponse): _83.MsgUnjailResponseAmino;
                fromAminoMsg(object: _83.MsgUnjailResponseAminoMsg): _83.MsgUnjailResponse;
                toAminoMsg(message: _83.MsgUnjailResponse): _83.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _83.MsgUnjailResponseProtoMsg): _83.MsgUnjailResponse;
                toProto(message: _83.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _83.MsgUnjailResponse): _83.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _82.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.ValidatorSigningInfo;
                fromPartial(object: Partial<_82.ValidatorSigningInfo>): _82.ValidatorSigningInfo;
                fromAmino(object: _82.ValidatorSigningInfoAmino): _82.ValidatorSigningInfo;
                toAmino(message: _82.ValidatorSigningInfo): _82.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _82.ValidatorSigningInfoAminoMsg): _82.ValidatorSigningInfo;
                toAminoMsg(message: _82.ValidatorSigningInfo): _82.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _82.ValidatorSigningInfoProtoMsg): _82.ValidatorSigningInfo;
                toProto(message: _82.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _82.ValidatorSigningInfo): _82.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _82.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.Params;
                fromPartial(object: Partial<_82.Params>): _82.Params;
                fromAmino(object: _82.ParamsAmino): _82.Params;
                toAmino(message: _82.Params): _82.ParamsAmino;
                fromAminoMsg(object: _82.ParamsAminoMsg): _82.Params;
                toAminoMsg(message: _82.Params): _82.ParamsAminoMsg;
                fromProtoMsg(message: _82.ParamsProtoMsg): _82.Params;
                toProto(message: _82.Params): Uint8Array;
                toProtoMsg(message: _82.Params): _82.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _81.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _81.QueryParamsRequest;
                fromPartial(_: Partial<_81.QueryParamsRequest>): _81.QueryParamsRequest;
                fromAmino(_: _81.QueryParamsRequestAmino): _81.QueryParamsRequest;
                toAmino(_: _81.QueryParamsRequest): _81.QueryParamsRequestAmino;
                fromAminoMsg(object: _81.QueryParamsRequestAminoMsg): _81.QueryParamsRequest;
                toAminoMsg(message: _81.QueryParamsRequest): _81.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _81.QueryParamsRequestProtoMsg): _81.QueryParamsRequest;
                toProto(message: _81.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _81.QueryParamsRequest): _81.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _81.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryParamsResponse;
                fromPartial(object: Partial<_81.QueryParamsResponse>): _81.QueryParamsResponse;
                fromAmino(object: _81.QueryParamsResponseAmino): _81.QueryParamsResponse;
                toAmino(message: _81.QueryParamsResponse): _81.QueryParamsResponseAmino;
                fromAminoMsg(object: _81.QueryParamsResponseAminoMsg): _81.QueryParamsResponse;
                toAminoMsg(message: _81.QueryParamsResponse): _81.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _81.QueryParamsResponseProtoMsg): _81.QueryParamsResponse;
                toProto(message: _81.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _81.QueryParamsResponse): _81.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _81.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QuerySigningInfoRequest;
                fromPartial(object: Partial<_81.QuerySigningInfoRequest>): _81.QuerySigningInfoRequest;
                fromAmino(object: _81.QuerySigningInfoRequestAmino): _81.QuerySigningInfoRequest;
                toAmino(message: _81.QuerySigningInfoRequest): _81.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _81.QuerySigningInfoRequestAminoMsg): _81.QuerySigningInfoRequest;
                toAminoMsg(message: _81.QuerySigningInfoRequest): _81.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _81.QuerySigningInfoRequestProtoMsg): _81.QuerySigningInfoRequest;
                toProto(message: _81.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _81.QuerySigningInfoRequest): _81.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _81.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QuerySigningInfoResponse;
                fromPartial(object: Partial<_81.QuerySigningInfoResponse>): _81.QuerySigningInfoResponse;
                fromAmino(object: _81.QuerySigningInfoResponseAmino): _81.QuerySigningInfoResponse;
                toAmino(message: _81.QuerySigningInfoResponse): _81.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _81.QuerySigningInfoResponseAminoMsg): _81.QuerySigningInfoResponse;
                toAminoMsg(message: _81.QuerySigningInfoResponse): _81.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _81.QuerySigningInfoResponseProtoMsg): _81.QuerySigningInfoResponse;
                toProto(message: _81.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _81.QuerySigningInfoResponse): _81.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _81.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QuerySigningInfosRequest;
                fromPartial(object: Partial<_81.QuerySigningInfosRequest>): _81.QuerySigningInfosRequest;
                fromAmino(object: _81.QuerySigningInfosRequestAmino): _81.QuerySigningInfosRequest;
                toAmino(message: _81.QuerySigningInfosRequest): _81.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _81.QuerySigningInfosRequestAminoMsg): _81.QuerySigningInfosRequest;
                toAminoMsg(message: _81.QuerySigningInfosRequest): _81.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _81.QuerySigningInfosRequestProtoMsg): _81.QuerySigningInfosRequest;
                toProto(message: _81.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _81.QuerySigningInfosRequest): _81.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _81.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QuerySigningInfosResponse;
                fromPartial(object: Partial<_81.QuerySigningInfosResponse>): _81.QuerySigningInfosResponse;
                fromAmino(object: _81.QuerySigningInfosResponseAmino): _81.QuerySigningInfosResponse;
                toAmino(message: _81.QuerySigningInfosResponse): _81.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _81.QuerySigningInfosResponseAminoMsg): _81.QuerySigningInfosResponse;
                toAminoMsg(message: _81.QuerySigningInfosResponse): _81.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _81.QuerySigningInfosResponseProtoMsg): _81.QuerySigningInfosResponse;
                toProto(message: _81.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _81.QuerySigningInfosResponse): _81.QuerySigningInfosResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _80.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.GenesisState;
                fromPartial(object: Partial<_80.GenesisState>): _80.GenesisState;
                fromAmino(object: _80.GenesisStateAmino): _80.GenesisState;
                toAmino(message: _80.GenesisState): _80.GenesisStateAmino;
                fromAminoMsg(object: _80.GenesisStateAminoMsg): _80.GenesisState;
                toAminoMsg(message: _80.GenesisState): _80.GenesisStateAminoMsg;
                fromProtoMsg(message: _80.GenesisStateProtoMsg): _80.GenesisState;
                toProto(message: _80.GenesisState): Uint8Array;
                toProtoMsg(message: _80.GenesisState): _80.GenesisStateProtoMsg;
            };
            SigningInfo: {
                typeUrl: string;
                encode(message: _80.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.SigningInfo;
                fromPartial(object: Partial<_80.SigningInfo>): _80.SigningInfo;
                fromAmino(object: _80.SigningInfoAmino): _80.SigningInfo;
                toAmino(message: _80.SigningInfo): _80.SigningInfoAmino;
                fromAminoMsg(object: _80.SigningInfoAminoMsg): _80.SigningInfo;
                toAminoMsg(message: _80.SigningInfo): _80.SigningInfoAminoMsg;
                fromProtoMsg(message: _80.SigningInfoProtoMsg): _80.SigningInfo;
                toProto(message: _80.SigningInfo): Uint8Array;
                toProtoMsg(message: _80.SigningInfo): _80.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _80.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.ValidatorMissedBlocks;
                fromPartial(object: Partial<_80.ValidatorMissedBlocks>): _80.ValidatorMissedBlocks;
                fromAmino(object: _80.ValidatorMissedBlocksAmino): _80.ValidatorMissedBlocks;
                toAmino(message: _80.ValidatorMissedBlocks): _80.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _80.ValidatorMissedBlocksAminoMsg): _80.ValidatorMissedBlocks;
                toAminoMsg(message: _80.ValidatorMissedBlocks): _80.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _80.ValidatorMissedBlocksProtoMsg): _80.ValidatorMissedBlocks;
                toProto(message: _80.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _80.ValidatorMissedBlocks): _80.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _80.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MissedBlock;
                fromPartial(object: Partial<_80.MissedBlock>): _80.MissedBlock;
                fromAmino(object: _80.MissedBlockAmino): _80.MissedBlock;
                toAmino(message: _80.MissedBlock): _80.MissedBlockAmino;
                fromAminoMsg(object: _80.MissedBlockAminoMsg): _80.MissedBlock;
                toAminoMsg(message: _80.MissedBlock): _80.MissedBlockAminoMsg;
                fromProtoMsg(message: _80.MissedBlockProtoMsg): _80.MissedBlock;
                toProto(message: _80.MissedBlock): Uint8Array;
                toProtoMsg(message: _80.MissedBlock): _80.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _214.MsgClientImpl;
            QueryClientImpl: typeof _203.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                validators(request: _86.QueryValidatorsRequest): Promise<_86.QueryValidatorsResponse>;
                validator(request: _86.QueryValidatorRequest): Promise<_86.QueryValidatorResponse>;
                validatorDelegations(request: _86.QueryValidatorDelegationsRequest): Promise<_86.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _86.QueryValidatorUnbondingDelegationsRequest): Promise<_86.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _86.QueryDelegationRequest): Promise<_86.QueryDelegationResponse>;
                unbondingDelegation(request: _86.QueryUnbondingDelegationRequest): Promise<_86.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _86.QueryDelegatorDelegationsRequest): Promise<_86.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _86.QueryDelegatorUnbondingDelegationsRequest): Promise<_86.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _86.QueryRedelegationsRequest): Promise<_86.QueryRedelegationsResponse>;
                delegatorValidators(request: _86.QueryDelegatorValidatorsRequest): Promise<_86.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _86.QueryDelegatorValidatorRequest): Promise<_86.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _86.QueryHistoricalInfoRequest): Promise<_86.QueryHistoricalInfoResponse>;
                pool(request?: _86.QueryPoolRequest): Promise<_86.QueryPoolResponse>;
                params(request?: _86.QueryParamsRequest): Promise<_86.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _188.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _88.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _88.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _88.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _88.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _88.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _88.MsgCreateValidator): {
                        typeUrl: string;
                        value: _88.MsgCreateValidator;
                    };
                    editValidator(value: _88.MsgEditValidator): {
                        typeUrl: string;
                        value: _88.MsgEditValidator;
                    };
                    delegate(value: _88.MsgDelegate): {
                        typeUrl: string;
                        value: _88.MsgDelegate;
                    };
                    beginRedelegate(value: _88.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _88.MsgBeginRedelegate;
                    };
                    undelegate(value: _88.MsgUndelegate): {
                        typeUrl: string;
                        value: _88.MsgUndelegate;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _88.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _88.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _88.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _88.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _88.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _88.MsgCreateValidator): {
                        typeUrl: string;
                        value: _88.MsgCreateValidator;
                    };
                    editValidator(value: _88.MsgEditValidator): {
                        typeUrl: string;
                        value: _88.MsgEditValidator;
                    };
                    delegate(value: _88.MsgDelegate): {
                        typeUrl: string;
                        value: _88.MsgDelegate;
                    };
                    beginRedelegate(value: _88.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _88.MsgBeginRedelegate;
                    };
                    undelegate(value: _88.MsgUndelegate): {
                        typeUrl: string;
                        value: _88.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _88.MsgCreateValidator) => _88.MsgCreateValidatorAmino;
                    fromAmino: (object: _88.MsgCreateValidatorAmino) => _88.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _88.MsgEditValidator) => _88.MsgEditValidatorAmino;
                    fromAmino: (object: _88.MsgEditValidatorAmino) => _88.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _88.MsgDelegate) => _88.MsgDelegateAmino;
                    fromAmino: (object: _88.MsgDelegateAmino) => _88.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _88.MsgBeginRedelegate) => _88.MsgBeginRedelegateAmino;
                    fromAmino: (object: _88.MsgBeginRedelegateAmino) => _88.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _88.MsgUndelegate) => _88.MsgUndelegateAmino;
                    fromAmino: (object: _88.MsgUndelegateAmino) => _88.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _88.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.MsgCreateValidator;
                fromPartial(object: Partial<_88.MsgCreateValidator>): _88.MsgCreateValidator;
                fromAmino(object: _88.MsgCreateValidatorAmino): _88.MsgCreateValidator;
                toAmino(message: _88.MsgCreateValidator): _88.MsgCreateValidatorAmino;
                fromAminoMsg(object: _88.MsgCreateValidatorAminoMsg): _88.MsgCreateValidator;
                toAminoMsg(message: _88.MsgCreateValidator): _88.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _88.MsgCreateValidatorProtoMsg): _88.MsgCreateValidator;
                toProto(message: _88.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _88.MsgCreateValidator): _88.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _88.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _88.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_88.MsgCreateValidatorResponse>): _88.MsgCreateValidatorResponse;
                fromAmino(_: _88.MsgCreateValidatorResponseAmino): _88.MsgCreateValidatorResponse;
                toAmino(_: _88.MsgCreateValidatorResponse): _88.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _88.MsgCreateValidatorResponseAminoMsg): _88.MsgCreateValidatorResponse;
                toAminoMsg(message: _88.MsgCreateValidatorResponse): _88.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _88.MsgCreateValidatorResponseProtoMsg): _88.MsgCreateValidatorResponse;
                toProto(message: _88.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _88.MsgCreateValidatorResponse): _88.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _88.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.MsgEditValidator;
                fromPartial(object: Partial<_88.MsgEditValidator>): _88.MsgEditValidator;
                fromAmino(object: _88.MsgEditValidatorAmino): _88.MsgEditValidator;
                toAmino(message: _88.MsgEditValidator): _88.MsgEditValidatorAmino;
                fromAminoMsg(object: _88.MsgEditValidatorAminoMsg): _88.MsgEditValidator;
                toAminoMsg(message: _88.MsgEditValidator): _88.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _88.MsgEditValidatorProtoMsg): _88.MsgEditValidator;
                toProto(message: _88.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _88.MsgEditValidator): _88.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _88.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _88.MsgEditValidatorResponse;
                fromPartial(_: Partial<_88.MsgEditValidatorResponse>): _88.MsgEditValidatorResponse;
                fromAmino(_: _88.MsgEditValidatorResponseAmino): _88.MsgEditValidatorResponse;
                toAmino(_: _88.MsgEditValidatorResponse): _88.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _88.MsgEditValidatorResponseAminoMsg): _88.MsgEditValidatorResponse;
                toAminoMsg(message: _88.MsgEditValidatorResponse): _88.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _88.MsgEditValidatorResponseProtoMsg): _88.MsgEditValidatorResponse;
                toProto(message: _88.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _88.MsgEditValidatorResponse): _88.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _88.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.MsgDelegate;
                fromPartial(object: Partial<_88.MsgDelegate>): _88.MsgDelegate;
                fromAmino(object: _88.MsgDelegateAmino): _88.MsgDelegate;
                toAmino(message: _88.MsgDelegate): _88.MsgDelegateAmino;
                fromAminoMsg(object: _88.MsgDelegateAminoMsg): _88.MsgDelegate;
                toAminoMsg(message: _88.MsgDelegate): _88.MsgDelegateAminoMsg;
                fromProtoMsg(message: _88.MsgDelegateProtoMsg): _88.MsgDelegate;
                toProto(message: _88.MsgDelegate): Uint8Array;
                toProtoMsg(message: _88.MsgDelegate): _88.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _88.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _88.MsgDelegateResponse;
                fromPartial(_: Partial<_88.MsgDelegateResponse>): _88.MsgDelegateResponse;
                fromAmino(_: _88.MsgDelegateResponseAmino): _88.MsgDelegateResponse;
                toAmino(_: _88.MsgDelegateResponse): _88.MsgDelegateResponseAmino;
                fromAminoMsg(object: _88.MsgDelegateResponseAminoMsg): _88.MsgDelegateResponse;
                toAminoMsg(message: _88.MsgDelegateResponse): _88.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _88.MsgDelegateResponseProtoMsg): _88.MsgDelegateResponse;
                toProto(message: _88.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _88.MsgDelegateResponse): _88.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _88.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.MsgBeginRedelegate;
                fromPartial(object: Partial<_88.MsgBeginRedelegate>): _88.MsgBeginRedelegate;
                fromAmino(object: _88.MsgBeginRedelegateAmino): _88.MsgBeginRedelegate;
                toAmino(message: _88.MsgBeginRedelegate): _88.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _88.MsgBeginRedelegateAminoMsg): _88.MsgBeginRedelegate;
                toAminoMsg(message: _88.MsgBeginRedelegate): _88.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _88.MsgBeginRedelegateProtoMsg): _88.MsgBeginRedelegate;
                toProto(message: _88.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _88.MsgBeginRedelegate): _88.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _88.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_88.MsgBeginRedelegateResponse>): _88.MsgBeginRedelegateResponse;
                fromAmino(object: _88.MsgBeginRedelegateResponseAmino): _88.MsgBeginRedelegateResponse;
                toAmino(message: _88.MsgBeginRedelegateResponse): _88.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _88.MsgBeginRedelegateResponseAminoMsg): _88.MsgBeginRedelegateResponse;
                toAminoMsg(message: _88.MsgBeginRedelegateResponse): _88.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _88.MsgBeginRedelegateResponseProtoMsg): _88.MsgBeginRedelegateResponse;
                toProto(message: _88.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _88.MsgBeginRedelegateResponse): _88.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _88.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.MsgUndelegate;
                fromPartial(object: Partial<_88.MsgUndelegate>): _88.MsgUndelegate;
                fromAmino(object: _88.MsgUndelegateAmino): _88.MsgUndelegate;
                toAmino(message: _88.MsgUndelegate): _88.MsgUndelegateAmino;
                fromAminoMsg(object: _88.MsgUndelegateAminoMsg): _88.MsgUndelegate;
                toAminoMsg(message: _88.MsgUndelegate): _88.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _88.MsgUndelegateProtoMsg): _88.MsgUndelegate;
                toProto(message: _88.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _88.MsgUndelegate): _88.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _88.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.MsgUndelegateResponse;
                fromPartial(object: Partial<_88.MsgUndelegateResponse>): _88.MsgUndelegateResponse;
                fromAmino(object: _88.MsgUndelegateResponseAmino): _88.MsgUndelegateResponse;
                toAmino(message: _88.MsgUndelegateResponse): _88.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _88.MsgUndelegateResponseAminoMsg): _88.MsgUndelegateResponse;
                toAminoMsg(message: _88.MsgUndelegateResponse): _88.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _88.MsgUndelegateResponseProtoMsg): _88.MsgUndelegateResponse;
                toProto(message: _88.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _88.MsgUndelegateResponse): _88.MsgUndelegateResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => any;
            bondStatusFromJSON(object: any): _87.BondStatus;
            bondStatusToJSON(object: _87.BondStatus): string;
            BondStatus: typeof _87.BondStatus;
            BondStatusSDKType: typeof _87.BondStatus;
            BondStatusAmino: typeof _87.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _87.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.HistoricalInfo;
                fromPartial(object: Partial<_87.HistoricalInfo>): _87.HistoricalInfo;
                fromAmino(object: _87.HistoricalInfoAmino): _87.HistoricalInfo;
                toAmino(message: _87.HistoricalInfo): _87.HistoricalInfoAmino;
                fromAminoMsg(object: _87.HistoricalInfoAminoMsg): _87.HistoricalInfo;
                toAminoMsg(message: _87.HistoricalInfo): _87.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _87.HistoricalInfoProtoMsg): _87.HistoricalInfo;
                toProto(message: _87.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _87.HistoricalInfo): _87.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _87.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.CommissionRates;
                fromPartial(object: Partial<_87.CommissionRates>): _87.CommissionRates;
                fromAmino(object: _87.CommissionRatesAmino): _87.CommissionRates;
                toAmino(message: _87.CommissionRates): _87.CommissionRatesAmino;
                fromAminoMsg(object: _87.CommissionRatesAminoMsg): _87.CommissionRates;
                toAminoMsg(message: _87.CommissionRates): _87.CommissionRatesAminoMsg;
                fromProtoMsg(message: _87.CommissionRatesProtoMsg): _87.CommissionRates;
                toProto(message: _87.CommissionRates): Uint8Array;
                toProtoMsg(message: _87.CommissionRates): _87.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _87.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.Commission;
                fromPartial(object: Partial<_87.Commission>): _87.Commission;
                fromAmino(object: _87.CommissionAmino): _87.Commission;
                toAmino(message: _87.Commission): _87.CommissionAmino;
                fromAminoMsg(object: _87.CommissionAminoMsg): _87.Commission;
                toAminoMsg(message: _87.Commission): _87.CommissionAminoMsg;
                fromProtoMsg(message: _87.CommissionProtoMsg): _87.Commission;
                toProto(message: _87.Commission): Uint8Array;
                toProtoMsg(message: _87.Commission): _87.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _87.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.Description;
                fromPartial(object: Partial<_87.Description>): _87.Description;
                fromAmino(object: _87.DescriptionAmino): _87.Description;
                toAmino(message: _87.Description): _87.DescriptionAmino;
                fromAminoMsg(object: _87.DescriptionAminoMsg): _87.Description;
                toAminoMsg(message: _87.Description): _87.DescriptionAminoMsg;
                fromProtoMsg(message: _87.DescriptionProtoMsg): _87.Description;
                toProto(message: _87.Description): Uint8Array;
                toProtoMsg(message: _87.Description): _87.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _87.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.Validator;
                fromPartial(object: Partial<_87.Validator>): _87.Validator;
                fromAmino(object: _87.ValidatorAmino): _87.Validator;
                toAmino(message: _87.Validator): _87.ValidatorAmino;
                fromAminoMsg(object: _87.ValidatorAminoMsg): _87.Validator;
                toAminoMsg(message: _87.Validator): _87.ValidatorAminoMsg;
                fromProtoMsg(message: _87.ValidatorProtoMsg): _87.Validator;
                toProto(message: _87.Validator): Uint8Array;
                toProtoMsg(message: _87.Validator): _87.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _87.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.ValAddresses;
                fromPartial(object: Partial<_87.ValAddresses>): _87.ValAddresses;
                fromAmino(object: _87.ValAddressesAmino): _87.ValAddresses;
                toAmino(message: _87.ValAddresses): _87.ValAddressesAmino;
                fromAminoMsg(object: _87.ValAddressesAminoMsg): _87.ValAddresses;
                toAminoMsg(message: _87.ValAddresses): _87.ValAddressesAminoMsg;
                fromProtoMsg(message: _87.ValAddressesProtoMsg): _87.ValAddresses;
                toProto(message: _87.ValAddresses): Uint8Array;
                toProtoMsg(message: _87.ValAddresses): _87.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _87.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.DVPair;
                fromPartial(object: Partial<_87.DVPair>): _87.DVPair;
                fromAmino(object: _87.DVPairAmino): _87.DVPair;
                toAmino(message: _87.DVPair): _87.DVPairAmino;
                fromAminoMsg(object: _87.DVPairAminoMsg): _87.DVPair;
                toAminoMsg(message: _87.DVPair): _87.DVPairAminoMsg;
                fromProtoMsg(message: _87.DVPairProtoMsg): _87.DVPair;
                toProto(message: _87.DVPair): Uint8Array;
                toProtoMsg(message: _87.DVPair): _87.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _87.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.DVPairs;
                fromPartial(object: Partial<_87.DVPairs>): _87.DVPairs;
                fromAmino(object: _87.DVPairsAmino): _87.DVPairs;
                toAmino(message: _87.DVPairs): _87.DVPairsAmino;
                fromAminoMsg(object: _87.DVPairsAminoMsg): _87.DVPairs;
                toAminoMsg(message: _87.DVPairs): _87.DVPairsAminoMsg;
                fromProtoMsg(message: _87.DVPairsProtoMsg): _87.DVPairs;
                toProto(message: _87.DVPairs): Uint8Array;
                toProtoMsg(message: _87.DVPairs): _87.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _87.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.DVVTriplet;
                fromPartial(object: Partial<_87.DVVTriplet>): _87.DVVTriplet;
                fromAmino(object: _87.DVVTripletAmino): _87.DVVTriplet;
                toAmino(message: _87.DVVTriplet): _87.DVVTripletAmino;
                fromAminoMsg(object: _87.DVVTripletAminoMsg): _87.DVVTriplet;
                toAminoMsg(message: _87.DVVTriplet): _87.DVVTripletAminoMsg;
                fromProtoMsg(message: _87.DVVTripletProtoMsg): _87.DVVTriplet;
                toProto(message: _87.DVVTriplet): Uint8Array;
                toProtoMsg(message: _87.DVVTriplet): _87.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _87.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.DVVTriplets;
                fromPartial(object: Partial<_87.DVVTriplets>): _87.DVVTriplets;
                fromAmino(object: _87.DVVTripletsAmino): _87.DVVTriplets;
                toAmino(message: _87.DVVTriplets): _87.DVVTripletsAmino;
                fromAminoMsg(object: _87.DVVTripletsAminoMsg): _87.DVVTriplets;
                toAminoMsg(message: _87.DVVTriplets): _87.DVVTripletsAminoMsg;
                fromProtoMsg(message: _87.DVVTripletsProtoMsg): _87.DVVTriplets;
                toProto(message: _87.DVVTriplets): Uint8Array;
                toProtoMsg(message: _87.DVVTriplets): _87.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _87.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.Delegation;
                fromPartial(object: Partial<_87.Delegation>): _87.Delegation;
                fromAmino(object: _87.DelegationAmino): _87.Delegation;
                toAmino(message: _87.Delegation): _87.DelegationAmino;
                fromAminoMsg(object: _87.DelegationAminoMsg): _87.Delegation;
                toAminoMsg(message: _87.Delegation): _87.DelegationAminoMsg;
                fromProtoMsg(message: _87.DelegationProtoMsg): _87.Delegation;
                toProto(message: _87.Delegation): Uint8Array;
                toProtoMsg(message: _87.Delegation): _87.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _87.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.UnbondingDelegation;
                fromPartial(object: Partial<_87.UnbondingDelegation>): _87.UnbondingDelegation;
                fromAmino(object: _87.UnbondingDelegationAmino): _87.UnbondingDelegation;
                toAmino(message: _87.UnbondingDelegation): _87.UnbondingDelegationAmino;
                fromAminoMsg(object: _87.UnbondingDelegationAminoMsg): _87.UnbondingDelegation;
                toAminoMsg(message: _87.UnbondingDelegation): _87.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _87.UnbondingDelegationProtoMsg): _87.UnbondingDelegation;
                toProto(message: _87.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _87.UnbondingDelegation): _87.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _87.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.UnbondingDelegationEntry;
                fromPartial(object: Partial<_87.UnbondingDelegationEntry>): _87.UnbondingDelegationEntry;
                fromAmino(object: _87.UnbondingDelegationEntryAmino): _87.UnbondingDelegationEntry;
                toAmino(message: _87.UnbondingDelegationEntry): _87.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _87.UnbondingDelegationEntryAminoMsg): _87.UnbondingDelegationEntry;
                toAminoMsg(message: _87.UnbondingDelegationEntry): _87.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _87.UnbondingDelegationEntryProtoMsg): _87.UnbondingDelegationEntry;
                toProto(message: _87.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _87.UnbondingDelegationEntry): _87.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _87.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.RedelegationEntry;
                fromPartial(object: Partial<_87.RedelegationEntry>): _87.RedelegationEntry;
                fromAmino(object: _87.RedelegationEntryAmino): _87.RedelegationEntry;
                toAmino(message: _87.RedelegationEntry): _87.RedelegationEntryAmino;
                fromAminoMsg(object: _87.RedelegationEntryAminoMsg): _87.RedelegationEntry;
                toAminoMsg(message: _87.RedelegationEntry): _87.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _87.RedelegationEntryProtoMsg): _87.RedelegationEntry;
                toProto(message: _87.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _87.RedelegationEntry): _87.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _87.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.Redelegation;
                fromPartial(object: Partial<_87.Redelegation>): _87.Redelegation;
                fromAmino(object: _87.RedelegationAmino): _87.Redelegation;
                toAmino(message: _87.Redelegation): _87.RedelegationAmino;
                fromAminoMsg(object: _87.RedelegationAminoMsg): _87.Redelegation;
                toAminoMsg(message: _87.Redelegation): _87.RedelegationAminoMsg;
                fromProtoMsg(message: _87.RedelegationProtoMsg): _87.Redelegation;
                toProto(message: _87.Redelegation): Uint8Array;
                toProtoMsg(message: _87.Redelegation): _87.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _87.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.Params;
                fromPartial(object: Partial<_87.Params>): _87.Params;
                fromAmino(object: _87.ParamsAmino): _87.Params;
                toAmino(message: _87.Params): _87.ParamsAmino;
                fromAminoMsg(object: _87.ParamsAminoMsg): _87.Params;
                toAminoMsg(message: _87.Params): _87.ParamsAminoMsg;
                fromProtoMsg(message: _87.ParamsProtoMsg): _87.Params;
                toProto(message: _87.Params): Uint8Array;
                toProtoMsg(message: _87.Params): _87.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _87.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.DelegationResponse;
                fromPartial(object: Partial<_87.DelegationResponse>): _87.DelegationResponse;
                fromAmino(object: _87.DelegationResponseAmino): _87.DelegationResponse;
                toAmino(message: _87.DelegationResponse): _87.DelegationResponseAmino;
                fromAminoMsg(object: _87.DelegationResponseAminoMsg): _87.DelegationResponse;
                toAminoMsg(message: _87.DelegationResponse): _87.DelegationResponseAminoMsg;
                fromProtoMsg(message: _87.DelegationResponseProtoMsg): _87.DelegationResponse;
                toProto(message: _87.DelegationResponse): Uint8Array;
                toProtoMsg(message: _87.DelegationResponse): _87.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _87.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.RedelegationEntryResponse;
                fromPartial(object: Partial<_87.RedelegationEntryResponse>): _87.RedelegationEntryResponse;
                fromAmino(object: _87.RedelegationEntryResponseAmino): _87.RedelegationEntryResponse;
                toAmino(message: _87.RedelegationEntryResponse): _87.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _87.RedelegationEntryResponseAminoMsg): _87.RedelegationEntryResponse;
                toAminoMsg(message: _87.RedelegationEntryResponse): _87.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _87.RedelegationEntryResponseProtoMsg): _87.RedelegationEntryResponse;
                toProto(message: _87.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _87.RedelegationEntryResponse): _87.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _87.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.RedelegationResponse;
                fromPartial(object: Partial<_87.RedelegationResponse>): _87.RedelegationResponse;
                fromAmino(object: _87.RedelegationResponseAmino): _87.RedelegationResponse;
                toAmino(message: _87.RedelegationResponse): _87.RedelegationResponseAmino;
                fromAminoMsg(object: _87.RedelegationResponseAminoMsg): _87.RedelegationResponse;
                toAminoMsg(message: _87.RedelegationResponse): _87.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _87.RedelegationResponseProtoMsg): _87.RedelegationResponse;
                toProto(message: _87.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _87.RedelegationResponse): _87.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _87.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.Pool;
                fromPartial(object: Partial<_87.Pool>): _87.Pool;
                fromAmino(object: _87.PoolAmino): _87.Pool;
                toAmino(message: _87.Pool): _87.PoolAmino;
                fromAminoMsg(object: _87.PoolAminoMsg): _87.Pool;
                toAminoMsg(message: _87.Pool): _87.PoolAminoMsg;
                fromProtoMsg(message: _87.PoolProtoMsg): _87.Pool;
                toProto(message: _87.Pool): Uint8Array;
                toProtoMsg(message: _87.Pool): _87.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _86.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryValidatorsRequest;
                fromPartial(object: Partial<_86.QueryValidatorsRequest>): _86.QueryValidatorsRequest;
                fromAmino(object: _86.QueryValidatorsRequestAmino): _86.QueryValidatorsRequest;
                toAmino(message: _86.QueryValidatorsRequest): _86.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _86.QueryValidatorsRequestAminoMsg): _86.QueryValidatorsRequest;
                toAminoMsg(message: _86.QueryValidatorsRequest): _86.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _86.QueryValidatorsRequestProtoMsg): _86.QueryValidatorsRequest;
                toProto(message: _86.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _86.QueryValidatorsRequest): _86.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _86.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryValidatorsResponse;
                fromPartial(object: Partial<_86.QueryValidatorsResponse>): _86.QueryValidatorsResponse;
                fromAmino(object: _86.QueryValidatorsResponseAmino): _86.QueryValidatorsResponse;
                toAmino(message: _86.QueryValidatorsResponse): _86.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _86.QueryValidatorsResponseAminoMsg): _86.QueryValidatorsResponse;
                toAminoMsg(message: _86.QueryValidatorsResponse): _86.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _86.QueryValidatorsResponseProtoMsg): _86.QueryValidatorsResponse;
                toProto(message: _86.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _86.QueryValidatorsResponse): _86.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _86.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryValidatorRequest;
                fromPartial(object: Partial<_86.QueryValidatorRequest>): _86.QueryValidatorRequest;
                fromAmino(object: _86.QueryValidatorRequestAmino): _86.QueryValidatorRequest;
                toAmino(message: _86.QueryValidatorRequest): _86.QueryValidatorRequestAmino;
                fromAminoMsg(object: _86.QueryValidatorRequestAminoMsg): _86.QueryValidatorRequest;
                toAminoMsg(message: _86.QueryValidatorRequest): _86.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _86.QueryValidatorRequestProtoMsg): _86.QueryValidatorRequest;
                toProto(message: _86.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _86.QueryValidatorRequest): _86.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _86.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryValidatorResponse;
                fromPartial(object: Partial<_86.QueryValidatorResponse>): _86.QueryValidatorResponse;
                fromAmino(object: _86.QueryValidatorResponseAmino): _86.QueryValidatorResponse;
                toAmino(message: _86.QueryValidatorResponse): _86.QueryValidatorResponseAmino;
                fromAminoMsg(object: _86.QueryValidatorResponseAminoMsg): _86.QueryValidatorResponse;
                toAminoMsg(message: _86.QueryValidatorResponse): _86.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _86.QueryValidatorResponseProtoMsg): _86.QueryValidatorResponse;
                toProto(message: _86.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _86.QueryValidatorResponse): _86.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _86.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_86.QueryValidatorDelegationsRequest>): _86.QueryValidatorDelegationsRequest;
                fromAmino(object: _86.QueryValidatorDelegationsRequestAmino): _86.QueryValidatorDelegationsRequest;
                toAmino(message: _86.QueryValidatorDelegationsRequest): _86.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _86.QueryValidatorDelegationsRequestAminoMsg): _86.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _86.QueryValidatorDelegationsRequest): _86.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _86.QueryValidatorDelegationsRequestProtoMsg): _86.QueryValidatorDelegationsRequest;
                toProto(message: _86.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _86.QueryValidatorDelegationsRequest): _86.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _86.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_86.QueryValidatorDelegationsResponse>): _86.QueryValidatorDelegationsResponse;
                fromAmino(object: _86.QueryValidatorDelegationsResponseAmino): _86.QueryValidatorDelegationsResponse;
                toAmino(message: _86.QueryValidatorDelegationsResponse): _86.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _86.QueryValidatorDelegationsResponseAminoMsg): _86.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _86.QueryValidatorDelegationsResponse): _86.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _86.QueryValidatorDelegationsResponseProtoMsg): _86.QueryValidatorDelegationsResponse;
                toProto(message: _86.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _86.QueryValidatorDelegationsResponse): _86.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _86.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_86.QueryValidatorUnbondingDelegationsRequest>): _86.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _86.QueryValidatorUnbondingDelegationsRequestAmino): _86.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _86.QueryValidatorUnbondingDelegationsRequest): _86.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _86.QueryValidatorUnbondingDelegationsRequestAminoMsg): _86.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _86.QueryValidatorUnbondingDelegationsRequest): _86.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _86.QueryValidatorUnbondingDelegationsRequestProtoMsg): _86.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _86.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _86.QueryValidatorUnbondingDelegationsRequest): _86.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _86.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_86.QueryValidatorUnbondingDelegationsResponse>): _86.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _86.QueryValidatorUnbondingDelegationsResponseAmino): _86.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _86.QueryValidatorUnbondingDelegationsResponse): _86.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _86.QueryValidatorUnbondingDelegationsResponseAminoMsg): _86.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _86.QueryValidatorUnbondingDelegationsResponse): _86.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _86.QueryValidatorUnbondingDelegationsResponseProtoMsg): _86.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _86.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _86.QueryValidatorUnbondingDelegationsResponse): _86.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _86.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryDelegationRequest;
                fromPartial(object: Partial<_86.QueryDelegationRequest>): _86.QueryDelegationRequest;
                fromAmino(object: _86.QueryDelegationRequestAmino): _86.QueryDelegationRequest;
                toAmino(message: _86.QueryDelegationRequest): _86.QueryDelegationRequestAmino;
                fromAminoMsg(object: _86.QueryDelegationRequestAminoMsg): _86.QueryDelegationRequest;
                toAminoMsg(message: _86.QueryDelegationRequest): _86.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _86.QueryDelegationRequestProtoMsg): _86.QueryDelegationRequest;
                toProto(message: _86.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _86.QueryDelegationRequest): _86.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _86.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryDelegationResponse;
                fromPartial(object: Partial<_86.QueryDelegationResponse>): _86.QueryDelegationResponse;
                fromAmino(object: _86.QueryDelegationResponseAmino): _86.QueryDelegationResponse;
                toAmino(message: _86.QueryDelegationResponse): _86.QueryDelegationResponseAmino;
                fromAminoMsg(object: _86.QueryDelegationResponseAminoMsg): _86.QueryDelegationResponse;
                toAminoMsg(message: _86.QueryDelegationResponse): _86.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _86.QueryDelegationResponseProtoMsg): _86.QueryDelegationResponse;
                toProto(message: _86.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _86.QueryDelegationResponse): _86.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _86.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_86.QueryUnbondingDelegationRequest>): _86.QueryUnbondingDelegationRequest;
                fromAmino(object: _86.QueryUnbondingDelegationRequestAmino): _86.QueryUnbondingDelegationRequest;
                toAmino(message: _86.QueryUnbondingDelegationRequest): _86.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _86.QueryUnbondingDelegationRequestAminoMsg): _86.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _86.QueryUnbondingDelegationRequest): _86.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _86.QueryUnbondingDelegationRequestProtoMsg): _86.QueryUnbondingDelegationRequest;
                toProto(message: _86.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _86.QueryUnbondingDelegationRequest): _86.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _86.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_86.QueryUnbondingDelegationResponse>): _86.QueryUnbondingDelegationResponse;
                fromAmino(object: _86.QueryUnbondingDelegationResponseAmino): _86.QueryUnbondingDelegationResponse;
                toAmino(message: _86.QueryUnbondingDelegationResponse): _86.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _86.QueryUnbondingDelegationResponseAminoMsg): _86.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _86.QueryUnbondingDelegationResponse): _86.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _86.QueryUnbondingDelegationResponseProtoMsg): _86.QueryUnbondingDelegationResponse;
                toProto(message: _86.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _86.QueryUnbondingDelegationResponse): _86.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _86.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_86.QueryDelegatorDelegationsRequest>): _86.QueryDelegatorDelegationsRequest;
                fromAmino(object: _86.QueryDelegatorDelegationsRequestAmino): _86.QueryDelegatorDelegationsRequest;
                toAmino(message: _86.QueryDelegatorDelegationsRequest): _86.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _86.QueryDelegatorDelegationsRequestAminoMsg): _86.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _86.QueryDelegatorDelegationsRequest): _86.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _86.QueryDelegatorDelegationsRequestProtoMsg): _86.QueryDelegatorDelegationsRequest;
                toProto(message: _86.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _86.QueryDelegatorDelegationsRequest): _86.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _86.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_86.QueryDelegatorDelegationsResponse>): _86.QueryDelegatorDelegationsResponse;
                fromAmino(object: _86.QueryDelegatorDelegationsResponseAmino): _86.QueryDelegatorDelegationsResponse;
                toAmino(message: _86.QueryDelegatorDelegationsResponse): _86.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _86.QueryDelegatorDelegationsResponseAminoMsg): _86.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _86.QueryDelegatorDelegationsResponse): _86.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _86.QueryDelegatorDelegationsResponseProtoMsg): _86.QueryDelegatorDelegationsResponse;
                toProto(message: _86.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _86.QueryDelegatorDelegationsResponse): _86.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _86.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_86.QueryDelegatorUnbondingDelegationsRequest>): _86.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _86.QueryDelegatorUnbondingDelegationsRequestAmino): _86.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _86.QueryDelegatorUnbondingDelegationsRequest): _86.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _86.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _86.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _86.QueryDelegatorUnbondingDelegationsRequest): _86.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _86.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _86.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _86.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _86.QueryDelegatorUnbondingDelegationsRequest): _86.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _86.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_86.QueryDelegatorUnbondingDelegationsResponse>): _86.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _86.QueryDelegatorUnbondingDelegationsResponseAmino): _86.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _86.QueryDelegatorUnbondingDelegationsResponse): _86.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _86.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _86.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _86.QueryDelegatorUnbondingDelegationsResponse): _86.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _86.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _86.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _86.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _86.QueryDelegatorUnbondingDelegationsResponse): _86.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _86.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryRedelegationsRequest;
                fromPartial(object: Partial<_86.QueryRedelegationsRequest>): _86.QueryRedelegationsRequest;
                fromAmino(object: _86.QueryRedelegationsRequestAmino): _86.QueryRedelegationsRequest;
                toAmino(message: _86.QueryRedelegationsRequest): _86.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _86.QueryRedelegationsRequestAminoMsg): _86.QueryRedelegationsRequest;
                toAminoMsg(message: _86.QueryRedelegationsRequest): _86.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _86.QueryRedelegationsRequestProtoMsg): _86.QueryRedelegationsRequest;
                toProto(message: _86.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _86.QueryRedelegationsRequest): _86.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _86.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryRedelegationsResponse;
                fromPartial(object: Partial<_86.QueryRedelegationsResponse>): _86.QueryRedelegationsResponse;
                fromAmino(object: _86.QueryRedelegationsResponseAmino): _86.QueryRedelegationsResponse;
                toAmino(message: _86.QueryRedelegationsResponse): _86.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _86.QueryRedelegationsResponseAminoMsg): _86.QueryRedelegationsResponse;
                toAminoMsg(message: _86.QueryRedelegationsResponse): _86.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _86.QueryRedelegationsResponseProtoMsg): _86.QueryRedelegationsResponse;
                toProto(message: _86.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _86.QueryRedelegationsResponse): _86.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _86.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_86.QueryDelegatorValidatorsRequest>): _86.QueryDelegatorValidatorsRequest;
                fromAmino(object: _86.QueryDelegatorValidatorsRequestAmino): _86.QueryDelegatorValidatorsRequest;
                toAmino(message: _86.QueryDelegatorValidatorsRequest): _86.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _86.QueryDelegatorValidatorsRequestAminoMsg): _86.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _86.QueryDelegatorValidatorsRequest): _86.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _86.QueryDelegatorValidatorsRequestProtoMsg): _86.QueryDelegatorValidatorsRequest;
                toProto(message: _86.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _86.QueryDelegatorValidatorsRequest): _86.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _86.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_86.QueryDelegatorValidatorsResponse>): _86.QueryDelegatorValidatorsResponse;
                fromAmino(object: _86.QueryDelegatorValidatorsResponseAmino): _86.QueryDelegatorValidatorsResponse;
                toAmino(message: _86.QueryDelegatorValidatorsResponse): _86.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _86.QueryDelegatorValidatorsResponseAminoMsg): _86.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _86.QueryDelegatorValidatorsResponse): _86.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _86.QueryDelegatorValidatorsResponseProtoMsg): _86.QueryDelegatorValidatorsResponse;
                toProto(message: _86.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _86.QueryDelegatorValidatorsResponse): _86.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _86.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_86.QueryDelegatorValidatorRequest>): _86.QueryDelegatorValidatorRequest;
                fromAmino(object: _86.QueryDelegatorValidatorRequestAmino): _86.QueryDelegatorValidatorRequest;
                toAmino(message: _86.QueryDelegatorValidatorRequest): _86.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _86.QueryDelegatorValidatorRequestAminoMsg): _86.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _86.QueryDelegatorValidatorRequest): _86.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _86.QueryDelegatorValidatorRequestProtoMsg): _86.QueryDelegatorValidatorRequest;
                toProto(message: _86.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _86.QueryDelegatorValidatorRequest): _86.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _86.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_86.QueryDelegatorValidatorResponse>): _86.QueryDelegatorValidatorResponse;
                fromAmino(object: _86.QueryDelegatorValidatorResponseAmino): _86.QueryDelegatorValidatorResponse;
                toAmino(message: _86.QueryDelegatorValidatorResponse): _86.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _86.QueryDelegatorValidatorResponseAminoMsg): _86.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _86.QueryDelegatorValidatorResponse): _86.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _86.QueryDelegatorValidatorResponseProtoMsg): _86.QueryDelegatorValidatorResponse;
                toProto(message: _86.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _86.QueryDelegatorValidatorResponse): _86.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _86.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_86.QueryHistoricalInfoRequest>): _86.QueryHistoricalInfoRequest;
                fromAmino(object: _86.QueryHistoricalInfoRequestAmino): _86.QueryHistoricalInfoRequest;
                toAmino(message: _86.QueryHistoricalInfoRequest): _86.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _86.QueryHistoricalInfoRequestAminoMsg): _86.QueryHistoricalInfoRequest;
                toAminoMsg(message: _86.QueryHistoricalInfoRequest): _86.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _86.QueryHistoricalInfoRequestProtoMsg): _86.QueryHistoricalInfoRequest;
                toProto(message: _86.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _86.QueryHistoricalInfoRequest): _86.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _86.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_86.QueryHistoricalInfoResponse>): _86.QueryHistoricalInfoResponse;
                fromAmino(object: _86.QueryHistoricalInfoResponseAmino): _86.QueryHistoricalInfoResponse;
                toAmino(message: _86.QueryHistoricalInfoResponse): _86.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _86.QueryHistoricalInfoResponseAminoMsg): _86.QueryHistoricalInfoResponse;
                toAminoMsg(message: _86.QueryHistoricalInfoResponse): _86.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _86.QueryHistoricalInfoResponseProtoMsg): _86.QueryHistoricalInfoResponse;
                toProto(message: _86.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _86.QueryHistoricalInfoResponse): _86.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _86.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _86.QueryPoolRequest;
                fromPartial(_: Partial<_86.QueryPoolRequest>): _86.QueryPoolRequest;
                fromAmino(_: _86.QueryPoolRequestAmino): _86.QueryPoolRequest;
                toAmino(_: _86.QueryPoolRequest): _86.QueryPoolRequestAmino;
                fromAminoMsg(object: _86.QueryPoolRequestAminoMsg): _86.QueryPoolRequest;
                toAminoMsg(message: _86.QueryPoolRequest): _86.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _86.QueryPoolRequestProtoMsg): _86.QueryPoolRequest;
                toProto(message: _86.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _86.QueryPoolRequest): _86.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _86.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryPoolResponse;
                fromPartial(object: Partial<_86.QueryPoolResponse>): _86.QueryPoolResponse;
                fromAmino(object: _86.QueryPoolResponseAmino): _86.QueryPoolResponse;
                toAmino(message: _86.QueryPoolResponse): _86.QueryPoolResponseAmino;
                fromAminoMsg(object: _86.QueryPoolResponseAminoMsg): _86.QueryPoolResponse;
                toAminoMsg(message: _86.QueryPoolResponse): _86.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _86.QueryPoolResponseProtoMsg): _86.QueryPoolResponse;
                toProto(message: _86.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _86.QueryPoolResponse): _86.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _86.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _86.QueryParamsRequest;
                fromPartial(_: Partial<_86.QueryParamsRequest>): _86.QueryParamsRequest;
                fromAmino(_: _86.QueryParamsRequestAmino): _86.QueryParamsRequest;
                toAmino(_: _86.QueryParamsRequest): _86.QueryParamsRequestAmino;
                fromAminoMsg(object: _86.QueryParamsRequestAminoMsg): _86.QueryParamsRequest;
                toAminoMsg(message: _86.QueryParamsRequest): _86.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _86.QueryParamsRequestProtoMsg): _86.QueryParamsRequest;
                toProto(message: _86.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _86.QueryParamsRequest): _86.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _86.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryParamsResponse;
                fromPartial(object: Partial<_86.QueryParamsResponse>): _86.QueryParamsResponse;
                fromAmino(object: _86.QueryParamsResponseAmino): _86.QueryParamsResponse;
                toAmino(message: _86.QueryParamsResponse): _86.QueryParamsResponseAmino;
                fromAminoMsg(object: _86.QueryParamsResponseAminoMsg): _86.QueryParamsResponse;
                toAminoMsg(message: _86.QueryParamsResponse): _86.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _86.QueryParamsResponseProtoMsg): _86.QueryParamsResponse;
                toProto(message: _86.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _86.QueryParamsResponse): _86.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _85.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.GenesisState;
                fromPartial(object: Partial<_85.GenesisState>): _85.GenesisState;
                fromAmino(object: _85.GenesisStateAmino): _85.GenesisState;
                toAmino(message: _85.GenesisState): _85.GenesisStateAmino;
                fromAminoMsg(object: _85.GenesisStateAminoMsg): _85.GenesisState;
                toAminoMsg(message: _85.GenesisState): _85.GenesisStateAminoMsg;
                fromProtoMsg(message: _85.GenesisStateProtoMsg): _85.GenesisState;
                toProto(message: _85.GenesisState): Uint8Array;
                toProtoMsg(message: _85.GenesisState): _85.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _85.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.LastValidatorPower;
                fromPartial(object: Partial<_85.LastValidatorPower>): _85.LastValidatorPower;
                fromAmino(object: _85.LastValidatorPowerAmino): _85.LastValidatorPower;
                toAmino(message: _85.LastValidatorPower): _85.LastValidatorPowerAmino;
                fromAminoMsg(object: _85.LastValidatorPowerAminoMsg): _85.LastValidatorPower;
                toAminoMsg(message: _85.LastValidatorPower): _85.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _85.LastValidatorPowerProtoMsg): _85.LastValidatorPower;
                toProto(message: _85.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _85.LastValidatorPower): _85.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _84.AuthorizationType;
            authorizationTypeToJSON(object: _84.AuthorizationType): string;
            AuthorizationType: typeof _84.AuthorizationType;
            AuthorizationTypeSDKType: typeof _84.AuthorizationType;
            AuthorizationTypeAmino: typeof _84.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _84.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.StakeAuthorization;
                fromPartial(object: Partial<_84.StakeAuthorization>): _84.StakeAuthorization;
                fromAmino(object: _84.StakeAuthorizationAmino): _84.StakeAuthorization;
                toAmino(message: _84.StakeAuthorization): _84.StakeAuthorizationAmino;
                fromAminoMsg(object: _84.StakeAuthorizationAminoMsg): _84.StakeAuthorization;
                toAminoMsg(message: _84.StakeAuthorization): _84.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _84.StakeAuthorizationProtoMsg): _84.StakeAuthorization;
                toProto(message: _84.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _84.StakeAuthorization): _84.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _84.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.StakeAuthorization_Validators;
                fromPartial(object: Partial<_84.StakeAuthorization_Validators>): _84.StakeAuthorization_Validators;
                fromAmino(object: _84.StakeAuthorization_ValidatorsAmino): _84.StakeAuthorization_Validators;
                toAmino(message: _84.StakeAuthorization_Validators): _84.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _84.StakeAuthorization_ValidatorsAminoMsg): _84.StakeAuthorization_Validators;
                toAminoMsg(message: _84.StakeAuthorization_Validators): _84.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _84.StakeAuthorization_ValidatorsProtoMsg): _84.StakeAuthorization_Validators;
                toProto(message: _84.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _84.StakeAuthorization_Validators): _84.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _89.SignMode;
                signModeToJSON(object: _89.SignMode): string;
                SignMode: typeof _89.SignMode;
                SignModeSDKType: typeof _89.SignMode;
                SignModeAmino: typeof _89.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _89.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _89.SignatureDescriptors;
                    fromPartial(object: Partial<_89.SignatureDescriptors>): _89.SignatureDescriptors;
                    fromAmino(object: _89.SignatureDescriptorsAmino): _89.SignatureDescriptors;
                    toAmino(message: _89.SignatureDescriptors): _89.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _89.SignatureDescriptorsAminoMsg): _89.SignatureDescriptors;
                    toAminoMsg(message: _89.SignatureDescriptors): _89.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _89.SignatureDescriptorsProtoMsg): _89.SignatureDescriptors;
                    toProto(message: _89.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _89.SignatureDescriptors): _89.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _89.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _89.SignatureDescriptor;
                    fromPartial(object: Partial<_89.SignatureDescriptor>): _89.SignatureDescriptor;
                    fromAmino(object: _89.SignatureDescriptorAmino): _89.SignatureDescriptor;
                    toAmino(message: _89.SignatureDescriptor): _89.SignatureDescriptorAmino;
                    fromAminoMsg(object: _89.SignatureDescriptorAminoMsg): _89.SignatureDescriptor;
                    toAminoMsg(message: _89.SignatureDescriptor): _89.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _89.SignatureDescriptorProtoMsg): _89.SignatureDescriptor;
                    toProto(message: _89.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _89.SignatureDescriptor): _89.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _89.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _89.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_89.SignatureDescriptor_Data>): _89.SignatureDescriptor_Data;
                    fromAmino(object: _89.SignatureDescriptor_DataAmino): _89.SignatureDescriptor_Data;
                    toAmino(message: _89.SignatureDescriptor_Data): _89.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _89.SignatureDescriptor_DataAminoMsg): _89.SignatureDescriptor_Data;
                    toAminoMsg(message: _89.SignatureDescriptor_Data): _89.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _89.SignatureDescriptor_DataProtoMsg): _89.SignatureDescriptor_Data;
                    toProto(message: _89.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _89.SignatureDescriptor_Data): _89.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _89.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _89.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_89.SignatureDescriptor_Data_Single>): _89.SignatureDescriptor_Data_Single;
                    fromAmino(object: _89.SignatureDescriptor_Data_SingleAmino): _89.SignatureDescriptor_Data_Single;
                    toAmino(message: _89.SignatureDescriptor_Data_Single): _89.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _89.SignatureDescriptor_Data_SingleAminoMsg): _89.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _89.SignatureDescriptor_Data_Single): _89.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _89.SignatureDescriptor_Data_SingleProtoMsg): _89.SignatureDescriptor_Data_Single;
                    toProto(message: _89.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _89.SignatureDescriptor_Data_Single): _89.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _89.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _89.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_89.SignatureDescriptor_Data_Multi>): _89.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _89.SignatureDescriptor_Data_MultiAmino): _89.SignatureDescriptor_Data_Multi;
                    toAmino(message: _89.SignatureDescriptor_Data_Multi): _89.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _89.SignatureDescriptor_Data_MultiAminoMsg): _89.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _89.SignatureDescriptor_Data_Multi): _89.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _89.SignatureDescriptor_Data_MultiProtoMsg): _89.SignatureDescriptor_Data_Multi;
                    toProto(message: _89.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _89.SignatureDescriptor_Data_Multi): _89.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _204.ServiceClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                simulate(request: _90.SimulateRequest): Promise<_90.SimulateResponse>;
                getTx(request: _90.GetTxRequest): Promise<_90.GetTxResponse>;
                broadcastTx(request: _90.BroadcastTxRequest): Promise<_90.BroadcastTxResponse>;
                getTxsEvent(request: _90.GetTxsEventRequest): Promise<_90.GetTxsEventResponse>;
                getBlockWithTxs(request: _90.GetBlockWithTxsRequest): Promise<_90.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _189.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _91.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.Tx;
                fromPartial(object: Partial<_91.Tx>): _91.Tx;
                fromAmino(object: _91.TxAmino): _91.Tx;
                toAmino(message: _91.Tx): _91.TxAmino;
                fromAminoMsg(object: _91.TxAminoMsg): _91.Tx;
                toAminoMsg(message: _91.Tx): _91.TxAminoMsg;
                fromProtoMsg(message: _91.TxProtoMsg): _91.Tx;
                toProto(message: _91.Tx): Uint8Array;
                toProtoMsg(message: _91.Tx): _91.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _91.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.TxRaw;
                fromPartial(object: Partial<_91.TxRaw>): _91.TxRaw;
                fromAmino(object: _91.TxRawAmino): _91.TxRaw;
                toAmino(message: _91.TxRaw): _91.TxRawAmino;
                fromAminoMsg(object: _91.TxRawAminoMsg): _91.TxRaw;
                toAminoMsg(message: _91.TxRaw): _91.TxRawAminoMsg;
                fromProtoMsg(message: _91.TxRawProtoMsg): _91.TxRaw;
                toProto(message: _91.TxRaw): Uint8Array;
                toProtoMsg(message: _91.TxRaw): _91.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _91.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.SignDoc;
                fromPartial(object: Partial<_91.SignDoc>): _91.SignDoc;
                fromAmino(object: _91.SignDocAmino): _91.SignDoc;
                toAmino(message: _91.SignDoc): _91.SignDocAmino;
                fromAminoMsg(object: _91.SignDocAminoMsg): _91.SignDoc;
                toAminoMsg(message: _91.SignDoc): _91.SignDocAminoMsg;
                fromProtoMsg(message: _91.SignDocProtoMsg): _91.SignDoc;
                toProto(message: _91.SignDoc): Uint8Array;
                toProtoMsg(message: _91.SignDoc): _91.SignDocProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _91.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.TxBody;
                fromPartial(object: Partial<_91.TxBody>): _91.TxBody;
                fromAmino(object: _91.TxBodyAmino): _91.TxBody;
                toAmino(message: _91.TxBody): _91.TxBodyAmino;
                fromAminoMsg(object: _91.TxBodyAminoMsg): _91.TxBody;
                toAminoMsg(message: _91.TxBody): _91.TxBodyAminoMsg;
                fromProtoMsg(message: _91.TxBodyProtoMsg): _91.TxBody;
                toProto(message: _91.TxBody): Uint8Array;
                toProtoMsg(message: _91.TxBody): _91.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _91.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.AuthInfo;
                fromPartial(object: Partial<_91.AuthInfo>): _91.AuthInfo;
                fromAmino(object: _91.AuthInfoAmino): _91.AuthInfo;
                toAmino(message: _91.AuthInfo): _91.AuthInfoAmino;
                fromAminoMsg(object: _91.AuthInfoAminoMsg): _91.AuthInfo;
                toAminoMsg(message: _91.AuthInfo): _91.AuthInfoAminoMsg;
                fromProtoMsg(message: _91.AuthInfoProtoMsg): _91.AuthInfo;
                toProto(message: _91.AuthInfo): Uint8Array;
                toProtoMsg(message: _91.AuthInfo): _91.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _91.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.SignerInfo;
                fromPartial(object: Partial<_91.SignerInfo>): _91.SignerInfo;
                fromAmino(object: _91.SignerInfoAmino): _91.SignerInfo;
                toAmino(message: _91.SignerInfo): _91.SignerInfoAmino;
                fromAminoMsg(object: _91.SignerInfoAminoMsg): _91.SignerInfo;
                toAminoMsg(message: _91.SignerInfo): _91.SignerInfoAminoMsg;
                fromProtoMsg(message: _91.SignerInfoProtoMsg): _91.SignerInfo;
                toProto(message: _91.SignerInfo): Uint8Array;
                toProtoMsg(message: _91.SignerInfo): _91.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _91.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.ModeInfo;
                fromPartial(object: Partial<_91.ModeInfo>): _91.ModeInfo;
                fromAmino(object: _91.ModeInfoAmino): _91.ModeInfo;
                toAmino(message: _91.ModeInfo): _91.ModeInfoAmino;
                fromAminoMsg(object: _91.ModeInfoAminoMsg): _91.ModeInfo;
                toAminoMsg(message: _91.ModeInfo): _91.ModeInfoAminoMsg;
                fromProtoMsg(message: _91.ModeInfoProtoMsg): _91.ModeInfo;
                toProto(message: _91.ModeInfo): Uint8Array;
                toProtoMsg(message: _91.ModeInfo): _91.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _91.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.ModeInfo_Single;
                fromPartial(object: Partial<_91.ModeInfo_Single>): _91.ModeInfo_Single;
                fromAmino(object: _91.ModeInfo_SingleAmino): _91.ModeInfo_Single;
                toAmino(message: _91.ModeInfo_Single): _91.ModeInfo_SingleAmino;
                fromAminoMsg(object: _91.ModeInfo_SingleAminoMsg): _91.ModeInfo_Single;
                toAminoMsg(message: _91.ModeInfo_Single): _91.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _91.ModeInfo_SingleProtoMsg): _91.ModeInfo_Single;
                toProto(message: _91.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _91.ModeInfo_Single): _91.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _91.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.ModeInfo_Multi;
                fromPartial(object: Partial<_91.ModeInfo_Multi>): _91.ModeInfo_Multi;
                fromAmino(object: _91.ModeInfo_MultiAmino): _91.ModeInfo_Multi;
                toAmino(message: _91.ModeInfo_Multi): _91.ModeInfo_MultiAmino;
                fromAminoMsg(object: _91.ModeInfo_MultiAminoMsg): _91.ModeInfo_Multi;
                toAminoMsg(message: _91.ModeInfo_Multi): _91.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _91.ModeInfo_MultiProtoMsg): _91.ModeInfo_Multi;
                toProto(message: _91.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _91.ModeInfo_Multi): _91.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _91.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.Fee;
                fromPartial(object: Partial<_91.Fee>): _91.Fee;
                fromAmino(object: _91.FeeAmino): _91.Fee;
                toAmino(message: _91.Fee): _91.FeeAmino;
                fromAminoMsg(object: _91.FeeAminoMsg): _91.Fee;
                toAminoMsg(message: _91.Fee): _91.FeeAminoMsg;
                fromProtoMsg(message: _91.FeeProtoMsg): _91.Fee;
                toProto(message: _91.Fee): Uint8Array;
                toProtoMsg(message: _91.Fee): _91.FeeProtoMsg;
            };
            orderByFromJSON(object: any): _90.OrderBy;
            orderByToJSON(object: _90.OrderBy): string;
            broadcastModeFromJSON(object: any): _90.BroadcastMode;
            broadcastModeToJSON(object: _90.BroadcastMode): string;
            OrderBy: typeof _90.OrderBy;
            OrderBySDKType: typeof _90.OrderBy;
            OrderByAmino: typeof _90.OrderBy;
            BroadcastMode: typeof _90.BroadcastMode;
            BroadcastModeSDKType: typeof _90.BroadcastMode;
            BroadcastModeAmino: typeof _90.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _90.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.GetTxsEventRequest;
                fromPartial(object: Partial<_90.GetTxsEventRequest>): _90.GetTxsEventRequest;
                fromAmino(object: _90.GetTxsEventRequestAmino): _90.GetTxsEventRequest;
                toAmino(message: _90.GetTxsEventRequest): _90.GetTxsEventRequestAmino;
                fromAminoMsg(object: _90.GetTxsEventRequestAminoMsg): _90.GetTxsEventRequest;
                toAminoMsg(message: _90.GetTxsEventRequest): _90.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _90.GetTxsEventRequestProtoMsg): _90.GetTxsEventRequest;
                toProto(message: _90.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _90.GetTxsEventRequest): _90.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _90.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.GetTxsEventResponse;
                fromPartial(object: Partial<_90.GetTxsEventResponse>): _90.GetTxsEventResponse;
                fromAmino(object: _90.GetTxsEventResponseAmino): _90.GetTxsEventResponse;
                toAmino(message: _90.GetTxsEventResponse): _90.GetTxsEventResponseAmino;
                fromAminoMsg(object: _90.GetTxsEventResponseAminoMsg): _90.GetTxsEventResponse;
                toAminoMsg(message: _90.GetTxsEventResponse): _90.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _90.GetTxsEventResponseProtoMsg): _90.GetTxsEventResponse;
                toProto(message: _90.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _90.GetTxsEventResponse): _90.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _90.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.BroadcastTxRequest;
                fromPartial(object: Partial<_90.BroadcastTxRequest>): _90.BroadcastTxRequest;
                fromAmino(object: _90.BroadcastTxRequestAmino): _90.BroadcastTxRequest;
                toAmino(message: _90.BroadcastTxRequest): _90.BroadcastTxRequestAmino;
                fromAminoMsg(object: _90.BroadcastTxRequestAminoMsg): _90.BroadcastTxRequest;
                toAminoMsg(message: _90.BroadcastTxRequest): _90.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _90.BroadcastTxRequestProtoMsg): _90.BroadcastTxRequest;
                toProto(message: _90.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _90.BroadcastTxRequest): _90.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _90.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.BroadcastTxResponse;
                fromPartial(object: Partial<_90.BroadcastTxResponse>): _90.BroadcastTxResponse;
                fromAmino(object: _90.BroadcastTxResponseAmino): _90.BroadcastTxResponse;
                toAmino(message: _90.BroadcastTxResponse): _90.BroadcastTxResponseAmino;
                fromAminoMsg(object: _90.BroadcastTxResponseAminoMsg): _90.BroadcastTxResponse;
                toAminoMsg(message: _90.BroadcastTxResponse): _90.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _90.BroadcastTxResponseProtoMsg): _90.BroadcastTxResponse;
                toProto(message: _90.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _90.BroadcastTxResponse): _90.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _90.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.SimulateRequest;
                fromPartial(object: Partial<_90.SimulateRequest>): _90.SimulateRequest;
                fromAmino(object: _90.SimulateRequestAmino): _90.SimulateRequest;
                toAmino(message: _90.SimulateRequest): _90.SimulateRequestAmino;
                fromAminoMsg(object: _90.SimulateRequestAminoMsg): _90.SimulateRequest;
                toAminoMsg(message: _90.SimulateRequest): _90.SimulateRequestAminoMsg;
                fromProtoMsg(message: _90.SimulateRequestProtoMsg): _90.SimulateRequest;
                toProto(message: _90.SimulateRequest): Uint8Array;
                toProtoMsg(message: _90.SimulateRequest): _90.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _90.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.SimulateResponse;
                fromPartial(object: Partial<_90.SimulateResponse>): _90.SimulateResponse;
                fromAmino(object: _90.SimulateResponseAmino): _90.SimulateResponse;
                toAmino(message: _90.SimulateResponse): _90.SimulateResponseAmino;
                fromAminoMsg(object: _90.SimulateResponseAminoMsg): _90.SimulateResponse;
                toAminoMsg(message: _90.SimulateResponse): _90.SimulateResponseAminoMsg;
                fromProtoMsg(message: _90.SimulateResponseProtoMsg): _90.SimulateResponse;
                toProto(message: _90.SimulateResponse): Uint8Array;
                toProtoMsg(message: _90.SimulateResponse): _90.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _90.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.GetTxRequest;
                fromPartial(object: Partial<_90.GetTxRequest>): _90.GetTxRequest;
                fromAmino(object: _90.GetTxRequestAmino): _90.GetTxRequest;
                toAmino(message: _90.GetTxRequest): _90.GetTxRequestAmino;
                fromAminoMsg(object: _90.GetTxRequestAminoMsg): _90.GetTxRequest;
                toAminoMsg(message: _90.GetTxRequest): _90.GetTxRequestAminoMsg;
                fromProtoMsg(message: _90.GetTxRequestProtoMsg): _90.GetTxRequest;
                toProto(message: _90.GetTxRequest): Uint8Array;
                toProtoMsg(message: _90.GetTxRequest): _90.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _90.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.GetTxResponse;
                fromPartial(object: Partial<_90.GetTxResponse>): _90.GetTxResponse;
                fromAmino(object: _90.GetTxResponseAmino): _90.GetTxResponse;
                toAmino(message: _90.GetTxResponse): _90.GetTxResponseAmino;
                fromAminoMsg(object: _90.GetTxResponseAminoMsg): _90.GetTxResponse;
                toAminoMsg(message: _90.GetTxResponse): _90.GetTxResponseAminoMsg;
                fromProtoMsg(message: _90.GetTxResponseProtoMsg): _90.GetTxResponse;
                toProto(message: _90.GetTxResponse): Uint8Array;
                toProtoMsg(message: _90.GetTxResponse): _90.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _90.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_90.GetBlockWithTxsRequest>): _90.GetBlockWithTxsRequest;
                fromAmino(object: _90.GetBlockWithTxsRequestAmino): _90.GetBlockWithTxsRequest;
                toAmino(message: _90.GetBlockWithTxsRequest): _90.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _90.GetBlockWithTxsRequestAminoMsg): _90.GetBlockWithTxsRequest;
                toAminoMsg(message: _90.GetBlockWithTxsRequest): _90.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _90.GetBlockWithTxsRequestProtoMsg): _90.GetBlockWithTxsRequest;
                toProto(message: _90.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _90.GetBlockWithTxsRequest): _90.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _90.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_90.GetBlockWithTxsResponse>): _90.GetBlockWithTxsResponse;
                fromAmino(object: _90.GetBlockWithTxsResponseAmino): _90.GetBlockWithTxsResponse;
                toAmino(message: _90.GetBlockWithTxsResponse): _90.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _90.GetBlockWithTxsResponseAminoMsg): _90.GetBlockWithTxsResponse;
                toAminoMsg(message: _90.GetBlockWithTxsResponse): _90.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _90.GetBlockWithTxsResponseProtoMsg): _90.GetBlockWithTxsResponse;
                toProto(message: _90.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _90.GetBlockWithTxsResponse): _90.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _205.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                currentPlan(request?: _92.QueryCurrentPlanRequest): Promise<_92.QueryCurrentPlanResponse>;
                appliedPlan(request: _92.QueryAppliedPlanRequest): Promise<_92.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _92.QueryUpgradedConsensusStateRequest): Promise<_92.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _92.QueryModuleVersionsRequest): Promise<_92.QueryModuleVersionsResponse>;
            };
            LCDQueryClient: typeof _190.LCDQueryClient;
            Plan: {
                typeUrl: string;
                encode(message: _93.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.Plan;
                fromPartial(object: Partial<_93.Plan>): _93.Plan;
                fromAmino(object: _93.PlanAmino): _93.Plan;
                toAmino(message: _93.Plan): _93.PlanAmino;
                fromAminoMsg(object: _93.PlanAminoMsg): _93.Plan;
                toAminoMsg(message: _93.Plan): _93.PlanAminoMsg;
                fromProtoMsg(message: _93.PlanProtoMsg): _93.Plan;
                toProto(message: _93.Plan): Uint8Array;
                toProtoMsg(message: _93.Plan): _93.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _93.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_93.SoftwareUpgradeProposal>): _93.SoftwareUpgradeProposal;
                fromAmino(object: _93.SoftwareUpgradeProposalAmino): _93.SoftwareUpgradeProposal;
                toAmino(message: _93.SoftwareUpgradeProposal): _93.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _93.SoftwareUpgradeProposalAminoMsg): _93.SoftwareUpgradeProposal;
                toAminoMsg(message: _93.SoftwareUpgradeProposal): _93.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _93.SoftwareUpgradeProposalProtoMsg): _93.SoftwareUpgradeProposal;
                toProto(message: _93.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _93.SoftwareUpgradeProposal): _93.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _93.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_93.CancelSoftwareUpgradeProposal>): _93.CancelSoftwareUpgradeProposal;
                fromAmino(object: _93.CancelSoftwareUpgradeProposalAmino): _93.CancelSoftwareUpgradeProposal;
                toAmino(message: _93.CancelSoftwareUpgradeProposal): _93.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _93.CancelSoftwareUpgradeProposalAminoMsg): _93.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _93.CancelSoftwareUpgradeProposal): _93.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _93.CancelSoftwareUpgradeProposalProtoMsg): _93.CancelSoftwareUpgradeProposal;
                toProto(message: _93.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _93.CancelSoftwareUpgradeProposal): _93.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _93.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.ModuleVersion;
                fromPartial(object: Partial<_93.ModuleVersion>): _93.ModuleVersion;
                fromAmino(object: _93.ModuleVersionAmino): _93.ModuleVersion;
                toAmino(message: _93.ModuleVersion): _93.ModuleVersionAmino;
                fromAminoMsg(object: _93.ModuleVersionAminoMsg): _93.ModuleVersion;
                toAminoMsg(message: _93.ModuleVersion): _93.ModuleVersionAminoMsg;
                fromProtoMsg(message: _93.ModuleVersionProtoMsg): _93.ModuleVersion;
                toProto(message: _93.ModuleVersion): Uint8Array;
                toProtoMsg(message: _93.ModuleVersion): _93.ModuleVersionProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _92.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _92.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_92.QueryCurrentPlanRequest>): _92.QueryCurrentPlanRequest;
                fromAmino(_: _92.QueryCurrentPlanRequestAmino): _92.QueryCurrentPlanRequest;
                toAmino(_: _92.QueryCurrentPlanRequest): _92.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _92.QueryCurrentPlanRequestAminoMsg): _92.QueryCurrentPlanRequest;
                toAminoMsg(message: _92.QueryCurrentPlanRequest): _92.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _92.QueryCurrentPlanRequestProtoMsg): _92.QueryCurrentPlanRequest;
                toProto(message: _92.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _92.QueryCurrentPlanRequest): _92.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _92.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_92.QueryCurrentPlanResponse>): _92.QueryCurrentPlanResponse;
                fromAmino(object: _92.QueryCurrentPlanResponseAmino): _92.QueryCurrentPlanResponse;
                toAmino(message: _92.QueryCurrentPlanResponse): _92.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _92.QueryCurrentPlanResponseAminoMsg): _92.QueryCurrentPlanResponse;
                toAminoMsg(message: _92.QueryCurrentPlanResponse): _92.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _92.QueryCurrentPlanResponseProtoMsg): _92.QueryCurrentPlanResponse;
                toProto(message: _92.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _92.QueryCurrentPlanResponse): _92.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _92.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_92.QueryAppliedPlanRequest>): _92.QueryAppliedPlanRequest;
                fromAmino(object: _92.QueryAppliedPlanRequestAmino): _92.QueryAppliedPlanRequest;
                toAmino(message: _92.QueryAppliedPlanRequest): _92.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _92.QueryAppliedPlanRequestAminoMsg): _92.QueryAppliedPlanRequest;
                toAminoMsg(message: _92.QueryAppliedPlanRequest): _92.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _92.QueryAppliedPlanRequestProtoMsg): _92.QueryAppliedPlanRequest;
                toProto(message: _92.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _92.QueryAppliedPlanRequest): _92.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _92.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_92.QueryAppliedPlanResponse>): _92.QueryAppliedPlanResponse;
                fromAmino(object: _92.QueryAppliedPlanResponseAmino): _92.QueryAppliedPlanResponse;
                toAmino(message: _92.QueryAppliedPlanResponse): _92.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _92.QueryAppliedPlanResponseAminoMsg): _92.QueryAppliedPlanResponse;
                toAminoMsg(message: _92.QueryAppliedPlanResponse): _92.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _92.QueryAppliedPlanResponseProtoMsg): _92.QueryAppliedPlanResponse;
                toProto(message: _92.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _92.QueryAppliedPlanResponse): _92.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _92.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_92.QueryUpgradedConsensusStateRequest>): _92.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _92.QueryUpgradedConsensusStateRequestAmino): _92.QueryUpgradedConsensusStateRequest;
                toAmino(message: _92.QueryUpgradedConsensusStateRequest): _92.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _92.QueryUpgradedConsensusStateRequestAminoMsg): _92.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _92.QueryUpgradedConsensusStateRequest): _92.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _92.QueryUpgradedConsensusStateRequestProtoMsg): _92.QueryUpgradedConsensusStateRequest;
                toProto(message: _92.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _92.QueryUpgradedConsensusStateRequest): _92.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _92.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_92.QueryUpgradedConsensusStateResponse>): _92.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _92.QueryUpgradedConsensusStateResponseAmino): _92.QueryUpgradedConsensusStateResponse;
                toAmino(message: _92.QueryUpgradedConsensusStateResponse): _92.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _92.QueryUpgradedConsensusStateResponseAminoMsg): _92.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _92.QueryUpgradedConsensusStateResponse): _92.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _92.QueryUpgradedConsensusStateResponseProtoMsg): _92.QueryUpgradedConsensusStateResponse;
                toProto(message: _92.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _92.QueryUpgradedConsensusStateResponse): _92.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _92.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_92.QueryModuleVersionsRequest>): _92.QueryModuleVersionsRequest;
                fromAmino(object: _92.QueryModuleVersionsRequestAmino): _92.QueryModuleVersionsRequest;
                toAmino(message: _92.QueryModuleVersionsRequest): _92.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _92.QueryModuleVersionsRequestAminoMsg): _92.QueryModuleVersionsRequest;
                toAminoMsg(message: _92.QueryModuleVersionsRequest): _92.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _92.QueryModuleVersionsRequestProtoMsg): _92.QueryModuleVersionsRequest;
                toProto(message: _92.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _92.QueryModuleVersionsRequest): _92.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _92.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_92.QueryModuleVersionsResponse>): _92.QueryModuleVersionsResponse;
                fromAmino(object: _92.QueryModuleVersionsResponseAmino): _92.QueryModuleVersionsResponse;
                toAmino(message: _92.QueryModuleVersionsResponse): _92.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _92.QueryModuleVersionsResponseAminoMsg): _92.QueryModuleVersionsResponse;
                toAminoMsg(message: _92.QueryModuleVersionsResponse): _92.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _92.QueryModuleVersionsResponseProtoMsg): _92.QueryModuleVersionsResponse;
                toProto(message: _92.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _92.QueryModuleVersionsResponse): _92.QueryModuleVersionsResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _215.MsgClientImpl;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _94.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _94.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _94.MsgCreateVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _94.MsgCreateVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _94.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _94.MsgCreateVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _94.MsgCreateVestingAccount) => _94.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _94.MsgCreateVestingAccountAmino) => _94.MsgCreateVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _95.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.BaseVestingAccount;
                fromPartial(object: Partial<_95.BaseVestingAccount>): _95.BaseVestingAccount;
                fromAmino(object: _95.BaseVestingAccountAmino): _95.BaseVestingAccount;
                toAmino(message: _95.BaseVestingAccount): _95.BaseVestingAccountAmino;
                fromAminoMsg(object: _95.BaseVestingAccountAminoMsg): _95.BaseVestingAccount;
                toAminoMsg(message: _95.BaseVestingAccount): _95.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _95.BaseVestingAccountProtoMsg): _95.BaseVestingAccount;
                toProto(message: _95.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _95.BaseVestingAccount): _95.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _95.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.ContinuousVestingAccount;
                fromPartial(object: Partial<_95.ContinuousVestingAccount>): _95.ContinuousVestingAccount;
                fromAmino(object: _95.ContinuousVestingAccountAmino): _95.ContinuousVestingAccount;
                toAmino(message: _95.ContinuousVestingAccount): _95.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _95.ContinuousVestingAccountAminoMsg): _95.ContinuousVestingAccount;
                toAminoMsg(message: _95.ContinuousVestingAccount): _95.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _95.ContinuousVestingAccountProtoMsg): _95.ContinuousVestingAccount;
                toProto(message: _95.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _95.ContinuousVestingAccount): _95.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _95.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.DelayedVestingAccount;
                fromPartial(object: Partial<_95.DelayedVestingAccount>): _95.DelayedVestingAccount;
                fromAmino(object: _95.DelayedVestingAccountAmino): _95.DelayedVestingAccount;
                toAmino(message: _95.DelayedVestingAccount): _95.DelayedVestingAccountAmino;
                fromAminoMsg(object: _95.DelayedVestingAccountAminoMsg): _95.DelayedVestingAccount;
                toAminoMsg(message: _95.DelayedVestingAccount): _95.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _95.DelayedVestingAccountProtoMsg): _95.DelayedVestingAccount;
                toProto(message: _95.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _95.DelayedVestingAccount): _95.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _95.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.Period;
                fromPartial(object: Partial<_95.Period>): _95.Period;
                fromAmino(object: _95.PeriodAmino): _95.Period;
                toAmino(message: _95.Period): _95.PeriodAmino;
                fromAminoMsg(object: _95.PeriodAminoMsg): _95.Period;
                toAminoMsg(message: _95.Period): _95.PeriodAminoMsg;
                fromProtoMsg(message: _95.PeriodProtoMsg): _95.Period;
                toProto(message: _95.Period): Uint8Array;
                toProtoMsg(message: _95.Period): _95.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _95.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.PeriodicVestingAccount;
                fromPartial(object: Partial<_95.PeriodicVestingAccount>): _95.PeriodicVestingAccount;
                fromAmino(object: _95.PeriodicVestingAccountAmino): _95.PeriodicVestingAccount;
                toAmino(message: _95.PeriodicVestingAccount): _95.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _95.PeriodicVestingAccountAminoMsg): _95.PeriodicVestingAccount;
                toAminoMsg(message: _95.PeriodicVestingAccount): _95.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _95.PeriodicVestingAccountProtoMsg): _95.PeriodicVestingAccount;
                toProto(message: _95.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _95.PeriodicVestingAccount): _95.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _95.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.PermanentLockedAccount;
                fromPartial(object: Partial<_95.PermanentLockedAccount>): _95.PermanentLockedAccount;
                fromAmino(object: _95.PermanentLockedAccountAmino): _95.PermanentLockedAccount;
                toAmino(message: _95.PermanentLockedAccount): _95.PermanentLockedAccountAmino;
                fromAminoMsg(object: _95.PermanentLockedAccountAminoMsg): _95.PermanentLockedAccount;
                toAminoMsg(message: _95.PermanentLockedAccount): _95.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _95.PermanentLockedAccountProtoMsg): _95.PermanentLockedAccount;
                toProto(message: _95.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _95.PermanentLockedAccount): _95.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _94.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgCreateVestingAccount;
                fromPartial(object: Partial<_94.MsgCreateVestingAccount>): _94.MsgCreateVestingAccount;
                fromAmino(object: _94.MsgCreateVestingAccountAmino): _94.MsgCreateVestingAccount;
                toAmino(message: _94.MsgCreateVestingAccount): _94.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _94.MsgCreateVestingAccountAminoMsg): _94.MsgCreateVestingAccount;
                toAminoMsg(message: _94.MsgCreateVestingAccount): _94.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _94.MsgCreateVestingAccountProtoMsg): _94.MsgCreateVestingAccount;
                toProto(message: _94.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _94.MsgCreateVestingAccount): _94.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _94.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _94.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_94.MsgCreateVestingAccountResponse>): _94.MsgCreateVestingAccountResponse;
                fromAmino(_: _94.MsgCreateVestingAccountResponseAmino): _94.MsgCreateVestingAccountResponse;
                toAmino(_: _94.MsgCreateVestingAccountResponse): _94.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _94.MsgCreateVestingAccountResponseAminoMsg): _94.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _94.MsgCreateVestingAccountResponse): _94.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _94.MsgCreateVestingAccountResponseProtoMsg): _94.MsgCreateVestingAccountResponse;
                toProto(message: _94.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _94.MsgCreateVestingAccountResponse): _94.MsgCreateVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _206.MsgClientImpl;
                };
                bank: {
                    v1beta1: _207.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _208.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _209.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _210.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _211.MsgClientImpl;
                };
                gov: {
                    v1beta1: _212.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _213.MsgClientImpl;
                };
                staking: {
                    v1beta1: _214.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _215.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: any;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _27.QueryAccountsRequest): Promise<_27.QueryAccountsResponse>;
                        account(request: _27.QueryAccountRequest): Promise<_27.QueryAccountResponse>;
                        params(request?: _27.QueryParamsRequest): Promise<_27.QueryParamsResponse>;
                        moduleAccountByName(request: _27.QueryModuleAccountByNameRequest): Promise<_27.QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _31.QueryGrantsRequest): Promise<_31.QueryGrantsResponse>;
                        granterGrants(request: _31.QueryGranterGrantsRequest): Promise<_31.QueryGranterGrantsResponse>;
                        granteeGrants(request: _31.QueryGranteeGrantsRequest): Promise<_31.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _36.QueryBalanceRequest): Promise<_36.QueryBalanceResponse>;
                        allBalances(request: _36.QueryAllBalancesRequest): Promise<_36.QueryAllBalancesResponse>;
                        spendableBalances(request: _36.QuerySpendableBalancesRequest): Promise<_36.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _36.QueryTotalSupplyRequest): Promise<_36.QueryTotalSupplyResponse>;
                        supplyOf(request: _36.QuerySupplyOfRequest): Promise<_36.QuerySupplyOfResponse>;
                        params(request?: _36.QueryParamsRequest): Promise<_36.QueryParamsResponse>;
                        denomMetadata(request: _36.QueryDenomMetadataRequest): Promise<_36.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _36.QueryDenomsMetadataRequest): Promise<_36.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _40.ConfigRequest): Promise<_40.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _48.GetNodeInfoRequest): Promise<_48.GetNodeInfoResponse>;
                            getSyncing(request?: _48.GetSyncingRequest): Promise<_48.GetSyncingResponse>;
                            getLatestBlock(request?: _48.GetLatestBlockRequest): Promise<_48.GetLatestBlockResponse>;
                            getBlockByHeight(request: _48.GetBlockByHeightRequest): Promise<_48.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _48.GetLatestValidatorSetRequest): Promise<_48.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _48.GetValidatorSetByHeightRequest): Promise<_48.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _60.QueryParamsRequest): Promise<_60.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _60.QueryValidatorOutstandingRewardsRequest): Promise<_60.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _60.QueryValidatorCommissionRequest): Promise<_60.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _60.QueryValidatorSlashesRequest): Promise<_60.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _60.QueryDelegationRewardsRequest): Promise<_60.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _60.QueryDelegationTotalRewardsRequest): Promise<_60.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _60.QueryDelegatorValidatorsRequest): Promise<_60.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _60.QueryDelegatorWithdrawAddressRequest): Promise<_60.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _60.QueryCommunityPoolRequest): Promise<_60.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _64.QueryEvidenceRequest): Promise<_64.QueryEvidenceResponse>;
                        allEvidence(request?: _64.QueryAllEvidenceRequest): Promise<_64.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _68.QueryAllowanceRequest): Promise<_68.QueryAllowanceResponse>;
                        allowances(request: _68.QueryAllowancesRequest): Promise<_68.QueryAllowancesResponse>;
                        allowancesByGranter(request: _68.QueryAllowancesByGranterRequest): Promise<_68.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _73.QueryProposalRequest): Promise<_73.QueryProposalResponse>;
                        proposals(request: _73.QueryProposalsRequest): Promise<_73.QueryProposalsResponse>;
                        vote(request: _73.QueryVoteRequest): Promise<_73.QueryVoteResponse>;
                        votes(request: _73.QueryVotesRequest): Promise<_73.QueryVotesResponse>;
                        params(request: _73.QueryParamsRequest): Promise<_73.QueryParamsResponse>;
                        deposit(request: _73.QueryDepositRequest): Promise<_73.QueryDepositResponse>;
                        deposits(request: _73.QueryDepositsRequest): Promise<_73.QueryDepositsResponse>;
                        tallyResult(request: _73.QueryTallyResultRequest): Promise<_73.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _77.QueryParamsRequest): Promise<_77.QueryParamsResponse>;
                        inflation(request?: _77.QueryInflationRequest): Promise<_77.QueryInflationResponse>;
                        annualProvisions(request?: _77.QueryAnnualProvisionsRequest): Promise<_77.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _79.QueryParamsRequest): Promise<_79.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _81.QueryParamsRequest): Promise<_81.QueryParamsResponse>;
                        signingInfo(request: _81.QuerySigningInfoRequest): Promise<_81.QuerySigningInfoResponse>;
                        signingInfos(request?: _81.QuerySigningInfosRequest): Promise<_81.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _86.QueryValidatorsRequest): Promise<_86.QueryValidatorsResponse>;
                        validator(request: _86.QueryValidatorRequest): Promise<_86.QueryValidatorResponse>;
                        validatorDelegations(request: _86.QueryValidatorDelegationsRequest): Promise<_86.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _86.QueryValidatorUnbondingDelegationsRequest): Promise<_86.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _86.QueryDelegationRequest): Promise<_86.QueryDelegationResponse>;
                        unbondingDelegation(request: _86.QueryUnbondingDelegationRequest): Promise<_86.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _86.QueryDelegatorDelegationsRequest): Promise<_86.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _86.QueryDelegatorUnbondingDelegationsRequest): Promise<_86.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _86.QueryRedelegationsRequest): Promise<_86.QueryRedelegationsResponse>;
                        delegatorValidators(request: _86.QueryDelegatorValidatorsRequest): Promise<_86.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _86.QueryDelegatorValidatorRequest): Promise<_86.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _86.QueryHistoricalInfoRequest): Promise<_86.QueryHistoricalInfoResponse>;
                        pool(request?: _86.QueryPoolRequest): Promise<_86.QueryPoolResponse>;
                        params(request?: _86.QueryParamsRequest): Promise<_86.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _90.SimulateRequest): Promise<_90.SimulateResponse>;
                        getTx(request: _90.GetTxRequest): Promise<_90.GetTxResponse>;
                        broadcastTx(request: _90.BroadcastTxRequest): Promise<_90.BroadcastTxResponse>;
                        getTxsEvent(request: _90.GetTxsEventRequest): Promise<_90.GetTxsEventResponse>;
                        getBlockWithTxs(request: _90.GetBlockWithTxsRequest): Promise<_90.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _92.QueryCurrentPlanRequest): Promise<_92.QueryCurrentPlanResponse>;
                        appliedPlan(request: _92.QueryAppliedPlanRequest): Promise<_92.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _92.QueryUpgradedConsensusStateRequest): Promise<_92.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _92.QueryModuleVersionsRequest): Promise<_92.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _176.LCDQueryClient;
                };
                authz: {
                    v1beta1: _177.LCDQueryClient;
                };
                bank: {
                    v1beta1: _178.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _179.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _180.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _181.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _182.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _183.LCDQueryClient;
                };
                gov: {
                    v1beta1: _184.LCDQueryClient;
                };
                mint: {
                    v1beta1: _185.LCDQueryClient;
                };
                params: {
                    v1beta1: _186.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _187.LCDQueryClient;
                };
                staking: {
                    v1beta1: _188.LCDQueryClient;
                };
                tx: {
                    v1beta1: _189.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _190.LCDQueryClient;
                };
            };
        }>;
    };
}
