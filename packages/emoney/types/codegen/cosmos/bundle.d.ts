import * as _23 from "./auth/v1beta1/auth";
import * as _24 from "./auth/v1beta1/genesis";
import * as _25 from "./auth/v1beta1/query";
import * as _26 from "./bank/v1beta1/bank";
import * as _27 from "./bank/v1beta1/genesis";
import * as _28 from "./bank/v1beta1/query";
import * as _29 from "./bank/v1beta1/tx";
import * as _30 from "./base/abci/v1beta1/abci";
import * as _31 from "./base/kv/v1beta1/kv";
import * as _32 from "./base/query/v1beta1/pagination";
import * as _33 from "./base/reflection/v1beta1/reflection";
import * as _34 from "./base/snapshots/v1beta1/snapshot";
import * as _35 from "./base/store/v1beta1/commit_info";
import * as _36 from "./base/store/v1beta1/snapshot";
import * as _37 from "./base/tendermint/v1beta1/query";
import * as _38 from "./base/v1beta1/coin";
import * as _39 from "./capability/v1beta1/capability";
import * as _40 from "./capability/v1beta1/genesis";
import * as _41 from "./crisis/v1beta1/genesis";
import * as _42 from "./crisis/v1beta1/tx";
import * as _43 from "./crypto/ed25519/keys";
import * as _44 from "./crypto/multisig/keys";
import * as _45 from "./crypto/secp256k1/keys";
import * as _46 from "./distribution/v1beta1/distribution";
import * as _47 from "./distribution/v1beta1/genesis";
import * as _48 from "./distribution/v1beta1/query";
import * as _49 from "./distribution/v1beta1/tx";
import * as _50 from "./evidence/v1beta1/evidence";
import * as _51 from "./evidence/v1beta1/genesis";
import * as _52 from "./evidence/v1beta1/query";
import * as _53 from "./evidence/v1beta1/tx";
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
import * as _161 from "./auth/v1beta1/query.lcd";
import * as _162 from "./bank/v1beta1/query.lcd";
import * as _163 from "./base/tendermint/v1beta1/query.lcd";
import * as _164 from "./distribution/v1beta1/query.lcd";
import * as _165 from "./evidence/v1beta1/query.lcd";
import * as _166 from "./gov/v1beta1/query.lcd";
import * as _167 from "./mint/v1beta1/query.lcd";
import * as _168 from "./params/v1beta1/query.lcd";
import * as _169 from "./slashing/v1beta1/query.lcd";
import * as _170 from "./staking/v1beta1/query.lcd";
import * as _171 from "./tx/v1beta1/service.lcd";
import * as _172 from "./upgrade/v1beta1/query.lcd";
import * as _173 from "./auth/v1beta1/query.rpc.Query";
import * as _174 from "./bank/v1beta1/query.rpc.Query";
import * as _175 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _176 from "./distribution/v1beta1/query.rpc.Query";
import * as _177 from "./evidence/v1beta1/query.rpc.Query";
import * as _178 from "./gov/v1beta1/query.rpc.Query";
import * as _179 from "./mint/v1beta1/query.rpc.Query";
import * as _180 from "./params/v1beta1/query.rpc.Query";
import * as _181 from "./slashing/v1beta1/query.rpc.Query";
import * as _182 from "./staking/v1beta1/query.rpc.Query";
import * as _183 from "./tx/v1beta1/service.rpc.Service";
import * as _184 from "./upgrade/v1beta1/query.rpc.Query";
import * as _185 from "./bank/v1beta1/tx.rpc.msg";
import * as _186 from "./crisis/v1beta1/tx.rpc.msg";
import * as _187 from "./distribution/v1beta1/tx.rpc.msg";
import * as _188 from "./evidence/v1beta1/tx.rpc.msg";
import * as _189 from "./gov/v1beta1/tx.rpc.msg";
import * as _190 from "./slashing/v1beta1/tx.rpc.msg";
import * as _191 from "./staking/v1beta1/tx.rpc.msg";
import * as _192 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _173.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                account(request: _25.QueryAccountRequest): Promise<_25.QueryAccountResponse>;
                params(request?: _25.QueryParamsRequest): Promise<_25.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _161.LCDQueryClient;
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _25.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryAccountRequest;
                fromPartial(object: Partial<_25.QueryAccountRequest>): _25.QueryAccountRequest;
                fromAmino(object: _25.QueryAccountRequestAmino): _25.QueryAccountRequest;
                toAmino(message: _25.QueryAccountRequest): _25.QueryAccountRequestAmino;
                fromAminoMsg(object: _25.QueryAccountRequestAminoMsg): _25.QueryAccountRequest;
                toAminoMsg(message: _25.QueryAccountRequest): _25.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _25.QueryAccountRequestProtoMsg): _25.QueryAccountRequest;
                toProto(message: _25.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _25.QueryAccountRequest): _25.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _25.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryAccountResponse;
                fromPartial(object: Partial<_25.QueryAccountResponse>): _25.QueryAccountResponse;
                fromAmino(object: _25.QueryAccountResponseAmino): _25.QueryAccountResponse;
                toAmino(message: _25.QueryAccountResponse): _25.QueryAccountResponseAmino;
                fromAminoMsg(object: _25.QueryAccountResponseAminoMsg): _25.QueryAccountResponse;
                toAminoMsg(message: _25.QueryAccountResponse): _25.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _25.QueryAccountResponseProtoMsg): _25.QueryAccountResponse;
                toProto(message: _25.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _25.QueryAccountResponse): _25.QueryAccountResponseProtoMsg;
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
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _23.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
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
            BaseAccount: {
                typeUrl: string;
                encode(message: _23.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.BaseAccount;
                fromPartial(object: Partial<_23.BaseAccount>): _23.BaseAccount;
                fromAmino(object: _23.BaseAccountAmino): _23.BaseAccount;
                toAmino(message: _23.BaseAccount): _23.BaseAccountAmino;
                fromAminoMsg(object: _23.BaseAccountAminoMsg): _23.BaseAccount;
                toAminoMsg(message: _23.BaseAccount): _23.BaseAccountAminoMsg;
                fromProtoMsg(message: _23.BaseAccountProtoMsg): _23.BaseAccount;
                toProto(message: _23.BaseAccount): Uint8Array;
                toProtoMsg(message: _23.BaseAccount): _23.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _23.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.ModuleAccount;
                fromPartial(object: Partial<_23.ModuleAccount>): _23.ModuleAccount;
                fromAmino(object: _23.ModuleAccountAmino): _23.ModuleAccount;
                toAmino(message: _23.ModuleAccount): _23.ModuleAccountAmino;
                fromAminoMsg(object: _23.ModuleAccountAminoMsg): _23.ModuleAccount;
                toAminoMsg(message: _23.ModuleAccount): _23.ModuleAccountAminoMsg;
                fromProtoMsg(message: _23.ModuleAccountProtoMsg): _23.ModuleAccount;
                toProto(message: _23.ModuleAccount): Uint8Array;
                toProtoMsg(message: _23.ModuleAccount): _23.ModuleAccountProtoMsg;
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
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _185.MsgClientImpl;
            QueryClientImpl: typeof _174.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _28.QueryBalanceRequest): Promise<_28.QueryBalanceResponse>;
                allBalances(request: _28.QueryAllBalancesRequest): Promise<_28.QueryAllBalancesResponse>;
                totalSupply(request?: _28.QueryTotalSupplyRequest): Promise<_28.QueryTotalSupplyResponse>;
                supplyOf(request: _28.QuerySupplyOfRequest): Promise<_28.QuerySupplyOfResponse>;
                params(request?: _28.QueryParamsRequest): Promise<_28.QueryParamsResponse>;
                denomMetadata(request: _28.QueryDenomMetadataRequest): Promise<_28.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _28.QueryDenomsMetadataRequest): Promise<_28.QueryDenomsMetadataResponse>;
            };
            LCDQueryClient: typeof _162.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _29.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _29.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _29.MsgSend): {
                        typeUrl: string;
                        value: _29.MsgSend;
                    };
                    multiSend(value: _29.MsgMultiSend): {
                        typeUrl: string;
                        value: _29.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _29.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _29.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _29.MsgSend): {
                        typeUrl: string;
                        value: _29.MsgSend;
                    };
                    multiSend(value: _29.MsgMultiSend): {
                        typeUrl: string;
                        value: _29.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _29.MsgSend) => _29.MsgSendAmino;
                    fromAmino: (object: _29.MsgSendAmino) => _29.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _29.MsgMultiSend) => _29.MsgMultiSendAmino;
                    fromAmino: (object: _29.MsgMultiSendAmino) => _29.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _29.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.MsgSend;
                fromPartial(object: Partial<_29.MsgSend>): _29.MsgSend;
                fromAmino(object: _29.MsgSendAmino): _29.MsgSend;
                toAmino(message: _29.MsgSend): _29.MsgSendAmino;
                fromAminoMsg(object: _29.MsgSendAminoMsg): _29.MsgSend;
                toAminoMsg(message: _29.MsgSend): _29.MsgSendAminoMsg;
                fromProtoMsg(message: _29.MsgSendProtoMsg): _29.MsgSend;
                toProto(message: _29.MsgSend): Uint8Array;
                toProtoMsg(message: _29.MsgSend): _29.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _29.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _29.MsgSendResponse;
                fromPartial(_: Partial<_29.MsgSendResponse>): _29.MsgSendResponse;
                fromAmino(_: _29.MsgSendResponseAmino): _29.MsgSendResponse;
                toAmino(_: _29.MsgSendResponse): _29.MsgSendResponseAmino;
                fromAminoMsg(object: _29.MsgSendResponseAminoMsg): _29.MsgSendResponse;
                toAminoMsg(message: _29.MsgSendResponse): _29.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _29.MsgSendResponseProtoMsg): _29.MsgSendResponse;
                toProto(message: _29.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _29.MsgSendResponse): _29.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _29.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.MsgMultiSend;
                fromPartial(object: Partial<_29.MsgMultiSend>): _29.MsgMultiSend;
                fromAmino(object: _29.MsgMultiSendAmino): _29.MsgMultiSend;
                toAmino(message: _29.MsgMultiSend): _29.MsgMultiSendAmino;
                fromAminoMsg(object: _29.MsgMultiSendAminoMsg): _29.MsgMultiSend;
                toAminoMsg(message: _29.MsgMultiSend): _29.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _29.MsgMultiSendProtoMsg): _29.MsgMultiSend;
                toProto(message: _29.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _29.MsgMultiSend): _29.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _29.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _29.MsgMultiSendResponse;
                fromPartial(_: Partial<_29.MsgMultiSendResponse>): _29.MsgMultiSendResponse;
                fromAmino(_: _29.MsgMultiSendResponseAmino): _29.MsgMultiSendResponse;
                toAmino(_: _29.MsgMultiSendResponse): _29.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _29.MsgMultiSendResponseAminoMsg): _29.MsgMultiSendResponse;
                toAminoMsg(message: _29.MsgMultiSendResponse): _29.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _29.MsgMultiSendResponseProtoMsg): _29.MsgMultiSendResponse;
                toProto(message: _29.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _29.MsgMultiSendResponse): _29.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _28.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryBalanceRequest;
                fromPartial(object: Partial<_28.QueryBalanceRequest>): _28.QueryBalanceRequest;
                fromAmino(object: _28.QueryBalanceRequestAmino): _28.QueryBalanceRequest;
                toAmino(message: _28.QueryBalanceRequest): _28.QueryBalanceRequestAmino;
                fromAminoMsg(object: _28.QueryBalanceRequestAminoMsg): _28.QueryBalanceRequest;
                toAminoMsg(message: _28.QueryBalanceRequest): _28.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _28.QueryBalanceRequestProtoMsg): _28.QueryBalanceRequest;
                toProto(message: _28.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _28.QueryBalanceRequest): _28.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _28.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryBalanceResponse;
                fromPartial(object: Partial<_28.QueryBalanceResponse>): _28.QueryBalanceResponse;
                fromAmino(object: _28.QueryBalanceResponseAmino): _28.QueryBalanceResponse;
                toAmino(message: _28.QueryBalanceResponse): _28.QueryBalanceResponseAmino;
                fromAminoMsg(object: _28.QueryBalanceResponseAminoMsg): _28.QueryBalanceResponse;
                toAminoMsg(message: _28.QueryBalanceResponse): _28.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _28.QueryBalanceResponseProtoMsg): _28.QueryBalanceResponse;
                toProto(message: _28.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _28.QueryBalanceResponse): _28.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _28.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryAllBalancesRequest;
                fromPartial(object: Partial<_28.QueryAllBalancesRequest>): _28.QueryAllBalancesRequest;
                fromAmino(object: _28.QueryAllBalancesRequestAmino): _28.QueryAllBalancesRequest;
                toAmino(message: _28.QueryAllBalancesRequest): _28.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _28.QueryAllBalancesRequestAminoMsg): _28.QueryAllBalancesRequest;
                toAminoMsg(message: _28.QueryAllBalancesRequest): _28.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _28.QueryAllBalancesRequestProtoMsg): _28.QueryAllBalancesRequest;
                toProto(message: _28.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _28.QueryAllBalancesRequest): _28.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _28.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryAllBalancesResponse;
                fromPartial(object: Partial<_28.QueryAllBalancesResponse>): _28.QueryAllBalancesResponse;
                fromAmino(object: _28.QueryAllBalancesResponseAmino): _28.QueryAllBalancesResponse;
                toAmino(message: _28.QueryAllBalancesResponse): _28.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _28.QueryAllBalancesResponseAminoMsg): _28.QueryAllBalancesResponse;
                toAminoMsg(message: _28.QueryAllBalancesResponse): _28.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _28.QueryAllBalancesResponseProtoMsg): _28.QueryAllBalancesResponse;
                toProto(message: _28.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _28.QueryAllBalancesResponse): _28.QueryAllBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(_: _28.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _28.QueryTotalSupplyRequest;
                fromPartial(_: Partial<_28.QueryTotalSupplyRequest>): _28.QueryTotalSupplyRequest;
                fromAmino(_: _28.QueryTotalSupplyRequestAmino): _28.QueryTotalSupplyRequest;
                toAmino(_: _28.QueryTotalSupplyRequest): _28.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _28.QueryTotalSupplyRequestAminoMsg): _28.QueryTotalSupplyRequest;
                toAminoMsg(message: _28.QueryTotalSupplyRequest): _28.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _28.QueryTotalSupplyRequestProtoMsg): _28.QueryTotalSupplyRequest;
                toProto(message: _28.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _28.QueryTotalSupplyRequest): _28.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _28.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_28.QueryTotalSupplyResponse>): _28.QueryTotalSupplyResponse;
                fromAmino(object: _28.QueryTotalSupplyResponseAmino): _28.QueryTotalSupplyResponse;
                toAmino(message: _28.QueryTotalSupplyResponse): _28.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _28.QueryTotalSupplyResponseAminoMsg): _28.QueryTotalSupplyResponse;
                toAminoMsg(message: _28.QueryTotalSupplyResponse): _28.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _28.QueryTotalSupplyResponseProtoMsg): _28.QueryTotalSupplyResponse;
                toProto(message: _28.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _28.QueryTotalSupplyResponse): _28.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _28.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QuerySupplyOfRequest;
                fromPartial(object: Partial<_28.QuerySupplyOfRequest>): _28.QuerySupplyOfRequest;
                fromAmino(object: _28.QuerySupplyOfRequestAmino): _28.QuerySupplyOfRequest;
                toAmino(message: _28.QuerySupplyOfRequest): _28.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _28.QuerySupplyOfRequestAminoMsg): _28.QuerySupplyOfRequest;
                toAminoMsg(message: _28.QuerySupplyOfRequest): _28.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _28.QuerySupplyOfRequestProtoMsg): _28.QuerySupplyOfRequest;
                toProto(message: _28.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _28.QuerySupplyOfRequest): _28.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _28.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QuerySupplyOfResponse;
                fromPartial(object: Partial<_28.QuerySupplyOfResponse>): _28.QuerySupplyOfResponse;
                fromAmino(object: _28.QuerySupplyOfResponseAmino): _28.QuerySupplyOfResponse;
                toAmino(message: _28.QuerySupplyOfResponse): _28.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _28.QuerySupplyOfResponseAminoMsg): _28.QuerySupplyOfResponse;
                toAminoMsg(message: _28.QuerySupplyOfResponse): _28.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _28.QuerySupplyOfResponseProtoMsg): _28.QuerySupplyOfResponse;
                toProto(message: _28.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _28.QuerySupplyOfResponse): _28.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _28.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _28.QueryParamsRequest;
                fromPartial(_: Partial<_28.QueryParamsRequest>): _28.QueryParamsRequest;
                fromAmino(_: _28.QueryParamsRequestAmino): _28.QueryParamsRequest;
                toAmino(_: _28.QueryParamsRequest): _28.QueryParamsRequestAmino;
                fromAminoMsg(object: _28.QueryParamsRequestAminoMsg): _28.QueryParamsRequest;
                toAminoMsg(message: _28.QueryParamsRequest): _28.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _28.QueryParamsRequestProtoMsg): _28.QueryParamsRequest;
                toProto(message: _28.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _28.QueryParamsRequest): _28.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _28.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryParamsResponse;
                fromPartial(object: Partial<_28.QueryParamsResponse>): _28.QueryParamsResponse;
                fromAmino(object: _28.QueryParamsResponseAmino): _28.QueryParamsResponse;
                toAmino(message: _28.QueryParamsResponse): _28.QueryParamsResponseAmino;
                fromAminoMsg(object: _28.QueryParamsResponseAminoMsg): _28.QueryParamsResponse;
                toAminoMsg(message: _28.QueryParamsResponse): _28.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _28.QueryParamsResponseProtoMsg): _28.QueryParamsResponse;
                toProto(message: _28.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _28.QueryParamsResponse): _28.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _28.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_28.QueryDenomsMetadataRequest>): _28.QueryDenomsMetadataRequest;
                fromAmino(object: _28.QueryDenomsMetadataRequestAmino): _28.QueryDenomsMetadataRequest;
                toAmino(message: _28.QueryDenomsMetadataRequest): _28.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _28.QueryDenomsMetadataRequestAminoMsg): _28.QueryDenomsMetadataRequest;
                toAminoMsg(message: _28.QueryDenomsMetadataRequest): _28.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _28.QueryDenomsMetadataRequestProtoMsg): _28.QueryDenomsMetadataRequest;
                toProto(message: _28.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _28.QueryDenomsMetadataRequest): _28.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _28.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_28.QueryDenomsMetadataResponse>): _28.QueryDenomsMetadataResponse;
                fromAmino(object: _28.QueryDenomsMetadataResponseAmino): _28.QueryDenomsMetadataResponse;
                toAmino(message: _28.QueryDenomsMetadataResponse): _28.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _28.QueryDenomsMetadataResponseAminoMsg): _28.QueryDenomsMetadataResponse;
                toAminoMsg(message: _28.QueryDenomsMetadataResponse): _28.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _28.QueryDenomsMetadataResponseProtoMsg): _28.QueryDenomsMetadataResponse;
                toProto(message: _28.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _28.QueryDenomsMetadataResponse): _28.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _28.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_28.QueryDenomMetadataRequest>): _28.QueryDenomMetadataRequest;
                fromAmino(object: _28.QueryDenomMetadataRequestAmino): _28.QueryDenomMetadataRequest;
                toAmino(message: _28.QueryDenomMetadataRequest): _28.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _28.QueryDenomMetadataRequestAminoMsg): _28.QueryDenomMetadataRequest;
                toAminoMsg(message: _28.QueryDenomMetadataRequest): _28.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _28.QueryDenomMetadataRequestProtoMsg): _28.QueryDenomMetadataRequest;
                toProto(message: _28.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _28.QueryDenomMetadataRequest): _28.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _28.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_28.QueryDenomMetadataResponse>): _28.QueryDenomMetadataResponse;
                fromAmino(object: _28.QueryDenomMetadataResponseAmino): _28.QueryDenomMetadataResponse;
                toAmino(message: _28.QueryDenomMetadataResponse): _28.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _28.QueryDenomMetadataResponseAminoMsg): _28.QueryDenomMetadataResponse;
                toAminoMsg(message: _28.QueryDenomMetadataResponse): _28.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _28.QueryDenomMetadataResponseProtoMsg): _28.QueryDenomMetadataResponse;
                toProto(message: _28.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _28.QueryDenomMetadataResponse): _28.QueryDenomMetadataResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _27.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.GenesisState;
                fromPartial(object: Partial<_27.GenesisState>): _27.GenesisState;
                fromAmino(object: _27.GenesisStateAmino): _27.GenesisState;
                toAmino(message: _27.GenesisState): _27.GenesisStateAmino;
                fromAminoMsg(object: _27.GenesisStateAminoMsg): _27.GenesisState;
                toAminoMsg(message: _27.GenesisState): _27.GenesisStateAminoMsg;
                fromProtoMsg(message: _27.GenesisStateProtoMsg): _27.GenesisState;
                toProto(message: _27.GenesisState): Uint8Array;
                toProtoMsg(message: _27.GenesisState): _27.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _27.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.Balance;
                fromPartial(object: Partial<_27.Balance>): _27.Balance;
                fromAmino(object: _27.BalanceAmino): _27.Balance;
                toAmino(message: _27.Balance): _27.BalanceAmino;
                fromAminoMsg(object: _27.BalanceAminoMsg): _27.Balance;
                toAminoMsg(message: _27.Balance): _27.BalanceAminoMsg;
                fromProtoMsg(message: _27.BalanceProtoMsg): _27.Balance;
                toProto(message: _27.Balance): Uint8Array;
                toProtoMsg(message: _27.Balance): _27.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _26.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.Params;
                fromPartial(object: Partial<_26.Params>): _26.Params;
                fromAmino(object: _26.ParamsAmino): _26.Params;
                toAmino(message: _26.Params): _26.ParamsAmino;
                fromAminoMsg(object: _26.ParamsAminoMsg): _26.Params;
                toAminoMsg(message: _26.Params): _26.ParamsAminoMsg;
                fromProtoMsg(message: _26.ParamsProtoMsg): _26.Params;
                toProto(message: _26.Params): Uint8Array;
                toProtoMsg(message: _26.Params): _26.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _26.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.SendEnabled;
                fromPartial(object: Partial<_26.SendEnabled>): _26.SendEnabled;
                fromAmino(object: _26.SendEnabledAmino): _26.SendEnabled;
                toAmino(message: _26.SendEnabled): _26.SendEnabledAmino;
                fromAminoMsg(object: _26.SendEnabledAminoMsg): _26.SendEnabled;
                toAminoMsg(message: _26.SendEnabled): _26.SendEnabledAminoMsg;
                fromProtoMsg(message: _26.SendEnabledProtoMsg): _26.SendEnabled;
                toProto(message: _26.SendEnabled): Uint8Array;
                toProtoMsg(message: _26.SendEnabled): _26.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _26.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.Input;
                fromPartial(object: Partial<_26.Input>): _26.Input;
                fromAmino(object: _26.InputAmino): _26.Input;
                toAmino(message: _26.Input): _26.InputAmino;
                fromAminoMsg(object: _26.InputAminoMsg): _26.Input;
                toAminoMsg(message: _26.Input): _26.InputAminoMsg;
                fromProtoMsg(message: _26.InputProtoMsg): _26.Input;
                toProto(message: _26.Input): Uint8Array;
                toProtoMsg(message: _26.Input): _26.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _26.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.Output;
                fromPartial(object: Partial<_26.Output>): _26.Output;
                fromAmino(object: _26.OutputAmino): _26.Output;
                toAmino(message: _26.Output): _26.OutputAmino;
                fromAminoMsg(object: _26.OutputAminoMsg): _26.Output;
                toAminoMsg(message: _26.Output): _26.OutputAminoMsg;
                fromProtoMsg(message: _26.OutputProtoMsg): _26.Output;
                toProto(message: _26.Output): Uint8Array;
                toProtoMsg(message: _26.Output): _26.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _26.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.Supply;
                fromPartial(object: Partial<_26.Supply>): _26.Supply;
                fromAmino(object: _26.SupplyAmino): _26.Supply;
                toAmino(message: _26.Supply): _26.SupplyAmino;
                fromAminoMsg(object: _26.SupplyAminoMsg): _26.Supply;
                toAminoMsg(message: _26.Supply): _26.SupplyAminoMsg;
                fromProtoMsg(message: _26.SupplyProtoMsg): _26.Supply;
                toProto(message: _26.Supply): Uint8Array;
                toProtoMsg(message: _26.Supply): _26.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _26.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.DenomUnit;
                fromPartial(object: Partial<_26.DenomUnit>): _26.DenomUnit;
                fromAmino(object: _26.DenomUnitAmino): _26.DenomUnit;
                toAmino(message: _26.DenomUnit): _26.DenomUnitAmino;
                fromAminoMsg(object: _26.DenomUnitAminoMsg): _26.DenomUnit;
                toAminoMsg(message: _26.DenomUnit): _26.DenomUnitAminoMsg;
                fromProtoMsg(message: _26.DenomUnitProtoMsg): _26.DenomUnit;
                toProto(message: _26.DenomUnit): Uint8Array;
                toProtoMsg(message: _26.DenomUnit): _26.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _26.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.Metadata;
                fromPartial(object: Partial<_26.Metadata>): _26.Metadata;
                fromAmino(object: _26.MetadataAmino): _26.Metadata;
                toAmino(message: _26.Metadata): _26.MetadataAmino;
                fromAminoMsg(object: _26.MetadataAminoMsg): _26.Metadata;
                toAminoMsg(message: _26.Metadata): _26.MetadataAminoMsg;
                fromProtoMsg(message: _26.MetadataProtoMsg): _26.Metadata;
                toProto(message: _26.Metadata): Uint8Array;
                toProtoMsg(message: _26.Metadata): _26.MetadataProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _30.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.TxResponse;
                    fromPartial(object: Partial<_30.TxResponse>): _30.TxResponse;
                    fromAmino(object: _30.TxResponseAmino): _30.TxResponse;
                    toAmino(message: _30.TxResponse): _30.TxResponseAmino;
                    fromAminoMsg(object: _30.TxResponseAminoMsg): _30.TxResponse;
                    toAminoMsg(message: _30.TxResponse): _30.TxResponseAminoMsg;
                    fromProtoMsg(message: _30.TxResponseProtoMsg): _30.TxResponse;
                    toProto(message: _30.TxResponse): Uint8Array;
                    toProtoMsg(message: _30.TxResponse): _30.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _30.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.ABCIMessageLog;
                    fromPartial(object: Partial<_30.ABCIMessageLog>): _30.ABCIMessageLog;
                    fromAmino(object: _30.ABCIMessageLogAmino): _30.ABCIMessageLog;
                    toAmino(message: _30.ABCIMessageLog): _30.ABCIMessageLogAmino;
                    fromAminoMsg(object: _30.ABCIMessageLogAminoMsg): _30.ABCIMessageLog;
                    toAminoMsg(message: _30.ABCIMessageLog): _30.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _30.ABCIMessageLogProtoMsg): _30.ABCIMessageLog;
                    toProto(message: _30.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _30.ABCIMessageLog): _30.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _30.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.StringEvent;
                    fromPartial(object: Partial<_30.StringEvent>): _30.StringEvent;
                    fromAmino(object: _30.StringEventAmino): _30.StringEvent;
                    toAmino(message: _30.StringEvent): _30.StringEventAmino;
                    fromAminoMsg(object: _30.StringEventAminoMsg): _30.StringEvent;
                    toAminoMsg(message: _30.StringEvent): _30.StringEventAminoMsg;
                    fromProtoMsg(message: _30.StringEventProtoMsg): _30.StringEvent;
                    toProto(message: _30.StringEvent): Uint8Array;
                    toProtoMsg(message: _30.StringEvent): _30.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _30.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.Attribute;
                    fromPartial(object: Partial<_30.Attribute>): _30.Attribute;
                    fromAmino(object: _30.AttributeAmino): _30.Attribute;
                    toAmino(message: _30.Attribute): _30.AttributeAmino;
                    fromAminoMsg(object: _30.AttributeAminoMsg): _30.Attribute;
                    toAminoMsg(message: _30.Attribute): _30.AttributeAminoMsg;
                    fromProtoMsg(message: _30.AttributeProtoMsg): _30.Attribute;
                    toProto(message: _30.Attribute): Uint8Array;
                    toProtoMsg(message: _30.Attribute): _30.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _30.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.GasInfo;
                    fromPartial(object: Partial<_30.GasInfo>): _30.GasInfo;
                    fromAmino(object: _30.GasInfoAmino): _30.GasInfo;
                    toAmino(message: _30.GasInfo): _30.GasInfoAmino;
                    fromAminoMsg(object: _30.GasInfoAminoMsg): _30.GasInfo;
                    toAminoMsg(message: _30.GasInfo): _30.GasInfoAminoMsg;
                    fromProtoMsg(message: _30.GasInfoProtoMsg): _30.GasInfo;
                    toProto(message: _30.GasInfo): Uint8Array;
                    toProtoMsg(message: _30.GasInfo): _30.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _30.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.Result;
                    fromPartial(object: Partial<_30.Result>): _30.Result;
                    fromAmino(object: _30.ResultAmino): _30.Result;
                    toAmino(message: _30.Result): _30.ResultAmino;
                    fromAminoMsg(object: _30.ResultAminoMsg): _30.Result;
                    toAminoMsg(message: _30.Result): _30.ResultAminoMsg;
                    fromProtoMsg(message: _30.ResultProtoMsg): _30.Result;
                    toProto(message: _30.Result): Uint8Array;
                    toProtoMsg(message: _30.Result): _30.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _30.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.SimulationResponse;
                    fromPartial(object: Partial<_30.SimulationResponse>): _30.SimulationResponse;
                    fromAmino(object: _30.SimulationResponseAmino): _30.SimulationResponse;
                    toAmino(message: _30.SimulationResponse): _30.SimulationResponseAmino;
                    fromAminoMsg(object: _30.SimulationResponseAminoMsg): _30.SimulationResponse;
                    toAminoMsg(message: _30.SimulationResponse): _30.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _30.SimulationResponseProtoMsg): _30.SimulationResponse;
                    toProto(message: _30.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _30.SimulationResponse): _30.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _30.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.MsgData;
                    fromPartial(object: Partial<_30.MsgData>): _30.MsgData;
                    fromAmino(object: _30.MsgDataAmino): _30.MsgData;
                    toAmino(message: _30.MsgData): _30.MsgDataAmino;
                    fromAminoMsg(object: _30.MsgDataAminoMsg): _30.MsgData;
                    toAminoMsg(message: _30.MsgData): _30.MsgDataAminoMsg;
                    fromProtoMsg(message: _30.MsgDataProtoMsg): _30.MsgData;
                    toProto(message: _30.MsgData): Uint8Array;
                    toProtoMsg(message: _30.MsgData): _30.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _30.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.TxMsgData;
                    fromPartial(object: Partial<_30.TxMsgData>): _30.TxMsgData;
                    fromAmino(object: _30.TxMsgDataAmino): _30.TxMsgData;
                    toAmino(message: _30.TxMsgData): _30.TxMsgDataAmino;
                    fromAminoMsg(object: _30.TxMsgDataAminoMsg): _30.TxMsgData;
                    toAminoMsg(message: _30.TxMsgData): _30.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _30.TxMsgDataProtoMsg): _30.TxMsgData;
                    toProto(message: _30.TxMsgData): Uint8Array;
                    toProtoMsg(message: _30.TxMsgData): _30.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _30.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.SearchTxsResult;
                    fromPartial(object: Partial<_30.SearchTxsResult>): _30.SearchTxsResult;
                    fromAmino(object: _30.SearchTxsResultAmino): _30.SearchTxsResult;
                    toAmino(message: _30.SearchTxsResult): _30.SearchTxsResultAmino;
                    fromAminoMsg(object: _30.SearchTxsResultAminoMsg): _30.SearchTxsResult;
                    toAminoMsg(message: _30.SearchTxsResult): _30.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _30.SearchTxsResultProtoMsg): _30.SearchTxsResult;
                    toProto(message: _30.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _30.SearchTxsResult): _30.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _31.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.Pairs;
                    fromPartial(object: Partial<_31.Pairs>): _31.Pairs;
                    fromAmino(object: _31.PairsAmino): _31.Pairs;
                    toAmino(message: _31.Pairs): _31.PairsAmino;
                    fromAminoMsg(object: _31.PairsAminoMsg): _31.Pairs;
                    toAminoMsg(message: _31.Pairs): _31.PairsAminoMsg;
                    fromProtoMsg(message: _31.PairsProtoMsg): _31.Pairs;
                    toProto(message: _31.Pairs): Uint8Array;
                    toProtoMsg(message: _31.Pairs): _31.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _31.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.Pair;
                    fromPartial(object: Partial<_31.Pair>): _31.Pair;
                    fromAmino(object: _31.PairAmino): _31.Pair;
                    toAmino(message: _31.Pair): _31.PairAmino;
                    fromAminoMsg(object: _31.PairAminoMsg): _31.Pair;
                    toAminoMsg(message: _31.Pair): _31.PairAminoMsg;
                    fromProtoMsg(message: _31.PairProtoMsg): _31.Pair;
                    toProto(message: _31.Pair): Uint8Array;
                    toProtoMsg(message: _31.Pair): _31.PairProtoMsg;
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
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _34.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.Snapshot;
                    fromPartial(object: Partial<_34.Snapshot>): _34.Snapshot;
                    fromAmino(object: _34.SnapshotAmino): _34.Snapshot;
                    toAmino(message: _34.Snapshot): _34.SnapshotAmino;
                    fromAminoMsg(object: _34.SnapshotAminoMsg): _34.Snapshot;
                    toAminoMsg(message: _34.Snapshot): _34.SnapshotAminoMsg;
                    fromProtoMsg(message: _34.SnapshotProtoMsg): _34.Snapshot;
                    toProto(message: _34.Snapshot): Uint8Array;
                    toProtoMsg(message: _34.Snapshot): _34.SnapshotProtoMsg;
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
            };
        }
        namespace store {
            const v1beta1: {
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _36.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.SnapshotItem;
                    fromPartial(object: Partial<_36.SnapshotItem>): _36.SnapshotItem;
                    fromAmino(object: _36.SnapshotItemAmino): _36.SnapshotItem;
                    toAmino(message: _36.SnapshotItem): _36.SnapshotItemAmino;
                    fromAminoMsg(object: _36.SnapshotItemAminoMsg): _36.SnapshotItem;
                    toAminoMsg(message: _36.SnapshotItem): _36.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _36.SnapshotItemProtoMsg): _36.SnapshotItem;
                    toProto(message: _36.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _36.SnapshotItem): _36.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _36.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.SnapshotStoreItem;
                    fromPartial(object: Partial<_36.SnapshotStoreItem>): _36.SnapshotStoreItem;
                    fromAmino(object: _36.SnapshotStoreItemAmino): _36.SnapshotStoreItem;
                    toAmino(message: _36.SnapshotStoreItem): _36.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _36.SnapshotStoreItemAminoMsg): _36.SnapshotStoreItem;
                    toAminoMsg(message: _36.SnapshotStoreItem): _36.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _36.SnapshotStoreItemProtoMsg): _36.SnapshotStoreItem;
                    toProto(message: _36.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _36.SnapshotStoreItem): _36.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _36.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.SnapshotIAVLItem;
                    fromPartial(object: Partial<_36.SnapshotIAVLItem>): _36.SnapshotIAVLItem;
                    fromAmino(object: _36.SnapshotIAVLItemAmino): _36.SnapshotIAVLItem;
                    toAmino(message: _36.SnapshotIAVLItem): _36.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _36.SnapshotIAVLItemAminoMsg): _36.SnapshotIAVLItem;
                    toAminoMsg(message: _36.SnapshotIAVLItem): _36.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _36.SnapshotIAVLItemProtoMsg): _36.SnapshotIAVLItem;
                    toProto(message: _36.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _36.SnapshotIAVLItem): _36.SnapshotIAVLItemProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _35.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.CommitInfo;
                    fromPartial(object: Partial<_35.CommitInfo>): _35.CommitInfo;
                    fromAmino(object: _35.CommitInfoAmino): _35.CommitInfo;
                    toAmino(message: _35.CommitInfo): _35.CommitInfoAmino;
                    fromAminoMsg(object: _35.CommitInfoAminoMsg): _35.CommitInfo;
                    toAminoMsg(message: _35.CommitInfo): _35.CommitInfoAminoMsg;
                    fromProtoMsg(message: _35.CommitInfoProtoMsg): _35.CommitInfo;
                    toProto(message: _35.CommitInfo): Uint8Array;
                    toProtoMsg(message: _35.CommitInfo): _35.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _35.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.StoreInfo;
                    fromPartial(object: Partial<_35.StoreInfo>): _35.StoreInfo;
                    fromAmino(object: _35.StoreInfoAmino): _35.StoreInfo;
                    toAmino(message: _35.StoreInfo): _35.StoreInfoAmino;
                    fromAminoMsg(object: _35.StoreInfoAminoMsg): _35.StoreInfo;
                    toAminoMsg(message: _35.StoreInfo): _35.StoreInfoAminoMsg;
                    fromProtoMsg(message: _35.StoreInfoProtoMsg): _35.StoreInfo;
                    toProto(message: _35.StoreInfo): Uint8Array;
                    toProtoMsg(message: _35.StoreInfo): _35.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _35.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.CommitID;
                    fromPartial(object: Partial<_35.CommitID>): _35.CommitID;
                    fromAmino(object: _35.CommitIDAmino): _35.CommitID;
                    toAmino(message: _35.CommitID): _35.CommitIDAmino;
                    fromAminoMsg(object: _35.CommitIDAminoMsg): _35.CommitID;
                    toAminoMsg(message: _35.CommitID): _35.CommitIDAminoMsg;
                    fromProtoMsg(message: _35.CommitIDProtoMsg): _35.CommitID;
                    toProto(message: _35.CommitID): Uint8Array;
                    toProtoMsg(message: _35.CommitID): _35.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _175.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _37.GetNodeInfoRequest): Promise<_37.GetNodeInfoResponse>;
                    getSyncing(request?: _37.GetSyncingRequest): Promise<_37.GetSyncingResponse>;
                    getLatestBlock(request?: _37.GetLatestBlockRequest): Promise<_37.GetLatestBlockResponse>;
                    getBlockByHeight(request: _37.GetBlockByHeightRequest): Promise<_37.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _37.GetLatestValidatorSetRequest): Promise<_37.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _37.GetValidatorSetByHeightRequest): Promise<_37.GetValidatorSetByHeightResponse>;
                };
                LCDQueryClient: typeof _163.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _37.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_37.GetValidatorSetByHeightRequest>): _37.GetValidatorSetByHeightRequest;
                    fromAmino(object: _37.GetValidatorSetByHeightRequestAmino): _37.GetValidatorSetByHeightRequest;
                    toAmino(message: _37.GetValidatorSetByHeightRequest): _37.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _37.GetValidatorSetByHeightRequestAminoMsg): _37.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _37.GetValidatorSetByHeightRequest): _37.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _37.GetValidatorSetByHeightRequestProtoMsg): _37.GetValidatorSetByHeightRequest;
                    toProto(message: _37.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _37.GetValidatorSetByHeightRequest): _37.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _37.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_37.GetValidatorSetByHeightResponse>): _37.GetValidatorSetByHeightResponse;
                    fromAmino(object: _37.GetValidatorSetByHeightResponseAmino): _37.GetValidatorSetByHeightResponse;
                    toAmino(message: _37.GetValidatorSetByHeightResponse): _37.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _37.GetValidatorSetByHeightResponseAminoMsg): _37.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _37.GetValidatorSetByHeightResponse): _37.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _37.GetValidatorSetByHeightResponseProtoMsg): _37.GetValidatorSetByHeightResponse;
                    toProto(message: _37.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _37.GetValidatorSetByHeightResponse): _37.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _37.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_37.GetLatestValidatorSetRequest>): _37.GetLatestValidatorSetRequest;
                    fromAmino(object: _37.GetLatestValidatorSetRequestAmino): _37.GetLatestValidatorSetRequest;
                    toAmino(message: _37.GetLatestValidatorSetRequest): _37.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _37.GetLatestValidatorSetRequestAminoMsg): _37.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _37.GetLatestValidatorSetRequest): _37.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _37.GetLatestValidatorSetRequestProtoMsg): _37.GetLatestValidatorSetRequest;
                    toProto(message: _37.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _37.GetLatestValidatorSetRequest): _37.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _37.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_37.GetLatestValidatorSetResponse>): _37.GetLatestValidatorSetResponse;
                    fromAmino(object: _37.GetLatestValidatorSetResponseAmino): _37.GetLatestValidatorSetResponse;
                    toAmino(message: _37.GetLatestValidatorSetResponse): _37.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _37.GetLatestValidatorSetResponseAminoMsg): _37.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _37.GetLatestValidatorSetResponse): _37.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _37.GetLatestValidatorSetResponseProtoMsg): _37.GetLatestValidatorSetResponse;
                    toProto(message: _37.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _37.GetLatestValidatorSetResponse): _37.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _37.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.Validator;
                    fromPartial(object: Partial<_37.Validator>): _37.Validator;
                    fromAmino(object: _37.ValidatorAmino): _37.Validator;
                    toAmino(message: _37.Validator): _37.ValidatorAmino;
                    fromAminoMsg(object: _37.ValidatorAminoMsg): _37.Validator;
                    toAminoMsg(message: _37.Validator): _37.ValidatorAminoMsg;
                    fromProtoMsg(message: _37.ValidatorProtoMsg): _37.Validator;
                    toProto(message: _37.Validator): Uint8Array;
                    toProtoMsg(message: _37.Validator): _37.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _37.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_37.GetBlockByHeightRequest>): _37.GetBlockByHeightRequest;
                    fromAmino(object: _37.GetBlockByHeightRequestAmino): _37.GetBlockByHeightRequest;
                    toAmino(message: _37.GetBlockByHeightRequest): _37.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _37.GetBlockByHeightRequestAminoMsg): _37.GetBlockByHeightRequest;
                    toAminoMsg(message: _37.GetBlockByHeightRequest): _37.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _37.GetBlockByHeightRequestProtoMsg): _37.GetBlockByHeightRequest;
                    toProto(message: _37.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _37.GetBlockByHeightRequest): _37.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _37.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_37.GetBlockByHeightResponse>): _37.GetBlockByHeightResponse;
                    fromAmino(object: _37.GetBlockByHeightResponseAmino): _37.GetBlockByHeightResponse;
                    toAmino(message: _37.GetBlockByHeightResponse): _37.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _37.GetBlockByHeightResponseAminoMsg): _37.GetBlockByHeightResponse;
                    toAminoMsg(message: _37.GetBlockByHeightResponse): _37.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _37.GetBlockByHeightResponseProtoMsg): _37.GetBlockByHeightResponse;
                    toProto(message: _37.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _37.GetBlockByHeightResponse): _37.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _37.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _37.GetLatestBlockRequest;
                    fromPartial(_: Partial<_37.GetLatestBlockRequest>): _37.GetLatestBlockRequest;
                    fromAmino(_: _37.GetLatestBlockRequestAmino): _37.GetLatestBlockRequest;
                    toAmino(_: _37.GetLatestBlockRequest): _37.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _37.GetLatestBlockRequestAminoMsg): _37.GetLatestBlockRequest;
                    toAminoMsg(message: _37.GetLatestBlockRequest): _37.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _37.GetLatestBlockRequestProtoMsg): _37.GetLatestBlockRequest;
                    toProto(message: _37.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _37.GetLatestBlockRequest): _37.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _37.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.GetLatestBlockResponse;
                    fromPartial(object: Partial<_37.GetLatestBlockResponse>): _37.GetLatestBlockResponse;
                    fromAmino(object: _37.GetLatestBlockResponseAmino): _37.GetLatestBlockResponse;
                    toAmino(message: _37.GetLatestBlockResponse): _37.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _37.GetLatestBlockResponseAminoMsg): _37.GetLatestBlockResponse;
                    toAminoMsg(message: _37.GetLatestBlockResponse): _37.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _37.GetLatestBlockResponseProtoMsg): _37.GetLatestBlockResponse;
                    toProto(message: _37.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _37.GetLatestBlockResponse): _37.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _37.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _37.GetSyncingRequest;
                    fromPartial(_: Partial<_37.GetSyncingRequest>): _37.GetSyncingRequest;
                    fromAmino(_: _37.GetSyncingRequestAmino): _37.GetSyncingRequest;
                    toAmino(_: _37.GetSyncingRequest): _37.GetSyncingRequestAmino;
                    fromAminoMsg(object: _37.GetSyncingRequestAminoMsg): _37.GetSyncingRequest;
                    toAminoMsg(message: _37.GetSyncingRequest): _37.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _37.GetSyncingRequestProtoMsg): _37.GetSyncingRequest;
                    toProto(message: _37.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _37.GetSyncingRequest): _37.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _37.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.GetSyncingResponse;
                    fromPartial(object: Partial<_37.GetSyncingResponse>): _37.GetSyncingResponse;
                    fromAmino(object: _37.GetSyncingResponseAmino): _37.GetSyncingResponse;
                    toAmino(message: _37.GetSyncingResponse): _37.GetSyncingResponseAmino;
                    fromAminoMsg(object: _37.GetSyncingResponseAminoMsg): _37.GetSyncingResponse;
                    toAminoMsg(message: _37.GetSyncingResponse): _37.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _37.GetSyncingResponseProtoMsg): _37.GetSyncingResponse;
                    toProto(message: _37.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _37.GetSyncingResponse): _37.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _37.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _37.GetNodeInfoRequest;
                    fromPartial(_: Partial<_37.GetNodeInfoRequest>): _37.GetNodeInfoRequest;
                    fromAmino(_: _37.GetNodeInfoRequestAmino): _37.GetNodeInfoRequest;
                    toAmino(_: _37.GetNodeInfoRequest): _37.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _37.GetNodeInfoRequestAminoMsg): _37.GetNodeInfoRequest;
                    toAminoMsg(message: _37.GetNodeInfoRequest): _37.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _37.GetNodeInfoRequestProtoMsg): _37.GetNodeInfoRequest;
                    toProto(message: _37.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _37.GetNodeInfoRequest): _37.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _37.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.GetNodeInfoResponse;
                    fromPartial(object: Partial<_37.GetNodeInfoResponse>): _37.GetNodeInfoResponse;
                    fromAmino(object: _37.GetNodeInfoResponseAmino): _37.GetNodeInfoResponse;
                    toAmino(message: _37.GetNodeInfoResponse): _37.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _37.GetNodeInfoResponseAminoMsg): _37.GetNodeInfoResponse;
                    toAminoMsg(message: _37.GetNodeInfoResponse): _37.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _37.GetNodeInfoResponseProtoMsg): _37.GetNodeInfoResponse;
                    toProto(message: _37.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _37.GetNodeInfoResponse): _37.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _37.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.VersionInfo;
                    fromPartial(object: Partial<_37.VersionInfo>): _37.VersionInfo;
                    fromAmino(object: _37.VersionInfoAmino): _37.VersionInfo;
                    toAmino(message: _37.VersionInfo): _37.VersionInfoAmino;
                    fromAminoMsg(object: _37.VersionInfoAminoMsg): _37.VersionInfo;
                    toAminoMsg(message: _37.VersionInfo): _37.VersionInfoAminoMsg;
                    fromProtoMsg(message: _37.VersionInfoProtoMsg): _37.VersionInfo;
                    toProto(message: _37.VersionInfo): Uint8Array;
                    toProtoMsg(message: _37.VersionInfo): _37.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _37.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.Module;
                    fromPartial(object: Partial<_37.Module>): _37.Module;
                    fromAmino(object: _37.ModuleAmino): _37.Module;
                    toAmino(message: _37.Module): _37.ModuleAmino;
                    fromAminoMsg(object: _37.ModuleAminoMsg): _37.Module;
                    toAminoMsg(message: _37.Module): _37.ModuleAminoMsg;
                    fromProtoMsg(message: _37.ModuleProtoMsg): _37.Module;
                    toProto(message: _37.Module): Uint8Array;
                    toProtoMsg(message: _37.Module): _37.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _38.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.Coin;
                fromPartial(object: Partial<_38.Coin>): _38.Coin;
                fromAmino(object: _38.CoinAmino): _38.Coin;
                toAmino(message: _38.Coin): _38.CoinAmino;
                fromAminoMsg(object: _38.CoinAminoMsg): _38.Coin;
                toAminoMsg(message: _38.Coin): _38.CoinAminoMsg;
                fromProtoMsg(message: _38.CoinProtoMsg): _38.Coin;
                toProto(message: _38.Coin): Uint8Array;
                toProtoMsg(message: _38.Coin): _38.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _38.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.DecCoin;
                fromPartial(object: Partial<_38.DecCoin>): _38.DecCoin;
                fromAmino(object: _38.DecCoinAmino): _38.DecCoin;
                toAmino(message: _38.DecCoin): _38.DecCoinAmino;
                fromAminoMsg(object: _38.DecCoinAminoMsg): _38.DecCoin;
                toAminoMsg(message: _38.DecCoin): _38.DecCoinAminoMsg;
                fromProtoMsg(message: _38.DecCoinProtoMsg): _38.DecCoin;
                toProto(message: _38.DecCoin): Uint8Array;
                toProtoMsg(message: _38.DecCoin): _38.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _38.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.IntProto;
                fromPartial(object: Partial<_38.IntProto>): _38.IntProto;
                fromAmino(object: _38.IntProtoAmino): _38.IntProto;
                toAmino(message: _38.IntProto): _38.IntProtoAmino;
                fromAminoMsg(object: _38.IntProtoAminoMsg): _38.IntProto;
                toAminoMsg(message: _38.IntProto): _38.IntProtoAminoMsg;
                fromProtoMsg(message: _38.IntProtoProtoMsg): _38.IntProto;
                toProto(message: _38.IntProto): Uint8Array;
                toProtoMsg(message: _38.IntProto): _38.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _38.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.DecProto;
                fromPartial(object: Partial<_38.DecProto>): _38.DecProto;
                fromAmino(object: _38.DecProtoAmino): _38.DecProto;
                toAmino(message: _38.DecProto): _38.DecProtoAmino;
                fromAminoMsg(object: _38.DecProtoAminoMsg): _38.DecProto;
                toAminoMsg(message: _38.DecProto): _38.DecProtoAminoMsg;
                fromProtoMsg(message: _38.DecProtoProtoMsg): _38.DecProto;
                toProto(message: _38.DecProto): Uint8Array;
                toProtoMsg(message: _38.DecProto): _38.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _40.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.GenesisOwners;
                fromPartial(object: Partial<_40.GenesisOwners>): _40.GenesisOwners;
                fromAmino(object: _40.GenesisOwnersAmino): _40.GenesisOwners;
                toAmino(message: _40.GenesisOwners): _40.GenesisOwnersAmino;
                fromAminoMsg(object: _40.GenesisOwnersAminoMsg): _40.GenesisOwners;
                toAminoMsg(message: _40.GenesisOwners): _40.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _40.GenesisOwnersProtoMsg): _40.GenesisOwners;
                toProto(message: _40.GenesisOwners): Uint8Array;
                toProtoMsg(message: _40.GenesisOwners): _40.GenesisOwnersProtoMsg;
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
            Capability: {
                typeUrl: string;
                encode(message: _39.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.Capability;
                fromPartial(object: Partial<_39.Capability>): _39.Capability;
                fromAmino(object: _39.CapabilityAmino): _39.Capability;
                toAmino(message: _39.Capability): _39.CapabilityAmino;
                fromAminoMsg(object: _39.CapabilityAminoMsg): _39.Capability;
                toAminoMsg(message: _39.Capability): _39.CapabilityAminoMsg;
                fromProtoMsg(message: _39.CapabilityProtoMsg): _39.Capability;
                toProto(message: _39.Capability): Uint8Array;
                toProtoMsg(message: _39.Capability): _39.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _39.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.Owner;
                fromPartial(object: Partial<_39.Owner>): _39.Owner;
                fromAmino(object: _39.OwnerAmino): _39.Owner;
                toAmino(message: _39.Owner): _39.OwnerAmino;
                fromAminoMsg(object: _39.OwnerAminoMsg): _39.Owner;
                toAminoMsg(message: _39.Owner): _39.OwnerAminoMsg;
                fromProtoMsg(message: _39.OwnerProtoMsg): _39.Owner;
                toProto(message: _39.Owner): Uint8Array;
                toProtoMsg(message: _39.Owner): _39.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _39.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.CapabilityOwners;
                fromPartial(object: Partial<_39.CapabilityOwners>): _39.CapabilityOwners;
                fromAmino(object: _39.CapabilityOwnersAmino): _39.CapabilityOwners;
                toAmino(message: _39.CapabilityOwners): _39.CapabilityOwnersAmino;
                fromAminoMsg(object: _39.CapabilityOwnersAminoMsg): _39.CapabilityOwners;
                toAminoMsg(message: _39.CapabilityOwners): _39.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _39.CapabilityOwnersProtoMsg): _39.CapabilityOwners;
                toProto(message: _39.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _39.CapabilityOwners): _39.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _186.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _42.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _42.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _42.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _42.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _42.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _42.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _42.MsgVerifyInvariant) => _42.MsgVerifyInvariantAmino;
                    fromAmino: (object: _42.MsgVerifyInvariantAmino) => _42.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _42.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.MsgVerifyInvariant;
                fromPartial(object: Partial<_42.MsgVerifyInvariant>): _42.MsgVerifyInvariant;
                fromAmino(object: _42.MsgVerifyInvariantAmino): _42.MsgVerifyInvariant;
                toAmino(message: _42.MsgVerifyInvariant): _42.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _42.MsgVerifyInvariantAminoMsg): _42.MsgVerifyInvariant;
                toAminoMsg(message: _42.MsgVerifyInvariant): _42.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _42.MsgVerifyInvariantProtoMsg): _42.MsgVerifyInvariant;
                toProto(message: _42.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _42.MsgVerifyInvariant): _42.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _42.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _42.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_42.MsgVerifyInvariantResponse>): _42.MsgVerifyInvariantResponse;
                fromAmino(_: _42.MsgVerifyInvariantResponseAmino): _42.MsgVerifyInvariantResponse;
                toAmino(_: _42.MsgVerifyInvariantResponse): _42.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _42.MsgVerifyInvariantResponseAminoMsg): _42.MsgVerifyInvariantResponse;
                toAminoMsg(message: _42.MsgVerifyInvariantResponse): _42.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _42.MsgVerifyInvariantResponseProtoMsg): _42.MsgVerifyInvariantResponse;
                toProto(message: _42.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _42.MsgVerifyInvariantResponse): _42.MsgVerifyInvariantResponseProtoMsg;
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
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _43.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.PubKey;
                fromPartial(object: Partial<_43.PubKey>): _43.PubKey;
                fromAmino(object: _43.PubKeyAmino): _43.PubKey;
                toAmino(message: _43.PubKey): _43.PubKeyAmino;
                fromAminoMsg(object: _43.PubKeyAminoMsg): _43.PubKey;
                toAminoMsg(message: _43.PubKey): _43.PubKeyAminoMsg;
                fromProtoMsg(message: _43.PubKeyProtoMsg): _43.PubKey;
                toProto(message: _43.PubKey): Uint8Array;
                toProtoMsg(message: _43.PubKey): _43.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _43.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.PrivKey;
                fromPartial(object: Partial<_43.PrivKey>): _43.PrivKey;
                fromAmino(object: _43.PrivKeyAmino): _43.PrivKey;
                toAmino(message: _43.PrivKey): _43.PrivKeyAmino;
                fromAminoMsg(object: _43.PrivKeyAminoMsg): _43.PrivKey;
                toAminoMsg(message: _43.PrivKey): _43.PrivKeyAminoMsg;
                fromProtoMsg(message: _43.PrivKeyProtoMsg): _43.PrivKey;
                toProto(message: _43.PrivKey): Uint8Array;
                toProtoMsg(message: _43.PrivKey): _43.PrivKeyProtoMsg;
            };
        };
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _44.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.LegacyAminoPubKey;
                fromPartial(object: Partial<_44.LegacyAminoPubKey>): _44.LegacyAminoPubKey;
                fromAmino(object: _44.LegacyAminoPubKeyAmino): _44.LegacyAminoPubKey;
                toAmino(message: _44.LegacyAminoPubKey): _44.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _44.LegacyAminoPubKeyAminoMsg): _44.LegacyAminoPubKey;
                toAminoMsg(message: _44.LegacyAminoPubKey): _44.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _44.LegacyAminoPubKeyProtoMsg): _44.LegacyAminoPubKey;
                toProto(message: _44.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _44.LegacyAminoPubKey): _44.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
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
            MsgClientImpl: typeof _187.MsgClientImpl;
            QueryClientImpl: typeof _176.QueryClientImpl;
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
            LCDQueryClient: typeof _164.LCDQueryClient;
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
            MsgClientImpl: typeof _188.MsgClientImpl;
            QueryClientImpl: typeof _177.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _52.QueryEvidenceRequest): Promise<_52.QueryEvidenceResponse>;
                allEvidence(request?: _52.QueryAllEvidenceRequest): Promise<_52.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _165.LCDQueryClient;
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
            MsgClientImpl: typeof _189.MsgClientImpl;
            QueryClientImpl: typeof _178.QueryClientImpl;
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
            LCDQueryClient: typeof _166.LCDQueryClient;
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
            QueryClientImpl: typeof _179.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
                inflation(request?: _61.QueryInflationRequest): Promise<_61.QueryInflationResponse>;
                annualProvisions(request?: _61.QueryAnnualProvisionsRequest): Promise<_61.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _167.LCDQueryClient;
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
            QueryClientImpl: typeof _180.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _63.QueryParamsRequest): Promise<_63.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _168.LCDQueryClient;
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
            MsgClientImpl: typeof _190.MsgClientImpl;
            QueryClientImpl: typeof _181.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _65.QueryParamsRequest): Promise<_65.QueryParamsResponse>;
                signingInfo(request: _65.QuerySigningInfoRequest): Promise<_65.QuerySigningInfoResponse>;
                signingInfos(request?: _65.QuerySigningInfosRequest): Promise<_65.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _169.LCDQueryClient;
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
            MsgClientImpl: typeof _191.MsgClientImpl;
            QueryClientImpl: typeof _182.QueryClientImpl;
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
            ServiceClientImpl: typeof _183.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _73.SimulateRequest): Promise<_73.SimulateResponse>;
                getTx(request: _73.GetTxRequest): Promise<_73.GetTxResponse>;
                broadcastTx(request: _73.BroadcastTxRequest): Promise<_73.BroadcastTxResponse>;
                getTxsEvent(request: _73.GetTxsEventRequest): Promise<_73.GetTxsEventResponse>;
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
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _184.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _75.QueryCurrentPlanRequest): Promise<_75.QueryCurrentPlanResponse>;
                appliedPlan(request: _75.QueryAppliedPlanRequest): Promise<_75.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _75.QueryUpgradedConsensusStateRequest): Promise<_75.QueryUpgradedConsensusStateResponse>;
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
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _192.MsgClientImpl;
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
                bank: {
                    v1beta1: _185.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _186.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _187.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _188.MsgClientImpl;
                };
                gov: {
                    v1beta1: _189.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _190.MsgClientImpl;
                };
                staking: {
                    v1beta1: _191.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _192.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        account(request: _25.QueryAccountRequest): Promise<_25.QueryAccountResponse>;
                        params(request?: _25.QueryParamsRequest): Promise<_25.QueryParamsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _28.QueryBalanceRequest): Promise<_28.QueryBalanceResponse>;
                        allBalances(request: _28.QueryAllBalancesRequest): Promise<_28.QueryAllBalancesResponse>;
                        totalSupply(request?: _28.QueryTotalSupplyRequest): Promise<_28.QueryTotalSupplyResponse>;
                        supplyOf(request: _28.QuerySupplyOfRequest): Promise<_28.QuerySupplyOfResponse>;
                        params(request?: _28.QueryParamsRequest): Promise<_28.QueryParamsResponse>;
                        denomMetadata(request: _28.QueryDenomMetadataRequest): Promise<_28.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _28.QueryDenomsMetadataRequest): Promise<_28.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _37.GetNodeInfoRequest): Promise<_37.GetNodeInfoResponse>;
                            getSyncing(request?: _37.GetSyncingRequest): Promise<_37.GetSyncingResponse>;
                            getLatestBlock(request?: _37.GetLatestBlockRequest): Promise<_37.GetLatestBlockResponse>;
                            getBlockByHeight(request: _37.GetBlockByHeightRequest): Promise<_37.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _37.GetLatestValidatorSetRequest): Promise<_37.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _37.GetValidatorSetByHeightRequest): Promise<_37.GetValidatorSetByHeightResponse>;
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
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _75.QueryCurrentPlanRequest): Promise<_75.QueryCurrentPlanResponse>;
                        appliedPlan(request: _75.QueryAppliedPlanRequest): Promise<_75.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _75.QueryUpgradedConsensusStateRequest): Promise<_75.QueryUpgradedConsensusStateResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _161.LCDQueryClient;
                };
                bank: {
                    v1beta1: _162.LCDQueryClient;
                };
                base: {
                    tendermint: {
                        v1beta1: _163.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _164.LCDQueryClient;
                };
                evidence: {
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
