import * as _110 from "./auth/v1beta1/auth";
import * as _111 from "./auth/v1beta1/genesis";
import * as _112 from "./auth/v1beta1/query";
import * as _113 from "./authz/v1beta1/authz";
import * as _114 from "./authz/v1beta1/event";
import * as _115 from "./authz/v1beta1/genesis";
import * as _116 from "./authz/v1beta1/query";
import * as _117 from "./authz/v1beta1/tx";
import * as _118 from "./bank/v1beta1/authz";
import * as _119 from "./bank/v1beta1/bank";
import * as _120 from "./bank/v1beta1/genesis";
import * as _121 from "./bank/v1beta1/query";
import * as _122 from "./bank/v1beta1/tx";
import * as _123 from "./base/abci/v1beta1/abci";
import * as _124 from "./base/kv/v1beta1/kv";
import * as _125 from "./base/node/v1beta1/query";
import * as _126 from "./base/query/v1beta1/pagination";
import * as _127 from "./base/reflection/v1beta1/reflection";
import * as _128 from "./base/reflection/v2alpha1/reflection";
import * as _129 from "./base/snapshots/v1beta1/snapshot";
import * as _130 from "./base/store/v1beta1/commit_info";
import * as _131 from "./base/store/v1beta1/listening";
import * as _132 from "./base/tendermint/v1beta1/query";
import * as _133 from "./base/v1beta1/coin";
import * as _134 from "./capability/v1beta1/capability";
import * as _135 from "./capability/v1beta1/genesis";
import * as _136 from "./crisis/v1beta1/genesis";
import * as _137 from "./crisis/v1beta1/tx";
import * as _138 from "./crypto/ed25519/keys";
import * as _139 from "./crypto/multisig/keys";
import * as _140 from "./crypto/secp256k1/keys";
import * as _141 from "./crypto/secp256r1/keys";
import * as _142 from "./distribution/v1beta1/distribution";
import * as _143 from "./distribution/v1beta1/genesis";
import * as _144 from "./distribution/v1beta1/query";
import * as _145 from "./distribution/v1beta1/tx";
import * as _146 from "./evidence/v1beta1/evidence";
import * as _147 from "./evidence/v1beta1/genesis";
import * as _148 from "./evidence/v1beta1/query";
import * as _149 from "./evidence/v1beta1/tx";
import * as _150 from "./feegrant/v1beta1/feegrant";
import * as _151 from "./feegrant/v1beta1/genesis";
import * as _152 from "./feegrant/v1beta1/query";
import * as _153 from "./feegrant/v1beta1/tx";
import * as _154 from "./genutil/v1beta1/genesis";
import * as _155 from "./gov/v1beta1/genesis";
import * as _156 from "./gov/v1beta1/gov";
import * as _157 from "./gov/v1beta1/query";
import * as _158 from "./gov/v1beta1/tx";
import * as _159 from "./mint/v1beta1/genesis";
import * as _160 from "./mint/v1beta1/mint";
import * as _161 from "./mint/v1beta1/query";
import * as _162 from "./params/v1beta1/params";
import * as _163 from "./params/v1beta1/query";
import * as _164 from "./slashing/v1beta1/genesis";
import * as _165 from "./slashing/v1beta1/query";
import * as _166 from "./slashing/v1beta1/slashing";
import * as _167 from "./slashing/v1beta1/tx";
import * as _168 from "./staking/v1beta1/authz";
import * as _169 from "./staking/v1beta1/genesis";
import * as _170 from "./staking/v1beta1/query";
import * as _171 from "./staking/v1beta1/staking";
import * as _172 from "./staking/v1beta1/tx";
import * as _173 from "./tx/signing/v1beta1/signing";
import * as _174 from "./tx/v1beta1/service";
import * as _175 from "./tx/v1beta1/tx";
import * as _176 from "./upgrade/v1beta1/query";
import * as _177 from "./upgrade/v1beta1/upgrade";
import * as _178 from "./vesting/v1beta1/tx";
import * as _179 from "./vesting/v1beta1/vesting";
import * as _305 from "./auth/v1beta1/query.lcd";
import * as _306 from "./authz/v1beta1/query.lcd";
import * as _307 from "./bank/v1beta1/query.lcd";
import * as _308 from "./base/node/v1beta1/query.lcd";
import * as _309 from "./base/tendermint/v1beta1/query.lcd";
import * as _310 from "./distribution/v1beta1/query.lcd";
import * as _311 from "./evidence/v1beta1/query.lcd";
import * as _312 from "./feegrant/v1beta1/query.lcd";
import * as _313 from "./gov/v1beta1/query.lcd";
import * as _314 from "./mint/v1beta1/query.lcd";
import * as _315 from "./params/v1beta1/query.lcd";
import * as _316 from "./slashing/v1beta1/query.lcd";
import * as _317 from "./staking/v1beta1/query.lcd";
import * as _318 from "./tx/v1beta1/service.lcd";
import * as _319 from "./upgrade/v1beta1/query.lcd";
import * as _320 from "./auth/v1beta1/query.rpc.Query";
import * as _321 from "./authz/v1beta1/query.rpc.Query";
import * as _322 from "./bank/v1beta1/query.rpc.Query";
import * as _323 from "./base/node/v1beta1/query.rpc.Service";
import * as _324 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _325 from "./distribution/v1beta1/query.rpc.Query";
import * as _326 from "./evidence/v1beta1/query.rpc.Query";
import * as _327 from "./feegrant/v1beta1/query.rpc.Query";
import * as _328 from "./gov/v1beta1/query.rpc.Query";
import * as _329 from "./mint/v1beta1/query.rpc.Query";
import * as _330 from "./params/v1beta1/query.rpc.Query";
import * as _331 from "./slashing/v1beta1/query.rpc.Query";
import * as _332 from "./staking/v1beta1/query.rpc.Query";
import * as _333 from "./tx/v1beta1/service.rpc.Service";
import * as _334 from "./upgrade/v1beta1/query.rpc.Query";
import * as _335 from "./authz/v1beta1/tx.rpc.msg";
import * as _336 from "./bank/v1beta1/tx.rpc.msg";
import * as _337 from "./crisis/v1beta1/tx.rpc.msg";
import * as _338 from "./distribution/v1beta1/tx.rpc.msg";
import * as _339 from "./evidence/v1beta1/tx.rpc.msg";
import * as _340 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _341 from "./gov/v1beta1/tx.rpc.msg";
import * as _342 from "./slashing/v1beta1/tx.rpc.msg";
import * as _343 from "./staking/v1beta1/tx.rpc.msg";
import * as _344 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _320.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _112.QueryAccountsRequest): Promise<_112.QueryAccountsResponse>;
                account(request: _112.QueryAccountRequest): Promise<_112.QueryAccountResponse>;
                params(request?: _112.QueryParamsRequest): Promise<_112.QueryParamsResponse>;
                moduleAccountByName(request: _112.QueryModuleAccountByNameRequest): Promise<_112.QueryModuleAccountByNameResponse>;
            };
            LCDQueryClient: typeof _305.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _112.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryAccountsRequest;
                fromPartial(object: Partial<_112.QueryAccountsRequest>): _112.QueryAccountsRequest;
                fromAmino(object: _112.QueryAccountsRequestAmino): _112.QueryAccountsRequest;
                toAmino(message: _112.QueryAccountsRequest): _112.QueryAccountsRequestAmino;
                fromAminoMsg(object: _112.QueryAccountsRequestAminoMsg): _112.QueryAccountsRequest;
                toAminoMsg(message: _112.QueryAccountsRequest): _112.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _112.QueryAccountsRequestProtoMsg): _112.QueryAccountsRequest;
                toProto(message: _112.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _112.QueryAccountsRequest): _112.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _112.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryAccountsResponse;
                fromPartial(object: Partial<_112.QueryAccountsResponse>): _112.QueryAccountsResponse;
                fromAmino(object: _112.QueryAccountsResponseAmino): _112.QueryAccountsResponse;
                toAmino(message: _112.QueryAccountsResponse): _112.QueryAccountsResponseAmino;
                fromAminoMsg(object: _112.QueryAccountsResponseAminoMsg): _112.QueryAccountsResponse;
                toAminoMsg(message: _112.QueryAccountsResponse): _112.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _112.QueryAccountsResponseProtoMsg): _112.QueryAccountsResponse;
                toProto(message: _112.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _112.QueryAccountsResponse): _112.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _112.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryAccountRequest;
                fromPartial(object: Partial<_112.QueryAccountRequest>): _112.QueryAccountRequest;
                fromAmino(object: _112.QueryAccountRequestAmino): _112.QueryAccountRequest;
                toAmino(message: _112.QueryAccountRequest): _112.QueryAccountRequestAmino;
                fromAminoMsg(object: _112.QueryAccountRequestAminoMsg): _112.QueryAccountRequest;
                toAminoMsg(message: _112.QueryAccountRequest): _112.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _112.QueryAccountRequestProtoMsg): _112.QueryAccountRequest;
                toProto(message: _112.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _112.QueryAccountRequest): _112.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _112.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryAccountResponse;
                fromPartial(object: Partial<_112.QueryAccountResponse>): _112.QueryAccountResponse;
                fromAmino(object: _112.QueryAccountResponseAmino): _112.QueryAccountResponse;
                toAmino(message: _112.QueryAccountResponse): _112.QueryAccountResponseAmino;
                fromAminoMsg(object: _112.QueryAccountResponseAminoMsg): _112.QueryAccountResponse;
                toAminoMsg(message: _112.QueryAccountResponse): _112.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _112.QueryAccountResponseProtoMsg): _112.QueryAccountResponse;
                toProto(message: _112.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _112.QueryAccountResponse): _112.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _112.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _112.QueryParamsRequest;
                fromPartial(_: Partial<_112.QueryParamsRequest>): _112.QueryParamsRequest;
                fromAmino(_: _112.QueryParamsRequestAmino): _112.QueryParamsRequest;
                toAmino(_: _112.QueryParamsRequest): _112.QueryParamsRequestAmino;
                fromAminoMsg(object: _112.QueryParamsRequestAminoMsg): _112.QueryParamsRequest;
                toAminoMsg(message: _112.QueryParamsRequest): _112.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _112.QueryParamsRequestProtoMsg): _112.QueryParamsRequest;
                toProto(message: _112.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _112.QueryParamsRequest): _112.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _112.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryParamsResponse;
                fromPartial(object: Partial<_112.QueryParamsResponse>): _112.QueryParamsResponse;
                fromAmino(object: _112.QueryParamsResponseAmino): _112.QueryParamsResponse;
                toAmino(message: _112.QueryParamsResponse): _112.QueryParamsResponseAmino;
                fromAminoMsg(object: _112.QueryParamsResponseAminoMsg): _112.QueryParamsResponse;
                toAminoMsg(message: _112.QueryParamsResponse): _112.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _112.QueryParamsResponseProtoMsg): _112.QueryParamsResponse;
                toProto(message: _112.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _112.QueryParamsResponse): _112.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _112.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_112.QueryModuleAccountByNameRequest>): _112.QueryModuleAccountByNameRequest;
                fromAmino(object: _112.QueryModuleAccountByNameRequestAmino): _112.QueryModuleAccountByNameRequest;
                toAmino(message: _112.QueryModuleAccountByNameRequest): _112.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _112.QueryModuleAccountByNameRequestAminoMsg): _112.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _112.QueryModuleAccountByNameRequest): _112.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _112.QueryModuleAccountByNameRequestProtoMsg): _112.QueryModuleAccountByNameRequest;
                toProto(message: _112.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _112.QueryModuleAccountByNameRequest): _112.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _112.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_112.QueryModuleAccountByNameResponse>): _112.QueryModuleAccountByNameResponse;
                fromAmino(object: _112.QueryModuleAccountByNameResponseAmino): _112.QueryModuleAccountByNameResponse;
                toAmino(message: _112.QueryModuleAccountByNameResponse): _112.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _112.QueryModuleAccountByNameResponseAminoMsg): _112.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _112.QueryModuleAccountByNameResponse): _112.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _112.QueryModuleAccountByNameResponseProtoMsg): _112.QueryModuleAccountByNameResponse;
                toProto(message: _112.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _112.QueryModuleAccountByNameResponse): _112.QueryModuleAccountByNameResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _110.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _110.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _111.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.GenesisState;
                fromPartial(object: Partial<_111.GenesisState>): _111.GenesisState;
                fromAmino(object: _111.GenesisStateAmino): _111.GenesisState;
                toAmino(message: _111.GenesisState): _111.GenesisStateAmino;
                fromAminoMsg(object: _111.GenesisStateAminoMsg): _111.GenesisState;
                toAminoMsg(message: _111.GenesisState): _111.GenesisStateAminoMsg;
                fromProtoMsg(message: _111.GenesisStateProtoMsg): _111.GenesisState;
                toProto(message: _111.GenesisState): Uint8Array;
                toProtoMsg(message: _111.GenesisState): _111.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _110.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.BaseAccount;
                fromPartial(object: Partial<_110.BaseAccount>): _110.BaseAccount;
                fromAmino(object: _110.BaseAccountAmino): _110.BaseAccount;
                toAmino(message: _110.BaseAccount): _110.BaseAccountAmino;
                fromAminoMsg(object: _110.BaseAccountAminoMsg): _110.BaseAccount;
                toAminoMsg(message: _110.BaseAccount): _110.BaseAccountAminoMsg;
                fromProtoMsg(message: _110.BaseAccountProtoMsg): _110.BaseAccount;
                toProto(message: _110.BaseAccount): Uint8Array;
                toProtoMsg(message: _110.BaseAccount): _110.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _110.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.ModuleAccount;
                fromPartial(object: Partial<_110.ModuleAccount>): _110.ModuleAccount;
                fromAmino(object: _110.ModuleAccountAmino): _110.ModuleAccount;
                toAmino(message: _110.ModuleAccount): _110.ModuleAccountAmino;
                fromAminoMsg(object: _110.ModuleAccountAminoMsg): _110.ModuleAccount;
                toAminoMsg(message: _110.ModuleAccount): _110.ModuleAccountAminoMsg;
                fromProtoMsg(message: _110.ModuleAccountProtoMsg): _110.ModuleAccount;
                toProto(message: _110.ModuleAccount): Uint8Array;
                toProtoMsg(message: _110.ModuleAccount): _110.ModuleAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _110.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.Params;
                fromPartial(object: Partial<_110.Params>): _110.Params;
                fromAmino(object: _110.ParamsAmino): _110.Params;
                toAmino(message: _110.Params): _110.ParamsAmino;
                fromAminoMsg(object: _110.ParamsAminoMsg): _110.Params;
                toAminoMsg(message: _110.Params): _110.ParamsAminoMsg;
                fromProtoMsg(message: _110.ParamsProtoMsg): _110.Params;
                toProto(message: _110.Params): Uint8Array;
                toProtoMsg(message: _110.Params): _110.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _335.MsgClientImpl;
            QueryClientImpl: typeof _321.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _116.QueryGrantsRequest): Promise<_116.QueryGrantsResponse>;
                granterGrants(request: _116.QueryGranterGrantsRequest): Promise<_116.QueryGranterGrantsResponse>;
                granteeGrants(request: _116.QueryGranteeGrantsRequest): Promise<_116.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _306.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _117.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _117.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _117.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _117.MsgGrant): {
                        typeUrl: string;
                        value: _117.MsgGrant;
                    };
                    exec(value: _117.MsgExec): {
                        typeUrl: string;
                        value: _117.MsgExec;
                    };
                    revoke(value: _117.MsgRevoke): {
                        typeUrl: string;
                        value: _117.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _117.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _117.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _117.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _117.MsgGrant): {
                        typeUrl: string;
                        value: _117.MsgGrant;
                    };
                    exec(value: _117.MsgExec): {
                        typeUrl: string;
                        value: _117.MsgExec;
                    };
                    revoke(value: _117.MsgRevoke): {
                        typeUrl: string;
                        value: _117.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _117.MsgGrant) => _117.MsgGrantAmino;
                    fromAmino: (object: _117.MsgGrantAmino) => _117.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _117.MsgExec) => _117.MsgExecAmino;
                    fromAmino: (object: _117.MsgExecAmino) => _117.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _117.MsgRevoke) => _117.MsgRevokeAmino;
                    fromAmino: (object: _117.MsgRevokeAmino) => _117.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _117.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.MsgGrant;
                fromPartial(object: Partial<_117.MsgGrant>): _117.MsgGrant;
                fromAmino(object: _117.MsgGrantAmino): _117.MsgGrant;
                toAmino(message: _117.MsgGrant): _117.MsgGrantAmino;
                fromAminoMsg(object: _117.MsgGrantAminoMsg): _117.MsgGrant;
                toAminoMsg(message: _117.MsgGrant): _117.MsgGrantAminoMsg;
                fromProtoMsg(message: _117.MsgGrantProtoMsg): _117.MsgGrant;
                toProto(message: _117.MsgGrant): Uint8Array;
                toProtoMsg(message: _117.MsgGrant): _117.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _117.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.MsgExecResponse;
                fromPartial(object: Partial<_117.MsgExecResponse>): _117.MsgExecResponse;
                fromAmino(object: _117.MsgExecResponseAmino): _117.MsgExecResponse;
                toAmino(message: _117.MsgExecResponse): _117.MsgExecResponseAmino;
                fromAminoMsg(object: _117.MsgExecResponseAminoMsg): _117.MsgExecResponse;
                toAminoMsg(message: _117.MsgExecResponse): _117.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _117.MsgExecResponseProtoMsg): _117.MsgExecResponse;
                toProto(message: _117.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _117.MsgExecResponse): _117.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _117.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.MsgExec;
                fromPartial(object: Partial<_117.MsgExec>): _117.MsgExec;
                fromAmino(object: _117.MsgExecAmino): _117.MsgExec;
                toAmino(message: _117.MsgExec): _117.MsgExecAmino;
                fromAminoMsg(object: _117.MsgExecAminoMsg): _117.MsgExec;
                toAminoMsg(message: _117.MsgExec): _117.MsgExecAminoMsg;
                fromProtoMsg(message: _117.MsgExecProtoMsg): _117.MsgExec;
                toProto(message: _117.MsgExec): Uint8Array;
                toProtoMsg(message: _117.MsgExec): _117.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _117.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _117.MsgGrantResponse;
                fromPartial(_: Partial<_117.MsgGrantResponse>): _117.MsgGrantResponse;
                fromAmino(_: _117.MsgGrantResponseAmino): _117.MsgGrantResponse;
                toAmino(_: _117.MsgGrantResponse): _117.MsgGrantResponseAmino;
                fromAminoMsg(object: _117.MsgGrantResponseAminoMsg): _117.MsgGrantResponse;
                toAminoMsg(message: _117.MsgGrantResponse): _117.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _117.MsgGrantResponseProtoMsg): _117.MsgGrantResponse;
                toProto(message: _117.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _117.MsgGrantResponse): _117.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _117.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.MsgRevoke;
                fromPartial(object: Partial<_117.MsgRevoke>): _117.MsgRevoke;
                fromAmino(object: _117.MsgRevokeAmino): _117.MsgRevoke;
                toAmino(message: _117.MsgRevoke): _117.MsgRevokeAmino;
                fromAminoMsg(object: _117.MsgRevokeAminoMsg): _117.MsgRevoke;
                toAminoMsg(message: _117.MsgRevoke): _117.MsgRevokeAminoMsg;
                fromProtoMsg(message: _117.MsgRevokeProtoMsg): _117.MsgRevoke;
                toProto(message: _117.MsgRevoke): Uint8Array;
                toProtoMsg(message: _117.MsgRevoke): _117.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _117.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _117.MsgRevokeResponse;
                fromPartial(_: Partial<_117.MsgRevokeResponse>): _117.MsgRevokeResponse;
                fromAmino(_: _117.MsgRevokeResponseAmino): _117.MsgRevokeResponse;
                toAmino(_: _117.MsgRevokeResponse): _117.MsgRevokeResponseAmino;
                fromAminoMsg(object: _117.MsgRevokeResponseAminoMsg): _117.MsgRevokeResponse;
                toAminoMsg(message: _117.MsgRevokeResponse): _117.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _117.MsgRevokeResponseProtoMsg): _117.MsgRevokeResponse;
                toProto(message: _117.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _117.MsgRevokeResponse): _117.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _116.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryGrantsRequest;
                fromPartial(object: Partial<_116.QueryGrantsRequest>): _116.QueryGrantsRequest;
                fromAmino(object: _116.QueryGrantsRequestAmino): _116.QueryGrantsRequest;
                toAmino(message: _116.QueryGrantsRequest): _116.QueryGrantsRequestAmino;
                fromAminoMsg(object: _116.QueryGrantsRequestAminoMsg): _116.QueryGrantsRequest;
                toAminoMsg(message: _116.QueryGrantsRequest): _116.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _116.QueryGrantsRequestProtoMsg): _116.QueryGrantsRequest;
                toProto(message: _116.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _116.QueryGrantsRequest): _116.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _116.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryGrantsResponse;
                fromPartial(object: Partial<_116.QueryGrantsResponse>): _116.QueryGrantsResponse;
                fromAmino(object: _116.QueryGrantsResponseAmino): _116.QueryGrantsResponse;
                toAmino(message: _116.QueryGrantsResponse): _116.QueryGrantsResponseAmino;
                fromAminoMsg(object: _116.QueryGrantsResponseAminoMsg): _116.QueryGrantsResponse;
                toAminoMsg(message: _116.QueryGrantsResponse): _116.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _116.QueryGrantsResponseProtoMsg): _116.QueryGrantsResponse;
                toProto(message: _116.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _116.QueryGrantsResponse): _116.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _116.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_116.QueryGranterGrantsRequest>): _116.QueryGranterGrantsRequest;
                fromAmino(object: _116.QueryGranterGrantsRequestAmino): _116.QueryGranterGrantsRequest;
                toAmino(message: _116.QueryGranterGrantsRequest): _116.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _116.QueryGranterGrantsRequestAminoMsg): _116.QueryGranterGrantsRequest;
                toAminoMsg(message: _116.QueryGranterGrantsRequest): _116.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _116.QueryGranterGrantsRequestProtoMsg): _116.QueryGranterGrantsRequest;
                toProto(message: _116.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _116.QueryGranterGrantsRequest): _116.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _116.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_116.QueryGranterGrantsResponse>): _116.QueryGranterGrantsResponse;
                fromAmino(object: _116.QueryGranterGrantsResponseAmino): _116.QueryGranterGrantsResponse;
                toAmino(message: _116.QueryGranterGrantsResponse): _116.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _116.QueryGranterGrantsResponseAminoMsg): _116.QueryGranterGrantsResponse;
                toAminoMsg(message: _116.QueryGranterGrantsResponse): _116.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _116.QueryGranterGrantsResponseProtoMsg): _116.QueryGranterGrantsResponse;
                toProto(message: _116.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _116.QueryGranterGrantsResponse): _116.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _116.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_116.QueryGranteeGrantsRequest>): _116.QueryGranteeGrantsRequest;
                fromAmino(object: _116.QueryGranteeGrantsRequestAmino): _116.QueryGranteeGrantsRequest;
                toAmino(message: _116.QueryGranteeGrantsRequest): _116.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _116.QueryGranteeGrantsRequestAminoMsg): _116.QueryGranteeGrantsRequest;
                toAminoMsg(message: _116.QueryGranteeGrantsRequest): _116.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _116.QueryGranteeGrantsRequestProtoMsg): _116.QueryGranteeGrantsRequest;
                toProto(message: _116.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _116.QueryGranteeGrantsRequest): _116.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _116.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_116.QueryGranteeGrantsResponse>): _116.QueryGranteeGrantsResponse;
                fromAmino(object: _116.QueryGranteeGrantsResponseAmino): _116.QueryGranteeGrantsResponse;
                toAmino(message: _116.QueryGranteeGrantsResponse): _116.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _116.QueryGranteeGrantsResponseAminoMsg): _116.QueryGranteeGrantsResponse;
                toAminoMsg(message: _116.QueryGranteeGrantsResponse): _116.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _116.QueryGranteeGrantsResponseProtoMsg): _116.QueryGranteeGrantsResponse;
                toProto(message: _116.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _116.QueryGranteeGrantsResponse): _116.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _115.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.GenesisState;
                fromPartial(object: Partial<_115.GenesisState>): _115.GenesisState;
                fromAmino(object: _115.GenesisStateAmino): _115.GenesisState;
                toAmino(message: _115.GenesisState): _115.GenesisStateAmino;
                fromAminoMsg(object: _115.GenesisStateAminoMsg): _115.GenesisState;
                toAminoMsg(message: _115.GenesisState): _115.GenesisStateAminoMsg;
                fromProtoMsg(message: _115.GenesisStateProtoMsg): _115.GenesisState;
                toProto(message: _115.GenesisState): Uint8Array;
                toProtoMsg(message: _115.GenesisState): _115.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _114.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.EventGrant;
                fromPartial(object: Partial<_114.EventGrant>): _114.EventGrant;
                fromAmino(object: _114.EventGrantAmino): _114.EventGrant;
                toAmino(message: _114.EventGrant): _114.EventGrantAmino;
                fromAminoMsg(object: _114.EventGrantAminoMsg): _114.EventGrant;
                toAminoMsg(message: _114.EventGrant): _114.EventGrantAminoMsg;
                fromProtoMsg(message: _114.EventGrantProtoMsg): _114.EventGrant;
                toProto(message: _114.EventGrant): Uint8Array;
                toProtoMsg(message: _114.EventGrant): _114.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _114.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.EventRevoke;
                fromPartial(object: Partial<_114.EventRevoke>): _114.EventRevoke;
                fromAmino(object: _114.EventRevokeAmino): _114.EventRevoke;
                toAmino(message: _114.EventRevoke): _114.EventRevokeAmino;
                fromAminoMsg(object: _114.EventRevokeAminoMsg): _114.EventRevoke;
                toAminoMsg(message: _114.EventRevoke): _114.EventRevokeAminoMsg;
                fromProtoMsg(message: _114.EventRevokeProtoMsg): _114.EventRevoke;
                toProto(message: _114.EventRevoke): Uint8Array;
                toProtoMsg(message: _114.EventRevoke): _114.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _113.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.GenericAuthorization;
                fromPartial(object: Partial<_113.GenericAuthorization>): _113.GenericAuthorization;
                fromAmino(object: _113.GenericAuthorizationAmino): _113.GenericAuthorization;
                toAmino(message: _113.GenericAuthorization): _113.GenericAuthorizationAmino;
                fromAminoMsg(object: _113.GenericAuthorizationAminoMsg): _113.GenericAuthorization;
                toAminoMsg(message: _113.GenericAuthorization): _113.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _113.GenericAuthorizationProtoMsg): _113.GenericAuthorization;
                toProto(message: _113.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _113.GenericAuthorization): _113.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _113.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.Grant;
                fromPartial(object: Partial<_113.Grant>): _113.Grant;
                fromAmino(object: _113.GrantAmino): _113.Grant;
                toAmino(message: _113.Grant): _113.GrantAmino;
                fromAminoMsg(object: _113.GrantAminoMsg): _113.Grant;
                toAminoMsg(message: _113.Grant): _113.GrantAminoMsg;
                fromProtoMsg(message: _113.GrantProtoMsg): _113.Grant;
                toProto(message: _113.Grant): Uint8Array;
                toProtoMsg(message: _113.Grant): _113.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _113.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.GrantAuthorization;
                fromPartial(object: Partial<_113.GrantAuthorization>): _113.GrantAuthorization;
                fromAmino(object: _113.GrantAuthorizationAmino): _113.GrantAuthorization;
                toAmino(message: _113.GrantAuthorization): _113.GrantAuthorizationAmino;
                fromAminoMsg(object: _113.GrantAuthorizationAminoMsg): _113.GrantAuthorization;
                toAminoMsg(message: _113.GrantAuthorization): _113.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _113.GrantAuthorizationProtoMsg): _113.GrantAuthorization;
                toProto(message: _113.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _113.GrantAuthorization): _113.GrantAuthorizationProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../akash/deployment/v1beta1/authz").DepositDeploymentAuthorization | import("../akash/deployment/v1beta2/authz").DepositDeploymentAuthorization | import("../akash/deployment/v1beta3/authz").DepositDeploymentAuthorization | import("../google/protobuf/any").Any | _118.SendAuthorization | _168.StakeAuthorization | _113.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _336.MsgClientImpl;
            QueryClientImpl: typeof _322.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _121.QueryBalanceRequest): Promise<_121.QueryBalanceResponse>;
                allBalances(request: _121.QueryAllBalancesRequest): Promise<_121.QueryAllBalancesResponse>;
                spendableBalances(request: _121.QuerySpendableBalancesRequest): Promise<_121.QuerySpendableBalancesResponse>;
                totalSupply(request?: _121.QueryTotalSupplyRequest): Promise<_121.QueryTotalSupplyResponse>;
                supplyOf(request: _121.QuerySupplyOfRequest): Promise<_121.QuerySupplyOfResponse>;
                params(request?: _121.QueryParamsRequest): Promise<_121.QueryParamsResponse>;
                denomMetadata(request: _121.QueryDenomMetadataRequest): Promise<_121.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _121.QueryDenomsMetadataRequest): Promise<_121.QueryDenomsMetadataResponse>;
            };
            LCDQueryClient: typeof _307.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _122.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _122.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _122.MsgSend): {
                        typeUrl: string;
                        value: _122.MsgSend;
                    };
                    multiSend(value: _122.MsgMultiSend): {
                        typeUrl: string;
                        value: _122.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _122.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _122.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _122.MsgSend): {
                        typeUrl: string;
                        value: _122.MsgSend;
                    };
                    multiSend(value: _122.MsgMultiSend): {
                        typeUrl: string;
                        value: _122.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _122.MsgSend) => _122.MsgSendAmino;
                    fromAmino: (object: _122.MsgSendAmino) => _122.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _122.MsgMultiSend) => _122.MsgMultiSendAmino;
                    fromAmino: (object: _122.MsgMultiSendAmino) => _122.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _122.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.MsgSend;
                fromPartial(object: Partial<_122.MsgSend>): _122.MsgSend;
                fromAmino(object: _122.MsgSendAmino): _122.MsgSend;
                toAmino(message: _122.MsgSend): _122.MsgSendAmino;
                fromAminoMsg(object: _122.MsgSendAminoMsg): _122.MsgSend;
                toAminoMsg(message: _122.MsgSend): _122.MsgSendAminoMsg;
                fromProtoMsg(message: _122.MsgSendProtoMsg): _122.MsgSend;
                toProto(message: _122.MsgSend): Uint8Array;
                toProtoMsg(message: _122.MsgSend): _122.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _122.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _122.MsgSendResponse;
                fromPartial(_: Partial<_122.MsgSendResponse>): _122.MsgSendResponse;
                fromAmino(_: _122.MsgSendResponseAmino): _122.MsgSendResponse;
                toAmino(_: _122.MsgSendResponse): _122.MsgSendResponseAmino;
                fromAminoMsg(object: _122.MsgSendResponseAminoMsg): _122.MsgSendResponse;
                toAminoMsg(message: _122.MsgSendResponse): _122.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _122.MsgSendResponseProtoMsg): _122.MsgSendResponse;
                toProto(message: _122.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _122.MsgSendResponse): _122.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _122.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.MsgMultiSend;
                fromPartial(object: Partial<_122.MsgMultiSend>): _122.MsgMultiSend;
                fromAmino(object: _122.MsgMultiSendAmino): _122.MsgMultiSend;
                toAmino(message: _122.MsgMultiSend): _122.MsgMultiSendAmino;
                fromAminoMsg(object: _122.MsgMultiSendAminoMsg): _122.MsgMultiSend;
                toAminoMsg(message: _122.MsgMultiSend): _122.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _122.MsgMultiSendProtoMsg): _122.MsgMultiSend;
                toProto(message: _122.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _122.MsgMultiSend): _122.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _122.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _122.MsgMultiSendResponse;
                fromPartial(_: Partial<_122.MsgMultiSendResponse>): _122.MsgMultiSendResponse;
                fromAmino(_: _122.MsgMultiSendResponseAmino): _122.MsgMultiSendResponse;
                toAmino(_: _122.MsgMultiSendResponse): _122.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _122.MsgMultiSendResponseAminoMsg): _122.MsgMultiSendResponse;
                toAminoMsg(message: _122.MsgMultiSendResponse): _122.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _122.MsgMultiSendResponseProtoMsg): _122.MsgMultiSendResponse;
                toProto(message: _122.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _122.MsgMultiSendResponse): _122.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _121.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryBalanceRequest;
                fromPartial(object: Partial<_121.QueryBalanceRequest>): _121.QueryBalanceRequest;
                fromAmino(object: _121.QueryBalanceRequestAmino): _121.QueryBalanceRequest;
                toAmino(message: _121.QueryBalanceRequest): _121.QueryBalanceRequestAmino;
                fromAminoMsg(object: _121.QueryBalanceRequestAminoMsg): _121.QueryBalanceRequest;
                toAminoMsg(message: _121.QueryBalanceRequest): _121.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _121.QueryBalanceRequestProtoMsg): _121.QueryBalanceRequest;
                toProto(message: _121.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _121.QueryBalanceRequest): _121.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _121.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryBalanceResponse;
                fromPartial(object: Partial<_121.QueryBalanceResponse>): _121.QueryBalanceResponse;
                fromAmino(object: _121.QueryBalanceResponseAmino): _121.QueryBalanceResponse;
                toAmino(message: _121.QueryBalanceResponse): _121.QueryBalanceResponseAmino;
                fromAminoMsg(object: _121.QueryBalanceResponseAminoMsg): _121.QueryBalanceResponse;
                toAminoMsg(message: _121.QueryBalanceResponse): _121.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _121.QueryBalanceResponseProtoMsg): _121.QueryBalanceResponse;
                toProto(message: _121.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _121.QueryBalanceResponse): _121.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _121.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryAllBalancesRequest;
                fromPartial(object: Partial<_121.QueryAllBalancesRequest>): _121.QueryAllBalancesRequest;
                fromAmino(object: _121.QueryAllBalancesRequestAmino): _121.QueryAllBalancesRequest;
                toAmino(message: _121.QueryAllBalancesRequest): _121.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _121.QueryAllBalancesRequestAminoMsg): _121.QueryAllBalancesRequest;
                toAminoMsg(message: _121.QueryAllBalancesRequest): _121.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _121.QueryAllBalancesRequestProtoMsg): _121.QueryAllBalancesRequest;
                toProto(message: _121.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _121.QueryAllBalancesRequest): _121.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _121.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryAllBalancesResponse;
                fromPartial(object: Partial<_121.QueryAllBalancesResponse>): _121.QueryAllBalancesResponse;
                fromAmino(object: _121.QueryAllBalancesResponseAmino): _121.QueryAllBalancesResponse;
                toAmino(message: _121.QueryAllBalancesResponse): _121.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _121.QueryAllBalancesResponseAminoMsg): _121.QueryAllBalancesResponse;
                toAminoMsg(message: _121.QueryAllBalancesResponse): _121.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _121.QueryAllBalancesResponseProtoMsg): _121.QueryAllBalancesResponse;
                toProto(message: _121.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _121.QueryAllBalancesResponse): _121.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _121.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_121.QuerySpendableBalancesRequest>): _121.QuerySpendableBalancesRequest;
                fromAmino(object: _121.QuerySpendableBalancesRequestAmino): _121.QuerySpendableBalancesRequest;
                toAmino(message: _121.QuerySpendableBalancesRequest): _121.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _121.QuerySpendableBalancesRequestAminoMsg): _121.QuerySpendableBalancesRequest;
                toAminoMsg(message: _121.QuerySpendableBalancesRequest): _121.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _121.QuerySpendableBalancesRequestProtoMsg): _121.QuerySpendableBalancesRequest;
                toProto(message: _121.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _121.QuerySpendableBalancesRequest): _121.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _121.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_121.QuerySpendableBalancesResponse>): _121.QuerySpendableBalancesResponse;
                fromAmino(object: _121.QuerySpendableBalancesResponseAmino): _121.QuerySpendableBalancesResponse;
                toAmino(message: _121.QuerySpendableBalancesResponse): _121.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _121.QuerySpendableBalancesResponseAminoMsg): _121.QuerySpendableBalancesResponse;
                toAminoMsg(message: _121.QuerySpendableBalancesResponse): _121.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _121.QuerySpendableBalancesResponseProtoMsg): _121.QuerySpendableBalancesResponse;
                toProto(message: _121.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _121.QuerySpendableBalancesResponse): _121.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _121.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_121.QueryTotalSupplyRequest>): _121.QueryTotalSupplyRequest;
                fromAmino(object: _121.QueryTotalSupplyRequestAmino): _121.QueryTotalSupplyRequest;
                toAmino(message: _121.QueryTotalSupplyRequest): _121.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _121.QueryTotalSupplyRequestAminoMsg): _121.QueryTotalSupplyRequest;
                toAminoMsg(message: _121.QueryTotalSupplyRequest): _121.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _121.QueryTotalSupplyRequestProtoMsg): _121.QueryTotalSupplyRequest;
                toProto(message: _121.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _121.QueryTotalSupplyRequest): _121.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _121.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_121.QueryTotalSupplyResponse>): _121.QueryTotalSupplyResponse;
                fromAmino(object: _121.QueryTotalSupplyResponseAmino): _121.QueryTotalSupplyResponse;
                toAmino(message: _121.QueryTotalSupplyResponse): _121.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _121.QueryTotalSupplyResponseAminoMsg): _121.QueryTotalSupplyResponse;
                toAminoMsg(message: _121.QueryTotalSupplyResponse): _121.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _121.QueryTotalSupplyResponseProtoMsg): _121.QueryTotalSupplyResponse;
                toProto(message: _121.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _121.QueryTotalSupplyResponse): _121.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _121.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QuerySupplyOfRequest;
                fromPartial(object: Partial<_121.QuerySupplyOfRequest>): _121.QuerySupplyOfRequest;
                fromAmino(object: _121.QuerySupplyOfRequestAmino): _121.QuerySupplyOfRequest;
                toAmino(message: _121.QuerySupplyOfRequest): _121.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _121.QuerySupplyOfRequestAminoMsg): _121.QuerySupplyOfRequest;
                toAminoMsg(message: _121.QuerySupplyOfRequest): _121.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _121.QuerySupplyOfRequestProtoMsg): _121.QuerySupplyOfRequest;
                toProto(message: _121.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _121.QuerySupplyOfRequest): _121.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _121.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QuerySupplyOfResponse;
                fromPartial(object: Partial<_121.QuerySupplyOfResponse>): _121.QuerySupplyOfResponse;
                fromAmino(object: _121.QuerySupplyOfResponseAmino): _121.QuerySupplyOfResponse;
                toAmino(message: _121.QuerySupplyOfResponse): _121.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _121.QuerySupplyOfResponseAminoMsg): _121.QuerySupplyOfResponse;
                toAminoMsg(message: _121.QuerySupplyOfResponse): _121.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _121.QuerySupplyOfResponseProtoMsg): _121.QuerySupplyOfResponse;
                toProto(message: _121.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _121.QuerySupplyOfResponse): _121.QuerySupplyOfResponseProtoMsg;
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
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _121.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_121.QueryDenomsMetadataRequest>): _121.QueryDenomsMetadataRequest;
                fromAmino(object: _121.QueryDenomsMetadataRequestAmino): _121.QueryDenomsMetadataRequest;
                toAmino(message: _121.QueryDenomsMetadataRequest): _121.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _121.QueryDenomsMetadataRequestAminoMsg): _121.QueryDenomsMetadataRequest;
                toAminoMsg(message: _121.QueryDenomsMetadataRequest): _121.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _121.QueryDenomsMetadataRequestProtoMsg): _121.QueryDenomsMetadataRequest;
                toProto(message: _121.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _121.QueryDenomsMetadataRequest): _121.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _121.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_121.QueryDenomsMetadataResponse>): _121.QueryDenomsMetadataResponse;
                fromAmino(object: _121.QueryDenomsMetadataResponseAmino): _121.QueryDenomsMetadataResponse;
                toAmino(message: _121.QueryDenomsMetadataResponse): _121.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _121.QueryDenomsMetadataResponseAminoMsg): _121.QueryDenomsMetadataResponse;
                toAminoMsg(message: _121.QueryDenomsMetadataResponse): _121.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _121.QueryDenomsMetadataResponseProtoMsg): _121.QueryDenomsMetadataResponse;
                toProto(message: _121.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _121.QueryDenomsMetadataResponse): _121.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _121.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_121.QueryDenomMetadataRequest>): _121.QueryDenomMetadataRequest;
                fromAmino(object: _121.QueryDenomMetadataRequestAmino): _121.QueryDenomMetadataRequest;
                toAmino(message: _121.QueryDenomMetadataRequest): _121.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _121.QueryDenomMetadataRequestAminoMsg): _121.QueryDenomMetadataRequest;
                toAminoMsg(message: _121.QueryDenomMetadataRequest): _121.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _121.QueryDenomMetadataRequestProtoMsg): _121.QueryDenomMetadataRequest;
                toProto(message: _121.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _121.QueryDenomMetadataRequest): _121.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _121.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_121.QueryDenomMetadataResponse>): _121.QueryDenomMetadataResponse;
                fromAmino(object: _121.QueryDenomMetadataResponseAmino): _121.QueryDenomMetadataResponse;
                toAmino(message: _121.QueryDenomMetadataResponse): _121.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _121.QueryDenomMetadataResponseAminoMsg): _121.QueryDenomMetadataResponse;
                toAminoMsg(message: _121.QueryDenomMetadataResponse): _121.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _121.QueryDenomMetadataResponseProtoMsg): _121.QueryDenomMetadataResponse;
                toProto(message: _121.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _121.QueryDenomMetadataResponse): _121.QueryDenomMetadataResponseProtoMsg;
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
            Balance: {
                typeUrl: string;
                encode(message: _120.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.Balance;
                fromPartial(object: Partial<_120.Balance>): _120.Balance;
                fromAmino(object: _120.BalanceAmino): _120.Balance;
                toAmino(message: _120.Balance): _120.BalanceAmino;
                fromAminoMsg(object: _120.BalanceAminoMsg): _120.Balance;
                toAminoMsg(message: _120.Balance): _120.BalanceAminoMsg;
                fromProtoMsg(message: _120.BalanceProtoMsg): _120.Balance;
                toProto(message: _120.Balance): Uint8Array;
                toProtoMsg(message: _120.Balance): _120.BalanceProtoMsg;
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
            SendEnabled: {
                typeUrl: string;
                encode(message: _119.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.SendEnabled;
                fromPartial(object: Partial<_119.SendEnabled>): _119.SendEnabled;
                fromAmino(object: _119.SendEnabledAmino): _119.SendEnabled;
                toAmino(message: _119.SendEnabled): _119.SendEnabledAmino;
                fromAminoMsg(object: _119.SendEnabledAminoMsg): _119.SendEnabled;
                toAminoMsg(message: _119.SendEnabled): _119.SendEnabledAminoMsg;
                fromProtoMsg(message: _119.SendEnabledProtoMsg): _119.SendEnabled;
                toProto(message: _119.SendEnabled): Uint8Array;
                toProtoMsg(message: _119.SendEnabled): _119.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _119.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.Input;
                fromPartial(object: Partial<_119.Input>): _119.Input;
                fromAmino(object: _119.InputAmino): _119.Input;
                toAmino(message: _119.Input): _119.InputAmino;
                fromAminoMsg(object: _119.InputAminoMsg): _119.Input;
                toAminoMsg(message: _119.Input): _119.InputAminoMsg;
                fromProtoMsg(message: _119.InputProtoMsg): _119.Input;
                toProto(message: _119.Input): Uint8Array;
                toProtoMsg(message: _119.Input): _119.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _119.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.Output;
                fromPartial(object: Partial<_119.Output>): _119.Output;
                fromAmino(object: _119.OutputAmino): _119.Output;
                toAmino(message: _119.Output): _119.OutputAmino;
                fromAminoMsg(object: _119.OutputAminoMsg): _119.Output;
                toAminoMsg(message: _119.Output): _119.OutputAminoMsg;
                fromProtoMsg(message: _119.OutputProtoMsg): _119.Output;
                toProto(message: _119.Output): Uint8Array;
                toProtoMsg(message: _119.Output): _119.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _119.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.Supply;
                fromPartial(object: Partial<_119.Supply>): _119.Supply;
                fromAmino(object: _119.SupplyAmino): _119.Supply;
                toAmino(message: _119.Supply): _119.SupplyAmino;
                fromAminoMsg(object: _119.SupplyAminoMsg): _119.Supply;
                toAminoMsg(message: _119.Supply): _119.SupplyAminoMsg;
                fromProtoMsg(message: _119.SupplyProtoMsg): _119.Supply;
                toProto(message: _119.Supply): Uint8Array;
                toProtoMsg(message: _119.Supply): _119.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _119.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.DenomUnit;
                fromPartial(object: Partial<_119.DenomUnit>): _119.DenomUnit;
                fromAmino(object: _119.DenomUnitAmino): _119.DenomUnit;
                toAmino(message: _119.DenomUnit): _119.DenomUnitAmino;
                fromAminoMsg(object: _119.DenomUnitAminoMsg): _119.DenomUnit;
                toAminoMsg(message: _119.DenomUnit): _119.DenomUnitAminoMsg;
                fromProtoMsg(message: _119.DenomUnitProtoMsg): _119.DenomUnit;
                toProto(message: _119.DenomUnit): Uint8Array;
                toProtoMsg(message: _119.DenomUnit): _119.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _119.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.Metadata;
                fromPartial(object: Partial<_119.Metadata>): _119.Metadata;
                fromAmino(object: _119.MetadataAmino): _119.Metadata;
                toAmino(message: _119.Metadata): _119.MetadataAmino;
                fromAminoMsg(object: _119.MetadataAminoMsg): _119.Metadata;
                toAminoMsg(message: _119.Metadata): _119.MetadataAminoMsg;
                fromProtoMsg(message: _119.MetadataProtoMsg): _119.Metadata;
                toProto(message: _119.Metadata): Uint8Array;
                toProtoMsg(message: _119.Metadata): _119.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _118.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.SendAuthorization;
                fromPartial(object: Partial<_118.SendAuthorization>): _118.SendAuthorization;
                fromAmino(object: _118.SendAuthorizationAmino): _118.SendAuthorization;
                toAmino(message: _118.SendAuthorization): _118.SendAuthorizationAmino;
                fromAminoMsg(object: _118.SendAuthorizationAminoMsg): _118.SendAuthorization;
                toAminoMsg(message: _118.SendAuthorization): _118.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _118.SendAuthorizationProtoMsg): _118.SendAuthorization;
                toProto(message: _118.SendAuthorization): Uint8Array;
                toProtoMsg(message: _118.SendAuthorization): _118.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _123.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.TxResponse;
                    fromPartial(object: Partial<_123.TxResponse>): _123.TxResponse;
                    fromAmino(object: _123.TxResponseAmino): _123.TxResponse;
                    toAmino(message: _123.TxResponse): _123.TxResponseAmino;
                    fromAminoMsg(object: _123.TxResponseAminoMsg): _123.TxResponse;
                    toAminoMsg(message: _123.TxResponse): _123.TxResponseAminoMsg;
                    fromProtoMsg(message: _123.TxResponseProtoMsg): _123.TxResponse;
                    toProto(message: _123.TxResponse): Uint8Array;
                    toProtoMsg(message: _123.TxResponse): _123.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _123.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.ABCIMessageLog;
                    fromPartial(object: Partial<_123.ABCIMessageLog>): _123.ABCIMessageLog;
                    fromAmino(object: _123.ABCIMessageLogAmino): _123.ABCIMessageLog;
                    toAmino(message: _123.ABCIMessageLog): _123.ABCIMessageLogAmino;
                    fromAminoMsg(object: _123.ABCIMessageLogAminoMsg): _123.ABCIMessageLog;
                    toAminoMsg(message: _123.ABCIMessageLog): _123.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _123.ABCIMessageLogProtoMsg): _123.ABCIMessageLog;
                    toProto(message: _123.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _123.ABCIMessageLog): _123.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _123.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.StringEvent;
                    fromPartial(object: Partial<_123.StringEvent>): _123.StringEvent;
                    fromAmino(object: _123.StringEventAmino): _123.StringEvent;
                    toAmino(message: _123.StringEvent): _123.StringEventAmino;
                    fromAminoMsg(object: _123.StringEventAminoMsg): _123.StringEvent;
                    toAminoMsg(message: _123.StringEvent): _123.StringEventAminoMsg;
                    fromProtoMsg(message: _123.StringEventProtoMsg): _123.StringEvent;
                    toProto(message: _123.StringEvent): Uint8Array;
                    toProtoMsg(message: _123.StringEvent): _123.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _123.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.Attribute;
                    fromPartial(object: Partial<_123.Attribute>): _123.Attribute;
                    fromAmino(object: _123.AttributeAmino): _123.Attribute;
                    toAmino(message: _123.Attribute): _123.AttributeAmino;
                    fromAminoMsg(object: _123.AttributeAminoMsg): _123.Attribute;
                    toAminoMsg(message: _123.Attribute): _123.AttributeAminoMsg;
                    fromProtoMsg(message: _123.AttributeProtoMsg): _123.Attribute;
                    toProto(message: _123.Attribute): Uint8Array;
                    toProtoMsg(message: _123.Attribute): _123.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _123.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.GasInfo;
                    fromPartial(object: Partial<_123.GasInfo>): _123.GasInfo;
                    fromAmino(object: _123.GasInfoAmino): _123.GasInfo;
                    toAmino(message: _123.GasInfo): _123.GasInfoAmino;
                    fromAminoMsg(object: _123.GasInfoAminoMsg): _123.GasInfo;
                    toAminoMsg(message: _123.GasInfo): _123.GasInfoAminoMsg;
                    fromProtoMsg(message: _123.GasInfoProtoMsg): _123.GasInfo;
                    toProto(message: _123.GasInfo): Uint8Array;
                    toProtoMsg(message: _123.GasInfo): _123.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _123.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.Result;
                    fromPartial(object: Partial<_123.Result>): _123.Result;
                    fromAmino(object: _123.ResultAmino): _123.Result;
                    toAmino(message: _123.Result): _123.ResultAmino;
                    fromAminoMsg(object: _123.ResultAminoMsg): _123.Result;
                    toAminoMsg(message: _123.Result): _123.ResultAminoMsg;
                    fromProtoMsg(message: _123.ResultProtoMsg): _123.Result;
                    toProto(message: _123.Result): Uint8Array;
                    toProtoMsg(message: _123.Result): _123.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _123.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.SimulationResponse;
                    fromPartial(object: Partial<_123.SimulationResponse>): _123.SimulationResponse;
                    fromAmino(object: _123.SimulationResponseAmino): _123.SimulationResponse;
                    toAmino(message: _123.SimulationResponse): _123.SimulationResponseAmino;
                    fromAminoMsg(object: _123.SimulationResponseAminoMsg): _123.SimulationResponse;
                    toAminoMsg(message: _123.SimulationResponse): _123.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _123.SimulationResponseProtoMsg): _123.SimulationResponse;
                    toProto(message: _123.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _123.SimulationResponse): _123.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _123.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.MsgData;
                    fromPartial(object: Partial<_123.MsgData>): _123.MsgData;
                    fromAmino(object: _123.MsgDataAmino): _123.MsgData;
                    toAmino(message: _123.MsgData): _123.MsgDataAmino;
                    fromAminoMsg(object: _123.MsgDataAminoMsg): _123.MsgData;
                    toAminoMsg(message: _123.MsgData): _123.MsgDataAminoMsg;
                    fromProtoMsg(message: _123.MsgDataProtoMsg): _123.MsgData;
                    toProto(message: _123.MsgData): Uint8Array;
                    toProtoMsg(message: _123.MsgData): _123.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _123.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.TxMsgData;
                    fromPartial(object: Partial<_123.TxMsgData>): _123.TxMsgData;
                    fromAmino(object: _123.TxMsgDataAmino): _123.TxMsgData;
                    toAmino(message: _123.TxMsgData): _123.TxMsgDataAmino;
                    fromAminoMsg(object: _123.TxMsgDataAminoMsg): _123.TxMsgData;
                    toAminoMsg(message: _123.TxMsgData): _123.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _123.TxMsgDataProtoMsg): _123.TxMsgData;
                    toProto(message: _123.TxMsgData): Uint8Array;
                    toProtoMsg(message: _123.TxMsgData): _123.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _123.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.SearchTxsResult;
                    fromPartial(object: Partial<_123.SearchTxsResult>): _123.SearchTxsResult;
                    fromAmino(object: _123.SearchTxsResultAmino): _123.SearchTxsResult;
                    toAmino(message: _123.SearchTxsResult): _123.SearchTxsResultAmino;
                    fromAminoMsg(object: _123.SearchTxsResultAminoMsg): _123.SearchTxsResult;
                    toAminoMsg(message: _123.SearchTxsResult): _123.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _123.SearchTxsResultProtoMsg): _123.SearchTxsResult;
                    toProto(message: _123.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _123.SearchTxsResult): _123.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _124.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _124.Pairs;
                    fromPartial(object: Partial<_124.Pairs>): _124.Pairs;
                    fromAmino(object: _124.PairsAmino): _124.Pairs;
                    toAmino(message: _124.Pairs): _124.PairsAmino;
                    fromAminoMsg(object: _124.PairsAminoMsg): _124.Pairs;
                    toAminoMsg(message: _124.Pairs): _124.PairsAminoMsg;
                    fromProtoMsg(message: _124.PairsProtoMsg): _124.Pairs;
                    toProto(message: _124.Pairs): Uint8Array;
                    toProtoMsg(message: _124.Pairs): _124.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _124.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _124.Pair;
                    fromPartial(object: Partial<_124.Pair>): _124.Pair;
                    fromAmino(object: _124.PairAmino): _124.Pair;
                    toAmino(message: _124.Pair): _124.PairAmino;
                    fromAminoMsg(object: _124.PairAminoMsg): _124.Pair;
                    toAminoMsg(message: _124.Pair): _124.PairAminoMsg;
                    fromProtoMsg(message: _124.PairProtoMsg): _124.Pair;
                    toProto(message: _124.Pair): Uint8Array;
                    toProtoMsg(message: _124.Pair): _124.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _323.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _125.ConfigRequest): Promise<_125.ConfigResponse>;
                };
                LCDQueryClient: typeof _308.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _125.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _125.ConfigRequest;
                    fromPartial(_: Partial<_125.ConfigRequest>): _125.ConfigRequest;
                    fromAmino(_: _125.ConfigRequestAmino): _125.ConfigRequest;
                    toAmino(_: _125.ConfigRequest): _125.ConfigRequestAmino;
                    fromAminoMsg(object: _125.ConfigRequestAminoMsg): _125.ConfigRequest;
                    toAminoMsg(message: _125.ConfigRequest): _125.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _125.ConfigRequestProtoMsg): _125.ConfigRequest;
                    toProto(message: _125.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _125.ConfigRequest): _125.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _125.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.ConfigResponse;
                    fromPartial(object: Partial<_125.ConfigResponse>): _125.ConfigResponse;
                    fromAmino(object: _125.ConfigResponseAmino): _125.ConfigResponse;
                    toAmino(message: _125.ConfigResponse): _125.ConfigResponseAmino;
                    fromAminoMsg(object: _125.ConfigResponseAminoMsg): _125.ConfigResponse;
                    toAminoMsg(message: _125.ConfigResponse): _125.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _125.ConfigResponseProtoMsg): _125.ConfigResponse;
                    toProto(message: _125.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _125.ConfigResponse): _125.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _126.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _126.PageRequest;
                    fromPartial(object: Partial<_126.PageRequest>): _126.PageRequest;
                    fromAmino(object: _126.PageRequestAmino): _126.PageRequest;
                    toAmino(message: _126.PageRequest): _126.PageRequestAmino;
                    fromAminoMsg(object: _126.PageRequestAminoMsg): _126.PageRequest;
                    toAminoMsg(message: _126.PageRequest): _126.PageRequestAminoMsg;
                    fromProtoMsg(message: _126.PageRequestProtoMsg): _126.PageRequest;
                    toProto(message: _126.PageRequest): Uint8Array;
                    toProtoMsg(message: _126.PageRequest): _126.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _126.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _126.PageResponse;
                    fromPartial(object: Partial<_126.PageResponse>): _126.PageResponse;
                    fromAmino(object: _126.PageResponseAmino): _126.PageResponse;
                    toAmino(message: _126.PageResponse): _126.PageResponseAmino;
                    fromAminoMsg(object: _126.PageResponseAminoMsg): _126.PageResponse;
                    toAminoMsg(message: _126.PageResponse): _126.PageResponseAminoMsg;
                    fromProtoMsg(message: _126.PageResponseProtoMsg): _126.PageResponse;
                    toProto(message: _126.PageResponse): Uint8Array;
                    toProtoMsg(message: _126.PageResponse): _126.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _127.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _127.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_127.ListAllInterfacesRequest>): _127.ListAllInterfacesRequest;
                    fromAmino(_: _127.ListAllInterfacesRequestAmino): _127.ListAllInterfacesRequest;
                    toAmino(_: _127.ListAllInterfacesRequest): _127.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _127.ListAllInterfacesRequestAminoMsg): _127.ListAllInterfacesRequest;
                    toAminoMsg(message: _127.ListAllInterfacesRequest): _127.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _127.ListAllInterfacesRequestProtoMsg): _127.ListAllInterfacesRequest;
                    toProto(message: _127.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _127.ListAllInterfacesRequest): _127.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _127.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _127.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_127.ListAllInterfacesResponse>): _127.ListAllInterfacesResponse;
                    fromAmino(object: _127.ListAllInterfacesResponseAmino): _127.ListAllInterfacesResponse;
                    toAmino(message: _127.ListAllInterfacesResponse): _127.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _127.ListAllInterfacesResponseAminoMsg): _127.ListAllInterfacesResponse;
                    toAminoMsg(message: _127.ListAllInterfacesResponse): _127.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _127.ListAllInterfacesResponseProtoMsg): _127.ListAllInterfacesResponse;
                    toProto(message: _127.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _127.ListAllInterfacesResponse): _127.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _127.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _127.ListImplementationsRequest;
                    fromPartial(object: Partial<_127.ListImplementationsRequest>): _127.ListImplementationsRequest;
                    fromAmino(object: _127.ListImplementationsRequestAmino): _127.ListImplementationsRequest;
                    toAmino(message: _127.ListImplementationsRequest): _127.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _127.ListImplementationsRequestAminoMsg): _127.ListImplementationsRequest;
                    toAminoMsg(message: _127.ListImplementationsRequest): _127.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _127.ListImplementationsRequestProtoMsg): _127.ListImplementationsRequest;
                    toProto(message: _127.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _127.ListImplementationsRequest): _127.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _127.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _127.ListImplementationsResponse;
                    fromPartial(object: Partial<_127.ListImplementationsResponse>): _127.ListImplementationsResponse;
                    fromAmino(object: _127.ListImplementationsResponseAmino): _127.ListImplementationsResponse;
                    toAmino(message: _127.ListImplementationsResponse): _127.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _127.ListImplementationsResponseAminoMsg): _127.ListImplementationsResponse;
                    toAminoMsg(message: _127.ListImplementationsResponse): _127.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _127.ListImplementationsResponseProtoMsg): _127.ListImplementationsResponse;
                    toProto(message: _127.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _127.ListImplementationsResponse): _127.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _128.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _128.AppDescriptor;
                    fromPartial(object: Partial<_128.AppDescriptor>): _128.AppDescriptor;
                    fromAmino(object: _128.AppDescriptorAmino): _128.AppDescriptor;
                    toAmino(message: _128.AppDescriptor): _128.AppDescriptorAmino;
                    fromAminoMsg(object: _128.AppDescriptorAminoMsg): _128.AppDescriptor;
                    toAminoMsg(message: _128.AppDescriptor): _128.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _128.AppDescriptorProtoMsg): _128.AppDescriptor;
                    toProto(message: _128.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _128.AppDescriptor): _128.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _128.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _128.TxDescriptor;
                    fromPartial(object: Partial<_128.TxDescriptor>): _128.TxDescriptor;
                    fromAmino(object: _128.TxDescriptorAmino): _128.TxDescriptor;
                    toAmino(message: _128.TxDescriptor): _128.TxDescriptorAmino;
                    fromAminoMsg(object: _128.TxDescriptorAminoMsg): _128.TxDescriptor;
                    toAminoMsg(message: _128.TxDescriptor): _128.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _128.TxDescriptorProtoMsg): _128.TxDescriptor;
                    toProto(message: _128.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _128.TxDescriptor): _128.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _128.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _128.AuthnDescriptor;
                    fromPartial(object: Partial<_128.AuthnDescriptor>): _128.AuthnDescriptor;
                    fromAmino(object: _128.AuthnDescriptorAmino): _128.AuthnDescriptor;
                    toAmino(message: _128.AuthnDescriptor): _128.AuthnDescriptorAmino;
                    fromAminoMsg(object: _128.AuthnDescriptorAminoMsg): _128.AuthnDescriptor;
                    toAminoMsg(message: _128.AuthnDescriptor): _128.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _128.AuthnDescriptorProtoMsg): _128.AuthnDescriptor;
                    toProto(message: _128.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _128.AuthnDescriptor): _128.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _128.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _128.SigningModeDescriptor;
                    fromPartial(object: Partial<_128.SigningModeDescriptor>): _128.SigningModeDescriptor;
                    fromAmino(object: _128.SigningModeDescriptorAmino): _128.SigningModeDescriptor;
                    toAmino(message: _128.SigningModeDescriptor): _128.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _128.SigningModeDescriptorAminoMsg): _128.SigningModeDescriptor;
                    toAminoMsg(message: _128.SigningModeDescriptor): _128.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _128.SigningModeDescriptorProtoMsg): _128.SigningModeDescriptor;
                    toProto(message: _128.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _128.SigningModeDescriptor): _128.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _128.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _128.ChainDescriptor;
                    fromPartial(object: Partial<_128.ChainDescriptor>): _128.ChainDescriptor;
                    fromAmino(object: _128.ChainDescriptorAmino): _128.ChainDescriptor;
                    toAmino(message: _128.ChainDescriptor): _128.ChainDescriptorAmino;
                    fromAminoMsg(object: _128.ChainDescriptorAminoMsg): _128.ChainDescriptor;
                    toAminoMsg(message: _128.ChainDescriptor): _128.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _128.ChainDescriptorProtoMsg): _128.ChainDescriptor;
                    toProto(message: _128.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _128.ChainDescriptor): _128.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _128.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _128.CodecDescriptor;
                    fromPartial(object: Partial<_128.CodecDescriptor>): _128.CodecDescriptor;
                    fromAmino(object: _128.CodecDescriptorAmino): _128.CodecDescriptor;
                    toAmino(message: _128.CodecDescriptor): _128.CodecDescriptorAmino;
                    fromAminoMsg(object: _128.CodecDescriptorAminoMsg): _128.CodecDescriptor;
                    toAminoMsg(message: _128.CodecDescriptor): _128.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _128.CodecDescriptorProtoMsg): _128.CodecDescriptor;
                    toProto(message: _128.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _128.CodecDescriptor): _128.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _128.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _128.InterfaceDescriptor;
                    fromPartial(object: Partial<_128.InterfaceDescriptor>): _128.InterfaceDescriptor;
                    fromAmino(object: _128.InterfaceDescriptorAmino): _128.InterfaceDescriptor;
                    toAmino(message: _128.InterfaceDescriptor): _128.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _128.InterfaceDescriptorAminoMsg): _128.InterfaceDescriptor;
                    toAminoMsg(message: _128.InterfaceDescriptor): _128.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _128.InterfaceDescriptorProtoMsg): _128.InterfaceDescriptor;
                    toProto(message: _128.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _128.InterfaceDescriptor): _128.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _128.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _128.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_128.InterfaceImplementerDescriptor>): _128.InterfaceImplementerDescriptor;
                    fromAmino(object: _128.InterfaceImplementerDescriptorAmino): _128.InterfaceImplementerDescriptor;
                    toAmino(message: _128.InterfaceImplementerDescriptor): _128.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _128.InterfaceImplementerDescriptorAminoMsg): _128.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _128.InterfaceImplementerDescriptor): _128.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _128.InterfaceImplementerDescriptorProtoMsg): _128.InterfaceImplementerDescriptor;
                    toProto(message: _128.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _128.InterfaceImplementerDescriptor): _128.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _128.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _128.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_128.InterfaceAcceptingMessageDescriptor>): _128.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _128.InterfaceAcceptingMessageDescriptorAmino): _128.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _128.InterfaceAcceptingMessageDescriptor): _128.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _128.InterfaceAcceptingMessageDescriptorAminoMsg): _128.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _128.InterfaceAcceptingMessageDescriptor): _128.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _128.InterfaceAcceptingMessageDescriptorProtoMsg): _128.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _128.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _128.InterfaceAcceptingMessageDescriptor): _128.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _128.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _128.ConfigurationDescriptor;
                    fromPartial(object: Partial<_128.ConfigurationDescriptor>): _128.ConfigurationDescriptor;
                    fromAmino(object: _128.ConfigurationDescriptorAmino): _128.ConfigurationDescriptor;
                    toAmino(message: _128.ConfigurationDescriptor): _128.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _128.ConfigurationDescriptorAminoMsg): _128.ConfigurationDescriptor;
                    toAminoMsg(message: _128.ConfigurationDescriptor): _128.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _128.ConfigurationDescriptorProtoMsg): _128.ConfigurationDescriptor;
                    toProto(message: _128.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _128.ConfigurationDescriptor): _128.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _128.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _128.MsgDescriptor;
                    fromPartial(object: Partial<_128.MsgDescriptor>): _128.MsgDescriptor;
                    fromAmino(object: _128.MsgDescriptorAmino): _128.MsgDescriptor;
                    toAmino(message: _128.MsgDescriptor): _128.MsgDescriptorAmino;
                    fromAminoMsg(object: _128.MsgDescriptorAminoMsg): _128.MsgDescriptor;
                    toAminoMsg(message: _128.MsgDescriptor): _128.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _128.MsgDescriptorProtoMsg): _128.MsgDescriptor;
                    toProto(message: _128.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _128.MsgDescriptor): _128.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _128.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _128.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_128.GetAuthnDescriptorRequest>): _128.GetAuthnDescriptorRequest;
                    fromAmino(_: _128.GetAuthnDescriptorRequestAmino): _128.GetAuthnDescriptorRequest;
                    toAmino(_: _128.GetAuthnDescriptorRequest): _128.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _128.GetAuthnDescriptorRequestAminoMsg): _128.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _128.GetAuthnDescriptorRequest): _128.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _128.GetAuthnDescriptorRequestProtoMsg): _128.GetAuthnDescriptorRequest;
                    toProto(message: _128.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _128.GetAuthnDescriptorRequest): _128.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _128.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _128.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_128.GetAuthnDescriptorResponse>): _128.GetAuthnDescriptorResponse;
                    fromAmino(object: _128.GetAuthnDescriptorResponseAmino): _128.GetAuthnDescriptorResponse;
                    toAmino(message: _128.GetAuthnDescriptorResponse): _128.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _128.GetAuthnDescriptorResponseAminoMsg): _128.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _128.GetAuthnDescriptorResponse): _128.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _128.GetAuthnDescriptorResponseProtoMsg): _128.GetAuthnDescriptorResponse;
                    toProto(message: _128.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _128.GetAuthnDescriptorResponse): _128.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _128.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _128.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_128.GetChainDescriptorRequest>): _128.GetChainDescriptorRequest;
                    fromAmino(_: _128.GetChainDescriptorRequestAmino): _128.GetChainDescriptorRequest;
                    toAmino(_: _128.GetChainDescriptorRequest): _128.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _128.GetChainDescriptorRequestAminoMsg): _128.GetChainDescriptorRequest;
                    toAminoMsg(message: _128.GetChainDescriptorRequest): _128.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _128.GetChainDescriptorRequestProtoMsg): _128.GetChainDescriptorRequest;
                    toProto(message: _128.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _128.GetChainDescriptorRequest): _128.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _128.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _128.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_128.GetChainDescriptorResponse>): _128.GetChainDescriptorResponse;
                    fromAmino(object: _128.GetChainDescriptorResponseAmino): _128.GetChainDescriptorResponse;
                    toAmino(message: _128.GetChainDescriptorResponse): _128.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _128.GetChainDescriptorResponseAminoMsg): _128.GetChainDescriptorResponse;
                    toAminoMsg(message: _128.GetChainDescriptorResponse): _128.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _128.GetChainDescriptorResponseProtoMsg): _128.GetChainDescriptorResponse;
                    toProto(message: _128.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _128.GetChainDescriptorResponse): _128.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _128.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _128.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_128.GetCodecDescriptorRequest>): _128.GetCodecDescriptorRequest;
                    fromAmino(_: _128.GetCodecDescriptorRequestAmino): _128.GetCodecDescriptorRequest;
                    toAmino(_: _128.GetCodecDescriptorRequest): _128.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _128.GetCodecDescriptorRequestAminoMsg): _128.GetCodecDescriptorRequest;
                    toAminoMsg(message: _128.GetCodecDescriptorRequest): _128.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _128.GetCodecDescriptorRequestProtoMsg): _128.GetCodecDescriptorRequest;
                    toProto(message: _128.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _128.GetCodecDescriptorRequest): _128.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _128.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _128.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_128.GetCodecDescriptorResponse>): _128.GetCodecDescriptorResponse;
                    fromAmino(object: _128.GetCodecDescriptorResponseAmino): _128.GetCodecDescriptorResponse;
                    toAmino(message: _128.GetCodecDescriptorResponse): _128.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _128.GetCodecDescriptorResponseAminoMsg): _128.GetCodecDescriptorResponse;
                    toAminoMsg(message: _128.GetCodecDescriptorResponse): _128.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _128.GetCodecDescriptorResponseProtoMsg): _128.GetCodecDescriptorResponse;
                    toProto(message: _128.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _128.GetCodecDescriptorResponse): _128.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _128.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _128.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_128.GetConfigurationDescriptorRequest>): _128.GetConfigurationDescriptorRequest;
                    fromAmino(_: _128.GetConfigurationDescriptorRequestAmino): _128.GetConfigurationDescriptorRequest;
                    toAmino(_: _128.GetConfigurationDescriptorRequest): _128.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _128.GetConfigurationDescriptorRequestAminoMsg): _128.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _128.GetConfigurationDescriptorRequest): _128.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _128.GetConfigurationDescriptorRequestProtoMsg): _128.GetConfigurationDescriptorRequest;
                    toProto(message: _128.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _128.GetConfigurationDescriptorRequest): _128.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _128.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _128.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_128.GetConfigurationDescriptorResponse>): _128.GetConfigurationDescriptorResponse;
                    fromAmino(object: _128.GetConfigurationDescriptorResponseAmino): _128.GetConfigurationDescriptorResponse;
                    toAmino(message: _128.GetConfigurationDescriptorResponse): _128.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _128.GetConfigurationDescriptorResponseAminoMsg): _128.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _128.GetConfigurationDescriptorResponse): _128.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _128.GetConfigurationDescriptorResponseProtoMsg): _128.GetConfigurationDescriptorResponse;
                    toProto(message: _128.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _128.GetConfigurationDescriptorResponse): _128.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _128.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _128.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_128.GetQueryServicesDescriptorRequest>): _128.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _128.GetQueryServicesDescriptorRequestAmino): _128.GetQueryServicesDescriptorRequest;
                    toAmino(_: _128.GetQueryServicesDescriptorRequest): _128.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _128.GetQueryServicesDescriptorRequestAminoMsg): _128.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _128.GetQueryServicesDescriptorRequest): _128.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _128.GetQueryServicesDescriptorRequestProtoMsg): _128.GetQueryServicesDescriptorRequest;
                    toProto(message: _128.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _128.GetQueryServicesDescriptorRequest): _128.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _128.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _128.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_128.GetQueryServicesDescriptorResponse>): _128.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _128.GetQueryServicesDescriptorResponseAmino): _128.GetQueryServicesDescriptorResponse;
                    toAmino(message: _128.GetQueryServicesDescriptorResponse): _128.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _128.GetQueryServicesDescriptorResponseAminoMsg): _128.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _128.GetQueryServicesDescriptorResponse): _128.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _128.GetQueryServicesDescriptorResponseProtoMsg): _128.GetQueryServicesDescriptorResponse;
                    toProto(message: _128.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _128.GetQueryServicesDescriptorResponse): _128.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _128.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _128.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_128.GetTxDescriptorRequest>): _128.GetTxDescriptorRequest;
                    fromAmino(_: _128.GetTxDescriptorRequestAmino): _128.GetTxDescriptorRequest;
                    toAmino(_: _128.GetTxDescriptorRequest): _128.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _128.GetTxDescriptorRequestAminoMsg): _128.GetTxDescriptorRequest;
                    toAminoMsg(message: _128.GetTxDescriptorRequest): _128.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _128.GetTxDescriptorRequestProtoMsg): _128.GetTxDescriptorRequest;
                    toProto(message: _128.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _128.GetTxDescriptorRequest): _128.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _128.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _128.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_128.GetTxDescriptorResponse>): _128.GetTxDescriptorResponse;
                    fromAmino(object: _128.GetTxDescriptorResponseAmino): _128.GetTxDescriptorResponse;
                    toAmino(message: _128.GetTxDescriptorResponse): _128.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _128.GetTxDescriptorResponseAminoMsg): _128.GetTxDescriptorResponse;
                    toAminoMsg(message: _128.GetTxDescriptorResponse): _128.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _128.GetTxDescriptorResponseProtoMsg): _128.GetTxDescriptorResponse;
                    toProto(message: _128.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _128.GetTxDescriptorResponse): _128.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _128.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _128.QueryServicesDescriptor;
                    fromPartial(object: Partial<_128.QueryServicesDescriptor>): _128.QueryServicesDescriptor;
                    fromAmino(object: _128.QueryServicesDescriptorAmino): _128.QueryServicesDescriptor;
                    toAmino(message: _128.QueryServicesDescriptor): _128.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _128.QueryServicesDescriptorAminoMsg): _128.QueryServicesDescriptor;
                    toAminoMsg(message: _128.QueryServicesDescriptor): _128.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _128.QueryServicesDescriptorProtoMsg): _128.QueryServicesDescriptor;
                    toProto(message: _128.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _128.QueryServicesDescriptor): _128.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _128.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _128.QueryServiceDescriptor;
                    fromPartial(object: Partial<_128.QueryServiceDescriptor>): _128.QueryServiceDescriptor;
                    fromAmino(object: _128.QueryServiceDescriptorAmino): _128.QueryServiceDescriptor;
                    toAmino(message: _128.QueryServiceDescriptor): _128.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _128.QueryServiceDescriptorAminoMsg): _128.QueryServiceDescriptor;
                    toAminoMsg(message: _128.QueryServiceDescriptor): _128.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _128.QueryServiceDescriptorProtoMsg): _128.QueryServiceDescriptor;
                    toProto(message: _128.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _128.QueryServiceDescriptor): _128.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _128.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _128.QueryMethodDescriptor;
                    fromPartial(object: Partial<_128.QueryMethodDescriptor>): _128.QueryMethodDescriptor;
                    fromAmino(object: _128.QueryMethodDescriptorAmino): _128.QueryMethodDescriptor;
                    toAmino(message: _128.QueryMethodDescriptor): _128.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _128.QueryMethodDescriptorAminoMsg): _128.QueryMethodDescriptor;
                    toAminoMsg(message: _128.QueryMethodDescriptor): _128.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _128.QueryMethodDescriptorProtoMsg): _128.QueryMethodDescriptor;
                    toProto(message: _128.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _128.QueryMethodDescriptor): _128.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _129.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _129.Snapshot;
                    fromPartial(object: Partial<_129.Snapshot>): _129.Snapshot;
                    fromAmino(object: _129.SnapshotAmino): _129.Snapshot;
                    toAmino(message: _129.Snapshot): _129.SnapshotAmino;
                    fromAminoMsg(object: _129.SnapshotAminoMsg): _129.Snapshot;
                    toAminoMsg(message: _129.Snapshot): _129.SnapshotAminoMsg;
                    fromProtoMsg(message: _129.SnapshotProtoMsg): _129.Snapshot;
                    toProto(message: _129.Snapshot): Uint8Array;
                    toProtoMsg(message: _129.Snapshot): _129.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _129.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _129.Metadata;
                    fromPartial(object: Partial<_129.Metadata>): _129.Metadata;
                    fromAmino(object: _129.MetadataAmino): _129.Metadata;
                    toAmino(message: _129.Metadata): _129.MetadataAmino;
                    fromAminoMsg(object: _129.MetadataAminoMsg): _129.Metadata;
                    toAminoMsg(message: _129.Metadata): _129.MetadataAminoMsg;
                    fromProtoMsg(message: _129.MetadataProtoMsg): _129.Metadata;
                    toProto(message: _129.Metadata): Uint8Array;
                    toProtoMsg(message: _129.Metadata): _129.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _129.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _129.SnapshotItem;
                    fromPartial(object: Partial<_129.SnapshotItem>): _129.SnapshotItem;
                    fromAmino(object: _129.SnapshotItemAmino): _129.SnapshotItem;
                    toAmino(message: _129.SnapshotItem): _129.SnapshotItemAmino;
                    fromAminoMsg(object: _129.SnapshotItemAminoMsg): _129.SnapshotItem;
                    toAminoMsg(message: _129.SnapshotItem): _129.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _129.SnapshotItemProtoMsg): _129.SnapshotItem;
                    toProto(message: _129.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _129.SnapshotItem): _129.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _129.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _129.SnapshotStoreItem;
                    fromPartial(object: Partial<_129.SnapshotStoreItem>): _129.SnapshotStoreItem;
                    fromAmino(object: _129.SnapshotStoreItemAmino): _129.SnapshotStoreItem;
                    toAmino(message: _129.SnapshotStoreItem): _129.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _129.SnapshotStoreItemAminoMsg): _129.SnapshotStoreItem;
                    toAminoMsg(message: _129.SnapshotStoreItem): _129.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _129.SnapshotStoreItemProtoMsg): _129.SnapshotStoreItem;
                    toProto(message: _129.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _129.SnapshotStoreItem): _129.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _129.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _129.SnapshotIAVLItem;
                    fromPartial(object: Partial<_129.SnapshotIAVLItem>): _129.SnapshotIAVLItem;
                    fromAmino(object: _129.SnapshotIAVLItemAmino): _129.SnapshotIAVLItem;
                    toAmino(message: _129.SnapshotIAVLItem): _129.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _129.SnapshotIAVLItemAminoMsg): _129.SnapshotIAVLItem;
                    toAminoMsg(message: _129.SnapshotIAVLItem): _129.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _129.SnapshotIAVLItemProtoMsg): _129.SnapshotIAVLItem;
                    toProto(message: _129.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _129.SnapshotIAVLItem): _129.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _129.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _129.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_129.SnapshotExtensionMeta>): _129.SnapshotExtensionMeta;
                    fromAmino(object: _129.SnapshotExtensionMetaAmino): _129.SnapshotExtensionMeta;
                    toAmino(message: _129.SnapshotExtensionMeta): _129.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _129.SnapshotExtensionMetaAminoMsg): _129.SnapshotExtensionMeta;
                    toAminoMsg(message: _129.SnapshotExtensionMeta): _129.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _129.SnapshotExtensionMetaProtoMsg): _129.SnapshotExtensionMeta;
                    toProto(message: _129.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _129.SnapshotExtensionMeta): _129.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _129.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _129.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_129.SnapshotExtensionPayload>): _129.SnapshotExtensionPayload;
                    fromAmino(object: _129.SnapshotExtensionPayloadAmino): _129.SnapshotExtensionPayload;
                    toAmino(message: _129.SnapshotExtensionPayload): _129.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _129.SnapshotExtensionPayloadAminoMsg): _129.SnapshotExtensionPayload;
                    toAminoMsg(message: _129.SnapshotExtensionPayload): _129.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _129.SnapshotExtensionPayloadProtoMsg): _129.SnapshotExtensionPayload;
                    toProto(message: _129.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _129.SnapshotExtensionPayload): _129.SnapshotExtensionPayloadProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _131.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.StoreKVPair;
                    fromPartial(object: Partial<_131.StoreKVPair>): _131.StoreKVPair;
                    fromAmino(object: _131.StoreKVPairAmino): _131.StoreKVPair;
                    toAmino(message: _131.StoreKVPair): _131.StoreKVPairAmino;
                    fromAminoMsg(object: _131.StoreKVPairAminoMsg): _131.StoreKVPair;
                    toAminoMsg(message: _131.StoreKVPair): _131.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _131.StoreKVPairProtoMsg): _131.StoreKVPair;
                    toProto(message: _131.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _131.StoreKVPair): _131.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _131.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.BlockMetadata;
                    fromPartial(object: Partial<_131.BlockMetadata>): _131.BlockMetadata;
                    fromAmino(object: _131.BlockMetadataAmino): _131.BlockMetadata;
                    toAmino(message: _131.BlockMetadata): _131.BlockMetadataAmino;
                    fromAminoMsg(object: _131.BlockMetadataAminoMsg): _131.BlockMetadata;
                    toAminoMsg(message: _131.BlockMetadata): _131.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _131.BlockMetadataProtoMsg): _131.BlockMetadata;
                    toProto(message: _131.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _131.BlockMetadata): _131.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _131.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_131.BlockMetadata_DeliverTx>): _131.BlockMetadata_DeliverTx;
                    fromAmino(object: _131.BlockMetadata_DeliverTxAmino): _131.BlockMetadata_DeliverTx;
                    toAmino(message: _131.BlockMetadata_DeliverTx): _131.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _131.BlockMetadata_DeliverTxAminoMsg): _131.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _131.BlockMetadata_DeliverTx): _131.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _131.BlockMetadata_DeliverTxProtoMsg): _131.BlockMetadata_DeliverTx;
                    toProto(message: _131.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _131.BlockMetadata_DeliverTx): _131.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _130.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.CommitInfo;
                    fromPartial(object: Partial<_130.CommitInfo>): _130.CommitInfo;
                    fromAmino(object: _130.CommitInfoAmino): _130.CommitInfo;
                    toAmino(message: _130.CommitInfo): _130.CommitInfoAmino;
                    fromAminoMsg(object: _130.CommitInfoAminoMsg): _130.CommitInfo;
                    toAminoMsg(message: _130.CommitInfo): _130.CommitInfoAminoMsg;
                    fromProtoMsg(message: _130.CommitInfoProtoMsg): _130.CommitInfo;
                    toProto(message: _130.CommitInfo): Uint8Array;
                    toProtoMsg(message: _130.CommitInfo): _130.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _130.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.StoreInfo;
                    fromPartial(object: Partial<_130.StoreInfo>): _130.StoreInfo;
                    fromAmino(object: _130.StoreInfoAmino): _130.StoreInfo;
                    toAmino(message: _130.StoreInfo): _130.StoreInfoAmino;
                    fromAminoMsg(object: _130.StoreInfoAminoMsg): _130.StoreInfo;
                    toAminoMsg(message: _130.StoreInfo): _130.StoreInfoAminoMsg;
                    fromProtoMsg(message: _130.StoreInfoProtoMsg): _130.StoreInfo;
                    toProto(message: _130.StoreInfo): Uint8Array;
                    toProtoMsg(message: _130.StoreInfo): _130.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _130.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.CommitID;
                    fromPartial(object: Partial<_130.CommitID>): _130.CommitID;
                    fromAmino(object: _130.CommitIDAmino): _130.CommitID;
                    toAmino(message: _130.CommitID): _130.CommitIDAmino;
                    fromAminoMsg(object: _130.CommitIDAminoMsg): _130.CommitID;
                    toAminoMsg(message: _130.CommitID): _130.CommitIDAminoMsg;
                    fromProtoMsg(message: _130.CommitIDProtoMsg): _130.CommitID;
                    toProto(message: _130.CommitID): Uint8Array;
                    toProtoMsg(message: _130.CommitID): _130.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _324.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _132.GetNodeInfoRequest): Promise<_132.GetNodeInfoResponse>;
                    getSyncing(request?: _132.GetSyncingRequest): Promise<_132.GetSyncingResponse>;
                    getLatestBlock(request?: _132.GetLatestBlockRequest): Promise<_132.GetLatestBlockResponse>;
                    getBlockByHeight(request: _132.GetBlockByHeightRequest): Promise<_132.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _132.GetLatestValidatorSetRequest): Promise<_132.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _132.GetValidatorSetByHeightRequest): Promise<_132.GetValidatorSetByHeightResponse>;
                };
                LCDQueryClient: typeof _309.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _132.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _132.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_132.GetValidatorSetByHeightRequest>): _132.GetValidatorSetByHeightRequest;
                    fromAmino(object: _132.GetValidatorSetByHeightRequestAmino): _132.GetValidatorSetByHeightRequest;
                    toAmino(message: _132.GetValidatorSetByHeightRequest): _132.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _132.GetValidatorSetByHeightRequestAminoMsg): _132.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _132.GetValidatorSetByHeightRequest): _132.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _132.GetValidatorSetByHeightRequestProtoMsg): _132.GetValidatorSetByHeightRequest;
                    toProto(message: _132.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _132.GetValidatorSetByHeightRequest): _132.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _132.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _132.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_132.GetValidatorSetByHeightResponse>): _132.GetValidatorSetByHeightResponse;
                    fromAmino(object: _132.GetValidatorSetByHeightResponseAmino): _132.GetValidatorSetByHeightResponse;
                    toAmino(message: _132.GetValidatorSetByHeightResponse): _132.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _132.GetValidatorSetByHeightResponseAminoMsg): _132.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _132.GetValidatorSetByHeightResponse): _132.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _132.GetValidatorSetByHeightResponseProtoMsg): _132.GetValidatorSetByHeightResponse;
                    toProto(message: _132.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _132.GetValidatorSetByHeightResponse): _132.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _132.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _132.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_132.GetLatestValidatorSetRequest>): _132.GetLatestValidatorSetRequest;
                    fromAmino(object: _132.GetLatestValidatorSetRequestAmino): _132.GetLatestValidatorSetRequest;
                    toAmino(message: _132.GetLatestValidatorSetRequest): _132.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _132.GetLatestValidatorSetRequestAminoMsg): _132.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _132.GetLatestValidatorSetRequest): _132.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _132.GetLatestValidatorSetRequestProtoMsg): _132.GetLatestValidatorSetRequest;
                    toProto(message: _132.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _132.GetLatestValidatorSetRequest): _132.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _132.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _132.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_132.GetLatestValidatorSetResponse>): _132.GetLatestValidatorSetResponse;
                    fromAmino(object: _132.GetLatestValidatorSetResponseAmino): _132.GetLatestValidatorSetResponse;
                    toAmino(message: _132.GetLatestValidatorSetResponse): _132.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _132.GetLatestValidatorSetResponseAminoMsg): _132.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _132.GetLatestValidatorSetResponse): _132.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _132.GetLatestValidatorSetResponseProtoMsg): _132.GetLatestValidatorSetResponse;
                    toProto(message: _132.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _132.GetLatestValidatorSetResponse): _132.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _132.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _132.Validator;
                    fromPartial(object: Partial<_132.Validator>): _132.Validator;
                    fromAmino(object: _132.ValidatorAmino): _132.Validator;
                    toAmino(message: _132.Validator): _132.ValidatorAmino;
                    fromAminoMsg(object: _132.ValidatorAminoMsg): _132.Validator;
                    toAminoMsg(message: _132.Validator): _132.ValidatorAminoMsg;
                    fromProtoMsg(message: _132.ValidatorProtoMsg): _132.Validator;
                    toProto(message: _132.Validator): Uint8Array;
                    toProtoMsg(message: _132.Validator): _132.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _132.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _132.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_132.GetBlockByHeightRequest>): _132.GetBlockByHeightRequest;
                    fromAmino(object: _132.GetBlockByHeightRequestAmino): _132.GetBlockByHeightRequest;
                    toAmino(message: _132.GetBlockByHeightRequest): _132.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _132.GetBlockByHeightRequestAminoMsg): _132.GetBlockByHeightRequest;
                    toAminoMsg(message: _132.GetBlockByHeightRequest): _132.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _132.GetBlockByHeightRequestProtoMsg): _132.GetBlockByHeightRequest;
                    toProto(message: _132.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _132.GetBlockByHeightRequest): _132.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _132.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _132.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_132.GetBlockByHeightResponse>): _132.GetBlockByHeightResponse;
                    fromAmino(object: _132.GetBlockByHeightResponseAmino): _132.GetBlockByHeightResponse;
                    toAmino(message: _132.GetBlockByHeightResponse): _132.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _132.GetBlockByHeightResponseAminoMsg): _132.GetBlockByHeightResponse;
                    toAminoMsg(message: _132.GetBlockByHeightResponse): _132.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _132.GetBlockByHeightResponseProtoMsg): _132.GetBlockByHeightResponse;
                    toProto(message: _132.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _132.GetBlockByHeightResponse): _132.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _132.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _132.GetLatestBlockRequest;
                    fromPartial(_: Partial<_132.GetLatestBlockRequest>): _132.GetLatestBlockRequest;
                    fromAmino(_: _132.GetLatestBlockRequestAmino): _132.GetLatestBlockRequest;
                    toAmino(_: _132.GetLatestBlockRequest): _132.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _132.GetLatestBlockRequestAminoMsg): _132.GetLatestBlockRequest;
                    toAminoMsg(message: _132.GetLatestBlockRequest): _132.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _132.GetLatestBlockRequestProtoMsg): _132.GetLatestBlockRequest;
                    toProto(message: _132.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _132.GetLatestBlockRequest): _132.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _132.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _132.GetLatestBlockResponse;
                    fromPartial(object: Partial<_132.GetLatestBlockResponse>): _132.GetLatestBlockResponse;
                    fromAmino(object: _132.GetLatestBlockResponseAmino): _132.GetLatestBlockResponse;
                    toAmino(message: _132.GetLatestBlockResponse): _132.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _132.GetLatestBlockResponseAminoMsg): _132.GetLatestBlockResponse;
                    toAminoMsg(message: _132.GetLatestBlockResponse): _132.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _132.GetLatestBlockResponseProtoMsg): _132.GetLatestBlockResponse;
                    toProto(message: _132.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _132.GetLatestBlockResponse): _132.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _132.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _132.GetSyncingRequest;
                    fromPartial(_: Partial<_132.GetSyncingRequest>): _132.GetSyncingRequest;
                    fromAmino(_: _132.GetSyncingRequestAmino): _132.GetSyncingRequest;
                    toAmino(_: _132.GetSyncingRequest): _132.GetSyncingRequestAmino;
                    fromAminoMsg(object: _132.GetSyncingRequestAminoMsg): _132.GetSyncingRequest;
                    toAminoMsg(message: _132.GetSyncingRequest): _132.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _132.GetSyncingRequestProtoMsg): _132.GetSyncingRequest;
                    toProto(message: _132.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _132.GetSyncingRequest): _132.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _132.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _132.GetSyncingResponse;
                    fromPartial(object: Partial<_132.GetSyncingResponse>): _132.GetSyncingResponse;
                    fromAmino(object: _132.GetSyncingResponseAmino): _132.GetSyncingResponse;
                    toAmino(message: _132.GetSyncingResponse): _132.GetSyncingResponseAmino;
                    fromAminoMsg(object: _132.GetSyncingResponseAminoMsg): _132.GetSyncingResponse;
                    toAminoMsg(message: _132.GetSyncingResponse): _132.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _132.GetSyncingResponseProtoMsg): _132.GetSyncingResponse;
                    toProto(message: _132.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _132.GetSyncingResponse): _132.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _132.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _132.GetNodeInfoRequest;
                    fromPartial(_: Partial<_132.GetNodeInfoRequest>): _132.GetNodeInfoRequest;
                    fromAmino(_: _132.GetNodeInfoRequestAmino): _132.GetNodeInfoRequest;
                    toAmino(_: _132.GetNodeInfoRequest): _132.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _132.GetNodeInfoRequestAminoMsg): _132.GetNodeInfoRequest;
                    toAminoMsg(message: _132.GetNodeInfoRequest): _132.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _132.GetNodeInfoRequestProtoMsg): _132.GetNodeInfoRequest;
                    toProto(message: _132.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _132.GetNodeInfoRequest): _132.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _132.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _132.GetNodeInfoResponse;
                    fromPartial(object: Partial<_132.GetNodeInfoResponse>): _132.GetNodeInfoResponse;
                    fromAmino(object: _132.GetNodeInfoResponseAmino): _132.GetNodeInfoResponse;
                    toAmino(message: _132.GetNodeInfoResponse): _132.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _132.GetNodeInfoResponseAminoMsg): _132.GetNodeInfoResponse;
                    toAminoMsg(message: _132.GetNodeInfoResponse): _132.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _132.GetNodeInfoResponseProtoMsg): _132.GetNodeInfoResponse;
                    toProto(message: _132.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _132.GetNodeInfoResponse): _132.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _132.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _132.VersionInfo;
                    fromPartial(object: Partial<_132.VersionInfo>): _132.VersionInfo;
                    fromAmino(object: _132.VersionInfoAmino): _132.VersionInfo;
                    toAmino(message: _132.VersionInfo): _132.VersionInfoAmino;
                    fromAminoMsg(object: _132.VersionInfoAminoMsg): _132.VersionInfo;
                    toAminoMsg(message: _132.VersionInfo): _132.VersionInfoAminoMsg;
                    fromProtoMsg(message: _132.VersionInfoProtoMsg): _132.VersionInfo;
                    toProto(message: _132.VersionInfo): Uint8Array;
                    toProtoMsg(message: _132.VersionInfo): _132.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _132.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _132.Module;
                    fromPartial(object: Partial<_132.Module>): _132.Module;
                    fromAmino(object: _132.ModuleAmino): _132.Module;
                    toAmino(message: _132.Module): _132.ModuleAmino;
                    fromAminoMsg(object: _132.ModuleAminoMsg): _132.Module;
                    toAminoMsg(message: _132.Module): _132.ModuleAminoMsg;
                    fromProtoMsg(message: _132.ModuleProtoMsg): _132.Module;
                    toProto(message: _132.Module): Uint8Array;
                    toProtoMsg(message: _132.Module): _132.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _133.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.Coin;
                fromPartial(object: Partial<_133.Coin>): _133.Coin;
                fromAmino(object: _133.CoinAmino): _133.Coin;
                toAmino(message: _133.Coin): _133.CoinAmino;
                fromAminoMsg(object: _133.CoinAminoMsg): _133.Coin;
                toAminoMsg(message: _133.Coin): _133.CoinAminoMsg;
                fromProtoMsg(message: _133.CoinProtoMsg): _133.Coin;
                toProto(message: _133.Coin): Uint8Array;
                toProtoMsg(message: _133.Coin): _133.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _133.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.DecCoin;
                fromPartial(object: Partial<_133.DecCoin>): _133.DecCoin;
                fromAmino(object: _133.DecCoinAmino): _133.DecCoin;
                toAmino(message: _133.DecCoin): _133.DecCoinAmino;
                fromAminoMsg(object: _133.DecCoinAminoMsg): _133.DecCoin;
                toAminoMsg(message: _133.DecCoin): _133.DecCoinAminoMsg;
                fromProtoMsg(message: _133.DecCoinProtoMsg): _133.DecCoin;
                toProto(message: _133.DecCoin): Uint8Array;
                toProtoMsg(message: _133.DecCoin): _133.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _133.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.IntProto;
                fromPartial(object: Partial<_133.IntProto>): _133.IntProto;
                fromAmino(object: _133.IntProtoAmino): _133.IntProto;
                toAmino(message: _133.IntProto): _133.IntProtoAmino;
                fromAminoMsg(object: _133.IntProtoAminoMsg): _133.IntProto;
                toAminoMsg(message: _133.IntProto): _133.IntProtoAminoMsg;
                fromProtoMsg(message: _133.IntProtoProtoMsg): _133.IntProto;
                toProto(message: _133.IntProto): Uint8Array;
                toProtoMsg(message: _133.IntProto): _133.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _133.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.DecProto;
                fromPartial(object: Partial<_133.DecProto>): _133.DecProto;
                fromAmino(object: _133.DecProtoAmino): _133.DecProto;
                toAmino(message: _133.DecProto): _133.DecProtoAmino;
                fromAminoMsg(object: _133.DecProtoAminoMsg): _133.DecProto;
                toAminoMsg(message: _133.DecProto): _133.DecProtoAminoMsg;
                fromProtoMsg(message: _133.DecProtoProtoMsg): _133.DecProto;
                toProto(message: _133.DecProto): Uint8Array;
                toProtoMsg(message: _133.DecProto): _133.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _135.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.GenesisOwners;
                fromPartial(object: Partial<_135.GenesisOwners>): _135.GenesisOwners;
                fromAmino(object: _135.GenesisOwnersAmino): _135.GenesisOwners;
                toAmino(message: _135.GenesisOwners): _135.GenesisOwnersAmino;
                fromAminoMsg(object: _135.GenesisOwnersAminoMsg): _135.GenesisOwners;
                toAminoMsg(message: _135.GenesisOwners): _135.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _135.GenesisOwnersProtoMsg): _135.GenesisOwners;
                toProto(message: _135.GenesisOwners): Uint8Array;
                toProtoMsg(message: _135.GenesisOwners): _135.GenesisOwnersProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _135.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.GenesisState;
                fromPartial(object: Partial<_135.GenesisState>): _135.GenesisState;
                fromAmino(object: _135.GenesisStateAmino): _135.GenesisState;
                toAmino(message: _135.GenesisState): _135.GenesisStateAmino;
                fromAminoMsg(object: _135.GenesisStateAminoMsg): _135.GenesisState;
                toAminoMsg(message: _135.GenesisState): _135.GenesisStateAminoMsg;
                fromProtoMsg(message: _135.GenesisStateProtoMsg): _135.GenesisState;
                toProto(message: _135.GenesisState): Uint8Array;
                toProtoMsg(message: _135.GenesisState): _135.GenesisStateProtoMsg;
            };
            Capability: {
                typeUrl: string;
                encode(message: _134.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.Capability;
                fromPartial(object: Partial<_134.Capability>): _134.Capability;
                fromAmino(object: _134.CapabilityAmino): _134.Capability;
                toAmino(message: _134.Capability): _134.CapabilityAmino;
                fromAminoMsg(object: _134.CapabilityAminoMsg): _134.Capability;
                toAminoMsg(message: _134.Capability): _134.CapabilityAminoMsg;
                fromProtoMsg(message: _134.CapabilityProtoMsg): _134.Capability;
                toProto(message: _134.Capability): Uint8Array;
                toProtoMsg(message: _134.Capability): _134.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _134.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.Owner;
                fromPartial(object: Partial<_134.Owner>): _134.Owner;
                fromAmino(object: _134.OwnerAmino): _134.Owner;
                toAmino(message: _134.Owner): _134.OwnerAmino;
                fromAminoMsg(object: _134.OwnerAminoMsg): _134.Owner;
                toAminoMsg(message: _134.Owner): _134.OwnerAminoMsg;
                fromProtoMsg(message: _134.OwnerProtoMsg): _134.Owner;
                toProto(message: _134.Owner): Uint8Array;
                toProtoMsg(message: _134.Owner): _134.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _134.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.CapabilityOwners;
                fromPartial(object: Partial<_134.CapabilityOwners>): _134.CapabilityOwners;
                fromAmino(object: _134.CapabilityOwnersAmino): _134.CapabilityOwners;
                toAmino(message: _134.CapabilityOwners): _134.CapabilityOwnersAmino;
                fromAminoMsg(object: _134.CapabilityOwnersAminoMsg): _134.CapabilityOwners;
                toAminoMsg(message: _134.CapabilityOwners): _134.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _134.CapabilityOwnersProtoMsg): _134.CapabilityOwners;
                toProto(message: _134.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _134.CapabilityOwners): _134.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _337.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _137.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _137.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _137.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _137.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _137.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _137.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _137.MsgVerifyInvariant) => _137.MsgVerifyInvariantAmino;
                    fromAmino: (object: _137.MsgVerifyInvariantAmino) => _137.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _137.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.MsgVerifyInvariant;
                fromPartial(object: Partial<_137.MsgVerifyInvariant>): _137.MsgVerifyInvariant;
                fromAmino(object: _137.MsgVerifyInvariantAmino): _137.MsgVerifyInvariant;
                toAmino(message: _137.MsgVerifyInvariant): _137.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _137.MsgVerifyInvariantAminoMsg): _137.MsgVerifyInvariant;
                toAminoMsg(message: _137.MsgVerifyInvariant): _137.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _137.MsgVerifyInvariantProtoMsg): _137.MsgVerifyInvariant;
                toProto(message: _137.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _137.MsgVerifyInvariant): _137.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _137.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _137.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_137.MsgVerifyInvariantResponse>): _137.MsgVerifyInvariantResponse;
                fromAmino(_: _137.MsgVerifyInvariantResponseAmino): _137.MsgVerifyInvariantResponse;
                toAmino(_: _137.MsgVerifyInvariantResponse): _137.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _137.MsgVerifyInvariantResponseAminoMsg): _137.MsgVerifyInvariantResponse;
                toAminoMsg(message: _137.MsgVerifyInvariantResponse): _137.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _137.MsgVerifyInvariantResponseProtoMsg): _137.MsgVerifyInvariantResponse;
                toProto(message: _137.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _137.MsgVerifyInvariantResponse): _137.MsgVerifyInvariantResponseProtoMsg;
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
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _138.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.PubKey;
                fromPartial(object: Partial<_138.PubKey>): _138.PubKey;
                fromAmino(object: _138.PubKeyAmino): _138.PubKey;
                toAmino(message: _138.PubKey): _138.PubKeyAmino;
                fromAminoMsg(object: _138.PubKeyAminoMsg): _138.PubKey;
                toAminoMsg(message: _138.PubKey): _138.PubKeyAminoMsg;
                fromProtoMsg(message: _138.PubKeyProtoMsg): _138.PubKey;
                toProto(message: _138.PubKey): Uint8Array;
                toProtoMsg(message: _138.PubKey): _138.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _138.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.PrivKey;
                fromPartial(object: Partial<_138.PrivKey>): _138.PrivKey;
                fromAmino(object: _138.PrivKeyAmino): _138.PrivKey;
                toAmino(message: _138.PrivKey): _138.PrivKeyAmino;
                fromAminoMsg(object: _138.PrivKeyAminoMsg): _138.PrivKey;
                toAminoMsg(message: _138.PrivKey): _138.PrivKeyAminoMsg;
                fromProtoMsg(message: _138.PrivKeyProtoMsg): _138.PrivKey;
                toProto(message: _138.PrivKey): Uint8Array;
                toProtoMsg(message: _138.PrivKey): _138.PrivKeyProtoMsg;
            };
        };
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _139.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.LegacyAminoPubKey;
                fromPartial(object: Partial<_139.LegacyAminoPubKey>): _139.LegacyAminoPubKey;
                fromAmino(object: _139.LegacyAminoPubKeyAmino): _139.LegacyAminoPubKey;
                toAmino(message: _139.LegacyAminoPubKey): _139.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _139.LegacyAminoPubKeyAminoMsg): _139.LegacyAminoPubKey;
                toAminoMsg(message: _139.LegacyAminoPubKey): _139.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _139.LegacyAminoPubKeyProtoMsg): _139.LegacyAminoPubKey;
                toProto(message: _139.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _139.LegacyAminoPubKey): _139.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _140.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _140.PubKey;
                fromPartial(object: Partial<_140.PubKey>): _140.PubKey;
                fromAmino(object: _140.PubKeyAmino): _140.PubKey;
                toAmino(message: _140.PubKey): _140.PubKeyAmino;
                fromAminoMsg(object: _140.PubKeyAminoMsg): _140.PubKey;
                toAminoMsg(message: _140.PubKey): _140.PubKeyAminoMsg;
                fromProtoMsg(message: _140.PubKeyProtoMsg): _140.PubKey;
                toProto(message: _140.PubKey): Uint8Array;
                toProtoMsg(message: _140.PubKey): _140.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _140.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _140.PrivKey;
                fromPartial(object: Partial<_140.PrivKey>): _140.PrivKey;
                fromAmino(object: _140.PrivKeyAmino): _140.PrivKey;
                toAmino(message: _140.PrivKey): _140.PrivKeyAmino;
                fromAminoMsg(object: _140.PrivKeyAminoMsg): _140.PrivKey;
                toAminoMsg(message: _140.PrivKey): _140.PrivKeyAminoMsg;
                fromProtoMsg(message: _140.PrivKeyProtoMsg): _140.PrivKey;
                toProto(message: _140.PrivKey): Uint8Array;
                toProtoMsg(message: _140.PrivKey): _140.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _141.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.PubKey;
                fromPartial(object: Partial<_141.PubKey>): _141.PubKey;
                fromAmino(object: _141.PubKeyAmino): _141.PubKey;
                toAmino(message: _141.PubKey): _141.PubKeyAmino;
                fromAminoMsg(object: _141.PubKeyAminoMsg): _141.PubKey;
                toAminoMsg(message: _141.PubKey): _141.PubKeyAminoMsg;
                fromProtoMsg(message: _141.PubKeyProtoMsg): _141.PubKey;
                toProto(message: _141.PubKey): Uint8Array;
                toProtoMsg(message: _141.PubKey): _141.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _141.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.PrivKey;
                fromPartial(object: Partial<_141.PrivKey>): _141.PrivKey;
                fromAmino(object: _141.PrivKeyAmino): _141.PrivKey;
                toAmino(message: _141.PrivKey): _141.PrivKeyAmino;
                fromAminoMsg(object: _141.PrivKeyAminoMsg): _141.PrivKey;
                toAminoMsg(message: _141.PrivKey): _141.PrivKeyAminoMsg;
                fromProtoMsg(message: _141.PrivKeyProtoMsg): _141.PrivKey;
                toProto(message: _141.PrivKey): Uint8Array;
                toProtoMsg(message: _141.PrivKey): _141.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _338.MsgClientImpl;
            QueryClientImpl: typeof _325.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _144.QueryParamsRequest): Promise<_144.QueryParamsResponse>;
                validatorOutstandingRewards(request: _144.QueryValidatorOutstandingRewardsRequest): Promise<_144.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _144.QueryValidatorCommissionRequest): Promise<_144.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _144.QueryValidatorSlashesRequest): Promise<_144.QueryValidatorSlashesResponse>;
                delegationRewards(request: _144.QueryDelegationRewardsRequest): Promise<_144.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _144.QueryDelegationTotalRewardsRequest): Promise<_144.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _144.QueryDelegatorValidatorsRequest): Promise<_144.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _144.QueryDelegatorWithdrawAddressRequest): Promise<_144.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _144.QueryCommunityPoolRequest): Promise<_144.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _310.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _145.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _145.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _145.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _145.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _145.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _145.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _145.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _145.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _145.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _145.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _145.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _145.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _145.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _145.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _145.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _145.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _145.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _145.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _145.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _145.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _145.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _145.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _145.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _145.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _145.MsgSetWithdrawAddress) => _145.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _145.MsgSetWithdrawAddressAmino) => _145.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _145.MsgWithdrawDelegatorReward) => _145.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _145.MsgWithdrawDelegatorRewardAmino) => _145.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _145.MsgWithdrawValidatorCommission) => _145.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _145.MsgWithdrawValidatorCommissionAmino) => _145.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _145.MsgFundCommunityPool) => _145.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _145.MsgFundCommunityPoolAmino) => _145.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _145.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_145.MsgSetWithdrawAddress>): _145.MsgSetWithdrawAddress;
                fromAmino(object: _145.MsgSetWithdrawAddressAmino): _145.MsgSetWithdrawAddress;
                toAmino(message: _145.MsgSetWithdrawAddress): _145.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _145.MsgSetWithdrawAddressAminoMsg): _145.MsgSetWithdrawAddress;
                toAminoMsg(message: _145.MsgSetWithdrawAddress): _145.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _145.MsgSetWithdrawAddressProtoMsg): _145.MsgSetWithdrawAddress;
                toProto(message: _145.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _145.MsgSetWithdrawAddress): _145.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _145.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _145.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_145.MsgSetWithdrawAddressResponse>): _145.MsgSetWithdrawAddressResponse;
                fromAmino(_: _145.MsgSetWithdrawAddressResponseAmino): _145.MsgSetWithdrawAddressResponse;
                toAmino(_: _145.MsgSetWithdrawAddressResponse): _145.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _145.MsgSetWithdrawAddressResponseAminoMsg): _145.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _145.MsgSetWithdrawAddressResponse): _145.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _145.MsgSetWithdrawAddressResponseProtoMsg): _145.MsgSetWithdrawAddressResponse;
                toProto(message: _145.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _145.MsgSetWithdrawAddressResponse): _145.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _145.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_145.MsgWithdrawDelegatorReward>): _145.MsgWithdrawDelegatorReward;
                fromAmino(object: _145.MsgWithdrawDelegatorRewardAmino): _145.MsgWithdrawDelegatorReward;
                toAmino(message: _145.MsgWithdrawDelegatorReward): _145.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _145.MsgWithdrawDelegatorRewardAminoMsg): _145.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _145.MsgWithdrawDelegatorReward): _145.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _145.MsgWithdrawDelegatorRewardProtoMsg): _145.MsgWithdrawDelegatorReward;
                toProto(message: _145.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _145.MsgWithdrawDelegatorReward): _145.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(_: _145.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _145.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_145.MsgWithdrawDelegatorRewardResponse>): _145.MsgWithdrawDelegatorRewardResponse;
                fromAmino(_: _145.MsgWithdrawDelegatorRewardResponseAmino): _145.MsgWithdrawDelegatorRewardResponse;
                toAmino(_: _145.MsgWithdrawDelegatorRewardResponse): _145.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _145.MsgWithdrawDelegatorRewardResponseAminoMsg): _145.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _145.MsgWithdrawDelegatorRewardResponse): _145.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _145.MsgWithdrawDelegatorRewardResponseProtoMsg): _145.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _145.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _145.MsgWithdrawDelegatorRewardResponse): _145.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _145.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_145.MsgWithdrawValidatorCommission>): _145.MsgWithdrawValidatorCommission;
                fromAmino(object: _145.MsgWithdrawValidatorCommissionAmino): _145.MsgWithdrawValidatorCommission;
                toAmino(message: _145.MsgWithdrawValidatorCommission): _145.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _145.MsgWithdrawValidatorCommissionAminoMsg): _145.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _145.MsgWithdrawValidatorCommission): _145.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _145.MsgWithdrawValidatorCommissionProtoMsg): _145.MsgWithdrawValidatorCommission;
                toProto(message: _145.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _145.MsgWithdrawValidatorCommission): _145.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(_: _145.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _145.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_145.MsgWithdrawValidatorCommissionResponse>): _145.MsgWithdrawValidatorCommissionResponse;
                fromAmino(_: _145.MsgWithdrawValidatorCommissionResponseAmino): _145.MsgWithdrawValidatorCommissionResponse;
                toAmino(_: _145.MsgWithdrawValidatorCommissionResponse): _145.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _145.MsgWithdrawValidatorCommissionResponseAminoMsg): _145.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _145.MsgWithdrawValidatorCommissionResponse): _145.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _145.MsgWithdrawValidatorCommissionResponseProtoMsg): _145.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _145.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _145.MsgWithdrawValidatorCommissionResponse): _145.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _145.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.MsgFundCommunityPool;
                fromPartial(object: Partial<_145.MsgFundCommunityPool>): _145.MsgFundCommunityPool;
                fromAmino(object: _145.MsgFundCommunityPoolAmino): _145.MsgFundCommunityPool;
                toAmino(message: _145.MsgFundCommunityPool): _145.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _145.MsgFundCommunityPoolAminoMsg): _145.MsgFundCommunityPool;
                toAminoMsg(message: _145.MsgFundCommunityPool): _145.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _145.MsgFundCommunityPoolProtoMsg): _145.MsgFundCommunityPool;
                toProto(message: _145.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _145.MsgFundCommunityPool): _145.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _145.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _145.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_145.MsgFundCommunityPoolResponse>): _145.MsgFundCommunityPoolResponse;
                fromAmino(_: _145.MsgFundCommunityPoolResponseAmino): _145.MsgFundCommunityPoolResponse;
                toAmino(_: _145.MsgFundCommunityPoolResponse): _145.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _145.MsgFundCommunityPoolResponseAminoMsg): _145.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _145.MsgFundCommunityPoolResponse): _145.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _145.MsgFundCommunityPoolResponseProtoMsg): _145.MsgFundCommunityPoolResponse;
                toProto(message: _145.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _145.MsgFundCommunityPoolResponse): _145.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _144.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _144.QueryParamsRequest;
                fromPartial(_: Partial<_144.QueryParamsRequest>): _144.QueryParamsRequest;
                fromAmino(_: _144.QueryParamsRequestAmino): _144.QueryParamsRequest;
                toAmino(_: _144.QueryParamsRequest): _144.QueryParamsRequestAmino;
                fromAminoMsg(object: _144.QueryParamsRequestAminoMsg): _144.QueryParamsRequest;
                toAminoMsg(message: _144.QueryParamsRequest): _144.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _144.QueryParamsRequestProtoMsg): _144.QueryParamsRequest;
                toProto(message: _144.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _144.QueryParamsRequest): _144.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _144.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.QueryParamsResponse;
                fromPartial(object: Partial<_144.QueryParamsResponse>): _144.QueryParamsResponse;
                fromAmino(object: _144.QueryParamsResponseAmino): _144.QueryParamsResponse;
                toAmino(message: _144.QueryParamsResponse): _144.QueryParamsResponseAmino;
                fromAminoMsg(object: _144.QueryParamsResponseAminoMsg): _144.QueryParamsResponse;
                toAminoMsg(message: _144.QueryParamsResponse): _144.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _144.QueryParamsResponseProtoMsg): _144.QueryParamsResponse;
                toProto(message: _144.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _144.QueryParamsResponse): _144.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _144.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_144.QueryValidatorOutstandingRewardsRequest>): _144.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _144.QueryValidatorOutstandingRewardsRequestAmino): _144.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _144.QueryValidatorOutstandingRewardsRequest): _144.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _144.QueryValidatorOutstandingRewardsRequestAminoMsg): _144.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _144.QueryValidatorOutstandingRewardsRequest): _144.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _144.QueryValidatorOutstandingRewardsRequestProtoMsg): _144.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _144.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _144.QueryValidatorOutstandingRewardsRequest): _144.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _144.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_144.QueryValidatorOutstandingRewardsResponse>): _144.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _144.QueryValidatorOutstandingRewardsResponseAmino): _144.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _144.QueryValidatorOutstandingRewardsResponse): _144.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _144.QueryValidatorOutstandingRewardsResponseAminoMsg): _144.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _144.QueryValidatorOutstandingRewardsResponse): _144.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _144.QueryValidatorOutstandingRewardsResponseProtoMsg): _144.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _144.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _144.QueryValidatorOutstandingRewardsResponse): _144.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _144.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_144.QueryValidatorCommissionRequest>): _144.QueryValidatorCommissionRequest;
                fromAmino(object: _144.QueryValidatorCommissionRequestAmino): _144.QueryValidatorCommissionRequest;
                toAmino(message: _144.QueryValidatorCommissionRequest): _144.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _144.QueryValidatorCommissionRequestAminoMsg): _144.QueryValidatorCommissionRequest;
                toAminoMsg(message: _144.QueryValidatorCommissionRequest): _144.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _144.QueryValidatorCommissionRequestProtoMsg): _144.QueryValidatorCommissionRequest;
                toProto(message: _144.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _144.QueryValidatorCommissionRequest): _144.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _144.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_144.QueryValidatorCommissionResponse>): _144.QueryValidatorCommissionResponse;
                fromAmino(object: _144.QueryValidatorCommissionResponseAmino): _144.QueryValidatorCommissionResponse;
                toAmino(message: _144.QueryValidatorCommissionResponse): _144.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _144.QueryValidatorCommissionResponseAminoMsg): _144.QueryValidatorCommissionResponse;
                toAminoMsg(message: _144.QueryValidatorCommissionResponse): _144.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _144.QueryValidatorCommissionResponseProtoMsg): _144.QueryValidatorCommissionResponse;
                toProto(message: _144.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _144.QueryValidatorCommissionResponse): _144.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _144.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_144.QueryValidatorSlashesRequest>): _144.QueryValidatorSlashesRequest;
                fromAmino(object: _144.QueryValidatorSlashesRequestAmino): _144.QueryValidatorSlashesRequest;
                toAmino(message: _144.QueryValidatorSlashesRequest): _144.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _144.QueryValidatorSlashesRequestAminoMsg): _144.QueryValidatorSlashesRequest;
                toAminoMsg(message: _144.QueryValidatorSlashesRequest): _144.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _144.QueryValidatorSlashesRequestProtoMsg): _144.QueryValidatorSlashesRequest;
                toProto(message: _144.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _144.QueryValidatorSlashesRequest): _144.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _144.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_144.QueryValidatorSlashesResponse>): _144.QueryValidatorSlashesResponse;
                fromAmino(object: _144.QueryValidatorSlashesResponseAmino): _144.QueryValidatorSlashesResponse;
                toAmino(message: _144.QueryValidatorSlashesResponse): _144.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _144.QueryValidatorSlashesResponseAminoMsg): _144.QueryValidatorSlashesResponse;
                toAminoMsg(message: _144.QueryValidatorSlashesResponse): _144.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _144.QueryValidatorSlashesResponseProtoMsg): _144.QueryValidatorSlashesResponse;
                toProto(message: _144.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _144.QueryValidatorSlashesResponse): _144.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _144.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_144.QueryDelegationRewardsRequest>): _144.QueryDelegationRewardsRequest;
                fromAmino(object: _144.QueryDelegationRewardsRequestAmino): _144.QueryDelegationRewardsRequest;
                toAmino(message: _144.QueryDelegationRewardsRequest): _144.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _144.QueryDelegationRewardsRequestAminoMsg): _144.QueryDelegationRewardsRequest;
                toAminoMsg(message: _144.QueryDelegationRewardsRequest): _144.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _144.QueryDelegationRewardsRequestProtoMsg): _144.QueryDelegationRewardsRequest;
                toProto(message: _144.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _144.QueryDelegationRewardsRequest): _144.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _144.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_144.QueryDelegationRewardsResponse>): _144.QueryDelegationRewardsResponse;
                fromAmino(object: _144.QueryDelegationRewardsResponseAmino): _144.QueryDelegationRewardsResponse;
                toAmino(message: _144.QueryDelegationRewardsResponse): _144.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _144.QueryDelegationRewardsResponseAminoMsg): _144.QueryDelegationRewardsResponse;
                toAminoMsg(message: _144.QueryDelegationRewardsResponse): _144.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _144.QueryDelegationRewardsResponseProtoMsg): _144.QueryDelegationRewardsResponse;
                toProto(message: _144.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _144.QueryDelegationRewardsResponse): _144.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _144.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_144.QueryDelegationTotalRewardsRequest>): _144.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _144.QueryDelegationTotalRewardsRequestAmino): _144.QueryDelegationTotalRewardsRequest;
                toAmino(message: _144.QueryDelegationTotalRewardsRequest): _144.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _144.QueryDelegationTotalRewardsRequestAminoMsg): _144.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _144.QueryDelegationTotalRewardsRequest): _144.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _144.QueryDelegationTotalRewardsRequestProtoMsg): _144.QueryDelegationTotalRewardsRequest;
                toProto(message: _144.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _144.QueryDelegationTotalRewardsRequest): _144.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _144.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_144.QueryDelegationTotalRewardsResponse>): _144.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _144.QueryDelegationTotalRewardsResponseAmino): _144.QueryDelegationTotalRewardsResponse;
                toAmino(message: _144.QueryDelegationTotalRewardsResponse): _144.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _144.QueryDelegationTotalRewardsResponseAminoMsg): _144.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _144.QueryDelegationTotalRewardsResponse): _144.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _144.QueryDelegationTotalRewardsResponseProtoMsg): _144.QueryDelegationTotalRewardsResponse;
                toProto(message: _144.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _144.QueryDelegationTotalRewardsResponse): _144.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _144.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_144.QueryDelegatorValidatorsRequest>): _144.QueryDelegatorValidatorsRequest;
                fromAmino(object: _144.QueryDelegatorValidatorsRequestAmino): _144.QueryDelegatorValidatorsRequest;
                toAmino(message: _144.QueryDelegatorValidatorsRequest): _144.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _144.QueryDelegatorValidatorsRequestAminoMsg): _144.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _144.QueryDelegatorValidatorsRequest): _144.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _144.QueryDelegatorValidatorsRequestProtoMsg): _144.QueryDelegatorValidatorsRequest;
                toProto(message: _144.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _144.QueryDelegatorValidatorsRequest): _144.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _144.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_144.QueryDelegatorValidatorsResponse>): _144.QueryDelegatorValidatorsResponse;
                fromAmino(object: _144.QueryDelegatorValidatorsResponseAmino): _144.QueryDelegatorValidatorsResponse;
                toAmino(message: _144.QueryDelegatorValidatorsResponse): _144.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _144.QueryDelegatorValidatorsResponseAminoMsg): _144.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _144.QueryDelegatorValidatorsResponse): _144.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _144.QueryDelegatorValidatorsResponseProtoMsg): _144.QueryDelegatorValidatorsResponse;
                toProto(message: _144.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _144.QueryDelegatorValidatorsResponse): _144.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _144.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_144.QueryDelegatorWithdrawAddressRequest>): _144.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _144.QueryDelegatorWithdrawAddressRequestAmino): _144.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _144.QueryDelegatorWithdrawAddressRequest): _144.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _144.QueryDelegatorWithdrawAddressRequestAminoMsg): _144.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _144.QueryDelegatorWithdrawAddressRequest): _144.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _144.QueryDelegatorWithdrawAddressRequestProtoMsg): _144.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _144.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _144.QueryDelegatorWithdrawAddressRequest): _144.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _144.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_144.QueryDelegatorWithdrawAddressResponse>): _144.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _144.QueryDelegatorWithdrawAddressResponseAmino): _144.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _144.QueryDelegatorWithdrawAddressResponse): _144.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _144.QueryDelegatorWithdrawAddressResponseAminoMsg): _144.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _144.QueryDelegatorWithdrawAddressResponse): _144.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _144.QueryDelegatorWithdrawAddressResponseProtoMsg): _144.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _144.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _144.QueryDelegatorWithdrawAddressResponse): _144.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _144.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _144.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_144.QueryCommunityPoolRequest>): _144.QueryCommunityPoolRequest;
                fromAmino(_: _144.QueryCommunityPoolRequestAmino): _144.QueryCommunityPoolRequest;
                toAmino(_: _144.QueryCommunityPoolRequest): _144.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _144.QueryCommunityPoolRequestAminoMsg): _144.QueryCommunityPoolRequest;
                toAminoMsg(message: _144.QueryCommunityPoolRequest): _144.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _144.QueryCommunityPoolRequestProtoMsg): _144.QueryCommunityPoolRequest;
                toProto(message: _144.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _144.QueryCommunityPoolRequest): _144.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _144.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_144.QueryCommunityPoolResponse>): _144.QueryCommunityPoolResponse;
                fromAmino(object: _144.QueryCommunityPoolResponseAmino): _144.QueryCommunityPoolResponse;
                toAmino(message: _144.QueryCommunityPoolResponse): _144.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _144.QueryCommunityPoolResponseAminoMsg): _144.QueryCommunityPoolResponse;
                toAminoMsg(message: _144.QueryCommunityPoolResponse): _144.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _144.QueryCommunityPoolResponseProtoMsg): _144.QueryCommunityPoolResponse;
                toProto(message: _144.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _144.QueryCommunityPoolResponse): _144.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _143.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_143.DelegatorWithdrawInfo>): _143.DelegatorWithdrawInfo;
                fromAmino(object: _143.DelegatorWithdrawInfoAmino): _143.DelegatorWithdrawInfo;
                toAmino(message: _143.DelegatorWithdrawInfo): _143.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _143.DelegatorWithdrawInfoAminoMsg): _143.DelegatorWithdrawInfo;
                toAminoMsg(message: _143.DelegatorWithdrawInfo): _143.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _143.DelegatorWithdrawInfoProtoMsg): _143.DelegatorWithdrawInfo;
                toProto(message: _143.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _143.DelegatorWithdrawInfo): _143.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _143.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_143.ValidatorOutstandingRewardsRecord>): _143.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _143.ValidatorOutstandingRewardsRecordAmino): _143.ValidatorOutstandingRewardsRecord;
                toAmino(message: _143.ValidatorOutstandingRewardsRecord): _143.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _143.ValidatorOutstandingRewardsRecordAminoMsg): _143.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _143.ValidatorOutstandingRewardsRecord): _143.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _143.ValidatorOutstandingRewardsRecordProtoMsg): _143.ValidatorOutstandingRewardsRecord;
                toProto(message: _143.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _143.ValidatorOutstandingRewardsRecord): _143.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _143.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_143.ValidatorAccumulatedCommissionRecord>): _143.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _143.ValidatorAccumulatedCommissionRecordAmino): _143.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _143.ValidatorAccumulatedCommissionRecord): _143.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _143.ValidatorAccumulatedCommissionRecordAminoMsg): _143.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _143.ValidatorAccumulatedCommissionRecord): _143.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _143.ValidatorAccumulatedCommissionRecordProtoMsg): _143.ValidatorAccumulatedCommissionRecord;
                toProto(message: _143.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _143.ValidatorAccumulatedCommissionRecord): _143.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _143.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_143.ValidatorHistoricalRewardsRecord>): _143.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _143.ValidatorHistoricalRewardsRecordAmino): _143.ValidatorHistoricalRewardsRecord;
                toAmino(message: _143.ValidatorHistoricalRewardsRecord): _143.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _143.ValidatorHistoricalRewardsRecordAminoMsg): _143.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _143.ValidatorHistoricalRewardsRecord): _143.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _143.ValidatorHistoricalRewardsRecordProtoMsg): _143.ValidatorHistoricalRewardsRecord;
                toProto(message: _143.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _143.ValidatorHistoricalRewardsRecord): _143.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _143.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_143.ValidatorCurrentRewardsRecord>): _143.ValidatorCurrentRewardsRecord;
                fromAmino(object: _143.ValidatorCurrentRewardsRecordAmino): _143.ValidatorCurrentRewardsRecord;
                toAmino(message: _143.ValidatorCurrentRewardsRecord): _143.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _143.ValidatorCurrentRewardsRecordAminoMsg): _143.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _143.ValidatorCurrentRewardsRecord): _143.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _143.ValidatorCurrentRewardsRecordProtoMsg): _143.ValidatorCurrentRewardsRecord;
                toProto(message: _143.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _143.ValidatorCurrentRewardsRecord): _143.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _143.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_143.DelegatorStartingInfoRecord>): _143.DelegatorStartingInfoRecord;
                fromAmino(object: _143.DelegatorStartingInfoRecordAmino): _143.DelegatorStartingInfoRecord;
                toAmino(message: _143.DelegatorStartingInfoRecord): _143.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _143.DelegatorStartingInfoRecordAminoMsg): _143.DelegatorStartingInfoRecord;
                toAminoMsg(message: _143.DelegatorStartingInfoRecord): _143.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _143.DelegatorStartingInfoRecordProtoMsg): _143.DelegatorStartingInfoRecord;
                toProto(message: _143.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _143.DelegatorStartingInfoRecord): _143.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _143.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_143.ValidatorSlashEventRecord>): _143.ValidatorSlashEventRecord;
                fromAmino(object: _143.ValidatorSlashEventRecordAmino): _143.ValidatorSlashEventRecord;
                toAmino(message: _143.ValidatorSlashEventRecord): _143.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _143.ValidatorSlashEventRecordAminoMsg): _143.ValidatorSlashEventRecord;
                toAminoMsg(message: _143.ValidatorSlashEventRecord): _143.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _143.ValidatorSlashEventRecordProtoMsg): _143.ValidatorSlashEventRecord;
                toProto(message: _143.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _143.ValidatorSlashEventRecord): _143.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _143.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.GenesisState;
                fromPartial(object: Partial<_143.GenesisState>): _143.GenesisState;
                fromAmino(object: _143.GenesisStateAmino): _143.GenesisState;
                toAmino(message: _143.GenesisState): _143.GenesisStateAmino;
                fromAminoMsg(object: _143.GenesisStateAminoMsg): _143.GenesisState;
                toAminoMsg(message: _143.GenesisState): _143.GenesisStateAminoMsg;
                fromProtoMsg(message: _143.GenesisStateProtoMsg): _143.GenesisState;
                toProto(message: _143.GenesisState): Uint8Array;
                toProtoMsg(message: _143.GenesisState): _143.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _142.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.Params;
                fromPartial(object: Partial<_142.Params>): _142.Params;
                fromAmino(object: _142.ParamsAmino): _142.Params;
                toAmino(message: _142.Params): _142.ParamsAmino;
                fromAminoMsg(object: _142.ParamsAminoMsg): _142.Params;
                toAminoMsg(message: _142.Params): _142.ParamsAminoMsg;
                fromProtoMsg(message: _142.ParamsProtoMsg): _142.Params;
                toProto(message: _142.Params): Uint8Array;
                toProtoMsg(message: _142.Params): _142.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _142.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_142.ValidatorHistoricalRewards>): _142.ValidatorHistoricalRewards;
                fromAmino(object: _142.ValidatorHistoricalRewardsAmino): _142.ValidatorHistoricalRewards;
                toAmino(message: _142.ValidatorHistoricalRewards): _142.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _142.ValidatorHistoricalRewardsAminoMsg): _142.ValidatorHistoricalRewards;
                toAminoMsg(message: _142.ValidatorHistoricalRewards): _142.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _142.ValidatorHistoricalRewardsProtoMsg): _142.ValidatorHistoricalRewards;
                toProto(message: _142.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _142.ValidatorHistoricalRewards): _142.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _142.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.ValidatorCurrentRewards;
                fromPartial(object: Partial<_142.ValidatorCurrentRewards>): _142.ValidatorCurrentRewards;
                fromAmino(object: _142.ValidatorCurrentRewardsAmino): _142.ValidatorCurrentRewards;
                toAmino(message: _142.ValidatorCurrentRewards): _142.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _142.ValidatorCurrentRewardsAminoMsg): _142.ValidatorCurrentRewards;
                toAminoMsg(message: _142.ValidatorCurrentRewards): _142.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _142.ValidatorCurrentRewardsProtoMsg): _142.ValidatorCurrentRewards;
                toProto(message: _142.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _142.ValidatorCurrentRewards): _142.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _142.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_142.ValidatorAccumulatedCommission>): _142.ValidatorAccumulatedCommission;
                fromAmino(object: _142.ValidatorAccumulatedCommissionAmino): _142.ValidatorAccumulatedCommission;
                toAmino(message: _142.ValidatorAccumulatedCommission): _142.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _142.ValidatorAccumulatedCommissionAminoMsg): _142.ValidatorAccumulatedCommission;
                toAminoMsg(message: _142.ValidatorAccumulatedCommission): _142.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _142.ValidatorAccumulatedCommissionProtoMsg): _142.ValidatorAccumulatedCommission;
                toProto(message: _142.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _142.ValidatorAccumulatedCommission): _142.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _142.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_142.ValidatorOutstandingRewards>): _142.ValidatorOutstandingRewards;
                fromAmino(object: _142.ValidatorOutstandingRewardsAmino): _142.ValidatorOutstandingRewards;
                toAmino(message: _142.ValidatorOutstandingRewards): _142.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _142.ValidatorOutstandingRewardsAminoMsg): _142.ValidatorOutstandingRewards;
                toAminoMsg(message: _142.ValidatorOutstandingRewards): _142.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _142.ValidatorOutstandingRewardsProtoMsg): _142.ValidatorOutstandingRewards;
                toProto(message: _142.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _142.ValidatorOutstandingRewards): _142.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _142.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.ValidatorSlashEvent;
                fromPartial(object: Partial<_142.ValidatorSlashEvent>): _142.ValidatorSlashEvent;
                fromAmino(object: _142.ValidatorSlashEventAmino): _142.ValidatorSlashEvent;
                toAmino(message: _142.ValidatorSlashEvent): _142.ValidatorSlashEventAmino;
                fromAminoMsg(object: _142.ValidatorSlashEventAminoMsg): _142.ValidatorSlashEvent;
                toAminoMsg(message: _142.ValidatorSlashEvent): _142.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _142.ValidatorSlashEventProtoMsg): _142.ValidatorSlashEvent;
                toProto(message: _142.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _142.ValidatorSlashEvent): _142.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _142.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.ValidatorSlashEvents;
                fromPartial(object: Partial<_142.ValidatorSlashEvents>): _142.ValidatorSlashEvents;
                fromAmino(object: _142.ValidatorSlashEventsAmino): _142.ValidatorSlashEvents;
                toAmino(message: _142.ValidatorSlashEvents): _142.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _142.ValidatorSlashEventsAminoMsg): _142.ValidatorSlashEvents;
                toAminoMsg(message: _142.ValidatorSlashEvents): _142.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _142.ValidatorSlashEventsProtoMsg): _142.ValidatorSlashEvents;
                toProto(message: _142.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _142.ValidatorSlashEvents): _142.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _142.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.FeePool;
                fromPartial(object: Partial<_142.FeePool>): _142.FeePool;
                fromAmino(object: _142.FeePoolAmino): _142.FeePool;
                toAmino(message: _142.FeePool): _142.FeePoolAmino;
                fromAminoMsg(object: _142.FeePoolAminoMsg): _142.FeePool;
                toAminoMsg(message: _142.FeePool): _142.FeePoolAminoMsg;
                fromProtoMsg(message: _142.FeePoolProtoMsg): _142.FeePool;
                toProto(message: _142.FeePool): Uint8Array;
                toProtoMsg(message: _142.FeePool): _142.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _142.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_142.CommunityPoolSpendProposal>): _142.CommunityPoolSpendProposal;
                fromAmino(object: _142.CommunityPoolSpendProposalAmino): _142.CommunityPoolSpendProposal;
                toAmino(message: _142.CommunityPoolSpendProposal): _142.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _142.CommunityPoolSpendProposalAminoMsg): _142.CommunityPoolSpendProposal;
                toAminoMsg(message: _142.CommunityPoolSpendProposal): _142.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _142.CommunityPoolSpendProposalProtoMsg): _142.CommunityPoolSpendProposal;
                toProto(message: _142.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _142.CommunityPoolSpendProposal): _142.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _142.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.DelegatorStartingInfo;
                fromPartial(object: Partial<_142.DelegatorStartingInfo>): _142.DelegatorStartingInfo;
                fromAmino(object: _142.DelegatorStartingInfoAmino): _142.DelegatorStartingInfo;
                toAmino(message: _142.DelegatorStartingInfo): _142.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _142.DelegatorStartingInfoAminoMsg): _142.DelegatorStartingInfo;
                toAminoMsg(message: _142.DelegatorStartingInfo): _142.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _142.DelegatorStartingInfoProtoMsg): _142.DelegatorStartingInfo;
                toProto(message: _142.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _142.DelegatorStartingInfo): _142.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _142.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.DelegationDelegatorReward;
                fromPartial(object: Partial<_142.DelegationDelegatorReward>): _142.DelegationDelegatorReward;
                fromAmino(object: _142.DelegationDelegatorRewardAmino): _142.DelegationDelegatorReward;
                toAmino(message: _142.DelegationDelegatorReward): _142.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _142.DelegationDelegatorRewardAminoMsg): _142.DelegationDelegatorReward;
                toAminoMsg(message: _142.DelegationDelegatorReward): _142.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _142.DelegationDelegatorRewardProtoMsg): _142.DelegationDelegatorReward;
                toProto(message: _142.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _142.DelegationDelegatorReward): _142.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _142.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_142.CommunityPoolSpendProposalWithDeposit>): _142.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _142.CommunityPoolSpendProposalWithDepositAmino): _142.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _142.CommunityPoolSpendProposalWithDeposit): _142.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _142.CommunityPoolSpendProposalWithDepositAminoMsg): _142.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _142.CommunityPoolSpendProposalWithDeposit): _142.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _142.CommunityPoolSpendProposalWithDepositProtoMsg): _142.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _142.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _142.CommunityPoolSpendProposalWithDeposit): _142.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _339.MsgClientImpl;
            QueryClientImpl: typeof _326.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _148.QueryEvidenceRequest): Promise<_148.QueryEvidenceResponse>;
                allEvidence(request?: _148.QueryAllEvidenceRequest): Promise<_148.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _311.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _149.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _149.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _149.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _149.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _149.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _149.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _149.MsgSubmitEvidence) => _149.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _149.MsgSubmitEvidenceAmino) => _149.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _149.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgSubmitEvidence;
                fromPartial(object: Partial<_149.MsgSubmitEvidence>): _149.MsgSubmitEvidence;
                fromAmino(object: _149.MsgSubmitEvidenceAmino): _149.MsgSubmitEvidence;
                toAmino(message: _149.MsgSubmitEvidence): _149.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _149.MsgSubmitEvidenceAminoMsg): _149.MsgSubmitEvidence;
                toAminoMsg(message: _149.MsgSubmitEvidence): _149.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _149.MsgSubmitEvidenceProtoMsg): _149.MsgSubmitEvidence;
                toProto(message: _149.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _149.MsgSubmitEvidence): _149.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _149.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_149.MsgSubmitEvidenceResponse>): _149.MsgSubmitEvidenceResponse;
                fromAmino(object: _149.MsgSubmitEvidenceResponseAmino): _149.MsgSubmitEvidenceResponse;
                toAmino(message: _149.MsgSubmitEvidenceResponse): _149.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _149.MsgSubmitEvidenceResponseAminoMsg): _149.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _149.MsgSubmitEvidenceResponse): _149.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _149.MsgSubmitEvidenceResponseProtoMsg): _149.MsgSubmitEvidenceResponse;
                toProto(message: _149.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _149.MsgSubmitEvidenceResponse): _149.MsgSubmitEvidenceResponseProtoMsg;
            };
            Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _148.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryEvidenceRequest;
                fromPartial(object: Partial<_148.QueryEvidenceRequest>): _148.QueryEvidenceRequest;
                fromAmino(object: _148.QueryEvidenceRequestAmino): _148.QueryEvidenceRequest;
                toAmino(message: _148.QueryEvidenceRequest): _148.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _148.QueryEvidenceRequestAminoMsg): _148.QueryEvidenceRequest;
                toAminoMsg(message: _148.QueryEvidenceRequest): _148.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _148.QueryEvidenceRequestProtoMsg): _148.QueryEvidenceRequest;
                toProto(message: _148.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _148.QueryEvidenceRequest): _148.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _148.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryEvidenceResponse;
                fromPartial(object: Partial<_148.QueryEvidenceResponse>): _148.QueryEvidenceResponse;
                fromAmino(object: _148.QueryEvidenceResponseAmino): _148.QueryEvidenceResponse;
                toAmino(message: _148.QueryEvidenceResponse): _148.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _148.QueryEvidenceResponseAminoMsg): _148.QueryEvidenceResponse;
                toAminoMsg(message: _148.QueryEvidenceResponse): _148.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _148.QueryEvidenceResponseProtoMsg): _148.QueryEvidenceResponse;
                toProto(message: _148.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _148.QueryEvidenceResponse): _148.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _148.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_148.QueryAllEvidenceRequest>): _148.QueryAllEvidenceRequest;
                fromAmino(object: _148.QueryAllEvidenceRequestAmino): _148.QueryAllEvidenceRequest;
                toAmino(message: _148.QueryAllEvidenceRequest): _148.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _148.QueryAllEvidenceRequestAminoMsg): _148.QueryAllEvidenceRequest;
                toAminoMsg(message: _148.QueryAllEvidenceRequest): _148.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _148.QueryAllEvidenceRequestProtoMsg): _148.QueryAllEvidenceRequest;
                toProto(message: _148.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _148.QueryAllEvidenceRequest): _148.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _148.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_148.QueryAllEvidenceResponse>): _148.QueryAllEvidenceResponse;
                fromAmino(object: _148.QueryAllEvidenceResponseAmino): _148.QueryAllEvidenceResponse;
                toAmino(message: _148.QueryAllEvidenceResponse): _148.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _148.QueryAllEvidenceResponseAminoMsg): _148.QueryAllEvidenceResponse;
                toAminoMsg(message: _148.QueryAllEvidenceResponse): _148.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _148.QueryAllEvidenceResponseProtoMsg): _148.QueryAllEvidenceResponse;
                toProto(message: _148.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _148.QueryAllEvidenceResponse): _148.QueryAllEvidenceResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _147.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.GenesisState;
                fromPartial(object: Partial<_147.GenesisState>): _147.GenesisState;
                fromAmino(object: _147.GenesisStateAmino): _147.GenesisState;
                toAmino(message: _147.GenesisState): _147.GenesisStateAmino;
                fromAminoMsg(object: _147.GenesisStateAminoMsg): _147.GenesisState;
                toAminoMsg(message: _147.GenesisState): _147.GenesisStateAminoMsg;
                fromProtoMsg(message: _147.GenesisStateProtoMsg): _147.GenesisState;
                toProto(message: _147.GenesisState): Uint8Array;
                toProtoMsg(message: _147.GenesisState): _147.GenesisStateProtoMsg;
            };
            Equivocation: {
                typeUrl: string;
                encode(message: _146.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.Equivocation;
                fromPartial(object: Partial<_146.Equivocation>): _146.Equivocation;
                fromAmino(object: _146.EquivocationAmino): _146.Equivocation;
                toAmino(message: _146.Equivocation): _146.EquivocationAmino;
                fromAminoMsg(object: _146.EquivocationAminoMsg): _146.Equivocation;
                toAminoMsg(message: _146.Equivocation): _146.EquivocationAminoMsg;
                fromProtoMsg(message: _146.EquivocationProtoMsg): _146.Equivocation;
                toProto(message: _146.Equivocation): Uint8Array;
                toProtoMsg(message: _146.Equivocation): _146.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _340.MsgClientImpl;
            QueryClientImpl: typeof _327.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _152.QueryAllowanceRequest): Promise<_152.QueryAllowanceResponse>;
                allowances(request: _152.QueryAllowancesRequest): Promise<_152.QueryAllowancesResponse>;
                allowancesByGranter(request: _152.QueryAllowancesByGranterRequest): Promise<_152.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _312.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _153.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _153.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _153.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _153.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _153.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _153.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _153.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _153.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _153.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _153.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _153.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _153.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _153.MsgGrantAllowance) => _153.MsgGrantAllowanceAmino;
                    fromAmino: (object: _153.MsgGrantAllowanceAmino) => _153.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _153.MsgRevokeAllowance) => _153.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _153.MsgRevokeAllowanceAmino) => _153.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _153.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.MsgGrantAllowance;
                fromPartial(object: Partial<_153.MsgGrantAllowance>): _153.MsgGrantAllowance;
                fromAmino(object: _153.MsgGrantAllowanceAmino): _153.MsgGrantAllowance;
                toAmino(message: _153.MsgGrantAllowance): _153.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _153.MsgGrantAllowanceAminoMsg): _153.MsgGrantAllowance;
                toAminoMsg(message: _153.MsgGrantAllowance): _153.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _153.MsgGrantAllowanceProtoMsg): _153.MsgGrantAllowance;
                toProto(message: _153.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _153.MsgGrantAllowance): _153.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _153.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _153.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_153.MsgGrantAllowanceResponse>): _153.MsgGrantAllowanceResponse;
                fromAmino(_: _153.MsgGrantAllowanceResponseAmino): _153.MsgGrantAllowanceResponse;
                toAmino(_: _153.MsgGrantAllowanceResponse): _153.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _153.MsgGrantAllowanceResponseAminoMsg): _153.MsgGrantAllowanceResponse;
                toAminoMsg(message: _153.MsgGrantAllowanceResponse): _153.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _153.MsgGrantAllowanceResponseProtoMsg): _153.MsgGrantAllowanceResponse;
                toProto(message: _153.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _153.MsgGrantAllowanceResponse): _153.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _153.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.MsgRevokeAllowance;
                fromPartial(object: Partial<_153.MsgRevokeAllowance>): _153.MsgRevokeAllowance;
                fromAmino(object: _153.MsgRevokeAllowanceAmino): _153.MsgRevokeAllowance;
                toAmino(message: _153.MsgRevokeAllowance): _153.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _153.MsgRevokeAllowanceAminoMsg): _153.MsgRevokeAllowance;
                toAminoMsg(message: _153.MsgRevokeAllowance): _153.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _153.MsgRevokeAllowanceProtoMsg): _153.MsgRevokeAllowance;
                toProto(message: _153.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _153.MsgRevokeAllowance): _153.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _153.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _153.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_153.MsgRevokeAllowanceResponse>): _153.MsgRevokeAllowanceResponse;
                fromAmino(_: _153.MsgRevokeAllowanceResponseAmino): _153.MsgRevokeAllowanceResponse;
                toAmino(_: _153.MsgRevokeAllowanceResponse): _153.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _153.MsgRevokeAllowanceResponseAminoMsg): _153.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _153.MsgRevokeAllowanceResponse): _153.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _153.MsgRevokeAllowanceResponseProtoMsg): _153.MsgRevokeAllowanceResponse;
                toProto(message: _153.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _153.MsgRevokeAllowanceResponse): _153.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _150.BasicAllowance | _150.PeriodicAllowance | _150.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _152.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _152.QueryAllowanceRequest;
                fromPartial(object: Partial<_152.QueryAllowanceRequest>): _152.QueryAllowanceRequest;
                fromAmino(object: _152.QueryAllowanceRequestAmino): _152.QueryAllowanceRequest;
                toAmino(message: _152.QueryAllowanceRequest): _152.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _152.QueryAllowanceRequestAminoMsg): _152.QueryAllowanceRequest;
                toAminoMsg(message: _152.QueryAllowanceRequest): _152.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _152.QueryAllowanceRequestProtoMsg): _152.QueryAllowanceRequest;
                toProto(message: _152.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _152.QueryAllowanceRequest): _152.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _152.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _152.QueryAllowanceResponse;
                fromPartial(object: Partial<_152.QueryAllowanceResponse>): _152.QueryAllowanceResponse;
                fromAmino(object: _152.QueryAllowanceResponseAmino): _152.QueryAllowanceResponse;
                toAmino(message: _152.QueryAllowanceResponse): _152.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _152.QueryAllowanceResponseAminoMsg): _152.QueryAllowanceResponse;
                toAminoMsg(message: _152.QueryAllowanceResponse): _152.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _152.QueryAllowanceResponseProtoMsg): _152.QueryAllowanceResponse;
                toProto(message: _152.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _152.QueryAllowanceResponse): _152.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _152.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _152.QueryAllowancesRequest;
                fromPartial(object: Partial<_152.QueryAllowancesRequest>): _152.QueryAllowancesRequest;
                fromAmino(object: _152.QueryAllowancesRequestAmino): _152.QueryAllowancesRequest;
                toAmino(message: _152.QueryAllowancesRequest): _152.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _152.QueryAllowancesRequestAminoMsg): _152.QueryAllowancesRequest;
                toAminoMsg(message: _152.QueryAllowancesRequest): _152.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _152.QueryAllowancesRequestProtoMsg): _152.QueryAllowancesRequest;
                toProto(message: _152.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _152.QueryAllowancesRequest): _152.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _152.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _152.QueryAllowancesResponse;
                fromPartial(object: Partial<_152.QueryAllowancesResponse>): _152.QueryAllowancesResponse;
                fromAmino(object: _152.QueryAllowancesResponseAmino): _152.QueryAllowancesResponse;
                toAmino(message: _152.QueryAllowancesResponse): _152.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _152.QueryAllowancesResponseAminoMsg): _152.QueryAllowancesResponse;
                toAminoMsg(message: _152.QueryAllowancesResponse): _152.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _152.QueryAllowancesResponseProtoMsg): _152.QueryAllowancesResponse;
                toProto(message: _152.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _152.QueryAllowancesResponse): _152.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _152.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _152.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_152.QueryAllowancesByGranterRequest>): _152.QueryAllowancesByGranterRequest;
                fromAmino(object: _152.QueryAllowancesByGranterRequestAmino): _152.QueryAllowancesByGranterRequest;
                toAmino(message: _152.QueryAllowancesByGranterRequest): _152.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _152.QueryAllowancesByGranterRequestAminoMsg): _152.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _152.QueryAllowancesByGranterRequest): _152.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _152.QueryAllowancesByGranterRequestProtoMsg): _152.QueryAllowancesByGranterRequest;
                toProto(message: _152.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _152.QueryAllowancesByGranterRequest): _152.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _152.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _152.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_152.QueryAllowancesByGranterResponse>): _152.QueryAllowancesByGranterResponse;
                fromAmino(object: _152.QueryAllowancesByGranterResponseAmino): _152.QueryAllowancesByGranterResponse;
                toAmino(message: _152.QueryAllowancesByGranterResponse): _152.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _152.QueryAllowancesByGranterResponseAminoMsg): _152.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _152.QueryAllowancesByGranterResponse): _152.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _152.QueryAllowancesByGranterResponseProtoMsg): _152.QueryAllowancesByGranterResponse;
                toProto(message: _152.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _152.QueryAllowancesByGranterResponse): _152.QueryAllowancesByGranterResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _151.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _151.GenesisState;
                fromPartial(object: Partial<_151.GenesisState>): _151.GenesisState;
                fromAmino(object: _151.GenesisStateAmino): _151.GenesisState;
                toAmino(message: _151.GenesisState): _151.GenesisStateAmino;
                fromAminoMsg(object: _151.GenesisStateAminoMsg): _151.GenesisState;
                toAminoMsg(message: _151.GenesisState): _151.GenesisStateAminoMsg;
                fromProtoMsg(message: _151.GenesisStateProtoMsg): _151.GenesisState;
                toProto(message: _151.GenesisState): Uint8Array;
                toProtoMsg(message: _151.GenesisState): _151.GenesisStateProtoMsg;
            };
            BasicAllowance: {
                typeUrl: string;
                encode(message: _150.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.BasicAllowance;
                fromPartial(object: Partial<_150.BasicAllowance>): _150.BasicAllowance;
                fromAmino(object: _150.BasicAllowanceAmino): _150.BasicAllowance;
                toAmino(message: _150.BasicAllowance): _150.BasicAllowanceAmino;
                fromAminoMsg(object: _150.BasicAllowanceAminoMsg): _150.BasicAllowance;
                toAminoMsg(message: _150.BasicAllowance): _150.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _150.BasicAllowanceProtoMsg): _150.BasicAllowance;
                toProto(message: _150.BasicAllowance): Uint8Array;
                toProtoMsg(message: _150.BasicAllowance): _150.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _150.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.PeriodicAllowance;
                fromPartial(object: Partial<_150.PeriodicAllowance>): _150.PeriodicAllowance;
                fromAmino(object: _150.PeriodicAllowanceAmino): _150.PeriodicAllowance;
                toAmino(message: _150.PeriodicAllowance): _150.PeriodicAllowanceAmino;
                fromAminoMsg(object: _150.PeriodicAllowanceAminoMsg): _150.PeriodicAllowance;
                toAminoMsg(message: _150.PeriodicAllowance): _150.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _150.PeriodicAllowanceProtoMsg): _150.PeriodicAllowance;
                toProto(message: _150.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _150.PeriodicAllowance): _150.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _150.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.AllowedMsgAllowance;
                fromPartial(object: Partial<_150.AllowedMsgAllowance>): _150.AllowedMsgAllowance;
                fromAmino(object: _150.AllowedMsgAllowanceAmino): _150.AllowedMsgAllowance;
                toAmino(message: _150.AllowedMsgAllowance): _150.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _150.AllowedMsgAllowanceAminoMsg): _150.AllowedMsgAllowance;
                toAminoMsg(message: _150.AllowedMsgAllowance): _150.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _150.AllowedMsgAllowanceProtoMsg): _150.AllowedMsgAllowance;
                toProto(message: _150.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _150.AllowedMsgAllowance): _150.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _150.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.Grant;
                fromPartial(object: Partial<_150.Grant>): _150.Grant;
                fromAmino(object: _150.GrantAmino): _150.Grant;
                toAmino(message: _150.Grant): _150.GrantAmino;
                fromAminoMsg(object: _150.GrantAminoMsg): _150.Grant;
                toAminoMsg(message: _150.Grant): _150.GrantAminoMsg;
                fromProtoMsg(message: _150.GrantProtoMsg): _150.Grant;
                toProto(message: _150.Grant): Uint8Array;
                toProtoMsg(message: _150.Grant): _150.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                typeUrl: string;
                encode(message: _154.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.GenesisState;
                fromPartial(object: Partial<_154.GenesisState>): _154.GenesisState;
                fromAmino(object: _154.GenesisStateAmino): _154.GenesisState;
                toAmino(message: _154.GenesisState): _154.GenesisStateAmino;
                fromAminoMsg(object: _154.GenesisStateAminoMsg): _154.GenesisState;
                toAminoMsg(message: _154.GenesisState): _154.GenesisStateAminoMsg;
                fromProtoMsg(message: _154.GenesisStateProtoMsg): _154.GenesisState;
                toProto(message: _154.GenesisState): Uint8Array;
                toProtoMsg(message: _154.GenesisState): _154.GenesisStateProtoMsg;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _341.MsgClientImpl;
            QueryClientImpl: typeof _328.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _157.QueryProposalRequest): Promise<_157.QueryProposalResponse>;
                proposals(request: _157.QueryProposalsRequest): Promise<_157.QueryProposalsResponse>;
                vote(request: _157.QueryVoteRequest): Promise<_157.QueryVoteResponse>;
                votes(request: _157.QueryVotesRequest): Promise<_157.QueryVotesResponse>;
                params(request: _157.QueryParamsRequest): Promise<_157.QueryParamsResponse>;
                deposit(request: _157.QueryDepositRequest): Promise<_157.QueryDepositResponse>;
                deposits(request: _157.QueryDepositsRequest): Promise<_157.QueryDepositsResponse>;
                tallyResult(request: _157.QueryTallyResultRequest): Promise<_157.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _313.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _158.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _158.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _158.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _158.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _158.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _158.MsgSubmitProposal;
                    };
                    vote(value: _158.MsgVote): {
                        typeUrl: string;
                        value: _158.MsgVote;
                    };
                    voteWeighted(value: _158.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _158.MsgVoteWeighted;
                    };
                    deposit(value: _158.MsgDeposit): {
                        typeUrl: string;
                        value: _158.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _158.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _158.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _158.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _158.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _158.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _158.MsgSubmitProposal;
                    };
                    vote(value: _158.MsgVote): {
                        typeUrl: string;
                        value: _158.MsgVote;
                    };
                    voteWeighted(value: _158.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _158.MsgVoteWeighted;
                    };
                    deposit(value: _158.MsgDeposit): {
                        typeUrl: string;
                        value: _158.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _158.MsgSubmitProposal) => _158.MsgSubmitProposalAmino;
                    fromAmino: (object: _158.MsgSubmitProposalAmino) => _158.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _158.MsgVote) => _158.MsgVoteAmino;
                    fromAmino: (object: _158.MsgVoteAmino) => _158.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _158.MsgVoteWeighted) => _158.MsgVoteWeightedAmino;
                    fromAmino: (object: _158.MsgVoteWeightedAmino) => _158.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _158.MsgDeposit) => _158.MsgDepositAmino;
                    fromAmino: (object: _158.MsgDepositAmino) => _158.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _158.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _158.MsgSubmitProposal;
                fromPartial(object: Partial<_158.MsgSubmitProposal>): _158.MsgSubmitProposal;
                fromAmino(object: _158.MsgSubmitProposalAmino): _158.MsgSubmitProposal;
                toAmino(message: _158.MsgSubmitProposal): _158.MsgSubmitProposalAmino;
                fromAminoMsg(object: _158.MsgSubmitProposalAminoMsg): _158.MsgSubmitProposal;
                toAminoMsg(message: _158.MsgSubmitProposal): _158.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _158.MsgSubmitProposalProtoMsg): _158.MsgSubmitProposal;
                toProto(message: _158.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _158.MsgSubmitProposal): _158.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _158.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _158.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_158.MsgSubmitProposalResponse>): _158.MsgSubmitProposalResponse;
                fromAmino(object: _158.MsgSubmitProposalResponseAmino): _158.MsgSubmitProposalResponse;
                toAmino(message: _158.MsgSubmitProposalResponse): _158.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _158.MsgSubmitProposalResponseAminoMsg): _158.MsgSubmitProposalResponse;
                toAminoMsg(message: _158.MsgSubmitProposalResponse): _158.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _158.MsgSubmitProposalResponseProtoMsg): _158.MsgSubmitProposalResponse;
                toProto(message: _158.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _158.MsgSubmitProposalResponse): _158.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _158.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _158.MsgVote;
                fromPartial(object: Partial<_158.MsgVote>): _158.MsgVote;
                fromAmino(object: _158.MsgVoteAmino): _158.MsgVote;
                toAmino(message: _158.MsgVote): _158.MsgVoteAmino;
                fromAminoMsg(object: _158.MsgVoteAminoMsg): _158.MsgVote;
                toAminoMsg(message: _158.MsgVote): _158.MsgVoteAminoMsg;
                fromProtoMsg(message: _158.MsgVoteProtoMsg): _158.MsgVote;
                toProto(message: _158.MsgVote): Uint8Array;
                toProtoMsg(message: _158.MsgVote): _158.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _158.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _158.MsgVoteResponse;
                fromPartial(_: Partial<_158.MsgVoteResponse>): _158.MsgVoteResponse;
                fromAmino(_: _158.MsgVoteResponseAmino): _158.MsgVoteResponse;
                toAmino(_: _158.MsgVoteResponse): _158.MsgVoteResponseAmino;
                fromAminoMsg(object: _158.MsgVoteResponseAminoMsg): _158.MsgVoteResponse;
                toAminoMsg(message: _158.MsgVoteResponse): _158.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _158.MsgVoteResponseProtoMsg): _158.MsgVoteResponse;
                toProto(message: _158.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _158.MsgVoteResponse): _158.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _158.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _158.MsgVoteWeighted;
                fromPartial(object: Partial<_158.MsgVoteWeighted>): _158.MsgVoteWeighted;
                fromAmino(object: _158.MsgVoteWeightedAmino): _158.MsgVoteWeighted;
                toAmino(message: _158.MsgVoteWeighted): _158.MsgVoteWeightedAmino;
                fromAminoMsg(object: _158.MsgVoteWeightedAminoMsg): _158.MsgVoteWeighted;
                toAminoMsg(message: _158.MsgVoteWeighted): _158.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _158.MsgVoteWeightedProtoMsg): _158.MsgVoteWeighted;
                toProto(message: _158.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _158.MsgVoteWeighted): _158.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _158.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _158.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_158.MsgVoteWeightedResponse>): _158.MsgVoteWeightedResponse;
                fromAmino(_: _158.MsgVoteWeightedResponseAmino): _158.MsgVoteWeightedResponse;
                toAmino(_: _158.MsgVoteWeightedResponse): _158.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _158.MsgVoteWeightedResponseAminoMsg): _158.MsgVoteWeightedResponse;
                toAminoMsg(message: _158.MsgVoteWeightedResponse): _158.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _158.MsgVoteWeightedResponseProtoMsg): _158.MsgVoteWeightedResponse;
                toProto(message: _158.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _158.MsgVoteWeightedResponse): _158.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _158.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _158.MsgDeposit;
                fromPartial(object: Partial<_158.MsgDeposit>): _158.MsgDeposit;
                fromAmino(object: _158.MsgDepositAmino): _158.MsgDeposit;
                toAmino(message: _158.MsgDeposit): _158.MsgDepositAmino;
                fromAminoMsg(object: _158.MsgDepositAminoMsg): _158.MsgDeposit;
                toAminoMsg(message: _158.MsgDeposit): _158.MsgDepositAminoMsg;
                fromProtoMsg(message: _158.MsgDepositProtoMsg): _158.MsgDeposit;
                toProto(message: _158.MsgDeposit): Uint8Array;
                toProtoMsg(message: _158.MsgDeposit): _158.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _158.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _158.MsgDepositResponse;
                fromPartial(_: Partial<_158.MsgDepositResponse>): _158.MsgDepositResponse;
                fromAmino(_: _158.MsgDepositResponseAmino): _158.MsgDepositResponse;
                toAmino(_: _158.MsgDepositResponse): _158.MsgDepositResponseAmino;
                fromAminoMsg(object: _158.MsgDepositResponseAminoMsg): _158.MsgDepositResponse;
                toAminoMsg(message: _158.MsgDepositResponse): _158.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _158.MsgDepositResponseProtoMsg): _158.MsgDepositResponse;
                toProto(message: _158.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _158.MsgDepositResponse): _158.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _156.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _157.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.QueryProposalRequest;
                fromPartial(object: Partial<_157.QueryProposalRequest>): _157.QueryProposalRequest;
                fromAmino(object: _157.QueryProposalRequestAmino): _157.QueryProposalRequest;
                toAmino(message: _157.QueryProposalRequest): _157.QueryProposalRequestAmino;
                fromAminoMsg(object: _157.QueryProposalRequestAminoMsg): _157.QueryProposalRequest;
                toAminoMsg(message: _157.QueryProposalRequest): _157.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _157.QueryProposalRequestProtoMsg): _157.QueryProposalRequest;
                toProto(message: _157.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _157.QueryProposalRequest): _157.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _157.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.QueryProposalResponse;
                fromPartial(object: Partial<_157.QueryProposalResponse>): _157.QueryProposalResponse;
                fromAmino(object: _157.QueryProposalResponseAmino): _157.QueryProposalResponse;
                toAmino(message: _157.QueryProposalResponse): _157.QueryProposalResponseAmino;
                fromAminoMsg(object: _157.QueryProposalResponseAminoMsg): _157.QueryProposalResponse;
                toAminoMsg(message: _157.QueryProposalResponse): _157.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _157.QueryProposalResponseProtoMsg): _157.QueryProposalResponse;
                toProto(message: _157.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _157.QueryProposalResponse): _157.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _157.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.QueryProposalsRequest;
                fromPartial(object: Partial<_157.QueryProposalsRequest>): _157.QueryProposalsRequest;
                fromAmino(object: _157.QueryProposalsRequestAmino): _157.QueryProposalsRequest;
                toAmino(message: _157.QueryProposalsRequest): _157.QueryProposalsRequestAmino;
                fromAminoMsg(object: _157.QueryProposalsRequestAminoMsg): _157.QueryProposalsRequest;
                toAminoMsg(message: _157.QueryProposalsRequest): _157.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _157.QueryProposalsRequestProtoMsg): _157.QueryProposalsRequest;
                toProto(message: _157.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _157.QueryProposalsRequest): _157.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _157.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.QueryProposalsResponse;
                fromPartial(object: Partial<_157.QueryProposalsResponse>): _157.QueryProposalsResponse;
                fromAmino(object: _157.QueryProposalsResponseAmino): _157.QueryProposalsResponse;
                toAmino(message: _157.QueryProposalsResponse): _157.QueryProposalsResponseAmino;
                fromAminoMsg(object: _157.QueryProposalsResponseAminoMsg): _157.QueryProposalsResponse;
                toAminoMsg(message: _157.QueryProposalsResponse): _157.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _157.QueryProposalsResponseProtoMsg): _157.QueryProposalsResponse;
                toProto(message: _157.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _157.QueryProposalsResponse): _157.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _157.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.QueryVoteRequest;
                fromPartial(object: Partial<_157.QueryVoteRequest>): _157.QueryVoteRequest;
                fromAmino(object: _157.QueryVoteRequestAmino): _157.QueryVoteRequest;
                toAmino(message: _157.QueryVoteRequest): _157.QueryVoteRequestAmino;
                fromAminoMsg(object: _157.QueryVoteRequestAminoMsg): _157.QueryVoteRequest;
                toAminoMsg(message: _157.QueryVoteRequest): _157.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _157.QueryVoteRequestProtoMsg): _157.QueryVoteRequest;
                toProto(message: _157.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _157.QueryVoteRequest): _157.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _157.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.QueryVoteResponse;
                fromPartial(object: Partial<_157.QueryVoteResponse>): _157.QueryVoteResponse;
                fromAmino(object: _157.QueryVoteResponseAmino): _157.QueryVoteResponse;
                toAmino(message: _157.QueryVoteResponse): _157.QueryVoteResponseAmino;
                fromAminoMsg(object: _157.QueryVoteResponseAminoMsg): _157.QueryVoteResponse;
                toAminoMsg(message: _157.QueryVoteResponse): _157.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _157.QueryVoteResponseProtoMsg): _157.QueryVoteResponse;
                toProto(message: _157.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _157.QueryVoteResponse): _157.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _157.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.QueryVotesRequest;
                fromPartial(object: Partial<_157.QueryVotesRequest>): _157.QueryVotesRequest;
                fromAmino(object: _157.QueryVotesRequestAmino): _157.QueryVotesRequest;
                toAmino(message: _157.QueryVotesRequest): _157.QueryVotesRequestAmino;
                fromAminoMsg(object: _157.QueryVotesRequestAminoMsg): _157.QueryVotesRequest;
                toAminoMsg(message: _157.QueryVotesRequest): _157.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _157.QueryVotesRequestProtoMsg): _157.QueryVotesRequest;
                toProto(message: _157.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _157.QueryVotesRequest): _157.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _157.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.QueryVotesResponse;
                fromPartial(object: Partial<_157.QueryVotesResponse>): _157.QueryVotesResponse;
                fromAmino(object: _157.QueryVotesResponseAmino): _157.QueryVotesResponse;
                toAmino(message: _157.QueryVotesResponse): _157.QueryVotesResponseAmino;
                fromAminoMsg(object: _157.QueryVotesResponseAminoMsg): _157.QueryVotesResponse;
                toAminoMsg(message: _157.QueryVotesResponse): _157.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _157.QueryVotesResponseProtoMsg): _157.QueryVotesResponse;
                toProto(message: _157.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _157.QueryVotesResponse): _157.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _157.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.QueryParamsRequest;
                fromPartial(object: Partial<_157.QueryParamsRequest>): _157.QueryParamsRequest;
                fromAmino(object: _157.QueryParamsRequestAmino): _157.QueryParamsRequest;
                toAmino(message: _157.QueryParamsRequest): _157.QueryParamsRequestAmino;
                fromAminoMsg(object: _157.QueryParamsRequestAminoMsg): _157.QueryParamsRequest;
                toAminoMsg(message: _157.QueryParamsRequest): _157.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _157.QueryParamsRequestProtoMsg): _157.QueryParamsRequest;
                toProto(message: _157.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _157.QueryParamsRequest): _157.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _157.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.QueryParamsResponse;
                fromPartial(object: Partial<_157.QueryParamsResponse>): _157.QueryParamsResponse;
                fromAmino(object: _157.QueryParamsResponseAmino): _157.QueryParamsResponse;
                toAmino(message: _157.QueryParamsResponse): _157.QueryParamsResponseAmino;
                fromAminoMsg(object: _157.QueryParamsResponseAminoMsg): _157.QueryParamsResponse;
                toAminoMsg(message: _157.QueryParamsResponse): _157.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _157.QueryParamsResponseProtoMsg): _157.QueryParamsResponse;
                toProto(message: _157.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _157.QueryParamsResponse): _157.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _157.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.QueryDepositRequest;
                fromPartial(object: Partial<_157.QueryDepositRequest>): _157.QueryDepositRequest;
                fromAmino(object: _157.QueryDepositRequestAmino): _157.QueryDepositRequest;
                toAmino(message: _157.QueryDepositRequest): _157.QueryDepositRequestAmino;
                fromAminoMsg(object: _157.QueryDepositRequestAminoMsg): _157.QueryDepositRequest;
                toAminoMsg(message: _157.QueryDepositRequest): _157.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _157.QueryDepositRequestProtoMsg): _157.QueryDepositRequest;
                toProto(message: _157.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _157.QueryDepositRequest): _157.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _157.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.QueryDepositResponse;
                fromPartial(object: Partial<_157.QueryDepositResponse>): _157.QueryDepositResponse;
                fromAmino(object: _157.QueryDepositResponseAmino): _157.QueryDepositResponse;
                toAmino(message: _157.QueryDepositResponse): _157.QueryDepositResponseAmino;
                fromAminoMsg(object: _157.QueryDepositResponseAminoMsg): _157.QueryDepositResponse;
                toAminoMsg(message: _157.QueryDepositResponse): _157.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _157.QueryDepositResponseProtoMsg): _157.QueryDepositResponse;
                toProto(message: _157.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _157.QueryDepositResponse): _157.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _157.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.QueryDepositsRequest;
                fromPartial(object: Partial<_157.QueryDepositsRequest>): _157.QueryDepositsRequest;
                fromAmino(object: _157.QueryDepositsRequestAmino): _157.QueryDepositsRequest;
                toAmino(message: _157.QueryDepositsRequest): _157.QueryDepositsRequestAmino;
                fromAminoMsg(object: _157.QueryDepositsRequestAminoMsg): _157.QueryDepositsRequest;
                toAminoMsg(message: _157.QueryDepositsRequest): _157.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _157.QueryDepositsRequestProtoMsg): _157.QueryDepositsRequest;
                toProto(message: _157.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _157.QueryDepositsRequest): _157.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _157.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.QueryDepositsResponse;
                fromPartial(object: Partial<_157.QueryDepositsResponse>): _157.QueryDepositsResponse;
                fromAmino(object: _157.QueryDepositsResponseAmino): _157.QueryDepositsResponse;
                toAmino(message: _157.QueryDepositsResponse): _157.QueryDepositsResponseAmino;
                fromAminoMsg(object: _157.QueryDepositsResponseAminoMsg): _157.QueryDepositsResponse;
                toAminoMsg(message: _157.QueryDepositsResponse): _157.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _157.QueryDepositsResponseProtoMsg): _157.QueryDepositsResponse;
                toProto(message: _157.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _157.QueryDepositsResponse): _157.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _157.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.QueryTallyResultRequest;
                fromPartial(object: Partial<_157.QueryTallyResultRequest>): _157.QueryTallyResultRequest;
                fromAmino(object: _157.QueryTallyResultRequestAmino): _157.QueryTallyResultRequest;
                toAmino(message: _157.QueryTallyResultRequest): _157.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _157.QueryTallyResultRequestAminoMsg): _157.QueryTallyResultRequest;
                toAminoMsg(message: _157.QueryTallyResultRequest): _157.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _157.QueryTallyResultRequestProtoMsg): _157.QueryTallyResultRequest;
                toProto(message: _157.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _157.QueryTallyResultRequest): _157.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _157.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.QueryTallyResultResponse;
                fromPartial(object: Partial<_157.QueryTallyResultResponse>): _157.QueryTallyResultResponse;
                fromAmino(object: _157.QueryTallyResultResponseAmino): _157.QueryTallyResultResponse;
                toAmino(message: _157.QueryTallyResultResponse): _157.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _157.QueryTallyResultResponseAminoMsg): _157.QueryTallyResultResponse;
                toAminoMsg(message: _157.QueryTallyResultResponse): _157.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _157.QueryTallyResultResponseProtoMsg): _157.QueryTallyResultResponse;
                toProto(message: _157.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _157.QueryTallyResultResponse): _157.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _156.VoteOption;
            voteOptionToJSON(object: _156.VoteOption): string;
            proposalStatusFromJSON(object: any): _156.ProposalStatus;
            proposalStatusToJSON(object: _156.ProposalStatus): string;
            VoteOption: typeof _156.VoteOption;
            VoteOptionSDKType: typeof _156.VoteOption;
            VoteOptionAmino: typeof _156.VoteOption;
            ProposalStatus: typeof _156.ProposalStatus;
            ProposalStatusSDKType: typeof _156.ProposalStatus;
            ProposalStatusAmino: typeof _156.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _156.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.WeightedVoteOption;
                fromPartial(object: Partial<_156.WeightedVoteOption>): _156.WeightedVoteOption;
                fromAmino(object: _156.WeightedVoteOptionAmino): _156.WeightedVoteOption;
                toAmino(message: _156.WeightedVoteOption): _156.WeightedVoteOptionAmino;
                fromAminoMsg(object: _156.WeightedVoteOptionAminoMsg): _156.WeightedVoteOption;
                toAminoMsg(message: _156.WeightedVoteOption): _156.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _156.WeightedVoteOptionProtoMsg): _156.WeightedVoteOption;
                toProto(message: _156.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _156.WeightedVoteOption): _156.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _156.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.TextProposal;
                fromPartial(object: Partial<_156.TextProposal>): _156.TextProposal;
                fromAmino(object: _156.TextProposalAmino): _156.TextProposal;
                toAmino(message: _156.TextProposal): _156.TextProposalAmino;
                fromAminoMsg(object: _156.TextProposalAminoMsg): _156.TextProposal;
                toAminoMsg(message: _156.TextProposal): _156.TextProposalAminoMsg;
                fromProtoMsg(message: _156.TextProposalProtoMsg): _156.TextProposal;
                toProto(message: _156.TextProposal): Uint8Array;
                toProtoMsg(message: _156.TextProposal): _156.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _156.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.Deposit;
                fromPartial(object: Partial<_156.Deposit>): _156.Deposit;
                fromAmino(object: _156.DepositAmino): _156.Deposit;
                toAmino(message: _156.Deposit): _156.DepositAmino;
                fromAminoMsg(object: _156.DepositAminoMsg): _156.Deposit;
                toAminoMsg(message: _156.Deposit): _156.DepositAminoMsg;
                fromProtoMsg(message: _156.DepositProtoMsg): _156.Deposit;
                toProto(message: _156.Deposit): Uint8Array;
                toProtoMsg(message: _156.Deposit): _156.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _156.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.Proposal;
                fromPartial(object: Partial<_156.Proposal>): _156.Proposal;
                fromAmino(object: _156.ProposalAmino): _156.Proposal;
                toAmino(message: _156.Proposal): _156.ProposalAmino;
                fromAminoMsg(object: _156.ProposalAminoMsg): _156.Proposal;
                toAminoMsg(message: _156.Proposal): _156.ProposalAminoMsg;
                fromProtoMsg(message: _156.ProposalProtoMsg): _156.Proposal;
                toProto(message: _156.Proposal): Uint8Array;
                toProtoMsg(message: _156.Proposal): _156.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _156.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.TallyResult;
                fromPartial(object: Partial<_156.TallyResult>): _156.TallyResult;
                fromAmino(object: _156.TallyResultAmino): _156.TallyResult;
                toAmino(message: _156.TallyResult): _156.TallyResultAmino;
                fromAminoMsg(object: _156.TallyResultAminoMsg): _156.TallyResult;
                toAminoMsg(message: _156.TallyResult): _156.TallyResultAminoMsg;
                fromProtoMsg(message: _156.TallyResultProtoMsg): _156.TallyResult;
                toProto(message: _156.TallyResult): Uint8Array;
                toProtoMsg(message: _156.TallyResult): _156.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _156.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.Vote;
                fromPartial(object: Partial<_156.Vote>): _156.Vote;
                fromAmino(object: _156.VoteAmino): _156.Vote;
                toAmino(message: _156.Vote): _156.VoteAmino;
                fromAminoMsg(object: _156.VoteAminoMsg): _156.Vote;
                toAminoMsg(message: _156.Vote): _156.VoteAminoMsg;
                fromProtoMsg(message: _156.VoteProtoMsg): _156.Vote;
                toProto(message: _156.Vote): Uint8Array;
                toProtoMsg(message: _156.Vote): _156.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _156.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.DepositParams;
                fromPartial(object: Partial<_156.DepositParams>): _156.DepositParams;
                fromAmino(object: _156.DepositParamsAmino): _156.DepositParams;
                toAmino(message: _156.DepositParams): _156.DepositParamsAmino;
                fromAminoMsg(object: _156.DepositParamsAminoMsg): _156.DepositParams;
                toAminoMsg(message: _156.DepositParams): _156.DepositParamsAminoMsg;
                fromProtoMsg(message: _156.DepositParamsProtoMsg): _156.DepositParams;
                toProto(message: _156.DepositParams): Uint8Array;
                toProtoMsg(message: _156.DepositParams): _156.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _156.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.VotingParams;
                fromPartial(object: Partial<_156.VotingParams>): _156.VotingParams;
                fromAmino(object: _156.VotingParamsAmino): _156.VotingParams;
                toAmino(message: _156.VotingParams): _156.VotingParamsAmino;
                fromAminoMsg(object: _156.VotingParamsAminoMsg): _156.VotingParams;
                toAminoMsg(message: _156.VotingParams): _156.VotingParamsAminoMsg;
                fromProtoMsg(message: _156.VotingParamsProtoMsg): _156.VotingParams;
                toProto(message: _156.VotingParams): Uint8Array;
                toProtoMsg(message: _156.VotingParams): _156.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _156.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.TallyParams;
                fromPartial(object: Partial<_156.TallyParams>): _156.TallyParams;
                fromAmino(object: _156.TallyParamsAmino): _156.TallyParams;
                toAmino(message: _156.TallyParams): _156.TallyParamsAmino;
                fromAminoMsg(object: _156.TallyParamsAminoMsg): _156.TallyParams;
                toAminoMsg(message: _156.TallyParams): _156.TallyParamsAminoMsg;
                fromProtoMsg(message: _156.TallyParamsProtoMsg): _156.TallyParams;
                toProto(message: _156.TallyParams): Uint8Array;
                toProtoMsg(message: _156.TallyParams): _156.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _155.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.GenesisState;
                fromPartial(object: Partial<_155.GenesisState>): _155.GenesisState;
                fromAmino(object: _155.GenesisStateAmino): _155.GenesisState;
                toAmino(message: _155.GenesisState): _155.GenesisStateAmino;
                fromAminoMsg(object: _155.GenesisStateAminoMsg): _155.GenesisState;
                toAminoMsg(message: _155.GenesisState): _155.GenesisStateAminoMsg;
                fromProtoMsg(message: _155.GenesisStateProtoMsg): _155.GenesisState;
                toProto(message: _155.GenesisState): Uint8Array;
                toProtoMsg(message: _155.GenesisState): _155.GenesisStateProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _329.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _161.QueryParamsRequest): Promise<_161.QueryParamsResponse>;
                inflation(request?: _161.QueryInflationRequest): Promise<_161.QueryInflationResponse>;
                annualProvisions(request?: _161.QueryAnnualProvisionsRequest): Promise<_161.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _314.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _161.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _161.QueryParamsRequest;
                fromPartial(_: Partial<_161.QueryParamsRequest>): _161.QueryParamsRequest;
                fromAmino(_: _161.QueryParamsRequestAmino): _161.QueryParamsRequest;
                toAmino(_: _161.QueryParamsRequest): _161.QueryParamsRequestAmino;
                fromAminoMsg(object: _161.QueryParamsRequestAminoMsg): _161.QueryParamsRequest;
                toAminoMsg(message: _161.QueryParamsRequest): _161.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _161.QueryParamsRequestProtoMsg): _161.QueryParamsRequest;
                toProto(message: _161.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _161.QueryParamsRequest): _161.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _161.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryParamsResponse;
                fromPartial(object: Partial<_161.QueryParamsResponse>): _161.QueryParamsResponse;
                fromAmino(object: _161.QueryParamsResponseAmino): _161.QueryParamsResponse;
                toAmino(message: _161.QueryParamsResponse): _161.QueryParamsResponseAmino;
                fromAminoMsg(object: _161.QueryParamsResponseAminoMsg): _161.QueryParamsResponse;
                toAminoMsg(message: _161.QueryParamsResponse): _161.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _161.QueryParamsResponseProtoMsg): _161.QueryParamsResponse;
                toProto(message: _161.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _161.QueryParamsResponse): _161.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _161.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _161.QueryInflationRequest;
                fromPartial(_: Partial<_161.QueryInflationRequest>): _161.QueryInflationRequest;
                fromAmino(_: _161.QueryInflationRequestAmino): _161.QueryInflationRequest;
                toAmino(_: _161.QueryInflationRequest): _161.QueryInflationRequestAmino;
                fromAminoMsg(object: _161.QueryInflationRequestAminoMsg): _161.QueryInflationRequest;
                toAminoMsg(message: _161.QueryInflationRequest): _161.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _161.QueryInflationRequestProtoMsg): _161.QueryInflationRequest;
                toProto(message: _161.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _161.QueryInflationRequest): _161.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _161.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryInflationResponse;
                fromPartial(object: Partial<_161.QueryInflationResponse>): _161.QueryInflationResponse;
                fromAmino(object: _161.QueryInflationResponseAmino): _161.QueryInflationResponse;
                toAmino(message: _161.QueryInflationResponse): _161.QueryInflationResponseAmino;
                fromAminoMsg(object: _161.QueryInflationResponseAminoMsg): _161.QueryInflationResponse;
                toAminoMsg(message: _161.QueryInflationResponse): _161.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _161.QueryInflationResponseProtoMsg): _161.QueryInflationResponse;
                toProto(message: _161.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _161.QueryInflationResponse): _161.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _161.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _161.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_161.QueryAnnualProvisionsRequest>): _161.QueryAnnualProvisionsRequest;
                fromAmino(_: _161.QueryAnnualProvisionsRequestAmino): _161.QueryAnnualProvisionsRequest;
                toAmino(_: _161.QueryAnnualProvisionsRequest): _161.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _161.QueryAnnualProvisionsRequestAminoMsg): _161.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _161.QueryAnnualProvisionsRequest): _161.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _161.QueryAnnualProvisionsRequestProtoMsg): _161.QueryAnnualProvisionsRequest;
                toProto(message: _161.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _161.QueryAnnualProvisionsRequest): _161.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _161.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_161.QueryAnnualProvisionsResponse>): _161.QueryAnnualProvisionsResponse;
                fromAmino(object: _161.QueryAnnualProvisionsResponseAmino): _161.QueryAnnualProvisionsResponse;
                toAmino(message: _161.QueryAnnualProvisionsResponse): _161.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _161.QueryAnnualProvisionsResponseAminoMsg): _161.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _161.QueryAnnualProvisionsResponse): _161.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _161.QueryAnnualProvisionsResponseProtoMsg): _161.QueryAnnualProvisionsResponse;
                toProto(message: _161.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _161.QueryAnnualProvisionsResponse): _161.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _160.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.Minter;
                fromPartial(object: Partial<_160.Minter>): _160.Minter;
                fromAmino(object: _160.MinterAmino): _160.Minter;
                toAmino(message: _160.Minter): _160.MinterAmino;
                fromAminoMsg(object: _160.MinterAminoMsg): _160.Minter;
                toAminoMsg(message: _160.Minter): _160.MinterAminoMsg;
                fromProtoMsg(message: _160.MinterProtoMsg): _160.Minter;
                toProto(message: _160.Minter): Uint8Array;
                toProtoMsg(message: _160.Minter): _160.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _160.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.Params;
                fromPartial(object: Partial<_160.Params>): _160.Params;
                fromAmino(object: _160.ParamsAmino): _160.Params;
                toAmino(message: _160.Params): _160.ParamsAmino;
                fromAminoMsg(object: _160.ParamsAminoMsg): _160.Params;
                toAminoMsg(message: _160.Params): _160.ParamsAminoMsg;
                fromProtoMsg(message: _160.ParamsProtoMsg): _160.Params;
                toProto(message: _160.Params): Uint8Array;
                toProtoMsg(message: _160.Params): _160.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _159.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _159.GenesisState;
                fromPartial(object: Partial<_159.GenesisState>): _159.GenesisState;
                fromAmino(object: _159.GenesisStateAmino): _159.GenesisState;
                toAmino(message: _159.GenesisState): _159.GenesisStateAmino;
                fromAminoMsg(object: _159.GenesisStateAminoMsg): _159.GenesisState;
                toAminoMsg(message: _159.GenesisState): _159.GenesisStateAminoMsg;
                fromProtoMsg(message: _159.GenesisStateProtoMsg): _159.GenesisState;
                toProto(message: _159.GenesisState): Uint8Array;
                toProtoMsg(message: _159.GenesisState): _159.GenesisStateProtoMsg;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _330.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _163.QueryParamsRequest): Promise<_163.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _315.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _163.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _163.QueryParamsRequest;
                fromPartial(object: Partial<_163.QueryParamsRequest>): _163.QueryParamsRequest;
                fromAmino(object: _163.QueryParamsRequestAmino): _163.QueryParamsRequest;
                toAmino(message: _163.QueryParamsRequest): _163.QueryParamsRequestAmino;
                fromAminoMsg(object: _163.QueryParamsRequestAminoMsg): _163.QueryParamsRequest;
                toAminoMsg(message: _163.QueryParamsRequest): _163.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _163.QueryParamsRequestProtoMsg): _163.QueryParamsRequest;
                toProto(message: _163.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _163.QueryParamsRequest): _163.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _163.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _163.QueryParamsResponse;
                fromPartial(object: Partial<_163.QueryParamsResponse>): _163.QueryParamsResponse;
                fromAmino(object: _163.QueryParamsResponseAmino): _163.QueryParamsResponse;
                toAmino(message: _163.QueryParamsResponse): _163.QueryParamsResponseAmino;
                fromAminoMsg(object: _163.QueryParamsResponseAminoMsg): _163.QueryParamsResponse;
                toAminoMsg(message: _163.QueryParamsResponse): _163.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _163.QueryParamsResponseProtoMsg): _163.QueryParamsResponse;
                toProto(message: _163.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _163.QueryParamsResponse): _163.QueryParamsResponseProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _162.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.ParameterChangeProposal;
                fromPartial(object: Partial<_162.ParameterChangeProposal>): _162.ParameterChangeProposal;
                fromAmino(object: _162.ParameterChangeProposalAmino): _162.ParameterChangeProposal;
                toAmino(message: _162.ParameterChangeProposal): _162.ParameterChangeProposalAmino;
                fromAminoMsg(object: _162.ParameterChangeProposalAminoMsg): _162.ParameterChangeProposal;
                toAminoMsg(message: _162.ParameterChangeProposal): _162.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _162.ParameterChangeProposalProtoMsg): _162.ParameterChangeProposal;
                toProto(message: _162.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _162.ParameterChangeProposal): _162.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _162.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.ParamChange;
                fromPartial(object: Partial<_162.ParamChange>): _162.ParamChange;
                fromAmino(object: _162.ParamChangeAmino): _162.ParamChange;
                toAmino(message: _162.ParamChange): _162.ParamChangeAmino;
                fromAminoMsg(object: _162.ParamChangeAminoMsg): _162.ParamChange;
                toAminoMsg(message: _162.ParamChange): _162.ParamChangeAminoMsg;
                fromProtoMsg(message: _162.ParamChangeProtoMsg): _162.ParamChange;
                toProto(message: _162.ParamChange): Uint8Array;
                toProtoMsg(message: _162.ParamChange): _162.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _342.MsgClientImpl;
            QueryClientImpl: typeof _331.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _165.QueryParamsRequest): Promise<_165.QueryParamsResponse>;
                signingInfo(request: _165.QuerySigningInfoRequest): Promise<_165.QuerySigningInfoResponse>;
                signingInfos(request?: _165.QuerySigningInfosRequest): Promise<_165.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _316.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _167.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _167.MsgUnjail): {
                        typeUrl: string;
                        value: _167.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _167.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _167.MsgUnjail): {
                        typeUrl: string;
                        value: _167.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _167.MsgUnjail) => _167.MsgUnjailAmino;
                    fromAmino: (object: _167.MsgUnjailAmino) => _167.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _167.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _167.MsgUnjail;
                fromPartial(object: Partial<_167.MsgUnjail>): _167.MsgUnjail;
                fromAmino(object: _167.MsgUnjailAmino): _167.MsgUnjail;
                toAmino(message: _167.MsgUnjail): _167.MsgUnjailAmino;
                fromAminoMsg(object: _167.MsgUnjailAminoMsg): _167.MsgUnjail;
                toAminoMsg(message: _167.MsgUnjail): _167.MsgUnjailAminoMsg;
                fromProtoMsg(message: _167.MsgUnjailProtoMsg): _167.MsgUnjail;
                toProto(message: _167.MsgUnjail): Uint8Array;
                toProtoMsg(message: _167.MsgUnjail): _167.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _167.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _167.MsgUnjailResponse;
                fromPartial(_: Partial<_167.MsgUnjailResponse>): _167.MsgUnjailResponse;
                fromAmino(_: _167.MsgUnjailResponseAmino): _167.MsgUnjailResponse;
                toAmino(_: _167.MsgUnjailResponse): _167.MsgUnjailResponseAmino;
                fromAminoMsg(object: _167.MsgUnjailResponseAminoMsg): _167.MsgUnjailResponse;
                toAminoMsg(message: _167.MsgUnjailResponse): _167.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _167.MsgUnjailResponseProtoMsg): _167.MsgUnjailResponse;
                toProto(message: _167.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _167.MsgUnjailResponse): _167.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _166.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.ValidatorSigningInfo;
                fromPartial(object: Partial<_166.ValidatorSigningInfo>): _166.ValidatorSigningInfo;
                fromAmino(object: _166.ValidatorSigningInfoAmino): _166.ValidatorSigningInfo;
                toAmino(message: _166.ValidatorSigningInfo): _166.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _166.ValidatorSigningInfoAminoMsg): _166.ValidatorSigningInfo;
                toAminoMsg(message: _166.ValidatorSigningInfo): _166.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _166.ValidatorSigningInfoProtoMsg): _166.ValidatorSigningInfo;
                toProto(message: _166.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _166.ValidatorSigningInfo): _166.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _166.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.Params;
                fromPartial(object: Partial<_166.Params>): _166.Params;
                fromAmino(object: _166.ParamsAmino): _166.Params;
                toAmino(message: _166.Params): _166.ParamsAmino;
                fromAminoMsg(object: _166.ParamsAminoMsg): _166.Params;
                toAminoMsg(message: _166.Params): _166.ParamsAminoMsg;
                fromProtoMsg(message: _166.ParamsProtoMsg): _166.Params;
                toProto(message: _166.Params): Uint8Array;
                toProtoMsg(message: _166.Params): _166.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _165.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _165.QueryParamsRequest;
                fromPartial(_: Partial<_165.QueryParamsRequest>): _165.QueryParamsRequest;
                fromAmino(_: _165.QueryParamsRequestAmino): _165.QueryParamsRequest;
                toAmino(_: _165.QueryParamsRequest): _165.QueryParamsRequestAmino;
                fromAminoMsg(object: _165.QueryParamsRequestAminoMsg): _165.QueryParamsRequest;
                toAminoMsg(message: _165.QueryParamsRequest): _165.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _165.QueryParamsRequestProtoMsg): _165.QueryParamsRequest;
                toProto(message: _165.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _165.QueryParamsRequest): _165.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _165.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.QueryParamsResponse;
                fromPartial(object: Partial<_165.QueryParamsResponse>): _165.QueryParamsResponse;
                fromAmino(object: _165.QueryParamsResponseAmino): _165.QueryParamsResponse;
                toAmino(message: _165.QueryParamsResponse): _165.QueryParamsResponseAmino;
                fromAminoMsg(object: _165.QueryParamsResponseAminoMsg): _165.QueryParamsResponse;
                toAminoMsg(message: _165.QueryParamsResponse): _165.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _165.QueryParamsResponseProtoMsg): _165.QueryParamsResponse;
                toProto(message: _165.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _165.QueryParamsResponse): _165.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _165.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.QuerySigningInfoRequest;
                fromPartial(object: Partial<_165.QuerySigningInfoRequest>): _165.QuerySigningInfoRequest;
                fromAmino(object: _165.QuerySigningInfoRequestAmino): _165.QuerySigningInfoRequest;
                toAmino(message: _165.QuerySigningInfoRequest): _165.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _165.QuerySigningInfoRequestAminoMsg): _165.QuerySigningInfoRequest;
                toAminoMsg(message: _165.QuerySigningInfoRequest): _165.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _165.QuerySigningInfoRequestProtoMsg): _165.QuerySigningInfoRequest;
                toProto(message: _165.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _165.QuerySigningInfoRequest): _165.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _165.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.QuerySigningInfoResponse;
                fromPartial(object: Partial<_165.QuerySigningInfoResponse>): _165.QuerySigningInfoResponse;
                fromAmino(object: _165.QuerySigningInfoResponseAmino): _165.QuerySigningInfoResponse;
                toAmino(message: _165.QuerySigningInfoResponse): _165.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _165.QuerySigningInfoResponseAminoMsg): _165.QuerySigningInfoResponse;
                toAminoMsg(message: _165.QuerySigningInfoResponse): _165.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _165.QuerySigningInfoResponseProtoMsg): _165.QuerySigningInfoResponse;
                toProto(message: _165.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _165.QuerySigningInfoResponse): _165.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _165.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.QuerySigningInfosRequest;
                fromPartial(object: Partial<_165.QuerySigningInfosRequest>): _165.QuerySigningInfosRequest;
                fromAmino(object: _165.QuerySigningInfosRequestAmino): _165.QuerySigningInfosRequest;
                toAmino(message: _165.QuerySigningInfosRequest): _165.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _165.QuerySigningInfosRequestAminoMsg): _165.QuerySigningInfosRequest;
                toAminoMsg(message: _165.QuerySigningInfosRequest): _165.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _165.QuerySigningInfosRequestProtoMsg): _165.QuerySigningInfosRequest;
                toProto(message: _165.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _165.QuerySigningInfosRequest): _165.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _165.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.QuerySigningInfosResponse;
                fromPartial(object: Partial<_165.QuerySigningInfosResponse>): _165.QuerySigningInfosResponse;
                fromAmino(object: _165.QuerySigningInfosResponseAmino): _165.QuerySigningInfosResponse;
                toAmino(message: _165.QuerySigningInfosResponse): _165.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _165.QuerySigningInfosResponseAminoMsg): _165.QuerySigningInfosResponse;
                toAminoMsg(message: _165.QuerySigningInfosResponse): _165.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _165.QuerySigningInfosResponseProtoMsg): _165.QuerySigningInfosResponse;
                toProto(message: _165.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _165.QuerySigningInfosResponse): _165.QuerySigningInfosResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _164.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.GenesisState;
                fromPartial(object: Partial<_164.GenesisState>): _164.GenesisState;
                fromAmino(object: _164.GenesisStateAmino): _164.GenesisState;
                toAmino(message: _164.GenesisState): _164.GenesisStateAmino;
                fromAminoMsg(object: _164.GenesisStateAminoMsg): _164.GenesisState;
                toAminoMsg(message: _164.GenesisState): _164.GenesisStateAminoMsg;
                fromProtoMsg(message: _164.GenesisStateProtoMsg): _164.GenesisState;
                toProto(message: _164.GenesisState): Uint8Array;
                toProtoMsg(message: _164.GenesisState): _164.GenesisStateProtoMsg;
            };
            SigningInfo: {
                typeUrl: string;
                encode(message: _164.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.SigningInfo;
                fromPartial(object: Partial<_164.SigningInfo>): _164.SigningInfo;
                fromAmino(object: _164.SigningInfoAmino): _164.SigningInfo;
                toAmino(message: _164.SigningInfo): _164.SigningInfoAmino;
                fromAminoMsg(object: _164.SigningInfoAminoMsg): _164.SigningInfo;
                toAminoMsg(message: _164.SigningInfo): _164.SigningInfoAminoMsg;
                fromProtoMsg(message: _164.SigningInfoProtoMsg): _164.SigningInfo;
                toProto(message: _164.SigningInfo): Uint8Array;
                toProtoMsg(message: _164.SigningInfo): _164.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _164.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.ValidatorMissedBlocks;
                fromPartial(object: Partial<_164.ValidatorMissedBlocks>): _164.ValidatorMissedBlocks;
                fromAmino(object: _164.ValidatorMissedBlocksAmino): _164.ValidatorMissedBlocks;
                toAmino(message: _164.ValidatorMissedBlocks): _164.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _164.ValidatorMissedBlocksAminoMsg): _164.ValidatorMissedBlocks;
                toAminoMsg(message: _164.ValidatorMissedBlocks): _164.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _164.ValidatorMissedBlocksProtoMsg): _164.ValidatorMissedBlocks;
                toProto(message: _164.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _164.ValidatorMissedBlocks): _164.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _164.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.MissedBlock;
                fromPartial(object: Partial<_164.MissedBlock>): _164.MissedBlock;
                fromAmino(object: _164.MissedBlockAmino): _164.MissedBlock;
                toAmino(message: _164.MissedBlock): _164.MissedBlockAmino;
                fromAminoMsg(object: _164.MissedBlockAminoMsg): _164.MissedBlock;
                toAminoMsg(message: _164.MissedBlock): _164.MissedBlockAminoMsg;
                fromProtoMsg(message: _164.MissedBlockProtoMsg): _164.MissedBlock;
                toProto(message: _164.MissedBlock): Uint8Array;
                toProtoMsg(message: _164.MissedBlock): _164.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _343.MsgClientImpl;
            QueryClientImpl: typeof _332.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _170.QueryValidatorsRequest): Promise<_170.QueryValidatorsResponse>;
                validator(request: _170.QueryValidatorRequest): Promise<_170.QueryValidatorResponse>;
                validatorDelegations(request: _170.QueryValidatorDelegationsRequest): Promise<_170.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _170.QueryValidatorUnbondingDelegationsRequest): Promise<_170.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _170.QueryDelegationRequest): Promise<_170.QueryDelegationResponse>;
                unbondingDelegation(request: _170.QueryUnbondingDelegationRequest): Promise<_170.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _170.QueryDelegatorDelegationsRequest): Promise<_170.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _170.QueryDelegatorUnbondingDelegationsRequest): Promise<_170.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _170.QueryRedelegationsRequest): Promise<_170.QueryRedelegationsResponse>;
                delegatorValidators(request: _170.QueryDelegatorValidatorsRequest): Promise<_170.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _170.QueryDelegatorValidatorRequest): Promise<_170.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _170.QueryHistoricalInfoRequest): Promise<_170.QueryHistoricalInfoResponse>;
                pool(request?: _170.QueryPoolRequest): Promise<_170.QueryPoolResponse>;
                params(request?: _170.QueryParamsRequest): Promise<_170.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _317.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _172.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _172.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _172.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _172.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _172.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _172.MsgCreateValidator): {
                        typeUrl: string;
                        value: _172.MsgCreateValidator;
                    };
                    editValidator(value: _172.MsgEditValidator): {
                        typeUrl: string;
                        value: _172.MsgEditValidator;
                    };
                    delegate(value: _172.MsgDelegate): {
                        typeUrl: string;
                        value: _172.MsgDelegate;
                    };
                    beginRedelegate(value: _172.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _172.MsgBeginRedelegate;
                    };
                    undelegate(value: _172.MsgUndelegate): {
                        typeUrl: string;
                        value: _172.MsgUndelegate;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _172.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _172.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _172.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _172.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _172.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _172.MsgCreateValidator): {
                        typeUrl: string;
                        value: _172.MsgCreateValidator;
                    };
                    editValidator(value: _172.MsgEditValidator): {
                        typeUrl: string;
                        value: _172.MsgEditValidator;
                    };
                    delegate(value: _172.MsgDelegate): {
                        typeUrl: string;
                        value: _172.MsgDelegate;
                    };
                    beginRedelegate(value: _172.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _172.MsgBeginRedelegate;
                    };
                    undelegate(value: _172.MsgUndelegate): {
                        typeUrl: string;
                        value: _172.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _172.MsgCreateValidator) => _172.MsgCreateValidatorAmino;
                    fromAmino: (object: _172.MsgCreateValidatorAmino) => _172.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _172.MsgEditValidator) => _172.MsgEditValidatorAmino;
                    fromAmino: (object: _172.MsgEditValidatorAmino) => _172.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _172.MsgDelegate) => _172.MsgDelegateAmino;
                    fromAmino: (object: _172.MsgDelegateAmino) => _172.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _172.MsgBeginRedelegate) => _172.MsgBeginRedelegateAmino;
                    fromAmino: (object: _172.MsgBeginRedelegateAmino) => _172.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _172.MsgUndelegate) => _172.MsgUndelegateAmino;
                    fromAmino: (object: _172.MsgUndelegateAmino) => _172.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _172.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.MsgCreateValidator;
                fromPartial(object: Partial<_172.MsgCreateValidator>): _172.MsgCreateValidator;
                fromAmino(object: _172.MsgCreateValidatorAmino): _172.MsgCreateValidator;
                toAmino(message: _172.MsgCreateValidator): _172.MsgCreateValidatorAmino;
                fromAminoMsg(object: _172.MsgCreateValidatorAminoMsg): _172.MsgCreateValidator;
                toAminoMsg(message: _172.MsgCreateValidator): _172.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _172.MsgCreateValidatorProtoMsg): _172.MsgCreateValidator;
                toProto(message: _172.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _172.MsgCreateValidator): _172.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _172.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _172.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_172.MsgCreateValidatorResponse>): _172.MsgCreateValidatorResponse;
                fromAmino(_: _172.MsgCreateValidatorResponseAmino): _172.MsgCreateValidatorResponse;
                toAmino(_: _172.MsgCreateValidatorResponse): _172.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _172.MsgCreateValidatorResponseAminoMsg): _172.MsgCreateValidatorResponse;
                toAminoMsg(message: _172.MsgCreateValidatorResponse): _172.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _172.MsgCreateValidatorResponseProtoMsg): _172.MsgCreateValidatorResponse;
                toProto(message: _172.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _172.MsgCreateValidatorResponse): _172.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _172.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.MsgEditValidator;
                fromPartial(object: Partial<_172.MsgEditValidator>): _172.MsgEditValidator;
                fromAmino(object: _172.MsgEditValidatorAmino): _172.MsgEditValidator;
                toAmino(message: _172.MsgEditValidator): _172.MsgEditValidatorAmino;
                fromAminoMsg(object: _172.MsgEditValidatorAminoMsg): _172.MsgEditValidator;
                toAminoMsg(message: _172.MsgEditValidator): _172.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _172.MsgEditValidatorProtoMsg): _172.MsgEditValidator;
                toProto(message: _172.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _172.MsgEditValidator): _172.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _172.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _172.MsgEditValidatorResponse;
                fromPartial(_: Partial<_172.MsgEditValidatorResponse>): _172.MsgEditValidatorResponse;
                fromAmino(_: _172.MsgEditValidatorResponseAmino): _172.MsgEditValidatorResponse;
                toAmino(_: _172.MsgEditValidatorResponse): _172.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _172.MsgEditValidatorResponseAminoMsg): _172.MsgEditValidatorResponse;
                toAminoMsg(message: _172.MsgEditValidatorResponse): _172.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _172.MsgEditValidatorResponseProtoMsg): _172.MsgEditValidatorResponse;
                toProto(message: _172.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _172.MsgEditValidatorResponse): _172.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _172.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.MsgDelegate;
                fromPartial(object: Partial<_172.MsgDelegate>): _172.MsgDelegate;
                fromAmino(object: _172.MsgDelegateAmino): _172.MsgDelegate;
                toAmino(message: _172.MsgDelegate): _172.MsgDelegateAmino;
                fromAminoMsg(object: _172.MsgDelegateAminoMsg): _172.MsgDelegate;
                toAminoMsg(message: _172.MsgDelegate): _172.MsgDelegateAminoMsg;
                fromProtoMsg(message: _172.MsgDelegateProtoMsg): _172.MsgDelegate;
                toProto(message: _172.MsgDelegate): Uint8Array;
                toProtoMsg(message: _172.MsgDelegate): _172.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _172.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _172.MsgDelegateResponse;
                fromPartial(_: Partial<_172.MsgDelegateResponse>): _172.MsgDelegateResponse;
                fromAmino(_: _172.MsgDelegateResponseAmino): _172.MsgDelegateResponse;
                toAmino(_: _172.MsgDelegateResponse): _172.MsgDelegateResponseAmino;
                fromAminoMsg(object: _172.MsgDelegateResponseAminoMsg): _172.MsgDelegateResponse;
                toAminoMsg(message: _172.MsgDelegateResponse): _172.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _172.MsgDelegateResponseProtoMsg): _172.MsgDelegateResponse;
                toProto(message: _172.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _172.MsgDelegateResponse): _172.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _172.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.MsgBeginRedelegate;
                fromPartial(object: Partial<_172.MsgBeginRedelegate>): _172.MsgBeginRedelegate;
                fromAmino(object: _172.MsgBeginRedelegateAmino): _172.MsgBeginRedelegate;
                toAmino(message: _172.MsgBeginRedelegate): _172.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _172.MsgBeginRedelegateAminoMsg): _172.MsgBeginRedelegate;
                toAminoMsg(message: _172.MsgBeginRedelegate): _172.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _172.MsgBeginRedelegateProtoMsg): _172.MsgBeginRedelegate;
                toProto(message: _172.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _172.MsgBeginRedelegate): _172.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _172.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_172.MsgBeginRedelegateResponse>): _172.MsgBeginRedelegateResponse;
                fromAmino(object: _172.MsgBeginRedelegateResponseAmino): _172.MsgBeginRedelegateResponse;
                toAmino(message: _172.MsgBeginRedelegateResponse): _172.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _172.MsgBeginRedelegateResponseAminoMsg): _172.MsgBeginRedelegateResponse;
                toAminoMsg(message: _172.MsgBeginRedelegateResponse): _172.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _172.MsgBeginRedelegateResponseProtoMsg): _172.MsgBeginRedelegateResponse;
                toProto(message: _172.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _172.MsgBeginRedelegateResponse): _172.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _172.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.MsgUndelegate;
                fromPartial(object: Partial<_172.MsgUndelegate>): _172.MsgUndelegate;
                fromAmino(object: _172.MsgUndelegateAmino): _172.MsgUndelegate;
                toAmino(message: _172.MsgUndelegate): _172.MsgUndelegateAmino;
                fromAminoMsg(object: _172.MsgUndelegateAminoMsg): _172.MsgUndelegate;
                toAminoMsg(message: _172.MsgUndelegate): _172.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _172.MsgUndelegateProtoMsg): _172.MsgUndelegate;
                toProto(message: _172.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _172.MsgUndelegate): _172.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _172.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.MsgUndelegateResponse;
                fromPartial(object: Partial<_172.MsgUndelegateResponse>): _172.MsgUndelegateResponse;
                fromAmino(object: _172.MsgUndelegateResponseAmino): _172.MsgUndelegateResponse;
                toAmino(message: _172.MsgUndelegateResponse): _172.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _172.MsgUndelegateResponseAminoMsg): _172.MsgUndelegateResponse;
                toAminoMsg(message: _172.MsgUndelegateResponse): _172.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _172.MsgUndelegateResponseProtoMsg): _172.MsgUndelegateResponse;
                toProto(message: _172.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _172.MsgUndelegateResponse): _172.MsgUndelegateResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _171.BondStatus;
            bondStatusToJSON(object: _171.BondStatus): string;
            BondStatus: typeof _171.BondStatus;
            BondStatusSDKType: typeof _171.BondStatus;
            BondStatusAmino: typeof _171.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _171.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.HistoricalInfo;
                fromPartial(object: Partial<_171.HistoricalInfo>): _171.HistoricalInfo;
                fromAmino(object: _171.HistoricalInfoAmino): _171.HistoricalInfo;
                toAmino(message: _171.HistoricalInfo): _171.HistoricalInfoAmino;
                fromAminoMsg(object: _171.HistoricalInfoAminoMsg): _171.HistoricalInfo;
                toAminoMsg(message: _171.HistoricalInfo): _171.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _171.HistoricalInfoProtoMsg): _171.HistoricalInfo;
                toProto(message: _171.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _171.HistoricalInfo): _171.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _171.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.CommissionRates;
                fromPartial(object: Partial<_171.CommissionRates>): _171.CommissionRates;
                fromAmino(object: _171.CommissionRatesAmino): _171.CommissionRates;
                toAmino(message: _171.CommissionRates): _171.CommissionRatesAmino;
                fromAminoMsg(object: _171.CommissionRatesAminoMsg): _171.CommissionRates;
                toAminoMsg(message: _171.CommissionRates): _171.CommissionRatesAminoMsg;
                fromProtoMsg(message: _171.CommissionRatesProtoMsg): _171.CommissionRates;
                toProto(message: _171.CommissionRates): Uint8Array;
                toProtoMsg(message: _171.CommissionRates): _171.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _171.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.Commission;
                fromPartial(object: Partial<_171.Commission>): _171.Commission;
                fromAmino(object: _171.CommissionAmino): _171.Commission;
                toAmino(message: _171.Commission): _171.CommissionAmino;
                fromAminoMsg(object: _171.CommissionAminoMsg): _171.Commission;
                toAminoMsg(message: _171.Commission): _171.CommissionAminoMsg;
                fromProtoMsg(message: _171.CommissionProtoMsg): _171.Commission;
                toProto(message: _171.Commission): Uint8Array;
                toProtoMsg(message: _171.Commission): _171.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _171.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.Description;
                fromPartial(object: Partial<_171.Description>): _171.Description;
                fromAmino(object: _171.DescriptionAmino): _171.Description;
                toAmino(message: _171.Description): _171.DescriptionAmino;
                fromAminoMsg(object: _171.DescriptionAminoMsg): _171.Description;
                toAminoMsg(message: _171.Description): _171.DescriptionAminoMsg;
                fromProtoMsg(message: _171.DescriptionProtoMsg): _171.Description;
                toProto(message: _171.Description): Uint8Array;
                toProtoMsg(message: _171.Description): _171.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _171.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.Validator;
                fromPartial(object: Partial<_171.Validator>): _171.Validator;
                fromAmino(object: _171.ValidatorAmino): _171.Validator;
                toAmino(message: _171.Validator): _171.ValidatorAmino;
                fromAminoMsg(object: _171.ValidatorAminoMsg): _171.Validator;
                toAminoMsg(message: _171.Validator): _171.ValidatorAminoMsg;
                fromProtoMsg(message: _171.ValidatorProtoMsg): _171.Validator;
                toProto(message: _171.Validator): Uint8Array;
                toProtoMsg(message: _171.Validator): _171.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _171.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.ValAddresses;
                fromPartial(object: Partial<_171.ValAddresses>): _171.ValAddresses;
                fromAmino(object: _171.ValAddressesAmino): _171.ValAddresses;
                toAmino(message: _171.ValAddresses): _171.ValAddressesAmino;
                fromAminoMsg(object: _171.ValAddressesAminoMsg): _171.ValAddresses;
                toAminoMsg(message: _171.ValAddresses): _171.ValAddressesAminoMsg;
                fromProtoMsg(message: _171.ValAddressesProtoMsg): _171.ValAddresses;
                toProto(message: _171.ValAddresses): Uint8Array;
                toProtoMsg(message: _171.ValAddresses): _171.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _171.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.DVPair;
                fromPartial(object: Partial<_171.DVPair>): _171.DVPair;
                fromAmino(object: _171.DVPairAmino): _171.DVPair;
                toAmino(message: _171.DVPair): _171.DVPairAmino;
                fromAminoMsg(object: _171.DVPairAminoMsg): _171.DVPair;
                toAminoMsg(message: _171.DVPair): _171.DVPairAminoMsg;
                fromProtoMsg(message: _171.DVPairProtoMsg): _171.DVPair;
                toProto(message: _171.DVPair): Uint8Array;
                toProtoMsg(message: _171.DVPair): _171.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _171.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.DVPairs;
                fromPartial(object: Partial<_171.DVPairs>): _171.DVPairs;
                fromAmino(object: _171.DVPairsAmino): _171.DVPairs;
                toAmino(message: _171.DVPairs): _171.DVPairsAmino;
                fromAminoMsg(object: _171.DVPairsAminoMsg): _171.DVPairs;
                toAminoMsg(message: _171.DVPairs): _171.DVPairsAminoMsg;
                fromProtoMsg(message: _171.DVPairsProtoMsg): _171.DVPairs;
                toProto(message: _171.DVPairs): Uint8Array;
                toProtoMsg(message: _171.DVPairs): _171.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _171.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.DVVTriplet;
                fromPartial(object: Partial<_171.DVVTriplet>): _171.DVVTriplet;
                fromAmino(object: _171.DVVTripletAmino): _171.DVVTriplet;
                toAmino(message: _171.DVVTriplet): _171.DVVTripletAmino;
                fromAminoMsg(object: _171.DVVTripletAminoMsg): _171.DVVTriplet;
                toAminoMsg(message: _171.DVVTriplet): _171.DVVTripletAminoMsg;
                fromProtoMsg(message: _171.DVVTripletProtoMsg): _171.DVVTriplet;
                toProto(message: _171.DVVTriplet): Uint8Array;
                toProtoMsg(message: _171.DVVTriplet): _171.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _171.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.DVVTriplets;
                fromPartial(object: Partial<_171.DVVTriplets>): _171.DVVTriplets;
                fromAmino(object: _171.DVVTripletsAmino): _171.DVVTriplets;
                toAmino(message: _171.DVVTriplets): _171.DVVTripletsAmino;
                fromAminoMsg(object: _171.DVVTripletsAminoMsg): _171.DVVTriplets;
                toAminoMsg(message: _171.DVVTriplets): _171.DVVTripletsAminoMsg;
                fromProtoMsg(message: _171.DVVTripletsProtoMsg): _171.DVVTriplets;
                toProto(message: _171.DVVTriplets): Uint8Array;
                toProtoMsg(message: _171.DVVTriplets): _171.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _171.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.Delegation;
                fromPartial(object: Partial<_171.Delegation>): _171.Delegation;
                fromAmino(object: _171.DelegationAmino): _171.Delegation;
                toAmino(message: _171.Delegation): _171.DelegationAmino;
                fromAminoMsg(object: _171.DelegationAminoMsg): _171.Delegation;
                toAminoMsg(message: _171.Delegation): _171.DelegationAminoMsg;
                fromProtoMsg(message: _171.DelegationProtoMsg): _171.Delegation;
                toProto(message: _171.Delegation): Uint8Array;
                toProtoMsg(message: _171.Delegation): _171.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _171.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.UnbondingDelegation;
                fromPartial(object: Partial<_171.UnbondingDelegation>): _171.UnbondingDelegation;
                fromAmino(object: _171.UnbondingDelegationAmino): _171.UnbondingDelegation;
                toAmino(message: _171.UnbondingDelegation): _171.UnbondingDelegationAmino;
                fromAminoMsg(object: _171.UnbondingDelegationAminoMsg): _171.UnbondingDelegation;
                toAminoMsg(message: _171.UnbondingDelegation): _171.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _171.UnbondingDelegationProtoMsg): _171.UnbondingDelegation;
                toProto(message: _171.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _171.UnbondingDelegation): _171.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _171.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.UnbondingDelegationEntry;
                fromPartial(object: Partial<_171.UnbondingDelegationEntry>): _171.UnbondingDelegationEntry;
                fromAmino(object: _171.UnbondingDelegationEntryAmino): _171.UnbondingDelegationEntry;
                toAmino(message: _171.UnbondingDelegationEntry): _171.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _171.UnbondingDelegationEntryAminoMsg): _171.UnbondingDelegationEntry;
                toAminoMsg(message: _171.UnbondingDelegationEntry): _171.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _171.UnbondingDelegationEntryProtoMsg): _171.UnbondingDelegationEntry;
                toProto(message: _171.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _171.UnbondingDelegationEntry): _171.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _171.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.RedelegationEntry;
                fromPartial(object: Partial<_171.RedelegationEntry>): _171.RedelegationEntry;
                fromAmino(object: _171.RedelegationEntryAmino): _171.RedelegationEntry;
                toAmino(message: _171.RedelegationEntry): _171.RedelegationEntryAmino;
                fromAminoMsg(object: _171.RedelegationEntryAminoMsg): _171.RedelegationEntry;
                toAminoMsg(message: _171.RedelegationEntry): _171.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _171.RedelegationEntryProtoMsg): _171.RedelegationEntry;
                toProto(message: _171.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _171.RedelegationEntry): _171.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _171.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.Redelegation;
                fromPartial(object: Partial<_171.Redelegation>): _171.Redelegation;
                fromAmino(object: _171.RedelegationAmino): _171.Redelegation;
                toAmino(message: _171.Redelegation): _171.RedelegationAmino;
                fromAminoMsg(object: _171.RedelegationAminoMsg): _171.Redelegation;
                toAminoMsg(message: _171.Redelegation): _171.RedelegationAminoMsg;
                fromProtoMsg(message: _171.RedelegationProtoMsg): _171.Redelegation;
                toProto(message: _171.Redelegation): Uint8Array;
                toProtoMsg(message: _171.Redelegation): _171.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _171.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.Params;
                fromPartial(object: Partial<_171.Params>): _171.Params;
                fromAmino(object: _171.ParamsAmino): _171.Params;
                toAmino(message: _171.Params): _171.ParamsAmino;
                fromAminoMsg(object: _171.ParamsAminoMsg): _171.Params;
                toAminoMsg(message: _171.Params): _171.ParamsAminoMsg;
                fromProtoMsg(message: _171.ParamsProtoMsg): _171.Params;
                toProto(message: _171.Params): Uint8Array;
                toProtoMsg(message: _171.Params): _171.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _171.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.DelegationResponse;
                fromPartial(object: Partial<_171.DelegationResponse>): _171.DelegationResponse;
                fromAmino(object: _171.DelegationResponseAmino): _171.DelegationResponse;
                toAmino(message: _171.DelegationResponse): _171.DelegationResponseAmino;
                fromAminoMsg(object: _171.DelegationResponseAminoMsg): _171.DelegationResponse;
                toAminoMsg(message: _171.DelegationResponse): _171.DelegationResponseAminoMsg;
                fromProtoMsg(message: _171.DelegationResponseProtoMsg): _171.DelegationResponse;
                toProto(message: _171.DelegationResponse): Uint8Array;
                toProtoMsg(message: _171.DelegationResponse): _171.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _171.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.RedelegationEntryResponse;
                fromPartial(object: Partial<_171.RedelegationEntryResponse>): _171.RedelegationEntryResponse;
                fromAmino(object: _171.RedelegationEntryResponseAmino): _171.RedelegationEntryResponse;
                toAmino(message: _171.RedelegationEntryResponse): _171.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _171.RedelegationEntryResponseAminoMsg): _171.RedelegationEntryResponse;
                toAminoMsg(message: _171.RedelegationEntryResponse): _171.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _171.RedelegationEntryResponseProtoMsg): _171.RedelegationEntryResponse;
                toProto(message: _171.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _171.RedelegationEntryResponse): _171.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _171.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.RedelegationResponse;
                fromPartial(object: Partial<_171.RedelegationResponse>): _171.RedelegationResponse;
                fromAmino(object: _171.RedelegationResponseAmino): _171.RedelegationResponse;
                toAmino(message: _171.RedelegationResponse): _171.RedelegationResponseAmino;
                fromAminoMsg(object: _171.RedelegationResponseAminoMsg): _171.RedelegationResponse;
                toAminoMsg(message: _171.RedelegationResponse): _171.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _171.RedelegationResponseProtoMsg): _171.RedelegationResponse;
                toProto(message: _171.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _171.RedelegationResponse): _171.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _171.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.Pool;
                fromPartial(object: Partial<_171.Pool>): _171.Pool;
                fromAmino(object: _171.PoolAmino): _171.Pool;
                toAmino(message: _171.Pool): _171.PoolAmino;
                fromAminoMsg(object: _171.PoolAminoMsg): _171.Pool;
                toAminoMsg(message: _171.Pool): _171.PoolAminoMsg;
                fromProtoMsg(message: _171.PoolProtoMsg): _171.Pool;
                toProto(message: _171.Pool): Uint8Array;
                toProtoMsg(message: _171.Pool): _171.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _170.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryValidatorsRequest;
                fromPartial(object: Partial<_170.QueryValidatorsRequest>): _170.QueryValidatorsRequest;
                fromAmino(object: _170.QueryValidatorsRequestAmino): _170.QueryValidatorsRequest;
                toAmino(message: _170.QueryValidatorsRequest): _170.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _170.QueryValidatorsRequestAminoMsg): _170.QueryValidatorsRequest;
                toAminoMsg(message: _170.QueryValidatorsRequest): _170.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _170.QueryValidatorsRequestProtoMsg): _170.QueryValidatorsRequest;
                toProto(message: _170.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _170.QueryValidatorsRequest): _170.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _170.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryValidatorsResponse;
                fromPartial(object: Partial<_170.QueryValidatorsResponse>): _170.QueryValidatorsResponse;
                fromAmino(object: _170.QueryValidatorsResponseAmino): _170.QueryValidatorsResponse;
                toAmino(message: _170.QueryValidatorsResponse): _170.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _170.QueryValidatorsResponseAminoMsg): _170.QueryValidatorsResponse;
                toAminoMsg(message: _170.QueryValidatorsResponse): _170.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _170.QueryValidatorsResponseProtoMsg): _170.QueryValidatorsResponse;
                toProto(message: _170.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _170.QueryValidatorsResponse): _170.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _170.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryValidatorRequest;
                fromPartial(object: Partial<_170.QueryValidatorRequest>): _170.QueryValidatorRequest;
                fromAmino(object: _170.QueryValidatorRequestAmino): _170.QueryValidatorRequest;
                toAmino(message: _170.QueryValidatorRequest): _170.QueryValidatorRequestAmino;
                fromAminoMsg(object: _170.QueryValidatorRequestAminoMsg): _170.QueryValidatorRequest;
                toAminoMsg(message: _170.QueryValidatorRequest): _170.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _170.QueryValidatorRequestProtoMsg): _170.QueryValidatorRequest;
                toProto(message: _170.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _170.QueryValidatorRequest): _170.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _170.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryValidatorResponse;
                fromPartial(object: Partial<_170.QueryValidatorResponse>): _170.QueryValidatorResponse;
                fromAmino(object: _170.QueryValidatorResponseAmino): _170.QueryValidatorResponse;
                toAmino(message: _170.QueryValidatorResponse): _170.QueryValidatorResponseAmino;
                fromAminoMsg(object: _170.QueryValidatorResponseAminoMsg): _170.QueryValidatorResponse;
                toAminoMsg(message: _170.QueryValidatorResponse): _170.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _170.QueryValidatorResponseProtoMsg): _170.QueryValidatorResponse;
                toProto(message: _170.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _170.QueryValidatorResponse): _170.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _170.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_170.QueryValidatorDelegationsRequest>): _170.QueryValidatorDelegationsRequest;
                fromAmino(object: _170.QueryValidatorDelegationsRequestAmino): _170.QueryValidatorDelegationsRequest;
                toAmino(message: _170.QueryValidatorDelegationsRequest): _170.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _170.QueryValidatorDelegationsRequestAminoMsg): _170.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _170.QueryValidatorDelegationsRequest): _170.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _170.QueryValidatorDelegationsRequestProtoMsg): _170.QueryValidatorDelegationsRequest;
                toProto(message: _170.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _170.QueryValidatorDelegationsRequest): _170.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _170.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_170.QueryValidatorDelegationsResponse>): _170.QueryValidatorDelegationsResponse;
                fromAmino(object: _170.QueryValidatorDelegationsResponseAmino): _170.QueryValidatorDelegationsResponse;
                toAmino(message: _170.QueryValidatorDelegationsResponse): _170.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _170.QueryValidatorDelegationsResponseAminoMsg): _170.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _170.QueryValidatorDelegationsResponse): _170.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _170.QueryValidatorDelegationsResponseProtoMsg): _170.QueryValidatorDelegationsResponse;
                toProto(message: _170.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _170.QueryValidatorDelegationsResponse): _170.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _170.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_170.QueryValidatorUnbondingDelegationsRequest>): _170.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _170.QueryValidatorUnbondingDelegationsRequestAmino): _170.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _170.QueryValidatorUnbondingDelegationsRequest): _170.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _170.QueryValidatorUnbondingDelegationsRequestAminoMsg): _170.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _170.QueryValidatorUnbondingDelegationsRequest): _170.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _170.QueryValidatorUnbondingDelegationsRequestProtoMsg): _170.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _170.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _170.QueryValidatorUnbondingDelegationsRequest): _170.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _170.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_170.QueryValidatorUnbondingDelegationsResponse>): _170.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _170.QueryValidatorUnbondingDelegationsResponseAmino): _170.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _170.QueryValidatorUnbondingDelegationsResponse): _170.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _170.QueryValidatorUnbondingDelegationsResponseAminoMsg): _170.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _170.QueryValidatorUnbondingDelegationsResponse): _170.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _170.QueryValidatorUnbondingDelegationsResponseProtoMsg): _170.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _170.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _170.QueryValidatorUnbondingDelegationsResponse): _170.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _170.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryDelegationRequest;
                fromPartial(object: Partial<_170.QueryDelegationRequest>): _170.QueryDelegationRequest;
                fromAmino(object: _170.QueryDelegationRequestAmino): _170.QueryDelegationRequest;
                toAmino(message: _170.QueryDelegationRequest): _170.QueryDelegationRequestAmino;
                fromAminoMsg(object: _170.QueryDelegationRequestAminoMsg): _170.QueryDelegationRequest;
                toAminoMsg(message: _170.QueryDelegationRequest): _170.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _170.QueryDelegationRequestProtoMsg): _170.QueryDelegationRequest;
                toProto(message: _170.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _170.QueryDelegationRequest): _170.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _170.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryDelegationResponse;
                fromPartial(object: Partial<_170.QueryDelegationResponse>): _170.QueryDelegationResponse;
                fromAmino(object: _170.QueryDelegationResponseAmino): _170.QueryDelegationResponse;
                toAmino(message: _170.QueryDelegationResponse): _170.QueryDelegationResponseAmino;
                fromAminoMsg(object: _170.QueryDelegationResponseAminoMsg): _170.QueryDelegationResponse;
                toAminoMsg(message: _170.QueryDelegationResponse): _170.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _170.QueryDelegationResponseProtoMsg): _170.QueryDelegationResponse;
                toProto(message: _170.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _170.QueryDelegationResponse): _170.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _170.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_170.QueryUnbondingDelegationRequest>): _170.QueryUnbondingDelegationRequest;
                fromAmino(object: _170.QueryUnbondingDelegationRequestAmino): _170.QueryUnbondingDelegationRequest;
                toAmino(message: _170.QueryUnbondingDelegationRequest): _170.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _170.QueryUnbondingDelegationRequestAminoMsg): _170.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _170.QueryUnbondingDelegationRequest): _170.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _170.QueryUnbondingDelegationRequestProtoMsg): _170.QueryUnbondingDelegationRequest;
                toProto(message: _170.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _170.QueryUnbondingDelegationRequest): _170.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _170.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_170.QueryUnbondingDelegationResponse>): _170.QueryUnbondingDelegationResponse;
                fromAmino(object: _170.QueryUnbondingDelegationResponseAmino): _170.QueryUnbondingDelegationResponse;
                toAmino(message: _170.QueryUnbondingDelegationResponse): _170.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _170.QueryUnbondingDelegationResponseAminoMsg): _170.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _170.QueryUnbondingDelegationResponse): _170.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _170.QueryUnbondingDelegationResponseProtoMsg): _170.QueryUnbondingDelegationResponse;
                toProto(message: _170.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _170.QueryUnbondingDelegationResponse): _170.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _170.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_170.QueryDelegatorDelegationsRequest>): _170.QueryDelegatorDelegationsRequest;
                fromAmino(object: _170.QueryDelegatorDelegationsRequestAmino): _170.QueryDelegatorDelegationsRequest;
                toAmino(message: _170.QueryDelegatorDelegationsRequest): _170.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _170.QueryDelegatorDelegationsRequestAminoMsg): _170.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _170.QueryDelegatorDelegationsRequest): _170.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _170.QueryDelegatorDelegationsRequestProtoMsg): _170.QueryDelegatorDelegationsRequest;
                toProto(message: _170.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _170.QueryDelegatorDelegationsRequest): _170.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _170.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_170.QueryDelegatorDelegationsResponse>): _170.QueryDelegatorDelegationsResponse;
                fromAmino(object: _170.QueryDelegatorDelegationsResponseAmino): _170.QueryDelegatorDelegationsResponse;
                toAmino(message: _170.QueryDelegatorDelegationsResponse): _170.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _170.QueryDelegatorDelegationsResponseAminoMsg): _170.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _170.QueryDelegatorDelegationsResponse): _170.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _170.QueryDelegatorDelegationsResponseProtoMsg): _170.QueryDelegatorDelegationsResponse;
                toProto(message: _170.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _170.QueryDelegatorDelegationsResponse): _170.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _170.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_170.QueryDelegatorUnbondingDelegationsRequest>): _170.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _170.QueryDelegatorUnbondingDelegationsRequestAmino): _170.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _170.QueryDelegatorUnbondingDelegationsRequest): _170.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _170.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _170.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _170.QueryDelegatorUnbondingDelegationsRequest): _170.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _170.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _170.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _170.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _170.QueryDelegatorUnbondingDelegationsRequest): _170.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _170.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_170.QueryDelegatorUnbondingDelegationsResponse>): _170.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _170.QueryDelegatorUnbondingDelegationsResponseAmino): _170.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _170.QueryDelegatorUnbondingDelegationsResponse): _170.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _170.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _170.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _170.QueryDelegatorUnbondingDelegationsResponse): _170.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _170.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _170.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _170.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _170.QueryDelegatorUnbondingDelegationsResponse): _170.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _170.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryRedelegationsRequest;
                fromPartial(object: Partial<_170.QueryRedelegationsRequest>): _170.QueryRedelegationsRequest;
                fromAmino(object: _170.QueryRedelegationsRequestAmino): _170.QueryRedelegationsRequest;
                toAmino(message: _170.QueryRedelegationsRequest): _170.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _170.QueryRedelegationsRequestAminoMsg): _170.QueryRedelegationsRequest;
                toAminoMsg(message: _170.QueryRedelegationsRequest): _170.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _170.QueryRedelegationsRequestProtoMsg): _170.QueryRedelegationsRequest;
                toProto(message: _170.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _170.QueryRedelegationsRequest): _170.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _170.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryRedelegationsResponse;
                fromPartial(object: Partial<_170.QueryRedelegationsResponse>): _170.QueryRedelegationsResponse;
                fromAmino(object: _170.QueryRedelegationsResponseAmino): _170.QueryRedelegationsResponse;
                toAmino(message: _170.QueryRedelegationsResponse): _170.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _170.QueryRedelegationsResponseAminoMsg): _170.QueryRedelegationsResponse;
                toAminoMsg(message: _170.QueryRedelegationsResponse): _170.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _170.QueryRedelegationsResponseProtoMsg): _170.QueryRedelegationsResponse;
                toProto(message: _170.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _170.QueryRedelegationsResponse): _170.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _170.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_170.QueryDelegatorValidatorsRequest>): _170.QueryDelegatorValidatorsRequest;
                fromAmino(object: _170.QueryDelegatorValidatorsRequestAmino): _170.QueryDelegatorValidatorsRequest;
                toAmino(message: _170.QueryDelegatorValidatorsRequest): _170.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _170.QueryDelegatorValidatorsRequestAminoMsg): _170.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _170.QueryDelegatorValidatorsRequest): _170.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _170.QueryDelegatorValidatorsRequestProtoMsg): _170.QueryDelegatorValidatorsRequest;
                toProto(message: _170.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _170.QueryDelegatorValidatorsRequest): _170.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _170.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_170.QueryDelegatorValidatorsResponse>): _170.QueryDelegatorValidatorsResponse;
                fromAmino(object: _170.QueryDelegatorValidatorsResponseAmino): _170.QueryDelegatorValidatorsResponse;
                toAmino(message: _170.QueryDelegatorValidatorsResponse): _170.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _170.QueryDelegatorValidatorsResponseAminoMsg): _170.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _170.QueryDelegatorValidatorsResponse): _170.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _170.QueryDelegatorValidatorsResponseProtoMsg): _170.QueryDelegatorValidatorsResponse;
                toProto(message: _170.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _170.QueryDelegatorValidatorsResponse): _170.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _170.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_170.QueryDelegatorValidatorRequest>): _170.QueryDelegatorValidatorRequest;
                fromAmino(object: _170.QueryDelegatorValidatorRequestAmino): _170.QueryDelegatorValidatorRequest;
                toAmino(message: _170.QueryDelegatorValidatorRequest): _170.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _170.QueryDelegatorValidatorRequestAminoMsg): _170.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _170.QueryDelegatorValidatorRequest): _170.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _170.QueryDelegatorValidatorRequestProtoMsg): _170.QueryDelegatorValidatorRequest;
                toProto(message: _170.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _170.QueryDelegatorValidatorRequest): _170.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _170.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_170.QueryDelegatorValidatorResponse>): _170.QueryDelegatorValidatorResponse;
                fromAmino(object: _170.QueryDelegatorValidatorResponseAmino): _170.QueryDelegatorValidatorResponse;
                toAmino(message: _170.QueryDelegatorValidatorResponse): _170.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _170.QueryDelegatorValidatorResponseAminoMsg): _170.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _170.QueryDelegatorValidatorResponse): _170.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _170.QueryDelegatorValidatorResponseProtoMsg): _170.QueryDelegatorValidatorResponse;
                toProto(message: _170.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _170.QueryDelegatorValidatorResponse): _170.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _170.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_170.QueryHistoricalInfoRequest>): _170.QueryHistoricalInfoRequest;
                fromAmino(object: _170.QueryHistoricalInfoRequestAmino): _170.QueryHistoricalInfoRequest;
                toAmino(message: _170.QueryHistoricalInfoRequest): _170.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _170.QueryHistoricalInfoRequestAminoMsg): _170.QueryHistoricalInfoRequest;
                toAminoMsg(message: _170.QueryHistoricalInfoRequest): _170.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _170.QueryHistoricalInfoRequestProtoMsg): _170.QueryHistoricalInfoRequest;
                toProto(message: _170.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _170.QueryHistoricalInfoRequest): _170.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _170.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_170.QueryHistoricalInfoResponse>): _170.QueryHistoricalInfoResponse;
                fromAmino(object: _170.QueryHistoricalInfoResponseAmino): _170.QueryHistoricalInfoResponse;
                toAmino(message: _170.QueryHistoricalInfoResponse): _170.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _170.QueryHistoricalInfoResponseAminoMsg): _170.QueryHistoricalInfoResponse;
                toAminoMsg(message: _170.QueryHistoricalInfoResponse): _170.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _170.QueryHistoricalInfoResponseProtoMsg): _170.QueryHistoricalInfoResponse;
                toProto(message: _170.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _170.QueryHistoricalInfoResponse): _170.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _170.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _170.QueryPoolRequest;
                fromPartial(_: Partial<_170.QueryPoolRequest>): _170.QueryPoolRequest;
                fromAmino(_: _170.QueryPoolRequestAmino): _170.QueryPoolRequest;
                toAmino(_: _170.QueryPoolRequest): _170.QueryPoolRequestAmino;
                fromAminoMsg(object: _170.QueryPoolRequestAminoMsg): _170.QueryPoolRequest;
                toAminoMsg(message: _170.QueryPoolRequest): _170.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _170.QueryPoolRequestProtoMsg): _170.QueryPoolRequest;
                toProto(message: _170.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _170.QueryPoolRequest): _170.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _170.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryPoolResponse;
                fromPartial(object: Partial<_170.QueryPoolResponse>): _170.QueryPoolResponse;
                fromAmino(object: _170.QueryPoolResponseAmino): _170.QueryPoolResponse;
                toAmino(message: _170.QueryPoolResponse): _170.QueryPoolResponseAmino;
                fromAminoMsg(object: _170.QueryPoolResponseAminoMsg): _170.QueryPoolResponse;
                toAminoMsg(message: _170.QueryPoolResponse): _170.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _170.QueryPoolResponseProtoMsg): _170.QueryPoolResponse;
                toProto(message: _170.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _170.QueryPoolResponse): _170.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _170.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _170.QueryParamsRequest;
                fromPartial(_: Partial<_170.QueryParamsRequest>): _170.QueryParamsRequest;
                fromAmino(_: _170.QueryParamsRequestAmino): _170.QueryParamsRequest;
                toAmino(_: _170.QueryParamsRequest): _170.QueryParamsRequestAmino;
                fromAminoMsg(object: _170.QueryParamsRequestAminoMsg): _170.QueryParamsRequest;
                toAminoMsg(message: _170.QueryParamsRequest): _170.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _170.QueryParamsRequestProtoMsg): _170.QueryParamsRequest;
                toProto(message: _170.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _170.QueryParamsRequest): _170.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _170.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryParamsResponse;
                fromPartial(object: Partial<_170.QueryParamsResponse>): _170.QueryParamsResponse;
                fromAmino(object: _170.QueryParamsResponseAmino): _170.QueryParamsResponse;
                toAmino(message: _170.QueryParamsResponse): _170.QueryParamsResponseAmino;
                fromAminoMsg(object: _170.QueryParamsResponseAminoMsg): _170.QueryParamsResponse;
                toAminoMsg(message: _170.QueryParamsResponse): _170.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _170.QueryParamsResponseProtoMsg): _170.QueryParamsResponse;
                toProto(message: _170.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _170.QueryParamsResponse): _170.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _169.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.GenesisState;
                fromPartial(object: Partial<_169.GenesisState>): _169.GenesisState;
                fromAmino(object: _169.GenesisStateAmino): _169.GenesisState;
                toAmino(message: _169.GenesisState): _169.GenesisStateAmino;
                fromAminoMsg(object: _169.GenesisStateAminoMsg): _169.GenesisState;
                toAminoMsg(message: _169.GenesisState): _169.GenesisStateAminoMsg;
                fromProtoMsg(message: _169.GenesisStateProtoMsg): _169.GenesisState;
                toProto(message: _169.GenesisState): Uint8Array;
                toProtoMsg(message: _169.GenesisState): _169.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _169.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.LastValidatorPower;
                fromPartial(object: Partial<_169.LastValidatorPower>): _169.LastValidatorPower;
                fromAmino(object: _169.LastValidatorPowerAmino): _169.LastValidatorPower;
                toAmino(message: _169.LastValidatorPower): _169.LastValidatorPowerAmino;
                fromAminoMsg(object: _169.LastValidatorPowerAminoMsg): _169.LastValidatorPower;
                toAminoMsg(message: _169.LastValidatorPower): _169.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _169.LastValidatorPowerProtoMsg): _169.LastValidatorPower;
                toProto(message: _169.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _169.LastValidatorPower): _169.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _168.AuthorizationType;
            authorizationTypeToJSON(object: _168.AuthorizationType): string;
            AuthorizationType: typeof _168.AuthorizationType;
            AuthorizationTypeSDKType: typeof _168.AuthorizationType;
            AuthorizationTypeAmino: typeof _168.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _168.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _168.StakeAuthorization;
                fromPartial(object: Partial<_168.StakeAuthorization>): _168.StakeAuthorization;
                fromAmino(object: _168.StakeAuthorizationAmino): _168.StakeAuthorization;
                toAmino(message: _168.StakeAuthorization): _168.StakeAuthorizationAmino;
                fromAminoMsg(object: _168.StakeAuthorizationAminoMsg): _168.StakeAuthorization;
                toAminoMsg(message: _168.StakeAuthorization): _168.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _168.StakeAuthorizationProtoMsg): _168.StakeAuthorization;
                toProto(message: _168.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _168.StakeAuthorization): _168.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _168.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _168.StakeAuthorization_Validators;
                fromPartial(object: Partial<_168.StakeAuthorization_Validators>): _168.StakeAuthorization_Validators;
                fromAmino(object: _168.StakeAuthorization_ValidatorsAmino): _168.StakeAuthorization_Validators;
                toAmino(message: _168.StakeAuthorization_Validators): _168.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _168.StakeAuthorization_ValidatorsAminoMsg): _168.StakeAuthorization_Validators;
                toAminoMsg(message: _168.StakeAuthorization_Validators): _168.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _168.StakeAuthorization_ValidatorsProtoMsg): _168.StakeAuthorization_Validators;
                toProto(message: _168.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _168.StakeAuthorization_Validators): _168.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _173.SignMode;
                signModeToJSON(object: _173.SignMode): string;
                SignMode: typeof _173.SignMode;
                SignModeSDKType: typeof _173.SignMode;
                SignModeAmino: typeof _173.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _173.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _173.SignatureDescriptors;
                    fromPartial(object: Partial<_173.SignatureDescriptors>): _173.SignatureDescriptors;
                    fromAmino(object: _173.SignatureDescriptorsAmino): _173.SignatureDescriptors;
                    toAmino(message: _173.SignatureDescriptors): _173.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _173.SignatureDescriptorsAminoMsg): _173.SignatureDescriptors;
                    toAminoMsg(message: _173.SignatureDescriptors): _173.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _173.SignatureDescriptorsProtoMsg): _173.SignatureDescriptors;
                    toProto(message: _173.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _173.SignatureDescriptors): _173.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _173.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _173.SignatureDescriptor;
                    fromPartial(object: Partial<_173.SignatureDescriptor>): _173.SignatureDescriptor;
                    fromAmino(object: _173.SignatureDescriptorAmino): _173.SignatureDescriptor;
                    toAmino(message: _173.SignatureDescriptor): _173.SignatureDescriptorAmino;
                    fromAminoMsg(object: _173.SignatureDescriptorAminoMsg): _173.SignatureDescriptor;
                    toAminoMsg(message: _173.SignatureDescriptor): _173.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _173.SignatureDescriptorProtoMsg): _173.SignatureDescriptor;
                    toProto(message: _173.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _173.SignatureDescriptor): _173.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _173.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _173.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_173.SignatureDescriptor_Data>): _173.SignatureDescriptor_Data;
                    fromAmino(object: _173.SignatureDescriptor_DataAmino): _173.SignatureDescriptor_Data;
                    toAmino(message: _173.SignatureDescriptor_Data): _173.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _173.SignatureDescriptor_DataAminoMsg): _173.SignatureDescriptor_Data;
                    toAminoMsg(message: _173.SignatureDescriptor_Data): _173.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _173.SignatureDescriptor_DataProtoMsg): _173.SignatureDescriptor_Data;
                    toProto(message: _173.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _173.SignatureDescriptor_Data): _173.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _173.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _173.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_173.SignatureDescriptor_Data_Single>): _173.SignatureDescriptor_Data_Single;
                    fromAmino(object: _173.SignatureDescriptor_Data_SingleAmino): _173.SignatureDescriptor_Data_Single;
                    toAmino(message: _173.SignatureDescriptor_Data_Single): _173.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _173.SignatureDescriptor_Data_SingleAminoMsg): _173.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _173.SignatureDescriptor_Data_Single): _173.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _173.SignatureDescriptor_Data_SingleProtoMsg): _173.SignatureDescriptor_Data_Single;
                    toProto(message: _173.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _173.SignatureDescriptor_Data_Single): _173.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _173.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _173.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_173.SignatureDescriptor_Data_Multi>): _173.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _173.SignatureDescriptor_Data_MultiAmino): _173.SignatureDescriptor_Data_Multi;
                    toAmino(message: _173.SignatureDescriptor_Data_Multi): _173.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _173.SignatureDescriptor_Data_MultiAminoMsg): _173.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _173.SignatureDescriptor_Data_Multi): _173.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _173.SignatureDescriptor_Data_MultiProtoMsg): _173.SignatureDescriptor_Data_Multi;
                    toProto(message: _173.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _173.SignatureDescriptor_Data_Multi): _173.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _333.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _174.SimulateRequest): Promise<_174.SimulateResponse>;
                getTx(request: _174.GetTxRequest): Promise<_174.GetTxResponse>;
                broadcastTx(request: _174.BroadcastTxRequest): Promise<_174.BroadcastTxResponse>;
                getTxsEvent(request: _174.GetTxsEventRequest): Promise<_174.GetTxsEventResponse>;
                getBlockWithTxs(request: _174.GetBlockWithTxsRequest): Promise<_174.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _318.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _175.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _175.Tx;
                fromPartial(object: Partial<_175.Tx>): _175.Tx;
                fromAmino(object: _175.TxAmino): _175.Tx;
                toAmino(message: _175.Tx): _175.TxAmino;
                fromAminoMsg(object: _175.TxAminoMsg): _175.Tx;
                toAminoMsg(message: _175.Tx): _175.TxAminoMsg;
                fromProtoMsg(message: _175.TxProtoMsg): _175.Tx;
                toProto(message: _175.Tx): Uint8Array;
                toProtoMsg(message: _175.Tx): _175.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _175.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _175.TxRaw;
                fromPartial(object: Partial<_175.TxRaw>): _175.TxRaw;
                fromAmino(object: _175.TxRawAmino): _175.TxRaw;
                toAmino(message: _175.TxRaw): _175.TxRawAmino;
                fromAminoMsg(object: _175.TxRawAminoMsg): _175.TxRaw;
                toAminoMsg(message: _175.TxRaw): _175.TxRawAminoMsg;
                fromProtoMsg(message: _175.TxRawProtoMsg): _175.TxRaw;
                toProto(message: _175.TxRaw): Uint8Array;
                toProtoMsg(message: _175.TxRaw): _175.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _175.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _175.SignDoc;
                fromPartial(object: Partial<_175.SignDoc>): _175.SignDoc;
                fromAmino(object: _175.SignDocAmino): _175.SignDoc;
                toAmino(message: _175.SignDoc): _175.SignDocAmino;
                fromAminoMsg(object: _175.SignDocAminoMsg): _175.SignDoc;
                toAminoMsg(message: _175.SignDoc): _175.SignDocAminoMsg;
                fromProtoMsg(message: _175.SignDocProtoMsg): _175.SignDoc;
                toProto(message: _175.SignDoc): Uint8Array;
                toProtoMsg(message: _175.SignDoc): _175.SignDocProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _175.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _175.TxBody;
                fromPartial(object: Partial<_175.TxBody>): _175.TxBody;
                fromAmino(object: _175.TxBodyAmino): _175.TxBody;
                toAmino(message: _175.TxBody): _175.TxBodyAmino;
                fromAminoMsg(object: _175.TxBodyAminoMsg): _175.TxBody;
                toAminoMsg(message: _175.TxBody): _175.TxBodyAminoMsg;
                fromProtoMsg(message: _175.TxBodyProtoMsg): _175.TxBody;
                toProto(message: _175.TxBody): Uint8Array;
                toProtoMsg(message: _175.TxBody): _175.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _175.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _175.AuthInfo;
                fromPartial(object: Partial<_175.AuthInfo>): _175.AuthInfo;
                fromAmino(object: _175.AuthInfoAmino): _175.AuthInfo;
                toAmino(message: _175.AuthInfo): _175.AuthInfoAmino;
                fromAminoMsg(object: _175.AuthInfoAminoMsg): _175.AuthInfo;
                toAminoMsg(message: _175.AuthInfo): _175.AuthInfoAminoMsg;
                fromProtoMsg(message: _175.AuthInfoProtoMsg): _175.AuthInfo;
                toProto(message: _175.AuthInfo): Uint8Array;
                toProtoMsg(message: _175.AuthInfo): _175.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _175.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _175.SignerInfo;
                fromPartial(object: Partial<_175.SignerInfo>): _175.SignerInfo;
                fromAmino(object: _175.SignerInfoAmino): _175.SignerInfo;
                toAmino(message: _175.SignerInfo): _175.SignerInfoAmino;
                fromAminoMsg(object: _175.SignerInfoAminoMsg): _175.SignerInfo;
                toAminoMsg(message: _175.SignerInfo): _175.SignerInfoAminoMsg;
                fromProtoMsg(message: _175.SignerInfoProtoMsg): _175.SignerInfo;
                toProto(message: _175.SignerInfo): Uint8Array;
                toProtoMsg(message: _175.SignerInfo): _175.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _175.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _175.ModeInfo;
                fromPartial(object: Partial<_175.ModeInfo>): _175.ModeInfo;
                fromAmino(object: _175.ModeInfoAmino): _175.ModeInfo;
                toAmino(message: _175.ModeInfo): _175.ModeInfoAmino;
                fromAminoMsg(object: _175.ModeInfoAminoMsg): _175.ModeInfo;
                toAminoMsg(message: _175.ModeInfo): _175.ModeInfoAminoMsg;
                fromProtoMsg(message: _175.ModeInfoProtoMsg): _175.ModeInfo;
                toProto(message: _175.ModeInfo): Uint8Array;
                toProtoMsg(message: _175.ModeInfo): _175.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _175.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _175.ModeInfo_Single;
                fromPartial(object: Partial<_175.ModeInfo_Single>): _175.ModeInfo_Single;
                fromAmino(object: _175.ModeInfo_SingleAmino): _175.ModeInfo_Single;
                toAmino(message: _175.ModeInfo_Single): _175.ModeInfo_SingleAmino;
                fromAminoMsg(object: _175.ModeInfo_SingleAminoMsg): _175.ModeInfo_Single;
                toAminoMsg(message: _175.ModeInfo_Single): _175.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _175.ModeInfo_SingleProtoMsg): _175.ModeInfo_Single;
                toProto(message: _175.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _175.ModeInfo_Single): _175.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _175.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _175.ModeInfo_Multi;
                fromPartial(object: Partial<_175.ModeInfo_Multi>): _175.ModeInfo_Multi;
                fromAmino(object: _175.ModeInfo_MultiAmino): _175.ModeInfo_Multi;
                toAmino(message: _175.ModeInfo_Multi): _175.ModeInfo_MultiAmino;
                fromAminoMsg(object: _175.ModeInfo_MultiAminoMsg): _175.ModeInfo_Multi;
                toAminoMsg(message: _175.ModeInfo_Multi): _175.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _175.ModeInfo_MultiProtoMsg): _175.ModeInfo_Multi;
                toProto(message: _175.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _175.ModeInfo_Multi): _175.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _175.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _175.Fee;
                fromPartial(object: Partial<_175.Fee>): _175.Fee;
                fromAmino(object: _175.FeeAmino): _175.Fee;
                toAmino(message: _175.Fee): _175.FeeAmino;
                fromAminoMsg(object: _175.FeeAminoMsg): _175.Fee;
                toAminoMsg(message: _175.Fee): _175.FeeAminoMsg;
                fromProtoMsg(message: _175.FeeProtoMsg): _175.Fee;
                toProto(message: _175.Fee): Uint8Array;
                toProtoMsg(message: _175.Fee): _175.FeeProtoMsg;
            };
            orderByFromJSON(object: any): _174.OrderBy;
            orderByToJSON(object: _174.OrderBy): string;
            broadcastModeFromJSON(object: any): _174.BroadcastMode;
            broadcastModeToJSON(object: _174.BroadcastMode): string;
            OrderBy: typeof _174.OrderBy;
            OrderBySDKType: typeof _174.OrderBy;
            OrderByAmino: typeof _174.OrderBy;
            BroadcastMode: typeof _174.BroadcastMode;
            BroadcastModeSDKType: typeof _174.BroadcastMode;
            BroadcastModeAmino: typeof _174.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _174.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _174.GetTxsEventRequest;
                fromPartial(object: Partial<_174.GetTxsEventRequest>): _174.GetTxsEventRequest;
                fromAmino(object: _174.GetTxsEventRequestAmino): _174.GetTxsEventRequest;
                toAmino(message: _174.GetTxsEventRequest): _174.GetTxsEventRequestAmino;
                fromAminoMsg(object: _174.GetTxsEventRequestAminoMsg): _174.GetTxsEventRequest;
                toAminoMsg(message: _174.GetTxsEventRequest): _174.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _174.GetTxsEventRequestProtoMsg): _174.GetTxsEventRequest;
                toProto(message: _174.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _174.GetTxsEventRequest): _174.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _174.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _174.GetTxsEventResponse;
                fromPartial(object: Partial<_174.GetTxsEventResponse>): _174.GetTxsEventResponse;
                fromAmino(object: _174.GetTxsEventResponseAmino): _174.GetTxsEventResponse;
                toAmino(message: _174.GetTxsEventResponse): _174.GetTxsEventResponseAmino;
                fromAminoMsg(object: _174.GetTxsEventResponseAminoMsg): _174.GetTxsEventResponse;
                toAminoMsg(message: _174.GetTxsEventResponse): _174.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _174.GetTxsEventResponseProtoMsg): _174.GetTxsEventResponse;
                toProto(message: _174.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _174.GetTxsEventResponse): _174.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _174.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _174.BroadcastTxRequest;
                fromPartial(object: Partial<_174.BroadcastTxRequest>): _174.BroadcastTxRequest;
                fromAmino(object: _174.BroadcastTxRequestAmino): _174.BroadcastTxRequest;
                toAmino(message: _174.BroadcastTxRequest): _174.BroadcastTxRequestAmino;
                fromAminoMsg(object: _174.BroadcastTxRequestAminoMsg): _174.BroadcastTxRequest;
                toAminoMsg(message: _174.BroadcastTxRequest): _174.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _174.BroadcastTxRequestProtoMsg): _174.BroadcastTxRequest;
                toProto(message: _174.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _174.BroadcastTxRequest): _174.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _174.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _174.BroadcastTxResponse;
                fromPartial(object: Partial<_174.BroadcastTxResponse>): _174.BroadcastTxResponse;
                fromAmino(object: _174.BroadcastTxResponseAmino): _174.BroadcastTxResponse;
                toAmino(message: _174.BroadcastTxResponse): _174.BroadcastTxResponseAmino;
                fromAminoMsg(object: _174.BroadcastTxResponseAminoMsg): _174.BroadcastTxResponse;
                toAminoMsg(message: _174.BroadcastTxResponse): _174.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _174.BroadcastTxResponseProtoMsg): _174.BroadcastTxResponse;
                toProto(message: _174.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _174.BroadcastTxResponse): _174.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _174.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _174.SimulateRequest;
                fromPartial(object: Partial<_174.SimulateRequest>): _174.SimulateRequest;
                fromAmino(object: _174.SimulateRequestAmino): _174.SimulateRequest;
                toAmino(message: _174.SimulateRequest): _174.SimulateRequestAmino;
                fromAminoMsg(object: _174.SimulateRequestAminoMsg): _174.SimulateRequest;
                toAminoMsg(message: _174.SimulateRequest): _174.SimulateRequestAminoMsg;
                fromProtoMsg(message: _174.SimulateRequestProtoMsg): _174.SimulateRequest;
                toProto(message: _174.SimulateRequest): Uint8Array;
                toProtoMsg(message: _174.SimulateRequest): _174.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _174.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _174.SimulateResponse;
                fromPartial(object: Partial<_174.SimulateResponse>): _174.SimulateResponse;
                fromAmino(object: _174.SimulateResponseAmino): _174.SimulateResponse;
                toAmino(message: _174.SimulateResponse): _174.SimulateResponseAmino;
                fromAminoMsg(object: _174.SimulateResponseAminoMsg): _174.SimulateResponse;
                toAminoMsg(message: _174.SimulateResponse): _174.SimulateResponseAminoMsg;
                fromProtoMsg(message: _174.SimulateResponseProtoMsg): _174.SimulateResponse;
                toProto(message: _174.SimulateResponse): Uint8Array;
                toProtoMsg(message: _174.SimulateResponse): _174.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _174.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _174.GetTxRequest;
                fromPartial(object: Partial<_174.GetTxRequest>): _174.GetTxRequest;
                fromAmino(object: _174.GetTxRequestAmino): _174.GetTxRequest;
                toAmino(message: _174.GetTxRequest): _174.GetTxRequestAmino;
                fromAminoMsg(object: _174.GetTxRequestAminoMsg): _174.GetTxRequest;
                toAminoMsg(message: _174.GetTxRequest): _174.GetTxRequestAminoMsg;
                fromProtoMsg(message: _174.GetTxRequestProtoMsg): _174.GetTxRequest;
                toProto(message: _174.GetTxRequest): Uint8Array;
                toProtoMsg(message: _174.GetTxRequest): _174.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _174.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _174.GetTxResponse;
                fromPartial(object: Partial<_174.GetTxResponse>): _174.GetTxResponse;
                fromAmino(object: _174.GetTxResponseAmino): _174.GetTxResponse;
                toAmino(message: _174.GetTxResponse): _174.GetTxResponseAmino;
                fromAminoMsg(object: _174.GetTxResponseAminoMsg): _174.GetTxResponse;
                toAminoMsg(message: _174.GetTxResponse): _174.GetTxResponseAminoMsg;
                fromProtoMsg(message: _174.GetTxResponseProtoMsg): _174.GetTxResponse;
                toProto(message: _174.GetTxResponse): Uint8Array;
                toProtoMsg(message: _174.GetTxResponse): _174.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _174.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _174.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_174.GetBlockWithTxsRequest>): _174.GetBlockWithTxsRequest;
                fromAmino(object: _174.GetBlockWithTxsRequestAmino): _174.GetBlockWithTxsRequest;
                toAmino(message: _174.GetBlockWithTxsRequest): _174.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _174.GetBlockWithTxsRequestAminoMsg): _174.GetBlockWithTxsRequest;
                toAminoMsg(message: _174.GetBlockWithTxsRequest): _174.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _174.GetBlockWithTxsRequestProtoMsg): _174.GetBlockWithTxsRequest;
                toProto(message: _174.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _174.GetBlockWithTxsRequest): _174.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _174.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _174.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_174.GetBlockWithTxsResponse>): _174.GetBlockWithTxsResponse;
                fromAmino(object: _174.GetBlockWithTxsResponseAmino): _174.GetBlockWithTxsResponse;
                toAmino(message: _174.GetBlockWithTxsResponse): _174.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _174.GetBlockWithTxsResponseAminoMsg): _174.GetBlockWithTxsResponse;
                toAminoMsg(message: _174.GetBlockWithTxsResponse): _174.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _174.GetBlockWithTxsResponseProtoMsg): _174.GetBlockWithTxsResponse;
                toProto(message: _174.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _174.GetBlockWithTxsResponse): _174.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _334.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _176.QueryCurrentPlanRequest): Promise<_176.QueryCurrentPlanResponse>;
                appliedPlan(request: _176.QueryAppliedPlanRequest): Promise<_176.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _176.QueryUpgradedConsensusStateRequest): Promise<_176.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _176.QueryModuleVersionsRequest): Promise<_176.QueryModuleVersionsResponse>;
            };
            LCDQueryClient: typeof _319.LCDQueryClient;
            Plan: {
                typeUrl: string;
                encode(message: _177.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _177.Plan;
                fromPartial(object: Partial<_177.Plan>): _177.Plan;
                fromAmino(object: _177.PlanAmino): _177.Plan;
                toAmino(message: _177.Plan): _177.PlanAmino;
                fromAminoMsg(object: _177.PlanAminoMsg): _177.Plan;
                toAminoMsg(message: _177.Plan): _177.PlanAminoMsg;
                fromProtoMsg(message: _177.PlanProtoMsg): _177.Plan;
                toProto(message: _177.Plan): Uint8Array;
                toProtoMsg(message: _177.Plan): _177.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _177.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _177.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_177.SoftwareUpgradeProposal>): _177.SoftwareUpgradeProposal;
                fromAmino(object: _177.SoftwareUpgradeProposalAmino): _177.SoftwareUpgradeProposal;
                toAmino(message: _177.SoftwareUpgradeProposal): _177.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _177.SoftwareUpgradeProposalAminoMsg): _177.SoftwareUpgradeProposal;
                toAminoMsg(message: _177.SoftwareUpgradeProposal): _177.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _177.SoftwareUpgradeProposalProtoMsg): _177.SoftwareUpgradeProposal;
                toProto(message: _177.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _177.SoftwareUpgradeProposal): _177.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _177.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _177.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_177.CancelSoftwareUpgradeProposal>): _177.CancelSoftwareUpgradeProposal;
                fromAmino(object: _177.CancelSoftwareUpgradeProposalAmino): _177.CancelSoftwareUpgradeProposal;
                toAmino(message: _177.CancelSoftwareUpgradeProposal): _177.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _177.CancelSoftwareUpgradeProposalAminoMsg): _177.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _177.CancelSoftwareUpgradeProposal): _177.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _177.CancelSoftwareUpgradeProposalProtoMsg): _177.CancelSoftwareUpgradeProposal;
                toProto(message: _177.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _177.CancelSoftwareUpgradeProposal): _177.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _177.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _177.ModuleVersion;
                fromPartial(object: Partial<_177.ModuleVersion>): _177.ModuleVersion;
                fromAmino(object: _177.ModuleVersionAmino): _177.ModuleVersion;
                toAmino(message: _177.ModuleVersion): _177.ModuleVersionAmino;
                fromAminoMsg(object: _177.ModuleVersionAminoMsg): _177.ModuleVersion;
                toAminoMsg(message: _177.ModuleVersion): _177.ModuleVersionAminoMsg;
                fromProtoMsg(message: _177.ModuleVersionProtoMsg): _177.ModuleVersion;
                toProto(message: _177.ModuleVersion): Uint8Array;
                toProtoMsg(message: _177.ModuleVersion): _177.ModuleVersionProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _176.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _176.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_176.QueryCurrentPlanRequest>): _176.QueryCurrentPlanRequest;
                fromAmino(_: _176.QueryCurrentPlanRequestAmino): _176.QueryCurrentPlanRequest;
                toAmino(_: _176.QueryCurrentPlanRequest): _176.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _176.QueryCurrentPlanRequestAminoMsg): _176.QueryCurrentPlanRequest;
                toAminoMsg(message: _176.QueryCurrentPlanRequest): _176.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _176.QueryCurrentPlanRequestProtoMsg): _176.QueryCurrentPlanRequest;
                toProto(message: _176.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _176.QueryCurrentPlanRequest): _176.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _176.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _176.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_176.QueryCurrentPlanResponse>): _176.QueryCurrentPlanResponse;
                fromAmino(object: _176.QueryCurrentPlanResponseAmino): _176.QueryCurrentPlanResponse;
                toAmino(message: _176.QueryCurrentPlanResponse): _176.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _176.QueryCurrentPlanResponseAminoMsg): _176.QueryCurrentPlanResponse;
                toAminoMsg(message: _176.QueryCurrentPlanResponse): _176.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _176.QueryCurrentPlanResponseProtoMsg): _176.QueryCurrentPlanResponse;
                toProto(message: _176.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _176.QueryCurrentPlanResponse): _176.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _176.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _176.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_176.QueryAppliedPlanRequest>): _176.QueryAppliedPlanRequest;
                fromAmino(object: _176.QueryAppliedPlanRequestAmino): _176.QueryAppliedPlanRequest;
                toAmino(message: _176.QueryAppliedPlanRequest): _176.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _176.QueryAppliedPlanRequestAminoMsg): _176.QueryAppliedPlanRequest;
                toAminoMsg(message: _176.QueryAppliedPlanRequest): _176.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _176.QueryAppliedPlanRequestProtoMsg): _176.QueryAppliedPlanRequest;
                toProto(message: _176.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _176.QueryAppliedPlanRequest): _176.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _176.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _176.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_176.QueryAppliedPlanResponse>): _176.QueryAppliedPlanResponse;
                fromAmino(object: _176.QueryAppliedPlanResponseAmino): _176.QueryAppliedPlanResponse;
                toAmino(message: _176.QueryAppliedPlanResponse): _176.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _176.QueryAppliedPlanResponseAminoMsg): _176.QueryAppliedPlanResponse;
                toAminoMsg(message: _176.QueryAppliedPlanResponse): _176.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _176.QueryAppliedPlanResponseProtoMsg): _176.QueryAppliedPlanResponse;
                toProto(message: _176.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _176.QueryAppliedPlanResponse): _176.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _176.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _176.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_176.QueryUpgradedConsensusStateRequest>): _176.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _176.QueryUpgradedConsensusStateRequestAmino): _176.QueryUpgradedConsensusStateRequest;
                toAmino(message: _176.QueryUpgradedConsensusStateRequest): _176.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _176.QueryUpgradedConsensusStateRequestAminoMsg): _176.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _176.QueryUpgradedConsensusStateRequest): _176.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _176.QueryUpgradedConsensusStateRequestProtoMsg): _176.QueryUpgradedConsensusStateRequest;
                toProto(message: _176.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _176.QueryUpgradedConsensusStateRequest): _176.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _176.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _176.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_176.QueryUpgradedConsensusStateResponse>): _176.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _176.QueryUpgradedConsensusStateResponseAmino): _176.QueryUpgradedConsensusStateResponse;
                toAmino(message: _176.QueryUpgradedConsensusStateResponse): _176.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _176.QueryUpgradedConsensusStateResponseAminoMsg): _176.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _176.QueryUpgradedConsensusStateResponse): _176.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _176.QueryUpgradedConsensusStateResponseProtoMsg): _176.QueryUpgradedConsensusStateResponse;
                toProto(message: _176.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _176.QueryUpgradedConsensusStateResponse): _176.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _176.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _176.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_176.QueryModuleVersionsRequest>): _176.QueryModuleVersionsRequest;
                fromAmino(object: _176.QueryModuleVersionsRequestAmino): _176.QueryModuleVersionsRequest;
                toAmino(message: _176.QueryModuleVersionsRequest): _176.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _176.QueryModuleVersionsRequestAminoMsg): _176.QueryModuleVersionsRequest;
                toAminoMsg(message: _176.QueryModuleVersionsRequest): _176.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _176.QueryModuleVersionsRequestProtoMsg): _176.QueryModuleVersionsRequest;
                toProto(message: _176.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _176.QueryModuleVersionsRequest): _176.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _176.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _176.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_176.QueryModuleVersionsResponse>): _176.QueryModuleVersionsResponse;
                fromAmino(object: _176.QueryModuleVersionsResponseAmino): _176.QueryModuleVersionsResponse;
                toAmino(message: _176.QueryModuleVersionsResponse): _176.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _176.QueryModuleVersionsResponseAminoMsg): _176.QueryModuleVersionsResponse;
                toAminoMsg(message: _176.QueryModuleVersionsResponse): _176.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _176.QueryModuleVersionsResponseProtoMsg): _176.QueryModuleVersionsResponse;
                toProto(message: _176.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _176.QueryModuleVersionsResponse): _176.QueryModuleVersionsResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _344.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _178.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _178.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _178.MsgCreateVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _178.MsgCreateVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _178.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _178.MsgCreateVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _178.MsgCreateVestingAccount) => _178.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _178.MsgCreateVestingAccountAmino) => _178.MsgCreateVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _179.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _179.BaseVestingAccount;
                fromPartial(object: Partial<_179.BaseVestingAccount>): _179.BaseVestingAccount;
                fromAmino(object: _179.BaseVestingAccountAmino): _179.BaseVestingAccount;
                toAmino(message: _179.BaseVestingAccount): _179.BaseVestingAccountAmino;
                fromAminoMsg(object: _179.BaseVestingAccountAminoMsg): _179.BaseVestingAccount;
                toAminoMsg(message: _179.BaseVestingAccount): _179.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _179.BaseVestingAccountProtoMsg): _179.BaseVestingAccount;
                toProto(message: _179.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _179.BaseVestingAccount): _179.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _179.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _179.ContinuousVestingAccount;
                fromPartial(object: Partial<_179.ContinuousVestingAccount>): _179.ContinuousVestingAccount;
                fromAmino(object: _179.ContinuousVestingAccountAmino): _179.ContinuousVestingAccount;
                toAmino(message: _179.ContinuousVestingAccount): _179.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _179.ContinuousVestingAccountAminoMsg): _179.ContinuousVestingAccount;
                toAminoMsg(message: _179.ContinuousVestingAccount): _179.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _179.ContinuousVestingAccountProtoMsg): _179.ContinuousVestingAccount;
                toProto(message: _179.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _179.ContinuousVestingAccount): _179.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _179.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _179.DelayedVestingAccount;
                fromPartial(object: Partial<_179.DelayedVestingAccount>): _179.DelayedVestingAccount;
                fromAmino(object: _179.DelayedVestingAccountAmino): _179.DelayedVestingAccount;
                toAmino(message: _179.DelayedVestingAccount): _179.DelayedVestingAccountAmino;
                fromAminoMsg(object: _179.DelayedVestingAccountAminoMsg): _179.DelayedVestingAccount;
                toAminoMsg(message: _179.DelayedVestingAccount): _179.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _179.DelayedVestingAccountProtoMsg): _179.DelayedVestingAccount;
                toProto(message: _179.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _179.DelayedVestingAccount): _179.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _179.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _179.Period;
                fromPartial(object: Partial<_179.Period>): _179.Period;
                fromAmino(object: _179.PeriodAmino): _179.Period;
                toAmino(message: _179.Period): _179.PeriodAmino;
                fromAminoMsg(object: _179.PeriodAminoMsg): _179.Period;
                toAminoMsg(message: _179.Period): _179.PeriodAminoMsg;
                fromProtoMsg(message: _179.PeriodProtoMsg): _179.Period;
                toProto(message: _179.Period): Uint8Array;
                toProtoMsg(message: _179.Period): _179.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _179.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _179.PeriodicVestingAccount;
                fromPartial(object: Partial<_179.PeriodicVestingAccount>): _179.PeriodicVestingAccount;
                fromAmino(object: _179.PeriodicVestingAccountAmino): _179.PeriodicVestingAccount;
                toAmino(message: _179.PeriodicVestingAccount): _179.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _179.PeriodicVestingAccountAminoMsg): _179.PeriodicVestingAccount;
                toAminoMsg(message: _179.PeriodicVestingAccount): _179.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _179.PeriodicVestingAccountProtoMsg): _179.PeriodicVestingAccount;
                toProto(message: _179.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _179.PeriodicVestingAccount): _179.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _179.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _179.PermanentLockedAccount;
                fromPartial(object: Partial<_179.PermanentLockedAccount>): _179.PermanentLockedAccount;
                fromAmino(object: _179.PermanentLockedAccountAmino): _179.PermanentLockedAccount;
                toAmino(message: _179.PermanentLockedAccount): _179.PermanentLockedAccountAmino;
                fromAminoMsg(object: _179.PermanentLockedAccountAminoMsg): _179.PermanentLockedAccount;
                toAminoMsg(message: _179.PermanentLockedAccount): _179.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _179.PermanentLockedAccountProtoMsg): _179.PermanentLockedAccount;
                toProto(message: _179.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _179.PermanentLockedAccount): _179.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _178.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _178.MsgCreateVestingAccount;
                fromPartial(object: Partial<_178.MsgCreateVestingAccount>): _178.MsgCreateVestingAccount;
                fromAmino(object: _178.MsgCreateVestingAccountAmino): _178.MsgCreateVestingAccount;
                toAmino(message: _178.MsgCreateVestingAccount): _178.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _178.MsgCreateVestingAccountAminoMsg): _178.MsgCreateVestingAccount;
                toAminoMsg(message: _178.MsgCreateVestingAccount): _178.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _178.MsgCreateVestingAccountProtoMsg): _178.MsgCreateVestingAccount;
                toProto(message: _178.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _178.MsgCreateVestingAccount): _178.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _178.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _178.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_178.MsgCreateVestingAccountResponse>): _178.MsgCreateVestingAccountResponse;
                fromAmino(_: _178.MsgCreateVestingAccountResponseAmino): _178.MsgCreateVestingAccountResponse;
                toAmino(_: _178.MsgCreateVestingAccountResponse): _178.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _178.MsgCreateVestingAccountResponseAminoMsg): _178.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _178.MsgCreateVestingAccountResponse): _178.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _178.MsgCreateVestingAccountResponseProtoMsg): _178.MsgCreateVestingAccountResponse;
                toProto(message: _178.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _178.MsgCreateVestingAccountResponse): _178.MsgCreateVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _335.MsgClientImpl;
                };
                bank: {
                    v1beta1: _336.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _337.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _338.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _339.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _340.MsgClientImpl;
                };
                gov: {
                    v1beta1: _341.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _342.MsgClientImpl;
                };
                staking: {
                    v1beta1: _343.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _344.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _112.QueryAccountsRequest): Promise<_112.QueryAccountsResponse>;
                        account(request: _112.QueryAccountRequest): Promise<_112.QueryAccountResponse>;
                        params(request?: _112.QueryParamsRequest): Promise<_112.QueryParamsResponse>;
                        moduleAccountByName(request: _112.QueryModuleAccountByNameRequest): Promise<_112.QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _116.QueryGrantsRequest): Promise<_116.QueryGrantsResponse>;
                        granterGrants(request: _116.QueryGranterGrantsRequest): Promise<_116.QueryGranterGrantsResponse>;
                        granteeGrants(request: _116.QueryGranteeGrantsRequest): Promise<_116.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _121.QueryBalanceRequest): Promise<_121.QueryBalanceResponse>;
                        allBalances(request: _121.QueryAllBalancesRequest): Promise<_121.QueryAllBalancesResponse>;
                        spendableBalances(request: _121.QuerySpendableBalancesRequest): Promise<_121.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _121.QueryTotalSupplyRequest): Promise<_121.QueryTotalSupplyResponse>;
                        supplyOf(request: _121.QuerySupplyOfRequest): Promise<_121.QuerySupplyOfResponse>;
                        params(request?: _121.QueryParamsRequest): Promise<_121.QueryParamsResponse>;
                        denomMetadata(request: _121.QueryDenomMetadataRequest): Promise<_121.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _121.QueryDenomsMetadataRequest): Promise<_121.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _125.ConfigRequest): Promise<_125.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _132.GetNodeInfoRequest): Promise<_132.GetNodeInfoResponse>;
                            getSyncing(request?: _132.GetSyncingRequest): Promise<_132.GetSyncingResponse>;
                            getLatestBlock(request?: _132.GetLatestBlockRequest): Promise<_132.GetLatestBlockResponse>;
                            getBlockByHeight(request: _132.GetBlockByHeightRequest): Promise<_132.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _132.GetLatestValidatorSetRequest): Promise<_132.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _132.GetValidatorSetByHeightRequest): Promise<_132.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _144.QueryParamsRequest): Promise<_144.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _144.QueryValidatorOutstandingRewardsRequest): Promise<_144.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _144.QueryValidatorCommissionRequest): Promise<_144.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _144.QueryValidatorSlashesRequest): Promise<_144.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _144.QueryDelegationRewardsRequest): Promise<_144.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _144.QueryDelegationTotalRewardsRequest): Promise<_144.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _144.QueryDelegatorValidatorsRequest): Promise<_144.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _144.QueryDelegatorWithdrawAddressRequest): Promise<_144.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _144.QueryCommunityPoolRequest): Promise<_144.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _148.QueryEvidenceRequest): Promise<_148.QueryEvidenceResponse>;
                        allEvidence(request?: _148.QueryAllEvidenceRequest): Promise<_148.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _152.QueryAllowanceRequest): Promise<_152.QueryAllowanceResponse>;
                        allowances(request: _152.QueryAllowancesRequest): Promise<_152.QueryAllowancesResponse>;
                        allowancesByGranter(request: _152.QueryAllowancesByGranterRequest): Promise<_152.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _157.QueryProposalRequest): Promise<_157.QueryProposalResponse>;
                        proposals(request: _157.QueryProposalsRequest): Promise<_157.QueryProposalsResponse>;
                        vote(request: _157.QueryVoteRequest): Promise<_157.QueryVoteResponse>;
                        votes(request: _157.QueryVotesRequest): Promise<_157.QueryVotesResponse>;
                        params(request: _157.QueryParamsRequest): Promise<_157.QueryParamsResponse>;
                        deposit(request: _157.QueryDepositRequest): Promise<_157.QueryDepositResponse>;
                        deposits(request: _157.QueryDepositsRequest): Promise<_157.QueryDepositsResponse>;
                        tallyResult(request: _157.QueryTallyResultRequest): Promise<_157.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _161.QueryParamsRequest): Promise<_161.QueryParamsResponse>;
                        inflation(request?: _161.QueryInflationRequest): Promise<_161.QueryInflationResponse>;
                        annualProvisions(request?: _161.QueryAnnualProvisionsRequest): Promise<_161.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _163.QueryParamsRequest): Promise<_163.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _165.QueryParamsRequest): Promise<_165.QueryParamsResponse>;
                        signingInfo(request: _165.QuerySigningInfoRequest): Promise<_165.QuerySigningInfoResponse>;
                        signingInfos(request?: _165.QuerySigningInfosRequest): Promise<_165.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _170.QueryValidatorsRequest): Promise<_170.QueryValidatorsResponse>;
                        validator(request: _170.QueryValidatorRequest): Promise<_170.QueryValidatorResponse>;
                        validatorDelegations(request: _170.QueryValidatorDelegationsRequest): Promise<_170.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _170.QueryValidatorUnbondingDelegationsRequest): Promise<_170.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _170.QueryDelegationRequest): Promise<_170.QueryDelegationResponse>;
                        unbondingDelegation(request: _170.QueryUnbondingDelegationRequest): Promise<_170.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _170.QueryDelegatorDelegationsRequest): Promise<_170.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _170.QueryDelegatorUnbondingDelegationsRequest): Promise<_170.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _170.QueryRedelegationsRequest): Promise<_170.QueryRedelegationsResponse>;
                        delegatorValidators(request: _170.QueryDelegatorValidatorsRequest): Promise<_170.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _170.QueryDelegatorValidatorRequest): Promise<_170.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _170.QueryHistoricalInfoRequest): Promise<_170.QueryHistoricalInfoResponse>;
                        pool(request?: _170.QueryPoolRequest): Promise<_170.QueryPoolResponse>;
                        params(request?: _170.QueryParamsRequest): Promise<_170.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _174.SimulateRequest): Promise<_174.SimulateResponse>;
                        getTx(request: _174.GetTxRequest): Promise<_174.GetTxResponse>;
                        broadcastTx(request: _174.BroadcastTxRequest): Promise<_174.BroadcastTxResponse>;
                        getTxsEvent(request: _174.GetTxsEventRequest): Promise<_174.GetTxsEventResponse>;
                        getBlockWithTxs(request: _174.GetBlockWithTxsRequest): Promise<_174.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _176.QueryCurrentPlanRequest): Promise<_176.QueryCurrentPlanResponse>;
                        appliedPlan(request: _176.QueryAppliedPlanRequest): Promise<_176.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _176.QueryUpgradedConsensusStateRequest): Promise<_176.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _176.QueryModuleVersionsRequest): Promise<_176.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _305.LCDQueryClient;
                };
                authz: {
                    v1beta1: _306.LCDQueryClient;
                };
                bank: {
                    v1beta1: _307.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _308.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _309.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _310.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _311.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _312.LCDQueryClient;
                };
                gov: {
                    v1beta1: _313.LCDQueryClient;
                };
                mint: {
                    v1beta1: _314.LCDQueryClient;
                };
                params: {
                    v1beta1: _315.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _316.LCDQueryClient;
                };
                staking: {
                    v1beta1: _317.LCDQueryClient;
                };
                tx: {
                    v1beta1: _318.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _319.LCDQueryClient;
                };
            };
        }>;
    };
}
