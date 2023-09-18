import * as _87 from "./auth/v1beta1/auth";
import * as _88 from "./auth/v1beta1/genesis";
import * as _89 from "./auth/v1beta1/query";
import * as _90 from "./authz/v1beta1/authz";
import * as _91 from "./authz/v1beta1/event";
import * as _92 from "./authz/v1beta1/genesis";
import * as _93 from "./authz/v1beta1/query";
import * as _94 from "./authz/v1beta1/tx";
import * as _95 from "./bank/v1beta1/authz";
import * as _96 from "./bank/v1beta1/bank";
import * as _97 from "./bank/v1beta1/genesis";
import * as _98 from "./bank/v1beta1/query";
import * as _99 from "./bank/v1beta1/tx";
import * as _100 from "./base/abci/v1beta1/abci";
import * as _101 from "./base/kv/v1beta1/kv";
import * as _102 from "./base/node/v1beta1/query";
import * as _103 from "./base/query/v1beta1/pagination";
import * as _104 from "./base/reflection/v1beta1/reflection";
import * as _105 from "./base/reflection/v2alpha1/reflection";
import * as _106 from "./base/snapshots/v1beta1/snapshot";
import * as _107 from "./base/store/v1beta1/commit_info";
import * as _108 from "./base/store/v1beta1/listening";
import * as _109 from "./base/tendermint/v1beta1/query";
import * as _110 from "./base/v1beta1/coin";
import * as _111 from "./capability/v1beta1/capability";
import * as _112 from "./capability/v1beta1/genesis";
import * as _113 from "./crisis/v1beta1/genesis";
import * as _114 from "./crisis/v1beta1/tx";
import * as _115 from "./crypto/ed25519/keys";
import * as _116 from "./crypto/multisig/keys";
import * as _117 from "./crypto/secp256k1/keys";
import * as _118 from "./crypto/secp256r1/keys";
import * as _119 from "./distribution/v1beta1/distribution";
import * as _120 from "./distribution/v1beta1/genesis";
import * as _121 from "./distribution/v1beta1/query";
import * as _122 from "./distribution/v1beta1/tx";
import * as _123 from "./evidence/v1beta1/evidence";
import * as _124 from "./evidence/v1beta1/genesis";
import * as _125 from "./evidence/v1beta1/query";
import * as _126 from "./evidence/v1beta1/tx";
import * as _127 from "./feegrant/v1beta1/feegrant";
import * as _128 from "./feegrant/v1beta1/genesis";
import * as _129 from "./feegrant/v1beta1/query";
import * as _130 from "./feegrant/v1beta1/tx";
import * as _131 from "./genutil/v1beta1/genesis";
import * as _132 from "./gov/v1beta1/genesis";
import * as _133 from "./gov/v1beta1/gov";
import * as _134 from "./gov/v1beta1/query";
import * as _135 from "./gov/v1beta1/tx";
import * as _136 from "./mint/v1beta1/genesis";
import * as _137 from "./mint/v1beta1/mint";
import * as _138 from "./mint/v1beta1/query";
import * as _139 from "./params/v1beta1/params";
import * as _140 from "./params/v1beta1/query";
import * as _141 from "./slashing/v1beta1/genesis";
import * as _142 from "./slashing/v1beta1/query";
import * as _143 from "./slashing/v1beta1/slashing";
import * as _144 from "./slashing/v1beta1/tx";
import * as _145 from "./staking/v1beta1/authz";
import * as _146 from "./staking/v1beta1/genesis";
import * as _147 from "./staking/v1beta1/query";
import * as _148 from "./staking/v1beta1/staking";
import * as _149 from "./staking/v1beta1/tx";
import * as _150 from "./tx/signing/v1beta1/signing";
import * as _151 from "./tx/v1beta1/service";
import * as _152 from "./tx/v1beta1/tx";
import * as _153 from "./upgrade/v1beta1/query";
import * as _154 from "./upgrade/v1beta1/upgrade";
import * as _155 from "./vesting/v1beta1/tx";
import * as _156 from "./vesting/v1beta1/vesting";
import * as _284 from "./auth/v1beta1/query.lcd";
import * as _285 from "./authz/v1beta1/query.lcd";
import * as _286 from "./bank/v1beta1/query.lcd";
import * as _287 from "./base/node/v1beta1/query.lcd";
import * as _288 from "./base/tendermint/v1beta1/query.lcd";
import * as _289 from "./distribution/v1beta1/query.lcd";
import * as _290 from "./evidence/v1beta1/query.lcd";
import * as _291 from "./feegrant/v1beta1/query.lcd";
import * as _292 from "./gov/v1beta1/query.lcd";
import * as _293 from "./mint/v1beta1/query.lcd";
import * as _294 from "./params/v1beta1/query.lcd";
import * as _295 from "./slashing/v1beta1/query.lcd";
import * as _296 from "./staking/v1beta1/query.lcd";
import * as _297 from "./tx/v1beta1/service.lcd";
import * as _298 from "./upgrade/v1beta1/query.lcd";
import * as _299 from "./auth/v1beta1/query.rpc.Query";
import * as _300 from "./authz/v1beta1/query.rpc.Query";
import * as _301 from "./bank/v1beta1/query.rpc.Query";
import * as _302 from "./base/node/v1beta1/query.rpc.Service";
import * as _303 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _304 from "./distribution/v1beta1/query.rpc.Query";
import * as _305 from "./evidence/v1beta1/query.rpc.Query";
import * as _306 from "./feegrant/v1beta1/query.rpc.Query";
import * as _307 from "./gov/v1beta1/query.rpc.Query";
import * as _308 from "./mint/v1beta1/query.rpc.Query";
import * as _309 from "./params/v1beta1/query.rpc.Query";
import * as _310 from "./slashing/v1beta1/query.rpc.Query";
import * as _311 from "./staking/v1beta1/query.rpc.Query";
import * as _312 from "./tx/v1beta1/service.rpc.Service";
import * as _313 from "./upgrade/v1beta1/query.rpc.Query";
import * as _314 from "./authz/v1beta1/tx.rpc.msg";
import * as _315 from "./bank/v1beta1/tx.rpc.msg";
import * as _316 from "./crisis/v1beta1/tx.rpc.msg";
import * as _317 from "./distribution/v1beta1/tx.rpc.msg";
import * as _318 from "./evidence/v1beta1/tx.rpc.msg";
import * as _319 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _320 from "./gov/v1beta1/tx.rpc.msg";
import * as _321 from "./slashing/v1beta1/tx.rpc.msg";
import * as _322 from "./staking/v1beta1/tx.rpc.msg";
import * as _323 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _299.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _89.QueryAccountsRequest): Promise<_89.QueryAccountsResponse>;
                account(request: _89.QueryAccountRequest): Promise<_89.QueryAccountResponse>;
                params(request?: _89.QueryParamsRequest): Promise<_89.QueryParamsResponse>;
                moduleAccounts(request?: _89.QueryModuleAccountsRequest): Promise<_89.QueryModuleAccountsResponse>;
            };
            LCDQueryClient: typeof _284.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _89.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryAccountsRequest;
                fromPartial(object: Partial<_89.QueryAccountsRequest>): _89.QueryAccountsRequest;
                fromAmino(object: _89.QueryAccountsRequestAmino): _89.QueryAccountsRequest;
                toAmino(message: _89.QueryAccountsRequest): _89.QueryAccountsRequestAmino;
                fromAminoMsg(object: _89.QueryAccountsRequestAminoMsg): _89.QueryAccountsRequest;
                toAminoMsg(message: _89.QueryAccountsRequest): _89.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _89.QueryAccountsRequestProtoMsg): _89.QueryAccountsRequest;
                toProto(message: _89.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _89.QueryAccountsRequest): _89.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _89.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryAccountsResponse;
                fromPartial(object: Partial<_89.QueryAccountsResponse>): _89.QueryAccountsResponse;
                fromAmino(object: _89.QueryAccountsResponseAmino): _89.QueryAccountsResponse;
                toAmino(message: _89.QueryAccountsResponse): _89.QueryAccountsResponseAmino;
                fromAminoMsg(object: _89.QueryAccountsResponseAminoMsg): _89.QueryAccountsResponse;
                toAminoMsg(message: _89.QueryAccountsResponse): _89.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _89.QueryAccountsResponseProtoMsg): _89.QueryAccountsResponse;
                toProto(message: _89.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _89.QueryAccountsResponse): _89.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _89.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryAccountRequest;
                fromPartial(object: Partial<_89.QueryAccountRequest>): _89.QueryAccountRequest;
                fromAmino(object: _89.QueryAccountRequestAmino): _89.QueryAccountRequest;
                toAmino(message: _89.QueryAccountRequest): _89.QueryAccountRequestAmino;
                fromAminoMsg(object: _89.QueryAccountRequestAminoMsg): _89.QueryAccountRequest;
                toAminoMsg(message: _89.QueryAccountRequest): _89.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _89.QueryAccountRequestProtoMsg): _89.QueryAccountRequest;
                toProto(message: _89.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _89.QueryAccountRequest): _89.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _89.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryAccountResponse;
                fromPartial(object: Partial<_89.QueryAccountResponse>): _89.QueryAccountResponse;
                fromAmino(object: _89.QueryAccountResponseAmino): _89.QueryAccountResponse;
                toAmino(message: _89.QueryAccountResponse): _89.QueryAccountResponseAmino;
                fromAminoMsg(object: _89.QueryAccountResponseAminoMsg): _89.QueryAccountResponse;
                toAminoMsg(message: _89.QueryAccountResponse): _89.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _89.QueryAccountResponseProtoMsg): _89.QueryAccountResponse;
                toProto(message: _89.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _89.QueryAccountResponse): _89.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _89.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _89.QueryParamsRequest;
                fromPartial(_: Partial<_89.QueryParamsRequest>): _89.QueryParamsRequest;
                fromAmino(_: _89.QueryParamsRequestAmino): _89.QueryParamsRequest;
                toAmino(_: _89.QueryParamsRequest): _89.QueryParamsRequestAmino;
                fromAminoMsg(object: _89.QueryParamsRequestAminoMsg): _89.QueryParamsRequest;
                toAminoMsg(message: _89.QueryParamsRequest): _89.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _89.QueryParamsRequestProtoMsg): _89.QueryParamsRequest;
                toProto(message: _89.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _89.QueryParamsRequest): _89.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _89.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryParamsResponse;
                fromPartial(object: Partial<_89.QueryParamsResponse>): _89.QueryParamsResponse;
                fromAmino(object: _89.QueryParamsResponseAmino): _89.QueryParamsResponse;
                toAmino(message: _89.QueryParamsResponse): _89.QueryParamsResponseAmino;
                fromAminoMsg(object: _89.QueryParamsResponseAminoMsg): _89.QueryParamsResponse;
                toAminoMsg(message: _89.QueryParamsResponse): _89.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _89.QueryParamsResponseProtoMsg): _89.QueryParamsResponse;
                toProto(message: _89.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _89.QueryParamsResponse): _89.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _89.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _89.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_89.QueryModuleAccountsRequest>): _89.QueryModuleAccountsRequest;
                fromAmino(_: _89.QueryModuleAccountsRequestAmino): _89.QueryModuleAccountsRequest;
                toAmino(_: _89.QueryModuleAccountsRequest): _89.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _89.QueryModuleAccountsRequestAminoMsg): _89.QueryModuleAccountsRequest;
                toAminoMsg(message: _89.QueryModuleAccountsRequest): _89.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _89.QueryModuleAccountsRequestProtoMsg): _89.QueryModuleAccountsRequest;
                toProto(message: _89.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _89.QueryModuleAccountsRequest): _89.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _89.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_89.QueryModuleAccountsResponse>): _89.QueryModuleAccountsResponse;
                fromAmino(object: _89.QueryModuleAccountsResponseAmino): _89.QueryModuleAccountsResponse;
                toAmino(message: _89.QueryModuleAccountsResponse): _89.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _89.QueryModuleAccountsResponseAminoMsg): _89.QueryModuleAccountsResponse;
                toAminoMsg(message: _89.QueryModuleAccountsResponse): _89.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _89.QueryModuleAccountsResponseProtoMsg): _89.QueryModuleAccountsResponse;
                toProto(message: _89.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _89.QueryModuleAccountsResponse): _89.QueryModuleAccountsResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _87.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _87.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _88.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.GenesisState;
                fromPartial(object: Partial<_88.GenesisState>): _88.GenesisState;
                fromAmino(object: _88.GenesisStateAmino): _88.GenesisState;
                toAmino(message: _88.GenesisState): _88.GenesisStateAmino;
                fromAminoMsg(object: _88.GenesisStateAminoMsg): _88.GenesisState;
                toAminoMsg(message: _88.GenesisState): _88.GenesisStateAminoMsg;
                fromProtoMsg(message: _88.GenesisStateProtoMsg): _88.GenesisState;
                toProto(message: _88.GenesisState): Uint8Array;
                toProtoMsg(message: _88.GenesisState): _88.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _87.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.BaseAccount;
                fromPartial(object: Partial<_87.BaseAccount>): _87.BaseAccount;
                fromAmino(object: _87.BaseAccountAmino): _87.BaseAccount;
                toAmino(message: _87.BaseAccount): _87.BaseAccountAmino;
                fromAminoMsg(object: _87.BaseAccountAminoMsg): _87.BaseAccount;
                toAminoMsg(message: _87.BaseAccount): _87.BaseAccountAminoMsg;
                fromProtoMsg(message: _87.BaseAccountProtoMsg): _87.BaseAccount;
                toProto(message: _87.BaseAccount): Uint8Array;
                toProtoMsg(message: _87.BaseAccount): _87.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _87.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.ModuleAccount;
                fromPartial(object: Partial<_87.ModuleAccount>): _87.ModuleAccount;
                fromAmino(object: _87.ModuleAccountAmino): _87.ModuleAccount;
                toAmino(message: _87.ModuleAccount): _87.ModuleAccountAmino;
                fromAminoMsg(object: _87.ModuleAccountAminoMsg): _87.ModuleAccount;
                toAminoMsg(message: _87.ModuleAccount): _87.ModuleAccountAminoMsg;
                fromProtoMsg(message: _87.ModuleAccountProtoMsg): _87.ModuleAccount;
                toProto(message: _87.ModuleAccount): Uint8Array;
                toProtoMsg(message: _87.ModuleAccount): _87.ModuleAccountProtoMsg;
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
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _314.MsgClientImpl;
            QueryClientImpl: typeof _300.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _93.QueryGrantsRequest): Promise<_93.QueryGrantsResponse>;
                granterGrants(request: _93.QueryGranterGrantsRequest): Promise<_93.QueryGranterGrantsResponse>;
                granteeGrants(request: _93.QueryGranteeGrantsRequest): Promise<_93.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _285.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _94.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _94.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _94.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _94.MsgGrant): {
                        typeUrl: string;
                        value: _94.MsgGrant;
                    };
                    exec(value: _94.MsgExec): {
                        typeUrl: string;
                        value: _94.MsgExec;
                    };
                    revoke(value: _94.MsgRevoke): {
                        typeUrl: string;
                        value: _94.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _94.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _94.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _94.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _94.MsgGrant): {
                        typeUrl: string;
                        value: _94.MsgGrant;
                    };
                    exec(value: _94.MsgExec): {
                        typeUrl: string;
                        value: _94.MsgExec;
                    };
                    revoke(value: _94.MsgRevoke): {
                        typeUrl: string;
                        value: _94.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _94.MsgGrant) => _94.MsgGrantAmino;
                    fromAmino: (object: _94.MsgGrantAmino) => _94.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _94.MsgExec) => _94.MsgExecAmino;
                    fromAmino: (object: _94.MsgExecAmino) => _94.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _94.MsgRevoke) => _94.MsgRevokeAmino;
                    fromAmino: (object: _94.MsgRevokeAmino) => _94.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _94.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgGrant;
                fromPartial(object: Partial<_94.MsgGrant>): _94.MsgGrant;
                fromAmino(object: _94.MsgGrantAmino): _94.MsgGrant;
                toAmino(message: _94.MsgGrant): _94.MsgGrantAmino;
                fromAminoMsg(object: _94.MsgGrantAminoMsg): _94.MsgGrant;
                toAminoMsg(message: _94.MsgGrant): _94.MsgGrantAminoMsg;
                fromProtoMsg(message: _94.MsgGrantProtoMsg): _94.MsgGrant;
                toProto(message: _94.MsgGrant): Uint8Array;
                toProtoMsg(message: _94.MsgGrant): _94.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _94.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgExecResponse;
                fromPartial(object: Partial<_94.MsgExecResponse>): _94.MsgExecResponse;
                fromAmino(object: _94.MsgExecResponseAmino): _94.MsgExecResponse;
                toAmino(message: _94.MsgExecResponse): _94.MsgExecResponseAmino;
                fromAminoMsg(object: _94.MsgExecResponseAminoMsg): _94.MsgExecResponse;
                toAminoMsg(message: _94.MsgExecResponse): _94.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _94.MsgExecResponseProtoMsg): _94.MsgExecResponse;
                toProto(message: _94.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _94.MsgExecResponse): _94.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _94.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgExec;
                fromPartial(object: Partial<_94.MsgExec>): _94.MsgExec;
                fromAmino(object: _94.MsgExecAmino): _94.MsgExec;
                toAmino(message: _94.MsgExec): _94.MsgExecAmino;
                fromAminoMsg(object: _94.MsgExecAminoMsg): _94.MsgExec;
                toAminoMsg(message: _94.MsgExec): _94.MsgExecAminoMsg;
                fromProtoMsg(message: _94.MsgExecProtoMsg): _94.MsgExec;
                toProto(message: _94.MsgExec): Uint8Array;
                toProtoMsg(message: _94.MsgExec): _94.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _94.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _94.MsgGrantResponse;
                fromPartial(_: Partial<_94.MsgGrantResponse>): _94.MsgGrantResponse;
                fromAmino(_: _94.MsgGrantResponseAmino): _94.MsgGrantResponse;
                toAmino(_: _94.MsgGrantResponse): _94.MsgGrantResponseAmino;
                fromAminoMsg(object: _94.MsgGrantResponseAminoMsg): _94.MsgGrantResponse;
                toAminoMsg(message: _94.MsgGrantResponse): _94.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _94.MsgGrantResponseProtoMsg): _94.MsgGrantResponse;
                toProto(message: _94.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _94.MsgGrantResponse): _94.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _94.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgRevoke;
                fromPartial(object: Partial<_94.MsgRevoke>): _94.MsgRevoke;
                fromAmino(object: _94.MsgRevokeAmino): _94.MsgRevoke;
                toAmino(message: _94.MsgRevoke): _94.MsgRevokeAmino;
                fromAminoMsg(object: _94.MsgRevokeAminoMsg): _94.MsgRevoke;
                toAminoMsg(message: _94.MsgRevoke): _94.MsgRevokeAminoMsg;
                fromProtoMsg(message: _94.MsgRevokeProtoMsg): _94.MsgRevoke;
                toProto(message: _94.MsgRevoke): Uint8Array;
                toProtoMsg(message: _94.MsgRevoke): _94.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _94.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _94.MsgRevokeResponse;
                fromPartial(_: Partial<_94.MsgRevokeResponse>): _94.MsgRevokeResponse;
                fromAmino(_: _94.MsgRevokeResponseAmino): _94.MsgRevokeResponse;
                toAmino(_: _94.MsgRevokeResponse): _94.MsgRevokeResponseAmino;
                fromAminoMsg(object: _94.MsgRevokeResponseAminoMsg): _94.MsgRevokeResponse;
                toAminoMsg(message: _94.MsgRevokeResponse): _94.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _94.MsgRevokeResponseProtoMsg): _94.MsgRevokeResponse;
                toProto(message: _94.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _94.MsgRevokeResponse): _94.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _93.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryGrantsRequest;
                fromPartial(object: Partial<_93.QueryGrantsRequest>): _93.QueryGrantsRequest;
                fromAmino(object: _93.QueryGrantsRequestAmino): _93.QueryGrantsRequest;
                toAmino(message: _93.QueryGrantsRequest): _93.QueryGrantsRequestAmino;
                fromAminoMsg(object: _93.QueryGrantsRequestAminoMsg): _93.QueryGrantsRequest;
                toAminoMsg(message: _93.QueryGrantsRequest): _93.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _93.QueryGrantsRequestProtoMsg): _93.QueryGrantsRequest;
                toProto(message: _93.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _93.QueryGrantsRequest): _93.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _93.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryGrantsResponse;
                fromPartial(object: Partial<_93.QueryGrantsResponse>): _93.QueryGrantsResponse;
                fromAmino(object: _93.QueryGrantsResponseAmino): _93.QueryGrantsResponse;
                toAmino(message: _93.QueryGrantsResponse): _93.QueryGrantsResponseAmino;
                fromAminoMsg(object: _93.QueryGrantsResponseAminoMsg): _93.QueryGrantsResponse;
                toAminoMsg(message: _93.QueryGrantsResponse): _93.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _93.QueryGrantsResponseProtoMsg): _93.QueryGrantsResponse;
                toProto(message: _93.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _93.QueryGrantsResponse): _93.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _93.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_93.QueryGranterGrantsRequest>): _93.QueryGranterGrantsRequest;
                fromAmino(object: _93.QueryGranterGrantsRequestAmino): _93.QueryGranterGrantsRequest;
                toAmino(message: _93.QueryGranterGrantsRequest): _93.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _93.QueryGranterGrantsRequestAminoMsg): _93.QueryGranterGrantsRequest;
                toAminoMsg(message: _93.QueryGranterGrantsRequest): _93.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _93.QueryGranterGrantsRequestProtoMsg): _93.QueryGranterGrantsRequest;
                toProto(message: _93.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _93.QueryGranterGrantsRequest): _93.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _93.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_93.QueryGranterGrantsResponse>): _93.QueryGranterGrantsResponse;
                fromAmino(object: _93.QueryGranterGrantsResponseAmino): _93.QueryGranterGrantsResponse;
                toAmino(message: _93.QueryGranterGrantsResponse): _93.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _93.QueryGranterGrantsResponseAminoMsg): _93.QueryGranterGrantsResponse;
                toAminoMsg(message: _93.QueryGranterGrantsResponse): _93.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _93.QueryGranterGrantsResponseProtoMsg): _93.QueryGranterGrantsResponse;
                toProto(message: _93.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _93.QueryGranterGrantsResponse): _93.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _93.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_93.QueryGranteeGrantsRequest>): _93.QueryGranteeGrantsRequest;
                fromAmino(object: _93.QueryGranteeGrantsRequestAmino): _93.QueryGranteeGrantsRequest;
                toAmino(message: _93.QueryGranteeGrantsRequest): _93.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _93.QueryGranteeGrantsRequestAminoMsg): _93.QueryGranteeGrantsRequest;
                toAminoMsg(message: _93.QueryGranteeGrantsRequest): _93.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _93.QueryGranteeGrantsRequestProtoMsg): _93.QueryGranteeGrantsRequest;
                toProto(message: _93.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _93.QueryGranteeGrantsRequest): _93.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _93.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_93.QueryGranteeGrantsResponse>): _93.QueryGranteeGrantsResponse;
                fromAmino(object: _93.QueryGranteeGrantsResponseAmino): _93.QueryGranteeGrantsResponse;
                toAmino(message: _93.QueryGranteeGrantsResponse): _93.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _93.QueryGranteeGrantsResponseAminoMsg): _93.QueryGranteeGrantsResponse;
                toAminoMsg(message: _93.QueryGranteeGrantsResponse): _93.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _93.QueryGranteeGrantsResponseProtoMsg): _93.QueryGranteeGrantsResponse;
                toProto(message: _93.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _93.QueryGranteeGrantsResponse): _93.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _92.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.GenesisState;
                fromPartial(object: Partial<_92.GenesisState>): _92.GenesisState;
                fromAmino(object: _92.GenesisStateAmino): _92.GenesisState;
                toAmino(message: _92.GenesisState): _92.GenesisStateAmino;
                fromAminoMsg(object: _92.GenesisStateAminoMsg): _92.GenesisState;
                toAminoMsg(message: _92.GenesisState): _92.GenesisStateAminoMsg;
                fromProtoMsg(message: _92.GenesisStateProtoMsg): _92.GenesisState;
                toProto(message: _92.GenesisState): Uint8Array;
                toProtoMsg(message: _92.GenesisState): _92.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _91.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.EventGrant;
                fromPartial(object: Partial<_91.EventGrant>): _91.EventGrant;
                fromAmino(object: _91.EventGrantAmino): _91.EventGrant;
                toAmino(message: _91.EventGrant): _91.EventGrantAmino;
                fromAminoMsg(object: _91.EventGrantAminoMsg): _91.EventGrant;
                toAminoMsg(message: _91.EventGrant): _91.EventGrantAminoMsg;
                fromProtoMsg(message: _91.EventGrantProtoMsg): _91.EventGrant;
                toProto(message: _91.EventGrant): Uint8Array;
                toProtoMsg(message: _91.EventGrant): _91.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _91.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.EventRevoke;
                fromPartial(object: Partial<_91.EventRevoke>): _91.EventRevoke;
                fromAmino(object: _91.EventRevokeAmino): _91.EventRevoke;
                toAmino(message: _91.EventRevoke): _91.EventRevokeAmino;
                fromAminoMsg(object: _91.EventRevokeAminoMsg): _91.EventRevoke;
                toAminoMsg(message: _91.EventRevoke): _91.EventRevokeAminoMsg;
                fromProtoMsg(message: _91.EventRevokeProtoMsg): _91.EventRevoke;
                toProto(message: _91.EventRevoke): Uint8Array;
                toProtoMsg(message: _91.EventRevoke): _91.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _90.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.GenericAuthorization;
                fromPartial(object: Partial<_90.GenericAuthorization>): _90.GenericAuthorization;
                fromAmino(object: _90.GenericAuthorizationAmino): _90.GenericAuthorization;
                toAmino(message: _90.GenericAuthorization): _90.GenericAuthorizationAmino;
                fromAminoMsg(object: _90.GenericAuthorizationAminoMsg): _90.GenericAuthorization;
                toAminoMsg(message: _90.GenericAuthorization): _90.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _90.GenericAuthorizationProtoMsg): _90.GenericAuthorization;
                toProto(message: _90.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _90.GenericAuthorization): _90.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _90.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.Grant;
                fromPartial(object: Partial<_90.Grant>): _90.Grant;
                fromAmino(object: _90.GrantAmino): _90.Grant;
                toAmino(message: _90.Grant): _90.GrantAmino;
                fromAminoMsg(object: _90.GrantAminoMsg): _90.Grant;
                toAminoMsg(message: _90.Grant): _90.GrantAminoMsg;
                fromProtoMsg(message: _90.GrantProtoMsg): _90.Grant;
                toProto(message: _90.Grant): Uint8Array;
                toProtoMsg(message: _90.Grant): _90.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _90.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.GrantAuthorization;
                fromPartial(object: Partial<_90.GrantAuthorization>): _90.GrantAuthorization;
                fromAmino(object: _90.GrantAuthorizationAmino): _90.GrantAuthorization;
                toAmino(message: _90.GrantAuthorization): _90.GrantAuthorizationAmino;
                fromAminoMsg(object: _90.GrantAuthorizationAminoMsg): _90.GrantAuthorization;
                toAminoMsg(message: _90.GrantAuthorization): _90.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _90.GrantAuthorizationProtoMsg): _90.GrantAuthorization;
                toProto(message: _90.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _90.GrantAuthorization): _90.GrantAuthorizationProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _95.SendAuthorization | _145.StakeAuthorization | _90.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _315.MsgClientImpl;
            QueryClientImpl: typeof _301.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _98.QueryBalanceRequest): Promise<_98.QueryBalanceResponse>;
                allBalances(request: _98.QueryAllBalancesRequest): Promise<_98.QueryAllBalancesResponse>;
                totalSupply(request?: _98.QueryTotalSupplyRequest): Promise<_98.QueryTotalSupplyResponse>;
                supplyOf(request: _98.QuerySupplyOfRequest): Promise<_98.QuerySupplyOfResponse>;
                totalSupplyWithoutOffset(request?: _98.QueryTotalSupplyWithoutOffsetRequest): Promise<_98.QueryTotalSupplyWithoutOffsetResponse>;
                supplyOfWithoutOffset(request: _98.QuerySupplyOfWithoutOffsetRequest): Promise<_98.QuerySupplyOfWithoutOffsetResponse>;
                params(request?: _98.QueryParamsRequest): Promise<_98.QueryParamsResponse>;
                denomMetadata(request: _98.QueryDenomMetadataRequest): Promise<_98.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _98.QueryDenomsMetadataRequest): Promise<_98.QueryDenomsMetadataResponse>;
                baseDenom(request: _98.QueryBaseDenomRequest): Promise<_98.QueryBaseDenomResponse>;
            };
            LCDQueryClient: typeof _286.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _99.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _99.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _99.MsgSend): {
                        typeUrl: string;
                        value: _99.MsgSend;
                    };
                    multiSend(value: _99.MsgMultiSend): {
                        typeUrl: string;
                        value: _99.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _99.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _99.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _99.MsgSend): {
                        typeUrl: string;
                        value: _99.MsgSend;
                    };
                    multiSend(value: _99.MsgMultiSend): {
                        typeUrl: string;
                        value: _99.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _99.MsgSend) => _99.MsgSendAmino;
                    fromAmino: (object: _99.MsgSendAmino) => _99.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _99.MsgMultiSend) => _99.MsgMultiSendAmino;
                    fromAmino: (object: _99.MsgMultiSendAmino) => _99.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _99.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.MsgSend;
                fromPartial(object: Partial<_99.MsgSend>): _99.MsgSend;
                fromAmino(object: _99.MsgSendAmino): _99.MsgSend;
                toAmino(message: _99.MsgSend): _99.MsgSendAmino;
                fromAminoMsg(object: _99.MsgSendAminoMsg): _99.MsgSend;
                toAminoMsg(message: _99.MsgSend): _99.MsgSendAminoMsg;
                fromProtoMsg(message: _99.MsgSendProtoMsg): _99.MsgSend;
                toProto(message: _99.MsgSend): Uint8Array;
                toProtoMsg(message: _99.MsgSend): _99.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _99.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _99.MsgSendResponse;
                fromPartial(_: Partial<_99.MsgSendResponse>): _99.MsgSendResponse;
                fromAmino(_: _99.MsgSendResponseAmino): _99.MsgSendResponse;
                toAmino(_: _99.MsgSendResponse): _99.MsgSendResponseAmino;
                fromAminoMsg(object: _99.MsgSendResponseAminoMsg): _99.MsgSendResponse;
                toAminoMsg(message: _99.MsgSendResponse): _99.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _99.MsgSendResponseProtoMsg): _99.MsgSendResponse;
                toProto(message: _99.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _99.MsgSendResponse): _99.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _99.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.MsgMultiSend;
                fromPartial(object: Partial<_99.MsgMultiSend>): _99.MsgMultiSend;
                fromAmino(object: _99.MsgMultiSendAmino): _99.MsgMultiSend;
                toAmino(message: _99.MsgMultiSend): _99.MsgMultiSendAmino;
                fromAminoMsg(object: _99.MsgMultiSendAminoMsg): _99.MsgMultiSend;
                toAminoMsg(message: _99.MsgMultiSend): _99.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _99.MsgMultiSendProtoMsg): _99.MsgMultiSend;
                toProto(message: _99.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _99.MsgMultiSend): _99.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _99.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _99.MsgMultiSendResponse;
                fromPartial(_: Partial<_99.MsgMultiSendResponse>): _99.MsgMultiSendResponse;
                fromAmino(_: _99.MsgMultiSendResponseAmino): _99.MsgMultiSendResponse;
                toAmino(_: _99.MsgMultiSendResponse): _99.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _99.MsgMultiSendResponseAminoMsg): _99.MsgMultiSendResponse;
                toAminoMsg(message: _99.MsgMultiSendResponse): _99.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _99.MsgMultiSendResponseProtoMsg): _99.MsgMultiSendResponse;
                toProto(message: _99.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _99.MsgMultiSendResponse): _99.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _98.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryBalanceRequest;
                fromPartial(object: Partial<_98.QueryBalanceRequest>): _98.QueryBalanceRequest;
                fromAmino(object: _98.QueryBalanceRequestAmino): _98.QueryBalanceRequest;
                toAmino(message: _98.QueryBalanceRequest): _98.QueryBalanceRequestAmino;
                fromAminoMsg(object: _98.QueryBalanceRequestAminoMsg): _98.QueryBalanceRequest;
                toAminoMsg(message: _98.QueryBalanceRequest): _98.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _98.QueryBalanceRequestProtoMsg): _98.QueryBalanceRequest;
                toProto(message: _98.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _98.QueryBalanceRequest): _98.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _98.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryBalanceResponse;
                fromPartial(object: Partial<_98.QueryBalanceResponse>): _98.QueryBalanceResponse;
                fromAmino(object: _98.QueryBalanceResponseAmino): _98.QueryBalanceResponse;
                toAmino(message: _98.QueryBalanceResponse): _98.QueryBalanceResponseAmino;
                fromAminoMsg(object: _98.QueryBalanceResponseAminoMsg): _98.QueryBalanceResponse;
                toAminoMsg(message: _98.QueryBalanceResponse): _98.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _98.QueryBalanceResponseProtoMsg): _98.QueryBalanceResponse;
                toProto(message: _98.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _98.QueryBalanceResponse): _98.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _98.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryAllBalancesRequest;
                fromPartial(object: Partial<_98.QueryAllBalancesRequest>): _98.QueryAllBalancesRequest;
                fromAmino(object: _98.QueryAllBalancesRequestAmino): _98.QueryAllBalancesRequest;
                toAmino(message: _98.QueryAllBalancesRequest): _98.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _98.QueryAllBalancesRequestAminoMsg): _98.QueryAllBalancesRequest;
                toAminoMsg(message: _98.QueryAllBalancesRequest): _98.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _98.QueryAllBalancesRequestProtoMsg): _98.QueryAllBalancesRequest;
                toProto(message: _98.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _98.QueryAllBalancesRequest): _98.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _98.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryAllBalancesResponse;
                fromPartial(object: Partial<_98.QueryAllBalancesResponse>): _98.QueryAllBalancesResponse;
                fromAmino(object: _98.QueryAllBalancesResponseAmino): _98.QueryAllBalancesResponse;
                toAmino(message: _98.QueryAllBalancesResponse): _98.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _98.QueryAllBalancesResponseAminoMsg): _98.QueryAllBalancesResponse;
                toAminoMsg(message: _98.QueryAllBalancesResponse): _98.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _98.QueryAllBalancesResponseProtoMsg): _98.QueryAllBalancesResponse;
                toProto(message: _98.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _98.QueryAllBalancesResponse): _98.QueryAllBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _98.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_98.QueryTotalSupplyRequest>): _98.QueryTotalSupplyRequest;
                fromAmino(object: _98.QueryTotalSupplyRequestAmino): _98.QueryTotalSupplyRequest;
                toAmino(message: _98.QueryTotalSupplyRequest): _98.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _98.QueryTotalSupplyRequestAminoMsg): _98.QueryTotalSupplyRequest;
                toAminoMsg(message: _98.QueryTotalSupplyRequest): _98.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _98.QueryTotalSupplyRequestProtoMsg): _98.QueryTotalSupplyRequest;
                toProto(message: _98.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _98.QueryTotalSupplyRequest): _98.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _98.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_98.QueryTotalSupplyResponse>): _98.QueryTotalSupplyResponse;
                fromAmino(object: _98.QueryTotalSupplyResponseAmino): _98.QueryTotalSupplyResponse;
                toAmino(message: _98.QueryTotalSupplyResponse): _98.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _98.QueryTotalSupplyResponseAminoMsg): _98.QueryTotalSupplyResponse;
                toAminoMsg(message: _98.QueryTotalSupplyResponse): _98.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _98.QueryTotalSupplyResponseProtoMsg): _98.QueryTotalSupplyResponse;
                toProto(message: _98.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _98.QueryTotalSupplyResponse): _98.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _98.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QuerySupplyOfRequest;
                fromPartial(object: Partial<_98.QuerySupplyOfRequest>): _98.QuerySupplyOfRequest;
                fromAmino(object: _98.QuerySupplyOfRequestAmino): _98.QuerySupplyOfRequest;
                toAmino(message: _98.QuerySupplyOfRequest): _98.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _98.QuerySupplyOfRequestAminoMsg): _98.QuerySupplyOfRequest;
                toAminoMsg(message: _98.QuerySupplyOfRequest): _98.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _98.QuerySupplyOfRequestProtoMsg): _98.QuerySupplyOfRequest;
                toProto(message: _98.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _98.QuerySupplyOfRequest): _98.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _98.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QuerySupplyOfResponse;
                fromPartial(object: Partial<_98.QuerySupplyOfResponse>): _98.QuerySupplyOfResponse;
                fromAmino(object: _98.QuerySupplyOfResponseAmino): _98.QuerySupplyOfResponse;
                toAmino(message: _98.QuerySupplyOfResponse): _98.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _98.QuerySupplyOfResponseAminoMsg): _98.QuerySupplyOfResponse;
                toAminoMsg(message: _98.QuerySupplyOfResponse): _98.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _98.QuerySupplyOfResponseProtoMsg): _98.QuerySupplyOfResponse;
                toProto(message: _98.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _98.QuerySupplyOfResponse): _98.QuerySupplyOfResponseProtoMsg;
            };
            QueryTotalSupplyWithoutOffsetRequest: {
                typeUrl: string;
                encode(message: _98.QueryTotalSupplyWithoutOffsetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryTotalSupplyWithoutOffsetRequest;
                fromPartial(object: Partial<_98.QueryTotalSupplyWithoutOffsetRequest>): _98.QueryTotalSupplyWithoutOffsetRequest;
                fromAmino(object: _98.QueryTotalSupplyWithoutOffsetRequestAmino): _98.QueryTotalSupplyWithoutOffsetRequest;
                toAmino(message: _98.QueryTotalSupplyWithoutOffsetRequest): _98.QueryTotalSupplyWithoutOffsetRequestAmino;
                fromAminoMsg(object: _98.QueryTotalSupplyWithoutOffsetRequestAminoMsg): _98.QueryTotalSupplyWithoutOffsetRequest;
                toAminoMsg(message: _98.QueryTotalSupplyWithoutOffsetRequest): _98.QueryTotalSupplyWithoutOffsetRequestAminoMsg;
                fromProtoMsg(message: _98.QueryTotalSupplyWithoutOffsetRequestProtoMsg): _98.QueryTotalSupplyWithoutOffsetRequest;
                toProto(message: _98.QueryTotalSupplyWithoutOffsetRequest): Uint8Array;
                toProtoMsg(message: _98.QueryTotalSupplyWithoutOffsetRequest): _98.QueryTotalSupplyWithoutOffsetRequestProtoMsg;
            };
            QueryTotalSupplyWithoutOffsetResponse: {
                typeUrl: string;
                encode(message: _98.QueryTotalSupplyWithoutOffsetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryTotalSupplyWithoutOffsetResponse;
                fromPartial(object: Partial<_98.QueryTotalSupplyWithoutOffsetResponse>): _98.QueryTotalSupplyWithoutOffsetResponse;
                fromAmino(object: _98.QueryTotalSupplyWithoutOffsetResponseAmino): _98.QueryTotalSupplyWithoutOffsetResponse;
                toAmino(message: _98.QueryTotalSupplyWithoutOffsetResponse): _98.QueryTotalSupplyWithoutOffsetResponseAmino;
                fromAminoMsg(object: _98.QueryTotalSupplyWithoutOffsetResponseAminoMsg): _98.QueryTotalSupplyWithoutOffsetResponse;
                toAminoMsg(message: _98.QueryTotalSupplyWithoutOffsetResponse): _98.QueryTotalSupplyWithoutOffsetResponseAminoMsg;
                fromProtoMsg(message: _98.QueryTotalSupplyWithoutOffsetResponseProtoMsg): _98.QueryTotalSupplyWithoutOffsetResponse;
                toProto(message: _98.QueryTotalSupplyWithoutOffsetResponse): Uint8Array;
                toProtoMsg(message: _98.QueryTotalSupplyWithoutOffsetResponse): _98.QueryTotalSupplyWithoutOffsetResponseProtoMsg;
            };
            QuerySupplyOfWithoutOffsetRequest: {
                typeUrl: string;
                encode(message: _98.QuerySupplyOfWithoutOffsetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QuerySupplyOfWithoutOffsetRequest;
                fromPartial(object: Partial<_98.QuerySupplyOfWithoutOffsetRequest>): _98.QuerySupplyOfWithoutOffsetRequest;
                fromAmino(object: _98.QuerySupplyOfWithoutOffsetRequestAmino): _98.QuerySupplyOfWithoutOffsetRequest;
                toAmino(message: _98.QuerySupplyOfWithoutOffsetRequest): _98.QuerySupplyOfWithoutOffsetRequestAmino;
                fromAminoMsg(object: _98.QuerySupplyOfWithoutOffsetRequestAminoMsg): _98.QuerySupplyOfWithoutOffsetRequest;
                toAminoMsg(message: _98.QuerySupplyOfWithoutOffsetRequest): _98.QuerySupplyOfWithoutOffsetRequestAminoMsg;
                fromProtoMsg(message: _98.QuerySupplyOfWithoutOffsetRequestProtoMsg): _98.QuerySupplyOfWithoutOffsetRequest;
                toProto(message: _98.QuerySupplyOfWithoutOffsetRequest): Uint8Array;
                toProtoMsg(message: _98.QuerySupplyOfWithoutOffsetRequest): _98.QuerySupplyOfWithoutOffsetRequestProtoMsg;
            };
            QuerySupplyOfWithoutOffsetResponse: {
                typeUrl: string;
                encode(message: _98.QuerySupplyOfWithoutOffsetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QuerySupplyOfWithoutOffsetResponse;
                fromPartial(object: Partial<_98.QuerySupplyOfWithoutOffsetResponse>): _98.QuerySupplyOfWithoutOffsetResponse;
                fromAmino(object: _98.QuerySupplyOfWithoutOffsetResponseAmino): _98.QuerySupplyOfWithoutOffsetResponse;
                toAmino(message: _98.QuerySupplyOfWithoutOffsetResponse): _98.QuerySupplyOfWithoutOffsetResponseAmino;
                fromAminoMsg(object: _98.QuerySupplyOfWithoutOffsetResponseAminoMsg): _98.QuerySupplyOfWithoutOffsetResponse;
                toAminoMsg(message: _98.QuerySupplyOfWithoutOffsetResponse): _98.QuerySupplyOfWithoutOffsetResponseAminoMsg;
                fromProtoMsg(message: _98.QuerySupplyOfWithoutOffsetResponseProtoMsg): _98.QuerySupplyOfWithoutOffsetResponse;
                toProto(message: _98.QuerySupplyOfWithoutOffsetResponse): Uint8Array;
                toProtoMsg(message: _98.QuerySupplyOfWithoutOffsetResponse): _98.QuerySupplyOfWithoutOffsetResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _98.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _98.QueryParamsRequest;
                fromPartial(_: Partial<_98.QueryParamsRequest>): _98.QueryParamsRequest;
                fromAmino(_: _98.QueryParamsRequestAmino): _98.QueryParamsRequest;
                toAmino(_: _98.QueryParamsRequest): _98.QueryParamsRequestAmino;
                fromAminoMsg(object: _98.QueryParamsRequestAminoMsg): _98.QueryParamsRequest;
                toAminoMsg(message: _98.QueryParamsRequest): _98.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _98.QueryParamsRequestProtoMsg): _98.QueryParamsRequest;
                toProto(message: _98.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _98.QueryParamsRequest): _98.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _98.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryParamsResponse;
                fromPartial(object: Partial<_98.QueryParamsResponse>): _98.QueryParamsResponse;
                fromAmino(object: _98.QueryParamsResponseAmino): _98.QueryParamsResponse;
                toAmino(message: _98.QueryParamsResponse): _98.QueryParamsResponseAmino;
                fromAminoMsg(object: _98.QueryParamsResponseAminoMsg): _98.QueryParamsResponse;
                toAminoMsg(message: _98.QueryParamsResponse): _98.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _98.QueryParamsResponseProtoMsg): _98.QueryParamsResponse;
                toProto(message: _98.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _98.QueryParamsResponse): _98.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _98.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_98.QueryDenomsMetadataRequest>): _98.QueryDenomsMetadataRequest;
                fromAmino(object: _98.QueryDenomsMetadataRequestAmino): _98.QueryDenomsMetadataRequest;
                toAmino(message: _98.QueryDenomsMetadataRequest): _98.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _98.QueryDenomsMetadataRequestAminoMsg): _98.QueryDenomsMetadataRequest;
                toAminoMsg(message: _98.QueryDenomsMetadataRequest): _98.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _98.QueryDenomsMetadataRequestProtoMsg): _98.QueryDenomsMetadataRequest;
                toProto(message: _98.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _98.QueryDenomsMetadataRequest): _98.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _98.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_98.QueryDenomsMetadataResponse>): _98.QueryDenomsMetadataResponse;
                fromAmino(object: _98.QueryDenomsMetadataResponseAmino): _98.QueryDenomsMetadataResponse;
                toAmino(message: _98.QueryDenomsMetadataResponse): _98.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _98.QueryDenomsMetadataResponseAminoMsg): _98.QueryDenomsMetadataResponse;
                toAminoMsg(message: _98.QueryDenomsMetadataResponse): _98.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _98.QueryDenomsMetadataResponseProtoMsg): _98.QueryDenomsMetadataResponse;
                toProto(message: _98.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _98.QueryDenomsMetadataResponse): _98.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _98.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_98.QueryDenomMetadataRequest>): _98.QueryDenomMetadataRequest;
                fromAmino(object: _98.QueryDenomMetadataRequestAmino): _98.QueryDenomMetadataRequest;
                toAmino(message: _98.QueryDenomMetadataRequest): _98.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _98.QueryDenomMetadataRequestAminoMsg): _98.QueryDenomMetadataRequest;
                toAminoMsg(message: _98.QueryDenomMetadataRequest): _98.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _98.QueryDenomMetadataRequestProtoMsg): _98.QueryDenomMetadataRequest;
                toProto(message: _98.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _98.QueryDenomMetadataRequest): _98.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _98.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_98.QueryDenomMetadataResponse>): _98.QueryDenomMetadataResponse;
                fromAmino(object: _98.QueryDenomMetadataResponseAmino): _98.QueryDenomMetadataResponse;
                toAmino(message: _98.QueryDenomMetadataResponse): _98.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _98.QueryDenomMetadataResponseAminoMsg): _98.QueryDenomMetadataResponse;
                toAminoMsg(message: _98.QueryDenomMetadataResponse): _98.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _98.QueryDenomMetadataResponseProtoMsg): _98.QueryDenomMetadataResponse;
                toProto(message: _98.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _98.QueryDenomMetadataResponse): _98.QueryDenomMetadataResponseProtoMsg;
            };
            QueryBaseDenomRequest: {
                typeUrl: string;
                encode(message: _98.QueryBaseDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryBaseDenomRequest;
                fromPartial(object: Partial<_98.QueryBaseDenomRequest>): _98.QueryBaseDenomRequest;
                fromAmino(object: _98.QueryBaseDenomRequestAmino): _98.QueryBaseDenomRequest;
                toAmino(message: _98.QueryBaseDenomRequest): _98.QueryBaseDenomRequestAmino;
                fromAminoMsg(object: _98.QueryBaseDenomRequestAminoMsg): _98.QueryBaseDenomRequest;
                toAminoMsg(message: _98.QueryBaseDenomRequest): _98.QueryBaseDenomRequestAminoMsg;
                fromProtoMsg(message: _98.QueryBaseDenomRequestProtoMsg): _98.QueryBaseDenomRequest;
                toProto(message: _98.QueryBaseDenomRequest): Uint8Array;
                toProtoMsg(message: _98.QueryBaseDenomRequest): _98.QueryBaseDenomRequestProtoMsg;
            };
            QueryBaseDenomResponse: {
                typeUrl: string;
                encode(message: _98.QueryBaseDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryBaseDenomResponse;
                fromPartial(object: Partial<_98.QueryBaseDenomResponse>): _98.QueryBaseDenomResponse;
                fromAmino(object: _98.QueryBaseDenomResponseAmino): _98.QueryBaseDenomResponse;
                toAmino(message: _98.QueryBaseDenomResponse): _98.QueryBaseDenomResponseAmino;
                fromAminoMsg(object: _98.QueryBaseDenomResponseAminoMsg): _98.QueryBaseDenomResponse;
                toAminoMsg(message: _98.QueryBaseDenomResponse): _98.QueryBaseDenomResponseAminoMsg;
                fromProtoMsg(message: _98.QueryBaseDenomResponseProtoMsg): _98.QueryBaseDenomResponse;
                toProto(message: _98.QueryBaseDenomResponse): Uint8Array;
                toProtoMsg(message: _98.QueryBaseDenomResponse): _98.QueryBaseDenomResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _97.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.GenesisState;
                fromPartial(object: Partial<_97.GenesisState>): _97.GenesisState;
                fromAmino(object: _97.GenesisStateAmino): _97.GenesisState;
                toAmino(message: _97.GenesisState): _97.GenesisStateAmino;
                fromAminoMsg(object: _97.GenesisStateAminoMsg): _97.GenesisState;
                toAminoMsg(message: _97.GenesisState): _97.GenesisStateAminoMsg;
                fromProtoMsg(message: _97.GenesisStateProtoMsg): _97.GenesisState;
                toProto(message: _97.GenesisState): Uint8Array;
                toProtoMsg(message: _97.GenesisState): _97.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _97.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.Balance;
                fromPartial(object: Partial<_97.Balance>): _97.Balance;
                fromAmino(object: _97.BalanceAmino): _97.Balance;
                toAmino(message: _97.Balance): _97.BalanceAmino;
                fromAminoMsg(object: _97.BalanceAminoMsg): _97.Balance;
                toAminoMsg(message: _97.Balance): _97.BalanceAminoMsg;
                fromProtoMsg(message: _97.BalanceProtoMsg): _97.Balance;
                toProto(message: _97.Balance): Uint8Array;
                toProtoMsg(message: _97.Balance): _97.BalanceProtoMsg;
            };
            GenesisSupplyOffset: {
                typeUrl: string;
                encode(message: _97.GenesisSupplyOffset, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.GenesisSupplyOffset;
                fromPartial(object: Partial<_97.GenesisSupplyOffset>): _97.GenesisSupplyOffset;
                fromAmino(object: _97.GenesisSupplyOffsetAmino): _97.GenesisSupplyOffset;
                toAmino(message: _97.GenesisSupplyOffset): _97.GenesisSupplyOffsetAmino;
                fromAminoMsg(object: _97.GenesisSupplyOffsetAminoMsg): _97.GenesisSupplyOffset;
                toAminoMsg(message: _97.GenesisSupplyOffset): _97.GenesisSupplyOffsetAminoMsg;
                fromProtoMsg(message: _97.GenesisSupplyOffsetProtoMsg): _97.GenesisSupplyOffset;
                toProto(message: _97.GenesisSupplyOffset): Uint8Array;
                toProtoMsg(message: _97.GenesisSupplyOffset): _97.GenesisSupplyOffsetProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _96.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.Params;
                fromPartial(object: Partial<_96.Params>): _96.Params;
                fromAmino(object: _96.ParamsAmino): _96.Params;
                toAmino(message: _96.Params): _96.ParamsAmino;
                fromAminoMsg(object: _96.ParamsAminoMsg): _96.Params;
                toAminoMsg(message: _96.Params): _96.ParamsAminoMsg;
                fromProtoMsg(message: _96.ParamsProtoMsg): _96.Params;
                toProto(message: _96.Params): Uint8Array;
                toProtoMsg(message: _96.Params): _96.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _96.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.SendEnabled;
                fromPartial(object: Partial<_96.SendEnabled>): _96.SendEnabled;
                fromAmino(object: _96.SendEnabledAmino): _96.SendEnabled;
                toAmino(message: _96.SendEnabled): _96.SendEnabledAmino;
                fromAminoMsg(object: _96.SendEnabledAminoMsg): _96.SendEnabled;
                toAminoMsg(message: _96.SendEnabled): _96.SendEnabledAminoMsg;
                fromProtoMsg(message: _96.SendEnabledProtoMsg): _96.SendEnabled;
                toProto(message: _96.SendEnabled): Uint8Array;
                toProtoMsg(message: _96.SendEnabled): _96.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _96.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.Input;
                fromPartial(object: Partial<_96.Input>): _96.Input;
                fromAmino(object: _96.InputAmino): _96.Input;
                toAmino(message: _96.Input): _96.InputAmino;
                fromAminoMsg(object: _96.InputAminoMsg): _96.Input;
                toAminoMsg(message: _96.Input): _96.InputAminoMsg;
                fromProtoMsg(message: _96.InputProtoMsg): _96.Input;
                toProto(message: _96.Input): Uint8Array;
                toProtoMsg(message: _96.Input): _96.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _96.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.Output;
                fromPartial(object: Partial<_96.Output>): _96.Output;
                fromAmino(object: _96.OutputAmino): _96.Output;
                toAmino(message: _96.Output): _96.OutputAmino;
                fromAminoMsg(object: _96.OutputAminoMsg): _96.Output;
                toAminoMsg(message: _96.Output): _96.OutputAminoMsg;
                fromProtoMsg(message: _96.OutputProtoMsg): _96.Output;
                toProto(message: _96.Output): Uint8Array;
                toProtoMsg(message: _96.Output): _96.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _96.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.Supply;
                fromPartial(object: Partial<_96.Supply>): _96.Supply;
                fromAmino(object: _96.SupplyAmino): _96.Supply;
                toAmino(message: _96.Supply): _96.SupplyAmino;
                fromAminoMsg(object: _96.SupplyAminoMsg): _96.Supply;
                toAminoMsg(message: _96.Supply): _96.SupplyAminoMsg;
                fromProtoMsg(message: _96.SupplyProtoMsg): _96.Supply;
                toProto(message: _96.Supply): Uint8Array;
                toProtoMsg(message: _96.Supply): _96.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _96.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.DenomUnit;
                fromPartial(object: Partial<_96.DenomUnit>): _96.DenomUnit;
                fromAmino(object: _96.DenomUnitAmino): _96.DenomUnit;
                toAmino(message: _96.DenomUnit): _96.DenomUnitAmino;
                fromAminoMsg(object: _96.DenomUnitAminoMsg): _96.DenomUnit;
                toAminoMsg(message: _96.DenomUnit): _96.DenomUnitAminoMsg;
                fromProtoMsg(message: _96.DenomUnitProtoMsg): _96.DenomUnit;
                toProto(message: _96.DenomUnit): Uint8Array;
                toProtoMsg(message: _96.DenomUnit): _96.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _96.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.Metadata;
                fromPartial(object: Partial<_96.Metadata>): _96.Metadata;
                fromAmino(object: _96.MetadataAmino): _96.Metadata;
                toAmino(message: _96.Metadata): _96.MetadataAmino;
                fromAminoMsg(object: _96.MetadataAminoMsg): _96.Metadata;
                toAminoMsg(message: _96.Metadata): _96.MetadataAminoMsg;
                fromProtoMsg(message: _96.MetadataProtoMsg): _96.Metadata;
                toProto(message: _96.Metadata): Uint8Array;
                toProtoMsg(message: _96.Metadata): _96.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _95.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.SendAuthorization;
                fromPartial(object: Partial<_95.SendAuthorization>): _95.SendAuthorization;
                fromAmino(object: _95.SendAuthorizationAmino): _95.SendAuthorization;
                toAmino(message: _95.SendAuthorization): _95.SendAuthorizationAmino;
                fromAminoMsg(object: _95.SendAuthorizationAminoMsg): _95.SendAuthorization;
                toAminoMsg(message: _95.SendAuthorization): _95.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _95.SendAuthorizationProtoMsg): _95.SendAuthorization;
                toProto(message: _95.SendAuthorization): Uint8Array;
                toProtoMsg(message: _95.SendAuthorization): _95.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _100.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.TxResponse;
                    fromPartial(object: Partial<_100.TxResponse>): _100.TxResponse;
                    fromAmino(object: _100.TxResponseAmino): _100.TxResponse;
                    toAmino(message: _100.TxResponse): _100.TxResponseAmino;
                    fromAminoMsg(object: _100.TxResponseAminoMsg): _100.TxResponse;
                    toAminoMsg(message: _100.TxResponse): _100.TxResponseAminoMsg;
                    fromProtoMsg(message: _100.TxResponseProtoMsg): _100.TxResponse;
                    toProto(message: _100.TxResponse): Uint8Array;
                    toProtoMsg(message: _100.TxResponse): _100.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _100.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.ABCIMessageLog;
                    fromPartial(object: Partial<_100.ABCIMessageLog>): _100.ABCIMessageLog;
                    fromAmino(object: _100.ABCIMessageLogAmino): _100.ABCIMessageLog;
                    toAmino(message: _100.ABCIMessageLog): _100.ABCIMessageLogAmino;
                    fromAminoMsg(object: _100.ABCIMessageLogAminoMsg): _100.ABCIMessageLog;
                    toAminoMsg(message: _100.ABCIMessageLog): _100.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _100.ABCIMessageLogProtoMsg): _100.ABCIMessageLog;
                    toProto(message: _100.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _100.ABCIMessageLog): _100.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _100.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.StringEvent;
                    fromPartial(object: Partial<_100.StringEvent>): _100.StringEvent;
                    fromAmino(object: _100.StringEventAmino): _100.StringEvent;
                    toAmino(message: _100.StringEvent): _100.StringEventAmino;
                    fromAminoMsg(object: _100.StringEventAminoMsg): _100.StringEvent;
                    toAminoMsg(message: _100.StringEvent): _100.StringEventAminoMsg;
                    fromProtoMsg(message: _100.StringEventProtoMsg): _100.StringEvent;
                    toProto(message: _100.StringEvent): Uint8Array;
                    toProtoMsg(message: _100.StringEvent): _100.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _100.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.Attribute;
                    fromPartial(object: Partial<_100.Attribute>): _100.Attribute;
                    fromAmino(object: _100.AttributeAmino): _100.Attribute;
                    toAmino(message: _100.Attribute): _100.AttributeAmino;
                    fromAminoMsg(object: _100.AttributeAminoMsg): _100.Attribute;
                    toAminoMsg(message: _100.Attribute): _100.AttributeAminoMsg;
                    fromProtoMsg(message: _100.AttributeProtoMsg): _100.Attribute;
                    toProto(message: _100.Attribute): Uint8Array;
                    toProtoMsg(message: _100.Attribute): _100.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _100.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.GasInfo;
                    fromPartial(object: Partial<_100.GasInfo>): _100.GasInfo;
                    fromAmino(object: _100.GasInfoAmino): _100.GasInfo;
                    toAmino(message: _100.GasInfo): _100.GasInfoAmino;
                    fromAminoMsg(object: _100.GasInfoAminoMsg): _100.GasInfo;
                    toAminoMsg(message: _100.GasInfo): _100.GasInfoAminoMsg;
                    fromProtoMsg(message: _100.GasInfoProtoMsg): _100.GasInfo;
                    toProto(message: _100.GasInfo): Uint8Array;
                    toProtoMsg(message: _100.GasInfo): _100.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _100.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.Result;
                    fromPartial(object: Partial<_100.Result>): _100.Result;
                    fromAmino(object: _100.ResultAmino): _100.Result;
                    toAmino(message: _100.Result): _100.ResultAmino;
                    fromAminoMsg(object: _100.ResultAminoMsg): _100.Result;
                    toAminoMsg(message: _100.Result): _100.ResultAminoMsg;
                    fromProtoMsg(message: _100.ResultProtoMsg): _100.Result;
                    toProto(message: _100.Result): Uint8Array;
                    toProtoMsg(message: _100.Result): _100.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _100.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.SimulationResponse;
                    fromPartial(object: Partial<_100.SimulationResponse>): _100.SimulationResponse;
                    fromAmino(object: _100.SimulationResponseAmino): _100.SimulationResponse;
                    toAmino(message: _100.SimulationResponse): _100.SimulationResponseAmino;
                    fromAminoMsg(object: _100.SimulationResponseAminoMsg): _100.SimulationResponse;
                    toAminoMsg(message: _100.SimulationResponse): _100.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _100.SimulationResponseProtoMsg): _100.SimulationResponse;
                    toProto(message: _100.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _100.SimulationResponse): _100.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _100.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.MsgData;
                    fromPartial(object: Partial<_100.MsgData>): _100.MsgData;
                    fromAmino(object: _100.MsgDataAmino): _100.MsgData;
                    toAmino(message: _100.MsgData): _100.MsgDataAmino;
                    fromAminoMsg(object: _100.MsgDataAminoMsg): _100.MsgData;
                    toAminoMsg(message: _100.MsgData): _100.MsgDataAminoMsg;
                    fromProtoMsg(message: _100.MsgDataProtoMsg): _100.MsgData;
                    toProto(message: _100.MsgData): Uint8Array;
                    toProtoMsg(message: _100.MsgData): _100.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _100.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.TxMsgData;
                    fromPartial(object: Partial<_100.TxMsgData>): _100.TxMsgData;
                    fromAmino(object: _100.TxMsgDataAmino): _100.TxMsgData;
                    toAmino(message: _100.TxMsgData): _100.TxMsgDataAmino;
                    fromAminoMsg(object: _100.TxMsgDataAminoMsg): _100.TxMsgData;
                    toAminoMsg(message: _100.TxMsgData): _100.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _100.TxMsgDataProtoMsg): _100.TxMsgData;
                    toProto(message: _100.TxMsgData): Uint8Array;
                    toProtoMsg(message: _100.TxMsgData): _100.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _100.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.SearchTxsResult;
                    fromPartial(object: Partial<_100.SearchTxsResult>): _100.SearchTxsResult;
                    fromAmino(object: _100.SearchTxsResultAmino): _100.SearchTxsResult;
                    toAmino(message: _100.SearchTxsResult): _100.SearchTxsResultAmino;
                    fromAminoMsg(object: _100.SearchTxsResultAminoMsg): _100.SearchTxsResult;
                    toAminoMsg(message: _100.SearchTxsResult): _100.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _100.SearchTxsResultProtoMsg): _100.SearchTxsResult;
                    toProto(message: _100.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _100.SearchTxsResult): _100.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _101.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _101.Pairs;
                    fromPartial(object: Partial<_101.Pairs>): _101.Pairs;
                    fromAmino(object: _101.PairsAmino): _101.Pairs;
                    toAmino(message: _101.Pairs): _101.PairsAmino;
                    fromAminoMsg(object: _101.PairsAminoMsg): _101.Pairs;
                    toAminoMsg(message: _101.Pairs): _101.PairsAminoMsg;
                    fromProtoMsg(message: _101.PairsProtoMsg): _101.Pairs;
                    toProto(message: _101.Pairs): Uint8Array;
                    toProtoMsg(message: _101.Pairs): _101.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _101.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _101.Pair;
                    fromPartial(object: Partial<_101.Pair>): _101.Pair;
                    fromAmino(object: _101.PairAmino): _101.Pair;
                    toAmino(message: _101.Pair): _101.PairAmino;
                    fromAminoMsg(object: _101.PairAminoMsg): _101.Pair;
                    toAminoMsg(message: _101.Pair): _101.PairAminoMsg;
                    fromProtoMsg(message: _101.PairProtoMsg): _101.Pair;
                    toProto(message: _101.Pair): Uint8Array;
                    toProtoMsg(message: _101.Pair): _101.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _302.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _102.ConfigRequest): Promise<_102.ConfigResponse>;
                };
                LCDQueryClient: typeof _287.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _102.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _102.ConfigRequest;
                    fromPartial(_: Partial<_102.ConfigRequest>): _102.ConfigRequest;
                    fromAmino(_: _102.ConfigRequestAmino): _102.ConfigRequest;
                    toAmino(_: _102.ConfigRequest): _102.ConfigRequestAmino;
                    fromAminoMsg(object: _102.ConfigRequestAminoMsg): _102.ConfigRequest;
                    toAminoMsg(message: _102.ConfigRequest): _102.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _102.ConfigRequestProtoMsg): _102.ConfigRequest;
                    toProto(message: _102.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _102.ConfigRequest): _102.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _102.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _102.ConfigResponse;
                    fromPartial(object: Partial<_102.ConfigResponse>): _102.ConfigResponse;
                    fromAmino(object: _102.ConfigResponseAmino): _102.ConfigResponse;
                    toAmino(message: _102.ConfigResponse): _102.ConfigResponseAmino;
                    fromAminoMsg(object: _102.ConfigResponseAminoMsg): _102.ConfigResponse;
                    toAminoMsg(message: _102.ConfigResponse): _102.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _102.ConfigResponseProtoMsg): _102.ConfigResponse;
                    toProto(message: _102.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _102.ConfigResponse): _102.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _103.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _103.PageRequest;
                    fromPartial(object: Partial<_103.PageRequest>): _103.PageRequest;
                    fromAmino(object: _103.PageRequestAmino): _103.PageRequest;
                    toAmino(message: _103.PageRequest): _103.PageRequestAmino;
                    fromAminoMsg(object: _103.PageRequestAminoMsg): _103.PageRequest;
                    toAminoMsg(message: _103.PageRequest): _103.PageRequestAminoMsg;
                    fromProtoMsg(message: _103.PageRequestProtoMsg): _103.PageRequest;
                    toProto(message: _103.PageRequest): Uint8Array;
                    toProtoMsg(message: _103.PageRequest): _103.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _103.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _103.PageResponse;
                    fromPartial(object: Partial<_103.PageResponse>): _103.PageResponse;
                    fromAmino(object: _103.PageResponseAmino): _103.PageResponse;
                    toAmino(message: _103.PageResponse): _103.PageResponseAmino;
                    fromAminoMsg(object: _103.PageResponseAminoMsg): _103.PageResponse;
                    toAminoMsg(message: _103.PageResponse): _103.PageResponseAminoMsg;
                    fromProtoMsg(message: _103.PageResponseProtoMsg): _103.PageResponse;
                    toProto(message: _103.PageResponse): Uint8Array;
                    toProtoMsg(message: _103.PageResponse): _103.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _104.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _104.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_104.ListAllInterfacesRequest>): _104.ListAllInterfacesRequest;
                    fromAmino(_: _104.ListAllInterfacesRequestAmino): _104.ListAllInterfacesRequest;
                    toAmino(_: _104.ListAllInterfacesRequest): _104.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _104.ListAllInterfacesRequestAminoMsg): _104.ListAllInterfacesRequest;
                    toAminoMsg(message: _104.ListAllInterfacesRequest): _104.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _104.ListAllInterfacesRequestProtoMsg): _104.ListAllInterfacesRequest;
                    toProto(message: _104.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _104.ListAllInterfacesRequest): _104.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _104.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_104.ListAllInterfacesResponse>): _104.ListAllInterfacesResponse;
                    fromAmino(object: _104.ListAllInterfacesResponseAmino): _104.ListAllInterfacesResponse;
                    toAmino(message: _104.ListAllInterfacesResponse): _104.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _104.ListAllInterfacesResponseAminoMsg): _104.ListAllInterfacesResponse;
                    toAminoMsg(message: _104.ListAllInterfacesResponse): _104.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _104.ListAllInterfacesResponseProtoMsg): _104.ListAllInterfacesResponse;
                    toProto(message: _104.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _104.ListAllInterfacesResponse): _104.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _104.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.ListImplementationsRequest;
                    fromPartial(object: Partial<_104.ListImplementationsRequest>): _104.ListImplementationsRequest;
                    fromAmino(object: _104.ListImplementationsRequestAmino): _104.ListImplementationsRequest;
                    toAmino(message: _104.ListImplementationsRequest): _104.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _104.ListImplementationsRequestAminoMsg): _104.ListImplementationsRequest;
                    toAminoMsg(message: _104.ListImplementationsRequest): _104.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _104.ListImplementationsRequestProtoMsg): _104.ListImplementationsRequest;
                    toProto(message: _104.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _104.ListImplementationsRequest): _104.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _104.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.ListImplementationsResponse;
                    fromPartial(object: Partial<_104.ListImplementationsResponse>): _104.ListImplementationsResponse;
                    fromAmino(object: _104.ListImplementationsResponseAmino): _104.ListImplementationsResponse;
                    toAmino(message: _104.ListImplementationsResponse): _104.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _104.ListImplementationsResponseAminoMsg): _104.ListImplementationsResponse;
                    toAminoMsg(message: _104.ListImplementationsResponse): _104.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _104.ListImplementationsResponseProtoMsg): _104.ListImplementationsResponse;
                    toProto(message: _104.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _104.ListImplementationsResponse): _104.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _105.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.AppDescriptor;
                    fromPartial(object: Partial<_105.AppDescriptor>): _105.AppDescriptor;
                    fromAmino(object: _105.AppDescriptorAmino): _105.AppDescriptor;
                    toAmino(message: _105.AppDescriptor): _105.AppDescriptorAmino;
                    fromAminoMsg(object: _105.AppDescriptorAminoMsg): _105.AppDescriptor;
                    toAminoMsg(message: _105.AppDescriptor): _105.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _105.AppDescriptorProtoMsg): _105.AppDescriptor;
                    toProto(message: _105.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _105.AppDescriptor): _105.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _105.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.TxDescriptor;
                    fromPartial(object: Partial<_105.TxDescriptor>): _105.TxDescriptor;
                    fromAmino(object: _105.TxDescriptorAmino): _105.TxDescriptor;
                    toAmino(message: _105.TxDescriptor): _105.TxDescriptorAmino;
                    fromAminoMsg(object: _105.TxDescriptorAminoMsg): _105.TxDescriptor;
                    toAminoMsg(message: _105.TxDescriptor): _105.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _105.TxDescriptorProtoMsg): _105.TxDescriptor;
                    toProto(message: _105.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _105.TxDescriptor): _105.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _105.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.AuthnDescriptor;
                    fromPartial(object: Partial<_105.AuthnDescriptor>): _105.AuthnDescriptor;
                    fromAmino(object: _105.AuthnDescriptorAmino): _105.AuthnDescriptor;
                    toAmino(message: _105.AuthnDescriptor): _105.AuthnDescriptorAmino;
                    fromAminoMsg(object: _105.AuthnDescriptorAminoMsg): _105.AuthnDescriptor;
                    toAminoMsg(message: _105.AuthnDescriptor): _105.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _105.AuthnDescriptorProtoMsg): _105.AuthnDescriptor;
                    toProto(message: _105.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _105.AuthnDescriptor): _105.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _105.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.SigningModeDescriptor;
                    fromPartial(object: Partial<_105.SigningModeDescriptor>): _105.SigningModeDescriptor;
                    fromAmino(object: _105.SigningModeDescriptorAmino): _105.SigningModeDescriptor;
                    toAmino(message: _105.SigningModeDescriptor): _105.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _105.SigningModeDescriptorAminoMsg): _105.SigningModeDescriptor;
                    toAminoMsg(message: _105.SigningModeDescriptor): _105.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _105.SigningModeDescriptorProtoMsg): _105.SigningModeDescriptor;
                    toProto(message: _105.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _105.SigningModeDescriptor): _105.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _105.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.ChainDescriptor;
                    fromPartial(object: Partial<_105.ChainDescriptor>): _105.ChainDescriptor;
                    fromAmino(object: _105.ChainDescriptorAmino): _105.ChainDescriptor;
                    toAmino(message: _105.ChainDescriptor): _105.ChainDescriptorAmino;
                    fromAminoMsg(object: _105.ChainDescriptorAminoMsg): _105.ChainDescriptor;
                    toAminoMsg(message: _105.ChainDescriptor): _105.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _105.ChainDescriptorProtoMsg): _105.ChainDescriptor;
                    toProto(message: _105.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _105.ChainDescriptor): _105.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _105.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.CodecDescriptor;
                    fromPartial(object: Partial<_105.CodecDescriptor>): _105.CodecDescriptor;
                    fromAmino(object: _105.CodecDescriptorAmino): _105.CodecDescriptor;
                    toAmino(message: _105.CodecDescriptor): _105.CodecDescriptorAmino;
                    fromAminoMsg(object: _105.CodecDescriptorAminoMsg): _105.CodecDescriptor;
                    toAminoMsg(message: _105.CodecDescriptor): _105.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _105.CodecDescriptorProtoMsg): _105.CodecDescriptor;
                    toProto(message: _105.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _105.CodecDescriptor): _105.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _105.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.InterfaceDescriptor;
                    fromPartial(object: Partial<_105.InterfaceDescriptor>): _105.InterfaceDescriptor;
                    fromAmino(object: _105.InterfaceDescriptorAmino): _105.InterfaceDescriptor;
                    toAmino(message: _105.InterfaceDescriptor): _105.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _105.InterfaceDescriptorAminoMsg): _105.InterfaceDescriptor;
                    toAminoMsg(message: _105.InterfaceDescriptor): _105.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _105.InterfaceDescriptorProtoMsg): _105.InterfaceDescriptor;
                    toProto(message: _105.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _105.InterfaceDescriptor): _105.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _105.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_105.InterfaceImplementerDescriptor>): _105.InterfaceImplementerDescriptor;
                    fromAmino(object: _105.InterfaceImplementerDescriptorAmino): _105.InterfaceImplementerDescriptor;
                    toAmino(message: _105.InterfaceImplementerDescriptor): _105.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _105.InterfaceImplementerDescriptorAminoMsg): _105.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _105.InterfaceImplementerDescriptor): _105.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _105.InterfaceImplementerDescriptorProtoMsg): _105.InterfaceImplementerDescriptor;
                    toProto(message: _105.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _105.InterfaceImplementerDescriptor): _105.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _105.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_105.InterfaceAcceptingMessageDescriptor>): _105.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _105.InterfaceAcceptingMessageDescriptorAmino): _105.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _105.InterfaceAcceptingMessageDescriptor): _105.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _105.InterfaceAcceptingMessageDescriptorAminoMsg): _105.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _105.InterfaceAcceptingMessageDescriptor): _105.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _105.InterfaceAcceptingMessageDescriptorProtoMsg): _105.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _105.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _105.InterfaceAcceptingMessageDescriptor): _105.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _105.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.ConfigurationDescriptor;
                    fromPartial(object: Partial<_105.ConfigurationDescriptor>): _105.ConfigurationDescriptor;
                    fromAmino(object: _105.ConfigurationDescriptorAmino): _105.ConfigurationDescriptor;
                    toAmino(message: _105.ConfigurationDescriptor): _105.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _105.ConfigurationDescriptorAminoMsg): _105.ConfigurationDescriptor;
                    toAminoMsg(message: _105.ConfigurationDescriptor): _105.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _105.ConfigurationDescriptorProtoMsg): _105.ConfigurationDescriptor;
                    toProto(message: _105.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _105.ConfigurationDescriptor): _105.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _105.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.MsgDescriptor;
                    fromPartial(object: Partial<_105.MsgDescriptor>): _105.MsgDescriptor;
                    fromAmino(object: _105.MsgDescriptorAmino): _105.MsgDescriptor;
                    toAmino(message: _105.MsgDescriptor): _105.MsgDescriptorAmino;
                    fromAminoMsg(object: _105.MsgDescriptorAminoMsg): _105.MsgDescriptor;
                    toAminoMsg(message: _105.MsgDescriptor): _105.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _105.MsgDescriptorProtoMsg): _105.MsgDescriptor;
                    toProto(message: _105.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _105.MsgDescriptor): _105.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _105.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _105.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_105.GetAuthnDescriptorRequest>): _105.GetAuthnDescriptorRequest;
                    fromAmino(_: _105.GetAuthnDescriptorRequestAmino): _105.GetAuthnDescriptorRequest;
                    toAmino(_: _105.GetAuthnDescriptorRequest): _105.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _105.GetAuthnDescriptorRequestAminoMsg): _105.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _105.GetAuthnDescriptorRequest): _105.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _105.GetAuthnDescriptorRequestProtoMsg): _105.GetAuthnDescriptorRequest;
                    toProto(message: _105.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _105.GetAuthnDescriptorRequest): _105.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _105.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_105.GetAuthnDescriptorResponse>): _105.GetAuthnDescriptorResponse;
                    fromAmino(object: _105.GetAuthnDescriptorResponseAmino): _105.GetAuthnDescriptorResponse;
                    toAmino(message: _105.GetAuthnDescriptorResponse): _105.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _105.GetAuthnDescriptorResponseAminoMsg): _105.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _105.GetAuthnDescriptorResponse): _105.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _105.GetAuthnDescriptorResponseProtoMsg): _105.GetAuthnDescriptorResponse;
                    toProto(message: _105.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _105.GetAuthnDescriptorResponse): _105.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _105.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _105.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_105.GetChainDescriptorRequest>): _105.GetChainDescriptorRequest;
                    fromAmino(_: _105.GetChainDescriptorRequestAmino): _105.GetChainDescriptorRequest;
                    toAmino(_: _105.GetChainDescriptorRequest): _105.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _105.GetChainDescriptorRequestAminoMsg): _105.GetChainDescriptorRequest;
                    toAminoMsg(message: _105.GetChainDescriptorRequest): _105.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _105.GetChainDescriptorRequestProtoMsg): _105.GetChainDescriptorRequest;
                    toProto(message: _105.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _105.GetChainDescriptorRequest): _105.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _105.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_105.GetChainDescriptorResponse>): _105.GetChainDescriptorResponse;
                    fromAmino(object: _105.GetChainDescriptorResponseAmino): _105.GetChainDescriptorResponse;
                    toAmino(message: _105.GetChainDescriptorResponse): _105.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _105.GetChainDescriptorResponseAminoMsg): _105.GetChainDescriptorResponse;
                    toAminoMsg(message: _105.GetChainDescriptorResponse): _105.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _105.GetChainDescriptorResponseProtoMsg): _105.GetChainDescriptorResponse;
                    toProto(message: _105.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _105.GetChainDescriptorResponse): _105.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _105.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _105.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_105.GetCodecDescriptorRequest>): _105.GetCodecDescriptorRequest;
                    fromAmino(_: _105.GetCodecDescriptorRequestAmino): _105.GetCodecDescriptorRequest;
                    toAmino(_: _105.GetCodecDescriptorRequest): _105.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _105.GetCodecDescriptorRequestAminoMsg): _105.GetCodecDescriptorRequest;
                    toAminoMsg(message: _105.GetCodecDescriptorRequest): _105.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _105.GetCodecDescriptorRequestProtoMsg): _105.GetCodecDescriptorRequest;
                    toProto(message: _105.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _105.GetCodecDescriptorRequest): _105.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _105.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_105.GetCodecDescriptorResponse>): _105.GetCodecDescriptorResponse;
                    fromAmino(object: _105.GetCodecDescriptorResponseAmino): _105.GetCodecDescriptorResponse;
                    toAmino(message: _105.GetCodecDescriptorResponse): _105.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _105.GetCodecDescriptorResponseAminoMsg): _105.GetCodecDescriptorResponse;
                    toAminoMsg(message: _105.GetCodecDescriptorResponse): _105.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _105.GetCodecDescriptorResponseProtoMsg): _105.GetCodecDescriptorResponse;
                    toProto(message: _105.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _105.GetCodecDescriptorResponse): _105.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _105.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _105.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_105.GetConfigurationDescriptorRequest>): _105.GetConfigurationDescriptorRequest;
                    fromAmino(_: _105.GetConfigurationDescriptorRequestAmino): _105.GetConfigurationDescriptorRequest;
                    toAmino(_: _105.GetConfigurationDescriptorRequest): _105.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _105.GetConfigurationDescriptorRequestAminoMsg): _105.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _105.GetConfigurationDescriptorRequest): _105.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _105.GetConfigurationDescriptorRequestProtoMsg): _105.GetConfigurationDescriptorRequest;
                    toProto(message: _105.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _105.GetConfigurationDescriptorRequest): _105.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _105.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_105.GetConfigurationDescriptorResponse>): _105.GetConfigurationDescriptorResponse;
                    fromAmino(object: _105.GetConfigurationDescriptorResponseAmino): _105.GetConfigurationDescriptorResponse;
                    toAmino(message: _105.GetConfigurationDescriptorResponse): _105.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _105.GetConfigurationDescriptorResponseAminoMsg): _105.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _105.GetConfigurationDescriptorResponse): _105.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _105.GetConfigurationDescriptorResponseProtoMsg): _105.GetConfigurationDescriptorResponse;
                    toProto(message: _105.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _105.GetConfigurationDescriptorResponse): _105.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _105.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _105.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_105.GetQueryServicesDescriptorRequest>): _105.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _105.GetQueryServicesDescriptorRequestAmino): _105.GetQueryServicesDescriptorRequest;
                    toAmino(_: _105.GetQueryServicesDescriptorRequest): _105.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _105.GetQueryServicesDescriptorRequestAminoMsg): _105.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _105.GetQueryServicesDescriptorRequest): _105.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _105.GetQueryServicesDescriptorRequestProtoMsg): _105.GetQueryServicesDescriptorRequest;
                    toProto(message: _105.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _105.GetQueryServicesDescriptorRequest): _105.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _105.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_105.GetQueryServicesDescriptorResponse>): _105.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _105.GetQueryServicesDescriptorResponseAmino): _105.GetQueryServicesDescriptorResponse;
                    toAmino(message: _105.GetQueryServicesDescriptorResponse): _105.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _105.GetQueryServicesDescriptorResponseAminoMsg): _105.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _105.GetQueryServicesDescriptorResponse): _105.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _105.GetQueryServicesDescriptorResponseProtoMsg): _105.GetQueryServicesDescriptorResponse;
                    toProto(message: _105.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _105.GetQueryServicesDescriptorResponse): _105.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _105.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _105.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_105.GetTxDescriptorRequest>): _105.GetTxDescriptorRequest;
                    fromAmino(_: _105.GetTxDescriptorRequestAmino): _105.GetTxDescriptorRequest;
                    toAmino(_: _105.GetTxDescriptorRequest): _105.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _105.GetTxDescriptorRequestAminoMsg): _105.GetTxDescriptorRequest;
                    toAminoMsg(message: _105.GetTxDescriptorRequest): _105.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _105.GetTxDescriptorRequestProtoMsg): _105.GetTxDescriptorRequest;
                    toProto(message: _105.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _105.GetTxDescriptorRequest): _105.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _105.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_105.GetTxDescriptorResponse>): _105.GetTxDescriptorResponse;
                    fromAmino(object: _105.GetTxDescriptorResponseAmino): _105.GetTxDescriptorResponse;
                    toAmino(message: _105.GetTxDescriptorResponse): _105.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _105.GetTxDescriptorResponseAminoMsg): _105.GetTxDescriptorResponse;
                    toAminoMsg(message: _105.GetTxDescriptorResponse): _105.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _105.GetTxDescriptorResponseProtoMsg): _105.GetTxDescriptorResponse;
                    toProto(message: _105.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _105.GetTxDescriptorResponse): _105.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _105.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.QueryServicesDescriptor;
                    fromPartial(object: Partial<_105.QueryServicesDescriptor>): _105.QueryServicesDescriptor;
                    fromAmino(object: _105.QueryServicesDescriptorAmino): _105.QueryServicesDescriptor;
                    toAmino(message: _105.QueryServicesDescriptor): _105.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _105.QueryServicesDescriptorAminoMsg): _105.QueryServicesDescriptor;
                    toAminoMsg(message: _105.QueryServicesDescriptor): _105.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _105.QueryServicesDescriptorProtoMsg): _105.QueryServicesDescriptor;
                    toProto(message: _105.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _105.QueryServicesDescriptor): _105.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _105.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.QueryServiceDescriptor;
                    fromPartial(object: Partial<_105.QueryServiceDescriptor>): _105.QueryServiceDescriptor;
                    fromAmino(object: _105.QueryServiceDescriptorAmino): _105.QueryServiceDescriptor;
                    toAmino(message: _105.QueryServiceDescriptor): _105.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _105.QueryServiceDescriptorAminoMsg): _105.QueryServiceDescriptor;
                    toAminoMsg(message: _105.QueryServiceDescriptor): _105.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _105.QueryServiceDescriptorProtoMsg): _105.QueryServiceDescriptor;
                    toProto(message: _105.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _105.QueryServiceDescriptor): _105.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _105.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.QueryMethodDescriptor;
                    fromPartial(object: Partial<_105.QueryMethodDescriptor>): _105.QueryMethodDescriptor;
                    fromAmino(object: _105.QueryMethodDescriptorAmino): _105.QueryMethodDescriptor;
                    toAmino(message: _105.QueryMethodDescriptor): _105.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _105.QueryMethodDescriptorAminoMsg): _105.QueryMethodDescriptor;
                    toAminoMsg(message: _105.QueryMethodDescriptor): _105.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _105.QueryMethodDescriptorProtoMsg): _105.QueryMethodDescriptor;
                    toProto(message: _105.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _105.QueryMethodDescriptor): _105.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _106.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _106.Snapshot;
                    fromPartial(object: Partial<_106.Snapshot>): _106.Snapshot;
                    fromAmino(object: _106.SnapshotAmino): _106.Snapshot;
                    toAmino(message: _106.Snapshot): _106.SnapshotAmino;
                    fromAminoMsg(object: _106.SnapshotAminoMsg): _106.Snapshot;
                    toAminoMsg(message: _106.Snapshot): _106.SnapshotAminoMsg;
                    fromProtoMsg(message: _106.SnapshotProtoMsg): _106.Snapshot;
                    toProto(message: _106.Snapshot): Uint8Array;
                    toProtoMsg(message: _106.Snapshot): _106.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _106.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _106.Metadata;
                    fromPartial(object: Partial<_106.Metadata>): _106.Metadata;
                    fromAmino(object: _106.MetadataAmino): _106.Metadata;
                    toAmino(message: _106.Metadata): _106.MetadataAmino;
                    fromAminoMsg(object: _106.MetadataAminoMsg): _106.Metadata;
                    toAminoMsg(message: _106.Metadata): _106.MetadataAminoMsg;
                    fromProtoMsg(message: _106.MetadataProtoMsg): _106.Metadata;
                    toProto(message: _106.Metadata): Uint8Array;
                    toProtoMsg(message: _106.Metadata): _106.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _106.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _106.SnapshotItem;
                    fromPartial(object: Partial<_106.SnapshotItem>): _106.SnapshotItem;
                    fromAmino(object: _106.SnapshotItemAmino): _106.SnapshotItem;
                    toAmino(message: _106.SnapshotItem): _106.SnapshotItemAmino;
                    fromAminoMsg(object: _106.SnapshotItemAminoMsg): _106.SnapshotItem;
                    toAminoMsg(message: _106.SnapshotItem): _106.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _106.SnapshotItemProtoMsg): _106.SnapshotItem;
                    toProto(message: _106.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _106.SnapshotItem): _106.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _106.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _106.SnapshotStoreItem;
                    fromPartial(object: Partial<_106.SnapshotStoreItem>): _106.SnapshotStoreItem;
                    fromAmino(object: _106.SnapshotStoreItemAmino): _106.SnapshotStoreItem;
                    toAmino(message: _106.SnapshotStoreItem): _106.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _106.SnapshotStoreItemAminoMsg): _106.SnapshotStoreItem;
                    toAminoMsg(message: _106.SnapshotStoreItem): _106.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _106.SnapshotStoreItemProtoMsg): _106.SnapshotStoreItem;
                    toProto(message: _106.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _106.SnapshotStoreItem): _106.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _106.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _106.SnapshotIAVLItem;
                    fromPartial(object: Partial<_106.SnapshotIAVLItem>): _106.SnapshotIAVLItem;
                    fromAmino(object: _106.SnapshotIAVLItemAmino): _106.SnapshotIAVLItem;
                    toAmino(message: _106.SnapshotIAVLItem): _106.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _106.SnapshotIAVLItemAminoMsg): _106.SnapshotIAVLItem;
                    toAminoMsg(message: _106.SnapshotIAVLItem): _106.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _106.SnapshotIAVLItemProtoMsg): _106.SnapshotIAVLItem;
                    toProto(message: _106.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _106.SnapshotIAVLItem): _106.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _106.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _106.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_106.SnapshotExtensionMeta>): _106.SnapshotExtensionMeta;
                    fromAmino(object: _106.SnapshotExtensionMetaAmino): _106.SnapshotExtensionMeta;
                    toAmino(message: _106.SnapshotExtensionMeta): _106.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _106.SnapshotExtensionMetaAminoMsg): _106.SnapshotExtensionMeta;
                    toAminoMsg(message: _106.SnapshotExtensionMeta): _106.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _106.SnapshotExtensionMetaProtoMsg): _106.SnapshotExtensionMeta;
                    toProto(message: _106.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _106.SnapshotExtensionMeta): _106.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _106.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _106.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_106.SnapshotExtensionPayload>): _106.SnapshotExtensionPayload;
                    fromAmino(object: _106.SnapshotExtensionPayloadAmino): _106.SnapshotExtensionPayload;
                    toAmino(message: _106.SnapshotExtensionPayload): _106.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _106.SnapshotExtensionPayloadAminoMsg): _106.SnapshotExtensionPayload;
                    toAminoMsg(message: _106.SnapshotExtensionPayload): _106.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _106.SnapshotExtensionPayloadProtoMsg): _106.SnapshotExtensionPayload;
                    toProto(message: _106.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _106.SnapshotExtensionPayload): _106.SnapshotExtensionPayloadProtoMsg;
                };
                SnapshotAppVersion: {
                    typeUrl: string;
                    encode(message: _106.SnapshotAppVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _106.SnapshotAppVersion;
                    fromPartial(object: Partial<_106.SnapshotAppVersion>): _106.SnapshotAppVersion;
                    fromAmino(object: _106.SnapshotAppVersionAmino): _106.SnapshotAppVersion;
                    toAmino(message: _106.SnapshotAppVersion): _106.SnapshotAppVersionAmino;
                    fromAminoMsg(object: _106.SnapshotAppVersionAminoMsg): _106.SnapshotAppVersion;
                    toAminoMsg(message: _106.SnapshotAppVersion): _106.SnapshotAppVersionAminoMsg;
                    fromProtoMsg(message: _106.SnapshotAppVersionProtoMsg): _106.SnapshotAppVersion;
                    toProto(message: _106.SnapshotAppVersion): Uint8Array;
                    toProtoMsg(message: _106.SnapshotAppVersion): _106.SnapshotAppVersionProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _108.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.StoreKVPair;
                    fromPartial(object: Partial<_108.StoreKVPair>): _108.StoreKVPair;
                    fromAmino(object: _108.StoreKVPairAmino): _108.StoreKVPair;
                    toAmino(message: _108.StoreKVPair): _108.StoreKVPairAmino;
                    fromAminoMsg(object: _108.StoreKVPairAminoMsg): _108.StoreKVPair;
                    toAminoMsg(message: _108.StoreKVPair): _108.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _108.StoreKVPairProtoMsg): _108.StoreKVPair;
                    toProto(message: _108.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _108.StoreKVPair): _108.StoreKVPairProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _107.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _107.CommitInfo;
                    fromPartial(object: Partial<_107.CommitInfo>): _107.CommitInfo;
                    fromAmino(object: _107.CommitInfoAmino): _107.CommitInfo;
                    toAmino(message: _107.CommitInfo): _107.CommitInfoAmino;
                    fromAminoMsg(object: _107.CommitInfoAminoMsg): _107.CommitInfo;
                    toAminoMsg(message: _107.CommitInfo): _107.CommitInfoAminoMsg;
                    fromProtoMsg(message: _107.CommitInfoProtoMsg): _107.CommitInfo;
                    toProto(message: _107.CommitInfo): Uint8Array;
                    toProtoMsg(message: _107.CommitInfo): _107.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _107.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _107.StoreInfo;
                    fromPartial(object: Partial<_107.StoreInfo>): _107.StoreInfo;
                    fromAmino(object: _107.StoreInfoAmino): _107.StoreInfo;
                    toAmino(message: _107.StoreInfo): _107.StoreInfoAmino;
                    fromAminoMsg(object: _107.StoreInfoAminoMsg): _107.StoreInfo;
                    toAminoMsg(message: _107.StoreInfo): _107.StoreInfoAminoMsg;
                    fromProtoMsg(message: _107.StoreInfoProtoMsg): _107.StoreInfo;
                    toProto(message: _107.StoreInfo): Uint8Array;
                    toProtoMsg(message: _107.StoreInfo): _107.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _107.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _107.CommitID;
                    fromPartial(object: Partial<_107.CommitID>): _107.CommitID;
                    fromAmino(object: _107.CommitIDAmino): _107.CommitID;
                    toAmino(message: _107.CommitID): _107.CommitIDAmino;
                    fromAminoMsg(object: _107.CommitIDAminoMsg): _107.CommitID;
                    toAminoMsg(message: _107.CommitID): _107.CommitIDAminoMsg;
                    fromProtoMsg(message: _107.CommitIDProtoMsg): _107.CommitID;
                    toProto(message: _107.CommitID): Uint8Array;
                    toProtoMsg(message: _107.CommitID): _107.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _303.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _109.GetNodeInfoRequest): Promise<_109.GetNodeInfoResponse>;
                    getSyncing(request?: _109.GetSyncingRequest): Promise<_109.GetSyncingResponse>;
                    getLatestBlock(request?: _109.GetLatestBlockRequest): Promise<_109.GetLatestBlockResponse>;
                    getBlockByHeight(request: _109.GetBlockByHeightRequest): Promise<_109.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _109.GetLatestValidatorSetRequest): Promise<_109.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _109.GetValidatorSetByHeightRequest): Promise<_109.GetValidatorSetByHeightResponse>;
                };
                LCDQueryClient: typeof _288.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _109.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _109.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_109.GetValidatorSetByHeightRequest>): _109.GetValidatorSetByHeightRequest;
                    fromAmino(object: _109.GetValidatorSetByHeightRequestAmino): _109.GetValidatorSetByHeightRequest;
                    toAmino(message: _109.GetValidatorSetByHeightRequest): _109.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _109.GetValidatorSetByHeightRequestAminoMsg): _109.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _109.GetValidatorSetByHeightRequest): _109.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _109.GetValidatorSetByHeightRequestProtoMsg): _109.GetValidatorSetByHeightRequest;
                    toProto(message: _109.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _109.GetValidatorSetByHeightRequest): _109.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _109.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _109.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_109.GetValidatorSetByHeightResponse>): _109.GetValidatorSetByHeightResponse;
                    fromAmino(object: _109.GetValidatorSetByHeightResponseAmino): _109.GetValidatorSetByHeightResponse;
                    toAmino(message: _109.GetValidatorSetByHeightResponse): _109.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _109.GetValidatorSetByHeightResponseAminoMsg): _109.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _109.GetValidatorSetByHeightResponse): _109.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _109.GetValidatorSetByHeightResponseProtoMsg): _109.GetValidatorSetByHeightResponse;
                    toProto(message: _109.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _109.GetValidatorSetByHeightResponse): _109.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _109.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _109.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_109.GetLatestValidatorSetRequest>): _109.GetLatestValidatorSetRequest;
                    fromAmino(object: _109.GetLatestValidatorSetRequestAmino): _109.GetLatestValidatorSetRequest;
                    toAmino(message: _109.GetLatestValidatorSetRequest): _109.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _109.GetLatestValidatorSetRequestAminoMsg): _109.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _109.GetLatestValidatorSetRequest): _109.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _109.GetLatestValidatorSetRequestProtoMsg): _109.GetLatestValidatorSetRequest;
                    toProto(message: _109.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _109.GetLatestValidatorSetRequest): _109.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _109.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _109.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_109.GetLatestValidatorSetResponse>): _109.GetLatestValidatorSetResponse;
                    fromAmino(object: _109.GetLatestValidatorSetResponseAmino): _109.GetLatestValidatorSetResponse;
                    toAmino(message: _109.GetLatestValidatorSetResponse): _109.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _109.GetLatestValidatorSetResponseAminoMsg): _109.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _109.GetLatestValidatorSetResponse): _109.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _109.GetLatestValidatorSetResponseProtoMsg): _109.GetLatestValidatorSetResponse;
                    toProto(message: _109.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _109.GetLatestValidatorSetResponse): _109.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _109.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _109.Validator;
                    fromPartial(object: Partial<_109.Validator>): _109.Validator;
                    fromAmino(object: _109.ValidatorAmino): _109.Validator;
                    toAmino(message: _109.Validator): _109.ValidatorAmino;
                    fromAminoMsg(object: _109.ValidatorAminoMsg): _109.Validator;
                    toAminoMsg(message: _109.Validator): _109.ValidatorAminoMsg;
                    fromProtoMsg(message: _109.ValidatorProtoMsg): _109.Validator;
                    toProto(message: _109.Validator): Uint8Array;
                    toProtoMsg(message: _109.Validator): _109.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _109.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _109.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_109.GetBlockByHeightRequest>): _109.GetBlockByHeightRequest;
                    fromAmino(object: _109.GetBlockByHeightRequestAmino): _109.GetBlockByHeightRequest;
                    toAmino(message: _109.GetBlockByHeightRequest): _109.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _109.GetBlockByHeightRequestAminoMsg): _109.GetBlockByHeightRequest;
                    toAminoMsg(message: _109.GetBlockByHeightRequest): _109.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _109.GetBlockByHeightRequestProtoMsg): _109.GetBlockByHeightRequest;
                    toProto(message: _109.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _109.GetBlockByHeightRequest): _109.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _109.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _109.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_109.GetBlockByHeightResponse>): _109.GetBlockByHeightResponse;
                    fromAmino(object: _109.GetBlockByHeightResponseAmino): _109.GetBlockByHeightResponse;
                    toAmino(message: _109.GetBlockByHeightResponse): _109.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _109.GetBlockByHeightResponseAminoMsg): _109.GetBlockByHeightResponse;
                    toAminoMsg(message: _109.GetBlockByHeightResponse): _109.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _109.GetBlockByHeightResponseProtoMsg): _109.GetBlockByHeightResponse;
                    toProto(message: _109.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _109.GetBlockByHeightResponse): _109.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _109.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _109.GetLatestBlockRequest;
                    fromPartial(_: Partial<_109.GetLatestBlockRequest>): _109.GetLatestBlockRequest;
                    fromAmino(_: _109.GetLatestBlockRequestAmino): _109.GetLatestBlockRequest;
                    toAmino(_: _109.GetLatestBlockRequest): _109.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _109.GetLatestBlockRequestAminoMsg): _109.GetLatestBlockRequest;
                    toAminoMsg(message: _109.GetLatestBlockRequest): _109.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _109.GetLatestBlockRequestProtoMsg): _109.GetLatestBlockRequest;
                    toProto(message: _109.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _109.GetLatestBlockRequest): _109.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _109.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _109.GetLatestBlockResponse;
                    fromPartial(object: Partial<_109.GetLatestBlockResponse>): _109.GetLatestBlockResponse;
                    fromAmino(object: _109.GetLatestBlockResponseAmino): _109.GetLatestBlockResponse;
                    toAmino(message: _109.GetLatestBlockResponse): _109.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _109.GetLatestBlockResponseAminoMsg): _109.GetLatestBlockResponse;
                    toAminoMsg(message: _109.GetLatestBlockResponse): _109.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _109.GetLatestBlockResponseProtoMsg): _109.GetLatestBlockResponse;
                    toProto(message: _109.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _109.GetLatestBlockResponse): _109.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _109.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _109.GetSyncingRequest;
                    fromPartial(_: Partial<_109.GetSyncingRequest>): _109.GetSyncingRequest;
                    fromAmino(_: _109.GetSyncingRequestAmino): _109.GetSyncingRequest;
                    toAmino(_: _109.GetSyncingRequest): _109.GetSyncingRequestAmino;
                    fromAminoMsg(object: _109.GetSyncingRequestAminoMsg): _109.GetSyncingRequest;
                    toAminoMsg(message: _109.GetSyncingRequest): _109.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _109.GetSyncingRequestProtoMsg): _109.GetSyncingRequest;
                    toProto(message: _109.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _109.GetSyncingRequest): _109.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _109.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _109.GetSyncingResponse;
                    fromPartial(object: Partial<_109.GetSyncingResponse>): _109.GetSyncingResponse;
                    fromAmino(object: _109.GetSyncingResponseAmino): _109.GetSyncingResponse;
                    toAmino(message: _109.GetSyncingResponse): _109.GetSyncingResponseAmino;
                    fromAminoMsg(object: _109.GetSyncingResponseAminoMsg): _109.GetSyncingResponse;
                    toAminoMsg(message: _109.GetSyncingResponse): _109.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _109.GetSyncingResponseProtoMsg): _109.GetSyncingResponse;
                    toProto(message: _109.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _109.GetSyncingResponse): _109.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _109.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _109.GetNodeInfoRequest;
                    fromPartial(_: Partial<_109.GetNodeInfoRequest>): _109.GetNodeInfoRequest;
                    fromAmino(_: _109.GetNodeInfoRequestAmino): _109.GetNodeInfoRequest;
                    toAmino(_: _109.GetNodeInfoRequest): _109.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _109.GetNodeInfoRequestAminoMsg): _109.GetNodeInfoRequest;
                    toAminoMsg(message: _109.GetNodeInfoRequest): _109.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _109.GetNodeInfoRequestProtoMsg): _109.GetNodeInfoRequest;
                    toProto(message: _109.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _109.GetNodeInfoRequest): _109.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _109.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _109.GetNodeInfoResponse;
                    fromPartial(object: Partial<_109.GetNodeInfoResponse>): _109.GetNodeInfoResponse;
                    fromAmino(object: _109.GetNodeInfoResponseAmino): _109.GetNodeInfoResponse;
                    toAmino(message: _109.GetNodeInfoResponse): _109.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _109.GetNodeInfoResponseAminoMsg): _109.GetNodeInfoResponse;
                    toAminoMsg(message: _109.GetNodeInfoResponse): _109.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _109.GetNodeInfoResponseProtoMsg): _109.GetNodeInfoResponse;
                    toProto(message: _109.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _109.GetNodeInfoResponse): _109.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _109.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _109.VersionInfo;
                    fromPartial(object: Partial<_109.VersionInfo>): _109.VersionInfo;
                    fromAmino(object: _109.VersionInfoAmino): _109.VersionInfo;
                    toAmino(message: _109.VersionInfo): _109.VersionInfoAmino;
                    fromAminoMsg(object: _109.VersionInfoAminoMsg): _109.VersionInfo;
                    toAminoMsg(message: _109.VersionInfo): _109.VersionInfoAminoMsg;
                    fromProtoMsg(message: _109.VersionInfoProtoMsg): _109.VersionInfo;
                    toProto(message: _109.VersionInfo): Uint8Array;
                    toProtoMsg(message: _109.VersionInfo): _109.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _109.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _109.Module;
                    fromPartial(object: Partial<_109.Module>): _109.Module;
                    fromAmino(object: _109.ModuleAmino): _109.Module;
                    toAmino(message: _109.Module): _109.ModuleAmino;
                    fromAminoMsg(object: _109.ModuleAminoMsg): _109.Module;
                    toAminoMsg(message: _109.Module): _109.ModuleAminoMsg;
                    fromProtoMsg(message: _109.ModuleProtoMsg): _109.Module;
                    toProto(message: _109.Module): Uint8Array;
                    toProtoMsg(message: _109.Module): _109.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _110.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.Coin;
                fromPartial(object: Partial<_110.Coin>): _110.Coin;
                fromAmino(object: _110.CoinAmino): _110.Coin;
                toAmino(message: _110.Coin): _110.CoinAmino;
                fromAminoMsg(object: _110.CoinAminoMsg): _110.Coin;
                toAminoMsg(message: _110.Coin): _110.CoinAminoMsg;
                fromProtoMsg(message: _110.CoinProtoMsg): _110.Coin;
                toProto(message: _110.Coin): Uint8Array;
                toProtoMsg(message: _110.Coin): _110.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _110.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.DecCoin;
                fromPartial(object: Partial<_110.DecCoin>): _110.DecCoin;
                fromAmino(object: _110.DecCoinAmino): _110.DecCoin;
                toAmino(message: _110.DecCoin): _110.DecCoinAmino;
                fromAminoMsg(object: _110.DecCoinAminoMsg): _110.DecCoin;
                toAminoMsg(message: _110.DecCoin): _110.DecCoinAminoMsg;
                fromProtoMsg(message: _110.DecCoinProtoMsg): _110.DecCoin;
                toProto(message: _110.DecCoin): Uint8Array;
                toProtoMsg(message: _110.DecCoin): _110.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _110.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.IntProto;
                fromPartial(object: Partial<_110.IntProto>): _110.IntProto;
                fromAmino(object: _110.IntProtoAmino): _110.IntProto;
                toAmino(message: _110.IntProto): _110.IntProtoAmino;
                fromAminoMsg(object: _110.IntProtoAminoMsg): _110.IntProto;
                toAminoMsg(message: _110.IntProto): _110.IntProtoAminoMsg;
                fromProtoMsg(message: _110.IntProtoProtoMsg): _110.IntProto;
                toProto(message: _110.IntProto): Uint8Array;
                toProtoMsg(message: _110.IntProto): _110.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _110.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.DecProto;
                fromPartial(object: Partial<_110.DecProto>): _110.DecProto;
                fromAmino(object: _110.DecProtoAmino): _110.DecProto;
                toAmino(message: _110.DecProto): _110.DecProtoAmino;
                fromAminoMsg(object: _110.DecProtoAminoMsg): _110.DecProto;
                toAminoMsg(message: _110.DecProto): _110.DecProtoAminoMsg;
                fromProtoMsg(message: _110.DecProtoProtoMsg): _110.DecProto;
                toProto(message: _110.DecProto): Uint8Array;
                toProtoMsg(message: _110.DecProto): _110.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _112.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.GenesisOwners;
                fromPartial(object: Partial<_112.GenesisOwners>): _112.GenesisOwners;
                fromAmino(object: _112.GenesisOwnersAmino): _112.GenesisOwners;
                toAmino(message: _112.GenesisOwners): _112.GenesisOwnersAmino;
                fromAminoMsg(object: _112.GenesisOwnersAminoMsg): _112.GenesisOwners;
                toAminoMsg(message: _112.GenesisOwners): _112.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _112.GenesisOwnersProtoMsg): _112.GenesisOwners;
                toProto(message: _112.GenesisOwners): Uint8Array;
                toProtoMsg(message: _112.GenesisOwners): _112.GenesisOwnersProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _112.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.GenesisState;
                fromPartial(object: Partial<_112.GenesisState>): _112.GenesisState;
                fromAmino(object: _112.GenesisStateAmino): _112.GenesisState;
                toAmino(message: _112.GenesisState): _112.GenesisStateAmino;
                fromAminoMsg(object: _112.GenesisStateAminoMsg): _112.GenesisState;
                toAminoMsg(message: _112.GenesisState): _112.GenesisStateAminoMsg;
                fromProtoMsg(message: _112.GenesisStateProtoMsg): _112.GenesisState;
                toProto(message: _112.GenesisState): Uint8Array;
                toProtoMsg(message: _112.GenesisState): _112.GenesisStateProtoMsg;
            };
            Capability: {
                typeUrl: string;
                encode(message: _111.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.Capability;
                fromPartial(object: Partial<_111.Capability>): _111.Capability;
                fromAmino(object: _111.CapabilityAmino): _111.Capability;
                toAmino(message: _111.Capability): _111.CapabilityAmino;
                fromAminoMsg(object: _111.CapabilityAminoMsg): _111.Capability;
                toAminoMsg(message: _111.Capability): _111.CapabilityAminoMsg;
                fromProtoMsg(message: _111.CapabilityProtoMsg): _111.Capability;
                toProto(message: _111.Capability): Uint8Array;
                toProtoMsg(message: _111.Capability): _111.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _111.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.Owner;
                fromPartial(object: Partial<_111.Owner>): _111.Owner;
                fromAmino(object: _111.OwnerAmino): _111.Owner;
                toAmino(message: _111.Owner): _111.OwnerAmino;
                fromAminoMsg(object: _111.OwnerAminoMsg): _111.Owner;
                toAminoMsg(message: _111.Owner): _111.OwnerAminoMsg;
                fromProtoMsg(message: _111.OwnerProtoMsg): _111.Owner;
                toProto(message: _111.Owner): Uint8Array;
                toProtoMsg(message: _111.Owner): _111.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _111.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.CapabilityOwners;
                fromPartial(object: Partial<_111.CapabilityOwners>): _111.CapabilityOwners;
                fromAmino(object: _111.CapabilityOwnersAmino): _111.CapabilityOwners;
                toAmino(message: _111.CapabilityOwners): _111.CapabilityOwnersAmino;
                fromAminoMsg(object: _111.CapabilityOwnersAminoMsg): _111.CapabilityOwners;
                toAminoMsg(message: _111.CapabilityOwners): _111.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _111.CapabilityOwnersProtoMsg): _111.CapabilityOwners;
                toProto(message: _111.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _111.CapabilityOwners): _111.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _316.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _114.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _114.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _114.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _114.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _114.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _114.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _114.MsgVerifyInvariant) => _114.MsgVerifyInvariantAmino;
                    fromAmino: (object: _114.MsgVerifyInvariantAmino) => _114.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _114.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.MsgVerifyInvariant;
                fromPartial(object: Partial<_114.MsgVerifyInvariant>): _114.MsgVerifyInvariant;
                fromAmino(object: _114.MsgVerifyInvariantAmino): _114.MsgVerifyInvariant;
                toAmino(message: _114.MsgVerifyInvariant): _114.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _114.MsgVerifyInvariantAminoMsg): _114.MsgVerifyInvariant;
                toAminoMsg(message: _114.MsgVerifyInvariant): _114.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _114.MsgVerifyInvariantProtoMsg): _114.MsgVerifyInvariant;
                toProto(message: _114.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _114.MsgVerifyInvariant): _114.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _114.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _114.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_114.MsgVerifyInvariantResponse>): _114.MsgVerifyInvariantResponse;
                fromAmino(_: _114.MsgVerifyInvariantResponseAmino): _114.MsgVerifyInvariantResponse;
                toAmino(_: _114.MsgVerifyInvariantResponse): _114.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _114.MsgVerifyInvariantResponseAminoMsg): _114.MsgVerifyInvariantResponse;
                toAminoMsg(message: _114.MsgVerifyInvariantResponse): _114.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _114.MsgVerifyInvariantResponseProtoMsg): _114.MsgVerifyInvariantResponse;
                toProto(message: _114.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _114.MsgVerifyInvariantResponse): _114.MsgVerifyInvariantResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _113.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.GenesisState;
                fromPartial(object: Partial<_113.GenesisState>): _113.GenesisState;
                fromAmino(object: _113.GenesisStateAmino): _113.GenesisState;
                toAmino(message: _113.GenesisState): _113.GenesisStateAmino;
                fromAminoMsg(object: _113.GenesisStateAminoMsg): _113.GenesisState;
                toAminoMsg(message: _113.GenesisState): _113.GenesisStateAminoMsg;
                fromProtoMsg(message: _113.GenesisStateProtoMsg): _113.GenesisState;
                toProto(message: _113.GenesisState): Uint8Array;
                toProtoMsg(message: _113.GenesisState): _113.GenesisStateProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _115.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.PubKey;
                fromPartial(object: Partial<_115.PubKey>): _115.PubKey;
                fromAmino(object: _115.PubKeyAmino): _115.PubKey;
                toAmino(message: _115.PubKey): _115.PubKeyAmino;
                fromAminoMsg(object: _115.PubKeyAminoMsg): _115.PubKey;
                toAminoMsg(message: _115.PubKey): _115.PubKeyAminoMsg;
                fromProtoMsg(message: _115.PubKeyProtoMsg): _115.PubKey;
                toProto(message: _115.PubKey): Uint8Array;
                toProtoMsg(message: _115.PubKey): _115.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _115.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.PrivKey;
                fromPartial(object: Partial<_115.PrivKey>): _115.PrivKey;
                fromAmino(object: _115.PrivKeyAmino): _115.PrivKey;
                toAmino(message: _115.PrivKey): _115.PrivKeyAmino;
                fromAminoMsg(object: _115.PrivKeyAminoMsg): _115.PrivKey;
                toAminoMsg(message: _115.PrivKey): _115.PrivKeyAminoMsg;
                fromProtoMsg(message: _115.PrivKeyProtoMsg): _115.PrivKey;
                toProto(message: _115.PrivKey): Uint8Array;
                toProtoMsg(message: _115.PrivKey): _115.PrivKeyProtoMsg;
            };
        };
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _116.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.LegacyAminoPubKey;
                fromPartial(object: Partial<_116.LegacyAminoPubKey>): _116.LegacyAminoPubKey;
                fromAmino(object: _116.LegacyAminoPubKeyAmino): _116.LegacyAminoPubKey;
                toAmino(message: _116.LegacyAminoPubKey): _116.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _116.LegacyAminoPubKeyAminoMsg): _116.LegacyAminoPubKey;
                toAminoMsg(message: _116.LegacyAminoPubKey): _116.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _116.LegacyAminoPubKeyProtoMsg): _116.LegacyAminoPubKey;
                toProto(message: _116.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _116.LegacyAminoPubKey): _116.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _117.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.PubKey;
                fromPartial(object: Partial<_117.PubKey>): _117.PubKey;
                fromAmino(object: _117.PubKeyAmino): _117.PubKey;
                toAmino(message: _117.PubKey): _117.PubKeyAmino;
                fromAminoMsg(object: _117.PubKeyAminoMsg): _117.PubKey;
                toAminoMsg(message: _117.PubKey): _117.PubKeyAminoMsg;
                fromProtoMsg(message: _117.PubKeyProtoMsg): _117.PubKey;
                toProto(message: _117.PubKey): Uint8Array;
                toProtoMsg(message: _117.PubKey): _117.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _117.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.PrivKey;
                fromPartial(object: Partial<_117.PrivKey>): _117.PrivKey;
                fromAmino(object: _117.PrivKeyAmino): _117.PrivKey;
                toAmino(message: _117.PrivKey): _117.PrivKeyAmino;
                fromAminoMsg(object: _117.PrivKeyAminoMsg): _117.PrivKey;
                toAminoMsg(message: _117.PrivKey): _117.PrivKeyAminoMsg;
                fromProtoMsg(message: _117.PrivKeyProtoMsg): _117.PrivKey;
                toProto(message: _117.PrivKey): Uint8Array;
                toProtoMsg(message: _117.PrivKey): _117.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _118.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.PubKey;
                fromPartial(object: Partial<_118.PubKey>): _118.PubKey;
                fromAmino(object: _118.PubKeyAmino): _118.PubKey;
                toAmino(message: _118.PubKey): _118.PubKeyAmino;
                fromAminoMsg(object: _118.PubKeyAminoMsg): _118.PubKey;
                toAminoMsg(message: _118.PubKey): _118.PubKeyAminoMsg;
                fromProtoMsg(message: _118.PubKeyProtoMsg): _118.PubKey;
                toProto(message: _118.PubKey): Uint8Array;
                toProtoMsg(message: _118.PubKey): _118.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _118.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.PrivKey;
                fromPartial(object: Partial<_118.PrivKey>): _118.PrivKey;
                fromAmino(object: _118.PrivKeyAmino): _118.PrivKey;
                toAmino(message: _118.PrivKey): _118.PrivKeyAmino;
                fromAminoMsg(object: _118.PrivKeyAminoMsg): _118.PrivKey;
                toAminoMsg(message: _118.PrivKey): _118.PrivKeyAminoMsg;
                fromProtoMsg(message: _118.PrivKeyProtoMsg): _118.PrivKey;
                toProto(message: _118.PrivKey): Uint8Array;
                toProtoMsg(message: _118.PrivKey): _118.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _317.MsgClientImpl;
            QueryClientImpl: typeof _304.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _121.QueryParamsRequest): Promise<_121.QueryParamsResponse>;
                validatorOutstandingRewards(request: _121.QueryValidatorOutstandingRewardsRequest): Promise<_121.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _121.QueryValidatorCommissionRequest): Promise<_121.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _121.QueryValidatorSlashesRequest): Promise<_121.QueryValidatorSlashesResponse>;
                delegationRewards(request: _121.QueryDelegationRewardsRequest): Promise<_121.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _121.QueryDelegationTotalRewardsRequest): Promise<_121.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _121.QueryDelegatorValidatorsRequest): Promise<_121.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _121.QueryDelegatorWithdrawAddressRequest): Promise<_121.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _121.QueryCommunityPoolRequest): Promise<_121.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _289.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _122.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _122.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _122.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _122.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _122.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _122.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _122.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _122.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _122.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _122.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _122.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _122.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _122.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _122.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _122.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _122.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _122.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _122.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _122.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _122.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _122.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _122.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _122.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _122.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _122.MsgSetWithdrawAddress) => _122.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _122.MsgSetWithdrawAddressAmino) => _122.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _122.MsgWithdrawDelegatorReward) => _122.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _122.MsgWithdrawDelegatorRewardAmino) => _122.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _122.MsgWithdrawValidatorCommission) => _122.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _122.MsgWithdrawValidatorCommissionAmino) => _122.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _122.MsgFundCommunityPool) => _122.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _122.MsgFundCommunityPoolAmino) => _122.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _122.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_122.MsgSetWithdrawAddress>): _122.MsgSetWithdrawAddress;
                fromAmino(object: _122.MsgSetWithdrawAddressAmino): _122.MsgSetWithdrawAddress;
                toAmino(message: _122.MsgSetWithdrawAddress): _122.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _122.MsgSetWithdrawAddressAminoMsg): _122.MsgSetWithdrawAddress;
                toAminoMsg(message: _122.MsgSetWithdrawAddress): _122.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _122.MsgSetWithdrawAddressProtoMsg): _122.MsgSetWithdrawAddress;
                toProto(message: _122.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _122.MsgSetWithdrawAddress): _122.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _122.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _122.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_122.MsgSetWithdrawAddressResponse>): _122.MsgSetWithdrawAddressResponse;
                fromAmino(_: _122.MsgSetWithdrawAddressResponseAmino): _122.MsgSetWithdrawAddressResponse;
                toAmino(_: _122.MsgSetWithdrawAddressResponse): _122.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _122.MsgSetWithdrawAddressResponseAminoMsg): _122.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _122.MsgSetWithdrawAddressResponse): _122.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _122.MsgSetWithdrawAddressResponseProtoMsg): _122.MsgSetWithdrawAddressResponse;
                toProto(message: _122.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _122.MsgSetWithdrawAddressResponse): _122.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _122.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_122.MsgWithdrawDelegatorReward>): _122.MsgWithdrawDelegatorReward;
                fromAmino(object: _122.MsgWithdrawDelegatorRewardAmino): _122.MsgWithdrawDelegatorReward;
                toAmino(message: _122.MsgWithdrawDelegatorReward): _122.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _122.MsgWithdrawDelegatorRewardAminoMsg): _122.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _122.MsgWithdrawDelegatorReward): _122.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _122.MsgWithdrawDelegatorRewardProtoMsg): _122.MsgWithdrawDelegatorReward;
                toProto(message: _122.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _122.MsgWithdrawDelegatorReward): _122.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(_: _122.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _122.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_122.MsgWithdrawDelegatorRewardResponse>): _122.MsgWithdrawDelegatorRewardResponse;
                fromAmino(_: _122.MsgWithdrawDelegatorRewardResponseAmino): _122.MsgWithdrawDelegatorRewardResponse;
                toAmino(_: _122.MsgWithdrawDelegatorRewardResponse): _122.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _122.MsgWithdrawDelegatorRewardResponseAminoMsg): _122.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _122.MsgWithdrawDelegatorRewardResponse): _122.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _122.MsgWithdrawDelegatorRewardResponseProtoMsg): _122.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _122.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _122.MsgWithdrawDelegatorRewardResponse): _122.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _122.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_122.MsgWithdrawValidatorCommission>): _122.MsgWithdrawValidatorCommission;
                fromAmino(object: _122.MsgWithdrawValidatorCommissionAmino): _122.MsgWithdrawValidatorCommission;
                toAmino(message: _122.MsgWithdrawValidatorCommission): _122.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _122.MsgWithdrawValidatorCommissionAminoMsg): _122.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _122.MsgWithdrawValidatorCommission): _122.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _122.MsgWithdrawValidatorCommissionProtoMsg): _122.MsgWithdrawValidatorCommission;
                toProto(message: _122.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _122.MsgWithdrawValidatorCommission): _122.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(_: _122.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _122.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_122.MsgWithdrawValidatorCommissionResponse>): _122.MsgWithdrawValidatorCommissionResponse;
                fromAmino(_: _122.MsgWithdrawValidatorCommissionResponseAmino): _122.MsgWithdrawValidatorCommissionResponse;
                toAmino(_: _122.MsgWithdrawValidatorCommissionResponse): _122.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _122.MsgWithdrawValidatorCommissionResponseAminoMsg): _122.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _122.MsgWithdrawValidatorCommissionResponse): _122.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _122.MsgWithdrawValidatorCommissionResponseProtoMsg): _122.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _122.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _122.MsgWithdrawValidatorCommissionResponse): _122.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _122.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.MsgFundCommunityPool;
                fromPartial(object: Partial<_122.MsgFundCommunityPool>): _122.MsgFundCommunityPool;
                fromAmino(object: _122.MsgFundCommunityPoolAmino): _122.MsgFundCommunityPool;
                toAmino(message: _122.MsgFundCommunityPool): _122.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _122.MsgFundCommunityPoolAminoMsg): _122.MsgFundCommunityPool;
                toAminoMsg(message: _122.MsgFundCommunityPool): _122.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _122.MsgFundCommunityPoolProtoMsg): _122.MsgFundCommunityPool;
                toProto(message: _122.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _122.MsgFundCommunityPool): _122.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _122.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _122.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_122.MsgFundCommunityPoolResponse>): _122.MsgFundCommunityPoolResponse;
                fromAmino(_: _122.MsgFundCommunityPoolResponseAmino): _122.MsgFundCommunityPoolResponse;
                toAmino(_: _122.MsgFundCommunityPoolResponse): _122.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _122.MsgFundCommunityPoolResponseAminoMsg): _122.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _122.MsgFundCommunityPoolResponse): _122.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _122.MsgFundCommunityPoolResponseProtoMsg): _122.MsgFundCommunityPoolResponse;
                toProto(message: _122.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _122.MsgFundCommunityPoolResponse): _122.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _121.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _121.QueryParamsRequest;
                fromPartial(_: Partial<_121.QueryParamsRequest>): _121.QueryParamsRequest;
                fromAmino(_: _121.QueryParamsRequestAmino): _121.QueryParamsRequest;
                toAmino(_: _121.QueryParamsRequest): _121.QueryParamsRequestAmino;
                fromAminoMsg(object: _121.QueryParamsRequestAminoMsg): _121.QueryParamsRequest;
                toAminoMsg(message: _121.QueryParamsRequest): _121.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _121.QueryParamsRequestProtoMsg): _121.QueryParamsRequest;
                toProto(message: _121.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _121.QueryParamsRequest): _121.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _121.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryParamsResponse;
                fromPartial(object: Partial<_121.QueryParamsResponse>): _121.QueryParamsResponse;
                fromAmino(object: _121.QueryParamsResponseAmino): _121.QueryParamsResponse;
                toAmino(message: _121.QueryParamsResponse): _121.QueryParamsResponseAmino;
                fromAminoMsg(object: _121.QueryParamsResponseAminoMsg): _121.QueryParamsResponse;
                toAminoMsg(message: _121.QueryParamsResponse): _121.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _121.QueryParamsResponseProtoMsg): _121.QueryParamsResponse;
                toProto(message: _121.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _121.QueryParamsResponse): _121.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _121.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_121.QueryValidatorOutstandingRewardsRequest>): _121.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _121.QueryValidatorOutstandingRewardsRequestAmino): _121.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _121.QueryValidatorOutstandingRewardsRequest): _121.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _121.QueryValidatorOutstandingRewardsRequestAminoMsg): _121.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _121.QueryValidatorOutstandingRewardsRequest): _121.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _121.QueryValidatorOutstandingRewardsRequestProtoMsg): _121.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _121.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _121.QueryValidatorOutstandingRewardsRequest): _121.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _121.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_121.QueryValidatorOutstandingRewardsResponse>): _121.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _121.QueryValidatorOutstandingRewardsResponseAmino): _121.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _121.QueryValidatorOutstandingRewardsResponse): _121.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _121.QueryValidatorOutstandingRewardsResponseAminoMsg): _121.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _121.QueryValidatorOutstandingRewardsResponse): _121.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _121.QueryValidatorOutstandingRewardsResponseProtoMsg): _121.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _121.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _121.QueryValidatorOutstandingRewardsResponse): _121.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _121.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_121.QueryValidatorCommissionRequest>): _121.QueryValidatorCommissionRequest;
                fromAmino(object: _121.QueryValidatorCommissionRequestAmino): _121.QueryValidatorCommissionRequest;
                toAmino(message: _121.QueryValidatorCommissionRequest): _121.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _121.QueryValidatorCommissionRequestAminoMsg): _121.QueryValidatorCommissionRequest;
                toAminoMsg(message: _121.QueryValidatorCommissionRequest): _121.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _121.QueryValidatorCommissionRequestProtoMsg): _121.QueryValidatorCommissionRequest;
                toProto(message: _121.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _121.QueryValidatorCommissionRequest): _121.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _121.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_121.QueryValidatorCommissionResponse>): _121.QueryValidatorCommissionResponse;
                fromAmino(object: _121.QueryValidatorCommissionResponseAmino): _121.QueryValidatorCommissionResponse;
                toAmino(message: _121.QueryValidatorCommissionResponse): _121.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _121.QueryValidatorCommissionResponseAminoMsg): _121.QueryValidatorCommissionResponse;
                toAminoMsg(message: _121.QueryValidatorCommissionResponse): _121.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _121.QueryValidatorCommissionResponseProtoMsg): _121.QueryValidatorCommissionResponse;
                toProto(message: _121.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _121.QueryValidatorCommissionResponse): _121.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _121.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_121.QueryValidatorSlashesRequest>): _121.QueryValidatorSlashesRequest;
                fromAmino(object: _121.QueryValidatorSlashesRequestAmino): _121.QueryValidatorSlashesRequest;
                toAmino(message: _121.QueryValidatorSlashesRequest): _121.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _121.QueryValidatorSlashesRequestAminoMsg): _121.QueryValidatorSlashesRequest;
                toAminoMsg(message: _121.QueryValidatorSlashesRequest): _121.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _121.QueryValidatorSlashesRequestProtoMsg): _121.QueryValidatorSlashesRequest;
                toProto(message: _121.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _121.QueryValidatorSlashesRequest): _121.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _121.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_121.QueryValidatorSlashesResponse>): _121.QueryValidatorSlashesResponse;
                fromAmino(object: _121.QueryValidatorSlashesResponseAmino): _121.QueryValidatorSlashesResponse;
                toAmino(message: _121.QueryValidatorSlashesResponse): _121.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _121.QueryValidatorSlashesResponseAminoMsg): _121.QueryValidatorSlashesResponse;
                toAminoMsg(message: _121.QueryValidatorSlashesResponse): _121.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _121.QueryValidatorSlashesResponseProtoMsg): _121.QueryValidatorSlashesResponse;
                toProto(message: _121.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _121.QueryValidatorSlashesResponse): _121.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _121.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_121.QueryDelegationRewardsRequest>): _121.QueryDelegationRewardsRequest;
                fromAmino(object: _121.QueryDelegationRewardsRequestAmino): _121.QueryDelegationRewardsRequest;
                toAmino(message: _121.QueryDelegationRewardsRequest): _121.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _121.QueryDelegationRewardsRequestAminoMsg): _121.QueryDelegationRewardsRequest;
                toAminoMsg(message: _121.QueryDelegationRewardsRequest): _121.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _121.QueryDelegationRewardsRequestProtoMsg): _121.QueryDelegationRewardsRequest;
                toProto(message: _121.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _121.QueryDelegationRewardsRequest): _121.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _121.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_121.QueryDelegationRewardsResponse>): _121.QueryDelegationRewardsResponse;
                fromAmino(object: _121.QueryDelegationRewardsResponseAmino): _121.QueryDelegationRewardsResponse;
                toAmino(message: _121.QueryDelegationRewardsResponse): _121.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _121.QueryDelegationRewardsResponseAminoMsg): _121.QueryDelegationRewardsResponse;
                toAminoMsg(message: _121.QueryDelegationRewardsResponse): _121.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _121.QueryDelegationRewardsResponseProtoMsg): _121.QueryDelegationRewardsResponse;
                toProto(message: _121.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _121.QueryDelegationRewardsResponse): _121.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _121.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_121.QueryDelegationTotalRewardsRequest>): _121.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _121.QueryDelegationTotalRewardsRequestAmino): _121.QueryDelegationTotalRewardsRequest;
                toAmino(message: _121.QueryDelegationTotalRewardsRequest): _121.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _121.QueryDelegationTotalRewardsRequestAminoMsg): _121.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _121.QueryDelegationTotalRewardsRequest): _121.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _121.QueryDelegationTotalRewardsRequestProtoMsg): _121.QueryDelegationTotalRewardsRequest;
                toProto(message: _121.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _121.QueryDelegationTotalRewardsRequest): _121.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _121.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_121.QueryDelegationTotalRewardsResponse>): _121.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _121.QueryDelegationTotalRewardsResponseAmino): _121.QueryDelegationTotalRewardsResponse;
                toAmino(message: _121.QueryDelegationTotalRewardsResponse): _121.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _121.QueryDelegationTotalRewardsResponseAminoMsg): _121.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _121.QueryDelegationTotalRewardsResponse): _121.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _121.QueryDelegationTotalRewardsResponseProtoMsg): _121.QueryDelegationTotalRewardsResponse;
                toProto(message: _121.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _121.QueryDelegationTotalRewardsResponse): _121.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _121.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_121.QueryDelegatorValidatorsRequest>): _121.QueryDelegatorValidatorsRequest;
                fromAmino(object: _121.QueryDelegatorValidatorsRequestAmino): _121.QueryDelegatorValidatorsRequest;
                toAmino(message: _121.QueryDelegatorValidatorsRequest): _121.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _121.QueryDelegatorValidatorsRequestAminoMsg): _121.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _121.QueryDelegatorValidatorsRequest): _121.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _121.QueryDelegatorValidatorsRequestProtoMsg): _121.QueryDelegatorValidatorsRequest;
                toProto(message: _121.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _121.QueryDelegatorValidatorsRequest): _121.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _121.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_121.QueryDelegatorValidatorsResponse>): _121.QueryDelegatorValidatorsResponse;
                fromAmino(object: _121.QueryDelegatorValidatorsResponseAmino): _121.QueryDelegatorValidatorsResponse;
                toAmino(message: _121.QueryDelegatorValidatorsResponse): _121.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _121.QueryDelegatorValidatorsResponseAminoMsg): _121.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _121.QueryDelegatorValidatorsResponse): _121.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _121.QueryDelegatorValidatorsResponseProtoMsg): _121.QueryDelegatorValidatorsResponse;
                toProto(message: _121.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _121.QueryDelegatorValidatorsResponse): _121.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _121.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_121.QueryDelegatorWithdrawAddressRequest>): _121.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _121.QueryDelegatorWithdrawAddressRequestAmino): _121.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _121.QueryDelegatorWithdrawAddressRequest): _121.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _121.QueryDelegatorWithdrawAddressRequestAminoMsg): _121.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _121.QueryDelegatorWithdrawAddressRequest): _121.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _121.QueryDelegatorWithdrawAddressRequestProtoMsg): _121.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _121.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _121.QueryDelegatorWithdrawAddressRequest): _121.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _121.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_121.QueryDelegatorWithdrawAddressResponse>): _121.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _121.QueryDelegatorWithdrawAddressResponseAmino): _121.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _121.QueryDelegatorWithdrawAddressResponse): _121.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _121.QueryDelegatorWithdrawAddressResponseAminoMsg): _121.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _121.QueryDelegatorWithdrawAddressResponse): _121.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _121.QueryDelegatorWithdrawAddressResponseProtoMsg): _121.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _121.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _121.QueryDelegatorWithdrawAddressResponse): _121.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _121.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _121.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_121.QueryCommunityPoolRequest>): _121.QueryCommunityPoolRequest;
                fromAmino(_: _121.QueryCommunityPoolRequestAmino): _121.QueryCommunityPoolRequest;
                toAmino(_: _121.QueryCommunityPoolRequest): _121.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _121.QueryCommunityPoolRequestAminoMsg): _121.QueryCommunityPoolRequest;
                toAminoMsg(message: _121.QueryCommunityPoolRequest): _121.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _121.QueryCommunityPoolRequestProtoMsg): _121.QueryCommunityPoolRequest;
                toProto(message: _121.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _121.QueryCommunityPoolRequest): _121.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _121.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_121.QueryCommunityPoolResponse>): _121.QueryCommunityPoolResponse;
                fromAmino(object: _121.QueryCommunityPoolResponseAmino): _121.QueryCommunityPoolResponse;
                toAmino(message: _121.QueryCommunityPoolResponse): _121.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _121.QueryCommunityPoolResponseAminoMsg): _121.QueryCommunityPoolResponse;
                toAminoMsg(message: _121.QueryCommunityPoolResponse): _121.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _121.QueryCommunityPoolResponseProtoMsg): _121.QueryCommunityPoolResponse;
                toProto(message: _121.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _121.QueryCommunityPoolResponse): _121.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _120.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_120.DelegatorWithdrawInfo>): _120.DelegatorWithdrawInfo;
                fromAmino(object: _120.DelegatorWithdrawInfoAmino): _120.DelegatorWithdrawInfo;
                toAmino(message: _120.DelegatorWithdrawInfo): _120.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _120.DelegatorWithdrawInfoAminoMsg): _120.DelegatorWithdrawInfo;
                toAminoMsg(message: _120.DelegatorWithdrawInfo): _120.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _120.DelegatorWithdrawInfoProtoMsg): _120.DelegatorWithdrawInfo;
                toProto(message: _120.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _120.DelegatorWithdrawInfo): _120.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _120.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_120.ValidatorOutstandingRewardsRecord>): _120.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _120.ValidatorOutstandingRewardsRecordAmino): _120.ValidatorOutstandingRewardsRecord;
                toAmino(message: _120.ValidatorOutstandingRewardsRecord): _120.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _120.ValidatorOutstandingRewardsRecordAminoMsg): _120.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _120.ValidatorOutstandingRewardsRecord): _120.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _120.ValidatorOutstandingRewardsRecordProtoMsg): _120.ValidatorOutstandingRewardsRecord;
                toProto(message: _120.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _120.ValidatorOutstandingRewardsRecord): _120.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _120.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_120.ValidatorAccumulatedCommissionRecord>): _120.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _120.ValidatorAccumulatedCommissionRecordAmino): _120.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _120.ValidatorAccumulatedCommissionRecord): _120.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _120.ValidatorAccumulatedCommissionRecordAminoMsg): _120.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _120.ValidatorAccumulatedCommissionRecord): _120.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _120.ValidatorAccumulatedCommissionRecordProtoMsg): _120.ValidatorAccumulatedCommissionRecord;
                toProto(message: _120.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _120.ValidatorAccumulatedCommissionRecord): _120.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _120.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_120.ValidatorHistoricalRewardsRecord>): _120.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _120.ValidatorHistoricalRewardsRecordAmino): _120.ValidatorHistoricalRewardsRecord;
                toAmino(message: _120.ValidatorHistoricalRewardsRecord): _120.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _120.ValidatorHistoricalRewardsRecordAminoMsg): _120.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _120.ValidatorHistoricalRewardsRecord): _120.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _120.ValidatorHistoricalRewardsRecordProtoMsg): _120.ValidatorHistoricalRewardsRecord;
                toProto(message: _120.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _120.ValidatorHistoricalRewardsRecord): _120.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _120.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_120.ValidatorCurrentRewardsRecord>): _120.ValidatorCurrentRewardsRecord;
                fromAmino(object: _120.ValidatorCurrentRewardsRecordAmino): _120.ValidatorCurrentRewardsRecord;
                toAmino(message: _120.ValidatorCurrentRewardsRecord): _120.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _120.ValidatorCurrentRewardsRecordAminoMsg): _120.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _120.ValidatorCurrentRewardsRecord): _120.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _120.ValidatorCurrentRewardsRecordProtoMsg): _120.ValidatorCurrentRewardsRecord;
                toProto(message: _120.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _120.ValidatorCurrentRewardsRecord): _120.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _120.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_120.DelegatorStartingInfoRecord>): _120.DelegatorStartingInfoRecord;
                fromAmino(object: _120.DelegatorStartingInfoRecordAmino): _120.DelegatorStartingInfoRecord;
                toAmino(message: _120.DelegatorStartingInfoRecord): _120.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _120.DelegatorStartingInfoRecordAminoMsg): _120.DelegatorStartingInfoRecord;
                toAminoMsg(message: _120.DelegatorStartingInfoRecord): _120.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _120.DelegatorStartingInfoRecordProtoMsg): _120.DelegatorStartingInfoRecord;
                toProto(message: _120.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _120.DelegatorStartingInfoRecord): _120.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _120.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_120.ValidatorSlashEventRecord>): _120.ValidatorSlashEventRecord;
                fromAmino(object: _120.ValidatorSlashEventRecordAmino): _120.ValidatorSlashEventRecord;
                toAmino(message: _120.ValidatorSlashEventRecord): _120.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _120.ValidatorSlashEventRecordAminoMsg): _120.ValidatorSlashEventRecord;
                toAminoMsg(message: _120.ValidatorSlashEventRecord): _120.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _120.ValidatorSlashEventRecordProtoMsg): _120.ValidatorSlashEventRecord;
                toProto(message: _120.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _120.ValidatorSlashEventRecord): _120.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _120.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.GenesisState;
                fromPartial(object: Partial<_120.GenesisState>): _120.GenesisState;
                fromAmino(object: _120.GenesisStateAmino): _120.GenesisState;
                toAmino(message: _120.GenesisState): _120.GenesisStateAmino;
                fromAminoMsg(object: _120.GenesisStateAminoMsg): _120.GenesisState;
                toAminoMsg(message: _120.GenesisState): _120.GenesisStateAminoMsg;
                fromProtoMsg(message: _120.GenesisStateProtoMsg): _120.GenesisState;
                toProto(message: _120.GenesisState): Uint8Array;
                toProtoMsg(message: _120.GenesisState): _120.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _119.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.Params;
                fromPartial(object: Partial<_119.Params>): _119.Params;
                fromAmino(object: _119.ParamsAmino): _119.Params;
                toAmino(message: _119.Params): _119.ParamsAmino;
                fromAminoMsg(object: _119.ParamsAminoMsg): _119.Params;
                toAminoMsg(message: _119.Params): _119.ParamsAminoMsg;
                fromProtoMsg(message: _119.ParamsProtoMsg): _119.Params;
                toProto(message: _119.Params): Uint8Array;
                toProtoMsg(message: _119.Params): _119.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _119.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_119.ValidatorHistoricalRewards>): _119.ValidatorHistoricalRewards;
                fromAmino(object: _119.ValidatorHistoricalRewardsAmino): _119.ValidatorHistoricalRewards;
                toAmino(message: _119.ValidatorHistoricalRewards): _119.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _119.ValidatorHistoricalRewardsAminoMsg): _119.ValidatorHistoricalRewards;
                toAminoMsg(message: _119.ValidatorHistoricalRewards): _119.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _119.ValidatorHistoricalRewardsProtoMsg): _119.ValidatorHistoricalRewards;
                toProto(message: _119.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _119.ValidatorHistoricalRewards): _119.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _119.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.ValidatorCurrentRewards;
                fromPartial(object: Partial<_119.ValidatorCurrentRewards>): _119.ValidatorCurrentRewards;
                fromAmino(object: _119.ValidatorCurrentRewardsAmino): _119.ValidatorCurrentRewards;
                toAmino(message: _119.ValidatorCurrentRewards): _119.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _119.ValidatorCurrentRewardsAminoMsg): _119.ValidatorCurrentRewards;
                toAminoMsg(message: _119.ValidatorCurrentRewards): _119.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _119.ValidatorCurrentRewardsProtoMsg): _119.ValidatorCurrentRewards;
                toProto(message: _119.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _119.ValidatorCurrentRewards): _119.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _119.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_119.ValidatorAccumulatedCommission>): _119.ValidatorAccumulatedCommission;
                fromAmino(object: _119.ValidatorAccumulatedCommissionAmino): _119.ValidatorAccumulatedCommission;
                toAmino(message: _119.ValidatorAccumulatedCommission): _119.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _119.ValidatorAccumulatedCommissionAminoMsg): _119.ValidatorAccumulatedCommission;
                toAminoMsg(message: _119.ValidatorAccumulatedCommission): _119.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _119.ValidatorAccumulatedCommissionProtoMsg): _119.ValidatorAccumulatedCommission;
                toProto(message: _119.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _119.ValidatorAccumulatedCommission): _119.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _119.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_119.ValidatorOutstandingRewards>): _119.ValidatorOutstandingRewards;
                fromAmino(object: _119.ValidatorOutstandingRewardsAmino): _119.ValidatorOutstandingRewards;
                toAmino(message: _119.ValidatorOutstandingRewards): _119.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _119.ValidatorOutstandingRewardsAminoMsg): _119.ValidatorOutstandingRewards;
                toAminoMsg(message: _119.ValidatorOutstandingRewards): _119.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _119.ValidatorOutstandingRewardsProtoMsg): _119.ValidatorOutstandingRewards;
                toProto(message: _119.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _119.ValidatorOutstandingRewards): _119.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _119.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.ValidatorSlashEvent;
                fromPartial(object: Partial<_119.ValidatorSlashEvent>): _119.ValidatorSlashEvent;
                fromAmino(object: _119.ValidatorSlashEventAmino): _119.ValidatorSlashEvent;
                toAmino(message: _119.ValidatorSlashEvent): _119.ValidatorSlashEventAmino;
                fromAminoMsg(object: _119.ValidatorSlashEventAminoMsg): _119.ValidatorSlashEvent;
                toAminoMsg(message: _119.ValidatorSlashEvent): _119.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _119.ValidatorSlashEventProtoMsg): _119.ValidatorSlashEvent;
                toProto(message: _119.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _119.ValidatorSlashEvent): _119.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _119.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.ValidatorSlashEvents;
                fromPartial(object: Partial<_119.ValidatorSlashEvents>): _119.ValidatorSlashEvents;
                fromAmino(object: _119.ValidatorSlashEventsAmino): _119.ValidatorSlashEvents;
                toAmino(message: _119.ValidatorSlashEvents): _119.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _119.ValidatorSlashEventsAminoMsg): _119.ValidatorSlashEvents;
                toAminoMsg(message: _119.ValidatorSlashEvents): _119.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _119.ValidatorSlashEventsProtoMsg): _119.ValidatorSlashEvents;
                toProto(message: _119.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _119.ValidatorSlashEvents): _119.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _119.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.FeePool;
                fromPartial(object: Partial<_119.FeePool>): _119.FeePool;
                fromAmino(object: _119.FeePoolAmino): _119.FeePool;
                toAmino(message: _119.FeePool): _119.FeePoolAmino;
                fromAminoMsg(object: _119.FeePoolAminoMsg): _119.FeePool;
                toAminoMsg(message: _119.FeePool): _119.FeePoolAminoMsg;
                fromProtoMsg(message: _119.FeePoolProtoMsg): _119.FeePool;
                toProto(message: _119.FeePool): Uint8Array;
                toProtoMsg(message: _119.FeePool): _119.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _119.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_119.CommunityPoolSpendProposal>): _119.CommunityPoolSpendProposal;
                fromAmino(object: _119.CommunityPoolSpendProposalAmino): _119.CommunityPoolSpendProposal;
                toAmino(message: _119.CommunityPoolSpendProposal): _119.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _119.CommunityPoolSpendProposalAminoMsg): _119.CommunityPoolSpendProposal;
                toAminoMsg(message: _119.CommunityPoolSpendProposal): _119.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _119.CommunityPoolSpendProposalProtoMsg): _119.CommunityPoolSpendProposal;
                toProto(message: _119.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _119.CommunityPoolSpendProposal): _119.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _119.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.DelegatorStartingInfo;
                fromPartial(object: Partial<_119.DelegatorStartingInfo>): _119.DelegatorStartingInfo;
                fromAmino(object: _119.DelegatorStartingInfoAmino): _119.DelegatorStartingInfo;
                toAmino(message: _119.DelegatorStartingInfo): _119.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _119.DelegatorStartingInfoAminoMsg): _119.DelegatorStartingInfo;
                toAminoMsg(message: _119.DelegatorStartingInfo): _119.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _119.DelegatorStartingInfoProtoMsg): _119.DelegatorStartingInfo;
                toProto(message: _119.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _119.DelegatorStartingInfo): _119.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _119.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.DelegationDelegatorReward;
                fromPartial(object: Partial<_119.DelegationDelegatorReward>): _119.DelegationDelegatorReward;
                fromAmino(object: _119.DelegationDelegatorRewardAmino): _119.DelegationDelegatorReward;
                toAmino(message: _119.DelegationDelegatorReward): _119.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _119.DelegationDelegatorRewardAminoMsg): _119.DelegationDelegatorReward;
                toAminoMsg(message: _119.DelegationDelegatorReward): _119.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _119.DelegationDelegatorRewardProtoMsg): _119.DelegationDelegatorReward;
                toProto(message: _119.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _119.DelegationDelegatorReward): _119.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _119.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_119.CommunityPoolSpendProposalWithDeposit>): _119.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _119.CommunityPoolSpendProposalWithDepositAmino): _119.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _119.CommunityPoolSpendProposalWithDeposit): _119.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _119.CommunityPoolSpendProposalWithDepositAminoMsg): _119.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _119.CommunityPoolSpendProposalWithDeposit): _119.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _119.CommunityPoolSpendProposalWithDepositProtoMsg): _119.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _119.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _119.CommunityPoolSpendProposalWithDeposit): _119.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _318.MsgClientImpl;
            QueryClientImpl: typeof _305.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _125.QueryEvidenceRequest): Promise<_125.QueryEvidenceResponse>;
                allEvidence(request?: _125.QueryAllEvidenceRequest): Promise<_125.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _290.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _126.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _126.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _126.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _126.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _126.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _126.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _126.MsgSubmitEvidence) => _126.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _126.MsgSubmitEvidenceAmino) => _126.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _126.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.MsgSubmitEvidence;
                fromPartial(object: Partial<_126.MsgSubmitEvidence>): _126.MsgSubmitEvidence;
                fromAmino(object: _126.MsgSubmitEvidenceAmino): _126.MsgSubmitEvidence;
                toAmino(message: _126.MsgSubmitEvidence): _126.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _126.MsgSubmitEvidenceAminoMsg): _126.MsgSubmitEvidence;
                toAminoMsg(message: _126.MsgSubmitEvidence): _126.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _126.MsgSubmitEvidenceProtoMsg): _126.MsgSubmitEvidence;
                toProto(message: _126.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _126.MsgSubmitEvidence): _126.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _126.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_126.MsgSubmitEvidenceResponse>): _126.MsgSubmitEvidenceResponse;
                fromAmino(object: _126.MsgSubmitEvidenceResponseAmino): _126.MsgSubmitEvidenceResponse;
                toAmino(message: _126.MsgSubmitEvidenceResponse): _126.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _126.MsgSubmitEvidenceResponseAminoMsg): _126.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _126.MsgSubmitEvidenceResponse): _126.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _126.MsgSubmitEvidenceResponseProtoMsg): _126.MsgSubmitEvidenceResponse;
                toProto(message: _126.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _126.MsgSubmitEvidenceResponse): _126.MsgSubmitEvidenceResponseProtoMsg;
            };
            Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _125.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryEvidenceRequest;
                fromPartial(object: Partial<_125.QueryEvidenceRequest>): _125.QueryEvidenceRequest;
                fromAmino(object: _125.QueryEvidenceRequestAmino): _125.QueryEvidenceRequest;
                toAmino(message: _125.QueryEvidenceRequest): _125.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _125.QueryEvidenceRequestAminoMsg): _125.QueryEvidenceRequest;
                toAminoMsg(message: _125.QueryEvidenceRequest): _125.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _125.QueryEvidenceRequestProtoMsg): _125.QueryEvidenceRequest;
                toProto(message: _125.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _125.QueryEvidenceRequest): _125.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _125.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryEvidenceResponse;
                fromPartial(object: Partial<_125.QueryEvidenceResponse>): _125.QueryEvidenceResponse;
                fromAmino(object: _125.QueryEvidenceResponseAmino): _125.QueryEvidenceResponse;
                toAmino(message: _125.QueryEvidenceResponse): _125.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _125.QueryEvidenceResponseAminoMsg): _125.QueryEvidenceResponse;
                toAminoMsg(message: _125.QueryEvidenceResponse): _125.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _125.QueryEvidenceResponseProtoMsg): _125.QueryEvidenceResponse;
                toProto(message: _125.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _125.QueryEvidenceResponse): _125.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _125.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_125.QueryAllEvidenceRequest>): _125.QueryAllEvidenceRequest;
                fromAmino(object: _125.QueryAllEvidenceRequestAmino): _125.QueryAllEvidenceRequest;
                toAmino(message: _125.QueryAllEvidenceRequest): _125.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _125.QueryAllEvidenceRequestAminoMsg): _125.QueryAllEvidenceRequest;
                toAminoMsg(message: _125.QueryAllEvidenceRequest): _125.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _125.QueryAllEvidenceRequestProtoMsg): _125.QueryAllEvidenceRequest;
                toProto(message: _125.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _125.QueryAllEvidenceRequest): _125.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _125.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_125.QueryAllEvidenceResponse>): _125.QueryAllEvidenceResponse;
                fromAmino(object: _125.QueryAllEvidenceResponseAmino): _125.QueryAllEvidenceResponse;
                toAmino(message: _125.QueryAllEvidenceResponse): _125.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _125.QueryAllEvidenceResponseAminoMsg): _125.QueryAllEvidenceResponse;
                toAminoMsg(message: _125.QueryAllEvidenceResponse): _125.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _125.QueryAllEvidenceResponseProtoMsg): _125.QueryAllEvidenceResponse;
                toProto(message: _125.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _125.QueryAllEvidenceResponse): _125.QueryAllEvidenceResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _124.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.GenesisState;
                fromPartial(object: Partial<_124.GenesisState>): _124.GenesisState;
                fromAmino(object: _124.GenesisStateAmino): _124.GenesisState;
                toAmino(message: _124.GenesisState): _124.GenesisStateAmino;
                fromAminoMsg(object: _124.GenesisStateAminoMsg): _124.GenesisState;
                toAminoMsg(message: _124.GenesisState): _124.GenesisStateAminoMsg;
                fromProtoMsg(message: _124.GenesisStateProtoMsg): _124.GenesisState;
                toProto(message: _124.GenesisState): Uint8Array;
                toProtoMsg(message: _124.GenesisState): _124.GenesisStateProtoMsg;
            };
            Equivocation: {
                typeUrl: string;
                encode(message: _123.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.Equivocation;
                fromPartial(object: Partial<_123.Equivocation>): _123.Equivocation;
                fromAmino(object: _123.EquivocationAmino): _123.Equivocation;
                toAmino(message: _123.Equivocation): _123.EquivocationAmino;
                fromAminoMsg(object: _123.EquivocationAminoMsg): _123.Equivocation;
                toAminoMsg(message: _123.Equivocation): _123.EquivocationAminoMsg;
                fromProtoMsg(message: _123.EquivocationProtoMsg): _123.Equivocation;
                toProto(message: _123.Equivocation): Uint8Array;
                toProtoMsg(message: _123.Equivocation): _123.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _319.MsgClientImpl;
            QueryClientImpl: typeof _306.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _129.QueryAllowanceRequest): Promise<_129.QueryAllowanceResponse>;
                allowances(request: _129.QueryAllowancesRequest): Promise<_129.QueryAllowancesResponse>;
            };
            LCDQueryClient: typeof _291.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _130.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _130.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _130.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _130.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _130.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _130.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _130.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _130.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _130.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _130.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _130.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _130.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _130.MsgGrantAllowance) => _130.MsgGrantAllowanceAmino;
                    fromAmino: (object: _130.MsgGrantAllowanceAmino) => _130.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _130.MsgRevokeAllowance) => _130.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _130.MsgRevokeAllowanceAmino) => _130.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _130.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.MsgGrantAllowance;
                fromPartial(object: Partial<_130.MsgGrantAllowance>): _130.MsgGrantAllowance;
                fromAmino(object: _130.MsgGrantAllowanceAmino): _130.MsgGrantAllowance;
                toAmino(message: _130.MsgGrantAllowance): _130.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _130.MsgGrantAllowanceAminoMsg): _130.MsgGrantAllowance;
                toAminoMsg(message: _130.MsgGrantAllowance): _130.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _130.MsgGrantAllowanceProtoMsg): _130.MsgGrantAllowance;
                toProto(message: _130.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _130.MsgGrantAllowance): _130.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _130.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _130.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_130.MsgGrantAllowanceResponse>): _130.MsgGrantAllowanceResponse;
                fromAmino(_: _130.MsgGrantAllowanceResponseAmino): _130.MsgGrantAllowanceResponse;
                toAmino(_: _130.MsgGrantAllowanceResponse): _130.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _130.MsgGrantAllowanceResponseAminoMsg): _130.MsgGrantAllowanceResponse;
                toAminoMsg(message: _130.MsgGrantAllowanceResponse): _130.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _130.MsgGrantAllowanceResponseProtoMsg): _130.MsgGrantAllowanceResponse;
                toProto(message: _130.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _130.MsgGrantAllowanceResponse): _130.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _130.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.MsgRevokeAllowance;
                fromPartial(object: Partial<_130.MsgRevokeAllowance>): _130.MsgRevokeAllowance;
                fromAmino(object: _130.MsgRevokeAllowanceAmino): _130.MsgRevokeAllowance;
                toAmino(message: _130.MsgRevokeAllowance): _130.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _130.MsgRevokeAllowanceAminoMsg): _130.MsgRevokeAllowance;
                toAminoMsg(message: _130.MsgRevokeAllowance): _130.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _130.MsgRevokeAllowanceProtoMsg): _130.MsgRevokeAllowance;
                toProto(message: _130.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _130.MsgRevokeAllowance): _130.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _130.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _130.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_130.MsgRevokeAllowanceResponse>): _130.MsgRevokeAllowanceResponse;
                fromAmino(_: _130.MsgRevokeAllowanceResponseAmino): _130.MsgRevokeAllowanceResponse;
                toAmino(_: _130.MsgRevokeAllowanceResponse): _130.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _130.MsgRevokeAllowanceResponseAminoMsg): _130.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _130.MsgRevokeAllowanceResponse): _130.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _130.MsgRevokeAllowanceResponseProtoMsg): _130.MsgRevokeAllowanceResponse;
                toProto(message: _130.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _130.MsgRevokeAllowanceResponse): _130.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _127.BasicAllowance | _127.PeriodicAllowance | _127.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _129.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryAllowanceRequest;
                fromPartial(object: Partial<_129.QueryAllowanceRequest>): _129.QueryAllowanceRequest;
                fromAmino(object: _129.QueryAllowanceRequestAmino): _129.QueryAllowanceRequest;
                toAmino(message: _129.QueryAllowanceRequest): _129.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _129.QueryAllowanceRequestAminoMsg): _129.QueryAllowanceRequest;
                toAminoMsg(message: _129.QueryAllowanceRequest): _129.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _129.QueryAllowanceRequestProtoMsg): _129.QueryAllowanceRequest;
                toProto(message: _129.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _129.QueryAllowanceRequest): _129.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _129.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryAllowanceResponse;
                fromPartial(object: Partial<_129.QueryAllowanceResponse>): _129.QueryAllowanceResponse;
                fromAmino(object: _129.QueryAllowanceResponseAmino): _129.QueryAllowanceResponse;
                toAmino(message: _129.QueryAllowanceResponse): _129.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _129.QueryAllowanceResponseAminoMsg): _129.QueryAllowanceResponse;
                toAminoMsg(message: _129.QueryAllowanceResponse): _129.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _129.QueryAllowanceResponseProtoMsg): _129.QueryAllowanceResponse;
                toProto(message: _129.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _129.QueryAllowanceResponse): _129.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _129.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryAllowancesRequest;
                fromPartial(object: Partial<_129.QueryAllowancesRequest>): _129.QueryAllowancesRequest;
                fromAmino(object: _129.QueryAllowancesRequestAmino): _129.QueryAllowancesRequest;
                toAmino(message: _129.QueryAllowancesRequest): _129.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _129.QueryAllowancesRequestAminoMsg): _129.QueryAllowancesRequest;
                toAminoMsg(message: _129.QueryAllowancesRequest): _129.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _129.QueryAllowancesRequestProtoMsg): _129.QueryAllowancesRequest;
                toProto(message: _129.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _129.QueryAllowancesRequest): _129.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _129.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryAllowancesResponse;
                fromPartial(object: Partial<_129.QueryAllowancesResponse>): _129.QueryAllowancesResponse;
                fromAmino(object: _129.QueryAllowancesResponseAmino): _129.QueryAllowancesResponse;
                toAmino(message: _129.QueryAllowancesResponse): _129.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _129.QueryAllowancesResponseAminoMsg): _129.QueryAllowancesResponse;
                toAminoMsg(message: _129.QueryAllowancesResponse): _129.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _129.QueryAllowancesResponseProtoMsg): _129.QueryAllowancesResponse;
                toProto(message: _129.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _129.QueryAllowancesResponse): _129.QueryAllowancesResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _128.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.GenesisState;
                fromPartial(object: Partial<_128.GenesisState>): _128.GenesisState;
                fromAmino(object: _128.GenesisStateAmino): _128.GenesisState;
                toAmino(message: _128.GenesisState): _128.GenesisStateAmino;
                fromAminoMsg(object: _128.GenesisStateAminoMsg): _128.GenesisState;
                toAminoMsg(message: _128.GenesisState): _128.GenesisStateAminoMsg;
                fromProtoMsg(message: _128.GenesisStateProtoMsg): _128.GenesisState;
                toProto(message: _128.GenesisState): Uint8Array;
                toProtoMsg(message: _128.GenesisState): _128.GenesisStateProtoMsg;
            };
            BasicAllowance: {
                typeUrl: string;
                encode(message: _127.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.BasicAllowance;
                fromPartial(object: Partial<_127.BasicAllowance>): _127.BasicAllowance;
                fromAmino(object: _127.BasicAllowanceAmino): _127.BasicAllowance;
                toAmino(message: _127.BasicAllowance): _127.BasicAllowanceAmino;
                fromAminoMsg(object: _127.BasicAllowanceAminoMsg): _127.BasicAllowance;
                toAminoMsg(message: _127.BasicAllowance): _127.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _127.BasicAllowanceProtoMsg): _127.BasicAllowance;
                toProto(message: _127.BasicAllowance): Uint8Array;
                toProtoMsg(message: _127.BasicAllowance): _127.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _127.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.PeriodicAllowance;
                fromPartial(object: Partial<_127.PeriodicAllowance>): _127.PeriodicAllowance;
                fromAmino(object: _127.PeriodicAllowanceAmino): _127.PeriodicAllowance;
                toAmino(message: _127.PeriodicAllowance): _127.PeriodicAllowanceAmino;
                fromAminoMsg(object: _127.PeriodicAllowanceAminoMsg): _127.PeriodicAllowance;
                toAminoMsg(message: _127.PeriodicAllowance): _127.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _127.PeriodicAllowanceProtoMsg): _127.PeriodicAllowance;
                toProto(message: _127.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _127.PeriodicAllowance): _127.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _127.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.AllowedMsgAllowance;
                fromPartial(object: Partial<_127.AllowedMsgAllowance>): _127.AllowedMsgAllowance;
                fromAmino(object: _127.AllowedMsgAllowanceAmino): _127.AllowedMsgAllowance;
                toAmino(message: _127.AllowedMsgAllowance): _127.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _127.AllowedMsgAllowanceAminoMsg): _127.AllowedMsgAllowance;
                toAminoMsg(message: _127.AllowedMsgAllowance): _127.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _127.AllowedMsgAllowanceProtoMsg): _127.AllowedMsgAllowance;
                toProto(message: _127.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _127.AllowedMsgAllowance): _127.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _127.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.Grant;
                fromPartial(object: Partial<_127.Grant>): _127.Grant;
                fromAmino(object: _127.GrantAmino): _127.Grant;
                toAmino(message: _127.Grant): _127.GrantAmino;
                fromAminoMsg(object: _127.GrantAminoMsg): _127.Grant;
                toAminoMsg(message: _127.Grant): _127.GrantAminoMsg;
                fromProtoMsg(message: _127.GrantProtoMsg): _127.Grant;
                toProto(message: _127.Grant): Uint8Array;
                toProtoMsg(message: _127.Grant): _127.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                typeUrl: string;
                encode(message: _131.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.GenesisState;
                fromPartial(object: Partial<_131.GenesisState>): _131.GenesisState;
                fromAmino(object: _131.GenesisStateAmino): _131.GenesisState;
                toAmino(message: _131.GenesisState): _131.GenesisStateAmino;
                fromAminoMsg(object: _131.GenesisStateAminoMsg): _131.GenesisState;
                toAminoMsg(message: _131.GenesisState): _131.GenesisStateAminoMsg;
                fromProtoMsg(message: _131.GenesisStateProtoMsg): _131.GenesisState;
                toProto(message: _131.GenesisState): Uint8Array;
                toProtoMsg(message: _131.GenesisState): _131.GenesisStateProtoMsg;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _320.MsgClientImpl;
            QueryClientImpl: typeof _307.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _134.QueryProposalRequest): Promise<_134.QueryProposalResponse>;
                proposals(request: _134.QueryProposalsRequest): Promise<_134.QueryProposalsResponse>;
                vote(request: _134.QueryVoteRequest): Promise<_134.QueryVoteResponse>;
                votes(request: _134.QueryVotesRequest): Promise<_134.QueryVotesResponse>;
                params(request: _134.QueryParamsRequest): Promise<_134.QueryParamsResponse>;
                deposit(request: _134.QueryDepositRequest): Promise<_134.QueryDepositResponse>;
                deposits(request: _134.QueryDepositsRequest): Promise<_134.QueryDepositsResponse>;
                tallyResult(request: _134.QueryTallyResultRequest): Promise<_134.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _292.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _135.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _135.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _135.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _135.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _135.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _135.MsgSubmitProposal;
                    };
                    vote(value: _135.MsgVote): {
                        typeUrl: string;
                        value: _135.MsgVote;
                    };
                    voteWeighted(value: _135.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _135.MsgVoteWeighted;
                    };
                    deposit(value: _135.MsgDeposit): {
                        typeUrl: string;
                        value: _135.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _135.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _135.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _135.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _135.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _135.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _135.MsgSubmitProposal;
                    };
                    vote(value: _135.MsgVote): {
                        typeUrl: string;
                        value: _135.MsgVote;
                    };
                    voteWeighted(value: _135.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _135.MsgVoteWeighted;
                    };
                    deposit(value: _135.MsgDeposit): {
                        typeUrl: string;
                        value: _135.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _135.MsgSubmitProposal) => _135.MsgSubmitProposalAmino;
                    fromAmino: (object: _135.MsgSubmitProposalAmino) => _135.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _135.MsgVote) => _135.MsgVoteAmino;
                    fromAmino: (object: _135.MsgVoteAmino) => _135.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _135.MsgVoteWeighted) => _135.MsgVoteWeightedAmino;
                    fromAmino: (object: _135.MsgVoteWeightedAmino) => _135.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _135.MsgDeposit) => _135.MsgDepositAmino;
                    fromAmino: (object: _135.MsgDepositAmino) => _135.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _135.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.MsgSubmitProposal;
                fromPartial(object: Partial<_135.MsgSubmitProposal>): _135.MsgSubmitProposal;
                fromAmino(object: _135.MsgSubmitProposalAmino): _135.MsgSubmitProposal;
                toAmino(message: _135.MsgSubmitProposal): _135.MsgSubmitProposalAmino;
                fromAminoMsg(object: _135.MsgSubmitProposalAminoMsg): _135.MsgSubmitProposal;
                toAminoMsg(message: _135.MsgSubmitProposal): _135.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _135.MsgSubmitProposalProtoMsg): _135.MsgSubmitProposal;
                toProto(message: _135.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _135.MsgSubmitProposal): _135.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _135.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_135.MsgSubmitProposalResponse>): _135.MsgSubmitProposalResponse;
                fromAmino(object: _135.MsgSubmitProposalResponseAmino): _135.MsgSubmitProposalResponse;
                toAmino(message: _135.MsgSubmitProposalResponse): _135.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _135.MsgSubmitProposalResponseAminoMsg): _135.MsgSubmitProposalResponse;
                toAminoMsg(message: _135.MsgSubmitProposalResponse): _135.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _135.MsgSubmitProposalResponseProtoMsg): _135.MsgSubmitProposalResponse;
                toProto(message: _135.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _135.MsgSubmitProposalResponse): _135.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _135.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.MsgVote;
                fromPartial(object: Partial<_135.MsgVote>): _135.MsgVote;
                fromAmino(object: _135.MsgVoteAmino): _135.MsgVote;
                toAmino(message: _135.MsgVote): _135.MsgVoteAmino;
                fromAminoMsg(object: _135.MsgVoteAminoMsg): _135.MsgVote;
                toAminoMsg(message: _135.MsgVote): _135.MsgVoteAminoMsg;
                fromProtoMsg(message: _135.MsgVoteProtoMsg): _135.MsgVote;
                toProto(message: _135.MsgVote): Uint8Array;
                toProtoMsg(message: _135.MsgVote): _135.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _135.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _135.MsgVoteResponse;
                fromPartial(_: Partial<_135.MsgVoteResponse>): _135.MsgVoteResponse;
                fromAmino(_: _135.MsgVoteResponseAmino): _135.MsgVoteResponse;
                toAmino(_: _135.MsgVoteResponse): _135.MsgVoteResponseAmino;
                fromAminoMsg(object: _135.MsgVoteResponseAminoMsg): _135.MsgVoteResponse;
                toAminoMsg(message: _135.MsgVoteResponse): _135.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _135.MsgVoteResponseProtoMsg): _135.MsgVoteResponse;
                toProto(message: _135.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _135.MsgVoteResponse): _135.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _135.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.MsgVoteWeighted;
                fromPartial(object: Partial<_135.MsgVoteWeighted>): _135.MsgVoteWeighted;
                fromAmino(object: _135.MsgVoteWeightedAmino): _135.MsgVoteWeighted;
                toAmino(message: _135.MsgVoteWeighted): _135.MsgVoteWeightedAmino;
                fromAminoMsg(object: _135.MsgVoteWeightedAminoMsg): _135.MsgVoteWeighted;
                toAminoMsg(message: _135.MsgVoteWeighted): _135.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _135.MsgVoteWeightedProtoMsg): _135.MsgVoteWeighted;
                toProto(message: _135.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _135.MsgVoteWeighted): _135.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _135.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _135.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_135.MsgVoteWeightedResponse>): _135.MsgVoteWeightedResponse;
                fromAmino(_: _135.MsgVoteWeightedResponseAmino): _135.MsgVoteWeightedResponse;
                toAmino(_: _135.MsgVoteWeightedResponse): _135.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _135.MsgVoteWeightedResponseAminoMsg): _135.MsgVoteWeightedResponse;
                toAminoMsg(message: _135.MsgVoteWeightedResponse): _135.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _135.MsgVoteWeightedResponseProtoMsg): _135.MsgVoteWeightedResponse;
                toProto(message: _135.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _135.MsgVoteWeightedResponse): _135.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _135.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.MsgDeposit;
                fromPartial(object: Partial<_135.MsgDeposit>): _135.MsgDeposit;
                fromAmino(object: _135.MsgDepositAmino): _135.MsgDeposit;
                toAmino(message: _135.MsgDeposit): _135.MsgDepositAmino;
                fromAminoMsg(object: _135.MsgDepositAminoMsg): _135.MsgDeposit;
                toAminoMsg(message: _135.MsgDeposit): _135.MsgDepositAminoMsg;
                fromProtoMsg(message: _135.MsgDepositProtoMsg): _135.MsgDeposit;
                toProto(message: _135.MsgDeposit): Uint8Array;
                toProtoMsg(message: _135.MsgDeposit): _135.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _135.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _135.MsgDepositResponse;
                fromPartial(_: Partial<_135.MsgDepositResponse>): _135.MsgDepositResponse;
                fromAmino(_: _135.MsgDepositResponseAmino): _135.MsgDepositResponse;
                toAmino(_: _135.MsgDepositResponse): _135.MsgDepositResponseAmino;
                fromAminoMsg(object: _135.MsgDepositResponseAminoMsg): _135.MsgDepositResponse;
                toAminoMsg(message: _135.MsgDepositResponse): _135.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _135.MsgDepositResponseProtoMsg): _135.MsgDepositResponse;
                toProto(message: _135.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _135.MsgDepositResponse): _135.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _133.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _134.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryProposalRequest;
                fromPartial(object: Partial<_134.QueryProposalRequest>): _134.QueryProposalRequest;
                fromAmino(object: _134.QueryProposalRequestAmino): _134.QueryProposalRequest;
                toAmino(message: _134.QueryProposalRequest): _134.QueryProposalRequestAmino;
                fromAminoMsg(object: _134.QueryProposalRequestAminoMsg): _134.QueryProposalRequest;
                toAminoMsg(message: _134.QueryProposalRequest): _134.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _134.QueryProposalRequestProtoMsg): _134.QueryProposalRequest;
                toProto(message: _134.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _134.QueryProposalRequest): _134.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _134.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryProposalResponse;
                fromPartial(object: Partial<_134.QueryProposalResponse>): _134.QueryProposalResponse;
                fromAmino(object: _134.QueryProposalResponseAmino): _134.QueryProposalResponse;
                toAmino(message: _134.QueryProposalResponse): _134.QueryProposalResponseAmino;
                fromAminoMsg(object: _134.QueryProposalResponseAminoMsg): _134.QueryProposalResponse;
                toAminoMsg(message: _134.QueryProposalResponse): _134.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _134.QueryProposalResponseProtoMsg): _134.QueryProposalResponse;
                toProto(message: _134.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _134.QueryProposalResponse): _134.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _134.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryProposalsRequest;
                fromPartial(object: Partial<_134.QueryProposalsRequest>): _134.QueryProposalsRequest;
                fromAmino(object: _134.QueryProposalsRequestAmino): _134.QueryProposalsRequest;
                toAmino(message: _134.QueryProposalsRequest): _134.QueryProposalsRequestAmino;
                fromAminoMsg(object: _134.QueryProposalsRequestAminoMsg): _134.QueryProposalsRequest;
                toAminoMsg(message: _134.QueryProposalsRequest): _134.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _134.QueryProposalsRequestProtoMsg): _134.QueryProposalsRequest;
                toProto(message: _134.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _134.QueryProposalsRequest): _134.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _134.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryProposalsResponse;
                fromPartial(object: Partial<_134.QueryProposalsResponse>): _134.QueryProposalsResponse;
                fromAmino(object: _134.QueryProposalsResponseAmino): _134.QueryProposalsResponse;
                toAmino(message: _134.QueryProposalsResponse): _134.QueryProposalsResponseAmino;
                fromAminoMsg(object: _134.QueryProposalsResponseAminoMsg): _134.QueryProposalsResponse;
                toAminoMsg(message: _134.QueryProposalsResponse): _134.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _134.QueryProposalsResponseProtoMsg): _134.QueryProposalsResponse;
                toProto(message: _134.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _134.QueryProposalsResponse): _134.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _134.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryVoteRequest;
                fromPartial(object: Partial<_134.QueryVoteRequest>): _134.QueryVoteRequest;
                fromAmino(object: _134.QueryVoteRequestAmino): _134.QueryVoteRequest;
                toAmino(message: _134.QueryVoteRequest): _134.QueryVoteRequestAmino;
                fromAminoMsg(object: _134.QueryVoteRequestAminoMsg): _134.QueryVoteRequest;
                toAminoMsg(message: _134.QueryVoteRequest): _134.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _134.QueryVoteRequestProtoMsg): _134.QueryVoteRequest;
                toProto(message: _134.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _134.QueryVoteRequest): _134.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _134.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryVoteResponse;
                fromPartial(object: Partial<_134.QueryVoteResponse>): _134.QueryVoteResponse;
                fromAmino(object: _134.QueryVoteResponseAmino): _134.QueryVoteResponse;
                toAmino(message: _134.QueryVoteResponse): _134.QueryVoteResponseAmino;
                fromAminoMsg(object: _134.QueryVoteResponseAminoMsg): _134.QueryVoteResponse;
                toAminoMsg(message: _134.QueryVoteResponse): _134.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _134.QueryVoteResponseProtoMsg): _134.QueryVoteResponse;
                toProto(message: _134.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _134.QueryVoteResponse): _134.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _134.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryVotesRequest;
                fromPartial(object: Partial<_134.QueryVotesRequest>): _134.QueryVotesRequest;
                fromAmino(object: _134.QueryVotesRequestAmino): _134.QueryVotesRequest;
                toAmino(message: _134.QueryVotesRequest): _134.QueryVotesRequestAmino;
                fromAminoMsg(object: _134.QueryVotesRequestAminoMsg): _134.QueryVotesRequest;
                toAminoMsg(message: _134.QueryVotesRequest): _134.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _134.QueryVotesRequestProtoMsg): _134.QueryVotesRequest;
                toProto(message: _134.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _134.QueryVotesRequest): _134.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _134.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryVotesResponse;
                fromPartial(object: Partial<_134.QueryVotesResponse>): _134.QueryVotesResponse;
                fromAmino(object: _134.QueryVotesResponseAmino): _134.QueryVotesResponse;
                toAmino(message: _134.QueryVotesResponse): _134.QueryVotesResponseAmino;
                fromAminoMsg(object: _134.QueryVotesResponseAminoMsg): _134.QueryVotesResponse;
                toAminoMsg(message: _134.QueryVotesResponse): _134.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _134.QueryVotesResponseProtoMsg): _134.QueryVotesResponse;
                toProto(message: _134.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _134.QueryVotesResponse): _134.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _134.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryParamsRequest;
                fromPartial(object: Partial<_134.QueryParamsRequest>): _134.QueryParamsRequest;
                fromAmino(object: _134.QueryParamsRequestAmino): _134.QueryParamsRequest;
                toAmino(message: _134.QueryParamsRequest): _134.QueryParamsRequestAmino;
                fromAminoMsg(object: _134.QueryParamsRequestAminoMsg): _134.QueryParamsRequest;
                toAminoMsg(message: _134.QueryParamsRequest): _134.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _134.QueryParamsRequestProtoMsg): _134.QueryParamsRequest;
                toProto(message: _134.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _134.QueryParamsRequest): _134.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _134.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryParamsResponse;
                fromPartial(object: Partial<_134.QueryParamsResponse>): _134.QueryParamsResponse;
                fromAmino(object: _134.QueryParamsResponseAmino): _134.QueryParamsResponse;
                toAmino(message: _134.QueryParamsResponse): _134.QueryParamsResponseAmino;
                fromAminoMsg(object: _134.QueryParamsResponseAminoMsg): _134.QueryParamsResponse;
                toAminoMsg(message: _134.QueryParamsResponse): _134.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _134.QueryParamsResponseProtoMsg): _134.QueryParamsResponse;
                toProto(message: _134.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _134.QueryParamsResponse): _134.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _134.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryDepositRequest;
                fromPartial(object: Partial<_134.QueryDepositRequest>): _134.QueryDepositRequest;
                fromAmino(object: _134.QueryDepositRequestAmino): _134.QueryDepositRequest;
                toAmino(message: _134.QueryDepositRequest): _134.QueryDepositRequestAmino;
                fromAminoMsg(object: _134.QueryDepositRequestAminoMsg): _134.QueryDepositRequest;
                toAminoMsg(message: _134.QueryDepositRequest): _134.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _134.QueryDepositRequestProtoMsg): _134.QueryDepositRequest;
                toProto(message: _134.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _134.QueryDepositRequest): _134.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _134.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryDepositResponse;
                fromPartial(object: Partial<_134.QueryDepositResponse>): _134.QueryDepositResponse;
                fromAmino(object: _134.QueryDepositResponseAmino): _134.QueryDepositResponse;
                toAmino(message: _134.QueryDepositResponse): _134.QueryDepositResponseAmino;
                fromAminoMsg(object: _134.QueryDepositResponseAminoMsg): _134.QueryDepositResponse;
                toAminoMsg(message: _134.QueryDepositResponse): _134.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _134.QueryDepositResponseProtoMsg): _134.QueryDepositResponse;
                toProto(message: _134.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _134.QueryDepositResponse): _134.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _134.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryDepositsRequest;
                fromPartial(object: Partial<_134.QueryDepositsRequest>): _134.QueryDepositsRequest;
                fromAmino(object: _134.QueryDepositsRequestAmino): _134.QueryDepositsRequest;
                toAmino(message: _134.QueryDepositsRequest): _134.QueryDepositsRequestAmino;
                fromAminoMsg(object: _134.QueryDepositsRequestAminoMsg): _134.QueryDepositsRequest;
                toAminoMsg(message: _134.QueryDepositsRequest): _134.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _134.QueryDepositsRequestProtoMsg): _134.QueryDepositsRequest;
                toProto(message: _134.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _134.QueryDepositsRequest): _134.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _134.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryDepositsResponse;
                fromPartial(object: Partial<_134.QueryDepositsResponse>): _134.QueryDepositsResponse;
                fromAmino(object: _134.QueryDepositsResponseAmino): _134.QueryDepositsResponse;
                toAmino(message: _134.QueryDepositsResponse): _134.QueryDepositsResponseAmino;
                fromAminoMsg(object: _134.QueryDepositsResponseAminoMsg): _134.QueryDepositsResponse;
                toAminoMsg(message: _134.QueryDepositsResponse): _134.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _134.QueryDepositsResponseProtoMsg): _134.QueryDepositsResponse;
                toProto(message: _134.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _134.QueryDepositsResponse): _134.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _134.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryTallyResultRequest;
                fromPartial(object: Partial<_134.QueryTallyResultRequest>): _134.QueryTallyResultRequest;
                fromAmino(object: _134.QueryTallyResultRequestAmino): _134.QueryTallyResultRequest;
                toAmino(message: _134.QueryTallyResultRequest): _134.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _134.QueryTallyResultRequestAminoMsg): _134.QueryTallyResultRequest;
                toAminoMsg(message: _134.QueryTallyResultRequest): _134.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _134.QueryTallyResultRequestProtoMsg): _134.QueryTallyResultRequest;
                toProto(message: _134.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _134.QueryTallyResultRequest): _134.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _134.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryTallyResultResponse;
                fromPartial(object: Partial<_134.QueryTallyResultResponse>): _134.QueryTallyResultResponse;
                fromAmino(object: _134.QueryTallyResultResponseAmino): _134.QueryTallyResultResponse;
                toAmino(message: _134.QueryTallyResultResponse): _134.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _134.QueryTallyResultResponseAminoMsg): _134.QueryTallyResultResponse;
                toAminoMsg(message: _134.QueryTallyResultResponse): _134.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _134.QueryTallyResultResponseProtoMsg): _134.QueryTallyResultResponse;
                toProto(message: _134.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _134.QueryTallyResultResponse): _134.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _133.VoteOption;
            voteOptionToJSON(object: _133.VoteOption): string;
            proposalStatusFromJSON(object: any): _133.ProposalStatus;
            proposalStatusToJSON(object: _133.ProposalStatus): string;
            VoteOption: typeof _133.VoteOption;
            VoteOptionSDKType: typeof _133.VoteOption;
            VoteOptionAmino: typeof _133.VoteOption;
            ProposalStatus: typeof _133.ProposalStatus;
            ProposalStatusSDKType: typeof _133.ProposalStatus;
            ProposalStatusAmino: typeof _133.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _133.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.WeightedVoteOption;
                fromPartial(object: Partial<_133.WeightedVoteOption>): _133.WeightedVoteOption;
                fromAmino(object: _133.WeightedVoteOptionAmino): _133.WeightedVoteOption;
                toAmino(message: _133.WeightedVoteOption): _133.WeightedVoteOptionAmino;
                fromAminoMsg(object: _133.WeightedVoteOptionAminoMsg): _133.WeightedVoteOption;
                toAminoMsg(message: _133.WeightedVoteOption): _133.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _133.WeightedVoteOptionProtoMsg): _133.WeightedVoteOption;
                toProto(message: _133.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _133.WeightedVoteOption): _133.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _133.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.TextProposal;
                fromPartial(object: Partial<_133.TextProposal>): _133.TextProposal;
                fromAmino(object: _133.TextProposalAmino): _133.TextProposal;
                toAmino(message: _133.TextProposal): _133.TextProposalAmino;
                fromAminoMsg(object: _133.TextProposalAminoMsg): _133.TextProposal;
                toAminoMsg(message: _133.TextProposal): _133.TextProposalAminoMsg;
                fromProtoMsg(message: _133.TextProposalProtoMsg): _133.TextProposal;
                toProto(message: _133.TextProposal): Uint8Array;
                toProtoMsg(message: _133.TextProposal): _133.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _133.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.Deposit;
                fromPartial(object: Partial<_133.Deposit>): _133.Deposit;
                fromAmino(object: _133.DepositAmino): _133.Deposit;
                toAmino(message: _133.Deposit): _133.DepositAmino;
                fromAminoMsg(object: _133.DepositAminoMsg): _133.Deposit;
                toAminoMsg(message: _133.Deposit): _133.DepositAminoMsg;
                fromProtoMsg(message: _133.DepositProtoMsg): _133.Deposit;
                toProto(message: _133.Deposit): Uint8Array;
                toProtoMsg(message: _133.Deposit): _133.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _133.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.Proposal;
                fromPartial(object: Partial<_133.Proposal>): _133.Proposal;
                fromAmino(object: _133.ProposalAmino): _133.Proposal;
                toAmino(message: _133.Proposal): _133.ProposalAmino;
                fromAminoMsg(object: _133.ProposalAminoMsg): _133.Proposal;
                toAminoMsg(message: _133.Proposal): _133.ProposalAminoMsg;
                fromProtoMsg(message: _133.ProposalProtoMsg): _133.Proposal;
                toProto(message: _133.Proposal): Uint8Array;
                toProtoMsg(message: _133.Proposal): _133.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _133.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.TallyResult;
                fromPartial(object: Partial<_133.TallyResult>): _133.TallyResult;
                fromAmino(object: _133.TallyResultAmino): _133.TallyResult;
                toAmino(message: _133.TallyResult): _133.TallyResultAmino;
                fromAminoMsg(object: _133.TallyResultAminoMsg): _133.TallyResult;
                toAminoMsg(message: _133.TallyResult): _133.TallyResultAminoMsg;
                fromProtoMsg(message: _133.TallyResultProtoMsg): _133.TallyResult;
                toProto(message: _133.TallyResult): Uint8Array;
                toProtoMsg(message: _133.TallyResult): _133.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _133.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.Vote;
                fromPartial(object: Partial<_133.Vote>): _133.Vote;
                fromAmino(object: _133.VoteAmino): _133.Vote;
                toAmino(message: _133.Vote): _133.VoteAmino;
                fromAminoMsg(object: _133.VoteAminoMsg): _133.Vote;
                toAminoMsg(message: _133.Vote): _133.VoteAminoMsg;
                fromProtoMsg(message: _133.VoteProtoMsg): _133.Vote;
                toProto(message: _133.Vote): Uint8Array;
                toProtoMsg(message: _133.Vote): _133.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _133.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.DepositParams;
                fromPartial(object: Partial<_133.DepositParams>): _133.DepositParams;
                fromAmino(object: _133.DepositParamsAmino): _133.DepositParams;
                toAmino(message: _133.DepositParams): _133.DepositParamsAmino;
                fromAminoMsg(object: _133.DepositParamsAminoMsg): _133.DepositParams;
                toAminoMsg(message: _133.DepositParams): _133.DepositParamsAminoMsg;
                fromProtoMsg(message: _133.DepositParamsProtoMsg): _133.DepositParams;
                toProto(message: _133.DepositParams): Uint8Array;
                toProtoMsg(message: _133.DepositParams): _133.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _133.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.VotingParams;
                fromPartial(object: Partial<_133.VotingParams>): _133.VotingParams;
                fromAmino(object: _133.VotingParamsAmino): _133.VotingParams;
                toAmino(message: _133.VotingParams): _133.VotingParamsAmino;
                fromAminoMsg(object: _133.VotingParamsAminoMsg): _133.VotingParams;
                toAminoMsg(message: _133.VotingParams): _133.VotingParamsAminoMsg;
                fromProtoMsg(message: _133.VotingParamsProtoMsg): _133.VotingParams;
                toProto(message: _133.VotingParams): Uint8Array;
                toProtoMsg(message: _133.VotingParams): _133.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _133.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.TallyParams;
                fromPartial(object: Partial<_133.TallyParams>): _133.TallyParams;
                fromAmino(object: _133.TallyParamsAmino): _133.TallyParams;
                toAmino(message: _133.TallyParams): _133.TallyParamsAmino;
                fromAminoMsg(object: _133.TallyParamsAminoMsg): _133.TallyParams;
                toAminoMsg(message: _133.TallyParams): _133.TallyParamsAminoMsg;
                fromProtoMsg(message: _133.TallyParamsProtoMsg): _133.TallyParams;
                toProto(message: _133.TallyParams): Uint8Array;
                toProtoMsg(message: _133.TallyParams): _133.TallyParamsProtoMsg;
            };
            ProposalVotingPeriod: {
                typeUrl: string;
                encode(message: _133.ProposalVotingPeriod, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.ProposalVotingPeriod;
                fromPartial(object: Partial<_133.ProposalVotingPeriod>): _133.ProposalVotingPeriod;
                fromAmino(object: _133.ProposalVotingPeriodAmino): _133.ProposalVotingPeriod;
                toAmino(message: _133.ProposalVotingPeriod): _133.ProposalVotingPeriodAmino;
                fromAminoMsg(object: _133.ProposalVotingPeriodAminoMsg): _133.ProposalVotingPeriod;
                toAminoMsg(message: _133.ProposalVotingPeriod): _133.ProposalVotingPeriodAminoMsg;
                fromProtoMsg(message: _133.ProposalVotingPeriodProtoMsg): _133.ProposalVotingPeriod;
                toProto(message: _133.ProposalVotingPeriod): Uint8Array;
                toProtoMsg(message: _133.ProposalVotingPeriod): _133.ProposalVotingPeriodProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _132.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.GenesisState;
                fromPartial(object: Partial<_132.GenesisState>): _132.GenesisState;
                fromAmino(object: _132.GenesisStateAmino): _132.GenesisState;
                toAmino(message: _132.GenesisState): _132.GenesisStateAmino;
                fromAminoMsg(object: _132.GenesisStateAminoMsg): _132.GenesisState;
                toAminoMsg(message: _132.GenesisState): _132.GenesisStateAminoMsg;
                fromProtoMsg(message: _132.GenesisStateProtoMsg): _132.GenesisState;
                toProto(message: _132.GenesisState): Uint8Array;
                toProtoMsg(message: _132.GenesisState): _132.GenesisStateProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _308.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _138.QueryParamsRequest): Promise<_138.QueryParamsResponse>;
                inflation(request?: _138.QueryInflationRequest): Promise<_138.QueryInflationResponse>;
                annualProvisions(request?: _138.QueryAnnualProvisionsRequest): Promise<_138.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _293.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _138.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _138.QueryParamsRequest;
                fromPartial(_: Partial<_138.QueryParamsRequest>): _138.QueryParamsRequest;
                fromAmino(_: _138.QueryParamsRequestAmino): _138.QueryParamsRequest;
                toAmino(_: _138.QueryParamsRequest): _138.QueryParamsRequestAmino;
                fromAminoMsg(object: _138.QueryParamsRequestAminoMsg): _138.QueryParamsRequest;
                toAminoMsg(message: _138.QueryParamsRequest): _138.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _138.QueryParamsRequestProtoMsg): _138.QueryParamsRequest;
                toProto(message: _138.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _138.QueryParamsRequest): _138.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _138.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.QueryParamsResponse;
                fromPartial(object: Partial<_138.QueryParamsResponse>): _138.QueryParamsResponse;
                fromAmino(object: _138.QueryParamsResponseAmino): _138.QueryParamsResponse;
                toAmino(message: _138.QueryParamsResponse): _138.QueryParamsResponseAmino;
                fromAminoMsg(object: _138.QueryParamsResponseAminoMsg): _138.QueryParamsResponse;
                toAminoMsg(message: _138.QueryParamsResponse): _138.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _138.QueryParamsResponseProtoMsg): _138.QueryParamsResponse;
                toProto(message: _138.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _138.QueryParamsResponse): _138.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _138.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _138.QueryInflationRequest;
                fromPartial(_: Partial<_138.QueryInflationRequest>): _138.QueryInflationRequest;
                fromAmino(_: _138.QueryInflationRequestAmino): _138.QueryInflationRequest;
                toAmino(_: _138.QueryInflationRequest): _138.QueryInflationRequestAmino;
                fromAminoMsg(object: _138.QueryInflationRequestAminoMsg): _138.QueryInflationRequest;
                toAminoMsg(message: _138.QueryInflationRequest): _138.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _138.QueryInflationRequestProtoMsg): _138.QueryInflationRequest;
                toProto(message: _138.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _138.QueryInflationRequest): _138.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _138.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.QueryInflationResponse;
                fromPartial(object: Partial<_138.QueryInflationResponse>): _138.QueryInflationResponse;
                fromAmino(object: _138.QueryInflationResponseAmino): _138.QueryInflationResponse;
                toAmino(message: _138.QueryInflationResponse): _138.QueryInflationResponseAmino;
                fromAminoMsg(object: _138.QueryInflationResponseAminoMsg): _138.QueryInflationResponse;
                toAminoMsg(message: _138.QueryInflationResponse): _138.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _138.QueryInflationResponseProtoMsg): _138.QueryInflationResponse;
                toProto(message: _138.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _138.QueryInflationResponse): _138.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _138.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _138.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_138.QueryAnnualProvisionsRequest>): _138.QueryAnnualProvisionsRequest;
                fromAmino(_: _138.QueryAnnualProvisionsRequestAmino): _138.QueryAnnualProvisionsRequest;
                toAmino(_: _138.QueryAnnualProvisionsRequest): _138.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _138.QueryAnnualProvisionsRequestAminoMsg): _138.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _138.QueryAnnualProvisionsRequest): _138.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _138.QueryAnnualProvisionsRequestProtoMsg): _138.QueryAnnualProvisionsRequest;
                toProto(message: _138.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _138.QueryAnnualProvisionsRequest): _138.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _138.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_138.QueryAnnualProvisionsResponse>): _138.QueryAnnualProvisionsResponse;
                fromAmino(object: _138.QueryAnnualProvisionsResponseAmino): _138.QueryAnnualProvisionsResponse;
                toAmino(message: _138.QueryAnnualProvisionsResponse): _138.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _138.QueryAnnualProvisionsResponseAminoMsg): _138.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _138.QueryAnnualProvisionsResponse): _138.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _138.QueryAnnualProvisionsResponseProtoMsg): _138.QueryAnnualProvisionsResponse;
                toProto(message: _138.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _138.QueryAnnualProvisionsResponse): _138.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _137.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.Minter;
                fromPartial(object: Partial<_137.Minter>): _137.Minter;
                fromAmino(object: _137.MinterAmino): _137.Minter;
                toAmino(message: _137.Minter): _137.MinterAmino;
                fromAminoMsg(object: _137.MinterAminoMsg): _137.Minter;
                toAminoMsg(message: _137.Minter): _137.MinterAminoMsg;
                fromProtoMsg(message: _137.MinterProtoMsg): _137.Minter;
                toProto(message: _137.Minter): Uint8Array;
                toProtoMsg(message: _137.Minter): _137.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _137.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.Params;
                fromPartial(object: Partial<_137.Params>): _137.Params;
                fromAmino(object: _137.ParamsAmino): _137.Params;
                toAmino(message: _137.Params): _137.ParamsAmino;
                fromAminoMsg(object: _137.ParamsAminoMsg): _137.Params;
                toAminoMsg(message: _137.Params): _137.ParamsAminoMsg;
                fromProtoMsg(message: _137.ParamsProtoMsg): _137.Params;
                toProto(message: _137.Params): Uint8Array;
                toProtoMsg(message: _137.Params): _137.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _136.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.GenesisState;
                fromPartial(object: Partial<_136.GenesisState>): _136.GenesisState;
                fromAmino(object: _136.GenesisStateAmino): _136.GenesisState;
                toAmino(message: _136.GenesisState): _136.GenesisStateAmino;
                fromAminoMsg(object: _136.GenesisStateAminoMsg): _136.GenesisState;
                toAminoMsg(message: _136.GenesisState): _136.GenesisStateAminoMsg;
                fromProtoMsg(message: _136.GenesisStateProtoMsg): _136.GenesisState;
                toProto(message: _136.GenesisState): Uint8Array;
                toProtoMsg(message: _136.GenesisState): _136.GenesisStateProtoMsg;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _309.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _140.QueryParamsRequest): Promise<_140.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _294.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _140.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _140.QueryParamsRequest;
                fromPartial(object: Partial<_140.QueryParamsRequest>): _140.QueryParamsRequest;
                fromAmino(object: _140.QueryParamsRequestAmino): _140.QueryParamsRequest;
                toAmino(message: _140.QueryParamsRequest): _140.QueryParamsRequestAmino;
                fromAminoMsg(object: _140.QueryParamsRequestAminoMsg): _140.QueryParamsRequest;
                toAminoMsg(message: _140.QueryParamsRequest): _140.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _140.QueryParamsRequestProtoMsg): _140.QueryParamsRequest;
                toProto(message: _140.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _140.QueryParamsRequest): _140.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _140.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _140.QueryParamsResponse;
                fromPartial(object: Partial<_140.QueryParamsResponse>): _140.QueryParamsResponse;
                fromAmino(object: _140.QueryParamsResponseAmino): _140.QueryParamsResponse;
                toAmino(message: _140.QueryParamsResponse): _140.QueryParamsResponseAmino;
                fromAminoMsg(object: _140.QueryParamsResponseAminoMsg): _140.QueryParamsResponse;
                toAminoMsg(message: _140.QueryParamsResponse): _140.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _140.QueryParamsResponseProtoMsg): _140.QueryParamsResponse;
                toProto(message: _140.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _140.QueryParamsResponse): _140.QueryParamsResponseProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _139.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.ParameterChangeProposal;
                fromPartial(object: Partial<_139.ParameterChangeProposal>): _139.ParameterChangeProposal;
                fromAmino(object: _139.ParameterChangeProposalAmino): _139.ParameterChangeProposal;
                toAmino(message: _139.ParameterChangeProposal): _139.ParameterChangeProposalAmino;
                fromAminoMsg(object: _139.ParameterChangeProposalAminoMsg): _139.ParameterChangeProposal;
                toAminoMsg(message: _139.ParameterChangeProposal): _139.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _139.ParameterChangeProposalProtoMsg): _139.ParameterChangeProposal;
                toProto(message: _139.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _139.ParameterChangeProposal): _139.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _139.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.ParamChange;
                fromPartial(object: Partial<_139.ParamChange>): _139.ParamChange;
                fromAmino(object: _139.ParamChangeAmino): _139.ParamChange;
                toAmino(message: _139.ParamChange): _139.ParamChangeAmino;
                fromAminoMsg(object: _139.ParamChangeAminoMsg): _139.ParamChange;
                toAminoMsg(message: _139.ParamChange): _139.ParamChangeAminoMsg;
                fromProtoMsg(message: _139.ParamChangeProtoMsg): _139.ParamChange;
                toProto(message: _139.ParamChange): Uint8Array;
                toProtoMsg(message: _139.ParamChange): _139.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _321.MsgClientImpl;
            QueryClientImpl: typeof _310.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _142.QueryParamsRequest): Promise<_142.QueryParamsResponse>;
                signingInfo(request: _142.QuerySigningInfoRequest): Promise<_142.QuerySigningInfoResponse>;
                signingInfos(request?: _142.QuerySigningInfosRequest): Promise<_142.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _295.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _144.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _144.MsgUnjail): {
                        typeUrl: string;
                        value: _144.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _144.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _144.MsgUnjail): {
                        typeUrl: string;
                        value: _144.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _144.MsgUnjail) => _144.MsgUnjailAmino;
                    fromAmino: (object: _144.MsgUnjailAmino) => _144.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _144.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.MsgUnjail;
                fromPartial(object: Partial<_144.MsgUnjail>): _144.MsgUnjail;
                fromAmino(object: _144.MsgUnjailAmino): _144.MsgUnjail;
                toAmino(message: _144.MsgUnjail): _144.MsgUnjailAmino;
                fromAminoMsg(object: _144.MsgUnjailAminoMsg): _144.MsgUnjail;
                toAminoMsg(message: _144.MsgUnjail): _144.MsgUnjailAminoMsg;
                fromProtoMsg(message: _144.MsgUnjailProtoMsg): _144.MsgUnjail;
                toProto(message: _144.MsgUnjail): Uint8Array;
                toProtoMsg(message: _144.MsgUnjail): _144.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _144.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _144.MsgUnjailResponse;
                fromPartial(_: Partial<_144.MsgUnjailResponse>): _144.MsgUnjailResponse;
                fromAmino(_: _144.MsgUnjailResponseAmino): _144.MsgUnjailResponse;
                toAmino(_: _144.MsgUnjailResponse): _144.MsgUnjailResponseAmino;
                fromAminoMsg(object: _144.MsgUnjailResponseAminoMsg): _144.MsgUnjailResponse;
                toAminoMsg(message: _144.MsgUnjailResponse): _144.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _144.MsgUnjailResponseProtoMsg): _144.MsgUnjailResponse;
                toProto(message: _144.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _144.MsgUnjailResponse): _144.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _143.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.ValidatorSigningInfo;
                fromPartial(object: Partial<_143.ValidatorSigningInfo>): _143.ValidatorSigningInfo;
                fromAmino(object: _143.ValidatorSigningInfoAmino): _143.ValidatorSigningInfo;
                toAmino(message: _143.ValidatorSigningInfo): _143.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _143.ValidatorSigningInfoAminoMsg): _143.ValidatorSigningInfo;
                toAminoMsg(message: _143.ValidatorSigningInfo): _143.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _143.ValidatorSigningInfoProtoMsg): _143.ValidatorSigningInfo;
                toProto(message: _143.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _143.ValidatorSigningInfo): _143.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _143.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.Params;
                fromPartial(object: Partial<_143.Params>): _143.Params;
                fromAmino(object: _143.ParamsAmino): _143.Params;
                toAmino(message: _143.Params): _143.ParamsAmino;
                fromAminoMsg(object: _143.ParamsAminoMsg): _143.Params;
                toAminoMsg(message: _143.Params): _143.ParamsAminoMsg;
                fromProtoMsg(message: _143.ParamsProtoMsg): _143.Params;
                toProto(message: _143.Params): Uint8Array;
                toProtoMsg(message: _143.Params): _143.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _142.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _142.QueryParamsRequest;
                fromPartial(_: Partial<_142.QueryParamsRequest>): _142.QueryParamsRequest;
                fromAmino(_: _142.QueryParamsRequestAmino): _142.QueryParamsRequest;
                toAmino(_: _142.QueryParamsRequest): _142.QueryParamsRequestAmino;
                fromAminoMsg(object: _142.QueryParamsRequestAminoMsg): _142.QueryParamsRequest;
                toAminoMsg(message: _142.QueryParamsRequest): _142.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _142.QueryParamsRequestProtoMsg): _142.QueryParamsRequest;
                toProto(message: _142.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _142.QueryParamsRequest): _142.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _142.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryParamsResponse;
                fromPartial(object: Partial<_142.QueryParamsResponse>): _142.QueryParamsResponse;
                fromAmino(object: _142.QueryParamsResponseAmino): _142.QueryParamsResponse;
                toAmino(message: _142.QueryParamsResponse): _142.QueryParamsResponseAmino;
                fromAminoMsg(object: _142.QueryParamsResponseAminoMsg): _142.QueryParamsResponse;
                toAminoMsg(message: _142.QueryParamsResponse): _142.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _142.QueryParamsResponseProtoMsg): _142.QueryParamsResponse;
                toProto(message: _142.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _142.QueryParamsResponse): _142.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _142.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QuerySigningInfoRequest;
                fromPartial(object: Partial<_142.QuerySigningInfoRequest>): _142.QuerySigningInfoRequest;
                fromAmino(object: _142.QuerySigningInfoRequestAmino): _142.QuerySigningInfoRequest;
                toAmino(message: _142.QuerySigningInfoRequest): _142.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _142.QuerySigningInfoRequestAminoMsg): _142.QuerySigningInfoRequest;
                toAminoMsg(message: _142.QuerySigningInfoRequest): _142.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _142.QuerySigningInfoRequestProtoMsg): _142.QuerySigningInfoRequest;
                toProto(message: _142.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _142.QuerySigningInfoRequest): _142.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _142.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QuerySigningInfoResponse;
                fromPartial(object: Partial<_142.QuerySigningInfoResponse>): _142.QuerySigningInfoResponse;
                fromAmino(object: _142.QuerySigningInfoResponseAmino): _142.QuerySigningInfoResponse;
                toAmino(message: _142.QuerySigningInfoResponse): _142.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _142.QuerySigningInfoResponseAminoMsg): _142.QuerySigningInfoResponse;
                toAminoMsg(message: _142.QuerySigningInfoResponse): _142.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _142.QuerySigningInfoResponseProtoMsg): _142.QuerySigningInfoResponse;
                toProto(message: _142.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _142.QuerySigningInfoResponse): _142.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _142.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QuerySigningInfosRequest;
                fromPartial(object: Partial<_142.QuerySigningInfosRequest>): _142.QuerySigningInfosRequest;
                fromAmino(object: _142.QuerySigningInfosRequestAmino): _142.QuerySigningInfosRequest;
                toAmino(message: _142.QuerySigningInfosRequest): _142.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _142.QuerySigningInfosRequestAminoMsg): _142.QuerySigningInfosRequest;
                toAminoMsg(message: _142.QuerySigningInfosRequest): _142.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _142.QuerySigningInfosRequestProtoMsg): _142.QuerySigningInfosRequest;
                toProto(message: _142.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _142.QuerySigningInfosRequest): _142.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _142.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QuerySigningInfosResponse;
                fromPartial(object: Partial<_142.QuerySigningInfosResponse>): _142.QuerySigningInfosResponse;
                fromAmino(object: _142.QuerySigningInfosResponseAmino): _142.QuerySigningInfosResponse;
                toAmino(message: _142.QuerySigningInfosResponse): _142.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _142.QuerySigningInfosResponseAminoMsg): _142.QuerySigningInfosResponse;
                toAminoMsg(message: _142.QuerySigningInfosResponse): _142.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _142.QuerySigningInfosResponseProtoMsg): _142.QuerySigningInfosResponse;
                toProto(message: _142.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _142.QuerySigningInfosResponse): _142.QuerySigningInfosResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _141.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.GenesisState;
                fromPartial(object: Partial<_141.GenesisState>): _141.GenesisState;
                fromAmino(object: _141.GenesisStateAmino): _141.GenesisState;
                toAmino(message: _141.GenesisState): _141.GenesisStateAmino;
                fromAminoMsg(object: _141.GenesisStateAminoMsg): _141.GenesisState;
                toAminoMsg(message: _141.GenesisState): _141.GenesisStateAminoMsg;
                fromProtoMsg(message: _141.GenesisStateProtoMsg): _141.GenesisState;
                toProto(message: _141.GenesisState): Uint8Array;
                toProtoMsg(message: _141.GenesisState): _141.GenesisStateProtoMsg;
            };
            SigningInfo: {
                typeUrl: string;
                encode(message: _141.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.SigningInfo;
                fromPartial(object: Partial<_141.SigningInfo>): _141.SigningInfo;
                fromAmino(object: _141.SigningInfoAmino): _141.SigningInfo;
                toAmino(message: _141.SigningInfo): _141.SigningInfoAmino;
                fromAminoMsg(object: _141.SigningInfoAminoMsg): _141.SigningInfo;
                toAminoMsg(message: _141.SigningInfo): _141.SigningInfoAminoMsg;
                fromProtoMsg(message: _141.SigningInfoProtoMsg): _141.SigningInfo;
                toProto(message: _141.SigningInfo): Uint8Array;
                toProtoMsg(message: _141.SigningInfo): _141.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _141.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.ValidatorMissedBlocks;
                fromPartial(object: Partial<_141.ValidatorMissedBlocks>): _141.ValidatorMissedBlocks;
                fromAmino(object: _141.ValidatorMissedBlocksAmino): _141.ValidatorMissedBlocks;
                toAmino(message: _141.ValidatorMissedBlocks): _141.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _141.ValidatorMissedBlocksAminoMsg): _141.ValidatorMissedBlocks;
                toAminoMsg(message: _141.ValidatorMissedBlocks): _141.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _141.ValidatorMissedBlocksProtoMsg): _141.ValidatorMissedBlocks;
                toProto(message: _141.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _141.ValidatorMissedBlocks): _141.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _141.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.MissedBlock;
                fromPartial(object: Partial<_141.MissedBlock>): _141.MissedBlock;
                fromAmino(object: _141.MissedBlockAmino): _141.MissedBlock;
                toAmino(message: _141.MissedBlock): _141.MissedBlockAmino;
                fromAminoMsg(object: _141.MissedBlockAminoMsg): _141.MissedBlock;
                toAminoMsg(message: _141.MissedBlock): _141.MissedBlockAminoMsg;
                fromProtoMsg(message: _141.MissedBlockProtoMsg): _141.MissedBlock;
                toProto(message: _141.MissedBlock): Uint8Array;
                toProtoMsg(message: _141.MissedBlock): _141.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _322.MsgClientImpl;
            QueryClientImpl: typeof _311.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _147.QueryValidatorsRequest): Promise<_147.QueryValidatorsResponse>;
                validator(request: _147.QueryValidatorRequest): Promise<_147.QueryValidatorResponse>;
                validatorDelegations(request: _147.QueryValidatorDelegationsRequest): Promise<_147.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _147.QueryValidatorUnbondingDelegationsRequest): Promise<_147.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _147.QueryDelegationRequest): Promise<_147.QueryDelegationResponse>;
                unbondingDelegation(request: _147.QueryUnbondingDelegationRequest): Promise<_147.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _147.QueryDelegatorDelegationsRequest): Promise<_147.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _147.QueryDelegatorUnbondingDelegationsRequest): Promise<_147.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _147.QueryRedelegationsRequest): Promise<_147.QueryRedelegationsResponse>;
                delegatorValidators(request: _147.QueryDelegatorValidatorsRequest): Promise<_147.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _147.QueryDelegatorValidatorRequest): Promise<_147.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _147.QueryHistoricalInfoRequest): Promise<_147.QueryHistoricalInfoResponse>;
                pool(request?: _147.QueryPoolRequest): Promise<_147.QueryPoolResponse>;
                params(request?: _147.QueryParamsRequest): Promise<_147.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _296.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _149.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _149.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _149.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _149.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _149.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _149.MsgCreateValidator): {
                        typeUrl: string;
                        value: _149.MsgCreateValidator;
                    };
                    editValidator(value: _149.MsgEditValidator): {
                        typeUrl: string;
                        value: _149.MsgEditValidator;
                    };
                    delegate(value: _149.MsgDelegate): {
                        typeUrl: string;
                        value: _149.MsgDelegate;
                    };
                    beginRedelegate(value: _149.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _149.MsgBeginRedelegate;
                    };
                    undelegate(value: _149.MsgUndelegate): {
                        typeUrl: string;
                        value: _149.MsgUndelegate;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _149.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _149.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _149.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _149.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _149.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _149.MsgCreateValidator): {
                        typeUrl: string;
                        value: _149.MsgCreateValidator;
                    };
                    editValidator(value: _149.MsgEditValidator): {
                        typeUrl: string;
                        value: _149.MsgEditValidator;
                    };
                    delegate(value: _149.MsgDelegate): {
                        typeUrl: string;
                        value: _149.MsgDelegate;
                    };
                    beginRedelegate(value: _149.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _149.MsgBeginRedelegate;
                    };
                    undelegate(value: _149.MsgUndelegate): {
                        typeUrl: string;
                        value: _149.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _149.MsgCreateValidator) => _149.MsgCreateValidatorAmino;
                    fromAmino: (object: _149.MsgCreateValidatorAmino) => _149.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _149.MsgEditValidator) => _149.MsgEditValidatorAmino;
                    fromAmino: (object: _149.MsgEditValidatorAmino) => _149.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _149.MsgDelegate) => _149.MsgDelegateAmino;
                    fromAmino: (object: _149.MsgDelegateAmino) => _149.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _149.MsgBeginRedelegate) => _149.MsgBeginRedelegateAmino;
                    fromAmino: (object: _149.MsgBeginRedelegateAmino) => _149.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _149.MsgUndelegate) => _149.MsgUndelegateAmino;
                    fromAmino: (object: _149.MsgUndelegateAmino) => _149.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _149.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgCreateValidator;
                fromPartial(object: Partial<_149.MsgCreateValidator>): _149.MsgCreateValidator;
                fromAmino(object: _149.MsgCreateValidatorAmino): _149.MsgCreateValidator;
                toAmino(message: _149.MsgCreateValidator): _149.MsgCreateValidatorAmino;
                fromAminoMsg(object: _149.MsgCreateValidatorAminoMsg): _149.MsgCreateValidator;
                toAminoMsg(message: _149.MsgCreateValidator): _149.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _149.MsgCreateValidatorProtoMsg): _149.MsgCreateValidator;
                toProto(message: _149.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _149.MsgCreateValidator): _149.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _149.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _149.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_149.MsgCreateValidatorResponse>): _149.MsgCreateValidatorResponse;
                fromAmino(_: _149.MsgCreateValidatorResponseAmino): _149.MsgCreateValidatorResponse;
                toAmino(_: _149.MsgCreateValidatorResponse): _149.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _149.MsgCreateValidatorResponseAminoMsg): _149.MsgCreateValidatorResponse;
                toAminoMsg(message: _149.MsgCreateValidatorResponse): _149.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _149.MsgCreateValidatorResponseProtoMsg): _149.MsgCreateValidatorResponse;
                toProto(message: _149.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _149.MsgCreateValidatorResponse): _149.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _149.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgEditValidator;
                fromPartial(object: Partial<_149.MsgEditValidator>): _149.MsgEditValidator;
                fromAmino(object: _149.MsgEditValidatorAmino): _149.MsgEditValidator;
                toAmino(message: _149.MsgEditValidator): _149.MsgEditValidatorAmino;
                fromAminoMsg(object: _149.MsgEditValidatorAminoMsg): _149.MsgEditValidator;
                toAminoMsg(message: _149.MsgEditValidator): _149.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _149.MsgEditValidatorProtoMsg): _149.MsgEditValidator;
                toProto(message: _149.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _149.MsgEditValidator): _149.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _149.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _149.MsgEditValidatorResponse;
                fromPartial(_: Partial<_149.MsgEditValidatorResponse>): _149.MsgEditValidatorResponse;
                fromAmino(_: _149.MsgEditValidatorResponseAmino): _149.MsgEditValidatorResponse;
                toAmino(_: _149.MsgEditValidatorResponse): _149.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _149.MsgEditValidatorResponseAminoMsg): _149.MsgEditValidatorResponse;
                toAminoMsg(message: _149.MsgEditValidatorResponse): _149.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _149.MsgEditValidatorResponseProtoMsg): _149.MsgEditValidatorResponse;
                toProto(message: _149.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _149.MsgEditValidatorResponse): _149.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _149.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgDelegate;
                fromPartial(object: Partial<_149.MsgDelegate>): _149.MsgDelegate;
                fromAmino(object: _149.MsgDelegateAmino): _149.MsgDelegate;
                toAmino(message: _149.MsgDelegate): _149.MsgDelegateAmino;
                fromAminoMsg(object: _149.MsgDelegateAminoMsg): _149.MsgDelegate;
                toAminoMsg(message: _149.MsgDelegate): _149.MsgDelegateAminoMsg;
                fromProtoMsg(message: _149.MsgDelegateProtoMsg): _149.MsgDelegate;
                toProto(message: _149.MsgDelegate): Uint8Array;
                toProtoMsg(message: _149.MsgDelegate): _149.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _149.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _149.MsgDelegateResponse;
                fromPartial(_: Partial<_149.MsgDelegateResponse>): _149.MsgDelegateResponse;
                fromAmino(_: _149.MsgDelegateResponseAmino): _149.MsgDelegateResponse;
                toAmino(_: _149.MsgDelegateResponse): _149.MsgDelegateResponseAmino;
                fromAminoMsg(object: _149.MsgDelegateResponseAminoMsg): _149.MsgDelegateResponse;
                toAminoMsg(message: _149.MsgDelegateResponse): _149.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _149.MsgDelegateResponseProtoMsg): _149.MsgDelegateResponse;
                toProto(message: _149.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _149.MsgDelegateResponse): _149.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _149.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgBeginRedelegate;
                fromPartial(object: Partial<_149.MsgBeginRedelegate>): _149.MsgBeginRedelegate;
                fromAmino(object: _149.MsgBeginRedelegateAmino): _149.MsgBeginRedelegate;
                toAmino(message: _149.MsgBeginRedelegate): _149.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _149.MsgBeginRedelegateAminoMsg): _149.MsgBeginRedelegate;
                toAminoMsg(message: _149.MsgBeginRedelegate): _149.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _149.MsgBeginRedelegateProtoMsg): _149.MsgBeginRedelegate;
                toProto(message: _149.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _149.MsgBeginRedelegate): _149.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _149.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_149.MsgBeginRedelegateResponse>): _149.MsgBeginRedelegateResponse;
                fromAmino(object: _149.MsgBeginRedelegateResponseAmino): _149.MsgBeginRedelegateResponse;
                toAmino(message: _149.MsgBeginRedelegateResponse): _149.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _149.MsgBeginRedelegateResponseAminoMsg): _149.MsgBeginRedelegateResponse;
                toAminoMsg(message: _149.MsgBeginRedelegateResponse): _149.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _149.MsgBeginRedelegateResponseProtoMsg): _149.MsgBeginRedelegateResponse;
                toProto(message: _149.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _149.MsgBeginRedelegateResponse): _149.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _149.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgUndelegate;
                fromPartial(object: Partial<_149.MsgUndelegate>): _149.MsgUndelegate;
                fromAmino(object: _149.MsgUndelegateAmino): _149.MsgUndelegate;
                toAmino(message: _149.MsgUndelegate): _149.MsgUndelegateAmino;
                fromAminoMsg(object: _149.MsgUndelegateAminoMsg): _149.MsgUndelegate;
                toAminoMsg(message: _149.MsgUndelegate): _149.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _149.MsgUndelegateProtoMsg): _149.MsgUndelegate;
                toProto(message: _149.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _149.MsgUndelegate): _149.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _149.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgUndelegateResponse;
                fromPartial(object: Partial<_149.MsgUndelegateResponse>): _149.MsgUndelegateResponse;
                fromAmino(object: _149.MsgUndelegateResponseAmino): _149.MsgUndelegateResponse;
                toAmino(message: _149.MsgUndelegateResponse): _149.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _149.MsgUndelegateResponseAminoMsg): _149.MsgUndelegateResponse;
                toAminoMsg(message: _149.MsgUndelegateResponse): _149.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _149.MsgUndelegateResponseProtoMsg): _149.MsgUndelegateResponse;
                toProto(message: _149.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _149.MsgUndelegateResponse): _149.MsgUndelegateResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _148.BondStatus;
            bondStatusToJSON(object: _148.BondStatus): string;
            BondStatus: typeof _148.BondStatus;
            BondStatusSDKType: typeof _148.BondStatus;
            BondStatusAmino: typeof _148.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _148.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.HistoricalInfo;
                fromPartial(object: Partial<_148.HistoricalInfo>): _148.HistoricalInfo;
                fromAmino(object: _148.HistoricalInfoAmino): _148.HistoricalInfo;
                toAmino(message: _148.HistoricalInfo): _148.HistoricalInfoAmino;
                fromAminoMsg(object: _148.HistoricalInfoAminoMsg): _148.HistoricalInfo;
                toAminoMsg(message: _148.HistoricalInfo): _148.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _148.HistoricalInfoProtoMsg): _148.HistoricalInfo;
                toProto(message: _148.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _148.HistoricalInfo): _148.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _148.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.CommissionRates;
                fromPartial(object: Partial<_148.CommissionRates>): _148.CommissionRates;
                fromAmino(object: _148.CommissionRatesAmino): _148.CommissionRates;
                toAmino(message: _148.CommissionRates): _148.CommissionRatesAmino;
                fromAminoMsg(object: _148.CommissionRatesAminoMsg): _148.CommissionRates;
                toAminoMsg(message: _148.CommissionRates): _148.CommissionRatesAminoMsg;
                fromProtoMsg(message: _148.CommissionRatesProtoMsg): _148.CommissionRates;
                toProto(message: _148.CommissionRates): Uint8Array;
                toProtoMsg(message: _148.CommissionRates): _148.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _148.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.Commission;
                fromPartial(object: Partial<_148.Commission>): _148.Commission;
                fromAmino(object: _148.CommissionAmino): _148.Commission;
                toAmino(message: _148.Commission): _148.CommissionAmino;
                fromAminoMsg(object: _148.CommissionAminoMsg): _148.Commission;
                toAminoMsg(message: _148.Commission): _148.CommissionAminoMsg;
                fromProtoMsg(message: _148.CommissionProtoMsg): _148.Commission;
                toProto(message: _148.Commission): Uint8Array;
                toProtoMsg(message: _148.Commission): _148.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _148.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.Description;
                fromPartial(object: Partial<_148.Description>): _148.Description;
                fromAmino(object: _148.DescriptionAmino): _148.Description;
                toAmino(message: _148.Description): _148.DescriptionAmino;
                fromAminoMsg(object: _148.DescriptionAminoMsg): _148.Description;
                toAminoMsg(message: _148.Description): _148.DescriptionAminoMsg;
                fromProtoMsg(message: _148.DescriptionProtoMsg): _148.Description;
                toProto(message: _148.Description): Uint8Array;
                toProtoMsg(message: _148.Description): _148.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _148.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.Validator;
                fromPartial(object: Partial<_148.Validator>): _148.Validator;
                fromAmino(object: _148.ValidatorAmino): _148.Validator;
                toAmino(message: _148.Validator): _148.ValidatorAmino;
                fromAminoMsg(object: _148.ValidatorAminoMsg): _148.Validator;
                toAminoMsg(message: _148.Validator): _148.ValidatorAminoMsg;
                fromProtoMsg(message: _148.ValidatorProtoMsg): _148.Validator;
                toProto(message: _148.Validator): Uint8Array;
                toProtoMsg(message: _148.Validator): _148.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _148.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.ValAddresses;
                fromPartial(object: Partial<_148.ValAddresses>): _148.ValAddresses;
                fromAmino(object: _148.ValAddressesAmino): _148.ValAddresses;
                toAmino(message: _148.ValAddresses): _148.ValAddressesAmino;
                fromAminoMsg(object: _148.ValAddressesAminoMsg): _148.ValAddresses;
                toAminoMsg(message: _148.ValAddresses): _148.ValAddressesAminoMsg;
                fromProtoMsg(message: _148.ValAddressesProtoMsg): _148.ValAddresses;
                toProto(message: _148.ValAddresses): Uint8Array;
                toProtoMsg(message: _148.ValAddresses): _148.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _148.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.DVPair;
                fromPartial(object: Partial<_148.DVPair>): _148.DVPair;
                fromAmino(object: _148.DVPairAmino): _148.DVPair;
                toAmino(message: _148.DVPair): _148.DVPairAmino;
                fromAminoMsg(object: _148.DVPairAminoMsg): _148.DVPair;
                toAminoMsg(message: _148.DVPair): _148.DVPairAminoMsg;
                fromProtoMsg(message: _148.DVPairProtoMsg): _148.DVPair;
                toProto(message: _148.DVPair): Uint8Array;
                toProtoMsg(message: _148.DVPair): _148.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _148.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.DVPairs;
                fromPartial(object: Partial<_148.DVPairs>): _148.DVPairs;
                fromAmino(object: _148.DVPairsAmino): _148.DVPairs;
                toAmino(message: _148.DVPairs): _148.DVPairsAmino;
                fromAminoMsg(object: _148.DVPairsAminoMsg): _148.DVPairs;
                toAminoMsg(message: _148.DVPairs): _148.DVPairsAminoMsg;
                fromProtoMsg(message: _148.DVPairsProtoMsg): _148.DVPairs;
                toProto(message: _148.DVPairs): Uint8Array;
                toProtoMsg(message: _148.DVPairs): _148.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _148.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.DVVTriplet;
                fromPartial(object: Partial<_148.DVVTriplet>): _148.DVVTriplet;
                fromAmino(object: _148.DVVTripletAmino): _148.DVVTriplet;
                toAmino(message: _148.DVVTriplet): _148.DVVTripletAmino;
                fromAminoMsg(object: _148.DVVTripletAminoMsg): _148.DVVTriplet;
                toAminoMsg(message: _148.DVVTriplet): _148.DVVTripletAminoMsg;
                fromProtoMsg(message: _148.DVVTripletProtoMsg): _148.DVVTriplet;
                toProto(message: _148.DVVTriplet): Uint8Array;
                toProtoMsg(message: _148.DVVTriplet): _148.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _148.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.DVVTriplets;
                fromPartial(object: Partial<_148.DVVTriplets>): _148.DVVTriplets;
                fromAmino(object: _148.DVVTripletsAmino): _148.DVVTriplets;
                toAmino(message: _148.DVVTriplets): _148.DVVTripletsAmino;
                fromAminoMsg(object: _148.DVVTripletsAminoMsg): _148.DVVTriplets;
                toAminoMsg(message: _148.DVVTriplets): _148.DVVTripletsAminoMsg;
                fromProtoMsg(message: _148.DVVTripletsProtoMsg): _148.DVVTriplets;
                toProto(message: _148.DVVTriplets): Uint8Array;
                toProtoMsg(message: _148.DVVTriplets): _148.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _148.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.Delegation;
                fromPartial(object: Partial<_148.Delegation>): _148.Delegation;
                fromAmino(object: _148.DelegationAmino): _148.Delegation;
                toAmino(message: _148.Delegation): _148.DelegationAmino;
                fromAminoMsg(object: _148.DelegationAminoMsg): _148.Delegation;
                toAminoMsg(message: _148.Delegation): _148.DelegationAminoMsg;
                fromProtoMsg(message: _148.DelegationProtoMsg): _148.Delegation;
                toProto(message: _148.Delegation): Uint8Array;
                toProtoMsg(message: _148.Delegation): _148.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _148.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.UnbondingDelegation;
                fromPartial(object: Partial<_148.UnbondingDelegation>): _148.UnbondingDelegation;
                fromAmino(object: _148.UnbondingDelegationAmino): _148.UnbondingDelegation;
                toAmino(message: _148.UnbondingDelegation): _148.UnbondingDelegationAmino;
                fromAminoMsg(object: _148.UnbondingDelegationAminoMsg): _148.UnbondingDelegation;
                toAminoMsg(message: _148.UnbondingDelegation): _148.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _148.UnbondingDelegationProtoMsg): _148.UnbondingDelegation;
                toProto(message: _148.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _148.UnbondingDelegation): _148.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _148.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.UnbondingDelegationEntry;
                fromPartial(object: Partial<_148.UnbondingDelegationEntry>): _148.UnbondingDelegationEntry;
                fromAmino(object: _148.UnbondingDelegationEntryAmino): _148.UnbondingDelegationEntry;
                toAmino(message: _148.UnbondingDelegationEntry): _148.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _148.UnbondingDelegationEntryAminoMsg): _148.UnbondingDelegationEntry;
                toAminoMsg(message: _148.UnbondingDelegationEntry): _148.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _148.UnbondingDelegationEntryProtoMsg): _148.UnbondingDelegationEntry;
                toProto(message: _148.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _148.UnbondingDelegationEntry): _148.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _148.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.RedelegationEntry;
                fromPartial(object: Partial<_148.RedelegationEntry>): _148.RedelegationEntry;
                fromAmino(object: _148.RedelegationEntryAmino): _148.RedelegationEntry;
                toAmino(message: _148.RedelegationEntry): _148.RedelegationEntryAmino;
                fromAminoMsg(object: _148.RedelegationEntryAminoMsg): _148.RedelegationEntry;
                toAminoMsg(message: _148.RedelegationEntry): _148.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _148.RedelegationEntryProtoMsg): _148.RedelegationEntry;
                toProto(message: _148.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _148.RedelegationEntry): _148.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _148.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.Redelegation;
                fromPartial(object: Partial<_148.Redelegation>): _148.Redelegation;
                fromAmino(object: _148.RedelegationAmino): _148.Redelegation;
                toAmino(message: _148.Redelegation): _148.RedelegationAmino;
                fromAminoMsg(object: _148.RedelegationAminoMsg): _148.Redelegation;
                toAminoMsg(message: _148.Redelegation): _148.RedelegationAminoMsg;
                fromProtoMsg(message: _148.RedelegationProtoMsg): _148.Redelegation;
                toProto(message: _148.Redelegation): Uint8Array;
                toProtoMsg(message: _148.Redelegation): _148.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _148.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.Params;
                fromPartial(object: Partial<_148.Params>): _148.Params;
                fromAmino(object: _148.ParamsAmino): _148.Params;
                toAmino(message: _148.Params): _148.ParamsAmino;
                fromAminoMsg(object: _148.ParamsAminoMsg): _148.Params;
                toAminoMsg(message: _148.Params): _148.ParamsAminoMsg;
                fromProtoMsg(message: _148.ParamsProtoMsg): _148.Params;
                toProto(message: _148.Params): Uint8Array;
                toProtoMsg(message: _148.Params): _148.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _148.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.DelegationResponse;
                fromPartial(object: Partial<_148.DelegationResponse>): _148.DelegationResponse;
                fromAmino(object: _148.DelegationResponseAmino): _148.DelegationResponse;
                toAmino(message: _148.DelegationResponse): _148.DelegationResponseAmino;
                fromAminoMsg(object: _148.DelegationResponseAminoMsg): _148.DelegationResponse;
                toAminoMsg(message: _148.DelegationResponse): _148.DelegationResponseAminoMsg;
                fromProtoMsg(message: _148.DelegationResponseProtoMsg): _148.DelegationResponse;
                toProto(message: _148.DelegationResponse): Uint8Array;
                toProtoMsg(message: _148.DelegationResponse): _148.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _148.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.RedelegationEntryResponse;
                fromPartial(object: Partial<_148.RedelegationEntryResponse>): _148.RedelegationEntryResponse;
                fromAmino(object: _148.RedelegationEntryResponseAmino): _148.RedelegationEntryResponse;
                toAmino(message: _148.RedelegationEntryResponse): _148.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _148.RedelegationEntryResponseAminoMsg): _148.RedelegationEntryResponse;
                toAminoMsg(message: _148.RedelegationEntryResponse): _148.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _148.RedelegationEntryResponseProtoMsg): _148.RedelegationEntryResponse;
                toProto(message: _148.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _148.RedelegationEntryResponse): _148.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _148.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.RedelegationResponse;
                fromPartial(object: Partial<_148.RedelegationResponse>): _148.RedelegationResponse;
                fromAmino(object: _148.RedelegationResponseAmino): _148.RedelegationResponse;
                toAmino(message: _148.RedelegationResponse): _148.RedelegationResponseAmino;
                fromAminoMsg(object: _148.RedelegationResponseAminoMsg): _148.RedelegationResponse;
                toAminoMsg(message: _148.RedelegationResponse): _148.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _148.RedelegationResponseProtoMsg): _148.RedelegationResponse;
                toProto(message: _148.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _148.RedelegationResponse): _148.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _148.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.Pool;
                fromPartial(object: Partial<_148.Pool>): _148.Pool;
                fromAmino(object: _148.PoolAmino): _148.Pool;
                toAmino(message: _148.Pool): _148.PoolAmino;
                fromAminoMsg(object: _148.PoolAminoMsg): _148.Pool;
                toAminoMsg(message: _148.Pool): _148.PoolAminoMsg;
                fromProtoMsg(message: _148.PoolProtoMsg): _148.Pool;
                toProto(message: _148.Pool): Uint8Array;
                toProtoMsg(message: _148.Pool): _148.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _147.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryValidatorsRequest;
                fromPartial(object: Partial<_147.QueryValidatorsRequest>): _147.QueryValidatorsRequest;
                fromAmino(object: _147.QueryValidatorsRequestAmino): _147.QueryValidatorsRequest;
                toAmino(message: _147.QueryValidatorsRequest): _147.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _147.QueryValidatorsRequestAminoMsg): _147.QueryValidatorsRequest;
                toAminoMsg(message: _147.QueryValidatorsRequest): _147.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _147.QueryValidatorsRequestProtoMsg): _147.QueryValidatorsRequest;
                toProto(message: _147.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _147.QueryValidatorsRequest): _147.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _147.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryValidatorsResponse;
                fromPartial(object: Partial<_147.QueryValidatorsResponse>): _147.QueryValidatorsResponse;
                fromAmino(object: _147.QueryValidatorsResponseAmino): _147.QueryValidatorsResponse;
                toAmino(message: _147.QueryValidatorsResponse): _147.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _147.QueryValidatorsResponseAminoMsg): _147.QueryValidatorsResponse;
                toAminoMsg(message: _147.QueryValidatorsResponse): _147.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _147.QueryValidatorsResponseProtoMsg): _147.QueryValidatorsResponse;
                toProto(message: _147.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _147.QueryValidatorsResponse): _147.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _147.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryValidatorRequest;
                fromPartial(object: Partial<_147.QueryValidatorRequest>): _147.QueryValidatorRequest;
                fromAmino(object: _147.QueryValidatorRequestAmino): _147.QueryValidatorRequest;
                toAmino(message: _147.QueryValidatorRequest): _147.QueryValidatorRequestAmino;
                fromAminoMsg(object: _147.QueryValidatorRequestAminoMsg): _147.QueryValidatorRequest;
                toAminoMsg(message: _147.QueryValidatorRequest): _147.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _147.QueryValidatorRequestProtoMsg): _147.QueryValidatorRequest;
                toProto(message: _147.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _147.QueryValidatorRequest): _147.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _147.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryValidatorResponse;
                fromPartial(object: Partial<_147.QueryValidatorResponse>): _147.QueryValidatorResponse;
                fromAmino(object: _147.QueryValidatorResponseAmino): _147.QueryValidatorResponse;
                toAmino(message: _147.QueryValidatorResponse): _147.QueryValidatorResponseAmino;
                fromAminoMsg(object: _147.QueryValidatorResponseAminoMsg): _147.QueryValidatorResponse;
                toAminoMsg(message: _147.QueryValidatorResponse): _147.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _147.QueryValidatorResponseProtoMsg): _147.QueryValidatorResponse;
                toProto(message: _147.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _147.QueryValidatorResponse): _147.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _147.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_147.QueryValidatorDelegationsRequest>): _147.QueryValidatorDelegationsRequest;
                fromAmino(object: _147.QueryValidatorDelegationsRequestAmino): _147.QueryValidatorDelegationsRequest;
                toAmino(message: _147.QueryValidatorDelegationsRequest): _147.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _147.QueryValidatorDelegationsRequestAminoMsg): _147.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _147.QueryValidatorDelegationsRequest): _147.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _147.QueryValidatorDelegationsRequestProtoMsg): _147.QueryValidatorDelegationsRequest;
                toProto(message: _147.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _147.QueryValidatorDelegationsRequest): _147.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _147.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_147.QueryValidatorDelegationsResponse>): _147.QueryValidatorDelegationsResponse;
                fromAmino(object: _147.QueryValidatorDelegationsResponseAmino): _147.QueryValidatorDelegationsResponse;
                toAmino(message: _147.QueryValidatorDelegationsResponse): _147.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _147.QueryValidatorDelegationsResponseAminoMsg): _147.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _147.QueryValidatorDelegationsResponse): _147.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _147.QueryValidatorDelegationsResponseProtoMsg): _147.QueryValidatorDelegationsResponse;
                toProto(message: _147.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _147.QueryValidatorDelegationsResponse): _147.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _147.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_147.QueryValidatorUnbondingDelegationsRequest>): _147.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _147.QueryValidatorUnbondingDelegationsRequestAmino): _147.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _147.QueryValidatorUnbondingDelegationsRequest): _147.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _147.QueryValidatorUnbondingDelegationsRequestAminoMsg): _147.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _147.QueryValidatorUnbondingDelegationsRequest): _147.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _147.QueryValidatorUnbondingDelegationsRequestProtoMsg): _147.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _147.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _147.QueryValidatorUnbondingDelegationsRequest): _147.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _147.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_147.QueryValidatorUnbondingDelegationsResponse>): _147.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _147.QueryValidatorUnbondingDelegationsResponseAmino): _147.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _147.QueryValidatorUnbondingDelegationsResponse): _147.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _147.QueryValidatorUnbondingDelegationsResponseAminoMsg): _147.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _147.QueryValidatorUnbondingDelegationsResponse): _147.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _147.QueryValidatorUnbondingDelegationsResponseProtoMsg): _147.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _147.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _147.QueryValidatorUnbondingDelegationsResponse): _147.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _147.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryDelegationRequest;
                fromPartial(object: Partial<_147.QueryDelegationRequest>): _147.QueryDelegationRequest;
                fromAmino(object: _147.QueryDelegationRequestAmino): _147.QueryDelegationRequest;
                toAmino(message: _147.QueryDelegationRequest): _147.QueryDelegationRequestAmino;
                fromAminoMsg(object: _147.QueryDelegationRequestAminoMsg): _147.QueryDelegationRequest;
                toAminoMsg(message: _147.QueryDelegationRequest): _147.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _147.QueryDelegationRequestProtoMsg): _147.QueryDelegationRequest;
                toProto(message: _147.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _147.QueryDelegationRequest): _147.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _147.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryDelegationResponse;
                fromPartial(object: Partial<_147.QueryDelegationResponse>): _147.QueryDelegationResponse;
                fromAmino(object: _147.QueryDelegationResponseAmino): _147.QueryDelegationResponse;
                toAmino(message: _147.QueryDelegationResponse): _147.QueryDelegationResponseAmino;
                fromAminoMsg(object: _147.QueryDelegationResponseAminoMsg): _147.QueryDelegationResponse;
                toAminoMsg(message: _147.QueryDelegationResponse): _147.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _147.QueryDelegationResponseProtoMsg): _147.QueryDelegationResponse;
                toProto(message: _147.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _147.QueryDelegationResponse): _147.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _147.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_147.QueryUnbondingDelegationRequest>): _147.QueryUnbondingDelegationRequest;
                fromAmino(object: _147.QueryUnbondingDelegationRequestAmino): _147.QueryUnbondingDelegationRequest;
                toAmino(message: _147.QueryUnbondingDelegationRequest): _147.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _147.QueryUnbondingDelegationRequestAminoMsg): _147.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _147.QueryUnbondingDelegationRequest): _147.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _147.QueryUnbondingDelegationRequestProtoMsg): _147.QueryUnbondingDelegationRequest;
                toProto(message: _147.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _147.QueryUnbondingDelegationRequest): _147.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _147.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_147.QueryUnbondingDelegationResponse>): _147.QueryUnbondingDelegationResponse;
                fromAmino(object: _147.QueryUnbondingDelegationResponseAmino): _147.QueryUnbondingDelegationResponse;
                toAmino(message: _147.QueryUnbondingDelegationResponse): _147.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _147.QueryUnbondingDelegationResponseAminoMsg): _147.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _147.QueryUnbondingDelegationResponse): _147.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _147.QueryUnbondingDelegationResponseProtoMsg): _147.QueryUnbondingDelegationResponse;
                toProto(message: _147.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _147.QueryUnbondingDelegationResponse): _147.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _147.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_147.QueryDelegatorDelegationsRequest>): _147.QueryDelegatorDelegationsRequest;
                fromAmino(object: _147.QueryDelegatorDelegationsRequestAmino): _147.QueryDelegatorDelegationsRequest;
                toAmino(message: _147.QueryDelegatorDelegationsRequest): _147.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _147.QueryDelegatorDelegationsRequestAminoMsg): _147.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _147.QueryDelegatorDelegationsRequest): _147.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _147.QueryDelegatorDelegationsRequestProtoMsg): _147.QueryDelegatorDelegationsRequest;
                toProto(message: _147.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _147.QueryDelegatorDelegationsRequest): _147.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _147.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_147.QueryDelegatorDelegationsResponse>): _147.QueryDelegatorDelegationsResponse;
                fromAmino(object: _147.QueryDelegatorDelegationsResponseAmino): _147.QueryDelegatorDelegationsResponse;
                toAmino(message: _147.QueryDelegatorDelegationsResponse): _147.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _147.QueryDelegatorDelegationsResponseAminoMsg): _147.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _147.QueryDelegatorDelegationsResponse): _147.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _147.QueryDelegatorDelegationsResponseProtoMsg): _147.QueryDelegatorDelegationsResponse;
                toProto(message: _147.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _147.QueryDelegatorDelegationsResponse): _147.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _147.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_147.QueryDelegatorUnbondingDelegationsRequest>): _147.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _147.QueryDelegatorUnbondingDelegationsRequestAmino): _147.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _147.QueryDelegatorUnbondingDelegationsRequest): _147.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _147.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _147.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _147.QueryDelegatorUnbondingDelegationsRequest): _147.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _147.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _147.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _147.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _147.QueryDelegatorUnbondingDelegationsRequest): _147.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _147.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_147.QueryDelegatorUnbondingDelegationsResponse>): _147.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _147.QueryDelegatorUnbondingDelegationsResponseAmino): _147.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _147.QueryDelegatorUnbondingDelegationsResponse): _147.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _147.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _147.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _147.QueryDelegatorUnbondingDelegationsResponse): _147.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _147.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _147.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _147.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _147.QueryDelegatorUnbondingDelegationsResponse): _147.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _147.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryRedelegationsRequest;
                fromPartial(object: Partial<_147.QueryRedelegationsRequest>): _147.QueryRedelegationsRequest;
                fromAmino(object: _147.QueryRedelegationsRequestAmino): _147.QueryRedelegationsRequest;
                toAmino(message: _147.QueryRedelegationsRequest): _147.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _147.QueryRedelegationsRequestAminoMsg): _147.QueryRedelegationsRequest;
                toAminoMsg(message: _147.QueryRedelegationsRequest): _147.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _147.QueryRedelegationsRequestProtoMsg): _147.QueryRedelegationsRequest;
                toProto(message: _147.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _147.QueryRedelegationsRequest): _147.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _147.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryRedelegationsResponse;
                fromPartial(object: Partial<_147.QueryRedelegationsResponse>): _147.QueryRedelegationsResponse;
                fromAmino(object: _147.QueryRedelegationsResponseAmino): _147.QueryRedelegationsResponse;
                toAmino(message: _147.QueryRedelegationsResponse): _147.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _147.QueryRedelegationsResponseAminoMsg): _147.QueryRedelegationsResponse;
                toAminoMsg(message: _147.QueryRedelegationsResponse): _147.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _147.QueryRedelegationsResponseProtoMsg): _147.QueryRedelegationsResponse;
                toProto(message: _147.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _147.QueryRedelegationsResponse): _147.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _147.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_147.QueryDelegatorValidatorsRequest>): _147.QueryDelegatorValidatorsRequest;
                fromAmino(object: _147.QueryDelegatorValidatorsRequestAmino): _147.QueryDelegatorValidatorsRequest;
                toAmino(message: _147.QueryDelegatorValidatorsRequest): _147.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _147.QueryDelegatorValidatorsRequestAminoMsg): _147.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _147.QueryDelegatorValidatorsRequest): _147.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _147.QueryDelegatorValidatorsRequestProtoMsg): _147.QueryDelegatorValidatorsRequest;
                toProto(message: _147.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _147.QueryDelegatorValidatorsRequest): _147.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _147.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_147.QueryDelegatorValidatorsResponse>): _147.QueryDelegatorValidatorsResponse;
                fromAmino(object: _147.QueryDelegatorValidatorsResponseAmino): _147.QueryDelegatorValidatorsResponse;
                toAmino(message: _147.QueryDelegatorValidatorsResponse): _147.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _147.QueryDelegatorValidatorsResponseAminoMsg): _147.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _147.QueryDelegatorValidatorsResponse): _147.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _147.QueryDelegatorValidatorsResponseProtoMsg): _147.QueryDelegatorValidatorsResponse;
                toProto(message: _147.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _147.QueryDelegatorValidatorsResponse): _147.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _147.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_147.QueryDelegatorValidatorRequest>): _147.QueryDelegatorValidatorRequest;
                fromAmino(object: _147.QueryDelegatorValidatorRequestAmino): _147.QueryDelegatorValidatorRequest;
                toAmino(message: _147.QueryDelegatorValidatorRequest): _147.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _147.QueryDelegatorValidatorRequestAminoMsg): _147.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _147.QueryDelegatorValidatorRequest): _147.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _147.QueryDelegatorValidatorRequestProtoMsg): _147.QueryDelegatorValidatorRequest;
                toProto(message: _147.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _147.QueryDelegatorValidatorRequest): _147.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _147.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_147.QueryDelegatorValidatorResponse>): _147.QueryDelegatorValidatorResponse;
                fromAmino(object: _147.QueryDelegatorValidatorResponseAmino): _147.QueryDelegatorValidatorResponse;
                toAmino(message: _147.QueryDelegatorValidatorResponse): _147.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _147.QueryDelegatorValidatorResponseAminoMsg): _147.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _147.QueryDelegatorValidatorResponse): _147.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _147.QueryDelegatorValidatorResponseProtoMsg): _147.QueryDelegatorValidatorResponse;
                toProto(message: _147.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _147.QueryDelegatorValidatorResponse): _147.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _147.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_147.QueryHistoricalInfoRequest>): _147.QueryHistoricalInfoRequest;
                fromAmino(object: _147.QueryHistoricalInfoRequestAmino): _147.QueryHistoricalInfoRequest;
                toAmino(message: _147.QueryHistoricalInfoRequest): _147.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _147.QueryHistoricalInfoRequestAminoMsg): _147.QueryHistoricalInfoRequest;
                toAminoMsg(message: _147.QueryHistoricalInfoRequest): _147.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _147.QueryHistoricalInfoRequestProtoMsg): _147.QueryHistoricalInfoRequest;
                toProto(message: _147.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _147.QueryHistoricalInfoRequest): _147.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _147.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_147.QueryHistoricalInfoResponse>): _147.QueryHistoricalInfoResponse;
                fromAmino(object: _147.QueryHistoricalInfoResponseAmino): _147.QueryHistoricalInfoResponse;
                toAmino(message: _147.QueryHistoricalInfoResponse): _147.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _147.QueryHistoricalInfoResponseAminoMsg): _147.QueryHistoricalInfoResponse;
                toAminoMsg(message: _147.QueryHistoricalInfoResponse): _147.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _147.QueryHistoricalInfoResponseProtoMsg): _147.QueryHistoricalInfoResponse;
                toProto(message: _147.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _147.QueryHistoricalInfoResponse): _147.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _147.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _147.QueryPoolRequest;
                fromPartial(_: Partial<_147.QueryPoolRequest>): _147.QueryPoolRequest;
                fromAmino(_: _147.QueryPoolRequestAmino): _147.QueryPoolRequest;
                toAmino(_: _147.QueryPoolRequest): _147.QueryPoolRequestAmino;
                fromAminoMsg(object: _147.QueryPoolRequestAminoMsg): _147.QueryPoolRequest;
                toAminoMsg(message: _147.QueryPoolRequest): _147.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _147.QueryPoolRequestProtoMsg): _147.QueryPoolRequest;
                toProto(message: _147.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _147.QueryPoolRequest): _147.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _147.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryPoolResponse;
                fromPartial(object: Partial<_147.QueryPoolResponse>): _147.QueryPoolResponse;
                fromAmino(object: _147.QueryPoolResponseAmino): _147.QueryPoolResponse;
                toAmino(message: _147.QueryPoolResponse): _147.QueryPoolResponseAmino;
                fromAminoMsg(object: _147.QueryPoolResponseAminoMsg): _147.QueryPoolResponse;
                toAminoMsg(message: _147.QueryPoolResponse): _147.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _147.QueryPoolResponseProtoMsg): _147.QueryPoolResponse;
                toProto(message: _147.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _147.QueryPoolResponse): _147.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _147.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _147.QueryParamsRequest;
                fromPartial(_: Partial<_147.QueryParamsRequest>): _147.QueryParamsRequest;
                fromAmino(_: _147.QueryParamsRequestAmino): _147.QueryParamsRequest;
                toAmino(_: _147.QueryParamsRequest): _147.QueryParamsRequestAmino;
                fromAminoMsg(object: _147.QueryParamsRequestAminoMsg): _147.QueryParamsRequest;
                toAminoMsg(message: _147.QueryParamsRequest): _147.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _147.QueryParamsRequestProtoMsg): _147.QueryParamsRequest;
                toProto(message: _147.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _147.QueryParamsRequest): _147.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _147.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryParamsResponse;
                fromPartial(object: Partial<_147.QueryParamsResponse>): _147.QueryParamsResponse;
                fromAmino(object: _147.QueryParamsResponseAmino): _147.QueryParamsResponse;
                toAmino(message: _147.QueryParamsResponse): _147.QueryParamsResponseAmino;
                fromAminoMsg(object: _147.QueryParamsResponseAminoMsg): _147.QueryParamsResponse;
                toAminoMsg(message: _147.QueryParamsResponse): _147.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _147.QueryParamsResponseProtoMsg): _147.QueryParamsResponse;
                toProto(message: _147.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _147.QueryParamsResponse): _147.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _146.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.GenesisState;
                fromPartial(object: Partial<_146.GenesisState>): _146.GenesisState;
                fromAmino(object: _146.GenesisStateAmino): _146.GenesisState;
                toAmino(message: _146.GenesisState): _146.GenesisStateAmino;
                fromAminoMsg(object: _146.GenesisStateAminoMsg): _146.GenesisState;
                toAminoMsg(message: _146.GenesisState): _146.GenesisStateAminoMsg;
                fromProtoMsg(message: _146.GenesisStateProtoMsg): _146.GenesisState;
                toProto(message: _146.GenesisState): Uint8Array;
                toProtoMsg(message: _146.GenesisState): _146.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _146.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.LastValidatorPower;
                fromPartial(object: Partial<_146.LastValidatorPower>): _146.LastValidatorPower;
                fromAmino(object: _146.LastValidatorPowerAmino): _146.LastValidatorPower;
                toAmino(message: _146.LastValidatorPower): _146.LastValidatorPowerAmino;
                fromAminoMsg(object: _146.LastValidatorPowerAminoMsg): _146.LastValidatorPower;
                toAminoMsg(message: _146.LastValidatorPower): _146.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _146.LastValidatorPowerProtoMsg): _146.LastValidatorPower;
                toProto(message: _146.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _146.LastValidatorPower): _146.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _145.AuthorizationType;
            authorizationTypeToJSON(object: _145.AuthorizationType): string;
            AuthorizationType: typeof _145.AuthorizationType;
            AuthorizationTypeSDKType: typeof _145.AuthorizationType;
            AuthorizationTypeAmino: typeof _145.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _145.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.StakeAuthorization;
                fromPartial(object: Partial<_145.StakeAuthorization>): _145.StakeAuthorization;
                fromAmino(object: _145.StakeAuthorizationAmino): _145.StakeAuthorization;
                toAmino(message: _145.StakeAuthorization): _145.StakeAuthorizationAmino;
                fromAminoMsg(object: _145.StakeAuthorizationAminoMsg): _145.StakeAuthorization;
                toAminoMsg(message: _145.StakeAuthorization): _145.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _145.StakeAuthorizationProtoMsg): _145.StakeAuthorization;
                toProto(message: _145.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _145.StakeAuthorization): _145.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _145.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.StakeAuthorization_Validators;
                fromPartial(object: Partial<_145.StakeAuthorization_Validators>): _145.StakeAuthorization_Validators;
                fromAmino(object: _145.StakeAuthorization_ValidatorsAmino): _145.StakeAuthorization_Validators;
                toAmino(message: _145.StakeAuthorization_Validators): _145.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _145.StakeAuthorization_ValidatorsAminoMsg): _145.StakeAuthorization_Validators;
                toAminoMsg(message: _145.StakeAuthorization_Validators): _145.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _145.StakeAuthorization_ValidatorsProtoMsg): _145.StakeAuthorization_Validators;
                toProto(message: _145.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _145.StakeAuthorization_Validators): _145.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _150.SignMode;
                signModeToJSON(object: _150.SignMode): string;
                SignMode: typeof _150.SignMode;
                SignModeSDKType: typeof _150.SignMode;
                SignModeAmino: typeof _150.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _150.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _150.SignatureDescriptors;
                    fromPartial(object: Partial<_150.SignatureDescriptors>): _150.SignatureDescriptors;
                    fromAmino(object: _150.SignatureDescriptorsAmino): _150.SignatureDescriptors;
                    toAmino(message: _150.SignatureDescriptors): _150.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _150.SignatureDescriptorsAminoMsg): _150.SignatureDescriptors;
                    toAminoMsg(message: _150.SignatureDescriptors): _150.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _150.SignatureDescriptorsProtoMsg): _150.SignatureDescriptors;
                    toProto(message: _150.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _150.SignatureDescriptors): _150.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _150.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _150.SignatureDescriptor;
                    fromPartial(object: Partial<_150.SignatureDescriptor>): _150.SignatureDescriptor;
                    fromAmino(object: _150.SignatureDescriptorAmino): _150.SignatureDescriptor;
                    toAmino(message: _150.SignatureDescriptor): _150.SignatureDescriptorAmino;
                    fromAminoMsg(object: _150.SignatureDescriptorAminoMsg): _150.SignatureDescriptor;
                    toAminoMsg(message: _150.SignatureDescriptor): _150.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _150.SignatureDescriptorProtoMsg): _150.SignatureDescriptor;
                    toProto(message: _150.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _150.SignatureDescriptor): _150.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _150.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _150.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_150.SignatureDescriptor_Data>): _150.SignatureDescriptor_Data;
                    fromAmino(object: _150.SignatureDescriptor_DataAmino): _150.SignatureDescriptor_Data;
                    toAmino(message: _150.SignatureDescriptor_Data): _150.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _150.SignatureDescriptor_DataAminoMsg): _150.SignatureDescriptor_Data;
                    toAminoMsg(message: _150.SignatureDescriptor_Data): _150.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _150.SignatureDescriptor_DataProtoMsg): _150.SignatureDescriptor_Data;
                    toProto(message: _150.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _150.SignatureDescriptor_Data): _150.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _150.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _150.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_150.SignatureDescriptor_Data_Single>): _150.SignatureDescriptor_Data_Single;
                    fromAmino(object: _150.SignatureDescriptor_Data_SingleAmino): _150.SignatureDescriptor_Data_Single;
                    toAmino(message: _150.SignatureDescriptor_Data_Single): _150.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _150.SignatureDescriptor_Data_SingleAminoMsg): _150.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _150.SignatureDescriptor_Data_Single): _150.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _150.SignatureDescriptor_Data_SingleProtoMsg): _150.SignatureDescriptor_Data_Single;
                    toProto(message: _150.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _150.SignatureDescriptor_Data_Single): _150.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _150.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _150.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_150.SignatureDescriptor_Data_Multi>): _150.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _150.SignatureDescriptor_Data_MultiAmino): _150.SignatureDescriptor_Data_Multi;
                    toAmino(message: _150.SignatureDescriptor_Data_Multi): _150.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _150.SignatureDescriptor_Data_MultiAminoMsg): _150.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _150.SignatureDescriptor_Data_Multi): _150.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _150.SignatureDescriptor_Data_MultiProtoMsg): _150.SignatureDescriptor_Data_Multi;
                    toProto(message: _150.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _150.SignatureDescriptor_Data_Multi): _150.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _312.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _151.SimulateRequest): Promise<_151.SimulateResponse>;
                getTx(request: _151.GetTxRequest): Promise<_151.GetTxResponse>;
                broadcastTx(request: _151.BroadcastTxRequest): Promise<_151.BroadcastTxResponse>;
                getTxsEvent(request: _151.GetTxsEventRequest): Promise<_151.GetTxsEventResponse>;
            };
            LCDQueryClient: typeof _297.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _152.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _152.Tx;
                fromPartial(object: Partial<_152.Tx>): _152.Tx;
                fromAmino(object: _152.TxAmino): _152.Tx;
                toAmino(message: _152.Tx): _152.TxAmino;
                fromAminoMsg(object: _152.TxAminoMsg): _152.Tx;
                toAminoMsg(message: _152.Tx): _152.TxAminoMsg;
                fromProtoMsg(message: _152.TxProtoMsg): _152.Tx;
                toProto(message: _152.Tx): Uint8Array;
                toProtoMsg(message: _152.Tx): _152.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _152.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _152.TxRaw;
                fromPartial(object: Partial<_152.TxRaw>): _152.TxRaw;
                fromAmino(object: _152.TxRawAmino): _152.TxRaw;
                toAmino(message: _152.TxRaw): _152.TxRawAmino;
                fromAminoMsg(object: _152.TxRawAminoMsg): _152.TxRaw;
                toAminoMsg(message: _152.TxRaw): _152.TxRawAminoMsg;
                fromProtoMsg(message: _152.TxRawProtoMsg): _152.TxRaw;
                toProto(message: _152.TxRaw): Uint8Array;
                toProtoMsg(message: _152.TxRaw): _152.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _152.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _152.SignDoc;
                fromPartial(object: Partial<_152.SignDoc>): _152.SignDoc;
                fromAmino(object: _152.SignDocAmino): _152.SignDoc;
                toAmino(message: _152.SignDoc): _152.SignDocAmino;
                fromAminoMsg(object: _152.SignDocAminoMsg): _152.SignDoc;
                toAminoMsg(message: _152.SignDoc): _152.SignDocAminoMsg;
                fromProtoMsg(message: _152.SignDocProtoMsg): _152.SignDoc;
                toProto(message: _152.SignDoc): Uint8Array;
                toProtoMsg(message: _152.SignDoc): _152.SignDocProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _152.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _152.TxBody;
                fromPartial(object: Partial<_152.TxBody>): _152.TxBody;
                fromAmino(object: _152.TxBodyAmino): _152.TxBody;
                toAmino(message: _152.TxBody): _152.TxBodyAmino;
                fromAminoMsg(object: _152.TxBodyAminoMsg): _152.TxBody;
                toAminoMsg(message: _152.TxBody): _152.TxBodyAminoMsg;
                fromProtoMsg(message: _152.TxBodyProtoMsg): _152.TxBody;
                toProto(message: _152.TxBody): Uint8Array;
                toProtoMsg(message: _152.TxBody): _152.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _152.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _152.AuthInfo;
                fromPartial(object: Partial<_152.AuthInfo>): _152.AuthInfo;
                fromAmino(object: _152.AuthInfoAmino): _152.AuthInfo;
                toAmino(message: _152.AuthInfo): _152.AuthInfoAmino;
                fromAminoMsg(object: _152.AuthInfoAminoMsg): _152.AuthInfo;
                toAminoMsg(message: _152.AuthInfo): _152.AuthInfoAminoMsg;
                fromProtoMsg(message: _152.AuthInfoProtoMsg): _152.AuthInfo;
                toProto(message: _152.AuthInfo): Uint8Array;
                toProtoMsg(message: _152.AuthInfo): _152.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _152.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _152.SignerInfo;
                fromPartial(object: Partial<_152.SignerInfo>): _152.SignerInfo;
                fromAmino(object: _152.SignerInfoAmino): _152.SignerInfo;
                toAmino(message: _152.SignerInfo): _152.SignerInfoAmino;
                fromAminoMsg(object: _152.SignerInfoAminoMsg): _152.SignerInfo;
                toAminoMsg(message: _152.SignerInfo): _152.SignerInfoAminoMsg;
                fromProtoMsg(message: _152.SignerInfoProtoMsg): _152.SignerInfo;
                toProto(message: _152.SignerInfo): Uint8Array;
                toProtoMsg(message: _152.SignerInfo): _152.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _152.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _152.ModeInfo;
                fromPartial(object: Partial<_152.ModeInfo>): _152.ModeInfo;
                fromAmino(object: _152.ModeInfoAmino): _152.ModeInfo;
                toAmino(message: _152.ModeInfo): _152.ModeInfoAmino;
                fromAminoMsg(object: _152.ModeInfoAminoMsg): _152.ModeInfo;
                toAminoMsg(message: _152.ModeInfo): _152.ModeInfoAminoMsg;
                fromProtoMsg(message: _152.ModeInfoProtoMsg): _152.ModeInfo;
                toProto(message: _152.ModeInfo): Uint8Array;
                toProtoMsg(message: _152.ModeInfo): _152.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _152.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _152.ModeInfo_Single;
                fromPartial(object: Partial<_152.ModeInfo_Single>): _152.ModeInfo_Single;
                fromAmino(object: _152.ModeInfo_SingleAmino): _152.ModeInfo_Single;
                toAmino(message: _152.ModeInfo_Single): _152.ModeInfo_SingleAmino;
                fromAminoMsg(object: _152.ModeInfo_SingleAminoMsg): _152.ModeInfo_Single;
                toAminoMsg(message: _152.ModeInfo_Single): _152.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _152.ModeInfo_SingleProtoMsg): _152.ModeInfo_Single;
                toProto(message: _152.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _152.ModeInfo_Single): _152.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _152.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _152.ModeInfo_Multi;
                fromPartial(object: Partial<_152.ModeInfo_Multi>): _152.ModeInfo_Multi;
                fromAmino(object: _152.ModeInfo_MultiAmino): _152.ModeInfo_Multi;
                toAmino(message: _152.ModeInfo_Multi): _152.ModeInfo_MultiAmino;
                fromAminoMsg(object: _152.ModeInfo_MultiAminoMsg): _152.ModeInfo_Multi;
                toAminoMsg(message: _152.ModeInfo_Multi): _152.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _152.ModeInfo_MultiProtoMsg): _152.ModeInfo_Multi;
                toProto(message: _152.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _152.ModeInfo_Multi): _152.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _152.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _152.Fee;
                fromPartial(object: Partial<_152.Fee>): _152.Fee;
                fromAmino(object: _152.FeeAmino): _152.Fee;
                toAmino(message: _152.Fee): _152.FeeAmino;
                fromAminoMsg(object: _152.FeeAminoMsg): _152.Fee;
                toAminoMsg(message: _152.Fee): _152.FeeAminoMsg;
                fromProtoMsg(message: _152.FeeProtoMsg): _152.Fee;
                toProto(message: _152.Fee): Uint8Array;
                toProtoMsg(message: _152.Fee): _152.FeeProtoMsg;
            };
            orderByFromJSON(object: any): _151.OrderBy;
            orderByToJSON(object: _151.OrderBy): string;
            broadcastModeFromJSON(object: any): _151.BroadcastMode;
            broadcastModeToJSON(object: _151.BroadcastMode): string;
            OrderBy: typeof _151.OrderBy;
            OrderBySDKType: typeof _151.OrderBy;
            OrderByAmino: typeof _151.OrderBy;
            BroadcastMode: typeof _151.BroadcastMode;
            BroadcastModeSDKType: typeof _151.BroadcastMode;
            BroadcastModeAmino: typeof _151.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _151.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _151.GetTxsEventRequest;
                fromPartial(object: Partial<_151.GetTxsEventRequest>): _151.GetTxsEventRequest;
                fromAmino(object: _151.GetTxsEventRequestAmino): _151.GetTxsEventRequest;
                toAmino(message: _151.GetTxsEventRequest): _151.GetTxsEventRequestAmino;
                fromAminoMsg(object: _151.GetTxsEventRequestAminoMsg): _151.GetTxsEventRequest;
                toAminoMsg(message: _151.GetTxsEventRequest): _151.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _151.GetTxsEventRequestProtoMsg): _151.GetTxsEventRequest;
                toProto(message: _151.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _151.GetTxsEventRequest): _151.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _151.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _151.GetTxsEventResponse;
                fromPartial(object: Partial<_151.GetTxsEventResponse>): _151.GetTxsEventResponse;
                fromAmino(object: _151.GetTxsEventResponseAmino): _151.GetTxsEventResponse;
                toAmino(message: _151.GetTxsEventResponse): _151.GetTxsEventResponseAmino;
                fromAminoMsg(object: _151.GetTxsEventResponseAminoMsg): _151.GetTxsEventResponse;
                toAminoMsg(message: _151.GetTxsEventResponse): _151.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _151.GetTxsEventResponseProtoMsg): _151.GetTxsEventResponse;
                toProto(message: _151.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _151.GetTxsEventResponse): _151.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _151.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _151.BroadcastTxRequest;
                fromPartial(object: Partial<_151.BroadcastTxRequest>): _151.BroadcastTxRequest;
                fromAmino(object: _151.BroadcastTxRequestAmino): _151.BroadcastTxRequest;
                toAmino(message: _151.BroadcastTxRequest): _151.BroadcastTxRequestAmino;
                fromAminoMsg(object: _151.BroadcastTxRequestAminoMsg): _151.BroadcastTxRequest;
                toAminoMsg(message: _151.BroadcastTxRequest): _151.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _151.BroadcastTxRequestProtoMsg): _151.BroadcastTxRequest;
                toProto(message: _151.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _151.BroadcastTxRequest): _151.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _151.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _151.BroadcastTxResponse;
                fromPartial(object: Partial<_151.BroadcastTxResponse>): _151.BroadcastTxResponse;
                fromAmino(object: _151.BroadcastTxResponseAmino): _151.BroadcastTxResponse;
                toAmino(message: _151.BroadcastTxResponse): _151.BroadcastTxResponseAmino;
                fromAminoMsg(object: _151.BroadcastTxResponseAminoMsg): _151.BroadcastTxResponse;
                toAminoMsg(message: _151.BroadcastTxResponse): _151.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _151.BroadcastTxResponseProtoMsg): _151.BroadcastTxResponse;
                toProto(message: _151.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _151.BroadcastTxResponse): _151.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _151.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _151.SimulateRequest;
                fromPartial(object: Partial<_151.SimulateRequest>): _151.SimulateRequest;
                fromAmino(object: _151.SimulateRequestAmino): _151.SimulateRequest;
                toAmino(message: _151.SimulateRequest): _151.SimulateRequestAmino;
                fromAminoMsg(object: _151.SimulateRequestAminoMsg): _151.SimulateRequest;
                toAminoMsg(message: _151.SimulateRequest): _151.SimulateRequestAminoMsg;
                fromProtoMsg(message: _151.SimulateRequestProtoMsg): _151.SimulateRequest;
                toProto(message: _151.SimulateRequest): Uint8Array;
                toProtoMsg(message: _151.SimulateRequest): _151.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _151.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _151.SimulateResponse;
                fromPartial(object: Partial<_151.SimulateResponse>): _151.SimulateResponse;
                fromAmino(object: _151.SimulateResponseAmino): _151.SimulateResponse;
                toAmino(message: _151.SimulateResponse): _151.SimulateResponseAmino;
                fromAminoMsg(object: _151.SimulateResponseAminoMsg): _151.SimulateResponse;
                toAminoMsg(message: _151.SimulateResponse): _151.SimulateResponseAminoMsg;
                fromProtoMsg(message: _151.SimulateResponseProtoMsg): _151.SimulateResponse;
                toProto(message: _151.SimulateResponse): Uint8Array;
                toProtoMsg(message: _151.SimulateResponse): _151.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _151.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _151.GetTxRequest;
                fromPartial(object: Partial<_151.GetTxRequest>): _151.GetTxRequest;
                fromAmino(object: _151.GetTxRequestAmino): _151.GetTxRequest;
                toAmino(message: _151.GetTxRequest): _151.GetTxRequestAmino;
                fromAminoMsg(object: _151.GetTxRequestAminoMsg): _151.GetTxRequest;
                toAminoMsg(message: _151.GetTxRequest): _151.GetTxRequestAminoMsg;
                fromProtoMsg(message: _151.GetTxRequestProtoMsg): _151.GetTxRequest;
                toProto(message: _151.GetTxRequest): Uint8Array;
                toProtoMsg(message: _151.GetTxRequest): _151.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _151.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _151.GetTxResponse;
                fromPartial(object: Partial<_151.GetTxResponse>): _151.GetTxResponse;
                fromAmino(object: _151.GetTxResponseAmino): _151.GetTxResponse;
                toAmino(message: _151.GetTxResponse): _151.GetTxResponseAmino;
                fromAminoMsg(object: _151.GetTxResponseAminoMsg): _151.GetTxResponse;
                toAminoMsg(message: _151.GetTxResponse): _151.GetTxResponseAminoMsg;
                fromProtoMsg(message: _151.GetTxResponseProtoMsg): _151.GetTxResponse;
                toProto(message: _151.GetTxResponse): Uint8Array;
                toProtoMsg(message: _151.GetTxResponse): _151.GetTxResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _313.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _153.QueryCurrentPlanRequest): Promise<_153.QueryCurrentPlanResponse>;
                appliedPlan(request: _153.QueryAppliedPlanRequest): Promise<_153.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _153.QueryUpgradedConsensusStateRequest): Promise<_153.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _153.QueryModuleVersionsRequest): Promise<_153.QueryModuleVersionsResponse>;
            };
            LCDQueryClient: typeof _298.LCDQueryClient;
            Plan: {
                typeUrl: string;
                encode(message: _154.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.Plan;
                fromPartial(object: Partial<_154.Plan>): _154.Plan;
                fromAmino(object: _154.PlanAmino): _154.Plan;
                toAmino(message: _154.Plan): _154.PlanAmino;
                fromAminoMsg(object: _154.PlanAminoMsg): _154.Plan;
                toAminoMsg(message: _154.Plan): _154.PlanAminoMsg;
                fromProtoMsg(message: _154.PlanProtoMsg): _154.Plan;
                toProto(message: _154.Plan): Uint8Array;
                toProtoMsg(message: _154.Plan): _154.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _154.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_154.SoftwareUpgradeProposal>): _154.SoftwareUpgradeProposal;
                fromAmino(object: _154.SoftwareUpgradeProposalAmino): _154.SoftwareUpgradeProposal;
                toAmino(message: _154.SoftwareUpgradeProposal): _154.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _154.SoftwareUpgradeProposalAminoMsg): _154.SoftwareUpgradeProposal;
                toAminoMsg(message: _154.SoftwareUpgradeProposal): _154.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _154.SoftwareUpgradeProposalProtoMsg): _154.SoftwareUpgradeProposal;
                toProto(message: _154.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _154.SoftwareUpgradeProposal): _154.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _154.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_154.CancelSoftwareUpgradeProposal>): _154.CancelSoftwareUpgradeProposal;
                fromAmino(object: _154.CancelSoftwareUpgradeProposalAmino): _154.CancelSoftwareUpgradeProposal;
                toAmino(message: _154.CancelSoftwareUpgradeProposal): _154.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _154.CancelSoftwareUpgradeProposalAminoMsg): _154.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _154.CancelSoftwareUpgradeProposal): _154.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _154.CancelSoftwareUpgradeProposalProtoMsg): _154.CancelSoftwareUpgradeProposal;
                toProto(message: _154.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _154.CancelSoftwareUpgradeProposal): _154.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _154.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.ModuleVersion;
                fromPartial(object: Partial<_154.ModuleVersion>): _154.ModuleVersion;
                fromAmino(object: _154.ModuleVersionAmino): _154.ModuleVersion;
                toAmino(message: _154.ModuleVersion): _154.ModuleVersionAmino;
                fromAminoMsg(object: _154.ModuleVersionAminoMsg): _154.ModuleVersion;
                toAminoMsg(message: _154.ModuleVersion): _154.ModuleVersionAminoMsg;
                fromProtoMsg(message: _154.ModuleVersionProtoMsg): _154.ModuleVersion;
                toProto(message: _154.ModuleVersion): Uint8Array;
                toProtoMsg(message: _154.ModuleVersion): _154.ModuleVersionProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _153.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _153.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_153.QueryCurrentPlanRequest>): _153.QueryCurrentPlanRequest;
                fromAmino(_: _153.QueryCurrentPlanRequestAmino): _153.QueryCurrentPlanRequest;
                toAmino(_: _153.QueryCurrentPlanRequest): _153.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _153.QueryCurrentPlanRequestAminoMsg): _153.QueryCurrentPlanRequest;
                toAminoMsg(message: _153.QueryCurrentPlanRequest): _153.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _153.QueryCurrentPlanRequestProtoMsg): _153.QueryCurrentPlanRequest;
                toProto(message: _153.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _153.QueryCurrentPlanRequest): _153.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _153.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_153.QueryCurrentPlanResponse>): _153.QueryCurrentPlanResponse;
                fromAmino(object: _153.QueryCurrentPlanResponseAmino): _153.QueryCurrentPlanResponse;
                toAmino(message: _153.QueryCurrentPlanResponse): _153.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _153.QueryCurrentPlanResponseAminoMsg): _153.QueryCurrentPlanResponse;
                toAminoMsg(message: _153.QueryCurrentPlanResponse): _153.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _153.QueryCurrentPlanResponseProtoMsg): _153.QueryCurrentPlanResponse;
                toProto(message: _153.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _153.QueryCurrentPlanResponse): _153.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _153.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_153.QueryAppliedPlanRequest>): _153.QueryAppliedPlanRequest;
                fromAmino(object: _153.QueryAppliedPlanRequestAmino): _153.QueryAppliedPlanRequest;
                toAmino(message: _153.QueryAppliedPlanRequest): _153.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _153.QueryAppliedPlanRequestAminoMsg): _153.QueryAppliedPlanRequest;
                toAminoMsg(message: _153.QueryAppliedPlanRequest): _153.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _153.QueryAppliedPlanRequestProtoMsg): _153.QueryAppliedPlanRequest;
                toProto(message: _153.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _153.QueryAppliedPlanRequest): _153.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _153.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_153.QueryAppliedPlanResponse>): _153.QueryAppliedPlanResponse;
                fromAmino(object: _153.QueryAppliedPlanResponseAmino): _153.QueryAppliedPlanResponse;
                toAmino(message: _153.QueryAppliedPlanResponse): _153.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _153.QueryAppliedPlanResponseAminoMsg): _153.QueryAppliedPlanResponse;
                toAminoMsg(message: _153.QueryAppliedPlanResponse): _153.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _153.QueryAppliedPlanResponseProtoMsg): _153.QueryAppliedPlanResponse;
                toProto(message: _153.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _153.QueryAppliedPlanResponse): _153.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _153.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_153.QueryUpgradedConsensusStateRequest>): _153.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _153.QueryUpgradedConsensusStateRequestAmino): _153.QueryUpgradedConsensusStateRequest;
                toAmino(message: _153.QueryUpgradedConsensusStateRequest): _153.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _153.QueryUpgradedConsensusStateRequestAminoMsg): _153.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _153.QueryUpgradedConsensusStateRequest): _153.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _153.QueryUpgradedConsensusStateRequestProtoMsg): _153.QueryUpgradedConsensusStateRequest;
                toProto(message: _153.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _153.QueryUpgradedConsensusStateRequest): _153.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _153.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_153.QueryUpgradedConsensusStateResponse>): _153.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _153.QueryUpgradedConsensusStateResponseAmino): _153.QueryUpgradedConsensusStateResponse;
                toAmino(message: _153.QueryUpgradedConsensusStateResponse): _153.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _153.QueryUpgradedConsensusStateResponseAminoMsg): _153.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _153.QueryUpgradedConsensusStateResponse): _153.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _153.QueryUpgradedConsensusStateResponseProtoMsg): _153.QueryUpgradedConsensusStateResponse;
                toProto(message: _153.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _153.QueryUpgradedConsensusStateResponse): _153.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _153.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_153.QueryModuleVersionsRequest>): _153.QueryModuleVersionsRequest;
                fromAmino(object: _153.QueryModuleVersionsRequestAmino): _153.QueryModuleVersionsRequest;
                toAmino(message: _153.QueryModuleVersionsRequest): _153.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _153.QueryModuleVersionsRequestAminoMsg): _153.QueryModuleVersionsRequest;
                toAminoMsg(message: _153.QueryModuleVersionsRequest): _153.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _153.QueryModuleVersionsRequestProtoMsg): _153.QueryModuleVersionsRequest;
                toProto(message: _153.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _153.QueryModuleVersionsRequest): _153.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _153.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_153.QueryModuleVersionsResponse>): _153.QueryModuleVersionsResponse;
                fromAmino(object: _153.QueryModuleVersionsResponseAmino): _153.QueryModuleVersionsResponse;
                toAmino(message: _153.QueryModuleVersionsResponse): _153.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _153.QueryModuleVersionsResponseAminoMsg): _153.QueryModuleVersionsResponse;
                toAminoMsg(message: _153.QueryModuleVersionsResponse): _153.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _153.QueryModuleVersionsResponseProtoMsg): _153.QueryModuleVersionsResponse;
                toProto(message: _153.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _153.QueryModuleVersionsResponse): _153.QueryModuleVersionsResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _323.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _155.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createClawbackVestingAccount(value: _155.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clawback(value: _155.MsgClawback): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _155.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _155.MsgCreateVestingAccount;
                    };
                    createClawbackVestingAccount(value: _155.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: _155.MsgCreateClawbackVestingAccount;
                    };
                    clawback(value: _155.MsgClawback): {
                        typeUrl: string;
                        value: _155.MsgClawback;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _155.MsgCreateVestingAccount;
                    };
                    createClawbackVestingAccount(value: any): {
                        typeUrl: string;
                        value: _155.MsgCreateClawbackVestingAccount;
                    };
                    clawback(value: any): {
                        typeUrl: string;
                        value: _155.MsgClawback;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _155.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _155.MsgCreateVestingAccount;
                    };
                    createClawbackVestingAccount(value: _155.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: _155.MsgCreateClawbackVestingAccount;
                    };
                    clawback(value: _155.MsgClawback): {
                        typeUrl: string;
                        value: _155.MsgClawback;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _155.MsgCreateVestingAccount) => _155.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _155.MsgCreateVestingAccountAmino) => _155.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreateClawbackVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _155.MsgCreateClawbackVestingAccount) => _155.MsgCreateClawbackVestingAccountAmino;
                    fromAmino: (object: _155.MsgCreateClawbackVestingAccountAmino) => _155.MsgCreateClawbackVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgClawback": {
                    aminoType: string;
                    toAmino: (message: _155.MsgClawback) => _155.MsgClawbackAmino;
                    fromAmino: (object: _155.MsgClawbackAmino) => _155.MsgClawback;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _156.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.BaseVestingAccount;
                fromPartial(object: Partial<_156.BaseVestingAccount>): _156.BaseVestingAccount;
                fromAmino(object: _156.BaseVestingAccountAmino): _156.BaseVestingAccount;
                toAmino(message: _156.BaseVestingAccount): _156.BaseVestingAccountAmino;
                fromAminoMsg(object: _156.BaseVestingAccountAminoMsg): _156.BaseVestingAccount;
                toAminoMsg(message: _156.BaseVestingAccount): _156.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _156.BaseVestingAccountProtoMsg): _156.BaseVestingAccount;
                toProto(message: _156.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _156.BaseVestingAccount): _156.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _156.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.ContinuousVestingAccount;
                fromPartial(object: Partial<_156.ContinuousVestingAccount>): _156.ContinuousVestingAccount;
                fromAmino(object: _156.ContinuousVestingAccountAmino): _156.ContinuousVestingAccount;
                toAmino(message: _156.ContinuousVestingAccount): _156.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _156.ContinuousVestingAccountAminoMsg): _156.ContinuousVestingAccount;
                toAminoMsg(message: _156.ContinuousVestingAccount): _156.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _156.ContinuousVestingAccountProtoMsg): _156.ContinuousVestingAccount;
                toProto(message: _156.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _156.ContinuousVestingAccount): _156.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _156.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.DelayedVestingAccount;
                fromPartial(object: Partial<_156.DelayedVestingAccount>): _156.DelayedVestingAccount;
                fromAmino(object: _156.DelayedVestingAccountAmino): _156.DelayedVestingAccount;
                toAmino(message: _156.DelayedVestingAccount): _156.DelayedVestingAccountAmino;
                fromAminoMsg(object: _156.DelayedVestingAccountAminoMsg): _156.DelayedVestingAccount;
                toAminoMsg(message: _156.DelayedVestingAccount): _156.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _156.DelayedVestingAccountProtoMsg): _156.DelayedVestingAccount;
                toProto(message: _156.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _156.DelayedVestingAccount): _156.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _156.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.Period;
                fromPartial(object: Partial<_156.Period>): _156.Period;
                fromAmino(object: _156.PeriodAmino): _156.Period;
                toAmino(message: _156.Period): _156.PeriodAmino;
                fromAminoMsg(object: _156.PeriodAminoMsg): _156.Period;
                toAminoMsg(message: _156.Period): _156.PeriodAminoMsg;
                fromProtoMsg(message: _156.PeriodProtoMsg): _156.Period;
                toProto(message: _156.Period): Uint8Array;
                toProtoMsg(message: _156.Period): _156.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _156.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.PeriodicVestingAccount;
                fromPartial(object: Partial<_156.PeriodicVestingAccount>): _156.PeriodicVestingAccount;
                fromAmino(object: _156.PeriodicVestingAccountAmino): _156.PeriodicVestingAccount;
                toAmino(message: _156.PeriodicVestingAccount): _156.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _156.PeriodicVestingAccountAminoMsg): _156.PeriodicVestingAccount;
                toAminoMsg(message: _156.PeriodicVestingAccount): _156.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _156.PeriodicVestingAccountProtoMsg): _156.PeriodicVestingAccount;
                toProto(message: _156.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _156.PeriodicVestingAccount): _156.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _156.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.PermanentLockedAccount;
                fromPartial(object: Partial<_156.PermanentLockedAccount>): _156.PermanentLockedAccount;
                fromAmino(object: _156.PermanentLockedAccountAmino): _156.PermanentLockedAccount;
                toAmino(message: _156.PermanentLockedAccount): _156.PermanentLockedAccountAmino;
                fromAminoMsg(object: _156.PermanentLockedAccountAminoMsg): _156.PermanentLockedAccount;
                toAminoMsg(message: _156.PermanentLockedAccount): _156.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _156.PermanentLockedAccountProtoMsg): _156.PermanentLockedAccount;
                toProto(message: _156.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _156.PermanentLockedAccount): _156.PermanentLockedAccountProtoMsg;
            };
            ClawbackVestingAccount: {
                typeUrl: string;
                encode(message: _156.ClawbackVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.ClawbackVestingAccount;
                fromPartial(object: Partial<_156.ClawbackVestingAccount>): _156.ClawbackVestingAccount;
                fromAmino(object: _156.ClawbackVestingAccountAmino): _156.ClawbackVestingAccount;
                toAmino(message: _156.ClawbackVestingAccount): _156.ClawbackVestingAccountAmino;
                fromAminoMsg(object: _156.ClawbackVestingAccountAminoMsg): _156.ClawbackVestingAccount;
                toAminoMsg(message: _156.ClawbackVestingAccount): _156.ClawbackVestingAccountAminoMsg;
                fromProtoMsg(message: _156.ClawbackVestingAccountProtoMsg): _156.ClawbackVestingAccount;
                toProto(message: _156.ClawbackVestingAccount): Uint8Array;
                toProtoMsg(message: _156.ClawbackVestingAccount): _156.ClawbackVestingAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _155.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.MsgCreateVestingAccount;
                fromPartial(object: Partial<_155.MsgCreateVestingAccount>): _155.MsgCreateVestingAccount;
                fromAmino(object: _155.MsgCreateVestingAccountAmino): _155.MsgCreateVestingAccount;
                toAmino(message: _155.MsgCreateVestingAccount): _155.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _155.MsgCreateVestingAccountAminoMsg): _155.MsgCreateVestingAccount;
                toAminoMsg(message: _155.MsgCreateVestingAccount): _155.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _155.MsgCreateVestingAccountProtoMsg): _155.MsgCreateVestingAccount;
                toProto(message: _155.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _155.MsgCreateVestingAccount): _155.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _155.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _155.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_155.MsgCreateVestingAccountResponse>): _155.MsgCreateVestingAccountResponse;
                fromAmino(_: _155.MsgCreateVestingAccountResponseAmino): _155.MsgCreateVestingAccountResponse;
                toAmino(_: _155.MsgCreateVestingAccountResponse): _155.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _155.MsgCreateVestingAccountResponseAminoMsg): _155.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _155.MsgCreateVestingAccountResponse): _155.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _155.MsgCreateVestingAccountResponseProtoMsg): _155.MsgCreateVestingAccountResponse;
                toProto(message: _155.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _155.MsgCreateVestingAccountResponse): _155.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreateClawbackVestingAccount: {
                typeUrl: string;
                encode(message: _155.MsgCreateClawbackVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.MsgCreateClawbackVestingAccount;
                fromPartial(object: Partial<_155.MsgCreateClawbackVestingAccount>): _155.MsgCreateClawbackVestingAccount;
                fromAmino(object: _155.MsgCreateClawbackVestingAccountAmino): _155.MsgCreateClawbackVestingAccount;
                toAmino(message: _155.MsgCreateClawbackVestingAccount): _155.MsgCreateClawbackVestingAccountAmino;
                fromAminoMsg(object: _155.MsgCreateClawbackVestingAccountAminoMsg): _155.MsgCreateClawbackVestingAccount;
                toAminoMsg(message: _155.MsgCreateClawbackVestingAccount): _155.MsgCreateClawbackVestingAccountAminoMsg;
                fromProtoMsg(message: _155.MsgCreateClawbackVestingAccountProtoMsg): _155.MsgCreateClawbackVestingAccount;
                toProto(message: _155.MsgCreateClawbackVestingAccount): Uint8Array;
                toProtoMsg(message: _155.MsgCreateClawbackVestingAccount): _155.MsgCreateClawbackVestingAccountProtoMsg;
            };
            MsgCreateClawbackVestingAccountResponse: {
                typeUrl: string;
                encode(_: _155.MsgCreateClawbackVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _155.MsgCreateClawbackVestingAccountResponse;
                fromPartial(_: Partial<_155.MsgCreateClawbackVestingAccountResponse>): _155.MsgCreateClawbackVestingAccountResponse;
                fromAmino(_: _155.MsgCreateClawbackVestingAccountResponseAmino): _155.MsgCreateClawbackVestingAccountResponse;
                toAmino(_: _155.MsgCreateClawbackVestingAccountResponse): _155.MsgCreateClawbackVestingAccountResponseAmino;
                fromAminoMsg(object: _155.MsgCreateClawbackVestingAccountResponseAminoMsg): _155.MsgCreateClawbackVestingAccountResponse;
                toAminoMsg(message: _155.MsgCreateClawbackVestingAccountResponse): _155.MsgCreateClawbackVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _155.MsgCreateClawbackVestingAccountResponseProtoMsg): _155.MsgCreateClawbackVestingAccountResponse;
                toProto(message: _155.MsgCreateClawbackVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _155.MsgCreateClawbackVestingAccountResponse): _155.MsgCreateClawbackVestingAccountResponseProtoMsg;
            };
            MsgClawback: {
                typeUrl: string;
                encode(message: _155.MsgClawback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.MsgClawback;
                fromPartial(object: Partial<_155.MsgClawback>): _155.MsgClawback;
                fromAmino(object: _155.MsgClawbackAmino): _155.MsgClawback;
                toAmino(message: _155.MsgClawback): _155.MsgClawbackAmino;
                fromAminoMsg(object: _155.MsgClawbackAminoMsg): _155.MsgClawback;
                toAminoMsg(message: _155.MsgClawback): _155.MsgClawbackAminoMsg;
                fromProtoMsg(message: _155.MsgClawbackProtoMsg): _155.MsgClawback;
                toProto(message: _155.MsgClawback): Uint8Array;
                toProtoMsg(message: _155.MsgClawback): _155.MsgClawbackProtoMsg;
            };
            MsgClawbackResponse: {
                typeUrl: string;
                encode(_: _155.MsgClawbackResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _155.MsgClawbackResponse;
                fromPartial(_: Partial<_155.MsgClawbackResponse>): _155.MsgClawbackResponse;
                fromAmino(_: _155.MsgClawbackResponseAmino): _155.MsgClawbackResponse;
                toAmino(_: _155.MsgClawbackResponse): _155.MsgClawbackResponseAmino;
                fromAminoMsg(object: _155.MsgClawbackResponseAminoMsg): _155.MsgClawbackResponse;
                toAminoMsg(message: _155.MsgClawbackResponse): _155.MsgClawbackResponseAminoMsg;
                fromProtoMsg(message: _155.MsgClawbackResponseProtoMsg): _155.MsgClawbackResponse;
                toProto(message: _155.MsgClawbackResponse): Uint8Array;
                toProtoMsg(message: _155.MsgClawbackResponse): _155.MsgClawbackResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _314.MsgClientImpl;
                };
                bank: {
                    v1beta1: _315.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _316.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _317.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _318.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _319.MsgClientImpl;
                };
                gov: {
                    v1beta1: _320.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _321.MsgClientImpl;
                };
                staking: {
                    v1beta1: _322.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _323.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _89.QueryAccountsRequest): Promise<_89.QueryAccountsResponse>;
                        account(request: _89.QueryAccountRequest): Promise<_89.QueryAccountResponse>;
                        params(request?: _89.QueryParamsRequest): Promise<_89.QueryParamsResponse>;
                        moduleAccounts(request?: _89.QueryModuleAccountsRequest): Promise<_89.QueryModuleAccountsResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _93.QueryGrantsRequest): Promise<_93.QueryGrantsResponse>;
                        granterGrants(request: _93.QueryGranterGrantsRequest): Promise<_93.QueryGranterGrantsResponse>;
                        granteeGrants(request: _93.QueryGranteeGrantsRequest): Promise<_93.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _98.QueryBalanceRequest): Promise<_98.QueryBalanceResponse>;
                        allBalances(request: _98.QueryAllBalancesRequest): Promise<_98.QueryAllBalancesResponse>;
                        totalSupply(request?: _98.QueryTotalSupplyRequest): Promise<_98.QueryTotalSupplyResponse>;
                        supplyOf(request: _98.QuerySupplyOfRequest): Promise<_98.QuerySupplyOfResponse>;
                        totalSupplyWithoutOffset(request?: _98.QueryTotalSupplyWithoutOffsetRequest): Promise<_98.QueryTotalSupplyWithoutOffsetResponse>;
                        supplyOfWithoutOffset(request: _98.QuerySupplyOfWithoutOffsetRequest): Promise<_98.QuerySupplyOfWithoutOffsetResponse>;
                        params(request?: _98.QueryParamsRequest): Promise<_98.QueryParamsResponse>;
                        denomMetadata(request: _98.QueryDenomMetadataRequest): Promise<_98.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _98.QueryDenomsMetadataRequest): Promise<_98.QueryDenomsMetadataResponse>;
                        baseDenom(request: _98.QueryBaseDenomRequest): Promise<_98.QueryBaseDenomResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _102.ConfigRequest): Promise<_102.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _109.GetNodeInfoRequest): Promise<_109.GetNodeInfoResponse>;
                            getSyncing(request?: _109.GetSyncingRequest): Promise<_109.GetSyncingResponse>;
                            getLatestBlock(request?: _109.GetLatestBlockRequest): Promise<_109.GetLatestBlockResponse>;
                            getBlockByHeight(request: _109.GetBlockByHeightRequest): Promise<_109.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _109.GetLatestValidatorSetRequest): Promise<_109.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _109.GetValidatorSetByHeightRequest): Promise<_109.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _121.QueryParamsRequest): Promise<_121.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _121.QueryValidatorOutstandingRewardsRequest): Promise<_121.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _121.QueryValidatorCommissionRequest): Promise<_121.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _121.QueryValidatorSlashesRequest): Promise<_121.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _121.QueryDelegationRewardsRequest): Promise<_121.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _121.QueryDelegationTotalRewardsRequest): Promise<_121.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _121.QueryDelegatorValidatorsRequest): Promise<_121.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _121.QueryDelegatorWithdrawAddressRequest): Promise<_121.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _121.QueryCommunityPoolRequest): Promise<_121.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _125.QueryEvidenceRequest): Promise<_125.QueryEvidenceResponse>;
                        allEvidence(request?: _125.QueryAllEvidenceRequest): Promise<_125.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _129.QueryAllowanceRequest): Promise<_129.QueryAllowanceResponse>;
                        allowances(request: _129.QueryAllowancesRequest): Promise<_129.QueryAllowancesResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _134.QueryProposalRequest): Promise<_134.QueryProposalResponse>;
                        proposals(request: _134.QueryProposalsRequest): Promise<_134.QueryProposalsResponse>;
                        vote(request: _134.QueryVoteRequest): Promise<_134.QueryVoteResponse>;
                        votes(request: _134.QueryVotesRequest): Promise<_134.QueryVotesResponse>;
                        params(request: _134.QueryParamsRequest): Promise<_134.QueryParamsResponse>;
                        deposit(request: _134.QueryDepositRequest): Promise<_134.QueryDepositResponse>;
                        deposits(request: _134.QueryDepositsRequest): Promise<_134.QueryDepositsResponse>;
                        tallyResult(request: _134.QueryTallyResultRequest): Promise<_134.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _138.QueryParamsRequest): Promise<_138.QueryParamsResponse>;
                        inflation(request?: _138.QueryInflationRequest): Promise<_138.QueryInflationResponse>;
                        annualProvisions(request?: _138.QueryAnnualProvisionsRequest): Promise<_138.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _140.QueryParamsRequest): Promise<_140.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _142.QueryParamsRequest): Promise<_142.QueryParamsResponse>;
                        signingInfo(request: _142.QuerySigningInfoRequest): Promise<_142.QuerySigningInfoResponse>;
                        signingInfos(request?: _142.QuerySigningInfosRequest): Promise<_142.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _147.QueryValidatorsRequest): Promise<_147.QueryValidatorsResponse>;
                        validator(request: _147.QueryValidatorRequest): Promise<_147.QueryValidatorResponse>;
                        validatorDelegations(request: _147.QueryValidatorDelegationsRequest): Promise<_147.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _147.QueryValidatorUnbondingDelegationsRequest): Promise<_147.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _147.QueryDelegationRequest): Promise<_147.QueryDelegationResponse>;
                        unbondingDelegation(request: _147.QueryUnbondingDelegationRequest): Promise<_147.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _147.QueryDelegatorDelegationsRequest): Promise<_147.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _147.QueryDelegatorUnbondingDelegationsRequest): Promise<_147.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _147.QueryRedelegationsRequest): Promise<_147.QueryRedelegationsResponse>;
                        delegatorValidators(request: _147.QueryDelegatorValidatorsRequest): Promise<_147.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _147.QueryDelegatorValidatorRequest): Promise<_147.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _147.QueryHistoricalInfoRequest): Promise<_147.QueryHistoricalInfoResponse>;
                        pool(request?: _147.QueryPoolRequest): Promise<_147.QueryPoolResponse>;
                        params(request?: _147.QueryParamsRequest): Promise<_147.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _151.SimulateRequest): Promise<_151.SimulateResponse>;
                        getTx(request: _151.GetTxRequest): Promise<_151.GetTxResponse>;
                        broadcastTx(request: _151.BroadcastTxRequest): Promise<_151.BroadcastTxResponse>;
                        getTxsEvent(request: _151.GetTxsEventRequest): Promise<_151.GetTxsEventResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _153.QueryCurrentPlanRequest): Promise<_153.QueryCurrentPlanResponse>;
                        appliedPlan(request: _153.QueryAppliedPlanRequest): Promise<_153.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _153.QueryUpgradedConsensusStateRequest): Promise<_153.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _153.QueryModuleVersionsRequest): Promise<_153.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _284.LCDQueryClient;
                };
                authz: {
                    v1beta1: _285.LCDQueryClient;
                };
                bank: {
                    v1beta1: _286.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _287.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _288.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _289.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _290.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _291.LCDQueryClient;
                };
                gov: {
                    v1beta1: _292.LCDQueryClient;
                };
                mint: {
                    v1beta1: _293.LCDQueryClient;
                };
                params: {
                    v1beta1: _294.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _295.LCDQueryClient;
                };
                staking: {
                    v1beta1: _296.LCDQueryClient;
                };
                tx: {
                    v1beta1: _297.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _298.LCDQueryClient;
                };
            };
        }>;
    };
}
