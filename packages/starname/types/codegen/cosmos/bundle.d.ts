import * as _20 from "../iov/offchain/v1alpha1/offchain";
import * as _21 from "./auth/v1beta1/auth";
import * as _22 from "./auth/v1beta1/genesis";
import * as _23 from "./auth/v1beta1/query";
import * as _24 from "./authz/v1beta1/authz";
import * as _25 from "./authz/v1beta1/event";
import * as _26 from "./authz/v1beta1/genesis";
import * as _27 from "./authz/v1beta1/query";
import * as _28 from "./authz/v1beta1/tx";
import * as _29 from "./bank/v1beta1/authz";
import * as _30 from "./bank/v1beta1/bank";
import * as _31 from "./bank/v1beta1/genesis";
import * as _32 from "./bank/v1beta1/query";
import * as _33 from "./bank/v1beta1/tx";
import * as _34 from "./base/abci/v1beta1/abci";
import * as _35 from "./base/kv/v1beta1/kv";
import * as _36 from "./base/query/v1beta1/pagination";
import * as _37 from "./base/reflection/v1beta1/reflection";
import * as _38 from "./base/reflection/v2alpha1/reflection";
import * as _39 from "./base/snapshots/v1beta1/snapshot";
import * as _40 from "./base/store/v1beta1/commit_info";
import * as _41 from "./base/store/v1beta1/listening";
import * as _42 from "./base/store/v1beta1/snapshot";
import * as _43 from "./base/tendermint/v1beta1/query";
import * as _44 from "./base/v1beta1/coin";
import * as _45 from "./capability/v1beta1/capability";
import * as _46 from "./capability/v1beta1/genesis";
import * as _47 from "./crisis/v1beta1/genesis";
import * as _48 from "./crisis/v1beta1/tx";
import * as _49 from "./crypto/ed25519/keys";
import * as _50 from "./crypto/multisig/keys";
import * as _51 from "./crypto/secp256k1/keys";
import * as _52 from "./crypto/secp256r1/keys";
import * as _53 from "./distribution/v1beta1/distribution";
import * as _54 from "./distribution/v1beta1/genesis";
import * as _55 from "./distribution/v1beta1/query";
import * as _56 from "./distribution/v1beta1/tx";
import * as _57 from "./evidence/v1beta1/evidence";
import * as _58 from "./evidence/v1beta1/genesis";
import * as _59 from "./evidence/v1beta1/query";
import * as _60 from "./evidence/v1beta1/tx";
import * as _61 from "./feegrant/v1beta1/feegrant";
import * as _62 from "./feegrant/v1beta1/genesis";
import * as _63 from "./feegrant/v1beta1/query";
import * as _64 from "./feegrant/v1beta1/tx";
import * as _65 from "./genutil/v1beta1/genesis";
import * as _66 from "./gov/v1beta1/genesis";
import * as _67 from "./gov/v1beta1/gov";
import * as _68 from "./gov/v1beta1/query";
import * as _69 from "./gov/v1beta1/tx";
import * as _70 from "./mint/v1beta1/genesis";
import * as _71 from "./mint/v1beta1/mint";
import * as _72 from "./mint/v1beta1/query";
import * as _73 from "./params/v1beta1/params";
import * as _74 from "./params/v1beta1/query";
import * as _75 from "./slashing/v1beta1/genesis";
import * as _76 from "./slashing/v1beta1/query";
import * as _77 from "./slashing/v1beta1/slashing";
import * as _78 from "./slashing/v1beta1/tx";
import * as _79 from "./staking/v1beta1/authz";
import * as _80 from "./staking/v1beta1/genesis";
import * as _81 from "./staking/v1beta1/query";
import * as _82 from "./staking/v1beta1/staking";
import * as _83 from "./staking/v1beta1/tx";
import * as _84 from "./tx/signing/v1beta1/signing";
import * as _85 from "./tx/v1beta1/service";
import * as _86 from "./tx/v1beta1/tx";
import * as _87 from "./upgrade/v1beta1/query";
import * as _88 from "./upgrade/v1beta1/upgrade";
import * as _89 from "./vesting/v1beta1/tx";
import * as _90 from "./vesting/v1beta1/vesting";
import * as _171 from "./auth/v1beta1/query.lcd";
import * as _172 from "./authz/v1beta1/query.lcd";
import * as _173 from "./bank/v1beta1/query.lcd";
import * as _174 from "./base/tendermint/v1beta1/query.lcd";
import * as _175 from "./distribution/v1beta1/query.lcd";
import * as _176 from "./evidence/v1beta1/query.lcd";
import * as _177 from "./feegrant/v1beta1/query.lcd";
import * as _178 from "./gov/v1beta1/query.lcd";
import * as _179 from "./mint/v1beta1/query.lcd";
import * as _180 from "./params/v1beta1/query.lcd";
import * as _181 from "./slashing/v1beta1/query.lcd";
import * as _182 from "./staking/v1beta1/query.lcd";
import * as _183 from "./tx/v1beta1/service.lcd";
import * as _184 from "./upgrade/v1beta1/query.lcd";
import * as _185 from "./auth/v1beta1/query.rpc.Query";
import * as _186 from "./authz/v1beta1/query.rpc.Query";
import * as _187 from "./bank/v1beta1/query.rpc.Query";
import * as _188 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _189 from "./distribution/v1beta1/query.rpc.Query";
import * as _190 from "./evidence/v1beta1/query.rpc.Query";
import * as _191 from "./feegrant/v1beta1/query.rpc.Query";
import * as _192 from "./gov/v1beta1/query.rpc.Query";
import * as _193 from "./mint/v1beta1/query.rpc.Query";
import * as _194 from "./params/v1beta1/query.rpc.Query";
import * as _195 from "./slashing/v1beta1/query.rpc.Query";
import * as _196 from "./staking/v1beta1/query.rpc.Query";
import * as _197 from "./tx/v1beta1/service.rpc.Service";
import * as _198 from "./upgrade/v1beta1/query.rpc.Query";
import * as _199 from "./authz/v1beta1/tx.rpc.msg";
import * as _200 from "./bank/v1beta1/tx.rpc.msg";
import * as _201 from "./crisis/v1beta1/tx.rpc.msg";
import * as _202 from "./distribution/v1beta1/tx.rpc.msg";
import * as _203 from "./evidence/v1beta1/tx.rpc.msg";
import * as _204 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _205 from "./gov/v1beta1/tx.rpc.msg";
import * as _206 from "./slashing/v1beta1/tx.rpc.msg";
import * as _207 from "./staking/v1beta1/tx.rpc.msg";
import * as _208 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace offchain {
        const v1alpha1: {
            MsgSignData: {
                typeUrl: string;
                encode(message: _20.MsgSignData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.MsgSignData;
                fromPartial(object: Partial<_20.MsgSignData>): _20.MsgSignData;
                fromAmino(object: _20.MsgSignDataAmino): _20.MsgSignData;
                toAmino(message: _20.MsgSignData): _20.MsgSignDataAmino;
                fromAminoMsg(object: _20.MsgSignDataAminoMsg): _20.MsgSignData;
                toAminoMsg(message: _20.MsgSignData): _20.MsgSignDataAminoMsg;
                fromProtoMsg(message: _20.MsgSignDataProtoMsg): _20.MsgSignData;
                toProto(message: _20.MsgSignData): Uint8Array;
                toProtoMsg(message: _20.MsgSignData): _20.MsgSignDataProtoMsg;
            };
            ListOfMsgSignData: {
                typeUrl: string;
                encode(message: _20.ListOfMsgSignData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.ListOfMsgSignData;
                fromPartial(object: Partial<_20.ListOfMsgSignData>): _20.ListOfMsgSignData;
                fromAmino(object: _20.ListOfMsgSignDataAmino): _20.ListOfMsgSignData;
                toAmino(message: _20.ListOfMsgSignData): _20.ListOfMsgSignDataAmino;
                fromAminoMsg(object: _20.ListOfMsgSignDataAminoMsg): _20.ListOfMsgSignData;
                toAminoMsg(message: _20.ListOfMsgSignData): _20.ListOfMsgSignDataAminoMsg;
                fromProtoMsg(message: _20.ListOfMsgSignDataProtoMsg): _20.ListOfMsgSignData;
                toProto(message: _20.ListOfMsgSignData): Uint8Array;
                toProtoMsg(message: _20.ListOfMsgSignData): _20.ListOfMsgSignDataProtoMsg;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _185.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _23.QueryAccountsRequest): Promise<_23.QueryAccountsResponse>;
                account(request: _23.QueryAccountRequest): Promise<_23.QueryAccountResponse>;
                params(request?: _23.QueryParamsRequest): Promise<_23.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _171.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _23.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryAccountsRequest;
                fromPartial(object: Partial<_23.QueryAccountsRequest>): _23.QueryAccountsRequest;
                fromAmino(object: _23.QueryAccountsRequestAmino): _23.QueryAccountsRequest;
                toAmino(message: _23.QueryAccountsRequest): _23.QueryAccountsRequestAmino;
                fromAminoMsg(object: _23.QueryAccountsRequestAminoMsg): _23.QueryAccountsRequest;
                toAminoMsg(message: _23.QueryAccountsRequest): _23.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _23.QueryAccountsRequestProtoMsg): _23.QueryAccountsRequest;
                toProto(message: _23.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _23.QueryAccountsRequest): _23.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _23.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryAccountsResponse;
                fromPartial(object: Partial<_23.QueryAccountsResponse>): _23.QueryAccountsResponse;
                fromAmino(object: _23.QueryAccountsResponseAmino): _23.QueryAccountsResponse;
                toAmino(message: _23.QueryAccountsResponse): _23.QueryAccountsResponseAmino;
                fromAminoMsg(object: _23.QueryAccountsResponseAminoMsg): _23.QueryAccountsResponse;
                toAminoMsg(message: _23.QueryAccountsResponse): _23.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _23.QueryAccountsResponseProtoMsg): _23.QueryAccountsResponse;
                toProto(message: _23.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _23.QueryAccountsResponse): _23.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _23.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryAccountRequest;
                fromPartial(object: Partial<_23.QueryAccountRequest>): _23.QueryAccountRequest;
                fromAmino(object: _23.QueryAccountRequestAmino): _23.QueryAccountRequest;
                toAmino(message: _23.QueryAccountRequest): _23.QueryAccountRequestAmino;
                fromAminoMsg(object: _23.QueryAccountRequestAminoMsg): _23.QueryAccountRequest;
                toAminoMsg(message: _23.QueryAccountRequest): _23.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _23.QueryAccountRequestProtoMsg): _23.QueryAccountRequest;
                toProto(message: _23.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _23.QueryAccountRequest): _23.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _23.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryAccountResponse;
                fromPartial(object: Partial<_23.QueryAccountResponse>): _23.QueryAccountResponse;
                fromAmino(object: _23.QueryAccountResponseAmino): _23.QueryAccountResponse;
                toAmino(message: _23.QueryAccountResponse): _23.QueryAccountResponseAmino;
                fromAminoMsg(object: _23.QueryAccountResponseAminoMsg): _23.QueryAccountResponse;
                toAminoMsg(message: _23.QueryAccountResponse): _23.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _23.QueryAccountResponseProtoMsg): _23.QueryAccountResponse;
                toProto(message: _23.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _23.QueryAccountResponse): _23.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _23.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.QueryParamsRequest;
                fromPartial(_: Partial<_23.QueryParamsRequest>): _23.QueryParamsRequest;
                fromAmino(_: _23.QueryParamsRequestAmino): _23.QueryParamsRequest;
                toAmino(_: _23.QueryParamsRequest): _23.QueryParamsRequestAmino;
                fromAminoMsg(object: _23.QueryParamsRequestAminoMsg): _23.QueryParamsRequest;
                toAminoMsg(message: _23.QueryParamsRequest): _23.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _23.QueryParamsRequestProtoMsg): _23.QueryParamsRequest;
                toProto(message: _23.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _23.QueryParamsRequest): _23.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _23.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryParamsResponse;
                fromPartial(object: Partial<_23.QueryParamsResponse>): _23.QueryParamsResponse;
                fromAmino(object: _23.QueryParamsResponseAmino): _23.QueryParamsResponse;
                toAmino(message: _23.QueryParamsResponse): _23.QueryParamsResponseAmino;
                fromAminoMsg(object: _23.QueryParamsResponseAminoMsg): _23.QueryParamsResponse;
                toAminoMsg(message: _23.QueryParamsResponse): _23.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _23.QueryParamsResponseProtoMsg): _23.QueryParamsResponse;
                toProto(message: _23.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _23.QueryParamsResponse): _23.QueryParamsResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _21.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _22.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.GenesisState;
                fromPartial(object: Partial<_22.GenesisState>): _22.GenesisState;
                fromAmino(object: _22.GenesisStateAmino): _22.GenesisState;
                toAmino(message: _22.GenesisState): _22.GenesisStateAmino;
                fromAminoMsg(object: _22.GenesisStateAminoMsg): _22.GenesisState;
                toAminoMsg(message: _22.GenesisState): _22.GenesisStateAminoMsg;
                fromProtoMsg(message: _22.GenesisStateProtoMsg): _22.GenesisState;
                toProto(message: _22.GenesisState): Uint8Array;
                toProtoMsg(message: _22.GenesisState): _22.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _21.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.BaseAccount;
                fromPartial(object: Partial<_21.BaseAccount>): _21.BaseAccount;
                fromAmino(object: _21.BaseAccountAmino): _21.BaseAccount;
                toAmino(message: _21.BaseAccount): _21.BaseAccountAmino;
                fromAminoMsg(object: _21.BaseAccountAminoMsg): _21.BaseAccount;
                toAminoMsg(message: _21.BaseAccount): _21.BaseAccountAminoMsg;
                fromProtoMsg(message: _21.BaseAccountProtoMsg): _21.BaseAccount;
                toProto(message: _21.BaseAccount): Uint8Array;
                toProtoMsg(message: _21.BaseAccount): _21.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _21.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.ModuleAccount;
                fromPartial(object: Partial<_21.ModuleAccount>): _21.ModuleAccount;
                fromAmino(object: _21.ModuleAccountAmino): _21.ModuleAccount;
                toAmino(message: _21.ModuleAccount): _21.ModuleAccountAmino;
                fromAminoMsg(object: _21.ModuleAccountAminoMsg): _21.ModuleAccount;
                toAminoMsg(message: _21.ModuleAccount): _21.ModuleAccountAminoMsg;
                fromProtoMsg(message: _21.ModuleAccountProtoMsg): _21.ModuleAccount;
                toProto(message: _21.ModuleAccount): Uint8Array;
                toProtoMsg(message: _21.ModuleAccount): _21.ModuleAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _21.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.Params;
                fromPartial(object: Partial<_21.Params>): _21.Params;
                fromAmino(object: _21.ParamsAmino): _21.Params;
                toAmino(message: _21.Params): _21.ParamsAmino;
                fromAminoMsg(object: _21.ParamsAminoMsg): _21.Params;
                toAminoMsg(message: _21.Params): _21.ParamsAminoMsg;
                fromProtoMsg(message: _21.ParamsProtoMsg): _21.Params;
                toProto(message: _21.Params): Uint8Array;
                toProtoMsg(message: _21.Params): _21.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _199.MsgClientImpl;
            QueryClientImpl: typeof _186.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _27.QueryGrantsRequest): Promise<_27.QueryGrantsResponse>;
                granterGrants(request: _27.QueryGranterGrantsRequest): Promise<_27.QueryGranterGrantsResponse>;
                granteeGrants(request: _27.QueryGranteeGrantsRequest): Promise<_27.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _172.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _28.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _28.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _28.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _28.MsgGrant): {
                        typeUrl: string;
                        value: _28.MsgGrant;
                    };
                    exec(value: _28.MsgExec): {
                        typeUrl: string;
                        value: _28.MsgExec;
                    };
                    revoke(value: _28.MsgRevoke): {
                        typeUrl: string;
                        value: _28.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _28.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _28.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _28.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _28.MsgGrant): {
                        typeUrl: string;
                        value: _28.MsgGrant;
                    };
                    exec(value: _28.MsgExec): {
                        typeUrl: string;
                        value: _28.MsgExec;
                    };
                    revoke(value: _28.MsgRevoke): {
                        typeUrl: string;
                        value: _28.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _28.MsgGrant) => _28.MsgGrantAmino;
                    fromAmino: (object: _28.MsgGrantAmino) => _28.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _28.MsgExec) => _28.MsgExecAmino;
                    fromAmino: (object: _28.MsgExecAmino) => _28.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _28.MsgRevoke) => _28.MsgRevokeAmino;
                    fromAmino: (object: _28.MsgRevokeAmino) => _28.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _28.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.MsgGrant;
                fromPartial(object: Partial<_28.MsgGrant>): _28.MsgGrant;
                fromAmino(object: _28.MsgGrantAmino): _28.MsgGrant;
                toAmino(message: _28.MsgGrant): _28.MsgGrantAmino;
                fromAminoMsg(object: _28.MsgGrantAminoMsg): _28.MsgGrant;
                toAminoMsg(message: _28.MsgGrant): _28.MsgGrantAminoMsg;
                fromProtoMsg(message: _28.MsgGrantProtoMsg): _28.MsgGrant;
                toProto(message: _28.MsgGrant): Uint8Array;
                toProtoMsg(message: _28.MsgGrant): _28.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _28.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.MsgExecResponse;
                fromPartial(object: Partial<_28.MsgExecResponse>): _28.MsgExecResponse;
                fromAmino(object: _28.MsgExecResponseAmino): _28.MsgExecResponse;
                toAmino(message: _28.MsgExecResponse): _28.MsgExecResponseAmino;
                fromAminoMsg(object: _28.MsgExecResponseAminoMsg): _28.MsgExecResponse;
                toAminoMsg(message: _28.MsgExecResponse): _28.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _28.MsgExecResponseProtoMsg): _28.MsgExecResponse;
                toProto(message: _28.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _28.MsgExecResponse): _28.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _28.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.MsgExec;
                fromPartial(object: Partial<_28.MsgExec>): _28.MsgExec;
                fromAmino(object: _28.MsgExecAmino): _28.MsgExec;
                toAmino(message: _28.MsgExec): _28.MsgExecAmino;
                fromAminoMsg(object: _28.MsgExecAminoMsg): _28.MsgExec;
                toAminoMsg(message: _28.MsgExec): _28.MsgExecAminoMsg;
                fromProtoMsg(message: _28.MsgExecProtoMsg): _28.MsgExec;
                toProto(message: _28.MsgExec): Uint8Array;
                toProtoMsg(message: _28.MsgExec): _28.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _28.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _28.MsgGrantResponse;
                fromPartial(_: Partial<_28.MsgGrantResponse>): _28.MsgGrantResponse;
                fromAmino(_: _28.MsgGrantResponseAmino): _28.MsgGrantResponse;
                toAmino(_: _28.MsgGrantResponse): _28.MsgGrantResponseAmino;
                fromAminoMsg(object: _28.MsgGrantResponseAminoMsg): _28.MsgGrantResponse;
                toAminoMsg(message: _28.MsgGrantResponse): _28.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _28.MsgGrantResponseProtoMsg): _28.MsgGrantResponse;
                toProto(message: _28.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _28.MsgGrantResponse): _28.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _28.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.MsgRevoke;
                fromPartial(object: Partial<_28.MsgRevoke>): _28.MsgRevoke;
                fromAmino(object: _28.MsgRevokeAmino): _28.MsgRevoke;
                toAmino(message: _28.MsgRevoke): _28.MsgRevokeAmino;
                fromAminoMsg(object: _28.MsgRevokeAminoMsg): _28.MsgRevoke;
                toAminoMsg(message: _28.MsgRevoke): _28.MsgRevokeAminoMsg;
                fromProtoMsg(message: _28.MsgRevokeProtoMsg): _28.MsgRevoke;
                toProto(message: _28.MsgRevoke): Uint8Array;
                toProtoMsg(message: _28.MsgRevoke): _28.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _28.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _28.MsgRevokeResponse;
                fromPartial(_: Partial<_28.MsgRevokeResponse>): _28.MsgRevokeResponse;
                fromAmino(_: _28.MsgRevokeResponseAmino): _28.MsgRevokeResponse;
                toAmino(_: _28.MsgRevokeResponse): _28.MsgRevokeResponseAmino;
                fromAminoMsg(object: _28.MsgRevokeResponseAminoMsg): _28.MsgRevokeResponse;
                toAminoMsg(message: _28.MsgRevokeResponse): _28.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _28.MsgRevokeResponseProtoMsg): _28.MsgRevokeResponse;
                toProto(message: _28.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _28.MsgRevokeResponse): _28.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _27.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryGrantsRequest;
                fromPartial(object: Partial<_27.QueryGrantsRequest>): _27.QueryGrantsRequest;
                fromAmino(object: _27.QueryGrantsRequestAmino): _27.QueryGrantsRequest;
                toAmino(message: _27.QueryGrantsRequest): _27.QueryGrantsRequestAmino;
                fromAminoMsg(object: _27.QueryGrantsRequestAminoMsg): _27.QueryGrantsRequest;
                toAminoMsg(message: _27.QueryGrantsRequest): _27.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _27.QueryGrantsRequestProtoMsg): _27.QueryGrantsRequest;
                toProto(message: _27.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _27.QueryGrantsRequest): _27.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _27.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryGrantsResponse;
                fromPartial(object: Partial<_27.QueryGrantsResponse>): _27.QueryGrantsResponse;
                fromAmino(object: _27.QueryGrantsResponseAmino): _27.QueryGrantsResponse;
                toAmino(message: _27.QueryGrantsResponse): _27.QueryGrantsResponseAmino;
                fromAminoMsg(object: _27.QueryGrantsResponseAminoMsg): _27.QueryGrantsResponse;
                toAminoMsg(message: _27.QueryGrantsResponse): _27.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _27.QueryGrantsResponseProtoMsg): _27.QueryGrantsResponse;
                toProto(message: _27.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _27.QueryGrantsResponse): _27.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _27.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_27.QueryGranterGrantsRequest>): _27.QueryGranterGrantsRequest;
                fromAmino(object: _27.QueryGranterGrantsRequestAmino): _27.QueryGranterGrantsRequest;
                toAmino(message: _27.QueryGranterGrantsRequest): _27.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _27.QueryGranterGrantsRequestAminoMsg): _27.QueryGranterGrantsRequest;
                toAminoMsg(message: _27.QueryGranterGrantsRequest): _27.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _27.QueryGranterGrantsRequestProtoMsg): _27.QueryGranterGrantsRequest;
                toProto(message: _27.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _27.QueryGranterGrantsRequest): _27.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _27.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_27.QueryGranterGrantsResponse>): _27.QueryGranterGrantsResponse;
                fromAmino(object: _27.QueryGranterGrantsResponseAmino): _27.QueryGranterGrantsResponse;
                toAmino(message: _27.QueryGranterGrantsResponse): _27.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _27.QueryGranterGrantsResponseAminoMsg): _27.QueryGranterGrantsResponse;
                toAminoMsg(message: _27.QueryGranterGrantsResponse): _27.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _27.QueryGranterGrantsResponseProtoMsg): _27.QueryGranterGrantsResponse;
                toProto(message: _27.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _27.QueryGranterGrantsResponse): _27.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _27.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_27.QueryGranteeGrantsRequest>): _27.QueryGranteeGrantsRequest;
                fromAmino(object: _27.QueryGranteeGrantsRequestAmino): _27.QueryGranteeGrantsRequest;
                toAmino(message: _27.QueryGranteeGrantsRequest): _27.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _27.QueryGranteeGrantsRequestAminoMsg): _27.QueryGranteeGrantsRequest;
                toAminoMsg(message: _27.QueryGranteeGrantsRequest): _27.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _27.QueryGranteeGrantsRequestProtoMsg): _27.QueryGranteeGrantsRequest;
                toProto(message: _27.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _27.QueryGranteeGrantsRequest): _27.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _27.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_27.QueryGranteeGrantsResponse>): _27.QueryGranteeGrantsResponse;
                fromAmino(object: _27.QueryGranteeGrantsResponseAmino): _27.QueryGranteeGrantsResponse;
                toAmino(message: _27.QueryGranteeGrantsResponse): _27.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _27.QueryGranteeGrantsResponseAminoMsg): _27.QueryGranteeGrantsResponse;
                toAminoMsg(message: _27.QueryGranteeGrantsResponse): _27.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _27.QueryGranteeGrantsResponseProtoMsg): _27.QueryGranteeGrantsResponse;
                toProto(message: _27.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _27.QueryGranteeGrantsResponse): _27.QueryGranteeGrantsResponseProtoMsg;
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
            EventGrant: {
                typeUrl: string;
                encode(message: _25.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.EventGrant;
                fromPartial(object: Partial<_25.EventGrant>): _25.EventGrant;
                fromAmino(object: _25.EventGrantAmino): _25.EventGrant;
                toAmino(message: _25.EventGrant): _25.EventGrantAmino;
                fromAminoMsg(object: _25.EventGrantAminoMsg): _25.EventGrant;
                toAminoMsg(message: _25.EventGrant): _25.EventGrantAminoMsg;
                fromProtoMsg(message: _25.EventGrantProtoMsg): _25.EventGrant;
                toProto(message: _25.EventGrant): Uint8Array;
                toProtoMsg(message: _25.EventGrant): _25.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _25.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.EventRevoke;
                fromPartial(object: Partial<_25.EventRevoke>): _25.EventRevoke;
                fromAmino(object: _25.EventRevokeAmino): _25.EventRevoke;
                toAmino(message: _25.EventRevoke): _25.EventRevokeAmino;
                fromAminoMsg(object: _25.EventRevokeAminoMsg): _25.EventRevoke;
                toAminoMsg(message: _25.EventRevoke): _25.EventRevokeAminoMsg;
                fromProtoMsg(message: _25.EventRevokeProtoMsg): _25.EventRevoke;
                toProto(message: _25.EventRevoke): Uint8Array;
                toProtoMsg(message: _25.EventRevoke): _25.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _24.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.GenericAuthorization;
                fromPartial(object: Partial<_24.GenericAuthorization>): _24.GenericAuthorization;
                fromAmino(object: _24.GenericAuthorizationAmino): _24.GenericAuthorization;
                toAmino(message: _24.GenericAuthorization): _24.GenericAuthorizationAmino;
                fromAminoMsg(object: _24.GenericAuthorizationAminoMsg): _24.GenericAuthorization;
                toAminoMsg(message: _24.GenericAuthorization): _24.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _24.GenericAuthorizationProtoMsg): _24.GenericAuthorization;
                toProto(message: _24.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _24.GenericAuthorization): _24.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _24.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.Grant;
                fromPartial(object: Partial<_24.Grant>): _24.Grant;
                fromAmino(object: _24.GrantAmino): _24.Grant;
                toAmino(message: _24.Grant): _24.GrantAmino;
                fromAminoMsg(object: _24.GrantAminoMsg): _24.Grant;
                toAminoMsg(message: _24.Grant): _24.GrantAminoMsg;
                fromProtoMsg(message: _24.GrantProtoMsg): _24.Grant;
                toProto(message: _24.Grant): Uint8Array;
                toProtoMsg(message: _24.Grant): _24.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _24.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.GrantAuthorization;
                fromPartial(object: Partial<_24.GrantAuthorization>): _24.GrantAuthorization;
                fromAmino(object: _24.GrantAuthorizationAmino): _24.GrantAuthorization;
                toAmino(message: _24.GrantAuthorization): _24.GrantAuthorizationAmino;
                fromAminoMsg(object: _24.GrantAuthorizationAminoMsg): _24.GrantAuthorization;
                toAminoMsg(message: _24.GrantAuthorization): _24.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _24.GrantAuthorizationProtoMsg): _24.GrantAuthorization;
                toProto(message: _24.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _24.GrantAuthorization): _24.GrantAuthorizationProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _29.SendAuthorization | _79.StakeAuthorization | _24.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _200.MsgClientImpl;
            QueryClientImpl: typeof _187.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _32.QueryBalanceRequest): Promise<_32.QueryBalanceResponse>;
                allBalances(request: _32.QueryAllBalancesRequest): Promise<_32.QueryAllBalancesResponse>;
                spendableBalances(request: _32.QuerySpendableBalancesRequest): Promise<_32.QuerySpendableBalancesResponse>;
                totalSupply(request?: _32.QueryTotalSupplyRequest): Promise<_32.QueryTotalSupplyResponse>;
                supplyOf(request: _32.QuerySupplyOfRequest): Promise<_32.QuerySupplyOfResponse>;
                params(request?: _32.QueryParamsRequest): Promise<_32.QueryParamsResponse>;
                denomMetadata(request: _32.QueryDenomMetadataRequest): Promise<_32.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _32.QueryDenomsMetadataRequest): Promise<_32.QueryDenomsMetadataResponse>;
            };
            LCDQueryClient: typeof _173.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _33.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _33.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _33.MsgSend): {
                        typeUrl: string;
                        value: _33.MsgSend;
                    };
                    multiSend(value: _33.MsgMultiSend): {
                        typeUrl: string;
                        value: _33.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _33.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _33.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _33.MsgSend): {
                        typeUrl: string;
                        value: _33.MsgSend;
                    };
                    multiSend(value: _33.MsgMultiSend): {
                        typeUrl: string;
                        value: _33.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _33.MsgSend) => _33.MsgSendAmino;
                    fromAmino: (object: _33.MsgSendAmino) => _33.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _33.MsgMultiSend) => _33.MsgMultiSendAmino;
                    fromAmino: (object: _33.MsgMultiSendAmino) => _33.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _33.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.MsgSend;
                fromPartial(object: Partial<_33.MsgSend>): _33.MsgSend;
                fromAmino(object: _33.MsgSendAmino): _33.MsgSend;
                toAmino(message: _33.MsgSend): _33.MsgSendAmino;
                fromAminoMsg(object: _33.MsgSendAminoMsg): _33.MsgSend;
                toAminoMsg(message: _33.MsgSend): _33.MsgSendAminoMsg;
                fromProtoMsg(message: _33.MsgSendProtoMsg): _33.MsgSend;
                toProto(message: _33.MsgSend): Uint8Array;
                toProtoMsg(message: _33.MsgSend): _33.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _33.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _33.MsgSendResponse;
                fromPartial(_: Partial<_33.MsgSendResponse>): _33.MsgSendResponse;
                fromAmino(_: _33.MsgSendResponseAmino): _33.MsgSendResponse;
                toAmino(_: _33.MsgSendResponse): _33.MsgSendResponseAmino;
                fromAminoMsg(object: _33.MsgSendResponseAminoMsg): _33.MsgSendResponse;
                toAminoMsg(message: _33.MsgSendResponse): _33.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _33.MsgSendResponseProtoMsg): _33.MsgSendResponse;
                toProto(message: _33.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _33.MsgSendResponse): _33.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _33.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.MsgMultiSend;
                fromPartial(object: Partial<_33.MsgMultiSend>): _33.MsgMultiSend;
                fromAmino(object: _33.MsgMultiSendAmino): _33.MsgMultiSend;
                toAmino(message: _33.MsgMultiSend): _33.MsgMultiSendAmino;
                fromAminoMsg(object: _33.MsgMultiSendAminoMsg): _33.MsgMultiSend;
                toAminoMsg(message: _33.MsgMultiSend): _33.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _33.MsgMultiSendProtoMsg): _33.MsgMultiSend;
                toProto(message: _33.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _33.MsgMultiSend): _33.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _33.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _33.MsgMultiSendResponse;
                fromPartial(_: Partial<_33.MsgMultiSendResponse>): _33.MsgMultiSendResponse;
                fromAmino(_: _33.MsgMultiSendResponseAmino): _33.MsgMultiSendResponse;
                toAmino(_: _33.MsgMultiSendResponse): _33.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _33.MsgMultiSendResponseAminoMsg): _33.MsgMultiSendResponse;
                toAminoMsg(message: _33.MsgMultiSendResponse): _33.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _33.MsgMultiSendResponseProtoMsg): _33.MsgMultiSendResponse;
                toProto(message: _33.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _33.MsgMultiSendResponse): _33.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _32.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryBalanceRequest;
                fromPartial(object: Partial<_32.QueryBalanceRequest>): _32.QueryBalanceRequest;
                fromAmino(object: _32.QueryBalanceRequestAmino): _32.QueryBalanceRequest;
                toAmino(message: _32.QueryBalanceRequest): _32.QueryBalanceRequestAmino;
                fromAminoMsg(object: _32.QueryBalanceRequestAminoMsg): _32.QueryBalanceRequest;
                toAminoMsg(message: _32.QueryBalanceRequest): _32.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _32.QueryBalanceRequestProtoMsg): _32.QueryBalanceRequest;
                toProto(message: _32.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _32.QueryBalanceRequest): _32.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _32.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryBalanceResponse;
                fromPartial(object: Partial<_32.QueryBalanceResponse>): _32.QueryBalanceResponse;
                fromAmino(object: _32.QueryBalanceResponseAmino): _32.QueryBalanceResponse;
                toAmino(message: _32.QueryBalanceResponse): _32.QueryBalanceResponseAmino;
                fromAminoMsg(object: _32.QueryBalanceResponseAminoMsg): _32.QueryBalanceResponse;
                toAminoMsg(message: _32.QueryBalanceResponse): _32.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _32.QueryBalanceResponseProtoMsg): _32.QueryBalanceResponse;
                toProto(message: _32.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _32.QueryBalanceResponse): _32.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _32.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryAllBalancesRequest;
                fromPartial(object: Partial<_32.QueryAllBalancesRequest>): _32.QueryAllBalancesRequest;
                fromAmino(object: _32.QueryAllBalancesRequestAmino): _32.QueryAllBalancesRequest;
                toAmino(message: _32.QueryAllBalancesRequest): _32.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _32.QueryAllBalancesRequestAminoMsg): _32.QueryAllBalancesRequest;
                toAminoMsg(message: _32.QueryAllBalancesRequest): _32.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _32.QueryAllBalancesRequestProtoMsg): _32.QueryAllBalancesRequest;
                toProto(message: _32.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _32.QueryAllBalancesRequest): _32.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _32.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryAllBalancesResponse;
                fromPartial(object: Partial<_32.QueryAllBalancesResponse>): _32.QueryAllBalancesResponse;
                fromAmino(object: _32.QueryAllBalancesResponseAmino): _32.QueryAllBalancesResponse;
                toAmino(message: _32.QueryAllBalancesResponse): _32.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _32.QueryAllBalancesResponseAminoMsg): _32.QueryAllBalancesResponse;
                toAminoMsg(message: _32.QueryAllBalancesResponse): _32.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _32.QueryAllBalancesResponseProtoMsg): _32.QueryAllBalancesResponse;
                toProto(message: _32.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _32.QueryAllBalancesResponse): _32.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _32.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_32.QuerySpendableBalancesRequest>): _32.QuerySpendableBalancesRequest;
                fromAmino(object: _32.QuerySpendableBalancesRequestAmino): _32.QuerySpendableBalancesRequest;
                toAmino(message: _32.QuerySpendableBalancesRequest): _32.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _32.QuerySpendableBalancesRequestAminoMsg): _32.QuerySpendableBalancesRequest;
                toAminoMsg(message: _32.QuerySpendableBalancesRequest): _32.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _32.QuerySpendableBalancesRequestProtoMsg): _32.QuerySpendableBalancesRequest;
                toProto(message: _32.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _32.QuerySpendableBalancesRequest): _32.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _32.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_32.QuerySpendableBalancesResponse>): _32.QuerySpendableBalancesResponse;
                fromAmino(object: _32.QuerySpendableBalancesResponseAmino): _32.QuerySpendableBalancesResponse;
                toAmino(message: _32.QuerySpendableBalancesResponse): _32.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _32.QuerySpendableBalancesResponseAminoMsg): _32.QuerySpendableBalancesResponse;
                toAminoMsg(message: _32.QuerySpendableBalancesResponse): _32.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _32.QuerySpendableBalancesResponseProtoMsg): _32.QuerySpendableBalancesResponse;
                toProto(message: _32.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _32.QuerySpendableBalancesResponse): _32.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _32.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_32.QueryTotalSupplyRequest>): _32.QueryTotalSupplyRequest;
                fromAmino(object: _32.QueryTotalSupplyRequestAmino): _32.QueryTotalSupplyRequest;
                toAmino(message: _32.QueryTotalSupplyRequest): _32.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _32.QueryTotalSupplyRequestAminoMsg): _32.QueryTotalSupplyRequest;
                toAminoMsg(message: _32.QueryTotalSupplyRequest): _32.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _32.QueryTotalSupplyRequestProtoMsg): _32.QueryTotalSupplyRequest;
                toProto(message: _32.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _32.QueryTotalSupplyRequest): _32.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _32.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_32.QueryTotalSupplyResponse>): _32.QueryTotalSupplyResponse;
                fromAmino(object: _32.QueryTotalSupplyResponseAmino): _32.QueryTotalSupplyResponse;
                toAmino(message: _32.QueryTotalSupplyResponse): _32.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _32.QueryTotalSupplyResponseAminoMsg): _32.QueryTotalSupplyResponse;
                toAminoMsg(message: _32.QueryTotalSupplyResponse): _32.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _32.QueryTotalSupplyResponseProtoMsg): _32.QueryTotalSupplyResponse;
                toProto(message: _32.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _32.QueryTotalSupplyResponse): _32.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _32.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QuerySupplyOfRequest;
                fromPartial(object: Partial<_32.QuerySupplyOfRequest>): _32.QuerySupplyOfRequest;
                fromAmino(object: _32.QuerySupplyOfRequestAmino): _32.QuerySupplyOfRequest;
                toAmino(message: _32.QuerySupplyOfRequest): _32.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _32.QuerySupplyOfRequestAminoMsg): _32.QuerySupplyOfRequest;
                toAminoMsg(message: _32.QuerySupplyOfRequest): _32.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _32.QuerySupplyOfRequestProtoMsg): _32.QuerySupplyOfRequest;
                toProto(message: _32.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _32.QuerySupplyOfRequest): _32.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _32.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QuerySupplyOfResponse;
                fromPartial(object: Partial<_32.QuerySupplyOfResponse>): _32.QuerySupplyOfResponse;
                fromAmino(object: _32.QuerySupplyOfResponseAmino): _32.QuerySupplyOfResponse;
                toAmino(message: _32.QuerySupplyOfResponse): _32.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _32.QuerySupplyOfResponseAminoMsg): _32.QuerySupplyOfResponse;
                toAminoMsg(message: _32.QuerySupplyOfResponse): _32.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _32.QuerySupplyOfResponseProtoMsg): _32.QuerySupplyOfResponse;
                toProto(message: _32.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _32.QuerySupplyOfResponse): _32.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _32.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _32.QueryParamsRequest;
                fromPartial(_: Partial<_32.QueryParamsRequest>): _32.QueryParamsRequest;
                fromAmino(_: _32.QueryParamsRequestAmino): _32.QueryParamsRequest;
                toAmino(_: _32.QueryParamsRequest): _32.QueryParamsRequestAmino;
                fromAminoMsg(object: _32.QueryParamsRequestAminoMsg): _32.QueryParamsRequest;
                toAminoMsg(message: _32.QueryParamsRequest): _32.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _32.QueryParamsRequestProtoMsg): _32.QueryParamsRequest;
                toProto(message: _32.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _32.QueryParamsRequest): _32.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _32.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryParamsResponse;
                fromPartial(object: Partial<_32.QueryParamsResponse>): _32.QueryParamsResponse;
                fromAmino(object: _32.QueryParamsResponseAmino): _32.QueryParamsResponse;
                toAmino(message: _32.QueryParamsResponse): _32.QueryParamsResponseAmino;
                fromAminoMsg(object: _32.QueryParamsResponseAminoMsg): _32.QueryParamsResponse;
                toAminoMsg(message: _32.QueryParamsResponse): _32.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _32.QueryParamsResponseProtoMsg): _32.QueryParamsResponse;
                toProto(message: _32.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _32.QueryParamsResponse): _32.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _32.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_32.QueryDenomsMetadataRequest>): _32.QueryDenomsMetadataRequest;
                fromAmino(object: _32.QueryDenomsMetadataRequestAmino): _32.QueryDenomsMetadataRequest;
                toAmino(message: _32.QueryDenomsMetadataRequest): _32.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _32.QueryDenomsMetadataRequestAminoMsg): _32.QueryDenomsMetadataRequest;
                toAminoMsg(message: _32.QueryDenomsMetadataRequest): _32.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _32.QueryDenomsMetadataRequestProtoMsg): _32.QueryDenomsMetadataRequest;
                toProto(message: _32.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _32.QueryDenomsMetadataRequest): _32.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _32.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_32.QueryDenomsMetadataResponse>): _32.QueryDenomsMetadataResponse;
                fromAmino(object: _32.QueryDenomsMetadataResponseAmino): _32.QueryDenomsMetadataResponse;
                toAmino(message: _32.QueryDenomsMetadataResponse): _32.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _32.QueryDenomsMetadataResponseAminoMsg): _32.QueryDenomsMetadataResponse;
                toAminoMsg(message: _32.QueryDenomsMetadataResponse): _32.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _32.QueryDenomsMetadataResponseProtoMsg): _32.QueryDenomsMetadataResponse;
                toProto(message: _32.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _32.QueryDenomsMetadataResponse): _32.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _32.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_32.QueryDenomMetadataRequest>): _32.QueryDenomMetadataRequest;
                fromAmino(object: _32.QueryDenomMetadataRequestAmino): _32.QueryDenomMetadataRequest;
                toAmino(message: _32.QueryDenomMetadataRequest): _32.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _32.QueryDenomMetadataRequestAminoMsg): _32.QueryDenomMetadataRequest;
                toAminoMsg(message: _32.QueryDenomMetadataRequest): _32.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _32.QueryDenomMetadataRequestProtoMsg): _32.QueryDenomMetadataRequest;
                toProto(message: _32.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _32.QueryDenomMetadataRequest): _32.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _32.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_32.QueryDenomMetadataResponse>): _32.QueryDenomMetadataResponse;
                fromAmino(object: _32.QueryDenomMetadataResponseAmino): _32.QueryDenomMetadataResponse;
                toAmino(message: _32.QueryDenomMetadataResponse): _32.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _32.QueryDenomMetadataResponseAminoMsg): _32.QueryDenomMetadataResponse;
                toAminoMsg(message: _32.QueryDenomMetadataResponse): _32.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _32.QueryDenomMetadataResponseProtoMsg): _32.QueryDenomMetadataResponse;
                toProto(message: _32.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _32.QueryDenomMetadataResponse): _32.QueryDenomMetadataResponseProtoMsg;
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
            Balance: {
                typeUrl: string;
                encode(message: _31.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.Balance;
                fromPartial(object: Partial<_31.Balance>): _31.Balance;
                fromAmino(object: _31.BalanceAmino): _31.Balance;
                toAmino(message: _31.Balance): _31.BalanceAmino;
                fromAminoMsg(object: _31.BalanceAminoMsg): _31.Balance;
                toAminoMsg(message: _31.Balance): _31.BalanceAminoMsg;
                fromProtoMsg(message: _31.BalanceProtoMsg): _31.Balance;
                toProto(message: _31.Balance): Uint8Array;
                toProtoMsg(message: _31.Balance): _31.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _30.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.Params;
                fromPartial(object: Partial<_30.Params>): _30.Params;
                fromAmino(object: _30.ParamsAmino): _30.Params;
                toAmino(message: _30.Params): _30.ParamsAmino;
                fromAminoMsg(object: _30.ParamsAminoMsg): _30.Params;
                toAminoMsg(message: _30.Params): _30.ParamsAminoMsg;
                fromProtoMsg(message: _30.ParamsProtoMsg): _30.Params;
                toProto(message: _30.Params): Uint8Array;
                toProtoMsg(message: _30.Params): _30.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _30.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.SendEnabled;
                fromPartial(object: Partial<_30.SendEnabled>): _30.SendEnabled;
                fromAmino(object: _30.SendEnabledAmino): _30.SendEnabled;
                toAmino(message: _30.SendEnabled): _30.SendEnabledAmino;
                fromAminoMsg(object: _30.SendEnabledAminoMsg): _30.SendEnabled;
                toAminoMsg(message: _30.SendEnabled): _30.SendEnabledAminoMsg;
                fromProtoMsg(message: _30.SendEnabledProtoMsg): _30.SendEnabled;
                toProto(message: _30.SendEnabled): Uint8Array;
                toProtoMsg(message: _30.SendEnabled): _30.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _30.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.Input;
                fromPartial(object: Partial<_30.Input>): _30.Input;
                fromAmino(object: _30.InputAmino): _30.Input;
                toAmino(message: _30.Input): _30.InputAmino;
                fromAminoMsg(object: _30.InputAminoMsg): _30.Input;
                toAminoMsg(message: _30.Input): _30.InputAminoMsg;
                fromProtoMsg(message: _30.InputProtoMsg): _30.Input;
                toProto(message: _30.Input): Uint8Array;
                toProtoMsg(message: _30.Input): _30.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _30.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.Output;
                fromPartial(object: Partial<_30.Output>): _30.Output;
                fromAmino(object: _30.OutputAmino): _30.Output;
                toAmino(message: _30.Output): _30.OutputAmino;
                fromAminoMsg(object: _30.OutputAminoMsg): _30.Output;
                toAminoMsg(message: _30.Output): _30.OutputAminoMsg;
                fromProtoMsg(message: _30.OutputProtoMsg): _30.Output;
                toProto(message: _30.Output): Uint8Array;
                toProtoMsg(message: _30.Output): _30.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _30.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.Supply;
                fromPartial(object: Partial<_30.Supply>): _30.Supply;
                fromAmino(object: _30.SupplyAmino): _30.Supply;
                toAmino(message: _30.Supply): _30.SupplyAmino;
                fromAminoMsg(object: _30.SupplyAminoMsg): _30.Supply;
                toAminoMsg(message: _30.Supply): _30.SupplyAminoMsg;
                fromProtoMsg(message: _30.SupplyProtoMsg): _30.Supply;
                toProto(message: _30.Supply): Uint8Array;
                toProtoMsg(message: _30.Supply): _30.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _30.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.DenomUnit;
                fromPartial(object: Partial<_30.DenomUnit>): _30.DenomUnit;
                fromAmino(object: _30.DenomUnitAmino): _30.DenomUnit;
                toAmino(message: _30.DenomUnit): _30.DenomUnitAmino;
                fromAminoMsg(object: _30.DenomUnitAminoMsg): _30.DenomUnit;
                toAminoMsg(message: _30.DenomUnit): _30.DenomUnitAminoMsg;
                fromProtoMsg(message: _30.DenomUnitProtoMsg): _30.DenomUnit;
                toProto(message: _30.DenomUnit): Uint8Array;
                toProtoMsg(message: _30.DenomUnit): _30.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _30.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.Metadata;
                fromPartial(object: Partial<_30.Metadata>): _30.Metadata;
                fromAmino(object: _30.MetadataAmino): _30.Metadata;
                toAmino(message: _30.Metadata): _30.MetadataAmino;
                fromAminoMsg(object: _30.MetadataAminoMsg): _30.Metadata;
                toAminoMsg(message: _30.Metadata): _30.MetadataAminoMsg;
                fromProtoMsg(message: _30.MetadataProtoMsg): _30.Metadata;
                toProto(message: _30.Metadata): Uint8Array;
                toProtoMsg(message: _30.Metadata): _30.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _29.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.SendAuthorization;
                fromPartial(object: Partial<_29.SendAuthorization>): _29.SendAuthorization;
                fromAmino(object: _29.SendAuthorizationAmino): _29.SendAuthorization;
                toAmino(message: _29.SendAuthorization): _29.SendAuthorizationAmino;
                fromAminoMsg(object: _29.SendAuthorizationAminoMsg): _29.SendAuthorization;
                toAminoMsg(message: _29.SendAuthorization): _29.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _29.SendAuthorizationProtoMsg): _29.SendAuthorization;
                toProto(message: _29.SendAuthorization): Uint8Array;
                toProtoMsg(message: _29.SendAuthorization): _29.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _34.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.TxResponse;
                    fromPartial(object: Partial<_34.TxResponse>): _34.TxResponse;
                    fromAmino(object: _34.TxResponseAmino): _34.TxResponse;
                    toAmino(message: _34.TxResponse): _34.TxResponseAmino;
                    fromAminoMsg(object: _34.TxResponseAminoMsg): _34.TxResponse;
                    toAminoMsg(message: _34.TxResponse): _34.TxResponseAminoMsg;
                    fromProtoMsg(message: _34.TxResponseProtoMsg): _34.TxResponse;
                    toProto(message: _34.TxResponse): Uint8Array;
                    toProtoMsg(message: _34.TxResponse): _34.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _34.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.ABCIMessageLog;
                    fromPartial(object: Partial<_34.ABCIMessageLog>): _34.ABCIMessageLog;
                    fromAmino(object: _34.ABCIMessageLogAmino): _34.ABCIMessageLog;
                    toAmino(message: _34.ABCIMessageLog): _34.ABCIMessageLogAmino;
                    fromAminoMsg(object: _34.ABCIMessageLogAminoMsg): _34.ABCIMessageLog;
                    toAminoMsg(message: _34.ABCIMessageLog): _34.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _34.ABCIMessageLogProtoMsg): _34.ABCIMessageLog;
                    toProto(message: _34.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _34.ABCIMessageLog): _34.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _34.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.StringEvent;
                    fromPartial(object: Partial<_34.StringEvent>): _34.StringEvent;
                    fromAmino(object: _34.StringEventAmino): _34.StringEvent;
                    toAmino(message: _34.StringEvent): _34.StringEventAmino;
                    fromAminoMsg(object: _34.StringEventAminoMsg): _34.StringEvent;
                    toAminoMsg(message: _34.StringEvent): _34.StringEventAminoMsg;
                    fromProtoMsg(message: _34.StringEventProtoMsg): _34.StringEvent;
                    toProto(message: _34.StringEvent): Uint8Array;
                    toProtoMsg(message: _34.StringEvent): _34.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _34.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.Attribute;
                    fromPartial(object: Partial<_34.Attribute>): _34.Attribute;
                    fromAmino(object: _34.AttributeAmino): _34.Attribute;
                    toAmino(message: _34.Attribute): _34.AttributeAmino;
                    fromAminoMsg(object: _34.AttributeAminoMsg): _34.Attribute;
                    toAminoMsg(message: _34.Attribute): _34.AttributeAminoMsg;
                    fromProtoMsg(message: _34.AttributeProtoMsg): _34.Attribute;
                    toProto(message: _34.Attribute): Uint8Array;
                    toProtoMsg(message: _34.Attribute): _34.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _34.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.GasInfo;
                    fromPartial(object: Partial<_34.GasInfo>): _34.GasInfo;
                    fromAmino(object: _34.GasInfoAmino): _34.GasInfo;
                    toAmino(message: _34.GasInfo): _34.GasInfoAmino;
                    fromAminoMsg(object: _34.GasInfoAminoMsg): _34.GasInfo;
                    toAminoMsg(message: _34.GasInfo): _34.GasInfoAminoMsg;
                    fromProtoMsg(message: _34.GasInfoProtoMsg): _34.GasInfo;
                    toProto(message: _34.GasInfo): Uint8Array;
                    toProtoMsg(message: _34.GasInfo): _34.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _34.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.Result;
                    fromPartial(object: Partial<_34.Result>): _34.Result;
                    fromAmino(object: _34.ResultAmino): _34.Result;
                    toAmino(message: _34.Result): _34.ResultAmino;
                    fromAminoMsg(object: _34.ResultAminoMsg): _34.Result;
                    toAminoMsg(message: _34.Result): _34.ResultAminoMsg;
                    fromProtoMsg(message: _34.ResultProtoMsg): _34.Result;
                    toProto(message: _34.Result): Uint8Array;
                    toProtoMsg(message: _34.Result): _34.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _34.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.SimulationResponse;
                    fromPartial(object: Partial<_34.SimulationResponse>): _34.SimulationResponse;
                    fromAmino(object: _34.SimulationResponseAmino): _34.SimulationResponse;
                    toAmino(message: _34.SimulationResponse): _34.SimulationResponseAmino;
                    fromAminoMsg(object: _34.SimulationResponseAminoMsg): _34.SimulationResponse;
                    toAminoMsg(message: _34.SimulationResponse): _34.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _34.SimulationResponseProtoMsg): _34.SimulationResponse;
                    toProto(message: _34.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _34.SimulationResponse): _34.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _34.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.MsgData;
                    fromPartial(object: Partial<_34.MsgData>): _34.MsgData;
                    fromAmino(object: _34.MsgDataAmino): _34.MsgData;
                    toAmino(message: _34.MsgData): _34.MsgDataAmino;
                    fromAminoMsg(object: _34.MsgDataAminoMsg): _34.MsgData;
                    toAminoMsg(message: _34.MsgData): _34.MsgDataAminoMsg;
                    fromProtoMsg(message: _34.MsgDataProtoMsg): _34.MsgData;
                    toProto(message: _34.MsgData): Uint8Array;
                    toProtoMsg(message: _34.MsgData): _34.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _34.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.TxMsgData;
                    fromPartial(object: Partial<_34.TxMsgData>): _34.TxMsgData;
                    fromAmino(object: _34.TxMsgDataAmino): _34.TxMsgData;
                    toAmino(message: _34.TxMsgData): _34.TxMsgDataAmino;
                    fromAminoMsg(object: _34.TxMsgDataAminoMsg): _34.TxMsgData;
                    toAminoMsg(message: _34.TxMsgData): _34.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _34.TxMsgDataProtoMsg): _34.TxMsgData;
                    toProto(message: _34.TxMsgData): Uint8Array;
                    toProtoMsg(message: _34.TxMsgData): _34.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _34.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.SearchTxsResult;
                    fromPartial(object: Partial<_34.SearchTxsResult>): _34.SearchTxsResult;
                    fromAmino(object: _34.SearchTxsResultAmino): _34.SearchTxsResult;
                    toAmino(message: _34.SearchTxsResult): _34.SearchTxsResultAmino;
                    fromAminoMsg(object: _34.SearchTxsResultAminoMsg): _34.SearchTxsResult;
                    toAminoMsg(message: _34.SearchTxsResult): _34.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _34.SearchTxsResultProtoMsg): _34.SearchTxsResult;
                    toProto(message: _34.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _34.SearchTxsResult): _34.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _35.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.Pairs;
                    fromPartial(object: Partial<_35.Pairs>): _35.Pairs;
                    fromAmino(object: _35.PairsAmino): _35.Pairs;
                    toAmino(message: _35.Pairs): _35.PairsAmino;
                    fromAminoMsg(object: _35.PairsAminoMsg): _35.Pairs;
                    toAminoMsg(message: _35.Pairs): _35.PairsAminoMsg;
                    fromProtoMsg(message: _35.PairsProtoMsg): _35.Pairs;
                    toProto(message: _35.Pairs): Uint8Array;
                    toProtoMsg(message: _35.Pairs): _35.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _35.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.Pair;
                    fromPartial(object: Partial<_35.Pair>): _35.Pair;
                    fromAmino(object: _35.PairAmino): _35.Pair;
                    toAmino(message: _35.Pair): _35.PairAmino;
                    fromAminoMsg(object: _35.PairAminoMsg): _35.Pair;
                    toAminoMsg(message: _35.Pair): _35.PairAminoMsg;
                    fromProtoMsg(message: _35.PairProtoMsg): _35.Pair;
                    toProto(message: _35.Pair): Uint8Array;
                    toProtoMsg(message: _35.Pair): _35.PairProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _36.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.PageRequest;
                    fromPartial(object: Partial<_36.PageRequest>): _36.PageRequest;
                    fromAmino(object: _36.PageRequestAmino): _36.PageRequest;
                    toAmino(message: _36.PageRequest): _36.PageRequestAmino;
                    fromAminoMsg(object: _36.PageRequestAminoMsg): _36.PageRequest;
                    toAminoMsg(message: _36.PageRequest): _36.PageRequestAminoMsg;
                    fromProtoMsg(message: _36.PageRequestProtoMsg): _36.PageRequest;
                    toProto(message: _36.PageRequest): Uint8Array;
                    toProtoMsg(message: _36.PageRequest): _36.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _36.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.PageResponse;
                    fromPartial(object: Partial<_36.PageResponse>): _36.PageResponse;
                    fromAmino(object: _36.PageResponseAmino): _36.PageResponse;
                    toAmino(message: _36.PageResponse): _36.PageResponseAmino;
                    fromAminoMsg(object: _36.PageResponseAminoMsg): _36.PageResponse;
                    toAminoMsg(message: _36.PageResponse): _36.PageResponseAminoMsg;
                    fromProtoMsg(message: _36.PageResponseProtoMsg): _36.PageResponse;
                    toProto(message: _36.PageResponse): Uint8Array;
                    toProtoMsg(message: _36.PageResponse): _36.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _37.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _37.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_37.ListAllInterfacesRequest>): _37.ListAllInterfacesRequest;
                    fromAmino(_: _37.ListAllInterfacesRequestAmino): _37.ListAllInterfacesRequest;
                    toAmino(_: _37.ListAllInterfacesRequest): _37.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _37.ListAllInterfacesRequestAminoMsg): _37.ListAllInterfacesRequest;
                    toAminoMsg(message: _37.ListAllInterfacesRequest): _37.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _37.ListAllInterfacesRequestProtoMsg): _37.ListAllInterfacesRequest;
                    toProto(message: _37.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _37.ListAllInterfacesRequest): _37.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _37.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_37.ListAllInterfacesResponse>): _37.ListAllInterfacesResponse;
                    fromAmino(object: _37.ListAllInterfacesResponseAmino): _37.ListAllInterfacesResponse;
                    toAmino(message: _37.ListAllInterfacesResponse): _37.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _37.ListAllInterfacesResponseAminoMsg): _37.ListAllInterfacesResponse;
                    toAminoMsg(message: _37.ListAllInterfacesResponse): _37.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _37.ListAllInterfacesResponseProtoMsg): _37.ListAllInterfacesResponse;
                    toProto(message: _37.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _37.ListAllInterfacesResponse): _37.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _37.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.ListImplementationsRequest;
                    fromPartial(object: Partial<_37.ListImplementationsRequest>): _37.ListImplementationsRequest;
                    fromAmino(object: _37.ListImplementationsRequestAmino): _37.ListImplementationsRequest;
                    toAmino(message: _37.ListImplementationsRequest): _37.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _37.ListImplementationsRequestAminoMsg): _37.ListImplementationsRequest;
                    toAminoMsg(message: _37.ListImplementationsRequest): _37.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _37.ListImplementationsRequestProtoMsg): _37.ListImplementationsRequest;
                    toProto(message: _37.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _37.ListImplementationsRequest): _37.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _37.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.ListImplementationsResponse;
                    fromPartial(object: Partial<_37.ListImplementationsResponse>): _37.ListImplementationsResponse;
                    fromAmino(object: _37.ListImplementationsResponseAmino): _37.ListImplementationsResponse;
                    toAmino(message: _37.ListImplementationsResponse): _37.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _37.ListImplementationsResponseAminoMsg): _37.ListImplementationsResponse;
                    toAminoMsg(message: _37.ListImplementationsResponse): _37.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _37.ListImplementationsResponseProtoMsg): _37.ListImplementationsResponse;
                    toProto(message: _37.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _37.ListImplementationsResponse): _37.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _38.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.AppDescriptor;
                    fromPartial(object: Partial<_38.AppDescriptor>): _38.AppDescriptor;
                    fromAmino(object: _38.AppDescriptorAmino): _38.AppDescriptor;
                    toAmino(message: _38.AppDescriptor): _38.AppDescriptorAmino;
                    fromAminoMsg(object: _38.AppDescriptorAminoMsg): _38.AppDescriptor;
                    toAminoMsg(message: _38.AppDescriptor): _38.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _38.AppDescriptorProtoMsg): _38.AppDescriptor;
                    toProto(message: _38.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _38.AppDescriptor): _38.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _38.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.TxDescriptor;
                    fromPartial(object: Partial<_38.TxDescriptor>): _38.TxDescriptor;
                    fromAmino(object: _38.TxDescriptorAmino): _38.TxDescriptor;
                    toAmino(message: _38.TxDescriptor): _38.TxDescriptorAmino;
                    fromAminoMsg(object: _38.TxDescriptorAminoMsg): _38.TxDescriptor;
                    toAminoMsg(message: _38.TxDescriptor): _38.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _38.TxDescriptorProtoMsg): _38.TxDescriptor;
                    toProto(message: _38.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _38.TxDescriptor): _38.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _38.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.AuthnDescriptor;
                    fromPartial(object: Partial<_38.AuthnDescriptor>): _38.AuthnDescriptor;
                    fromAmino(object: _38.AuthnDescriptorAmino): _38.AuthnDescriptor;
                    toAmino(message: _38.AuthnDescriptor): _38.AuthnDescriptorAmino;
                    fromAminoMsg(object: _38.AuthnDescriptorAminoMsg): _38.AuthnDescriptor;
                    toAminoMsg(message: _38.AuthnDescriptor): _38.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _38.AuthnDescriptorProtoMsg): _38.AuthnDescriptor;
                    toProto(message: _38.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _38.AuthnDescriptor): _38.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _38.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.SigningModeDescriptor;
                    fromPartial(object: Partial<_38.SigningModeDescriptor>): _38.SigningModeDescriptor;
                    fromAmino(object: _38.SigningModeDescriptorAmino): _38.SigningModeDescriptor;
                    toAmino(message: _38.SigningModeDescriptor): _38.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _38.SigningModeDescriptorAminoMsg): _38.SigningModeDescriptor;
                    toAminoMsg(message: _38.SigningModeDescriptor): _38.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _38.SigningModeDescriptorProtoMsg): _38.SigningModeDescriptor;
                    toProto(message: _38.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _38.SigningModeDescriptor): _38.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _38.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.ChainDescriptor;
                    fromPartial(object: Partial<_38.ChainDescriptor>): _38.ChainDescriptor;
                    fromAmino(object: _38.ChainDescriptorAmino): _38.ChainDescriptor;
                    toAmino(message: _38.ChainDescriptor): _38.ChainDescriptorAmino;
                    fromAminoMsg(object: _38.ChainDescriptorAminoMsg): _38.ChainDescriptor;
                    toAminoMsg(message: _38.ChainDescriptor): _38.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _38.ChainDescriptorProtoMsg): _38.ChainDescriptor;
                    toProto(message: _38.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _38.ChainDescriptor): _38.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _38.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.CodecDescriptor;
                    fromPartial(object: Partial<_38.CodecDescriptor>): _38.CodecDescriptor;
                    fromAmino(object: _38.CodecDescriptorAmino): _38.CodecDescriptor;
                    toAmino(message: _38.CodecDescriptor): _38.CodecDescriptorAmino;
                    fromAminoMsg(object: _38.CodecDescriptorAminoMsg): _38.CodecDescriptor;
                    toAminoMsg(message: _38.CodecDescriptor): _38.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _38.CodecDescriptorProtoMsg): _38.CodecDescriptor;
                    toProto(message: _38.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _38.CodecDescriptor): _38.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _38.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.InterfaceDescriptor;
                    fromPartial(object: Partial<_38.InterfaceDescriptor>): _38.InterfaceDescriptor;
                    fromAmino(object: _38.InterfaceDescriptorAmino): _38.InterfaceDescriptor;
                    toAmino(message: _38.InterfaceDescriptor): _38.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _38.InterfaceDescriptorAminoMsg): _38.InterfaceDescriptor;
                    toAminoMsg(message: _38.InterfaceDescriptor): _38.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _38.InterfaceDescriptorProtoMsg): _38.InterfaceDescriptor;
                    toProto(message: _38.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _38.InterfaceDescriptor): _38.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _38.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_38.InterfaceImplementerDescriptor>): _38.InterfaceImplementerDescriptor;
                    fromAmino(object: _38.InterfaceImplementerDescriptorAmino): _38.InterfaceImplementerDescriptor;
                    toAmino(message: _38.InterfaceImplementerDescriptor): _38.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _38.InterfaceImplementerDescriptorAminoMsg): _38.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _38.InterfaceImplementerDescriptor): _38.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _38.InterfaceImplementerDescriptorProtoMsg): _38.InterfaceImplementerDescriptor;
                    toProto(message: _38.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _38.InterfaceImplementerDescriptor): _38.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _38.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_38.InterfaceAcceptingMessageDescriptor>): _38.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _38.InterfaceAcceptingMessageDescriptorAmino): _38.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _38.InterfaceAcceptingMessageDescriptor): _38.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _38.InterfaceAcceptingMessageDescriptorAminoMsg): _38.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _38.InterfaceAcceptingMessageDescriptor): _38.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _38.InterfaceAcceptingMessageDescriptorProtoMsg): _38.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _38.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _38.InterfaceAcceptingMessageDescriptor): _38.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _38.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.ConfigurationDescriptor;
                    fromPartial(object: Partial<_38.ConfigurationDescriptor>): _38.ConfigurationDescriptor;
                    fromAmino(object: _38.ConfigurationDescriptorAmino): _38.ConfigurationDescriptor;
                    toAmino(message: _38.ConfigurationDescriptor): _38.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _38.ConfigurationDescriptorAminoMsg): _38.ConfigurationDescriptor;
                    toAminoMsg(message: _38.ConfigurationDescriptor): _38.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _38.ConfigurationDescriptorProtoMsg): _38.ConfigurationDescriptor;
                    toProto(message: _38.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _38.ConfigurationDescriptor): _38.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _38.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.MsgDescriptor;
                    fromPartial(object: Partial<_38.MsgDescriptor>): _38.MsgDescriptor;
                    fromAmino(object: _38.MsgDescriptorAmino): _38.MsgDescriptor;
                    toAmino(message: _38.MsgDescriptor): _38.MsgDescriptorAmino;
                    fromAminoMsg(object: _38.MsgDescriptorAminoMsg): _38.MsgDescriptor;
                    toAminoMsg(message: _38.MsgDescriptor): _38.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _38.MsgDescriptorProtoMsg): _38.MsgDescriptor;
                    toProto(message: _38.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _38.MsgDescriptor): _38.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _38.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _38.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_38.GetAuthnDescriptorRequest>): _38.GetAuthnDescriptorRequest;
                    fromAmino(_: _38.GetAuthnDescriptorRequestAmino): _38.GetAuthnDescriptorRequest;
                    toAmino(_: _38.GetAuthnDescriptorRequest): _38.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _38.GetAuthnDescriptorRequestAminoMsg): _38.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _38.GetAuthnDescriptorRequest): _38.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _38.GetAuthnDescriptorRequestProtoMsg): _38.GetAuthnDescriptorRequest;
                    toProto(message: _38.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _38.GetAuthnDescriptorRequest): _38.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _38.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_38.GetAuthnDescriptorResponse>): _38.GetAuthnDescriptorResponse;
                    fromAmino(object: _38.GetAuthnDescriptorResponseAmino): _38.GetAuthnDescriptorResponse;
                    toAmino(message: _38.GetAuthnDescriptorResponse): _38.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _38.GetAuthnDescriptorResponseAminoMsg): _38.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _38.GetAuthnDescriptorResponse): _38.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _38.GetAuthnDescriptorResponseProtoMsg): _38.GetAuthnDescriptorResponse;
                    toProto(message: _38.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _38.GetAuthnDescriptorResponse): _38.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _38.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _38.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_38.GetChainDescriptorRequest>): _38.GetChainDescriptorRequest;
                    fromAmino(_: _38.GetChainDescriptorRequestAmino): _38.GetChainDescriptorRequest;
                    toAmino(_: _38.GetChainDescriptorRequest): _38.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _38.GetChainDescriptorRequestAminoMsg): _38.GetChainDescriptorRequest;
                    toAminoMsg(message: _38.GetChainDescriptorRequest): _38.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _38.GetChainDescriptorRequestProtoMsg): _38.GetChainDescriptorRequest;
                    toProto(message: _38.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _38.GetChainDescriptorRequest): _38.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _38.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_38.GetChainDescriptorResponse>): _38.GetChainDescriptorResponse;
                    fromAmino(object: _38.GetChainDescriptorResponseAmino): _38.GetChainDescriptorResponse;
                    toAmino(message: _38.GetChainDescriptorResponse): _38.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _38.GetChainDescriptorResponseAminoMsg): _38.GetChainDescriptorResponse;
                    toAminoMsg(message: _38.GetChainDescriptorResponse): _38.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _38.GetChainDescriptorResponseProtoMsg): _38.GetChainDescriptorResponse;
                    toProto(message: _38.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _38.GetChainDescriptorResponse): _38.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _38.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _38.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_38.GetCodecDescriptorRequest>): _38.GetCodecDescriptorRequest;
                    fromAmino(_: _38.GetCodecDescriptorRequestAmino): _38.GetCodecDescriptorRequest;
                    toAmino(_: _38.GetCodecDescriptorRequest): _38.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _38.GetCodecDescriptorRequestAminoMsg): _38.GetCodecDescriptorRequest;
                    toAminoMsg(message: _38.GetCodecDescriptorRequest): _38.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _38.GetCodecDescriptorRequestProtoMsg): _38.GetCodecDescriptorRequest;
                    toProto(message: _38.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _38.GetCodecDescriptorRequest): _38.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _38.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_38.GetCodecDescriptorResponse>): _38.GetCodecDescriptorResponse;
                    fromAmino(object: _38.GetCodecDescriptorResponseAmino): _38.GetCodecDescriptorResponse;
                    toAmino(message: _38.GetCodecDescriptorResponse): _38.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _38.GetCodecDescriptorResponseAminoMsg): _38.GetCodecDescriptorResponse;
                    toAminoMsg(message: _38.GetCodecDescriptorResponse): _38.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _38.GetCodecDescriptorResponseProtoMsg): _38.GetCodecDescriptorResponse;
                    toProto(message: _38.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _38.GetCodecDescriptorResponse): _38.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _38.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _38.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_38.GetConfigurationDescriptorRequest>): _38.GetConfigurationDescriptorRequest;
                    fromAmino(_: _38.GetConfigurationDescriptorRequestAmino): _38.GetConfigurationDescriptorRequest;
                    toAmino(_: _38.GetConfigurationDescriptorRequest): _38.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _38.GetConfigurationDescriptorRequestAminoMsg): _38.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _38.GetConfigurationDescriptorRequest): _38.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _38.GetConfigurationDescriptorRequestProtoMsg): _38.GetConfigurationDescriptorRequest;
                    toProto(message: _38.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _38.GetConfigurationDescriptorRequest): _38.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _38.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_38.GetConfigurationDescriptorResponse>): _38.GetConfigurationDescriptorResponse;
                    fromAmino(object: _38.GetConfigurationDescriptorResponseAmino): _38.GetConfigurationDescriptorResponse;
                    toAmino(message: _38.GetConfigurationDescriptorResponse): _38.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _38.GetConfigurationDescriptorResponseAminoMsg): _38.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _38.GetConfigurationDescriptorResponse): _38.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _38.GetConfigurationDescriptorResponseProtoMsg): _38.GetConfigurationDescriptorResponse;
                    toProto(message: _38.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _38.GetConfigurationDescriptorResponse): _38.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _38.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _38.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_38.GetQueryServicesDescriptorRequest>): _38.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _38.GetQueryServicesDescriptorRequestAmino): _38.GetQueryServicesDescriptorRequest;
                    toAmino(_: _38.GetQueryServicesDescriptorRequest): _38.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _38.GetQueryServicesDescriptorRequestAminoMsg): _38.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _38.GetQueryServicesDescriptorRequest): _38.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _38.GetQueryServicesDescriptorRequestProtoMsg): _38.GetQueryServicesDescriptorRequest;
                    toProto(message: _38.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _38.GetQueryServicesDescriptorRequest): _38.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _38.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_38.GetQueryServicesDescriptorResponse>): _38.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _38.GetQueryServicesDescriptorResponseAmino): _38.GetQueryServicesDescriptorResponse;
                    toAmino(message: _38.GetQueryServicesDescriptorResponse): _38.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _38.GetQueryServicesDescriptorResponseAminoMsg): _38.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _38.GetQueryServicesDescriptorResponse): _38.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _38.GetQueryServicesDescriptorResponseProtoMsg): _38.GetQueryServicesDescriptorResponse;
                    toProto(message: _38.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _38.GetQueryServicesDescriptorResponse): _38.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _38.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _38.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_38.GetTxDescriptorRequest>): _38.GetTxDescriptorRequest;
                    fromAmino(_: _38.GetTxDescriptorRequestAmino): _38.GetTxDescriptorRequest;
                    toAmino(_: _38.GetTxDescriptorRequest): _38.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _38.GetTxDescriptorRequestAminoMsg): _38.GetTxDescriptorRequest;
                    toAminoMsg(message: _38.GetTxDescriptorRequest): _38.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _38.GetTxDescriptorRequestProtoMsg): _38.GetTxDescriptorRequest;
                    toProto(message: _38.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _38.GetTxDescriptorRequest): _38.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _38.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_38.GetTxDescriptorResponse>): _38.GetTxDescriptorResponse;
                    fromAmino(object: _38.GetTxDescriptorResponseAmino): _38.GetTxDescriptorResponse;
                    toAmino(message: _38.GetTxDescriptorResponse): _38.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _38.GetTxDescriptorResponseAminoMsg): _38.GetTxDescriptorResponse;
                    toAminoMsg(message: _38.GetTxDescriptorResponse): _38.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _38.GetTxDescriptorResponseProtoMsg): _38.GetTxDescriptorResponse;
                    toProto(message: _38.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _38.GetTxDescriptorResponse): _38.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _38.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.QueryServicesDescriptor;
                    fromPartial(object: Partial<_38.QueryServicesDescriptor>): _38.QueryServicesDescriptor;
                    fromAmino(object: _38.QueryServicesDescriptorAmino): _38.QueryServicesDescriptor;
                    toAmino(message: _38.QueryServicesDescriptor): _38.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _38.QueryServicesDescriptorAminoMsg): _38.QueryServicesDescriptor;
                    toAminoMsg(message: _38.QueryServicesDescriptor): _38.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _38.QueryServicesDescriptorProtoMsg): _38.QueryServicesDescriptor;
                    toProto(message: _38.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _38.QueryServicesDescriptor): _38.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _38.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.QueryServiceDescriptor;
                    fromPartial(object: Partial<_38.QueryServiceDescriptor>): _38.QueryServiceDescriptor;
                    fromAmino(object: _38.QueryServiceDescriptorAmino): _38.QueryServiceDescriptor;
                    toAmino(message: _38.QueryServiceDescriptor): _38.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _38.QueryServiceDescriptorAminoMsg): _38.QueryServiceDescriptor;
                    toAminoMsg(message: _38.QueryServiceDescriptor): _38.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _38.QueryServiceDescriptorProtoMsg): _38.QueryServiceDescriptor;
                    toProto(message: _38.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _38.QueryServiceDescriptor): _38.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _38.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.QueryMethodDescriptor;
                    fromPartial(object: Partial<_38.QueryMethodDescriptor>): _38.QueryMethodDescriptor;
                    fromAmino(object: _38.QueryMethodDescriptorAmino): _38.QueryMethodDescriptor;
                    toAmino(message: _38.QueryMethodDescriptor): _38.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _38.QueryMethodDescriptorAminoMsg): _38.QueryMethodDescriptor;
                    toAminoMsg(message: _38.QueryMethodDescriptor): _38.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _38.QueryMethodDescriptorProtoMsg): _38.QueryMethodDescriptor;
                    toProto(message: _38.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _38.QueryMethodDescriptor): _38.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _39.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.Snapshot;
                    fromPartial(object: Partial<_39.Snapshot>): _39.Snapshot;
                    fromAmino(object: _39.SnapshotAmino): _39.Snapshot;
                    toAmino(message: _39.Snapshot): _39.SnapshotAmino;
                    fromAminoMsg(object: _39.SnapshotAminoMsg): _39.Snapshot;
                    toAminoMsg(message: _39.Snapshot): _39.SnapshotAminoMsg;
                    fromProtoMsg(message: _39.SnapshotProtoMsg): _39.Snapshot;
                    toProto(message: _39.Snapshot): Uint8Array;
                    toProtoMsg(message: _39.Snapshot): _39.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _39.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.Metadata;
                    fromPartial(object: Partial<_39.Metadata>): _39.Metadata;
                    fromAmino(object: _39.MetadataAmino): _39.Metadata;
                    toAmino(message: _39.Metadata): _39.MetadataAmino;
                    fromAminoMsg(object: _39.MetadataAminoMsg): _39.Metadata;
                    toAminoMsg(message: _39.Metadata): _39.MetadataAminoMsg;
                    fromProtoMsg(message: _39.MetadataProtoMsg): _39.Metadata;
                    toProto(message: _39.Metadata): Uint8Array;
                    toProtoMsg(message: _39.Metadata): _39.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _39.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.SnapshotItem;
                    fromPartial(object: Partial<_39.SnapshotItem>): _39.SnapshotItem;
                    fromAmino(object: _39.SnapshotItemAmino): _39.SnapshotItem;
                    toAmino(message: _39.SnapshotItem): _39.SnapshotItemAmino;
                    fromAminoMsg(object: _39.SnapshotItemAminoMsg): _39.SnapshotItem;
                    toAminoMsg(message: _39.SnapshotItem): _39.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _39.SnapshotItemProtoMsg): _39.SnapshotItem;
                    toProto(message: _39.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _39.SnapshotItem): _39.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _39.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.SnapshotStoreItem;
                    fromPartial(object: Partial<_39.SnapshotStoreItem>): _39.SnapshotStoreItem;
                    fromAmino(object: _39.SnapshotStoreItemAmino): _39.SnapshotStoreItem;
                    toAmino(message: _39.SnapshotStoreItem): _39.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _39.SnapshotStoreItemAminoMsg): _39.SnapshotStoreItem;
                    toAminoMsg(message: _39.SnapshotStoreItem): _39.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _39.SnapshotStoreItemProtoMsg): _39.SnapshotStoreItem;
                    toProto(message: _39.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _39.SnapshotStoreItem): _39.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _39.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.SnapshotIAVLItem;
                    fromPartial(object: Partial<_39.SnapshotIAVLItem>): _39.SnapshotIAVLItem;
                    fromAmino(object: _39.SnapshotIAVLItemAmino): _39.SnapshotIAVLItem;
                    toAmino(message: _39.SnapshotIAVLItem): _39.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _39.SnapshotIAVLItemAminoMsg): _39.SnapshotIAVLItem;
                    toAminoMsg(message: _39.SnapshotIAVLItem): _39.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _39.SnapshotIAVLItemProtoMsg): _39.SnapshotIAVLItem;
                    toProto(message: _39.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _39.SnapshotIAVLItem): _39.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _39.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_39.SnapshotExtensionMeta>): _39.SnapshotExtensionMeta;
                    fromAmino(object: _39.SnapshotExtensionMetaAmino): _39.SnapshotExtensionMeta;
                    toAmino(message: _39.SnapshotExtensionMeta): _39.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _39.SnapshotExtensionMetaAminoMsg): _39.SnapshotExtensionMeta;
                    toAminoMsg(message: _39.SnapshotExtensionMeta): _39.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _39.SnapshotExtensionMetaProtoMsg): _39.SnapshotExtensionMeta;
                    toProto(message: _39.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _39.SnapshotExtensionMeta): _39.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _39.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_39.SnapshotExtensionPayload>): _39.SnapshotExtensionPayload;
                    fromAmino(object: _39.SnapshotExtensionPayloadAmino): _39.SnapshotExtensionPayload;
                    toAmino(message: _39.SnapshotExtensionPayload): _39.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _39.SnapshotExtensionPayloadAminoMsg): _39.SnapshotExtensionPayload;
                    toAminoMsg(message: _39.SnapshotExtensionPayload): _39.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _39.SnapshotExtensionPayloadProtoMsg): _39.SnapshotExtensionPayload;
                    toProto(message: _39.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _39.SnapshotExtensionPayload): _39.SnapshotExtensionPayloadProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _42.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.SnapshotItem;
                    fromPartial(object: Partial<_42.SnapshotItem>): _42.SnapshotItem;
                    fromAmino(object: _42.SnapshotItemAmino): _42.SnapshotItem;
                    toAmino(message: _42.SnapshotItem): _42.SnapshotItemAmino;
                    fromAminoMsg(object: _42.SnapshotItemAminoMsg): _42.SnapshotItem;
                    toAminoMsg(message: _42.SnapshotItem): _42.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _42.SnapshotItemProtoMsg): _42.SnapshotItem;
                    toProto(message: _42.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _42.SnapshotItem): _42.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _42.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.SnapshotStoreItem;
                    fromPartial(object: Partial<_42.SnapshotStoreItem>): _42.SnapshotStoreItem;
                    fromAmino(object: _42.SnapshotStoreItemAmino): _42.SnapshotStoreItem;
                    toAmino(message: _42.SnapshotStoreItem): _42.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _42.SnapshotStoreItemAminoMsg): _42.SnapshotStoreItem;
                    toAminoMsg(message: _42.SnapshotStoreItem): _42.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _42.SnapshotStoreItemProtoMsg): _42.SnapshotStoreItem;
                    toProto(message: _42.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _42.SnapshotStoreItem): _42.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _42.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.SnapshotIAVLItem;
                    fromPartial(object: Partial<_42.SnapshotIAVLItem>): _42.SnapshotIAVLItem;
                    fromAmino(object: _42.SnapshotIAVLItemAmino): _42.SnapshotIAVLItem;
                    toAmino(message: _42.SnapshotIAVLItem): _42.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _42.SnapshotIAVLItemAminoMsg): _42.SnapshotIAVLItem;
                    toAminoMsg(message: _42.SnapshotIAVLItem): _42.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _42.SnapshotIAVLItemProtoMsg): _42.SnapshotIAVLItem;
                    toProto(message: _42.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _42.SnapshotIAVLItem): _42.SnapshotIAVLItemProtoMsg;
                };
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _41.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.StoreKVPair;
                    fromPartial(object: Partial<_41.StoreKVPair>): _41.StoreKVPair;
                    fromAmino(object: _41.StoreKVPairAmino): _41.StoreKVPair;
                    toAmino(message: _41.StoreKVPair): _41.StoreKVPairAmino;
                    fromAminoMsg(object: _41.StoreKVPairAminoMsg): _41.StoreKVPair;
                    toAminoMsg(message: _41.StoreKVPair): _41.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _41.StoreKVPairProtoMsg): _41.StoreKVPair;
                    toProto(message: _41.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _41.StoreKVPair): _41.StoreKVPairProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _40.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.CommitInfo;
                    fromPartial(object: Partial<_40.CommitInfo>): _40.CommitInfo;
                    fromAmino(object: _40.CommitInfoAmino): _40.CommitInfo;
                    toAmino(message: _40.CommitInfo): _40.CommitInfoAmino;
                    fromAminoMsg(object: _40.CommitInfoAminoMsg): _40.CommitInfo;
                    toAminoMsg(message: _40.CommitInfo): _40.CommitInfoAminoMsg;
                    fromProtoMsg(message: _40.CommitInfoProtoMsg): _40.CommitInfo;
                    toProto(message: _40.CommitInfo): Uint8Array;
                    toProtoMsg(message: _40.CommitInfo): _40.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _40.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.StoreInfo;
                    fromPartial(object: Partial<_40.StoreInfo>): _40.StoreInfo;
                    fromAmino(object: _40.StoreInfoAmino): _40.StoreInfo;
                    toAmino(message: _40.StoreInfo): _40.StoreInfoAmino;
                    fromAminoMsg(object: _40.StoreInfoAminoMsg): _40.StoreInfo;
                    toAminoMsg(message: _40.StoreInfo): _40.StoreInfoAminoMsg;
                    fromProtoMsg(message: _40.StoreInfoProtoMsg): _40.StoreInfo;
                    toProto(message: _40.StoreInfo): Uint8Array;
                    toProtoMsg(message: _40.StoreInfo): _40.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _40.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.CommitID;
                    fromPartial(object: Partial<_40.CommitID>): _40.CommitID;
                    fromAmino(object: _40.CommitIDAmino): _40.CommitID;
                    toAmino(message: _40.CommitID): _40.CommitIDAmino;
                    fromAminoMsg(object: _40.CommitIDAminoMsg): _40.CommitID;
                    toAminoMsg(message: _40.CommitID): _40.CommitIDAminoMsg;
                    fromProtoMsg(message: _40.CommitIDProtoMsg): _40.CommitID;
                    toProto(message: _40.CommitID): Uint8Array;
                    toProtoMsg(message: _40.CommitID): _40.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _188.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _43.GetNodeInfoRequest): Promise<_43.GetNodeInfoResponse>;
                    getSyncing(request?: _43.GetSyncingRequest): Promise<_43.GetSyncingResponse>;
                    getLatestBlock(request?: _43.GetLatestBlockRequest): Promise<_43.GetLatestBlockResponse>;
                    getBlockByHeight(request: _43.GetBlockByHeightRequest): Promise<_43.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _43.GetLatestValidatorSetRequest): Promise<_43.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _43.GetValidatorSetByHeightRequest): Promise<_43.GetValidatorSetByHeightResponse>;
                };
                LCDQueryClient: typeof _174.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _43.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_43.GetValidatorSetByHeightRequest>): _43.GetValidatorSetByHeightRequest;
                    fromAmino(object: _43.GetValidatorSetByHeightRequestAmino): _43.GetValidatorSetByHeightRequest;
                    toAmino(message: _43.GetValidatorSetByHeightRequest): _43.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _43.GetValidatorSetByHeightRequestAminoMsg): _43.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _43.GetValidatorSetByHeightRequest): _43.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _43.GetValidatorSetByHeightRequestProtoMsg): _43.GetValidatorSetByHeightRequest;
                    toProto(message: _43.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _43.GetValidatorSetByHeightRequest): _43.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _43.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_43.GetValidatorSetByHeightResponse>): _43.GetValidatorSetByHeightResponse;
                    fromAmino(object: _43.GetValidatorSetByHeightResponseAmino): _43.GetValidatorSetByHeightResponse;
                    toAmino(message: _43.GetValidatorSetByHeightResponse): _43.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _43.GetValidatorSetByHeightResponseAminoMsg): _43.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _43.GetValidatorSetByHeightResponse): _43.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _43.GetValidatorSetByHeightResponseProtoMsg): _43.GetValidatorSetByHeightResponse;
                    toProto(message: _43.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _43.GetValidatorSetByHeightResponse): _43.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _43.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_43.GetLatestValidatorSetRequest>): _43.GetLatestValidatorSetRequest;
                    fromAmino(object: _43.GetLatestValidatorSetRequestAmino): _43.GetLatestValidatorSetRequest;
                    toAmino(message: _43.GetLatestValidatorSetRequest): _43.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _43.GetLatestValidatorSetRequestAminoMsg): _43.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _43.GetLatestValidatorSetRequest): _43.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _43.GetLatestValidatorSetRequestProtoMsg): _43.GetLatestValidatorSetRequest;
                    toProto(message: _43.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _43.GetLatestValidatorSetRequest): _43.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _43.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_43.GetLatestValidatorSetResponse>): _43.GetLatestValidatorSetResponse;
                    fromAmino(object: _43.GetLatestValidatorSetResponseAmino): _43.GetLatestValidatorSetResponse;
                    toAmino(message: _43.GetLatestValidatorSetResponse): _43.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _43.GetLatestValidatorSetResponseAminoMsg): _43.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _43.GetLatestValidatorSetResponse): _43.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _43.GetLatestValidatorSetResponseProtoMsg): _43.GetLatestValidatorSetResponse;
                    toProto(message: _43.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _43.GetLatestValidatorSetResponse): _43.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _43.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.Validator;
                    fromPartial(object: Partial<_43.Validator>): _43.Validator;
                    fromAmino(object: _43.ValidatorAmino): _43.Validator;
                    toAmino(message: _43.Validator): _43.ValidatorAmino;
                    fromAminoMsg(object: _43.ValidatorAminoMsg): _43.Validator;
                    toAminoMsg(message: _43.Validator): _43.ValidatorAminoMsg;
                    fromProtoMsg(message: _43.ValidatorProtoMsg): _43.Validator;
                    toProto(message: _43.Validator): Uint8Array;
                    toProtoMsg(message: _43.Validator): _43.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _43.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_43.GetBlockByHeightRequest>): _43.GetBlockByHeightRequest;
                    fromAmino(object: _43.GetBlockByHeightRequestAmino): _43.GetBlockByHeightRequest;
                    toAmino(message: _43.GetBlockByHeightRequest): _43.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _43.GetBlockByHeightRequestAminoMsg): _43.GetBlockByHeightRequest;
                    toAminoMsg(message: _43.GetBlockByHeightRequest): _43.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _43.GetBlockByHeightRequestProtoMsg): _43.GetBlockByHeightRequest;
                    toProto(message: _43.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _43.GetBlockByHeightRequest): _43.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _43.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_43.GetBlockByHeightResponse>): _43.GetBlockByHeightResponse;
                    fromAmino(object: _43.GetBlockByHeightResponseAmino): _43.GetBlockByHeightResponse;
                    toAmino(message: _43.GetBlockByHeightResponse): _43.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _43.GetBlockByHeightResponseAminoMsg): _43.GetBlockByHeightResponse;
                    toAminoMsg(message: _43.GetBlockByHeightResponse): _43.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _43.GetBlockByHeightResponseProtoMsg): _43.GetBlockByHeightResponse;
                    toProto(message: _43.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _43.GetBlockByHeightResponse): _43.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _43.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _43.GetLatestBlockRequest;
                    fromPartial(_: Partial<_43.GetLatestBlockRequest>): _43.GetLatestBlockRequest;
                    fromAmino(_: _43.GetLatestBlockRequestAmino): _43.GetLatestBlockRequest;
                    toAmino(_: _43.GetLatestBlockRequest): _43.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _43.GetLatestBlockRequestAminoMsg): _43.GetLatestBlockRequest;
                    toAminoMsg(message: _43.GetLatestBlockRequest): _43.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _43.GetLatestBlockRequestProtoMsg): _43.GetLatestBlockRequest;
                    toProto(message: _43.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _43.GetLatestBlockRequest): _43.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _43.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.GetLatestBlockResponse;
                    fromPartial(object: Partial<_43.GetLatestBlockResponse>): _43.GetLatestBlockResponse;
                    fromAmino(object: _43.GetLatestBlockResponseAmino): _43.GetLatestBlockResponse;
                    toAmino(message: _43.GetLatestBlockResponse): _43.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _43.GetLatestBlockResponseAminoMsg): _43.GetLatestBlockResponse;
                    toAminoMsg(message: _43.GetLatestBlockResponse): _43.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _43.GetLatestBlockResponseProtoMsg): _43.GetLatestBlockResponse;
                    toProto(message: _43.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _43.GetLatestBlockResponse): _43.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _43.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _43.GetSyncingRequest;
                    fromPartial(_: Partial<_43.GetSyncingRequest>): _43.GetSyncingRequest;
                    fromAmino(_: _43.GetSyncingRequestAmino): _43.GetSyncingRequest;
                    toAmino(_: _43.GetSyncingRequest): _43.GetSyncingRequestAmino;
                    fromAminoMsg(object: _43.GetSyncingRequestAminoMsg): _43.GetSyncingRequest;
                    toAminoMsg(message: _43.GetSyncingRequest): _43.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _43.GetSyncingRequestProtoMsg): _43.GetSyncingRequest;
                    toProto(message: _43.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _43.GetSyncingRequest): _43.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _43.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.GetSyncingResponse;
                    fromPartial(object: Partial<_43.GetSyncingResponse>): _43.GetSyncingResponse;
                    fromAmino(object: _43.GetSyncingResponseAmino): _43.GetSyncingResponse;
                    toAmino(message: _43.GetSyncingResponse): _43.GetSyncingResponseAmino;
                    fromAminoMsg(object: _43.GetSyncingResponseAminoMsg): _43.GetSyncingResponse;
                    toAminoMsg(message: _43.GetSyncingResponse): _43.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _43.GetSyncingResponseProtoMsg): _43.GetSyncingResponse;
                    toProto(message: _43.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _43.GetSyncingResponse): _43.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _43.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _43.GetNodeInfoRequest;
                    fromPartial(_: Partial<_43.GetNodeInfoRequest>): _43.GetNodeInfoRequest;
                    fromAmino(_: _43.GetNodeInfoRequestAmino): _43.GetNodeInfoRequest;
                    toAmino(_: _43.GetNodeInfoRequest): _43.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _43.GetNodeInfoRequestAminoMsg): _43.GetNodeInfoRequest;
                    toAminoMsg(message: _43.GetNodeInfoRequest): _43.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _43.GetNodeInfoRequestProtoMsg): _43.GetNodeInfoRequest;
                    toProto(message: _43.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _43.GetNodeInfoRequest): _43.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _43.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.GetNodeInfoResponse;
                    fromPartial(object: Partial<_43.GetNodeInfoResponse>): _43.GetNodeInfoResponse;
                    fromAmino(object: _43.GetNodeInfoResponseAmino): _43.GetNodeInfoResponse;
                    toAmino(message: _43.GetNodeInfoResponse): _43.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _43.GetNodeInfoResponseAminoMsg): _43.GetNodeInfoResponse;
                    toAminoMsg(message: _43.GetNodeInfoResponse): _43.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _43.GetNodeInfoResponseProtoMsg): _43.GetNodeInfoResponse;
                    toProto(message: _43.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _43.GetNodeInfoResponse): _43.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _43.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.VersionInfo;
                    fromPartial(object: Partial<_43.VersionInfo>): _43.VersionInfo;
                    fromAmino(object: _43.VersionInfoAmino): _43.VersionInfo;
                    toAmino(message: _43.VersionInfo): _43.VersionInfoAmino;
                    fromAminoMsg(object: _43.VersionInfoAminoMsg): _43.VersionInfo;
                    toAminoMsg(message: _43.VersionInfo): _43.VersionInfoAminoMsg;
                    fromProtoMsg(message: _43.VersionInfoProtoMsg): _43.VersionInfo;
                    toProto(message: _43.VersionInfo): Uint8Array;
                    toProtoMsg(message: _43.VersionInfo): _43.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _43.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.Module;
                    fromPartial(object: Partial<_43.Module>): _43.Module;
                    fromAmino(object: _43.ModuleAmino): _43.Module;
                    toAmino(message: _43.Module): _43.ModuleAmino;
                    fromAminoMsg(object: _43.ModuleAminoMsg): _43.Module;
                    toAminoMsg(message: _43.Module): _43.ModuleAminoMsg;
                    fromProtoMsg(message: _43.ModuleProtoMsg): _43.Module;
                    toProto(message: _43.Module): Uint8Array;
                    toProtoMsg(message: _43.Module): _43.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _44.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.Coin;
                fromPartial(object: Partial<_44.Coin>): _44.Coin;
                fromAmino(object: _44.CoinAmino): _44.Coin;
                toAmino(message: _44.Coin): _44.CoinAmino;
                fromAminoMsg(object: _44.CoinAminoMsg): _44.Coin;
                toAminoMsg(message: _44.Coin): _44.CoinAminoMsg;
                fromProtoMsg(message: _44.CoinProtoMsg): _44.Coin;
                toProto(message: _44.Coin): Uint8Array;
                toProtoMsg(message: _44.Coin): _44.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _44.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.DecCoin;
                fromPartial(object: Partial<_44.DecCoin>): _44.DecCoin;
                fromAmino(object: _44.DecCoinAmino): _44.DecCoin;
                toAmino(message: _44.DecCoin): _44.DecCoinAmino;
                fromAminoMsg(object: _44.DecCoinAminoMsg): _44.DecCoin;
                toAminoMsg(message: _44.DecCoin): _44.DecCoinAminoMsg;
                fromProtoMsg(message: _44.DecCoinProtoMsg): _44.DecCoin;
                toProto(message: _44.DecCoin): Uint8Array;
                toProtoMsg(message: _44.DecCoin): _44.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _44.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.IntProto;
                fromPartial(object: Partial<_44.IntProto>): _44.IntProto;
                fromAmino(object: _44.IntProtoAmino): _44.IntProto;
                toAmino(message: _44.IntProto): _44.IntProtoAmino;
                fromAminoMsg(object: _44.IntProtoAminoMsg): _44.IntProto;
                toAminoMsg(message: _44.IntProto): _44.IntProtoAminoMsg;
                fromProtoMsg(message: _44.IntProtoProtoMsg): _44.IntProto;
                toProto(message: _44.IntProto): Uint8Array;
                toProtoMsg(message: _44.IntProto): _44.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _44.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.DecProto;
                fromPartial(object: Partial<_44.DecProto>): _44.DecProto;
                fromAmino(object: _44.DecProtoAmino): _44.DecProto;
                toAmino(message: _44.DecProto): _44.DecProtoAmino;
                fromAminoMsg(object: _44.DecProtoAminoMsg): _44.DecProto;
                toAminoMsg(message: _44.DecProto): _44.DecProtoAminoMsg;
                fromProtoMsg(message: _44.DecProtoProtoMsg): _44.DecProto;
                toProto(message: _44.DecProto): Uint8Array;
                toProtoMsg(message: _44.DecProto): _44.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _46.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.GenesisOwners;
                fromPartial(object: Partial<_46.GenesisOwners>): _46.GenesisOwners;
                fromAmino(object: _46.GenesisOwnersAmino): _46.GenesisOwners;
                toAmino(message: _46.GenesisOwners): _46.GenesisOwnersAmino;
                fromAminoMsg(object: _46.GenesisOwnersAminoMsg): _46.GenesisOwners;
                toAminoMsg(message: _46.GenesisOwners): _46.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _46.GenesisOwnersProtoMsg): _46.GenesisOwners;
                toProto(message: _46.GenesisOwners): Uint8Array;
                toProtoMsg(message: _46.GenesisOwners): _46.GenesisOwnersProtoMsg;
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
            Capability: {
                typeUrl: string;
                encode(message: _45.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.Capability;
                fromPartial(object: Partial<_45.Capability>): _45.Capability;
                fromAmino(object: _45.CapabilityAmino): _45.Capability;
                toAmino(message: _45.Capability): _45.CapabilityAmino;
                fromAminoMsg(object: _45.CapabilityAminoMsg): _45.Capability;
                toAminoMsg(message: _45.Capability): _45.CapabilityAminoMsg;
                fromProtoMsg(message: _45.CapabilityProtoMsg): _45.Capability;
                toProto(message: _45.Capability): Uint8Array;
                toProtoMsg(message: _45.Capability): _45.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _45.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.Owner;
                fromPartial(object: Partial<_45.Owner>): _45.Owner;
                fromAmino(object: _45.OwnerAmino): _45.Owner;
                toAmino(message: _45.Owner): _45.OwnerAmino;
                fromAminoMsg(object: _45.OwnerAminoMsg): _45.Owner;
                toAminoMsg(message: _45.Owner): _45.OwnerAminoMsg;
                fromProtoMsg(message: _45.OwnerProtoMsg): _45.Owner;
                toProto(message: _45.Owner): Uint8Array;
                toProtoMsg(message: _45.Owner): _45.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _45.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.CapabilityOwners;
                fromPartial(object: Partial<_45.CapabilityOwners>): _45.CapabilityOwners;
                fromAmino(object: _45.CapabilityOwnersAmino): _45.CapabilityOwners;
                toAmino(message: _45.CapabilityOwners): _45.CapabilityOwnersAmino;
                fromAminoMsg(object: _45.CapabilityOwnersAminoMsg): _45.CapabilityOwners;
                toAminoMsg(message: _45.CapabilityOwners): _45.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _45.CapabilityOwnersProtoMsg): _45.CapabilityOwners;
                toProto(message: _45.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _45.CapabilityOwners): _45.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _201.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _48.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _48.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _48.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _48.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _48.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _48.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _48.MsgVerifyInvariant) => _48.MsgVerifyInvariantAmino;
                    fromAmino: (object: _48.MsgVerifyInvariantAmino) => _48.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _48.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.MsgVerifyInvariant;
                fromPartial(object: Partial<_48.MsgVerifyInvariant>): _48.MsgVerifyInvariant;
                fromAmino(object: _48.MsgVerifyInvariantAmino): _48.MsgVerifyInvariant;
                toAmino(message: _48.MsgVerifyInvariant): _48.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _48.MsgVerifyInvariantAminoMsg): _48.MsgVerifyInvariant;
                toAminoMsg(message: _48.MsgVerifyInvariant): _48.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _48.MsgVerifyInvariantProtoMsg): _48.MsgVerifyInvariant;
                toProto(message: _48.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _48.MsgVerifyInvariant): _48.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _48.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _48.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_48.MsgVerifyInvariantResponse>): _48.MsgVerifyInvariantResponse;
                fromAmino(_: _48.MsgVerifyInvariantResponseAmino): _48.MsgVerifyInvariantResponse;
                toAmino(_: _48.MsgVerifyInvariantResponse): _48.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _48.MsgVerifyInvariantResponseAminoMsg): _48.MsgVerifyInvariantResponse;
                toAminoMsg(message: _48.MsgVerifyInvariantResponse): _48.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _48.MsgVerifyInvariantResponseProtoMsg): _48.MsgVerifyInvariantResponse;
                toProto(message: _48.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _48.MsgVerifyInvariantResponse): _48.MsgVerifyInvariantResponseProtoMsg;
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
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _49.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.PubKey;
                fromPartial(object: Partial<_49.PubKey>): _49.PubKey;
                fromAmino(object: _49.PubKeyAmino): _49.PubKey;
                toAmino(message: _49.PubKey): _49.PubKeyAmino;
                fromAminoMsg(object: _49.PubKeyAminoMsg): _49.PubKey;
                toAminoMsg(message: _49.PubKey): _49.PubKeyAminoMsg;
                fromProtoMsg(message: _49.PubKeyProtoMsg): _49.PubKey;
                toProto(message: _49.PubKey): Uint8Array;
                toProtoMsg(message: _49.PubKey): _49.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _49.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.PrivKey;
                fromPartial(object: Partial<_49.PrivKey>): _49.PrivKey;
                fromAmino(object: _49.PrivKeyAmino): _49.PrivKey;
                toAmino(message: _49.PrivKey): _49.PrivKeyAmino;
                fromAminoMsg(object: _49.PrivKeyAminoMsg): _49.PrivKey;
                toAminoMsg(message: _49.PrivKey): _49.PrivKeyAminoMsg;
                fromProtoMsg(message: _49.PrivKeyProtoMsg): _49.PrivKey;
                toProto(message: _49.PrivKey): Uint8Array;
                toProtoMsg(message: _49.PrivKey): _49.PrivKeyProtoMsg;
            };
        };
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _50.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.LegacyAminoPubKey;
                fromPartial(object: Partial<_50.LegacyAminoPubKey>): _50.LegacyAminoPubKey;
                fromAmino(object: _50.LegacyAminoPubKeyAmino): _50.LegacyAminoPubKey;
                toAmino(message: _50.LegacyAminoPubKey): _50.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _50.LegacyAminoPubKeyAminoMsg): _50.LegacyAminoPubKey;
                toAminoMsg(message: _50.LegacyAminoPubKey): _50.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _50.LegacyAminoPubKeyProtoMsg): _50.LegacyAminoPubKey;
                toProto(message: _50.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _50.LegacyAminoPubKey): _50.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _51.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.PubKey;
                fromPartial(object: Partial<_51.PubKey>): _51.PubKey;
                fromAmino(object: _51.PubKeyAmino): _51.PubKey;
                toAmino(message: _51.PubKey): _51.PubKeyAmino;
                fromAminoMsg(object: _51.PubKeyAminoMsg): _51.PubKey;
                toAminoMsg(message: _51.PubKey): _51.PubKeyAminoMsg;
                fromProtoMsg(message: _51.PubKeyProtoMsg): _51.PubKey;
                toProto(message: _51.PubKey): Uint8Array;
                toProtoMsg(message: _51.PubKey): _51.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _51.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.PrivKey;
                fromPartial(object: Partial<_51.PrivKey>): _51.PrivKey;
                fromAmino(object: _51.PrivKeyAmino): _51.PrivKey;
                toAmino(message: _51.PrivKey): _51.PrivKeyAmino;
                fromAminoMsg(object: _51.PrivKeyAminoMsg): _51.PrivKey;
                toAminoMsg(message: _51.PrivKey): _51.PrivKeyAminoMsg;
                fromProtoMsg(message: _51.PrivKeyProtoMsg): _51.PrivKey;
                toProto(message: _51.PrivKey): Uint8Array;
                toProtoMsg(message: _51.PrivKey): _51.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _52.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.PubKey;
                fromPartial(object: Partial<_52.PubKey>): _52.PubKey;
                fromAmino(object: _52.PubKeyAmino): _52.PubKey;
                toAmino(message: _52.PubKey): _52.PubKeyAmino;
                fromAminoMsg(object: _52.PubKeyAminoMsg): _52.PubKey;
                toAminoMsg(message: _52.PubKey): _52.PubKeyAminoMsg;
                fromProtoMsg(message: _52.PubKeyProtoMsg): _52.PubKey;
                toProto(message: _52.PubKey): Uint8Array;
                toProtoMsg(message: _52.PubKey): _52.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _52.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.PrivKey;
                fromPartial(object: Partial<_52.PrivKey>): _52.PrivKey;
                fromAmino(object: _52.PrivKeyAmino): _52.PrivKey;
                toAmino(message: _52.PrivKey): _52.PrivKeyAmino;
                fromAminoMsg(object: _52.PrivKeyAminoMsg): _52.PrivKey;
                toAminoMsg(message: _52.PrivKey): _52.PrivKeyAminoMsg;
                fromProtoMsg(message: _52.PrivKeyProtoMsg): _52.PrivKey;
                toProto(message: _52.PrivKey): Uint8Array;
                toProtoMsg(message: _52.PrivKey): _52.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _202.MsgClientImpl;
            QueryClientImpl: typeof _189.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _55.QueryParamsRequest): Promise<_55.QueryParamsResponse>;
                validatorOutstandingRewards(request: _55.QueryValidatorOutstandingRewardsRequest): Promise<_55.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _55.QueryValidatorCommissionRequest): Promise<_55.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _55.QueryValidatorSlashesRequest): Promise<_55.QueryValidatorSlashesResponse>;
                delegationRewards(request: _55.QueryDelegationRewardsRequest): Promise<_55.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _55.QueryDelegationTotalRewardsRequest): Promise<_55.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _55.QueryDelegatorValidatorsRequest): Promise<_55.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _55.QueryDelegatorWithdrawAddressRequest): Promise<_55.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _55.QueryCommunityPoolRequest): Promise<_55.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _175.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _56.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _56.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _56.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _56.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _56.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _56.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _56.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _56.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _56.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _56.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _56.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _56.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _56.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _56.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _56.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _56.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _56.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _56.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _56.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _56.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _56.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _56.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _56.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _56.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _56.MsgSetWithdrawAddress) => _56.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _56.MsgSetWithdrawAddressAmino) => _56.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _56.MsgWithdrawDelegatorReward) => _56.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _56.MsgWithdrawDelegatorRewardAmino) => _56.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _56.MsgWithdrawValidatorCommission) => _56.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _56.MsgWithdrawValidatorCommissionAmino) => _56.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _56.MsgFundCommunityPool) => _56.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _56.MsgFundCommunityPoolAmino) => _56.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _56.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_56.MsgSetWithdrawAddress>): _56.MsgSetWithdrawAddress;
                fromAmino(object: _56.MsgSetWithdrawAddressAmino): _56.MsgSetWithdrawAddress;
                toAmino(message: _56.MsgSetWithdrawAddress): _56.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _56.MsgSetWithdrawAddressAminoMsg): _56.MsgSetWithdrawAddress;
                toAminoMsg(message: _56.MsgSetWithdrawAddress): _56.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _56.MsgSetWithdrawAddressProtoMsg): _56.MsgSetWithdrawAddress;
                toProto(message: _56.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _56.MsgSetWithdrawAddress): _56.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _56.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _56.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_56.MsgSetWithdrawAddressResponse>): _56.MsgSetWithdrawAddressResponse;
                fromAmino(_: _56.MsgSetWithdrawAddressResponseAmino): _56.MsgSetWithdrawAddressResponse;
                toAmino(_: _56.MsgSetWithdrawAddressResponse): _56.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _56.MsgSetWithdrawAddressResponseAminoMsg): _56.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _56.MsgSetWithdrawAddressResponse): _56.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _56.MsgSetWithdrawAddressResponseProtoMsg): _56.MsgSetWithdrawAddressResponse;
                toProto(message: _56.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _56.MsgSetWithdrawAddressResponse): _56.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _56.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_56.MsgWithdrawDelegatorReward>): _56.MsgWithdrawDelegatorReward;
                fromAmino(object: _56.MsgWithdrawDelegatorRewardAmino): _56.MsgWithdrawDelegatorReward;
                toAmino(message: _56.MsgWithdrawDelegatorReward): _56.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _56.MsgWithdrawDelegatorRewardAminoMsg): _56.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _56.MsgWithdrawDelegatorReward): _56.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _56.MsgWithdrawDelegatorRewardProtoMsg): _56.MsgWithdrawDelegatorReward;
                toProto(message: _56.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _56.MsgWithdrawDelegatorReward): _56.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(_: _56.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _56.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_56.MsgWithdrawDelegatorRewardResponse>): _56.MsgWithdrawDelegatorRewardResponse;
                fromAmino(_: _56.MsgWithdrawDelegatorRewardResponseAmino): _56.MsgWithdrawDelegatorRewardResponse;
                toAmino(_: _56.MsgWithdrawDelegatorRewardResponse): _56.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _56.MsgWithdrawDelegatorRewardResponseAminoMsg): _56.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _56.MsgWithdrawDelegatorRewardResponse): _56.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _56.MsgWithdrawDelegatorRewardResponseProtoMsg): _56.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _56.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _56.MsgWithdrawDelegatorRewardResponse): _56.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _56.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_56.MsgWithdrawValidatorCommission>): _56.MsgWithdrawValidatorCommission;
                fromAmino(object: _56.MsgWithdrawValidatorCommissionAmino): _56.MsgWithdrawValidatorCommission;
                toAmino(message: _56.MsgWithdrawValidatorCommission): _56.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _56.MsgWithdrawValidatorCommissionAminoMsg): _56.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _56.MsgWithdrawValidatorCommission): _56.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _56.MsgWithdrawValidatorCommissionProtoMsg): _56.MsgWithdrawValidatorCommission;
                toProto(message: _56.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _56.MsgWithdrawValidatorCommission): _56.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(_: _56.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _56.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_56.MsgWithdrawValidatorCommissionResponse>): _56.MsgWithdrawValidatorCommissionResponse;
                fromAmino(_: _56.MsgWithdrawValidatorCommissionResponseAmino): _56.MsgWithdrawValidatorCommissionResponse;
                toAmino(_: _56.MsgWithdrawValidatorCommissionResponse): _56.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _56.MsgWithdrawValidatorCommissionResponseAminoMsg): _56.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _56.MsgWithdrawValidatorCommissionResponse): _56.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _56.MsgWithdrawValidatorCommissionResponseProtoMsg): _56.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _56.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _56.MsgWithdrawValidatorCommissionResponse): _56.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _56.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.MsgFundCommunityPool;
                fromPartial(object: Partial<_56.MsgFundCommunityPool>): _56.MsgFundCommunityPool;
                fromAmino(object: _56.MsgFundCommunityPoolAmino): _56.MsgFundCommunityPool;
                toAmino(message: _56.MsgFundCommunityPool): _56.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _56.MsgFundCommunityPoolAminoMsg): _56.MsgFundCommunityPool;
                toAminoMsg(message: _56.MsgFundCommunityPool): _56.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _56.MsgFundCommunityPoolProtoMsg): _56.MsgFundCommunityPool;
                toProto(message: _56.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _56.MsgFundCommunityPool): _56.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _56.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _56.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_56.MsgFundCommunityPoolResponse>): _56.MsgFundCommunityPoolResponse;
                fromAmino(_: _56.MsgFundCommunityPoolResponseAmino): _56.MsgFundCommunityPoolResponse;
                toAmino(_: _56.MsgFundCommunityPoolResponse): _56.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _56.MsgFundCommunityPoolResponseAminoMsg): _56.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _56.MsgFundCommunityPoolResponse): _56.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _56.MsgFundCommunityPoolResponseProtoMsg): _56.MsgFundCommunityPoolResponse;
                toProto(message: _56.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _56.MsgFundCommunityPoolResponse): _56.MsgFundCommunityPoolResponseProtoMsg;
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
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _55.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_55.QueryValidatorOutstandingRewardsRequest>): _55.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _55.QueryValidatorOutstandingRewardsRequestAmino): _55.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _55.QueryValidatorOutstandingRewardsRequest): _55.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _55.QueryValidatorOutstandingRewardsRequestAminoMsg): _55.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _55.QueryValidatorOutstandingRewardsRequest): _55.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _55.QueryValidatorOutstandingRewardsRequestProtoMsg): _55.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _55.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _55.QueryValidatorOutstandingRewardsRequest): _55.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _55.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_55.QueryValidatorOutstandingRewardsResponse>): _55.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _55.QueryValidatorOutstandingRewardsResponseAmino): _55.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _55.QueryValidatorOutstandingRewardsResponse): _55.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _55.QueryValidatorOutstandingRewardsResponseAminoMsg): _55.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _55.QueryValidatorOutstandingRewardsResponse): _55.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _55.QueryValidatorOutstandingRewardsResponseProtoMsg): _55.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _55.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _55.QueryValidatorOutstandingRewardsResponse): _55.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _55.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_55.QueryValidatorCommissionRequest>): _55.QueryValidatorCommissionRequest;
                fromAmino(object: _55.QueryValidatorCommissionRequestAmino): _55.QueryValidatorCommissionRequest;
                toAmino(message: _55.QueryValidatorCommissionRequest): _55.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _55.QueryValidatorCommissionRequestAminoMsg): _55.QueryValidatorCommissionRequest;
                toAminoMsg(message: _55.QueryValidatorCommissionRequest): _55.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _55.QueryValidatorCommissionRequestProtoMsg): _55.QueryValidatorCommissionRequest;
                toProto(message: _55.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _55.QueryValidatorCommissionRequest): _55.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _55.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_55.QueryValidatorCommissionResponse>): _55.QueryValidatorCommissionResponse;
                fromAmino(object: _55.QueryValidatorCommissionResponseAmino): _55.QueryValidatorCommissionResponse;
                toAmino(message: _55.QueryValidatorCommissionResponse): _55.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _55.QueryValidatorCommissionResponseAminoMsg): _55.QueryValidatorCommissionResponse;
                toAminoMsg(message: _55.QueryValidatorCommissionResponse): _55.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _55.QueryValidatorCommissionResponseProtoMsg): _55.QueryValidatorCommissionResponse;
                toProto(message: _55.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _55.QueryValidatorCommissionResponse): _55.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _55.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_55.QueryValidatorSlashesRequest>): _55.QueryValidatorSlashesRequest;
                fromAmino(object: _55.QueryValidatorSlashesRequestAmino): _55.QueryValidatorSlashesRequest;
                toAmino(message: _55.QueryValidatorSlashesRequest): _55.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _55.QueryValidatorSlashesRequestAminoMsg): _55.QueryValidatorSlashesRequest;
                toAminoMsg(message: _55.QueryValidatorSlashesRequest): _55.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _55.QueryValidatorSlashesRequestProtoMsg): _55.QueryValidatorSlashesRequest;
                toProto(message: _55.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _55.QueryValidatorSlashesRequest): _55.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _55.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_55.QueryValidatorSlashesResponse>): _55.QueryValidatorSlashesResponse;
                fromAmino(object: _55.QueryValidatorSlashesResponseAmino): _55.QueryValidatorSlashesResponse;
                toAmino(message: _55.QueryValidatorSlashesResponse): _55.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _55.QueryValidatorSlashesResponseAminoMsg): _55.QueryValidatorSlashesResponse;
                toAminoMsg(message: _55.QueryValidatorSlashesResponse): _55.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _55.QueryValidatorSlashesResponseProtoMsg): _55.QueryValidatorSlashesResponse;
                toProto(message: _55.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _55.QueryValidatorSlashesResponse): _55.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _55.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_55.QueryDelegationRewardsRequest>): _55.QueryDelegationRewardsRequest;
                fromAmino(object: _55.QueryDelegationRewardsRequestAmino): _55.QueryDelegationRewardsRequest;
                toAmino(message: _55.QueryDelegationRewardsRequest): _55.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _55.QueryDelegationRewardsRequestAminoMsg): _55.QueryDelegationRewardsRequest;
                toAminoMsg(message: _55.QueryDelegationRewardsRequest): _55.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _55.QueryDelegationRewardsRequestProtoMsg): _55.QueryDelegationRewardsRequest;
                toProto(message: _55.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _55.QueryDelegationRewardsRequest): _55.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _55.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_55.QueryDelegationRewardsResponse>): _55.QueryDelegationRewardsResponse;
                fromAmino(object: _55.QueryDelegationRewardsResponseAmino): _55.QueryDelegationRewardsResponse;
                toAmino(message: _55.QueryDelegationRewardsResponse): _55.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _55.QueryDelegationRewardsResponseAminoMsg): _55.QueryDelegationRewardsResponse;
                toAminoMsg(message: _55.QueryDelegationRewardsResponse): _55.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _55.QueryDelegationRewardsResponseProtoMsg): _55.QueryDelegationRewardsResponse;
                toProto(message: _55.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _55.QueryDelegationRewardsResponse): _55.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _55.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_55.QueryDelegationTotalRewardsRequest>): _55.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _55.QueryDelegationTotalRewardsRequestAmino): _55.QueryDelegationTotalRewardsRequest;
                toAmino(message: _55.QueryDelegationTotalRewardsRequest): _55.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _55.QueryDelegationTotalRewardsRequestAminoMsg): _55.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _55.QueryDelegationTotalRewardsRequest): _55.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _55.QueryDelegationTotalRewardsRequestProtoMsg): _55.QueryDelegationTotalRewardsRequest;
                toProto(message: _55.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _55.QueryDelegationTotalRewardsRequest): _55.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _55.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_55.QueryDelegationTotalRewardsResponse>): _55.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _55.QueryDelegationTotalRewardsResponseAmino): _55.QueryDelegationTotalRewardsResponse;
                toAmino(message: _55.QueryDelegationTotalRewardsResponse): _55.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _55.QueryDelegationTotalRewardsResponseAminoMsg): _55.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _55.QueryDelegationTotalRewardsResponse): _55.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _55.QueryDelegationTotalRewardsResponseProtoMsg): _55.QueryDelegationTotalRewardsResponse;
                toProto(message: _55.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _55.QueryDelegationTotalRewardsResponse): _55.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _55.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_55.QueryDelegatorValidatorsRequest>): _55.QueryDelegatorValidatorsRequest;
                fromAmino(object: _55.QueryDelegatorValidatorsRequestAmino): _55.QueryDelegatorValidatorsRequest;
                toAmino(message: _55.QueryDelegatorValidatorsRequest): _55.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _55.QueryDelegatorValidatorsRequestAminoMsg): _55.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _55.QueryDelegatorValidatorsRequest): _55.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _55.QueryDelegatorValidatorsRequestProtoMsg): _55.QueryDelegatorValidatorsRequest;
                toProto(message: _55.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _55.QueryDelegatorValidatorsRequest): _55.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _55.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_55.QueryDelegatorValidatorsResponse>): _55.QueryDelegatorValidatorsResponse;
                fromAmino(object: _55.QueryDelegatorValidatorsResponseAmino): _55.QueryDelegatorValidatorsResponse;
                toAmino(message: _55.QueryDelegatorValidatorsResponse): _55.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _55.QueryDelegatorValidatorsResponseAminoMsg): _55.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _55.QueryDelegatorValidatorsResponse): _55.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _55.QueryDelegatorValidatorsResponseProtoMsg): _55.QueryDelegatorValidatorsResponse;
                toProto(message: _55.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _55.QueryDelegatorValidatorsResponse): _55.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _55.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_55.QueryDelegatorWithdrawAddressRequest>): _55.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _55.QueryDelegatorWithdrawAddressRequestAmino): _55.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _55.QueryDelegatorWithdrawAddressRequest): _55.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _55.QueryDelegatorWithdrawAddressRequestAminoMsg): _55.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _55.QueryDelegatorWithdrawAddressRequest): _55.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _55.QueryDelegatorWithdrawAddressRequestProtoMsg): _55.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _55.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _55.QueryDelegatorWithdrawAddressRequest): _55.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _55.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_55.QueryDelegatorWithdrawAddressResponse>): _55.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _55.QueryDelegatorWithdrawAddressResponseAmino): _55.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _55.QueryDelegatorWithdrawAddressResponse): _55.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _55.QueryDelegatorWithdrawAddressResponseAminoMsg): _55.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _55.QueryDelegatorWithdrawAddressResponse): _55.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _55.QueryDelegatorWithdrawAddressResponseProtoMsg): _55.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _55.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _55.QueryDelegatorWithdrawAddressResponse): _55.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _55.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _55.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_55.QueryCommunityPoolRequest>): _55.QueryCommunityPoolRequest;
                fromAmino(_: _55.QueryCommunityPoolRequestAmino): _55.QueryCommunityPoolRequest;
                toAmino(_: _55.QueryCommunityPoolRequest): _55.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _55.QueryCommunityPoolRequestAminoMsg): _55.QueryCommunityPoolRequest;
                toAminoMsg(message: _55.QueryCommunityPoolRequest): _55.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _55.QueryCommunityPoolRequestProtoMsg): _55.QueryCommunityPoolRequest;
                toProto(message: _55.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _55.QueryCommunityPoolRequest): _55.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _55.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_55.QueryCommunityPoolResponse>): _55.QueryCommunityPoolResponse;
                fromAmino(object: _55.QueryCommunityPoolResponseAmino): _55.QueryCommunityPoolResponse;
                toAmino(message: _55.QueryCommunityPoolResponse): _55.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _55.QueryCommunityPoolResponseAminoMsg): _55.QueryCommunityPoolResponse;
                toAminoMsg(message: _55.QueryCommunityPoolResponse): _55.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _55.QueryCommunityPoolResponseProtoMsg): _55.QueryCommunityPoolResponse;
                toProto(message: _55.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _55.QueryCommunityPoolResponse): _55.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _54.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_54.DelegatorWithdrawInfo>): _54.DelegatorWithdrawInfo;
                fromAmino(object: _54.DelegatorWithdrawInfoAmino): _54.DelegatorWithdrawInfo;
                toAmino(message: _54.DelegatorWithdrawInfo): _54.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _54.DelegatorWithdrawInfoAminoMsg): _54.DelegatorWithdrawInfo;
                toAminoMsg(message: _54.DelegatorWithdrawInfo): _54.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _54.DelegatorWithdrawInfoProtoMsg): _54.DelegatorWithdrawInfo;
                toProto(message: _54.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _54.DelegatorWithdrawInfo): _54.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _54.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_54.ValidatorOutstandingRewardsRecord>): _54.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _54.ValidatorOutstandingRewardsRecordAmino): _54.ValidatorOutstandingRewardsRecord;
                toAmino(message: _54.ValidatorOutstandingRewardsRecord): _54.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _54.ValidatorOutstandingRewardsRecordAminoMsg): _54.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _54.ValidatorOutstandingRewardsRecord): _54.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _54.ValidatorOutstandingRewardsRecordProtoMsg): _54.ValidatorOutstandingRewardsRecord;
                toProto(message: _54.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _54.ValidatorOutstandingRewardsRecord): _54.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _54.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_54.ValidatorAccumulatedCommissionRecord>): _54.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _54.ValidatorAccumulatedCommissionRecordAmino): _54.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _54.ValidatorAccumulatedCommissionRecord): _54.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _54.ValidatorAccumulatedCommissionRecordAminoMsg): _54.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _54.ValidatorAccumulatedCommissionRecord): _54.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _54.ValidatorAccumulatedCommissionRecordProtoMsg): _54.ValidatorAccumulatedCommissionRecord;
                toProto(message: _54.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _54.ValidatorAccumulatedCommissionRecord): _54.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _54.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_54.ValidatorHistoricalRewardsRecord>): _54.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _54.ValidatorHistoricalRewardsRecordAmino): _54.ValidatorHistoricalRewardsRecord;
                toAmino(message: _54.ValidatorHistoricalRewardsRecord): _54.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _54.ValidatorHistoricalRewardsRecordAminoMsg): _54.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _54.ValidatorHistoricalRewardsRecord): _54.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _54.ValidatorHistoricalRewardsRecordProtoMsg): _54.ValidatorHistoricalRewardsRecord;
                toProto(message: _54.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _54.ValidatorHistoricalRewardsRecord): _54.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _54.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_54.ValidatorCurrentRewardsRecord>): _54.ValidatorCurrentRewardsRecord;
                fromAmino(object: _54.ValidatorCurrentRewardsRecordAmino): _54.ValidatorCurrentRewardsRecord;
                toAmino(message: _54.ValidatorCurrentRewardsRecord): _54.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _54.ValidatorCurrentRewardsRecordAminoMsg): _54.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _54.ValidatorCurrentRewardsRecord): _54.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _54.ValidatorCurrentRewardsRecordProtoMsg): _54.ValidatorCurrentRewardsRecord;
                toProto(message: _54.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _54.ValidatorCurrentRewardsRecord): _54.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _54.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_54.DelegatorStartingInfoRecord>): _54.DelegatorStartingInfoRecord;
                fromAmino(object: _54.DelegatorStartingInfoRecordAmino): _54.DelegatorStartingInfoRecord;
                toAmino(message: _54.DelegatorStartingInfoRecord): _54.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _54.DelegatorStartingInfoRecordAminoMsg): _54.DelegatorStartingInfoRecord;
                toAminoMsg(message: _54.DelegatorStartingInfoRecord): _54.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _54.DelegatorStartingInfoRecordProtoMsg): _54.DelegatorStartingInfoRecord;
                toProto(message: _54.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _54.DelegatorStartingInfoRecord): _54.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _54.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_54.ValidatorSlashEventRecord>): _54.ValidatorSlashEventRecord;
                fromAmino(object: _54.ValidatorSlashEventRecordAmino): _54.ValidatorSlashEventRecord;
                toAmino(message: _54.ValidatorSlashEventRecord): _54.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _54.ValidatorSlashEventRecordAminoMsg): _54.ValidatorSlashEventRecord;
                toAminoMsg(message: _54.ValidatorSlashEventRecord): _54.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _54.ValidatorSlashEventRecordProtoMsg): _54.ValidatorSlashEventRecord;
                toProto(message: _54.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _54.ValidatorSlashEventRecord): _54.ValidatorSlashEventRecordProtoMsg;
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
            Params: {
                typeUrl: string;
                encode(message: _53.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.Params;
                fromPartial(object: Partial<_53.Params>): _53.Params;
                fromAmino(object: _53.ParamsAmino): _53.Params;
                toAmino(message: _53.Params): _53.ParamsAmino;
                fromAminoMsg(object: _53.ParamsAminoMsg): _53.Params;
                toAminoMsg(message: _53.Params): _53.ParamsAminoMsg;
                fromProtoMsg(message: _53.ParamsProtoMsg): _53.Params;
                toProto(message: _53.Params): Uint8Array;
                toProtoMsg(message: _53.Params): _53.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _53.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_53.ValidatorHistoricalRewards>): _53.ValidatorHistoricalRewards;
                fromAmino(object: _53.ValidatorHistoricalRewardsAmino): _53.ValidatorHistoricalRewards;
                toAmino(message: _53.ValidatorHistoricalRewards): _53.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _53.ValidatorHistoricalRewardsAminoMsg): _53.ValidatorHistoricalRewards;
                toAminoMsg(message: _53.ValidatorHistoricalRewards): _53.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _53.ValidatorHistoricalRewardsProtoMsg): _53.ValidatorHistoricalRewards;
                toProto(message: _53.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _53.ValidatorHistoricalRewards): _53.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _53.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.ValidatorCurrentRewards;
                fromPartial(object: Partial<_53.ValidatorCurrentRewards>): _53.ValidatorCurrentRewards;
                fromAmino(object: _53.ValidatorCurrentRewardsAmino): _53.ValidatorCurrentRewards;
                toAmino(message: _53.ValidatorCurrentRewards): _53.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _53.ValidatorCurrentRewardsAminoMsg): _53.ValidatorCurrentRewards;
                toAminoMsg(message: _53.ValidatorCurrentRewards): _53.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _53.ValidatorCurrentRewardsProtoMsg): _53.ValidatorCurrentRewards;
                toProto(message: _53.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _53.ValidatorCurrentRewards): _53.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _53.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_53.ValidatorAccumulatedCommission>): _53.ValidatorAccumulatedCommission;
                fromAmino(object: _53.ValidatorAccumulatedCommissionAmino): _53.ValidatorAccumulatedCommission;
                toAmino(message: _53.ValidatorAccumulatedCommission): _53.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _53.ValidatorAccumulatedCommissionAminoMsg): _53.ValidatorAccumulatedCommission;
                toAminoMsg(message: _53.ValidatorAccumulatedCommission): _53.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _53.ValidatorAccumulatedCommissionProtoMsg): _53.ValidatorAccumulatedCommission;
                toProto(message: _53.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _53.ValidatorAccumulatedCommission): _53.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _53.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_53.ValidatorOutstandingRewards>): _53.ValidatorOutstandingRewards;
                fromAmino(object: _53.ValidatorOutstandingRewardsAmino): _53.ValidatorOutstandingRewards;
                toAmino(message: _53.ValidatorOutstandingRewards): _53.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _53.ValidatorOutstandingRewardsAminoMsg): _53.ValidatorOutstandingRewards;
                toAminoMsg(message: _53.ValidatorOutstandingRewards): _53.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _53.ValidatorOutstandingRewardsProtoMsg): _53.ValidatorOutstandingRewards;
                toProto(message: _53.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _53.ValidatorOutstandingRewards): _53.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _53.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.ValidatorSlashEvent;
                fromPartial(object: Partial<_53.ValidatorSlashEvent>): _53.ValidatorSlashEvent;
                fromAmino(object: _53.ValidatorSlashEventAmino): _53.ValidatorSlashEvent;
                toAmino(message: _53.ValidatorSlashEvent): _53.ValidatorSlashEventAmino;
                fromAminoMsg(object: _53.ValidatorSlashEventAminoMsg): _53.ValidatorSlashEvent;
                toAminoMsg(message: _53.ValidatorSlashEvent): _53.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _53.ValidatorSlashEventProtoMsg): _53.ValidatorSlashEvent;
                toProto(message: _53.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _53.ValidatorSlashEvent): _53.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _53.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.ValidatorSlashEvents;
                fromPartial(object: Partial<_53.ValidatorSlashEvents>): _53.ValidatorSlashEvents;
                fromAmino(object: _53.ValidatorSlashEventsAmino): _53.ValidatorSlashEvents;
                toAmino(message: _53.ValidatorSlashEvents): _53.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _53.ValidatorSlashEventsAminoMsg): _53.ValidatorSlashEvents;
                toAminoMsg(message: _53.ValidatorSlashEvents): _53.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _53.ValidatorSlashEventsProtoMsg): _53.ValidatorSlashEvents;
                toProto(message: _53.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _53.ValidatorSlashEvents): _53.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _53.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.FeePool;
                fromPartial(object: Partial<_53.FeePool>): _53.FeePool;
                fromAmino(object: _53.FeePoolAmino): _53.FeePool;
                toAmino(message: _53.FeePool): _53.FeePoolAmino;
                fromAminoMsg(object: _53.FeePoolAminoMsg): _53.FeePool;
                toAminoMsg(message: _53.FeePool): _53.FeePoolAminoMsg;
                fromProtoMsg(message: _53.FeePoolProtoMsg): _53.FeePool;
                toProto(message: _53.FeePool): Uint8Array;
                toProtoMsg(message: _53.FeePool): _53.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _53.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_53.CommunityPoolSpendProposal>): _53.CommunityPoolSpendProposal;
                fromAmino(object: _53.CommunityPoolSpendProposalAmino): _53.CommunityPoolSpendProposal;
                toAmino(message: _53.CommunityPoolSpendProposal): _53.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _53.CommunityPoolSpendProposalAminoMsg): _53.CommunityPoolSpendProposal;
                toAminoMsg(message: _53.CommunityPoolSpendProposal): _53.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _53.CommunityPoolSpendProposalProtoMsg): _53.CommunityPoolSpendProposal;
                toProto(message: _53.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _53.CommunityPoolSpendProposal): _53.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _53.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.DelegatorStartingInfo;
                fromPartial(object: Partial<_53.DelegatorStartingInfo>): _53.DelegatorStartingInfo;
                fromAmino(object: _53.DelegatorStartingInfoAmino): _53.DelegatorStartingInfo;
                toAmino(message: _53.DelegatorStartingInfo): _53.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _53.DelegatorStartingInfoAminoMsg): _53.DelegatorStartingInfo;
                toAminoMsg(message: _53.DelegatorStartingInfo): _53.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _53.DelegatorStartingInfoProtoMsg): _53.DelegatorStartingInfo;
                toProto(message: _53.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _53.DelegatorStartingInfo): _53.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _53.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.DelegationDelegatorReward;
                fromPartial(object: Partial<_53.DelegationDelegatorReward>): _53.DelegationDelegatorReward;
                fromAmino(object: _53.DelegationDelegatorRewardAmino): _53.DelegationDelegatorReward;
                toAmino(message: _53.DelegationDelegatorReward): _53.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _53.DelegationDelegatorRewardAminoMsg): _53.DelegationDelegatorReward;
                toAminoMsg(message: _53.DelegationDelegatorReward): _53.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _53.DelegationDelegatorRewardProtoMsg): _53.DelegationDelegatorReward;
                toProto(message: _53.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _53.DelegationDelegatorReward): _53.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _53.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_53.CommunityPoolSpendProposalWithDeposit>): _53.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _53.CommunityPoolSpendProposalWithDepositAmino): _53.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _53.CommunityPoolSpendProposalWithDeposit): _53.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _53.CommunityPoolSpendProposalWithDepositAminoMsg): _53.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _53.CommunityPoolSpendProposalWithDeposit): _53.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _53.CommunityPoolSpendProposalWithDepositProtoMsg): _53.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _53.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _53.CommunityPoolSpendProposalWithDeposit): _53.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _203.MsgClientImpl;
            QueryClientImpl: typeof _190.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _59.QueryEvidenceRequest): Promise<_59.QueryEvidenceResponse>;
                allEvidence(request?: _59.QueryAllEvidenceRequest): Promise<_59.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _176.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _60.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _60.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _60.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _60.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _60.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _60.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _60.MsgSubmitEvidence) => _60.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _60.MsgSubmitEvidenceAmino) => _60.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _60.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.MsgSubmitEvidence;
                fromPartial(object: Partial<_60.MsgSubmitEvidence>): _60.MsgSubmitEvidence;
                fromAmino(object: _60.MsgSubmitEvidenceAmino): _60.MsgSubmitEvidence;
                toAmino(message: _60.MsgSubmitEvidence): _60.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _60.MsgSubmitEvidenceAminoMsg): _60.MsgSubmitEvidence;
                toAminoMsg(message: _60.MsgSubmitEvidence): _60.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _60.MsgSubmitEvidenceProtoMsg): _60.MsgSubmitEvidence;
                toProto(message: _60.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _60.MsgSubmitEvidence): _60.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _60.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_60.MsgSubmitEvidenceResponse>): _60.MsgSubmitEvidenceResponse;
                fromAmino(object: _60.MsgSubmitEvidenceResponseAmino): _60.MsgSubmitEvidenceResponse;
                toAmino(message: _60.MsgSubmitEvidenceResponse): _60.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _60.MsgSubmitEvidenceResponseAminoMsg): _60.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _60.MsgSubmitEvidenceResponse): _60.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _60.MsgSubmitEvidenceResponseProtoMsg): _60.MsgSubmitEvidenceResponse;
                toProto(message: _60.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _60.MsgSubmitEvidenceResponse): _60.MsgSubmitEvidenceResponseProtoMsg;
            };
            Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _59.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.QueryEvidenceRequest;
                fromPartial(object: Partial<_59.QueryEvidenceRequest>): _59.QueryEvidenceRequest;
                fromAmino(object: _59.QueryEvidenceRequestAmino): _59.QueryEvidenceRequest;
                toAmino(message: _59.QueryEvidenceRequest): _59.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _59.QueryEvidenceRequestAminoMsg): _59.QueryEvidenceRequest;
                toAminoMsg(message: _59.QueryEvidenceRequest): _59.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _59.QueryEvidenceRequestProtoMsg): _59.QueryEvidenceRequest;
                toProto(message: _59.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _59.QueryEvidenceRequest): _59.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _59.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.QueryEvidenceResponse;
                fromPartial(object: Partial<_59.QueryEvidenceResponse>): _59.QueryEvidenceResponse;
                fromAmino(object: _59.QueryEvidenceResponseAmino): _59.QueryEvidenceResponse;
                toAmino(message: _59.QueryEvidenceResponse): _59.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _59.QueryEvidenceResponseAminoMsg): _59.QueryEvidenceResponse;
                toAminoMsg(message: _59.QueryEvidenceResponse): _59.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _59.QueryEvidenceResponseProtoMsg): _59.QueryEvidenceResponse;
                toProto(message: _59.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _59.QueryEvidenceResponse): _59.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _59.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_59.QueryAllEvidenceRequest>): _59.QueryAllEvidenceRequest;
                fromAmino(object: _59.QueryAllEvidenceRequestAmino): _59.QueryAllEvidenceRequest;
                toAmino(message: _59.QueryAllEvidenceRequest): _59.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _59.QueryAllEvidenceRequestAminoMsg): _59.QueryAllEvidenceRequest;
                toAminoMsg(message: _59.QueryAllEvidenceRequest): _59.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _59.QueryAllEvidenceRequestProtoMsg): _59.QueryAllEvidenceRequest;
                toProto(message: _59.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _59.QueryAllEvidenceRequest): _59.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _59.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_59.QueryAllEvidenceResponse>): _59.QueryAllEvidenceResponse;
                fromAmino(object: _59.QueryAllEvidenceResponseAmino): _59.QueryAllEvidenceResponse;
                toAmino(message: _59.QueryAllEvidenceResponse): _59.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _59.QueryAllEvidenceResponseAminoMsg): _59.QueryAllEvidenceResponse;
                toAminoMsg(message: _59.QueryAllEvidenceResponse): _59.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _59.QueryAllEvidenceResponseProtoMsg): _59.QueryAllEvidenceResponse;
                toProto(message: _59.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _59.QueryAllEvidenceResponse): _59.QueryAllEvidenceResponseProtoMsg;
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
            Equivocation: {
                typeUrl: string;
                encode(message: _57.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.Equivocation;
                fromPartial(object: Partial<_57.Equivocation>): _57.Equivocation;
                fromAmino(object: _57.EquivocationAmino): _57.Equivocation;
                toAmino(message: _57.Equivocation): _57.EquivocationAmino;
                fromAminoMsg(object: _57.EquivocationAminoMsg): _57.Equivocation;
                toAminoMsg(message: _57.Equivocation): _57.EquivocationAminoMsg;
                fromProtoMsg(message: _57.EquivocationProtoMsg): _57.Equivocation;
                toProto(message: _57.Equivocation): Uint8Array;
                toProtoMsg(message: _57.Equivocation): _57.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _204.MsgClientImpl;
            QueryClientImpl: typeof _191.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _63.QueryAllowanceRequest): Promise<_63.QueryAllowanceResponse>;
                allowances(request: _63.QueryAllowancesRequest): Promise<_63.QueryAllowancesResponse>;
                allowancesByGranter(request: _63.QueryAllowancesByGranterRequest): Promise<_63.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _177.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _64.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _64.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _64.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _64.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _64.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _64.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _64.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _64.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _64.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _64.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _64.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _64.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _64.MsgGrantAllowance) => _64.MsgGrantAllowanceAmino;
                    fromAmino: (object: _64.MsgGrantAllowanceAmino) => _64.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _64.MsgRevokeAllowance) => _64.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _64.MsgRevokeAllowanceAmino) => _64.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _64.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.MsgGrantAllowance;
                fromPartial(object: Partial<_64.MsgGrantAllowance>): _64.MsgGrantAllowance;
                fromAmino(object: _64.MsgGrantAllowanceAmino): _64.MsgGrantAllowance;
                toAmino(message: _64.MsgGrantAllowance): _64.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _64.MsgGrantAllowanceAminoMsg): _64.MsgGrantAllowance;
                toAminoMsg(message: _64.MsgGrantAllowance): _64.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _64.MsgGrantAllowanceProtoMsg): _64.MsgGrantAllowance;
                toProto(message: _64.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _64.MsgGrantAllowance): _64.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _64.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _64.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_64.MsgGrantAllowanceResponse>): _64.MsgGrantAllowanceResponse;
                fromAmino(_: _64.MsgGrantAllowanceResponseAmino): _64.MsgGrantAllowanceResponse;
                toAmino(_: _64.MsgGrantAllowanceResponse): _64.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _64.MsgGrantAllowanceResponseAminoMsg): _64.MsgGrantAllowanceResponse;
                toAminoMsg(message: _64.MsgGrantAllowanceResponse): _64.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _64.MsgGrantAllowanceResponseProtoMsg): _64.MsgGrantAllowanceResponse;
                toProto(message: _64.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _64.MsgGrantAllowanceResponse): _64.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _64.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.MsgRevokeAllowance;
                fromPartial(object: Partial<_64.MsgRevokeAllowance>): _64.MsgRevokeAllowance;
                fromAmino(object: _64.MsgRevokeAllowanceAmino): _64.MsgRevokeAllowance;
                toAmino(message: _64.MsgRevokeAllowance): _64.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _64.MsgRevokeAllowanceAminoMsg): _64.MsgRevokeAllowance;
                toAminoMsg(message: _64.MsgRevokeAllowance): _64.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _64.MsgRevokeAllowanceProtoMsg): _64.MsgRevokeAllowance;
                toProto(message: _64.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _64.MsgRevokeAllowance): _64.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _64.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _64.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_64.MsgRevokeAllowanceResponse>): _64.MsgRevokeAllowanceResponse;
                fromAmino(_: _64.MsgRevokeAllowanceResponseAmino): _64.MsgRevokeAllowanceResponse;
                toAmino(_: _64.MsgRevokeAllowanceResponse): _64.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _64.MsgRevokeAllowanceResponseAminoMsg): _64.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _64.MsgRevokeAllowanceResponse): _64.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _64.MsgRevokeAllowanceResponseProtoMsg): _64.MsgRevokeAllowanceResponse;
                toProto(message: _64.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _64.MsgRevokeAllowanceResponse): _64.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _61.BasicAllowance | _61.PeriodicAllowance | _61.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _63.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryAllowanceRequest;
                fromPartial(object: Partial<_63.QueryAllowanceRequest>): _63.QueryAllowanceRequest;
                fromAmino(object: _63.QueryAllowanceRequestAmino): _63.QueryAllowanceRequest;
                toAmino(message: _63.QueryAllowanceRequest): _63.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _63.QueryAllowanceRequestAminoMsg): _63.QueryAllowanceRequest;
                toAminoMsg(message: _63.QueryAllowanceRequest): _63.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _63.QueryAllowanceRequestProtoMsg): _63.QueryAllowanceRequest;
                toProto(message: _63.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _63.QueryAllowanceRequest): _63.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _63.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryAllowanceResponse;
                fromPartial(object: Partial<_63.QueryAllowanceResponse>): _63.QueryAllowanceResponse;
                fromAmino(object: _63.QueryAllowanceResponseAmino): _63.QueryAllowanceResponse;
                toAmino(message: _63.QueryAllowanceResponse): _63.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _63.QueryAllowanceResponseAminoMsg): _63.QueryAllowanceResponse;
                toAminoMsg(message: _63.QueryAllowanceResponse): _63.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _63.QueryAllowanceResponseProtoMsg): _63.QueryAllowanceResponse;
                toProto(message: _63.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _63.QueryAllowanceResponse): _63.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _63.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryAllowancesRequest;
                fromPartial(object: Partial<_63.QueryAllowancesRequest>): _63.QueryAllowancesRequest;
                fromAmino(object: _63.QueryAllowancesRequestAmino): _63.QueryAllowancesRequest;
                toAmino(message: _63.QueryAllowancesRequest): _63.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _63.QueryAllowancesRequestAminoMsg): _63.QueryAllowancesRequest;
                toAminoMsg(message: _63.QueryAllowancesRequest): _63.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _63.QueryAllowancesRequestProtoMsg): _63.QueryAllowancesRequest;
                toProto(message: _63.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _63.QueryAllowancesRequest): _63.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _63.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryAllowancesResponse;
                fromPartial(object: Partial<_63.QueryAllowancesResponse>): _63.QueryAllowancesResponse;
                fromAmino(object: _63.QueryAllowancesResponseAmino): _63.QueryAllowancesResponse;
                toAmino(message: _63.QueryAllowancesResponse): _63.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _63.QueryAllowancesResponseAminoMsg): _63.QueryAllowancesResponse;
                toAminoMsg(message: _63.QueryAllowancesResponse): _63.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _63.QueryAllowancesResponseProtoMsg): _63.QueryAllowancesResponse;
                toProto(message: _63.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _63.QueryAllowancesResponse): _63.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _63.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_63.QueryAllowancesByGranterRequest>): _63.QueryAllowancesByGranterRequest;
                fromAmino(object: _63.QueryAllowancesByGranterRequestAmino): _63.QueryAllowancesByGranterRequest;
                toAmino(message: _63.QueryAllowancesByGranterRequest): _63.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _63.QueryAllowancesByGranterRequestAminoMsg): _63.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _63.QueryAllowancesByGranterRequest): _63.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _63.QueryAllowancesByGranterRequestProtoMsg): _63.QueryAllowancesByGranterRequest;
                toProto(message: _63.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _63.QueryAllowancesByGranterRequest): _63.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _63.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_63.QueryAllowancesByGranterResponse>): _63.QueryAllowancesByGranterResponse;
                fromAmino(object: _63.QueryAllowancesByGranterResponseAmino): _63.QueryAllowancesByGranterResponse;
                toAmino(message: _63.QueryAllowancesByGranterResponse): _63.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _63.QueryAllowancesByGranterResponseAminoMsg): _63.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _63.QueryAllowancesByGranterResponse): _63.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _63.QueryAllowancesByGranterResponseProtoMsg): _63.QueryAllowancesByGranterResponse;
                toProto(message: _63.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _63.QueryAllowancesByGranterResponse): _63.QueryAllowancesByGranterResponseProtoMsg;
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
            BasicAllowance: {
                typeUrl: string;
                encode(message: _61.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.BasicAllowance;
                fromPartial(object: Partial<_61.BasicAllowance>): _61.BasicAllowance;
                fromAmino(object: _61.BasicAllowanceAmino): _61.BasicAllowance;
                toAmino(message: _61.BasicAllowance): _61.BasicAllowanceAmino;
                fromAminoMsg(object: _61.BasicAllowanceAminoMsg): _61.BasicAllowance;
                toAminoMsg(message: _61.BasicAllowance): _61.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _61.BasicAllowanceProtoMsg): _61.BasicAllowance;
                toProto(message: _61.BasicAllowance): Uint8Array;
                toProtoMsg(message: _61.BasicAllowance): _61.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _61.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.PeriodicAllowance;
                fromPartial(object: Partial<_61.PeriodicAllowance>): _61.PeriodicAllowance;
                fromAmino(object: _61.PeriodicAllowanceAmino): _61.PeriodicAllowance;
                toAmino(message: _61.PeriodicAllowance): _61.PeriodicAllowanceAmino;
                fromAminoMsg(object: _61.PeriodicAllowanceAminoMsg): _61.PeriodicAllowance;
                toAminoMsg(message: _61.PeriodicAllowance): _61.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _61.PeriodicAllowanceProtoMsg): _61.PeriodicAllowance;
                toProto(message: _61.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _61.PeriodicAllowance): _61.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _61.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.AllowedMsgAllowance;
                fromPartial(object: Partial<_61.AllowedMsgAllowance>): _61.AllowedMsgAllowance;
                fromAmino(object: _61.AllowedMsgAllowanceAmino): _61.AllowedMsgAllowance;
                toAmino(message: _61.AllowedMsgAllowance): _61.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _61.AllowedMsgAllowanceAminoMsg): _61.AllowedMsgAllowance;
                toAminoMsg(message: _61.AllowedMsgAllowance): _61.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _61.AllowedMsgAllowanceProtoMsg): _61.AllowedMsgAllowance;
                toProto(message: _61.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _61.AllowedMsgAllowance): _61.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _61.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.Grant;
                fromPartial(object: Partial<_61.Grant>): _61.Grant;
                fromAmino(object: _61.GrantAmino): _61.Grant;
                toAmino(message: _61.Grant): _61.GrantAmino;
                fromAminoMsg(object: _61.GrantAminoMsg): _61.Grant;
                toAminoMsg(message: _61.Grant): _61.GrantAminoMsg;
                fromProtoMsg(message: _61.GrantProtoMsg): _61.Grant;
                toProto(message: _61.Grant): Uint8Array;
                toProtoMsg(message: _61.Grant): _61.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                typeUrl: string;
                encode(message: _65.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.GenesisState;
                fromPartial(object: Partial<_65.GenesisState>): _65.GenesisState;
                fromAmino(object: _65.GenesisStateAmino): _65.GenesisState;
                toAmino(message: _65.GenesisState): _65.GenesisStateAmino;
                fromAminoMsg(object: _65.GenesisStateAminoMsg): _65.GenesisState;
                toAminoMsg(message: _65.GenesisState): _65.GenesisStateAminoMsg;
                fromProtoMsg(message: _65.GenesisStateProtoMsg): _65.GenesisState;
                toProto(message: _65.GenesisState): Uint8Array;
                toProtoMsg(message: _65.GenesisState): _65.GenesisStateProtoMsg;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _205.MsgClientImpl;
            QueryClientImpl: typeof _192.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _68.QueryProposalRequest): Promise<_68.QueryProposalResponse>;
                proposals(request: _68.QueryProposalsRequest): Promise<_68.QueryProposalsResponse>;
                vote(request: _68.QueryVoteRequest): Promise<_68.QueryVoteResponse>;
                votes(request: _68.QueryVotesRequest): Promise<_68.QueryVotesResponse>;
                params(request: _68.QueryParamsRequest): Promise<_68.QueryParamsResponse>;
                deposit(request: _68.QueryDepositRequest): Promise<_68.QueryDepositResponse>;
                deposits(request: _68.QueryDepositsRequest): Promise<_68.QueryDepositsResponse>;
                tallyResult(request: _68.QueryTallyResultRequest): Promise<_68.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _178.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _69.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _69.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _69.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _69.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _69.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _69.MsgSubmitProposal;
                    };
                    vote(value: _69.MsgVote): {
                        typeUrl: string;
                        value: _69.MsgVote;
                    };
                    voteWeighted(value: _69.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _69.MsgVoteWeighted;
                    };
                    deposit(value: _69.MsgDeposit): {
                        typeUrl: string;
                        value: _69.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _69.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _69.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _69.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _69.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _69.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _69.MsgSubmitProposal;
                    };
                    vote(value: _69.MsgVote): {
                        typeUrl: string;
                        value: _69.MsgVote;
                    };
                    voteWeighted(value: _69.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _69.MsgVoteWeighted;
                    };
                    deposit(value: _69.MsgDeposit): {
                        typeUrl: string;
                        value: _69.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _69.MsgSubmitProposal) => _69.MsgSubmitProposalAmino;
                    fromAmino: (object: _69.MsgSubmitProposalAmino) => _69.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _69.MsgVote) => _69.MsgVoteAmino;
                    fromAmino: (object: _69.MsgVoteAmino) => _69.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _69.MsgVoteWeighted) => _69.MsgVoteWeightedAmino;
                    fromAmino: (object: _69.MsgVoteWeightedAmino) => _69.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _69.MsgDeposit) => _69.MsgDepositAmino;
                    fromAmino: (object: _69.MsgDepositAmino) => _69.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _69.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.MsgSubmitProposal;
                fromPartial(object: Partial<_69.MsgSubmitProposal>): _69.MsgSubmitProposal;
                fromAmino(object: _69.MsgSubmitProposalAmino): _69.MsgSubmitProposal;
                toAmino(message: _69.MsgSubmitProposal): _69.MsgSubmitProposalAmino;
                fromAminoMsg(object: _69.MsgSubmitProposalAminoMsg): _69.MsgSubmitProposal;
                toAminoMsg(message: _69.MsgSubmitProposal): _69.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _69.MsgSubmitProposalProtoMsg): _69.MsgSubmitProposal;
                toProto(message: _69.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _69.MsgSubmitProposal): _69.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _69.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_69.MsgSubmitProposalResponse>): _69.MsgSubmitProposalResponse;
                fromAmino(object: _69.MsgSubmitProposalResponseAmino): _69.MsgSubmitProposalResponse;
                toAmino(message: _69.MsgSubmitProposalResponse): _69.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _69.MsgSubmitProposalResponseAminoMsg): _69.MsgSubmitProposalResponse;
                toAminoMsg(message: _69.MsgSubmitProposalResponse): _69.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _69.MsgSubmitProposalResponseProtoMsg): _69.MsgSubmitProposalResponse;
                toProto(message: _69.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _69.MsgSubmitProposalResponse): _69.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _69.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.MsgVote;
                fromPartial(object: Partial<_69.MsgVote>): _69.MsgVote;
                fromAmino(object: _69.MsgVoteAmino): _69.MsgVote;
                toAmino(message: _69.MsgVote): _69.MsgVoteAmino;
                fromAminoMsg(object: _69.MsgVoteAminoMsg): _69.MsgVote;
                toAminoMsg(message: _69.MsgVote): _69.MsgVoteAminoMsg;
                fromProtoMsg(message: _69.MsgVoteProtoMsg): _69.MsgVote;
                toProto(message: _69.MsgVote): Uint8Array;
                toProtoMsg(message: _69.MsgVote): _69.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _69.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _69.MsgVoteResponse;
                fromPartial(_: Partial<_69.MsgVoteResponse>): _69.MsgVoteResponse;
                fromAmino(_: _69.MsgVoteResponseAmino): _69.MsgVoteResponse;
                toAmino(_: _69.MsgVoteResponse): _69.MsgVoteResponseAmino;
                fromAminoMsg(object: _69.MsgVoteResponseAminoMsg): _69.MsgVoteResponse;
                toAminoMsg(message: _69.MsgVoteResponse): _69.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _69.MsgVoteResponseProtoMsg): _69.MsgVoteResponse;
                toProto(message: _69.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _69.MsgVoteResponse): _69.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _69.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.MsgVoteWeighted;
                fromPartial(object: Partial<_69.MsgVoteWeighted>): _69.MsgVoteWeighted;
                fromAmino(object: _69.MsgVoteWeightedAmino): _69.MsgVoteWeighted;
                toAmino(message: _69.MsgVoteWeighted): _69.MsgVoteWeightedAmino;
                fromAminoMsg(object: _69.MsgVoteWeightedAminoMsg): _69.MsgVoteWeighted;
                toAminoMsg(message: _69.MsgVoteWeighted): _69.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _69.MsgVoteWeightedProtoMsg): _69.MsgVoteWeighted;
                toProto(message: _69.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _69.MsgVoteWeighted): _69.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _69.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _69.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_69.MsgVoteWeightedResponse>): _69.MsgVoteWeightedResponse;
                fromAmino(_: _69.MsgVoteWeightedResponseAmino): _69.MsgVoteWeightedResponse;
                toAmino(_: _69.MsgVoteWeightedResponse): _69.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _69.MsgVoteWeightedResponseAminoMsg): _69.MsgVoteWeightedResponse;
                toAminoMsg(message: _69.MsgVoteWeightedResponse): _69.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _69.MsgVoteWeightedResponseProtoMsg): _69.MsgVoteWeightedResponse;
                toProto(message: _69.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _69.MsgVoteWeightedResponse): _69.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _69.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.MsgDeposit;
                fromPartial(object: Partial<_69.MsgDeposit>): _69.MsgDeposit;
                fromAmino(object: _69.MsgDepositAmino): _69.MsgDeposit;
                toAmino(message: _69.MsgDeposit): _69.MsgDepositAmino;
                fromAminoMsg(object: _69.MsgDepositAminoMsg): _69.MsgDeposit;
                toAminoMsg(message: _69.MsgDeposit): _69.MsgDepositAminoMsg;
                fromProtoMsg(message: _69.MsgDepositProtoMsg): _69.MsgDeposit;
                toProto(message: _69.MsgDeposit): Uint8Array;
                toProtoMsg(message: _69.MsgDeposit): _69.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _69.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _69.MsgDepositResponse;
                fromPartial(_: Partial<_69.MsgDepositResponse>): _69.MsgDepositResponse;
                fromAmino(_: _69.MsgDepositResponseAmino): _69.MsgDepositResponse;
                toAmino(_: _69.MsgDepositResponse): _69.MsgDepositResponseAmino;
                fromAminoMsg(object: _69.MsgDepositResponseAminoMsg): _69.MsgDepositResponse;
                toAminoMsg(message: _69.MsgDepositResponse): _69.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _69.MsgDepositResponseProtoMsg): _69.MsgDepositResponse;
                toProto(message: _69.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _69.MsgDepositResponse): _69.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _67.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _68.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryProposalRequest;
                fromPartial(object: Partial<_68.QueryProposalRequest>): _68.QueryProposalRequest;
                fromAmino(object: _68.QueryProposalRequestAmino): _68.QueryProposalRequest;
                toAmino(message: _68.QueryProposalRequest): _68.QueryProposalRequestAmino;
                fromAminoMsg(object: _68.QueryProposalRequestAminoMsg): _68.QueryProposalRequest;
                toAminoMsg(message: _68.QueryProposalRequest): _68.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _68.QueryProposalRequestProtoMsg): _68.QueryProposalRequest;
                toProto(message: _68.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _68.QueryProposalRequest): _68.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _68.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryProposalResponse;
                fromPartial(object: Partial<_68.QueryProposalResponse>): _68.QueryProposalResponse;
                fromAmino(object: _68.QueryProposalResponseAmino): _68.QueryProposalResponse;
                toAmino(message: _68.QueryProposalResponse): _68.QueryProposalResponseAmino;
                fromAminoMsg(object: _68.QueryProposalResponseAminoMsg): _68.QueryProposalResponse;
                toAminoMsg(message: _68.QueryProposalResponse): _68.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _68.QueryProposalResponseProtoMsg): _68.QueryProposalResponse;
                toProto(message: _68.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _68.QueryProposalResponse): _68.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _68.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryProposalsRequest;
                fromPartial(object: Partial<_68.QueryProposalsRequest>): _68.QueryProposalsRequest;
                fromAmino(object: _68.QueryProposalsRequestAmino): _68.QueryProposalsRequest;
                toAmino(message: _68.QueryProposalsRequest): _68.QueryProposalsRequestAmino;
                fromAminoMsg(object: _68.QueryProposalsRequestAminoMsg): _68.QueryProposalsRequest;
                toAminoMsg(message: _68.QueryProposalsRequest): _68.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _68.QueryProposalsRequestProtoMsg): _68.QueryProposalsRequest;
                toProto(message: _68.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _68.QueryProposalsRequest): _68.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _68.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryProposalsResponse;
                fromPartial(object: Partial<_68.QueryProposalsResponse>): _68.QueryProposalsResponse;
                fromAmino(object: _68.QueryProposalsResponseAmino): _68.QueryProposalsResponse;
                toAmino(message: _68.QueryProposalsResponse): _68.QueryProposalsResponseAmino;
                fromAminoMsg(object: _68.QueryProposalsResponseAminoMsg): _68.QueryProposalsResponse;
                toAminoMsg(message: _68.QueryProposalsResponse): _68.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _68.QueryProposalsResponseProtoMsg): _68.QueryProposalsResponse;
                toProto(message: _68.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _68.QueryProposalsResponse): _68.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _68.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryVoteRequest;
                fromPartial(object: Partial<_68.QueryVoteRequest>): _68.QueryVoteRequest;
                fromAmino(object: _68.QueryVoteRequestAmino): _68.QueryVoteRequest;
                toAmino(message: _68.QueryVoteRequest): _68.QueryVoteRequestAmino;
                fromAminoMsg(object: _68.QueryVoteRequestAminoMsg): _68.QueryVoteRequest;
                toAminoMsg(message: _68.QueryVoteRequest): _68.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _68.QueryVoteRequestProtoMsg): _68.QueryVoteRequest;
                toProto(message: _68.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _68.QueryVoteRequest): _68.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _68.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryVoteResponse;
                fromPartial(object: Partial<_68.QueryVoteResponse>): _68.QueryVoteResponse;
                fromAmino(object: _68.QueryVoteResponseAmino): _68.QueryVoteResponse;
                toAmino(message: _68.QueryVoteResponse): _68.QueryVoteResponseAmino;
                fromAminoMsg(object: _68.QueryVoteResponseAminoMsg): _68.QueryVoteResponse;
                toAminoMsg(message: _68.QueryVoteResponse): _68.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _68.QueryVoteResponseProtoMsg): _68.QueryVoteResponse;
                toProto(message: _68.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _68.QueryVoteResponse): _68.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _68.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryVotesRequest;
                fromPartial(object: Partial<_68.QueryVotesRequest>): _68.QueryVotesRequest;
                fromAmino(object: _68.QueryVotesRequestAmino): _68.QueryVotesRequest;
                toAmino(message: _68.QueryVotesRequest): _68.QueryVotesRequestAmino;
                fromAminoMsg(object: _68.QueryVotesRequestAminoMsg): _68.QueryVotesRequest;
                toAminoMsg(message: _68.QueryVotesRequest): _68.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _68.QueryVotesRequestProtoMsg): _68.QueryVotesRequest;
                toProto(message: _68.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _68.QueryVotesRequest): _68.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _68.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryVotesResponse;
                fromPartial(object: Partial<_68.QueryVotesResponse>): _68.QueryVotesResponse;
                fromAmino(object: _68.QueryVotesResponseAmino): _68.QueryVotesResponse;
                toAmino(message: _68.QueryVotesResponse): _68.QueryVotesResponseAmino;
                fromAminoMsg(object: _68.QueryVotesResponseAminoMsg): _68.QueryVotesResponse;
                toAminoMsg(message: _68.QueryVotesResponse): _68.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _68.QueryVotesResponseProtoMsg): _68.QueryVotesResponse;
                toProto(message: _68.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _68.QueryVotesResponse): _68.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _68.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryParamsRequest;
                fromPartial(object: Partial<_68.QueryParamsRequest>): _68.QueryParamsRequest;
                fromAmino(object: _68.QueryParamsRequestAmino): _68.QueryParamsRequest;
                toAmino(message: _68.QueryParamsRequest): _68.QueryParamsRequestAmino;
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
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _68.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryDepositRequest;
                fromPartial(object: Partial<_68.QueryDepositRequest>): _68.QueryDepositRequest;
                fromAmino(object: _68.QueryDepositRequestAmino): _68.QueryDepositRequest;
                toAmino(message: _68.QueryDepositRequest): _68.QueryDepositRequestAmino;
                fromAminoMsg(object: _68.QueryDepositRequestAminoMsg): _68.QueryDepositRequest;
                toAminoMsg(message: _68.QueryDepositRequest): _68.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _68.QueryDepositRequestProtoMsg): _68.QueryDepositRequest;
                toProto(message: _68.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _68.QueryDepositRequest): _68.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _68.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryDepositResponse;
                fromPartial(object: Partial<_68.QueryDepositResponse>): _68.QueryDepositResponse;
                fromAmino(object: _68.QueryDepositResponseAmino): _68.QueryDepositResponse;
                toAmino(message: _68.QueryDepositResponse): _68.QueryDepositResponseAmino;
                fromAminoMsg(object: _68.QueryDepositResponseAminoMsg): _68.QueryDepositResponse;
                toAminoMsg(message: _68.QueryDepositResponse): _68.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _68.QueryDepositResponseProtoMsg): _68.QueryDepositResponse;
                toProto(message: _68.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _68.QueryDepositResponse): _68.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _68.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryDepositsRequest;
                fromPartial(object: Partial<_68.QueryDepositsRequest>): _68.QueryDepositsRequest;
                fromAmino(object: _68.QueryDepositsRequestAmino): _68.QueryDepositsRequest;
                toAmino(message: _68.QueryDepositsRequest): _68.QueryDepositsRequestAmino;
                fromAminoMsg(object: _68.QueryDepositsRequestAminoMsg): _68.QueryDepositsRequest;
                toAminoMsg(message: _68.QueryDepositsRequest): _68.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _68.QueryDepositsRequestProtoMsg): _68.QueryDepositsRequest;
                toProto(message: _68.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _68.QueryDepositsRequest): _68.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _68.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryDepositsResponse;
                fromPartial(object: Partial<_68.QueryDepositsResponse>): _68.QueryDepositsResponse;
                fromAmino(object: _68.QueryDepositsResponseAmino): _68.QueryDepositsResponse;
                toAmino(message: _68.QueryDepositsResponse): _68.QueryDepositsResponseAmino;
                fromAminoMsg(object: _68.QueryDepositsResponseAminoMsg): _68.QueryDepositsResponse;
                toAminoMsg(message: _68.QueryDepositsResponse): _68.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _68.QueryDepositsResponseProtoMsg): _68.QueryDepositsResponse;
                toProto(message: _68.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _68.QueryDepositsResponse): _68.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _68.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryTallyResultRequest;
                fromPartial(object: Partial<_68.QueryTallyResultRequest>): _68.QueryTallyResultRequest;
                fromAmino(object: _68.QueryTallyResultRequestAmino): _68.QueryTallyResultRequest;
                toAmino(message: _68.QueryTallyResultRequest): _68.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _68.QueryTallyResultRequestAminoMsg): _68.QueryTallyResultRequest;
                toAminoMsg(message: _68.QueryTallyResultRequest): _68.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _68.QueryTallyResultRequestProtoMsg): _68.QueryTallyResultRequest;
                toProto(message: _68.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _68.QueryTallyResultRequest): _68.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _68.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryTallyResultResponse;
                fromPartial(object: Partial<_68.QueryTallyResultResponse>): _68.QueryTallyResultResponse;
                fromAmino(object: _68.QueryTallyResultResponseAmino): _68.QueryTallyResultResponse;
                toAmino(message: _68.QueryTallyResultResponse): _68.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _68.QueryTallyResultResponseAminoMsg): _68.QueryTallyResultResponse;
                toAminoMsg(message: _68.QueryTallyResultResponse): _68.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _68.QueryTallyResultResponseProtoMsg): _68.QueryTallyResultResponse;
                toProto(message: _68.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _68.QueryTallyResultResponse): _68.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _67.VoteOption;
            voteOptionToJSON(object: _67.VoteOption): string;
            proposalStatusFromJSON(object: any): _67.ProposalStatus;
            proposalStatusToJSON(object: _67.ProposalStatus): string;
            VoteOption: typeof _67.VoteOption;
            VoteOptionSDKType: typeof _67.VoteOption;
            VoteOptionAmino: typeof _67.VoteOption;
            ProposalStatus: typeof _67.ProposalStatus;
            ProposalStatusSDKType: typeof _67.ProposalStatus;
            ProposalStatusAmino: typeof _67.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _67.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.WeightedVoteOption;
                fromPartial(object: Partial<_67.WeightedVoteOption>): _67.WeightedVoteOption;
                fromAmino(object: _67.WeightedVoteOptionAmino): _67.WeightedVoteOption;
                toAmino(message: _67.WeightedVoteOption): _67.WeightedVoteOptionAmino;
                fromAminoMsg(object: _67.WeightedVoteOptionAminoMsg): _67.WeightedVoteOption;
                toAminoMsg(message: _67.WeightedVoteOption): _67.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _67.WeightedVoteOptionProtoMsg): _67.WeightedVoteOption;
                toProto(message: _67.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _67.WeightedVoteOption): _67.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _67.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.TextProposal;
                fromPartial(object: Partial<_67.TextProposal>): _67.TextProposal;
                fromAmino(object: _67.TextProposalAmino): _67.TextProposal;
                toAmino(message: _67.TextProposal): _67.TextProposalAmino;
                fromAminoMsg(object: _67.TextProposalAminoMsg): _67.TextProposal;
                toAminoMsg(message: _67.TextProposal): _67.TextProposalAminoMsg;
                fromProtoMsg(message: _67.TextProposalProtoMsg): _67.TextProposal;
                toProto(message: _67.TextProposal): Uint8Array;
                toProtoMsg(message: _67.TextProposal): _67.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _67.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.Deposit;
                fromPartial(object: Partial<_67.Deposit>): _67.Deposit;
                fromAmino(object: _67.DepositAmino): _67.Deposit;
                toAmino(message: _67.Deposit): _67.DepositAmino;
                fromAminoMsg(object: _67.DepositAminoMsg): _67.Deposit;
                toAminoMsg(message: _67.Deposit): _67.DepositAminoMsg;
                fromProtoMsg(message: _67.DepositProtoMsg): _67.Deposit;
                toProto(message: _67.Deposit): Uint8Array;
                toProtoMsg(message: _67.Deposit): _67.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _67.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.Proposal;
                fromPartial(object: Partial<_67.Proposal>): _67.Proposal;
                fromAmino(object: _67.ProposalAmino): _67.Proposal;
                toAmino(message: _67.Proposal): _67.ProposalAmino;
                fromAminoMsg(object: _67.ProposalAminoMsg): _67.Proposal;
                toAminoMsg(message: _67.Proposal): _67.ProposalAminoMsg;
                fromProtoMsg(message: _67.ProposalProtoMsg): _67.Proposal;
                toProto(message: _67.Proposal): Uint8Array;
                toProtoMsg(message: _67.Proposal): _67.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _67.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.TallyResult;
                fromPartial(object: Partial<_67.TallyResult>): _67.TallyResult;
                fromAmino(object: _67.TallyResultAmino): _67.TallyResult;
                toAmino(message: _67.TallyResult): _67.TallyResultAmino;
                fromAminoMsg(object: _67.TallyResultAminoMsg): _67.TallyResult;
                toAminoMsg(message: _67.TallyResult): _67.TallyResultAminoMsg;
                fromProtoMsg(message: _67.TallyResultProtoMsg): _67.TallyResult;
                toProto(message: _67.TallyResult): Uint8Array;
                toProtoMsg(message: _67.TallyResult): _67.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _67.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.Vote;
                fromPartial(object: Partial<_67.Vote>): _67.Vote;
                fromAmino(object: _67.VoteAmino): _67.Vote;
                toAmino(message: _67.Vote): _67.VoteAmino;
                fromAminoMsg(object: _67.VoteAminoMsg): _67.Vote;
                toAminoMsg(message: _67.Vote): _67.VoteAminoMsg;
                fromProtoMsg(message: _67.VoteProtoMsg): _67.Vote;
                toProto(message: _67.Vote): Uint8Array;
                toProtoMsg(message: _67.Vote): _67.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _67.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.DepositParams;
                fromPartial(object: Partial<_67.DepositParams>): _67.DepositParams;
                fromAmino(object: _67.DepositParamsAmino): _67.DepositParams;
                toAmino(message: _67.DepositParams): _67.DepositParamsAmino;
                fromAminoMsg(object: _67.DepositParamsAminoMsg): _67.DepositParams;
                toAminoMsg(message: _67.DepositParams): _67.DepositParamsAminoMsg;
                fromProtoMsg(message: _67.DepositParamsProtoMsg): _67.DepositParams;
                toProto(message: _67.DepositParams): Uint8Array;
                toProtoMsg(message: _67.DepositParams): _67.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _67.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.VotingParams;
                fromPartial(object: Partial<_67.VotingParams>): _67.VotingParams;
                fromAmino(object: _67.VotingParamsAmino): _67.VotingParams;
                toAmino(message: _67.VotingParams): _67.VotingParamsAmino;
                fromAminoMsg(object: _67.VotingParamsAminoMsg): _67.VotingParams;
                toAminoMsg(message: _67.VotingParams): _67.VotingParamsAminoMsg;
                fromProtoMsg(message: _67.VotingParamsProtoMsg): _67.VotingParams;
                toProto(message: _67.VotingParams): Uint8Array;
                toProtoMsg(message: _67.VotingParams): _67.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _67.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.TallyParams;
                fromPartial(object: Partial<_67.TallyParams>): _67.TallyParams;
                fromAmino(object: _67.TallyParamsAmino): _67.TallyParams;
                toAmino(message: _67.TallyParams): _67.TallyParamsAmino;
                fromAminoMsg(object: _67.TallyParamsAminoMsg): _67.TallyParams;
                toAminoMsg(message: _67.TallyParams): _67.TallyParamsAminoMsg;
                fromProtoMsg(message: _67.TallyParamsProtoMsg): _67.TallyParams;
                toProto(message: _67.TallyParams): Uint8Array;
                toProtoMsg(message: _67.TallyParams): _67.TallyParamsProtoMsg;
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
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _193.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _72.QueryParamsRequest): Promise<_72.QueryParamsResponse>;
                inflation(request?: _72.QueryInflationRequest): Promise<_72.QueryInflationResponse>;
                annualProvisions(request?: _72.QueryAnnualProvisionsRequest): Promise<_72.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _179.LCDQueryClient;
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
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _72.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _72.QueryInflationRequest;
                fromPartial(_: Partial<_72.QueryInflationRequest>): _72.QueryInflationRequest;
                fromAmino(_: _72.QueryInflationRequestAmino): _72.QueryInflationRequest;
                toAmino(_: _72.QueryInflationRequest): _72.QueryInflationRequestAmino;
                fromAminoMsg(object: _72.QueryInflationRequestAminoMsg): _72.QueryInflationRequest;
                toAminoMsg(message: _72.QueryInflationRequest): _72.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _72.QueryInflationRequestProtoMsg): _72.QueryInflationRequest;
                toProto(message: _72.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _72.QueryInflationRequest): _72.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _72.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryInflationResponse;
                fromPartial(object: Partial<_72.QueryInflationResponse>): _72.QueryInflationResponse;
                fromAmino(object: _72.QueryInflationResponseAmino): _72.QueryInflationResponse;
                toAmino(message: _72.QueryInflationResponse): _72.QueryInflationResponseAmino;
                fromAminoMsg(object: _72.QueryInflationResponseAminoMsg): _72.QueryInflationResponse;
                toAminoMsg(message: _72.QueryInflationResponse): _72.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _72.QueryInflationResponseProtoMsg): _72.QueryInflationResponse;
                toProto(message: _72.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _72.QueryInflationResponse): _72.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _72.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _72.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_72.QueryAnnualProvisionsRequest>): _72.QueryAnnualProvisionsRequest;
                fromAmino(_: _72.QueryAnnualProvisionsRequestAmino): _72.QueryAnnualProvisionsRequest;
                toAmino(_: _72.QueryAnnualProvisionsRequest): _72.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _72.QueryAnnualProvisionsRequestAminoMsg): _72.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _72.QueryAnnualProvisionsRequest): _72.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _72.QueryAnnualProvisionsRequestProtoMsg): _72.QueryAnnualProvisionsRequest;
                toProto(message: _72.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _72.QueryAnnualProvisionsRequest): _72.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _72.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_72.QueryAnnualProvisionsResponse>): _72.QueryAnnualProvisionsResponse;
                fromAmino(object: _72.QueryAnnualProvisionsResponseAmino): _72.QueryAnnualProvisionsResponse;
                toAmino(message: _72.QueryAnnualProvisionsResponse): _72.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _72.QueryAnnualProvisionsResponseAminoMsg): _72.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _72.QueryAnnualProvisionsResponse): _72.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _72.QueryAnnualProvisionsResponseProtoMsg): _72.QueryAnnualProvisionsResponse;
                toProto(message: _72.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _72.QueryAnnualProvisionsResponse): _72.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _71.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.Minter;
                fromPartial(object: Partial<_71.Minter>): _71.Minter;
                fromAmino(object: _71.MinterAmino): _71.Minter;
                toAmino(message: _71.Minter): _71.MinterAmino;
                fromAminoMsg(object: _71.MinterAminoMsg): _71.Minter;
                toAminoMsg(message: _71.Minter): _71.MinterAminoMsg;
                fromProtoMsg(message: _71.MinterProtoMsg): _71.Minter;
                toProto(message: _71.Minter): Uint8Array;
                toProtoMsg(message: _71.Minter): _71.MinterProtoMsg;
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
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _194.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _74.QueryParamsRequest): Promise<_74.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _180.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _74.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryParamsRequest;
                fromPartial(object: Partial<_74.QueryParamsRequest>): _74.QueryParamsRequest;
                fromAmino(object: _74.QueryParamsRequestAmino): _74.QueryParamsRequest;
                toAmino(message: _74.QueryParamsRequest): _74.QueryParamsRequestAmino;
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
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _73.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.ParameterChangeProposal;
                fromPartial(object: Partial<_73.ParameterChangeProposal>): _73.ParameterChangeProposal;
                fromAmino(object: _73.ParameterChangeProposalAmino): _73.ParameterChangeProposal;
                toAmino(message: _73.ParameterChangeProposal): _73.ParameterChangeProposalAmino;
                fromAminoMsg(object: _73.ParameterChangeProposalAminoMsg): _73.ParameterChangeProposal;
                toAminoMsg(message: _73.ParameterChangeProposal): _73.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _73.ParameterChangeProposalProtoMsg): _73.ParameterChangeProposal;
                toProto(message: _73.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _73.ParameterChangeProposal): _73.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _73.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.ParamChange;
                fromPartial(object: Partial<_73.ParamChange>): _73.ParamChange;
                fromAmino(object: _73.ParamChangeAmino): _73.ParamChange;
                toAmino(message: _73.ParamChange): _73.ParamChangeAmino;
                fromAminoMsg(object: _73.ParamChangeAminoMsg): _73.ParamChange;
                toAminoMsg(message: _73.ParamChange): _73.ParamChangeAminoMsg;
                fromProtoMsg(message: _73.ParamChangeProtoMsg): _73.ParamChange;
                toProto(message: _73.ParamChange): Uint8Array;
                toProtoMsg(message: _73.ParamChange): _73.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _206.MsgClientImpl;
            QueryClientImpl: typeof _195.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _76.QueryParamsRequest): Promise<_76.QueryParamsResponse>;
                signingInfo(request: _76.QuerySigningInfoRequest): Promise<_76.QuerySigningInfoResponse>;
                signingInfos(request?: _76.QuerySigningInfosRequest): Promise<_76.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _181.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _78.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _78.MsgUnjail): {
                        typeUrl: string;
                        value: _78.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _78.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _78.MsgUnjail): {
                        typeUrl: string;
                        value: _78.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _78.MsgUnjail) => _78.MsgUnjailAmino;
                    fromAmino: (object: _78.MsgUnjailAmino) => _78.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _78.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.MsgUnjail;
                fromPartial(object: Partial<_78.MsgUnjail>): _78.MsgUnjail;
                fromAmino(object: _78.MsgUnjailAmino): _78.MsgUnjail;
                toAmino(message: _78.MsgUnjail): _78.MsgUnjailAmino;
                fromAminoMsg(object: _78.MsgUnjailAminoMsg): _78.MsgUnjail;
                toAminoMsg(message: _78.MsgUnjail): _78.MsgUnjailAminoMsg;
                fromProtoMsg(message: _78.MsgUnjailProtoMsg): _78.MsgUnjail;
                toProto(message: _78.MsgUnjail): Uint8Array;
                toProtoMsg(message: _78.MsgUnjail): _78.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _78.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _78.MsgUnjailResponse;
                fromPartial(_: Partial<_78.MsgUnjailResponse>): _78.MsgUnjailResponse;
                fromAmino(_: _78.MsgUnjailResponseAmino): _78.MsgUnjailResponse;
                toAmino(_: _78.MsgUnjailResponse): _78.MsgUnjailResponseAmino;
                fromAminoMsg(object: _78.MsgUnjailResponseAminoMsg): _78.MsgUnjailResponse;
                toAminoMsg(message: _78.MsgUnjailResponse): _78.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _78.MsgUnjailResponseProtoMsg): _78.MsgUnjailResponse;
                toProto(message: _78.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _78.MsgUnjailResponse): _78.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _77.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.ValidatorSigningInfo;
                fromPartial(object: Partial<_77.ValidatorSigningInfo>): _77.ValidatorSigningInfo;
                fromAmino(object: _77.ValidatorSigningInfoAmino): _77.ValidatorSigningInfo;
                toAmino(message: _77.ValidatorSigningInfo): _77.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _77.ValidatorSigningInfoAminoMsg): _77.ValidatorSigningInfo;
                toAminoMsg(message: _77.ValidatorSigningInfo): _77.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _77.ValidatorSigningInfoProtoMsg): _77.ValidatorSigningInfo;
                toProto(message: _77.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _77.ValidatorSigningInfo): _77.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _77.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.Params;
                fromPartial(object: Partial<_77.Params>): _77.Params;
                fromAmino(object: _77.ParamsAmino): _77.Params;
                toAmino(message: _77.Params): _77.ParamsAmino;
                fromAminoMsg(object: _77.ParamsAminoMsg): _77.Params;
                toAminoMsg(message: _77.Params): _77.ParamsAminoMsg;
                fromProtoMsg(message: _77.ParamsProtoMsg): _77.Params;
                toProto(message: _77.Params): Uint8Array;
                toProtoMsg(message: _77.Params): _77.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _76.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _76.QueryParamsRequest;
                fromPartial(_: Partial<_76.QueryParamsRequest>): _76.QueryParamsRequest;
                fromAmino(_: _76.QueryParamsRequestAmino): _76.QueryParamsRequest;
                toAmino(_: _76.QueryParamsRequest): _76.QueryParamsRequestAmino;
                fromAminoMsg(object: _76.QueryParamsRequestAminoMsg): _76.QueryParamsRequest;
                toAminoMsg(message: _76.QueryParamsRequest): _76.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _76.QueryParamsRequestProtoMsg): _76.QueryParamsRequest;
                toProto(message: _76.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _76.QueryParamsRequest): _76.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _76.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryParamsResponse;
                fromPartial(object: Partial<_76.QueryParamsResponse>): _76.QueryParamsResponse;
                fromAmino(object: _76.QueryParamsResponseAmino): _76.QueryParamsResponse;
                toAmino(message: _76.QueryParamsResponse): _76.QueryParamsResponseAmino;
                fromAminoMsg(object: _76.QueryParamsResponseAminoMsg): _76.QueryParamsResponse;
                toAminoMsg(message: _76.QueryParamsResponse): _76.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _76.QueryParamsResponseProtoMsg): _76.QueryParamsResponse;
                toProto(message: _76.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _76.QueryParamsResponse): _76.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _76.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QuerySigningInfoRequest;
                fromPartial(object: Partial<_76.QuerySigningInfoRequest>): _76.QuerySigningInfoRequest;
                fromAmino(object: _76.QuerySigningInfoRequestAmino): _76.QuerySigningInfoRequest;
                toAmino(message: _76.QuerySigningInfoRequest): _76.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _76.QuerySigningInfoRequestAminoMsg): _76.QuerySigningInfoRequest;
                toAminoMsg(message: _76.QuerySigningInfoRequest): _76.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _76.QuerySigningInfoRequestProtoMsg): _76.QuerySigningInfoRequest;
                toProto(message: _76.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _76.QuerySigningInfoRequest): _76.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _76.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QuerySigningInfoResponse;
                fromPartial(object: Partial<_76.QuerySigningInfoResponse>): _76.QuerySigningInfoResponse;
                fromAmino(object: _76.QuerySigningInfoResponseAmino): _76.QuerySigningInfoResponse;
                toAmino(message: _76.QuerySigningInfoResponse): _76.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _76.QuerySigningInfoResponseAminoMsg): _76.QuerySigningInfoResponse;
                toAminoMsg(message: _76.QuerySigningInfoResponse): _76.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _76.QuerySigningInfoResponseProtoMsg): _76.QuerySigningInfoResponse;
                toProto(message: _76.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _76.QuerySigningInfoResponse): _76.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _76.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QuerySigningInfosRequest;
                fromPartial(object: Partial<_76.QuerySigningInfosRequest>): _76.QuerySigningInfosRequest;
                fromAmino(object: _76.QuerySigningInfosRequestAmino): _76.QuerySigningInfosRequest;
                toAmino(message: _76.QuerySigningInfosRequest): _76.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _76.QuerySigningInfosRequestAminoMsg): _76.QuerySigningInfosRequest;
                toAminoMsg(message: _76.QuerySigningInfosRequest): _76.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _76.QuerySigningInfosRequestProtoMsg): _76.QuerySigningInfosRequest;
                toProto(message: _76.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _76.QuerySigningInfosRequest): _76.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _76.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QuerySigningInfosResponse;
                fromPartial(object: Partial<_76.QuerySigningInfosResponse>): _76.QuerySigningInfosResponse;
                fromAmino(object: _76.QuerySigningInfosResponseAmino): _76.QuerySigningInfosResponse;
                toAmino(message: _76.QuerySigningInfosResponse): _76.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _76.QuerySigningInfosResponseAminoMsg): _76.QuerySigningInfosResponse;
                toAminoMsg(message: _76.QuerySigningInfosResponse): _76.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _76.QuerySigningInfosResponseProtoMsg): _76.QuerySigningInfosResponse;
                toProto(message: _76.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _76.QuerySigningInfosResponse): _76.QuerySigningInfosResponseProtoMsg;
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
            SigningInfo: {
                typeUrl: string;
                encode(message: _75.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.SigningInfo;
                fromPartial(object: Partial<_75.SigningInfo>): _75.SigningInfo;
                fromAmino(object: _75.SigningInfoAmino): _75.SigningInfo;
                toAmino(message: _75.SigningInfo): _75.SigningInfoAmino;
                fromAminoMsg(object: _75.SigningInfoAminoMsg): _75.SigningInfo;
                toAminoMsg(message: _75.SigningInfo): _75.SigningInfoAminoMsg;
                fromProtoMsg(message: _75.SigningInfoProtoMsg): _75.SigningInfo;
                toProto(message: _75.SigningInfo): Uint8Array;
                toProtoMsg(message: _75.SigningInfo): _75.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _75.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.ValidatorMissedBlocks;
                fromPartial(object: Partial<_75.ValidatorMissedBlocks>): _75.ValidatorMissedBlocks;
                fromAmino(object: _75.ValidatorMissedBlocksAmino): _75.ValidatorMissedBlocks;
                toAmino(message: _75.ValidatorMissedBlocks): _75.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _75.ValidatorMissedBlocksAminoMsg): _75.ValidatorMissedBlocks;
                toAminoMsg(message: _75.ValidatorMissedBlocks): _75.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _75.ValidatorMissedBlocksProtoMsg): _75.ValidatorMissedBlocks;
                toProto(message: _75.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _75.ValidatorMissedBlocks): _75.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _75.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.MissedBlock;
                fromPartial(object: Partial<_75.MissedBlock>): _75.MissedBlock;
                fromAmino(object: _75.MissedBlockAmino): _75.MissedBlock;
                toAmino(message: _75.MissedBlock): _75.MissedBlockAmino;
                fromAminoMsg(object: _75.MissedBlockAminoMsg): _75.MissedBlock;
                toAminoMsg(message: _75.MissedBlock): _75.MissedBlockAminoMsg;
                fromProtoMsg(message: _75.MissedBlockProtoMsg): _75.MissedBlock;
                toProto(message: _75.MissedBlock): Uint8Array;
                toProtoMsg(message: _75.MissedBlock): _75.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _207.MsgClientImpl;
            QueryClientImpl: typeof _196.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _81.QueryValidatorsRequest): Promise<_81.QueryValidatorsResponse>;
                validator(request: _81.QueryValidatorRequest): Promise<_81.QueryValidatorResponse>;
                validatorDelegations(request: _81.QueryValidatorDelegationsRequest): Promise<_81.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _81.QueryValidatorUnbondingDelegationsRequest): Promise<_81.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _81.QueryDelegationRequest): Promise<_81.QueryDelegationResponse>;
                unbondingDelegation(request: _81.QueryUnbondingDelegationRequest): Promise<_81.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _81.QueryDelegatorDelegationsRequest): Promise<_81.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _81.QueryDelegatorUnbondingDelegationsRequest): Promise<_81.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _81.QueryRedelegationsRequest): Promise<_81.QueryRedelegationsResponse>;
                delegatorValidators(request: _81.QueryDelegatorValidatorsRequest): Promise<_81.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _81.QueryDelegatorValidatorRequest): Promise<_81.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _81.QueryHistoricalInfoRequest): Promise<_81.QueryHistoricalInfoResponse>;
                pool(request?: _81.QueryPoolRequest): Promise<_81.QueryPoolResponse>;
                params(request?: _81.QueryParamsRequest): Promise<_81.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _182.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _83.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _83.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _83.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _83.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _83.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _83.MsgCreateValidator): {
                        typeUrl: string;
                        value: _83.MsgCreateValidator;
                    };
                    editValidator(value: _83.MsgEditValidator): {
                        typeUrl: string;
                        value: _83.MsgEditValidator;
                    };
                    delegate(value: _83.MsgDelegate): {
                        typeUrl: string;
                        value: _83.MsgDelegate;
                    };
                    beginRedelegate(value: _83.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _83.MsgBeginRedelegate;
                    };
                    undelegate(value: _83.MsgUndelegate): {
                        typeUrl: string;
                        value: _83.MsgUndelegate;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _83.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _83.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _83.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _83.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _83.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _83.MsgCreateValidator): {
                        typeUrl: string;
                        value: _83.MsgCreateValidator;
                    };
                    editValidator(value: _83.MsgEditValidator): {
                        typeUrl: string;
                        value: _83.MsgEditValidator;
                    };
                    delegate(value: _83.MsgDelegate): {
                        typeUrl: string;
                        value: _83.MsgDelegate;
                    };
                    beginRedelegate(value: _83.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _83.MsgBeginRedelegate;
                    };
                    undelegate(value: _83.MsgUndelegate): {
                        typeUrl: string;
                        value: _83.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _83.MsgCreateValidator) => _83.MsgCreateValidatorAmino;
                    fromAmino: (object: _83.MsgCreateValidatorAmino) => _83.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _83.MsgEditValidator) => _83.MsgEditValidatorAmino;
                    fromAmino: (object: _83.MsgEditValidatorAmino) => _83.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _83.MsgDelegate) => _83.MsgDelegateAmino;
                    fromAmino: (object: _83.MsgDelegateAmino) => _83.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _83.MsgBeginRedelegate) => _83.MsgBeginRedelegateAmino;
                    fromAmino: (object: _83.MsgBeginRedelegateAmino) => _83.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _83.MsgUndelegate) => _83.MsgUndelegateAmino;
                    fromAmino: (object: _83.MsgUndelegateAmino) => _83.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _83.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgCreateValidator;
                fromPartial(object: Partial<_83.MsgCreateValidator>): _83.MsgCreateValidator;
                fromAmino(object: _83.MsgCreateValidatorAmino): _83.MsgCreateValidator;
                toAmino(message: _83.MsgCreateValidator): _83.MsgCreateValidatorAmino;
                fromAminoMsg(object: _83.MsgCreateValidatorAminoMsg): _83.MsgCreateValidator;
                toAminoMsg(message: _83.MsgCreateValidator): _83.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _83.MsgCreateValidatorProtoMsg): _83.MsgCreateValidator;
                toProto(message: _83.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _83.MsgCreateValidator): _83.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _83.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _83.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_83.MsgCreateValidatorResponse>): _83.MsgCreateValidatorResponse;
                fromAmino(_: _83.MsgCreateValidatorResponseAmino): _83.MsgCreateValidatorResponse;
                toAmino(_: _83.MsgCreateValidatorResponse): _83.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _83.MsgCreateValidatorResponseAminoMsg): _83.MsgCreateValidatorResponse;
                toAminoMsg(message: _83.MsgCreateValidatorResponse): _83.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _83.MsgCreateValidatorResponseProtoMsg): _83.MsgCreateValidatorResponse;
                toProto(message: _83.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _83.MsgCreateValidatorResponse): _83.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _83.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgEditValidator;
                fromPartial(object: Partial<_83.MsgEditValidator>): _83.MsgEditValidator;
                fromAmino(object: _83.MsgEditValidatorAmino): _83.MsgEditValidator;
                toAmino(message: _83.MsgEditValidator): _83.MsgEditValidatorAmino;
                fromAminoMsg(object: _83.MsgEditValidatorAminoMsg): _83.MsgEditValidator;
                toAminoMsg(message: _83.MsgEditValidator): _83.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _83.MsgEditValidatorProtoMsg): _83.MsgEditValidator;
                toProto(message: _83.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _83.MsgEditValidator): _83.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _83.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _83.MsgEditValidatorResponse;
                fromPartial(_: Partial<_83.MsgEditValidatorResponse>): _83.MsgEditValidatorResponse;
                fromAmino(_: _83.MsgEditValidatorResponseAmino): _83.MsgEditValidatorResponse;
                toAmino(_: _83.MsgEditValidatorResponse): _83.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _83.MsgEditValidatorResponseAminoMsg): _83.MsgEditValidatorResponse;
                toAminoMsg(message: _83.MsgEditValidatorResponse): _83.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _83.MsgEditValidatorResponseProtoMsg): _83.MsgEditValidatorResponse;
                toProto(message: _83.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _83.MsgEditValidatorResponse): _83.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _83.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgDelegate;
                fromPartial(object: Partial<_83.MsgDelegate>): _83.MsgDelegate;
                fromAmino(object: _83.MsgDelegateAmino): _83.MsgDelegate;
                toAmino(message: _83.MsgDelegate): _83.MsgDelegateAmino;
                fromAminoMsg(object: _83.MsgDelegateAminoMsg): _83.MsgDelegate;
                toAminoMsg(message: _83.MsgDelegate): _83.MsgDelegateAminoMsg;
                fromProtoMsg(message: _83.MsgDelegateProtoMsg): _83.MsgDelegate;
                toProto(message: _83.MsgDelegate): Uint8Array;
                toProtoMsg(message: _83.MsgDelegate): _83.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _83.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _83.MsgDelegateResponse;
                fromPartial(_: Partial<_83.MsgDelegateResponse>): _83.MsgDelegateResponse;
                fromAmino(_: _83.MsgDelegateResponseAmino): _83.MsgDelegateResponse;
                toAmino(_: _83.MsgDelegateResponse): _83.MsgDelegateResponseAmino;
                fromAminoMsg(object: _83.MsgDelegateResponseAminoMsg): _83.MsgDelegateResponse;
                toAminoMsg(message: _83.MsgDelegateResponse): _83.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _83.MsgDelegateResponseProtoMsg): _83.MsgDelegateResponse;
                toProto(message: _83.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _83.MsgDelegateResponse): _83.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _83.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgBeginRedelegate;
                fromPartial(object: Partial<_83.MsgBeginRedelegate>): _83.MsgBeginRedelegate;
                fromAmino(object: _83.MsgBeginRedelegateAmino): _83.MsgBeginRedelegate;
                toAmino(message: _83.MsgBeginRedelegate): _83.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _83.MsgBeginRedelegateAminoMsg): _83.MsgBeginRedelegate;
                toAminoMsg(message: _83.MsgBeginRedelegate): _83.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _83.MsgBeginRedelegateProtoMsg): _83.MsgBeginRedelegate;
                toProto(message: _83.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _83.MsgBeginRedelegate): _83.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _83.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_83.MsgBeginRedelegateResponse>): _83.MsgBeginRedelegateResponse;
                fromAmino(object: _83.MsgBeginRedelegateResponseAmino): _83.MsgBeginRedelegateResponse;
                toAmino(message: _83.MsgBeginRedelegateResponse): _83.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _83.MsgBeginRedelegateResponseAminoMsg): _83.MsgBeginRedelegateResponse;
                toAminoMsg(message: _83.MsgBeginRedelegateResponse): _83.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _83.MsgBeginRedelegateResponseProtoMsg): _83.MsgBeginRedelegateResponse;
                toProto(message: _83.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _83.MsgBeginRedelegateResponse): _83.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _83.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgUndelegate;
                fromPartial(object: Partial<_83.MsgUndelegate>): _83.MsgUndelegate;
                fromAmino(object: _83.MsgUndelegateAmino): _83.MsgUndelegate;
                toAmino(message: _83.MsgUndelegate): _83.MsgUndelegateAmino;
                fromAminoMsg(object: _83.MsgUndelegateAminoMsg): _83.MsgUndelegate;
                toAminoMsg(message: _83.MsgUndelegate): _83.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _83.MsgUndelegateProtoMsg): _83.MsgUndelegate;
                toProto(message: _83.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _83.MsgUndelegate): _83.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _83.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgUndelegateResponse;
                fromPartial(object: Partial<_83.MsgUndelegateResponse>): _83.MsgUndelegateResponse;
                fromAmino(object: _83.MsgUndelegateResponseAmino): _83.MsgUndelegateResponse;
                toAmino(message: _83.MsgUndelegateResponse): _83.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _83.MsgUndelegateResponseAminoMsg): _83.MsgUndelegateResponse;
                toAminoMsg(message: _83.MsgUndelegateResponse): _83.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _83.MsgUndelegateResponseProtoMsg): _83.MsgUndelegateResponse;
                toProto(message: _83.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _83.MsgUndelegateResponse): _83.MsgUndelegateResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _82.BondStatus;
            bondStatusToJSON(object: _82.BondStatus): string;
            BondStatus: typeof _82.BondStatus;
            BondStatusSDKType: typeof _82.BondStatus;
            BondStatusAmino: typeof _82.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _82.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.HistoricalInfo;
                fromPartial(object: Partial<_82.HistoricalInfo>): _82.HistoricalInfo;
                fromAmino(object: _82.HistoricalInfoAmino): _82.HistoricalInfo;
                toAmino(message: _82.HistoricalInfo): _82.HistoricalInfoAmino;
                fromAminoMsg(object: _82.HistoricalInfoAminoMsg): _82.HistoricalInfo;
                toAminoMsg(message: _82.HistoricalInfo): _82.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _82.HistoricalInfoProtoMsg): _82.HistoricalInfo;
                toProto(message: _82.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _82.HistoricalInfo): _82.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _82.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.CommissionRates;
                fromPartial(object: Partial<_82.CommissionRates>): _82.CommissionRates;
                fromAmino(object: _82.CommissionRatesAmino): _82.CommissionRates;
                toAmino(message: _82.CommissionRates): _82.CommissionRatesAmino;
                fromAminoMsg(object: _82.CommissionRatesAminoMsg): _82.CommissionRates;
                toAminoMsg(message: _82.CommissionRates): _82.CommissionRatesAminoMsg;
                fromProtoMsg(message: _82.CommissionRatesProtoMsg): _82.CommissionRates;
                toProto(message: _82.CommissionRates): Uint8Array;
                toProtoMsg(message: _82.CommissionRates): _82.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _82.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.Commission;
                fromPartial(object: Partial<_82.Commission>): _82.Commission;
                fromAmino(object: _82.CommissionAmino): _82.Commission;
                toAmino(message: _82.Commission): _82.CommissionAmino;
                fromAminoMsg(object: _82.CommissionAminoMsg): _82.Commission;
                toAminoMsg(message: _82.Commission): _82.CommissionAminoMsg;
                fromProtoMsg(message: _82.CommissionProtoMsg): _82.Commission;
                toProto(message: _82.Commission): Uint8Array;
                toProtoMsg(message: _82.Commission): _82.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _82.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.Description;
                fromPartial(object: Partial<_82.Description>): _82.Description;
                fromAmino(object: _82.DescriptionAmino): _82.Description;
                toAmino(message: _82.Description): _82.DescriptionAmino;
                fromAminoMsg(object: _82.DescriptionAminoMsg): _82.Description;
                toAminoMsg(message: _82.Description): _82.DescriptionAminoMsg;
                fromProtoMsg(message: _82.DescriptionProtoMsg): _82.Description;
                toProto(message: _82.Description): Uint8Array;
                toProtoMsg(message: _82.Description): _82.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _82.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.Validator;
                fromPartial(object: Partial<_82.Validator>): _82.Validator;
                fromAmino(object: _82.ValidatorAmino): _82.Validator;
                toAmino(message: _82.Validator): _82.ValidatorAmino;
                fromAminoMsg(object: _82.ValidatorAminoMsg): _82.Validator;
                toAminoMsg(message: _82.Validator): _82.ValidatorAminoMsg;
                fromProtoMsg(message: _82.ValidatorProtoMsg): _82.Validator;
                toProto(message: _82.Validator): Uint8Array;
                toProtoMsg(message: _82.Validator): _82.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _82.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.ValAddresses;
                fromPartial(object: Partial<_82.ValAddresses>): _82.ValAddresses;
                fromAmino(object: _82.ValAddressesAmino): _82.ValAddresses;
                toAmino(message: _82.ValAddresses): _82.ValAddressesAmino;
                fromAminoMsg(object: _82.ValAddressesAminoMsg): _82.ValAddresses;
                toAminoMsg(message: _82.ValAddresses): _82.ValAddressesAminoMsg;
                fromProtoMsg(message: _82.ValAddressesProtoMsg): _82.ValAddresses;
                toProto(message: _82.ValAddresses): Uint8Array;
                toProtoMsg(message: _82.ValAddresses): _82.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _82.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.DVPair;
                fromPartial(object: Partial<_82.DVPair>): _82.DVPair;
                fromAmino(object: _82.DVPairAmino): _82.DVPair;
                toAmino(message: _82.DVPair): _82.DVPairAmino;
                fromAminoMsg(object: _82.DVPairAminoMsg): _82.DVPair;
                toAminoMsg(message: _82.DVPair): _82.DVPairAminoMsg;
                fromProtoMsg(message: _82.DVPairProtoMsg): _82.DVPair;
                toProto(message: _82.DVPair): Uint8Array;
                toProtoMsg(message: _82.DVPair): _82.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _82.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.DVPairs;
                fromPartial(object: Partial<_82.DVPairs>): _82.DVPairs;
                fromAmino(object: _82.DVPairsAmino): _82.DVPairs;
                toAmino(message: _82.DVPairs): _82.DVPairsAmino;
                fromAminoMsg(object: _82.DVPairsAminoMsg): _82.DVPairs;
                toAminoMsg(message: _82.DVPairs): _82.DVPairsAminoMsg;
                fromProtoMsg(message: _82.DVPairsProtoMsg): _82.DVPairs;
                toProto(message: _82.DVPairs): Uint8Array;
                toProtoMsg(message: _82.DVPairs): _82.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _82.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.DVVTriplet;
                fromPartial(object: Partial<_82.DVVTriplet>): _82.DVVTriplet;
                fromAmino(object: _82.DVVTripletAmino): _82.DVVTriplet;
                toAmino(message: _82.DVVTriplet): _82.DVVTripletAmino;
                fromAminoMsg(object: _82.DVVTripletAminoMsg): _82.DVVTriplet;
                toAminoMsg(message: _82.DVVTriplet): _82.DVVTripletAminoMsg;
                fromProtoMsg(message: _82.DVVTripletProtoMsg): _82.DVVTriplet;
                toProto(message: _82.DVVTriplet): Uint8Array;
                toProtoMsg(message: _82.DVVTriplet): _82.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _82.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.DVVTriplets;
                fromPartial(object: Partial<_82.DVVTriplets>): _82.DVVTriplets;
                fromAmino(object: _82.DVVTripletsAmino): _82.DVVTriplets;
                toAmino(message: _82.DVVTriplets): _82.DVVTripletsAmino;
                fromAminoMsg(object: _82.DVVTripletsAminoMsg): _82.DVVTriplets;
                toAminoMsg(message: _82.DVVTriplets): _82.DVVTripletsAminoMsg;
                fromProtoMsg(message: _82.DVVTripletsProtoMsg): _82.DVVTriplets;
                toProto(message: _82.DVVTriplets): Uint8Array;
                toProtoMsg(message: _82.DVVTriplets): _82.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _82.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.Delegation;
                fromPartial(object: Partial<_82.Delegation>): _82.Delegation;
                fromAmino(object: _82.DelegationAmino): _82.Delegation;
                toAmino(message: _82.Delegation): _82.DelegationAmino;
                fromAminoMsg(object: _82.DelegationAminoMsg): _82.Delegation;
                toAminoMsg(message: _82.Delegation): _82.DelegationAminoMsg;
                fromProtoMsg(message: _82.DelegationProtoMsg): _82.Delegation;
                toProto(message: _82.Delegation): Uint8Array;
                toProtoMsg(message: _82.Delegation): _82.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _82.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.UnbondingDelegation;
                fromPartial(object: Partial<_82.UnbondingDelegation>): _82.UnbondingDelegation;
                fromAmino(object: _82.UnbondingDelegationAmino): _82.UnbondingDelegation;
                toAmino(message: _82.UnbondingDelegation): _82.UnbondingDelegationAmino;
                fromAminoMsg(object: _82.UnbondingDelegationAminoMsg): _82.UnbondingDelegation;
                toAminoMsg(message: _82.UnbondingDelegation): _82.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _82.UnbondingDelegationProtoMsg): _82.UnbondingDelegation;
                toProto(message: _82.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _82.UnbondingDelegation): _82.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _82.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.UnbondingDelegationEntry;
                fromPartial(object: Partial<_82.UnbondingDelegationEntry>): _82.UnbondingDelegationEntry;
                fromAmino(object: _82.UnbondingDelegationEntryAmino): _82.UnbondingDelegationEntry;
                toAmino(message: _82.UnbondingDelegationEntry): _82.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _82.UnbondingDelegationEntryAminoMsg): _82.UnbondingDelegationEntry;
                toAminoMsg(message: _82.UnbondingDelegationEntry): _82.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _82.UnbondingDelegationEntryProtoMsg): _82.UnbondingDelegationEntry;
                toProto(message: _82.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _82.UnbondingDelegationEntry): _82.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _82.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.RedelegationEntry;
                fromPartial(object: Partial<_82.RedelegationEntry>): _82.RedelegationEntry;
                fromAmino(object: _82.RedelegationEntryAmino): _82.RedelegationEntry;
                toAmino(message: _82.RedelegationEntry): _82.RedelegationEntryAmino;
                fromAminoMsg(object: _82.RedelegationEntryAminoMsg): _82.RedelegationEntry;
                toAminoMsg(message: _82.RedelegationEntry): _82.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _82.RedelegationEntryProtoMsg): _82.RedelegationEntry;
                toProto(message: _82.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _82.RedelegationEntry): _82.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _82.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.Redelegation;
                fromPartial(object: Partial<_82.Redelegation>): _82.Redelegation;
                fromAmino(object: _82.RedelegationAmino): _82.Redelegation;
                toAmino(message: _82.Redelegation): _82.RedelegationAmino;
                fromAminoMsg(object: _82.RedelegationAminoMsg): _82.Redelegation;
                toAminoMsg(message: _82.Redelegation): _82.RedelegationAminoMsg;
                fromProtoMsg(message: _82.RedelegationProtoMsg): _82.Redelegation;
                toProto(message: _82.Redelegation): Uint8Array;
                toProtoMsg(message: _82.Redelegation): _82.RedelegationProtoMsg;
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
            DelegationResponse: {
                typeUrl: string;
                encode(message: _82.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.DelegationResponse;
                fromPartial(object: Partial<_82.DelegationResponse>): _82.DelegationResponse;
                fromAmino(object: _82.DelegationResponseAmino): _82.DelegationResponse;
                toAmino(message: _82.DelegationResponse): _82.DelegationResponseAmino;
                fromAminoMsg(object: _82.DelegationResponseAminoMsg): _82.DelegationResponse;
                toAminoMsg(message: _82.DelegationResponse): _82.DelegationResponseAminoMsg;
                fromProtoMsg(message: _82.DelegationResponseProtoMsg): _82.DelegationResponse;
                toProto(message: _82.DelegationResponse): Uint8Array;
                toProtoMsg(message: _82.DelegationResponse): _82.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _82.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.RedelegationEntryResponse;
                fromPartial(object: Partial<_82.RedelegationEntryResponse>): _82.RedelegationEntryResponse;
                fromAmino(object: _82.RedelegationEntryResponseAmino): _82.RedelegationEntryResponse;
                toAmino(message: _82.RedelegationEntryResponse): _82.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _82.RedelegationEntryResponseAminoMsg): _82.RedelegationEntryResponse;
                toAminoMsg(message: _82.RedelegationEntryResponse): _82.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _82.RedelegationEntryResponseProtoMsg): _82.RedelegationEntryResponse;
                toProto(message: _82.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _82.RedelegationEntryResponse): _82.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _82.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.RedelegationResponse;
                fromPartial(object: Partial<_82.RedelegationResponse>): _82.RedelegationResponse;
                fromAmino(object: _82.RedelegationResponseAmino): _82.RedelegationResponse;
                toAmino(message: _82.RedelegationResponse): _82.RedelegationResponseAmino;
                fromAminoMsg(object: _82.RedelegationResponseAminoMsg): _82.RedelegationResponse;
                toAminoMsg(message: _82.RedelegationResponse): _82.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _82.RedelegationResponseProtoMsg): _82.RedelegationResponse;
                toProto(message: _82.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _82.RedelegationResponse): _82.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _82.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.Pool;
                fromPartial(object: Partial<_82.Pool>): _82.Pool;
                fromAmino(object: _82.PoolAmino): _82.Pool;
                toAmino(message: _82.Pool): _82.PoolAmino;
                fromAminoMsg(object: _82.PoolAminoMsg): _82.Pool;
                toAminoMsg(message: _82.Pool): _82.PoolAminoMsg;
                fromProtoMsg(message: _82.PoolProtoMsg): _82.Pool;
                toProto(message: _82.Pool): Uint8Array;
                toProtoMsg(message: _82.Pool): _82.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _81.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryValidatorsRequest;
                fromPartial(object: Partial<_81.QueryValidatorsRequest>): _81.QueryValidatorsRequest;
                fromAmino(object: _81.QueryValidatorsRequestAmino): _81.QueryValidatorsRequest;
                toAmino(message: _81.QueryValidatorsRequest): _81.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _81.QueryValidatorsRequestAminoMsg): _81.QueryValidatorsRequest;
                toAminoMsg(message: _81.QueryValidatorsRequest): _81.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _81.QueryValidatorsRequestProtoMsg): _81.QueryValidatorsRequest;
                toProto(message: _81.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _81.QueryValidatorsRequest): _81.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _81.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryValidatorsResponse;
                fromPartial(object: Partial<_81.QueryValidatorsResponse>): _81.QueryValidatorsResponse;
                fromAmino(object: _81.QueryValidatorsResponseAmino): _81.QueryValidatorsResponse;
                toAmino(message: _81.QueryValidatorsResponse): _81.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _81.QueryValidatorsResponseAminoMsg): _81.QueryValidatorsResponse;
                toAminoMsg(message: _81.QueryValidatorsResponse): _81.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _81.QueryValidatorsResponseProtoMsg): _81.QueryValidatorsResponse;
                toProto(message: _81.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _81.QueryValidatorsResponse): _81.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _81.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryValidatorRequest;
                fromPartial(object: Partial<_81.QueryValidatorRequest>): _81.QueryValidatorRequest;
                fromAmino(object: _81.QueryValidatorRequestAmino): _81.QueryValidatorRequest;
                toAmino(message: _81.QueryValidatorRequest): _81.QueryValidatorRequestAmino;
                fromAminoMsg(object: _81.QueryValidatorRequestAminoMsg): _81.QueryValidatorRequest;
                toAminoMsg(message: _81.QueryValidatorRequest): _81.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _81.QueryValidatorRequestProtoMsg): _81.QueryValidatorRequest;
                toProto(message: _81.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _81.QueryValidatorRequest): _81.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _81.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryValidatorResponse;
                fromPartial(object: Partial<_81.QueryValidatorResponse>): _81.QueryValidatorResponse;
                fromAmino(object: _81.QueryValidatorResponseAmino): _81.QueryValidatorResponse;
                toAmino(message: _81.QueryValidatorResponse): _81.QueryValidatorResponseAmino;
                fromAminoMsg(object: _81.QueryValidatorResponseAminoMsg): _81.QueryValidatorResponse;
                toAminoMsg(message: _81.QueryValidatorResponse): _81.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _81.QueryValidatorResponseProtoMsg): _81.QueryValidatorResponse;
                toProto(message: _81.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _81.QueryValidatorResponse): _81.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _81.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_81.QueryValidatorDelegationsRequest>): _81.QueryValidatorDelegationsRequest;
                fromAmino(object: _81.QueryValidatorDelegationsRequestAmino): _81.QueryValidatorDelegationsRequest;
                toAmino(message: _81.QueryValidatorDelegationsRequest): _81.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _81.QueryValidatorDelegationsRequestAminoMsg): _81.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _81.QueryValidatorDelegationsRequest): _81.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _81.QueryValidatorDelegationsRequestProtoMsg): _81.QueryValidatorDelegationsRequest;
                toProto(message: _81.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _81.QueryValidatorDelegationsRequest): _81.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _81.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_81.QueryValidatorDelegationsResponse>): _81.QueryValidatorDelegationsResponse;
                fromAmino(object: _81.QueryValidatorDelegationsResponseAmino): _81.QueryValidatorDelegationsResponse;
                toAmino(message: _81.QueryValidatorDelegationsResponse): _81.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _81.QueryValidatorDelegationsResponseAminoMsg): _81.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _81.QueryValidatorDelegationsResponse): _81.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _81.QueryValidatorDelegationsResponseProtoMsg): _81.QueryValidatorDelegationsResponse;
                toProto(message: _81.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _81.QueryValidatorDelegationsResponse): _81.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _81.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_81.QueryValidatorUnbondingDelegationsRequest>): _81.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _81.QueryValidatorUnbondingDelegationsRequestAmino): _81.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _81.QueryValidatorUnbondingDelegationsRequest): _81.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _81.QueryValidatorUnbondingDelegationsRequestAminoMsg): _81.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _81.QueryValidatorUnbondingDelegationsRequest): _81.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _81.QueryValidatorUnbondingDelegationsRequestProtoMsg): _81.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _81.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _81.QueryValidatorUnbondingDelegationsRequest): _81.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _81.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_81.QueryValidatorUnbondingDelegationsResponse>): _81.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _81.QueryValidatorUnbondingDelegationsResponseAmino): _81.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _81.QueryValidatorUnbondingDelegationsResponse): _81.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _81.QueryValidatorUnbondingDelegationsResponseAminoMsg): _81.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _81.QueryValidatorUnbondingDelegationsResponse): _81.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _81.QueryValidatorUnbondingDelegationsResponseProtoMsg): _81.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _81.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _81.QueryValidatorUnbondingDelegationsResponse): _81.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _81.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryDelegationRequest;
                fromPartial(object: Partial<_81.QueryDelegationRequest>): _81.QueryDelegationRequest;
                fromAmino(object: _81.QueryDelegationRequestAmino): _81.QueryDelegationRequest;
                toAmino(message: _81.QueryDelegationRequest): _81.QueryDelegationRequestAmino;
                fromAminoMsg(object: _81.QueryDelegationRequestAminoMsg): _81.QueryDelegationRequest;
                toAminoMsg(message: _81.QueryDelegationRequest): _81.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _81.QueryDelegationRequestProtoMsg): _81.QueryDelegationRequest;
                toProto(message: _81.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _81.QueryDelegationRequest): _81.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _81.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryDelegationResponse;
                fromPartial(object: Partial<_81.QueryDelegationResponse>): _81.QueryDelegationResponse;
                fromAmino(object: _81.QueryDelegationResponseAmino): _81.QueryDelegationResponse;
                toAmino(message: _81.QueryDelegationResponse): _81.QueryDelegationResponseAmino;
                fromAminoMsg(object: _81.QueryDelegationResponseAminoMsg): _81.QueryDelegationResponse;
                toAminoMsg(message: _81.QueryDelegationResponse): _81.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _81.QueryDelegationResponseProtoMsg): _81.QueryDelegationResponse;
                toProto(message: _81.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _81.QueryDelegationResponse): _81.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _81.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_81.QueryUnbondingDelegationRequest>): _81.QueryUnbondingDelegationRequest;
                fromAmino(object: _81.QueryUnbondingDelegationRequestAmino): _81.QueryUnbondingDelegationRequest;
                toAmino(message: _81.QueryUnbondingDelegationRequest): _81.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _81.QueryUnbondingDelegationRequestAminoMsg): _81.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _81.QueryUnbondingDelegationRequest): _81.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _81.QueryUnbondingDelegationRequestProtoMsg): _81.QueryUnbondingDelegationRequest;
                toProto(message: _81.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _81.QueryUnbondingDelegationRequest): _81.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _81.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_81.QueryUnbondingDelegationResponse>): _81.QueryUnbondingDelegationResponse;
                fromAmino(object: _81.QueryUnbondingDelegationResponseAmino): _81.QueryUnbondingDelegationResponse;
                toAmino(message: _81.QueryUnbondingDelegationResponse): _81.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _81.QueryUnbondingDelegationResponseAminoMsg): _81.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _81.QueryUnbondingDelegationResponse): _81.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _81.QueryUnbondingDelegationResponseProtoMsg): _81.QueryUnbondingDelegationResponse;
                toProto(message: _81.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _81.QueryUnbondingDelegationResponse): _81.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _81.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_81.QueryDelegatorDelegationsRequest>): _81.QueryDelegatorDelegationsRequest;
                fromAmino(object: _81.QueryDelegatorDelegationsRequestAmino): _81.QueryDelegatorDelegationsRequest;
                toAmino(message: _81.QueryDelegatorDelegationsRequest): _81.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _81.QueryDelegatorDelegationsRequestAminoMsg): _81.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _81.QueryDelegatorDelegationsRequest): _81.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _81.QueryDelegatorDelegationsRequestProtoMsg): _81.QueryDelegatorDelegationsRequest;
                toProto(message: _81.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _81.QueryDelegatorDelegationsRequest): _81.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _81.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_81.QueryDelegatorDelegationsResponse>): _81.QueryDelegatorDelegationsResponse;
                fromAmino(object: _81.QueryDelegatorDelegationsResponseAmino): _81.QueryDelegatorDelegationsResponse;
                toAmino(message: _81.QueryDelegatorDelegationsResponse): _81.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _81.QueryDelegatorDelegationsResponseAminoMsg): _81.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _81.QueryDelegatorDelegationsResponse): _81.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _81.QueryDelegatorDelegationsResponseProtoMsg): _81.QueryDelegatorDelegationsResponse;
                toProto(message: _81.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _81.QueryDelegatorDelegationsResponse): _81.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _81.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_81.QueryDelegatorUnbondingDelegationsRequest>): _81.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _81.QueryDelegatorUnbondingDelegationsRequestAmino): _81.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _81.QueryDelegatorUnbondingDelegationsRequest): _81.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _81.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _81.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _81.QueryDelegatorUnbondingDelegationsRequest): _81.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _81.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _81.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _81.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _81.QueryDelegatorUnbondingDelegationsRequest): _81.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _81.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_81.QueryDelegatorUnbondingDelegationsResponse>): _81.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _81.QueryDelegatorUnbondingDelegationsResponseAmino): _81.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _81.QueryDelegatorUnbondingDelegationsResponse): _81.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _81.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _81.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _81.QueryDelegatorUnbondingDelegationsResponse): _81.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _81.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _81.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _81.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _81.QueryDelegatorUnbondingDelegationsResponse): _81.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _81.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryRedelegationsRequest;
                fromPartial(object: Partial<_81.QueryRedelegationsRequest>): _81.QueryRedelegationsRequest;
                fromAmino(object: _81.QueryRedelegationsRequestAmino): _81.QueryRedelegationsRequest;
                toAmino(message: _81.QueryRedelegationsRequest): _81.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _81.QueryRedelegationsRequestAminoMsg): _81.QueryRedelegationsRequest;
                toAminoMsg(message: _81.QueryRedelegationsRequest): _81.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _81.QueryRedelegationsRequestProtoMsg): _81.QueryRedelegationsRequest;
                toProto(message: _81.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _81.QueryRedelegationsRequest): _81.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _81.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryRedelegationsResponse;
                fromPartial(object: Partial<_81.QueryRedelegationsResponse>): _81.QueryRedelegationsResponse;
                fromAmino(object: _81.QueryRedelegationsResponseAmino): _81.QueryRedelegationsResponse;
                toAmino(message: _81.QueryRedelegationsResponse): _81.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _81.QueryRedelegationsResponseAminoMsg): _81.QueryRedelegationsResponse;
                toAminoMsg(message: _81.QueryRedelegationsResponse): _81.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _81.QueryRedelegationsResponseProtoMsg): _81.QueryRedelegationsResponse;
                toProto(message: _81.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _81.QueryRedelegationsResponse): _81.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _81.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_81.QueryDelegatorValidatorsRequest>): _81.QueryDelegatorValidatorsRequest;
                fromAmino(object: _81.QueryDelegatorValidatorsRequestAmino): _81.QueryDelegatorValidatorsRequest;
                toAmino(message: _81.QueryDelegatorValidatorsRequest): _81.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _81.QueryDelegatorValidatorsRequestAminoMsg): _81.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _81.QueryDelegatorValidatorsRequest): _81.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _81.QueryDelegatorValidatorsRequestProtoMsg): _81.QueryDelegatorValidatorsRequest;
                toProto(message: _81.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _81.QueryDelegatorValidatorsRequest): _81.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _81.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_81.QueryDelegatorValidatorsResponse>): _81.QueryDelegatorValidatorsResponse;
                fromAmino(object: _81.QueryDelegatorValidatorsResponseAmino): _81.QueryDelegatorValidatorsResponse;
                toAmino(message: _81.QueryDelegatorValidatorsResponse): _81.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _81.QueryDelegatorValidatorsResponseAminoMsg): _81.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _81.QueryDelegatorValidatorsResponse): _81.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _81.QueryDelegatorValidatorsResponseProtoMsg): _81.QueryDelegatorValidatorsResponse;
                toProto(message: _81.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _81.QueryDelegatorValidatorsResponse): _81.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _81.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_81.QueryDelegatorValidatorRequest>): _81.QueryDelegatorValidatorRequest;
                fromAmino(object: _81.QueryDelegatorValidatorRequestAmino): _81.QueryDelegatorValidatorRequest;
                toAmino(message: _81.QueryDelegatorValidatorRequest): _81.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _81.QueryDelegatorValidatorRequestAminoMsg): _81.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _81.QueryDelegatorValidatorRequest): _81.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _81.QueryDelegatorValidatorRequestProtoMsg): _81.QueryDelegatorValidatorRequest;
                toProto(message: _81.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _81.QueryDelegatorValidatorRequest): _81.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _81.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_81.QueryDelegatorValidatorResponse>): _81.QueryDelegatorValidatorResponse;
                fromAmino(object: _81.QueryDelegatorValidatorResponseAmino): _81.QueryDelegatorValidatorResponse;
                toAmino(message: _81.QueryDelegatorValidatorResponse): _81.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _81.QueryDelegatorValidatorResponseAminoMsg): _81.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _81.QueryDelegatorValidatorResponse): _81.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _81.QueryDelegatorValidatorResponseProtoMsg): _81.QueryDelegatorValidatorResponse;
                toProto(message: _81.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _81.QueryDelegatorValidatorResponse): _81.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _81.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_81.QueryHistoricalInfoRequest>): _81.QueryHistoricalInfoRequest;
                fromAmino(object: _81.QueryHistoricalInfoRequestAmino): _81.QueryHistoricalInfoRequest;
                toAmino(message: _81.QueryHistoricalInfoRequest): _81.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _81.QueryHistoricalInfoRequestAminoMsg): _81.QueryHistoricalInfoRequest;
                toAminoMsg(message: _81.QueryHistoricalInfoRequest): _81.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _81.QueryHistoricalInfoRequestProtoMsg): _81.QueryHistoricalInfoRequest;
                toProto(message: _81.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _81.QueryHistoricalInfoRequest): _81.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _81.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_81.QueryHistoricalInfoResponse>): _81.QueryHistoricalInfoResponse;
                fromAmino(object: _81.QueryHistoricalInfoResponseAmino): _81.QueryHistoricalInfoResponse;
                toAmino(message: _81.QueryHistoricalInfoResponse): _81.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _81.QueryHistoricalInfoResponseAminoMsg): _81.QueryHistoricalInfoResponse;
                toAminoMsg(message: _81.QueryHistoricalInfoResponse): _81.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _81.QueryHistoricalInfoResponseProtoMsg): _81.QueryHistoricalInfoResponse;
                toProto(message: _81.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _81.QueryHistoricalInfoResponse): _81.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _81.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _81.QueryPoolRequest;
                fromPartial(_: Partial<_81.QueryPoolRequest>): _81.QueryPoolRequest;
                fromAmino(_: _81.QueryPoolRequestAmino): _81.QueryPoolRequest;
                toAmino(_: _81.QueryPoolRequest): _81.QueryPoolRequestAmino;
                fromAminoMsg(object: _81.QueryPoolRequestAminoMsg): _81.QueryPoolRequest;
                toAminoMsg(message: _81.QueryPoolRequest): _81.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _81.QueryPoolRequestProtoMsg): _81.QueryPoolRequest;
                toProto(message: _81.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _81.QueryPoolRequest): _81.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _81.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryPoolResponse;
                fromPartial(object: Partial<_81.QueryPoolResponse>): _81.QueryPoolResponse;
                fromAmino(object: _81.QueryPoolResponseAmino): _81.QueryPoolResponse;
                toAmino(message: _81.QueryPoolResponse): _81.QueryPoolResponseAmino;
                fromAminoMsg(object: _81.QueryPoolResponseAminoMsg): _81.QueryPoolResponse;
                toAminoMsg(message: _81.QueryPoolResponse): _81.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _81.QueryPoolResponseProtoMsg): _81.QueryPoolResponse;
                toProto(message: _81.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _81.QueryPoolResponse): _81.QueryPoolResponseProtoMsg;
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
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _80.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.LastValidatorPower;
                fromPartial(object: Partial<_80.LastValidatorPower>): _80.LastValidatorPower;
                fromAmino(object: _80.LastValidatorPowerAmino): _80.LastValidatorPower;
                toAmino(message: _80.LastValidatorPower): _80.LastValidatorPowerAmino;
                fromAminoMsg(object: _80.LastValidatorPowerAminoMsg): _80.LastValidatorPower;
                toAminoMsg(message: _80.LastValidatorPower): _80.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _80.LastValidatorPowerProtoMsg): _80.LastValidatorPower;
                toProto(message: _80.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _80.LastValidatorPower): _80.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _79.AuthorizationType;
            authorizationTypeToJSON(object: _79.AuthorizationType): string;
            AuthorizationType: typeof _79.AuthorizationType;
            AuthorizationTypeSDKType: typeof _79.AuthorizationType;
            AuthorizationTypeAmino: typeof _79.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _79.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.StakeAuthorization;
                fromPartial(object: Partial<_79.StakeAuthorization>): _79.StakeAuthorization;
                fromAmino(object: _79.StakeAuthorizationAmino): _79.StakeAuthorization;
                toAmino(message: _79.StakeAuthorization): _79.StakeAuthorizationAmino;
                fromAminoMsg(object: _79.StakeAuthorizationAminoMsg): _79.StakeAuthorization;
                toAminoMsg(message: _79.StakeAuthorization): _79.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _79.StakeAuthorizationProtoMsg): _79.StakeAuthorization;
                toProto(message: _79.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _79.StakeAuthorization): _79.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _79.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.StakeAuthorization_Validators;
                fromPartial(object: Partial<_79.StakeAuthorization_Validators>): _79.StakeAuthorization_Validators;
                fromAmino(object: _79.StakeAuthorization_ValidatorsAmino): _79.StakeAuthorization_Validators;
                toAmino(message: _79.StakeAuthorization_Validators): _79.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _79.StakeAuthorization_ValidatorsAminoMsg): _79.StakeAuthorization_Validators;
                toAminoMsg(message: _79.StakeAuthorization_Validators): _79.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _79.StakeAuthorization_ValidatorsProtoMsg): _79.StakeAuthorization_Validators;
                toProto(message: _79.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _79.StakeAuthorization_Validators): _79.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _84.SignMode;
                signModeToJSON(object: _84.SignMode): string;
                SignMode: typeof _84.SignMode;
                SignModeSDKType: typeof _84.SignMode;
                SignModeAmino: typeof _84.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _84.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _84.SignatureDescriptors;
                    fromPartial(object: Partial<_84.SignatureDescriptors>): _84.SignatureDescriptors;
                    fromAmino(object: _84.SignatureDescriptorsAmino): _84.SignatureDescriptors;
                    toAmino(message: _84.SignatureDescriptors): _84.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _84.SignatureDescriptorsAminoMsg): _84.SignatureDescriptors;
                    toAminoMsg(message: _84.SignatureDescriptors): _84.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _84.SignatureDescriptorsProtoMsg): _84.SignatureDescriptors;
                    toProto(message: _84.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _84.SignatureDescriptors): _84.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _84.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _84.SignatureDescriptor;
                    fromPartial(object: Partial<_84.SignatureDescriptor>): _84.SignatureDescriptor;
                    fromAmino(object: _84.SignatureDescriptorAmino): _84.SignatureDescriptor;
                    toAmino(message: _84.SignatureDescriptor): _84.SignatureDescriptorAmino;
                    fromAminoMsg(object: _84.SignatureDescriptorAminoMsg): _84.SignatureDescriptor;
                    toAminoMsg(message: _84.SignatureDescriptor): _84.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _84.SignatureDescriptorProtoMsg): _84.SignatureDescriptor;
                    toProto(message: _84.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _84.SignatureDescriptor): _84.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _84.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _84.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_84.SignatureDescriptor_Data>): _84.SignatureDescriptor_Data;
                    fromAmino(object: _84.SignatureDescriptor_DataAmino): _84.SignatureDescriptor_Data;
                    toAmino(message: _84.SignatureDescriptor_Data): _84.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _84.SignatureDescriptor_DataAminoMsg): _84.SignatureDescriptor_Data;
                    toAminoMsg(message: _84.SignatureDescriptor_Data): _84.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _84.SignatureDescriptor_DataProtoMsg): _84.SignatureDescriptor_Data;
                    toProto(message: _84.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _84.SignatureDescriptor_Data): _84.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _84.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _84.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_84.SignatureDescriptor_Data_Single>): _84.SignatureDescriptor_Data_Single;
                    fromAmino(object: _84.SignatureDescriptor_Data_SingleAmino): _84.SignatureDescriptor_Data_Single;
                    toAmino(message: _84.SignatureDescriptor_Data_Single): _84.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _84.SignatureDescriptor_Data_SingleAminoMsg): _84.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _84.SignatureDescriptor_Data_Single): _84.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _84.SignatureDescriptor_Data_SingleProtoMsg): _84.SignatureDescriptor_Data_Single;
                    toProto(message: _84.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _84.SignatureDescriptor_Data_Single): _84.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _84.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _84.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_84.SignatureDescriptor_Data_Multi>): _84.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _84.SignatureDescriptor_Data_MultiAmino): _84.SignatureDescriptor_Data_Multi;
                    toAmino(message: _84.SignatureDescriptor_Data_Multi): _84.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _84.SignatureDescriptor_Data_MultiAminoMsg): _84.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _84.SignatureDescriptor_Data_Multi): _84.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _84.SignatureDescriptor_Data_MultiProtoMsg): _84.SignatureDescriptor_Data_Multi;
                    toProto(message: _84.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _84.SignatureDescriptor_Data_Multi): _84.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _197.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _85.SimulateRequest): Promise<_85.SimulateResponse>;
                getTx(request: _85.GetTxRequest): Promise<_85.GetTxResponse>;
                broadcastTx(request: _85.BroadcastTxRequest): Promise<_85.BroadcastTxResponse>;
                getTxsEvent(request: _85.GetTxsEventRequest): Promise<_85.GetTxsEventResponse>;
                getBlockWithTxs(request: _85.GetBlockWithTxsRequest): Promise<_85.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _183.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _86.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.Tx;
                fromPartial(object: Partial<_86.Tx>): _86.Tx;
                fromAmino(object: _86.TxAmino): _86.Tx;
                toAmino(message: _86.Tx): _86.TxAmino;
                fromAminoMsg(object: _86.TxAminoMsg): _86.Tx;
                toAminoMsg(message: _86.Tx): _86.TxAminoMsg;
                fromProtoMsg(message: _86.TxProtoMsg): _86.Tx;
                toProto(message: _86.Tx): Uint8Array;
                toProtoMsg(message: _86.Tx): _86.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _86.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.TxRaw;
                fromPartial(object: Partial<_86.TxRaw>): _86.TxRaw;
                fromAmino(object: _86.TxRawAmino): _86.TxRaw;
                toAmino(message: _86.TxRaw): _86.TxRawAmino;
                fromAminoMsg(object: _86.TxRawAminoMsg): _86.TxRaw;
                toAminoMsg(message: _86.TxRaw): _86.TxRawAminoMsg;
                fromProtoMsg(message: _86.TxRawProtoMsg): _86.TxRaw;
                toProto(message: _86.TxRaw): Uint8Array;
                toProtoMsg(message: _86.TxRaw): _86.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _86.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.SignDoc;
                fromPartial(object: Partial<_86.SignDoc>): _86.SignDoc;
                fromAmino(object: _86.SignDocAmino): _86.SignDoc;
                toAmino(message: _86.SignDoc): _86.SignDocAmino;
                fromAminoMsg(object: _86.SignDocAminoMsg): _86.SignDoc;
                toAminoMsg(message: _86.SignDoc): _86.SignDocAminoMsg;
                fromProtoMsg(message: _86.SignDocProtoMsg): _86.SignDoc;
                toProto(message: _86.SignDoc): Uint8Array;
                toProtoMsg(message: _86.SignDoc): _86.SignDocProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _86.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.TxBody;
                fromPartial(object: Partial<_86.TxBody>): _86.TxBody;
                fromAmino(object: _86.TxBodyAmino): _86.TxBody;
                toAmino(message: _86.TxBody): _86.TxBodyAmino;
                fromAminoMsg(object: _86.TxBodyAminoMsg): _86.TxBody;
                toAminoMsg(message: _86.TxBody): _86.TxBodyAminoMsg;
                fromProtoMsg(message: _86.TxBodyProtoMsg): _86.TxBody;
                toProto(message: _86.TxBody): Uint8Array;
                toProtoMsg(message: _86.TxBody): _86.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _86.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.AuthInfo;
                fromPartial(object: Partial<_86.AuthInfo>): _86.AuthInfo;
                fromAmino(object: _86.AuthInfoAmino): _86.AuthInfo;
                toAmino(message: _86.AuthInfo): _86.AuthInfoAmino;
                fromAminoMsg(object: _86.AuthInfoAminoMsg): _86.AuthInfo;
                toAminoMsg(message: _86.AuthInfo): _86.AuthInfoAminoMsg;
                fromProtoMsg(message: _86.AuthInfoProtoMsg): _86.AuthInfo;
                toProto(message: _86.AuthInfo): Uint8Array;
                toProtoMsg(message: _86.AuthInfo): _86.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _86.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.SignerInfo;
                fromPartial(object: Partial<_86.SignerInfo>): _86.SignerInfo;
                fromAmino(object: _86.SignerInfoAmino): _86.SignerInfo;
                toAmino(message: _86.SignerInfo): _86.SignerInfoAmino;
                fromAminoMsg(object: _86.SignerInfoAminoMsg): _86.SignerInfo;
                toAminoMsg(message: _86.SignerInfo): _86.SignerInfoAminoMsg;
                fromProtoMsg(message: _86.SignerInfoProtoMsg): _86.SignerInfo;
                toProto(message: _86.SignerInfo): Uint8Array;
                toProtoMsg(message: _86.SignerInfo): _86.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _86.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.ModeInfo;
                fromPartial(object: Partial<_86.ModeInfo>): _86.ModeInfo;
                fromAmino(object: _86.ModeInfoAmino): _86.ModeInfo;
                toAmino(message: _86.ModeInfo): _86.ModeInfoAmino;
                fromAminoMsg(object: _86.ModeInfoAminoMsg): _86.ModeInfo;
                toAminoMsg(message: _86.ModeInfo): _86.ModeInfoAminoMsg;
                fromProtoMsg(message: _86.ModeInfoProtoMsg): _86.ModeInfo;
                toProto(message: _86.ModeInfo): Uint8Array;
                toProtoMsg(message: _86.ModeInfo): _86.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _86.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.ModeInfo_Single;
                fromPartial(object: Partial<_86.ModeInfo_Single>): _86.ModeInfo_Single;
                fromAmino(object: _86.ModeInfo_SingleAmino): _86.ModeInfo_Single;
                toAmino(message: _86.ModeInfo_Single): _86.ModeInfo_SingleAmino;
                fromAminoMsg(object: _86.ModeInfo_SingleAminoMsg): _86.ModeInfo_Single;
                toAminoMsg(message: _86.ModeInfo_Single): _86.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _86.ModeInfo_SingleProtoMsg): _86.ModeInfo_Single;
                toProto(message: _86.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _86.ModeInfo_Single): _86.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _86.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.ModeInfo_Multi;
                fromPartial(object: Partial<_86.ModeInfo_Multi>): _86.ModeInfo_Multi;
                fromAmino(object: _86.ModeInfo_MultiAmino): _86.ModeInfo_Multi;
                toAmino(message: _86.ModeInfo_Multi): _86.ModeInfo_MultiAmino;
                fromAminoMsg(object: _86.ModeInfo_MultiAminoMsg): _86.ModeInfo_Multi;
                toAminoMsg(message: _86.ModeInfo_Multi): _86.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _86.ModeInfo_MultiProtoMsg): _86.ModeInfo_Multi;
                toProto(message: _86.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _86.ModeInfo_Multi): _86.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _86.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.Fee;
                fromPartial(object: Partial<_86.Fee>): _86.Fee;
                fromAmino(object: _86.FeeAmino): _86.Fee;
                toAmino(message: _86.Fee): _86.FeeAmino;
                fromAminoMsg(object: _86.FeeAminoMsg): _86.Fee;
                toAminoMsg(message: _86.Fee): _86.FeeAminoMsg;
                fromProtoMsg(message: _86.FeeProtoMsg): _86.Fee;
                toProto(message: _86.Fee): Uint8Array;
                toProtoMsg(message: _86.Fee): _86.FeeProtoMsg;
            };
            orderByFromJSON(object: any): _85.OrderBy;
            orderByToJSON(object: _85.OrderBy): string;
            broadcastModeFromJSON(object: any): _85.BroadcastMode;
            broadcastModeToJSON(object: _85.BroadcastMode): string;
            OrderBy: typeof _85.OrderBy;
            OrderBySDKType: typeof _85.OrderBy;
            OrderByAmino: typeof _85.OrderBy;
            BroadcastMode: typeof _85.BroadcastMode;
            BroadcastModeSDKType: typeof _85.BroadcastMode;
            BroadcastModeAmino: typeof _85.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _85.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.GetTxsEventRequest;
                fromPartial(object: Partial<_85.GetTxsEventRequest>): _85.GetTxsEventRequest;
                fromAmino(object: _85.GetTxsEventRequestAmino): _85.GetTxsEventRequest;
                toAmino(message: _85.GetTxsEventRequest): _85.GetTxsEventRequestAmino;
                fromAminoMsg(object: _85.GetTxsEventRequestAminoMsg): _85.GetTxsEventRequest;
                toAminoMsg(message: _85.GetTxsEventRequest): _85.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _85.GetTxsEventRequestProtoMsg): _85.GetTxsEventRequest;
                toProto(message: _85.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _85.GetTxsEventRequest): _85.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _85.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.GetTxsEventResponse;
                fromPartial(object: Partial<_85.GetTxsEventResponse>): _85.GetTxsEventResponse;
                fromAmino(object: _85.GetTxsEventResponseAmino): _85.GetTxsEventResponse;
                toAmino(message: _85.GetTxsEventResponse): _85.GetTxsEventResponseAmino;
                fromAminoMsg(object: _85.GetTxsEventResponseAminoMsg): _85.GetTxsEventResponse;
                toAminoMsg(message: _85.GetTxsEventResponse): _85.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _85.GetTxsEventResponseProtoMsg): _85.GetTxsEventResponse;
                toProto(message: _85.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _85.GetTxsEventResponse): _85.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _85.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.BroadcastTxRequest;
                fromPartial(object: Partial<_85.BroadcastTxRequest>): _85.BroadcastTxRequest;
                fromAmino(object: _85.BroadcastTxRequestAmino): _85.BroadcastTxRequest;
                toAmino(message: _85.BroadcastTxRequest): _85.BroadcastTxRequestAmino;
                fromAminoMsg(object: _85.BroadcastTxRequestAminoMsg): _85.BroadcastTxRequest;
                toAminoMsg(message: _85.BroadcastTxRequest): _85.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _85.BroadcastTxRequestProtoMsg): _85.BroadcastTxRequest;
                toProto(message: _85.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _85.BroadcastTxRequest): _85.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _85.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.BroadcastTxResponse;
                fromPartial(object: Partial<_85.BroadcastTxResponse>): _85.BroadcastTxResponse;
                fromAmino(object: _85.BroadcastTxResponseAmino): _85.BroadcastTxResponse;
                toAmino(message: _85.BroadcastTxResponse): _85.BroadcastTxResponseAmino;
                fromAminoMsg(object: _85.BroadcastTxResponseAminoMsg): _85.BroadcastTxResponse;
                toAminoMsg(message: _85.BroadcastTxResponse): _85.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _85.BroadcastTxResponseProtoMsg): _85.BroadcastTxResponse;
                toProto(message: _85.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _85.BroadcastTxResponse): _85.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _85.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.SimulateRequest;
                fromPartial(object: Partial<_85.SimulateRequest>): _85.SimulateRequest;
                fromAmino(object: _85.SimulateRequestAmino): _85.SimulateRequest;
                toAmino(message: _85.SimulateRequest): _85.SimulateRequestAmino;
                fromAminoMsg(object: _85.SimulateRequestAminoMsg): _85.SimulateRequest;
                toAminoMsg(message: _85.SimulateRequest): _85.SimulateRequestAminoMsg;
                fromProtoMsg(message: _85.SimulateRequestProtoMsg): _85.SimulateRequest;
                toProto(message: _85.SimulateRequest): Uint8Array;
                toProtoMsg(message: _85.SimulateRequest): _85.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _85.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.SimulateResponse;
                fromPartial(object: Partial<_85.SimulateResponse>): _85.SimulateResponse;
                fromAmino(object: _85.SimulateResponseAmino): _85.SimulateResponse;
                toAmino(message: _85.SimulateResponse): _85.SimulateResponseAmino;
                fromAminoMsg(object: _85.SimulateResponseAminoMsg): _85.SimulateResponse;
                toAminoMsg(message: _85.SimulateResponse): _85.SimulateResponseAminoMsg;
                fromProtoMsg(message: _85.SimulateResponseProtoMsg): _85.SimulateResponse;
                toProto(message: _85.SimulateResponse): Uint8Array;
                toProtoMsg(message: _85.SimulateResponse): _85.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _85.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.GetTxRequest;
                fromPartial(object: Partial<_85.GetTxRequest>): _85.GetTxRequest;
                fromAmino(object: _85.GetTxRequestAmino): _85.GetTxRequest;
                toAmino(message: _85.GetTxRequest): _85.GetTxRequestAmino;
                fromAminoMsg(object: _85.GetTxRequestAminoMsg): _85.GetTxRequest;
                toAminoMsg(message: _85.GetTxRequest): _85.GetTxRequestAminoMsg;
                fromProtoMsg(message: _85.GetTxRequestProtoMsg): _85.GetTxRequest;
                toProto(message: _85.GetTxRequest): Uint8Array;
                toProtoMsg(message: _85.GetTxRequest): _85.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _85.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.GetTxResponse;
                fromPartial(object: Partial<_85.GetTxResponse>): _85.GetTxResponse;
                fromAmino(object: _85.GetTxResponseAmino): _85.GetTxResponse;
                toAmino(message: _85.GetTxResponse): _85.GetTxResponseAmino;
                fromAminoMsg(object: _85.GetTxResponseAminoMsg): _85.GetTxResponse;
                toAminoMsg(message: _85.GetTxResponse): _85.GetTxResponseAminoMsg;
                fromProtoMsg(message: _85.GetTxResponseProtoMsg): _85.GetTxResponse;
                toProto(message: _85.GetTxResponse): Uint8Array;
                toProtoMsg(message: _85.GetTxResponse): _85.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _85.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_85.GetBlockWithTxsRequest>): _85.GetBlockWithTxsRequest;
                fromAmino(object: _85.GetBlockWithTxsRequestAmino): _85.GetBlockWithTxsRequest;
                toAmino(message: _85.GetBlockWithTxsRequest): _85.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _85.GetBlockWithTxsRequestAminoMsg): _85.GetBlockWithTxsRequest;
                toAminoMsg(message: _85.GetBlockWithTxsRequest): _85.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _85.GetBlockWithTxsRequestProtoMsg): _85.GetBlockWithTxsRequest;
                toProto(message: _85.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _85.GetBlockWithTxsRequest): _85.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _85.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_85.GetBlockWithTxsResponse>): _85.GetBlockWithTxsResponse;
                fromAmino(object: _85.GetBlockWithTxsResponseAmino): _85.GetBlockWithTxsResponse;
                toAmino(message: _85.GetBlockWithTxsResponse): _85.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _85.GetBlockWithTxsResponseAminoMsg): _85.GetBlockWithTxsResponse;
                toAminoMsg(message: _85.GetBlockWithTxsResponse): _85.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _85.GetBlockWithTxsResponseProtoMsg): _85.GetBlockWithTxsResponse;
                toProto(message: _85.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _85.GetBlockWithTxsResponse): _85.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _198.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _87.QueryCurrentPlanRequest): Promise<_87.QueryCurrentPlanResponse>;
                appliedPlan(request: _87.QueryAppliedPlanRequest): Promise<_87.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _87.QueryUpgradedConsensusStateRequest): Promise<_87.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _87.QueryModuleVersionsRequest): Promise<_87.QueryModuleVersionsResponse>;
            };
            LCDQueryClient: typeof _184.LCDQueryClient;
            Plan: {
                typeUrl: string;
                encode(message: _88.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.Plan;
                fromPartial(object: Partial<_88.Plan>): _88.Plan;
                fromAmino(object: _88.PlanAmino): _88.Plan;
                toAmino(message: _88.Plan): _88.PlanAmino;
                fromAminoMsg(object: _88.PlanAminoMsg): _88.Plan;
                toAminoMsg(message: _88.Plan): _88.PlanAminoMsg;
                fromProtoMsg(message: _88.PlanProtoMsg): _88.Plan;
                toProto(message: _88.Plan): Uint8Array;
                toProtoMsg(message: _88.Plan): _88.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _88.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_88.SoftwareUpgradeProposal>): _88.SoftwareUpgradeProposal;
                fromAmino(object: _88.SoftwareUpgradeProposalAmino): _88.SoftwareUpgradeProposal;
                toAmino(message: _88.SoftwareUpgradeProposal): _88.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _88.SoftwareUpgradeProposalAminoMsg): _88.SoftwareUpgradeProposal;
                toAminoMsg(message: _88.SoftwareUpgradeProposal): _88.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _88.SoftwareUpgradeProposalProtoMsg): _88.SoftwareUpgradeProposal;
                toProto(message: _88.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _88.SoftwareUpgradeProposal): _88.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _88.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_88.CancelSoftwareUpgradeProposal>): _88.CancelSoftwareUpgradeProposal;
                fromAmino(object: _88.CancelSoftwareUpgradeProposalAmino): _88.CancelSoftwareUpgradeProposal;
                toAmino(message: _88.CancelSoftwareUpgradeProposal): _88.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _88.CancelSoftwareUpgradeProposalAminoMsg): _88.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _88.CancelSoftwareUpgradeProposal): _88.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _88.CancelSoftwareUpgradeProposalProtoMsg): _88.CancelSoftwareUpgradeProposal;
                toProto(message: _88.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _88.CancelSoftwareUpgradeProposal): _88.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _88.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.ModuleVersion;
                fromPartial(object: Partial<_88.ModuleVersion>): _88.ModuleVersion;
                fromAmino(object: _88.ModuleVersionAmino): _88.ModuleVersion;
                toAmino(message: _88.ModuleVersion): _88.ModuleVersionAmino;
                fromAminoMsg(object: _88.ModuleVersionAminoMsg): _88.ModuleVersion;
                toAminoMsg(message: _88.ModuleVersion): _88.ModuleVersionAminoMsg;
                fromProtoMsg(message: _88.ModuleVersionProtoMsg): _88.ModuleVersion;
                toProto(message: _88.ModuleVersion): Uint8Array;
                toProtoMsg(message: _88.ModuleVersion): _88.ModuleVersionProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _87.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _87.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_87.QueryCurrentPlanRequest>): _87.QueryCurrentPlanRequest;
                fromAmino(_: _87.QueryCurrentPlanRequestAmino): _87.QueryCurrentPlanRequest;
                toAmino(_: _87.QueryCurrentPlanRequest): _87.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _87.QueryCurrentPlanRequestAminoMsg): _87.QueryCurrentPlanRequest;
                toAminoMsg(message: _87.QueryCurrentPlanRequest): _87.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _87.QueryCurrentPlanRequestProtoMsg): _87.QueryCurrentPlanRequest;
                toProto(message: _87.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _87.QueryCurrentPlanRequest): _87.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _87.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_87.QueryCurrentPlanResponse>): _87.QueryCurrentPlanResponse;
                fromAmino(object: _87.QueryCurrentPlanResponseAmino): _87.QueryCurrentPlanResponse;
                toAmino(message: _87.QueryCurrentPlanResponse): _87.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _87.QueryCurrentPlanResponseAminoMsg): _87.QueryCurrentPlanResponse;
                toAminoMsg(message: _87.QueryCurrentPlanResponse): _87.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _87.QueryCurrentPlanResponseProtoMsg): _87.QueryCurrentPlanResponse;
                toProto(message: _87.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _87.QueryCurrentPlanResponse): _87.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _87.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_87.QueryAppliedPlanRequest>): _87.QueryAppliedPlanRequest;
                fromAmino(object: _87.QueryAppliedPlanRequestAmino): _87.QueryAppliedPlanRequest;
                toAmino(message: _87.QueryAppliedPlanRequest): _87.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _87.QueryAppliedPlanRequestAminoMsg): _87.QueryAppliedPlanRequest;
                toAminoMsg(message: _87.QueryAppliedPlanRequest): _87.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _87.QueryAppliedPlanRequestProtoMsg): _87.QueryAppliedPlanRequest;
                toProto(message: _87.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _87.QueryAppliedPlanRequest): _87.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _87.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_87.QueryAppliedPlanResponse>): _87.QueryAppliedPlanResponse;
                fromAmino(object: _87.QueryAppliedPlanResponseAmino): _87.QueryAppliedPlanResponse;
                toAmino(message: _87.QueryAppliedPlanResponse): _87.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _87.QueryAppliedPlanResponseAminoMsg): _87.QueryAppliedPlanResponse;
                toAminoMsg(message: _87.QueryAppliedPlanResponse): _87.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _87.QueryAppliedPlanResponseProtoMsg): _87.QueryAppliedPlanResponse;
                toProto(message: _87.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _87.QueryAppliedPlanResponse): _87.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _87.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_87.QueryUpgradedConsensusStateRequest>): _87.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _87.QueryUpgradedConsensusStateRequestAmino): _87.QueryUpgradedConsensusStateRequest;
                toAmino(message: _87.QueryUpgradedConsensusStateRequest): _87.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _87.QueryUpgradedConsensusStateRequestAminoMsg): _87.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _87.QueryUpgradedConsensusStateRequest): _87.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _87.QueryUpgradedConsensusStateRequestProtoMsg): _87.QueryUpgradedConsensusStateRequest;
                toProto(message: _87.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _87.QueryUpgradedConsensusStateRequest): _87.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _87.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_87.QueryUpgradedConsensusStateResponse>): _87.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _87.QueryUpgradedConsensusStateResponseAmino): _87.QueryUpgradedConsensusStateResponse;
                toAmino(message: _87.QueryUpgradedConsensusStateResponse): _87.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _87.QueryUpgradedConsensusStateResponseAminoMsg): _87.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _87.QueryUpgradedConsensusStateResponse): _87.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _87.QueryUpgradedConsensusStateResponseProtoMsg): _87.QueryUpgradedConsensusStateResponse;
                toProto(message: _87.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _87.QueryUpgradedConsensusStateResponse): _87.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _87.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_87.QueryModuleVersionsRequest>): _87.QueryModuleVersionsRequest;
                fromAmino(object: _87.QueryModuleVersionsRequestAmino): _87.QueryModuleVersionsRequest;
                toAmino(message: _87.QueryModuleVersionsRequest): _87.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _87.QueryModuleVersionsRequestAminoMsg): _87.QueryModuleVersionsRequest;
                toAminoMsg(message: _87.QueryModuleVersionsRequest): _87.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _87.QueryModuleVersionsRequestProtoMsg): _87.QueryModuleVersionsRequest;
                toProto(message: _87.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _87.QueryModuleVersionsRequest): _87.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _87.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_87.QueryModuleVersionsResponse>): _87.QueryModuleVersionsResponse;
                fromAmino(object: _87.QueryModuleVersionsResponseAmino): _87.QueryModuleVersionsResponse;
                toAmino(message: _87.QueryModuleVersionsResponse): _87.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _87.QueryModuleVersionsResponseAminoMsg): _87.QueryModuleVersionsResponse;
                toAminoMsg(message: _87.QueryModuleVersionsResponse): _87.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _87.QueryModuleVersionsResponseProtoMsg): _87.QueryModuleVersionsResponse;
                toProto(message: _87.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _87.QueryModuleVersionsResponse): _87.QueryModuleVersionsResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _208.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _89.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _89.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _89.MsgCreateVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _89.MsgCreateVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _89.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _89.MsgCreateVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _89.MsgCreateVestingAccount) => _89.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _89.MsgCreateVestingAccountAmino) => _89.MsgCreateVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _90.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.BaseVestingAccount;
                fromPartial(object: Partial<_90.BaseVestingAccount>): _90.BaseVestingAccount;
                fromAmino(object: _90.BaseVestingAccountAmino): _90.BaseVestingAccount;
                toAmino(message: _90.BaseVestingAccount): _90.BaseVestingAccountAmino;
                fromAminoMsg(object: _90.BaseVestingAccountAminoMsg): _90.BaseVestingAccount;
                toAminoMsg(message: _90.BaseVestingAccount): _90.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _90.BaseVestingAccountProtoMsg): _90.BaseVestingAccount;
                toProto(message: _90.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _90.BaseVestingAccount): _90.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _90.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.ContinuousVestingAccount;
                fromPartial(object: Partial<_90.ContinuousVestingAccount>): _90.ContinuousVestingAccount;
                fromAmino(object: _90.ContinuousVestingAccountAmino): _90.ContinuousVestingAccount;
                toAmino(message: _90.ContinuousVestingAccount): _90.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _90.ContinuousVestingAccountAminoMsg): _90.ContinuousVestingAccount;
                toAminoMsg(message: _90.ContinuousVestingAccount): _90.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _90.ContinuousVestingAccountProtoMsg): _90.ContinuousVestingAccount;
                toProto(message: _90.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _90.ContinuousVestingAccount): _90.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _90.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.DelayedVestingAccount;
                fromPartial(object: Partial<_90.DelayedVestingAccount>): _90.DelayedVestingAccount;
                fromAmino(object: _90.DelayedVestingAccountAmino): _90.DelayedVestingAccount;
                toAmino(message: _90.DelayedVestingAccount): _90.DelayedVestingAccountAmino;
                fromAminoMsg(object: _90.DelayedVestingAccountAminoMsg): _90.DelayedVestingAccount;
                toAminoMsg(message: _90.DelayedVestingAccount): _90.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _90.DelayedVestingAccountProtoMsg): _90.DelayedVestingAccount;
                toProto(message: _90.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _90.DelayedVestingAccount): _90.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _90.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.Period;
                fromPartial(object: Partial<_90.Period>): _90.Period;
                fromAmino(object: _90.PeriodAmino): _90.Period;
                toAmino(message: _90.Period): _90.PeriodAmino;
                fromAminoMsg(object: _90.PeriodAminoMsg): _90.Period;
                toAminoMsg(message: _90.Period): _90.PeriodAminoMsg;
                fromProtoMsg(message: _90.PeriodProtoMsg): _90.Period;
                toProto(message: _90.Period): Uint8Array;
                toProtoMsg(message: _90.Period): _90.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _90.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.PeriodicVestingAccount;
                fromPartial(object: Partial<_90.PeriodicVestingAccount>): _90.PeriodicVestingAccount;
                fromAmino(object: _90.PeriodicVestingAccountAmino): _90.PeriodicVestingAccount;
                toAmino(message: _90.PeriodicVestingAccount): _90.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _90.PeriodicVestingAccountAminoMsg): _90.PeriodicVestingAccount;
                toAminoMsg(message: _90.PeriodicVestingAccount): _90.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _90.PeriodicVestingAccountProtoMsg): _90.PeriodicVestingAccount;
                toProto(message: _90.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _90.PeriodicVestingAccount): _90.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _90.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.PermanentLockedAccount;
                fromPartial(object: Partial<_90.PermanentLockedAccount>): _90.PermanentLockedAccount;
                fromAmino(object: _90.PermanentLockedAccountAmino): _90.PermanentLockedAccount;
                toAmino(message: _90.PermanentLockedAccount): _90.PermanentLockedAccountAmino;
                fromAminoMsg(object: _90.PermanentLockedAccountAminoMsg): _90.PermanentLockedAccount;
                toAminoMsg(message: _90.PermanentLockedAccount): _90.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _90.PermanentLockedAccountProtoMsg): _90.PermanentLockedAccount;
                toProto(message: _90.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _90.PermanentLockedAccount): _90.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _89.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgCreateVestingAccount;
                fromPartial(object: Partial<_89.MsgCreateVestingAccount>): _89.MsgCreateVestingAccount;
                fromAmino(object: _89.MsgCreateVestingAccountAmino): _89.MsgCreateVestingAccount;
                toAmino(message: _89.MsgCreateVestingAccount): _89.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _89.MsgCreateVestingAccountAminoMsg): _89.MsgCreateVestingAccount;
                toAminoMsg(message: _89.MsgCreateVestingAccount): _89.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _89.MsgCreateVestingAccountProtoMsg): _89.MsgCreateVestingAccount;
                toProto(message: _89.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _89.MsgCreateVestingAccount): _89.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _89.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _89.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_89.MsgCreateVestingAccountResponse>): _89.MsgCreateVestingAccountResponse;
                fromAmino(_: _89.MsgCreateVestingAccountResponseAmino): _89.MsgCreateVestingAccountResponse;
                toAmino(_: _89.MsgCreateVestingAccountResponse): _89.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _89.MsgCreateVestingAccountResponseAminoMsg): _89.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _89.MsgCreateVestingAccountResponse): _89.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _89.MsgCreateVestingAccountResponseProtoMsg): _89.MsgCreateVestingAccountResponse;
                toProto(message: _89.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _89.MsgCreateVestingAccountResponse): _89.MsgCreateVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _199.MsgClientImpl;
                };
                bank: {
                    v1beta1: _200.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _201.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _202.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _203.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _204.MsgClientImpl;
                };
                gov: {
                    v1beta1: _205.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _206.MsgClientImpl;
                };
                staking: {
                    v1beta1: _207.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _208.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _23.QueryAccountsRequest): Promise<_23.QueryAccountsResponse>;
                        account(request: _23.QueryAccountRequest): Promise<_23.QueryAccountResponse>;
                        params(request?: _23.QueryParamsRequest): Promise<_23.QueryParamsResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _27.QueryGrantsRequest): Promise<_27.QueryGrantsResponse>;
                        granterGrants(request: _27.QueryGranterGrantsRequest): Promise<_27.QueryGranterGrantsResponse>;
                        granteeGrants(request: _27.QueryGranteeGrantsRequest): Promise<_27.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _32.QueryBalanceRequest): Promise<_32.QueryBalanceResponse>;
                        allBalances(request: _32.QueryAllBalancesRequest): Promise<_32.QueryAllBalancesResponse>;
                        spendableBalances(request: _32.QuerySpendableBalancesRequest): Promise<_32.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _32.QueryTotalSupplyRequest): Promise<_32.QueryTotalSupplyResponse>;
                        supplyOf(request: _32.QuerySupplyOfRequest): Promise<_32.QuerySupplyOfResponse>;
                        params(request?: _32.QueryParamsRequest): Promise<_32.QueryParamsResponse>;
                        denomMetadata(request: _32.QueryDenomMetadataRequest): Promise<_32.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _32.QueryDenomsMetadataRequest): Promise<_32.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _43.GetNodeInfoRequest): Promise<_43.GetNodeInfoResponse>;
                            getSyncing(request?: _43.GetSyncingRequest): Promise<_43.GetSyncingResponse>;
                            getLatestBlock(request?: _43.GetLatestBlockRequest): Promise<_43.GetLatestBlockResponse>;
                            getBlockByHeight(request: _43.GetBlockByHeightRequest): Promise<_43.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _43.GetLatestValidatorSetRequest): Promise<_43.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _43.GetValidatorSetByHeightRequest): Promise<_43.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _55.QueryParamsRequest): Promise<_55.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _55.QueryValidatorOutstandingRewardsRequest): Promise<_55.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _55.QueryValidatorCommissionRequest): Promise<_55.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _55.QueryValidatorSlashesRequest): Promise<_55.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _55.QueryDelegationRewardsRequest): Promise<_55.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _55.QueryDelegationTotalRewardsRequest): Promise<_55.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _55.QueryDelegatorValidatorsRequest): Promise<_55.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _55.QueryDelegatorWithdrawAddressRequest): Promise<_55.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _55.QueryCommunityPoolRequest): Promise<_55.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _59.QueryEvidenceRequest): Promise<_59.QueryEvidenceResponse>;
                        allEvidence(request?: _59.QueryAllEvidenceRequest): Promise<_59.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _63.QueryAllowanceRequest): Promise<_63.QueryAllowanceResponse>;
                        allowances(request: _63.QueryAllowancesRequest): Promise<_63.QueryAllowancesResponse>;
                        allowancesByGranter(request: _63.QueryAllowancesByGranterRequest): Promise<_63.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _68.QueryProposalRequest): Promise<_68.QueryProposalResponse>;
                        proposals(request: _68.QueryProposalsRequest): Promise<_68.QueryProposalsResponse>;
                        vote(request: _68.QueryVoteRequest): Promise<_68.QueryVoteResponse>;
                        votes(request: _68.QueryVotesRequest): Promise<_68.QueryVotesResponse>;
                        params(request: _68.QueryParamsRequest): Promise<_68.QueryParamsResponse>;
                        deposit(request: _68.QueryDepositRequest): Promise<_68.QueryDepositResponse>;
                        deposits(request: _68.QueryDepositsRequest): Promise<_68.QueryDepositsResponse>;
                        tallyResult(request: _68.QueryTallyResultRequest): Promise<_68.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _72.QueryParamsRequest): Promise<_72.QueryParamsResponse>;
                        inflation(request?: _72.QueryInflationRequest): Promise<_72.QueryInflationResponse>;
                        annualProvisions(request?: _72.QueryAnnualProvisionsRequest): Promise<_72.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _74.QueryParamsRequest): Promise<_74.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _76.QueryParamsRequest): Promise<_76.QueryParamsResponse>;
                        signingInfo(request: _76.QuerySigningInfoRequest): Promise<_76.QuerySigningInfoResponse>;
                        signingInfos(request?: _76.QuerySigningInfosRequest): Promise<_76.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _81.QueryValidatorsRequest): Promise<_81.QueryValidatorsResponse>;
                        validator(request: _81.QueryValidatorRequest): Promise<_81.QueryValidatorResponse>;
                        validatorDelegations(request: _81.QueryValidatorDelegationsRequest): Promise<_81.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _81.QueryValidatorUnbondingDelegationsRequest): Promise<_81.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _81.QueryDelegationRequest): Promise<_81.QueryDelegationResponse>;
                        unbondingDelegation(request: _81.QueryUnbondingDelegationRequest): Promise<_81.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _81.QueryDelegatorDelegationsRequest): Promise<_81.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _81.QueryDelegatorUnbondingDelegationsRequest): Promise<_81.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _81.QueryRedelegationsRequest): Promise<_81.QueryRedelegationsResponse>;
                        delegatorValidators(request: _81.QueryDelegatorValidatorsRequest): Promise<_81.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _81.QueryDelegatorValidatorRequest): Promise<_81.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _81.QueryHistoricalInfoRequest): Promise<_81.QueryHistoricalInfoResponse>;
                        pool(request?: _81.QueryPoolRequest): Promise<_81.QueryPoolResponse>;
                        params(request?: _81.QueryParamsRequest): Promise<_81.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _85.SimulateRequest): Promise<_85.SimulateResponse>;
                        getTx(request: _85.GetTxRequest): Promise<_85.GetTxResponse>;
                        broadcastTx(request: _85.BroadcastTxRequest): Promise<_85.BroadcastTxResponse>;
                        getTxsEvent(request: _85.GetTxsEventRequest): Promise<_85.GetTxsEventResponse>;
                        getBlockWithTxs(request: _85.GetBlockWithTxsRequest): Promise<_85.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _87.QueryCurrentPlanRequest): Promise<_87.QueryCurrentPlanResponse>;
                        appliedPlan(request: _87.QueryAppliedPlanRequest): Promise<_87.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _87.QueryUpgradedConsensusStateRequest): Promise<_87.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _87.QueryModuleVersionsRequest): Promise<_87.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _171.LCDQueryClient;
                };
                authz: {
                    v1beta1: _172.LCDQueryClient;
                };
                bank: {
                    v1beta1: _173.LCDQueryClient;
                };
                base: {
                    tendermint: {
                        v1beta1: _174.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _175.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _176.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _177.LCDQueryClient;
                };
                gov: {
                    v1beta1: _178.LCDQueryClient;
                };
                mint: {
                    v1beta1: _179.LCDQueryClient;
                };
                params: {
                    v1beta1: _180.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _181.LCDQueryClient;
                };
                staking: {
                    v1beta1: _182.LCDQueryClient;
                };
                tx: {
                    v1beta1: _183.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _184.LCDQueryClient;
                };
            };
        }>;
    };
}
