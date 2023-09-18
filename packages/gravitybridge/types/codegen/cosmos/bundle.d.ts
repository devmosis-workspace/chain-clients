import * as _9 from "./bank/v1beta1/bank";
import * as _10 from "./bank/v1beta1/authz";
import * as _11 from "./bank/v1beta1/genesis";
import * as _12 from "./bank/v1beta1/query";
import * as _13 from "./bank/v1beta1/tx";
import * as _14 from "./base/abci/v1beta1/abci";
import * as _15 from "./base/query/v1beta1/pagination";
import * as _16 from "./base/v1beta1/coin";
import * as _17 from "./base/kv/v1beta1/kv";
import * as _18 from "./base/node/v1beta1/query";
import * as _19 from "./base/reflection/v1beta1/reflection";
import * as _20 from "./base/reflection/v2alpha1/reflection";
import * as _21 from "./base/snapshots/v1beta1/snapshot";
import * as _22 from "./base/store/v1beta1/commit_info";
import * as _23 from "./base/store/v1beta1/listening";
import * as _24 from "./base/tendermint/v1beta1/query";
import * as _25 from "./upgrade/v1beta1/upgrade";
import * as _26 from "./upgrade/v1beta1/query";
import * as _27 from "./auth/v1beta1/auth";
import * as _28 from "./auth/v1beta1/genesis";
import * as _29 from "./auth/v1beta1/query";
import * as _30 from "./authz/v1beta1/authz";
import * as _31 from "./authz/v1beta1/event";
import * as _32 from "./authz/v1beta1/genesis";
import * as _33 from "./authz/v1beta1/query";
import * as _34 from "./authz/v1beta1/tx";
import * as _35 from "./capability/v1beta1/capability";
import * as _36 from "./capability/v1beta1/genesis";
import * as _37 from "./crisis/v1beta1/genesis";
import * as _38 from "./crisis/v1beta1/tx";
import * as _39 from "./crypto/ed25519/keys";
import * as _40 from "./crypto/multisig/keys";
import * as _41 from "./crypto/secp256k1/keys";
import * as _42 from "./crypto/secp256r1/keys";
import * as _43 from "./distribution/v1beta1/distribution";
import * as _44 from "./distribution/v1beta1/genesis";
import * as _45 from "./distribution/v1beta1/query";
import * as _46 from "./distribution/v1beta1/tx";
import * as _47 from "./evidence/v1beta1/evidence";
import * as _48 from "./evidence/v1beta1/genesis";
import * as _49 from "./evidence/v1beta1/query";
import * as _50 from "./evidence/v1beta1/tx";
import * as _51 from "./feegrant/v1beta1/feegrant";
import * as _52 from "./feegrant/v1beta1/genesis";
import * as _53 from "./feegrant/v1beta1/query";
import * as _54 from "./feegrant/v1beta1/tx";
import * as _55 from "./genutil/v1beta1/genesis";
import * as _56 from "./gov/v1beta1/genesis";
import * as _57 from "./gov/v1beta1/gov";
import * as _58 from "./gov/v1beta1/query";
import * as _59 from "./gov/v1beta1/tx";
import * as _60 from "./mint/v1beta1/genesis";
import * as _61 from "./mint/v1beta1/mint";
import * as _62 from "./mint/v1beta1/query";
import * as _63 from "./params/v1beta1/params";
import * as _64 from "./params/v1beta1/query";
import * as _65 from "./slashing/v1beta1/genesis";
import * as _66 from "./slashing/v1beta1/query";
import * as _67 from "./slashing/v1beta1/slashing";
import * as _68 from "./slashing/v1beta1/tx";
import * as _69 from "./staking/v1beta1/authz";
import * as _70 from "./staking/v1beta1/genesis";
import * as _71 from "./staking/v1beta1/query";
import * as _72 from "./staking/v1beta1/staking";
import * as _73 from "./staking/v1beta1/tx";
import * as _74 from "./tx/signing/v1beta1/signing";
import * as _75 from "./tx/v1beta1/service";
import * as _76 from "./tx/v1beta1/tx";
import * as _77 from "./vesting/v1beta1/tx";
import * as _78 from "./vesting/v1beta1/vesting";
import * as _145 from "./auth/v1beta1/query.lcd";
import * as _146 from "./authz/v1beta1/query.lcd";
import * as _147 from "./bank/v1beta1/query.lcd";
import * as _148 from "./base/node/v1beta1/query.lcd";
import * as _149 from "./base/tendermint/v1beta1/query.lcd";
import * as _150 from "./distribution/v1beta1/query.lcd";
import * as _151 from "./evidence/v1beta1/query.lcd";
import * as _152 from "./feegrant/v1beta1/query.lcd";
import * as _153 from "./gov/v1beta1/query.lcd";
import * as _154 from "./mint/v1beta1/query.lcd";
import * as _155 from "./params/v1beta1/query.lcd";
import * as _156 from "./slashing/v1beta1/query.lcd";
import * as _157 from "./staking/v1beta1/query.lcd";
import * as _158 from "./tx/v1beta1/service.lcd";
import * as _159 from "./upgrade/v1beta1/query.lcd";
import * as _160 from "./auth/v1beta1/query.rpc.Query";
import * as _161 from "./authz/v1beta1/query.rpc.Query";
import * as _162 from "./bank/v1beta1/query.rpc.Query";
import * as _163 from "./base/node/v1beta1/query.rpc.Service";
import * as _164 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _165 from "./distribution/v1beta1/query.rpc.Query";
import * as _166 from "./evidence/v1beta1/query.rpc.Query";
import * as _167 from "./feegrant/v1beta1/query.rpc.Query";
import * as _168 from "./gov/v1beta1/query.rpc.Query";
import * as _169 from "./mint/v1beta1/query.rpc.Query";
import * as _170 from "./params/v1beta1/query.rpc.Query";
import * as _171 from "./slashing/v1beta1/query.rpc.Query";
import * as _172 from "./staking/v1beta1/query.rpc.Query";
import * as _173 from "./tx/v1beta1/service.rpc.Service";
import * as _174 from "./upgrade/v1beta1/query.rpc.Query";
import * as _175 from "./authz/v1beta1/tx.rpc.msg";
import * as _176 from "./bank/v1beta1/tx.rpc.msg";
import * as _177 from "./crisis/v1beta1/tx.rpc.msg";
import * as _178 from "./distribution/v1beta1/tx.rpc.msg";
import * as _179 from "./evidence/v1beta1/tx.rpc.msg";
import * as _180 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _181 from "./gov/v1beta1/tx.rpc.msg";
import * as _182 from "./slashing/v1beta1/tx.rpc.msg";
import * as _183 from "./staking/v1beta1/tx.rpc.msg";
import * as _184 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _176.MsgClientImpl;
            QueryClientImpl: typeof _162.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _12.QueryBalanceRequest): Promise<_12.QueryBalanceResponse>;
                allBalances(request: _12.QueryAllBalancesRequest): Promise<_12.QueryAllBalancesResponse>;
                spendableBalances(request: _12.QuerySpendableBalancesRequest): Promise<_12.QuerySpendableBalancesResponse>;
                totalSupply(request?: _12.QueryTotalSupplyRequest): Promise<_12.QueryTotalSupplyResponse>;
                supplyOf(request: _12.QuerySupplyOfRequest): Promise<_12.QuerySupplyOfResponse>;
                params(request?: _12.QueryParamsRequest): Promise<_12.QueryParamsResponse>;
                denomMetadata(request: _12.QueryDenomMetadataRequest): Promise<_12.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _12.QueryDenomsMetadataRequest): Promise<_12.QueryDenomsMetadataResponse>;
            };
            LCDQueryClient: typeof _147.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _13.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _13.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _13.MsgSend): {
                        typeUrl: string;
                        value: _13.MsgSend;
                    };
                    multiSend(value: _13.MsgMultiSend): {
                        typeUrl: string;
                        value: _13.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _13.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _13.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _13.MsgSend): {
                        typeUrl: string;
                        value: _13.MsgSend;
                    };
                    multiSend(value: _13.MsgMultiSend): {
                        typeUrl: string;
                        value: _13.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _13.MsgSend) => _13.MsgSendAmino;
                    fromAmino: (object: _13.MsgSendAmino) => _13.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _13.MsgMultiSend) => _13.MsgMultiSendAmino;
                    fromAmino: (object: _13.MsgMultiSendAmino) => _13.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _13.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.MsgSend;
                fromPartial(object: Partial<_13.MsgSend>): _13.MsgSend;
                fromAmino(object: _13.MsgSendAmino): _13.MsgSend;
                toAmino(message: _13.MsgSend): _13.MsgSendAmino;
                fromAminoMsg(object: _13.MsgSendAminoMsg): _13.MsgSend;
                toAminoMsg(message: _13.MsgSend): _13.MsgSendAminoMsg;
                fromProtoMsg(message: _13.MsgSendProtoMsg): _13.MsgSend;
                toProto(message: _13.MsgSend): Uint8Array;
                toProtoMsg(message: _13.MsgSend): _13.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _13.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.MsgSendResponse;
                fromPartial(_: Partial<_13.MsgSendResponse>): _13.MsgSendResponse;
                fromAmino(_: _13.MsgSendResponseAmino): _13.MsgSendResponse;
                toAmino(_: _13.MsgSendResponse): _13.MsgSendResponseAmino;
                fromAminoMsg(object: _13.MsgSendResponseAminoMsg): _13.MsgSendResponse;
                toAminoMsg(message: _13.MsgSendResponse): _13.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _13.MsgSendResponseProtoMsg): _13.MsgSendResponse;
                toProto(message: _13.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _13.MsgSendResponse): _13.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _13.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.MsgMultiSend;
                fromPartial(object: Partial<_13.MsgMultiSend>): _13.MsgMultiSend;
                fromAmino(object: _13.MsgMultiSendAmino): _13.MsgMultiSend;
                toAmino(message: _13.MsgMultiSend): _13.MsgMultiSendAmino;
                fromAminoMsg(object: _13.MsgMultiSendAminoMsg): _13.MsgMultiSend;
                toAminoMsg(message: _13.MsgMultiSend): _13.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _13.MsgMultiSendProtoMsg): _13.MsgMultiSend;
                toProto(message: _13.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _13.MsgMultiSend): _13.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _13.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.MsgMultiSendResponse;
                fromPartial(_: Partial<_13.MsgMultiSendResponse>): _13.MsgMultiSendResponse;
                fromAmino(_: _13.MsgMultiSendResponseAmino): _13.MsgMultiSendResponse;
                toAmino(_: _13.MsgMultiSendResponse): _13.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _13.MsgMultiSendResponseAminoMsg): _13.MsgMultiSendResponse;
                toAminoMsg(message: _13.MsgMultiSendResponse): _13.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _13.MsgMultiSendResponseProtoMsg): _13.MsgMultiSendResponse;
                toProto(message: _13.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _13.MsgMultiSendResponse): _13.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _12.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryBalanceRequest;
                fromPartial(object: Partial<_12.QueryBalanceRequest>): _12.QueryBalanceRequest;
                fromAmino(object: _12.QueryBalanceRequestAmino): _12.QueryBalanceRequest;
                toAmino(message: _12.QueryBalanceRequest): _12.QueryBalanceRequestAmino;
                fromAminoMsg(object: _12.QueryBalanceRequestAminoMsg): _12.QueryBalanceRequest;
                toAminoMsg(message: _12.QueryBalanceRequest): _12.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _12.QueryBalanceRequestProtoMsg): _12.QueryBalanceRequest;
                toProto(message: _12.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _12.QueryBalanceRequest): _12.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _12.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryBalanceResponse;
                fromPartial(object: Partial<_12.QueryBalanceResponse>): _12.QueryBalanceResponse;
                fromAmino(object: _12.QueryBalanceResponseAmino): _12.QueryBalanceResponse;
                toAmino(message: _12.QueryBalanceResponse): _12.QueryBalanceResponseAmino;
                fromAminoMsg(object: _12.QueryBalanceResponseAminoMsg): _12.QueryBalanceResponse;
                toAminoMsg(message: _12.QueryBalanceResponse): _12.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _12.QueryBalanceResponseProtoMsg): _12.QueryBalanceResponse;
                toProto(message: _12.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _12.QueryBalanceResponse): _12.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _12.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryAllBalancesRequest;
                fromPartial(object: Partial<_12.QueryAllBalancesRequest>): _12.QueryAllBalancesRequest;
                fromAmino(object: _12.QueryAllBalancesRequestAmino): _12.QueryAllBalancesRequest;
                toAmino(message: _12.QueryAllBalancesRequest): _12.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _12.QueryAllBalancesRequestAminoMsg): _12.QueryAllBalancesRequest;
                toAminoMsg(message: _12.QueryAllBalancesRequest): _12.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _12.QueryAllBalancesRequestProtoMsg): _12.QueryAllBalancesRequest;
                toProto(message: _12.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _12.QueryAllBalancesRequest): _12.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _12.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryAllBalancesResponse;
                fromPartial(object: Partial<_12.QueryAllBalancesResponse>): _12.QueryAllBalancesResponse;
                fromAmino(object: _12.QueryAllBalancesResponseAmino): _12.QueryAllBalancesResponse;
                toAmino(message: _12.QueryAllBalancesResponse): _12.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _12.QueryAllBalancesResponseAminoMsg): _12.QueryAllBalancesResponse;
                toAminoMsg(message: _12.QueryAllBalancesResponse): _12.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _12.QueryAllBalancesResponseProtoMsg): _12.QueryAllBalancesResponse;
                toProto(message: _12.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _12.QueryAllBalancesResponse): _12.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _12.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_12.QuerySpendableBalancesRequest>): _12.QuerySpendableBalancesRequest;
                fromAmino(object: _12.QuerySpendableBalancesRequestAmino): _12.QuerySpendableBalancesRequest;
                toAmino(message: _12.QuerySpendableBalancesRequest): _12.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _12.QuerySpendableBalancesRequestAminoMsg): _12.QuerySpendableBalancesRequest;
                toAminoMsg(message: _12.QuerySpendableBalancesRequest): _12.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _12.QuerySpendableBalancesRequestProtoMsg): _12.QuerySpendableBalancesRequest;
                toProto(message: _12.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _12.QuerySpendableBalancesRequest): _12.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _12.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_12.QuerySpendableBalancesResponse>): _12.QuerySpendableBalancesResponse;
                fromAmino(object: _12.QuerySpendableBalancesResponseAmino): _12.QuerySpendableBalancesResponse;
                toAmino(message: _12.QuerySpendableBalancesResponse): _12.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _12.QuerySpendableBalancesResponseAminoMsg): _12.QuerySpendableBalancesResponse;
                toAminoMsg(message: _12.QuerySpendableBalancesResponse): _12.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _12.QuerySpendableBalancesResponseProtoMsg): _12.QuerySpendableBalancesResponse;
                toProto(message: _12.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _12.QuerySpendableBalancesResponse): _12.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _12.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_12.QueryTotalSupplyRequest>): _12.QueryTotalSupplyRequest;
                fromAmino(object: _12.QueryTotalSupplyRequestAmino): _12.QueryTotalSupplyRequest;
                toAmino(message: _12.QueryTotalSupplyRequest): _12.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _12.QueryTotalSupplyRequestAminoMsg): _12.QueryTotalSupplyRequest;
                toAminoMsg(message: _12.QueryTotalSupplyRequest): _12.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _12.QueryTotalSupplyRequestProtoMsg): _12.QueryTotalSupplyRequest;
                toProto(message: _12.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _12.QueryTotalSupplyRequest): _12.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _12.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_12.QueryTotalSupplyResponse>): _12.QueryTotalSupplyResponse;
                fromAmino(object: _12.QueryTotalSupplyResponseAmino): _12.QueryTotalSupplyResponse;
                toAmino(message: _12.QueryTotalSupplyResponse): _12.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _12.QueryTotalSupplyResponseAminoMsg): _12.QueryTotalSupplyResponse;
                toAminoMsg(message: _12.QueryTotalSupplyResponse): _12.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _12.QueryTotalSupplyResponseProtoMsg): _12.QueryTotalSupplyResponse;
                toProto(message: _12.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _12.QueryTotalSupplyResponse): _12.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _12.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QuerySupplyOfRequest;
                fromPartial(object: Partial<_12.QuerySupplyOfRequest>): _12.QuerySupplyOfRequest;
                fromAmino(object: _12.QuerySupplyOfRequestAmino): _12.QuerySupplyOfRequest;
                toAmino(message: _12.QuerySupplyOfRequest): _12.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _12.QuerySupplyOfRequestAminoMsg): _12.QuerySupplyOfRequest;
                toAminoMsg(message: _12.QuerySupplyOfRequest): _12.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _12.QuerySupplyOfRequestProtoMsg): _12.QuerySupplyOfRequest;
                toProto(message: _12.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _12.QuerySupplyOfRequest): _12.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _12.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QuerySupplyOfResponse;
                fromPartial(object: Partial<_12.QuerySupplyOfResponse>): _12.QuerySupplyOfResponse;
                fromAmino(object: _12.QuerySupplyOfResponseAmino): _12.QuerySupplyOfResponse;
                toAmino(message: _12.QuerySupplyOfResponse): _12.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _12.QuerySupplyOfResponseAminoMsg): _12.QuerySupplyOfResponse;
                toAminoMsg(message: _12.QuerySupplyOfResponse): _12.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _12.QuerySupplyOfResponseProtoMsg): _12.QuerySupplyOfResponse;
                toProto(message: _12.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _12.QuerySupplyOfResponse): _12.QuerySupplyOfResponseProtoMsg;
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
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _12.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_12.QueryDenomsMetadataRequest>): _12.QueryDenomsMetadataRequest;
                fromAmino(object: _12.QueryDenomsMetadataRequestAmino): _12.QueryDenomsMetadataRequest;
                toAmino(message: _12.QueryDenomsMetadataRequest): _12.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _12.QueryDenomsMetadataRequestAminoMsg): _12.QueryDenomsMetadataRequest;
                toAminoMsg(message: _12.QueryDenomsMetadataRequest): _12.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _12.QueryDenomsMetadataRequestProtoMsg): _12.QueryDenomsMetadataRequest;
                toProto(message: _12.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _12.QueryDenomsMetadataRequest): _12.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _12.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_12.QueryDenomsMetadataResponse>): _12.QueryDenomsMetadataResponse;
                fromAmino(object: _12.QueryDenomsMetadataResponseAmino): _12.QueryDenomsMetadataResponse;
                toAmino(message: _12.QueryDenomsMetadataResponse): _12.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _12.QueryDenomsMetadataResponseAminoMsg): _12.QueryDenomsMetadataResponse;
                toAminoMsg(message: _12.QueryDenomsMetadataResponse): _12.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _12.QueryDenomsMetadataResponseProtoMsg): _12.QueryDenomsMetadataResponse;
                toProto(message: _12.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _12.QueryDenomsMetadataResponse): _12.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _12.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_12.QueryDenomMetadataRequest>): _12.QueryDenomMetadataRequest;
                fromAmino(object: _12.QueryDenomMetadataRequestAmino): _12.QueryDenomMetadataRequest;
                toAmino(message: _12.QueryDenomMetadataRequest): _12.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _12.QueryDenomMetadataRequestAminoMsg): _12.QueryDenomMetadataRequest;
                toAminoMsg(message: _12.QueryDenomMetadataRequest): _12.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _12.QueryDenomMetadataRequestProtoMsg): _12.QueryDenomMetadataRequest;
                toProto(message: _12.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _12.QueryDenomMetadataRequest): _12.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _12.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_12.QueryDenomMetadataResponse>): _12.QueryDenomMetadataResponse;
                fromAmino(object: _12.QueryDenomMetadataResponseAmino): _12.QueryDenomMetadataResponse;
                toAmino(message: _12.QueryDenomMetadataResponse): _12.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _12.QueryDenomMetadataResponseAminoMsg): _12.QueryDenomMetadataResponse;
                toAminoMsg(message: _12.QueryDenomMetadataResponse): _12.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _12.QueryDenomMetadataResponseProtoMsg): _12.QueryDenomMetadataResponse;
                toProto(message: _12.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _12.QueryDenomMetadataResponse): _12.QueryDenomMetadataResponseProtoMsg;
            };
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
            Balance: {
                typeUrl: string;
                encode(message: _11.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.Balance;
                fromPartial(object: Partial<_11.Balance>): _11.Balance;
                fromAmino(object: _11.BalanceAmino): _11.Balance;
                toAmino(message: _11.Balance): _11.BalanceAmino;
                fromAminoMsg(object: _11.BalanceAminoMsg): _11.Balance;
                toAminoMsg(message: _11.Balance): _11.BalanceAminoMsg;
                fromProtoMsg(message: _11.BalanceProtoMsg): _11.Balance;
                toProto(message: _11.Balance): Uint8Array;
                toProtoMsg(message: _11.Balance): _11.BalanceProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _10.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.SendAuthorization;
                fromPartial(object: Partial<_10.SendAuthorization>): _10.SendAuthorization;
                fromAmino(object: _10.SendAuthorizationAmino): _10.SendAuthorization;
                toAmino(message: _10.SendAuthorization): _10.SendAuthorizationAmino;
                fromAminoMsg(object: _10.SendAuthorizationAminoMsg): _10.SendAuthorization;
                toAminoMsg(message: _10.SendAuthorization): _10.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _10.SendAuthorizationProtoMsg): _10.SendAuthorization;
                toProto(message: _10.SendAuthorization): Uint8Array;
                toProtoMsg(message: _10.SendAuthorization): _10.SendAuthorizationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _9.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.Params;
                fromPartial(object: Partial<_9.Params>): _9.Params;
                fromAmino(object: _9.ParamsAmino): _9.Params;
                toAmino(message: _9.Params): _9.ParamsAmino;
                fromAminoMsg(object: _9.ParamsAminoMsg): _9.Params;
                toAminoMsg(message: _9.Params): _9.ParamsAminoMsg;
                fromProtoMsg(message: _9.ParamsProtoMsg): _9.Params;
                toProto(message: _9.Params): Uint8Array;
                toProtoMsg(message: _9.Params): _9.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _9.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.SendEnabled;
                fromPartial(object: Partial<_9.SendEnabled>): _9.SendEnabled;
                fromAmino(object: _9.SendEnabledAmino): _9.SendEnabled;
                toAmino(message: _9.SendEnabled): _9.SendEnabledAmino;
                fromAminoMsg(object: _9.SendEnabledAminoMsg): _9.SendEnabled;
                toAminoMsg(message: _9.SendEnabled): _9.SendEnabledAminoMsg;
                fromProtoMsg(message: _9.SendEnabledProtoMsg): _9.SendEnabled;
                toProto(message: _9.SendEnabled): Uint8Array;
                toProtoMsg(message: _9.SendEnabled): _9.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _9.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.Input;
                fromPartial(object: Partial<_9.Input>): _9.Input;
                fromAmino(object: _9.InputAmino): _9.Input;
                toAmino(message: _9.Input): _9.InputAmino;
                fromAminoMsg(object: _9.InputAminoMsg): _9.Input;
                toAminoMsg(message: _9.Input): _9.InputAminoMsg;
                fromProtoMsg(message: _9.InputProtoMsg): _9.Input;
                toProto(message: _9.Input): Uint8Array;
                toProtoMsg(message: _9.Input): _9.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _9.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.Output;
                fromPartial(object: Partial<_9.Output>): _9.Output;
                fromAmino(object: _9.OutputAmino): _9.Output;
                toAmino(message: _9.Output): _9.OutputAmino;
                fromAminoMsg(object: _9.OutputAminoMsg): _9.Output;
                toAminoMsg(message: _9.Output): _9.OutputAminoMsg;
                fromProtoMsg(message: _9.OutputProtoMsg): _9.Output;
                toProto(message: _9.Output): Uint8Array;
                toProtoMsg(message: _9.Output): _9.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _9.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.Supply;
                fromPartial(object: Partial<_9.Supply>): _9.Supply;
                fromAmino(object: _9.SupplyAmino): _9.Supply;
                toAmino(message: _9.Supply): _9.SupplyAmino;
                fromAminoMsg(object: _9.SupplyAminoMsg): _9.Supply;
                toAminoMsg(message: _9.Supply): _9.SupplyAminoMsg;
                fromProtoMsg(message: _9.SupplyProtoMsg): _9.Supply;
                toProto(message: _9.Supply): Uint8Array;
                toProtoMsg(message: _9.Supply): _9.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _9.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.DenomUnit;
                fromPartial(object: Partial<_9.DenomUnit>): _9.DenomUnit;
                fromAmino(object: _9.DenomUnitAmino): _9.DenomUnit;
                toAmino(message: _9.DenomUnit): _9.DenomUnitAmino;
                fromAminoMsg(object: _9.DenomUnitAminoMsg): _9.DenomUnit;
                toAminoMsg(message: _9.DenomUnit): _9.DenomUnitAminoMsg;
                fromProtoMsg(message: _9.DenomUnitProtoMsg): _9.DenomUnit;
                toProto(message: _9.DenomUnit): Uint8Array;
                toProtoMsg(message: _9.DenomUnit): _9.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _9.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.Metadata;
                fromPartial(object: Partial<_9.Metadata>): _9.Metadata;
                fromAmino(object: _9.MetadataAmino): _9.Metadata;
                toAmino(message: _9.Metadata): _9.MetadataAmino;
                fromAminoMsg(object: _9.MetadataAminoMsg): _9.Metadata;
                toAminoMsg(message: _9.Metadata): _9.MetadataAminoMsg;
                fromProtoMsg(message: _9.MetadataProtoMsg): _9.Metadata;
                toProto(message: _9.Metadata): Uint8Array;
                toProtoMsg(message: _9.Metadata): _9.MetadataProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _14.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.TxResponse;
                    fromPartial(object: Partial<_14.TxResponse>): _14.TxResponse;
                    fromAmino(object: _14.TxResponseAmino): _14.TxResponse;
                    toAmino(message: _14.TxResponse): _14.TxResponseAmino;
                    fromAminoMsg(object: _14.TxResponseAminoMsg): _14.TxResponse;
                    toAminoMsg(message: _14.TxResponse): _14.TxResponseAminoMsg;
                    fromProtoMsg(message: _14.TxResponseProtoMsg): _14.TxResponse;
                    toProto(message: _14.TxResponse): Uint8Array;
                    toProtoMsg(message: _14.TxResponse): _14.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _14.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.ABCIMessageLog;
                    fromPartial(object: Partial<_14.ABCIMessageLog>): _14.ABCIMessageLog;
                    fromAmino(object: _14.ABCIMessageLogAmino): _14.ABCIMessageLog;
                    toAmino(message: _14.ABCIMessageLog): _14.ABCIMessageLogAmino;
                    fromAminoMsg(object: _14.ABCIMessageLogAminoMsg): _14.ABCIMessageLog;
                    toAminoMsg(message: _14.ABCIMessageLog): _14.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _14.ABCIMessageLogProtoMsg): _14.ABCIMessageLog;
                    toProto(message: _14.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _14.ABCIMessageLog): _14.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _14.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.StringEvent;
                    fromPartial(object: Partial<_14.StringEvent>): _14.StringEvent;
                    fromAmino(object: _14.StringEventAmino): _14.StringEvent;
                    toAmino(message: _14.StringEvent): _14.StringEventAmino;
                    fromAminoMsg(object: _14.StringEventAminoMsg): _14.StringEvent;
                    toAminoMsg(message: _14.StringEvent): _14.StringEventAminoMsg;
                    fromProtoMsg(message: _14.StringEventProtoMsg): _14.StringEvent;
                    toProto(message: _14.StringEvent): Uint8Array;
                    toProtoMsg(message: _14.StringEvent): _14.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _14.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.Attribute;
                    fromPartial(object: Partial<_14.Attribute>): _14.Attribute;
                    fromAmino(object: _14.AttributeAmino): _14.Attribute;
                    toAmino(message: _14.Attribute): _14.AttributeAmino;
                    fromAminoMsg(object: _14.AttributeAminoMsg): _14.Attribute;
                    toAminoMsg(message: _14.Attribute): _14.AttributeAminoMsg;
                    fromProtoMsg(message: _14.AttributeProtoMsg): _14.Attribute;
                    toProto(message: _14.Attribute): Uint8Array;
                    toProtoMsg(message: _14.Attribute): _14.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _14.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.GasInfo;
                    fromPartial(object: Partial<_14.GasInfo>): _14.GasInfo;
                    fromAmino(object: _14.GasInfoAmino): _14.GasInfo;
                    toAmino(message: _14.GasInfo): _14.GasInfoAmino;
                    fromAminoMsg(object: _14.GasInfoAminoMsg): _14.GasInfo;
                    toAminoMsg(message: _14.GasInfo): _14.GasInfoAminoMsg;
                    fromProtoMsg(message: _14.GasInfoProtoMsg): _14.GasInfo;
                    toProto(message: _14.GasInfo): Uint8Array;
                    toProtoMsg(message: _14.GasInfo): _14.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _14.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.Result;
                    fromPartial(object: Partial<_14.Result>): _14.Result;
                    fromAmino(object: _14.ResultAmino): _14.Result;
                    toAmino(message: _14.Result): _14.ResultAmino;
                    fromAminoMsg(object: _14.ResultAminoMsg): _14.Result;
                    toAminoMsg(message: _14.Result): _14.ResultAminoMsg;
                    fromProtoMsg(message: _14.ResultProtoMsg): _14.Result;
                    toProto(message: _14.Result): Uint8Array;
                    toProtoMsg(message: _14.Result): _14.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _14.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.SimulationResponse;
                    fromPartial(object: Partial<_14.SimulationResponse>): _14.SimulationResponse;
                    fromAmino(object: _14.SimulationResponseAmino): _14.SimulationResponse;
                    toAmino(message: _14.SimulationResponse): _14.SimulationResponseAmino;
                    fromAminoMsg(object: _14.SimulationResponseAminoMsg): _14.SimulationResponse;
                    toAminoMsg(message: _14.SimulationResponse): _14.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _14.SimulationResponseProtoMsg): _14.SimulationResponse;
                    toProto(message: _14.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _14.SimulationResponse): _14.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _14.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.MsgData;
                    fromPartial(object: Partial<_14.MsgData>): _14.MsgData;
                    fromAmino(object: _14.MsgDataAmino): _14.MsgData;
                    toAmino(message: _14.MsgData): _14.MsgDataAmino;
                    fromAminoMsg(object: _14.MsgDataAminoMsg): _14.MsgData;
                    toAminoMsg(message: _14.MsgData): _14.MsgDataAminoMsg;
                    fromProtoMsg(message: _14.MsgDataProtoMsg): _14.MsgData;
                    toProto(message: _14.MsgData): Uint8Array;
                    toProtoMsg(message: _14.MsgData): _14.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _14.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.TxMsgData;
                    fromPartial(object: Partial<_14.TxMsgData>): _14.TxMsgData;
                    fromAmino(object: _14.TxMsgDataAmino): _14.TxMsgData;
                    toAmino(message: _14.TxMsgData): _14.TxMsgDataAmino;
                    fromAminoMsg(object: _14.TxMsgDataAminoMsg): _14.TxMsgData;
                    toAminoMsg(message: _14.TxMsgData): _14.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _14.TxMsgDataProtoMsg): _14.TxMsgData;
                    toProto(message: _14.TxMsgData): Uint8Array;
                    toProtoMsg(message: _14.TxMsgData): _14.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _14.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.SearchTxsResult;
                    fromPartial(object: Partial<_14.SearchTxsResult>): _14.SearchTxsResult;
                    fromAmino(object: _14.SearchTxsResultAmino): _14.SearchTxsResult;
                    toAmino(message: _14.SearchTxsResult): _14.SearchTxsResultAmino;
                    fromAminoMsg(object: _14.SearchTxsResultAminoMsg): _14.SearchTxsResult;
                    toAminoMsg(message: _14.SearchTxsResult): _14.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _14.SearchTxsResultProtoMsg): _14.SearchTxsResult;
                    toProto(message: _14.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _14.SearchTxsResult): _14.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _15.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _15.PageRequest;
                    fromPartial(object: Partial<_15.PageRequest>): _15.PageRequest;
                    fromAmino(object: _15.PageRequestAmino): _15.PageRequest;
                    toAmino(message: _15.PageRequest): _15.PageRequestAmino;
                    fromAminoMsg(object: _15.PageRequestAminoMsg): _15.PageRequest;
                    toAminoMsg(message: _15.PageRequest): _15.PageRequestAminoMsg;
                    fromProtoMsg(message: _15.PageRequestProtoMsg): _15.PageRequest;
                    toProto(message: _15.PageRequest): Uint8Array;
                    toProtoMsg(message: _15.PageRequest): _15.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _15.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _15.PageResponse;
                    fromPartial(object: Partial<_15.PageResponse>): _15.PageResponse;
                    fromAmino(object: _15.PageResponseAmino): _15.PageResponse;
                    toAmino(message: _15.PageResponse): _15.PageResponseAmino;
                    fromAminoMsg(object: _15.PageResponseAminoMsg): _15.PageResponse;
                    toAminoMsg(message: _15.PageResponse): _15.PageResponseAminoMsg;
                    fromProtoMsg(message: _15.PageResponseProtoMsg): _15.PageResponse;
                    toProto(message: _15.PageResponse): Uint8Array;
                    toProtoMsg(message: _15.PageResponse): _15.PageResponseProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _16.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.Coin;
                fromPartial(object: Partial<_16.Coin>): _16.Coin;
                fromAmino(object: _16.CoinAmino): _16.Coin;
                toAmino(message: _16.Coin): _16.CoinAmino;
                fromAminoMsg(object: _16.CoinAminoMsg): _16.Coin;
                toAminoMsg(message: _16.Coin): _16.CoinAminoMsg;
                fromProtoMsg(message: _16.CoinProtoMsg): _16.Coin;
                toProto(message: _16.Coin): Uint8Array;
                toProtoMsg(message: _16.Coin): _16.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _16.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.DecCoin;
                fromPartial(object: Partial<_16.DecCoin>): _16.DecCoin;
                fromAmino(object: _16.DecCoinAmino): _16.DecCoin;
                toAmino(message: _16.DecCoin): _16.DecCoinAmino;
                fromAminoMsg(object: _16.DecCoinAminoMsg): _16.DecCoin;
                toAminoMsg(message: _16.DecCoin): _16.DecCoinAminoMsg;
                fromProtoMsg(message: _16.DecCoinProtoMsg): _16.DecCoin;
                toProto(message: _16.DecCoin): Uint8Array;
                toProtoMsg(message: _16.DecCoin): _16.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _16.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.IntProto;
                fromPartial(object: Partial<_16.IntProto>): _16.IntProto;
                fromAmino(object: _16.IntProtoAmino): _16.IntProto;
                toAmino(message: _16.IntProto): _16.IntProtoAmino;
                fromAminoMsg(object: _16.IntProtoAminoMsg): _16.IntProto;
                toAminoMsg(message: _16.IntProto): _16.IntProtoAminoMsg;
                fromProtoMsg(message: _16.IntProtoProtoMsg): _16.IntProto;
                toProto(message: _16.IntProto): Uint8Array;
                toProtoMsg(message: _16.IntProto): _16.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _16.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.DecProto;
                fromPartial(object: Partial<_16.DecProto>): _16.DecProto;
                fromAmino(object: _16.DecProtoAmino): _16.DecProto;
                toAmino(message: _16.DecProto): _16.DecProtoAmino;
                fromAminoMsg(object: _16.DecProtoAminoMsg): _16.DecProto;
                toAminoMsg(message: _16.DecProto): _16.DecProtoAminoMsg;
                fromProtoMsg(message: _16.DecProtoProtoMsg): _16.DecProto;
                toProto(message: _16.DecProto): Uint8Array;
                toProtoMsg(message: _16.DecProto): _16.DecProtoProtoMsg;
            };
        };
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _17.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.Pairs;
                    fromPartial(object: Partial<_17.Pairs>): _17.Pairs;
                    fromAmino(object: _17.PairsAmino): _17.Pairs;
                    toAmino(message: _17.Pairs): _17.PairsAmino;
                    fromAminoMsg(object: _17.PairsAminoMsg): _17.Pairs;
                    toAminoMsg(message: _17.Pairs): _17.PairsAminoMsg;
                    fromProtoMsg(message: _17.PairsProtoMsg): _17.Pairs;
                    toProto(message: _17.Pairs): Uint8Array;
                    toProtoMsg(message: _17.Pairs): _17.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _17.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.Pair;
                    fromPartial(object: Partial<_17.Pair>): _17.Pair;
                    fromAmino(object: _17.PairAmino): _17.Pair;
                    toAmino(message: _17.Pair): _17.PairAmino;
                    fromAminoMsg(object: _17.PairAminoMsg): _17.Pair;
                    toAminoMsg(message: _17.Pair): _17.PairAminoMsg;
                    fromProtoMsg(message: _17.PairProtoMsg): _17.Pair;
                    toProto(message: _17.Pair): Uint8Array;
                    toProtoMsg(message: _17.Pair): _17.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _163.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _18.ConfigRequest): Promise<_18.ConfigResponse>;
                };
                LCDQueryClient: typeof _148.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _18.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _18.ConfigRequest;
                    fromPartial(_: Partial<_18.ConfigRequest>): _18.ConfigRequest;
                    fromAmino(_: _18.ConfigRequestAmino): _18.ConfigRequest;
                    toAmino(_: _18.ConfigRequest): _18.ConfigRequestAmino;
                    fromAminoMsg(object: _18.ConfigRequestAminoMsg): _18.ConfigRequest;
                    toAminoMsg(message: _18.ConfigRequest): _18.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _18.ConfigRequestProtoMsg): _18.ConfigRequest;
                    toProto(message: _18.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _18.ConfigRequest): _18.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _18.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.ConfigResponse;
                    fromPartial(object: Partial<_18.ConfigResponse>): _18.ConfigResponse;
                    fromAmino(object: _18.ConfigResponseAmino): _18.ConfigResponse;
                    toAmino(message: _18.ConfigResponse): _18.ConfigResponseAmino;
                    fromAminoMsg(object: _18.ConfigResponseAminoMsg): _18.ConfigResponse;
                    toAminoMsg(message: _18.ConfigResponse): _18.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _18.ConfigResponseProtoMsg): _18.ConfigResponse;
                    toProto(message: _18.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _18.ConfigResponse): _18.ConfigResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _19.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _19.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_19.ListAllInterfacesRequest>): _19.ListAllInterfacesRequest;
                    fromAmino(_: _19.ListAllInterfacesRequestAmino): _19.ListAllInterfacesRequest;
                    toAmino(_: _19.ListAllInterfacesRequest): _19.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _19.ListAllInterfacesRequestAminoMsg): _19.ListAllInterfacesRequest;
                    toAminoMsg(message: _19.ListAllInterfacesRequest): _19.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _19.ListAllInterfacesRequestProtoMsg): _19.ListAllInterfacesRequest;
                    toProto(message: _19.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _19.ListAllInterfacesRequest): _19.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _19.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _19.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_19.ListAllInterfacesResponse>): _19.ListAllInterfacesResponse;
                    fromAmino(object: _19.ListAllInterfacesResponseAmino): _19.ListAllInterfacesResponse;
                    toAmino(message: _19.ListAllInterfacesResponse): _19.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _19.ListAllInterfacesResponseAminoMsg): _19.ListAllInterfacesResponse;
                    toAminoMsg(message: _19.ListAllInterfacesResponse): _19.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _19.ListAllInterfacesResponseProtoMsg): _19.ListAllInterfacesResponse;
                    toProto(message: _19.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _19.ListAllInterfacesResponse): _19.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _19.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _19.ListImplementationsRequest;
                    fromPartial(object: Partial<_19.ListImplementationsRequest>): _19.ListImplementationsRequest;
                    fromAmino(object: _19.ListImplementationsRequestAmino): _19.ListImplementationsRequest;
                    toAmino(message: _19.ListImplementationsRequest): _19.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _19.ListImplementationsRequestAminoMsg): _19.ListImplementationsRequest;
                    toAminoMsg(message: _19.ListImplementationsRequest): _19.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _19.ListImplementationsRequestProtoMsg): _19.ListImplementationsRequest;
                    toProto(message: _19.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _19.ListImplementationsRequest): _19.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _19.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _19.ListImplementationsResponse;
                    fromPartial(object: Partial<_19.ListImplementationsResponse>): _19.ListImplementationsResponse;
                    fromAmino(object: _19.ListImplementationsResponseAmino): _19.ListImplementationsResponse;
                    toAmino(message: _19.ListImplementationsResponse): _19.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _19.ListImplementationsResponseAminoMsg): _19.ListImplementationsResponse;
                    toAminoMsg(message: _19.ListImplementationsResponse): _19.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _19.ListImplementationsResponseProtoMsg): _19.ListImplementationsResponse;
                    toProto(message: _19.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _19.ListImplementationsResponse): _19.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _20.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.AppDescriptor;
                    fromPartial(object: Partial<_20.AppDescriptor>): _20.AppDescriptor;
                    fromAmino(object: _20.AppDescriptorAmino): _20.AppDescriptor;
                    toAmino(message: _20.AppDescriptor): _20.AppDescriptorAmino;
                    fromAminoMsg(object: _20.AppDescriptorAminoMsg): _20.AppDescriptor;
                    toAminoMsg(message: _20.AppDescriptor): _20.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _20.AppDescriptorProtoMsg): _20.AppDescriptor;
                    toProto(message: _20.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _20.AppDescriptor): _20.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _20.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.TxDescriptor;
                    fromPartial(object: Partial<_20.TxDescriptor>): _20.TxDescriptor;
                    fromAmino(object: _20.TxDescriptorAmino): _20.TxDescriptor;
                    toAmino(message: _20.TxDescriptor): _20.TxDescriptorAmino;
                    fromAminoMsg(object: _20.TxDescriptorAminoMsg): _20.TxDescriptor;
                    toAminoMsg(message: _20.TxDescriptor): _20.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _20.TxDescriptorProtoMsg): _20.TxDescriptor;
                    toProto(message: _20.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _20.TxDescriptor): _20.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _20.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.AuthnDescriptor;
                    fromPartial(object: Partial<_20.AuthnDescriptor>): _20.AuthnDescriptor;
                    fromAmino(object: _20.AuthnDescriptorAmino): _20.AuthnDescriptor;
                    toAmino(message: _20.AuthnDescriptor): _20.AuthnDescriptorAmino;
                    fromAminoMsg(object: _20.AuthnDescriptorAminoMsg): _20.AuthnDescriptor;
                    toAminoMsg(message: _20.AuthnDescriptor): _20.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _20.AuthnDescriptorProtoMsg): _20.AuthnDescriptor;
                    toProto(message: _20.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _20.AuthnDescriptor): _20.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _20.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.SigningModeDescriptor;
                    fromPartial(object: Partial<_20.SigningModeDescriptor>): _20.SigningModeDescriptor;
                    fromAmino(object: _20.SigningModeDescriptorAmino): _20.SigningModeDescriptor;
                    toAmino(message: _20.SigningModeDescriptor): _20.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _20.SigningModeDescriptorAminoMsg): _20.SigningModeDescriptor;
                    toAminoMsg(message: _20.SigningModeDescriptor): _20.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _20.SigningModeDescriptorProtoMsg): _20.SigningModeDescriptor;
                    toProto(message: _20.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _20.SigningModeDescriptor): _20.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _20.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.ChainDescriptor;
                    fromPartial(object: Partial<_20.ChainDescriptor>): _20.ChainDescriptor;
                    fromAmino(object: _20.ChainDescriptorAmino): _20.ChainDescriptor;
                    toAmino(message: _20.ChainDescriptor): _20.ChainDescriptorAmino;
                    fromAminoMsg(object: _20.ChainDescriptorAminoMsg): _20.ChainDescriptor;
                    toAminoMsg(message: _20.ChainDescriptor): _20.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _20.ChainDescriptorProtoMsg): _20.ChainDescriptor;
                    toProto(message: _20.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _20.ChainDescriptor): _20.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _20.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.CodecDescriptor;
                    fromPartial(object: Partial<_20.CodecDescriptor>): _20.CodecDescriptor;
                    fromAmino(object: _20.CodecDescriptorAmino): _20.CodecDescriptor;
                    toAmino(message: _20.CodecDescriptor): _20.CodecDescriptorAmino;
                    fromAminoMsg(object: _20.CodecDescriptorAminoMsg): _20.CodecDescriptor;
                    toAminoMsg(message: _20.CodecDescriptor): _20.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _20.CodecDescriptorProtoMsg): _20.CodecDescriptor;
                    toProto(message: _20.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _20.CodecDescriptor): _20.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _20.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.InterfaceDescriptor;
                    fromPartial(object: Partial<_20.InterfaceDescriptor>): _20.InterfaceDescriptor;
                    fromAmino(object: _20.InterfaceDescriptorAmino): _20.InterfaceDescriptor;
                    toAmino(message: _20.InterfaceDescriptor): _20.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _20.InterfaceDescriptorAminoMsg): _20.InterfaceDescriptor;
                    toAminoMsg(message: _20.InterfaceDescriptor): _20.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _20.InterfaceDescriptorProtoMsg): _20.InterfaceDescriptor;
                    toProto(message: _20.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _20.InterfaceDescriptor): _20.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _20.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_20.InterfaceImplementerDescriptor>): _20.InterfaceImplementerDescriptor;
                    fromAmino(object: _20.InterfaceImplementerDescriptorAmino): _20.InterfaceImplementerDescriptor;
                    toAmino(message: _20.InterfaceImplementerDescriptor): _20.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _20.InterfaceImplementerDescriptorAminoMsg): _20.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _20.InterfaceImplementerDescriptor): _20.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _20.InterfaceImplementerDescriptorProtoMsg): _20.InterfaceImplementerDescriptor;
                    toProto(message: _20.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _20.InterfaceImplementerDescriptor): _20.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _20.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_20.InterfaceAcceptingMessageDescriptor>): _20.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _20.InterfaceAcceptingMessageDescriptorAmino): _20.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _20.InterfaceAcceptingMessageDescriptor): _20.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _20.InterfaceAcceptingMessageDescriptorAminoMsg): _20.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _20.InterfaceAcceptingMessageDescriptor): _20.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _20.InterfaceAcceptingMessageDescriptorProtoMsg): _20.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _20.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _20.InterfaceAcceptingMessageDescriptor): _20.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _20.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.ConfigurationDescriptor;
                    fromPartial(object: Partial<_20.ConfigurationDescriptor>): _20.ConfigurationDescriptor;
                    fromAmino(object: _20.ConfigurationDescriptorAmino): _20.ConfigurationDescriptor;
                    toAmino(message: _20.ConfigurationDescriptor): _20.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _20.ConfigurationDescriptorAminoMsg): _20.ConfigurationDescriptor;
                    toAminoMsg(message: _20.ConfigurationDescriptor): _20.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _20.ConfigurationDescriptorProtoMsg): _20.ConfigurationDescriptor;
                    toProto(message: _20.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _20.ConfigurationDescriptor): _20.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _20.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.MsgDescriptor;
                    fromPartial(object: Partial<_20.MsgDescriptor>): _20.MsgDescriptor;
                    fromAmino(object: _20.MsgDescriptorAmino): _20.MsgDescriptor;
                    toAmino(message: _20.MsgDescriptor): _20.MsgDescriptorAmino;
                    fromAminoMsg(object: _20.MsgDescriptorAminoMsg): _20.MsgDescriptor;
                    toAminoMsg(message: _20.MsgDescriptor): _20.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _20.MsgDescriptorProtoMsg): _20.MsgDescriptor;
                    toProto(message: _20.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _20.MsgDescriptor): _20.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _20.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _20.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_20.GetAuthnDescriptorRequest>): _20.GetAuthnDescriptorRequest;
                    fromAmino(_: _20.GetAuthnDescriptorRequestAmino): _20.GetAuthnDescriptorRequest;
                    toAmino(_: _20.GetAuthnDescriptorRequest): _20.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _20.GetAuthnDescriptorRequestAminoMsg): _20.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _20.GetAuthnDescriptorRequest): _20.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _20.GetAuthnDescriptorRequestProtoMsg): _20.GetAuthnDescriptorRequest;
                    toProto(message: _20.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _20.GetAuthnDescriptorRequest): _20.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _20.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_20.GetAuthnDescriptorResponse>): _20.GetAuthnDescriptorResponse;
                    fromAmino(object: _20.GetAuthnDescriptorResponseAmino): _20.GetAuthnDescriptorResponse;
                    toAmino(message: _20.GetAuthnDescriptorResponse): _20.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _20.GetAuthnDescriptorResponseAminoMsg): _20.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _20.GetAuthnDescriptorResponse): _20.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _20.GetAuthnDescriptorResponseProtoMsg): _20.GetAuthnDescriptorResponse;
                    toProto(message: _20.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _20.GetAuthnDescriptorResponse): _20.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _20.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _20.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_20.GetChainDescriptorRequest>): _20.GetChainDescriptorRequest;
                    fromAmino(_: _20.GetChainDescriptorRequestAmino): _20.GetChainDescriptorRequest;
                    toAmino(_: _20.GetChainDescriptorRequest): _20.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _20.GetChainDescriptorRequestAminoMsg): _20.GetChainDescriptorRequest;
                    toAminoMsg(message: _20.GetChainDescriptorRequest): _20.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _20.GetChainDescriptorRequestProtoMsg): _20.GetChainDescriptorRequest;
                    toProto(message: _20.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _20.GetChainDescriptorRequest): _20.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _20.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_20.GetChainDescriptorResponse>): _20.GetChainDescriptorResponse;
                    fromAmino(object: _20.GetChainDescriptorResponseAmino): _20.GetChainDescriptorResponse;
                    toAmino(message: _20.GetChainDescriptorResponse): _20.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _20.GetChainDescriptorResponseAminoMsg): _20.GetChainDescriptorResponse;
                    toAminoMsg(message: _20.GetChainDescriptorResponse): _20.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _20.GetChainDescriptorResponseProtoMsg): _20.GetChainDescriptorResponse;
                    toProto(message: _20.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _20.GetChainDescriptorResponse): _20.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _20.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _20.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_20.GetCodecDescriptorRequest>): _20.GetCodecDescriptorRequest;
                    fromAmino(_: _20.GetCodecDescriptorRequestAmino): _20.GetCodecDescriptorRequest;
                    toAmino(_: _20.GetCodecDescriptorRequest): _20.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _20.GetCodecDescriptorRequestAminoMsg): _20.GetCodecDescriptorRequest;
                    toAminoMsg(message: _20.GetCodecDescriptorRequest): _20.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _20.GetCodecDescriptorRequestProtoMsg): _20.GetCodecDescriptorRequest;
                    toProto(message: _20.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _20.GetCodecDescriptorRequest): _20.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _20.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_20.GetCodecDescriptorResponse>): _20.GetCodecDescriptorResponse;
                    fromAmino(object: _20.GetCodecDescriptorResponseAmino): _20.GetCodecDescriptorResponse;
                    toAmino(message: _20.GetCodecDescriptorResponse): _20.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _20.GetCodecDescriptorResponseAminoMsg): _20.GetCodecDescriptorResponse;
                    toAminoMsg(message: _20.GetCodecDescriptorResponse): _20.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _20.GetCodecDescriptorResponseProtoMsg): _20.GetCodecDescriptorResponse;
                    toProto(message: _20.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _20.GetCodecDescriptorResponse): _20.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _20.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _20.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_20.GetConfigurationDescriptorRequest>): _20.GetConfigurationDescriptorRequest;
                    fromAmino(_: _20.GetConfigurationDescriptorRequestAmino): _20.GetConfigurationDescriptorRequest;
                    toAmino(_: _20.GetConfigurationDescriptorRequest): _20.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _20.GetConfigurationDescriptorRequestAminoMsg): _20.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _20.GetConfigurationDescriptorRequest): _20.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _20.GetConfigurationDescriptorRequestProtoMsg): _20.GetConfigurationDescriptorRequest;
                    toProto(message: _20.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _20.GetConfigurationDescriptorRequest): _20.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _20.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_20.GetConfigurationDescriptorResponse>): _20.GetConfigurationDescriptorResponse;
                    fromAmino(object: _20.GetConfigurationDescriptorResponseAmino): _20.GetConfigurationDescriptorResponse;
                    toAmino(message: _20.GetConfigurationDescriptorResponse): _20.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _20.GetConfigurationDescriptorResponseAminoMsg): _20.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _20.GetConfigurationDescriptorResponse): _20.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _20.GetConfigurationDescriptorResponseProtoMsg): _20.GetConfigurationDescriptorResponse;
                    toProto(message: _20.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _20.GetConfigurationDescriptorResponse): _20.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _20.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _20.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_20.GetQueryServicesDescriptorRequest>): _20.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _20.GetQueryServicesDescriptorRequestAmino): _20.GetQueryServicesDescriptorRequest;
                    toAmino(_: _20.GetQueryServicesDescriptorRequest): _20.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _20.GetQueryServicesDescriptorRequestAminoMsg): _20.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _20.GetQueryServicesDescriptorRequest): _20.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _20.GetQueryServicesDescriptorRequestProtoMsg): _20.GetQueryServicesDescriptorRequest;
                    toProto(message: _20.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _20.GetQueryServicesDescriptorRequest): _20.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _20.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_20.GetQueryServicesDescriptorResponse>): _20.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _20.GetQueryServicesDescriptorResponseAmino): _20.GetQueryServicesDescriptorResponse;
                    toAmino(message: _20.GetQueryServicesDescriptorResponse): _20.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _20.GetQueryServicesDescriptorResponseAminoMsg): _20.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _20.GetQueryServicesDescriptorResponse): _20.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _20.GetQueryServicesDescriptorResponseProtoMsg): _20.GetQueryServicesDescriptorResponse;
                    toProto(message: _20.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _20.GetQueryServicesDescriptorResponse): _20.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _20.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _20.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_20.GetTxDescriptorRequest>): _20.GetTxDescriptorRequest;
                    fromAmino(_: _20.GetTxDescriptorRequestAmino): _20.GetTxDescriptorRequest;
                    toAmino(_: _20.GetTxDescriptorRequest): _20.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _20.GetTxDescriptorRequestAminoMsg): _20.GetTxDescriptorRequest;
                    toAminoMsg(message: _20.GetTxDescriptorRequest): _20.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _20.GetTxDescriptorRequestProtoMsg): _20.GetTxDescriptorRequest;
                    toProto(message: _20.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _20.GetTxDescriptorRequest): _20.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _20.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_20.GetTxDescriptorResponse>): _20.GetTxDescriptorResponse;
                    fromAmino(object: _20.GetTxDescriptorResponseAmino): _20.GetTxDescriptorResponse;
                    toAmino(message: _20.GetTxDescriptorResponse): _20.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _20.GetTxDescriptorResponseAminoMsg): _20.GetTxDescriptorResponse;
                    toAminoMsg(message: _20.GetTxDescriptorResponse): _20.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _20.GetTxDescriptorResponseProtoMsg): _20.GetTxDescriptorResponse;
                    toProto(message: _20.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _20.GetTxDescriptorResponse): _20.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _20.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.QueryServicesDescriptor;
                    fromPartial(object: Partial<_20.QueryServicesDescriptor>): _20.QueryServicesDescriptor;
                    fromAmino(object: _20.QueryServicesDescriptorAmino): _20.QueryServicesDescriptor;
                    toAmino(message: _20.QueryServicesDescriptor): _20.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _20.QueryServicesDescriptorAminoMsg): _20.QueryServicesDescriptor;
                    toAminoMsg(message: _20.QueryServicesDescriptor): _20.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _20.QueryServicesDescriptorProtoMsg): _20.QueryServicesDescriptor;
                    toProto(message: _20.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _20.QueryServicesDescriptor): _20.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _20.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.QueryServiceDescriptor;
                    fromPartial(object: Partial<_20.QueryServiceDescriptor>): _20.QueryServiceDescriptor;
                    fromAmino(object: _20.QueryServiceDescriptorAmino): _20.QueryServiceDescriptor;
                    toAmino(message: _20.QueryServiceDescriptor): _20.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _20.QueryServiceDescriptorAminoMsg): _20.QueryServiceDescriptor;
                    toAminoMsg(message: _20.QueryServiceDescriptor): _20.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _20.QueryServiceDescriptorProtoMsg): _20.QueryServiceDescriptor;
                    toProto(message: _20.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _20.QueryServiceDescriptor): _20.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _20.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.QueryMethodDescriptor;
                    fromPartial(object: Partial<_20.QueryMethodDescriptor>): _20.QueryMethodDescriptor;
                    fromAmino(object: _20.QueryMethodDescriptorAmino): _20.QueryMethodDescriptor;
                    toAmino(message: _20.QueryMethodDescriptor): _20.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _20.QueryMethodDescriptorAminoMsg): _20.QueryMethodDescriptor;
                    toAminoMsg(message: _20.QueryMethodDescriptor): _20.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _20.QueryMethodDescriptorProtoMsg): _20.QueryMethodDescriptor;
                    toProto(message: _20.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _20.QueryMethodDescriptor): _20.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _21.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _21.Snapshot;
                    fromPartial(object: Partial<_21.Snapshot>): _21.Snapshot;
                    fromAmino(object: _21.SnapshotAmino): _21.Snapshot;
                    toAmino(message: _21.Snapshot): _21.SnapshotAmino;
                    fromAminoMsg(object: _21.SnapshotAminoMsg): _21.Snapshot;
                    toAminoMsg(message: _21.Snapshot): _21.SnapshotAminoMsg;
                    fromProtoMsg(message: _21.SnapshotProtoMsg): _21.Snapshot;
                    toProto(message: _21.Snapshot): Uint8Array;
                    toProtoMsg(message: _21.Snapshot): _21.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _21.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _21.Metadata;
                    fromPartial(object: Partial<_21.Metadata>): _21.Metadata;
                    fromAmino(object: _21.MetadataAmino): _21.Metadata;
                    toAmino(message: _21.Metadata): _21.MetadataAmino;
                    fromAminoMsg(object: _21.MetadataAminoMsg): _21.Metadata;
                    toAminoMsg(message: _21.Metadata): _21.MetadataAminoMsg;
                    fromProtoMsg(message: _21.MetadataProtoMsg): _21.Metadata;
                    toProto(message: _21.Metadata): Uint8Array;
                    toProtoMsg(message: _21.Metadata): _21.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _21.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _21.SnapshotItem;
                    fromPartial(object: Partial<_21.SnapshotItem>): _21.SnapshotItem;
                    fromAmino(object: _21.SnapshotItemAmino): _21.SnapshotItem;
                    toAmino(message: _21.SnapshotItem): _21.SnapshotItemAmino;
                    fromAminoMsg(object: _21.SnapshotItemAminoMsg): _21.SnapshotItem;
                    toAminoMsg(message: _21.SnapshotItem): _21.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _21.SnapshotItemProtoMsg): _21.SnapshotItem;
                    toProto(message: _21.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _21.SnapshotItem): _21.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _21.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _21.SnapshotStoreItem;
                    fromPartial(object: Partial<_21.SnapshotStoreItem>): _21.SnapshotStoreItem;
                    fromAmino(object: _21.SnapshotStoreItemAmino): _21.SnapshotStoreItem;
                    toAmino(message: _21.SnapshotStoreItem): _21.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _21.SnapshotStoreItemAminoMsg): _21.SnapshotStoreItem;
                    toAminoMsg(message: _21.SnapshotStoreItem): _21.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _21.SnapshotStoreItemProtoMsg): _21.SnapshotStoreItem;
                    toProto(message: _21.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _21.SnapshotStoreItem): _21.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _21.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _21.SnapshotIAVLItem;
                    fromPartial(object: Partial<_21.SnapshotIAVLItem>): _21.SnapshotIAVLItem;
                    fromAmino(object: _21.SnapshotIAVLItemAmino): _21.SnapshotIAVLItem;
                    toAmino(message: _21.SnapshotIAVLItem): _21.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _21.SnapshotIAVLItemAminoMsg): _21.SnapshotIAVLItem;
                    toAminoMsg(message: _21.SnapshotIAVLItem): _21.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _21.SnapshotIAVLItemProtoMsg): _21.SnapshotIAVLItem;
                    toProto(message: _21.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _21.SnapshotIAVLItem): _21.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _21.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _21.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_21.SnapshotExtensionMeta>): _21.SnapshotExtensionMeta;
                    fromAmino(object: _21.SnapshotExtensionMetaAmino): _21.SnapshotExtensionMeta;
                    toAmino(message: _21.SnapshotExtensionMeta): _21.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _21.SnapshotExtensionMetaAminoMsg): _21.SnapshotExtensionMeta;
                    toAminoMsg(message: _21.SnapshotExtensionMeta): _21.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _21.SnapshotExtensionMetaProtoMsg): _21.SnapshotExtensionMeta;
                    toProto(message: _21.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _21.SnapshotExtensionMeta): _21.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _21.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _21.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_21.SnapshotExtensionPayload>): _21.SnapshotExtensionPayload;
                    fromAmino(object: _21.SnapshotExtensionPayloadAmino): _21.SnapshotExtensionPayload;
                    toAmino(message: _21.SnapshotExtensionPayload): _21.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _21.SnapshotExtensionPayloadAminoMsg): _21.SnapshotExtensionPayload;
                    toAminoMsg(message: _21.SnapshotExtensionPayload): _21.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _21.SnapshotExtensionPayloadProtoMsg): _21.SnapshotExtensionPayload;
                    toProto(message: _21.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _21.SnapshotExtensionPayload): _21.SnapshotExtensionPayloadProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _23.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.StoreKVPair;
                    fromPartial(object: Partial<_23.StoreKVPair>): _23.StoreKVPair;
                    fromAmino(object: _23.StoreKVPairAmino): _23.StoreKVPair;
                    toAmino(message: _23.StoreKVPair): _23.StoreKVPairAmino;
                    fromAminoMsg(object: _23.StoreKVPairAminoMsg): _23.StoreKVPair;
                    toAminoMsg(message: _23.StoreKVPair): _23.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _23.StoreKVPairProtoMsg): _23.StoreKVPair;
                    toProto(message: _23.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _23.StoreKVPair): _23.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _23.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.BlockMetadata;
                    fromPartial(object: Partial<_23.BlockMetadata>): _23.BlockMetadata;
                    fromAmino(object: _23.BlockMetadataAmino): _23.BlockMetadata;
                    toAmino(message: _23.BlockMetadata): _23.BlockMetadataAmino;
                    fromAminoMsg(object: _23.BlockMetadataAminoMsg): _23.BlockMetadata;
                    toAminoMsg(message: _23.BlockMetadata): _23.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _23.BlockMetadataProtoMsg): _23.BlockMetadata;
                    toProto(message: _23.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _23.BlockMetadata): _23.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _23.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_23.BlockMetadata_DeliverTx>): _23.BlockMetadata_DeliverTx;
                    fromAmino(object: _23.BlockMetadata_DeliverTxAmino): _23.BlockMetadata_DeliverTx;
                    toAmino(message: _23.BlockMetadata_DeliverTx): _23.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _23.BlockMetadata_DeliverTxAminoMsg): _23.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _23.BlockMetadata_DeliverTx): _23.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _23.BlockMetadata_DeliverTxProtoMsg): _23.BlockMetadata_DeliverTx;
                    toProto(message: _23.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _23.BlockMetadata_DeliverTx): _23.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _22.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.CommitInfo;
                    fromPartial(object: Partial<_22.CommitInfo>): _22.CommitInfo;
                    fromAmino(object: _22.CommitInfoAmino): _22.CommitInfo;
                    toAmino(message: _22.CommitInfo): _22.CommitInfoAmino;
                    fromAminoMsg(object: _22.CommitInfoAminoMsg): _22.CommitInfo;
                    toAminoMsg(message: _22.CommitInfo): _22.CommitInfoAminoMsg;
                    fromProtoMsg(message: _22.CommitInfoProtoMsg): _22.CommitInfo;
                    toProto(message: _22.CommitInfo): Uint8Array;
                    toProtoMsg(message: _22.CommitInfo): _22.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _22.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.StoreInfo;
                    fromPartial(object: Partial<_22.StoreInfo>): _22.StoreInfo;
                    fromAmino(object: _22.StoreInfoAmino): _22.StoreInfo;
                    toAmino(message: _22.StoreInfo): _22.StoreInfoAmino;
                    fromAminoMsg(object: _22.StoreInfoAminoMsg): _22.StoreInfo;
                    toAminoMsg(message: _22.StoreInfo): _22.StoreInfoAminoMsg;
                    fromProtoMsg(message: _22.StoreInfoProtoMsg): _22.StoreInfo;
                    toProto(message: _22.StoreInfo): Uint8Array;
                    toProtoMsg(message: _22.StoreInfo): _22.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _22.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.CommitID;
                    fromPartial(object: Partial<_22.CommitID>): _22.CommitID;
                    fromAmino(object: _22.CommitIDAmino): _22.CommitID;
                    toAmino(message: _22.CommitID): _22.CommitIDAmino;
                    fromAminoMsg(object: _22.CommitIDAminoMsg): _22.CommitID;
                    toAminoMsg(message: _22.CommitID): _22.CommitIDAminoMsg;
                    fromProtoMsg(message: _22.CommitIDProtoMsg): _22.CommitID;
                    toProto(message: _22.CommitID): Uint8Array;
                    toProtoMsg(message: _22.CommitID): _22.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _164.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _24.GetNodeInfoRequest): Promise<_24.GetNodeInfoResponse>;
                    getSyncing(request?: _24.GetSyncingRequest): Promise<_24.GetSyncingResponse>;
                    getLatestBlock(request?: _24.GetLatestBlockRequest): Promise<_24.GetLatestBlockResponse>;
                    getBlockByHeight(request: _24.GetBlockByHeightRequest): Promise<_24.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _24.GetLatestValidatorSetRequest): Promise<_24.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _24.GetValidatorSetByHeightRequest): Promise<_24.GetValidatorSetByHeightResponse>;
                };
                LCDQueryClient: typeof _149.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _24.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_24.GetValidatorSetByHeightRequest>): _24.GetValidatorSetByHeightRequest;
                    fromAmino(object: _24.GetValidatorSetByHeightRequestAmino): _24.GetValidatorSetByHeightRequest;
                    toAmino(message: _24.GetValidatorSetByHeightRequest): _24.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _24.GetValidatorSetByHeightRequestAminoMsg): _24.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _24.GetValidatorSetByHeightRequest): _24.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _24.GetValidatorSetByHeightRequestProtoMsg): _24.GetValidatorSetByHeightRequest;
                    toProto(message: _24.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _24.GetValidatorSetByHeightRequest): _24.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _24.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_24.GetValidatorSetByHeightResponse>): _24.GetValidatorSetByHeightResponse;
                    fromAmino(object: _24.GetValidatorSetByHeightResponseAmino): _24.GetValidatorSetByHeightResponse;
                    toAmino(message: _24.GetValidatorSetByHeightResponse): _24.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _24.GetValidatorSetByHeightResponseAminoMsg): _24.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _24.GetValidatorSetByHeightResponse): _24.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _24.GetValidatorSetByHeightResponseProtoMsg): _24.GetValidatorSetByHeightResponse;
                    toProto(message: _24.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _24.GetValidatorSetByHeightResponse): _24.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _24.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_24.GetLatestValidatorSetRequest>): _24.GetLatestValidatorSetRequest;
                    fromAmino(object: _24.GetLatestValidatorSetRequestAmino): _24.GetLatestValidatorSetRequest;
                    toAmino(message: _24.GetLatestValidatorSetRequest): _24.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _24.GetLatestValidatorSetRequestAminoMsg): _24.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _24.GetLatestValidatorSetRequest): _24.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _24.GetLatestValidatorSetRequestProtoMsg): _24.GetLatestValidatorSetRequest;
                    toProto(message: _24.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _24.GetLatestValidatorSetRequest): _24.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _24.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_24.GetLatestValidatorSetResponse>): _24.GetLatestValidatorSetResponse;
                    fromAmino(object: _24.GetLatestValidatorSetResponseAmino): _24.GetLatestValidatorSetResponse;
                    toAmino(message: _24.GetLatestValidatorSetResponse): _24.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _24.GetLatestValidatorSetResponseAminoMsg): _24.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _24.GetLatestValidatorSetResponse): _24.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _24.GetLatestValidatorSetResponseProtoMsg): _24.GetLatestValidatorSetResponse;
                    toProto(message: _24.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _24.GetLatestValidatorSetResponse): _24.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _24.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.Validator;
                    fromPartial(object: Partial<_24.Validator>): _24.Validator;
                    fromAmino(object: _24.ValidatorAmino): _24.Validator;
                    toAmino(message: _24.Validator): _24.ValidatorAmino;
                    fromAminoMsg(object: _24.ValidatorAminoMsg): _24.Validator;
                    toAminoMsg(message: _24.Validator): _24.ValidatorAminoMsg;
                    fromProtoMsg(message: _24.ValidatorProtoMsg): _24.Validator;
                    toProto(message: _24.Validator): Uint8Array;
                    toProtoMsg(message: _24.Validator): _24.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _24.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_24.GetBlockByHeightRequest>): _24.GetBlockByHeightRequest;
                    fromAmino(object: _24.GetBlockByHeightRequestAmino): _24.GetBlockByHeightRequest;
                    toAmino(message: _24.GetBlockByHeightRequest): _24.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _24.GetBlockByHeightRequestAminoMsg): _24.GetBlockByHeightRequest;
                    toAminoMsg(message: _24.GetBlockByHeightRequest): _24.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _24.GetBlockByHeightRequestProtoMsg): _24.GetBlockByHeightRequest;
                    toProto(message: _24.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _24.GetBlockByHeightRequest): _24.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _24.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_24.GetBlockByHeightResponse>): _24.GetBlockByHeightResponse;
                    fromAmino(object: _24.GetBlockByHeightResponseAmino): _24.GetBlockByHeightResponse;
                    toAmino(message: _24.GetBlockByHeightResponse): _24.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _24.GetBlockByHeightResponseAminoMsg): _24.GetBlockByHeightResponse;
                    toAminoMsg(message: _24.GetBlockByHeightResponse): _24.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _24.GetBlockByHeightResponseProtoMsg): _24.GetBlockByHeightResponse;
                    toProto(message: _24.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _24.GetBlockByHeightResponse): _24.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _24.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _24.GetLatestBlockRequest;
                    fromPartial(_: Partial<_24.GetLatestBlockRequest>): _24.GetLatestBlockRequest;
                    fromAmino(_: _24.GetLatestBlockRequestAmino): _24.GetLatestBlockRequest;
                    toAmino(_: _24.GetLatestBlockRequest): _24.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _24.GetLatestBlockRequestAminoMsg): _24.GetLatestBlockRequest;
                    toAminoMsg(message: _24.GetLatestBlockRequest): _24.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _24.GetLatestBlockRequestProtoMsg): _24.GetLatestBlockRequest;
                    toProto(message: _24.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _24.GetLatestBlockRequest): _24.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _24.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.GetLatestBlockResponse;
                    fromPartial(object: Partial<_24.GetLatestBlockResponse>): _24.GetLatestBlockResponse;
                    fromAmino(object: _24.GetLatestBlockResponseAmino): _24.GetLatestBlockResponse;
                    toAmino(message: _24.GetLatestBlockResponse): _24.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _24.GetLatestBlockResponseAminoMsg): _24.GetLatestBlockResponse;
                    toAminoMsg(message: _24.GetLatestBlockResponse): _24.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _24.GetLatestBlockResponseProtoMsg): _24.GetLatestBlockResponse;
                    toProto(message: _24.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _24.GetLatestBlockResponse): _24.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _24.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _24.GetSyncingRequest;
                    fromPartial(_: Partial<_24.GetSyncingRequest>): _24.GetSyncingRequest;
                    fromAmino(_: _24.GetSyncingRequestAmino): _24.GetSyncingRequest;
                    toAmino(_: _24.GetSyncingRequest): _24.GetSyncingRequestAmino;
                    fromAminoMsg(object: _24.GetSyncingRequestAminoMsg): _24.GetSyncingRequest;
                    toAminoMsg(message: _24.GetSyncingRequest): _24.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _24.GetSyncingRequestProtoMsg): _24.GetSyncingRequest;
                    toProto(message: _24.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _24.GetSyncingRequest): _24.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _24.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.GetSyncingResponse;
                    fromPartial(object: Partial<_24.GetSyncingResponse>): _24.GetSyncingResponse;
                    fromAmino(object: _24.GetSyncingResponseAmino): _24.GetSyncingResponse;
                    toAmino(message: _24.GetSyncingResponse): _24.GetSyncingResponseAmino;
                    fromAminoMsg(object: _24.GetSyncingResponseAminoMsg): _24.GetSyncingResponse;
                    toAminoMsg(message: _24.GetSyncingResponse): _24.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _24.GetSyncingResponseProtoMsg): _24.GetSyncingResponse;
                    toProto(message: _24.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _24.GetSyncingResponse): _24.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _24.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _24.GetNodeInfoRequest;
                    fromPartial(_: Partial<_24.GetNodeInfoRequest>): _24.GetNodeInfoRequest;
                    fromAmino(_: _24.GetNodeInfoRequestAmino): _24.GetNodeInfoRequest;
                    toAmino(_: _24.GetNodeInfoRequest): _24.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _24.GetNodeInfoRequestAminoMsg): _24.GetNodeInfoRequest;
                    toAminoMsg(message: _24.GetNodeInfoRequest): _24.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _24.GetNodeInfoRequestProtoMsg): _24.GetNodeInfoRequest;
                    toProto(message: _24.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _24.GetNodeInfoRequest): _24.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _24.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.GetNodeInfoResponse;
                    fromPartial(object: Partial<_24.GetNodeInfoResponse>): _24.GetNodeInfoResponse;
                    fromAmino(object: _24.GetNodeInfoResponseAmino): _24.GetNodeInfoResponse;
                    toAmino(message: _24.GetNodeInfoResponse): _24.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _24.GetNodeInfoResponseAminoMsg): _24.GetNodeInfoResponse;
                    toAminoMsg(message: _24.GetNodeInfoResponse): _24.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _24.GetNodeInfoResponseProtoMsg): _24.GetNodeInfoResponse;
                    toProto(message: _24.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _24.GetNodeInfoResponse): _24.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _24.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.VersionInfo;
                    fromPartial(object: Partial<_24.VersionInfo>): _24.VersionInfo;
                    fromAmino(object: _24.VersionInfoAmino): _24.VersionInfo;
                    toAmino(message: _24.VersionInfo): _24.VersionInfoAmino;
                    fromAminoMsg(object: _24.VersionInfoAminoMsg): _24.VersionInfo;
                    toAminoMsg(message: _24.VersionInfo): _24.VersionInfoAminoMsg;
                    fromProtoMsg(message: _24.VersionInfoProtoMsg): _24.VersionInfo;
                    toProto(message: _24.VersionInfo): Uint8Array;
                    toProtoMsg(message: _24.VersionInfo): _24.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _24.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.Module;
                    fromPartial(object: Partial<_24.Module>): _24.Module;
                    fromAmino(object: _24.ModuleAmino): _24.Module;
                    toAmino(message: _24.Module): _24.ModuleAmino;
                    fromAminoMsg(object: _24.ModuleAminoMsg): _24.Module;
                    toAminoMsg(message: _24.Module): _24.ModuleAminoMsg;
                    fromProtoMsg(message: _24.ModuleProtoMsg): _24.Module;
                    toProto(message: _24.Module): Uint8Array;
                    toProtoMsg(message: _24.Module): _24.ModuleProtoMsg;
                };
            };
        }
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _174.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _26.QueryCurrentPlanRequest): Promise<_26.QueryCurrentPlanResponse>;
                appliedPlan(request: _26.QueryAppliedPlanRequest): Promise<_26.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _26.QueryUpgradedConsensusStateRequest): Promise<_26.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _26.QueryModuleVersionsRequest): Promise<_26.QueryModuleVersionsResponse>;
            };
            LCDQueryClient: typeof _159.LCDQueryClient;
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _26.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _26.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_26.QueryCurrentPlanRequest>): _26.QueryCurrentPlanRequest;
                fromAmino(_: _26.QueryCurrentPlanRequestAmino): _26.QueryCurrentPlanRequest;
                toAmino(_: _26.QueryCurrentPlanRequest): _26.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _26.QueryCurrentPlanRequestAminoMsg): _26.QueryCurrentPlanRequest;
                toAminoMsg(message: _26.QueryCurrentPlanRequest): _26.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _26.QueryCurrentPlanRequestProtoMsg): _26.QueryCurrentPlanRequest;
                toProto(message: _26.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _26.QueryCurrentPlanRequest): _26.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _26.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_26.QueryCurrentPlanResponse>): _26.QueryCurrentPlanResponse;
                fromAmino(object: _26.QueryCurrentPlanResponseAmino): _26.QueryCurrentPlanResponse;
                toAmino(message: _26.QueryCurrentPlanResponse): _26.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _26.QueryCurrentPlanResponseAminoMsg): _26.QueryCurrentPlanResponse;
                toAminoMsg(message: _26.QueryCurrentPlanResponse): _26.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _26.QueryCurrentPlanResponseProtoMsg): _26.QueryCurrentPlanResponse;
                toProto(message: _26.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _26.QueryCurrentPlanResponse): _26.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _26.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_26.QueryAppliedPlanRequest>): _26.QueryAppliedPlanRequest;
                fromAmino(object: _26.QueryAppliedPlanRequestAmino): _26.QueryAppliedPlanRequest;
                toAmino(message: _26.QueryAppliedPlanRequest): _26.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _26.QueryAppliedPlanRequestAminoMsg): _26.QueryAppliedPlanRequest;
                toAminoMsg(message: _26.QueryAppliedPlanRequest): _26.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _26.QueryAppliedPlanRequestProtoMsg): _26.QueryAppliedPlanRequest;
                toProto(message: _26.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _26.QueryAppliedPlanRequest): _26.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _26.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_26.QueryAppliedPlanResponse>): _26.QueryAppliedPlanResponse;
                fromAmino(object: _26.QueryAppliedPlanResponseAmino): _26.QueryAppliedPlanResponse;
                toAmino(message: _26.QueryAppliedPlanResponse): _26.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _26.QueryAppliedPlanResponseAminoMsg): _26.QueryAppliedPlanResponse;
                toAminoMsg(message: _26.QueryAppliedPlanResponse): _26.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _26.QueryAppliedPlanResponseProtoMsg): _26.QueryAppliedPlanResponse;
                toProto(message: _26.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _26.QueryAppliedPlanResponse): _26.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _26.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_26.QueryUpgradedConsensusStateRequest>): _26.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _26.QueryUpgradedConsensusStateRequestAmino): _26.QueryUpgradedConsensusStateRequest;
                toAmino(message: _26.QueryUpgradedConsensusStateRequest): _26.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _26.QueryUpgradedConsensusStateRequestAminoMsg): _26.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _26.QueryUpgradedConsensusStateRequest): _26.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _26.QueryUpgradedConsensusStateRequestProtoMsg): _26.QueryUpgradedConsensusStateRequest;
                toProto(message: _26.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _26.QueryUpgradedConsensusStateRequest): _26.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _26.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_26.QueryUpgradedConsensusStateResponse>): _26.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _26.QueryUpgradedConsensusStateResponseAmino): _26.QueryUpgradedConsensusStateResponse;
                toAmino(message: _26.QueryUpgradedConsensusStateResponse): _26.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _26.QueryUpgradedConsensusStateResponseAminoMsg): _26.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _26.QueryUpgradedConsensusStateResponse): _26.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _26.QueryUpgradedConsensusStateResponseProtoMsg): _26.QueryUpgradedConsensusStateResponse;
                toProto(message: _26.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _26.QueryUpgradedConsensusStateResponse): _26.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _26.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_26.QueryModuleVersionsRequest>): _26.QueryModuleVersionsRequest;
                fromAmino(object: _26.QueryModuleVersionsRequestAmino): _26.QueryModuleVersionsRequest;
                toAmino(message: _26.QueryModuleVersionsRequest): _26.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _26.QueryModuleVersionsRequestAminoMsg): _26.QueryModuleVersionsRequest;
                toAminoMsg(message: _26.QueryModuleVersionsRequest): _26.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _26.QueryModuleVersionsRequestProtoMsg): _26.QueryModuleVersionsRequest;
                toProto(message: _26.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _26.QueryModuleVersionsRequest): _26.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _26.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_26.QueryModuleVersionsResponse>): _26.QueryModuleVersionsResponse;
                fromAmino(object: _26.QueryModuleVersionsResponseAmino): _26.QueryModuleVersionsResponse;
                toAmino(message: _26.QueryModuleVersionsResponse): _26.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _26.QueryModuleVersionsResponseAminoMsg): _26.QueryModuleVersionsResponse;
                toAminoMsg(message: _26.QueryModuleVersionsResponse): _26.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _26.QueryModuleVersionsResponseProtoMsg): _26.QueryModuleVersionsResponse;
                toProto(message: _26.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _26.QueryModuleVersionsResponse): _26.QueryModuleVersionsResponseProtoMsg;
            };
            Plan: {
                typeUrl: string;
                encode(message: _25.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.Plan;
                fromPartial(object: Partial<_25.Plan>): _25.Plan;
                fromAmino(object: _25.PlanAmino): _25.Plan;
                toAmino(message: _25.Plan): _25.PlanAmino;
                fromAminoMsg(object: _25.PlanAminoMsg): _25.Plan;
                toAminoMsg(message: _25.Plan): _25.PlanAminoMsg;
                fromProtoMsg(message: _25.PlanProtoMsg): _25.Plan;
                toProto(message: _25.Plan): Uint8Array;
                toProtoMsg(message: _25.Plan): _25.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _25.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_25.SoftwareUpgradeProposal>): _25.SoftwareUpgradeProposal;
                fromAmino(object: _25.SoftwareUpgradeProposalAmino): _25.SoftwareUpgradeProposal;
                toAmino(message: _25.SoftwareUpgradeProposal): _25.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _25.SoftwareUpgradeProposalAminoMsg): _25.SoftwareUpgradeProposal;
                toAminoMsg(message: _25.SoftwareUpgradeProposal): _25.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _25.SoftwareUpgradeProposalProtoMsg): _25.SoftwareUpgradeProposal;
                toProto(message: _25.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _25.SoftwareUpgradeProposal): _25.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _25.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_25.CancelSoftwareUpgradeProposal>): _25.CancelSoftwareUpgradeProposal;
                fromAmino(object: _25.CancelSoftwareUpgradeProposalAmino): _25.CancelSoftwareUpgradeProposal;
                toAmino(message: _25.CancelSoftwareUpgradeProposal): _25.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _25.CancelSoftwareUpgradeProposalAminoMsg): _25.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _25.CancelSoftwareUpgradeProposal): _25.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _25.CancelSoftwareUpgradeProposalProtoMsg): _25.CancelSoftwareUpgradeProposal;
                toProto(message: _25.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _25.CancelSoftwareUpgradeProposal): _25.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _25.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.ModuleVersion;
                fromPartial(object: Partial<_25.ModuleVersion>): _25.ModuleVersion;
                fromAmino(object: _25.ModuleVersionAmino): _25.ModuleVersion;
                toAmino(message: _25.ModuleVersion): _25.ModuleVersionAmino;
                fromAminoMsg(object: _25.ModuleVersionAminoMsg): _25.ModuleVersion;
                toAminoMsg(message: _25.ModuleVersion): _25.ModuleVersionAminoMsg;
                fromProtoMsg(message: _25.ModuleVersionProtoMsg): _25.ModuleVersion;
                toProto(message: _25.ModuleVersion): Uint8Array;
                toProtoMsg(message: _25.ModuleVersion): _25.ModuleVersionProtoMsg;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _160.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _29.QueryAccountsRequest): Promise<_29.QueryAccountsResponse>;
                account(request: _29.QueryAccountRequest): Promise<_29.QueryAccountResponse>;
                params(request?: _29.QueryParamsRequest): Promise<_29.QueryParamsResponse>;
                moduleAccountByName(request: _29.QueryModuleAccountByNameRequest): Promise<_29.QueryModuleAccountByNameResponse>;
            };
            LCDQueryClient: typeof _145.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _29.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryAccountsRequest;
                fromPartial(object: Partial<_29.QueryAccountsRequest>): _29.QueryAccountsRequest;
                fromAmino(object: _29.QueryAccountsRequestAmino): _29.QueryAccountsRequest;
                toAmino(message: _29.QueryAccountsRequest): _29.QueryAccountsRequestAmino;
                fromAminoMsg(object: _29.QueryAccountsRequestAminoMsg): _29.QueryAccountsRequest;
                toAminoMsg(message: _29.QueryAccountsRequest): _29.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _29.QueryAccountsRequestProtoMsg): _29.QueryAccountsRequest;
                toProto(message: _29.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _29.QueryAccountsRequest): _29.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _29.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryAccountsResponse;
                fromPartial(object: Partial<_29.QueryAccountsResponse>): _29.QueryAccountsResponse;
                fromAmino(object: _29.QueryAccountsResponseAmino): _29.QueryAccountsResponse;
                toAmino(message: _29.QueryAccountsResponse): _29.QueryAccountsResponseAmino;
                fromAminoMsg(object: _29.QueryAccountsResponseAminoMsg): _29.QueryAccountsResponse;
                toAminoMsg(message: _29.QueryAccountsResponse): _29.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _29.QueryAccountsResponseProtoMsg): _29.QueryAccountsResponse;
                toProto(message: _29.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _29.QueryAccountsResponse): _29.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _29.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryAccountRequest;
                fromPartial(object: Partial<_29.QueryAccountRequest>): _29.QueryAccountRequest;
                fromAmino(object: _29.QueryAccountRequestAmino): _29.QueryAccountRequest;
                toAmino(message: _29.QueryAccountRequest): _29.QueryAccountRequestAmino;
                fromAminoMsg(object: _29.QueryAccountRequestAminoMsg): _29.QueryAccountRequest;
                toAminoMsg(message: _29.QueryAccountRequest): _29.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _29.QueryAccountRequestProtoMsg): _29.QueryAccountRequest;
                toProto(message: _29.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _29.QueryAccountRequest): _29.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _29.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryAccountResponse;
                fromPartial(object: Partial<_29.QueryAccountResponse>): _29.QueryAccountResponse;
                fromAmino(object: _29.QueryAccountResponseAmino): _29.QueryAccountResponse;
                toAmino(message: _29.QueryAccountResponse): _29.QueryAccountResponseAmino;
                fromAminoMsg(object: _29.QueryAccountResponseAminoMsg): _29.QueryAccountResponse;
                toAminoMsg(message: _29.QueryAccountResponse): _29.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _29.QueryAccountResponseProtoMsg): _29.QueryAccountResponse;
                toProto(message: _29.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _29.QueryAccountResponse): _29.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _29.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _29.QueryParamsRequest;
                fromPartial(_: Partial<_29.QueryParamsRequest>): _29.QueryParamsRequest;
                fromAmino(_: _29.QueryParamsRequestAmino): _29.QueryParamsRequest;
                toAmino(_: _29.QueryParamsRequest): _29.QueryParamsRequestAmino;
                fromAminoMsg(object: _29.QueryParamsRequestAminoMsg): _29.QueryParamsRequest;
                toAminoMsg(message: _29.QueryParamsRequest): _29.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _29.QueryParamsRequestProtoMsg): _29.QueryParamsRequest;
                toProto(message: _29.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _29.QueryParamsRequest): _29.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _29.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryParamsResponse;
                fromPartial(object: Partial<_29.QueryParamsResponse>): _29.QueryParamsResponse;
                fromAmino(object: _29.QueryParamsResponseAmino): _29.QueryParamsResponse;
                toAmino(message: _29.QueryParamsResponse): _29.QueryParamsResponseAmino;
                fromAminoMsg(object: _29.QueryParamsResponseAminoMsg): _29.QueryParamsResponse;
                toAminoMsg(message: _29.QueryParamsResponse): _29.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _29.QueryParamsResponseProtoMsg): _29.QueryParamsResponse;
                toProto(message: _29.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _29.QueryParamsResponse): _29.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _29.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_29.QueryModuleAccountByNameRequest>): _29.QueryModuleAccountByNameRequest;
                fromAmino(object: _29.QueryModuleAccountByNameRequestAmino): _29.QueryModuleAccountByNameRequest;
                toAmino(message: _29.QueryModuleAccountByNameRequest): _29.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _29.QueryModuleAccountByNameRequestAminoMsg): _29.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _29.QueryModuleAccountByNameRequest): _29.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _29.QueryModuleAccountByNameRequestProtoMsg): _29.QueryModuleAccountByNameRequest;
                toProto(message: _29.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _29.QueryModuleAccountByNameRequest): _29.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _29.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_29.QueryModuleAccountByNameResponse>): _29.QueryModuleAccountByNameResponse;
                fromAmino(object: _29.QueryModuleAccountByNameResponseAmino): _29.QueryModuleAccountByNameResponse;
                toAmino(message: _29.QueryModuleAccountByNameResponse): _29.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _29.QueryModuleAccountByNameResponseAminoMsg): _29.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _29.QueryModuleAccountByNameResponse): _29.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _29.QueryModuleAccountByNameResponseProtoMsg): _29.QueryModuleAccountByNameResponse;
                toProto(message: _29.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _29.QueryModuleAccountByNameResponse): _29.QueryModuleAccountByNameResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _27.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _27.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _28.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.GenesisState;
                fromPartial(object: Partial<_28.GenesisState>): _28.GenesisState;
                fromAmino(object: _28.GenesisStateAmino): _28.GenesisState;
                toAmino(message: _28.GenesisState): _28.GenesisStateAmino;
                fromAminoMsg(object: _28.GenesisStateAminoMsg): _28.GenesisState;
                toAminoMsg(message: _28.GenesisState): _28.GenesisStateAminoMsg;
                fromProtoMsg(message: _28.GenesisStateProtoMsg): _28.GenesisState;
                toProto(message: _28.GenesisState): Uint8Array;
                toProtoMsg(message: _28.GenesisState): _28.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _27.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.BaseAccount;
                fromPartial(object: Partial<_27.BaseAccount>): _27.BaseAccount;
                fromAmino(object: _27.BaseAccountAmino): _27.BaseAccount;
                toAmino(message: _27.BaseAccount): _27.BaseAccountAmino;
                fromAminoMsg(object: _27.BaseAccountAminoMsg): _27.BaseAccount;
                toAminoMsg(message: _27.BaseAccount): _27.BaseAccountAminoMsg;
                fromProtoMsg(message: _27.BaseAccountProtoMsg): _27.BaseAccount;
                toProto(message: _27.BaseAccount): Uint8Array;
                toProtoMsg(message: _27.BaseAccount): _27.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _27.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.ModuleAccount;
                fromPartial(object: Partial<_27.ModuleAccount>): _27.ModuleAccount;
                fromAmino(object: _27.ModuleAccountAmino): _27.ModuleAccount;
                toAmino(message: _27.ModuleAccount): _27.ModuleAccountAmino;
                fromAminoMsg(object: _27.ModuleAccountAminoMsg): _27.ModuleAccount;
                toAminoMsg(message: _27.ModuleAccount): _27.ModuleAccountAminoMsg;
                fromProtoMsg(message: _27.ModuleAccountProtoMsg): _27.ModuleAccount;
                toProto(message: _27.ModuleAccount): Uint8Array;
                toProtoMsg(message: _27.ModuleAccount): _27.ModuleAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _27.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.Params;
                fromPartial(object: Partial<_27.Params>): _27.Params;
                fromAmino(object: _27.ParamsAmino): _27.Params;
                toAmino(message: _27.Params): _27.ParamsAmino;
                fromAminoMsg(object: _27.ParamsAminoMsg): _27.Params;
                toAminoMsg(message: _27.Params): _27.ParamsAminoMsg;
                fromProtoMsg(message: _27.ParamsProtoMsg): _27.Params;
                toProto(message: _27.Params): Uint8Array;
                toProtoMsg(message: _27.Params): _27.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _175.MsgClientImpl;
            QueryClientImpl: typeof _161.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _33.QueryGrantsRequest): Promise<_33.QueryGrantsResponse>;
                granterGrants(request: _33.QueryGranterGrantsRequest): Promise<_33.QueryGranterGrantsResponse>;
                granteeGrants(request: _33.QueryGranteeGrantsRequest): Promise<_33.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _146.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _34.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _34.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _34.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _34.MsgGrant): {
                        typeUrl: string;
                        value: _34.MsgGrant;
                    };
                    exec(value: _34.MsgExec): {
                        typeUrl: string;
                        value: _34.MsgExec;
                    };
                    revoke(value: _34.MsgRevoke): {
                        typeUrl: string;
                        value: _34.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _34.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _34.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _34.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _34.MsgGrant): {
                        typeUrl: string;
                        value: _34.MsgGrant;
                    };
                    exec(value: _34.MsgExec): {
                        typeUrl: string;
                        value: _34.MsgExec;
                    };
                    revoke(value: _34.MsgRevoke): {
                        typeUrl: string;
                        value: _34.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _34.MsgGrant) => _34.MsgGrantAmino;
                    fromAmino: (object: _34.MsgGrantAmino) => _34.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _34.MsgExec) => _34.MsgExecAmino;
                    fromAmino: (object: _34.MsgExecAmino) => _34.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _34.MsgRevoke) => _34.MsgRevokeAmino;
                    fromAmino: (object: _34.MsgRevokeAmino) => _34.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _34.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.MsgGrant;
                fromPartial(object: Partial<_34.MsgGrant>): _34.MsgGrant;
                fromAmino(object: _34.MsgGrantAmino): _34.MsgGrant;
                toAmino(message: _34.MsgGrant): _34.MsgGrantAmino;
                fromAminoMsg(object: _34.MsgGrantAminoMsg): _34.MsgGrant;
                toAminoMsg(message: _34.MsgGrant): _34.MsgGrantAminoMsg;
                fromProtoMsg(message: _34.MsgGrantProtoMsg): _34.MsgGrant;
                toProto(message: _34.MsgGrant): Uint8Array;
                toProtoMsg(message: _34.MsgGrant): _34.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _34.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.MsgExecResponse;
                fromPartial(object: Partial<_34.MsgExecResponse>): _34.MsgExecResponse;
                fromAmino(object: _34.MsgExecResponseAmino): _34.MsgExecResponse;
                toAmino(message: _34.MsgExecResponse): _34.MsgExecResponseAmino;
                fromAminoMsg(object: _34.MsgExecResponseAminoMsg): _34.MsgExecResponse;
                toAminoMsg(message: _34.MsgExecResponse): _34.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _34.MsgExecResponseProtoMsg): _34.MsgExecResponse;
                toProto(message: _34.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _34.MsgExecResponse): _34.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _34.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.MsgExec;
                fromPartial(object: Partial<_34.MsgExec>): _34.MsgExec;
                fromAmino(object: _34.MsgExecAmino): _34.MsgExec;
                toAmino(message: _34.MsgExec): _34.MsgExecAmino;
                fromAminoMsg(object: _34.MsgExecAminoMsg): _34.MsgExec;
                toAminoMsg(message: _34.MsgExec): _34.MsgExecAminoMsg;
                fromProtoMsg(message: _34.MsgExecProtoMsg): _34.MsgExec;
                toProto(message: _34.MsgExec): Uint8Array;
                toProtoMsg(message: _34.MsgExec): _34.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _34.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _34.MsgGrantResponse;
                fromPartial(_: Partial<_34.MsgGrantResponse>): _34.MsgGrantResponse;
                fromAmino(_: _34.MsgGrantResponseAmino): _34.MsgGrantResponse;
                toAmino(_: _34.MsgGrantResponse): _34.MsgGrantResponseAmino;
                fromAminoMsg(object: _34.MsgGrantResponseAminoMsg): _34.MsgGrantResponse;
                toAminoMsg(message: _34.MsgGrantResponse): _34.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _34.MsgGrantResponseProtoMsg): _34.MsgGrantResponse;
                toProto(message: _34.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _34.MsgGrantResponse): _34.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _34.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.MsgRevoke;
                fromPartial(object: Partial<_34.MsgRevoke>): _34.MsgRevoke;
                fromAmino(object: _34.MsgRevokeAmino): _34.MsgRevoke;
                toAmino(message: _34.MsgRevoke): _34.MsgRevokeAmino;
                fromAminoMsg(object: _34.MsgRevokeAminoMsg): _34.MsgRevoke;
                toAminoMsg(message: _34.MsgRevoke): _34.MsgRevokeAminoMsg;
                fromProtoMsg(message: _34.MsgRevokeProtoMsg): _34.MsgRevoke;
                toProto(message: _34.MsgRevoke): Uint8Array;
                toProtoMsg(message: _34.MsgRevoke): _34.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _34.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _34.MsgRevokeResponse;
                fromPartial(_: Partial<_34.MsgRevokeResponse>): _34.MsgRevokeResponse;
                fromAmino(_: _34.MsgRevokeResponseAmino): _34.MsgRevokeResponse;
                toAmino(_: _34.MsgRevokeResponse): _34.MsgRevokeResponseAmino;
                fromAminoMsg(object: _34.MsgRevokeResponseAminoMsg): _34.MsgRevokeResponse;
                toAminoMsg(message: _34.MsgRevokeResponse): _34.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _34.MsgRevokeResponseProtoMsg): _34.MsgRevokeResponse;
                toProto(message: _34.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _34.MsgRevokeResponse): _34.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _33.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryGrantsRequest;
                fromPartial(object: Partial<_33.QueryGrantsRequest>): _33.QueryGrantsRequest;
                fromAmino(object: _33.QueryGrantsRequestAmino): _33.QueryGrantsRequest;
                toAmino(message: _33.QueryGrantsRequest): _33.QueryGrantsRequestAmino;
                fromAminoMsg(object: _33.QueryGrantsRequestAminoMsg): _33.QueryGrantsRequest;
                toAminoMsg(message: _33.QueryGrantsRequest): _33.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _33.QueryGrantsRequestProtoMsg): _33.QueryGrantsRequest;
                toProto(message: _33.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _33.QueryGrantsRequest): _33.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _33.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryGrantsResponse;
                fromPartial(object: Partial<_33.QueryGrantsResponse>): _33.QueryGrantsResponse;
                fromAmino(object: _33.QueryGrantsResponseAmino): _33.QueryGrantsResponse;
                toAmino(message: _33.QueryGrantsResponse): _33.QueryGrantsResponseAmino;
                fromAminoMsg(object: _33.QueryGrantsResponseAminoMsg): _33.QueryGrantsResponse;
                toAminoMsg(message: _33.QueryGrantsResponse): _33.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _33.QueryGrantsResponseProtoMsg): _33.QueryGrantsResponse;
                toProto(message: _33.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _33.QueryGrantsResponse): _33.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _33.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_33.QueryGranterGrantsRequest>): _33.QueryGranterGrantsRequest;
                fromAmino(object: _33.QueryGranterGrantsRequestAmino): _33.QueryGranterGrantsRequest;
                toAmino(message: _33.QueryGranterGrantsRequest): _33.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _33.QueryGranterGrantsRequestAminoMsg): _33.QueryGranterGrantsRequest;
                toAminoMsg(message: _33.QueryGranterGrantsRequest): _33.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _33.QueryGranterGrantsRequestProtoMsg): _33.QueryGranterGrantsRequest;
                toProto(message: _33.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _33.QueryGranterGrantsRequest): _33.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _33.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_33.QueryGranterGrantsResponse>): _33.QueryGranterGrantsResponse;
                fromAmino(object: _33.QueryGranterGrantsResponseAmino): _33.QueryGranterGrantsResponse;
                toAmino(message: _33.QueryGranterGrantsResponse): _33.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _33.QueryGranterGrantsResponseAminoMsg): _33.QueryGranterGrantsResponse;
                toAminoMsg(message: _33.QueryGranterGrantsResponse): _33.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _33.QueryGranterGrantsResponseProtoMsg): _33.QueryGranterGrantsResponse;
                toProto(message: _33.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _33.QueryGranterGrantsResponse): _33.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _33.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_33.QueryGranteeGrantsRequest>): _33.QueryGranteeGrantsRequest;
                fromAmino(object: _33.QueryGranteeGrantsRequestAmino): _33.QueryGranteeGrantsRequest;
                toAmino(message: _33.QueryGranteeGrantsRequest): _33.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _33.QueryGranteeGrantsRequestAminoMsg): _33.QueryGranteeGrantsRequest;
                toAminoMsg(message: _33.QueryGranteeGrantsRequest): _33.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _33.QueryGranteeGrantsRequestProtoMsg): _33.QueryGranteeGrantsRequest;
                toProto(message: _33.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _33.QueryGranteeGrantsRequest): _33.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _33.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_33.QueryGranteeGrantsResponse>): _33.QueryGranteeGrantsResponse;
                fromAmino(object: _33.QueryGranteeGrantsResponseAmino): _33.QueryGranteeGrantsResponse;
                toAmino(message: _33.QueryGranteeGrantsResponse): _33.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _33.QueryGranteeGrantsResponseAminoMsg): _33.QueryGranteeGrantsResponse;
                toAminoMsg(message: _33.QueryGranteeGrantsResponse): _33.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _33.QueryGranteeGrantsResponseProtoMsg): _33.QueryGranteeGrantsResponse;
                toProto(message: _33.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _33.QueryGranteeGrantsResponse): _33.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _32.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.GenesisState;
                fromPartial(object: Partial<_32.GenesisState>): _32.GenesisState;
                fromAmino(object: _32.GenesisStateAmino): _32.GenesisState;
                toAmino(message: _32.GenesisState): _32.GenesisStateAmino;
                fromAminoMsg(object: _32.GenesisStateAminoMsg): _32.GenesisState;
                toAminoMsg(message: _32.GenesisState): _32.GenesisStateAminoMsg;
                fromProtoMsg(message: _32.GenesisStateProtoMsg): _32.GenesisState;
                toProto(message: _32.GenesisState): Uint8Array;
                toProtoMsg(message: _32.GenesisState): _32.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _31.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.EventGrant;
                fromPartial(object: Partial<_31.EventGrant>): _31.EventGrant;
                fromAmino(object: _31.EventGrantAmino): _31.EventGrant;
                toAmino(message: _31.EventGrant): _31.EventGrantAmino;
                fromAminoMsg(object: _31.EventGrantAminoMsg): _31.EventGrant;
                toAminoMsg(message: _31.EventGrant): _31.EventGrantAminoMsg;
                fromProtoMsg(message: _31.EventGrantProtoMsg): _31.EventGrant;
                toProto(message: _31.EventGrant): Uint8Array;
                toProtoMsg(message: _31.EventGrant): _31.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _31.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.EventRevoke;
                fromPartial(object: Partial<_31.EventRevoke>): _31.EventRevoke;
                fromAmino(object: _31.EventRevokeAmino): _31.EventRevoke;
                toAmino(message: _31.EventRevoke): _31.EventRevokeAmino;
                fromAminoMsg(object: _31.EventRevokeAminoMsg): _31.EventRevoke;
                toAminoMsg(message: _31.EventRevoke): _31.EventRevokeAminoMsg;
                fromProtoMsg(message: _31.EventRevokeProtoMsg): _31.EventRevoke;
                toProto(message: _31.EventRevoke): Uint8Array;
                toProtoMsg(message: _31.EventRevoke): _31.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _30.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.GenericAuthorization;
                fromPartial(object: Partial<_30.GenericAuthorization>): _30.GenericAuthorization;
                fromAmino(object: _30.GenericAuthorizationAmino): _30.GenericAuthorization;
                toAmino(message: _30.GenericAuthorization): _30.GenericAuthorizationAmino;
                fromAminoMsg(object: _30.GenericAuthorizationAminoMsg): _30.GenericAuthorization;
                toAminoMsg(message: _30.GenericAuthorization): _30.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _30.GenericAuthorizationProtoMsg): _30.GenericAuthorization;
                toProto(message: _30.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _30.GenericAuthorization): _30.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _30.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.Grant;
                fromPartial(object: Partial<_30.Grant>): _30.Grant;
                fromAmino(object: _30.GrantAmino): _30.Grant;
                toAmino(message: _30.Grant): _30.GrantAmino;
                fromAminoMsg(object: _30.GrantAminoMsg): _30.Grant;
                toAminoMsg(message: _30.Grant): _30.GrantAminoMsg;
                fromProtoMsg(message: _30.GrantProtoMsg): _30.Grant;
                toProto(message: _30.Grant): Uint8Array;
                toProtoMsg(message: _30.Grant): _30.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _30.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.GrantAuthorization;
                fromPartial(object: Partial<_30.GrantAuthorization>): _30.GrantAuthorization;
                fromAmino(object: _30.GrantAuthorizationAmino): _30.GrantAuthorization;
                toAmino(message: _30.GrantAuthorization): _30.GrantAuthorizationAmino;
                fromAminoMsg(object: _30.GrantAuthorizationAminoMsg): _30.GrantAuthorization;
                toAminoMsg(message: _30.GrantAuthorization): _30.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _30.GrantAuthorizationProtoMsg): _30.GrantAuthorization;
                toProto(message: _30.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _30.GrantAuthorization): _30.GrantAuthorizationProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _10.SendAuthorization | _69.StakeAuthorization | _30.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _36.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.GenesisOwners;
                fromPartial(object: Partial<_36.GenesisOwners>): _36.GenesisOwners;
                fromAmino(object: _36.GenesisOwnersAmino): _36.GenesisOwners;
                toAmino(message: _36.GenesisOwners): _36.GenesisOwnersAmino;
                fromAminoMsg(object: _36.GenesisOwnersAminoMsg): _36.GenesisOwners;
                toAminoMsg(message: _36.GenesisOwners): _36.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _36.GenesisOwnersProtoMsg): _36.GenesisOwners;
                toProto(message: _36.GenesisOwners): Uint8Array;
                toProtoMsg(message: _36.GenesisOwners): _36.GenesisOwnersProtoMsg;
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
            Capability: {
                typeUrl: string;
                encode(message: _35.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.Capability;
                fromPartial(object: Partial<_35.Capability>): _35.Capability;
                fromAmino(object: _35.CapabilityAmino): _35.Capability;
                toAmino(message: _35.Capability): _35.CapabilityAmino;
                fromAminoMsg(object: _35.CapabilityAminoMsg): _35.Capability;
                toAminoMsg(message: _35.Capability): _35.CapabilityAminoMsg;
                fromProtoMsg(message: _35.CapabilityProtoMsg): _35.Capability;
                toProto(message: _35.Capability): Uint8Array;
                toProtoMsg(message: _35.Capability): _35.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _35.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.Owner;
                fromPartial(object: Partial<_35.Owner>): _35.Owner;
                fromAmino(object: _35.OwnerAmino): _35.Owner;
                toAmino(message: _35.Owner): _35.OwnerAmino;
                fromAminoMsg(object: _35.OwnerAminoMsg): _35.Owner;
                toAminoMsg(message: _35.Owner): _35.OwnerAminoMsg;
                fromProtoMsg(message: _35.OwnerProtoMsg): _35.Owner;
                toProto(message: _35.Owner): Uint8Array;
                toProtoMsg(message: _35.Owner): _35.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _35.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.CapabilityOwners;
                fromPartial(object: Partial<_35.CapabilityOwners>): _35.CapabilityOwners;
                fromAmino(object: _35.CapabilityOwnersAmino): _35.CapabilityOwners;
                toAmino(message: _35.CapabilityOwners): _35.CapabilityOwnersAmino;
                fromAminoMsg(object: _35.CapabilityOwnersAminoMsg): _35.CapabilityOwners;
                toAminoMsg(message: _35.CapabilityOwners): _35.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _35.CapabilityOwnersProtoMsg): _35.CapabilityOwners;
                toProto(message: _35.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _35.CapabilityOwners): _35.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _177.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _38.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _38.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _38.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _38.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _38.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _38.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _38.MsgVerifyInvariant) => _38.MsgVerifyInvariantAmino;
                    fromAmino: (object: _38.MsgVerifyInvariantAmino) => _38.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _38.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.MsgVerifyInvariant;
                fromPartial(object: Partial<_38.MsgVerifyInvariant>): _38.MsgVerifyInvariant;
                fromAmino(object: _38.MsgVerifyInvariantAmino): _38.MsgVerifyInvariant;
                toAmino(message: _38.MsgVerifyInvariant): _38.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _38.MsgVerifyInvariantAminoMsg): _38.MsgVerifyInvariant;
                toAminoMsg(message: _38.MsgVerifyInvariant): _38.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _38.MsgVerifyInvariantProtoMsg): _38.MsgVerifyInvariant;
                toProto(message: _38.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _38.MsgVerifyInvariant): _38.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _38.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _38.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_38.MsgVerifyInvariantResponse>): _38.MsgVerifyInvariantResponse;
                fromAmino(_: _38.MsgVerifyInvariantResponseAmino): _38.MsgVerifyInvariantResponse;
                toAmino(_: _38.MsgVerifyInvariantResponse): _38.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _38.MsgVerifyInvariantResponseAminoMsg): _38.MsgVerifyInvariantResponse;
                toAminoMsg(message: _38.MsgVerifyInvariantResponse): _38.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _38.MsgVerifyInvariantResponseProtoMsg): _38.MsgVerifyInvariantResponse;
                toProto(message: _38.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _38.MsgVerifyInvariantResponse): _38.MsgVerifyInvariantResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _37.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.GenesisState;
                fromPartial(object: Partial<_37.GenesisState>): _37.GenesisState;
                fromAmino(object: _37.GenesisStateAmino): _37.GenesisState;
                toAmino(message: _37.GenesisState): _37.GenesisStateAmino;
                fromAminoMsg(object: _37.GenesisStateAminoMsg): _37.GenesisState;
                toAminoMsg(message: _37.GenesisState): _37.GenesisStateAminoMsg;
                fromProtoMsg(message: _37.GenesisStateProtoMsg): _37.GenesisState;
                toProto(message: _37.GenesisState): Uint8Array;
                toProtoMsg(message: _37.GenesisState): _37.GenesisStateProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
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
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _40.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.LegacyAminoPubKey;
                fromPartial(object: Partial<_40.LegacyAminoPubKey>): _40.LegacyAminoPubKey;
                fromAmino(object: _40.LegacyAminoPubKeyAmino): _40.LegacyAminoPubKey;
                toAmino(message: _40.LegacyAminoPubKey): _40.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _40.LegacyAminoPubKeyAminoMsg): _40.LegacyAminoPubKey;
                toAminoMsg(message: _40.LegacyAminoPubKey): _40.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _40.LegacyAminoPubKeyProtoMsg): _40.LegacyAminoPubKey;
                toProto(message: _40.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _40.LegacyAminoPubKey): _40.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
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
        const secp256r1: {
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
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _178.MsgClientImpl;
            QueryClientImpl: typeof _165.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _45.QueryParamsRequest): Promise<_45.QueryParamsResponse>;
                validatorOutstandingRewards(request: _45.QueryValidatorOutstandingRewardsRequest): Promise<_45.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _45.QueryValidatorCommissionRequest): Promise<_45.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _45.QueryValidatorSlashesRequest): Promise<_45.QueryValidatorSlashesResponse>;
                delegationRewards(request: _45.QueryDelegationRewardsRequest): Promise<_45.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _45.QueryDelegationTotalRewardsRequest): Promise<_45.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _45.QueryDelegatorValidatorsRequest): Promise<_45.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _45.QueryDelegatorWithdrawAddressRequest): Promise<_45.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _45.QueryCommunityPoolRequest): Promise<_45.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _150.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _46.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _46.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _46.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _46.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _46.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _46.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _46.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _46.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _46.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _46.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _46.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _46.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _46.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _46.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _46.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _46.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _46.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _46.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _46.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _46.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _46.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _46.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _46.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _46.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _46.MsgSetWithdrawAddress) => _46.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _46.MsgSetWithdrawAddressAmino) => _46.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _46.MsgWithdrawDelegatorReward) => _46.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _46.MsgWithdrawDelegatorRewardAmino) => _46.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _46.MsgWithdrawValidatorCommission) => _46.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _46.MsgWithdrawValidatorCommissionAmino) => _46.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _46.MsgFundCommunityPool) => _46.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _46.MsgFundCommunityPoolAmino) => _46.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _46.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_46.MsgSetWithdrawAddress>): _46.MsgSetWithdrawAddress;
                fromAmino(object: _46.MsgSetWithdrawAddressAmino): _46.MsgSetWithdrawAddress;
                toAmino(message: _46.MsgSetWithdrawAddress): _46.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _46.MsgSetWithdrawAddressAminoMsg): _46.MsgSetWithdrawAddress;
                toAminoMsg(message: _46.MsgSetWithdrawAddress): _46.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _46.MsgSetWithdrawAddressProtoMsg): _46.MsgSetWithdrawAddress;
                toProto(message: _46.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _46.MsgSetWithdrawAddress): _46.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _46.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _46.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_46.MsgSetWithdrawAddressResponse>): _46.MsgSetWithdrawAddressResponse;
                fromAmino(_: _46.MsgSetWithdrawAddressResponseAmino): _46.MsgSetWithdrawAddressResponse;
                toAmino(_: _46.MsgSetWithdrawAddressResponse): _46.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _46.MsgSetWithdrawAddressResponseAminoMsg): _46.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _46.MsgSetWithdrawAddressResponse): _46.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _46.MsgSetWithdrawAddressResponseProtoMsg): _46.MsgSetWithdrawAddressResponse;
                toProto(message: _46.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _46.MsgSetWithdrawAddressResponse): _46.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _46.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_46.MsgWithdrawDelegatorReward>): _46.MsgWithdrawDelegatorReward;
                fromAmino(object: _46.MsgWithdrawDelegatorRewardAmino): _46.MsgWithdrawDelegatorReward;
                toAmino(message: _46.MsgWithdrawDelegatorReward): _46.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _46.MsgWithdrawDelegatorRewardAminoMsg): _46.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _46.MsgWithdrawDelegatorReward): _46.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _46.MsgWithdrawDelegatorRewardProtoMsg): _46.MsgWithdrawDelegatorReward;
                toProto(message: _46.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _46.MsgWithdrawDelegatorReward): _46.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(_: _46.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _46.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_46.MsgWithdrawDelegatorRewardResponse>): _46.MsgWithdrawDelegatorRewardResponse;
                fromAmino(_: _46.MsgWithdrawDelegatorRewardResponseAmino): _46.MsgWithdrawDelegatorRewardResponse;
                toAmino(_: _46.MsgWithdrawDelegatorRewardResponse): _46.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _46.MsgWithdrawDelegatorRewardResponseAminoMsg): _46.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _46.MsgWithdrawDelegatorRewardResponse): _46.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _46.MsgWithdrawDelegatorRewardResponseProtoMsg): _46.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _46.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _46.MsgWithdrawDelegatorRewardResponse): _46.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _46.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_46.MsgWithdrawValidatorCommission>): _46.MsgWithdrawValidatorCommission;
                fromAmino(object: _46.MsgWithdrawValidatorCommissionAmino): _46.MsgWithdrawValidatorCommission;
                toAmino(message: _46.MsgWithdrawValidatorCommission): _46.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _46.MsgWithdrawValidatorCommissionAminoMsg): _46.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _46.MsgWithdrawValidatorCommission): _46.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _46.MsgWithdrawValidatorCommissionProtoMsg): _46.MsgWithdrawValidatorCommission;
                toProto(message: _46.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _46.MsgWithdrawValidatorCommission): _46.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(_: _46.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _46.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_46.MsgWithdrawValidatorCommissionResponse>): _46.MsgWithdrawValidatorCommissionResponse;
                fromAmino(_: _46.MsgWithdrawValidatorCommissionResponseAmino): _46.MsgWithdrawValidatorCommissionResponse;
                toAmino(_: _46.MsgWithdrawValidatorCommissionResponse): _46.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _46.MsgWithdrawValidatorCommissionResponseAminoMsg): _46.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _46.MsgWithdrawValidatorCommissionResponse): _46.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _46.MsgWithdrawValidatorCommissionResponseProtoMsg): _46.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _46.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _46.MsgWithdrawValidatorCommissionResponse): _46.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _46.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.MsgFundCommunityPool;
                fromPartial(object: Partial<_46.MsgFundCommunityPool>): _46.MsgFundCommunityPool;
                fromAmino(object: _46.MsgFundCommunityPoolAmino): _46.MsgFundCommunityPool;
                toAmino(message: _46.MsgFundCommunityPool): _46.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _46.MsgFundCommunityPoolAminoMsg): _46.MsgFundCommunityPool;
                toAminoMsg(message: _46.MsgFundCommunityPool): _46.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _46.MsgFundCommunityPoolProtoMsg): _46.MsgFundCommunityPool;
                toProto(message: _46.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _46.MsgFundCommunityPool): _46.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _46.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _46.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_46.MsgFundCommunityPoolResponse>): _46.MsgFundCommunityPoolResponse;
                fromAmino(_: _46.MsgFundCommunityPoolResponseAmino): _46.MsgFundCommunityPoolResponse;
                toAmino(_: _46.MsgFundCommunityPoolResponse): _46.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _46.MsgFundCommunityPoolResponseAminoMsg): _46.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _46.MsgFundCommunityPoolResponse): _46.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _46.MsgFundCommunityPoolResponseProtoMsg): _46.MsgFundCommunityPoolResponse;
                toProto(message: _46.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _46.MsgFundCommunityPoolResponse): _46.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _45.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _45.QueryParamsRequest;
                fromPartial(_: Partial<_45.QueryParamsRequest>): _45.QueryParamsRequest;
                fromAmino(_: _45.QueryParamsRequestAmino): _45.QueryParamsRequest;
                toAmino(_: _45.QueryParamsRequest): _45.QueryParamsRequestAmino;
                fromAminoMsg(object: _45.QueryParamsRequestAminoMsg): _45.QueryParamsRequest;
                toAminoMsg(message: _45.QueryParamsRequest): _45.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _45.QueryParamsRequestProtoMsg): _45.QueryParamsRequest;
                toProto(message: _45.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _45.QueryParamsRequest): _45.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _45.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryParamsResponse;
                fromPartial(object: Partial<_45.QueryParamsResponse>): _45.QueryParamsResponse;
                fromAmino(object: _45.QueryParamsResponseAmino): _45.QueryParamsResponse;
                toAmino(message: _45.QueryParamsResponse): _45.QueryParamsResponseAmino;
                fromAminoMsg(object: _45.QueryParamsResponseAminoMsg): _45.QueryParamsResponse;
                toAminoMsg(message: _45.QueryParamsResponse): _45.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _45.QueryParamsResponseProtoMsg): _45.QueryParamsResponse;
                toProto(message: _45.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _45.QueryParamsResponse): _45.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _45.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_45.QueryValidatorOutstandingRewardsRequest>): _45.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _45.QueryValidatorOutstandingRewardsRequestAmino): _45.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _45.QueryValidatorOutstandingRewardsRequest): _45.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _45.QueryValidatorOutstandingRewardsRequestAminoMsg): _45.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _45.QueryValidatorOutstandingRewardsRequest): _45.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _45.QueryValidatorOutstandingRewardsRequestProtoMsg): _45.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _45.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _45.QueryValidatorOutstandingRewardsRequest): _45.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _45.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_45.QueryValidatorOutstandingRewardsResponse>): _45.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _45.QueryValidatorOutstandingRewardsResponseAmino): _45.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _45.QueryValidatorOutstandingRewardsResponse): _45.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _45.QueryValidatorOutstandingRewardsResponseAminoMsg): _45.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _45.QueryValidatorOutstandingRewardsResponse): _45.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _45.QueryValidatorOutstandingRewardsResponseProtoMsg): _45.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _45.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _45.QueryValidatorOutstandingRewardsResponse): _45.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _45.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_45.QueryValidatorCommissionRequest>): _45.QueryValidatorCommissionRequest;
                fromAmino(object: _45.QueryValidatorCommissionRequestAmino): _45.QueryValidatorCommissionRequest;
                toAmino(message: _45.QueryValidatorCommissionRequest): _45.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _45.QueryValidatorCommissionRequestAminoMsg): _45.QueryValidatorCommissionRequest;
                toAminoMsg(message: _45.QueryValidatorCommissionRequest): _45.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _45.QueryValidatorCommissionRequestProtoMsg): _45.QueryValidatorCommissionRequest;
                toProto(message: _45.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _45.QueryValidatorCommissionRequest): _45.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _45.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_45.QueryValidatorCommissionResponse>): _45.QueryValidatorCommissionResponse;
                fromAmino(object: _45.QueryValidatorCommissionResponseAmino): _45.QueryValidatorCommissionResponse;
                toAmino(message: _45.QueryValidatorCommissionResponse): _45.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _45.QueryValidatorCommissionResponseAminoMsg): _45.QueryValidatorCommissionResponse;
                toAminoMsg(message: _45.QueryValidatorCommissionResponse): _45.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _45.QueryValidatorCommissionResponseProtoMsg): _45.QueryValidatorCommissionResponse;
                toProto(message: _45.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _45.QueryValidatorCommissionResponse): _45.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _45.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_45.QueryValidatorSlashesRequest>): _45.QueryValidatorSlashesRequest;
                fromAmino(object: _45.QueryValidatorSlashesRequestAmino): _45.QueryValidatorSlashesRequest;
                toAmino(message: _45.QueryValidatorSlashesRequest): _45.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _45.QueryValidatorSlashesRequestAminoMsg): _45.QueryValidatorSlashesRequest;
                toAminoMsg(message: _45.QueryValidatorSlashesRequest): _45.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _45.QueryValidatorSlashesRequestProtoMsg): _45.QueryValidatorSlashesRequest;
                toProto(message: _45.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _45.QueryValidatorSlashesRequest): _45.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _45.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_45.QueryValidatorSlashesResponse>): _45.QueryValidatorSlashesResponse;
                fromAmino(object: _45.QueryValidatorSlashesResponseAmino): _45.QueryValidatorSlashesResponse;
                toAmino(message: _45.QueryValidatorSlashesResponse): _45.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _45.QueryValidatorSlashesResponseAminoMsg): _45.QueryValidatorSlashesResponse;
                toAminoMsg(message: _45.QueryValidatorSlashesResponse): _45.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _45.QueryValidatorSlashesResponseProtoMsg): _45.QueryValidatorSlashesResponse;
                toProto(message: _45.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _45.QueryValidatorSlashesResponse): _45.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _45.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_45.QueryDelegationRewardsRequest>): _45.QueryDelegationRewardsRequest;
                fromAmino(object: _45.QueryDelegationRewardsRequestAmino): _45.QueryDelegationRewardsRequest;
                toAmino(message: _45.QueryDelegationRewardsRequest): _45.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _45.QueryDelegationRewardsRequestAminoMsg): _45.QueryDelegationRewardsRequest;
                toAminoMsg(message: _45.QueryDelegationRewardsRequest): _45.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _45.QueryDelegationRewardsRequestProtoMsg): _45.QueryDelegationRewardsRequest;
                toProto(message: _45.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _45.QueryDelegationRewardsRequest): _45.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _45.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_45.QueryDelegationRewardsResponse>): _45.QueryDelegationRewardsResponse;
                fromAmino(object: _45.QueryDelegationRewardsResponseAmino): _45.QueryDelegationRewardsResponse;
                toAmino(message: _45.QueryDelegationRewardsResponse): _45.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _45.QueryDelegationRewardsResponseAminoMsg): _45.QueryDelegationRewardsResponse;
                toAminoMsg(message: _45.QueryDelegationRewardsResponse): _45.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _45.QueryDelegationRewardsResponseProtoMsg): _45.QueryDelegationRewardsResponse;
                toProto(message: _45.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _45.QueryDelegationRewardsResponse): _45.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _45.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_45.QueryDelegationTotalRewardsRequest>): _45.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _45.QueryDelegationTotalRewardsRequestAmino): _45.QueryDelegationTotalRewardsRequest;
                toAmino(message: _45.QueryDelegationTotalRewardsRequest): _45.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _45.QueryDelegationTotalRewardsRequestAminoMsg): _45.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _45.QueryDelegationTotalRewardsRequest): _45.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _45.QueryDelegationTotalRewardsRequestProtoMsg): _45.QueryDelegationTotalRewardsRequest;
                toProto(message: _45.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _45.QueryDelegationTotalRewardsRequest): _45.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _45.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_45.QueryDelegationTotalRewardsResponse>): _45.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _45.QueryDelegationTotalRewardsResponseAmino): _45.QueryDelegationTotalRewardsResponse;
                toAmino(message: _45.QueryDelegationTotalRewardsResponse): _45.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _45.QueryDelegationTotalRewardsResponseAminoMsg): _45.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _45.QueryDelegationTotalRewardsResponse): _45.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _45.QueryDelegationTotalRewardsResponseProtoMsg): _45.QueryDelegationTotalRewardsResponse;
                toProto(message: _45.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _45.QueryDelegationTotalRewardsResponse): _45.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _45.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_45.QueryDelegatorValidatorsRequest>): _45.QueryDelegatorValidatorsRequest;
                fromAmino(object: _45.QueryDelegatorValidatorsRequestAmino): _45.QueryDelegatorValidatorsRequest;
                toAmino(message: _45.QueryDelegatorValidatorsRequest): _45.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _45.QueryDelegatorValidatorsRequestAminoMsg): _45.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _45.QueryDelegatorValidatorsRequest): _45.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _45.QueryDelegatorValidatorsRequestProtoMsg): _45.QueryDelegatorValidatorsRequest;
                toProto(message: _45.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _45.QueryDelegatorValidatorsRequest): _45.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _45.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_45.QueryDelegatorValidatorsResponse>): _45.QueryDelegatorValidatorsResponse;
                fromAmino(object: _45.QueryDelegatorValidatorsResponseAmino): _45.QueryDelegatorValidatorsResponse;
                toAmino(message: _45.QueryDelegatorValidatorsResponse): _45.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _45.QueryDelegatorValidatorsResponseAminoMsg): _45.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _45.QueryDelegatorValidatorsResponse): _45.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _45.QueryDelegatorValidatorsResponseProtoMsg): _45.QueryDelegatorValidatorsResponse;
                toProto(message: _45.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _45.QueryDelegatorValidatorsResponse): _45.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _45.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_45.QueryDelegatorWithdrawAddressRequest>): _45.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _45.QueryDelegatorWithdrawAddressRequestAmino): _45.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _45.QueryDelegatorWithdrawAddressRequest): _45.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _45.QueryDelegatorWithdrawAddressRequestAminoMsg): _45.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _45.QueryDelegatorWithdrawAddressRequest): _45.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _45.QueryDelegatorWithdrawAddressRequestProtoMsg): _45.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _45.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _45.QueryDelegatorWithdrawAddressRequest): _45.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _45.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_45.QueryDelegatorWithdrawAddressResponse>): _45.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _45.QueryDelegatorWithdrawAddressResponseAmino): _45.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _45.QueryDelegatorWithdrawAddressResponse): _45.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _45.QueryDelegatorWithdrawAddressResponseAminoMsg): _45.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _45.QueryDelegatorWithdrawAddressResponse): _45.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _45.QueryDelegatorWithdrawAddressResponseProtoMsg): _45.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _45.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _45.QueryDelegatorWithdrawAddressResponse): _45.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _45.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _45.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_45.QueryCommunityPoolRequest>): _45.QueryCommunityPoolRequest;
                fromAmino(_: _45.QueryCommunityPoolRequestAmino): _45.QueryCommunityPoolRequest;
                toAmino(_: _45.QueryCommunityPoolRequest): _45.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _45.QueryCommunityPoolRequestAminoMsg): _45.QueryCommunityPoolRequest;
                toAminoMsg(message: _45.QueryCommunityPoolRequest): _45.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _45.QueryCommunityPoolRequestProtoMsg): _45.QueryCommunityPoolRequest;
                toProto(message: _45.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _45.QueryCommunityPoolRequest): _45.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _45.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_45.QueryCommunityPoolResponse>): _45.QueryCommunityPoolResponse;
                fromAmino(object: _45.QueryCommunityPoolResponseAmino): _45.QueryCommunityPoolResponse;
                toAmino(message: _45.QueryCommunityPoolResponse): _45.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _45.QueryCommunityPoolResponseAminoMsg): _45.QueryCommunityPoolResponse;
                toAminoMsg(message: _45.QueryCommunityPoolResponse): _45.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _45.QueryCommunityPoolResponseProtoMsg): _45.QueryCommunityPoolResponse;
                toProto(message: _45.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _45.QueryCommunityPoolResponse): _45.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _44.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_44.DelegatorWithdrawInfo>): _44.DelegatorWithdrawInfo;
                fromAmino(object: _44.DelegatorWithdrawInfoAmino): _44.DelegatorWithdrawInfo;
                toAmino(message: _44.DelegatorWithdrawInfo): _44.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _44.DelegatorWithdrawInfoAminoMsg): _44.DelegatorWithdrawInfo;
                toAminoMsg(message: _44.DelegatorWithdrawInfo): _44.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _44.DelegatorWithdrawInfoProtoMsg): _44.DelegatorWithdrawInfo;
                toProto(message: _44.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _44.DelegatorWithdrawInfo): _44.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _44.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_44.ValidatorOutstandingRewardsRecord>): _44.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _44.ValidatorOutstandingRewardsRecordAmino): _44.ValidatorOutstandingRewardsRecord;
                toAmino(message: _44.ValidatorOutstandingRewardsRecord): _44.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _44.ValidatorOutstandingRewardsRecordAminoMsg): _44.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _44.ValidatorOutstandingRewardsRecord): _44.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _44.ValidatorOutstandingRewardsRecordProtoMsg): _44.ValidatorOutstandingRewardsRecord;
                toProto(message: _44.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _44.ValidatorOutstandingRewardsRecord): _44.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _44.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_44.ValidatorAccumulatedCommissionRecord>): _44.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _44.ValidatorAccumulatedCommissionRecordAmino): _44.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _44.ValidatorAccumulatedCommissionRecord): _44.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _44.ValidatorAccumulatedCommissionRecordAminoMsg): _44.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _44.ValidatorAccumulatedCommissionRecord): _44.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _44.ValidatorAccumulatedCommissionRecordProtoMsg): _44.ValidatorAccumulatedCommissionRecord;
                toProto(message: _44.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _44.ValidatorAccumulatedCommissionRecord): _44.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _44.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_44.ValidatorHistoricalRewardsRecord>): _44.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _44.ValidatorHistoricalRewardsRecordAmino): _44.ValidatorHistoricalRewardsRecord;
                toAmino(message: _44.ValidatorHistoricalRewardsRecord): _44.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _44.ValidatorHistoricalRewardsRecordAminoMsg): _44.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _44.ValidatorHistoricalRewardsRecord): _44.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _44.ValidatorHistoricalRewardsRecordProtoMsg): _44.ValidatorHistoricalRewardsRecord;
                toProto(message: _44.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _44.ValidatorHistoricalRewardsRecord): _44.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _44.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_44.ValidatorCurrentRewardsRecord>): _44.ValidatorCurrentRewardsRecord;
                fromAmino(object: _44.ValidatorCurrentRewardsRecordAmino): _44.ValidatorCurrentRewardsRecord;
                toAmino(message: _44.ValidatorCurrentRewardsRecord): _44.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _44.ValidatorCurrentRewardsRecordAminoMsg): _44.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _44.ValidatorCurrentRewardsRecord): _44.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _44.ValidatorCurrentRewardsRecordProtoMsg): _44.ValidatorCurrentRewardsRecord;
                toProto(message: _44.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _44.ValidatorCurrentRewardsRecord): _44.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _44.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_44.DelegatorStartingInfoRecord>): _44.DelegatorStartingInfoRecord;
                fromAmino(object: _44.DelegatorStartingInfoRecordAmino): _44.DelegatorStartingInfoRecord;
                toAmino(message: _44.DelegatorStartingInfoRecord): _44.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _44.DelegatorStartingInfoRecordAminoMsg): _44.DelegatorStartingInfoRecord;
                toAminoMsg(message: _44.DelegatorStartingInfoRecord): _44.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _44.DelegatorStartingInfoRecordProtoMsg): _44.DelegatorStartingInfoRecord;
                toProto(message: _44.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _44.DelegatorStartingInfoRecord): _44.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _44.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_44.ValidatorSlashEventRecord>): _44.ValidatorSlashEventRecord;
                fromAmino(object: _44.ValidatorSlashEventRecordAmino): _44.ValidatorSlashEventRecord;
                toAmino(message: _44.ValidatorSlashEventRecord): _44.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _44.ValidatorSlashEventRecordAminoMsg): _44.ValidatorSlashEventRecord;
                toAminoMsg(message: _44.ValidatorSlashEventRecord): _44.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _44.ValidatorSlashEventRecordProtoMsg): _44.ValidatorSlashEventRecord;
                toProto(message: _44.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _44.ValidatorSlashEventRecord): _44.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _44.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.GenesisState;
                fromPartial(object: Partial<_44.GenesisState>): _44.GenesisState;
                fromAmino(object: _44.GenesisStateAmino): _44.GenesisState;
                toAmino(message: _44.GenesisState): _44.GenesisStateAmino;
                fromAminoMsg(object: _44.GenesisStateAminoMsg): _44.GenesisState;
                toAminoMsg(message: _44.GenesisState): _44.GenesisStateAminoMsg;
                fromProtoMsg(message: _44.GenesisStateProtoMsg): _44.GenesisState;
                toProto(message: _44.GenesisState): Uint8Array;
                toProtoMsg(message: _44.GenesisState): _44.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _43.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.Params;
                fromPartial(object: Partial<_43.Params>): _43.Params;
                fromAmino(object: _43.ParamsAmino): _43.Params;
                toAmino(message: _43.Params): _43.ParamsAmino;
                fromAminoMsg(object: _43.ParamsAminoMsg): _43.Params;
                toAminoMsg(message: _43.Params): _43.ParamsAminoMsg;
                fromProtoMsg(message: _43.ParamsProtoMsg): _43.Params;
                toProto(message: _43.Params): Uint8Array;
                toProtoMsg(message: _43.Params): _43.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _43.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_43.ValidatorHistoricalRewards>): _43.ValidatorHistoricalRewards;
                fromAmino(object: _43.ValidatorHistoricalRewardsAmino): _43.ValidatorHistoricalRewards;
                toAmino(message: _43.ValidatorHistoricalRewards): _43.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _43.ValidatorHistoricalRewardsAminoMsg): _43.ValidatorHistoricalRewards;
                toAminoMsg(message: _43.ValidatorHistoricalRewards): _43.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _43.ValidatorHistoricalRewardsProtoMsg): _43.ValidatorHistoricalRewards;
                toProto(message: _43.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _43.ValidatorHistoricalRewards): _43.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _43.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.ValidatorCurrentRewards;
                fromPartial(object: Partial<_43.ValidatorCurrentRewards>): _43.ValidatorCurrentRewards;
                fromAmino(object: _43.ValidatorCurrentRewardsAmino): _43.ValidatorCurrentRewards;
                toAmino(message: _43.ValidatorCurrentRewards): _43.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _43.ValidatorCurrentRewardsAminoMsg): _43.ValidatorCurrentRewards;
                toAminoMsg(message: _43.ValidatorCurrentRewards): _43.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _43.ValidatorCurrentRewardsProtoMsg): _43.ValidatorCurrentRewards;
                toProto(message: _43.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _43.ValidatorCurrentRewards): _43.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _43.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_43.ValidatorAccumulatedCommission>): _43.ValidatorAccumulatedCommission;
                fromAmino(object: _43.ValidatorAccumulatedCommissionAmino): _43.ValidatorAccumulatedCommission;
                toAmino(message: _43.ValidatorAccumulatedCommission): _43.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _43.ValidatorAccumulatedCommissionAminoMsg): _43.ValidatorAccumulatedCommission;
                toAminoMsg(message: _43.ValidatorAccumulatedCommission): _43.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _43.ValidatorAccumulatedCommissionProtoMsg): _43.ValidatorAccumulatedCommission;
                toProto(message: _43.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _43.ValidatorAccumulatedCommission): _43.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _43.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_43.ValidatorOutstandingRewards>): _43.ValidatorOutstandingRewards;
                fromAmino(object: _43.ValidatorOutstandingRewardsAmino): _43.ValidatorOutstandingRewards;
                toAmino(message: _43.ValidatorOutstandingRewards): _43.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _43.ValidatorOutstandingRewardsAminoMsg): _43.ValidatorOutstandingRewards;
                toAminoMsg(message: _43.ValidatorOutstandingRewards): _43.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _43.ValidatorOutstandingRewardsProtoMsg): _43.ValidatorOutstandingRewards;
                toProto(message: _43.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _43.ValidatorOutstandingRewards): _43.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _43.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.ValidatorSlashEvent;
                fromPartial(object: Partial<_43.ValidatorSlashEvent>): _43.ValidatorSlashEvent;
                fromAmino(object: _43.ValidatorSlashEventAmino): _43.ValidatorSlashEvent;
                toAmino(message: _43.ValidatorSlashEvent): _43.ValidatorSlashEventAmino;
                fromAminoMsg(object: _43.ValidatorSlashEventAminoMsg): _43.ValidatorSlashEvent;
                toAminoMsg(message: _43.ValidatorSlashEvent): _43.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _43.ValidatorSlashEventProtoMsg): _43.ValidatorSlashEvent;
                toProto(message: _43.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _43.ValidatorSlashEvent): _43.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _43.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.ValidatorSlashEvents;
                fromPartial(object: Partial<_43.ValidatorSlashEvents>): _43.ValidatorSlashEvents;
                fromAmino(object: _43.ValidatorSlashEventsAmino): _43.ValidatorSlashEvents;
                toAmino(message: _43.ValidatorSlashEvents): _43.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _43.ValidatorSlashEventsAminoMsg): _43.ValidatorSlashEvents;
                toAminoMsg(message: _43.ValidatorSlashEvents): _43.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _43.ValidatorSlashEventsProtoMsg): _43.ValidatorSlashEvents;
                toProto(message: _43.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _43.ValidatorSlashEvents): _43.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _43.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.FeePool;
                fromPartial(object: Partial<_43.FeePool>): _43.FeePool;
                fromAmino(object: _43.FeePoolAmino): _43.FeePool;
                toAmino(message: _43.FeePool): _43.FeePoolAmino;
                fromAminoMsg(object: _43.FeePoolAminoMsg): _43.FeePool;
                toAminoMsg(message: _43.FeePool): _43.FeePoolAminoMsg;
                fromProtoMsg(message: _43.FeePoolProtoMsg): _43.FeePool;
                toProto(message: _43.FeePool): Uint8Array;
                toProtoMsg(message: _43.FeePool): _43.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _43.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_43.CommunityPoolSpendProposal>): _43.CommunityPoolSpendProposal;
                fromAmino(object: _43.CommunityPoolSpendProposalAmino): _43.CommunityPoolSpendProposal;
                toAmino(message: _43.CommunityPoolSpendProposal): _43.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _43.CommunityPoolSpendProposalAminoMsg): _43.CommunityPoolSpendProposal;
                toAminoMsg(message: _43.CommunityPoolSpendProposal): _43.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _43.CommunityPoolSpendProposalProtoMsg): _43.CommunityPoolSpendProposal;
                toProto(message: _43.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _43.CommunityPoolSpendProposal): _43.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _43.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.DelegatorStartingInfo;
                fromPartial(object: Partial<_43.DelegatorStartingInfo>): _43.DelegatorStartingInfo;
                fromAmino(object: _43.DelegatorStartingInfoAmino): _43.DelegatorStartingInfo;
                toAmino(message: _43.DelegatorStartingInfo): _43.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _43.DelegatorStartingInfoAminoMsg): _43.DelegatorStartingInfo;
                toAminoMsg(message: _43.DelegatorStartingInfo): _43.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _43.DelegatorStartingInfoProtoMsg): _43.DelegatorStartingInfo;
                toProto(message: _43.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _43.DelegatorStartingInfo): _43.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _43.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.DelegationDelegatorReward;
                fromPartial(object: Partial<_43.DelegationDelegatorReward>): _43.DelegationDelegatorReward;
                fromAmino(object: _43.DelegationDelegatorRewardAmino): _43.DelegationDelegatorReward;
                toAmino(message: _43.DelegationDelegatorReward): _43.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _43.DelegationDelegatorRewardAminoMsg): _43.DelegationDelegatorReward;
                toAminoMsg(message: _43.DelegationDelegatorReward): _43.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _43.DelegationDelegatorRewardProtoMsg): _43.DelegationDelegatorReward;
                toProto(message: _43.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _43.DelegationDelegatorReward): _43.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _43.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_43.CommunityPoolSpendProposalWithDeposit>): _43.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _43.CommunityPoolSpendProposalWithDepositAmino): _43.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _43.CommunityPoolSpendProposalWithDeposit): _43.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _43.CommunityPoolSpendProposalWithDepositAminoMsg): _43.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _43.CommunityPoolSpendProposalWithDeposit): _43.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _43.CommunityPoolSpendProposalWithDepositProtoMsg): _43.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _43.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _43.CommunityPoolSpendProposalWithDeposit): _43.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _179.MsgClientImpl;
            QueryClientImpl: typeof _166.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _49.QueryEvidenceRequest): Promise<_49.QueryEvidenceResponse>;
                allEvidence(request?: _49.QueryAllEvidenceRequest): Promise<_49.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _151.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _50.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _50.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _50.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _50.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _50.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _50.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _50.MsgSubmitEvidence) => _50.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _50.MsgSubmitEvidenceAmino) => _50.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _50.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.MsgSubmitEvidence;
                fromPartial(object: Partial<_50.MsgSubmitEvidence>): _50.MsgSubmitEvidence;
                fromAmino(object: _50.MsgSubmitEvidenceAmino): _50.MsgSubmitEvidence;
                toAmino(message: _50.MsgSubmitEvidence): _50.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _50.MsgSubmitEvidenceAminoMsg): _50.MsgSubmitEvidence;
                toAminoMsg(message: _50.MsgSubmitEvidence): _50.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _50.MsgSubmitEvidenceProtoMsg): _50.MsgSubmitEvidence;
                toProto(message: _50.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _50.MsgSubmitEvidence): _50.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _50.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_50.MsgSubmitEvidenceResponse>): _50.MsgSubmitEvidenceResponse;
                fromAmino(object: _50.MsgSubmitEvidenceResponseAmino): _50.MsgSubmitEvidenceResponse;
                toAmino(message: _50.MsgSubmitEvidenceResponse): _50.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _50.MsgSubmitEvidenceResponseAminoMsg): _50.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _50.MsgSubmitEvidenceResponse): _50.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _50.MsgSubmitEvidenceResponseProtoMsg): _50.MsgSubmitEvidenceResponse;
                toProto(message: _50.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _50.MsgSubmitEvidenceResponse): _50.MsgSubmitEvidenceResponseProtoMsg;
            };
            Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _49.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryEvidenceRequest;
                fromPartial(object: Partial<_49.QueryEvidenceRequest>): _49.QueryEvidenceRequest;
                fromAmino(object: _49.QueryEvidenceRequestAmino): _49.QueryEvidenceRequest;
                toAmino(message: _49.QueryEvidenceRequest): _49.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _49.QueryEvidenceRequestAminoMsg): _49.QueryEvidenceRequest;
                toAminoMsg(message: _49.QueryEvidenceRequest): _49.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _49.QueryEvidenceRequestProtoMsg): _49.QueryEvidenceRequest;
                toProto(message: _49.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _49.QueryEvidenceRequest): _49.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _49.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryEvidenceResponse;
                fromPartial(object: Partial<_49.QueryEvidenceResponse>): _49.QueryEvidenceResponse;
                fromAmino(object: _49.QueryEvidenceResponseAmino): _49.QueryEvidenceResponse;
                toAmino(message: _49.QueryEvidenceResponse): _49.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _49.QueryEvidenceResponseAminoMsg): _49.QueryEvidenceResponse;
                toAminoMsg(message: _49.QueryEvidenceResponse): _49.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _49.QueryEvidenceResponseProtoMsg): _49.QueryEvidenceResponse;
                toProto(message: _49.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _49.QueryEvidenceResponse): _49.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _49.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_49.QueryAllEvidenceRequest>): _49.QueryAllEvidenceRequest;
                fromAmino(object: _49.QueryAllEvidenceRequestAmino): _49.QueryAllEvidenceRequest;
                toAmino(message: _49.QueryAllEvidenceRequest): _49.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _49.QueryAllEvidenceRequestAminoMsg): _49.QueryAllEvidenceRequest;
                toAminoMsg(message: _49.QueryAllEvidenceRequest): _49.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _49.QueryAllEvidenceRequestProtoMsg): _49.QueryAllEvidenceRequest;
                toProto(message: _49.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _49.QueryAllEvidenceRequest): _49.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _49.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_49.QueryAllEvidenceResponse>): _49.QueryAllEvidenceResponse;
                fromAmino(object: _49.QueryAllEvidenceResponseAmino): _49.QueryAllEvidenceResponse;
                toAmino(message: _49.QueryAllEvidenceResponse): _49.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _49.QueryAllEvidenceResponseAminoMsg): _49.QueryAllEvidenceResponse;
                toAminoMsg(message: _49.QueryAllEvidenceResponse): _49.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _49.QueryAllEvidenceResponseProtoMsg): _49.QueryAllEvidenceResponse;
                toProto(message: _49.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _49.QueryAllEvidenceResponse): _49.QueryAllEvidenceResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _48.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.GenesisState;
                fromPartial(object: Partial<_48.GenesisState>): _48.GenesisState;
                fromAmino(object: _48.GenesisStateAmino): _48.GenesisState;
                toAmino(message: _48.GenesisState): _48.GenesisStateAmino;
                fromAminoMsg(object: _48.GenesisStateAminoMsg): _48.GenesisState;
                toAminoMsg(message: _48.GenesisState): _48.GenesisStateAminoMsg;
                fromProtoMsg(message: _48.GenesisStateProtoMsg): _48.GenesisState;
                toProto(message: _48.GenesisState): Uint8Array;
                toProtoMsg(message: _48.GenesisState): _48.GenesisStateProtoMsg;
            };
            Equivocation: {
                typeUrl: string;
                encode(message: _47.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.Equivocation;
                fromPartial(object: Partial<_47.Equivocation>): _47.Equivocation;
                fromAmino(object: _47.EquivocationAmino): _47.Equivocation;
                toAmino(message: _47.Equivocation): _47.EquivocationAmino;
                fromAminoMsg(object: _47.EquivocationAminoMsg): _47.Equivocation;
                toAminoMsg(message: _47.Equivocation): _47.EquivocationAminoMsg;
                fromProtoMsg(message: _47.EquivocationProtoMsg): _47.Equivocation;
                toProto(message: _47.Equivocation): Uint8Array;
                toProtoMsg(message: _47.Equivocation): _47.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _180.MsgClientImpl;
            QueryClientImpl: typeof _167.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _53.QueryAllowanceRequest): Promise<_53.QueryAllowanceResponse>;
                allowances(request: _53.QueryAllowancesRequest): Promise<_53.QueryAllowancesResponse>;
                allowancesByGranter(request: _53.QueryAllowancesByGranterRequest): Promise<_53.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _152.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _54.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _54.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _54.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _54.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _54.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _54.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _54.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _54.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _54.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _54.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _54.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _54.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _54.MsgGrantAllowance) => _54.MsgGrantAllowanceAmino;
                    fromAmino: (object: _54.MsgGrantAllowanceAmino) => _54.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _54.MsgRevokeAllowance) => _54.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _54.MsgRevokeAllowanceAmino) => _54.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _54.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.MsgGrantAllowance;
                fromPartial(object: Partial<_54.MsgGrantAllowance>): _54.MsgGrantAllowance;
                fromAmino(object: _54.MsgGrantAllowanceAmino): _54.MsgGrantAllowance;
                toAmino(message: _54.MsgGrantAllowance): _54.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _54.MsgGrantAllowanceAminoMsg): _54.MsgGrantAllowance;
                toAminoMsg(message: _54.MsgGrantAllowance): _54.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _54.MsgGrantAllowanceProtoMsg): _54.MsgGrantAllowance;
                toProto(message: _54.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _54.MsgGrantAllowance): _54.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _54.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _54.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_54.MsgGrantAllowanceResponse>): _54.MsgGrantAllowanceResponse;
                fromAmino(_: _54.MsgGrantAllowanceResponseAmino): _54.MsgGrantAllowanceResponse;
                toAmino(_: _54.MsgGrantAllowanceResponse): _54.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _54.MsgGrantAllowanceResponseAminoMsg): _54.MsgGrantAllowanceResponse;
                toAminoMsg(message: _54.MsgGrantAllowanceResponse): _54.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _54.MsgGrantAllowanceResponseProtoMsg): _54.MsgGrantAllowanceResponse;
                toProto(message: _54.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _54.MsgGrantAllowanceResponse): _54.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _54.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.MsgRevokeAllowance;
                fromPartial(object: Partial<_54.MsgRevokeAllowance>): _54.MsgRevokeAllowance;
                fromAmino(object: _54.MsgRevokeAllowanceAmino): _54.MsgRevokeAllowance;
                toAmino(message: _54.MsgRevokeAllowance): _54.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _54.MsgRevokeAllowanceAminoMsg): _54.MsgRevokeAllowance;
                toAminoMsg(message: _54.MsgRevokeAllowance): _54.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _54.MsgRevokeAllowanceProtoMsg): _54.MsgRevokeAllowance;
                toProto(message: _54.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _54.MsgRevokeAllowance): _54.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _54.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _54.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_54.MsgRevokeAllowanceResponse>): _54.MsgRevokeAllowanceResponse;
                fromAmino(_: _54.MsgRevokeAllowanceResponseAmino): _54.MsgRevokeAllowanceResponse;
                toAmino(_: _54.MsgRevokeAllowanceResponse): _54.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _54.MsgRevokeAllowanceResponseAminoMsg): _54.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _54.MsgRevokeAllowanceResponse): _54.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _54.MsgRevokeAllowanceResponseProtoMsg): _54.MsgRevokeAllowanceResponse;
                toProto(message: _54.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _54.MsgRevokeAllowanceResponse): _54.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _51.BasicAllowance | _51.PeriodicAllowance | _51.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _53.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.QueryAllowanceRequest;
                fromPartial(object: Partial<_53.QueryAllowanceRequest>): _53.QueryAllowanceRequest;
                fromAmino(object: _53.QueryAllowanceRequestAmino): _53.QueryAllowanceRequest;
                toAmino(message: _53.QueryAllowanceRequest): _53.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _53.QueryAllowanceRequestAminoMsg): _53.QueryAllowanceRequest;
                toAminoMsg(message: _53.QueryAllowanceRequest): _53.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _53.QueryAllowanceRequestProtoMsg): _53.QueryAllowanceRequest;
                toProto(message: _53.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _53.QueryAllowanceRequest): _53.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _53.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.QueryAllowanceResponse;
                fromPartial(object: Partial<_53.QueryAllowanceResponse>): _53.QueryAllowanceResponse;
                fromAmino(object: _53.QueryAllowanceResponseAmino): _53.QueryAllowanceResponse;
                toAmino(message: _53.QueryAllowanceResponse): _53.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _53.QueryAllowanceResponseAminoMsg): _53.QueryAllowanceResponse;
                toAminoMsg(message: _53.QueryAllowanceResponse): _53.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _53.QueryAllowanceResponseProtoMsg): _53.QueryAllowanceResponse;
                toProto(message: _53.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _53.QueryAllowanceResponse): _53.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _53.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.QueryAllowancesRequest;
                fromPartial(object: Partial<_53.QueryAllowancesRequest>): _53.QueryAllowancesRequest;
                fromAmino(object: _53.QueryAllowancesRequestAmino): _53.QueryAllowancesRequest;
                toAmino(message: _53.QueryAllowancesRequest): _53.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _53.QueryAllowancesRequestAminoMsg): _53.QueryAllowancesRequest;
                toAminoMsg(message: _53.QueryAllowancesRequest): _53.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _53.QueryAllowancesRequestProtoMsg): _53.QueryAllowancesRequest;
                toProto(message: _53.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _53.QueryAllowancesRequest): _53.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _53.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.QueryAllowancesResponse;
                fromPartial(object: Partial<_53.QueryAllowancesResponse>): _53.QueryAllowancesResponse;
                fromAmino(object: _53.QueryAllowancesResponseAmino): _53.QueryAllowancesResponse;
                toAmino(message: _53.QueryAllowancesResponse): _53.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _53.QueryAllowancesResponseAminoMsg): _53.QueryAllowancesResponse;
                toAminoMsg(message: _53.QueryAllowancesResponse): _53.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _53.QueryAllowancesResponseProtoMsg): _53.QueryAllowancesResponse;
                toProto(message: _53.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _53.QueryAllowancesResponse): _53.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _53.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_53.QueryAllowancesByGranterRequest>): _53.QueryAllowancesByGranterRequest;
                fromAmino(object: _53.QueryAllowancesByGranterRequestAmino): _53.QueryAllowancesByGranterRequest;
                toAmino(message: _53.QueryAllowancesByGranterRequest): _53.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _53.QueryAllowancesByGranterRequestAminoMsg): _53.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _53.QueryAllowancesByGranterRequest): _53.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _53.QueryAllowancesByGranterRequestProtoMsg): _53.QueryAllowancesByGranterRequest;
                toProto(message: _53.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _53.QueryAllowancesByGranterRequest): _53.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _53.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_53.QueryAllowancesByGranterResponse>): _53.QueryAllowancesByGranterResponse;
                fromAmino(object: _53.QueryAllowancesByGranterResponseAmino): _53.QueryAllowancesByGranterResponse;
                toAmino(message: _53.QueryAllowancesByGranterResponse): _53.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _53.QueryAllowancesByGranterResponseAminoMsg): _53.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _53.QueryAllowancesByGranterResponse): _53.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _53.QueryAllowancesByGranterResponseProtoMsg): _53.QueryAllowancesByGranterResponse;
                toProto(message: _53.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _53.QueryAllowancesByGranterResponse): _53.QueryAllowancesByGranterResponseProtoMsg;
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
            BasicAllowance: {
                typeUrl: string;
                encode(message: _51.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.BasicAllowance;
                fromPartial(object: Partial<_51.BasicAllowance>): _51.BasicAllowance;
                fromAmino(object: _51.BasicAllowanceAmino): _51.BasicAllowance;
                toAmino(message: _51.BasicAllowance): _51.BasicAllowanceAmino;
                fromAminoMsg(object: _51.BasicAllowanceAminoMsg): _51.BasicAllowance;
                toAminoMsg(message: _51.BasicAllowance): _51.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _51.BasicAllowanceProtoMsg): _51.BasicAllowance;
                toProto(message: _51.BasicAllowance): Uint8Array;
                toProtoMsg(message: _51.BasicAllowance): _51.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _51.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.PeriodicAllowance;
                fromPartial(object: Partial<_51.PeriodicAllowance>): _51.PeriodicAllowance;
                fromAmino(object: _51.PeriodicAllowanceAmino): _51.PeriodicAllowance;
                toAmino(message: _51.PeriodicAllowance): _51.PeriodicAllowanceAmino;
                fromAminoMsg(object: _51.PeriodicAllowanceAminoMsg): _51.PeriodicAllowance;
                toAminoMsg(message: _51.PeriodicAllowance): _51.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _51.PeriodicAllowanceProtoMsg): _51.PeriodicAllowance;
                toProto(message: _51.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _51.PeriodicAllowance): _51.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _51.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.AllowedMsgAllowance;
                fromPartial(object: Partial<_51.AllowedMsgAllowance>): _51.AllowedMsgAllowance;
                fromAmino(object: _51.AllowedMsgAllowanceAmino): _51.AllowedMsgAllowance;
                toAmino(message: _51.AllowedMsgAllowance): _51.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _51.AllowedMsgAllowanceAminoMsg): _51.AllowedMsgAllowance;
                toAminoMsg(message: _51.AllowedMsgAllowance): _51.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _51.AllowedMsgAllowanceProtoMsg): _51.AllowedMsgAllowance;
                toProto(message: _51.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _51.AllowedMsgAllowance): _51.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _51.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.Grant;
                fromPartial(object: Partial<_51.Grant>): _51.Grant;
                fromAmino(object: _51.GrantAmino): _51.Grant;
                toAmino(message: _51.Grant): _51.GrantAmino;
                fromAminoMsg(object: _51.GrantAminoMsg): _51.Grant;
                toAminoMsg(message: _51.Grant): _51.GrantAminoMsg;
                fromProtoMsg(message: _51.GrantProtoMsg): _51.Grant;
                toProto(message: _51.Grant): Uint8Array;
                toProtoMsg(message: _51.Grant): _51.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
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
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _181.MsgClientImpl;
            QueryClientImpl: typeof _168.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _58.QueryProposalRequest): Promise<_58.QueryProposalResponse>;
                proposals(request: _58.QueryProposalsRequest): Promise<_58.QueryProposalsResponse>;
                vote(request: _58.QueryVoteRequest): Promise<_58.QueryVoteResponse>;
                votes(request: _58.QueryVotesRequest): Promise<_58.QueryVotesResponse>;
                params(request: _58.QueryParamsRequest): Promise<_58.QueryParamsResponse>;
                deposit(request: _58.QueryDepositRequest): Promise<_58.QueryDepositResponse>;
                deposits(request: _58.QueryDepositsRequest): Promise<_58.QueryDepositsResponse>;
                tallyResult(request: _58.QueryTallyResultRequest): Promise<_58.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _153.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _59.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _59.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _59.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _59.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _59.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _59.MsgSubmitProposal;
                    };
                    vote(value: _59.MsgVote): {
                        typeUrl: string;
                        value: _59.MsgVote;
                    };
                    voteWeighted(value: _59.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _59.MsgVoteWeighted;
                    };
                    deposit(value: _59.MsgDeposit): {
                        typeUrl: string;
                        value: _59.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _59.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _59.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _59.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _59.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _59.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _59.MsgSubmitProposal;
                    };
                    vote(value: _59.MsgVote): {
                        typeUrl: string;
                        value: _59.MsgVote;
                    };
                    voteWeighted(value: _59.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _59.MsgVoteWeighted;
                    };
                    deposit(value: _59.MsgDeposit): {
                        typeUrl: string;
                        value: _59.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _59.MsgSubmitProposal) => _59.MsgSubmitProposalAmino;
                    fromAmino: (object: _59.MsgSubmitProposalAmino) => _59.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _59.MsgVote) => _59.MsgVoteAmino;
                    fromAmino: (object: _59.MsgVoteAmino) => _59.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _59.MsgVoteWeighted) => _59.MsgVoteWeightedAmino;
                    fromAmino: (object: _59.MsgVoteWeightedAmino) => _59.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _59.MsgDeposit) => _59.MsgDepositAmino;
                    fromAmino: (object: _59.MsgDepositAmino) => _59.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _59.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgSubmitProposal;
                fromPartial(object: Partial<_59.MsgSubmitProposal>): _59.MsgSubmitProposal;
                fromAmino(object: _59.MsgSubmitProposalAmino): _59.MsgSubmitProposal;
                toAmino(message: _59.MsgSubmitProposal): _59.MsgSubmitProposalAmino;
                fromAminoMsg(object: _59.MsgSubmitProposalAminoMsg): _59.MsgSubmitProposal;
                toAminoMsg(message: _59.MsgSubmitProposal): _59.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _59.MsgSubmitProposalProtoMsg): _59.MsgSubmitProposal;
                toProto(message: _59.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _59.MsgSubmitProposal): _59.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _59.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_59.MsgSubmitProposalResponse>): _59.MsgSubmitProposalResponse;
                fromAmino(object: _59.MsgSubmitProposalResponseAmino): _59.MsgSubmitProposalResponse;
                toAmino(message: _59.MsgSubmitProposalResponse): _59.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _59.MsgSubmitProposalResponseAminoMsg): _59.MsgSubmitProposalResponse;
                toAminoMsg(message: _59.MsgSubmitProposalResponse): _59.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _59.MsgSubmitProposalResponseProtoMsg): _59.MsgSubmitProposalResponse;
                toProto(message: _59.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _59.MsgSubmitProposalResponse): _59.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _59.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgVote;
                fromPartial(object: Partial<_59.MsgVote>): _59.MsgVote;
                fromAmino(object: _59.MsgVoteAmino): _59.MsgVote;
                toAmino(message: _59.MsgVote): _59.MsgVoteAmino;
                fromAminoMsg(object: _59.MsgVoteAminoMsg): _59.MsgVote;
                toAminoMsg(message: _59.MsgVote): _59.MsgVoteAminoMsg;
                fromProtoMsg(message: _59.MsgVoteProtoMsg): _59.MsgVote;
                toProto(message: _59.MsgVote): Uint8Array;
                toProtoMsg(message: _59.MsgVote): _59.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _59.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _59.MsgVoteResponse;
                fromPartial(_: Partial<_59.MsgVoteResponse>): _59.MsgVoteResponse;
                fromAmino(_: _59.MsgVoteResponseAmino): _59.MsgVoteResponse;
                toAmino(_: _59.MsgVoteResponse): _59.MsgVoteResponseAmino;
                fromAminoMsg(object: _59.MsgVoteResponseAminoMsg): _59.MsgVoteResponse;
                toAminoMsg(message: _59.MsgVoteResponse): _59.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _59.MsgVoteResponseProtoMsg): _59.MsgVoteResponse;
                toProto(message: _59.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _59.MsgVoteResponse): _59.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _59.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgVoteWeighted;
                fromPartial(object: Partial<_59.MsgVoteWeighted>): _59.MsgVoteWeighted;
                fromAmino(object: _59.MsgVoteWeightedAmino): _59.MsgVoteWeighted;
                toAmino(message: _59.MsgVoteWeighted): _59.MsgVoteWeightedAmino;
                fromAminoMsg(object: _59.MsgVoteWeightedAminoMsg): _59.MsgVoteWeighted;
                toAminoMsg(message: _59.MsgVoteWeighted): _59.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _59.MsgVoteWeightedProtoMsg): _59.MsgVoteWeighted;
                toProto(message: _59.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _59.MsgVoteWeighted): _59.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _59.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _59.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_59.MsgVoteWeightedResponse>): _59.MsgVoteWeightedResponse;
                fromAmino(_: _59.MsgVoteWeightedResponseAmino): _59.MsgVoteWeightedResponse;
                toAmino(_: _59.MsgVoteWeightedResponse): _59.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _59.MsgVoteWeightedResponseAminoMsg): _59.MsgVoteWeightedResponse;
                toAminoMsg(message: _59.MsgVoteWeightedResponse): _59.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _59.MsgVoteWeightedResponseProtoMsg): _59.MsgVoteWeightedResponse;
                toProto(message: _59.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _59.MsgVoteWeightedResponse): _59.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _59.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgDeposit;
                fromPartial(object: Partial<_59.MsgDeposit>): _59.MsgDeposit;
                fromAmino(object: _59.MsgDepositAmino): _59.MsgDeposit;
                toAmino(message: _59.MsgDeposit): _59.MsgDepositAmino;
                fromAminoMsg(object: _59.MsgDepositAminoMsg): _59.MsgDeposit;
                toAminoMsg(message: _59.MsgDeposit): _59.MsgDepositAminoMsg;
                fromProtoMsg(message: _59.MsgDepositProtoMsg): _59.MsgDeposit;
                toProto(message: _59.MsgDeposit): Uint8Array;
                toProtoMsg(message: _59.MsgDeposit): _59.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _59.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _59.MsgDepositResponse;
                fromPartial(_: Partial<_59.MsgDepositResponse>): _59.MsgDepositResponse;
                fromAmino(_: _59.MsgDepositResponseAmino): _59.MsgDepositResponse;
                toAmino(_: _59.MsgDepositResponse): _59.MsgDepositResponseAmino;
                fromAminoMsg(object: _59.MsgDepositResponseAminoMsg): _59.MsgDepositResponse;
                toAminoMsg(message: _59.MsgDepositResponse): _59.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _59.MsgDepositResponseProtoMsg): _59.MsgDepositResponse;
                toProto(message: _59.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _59.MsgDepositResponse): _59.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _57.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _58.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryProposalRequest;
                fromPartial(object: Partial<_58.QueryProposalRequest>): _58.QueryProposalRequest;
                fromAmino(object: _58.QueryProposalRequestAmino): _58.QueryProposalRequest;
                toAmino(message: _58.QueryProposalRequest): _58.QueryProposalRequestAmino;
                fromAminoMsg(object: _58.QueryProposalRequestAminoMsg): _58.QueryProposalRequest;
                toAminoMsg(message: _58.QueryProposalRequest): _58.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _58.QueryProposalRequestProtoMsg): _58.QueryProposalRequest;
                toProto(message: _58.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _58.QueryProposalRequest): _58.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _58.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryProposalResponse;
                fromPartial(object: Partial<_58.QueryProposalResponse>): _58.QueryProposalResponse;
                fromAmino(object: _58.QueryProposalResponseAmino): _58.QueryProposalResponse;
                toAmino(message: _58.QueryProposalResponse): _58.QueryProposalResponseAmino;
                fromAminoMsg(object: _58.QueryProposalResponseAminoMsg): _58.QueryProposalResponse;
                toAminoMsg(message: _58.QueryProposalResponse): _58.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _58.QueryProposalResponseProtoMsg): _58.QueryProposalResponse;
                toProto(message: _58.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _58.QueryProposalResponse): _58.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _58.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryProposalsRequest;
                fromPartial(object: Partial<_58.QueryProposalsRequest>): _58.QueryProposalsRequest;
                fromAmino(object: _58.QueryProposalsRequestAmino): _58.QueryProposalsRequest;
                toAmino(message: _58.QueryProposalsRequest): _58.QueryProposalsRequestAmino;
                fromAminoMsg(object: _58.QueryProposalsRequestAminoMsg): _58.QueryProposalsRequest;
                toAminoMsg(message: _58.QueryProposalsRequest): _58.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _58.QueryProposalsRequestProtoMsg): _58.QueryProposalsRequest;
                toProto(message: _58.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _58.QueryProposalsRequest): _58.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _58.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryProposalsResponse;
                fromPartial(object: Partial<_58.QueryProposalsResponse>): _58.QueryProposalsResponse;
                fromAmino(object: _58.QueryProposalsResponseAmino): _58.QueryProposalsResponse;
                toAmino(message: _58.QueryProposalsResponse): _58.QueryProposalsResponseAmino;
                fromAminoMsg(object: _58.QueryProposalsResponseAminoMsg): _58.QueryProposalsResponse;
                toAminoMsg(message: _58.QueryProposalsResponse): _58.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _58.QueryProposalsResponseProtoMsg): _58.QueryProposalsResponse;
                toProto(message: _58.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _58.QueryProposalsResponse): _58.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _58.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryVoteRequest;
                fromPartial(object: Partial<_58.QueryVoteRequest>): _58.QueryVoteRequest;
                fromAmino(object: _58.QueryVoteRequestAmino): _58.QueryVoteRequest;
                toAmino(message: _58.QueryVoteRequest): _58.QueryVoteRequestAmino;
                fromAminoMsg(object: _58.QueryVoteRequestAminoMsg): _58.QueryVoteRequest;
                toAminoMsg(message: _58.QueryVoteRequest): _58.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _58.QueryVoteRequestProtoMsg): _58.QueryVoteRequest;
                toProto(message: _58.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _58.QueryVoteRequest): _58.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _58.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryVoteResponse;
                fromPartial(object: Partial<_58.QueryVoteResponse>): _58.QueryVoteResponse;
                fromAmino(object: _58.QueryVoteResponseAmino): _58.QueryVoteResponse;
                toAmino(message: _58.QueryVoteResponse): _58.QueryVoteResponseAmino;
                fromAminoMsg(object: _58.QueryVoteResponseAminoMsg): _58.QueryVoteResponse;
                toAminoMsg(message: _58.QueryVoteResponse): _58.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _58.QueryVoteResponseProtoMsg): _58.QueryVoteResponse;
                toProto(message: _58.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _58.QueryVoteResponse): _58.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _58.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryVotesRequest;
                fromPartial(object: Partial<_58.QueryVotesRequest>): _58.QueryVotesRequest;
                fromAmino(object: _58.QueryVotesRequestAmino): _58.QueryVotesRequest;
                toAmino(message: _58.QueryVotesRequest): _58.QueryVotesRequestAmino;
                fromAminoMsg(object: _58.QueryVotesRequestAminoMsg): _58.QueryVotesRequest;
                toAminoMsg(message: _58.QueryVotesRequest): _58.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _58.QueryVotesRequestProtoMsg): _58.QueryVotesRequest;
                toProto(message: _58.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _58.QueryVotesRequest): _58.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _58.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryVotesResponse;
                fromPartial(object: Partial<_58.QueryVotesResponse>): _58.QueryVotesResponse;
                fromAmino(object: _58.QueryVotesResponseAmino): _58.QueryVotesResponse;
                toAmino(message: _58.QueryVotesResponse): _58.QueryVotesResponseAmino;
                fromAminoMsg(object: _58.QueryVotesResponseAminoMsg): _58.QueryVotesResponse;
                toAminoMsg(message: _58.QueryVotesResponse): _58.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _58.QueryVotesResponseProtoMsg): _58.QueryVotesResponse;
                toProto(message: _58.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _58.QueryVotesResponse): _58.QueryVotesResponseProtoMsg;
            };
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
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _58.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryDepositRequest;
                fromPartial(object: Partial<_58.QueryDepositRequest>): _58.QueryDepositRequest;
                fromAmino(object: _58.QueryDepositRequestAmino): _58.QueryDepositRequest;
                toAmino(message: _58.QueryDepositRequest): _58.QueryDepositRequestAmino;
                fromAminoMsg(object: _58.QueryDepositRequestAminoMsg): _58.QueryDepositRequest;
                toAminoMsg(message: _58.QueryDepositRequest): _58.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _58.QueryDepositRequestProtoMsg): _58.QueryDepositRequest;
                toProto(message: _58.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _58.QueryDepositRequest): _58.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _58.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryDepositResponse;
                fromPartial(object: Partial<_58.QueryDepositResponse>): _58.QueryDepositResponse;
                fromAmino(object: _58.QueryDepositResponseAmino): _58.QueryDepositResponse;
                toAmino(message: _58.QueryDepositResponse): _58.QueryDepositResponseAmino;
                fromAminoMsg(object: _58.QueryDepositResponseAminoMsg): _58.QueryDepositResponse;
                toAminoMsg(message: _58.QueryDepositResponse): _58.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _58.QueryDepositResponseProtoMsg): _58.QueryDepositResponse;
                toProto(message: _58.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _58.QueryDepositResponse): _58.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _58.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryDepositsRequest;
                fromPartial(object: Partial<_58.QueryDepositsRequest>): _58.QueryDepositsRequest;
                fromAmino(object: _58.QueryDepositsRequestAmino): _58.QueryDepositsRequest;
                toAmino(message: _58.QueryDepositsRequest): _58.QueryDepositsRequestAmino;
                fromAminoMsg(object: _58.QueryDepositsRequestAminoMsg): _58.QueryDepositsRequest;
                toAminoMsg(message: _58.QueryDepositsRequest): _58.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _58.QueryDepositsRequestProtoMsg): _58.QueryDepositsRequest;
                toProto(message: _58.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _58.QueryDepositsRequest): _58.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _58.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryDepositsResponse;
                fromPartial(object: Partial<_58.QueryDepositsResponse>): _58.QueryDepositsResponse;
                fromAmino(object: _58.QueryDepositsResponseAmino): _58.QueryDepositsResponse;
                toAmino(message: _58.QueryDepositsResponse): _58.QueryDepositsResponseAmino;
                fromAminoMsg(object: _58.QueryDepositsResponseAminoMsg): _58.QueryDepositsResponse;
                toAminoMsg(message: _58.QueryDepositsResponse): _58.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _58.QueryDepositsResponseProtoMsg): _58.QueryDepositsResponse;
                toProto(message: _58.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _58.QueryDepositsResponse): _58.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _58.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryTallyResultRequest;
                fromPartial(object: Partial<_58.QueryTallyResultRequest>): _58.QueryTallyResultRequest;
                fromAmino(object: _58.QueryTallyResultRequestAmino): _58.QueryTallyResultRequest;
                toAmino(message: _58.QueryTallyResultRequest): _58.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _58.QueryTallyResultRequestAminoMsg): _58.QueryTallyResultRequest;
                toAminoMsg(message: _58.QueryTallyResultRequest): _58.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _58.QueryTallyResultRequestProtoMsg): _58.QueryTallyResultRequest;
                toProto(message: _58.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _58.QueryTallyResultRequest): _58.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _58.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryTallyResultResponse;
                fromPartial(object: Partial<_58.QueryTallyResultResponse>): _58.QueryTallyResultResponse;
                fromAmino(object: _58.QueryTallyResultResponseAmino): _58.QueryTallyResultResponse;
                toAmino(message: _58.QueryTallyResultResponse): _58.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _58.QueryTallyResultResponseAminoMsg): _58.QueryTallyResultResponse;
                toAminoMsg(message: _58.QueryTallyResultResponse): _58.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _58.QueryTallyResultResponseProtoMsg): _58.QueryTallyResultResponse;
                toProto(message: _58.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _58.QueryTallyResultResponse): _58.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _57.VoteOption;
            voteOptionToJSON(object: _57.VoteOption): string;
            proposalStatusFromJSON(object: any): _57.ProposalStatus;
            proposalStatusToJSON(object: _57.ProposalStatus): string;
            VoteOption: typeof _57.VoteOption;
            VoteOptionSDKType: typeof _57.VoteOption;
            VoteOptionAmino: typeof _57.VoteOption;
            ProposalStatus: typeof _57.ProposalStatus;
            ProposalStatusSDKType: typeof _57.ProposalStatus;
            ProposalStatusAmino: typeof _57.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _57.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.WeightedVoteOption;
                fromPartial(object: Partial<_57.WeightedVoteOption>): _57.WeightedVoteOption;
                fromAmino(object: _57.WeightedVoteOptionAmino): _57.WeightedVoteOption;
                toAmino(message: _57.WeightedVoteOption): _57.WeightedVoteOptionAmino;
                fromAminoMsg(object: _57.WeightedVoteOptionAminoMsg): _57.WeightedVoteOption;
                toAminoMsg(message: _57.WeightedVoteOption): _57.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _57.WeightedVoteOptionProtoMsg): _57.WeightedVoteOption;
                toProto(message: _57.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _57.WeightedVoteOption): _57.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _57.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.TextProposal;
                fromPartial(object: Partial<_57.TextProposal>): _57.TextProposal;
                fromAmino(object: _57.TextProposalAmino): _57.TextProposal;
                toAmino(message: _57.TextProposal): _57.TextProposalAmino;
                fromAminoMsg(object: _57.TextProposalAminoMsg): _57.TextProposal;
                toAminoMsg(message: _57.TextProposal): _57.TextProposalAminoMsg;
                fromProtoMsg(message: _57.TextProposalProtoMsg): _57.TextProposal;
                toProto(message: _57.TextProposal): Uint8Array;
                toProtoMsg(message: _57.TextProposal): _57.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _57.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.Deposit;
                fromPartial(object: Partial<_57.Deposit>): _57.Deposit;
                fromAmino(object: _57.DepositAmino): _57.Deposit;
                toAmino(message: _57.Deposit): _57.DepositAmino;
                fromAminoMsg(object: _57.DepositAminoMsg): _57.Deposit;
                toAminoMsg(message: _57.Deposit): _57.DepositAminoMsg;
                fromProtoMsg(message: _57.DepositProtoMsg): _57.Deposit;
                toProto(message: _57.Deposit): Uint8Array;
                toProtoMsg(message: _57.Deposit): _57.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _57.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.Proposal;
                fromPartial(object: Partial<_57.Proposal>): _57.Proposal;
                fromAmino(object: _57.ProposalAmino): _57.Proposal;
                toAmino(message: _57.Proposal): _57.ProposalAmino;
                fromAminoMsg(object: _57.ProposalAminoMsg): _57.Proposal;
                toAminoMsg(message: _57.Proposal): _57.ProposalAminoMsg;
                fromProtoMsg(message: _57.ProposalProtoMsg): _57.Proposal;
                toProto(message: _57.Proposal): Uint8Array;
                toProtoMsg(message: _57.Proposal): _57.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _57.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.TallyResult;
                fromPartial(object: Partial<_57.TallyResult>): _57.TallyResult;
                fromAmino(object: _57.TallyResultAmino): _57.TallyResult;
                toAmino(message: _57.TallyResult): _57.TallyResultAmino;
                fromAminoMsg(object: _57.TallyResultAminoMsg): _57.TallyResult;
                toAminoMsg(message: _57.TallyResult): _57.TallyResultAminoMsg;
                fromProtoMsg(message: _57.TallyResultProtoMsg): _57.TallyResult;
                toProto(message: _57.TallyResult): Uint8Array;
                toProtoMsg(message: _57.TallyResult): _57.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _57.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.Vote;
                fromPartial(object: Partial<_57.Vote>): _57.Vote;
                fromAmino(object: _57.VoteAmino): _57.Vote;
                toAmino(message: _57.Vote): _57.VoteAmino;
                fromAminoMsg(object: _57.VoteAminoMsg): _57.Vote;
                toAminoMsg(message: _57.Vote): _57.VoteAminoMsg;
                fromProtoMsg(message: _57.VoteProtoMsg): _57.Vote;
                toProto(message: _57.Vote): Uint8Array;
                toProtoMsg(message: _57.Vote): _57.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _57.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.DepositParams;
                fromPartial(object: Partial<_57.DepositParams>): _57.DepositParams;
                fromAmino(object: _57.DepositParamsAmino): _57.DepositParams;
                toAmino(message: _57.DepositParams): _57.DepositParamsAmino;
                fromAminoMsg(object: _57.DepositParamsAminoMsg): _57.DepositParams;
                toAminoMsg(message: _57.DepositParams): _57.DepositParamsAminoMsg;
                fromProtoMsg(message: _57.DepositParamsProtoMsg): _57.DepositParams;
                toProto(message: _57.DepositParams): Uint8Array;
                toProtoMsg(message: _57.DepositParams): _57.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _57.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.VotingParams;
                fromPartial(object: Partial<_57.VotingParams>): _57.VotingParams;
                fromAmino(object: _57.VotingParamsAmino): _57.VotingParams;
                toAmino(message: _57.VotingParams): _57.VotingParamsAmino;
                fromAminoMsg(object: _57.VotingParamsAminoMsg): _57.VotingParams;
                toAminoMsg(message: _57.VotingParams): _57.VotingParamsAminoMsg;
                fromProtoMsg(message: _57.VotingParamsProtoMsg): _57.VotingParams;
                toProto(message: _57.VotingParams): Uint8Array;
                toProtoMsg(message: _57.VotingParams): _57.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _57.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.TallyParams;
                fromPartial(object: Partial<_57.TallyParams>): _57.TallyParams;
                fromAmino(object: _57.TallyParamsAmino): _57.TallyParams;
                toAmino(message: _57.TallyParams): _57.TallyParamsAmino;
                fromAminoMsg(object: _57.TallyParamsAminoMsg): _57.TallyParams;
                toAminoMsg(message: _57.TallyParams): _57.TallyParamsAminoMsg;
                fromProtoMsg(message: _57.TallyParamsProtoMsg): _57.TallyParams;
                toProto(message: _57.TallyParams): Uint8Array;
                toProtoMsg(message: _57.TallyParams): _57.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _56.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.GenesisState;
                fromPartial(object: Partial<_56.GenesisState>): _56.GenesisState;
                fromAmino(object: _56.GenesisStateAmino): _56.GenesisState;
                toAmino(message: _56.GenesisState): _56.GenesisStateAmino;
                fromAminoMsg(object: _56.GenesisStateAminoMsg): _56.GenesisState;
                toAminoMsg(message: _56.GenesisState): _56.GenesisStateAminoMsg;
                fromProtoMsg(message: _56.GenesisStateProtoMsg): _56.GenesisState;
                toProto(message: _56.GenesisState): Uint8Array;
                toProtoMsg(message: _56.GenesisState): _56.GenesisStateProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _169.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _62.QueryParamsRequest): Promise<_62.QueryParamsResponse>;
                inflation(request?: _62.QueryInflationRequest): Promise<_62.QueryInflationResponse>;
                annualProvisions(request?: _62.QueryAnnualProvisionsRequest): Promise<_62.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _154.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _62.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _62.QueryParamsRequest;
                fromPartial(_: Partial<_62.QueryParamsRequest>): _62.QueryParamsRequest;
                fromAmino(_: _62.QueryParamsRequestAmino): _62.QueryParamsRequest;
                toAmino(_: _62.QueryParamsRequest): _62.QueryParamsRequestAmino;
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
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _62.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _62.QueryInflationRequest;
                fromPartial(_: Partial<_62.QueryInflationRequest>): _62.QueryInflationRequest;
                fromAmino(_: _62.QueryInflationRequestAmino): _62.QueryInflationRequest;
                toAmino(_: _62.QueryInflationRequest): _62.QueryInflationRequestAmino;
                fromAminoMsg(object: _62.QueryInflationRequestAminoMsg): _62.QueryInflationRequest;
                toAminoMsg(message: _62.QueryInflationRequest): _62.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _62.QueryInflationRequestProtoMsg): _62.QueryInflationRequest;
                toProto(message: _62.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _62.QueryInflationRequest): _62.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _62.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryInflationResponse;
                fromPartial(object: Partial<_62.QueryInflationResponse>): _62.QueryInflationResponse;
                fromAmino(object: _62.QueryInflationResponseAmino): _62.QueryInflationResponse;
                toAmino(message: _62.QueryInflationResponse): _62.QueryInflationResponseAmino;
                fromAminoMsg(object: _62.QueryInflationResponseAminoMsg): _62.QueryInflationResponse;
                toAminoMsg(message: _62.QueryInflationResponse): _62.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _62.QueryInflationResponseProtoMsg): _62.QueryInflationResponse;
                toProto(message: _62.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _62.QueryInflationResponse): _62.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _62.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _62.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_62.QueryAnnualProvisionsRequest>): _62.QueryAnnualProvisionsRequest;
                fromAmino(_: _62.QueryAnnualProvisionsRequestAmino): _62.QueryAnnualProvisionsRequest;
                toAmino(_: _62.QueryAnnualProvisionsRequest): _62.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _62.QueryAnnualProvisionsRequestAminoMsg): _62.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _62.QueryAnnualProvisionsRequest): _62.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _62.QueryAnnualProvisionsRequestProtoMsg): _62.QueryAnnualProvisionsRequest;
                toProto(message: _62.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _62.QueryAnnualProvisionsRequest): _62.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _62.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_62.QueryAnnualProvisionsResponse>): _62.QueryAnnualProvisionsResponse;
                fromAmino(object: _62.QueryAnnualProvisionsResponseAmino): _62.QueryAnnualProvisionsResponse;
                toAmino(message: _62.QueryAnnualProvisionsResponse): _62.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _62.QueryAnnualProvisionsResponseAminoMsg): _62.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _62.QueryAnnualProvisionsResponse): _62.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _62.QueryAnnualProvisionsResponseProtoMsg): _62.QueryAnnualProvisionsResponse;
                toProto(message: _62.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _62.QueryAnnualProvisionsResponse): _62.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _61.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.Minter;
                fromPartial(object: Partial<_61.Minter>): _61.Minter;
                fromAmino(object: _61.MinterAmino): _61.Minter;
                toAmino(message: _61.Minter): _61.MinterAmino;
                fromAminoMsg(object: _61.MinterAminoMsg): _61.Minter;
                toAminoMsg(message: _61.Minter): _61.MinterAminoMsg;
                fromProtoMsg(message: _61.MinterProtoMsg): _61.Minter;
                toProto(message: _61.Minter): Uint8Array;
                toProtoMsg(message: _61.Minter): _61.MinterProtoMsg;
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
            GenesisState: {
                typeUrl: string;
                encode(message: _60.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.GenesisState;
                fromPartial(object: Partial<_60.GenesisState>): _60.GenesisState;
                fromAmino(object: _60.GenesisStateAmino): _60.GenesisState;
                toAmino(message: _60.GenesisState): _60.GenesisStateAmino;
                fromAminoMsg(object: _60.GenesisStateAminoMsg): _60.GenesisState;
                toAminoMsg(message: _60.GenesisState): _60.GenesisStateAminoMsg;
                fromProtoMsg(message: _60.GenesisStateProtoMsg): _60.GenesisState;
                toProto(message: _60.GenesisState): Uint8Array;
                toProtoMsg(message: _60.GenesisState): _60.GenesisStateProtoMsg;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _170.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _64.QueryParamsRequest): Promise<_64.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _155.LCDQueryClient;
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
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _63.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.ParameterChangeProposal;
                fromPartial(object: Partial<_63.ParameterChangeProposal>): _63.ParameterChangeProposal;
                fromAmino(object: _63.ParameterChangeProposalAmino): _63.ParameterChangeProposal;
                toAmino(message: _63.ParameterChangeProposal): _63.ParameterChangeProposalAmino;
                fromAminoMsg(object: _63.ParameterChangeProposalAminoMsg): _63.ParameterChangeProposal;
                toAminoMsg(message: _63.ParameterChangeProposal): _63.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _63.ParameterChangeProposalProtoMsg): _63.ParameterChangeProposal;
                toProto(message: _63.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _63.ParameterChangeProposal): _63.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _63.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.ParamChange;
                fromPartial(object: Partial<_63.ParamChange>): _63.ParamChange;
                fromAmino(object: _63.ParamChangeAmino): _63.ParamChange;
                toAmino(message: _63.ParamChange): _63.ParamChangeAmino;
                fromAminoMsg(object: _63.ParamChangeAminoMsg): _63.ParamChange;
                toAminoMsg(message: _63.ParamChange): _63.ParamChangeAminoMsg;
                fromProtoMsg(message: _63.ParamChangeProtoMsg): _63.ParamChange;
                toProto(message: _63.ParamChange): Uint8Array;
                toProtoMsg(message: _63.ParamChange): _63.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _182.MsgClientImpl;
            QueryClientImpl: typeof _171.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _66.QueryParamsRequest): Promise<_66.QueryParamsResponse>;
                signingInfo(request: _66.QuerySigningInfoRequest): Promise<_66.QuerySigningInfoResponse>;
                signingInfos(request?: _66.QuerySigningInfosRequest): Promise<_66.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _156.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _68.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _68.MsgUnjail): {
                        typeUrl: string;
                        value: _68.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _68.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _68.MsgUnjail): {
                        typeUrl: string;
                        value: _68.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _68.MsgUnjail) => _68.MsgUnjailAmino;
                    fromAmino: (object: _68.MsgUnjailAmino) => _68.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _68.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.MsgUnjail;
                fromPartial(object: Partial<_68.MsgUnjail>): _68.MsgUnjail;
                fromAmino(object: _68.MsgUnjailAmino): _68.MsgUnjail;
                toAmino(message: _68.MsgUnjail): _68.MsgUnjailAmino;
                fromAminoMsg(object: _68.MsgUnjailAminoMsg): _68.MsgUnjail;
                toAminoMsg(message: _68.MsgUnjail): _68.MsgUnjailAminoMsg;
                fromProtoMsg(message: _68.MsgUnjailProtoMsg): _68.MsgUnjail;
                toProto(message: _68.MsgUnjail): Uint8Array;
                toProtoMsg(message: _68.MsgUnjail): _68.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _68.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _68.MsgUnjailResponse;
                fromPartial(_: Partial<_68.MsgUnjailResponse>): _68.MsgUnjailResponse;
                fromAmino(_: _68.MsgUnjailResponseAmino): _68.MsgUnjailResponse;
                toAmino(_: _68.MsgUnjailResponse): _68.MsgUnjailResponseAmino;
                fromAminoMsg(object: _68.MsgUnjailResponseAminoMsg): _68.MsgUnjailResponse;
                toAminoMsg(message: _68.MsgUnjailResponse): _68.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _68.MsgUnjailResponseProtoMsg): _68.MsgUnjailResponse;
                toProto(message: _68.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _68.MsgUnjailResponse): _68.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _67.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.ValidatorSigningInfo;
                fromPartial(object: Partial<_67.ValidatorSigningInfo>): _67.ValidatorSigningInfo;
                fromAmino(object: _67.ValidatorSigningInfoAmino): _67.ValidatorSigningInfo;
                toAmino(message: _67.ValidatorSigningInfo): _67.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _67.ValidatorSigningInfoAminoMsg): _67.ValidatorSigningInfo;
                toAminoMsg(message: _67.ValidatorSigningInfo): _67.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _67.ValidatorSigningInfoProtoMsg): _67.ValidatorSigningInfo;
                toProto(message: _67.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _67.ValidatorSigningInfo): _67.ValidatorSigningInfoProtoMsg;
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
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _66.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _66.QueryParamsRequest;
                fromPartial(_: Partial<_66.QueryParamsRequest>): _66.QueryParamsRequest;
                fromAmino(_: _66.QueryParamsRequestAmino): _66.QueryParamsRequest;
                toAmino(_: _66.QueryParamsRequest): _66.QueryParamsRequestAmino;
                fromAminoMsg(object: _66.QueryParamsRequestAminoMsg): _66.QueryParamsRequest;
                toAminoMsg(message: _66.QueryParamsRequest): _66.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _66.QueryParamsRequestProtoMsg): _66.QueryParamsRequest;
                toProto(message: _66.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _66.QueryParamsRequest): _66.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _66.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryParamsResponse;
                fromPartial(object: Partial<_66.QueryParamsResponse>): _66.QueryParamsResponse;
                fromAmino(object: _66.QueryParamsResponseAmino): _66.QueryParamsResponse;
                toAmino(message: _66.QueryParamsResponse): _66.QueryParamsResponseAmino;
                fromAminoMsg(object: _66.QueryParamsResponseAminoMsg): _66.QueryParamsResponse;
                toAminoMsg(message: _66.QueryParamsResponse): _66.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _66.QueryParamsResponseProtoMsg): _66.QueryParamsResponse;
                toProto(message: _66.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _66.QueryParamsResponse): _66.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _66.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QuerySigningInfoRequest;
                fromPartial(object: Partial<_66.QuerySigningInfoRequest>): _66.QuerySigningInfoRequest;
                fromAmino(object: _66.QuerySigningInfoRequestAmino): _66.QuerySigningInfoRequest;
                toAmino(message: _66.QuerySigningInfoRequest): _66.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _66.QuerySigningInfoRequestAminoMsg): _66.QuerySigningInfoRequest;
                toAminoMsg(message: _66.QuerySigningInfoRequest): _66.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _66.QuerySigningInfoRequestProtoMsg): _66.QuerySigningInfoRequest;
                toProto(message: _66.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _66.QuerySigningInfoRequest): _66.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _66.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QuerySigningInfoResponse;
                fromPartial(object: Partial<_66.QuerySigningInfoResponse>): _66.QuerySigningInfoResponse;
                fromAmino(object: _66.QuerySigningInfoResponseAmino): _66.QuerySigningInfoResponse;
                toAmino(message: _66.QuerySigningInfoResponse): _66.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _66.QuerySigningInfoResponseAminoMsg): _66.QuerySigningInfoResponse;
                toAminoMsg(message: _66.QuerySigningInfoResponse): _66.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _66.QuerySigningInfoResponseProtoMsg): _66.QuerySigningInfoResponse;
                toProto(message: _66.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _66.QuerySigningInfoResponse): _66.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _66.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QuerySigningInfosRequest;
                fromPartial(object: Partial<_66.QuerySigningInfosRequest>): _66.QuerySigningInfosRequest;
                fromAmino(object: _66.QuerySigningInfosRequestAmino): _66.QuerySigningInfosRequest;
                toAmino(message: _66.QuerySigningInfosRequest): _66.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _66.QuerySigningInfosRequestAminoMsg): _66.QuerySigningInfosRequest;
                toAminoMsg(message: _66.QuerySigningInfosRequest): _66.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _66.QuerySigningInfosRequestProtoMsg): _66.QuerySigningInfosRequest;
                toProto(message: _66.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _66.QuerySigningInfosRequest): _66.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _66.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QuerySigningInfosResponse;
                fromPartial(object: Partial<_66.QuerySigningInfosResponse>): _66.QuerySigningInfosResponse;
                fromAmino(object: _66.QuerySigningInfosResponseAmino): _66.QuerySigningInfosResponse;
                toAmino(message: _66.QuerySigningInfosResponse): _66.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _66.QuerySigningInfosResponseAminoMsg): _66.QuerySigningInfosResponse;
                toAminoMsg(message: _66.QuerySigningInfosResponse): _66.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _66.QuerySigningInfosResponseProtoMsg): _66.QuerySigningInfosResponse;
                toProto(message: _66.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _66.QuerySigningInfosResponse): _66.QuerySigningInfosResponseProtoMsg;
            };
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
            SigningInfo: {
                typeUrl: string;
                encode(message: _65.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.SigningInfo;
                fromPartial(object: Partial<_65.SigningInfo>): _65.SigningInfo;
                fromAmino(object: _65.SigningInfoAmino): _65.SigningInfo;
                toAmino(message: _65.SigningInfo): _65.SigningInfoAmino;
                fromAminoMsg(object: _65.SigningInfoAminoMsg): _65.SigningInfo;
                toAminoMsg(message: _65.SigningInfo): _65.SigningInfoAminoMsg;
                fromProtoMsg(message: _65.SigningInfoProtoMsg): _65.SigningInfo;
                toProto(message: _65.SigningInfo): Uint8Array;
                toProtoMsg(message: _65.SigningInfo): _65.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _65.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.ValidatorMissedBlocks;
                fromPartial(object: Partial<_65.ValidatorMissedBlocks>): _65.ValidatorMissedBlocks;
                fromAmino(object: _65.ValidatorMissedBlocksAmino): _65.ValidatorMissedBlocks;
                toAmino(message: _65.ValidatorMissedBlocks): _65.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _65.ValidatorMissedBlocksAminoMsg): _65.ValidatorMissedBlocks;
                toAminoMsg(message: _65.ValidatorMissedBlocks): _65.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _65.ValidatorMissedBlocksProtoMsg): _65.ValidatorMissedBlocks;
                toProto(message: _65.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _65.ValidatorMissedBlocks): _65.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _65.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.MissedBlock;
                fromPartial(object: Partial<_65.MissedBlock>): _65.MissedBlock;
                fromAmino(object: _65.MissedBlockAmino): _65.MissedBlock;
                toAmino(message: _65.MissedBlock): _65.MissedBlockAmino;
                fromAminoMsg(object: _65.MissedBlockAminoMsg): _65.MissedBlock;
                toAminoMsg(message: _65.MissedBlock): _65.MissedBlockAminoMsg;
                fromProtoMsg(message: _65.MissedBlockProtoMsg): _65.MissedBlock;
                toProto(message: _65.MissedBlock): Uint8Array;
                toProtoMsg(message: _65.MissedBlock): _65.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _183.MsgClientImpl;
            QueryClientImpl: typeof _172.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _71.QueryValidatorsRequest): Promise<_71.QueryValidatorsResponse>;
                validator(request: _71.QueryValidatorRequest): Promise<_71.QueryValidatorResponse>;
                validatorDelegations(request: _71.QueryValidatorDelegationsRequest): Promise<_71.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _71.QueryValidatorUnbondingDelegationsRequest): Promise<_71.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _71.QueryDelegationRequest): Promise<_71.QueryDelegationResponse>;
                unbondingDelegation(request: _71.QueryUnbondingDelegationRequest): Promise<_71.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _71.QueryDelegatorDelegationsRequest): Promise<_71.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _71.QueryDelegatorUnbondingDelegationsRequest): Promise<_71.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _71.QueryRedelegationsRequest): Promise<_71.QueryRedelegationsResponse>;
                delegatorValidators(request: _71.QueryDelegatorValidatorsRequest): Promise<_71.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _71.QueryDelegatorValidatorRequest): Promise<_71.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _71.QueryHistoricalInfoRequest): Promise<_71.QueryHistoricalInfoResponse>;
                pool(request?: _71.QueryPoolRequest): Promise<_71.QueryPoolResponse>;
                params(request?: _71.QueryParamsRequest): Promise<_71.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _157.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _73.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _73.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _73.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _73.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _73.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _73.MsgCreateValidator): {
                        typeUrl: string;
                        value: _73.MsgCreateValidator;
                    };
                    editValidator(value: _73.MsgEditValidator): {
                        typeUrl: string;
                        value: _73.MsgEditValidator;
                    };
                    delegate(value: _73.MsgDelegate): {
                        typeUrl: string;
                        value: _73.MsgDelegate;
                    };
                    beginRedelegate(value: _73.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _73.MsgBeginRedelegate;
                    };
                    undelegate(value: _73.MsgUndelegate): {
                        typeUrl: string;
                        value: _73.MsgUndelegate;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _73.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _73.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _73.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _73.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _73.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _73.MsgCreateValidator): {
                        typeUrl: string;
                        value: _73.MsgCreateValidator;
                    };
                    editValidator(value: _73.MsgEditValidator): {
                        typeUrl: string;
                        value: _73.MsgEditValidator;
                    };
                    delegate(value: _73.MsgDelegate): {
                        typeUrl: string;
                        value: _73.MsgDelegate;
                    };
                    beginRedelegate(value: _73.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _73.MsgBeginRedelegate;
                    };
                    undelegate(value: _73.MsgUndelegate): {
                        typeUrl: string;
                        value: _73.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _73.MsgCreateValidator) => _73.MsgCreateValidatorAmino;
                    fromAmino: (object: _73.MsgCreateValidatorAmino) => _73.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _73.MsgEditValidator) => _73.MsgEditValidatorAmino;
                    fromAmino: (object: _73.MsgEditValidatorAmino) => _73.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _73.MsgDelegate) => _73.MsgDelegateAmino;
                    fromAmino: (object: _73.MsgDelegateAmino) => _73.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _73.MsgBeginRedelegate) => _73.MsgBeginRedelegateAmino;
                    fromAmino: (object: _73.MsgBeginRedelegateAmino) => _73.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _73.MsgUndelegate) => _73.MsgUndelegateAmino;
                    fromAmino: (object: _73.MsgUndelegateAmino) => _73.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _73.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.MsgCreateValidator;
                fromPartial(object: Partial<_73.MsgCreateValidator>): _73.MsgCreateValidator;
                fromAmino(object: _73.MsgCreateValidatorAmino): _73.MsgCreateValidator;
                toAmino(message: _73.MsgCreateValidator): _73.MsgCreateValidatorAmino;
                fromAminoMsg(object: _73.MsgCreateValidatorAminoMsg): _73.MsgCreateValidator;
                toAminoMsg(message: _73.MsgCreateValidator): _73.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _73.MsgCreateValidatorProtoMsg): _73.MsgCreateValidator;
                toProto(message: _73.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _73.MsgCreateValidator): _73.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _73.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _73.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_73.MsgCreateValidatorResponse>): _73.MsgCreateValidatorResponse;
                fromAmino(_: _73.MsgCreateValidatorResponseAmino): _73.MsgCreateValidatorResponse;
                toAmino(_: _73.MsgCreateValidatorResponse): _73.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _73.MsgCreateValidatorResponseAminoMsg): _73.MsgCreateValidatorResponse;
                toAminoMsg(message: _73.MsgCreateValidatorResponse): _73.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _73.MsgCreateValidatorResponseProtoMsg): _73.MsgCreateValidatorResponse;
                toProto(message: _73.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _73.MsgCreateValidatorResponse): _73.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _73.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.MsgEditValidator;
                fromPartial(object: Partial<_73.MsgEditValidator>): _73.MsgEditValidator;
                fromAmino(object: _73.MsgEditValidatorAmino): _73.MsgEditValidator;
                toAmino(message: _73.MsgEditValidator): _73.MsgEditValidatorAmino;
                fromAminoMsg(object: _73.MsgEditValidatorAminoMsg): _73.MsgEditValidator;
                toAminoMsg(message: _73.MsgEditValidator): _73.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _73.MsgEditValidatorProtoMsg): _73.MsgEditValidator;
                toProto(message: _73.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _73.MsgEditValidator): _73.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _73.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _73.MsgEditValidatorResponse;
                fromPartial(_: Partial<_73.MsgEditValidatorResponse>): _73.MsgEditValidatorResponse;
                fromAmino(_: _73.MsgEditValidatorResponseAmino): _73.MsgEditValidatorResponse;
                toAmino(_: _73.MsgEditValidatorResponse): _73.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _73.MsgEditValidatorResponseAminoMsg): _73.MsgEditValidatorResponse;
                toAminoMsg(message: _73.MsgEditValidatorResponse): _73.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _73.MsgEditValidatorResponseProtoMsg): _73.MsgEditValidatorResponse;
                toProto(message: _73.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _73.MsgEditValidatorResponse): _73.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _73.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.MsgDelegate;
                fromPartial(object: Partial<_73.MsgDelegate>): _73.MsgDelegate;
                fromAmino(object: _73.MsgDelegateAmino): _73.MsgDelegate;
                toAmino(message: _73.MsgDelegate): _73.MsgDelegateAmino;
                fromAminoMsg(object: _73.MsgDelegateAminoMsg): _73.MsgDelegate;
                toAminoMsg(message: _73.MsgDelegate): _73.MsgDelegateAminoMsg;
                fromProtoMsg(message: _73.MsgDelegateProtoMsg): _73.MsgDelegate;
                toProto(message: _73.MsgDelegate): Uint8Array;
                toProtoMsg(message: _73.MsgDelegate): _73.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _73.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _73.MsgDelegateResponse;
                fromPartial(_: Partial<_73.MsgDelegateResponse>): _73.MsgDelegateResponse;
                fromAmino(_: _73.MsgDelegateResponseAmino): _73.MsgDelegateResponse;
                toAmino(_: _73.MsgDelegateResponse): _73.MsgDelegateResponseAmino;
                fromAminoMsg(object: _73.MsgDelegateResponseAminoMsg): _73.MsgDelegateResponse;
                toAminoMsg(message: _73.MsgDelegateResponse): _73.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _73.MsgDelegateResponseProtoMsg): _73.MsgDelegateResponse;
                toProto(message: _73.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _73.MsgDelegateResponse): _73.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _73.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.MsgBeginRedelegate;
                fromPartial(object: Partial<_73.MsgBeginRedelegate>): _73.MsgBeginRedelegate;
                fromAmino(object: _73.MsgBeginRedelegateAmino): _73.MsgBeginRedelegate;
                toAmino(message: _73.MsgBeginRedelegate): _73.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _73.MsgBeginRedelegateAminoMsg): _73.MsgBeginRedelegate;
                toAminoMsg(message: _73.MsgBeginRedelegate): _73.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _73.MsgBeginRedelegateProtoMsg): _73.MsgBeginRedelegate;
                toProto(message: _73.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _73.MsgBeginRedelegate): _73.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _73.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_73.MsgBeginRedelegateResponse>): _73.MsgBeginRedelegateResponse;
                fromAmino(object: _73.MsgBeginRedelegateResponseAmino): _73.MsgBeginRedelegateResponse;
                toAmino(message: _73.MsgBeginRedelegateResponse): _73.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _73.MsgBeginRedelegateResponseAminoMsg): _73.MsgBeginRedelegateResponse;
                toAminoMsg(message: _73.MsgBeginRedelegateResponse): _73.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _73.MsgBeginRedelegateResponseProtoMsg): _73.MsgBeginRedelegateResponse;
                toProto(message: _73.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _73.MsgBeginRedelegateResponse): _73.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _73.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.MsgUndelegate;
                fromPartial(object: Partial<_73.MsgUndelegate>): _73.MsgUndelegate;
                fromAmino(object: _73.MsgUndelegateAmino): _73.MsgUndelegate;
                toAmino(message: _73.MsgUndelegate): _73.MsgUndelegateAmino;
                fromAminoMsg(object: _73.MsgUndelegateAminoMsg): _73.MsgUndelegate;
                toAminoMsg(message: _73.MsgUndelegate): _73.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _73.MsgUndelegateProtoMsg): _73.MsgUndelegate;
                toProto(message: _73.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _73.MsgUndelegate): _73.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _73.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.MsgUndelegateResponse;
                fromPartial(object: Partial<_73.MsgUndelegateResponse>): _73.MsgUndelegateResponse;
                fromAmino(object: _73.MsgUndelegateResponseAmino): _73.MsgUndelegateResponse;
                toAmino(message: _73.MsgUndelegateResponse): _73.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _73.MsgUndelegateResponseAminoMsg): _73.MsgUndelegateResponse;
                toAminoMsg(message: _73.MsgUndelegateResponse): _73.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _73.MsgUndelegateResponseProtoMsg): _73.MsgUndelegateResponse;
                toProto(message: _73.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _73.MsgUndelegateResponse): _73.MsgUndelegateResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _72.BondStatus;
            bondStatusToJSON(object: _72.BondStatus): string;
            BondStatus: typeof _72.BondStatus;
            BondStatusSDKType: typeof _72.BondStatus;
            BondStatusAmino: typeof _72.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _72.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.HistoricalInfo;
                fromPartial(object: Partial<_72.HistoricalInfo>): _72.HistoricalInfo;
                fromAmino(object: _72.HistoricalInfoAmino): _72.HistoricalInfo;
                toAmino(message: _72.HistoricalInfo): _72.HistoricalInfoAmino;
                fromAminoMsg(object: _72.HistoricalInfoAminoMsg): _72.HistoricalInfo;
                toAminoMsg(message: _72.HistoricalInfo): _72.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _72.HistoricalInfoProtoMsg): _72.HistoricalInfo;
                toProto(message: _72.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _72.HistoricalInfo): _72.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _72.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.CommissionRates;
                fromPartial(object: Partial<_72.CommissionRates>): _72.CommissionRates;
                fromAmino(object: _72.CommissionRatesAmino): _72.CommissionRates;
                toAmino(message: _72.CommissionRates): _72.CommissionRatesAmino;
                fromAminoMsg(object: _72.CommissionRatesAminoMsg): _72.CommissionRates;
                toAminoMsg(message: _72.CommissionRates): _72.CommissionRatesAminoMsg;
                fromProtoMsg(message: _72.CommissionRatesProtoMsg): _72.CommissionRates;
                toProto(message: _72.CommissionRates): Uint8Array;
                toProtoMsg(message: _72.CommissionRates): _72.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _72.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.Commission;
                fromPartial(object: Partial<_72.Commission>): _72.Commission;
                fromAmino(object: _72.CommissionAmino): _72.Commission;
                toAmino(message: _72.Commission): _72.CommissionAmino;
                fromAminoMsg(object: _72.CommissionAminoMsg): _72.Commission;
                toAminoMsg(message: _72.Commission): _72.CommissionAminoMsg;
                fromProtoMsg(message: _72.CommissionProtoMsg): _72.Commission;
                toProto(message: _72.Commission): Uint8Array;
                toProtoMsg(message: _72.Commission): _72.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _72.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.Description;
                fromPartial(object: Partial<_72.Description>): _72.Description;
                fromAmino(object: _72.DescriptionAmino): _72.Description;
                toAmino(message: _72.Description): _72.DescriptionAmino;
                fromAminoMsg(object: _72.DescriptionAminoMsg): _72.Description;
                toAminoMsg(message: _72.Description): _72.DescriptionAminoMsg;
                fromProtoMsg(message: _72.DescriptionProtoMsg): _72.Description;
                toProto(message: _72.Description): Uint8Array;
                toProtoMsg(message: _72.Description): _72.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _72.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.Validator;
                fromPartial(object: Partial<_72.Validator>): _72.Validator;
                fromAmino(object: _72.ValidatorAmino): _72.Validator;
                toAmino(message: _72.Validator): _72.ValidatorAmino;
                fromAminoMsg(object: _72.ValidatorAminoMsg): _72.Validator;
                toAminoMsg(message: _72.Validator): _72.ValidatorAminoMsg;
                fromProtoMsg(message: _72.ValidatorProtoMsg): _72.Validator;
                toProto(message: _72.Validator): Uint8Array;
                toProtoMsg(message: _72.Validator): _72.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _72.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.ValAddresses;
                fromPartial(object: Partial<_72.ValAddresses>): _72.ValAddresses;
                fromAmino(object: _72.ValAddressesAmino): _72.ValAddresses;
                toAmino(message: _72.ValAddresses): _72.ValAddressesAmino;
                fromAminoMsg(object: _72.ValAddressesAminoMsg): _72.ValAddresses;
                toAminoMsg(message: _72.ValAddresses): _72.ValAddressesAminoMsg;
                fromProtoMsg(message: _72.ValAddressesProtoMsg): _72.ValAddresses;
                toProto(message: _72.ValAddresses): Uint8Array;
                toProtoMsg(message: _72.ValAddresses): _72.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _72.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.DVPair;
                fromPartial(object: Partial<_72.DVPair>): _72.DVPair;
                fromAmino(object: _72.DVPairAmino): _72.DVPair;
                toAmino(message: _72.DVPair): _72.DVPairAmino;
                fromAminoMsg(object: _72.DVPairAminoMsg): _72.DVPair;
                toAminoMsg(message: _72.DVPair): _72.DVPairAminoMsg;
                fromProtoMsg(message: _72.DVPairProtoMsg): _72.DVPair;
                toProto(message: _72.DVPair): Uint8Array;
                toProtoMsg(message: _72.DVPair): _72.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _72.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.DVPairs;
                fromPartial(object: Partial<_72.DVPairs>): _72.DVPairs;
                fromAmino(object: _72.DVPairsAmino): _72.DVPairs;
                toAmino(message: _72.DVPairs): _72.DVPairsAmino;
                fromAminoMsg(object: _72.DVPairsAminoMsg): _72.DVPairs;
                toAminoMsg(message: _72.DVPairs): _72.DVPairsAminoMsg;
                fromProtoMsg(message: _72.DVPairsProtoMsg): _72.DVPairs;
                toProto(message: _72.DVPairs): Uint8Array;
                toProtoMsg(message: _72.DVPairs): _72.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _72.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.DVVTriplet;
                fromPartial(object: Partial<_72.DVVTriplet>): _72.DVVTriplet;
                fromAmino(object: _72.DVVTripletAmino): _72.DVVTriplet;
                toAmino(message: _72.DVVTriplet): _72.DVVTripletAmino;
                fromAminoMsg(object: _72.DVVTripletAminoMsg): _72.DVVTriplet;
                toAminoMsg(message: _72.DVVTriplet): _72.DVVTripletAminoMsg;
                fromProtoMsg(message: _72.DVVTripletProtoMsg): _72.DVVTriplet;
                toProto(message: _72.DVVTriplet): Uint8Array;
                toProtoMsg(message: _72.DVVTriplet): _72.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _72.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.DVVTriplets;
                fromPartial(object: Partial<_72.DVVTriplets>): _72.DVVTriplets;
                fromAmino(object: _72.DVVTripletsAmino): _72.DVVTriplets;
                toAmino(message: _72.DVVTriplets): _72.DVVTripletsAmino;
                fromAminoMsg(object: _72.DVVTripletsAminoMsg): _72.DVVTriplets;
                toAminoMsg(message: _72.DVVTriplets): _72.DVVTripletsAminoMsg;
                fromProtoMsg(message: _72.DVVTripletsProtoMsg): _72.DVVTriplets;
                toProto(message: _72.DVVTriplets): Uint8Array;
                toProtoMsg(message: _72.DVVTriplets): _72.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _72.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.Delegation;
                fromPartial(object: Partial<_72.Delegation>): _72.Delegation;
                fromAmino(object: _72.DelegationAmino): _72.Delegation;
                toAmino(message: _72.Delegation): _72.DelegationAmino;
                fromAminoMsg(object: _72.DelegationAminoMsg): _72.Delegation;
                toAminoMsg(message: _72.Delegation): _72.DelegationAminoMsg;
                fromProtoMsg(message: _72.DelegationProtoMsg): _72.Delegation;
                toProto(message: _72.Delegation): Uint8Array;
                toProtoMsg(message: _72.Delegation): _72.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _72.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.UnbondingDelegation;
                fromPartial(object: Partial<_72.UnbondingDelegation>): _72.UnbondingDelegation;
                fromAmino(object: _72.UnbondingDelegationAmino): _72.UnbondingDelegation;
                toAmino(message: _72.UnbondingDelegation): _72.UnbondingDelegationAmino;
                fromAminoMsg(object: _72.UnbondingDelegationAminoMsg): _72.UnbondingDelegation;
                toAminoMsg(message: _72.UnbondingDelegation): _72.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _72.UnbondingDelegationProtoMsg): _72.UnbondingDelegation;
                toProto(message: _72.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _72.UnbondingDelegation): _72.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _72.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.UnbondingDelegationEntry;
                fromPartial(object: Partial<_72.UnbondingDelegationEntry>): _72.UnbondingDelegationEntry;
                fromAmino(object: _72.UnbondingDelegationEntryAmino): _72.UnbondingDelegationEntry;
                toAmino(message: _72.UnbondingDelegationEntry): _72.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _72.UnbondingDelegationEntryAminoMsg): _72.UnbondingDelegationEntry;
                toAminoMsg(message: _72.UnbondingDelegationEntry): _72.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _72.UnbondingDelegationEntryProtoMsg): _72.UnbondingDelegationEntry;
                toProto(message: _72.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _72.UnbondingDelegationEntry): _72.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _72.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.RedelegationEntry;
                fromPartial(object: Partial<_72.RedelegationEntry>): _72.RedelegationEntry;
                fromAmino(object: _72.RedelegationEntryAmino): _72.RedelegationEntry;
                toAmino(message: _72.RedelegationEntry): _72.RedelegationEntryAmino;
                fromAminoMsg(object: _72.RedelegationEntryAminoMsg): _72.RedelegationEntry;
                toAminoMsg(message: _72.RedelegationEntry): _72.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _72.RedelegationEntryProtoMsg): _72.RedelegationEntry;
                toProto(message: _72.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _72.RedelegationEntry): _72.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _72.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.Redelegation;
                fromPartial(object: Partial<_72.Redelegation>): _72.Redelegation;
                fromAmino(object: _72.RedelegationAmino): _72.Redelegation;
                toAmino(message: _72.Redelegation): _72.RedelegationAmino;
                fromAminoMsg(object: _72.RedelegationAminoMsg): _72.Redelegation;
                toAminoMsg(message: _72.Redelegation): _72.RedelegationAminoMsg;
                fromProtoMsg(message: _72.RedelegationProtoMsg): _72.Redelegation;
                toProto(message: _72.Redelegation): Uint8Array;
                toProtoMsg(message: _72.Redelegation): _72.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _72.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.Params;
                fromPartial(object: Partial<_72.Params>): _72.Params;
                fromAmino(object: _72.ParamsAmino): _72.Params;
                toAmino(message: _72.Params): _72.ParamsAmino;
                fromAminoMsg(object: _72.ParamsAminoMsg): _72.Params;
                toAminoMsg(message: _72.Params): _72.ParamsAminoMsg;
                fromProtoMsg(message: _72.ParamsProtoMsg): _72.Params;
                toProto(message: _72.Params): Uint8Array;
                toProtoMsg(message: _72.Params): _72.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _72.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.DelegationResponse;
                fromPartial(object: Partial<_72.DelegationResponse>): _72.DelegationResponse;
                fromAmino(object: _72.DelegationResponseAmino): _72.DelegationResponse;
                toAmino(message: _72.DelegationResponse): _72.DelegationResponseAmino;
                fromAminoMsg(object: _72.DelegationResponseAminoMsg): _72.DelegationResponse;
                toAminoMsg(message: _72.DelegationResponse): _72.DelegationResponseAminoMsg;
                fromProtoMsg(message: _72.DelegationResponseProtoMsg): _72.DelegationResponse;
                toProto(message: _72.DelegationResponse): Uint8Array;
                toProtoMsg(message: _72.DelegationResponse): _72.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _72.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.RedelegationEntryResponse;
                fromPartial(object: Partial<_72.RedelegationEntryResponse>): _72.RedelegationEntryResponse;
                fromAmino(object: _72.RedelegationEntryResponseAmino): _72.RedelegationEntryResponse;
                toAmino(message: _72.RedelegationEntryResponse): _72.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _72.RedelegationEntryResponseAminoMsg): _72.RedelegationEntryResponse;
                toAminoMsg(message: _72.RedelegationEntryResponse): _72.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _72.RedelegationEntryResponseProtoMsg): _72.RedelegationEntryResponse;
                toProto(message: _72.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _72.RedelegationEntryResponse): _72.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _72.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.RedelegationResponse;
                fromPartial(object: Partial<_72.RedelegationResponse>): _72.RedelegationResponse;
                fromAmino(object: _72.RedelegationResponseAmino): _72.RedelegationResponse;
                toAmino(message: _72.RedelegationResponse): _72.RedelegationResponseAmino;
                fromAminoMsg(object: _72.RedelegationResponseAminoMsg): _72.RedelegationResponse;
                toAminoMsg(message: _72.RedelegationResponse): _72.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _72.RedelegationResponseProtoMsg): _72.RedelegationResponse;
                toProto(message: _72.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _72.RedelegationResponse): _72.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _72.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.Pool;
                fromPartial(object: Partial<_72.Pool>): _72.Pool;
                fromAmino(object: _72.PoolAmino): _72.Pool;
                toAmino(message: _72.Pool): _72.PoolAmino;
                fromAminoMsg(object: _72.PoolAminoMsg): _72.Pool;
                toAminoMsg(message: _72.Pool): _72.PoolAminoMsg;
                fromProtoMsg(message: _72.PoolProtoMsg): _72.Pool;
                toProto(message: _72.Pool): Uint8Array;
                toProtoMsg(message: _72.Pool): _72.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _71.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryValidatorsRequest;
                fromPartial(object: Partial<_71.QueryValidatorsRequest>): _71.QueryValidatorsRequest;
                fromAmino(object: _71.QueryValidatorsRequestAmino): _71.QueryValidatorsRequest;
                toAmino(message: _71.QueryValidatorsRequest): _71.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _71.QueryValidatorsRequestAminoMsg): _71.QueryValidatorsRequest;
                toAminoMsg(message: _71.QueryValidatorsRequest): _71.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _71.QueryValidatorsRequestProtoMsg): _71.QueryValidatorsRequest;
                toProto(message: _71.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _71.QueryValidatorsRequest): _71.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _71.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryValidatorsResponse;
                fromPartial(object: Partial<_71.QueryValidatorsResponse>): _71.QueryValidatorsResponse;
                fromAmino(object: _71.QueryValidatorsResponseAmino): _71.QueryValidatorsResponse;
                toAmino(message: _71.QueryValidatorsResponse): _71.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _71.QueryValidatorsResponseAminoMsg): _71.QueryValidatorsResponse;
                toAminoMsg(message: _71.QueryValidatorsResponse): _71.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _71.QueryValidatorsResponseProtoMsg): _71.QueryValidatorsResponse;
                toProto(message: _71.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _71.QueryValidatorsResponse): _71.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _71.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryValidatorRequest;
                fromPartial(object: Partial<_71.QueryValidatorRequest>): _71.QueryValidatorRequest;
                fromAmino(object: _71.QueryValidatorRequestAmino): _71.QueryValidatorRequest;
                toAmino(message: _71.QueryValidatorRequest): _71.QueryValidatorRequestAmino;
                fromAminoMsg(object: _71.QueryValidatorRequestAminoMsg): _71.QueryValidatorRequest;
                toAminoMsg(message: _71.QueryValidatorRequest): _71.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _71.QueryValidatorRequestProtoMsg): _71.QueryValidatorRequest;
                toProto(message: _71.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _71.QueryValidatorRequest): _71.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _71.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryValidatorResponse;
                fromPartial(object: Partial<_71.QueryValidatorResponse>): _71.QueryValidatorResponse;
                fromAmino(object: _71.QueryValidatorResponseAmino): _71.QueryValidatorResponse;
                toAmino(message: _71.QueryValidatorResponse): _71.QueryValidatorResponseAmino;
                fromAminoMsg(object: _71.QueryValidatorResponseAminoMsg): _71.QueryValidatorResponse;
                toAminoMsg(message: _71.QueryValidatorResponse): _71.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _71.QueryValidatorResponseProtoMsg): _71.QueryValidatorResponse;
                toProto(message: _71.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _71.QueryValidatorResponse): _71.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _71.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_71.QueryValidatorDelegationsRequest>): _71.QueryValidatorDelegationsRequest;
                fromAmino(object: _71.QueryValidatorDelegationsRequestAmino): _71.QueryValidatorDelegationsRequest;
                toAmino(message: _71.QueryValidatorDelegationsRequest): _71.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _71.QueryValidatorDelegationsRequestAminoMsg): _71.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _71.QueryValidatorDelegationsRequest): _71.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _71.QueryValidatorDelegationsRequestProtoMsg): _71.QueryValidatorDelegationsRequest;
                toProto(message: _71.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _71.QueryValidatorDelegationsRequest): _71.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _71.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_71.QueryValidatorDelegationsResponse>): _71.QueryValidatorDelegationsResponse;
                fromAmino(object: _71.QueryValidatorDelegationsResponseAmino): _71.QueryValidatorDelegationsResponse;
                toAmino(message: _71.QueryValidatorDelegationsResponse): _71.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _71.QueryValidatorDelegationsResponseAminoMsg): _71.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _71.QueryValidatorDelegationsResponse): _71.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _71.QueryValidatorDelegationsResponseProtoMsg): _71.QueryValidatorDelegationsResponse;
                toProto(message: _71.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _71.QueryValidatorDelegationsResponse): _71.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _71.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_71.QueryValidatorUnbondingDelegationsRequest>): _71.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _71.QueryValidatorUnbondingDelegationsRequestAmino): _71.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _71.QueryValidatorUnbondingDelegationsRequest): _71.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _71.QueryValidatorUnbondingDelegationsRequestAminoMsg): _71.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _71.QueryValidatorUnbondingDelegationsRequest): _71.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _71.QueryValidatorUnbondingDelegationsRequestProtoMsg): _71.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _71.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _71.QueryValidatorUnbondingDelegationsRequest): _71.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _71.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_71.QueryValidatorUnbondingDelegationsResponse>): _71.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _71.QueryValidatorUnbondingDelegationsResponseAmino): _71.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _71.QueryValidatorUnbondingDelegationsResponse): _71.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _71.QueryValidatorUnbondingDelegationsResponseAminoMsg): _71.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _71.QueryValidatorUnbondingDelegationsResponse): _71.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _71.QueryValidatorUnbondingDelegationsResponseProtoMsg): _71.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _71.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _71.QueryValidatorUnbondingDelegationsResponse): _71.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _71.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryDelegationRequest;
                fromPartial(object: Partial<_71.QueryDelegationRequest>): _71.QueryDelegationRequest;
                fromAmino(object: _71.QueryDelegationRequestAmino): _71.QueryDelegationRequest;
                toAmino(message: _71.QueryDelegationRequest): _71.QueryDelegationRequestAmino;
                fromAminoMsg(object: _71.QueryDelegationRequestAminoMsg): _71.QueryDelegationRequest;
                toAminoMsg(message: _71.QueryDelegationRequest): _71.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _71.QueryDelegationRequestProtoMsg): _71.QueryDelegationRequest;
                toProto(message: _71.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _71.QueryDelegationRequest): _71.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _71.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryDelegationResponse;
                fromPartial(object: Partial<_71.QueryDelegationResponse>): _71.QueryDelegationResponse;
                fromAmino(object: _71.QueryDelegationResponseAmino): _71.QueryDelegationResponse;
                toAmino(message: _71.QueryDelegationResponse): _71.QueryDelegationResponseAmino;
                fromAminoMsg(object: _71.QueryDelegationResponseAminoMsg): _71.QueryDelegationResponse;
                toAminoMsg(message: _71.QueryDelegationResponse): _71.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _71.QueryDelegationResponseProtoMsg): _71.QueryDelegationResponse;
                toProto(message: _71.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _71.QueryDelegationResponse): _71.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _71.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_71.QueryUnbondingDelegationRequest>): _71.QueryUnbondingDelegationRequest;
                fromAmino(object: _71.QueryUnbondingDelegationRequestAmino): _71.QueryUnbondingDelegationRequest;
                toAmino(message: _71.QueryUnbondingDelegationRequest): _71.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _71.QueryUnbondingDelegationRequestAminoMsg): _71.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _71.QueryUnbondingDelegationRequest): _71.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _71.QueryUnbondingDelegationRequestProtoMsg): _71.QueryUnbondingDelegationRequest;
                toProto(message: _71.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _71.QueryUnbondingDelegationRequest): _71.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _71.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_71.QueryUnbondingDelegationResponse>): _71.QueryUnbondingDelegationResponse;
                fromAmino(object: _71.QueryUnbondingDelegationResponseAmino): _71.QueryUnbondingDelegationResponse;
                toAmino(message: _71.QueryUnbondingDelegationResponse): _71.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _71.QueryUnbondingDelegationResponseAminoMsg): _71.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _71.QueryUnbondingDelegationResponse): _71.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _71.QueryUnbondingDelegationResponseProtoMsg): _71.QueryUnbondingDelegationResponse;
                toProto(message: _71.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _71.QueryUnbondingDelegationResponse): _71.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _71.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_71.QueryDelegatorDelegationsRequest>): _71.QueryDelegatorDelegationsRequest;
                fromAmino(object: _71.QueryDelegatorDelegationsRequestAmino): _71.QueryDelegatorDelegationsRequest;
                toAmino(message: _71.QueryDelegatorDelegationsRequest): _71.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _71.QueryDelegatorDelegationsRequestAminoMsg): _71.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _71.QueryDelegatorDelegationsRequest): _71.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _71.QueryDelegatorDelegationsRequestProtoMsg): _71.QueryDelegatorDelegationsRequest;
                toProto(message: _71.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _71.QueryDelegatorDelegationsRequest): _71.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _71.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_71.QueryDelegatorDelegationsResponse>): _71.QueryDelegatorDelegationsResponse;
                fromAmino(object: _71.QueryDelegatorDelegationsResponseAmino): _71.QueryDelegatorDelegationsResponse;
                toAmino(message: _71.QueryDelegatorDelegationsResponse): _71.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _71.QueryDelegatorDelegationsResponseAminoMsg): _71.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _71.QueryDelegatorDelegationsResponse): _71.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _71.QueryDelegatorDelegationsResponseProtoMsg): _71.QueryDelegatorDelegationsResponse;
                toProto(message: _71.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _71.QueryDelegatorDelegationsResponse): _71.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _71.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_71.QueryDelegatorUnbondingDelegationsRequest>): _71.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _71.QueryDelegatorUnbondingDelegationsRequestAmino): _71.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _71.QueryDelegatorUnbondingDelegationsRequest): _71.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _71.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _71.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _71.QueryDelegatorUnbondingDelegationsRequest): _71.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _71.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _71.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _71.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _71.QueryDelegatorUnbondingDelegationsRequest): _71.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _71.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_71.QueryDelegatorUnbondingDelegationsResponse>): _71.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _71.QueryDelegatorUnbondingDelegationsResponseAmino): _71.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _71.QueryDelegatorUnbondingDelegationsResponse): _71.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _71.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _71.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _71.QueryDelegatorUnbondingDelegationsResponse): _71.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _71.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _71.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _71.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _71.QueryDelegatorUnbondingDelegationsResponse): _71.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _71.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryRedelegationsRequest;
                fromPartial(object: Partial<_71.QueryRedelegationsRequest>): _71.QueryRedelegationsRequest;
                fromAmino(object: _71.QueryRedelegationsRequestAmino): _71.QueryRedelegationsRequest;
                toAmino(message: _71.QueryRedelegationsRequest): _71.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _71.QueryRedelegationsRequestAminoMsg): _71.QueryRedelegationsRequest;
                toAminoMsg(message: _71.QueryRedelegationsRequest): _71.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _71.QueryRedelegationsRequestProtoMsg): _71.QueryRedelegationsRequest;
                toProto(message: _71.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _71.QueryRedelegationsRequest): _71.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _71.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryRedelegationsResponse;
                fromPartial(object: Partial<_71.QueryRedelegationsResponse>): _71.QueryRedelegationsResponse;
                fromAmino(object: _71.QueryRedelegationsResponseAmino): _71.QueryRedelegationsResponse;
                toAmino(message: _71.QueryRedelegationsResponse): _71.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _71.QueryRedelegationsResponseAminoMsg): _71.QueryRedelegationsResponse;
                toAminoMsg(message: _71.QueryRedelegationsResponse): _71.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _71.QueryRedelegationsResponseProtoMsg): _71.QueryRedelegationsResponse;
                toProto(message: _71.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _71.QueryRedelegationsResponse): _71.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _71.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_71.QueryDelegatorValidatorsRequest>): _71.QueryDelegatorValidatorsRequest;
                fromAmino(object: _71.QueryDelegatorValidatorsRequestAmino): _71.QueryDelegatorValidatorsRequest;
                toAmino(message: _71.QueryDelegatorValidatorsRequest): _71.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _71.QueryDelegatorValidatorsRequestAminoMsg): _71.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _71.QueryDelegatorValidatorsRequest): _71.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _71.QueryDelegatorValidatorsRequestProtoMsg): _71.QueryDelegatorValidatorsRequest;
                toProto(message: _71.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _71.QueryDelegatorValidatorsRequest): _71.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _71.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_71.QueryDelegatorValidatorsResponse>): _71.QueryDelegatorValidatorsResponse;
                fromAmino(object: _71.QueryDelegatorValidatorsResponseAmino): _71.QueryDelegatorValidatorsResponse;
                toAmino(message: _71.QueryDelegatorValidatorsResponse): _71.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _71.QueryDelegatorValidatorsResponseAminoMsg): _71.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _71.QueryDelegatorValidatorsResponse): _71.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _71.QueryDelegatorValidatorsResponseProtoMsg): _71.QueryDelegatorValidatorsResponse;
                toProto(message: _71.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _71.QueryDelegatorValidatorsResponse): _71.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _71.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_71.QueryDelegatorValidatorRequest>): _71.QueryDelegatorValidatorRequest;
                fromAmino(object: _71.QueryDelegatorValidatorRequestAmino): _71.QueryDelegatorValidatorRequest;
                toAmino(message: _71.QueryDelegatorValidatorRequest): _71.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _71.QueryDelegatorValidatorRequestAminoMsg): _71.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _71.QueryDelegatorValidatorRequest): _71.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _71.QueryDelegatorValidatorRequestProtoMsg): _71.QueryDelegatorValidatorRequest;
                toProto(message: _71.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _71.QueryDelegatorValidatorRequest): _71.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _71.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_71.QueryDelegatorValidatorResponse>): _71.QueryDelegatorValidatorResponse;
                fromAmino(object: _71.QueryDelegatorValidatorResponseAmino): _71.QueryDelegatorValidatorResponse;
                toAmino(message: _71.QueryDelegatorValidatorResponse): _71.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _71.QueryDelegatorValidatorResponseAminoMsg): _71.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _71.QueryDelegatorValidatorResponse): _71.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _71.QueryDelegatorValidatorResponseProtoMsg): _71.QueryDelegatorValidatorResponse;
                toProto(message: _71.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _71.QueryDelegatorValidatorResponse): _71.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _71.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_71.QueryHistoricalInfoRequest>): _71.QueryHistoricalInfoRequest;
                fromAmino(object: _71.QueryHistoricalInfoRequestAmino): _71.QueryHistoricalInfoRequest;
                toAmino(message: _71.QueryHistoricalInfoRequest): _71.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _71.QueryHistoricalInfoRequestAminoMsg): _71.QueryHistoricalInfoRequest;
                toAminoMsg(message: _71.QueryHistoricalInfoRequest): _71.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _71.QueryHistoricalInfoRequestProtoMsg): _71.QueryHistoricalInfoRequest;
                toProto(message: _71.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _71.QueryHistoricalInfoRequest): _71.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _71.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_71.QueryHistoricalInfoResponse>): _71.QueryHistoricalInfoResponse;
                fromAmino(object: _71.QueryHistoricalInfoResponseAmino): _71.QueryHistoricalInfoResponse;
                toAmino(message: _71.QueryHistoricalInfoResponse): _71.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _71.QueryHistoricalInfoResponseAminoMsg): _71.QueryHistoricalInfoResponse;
                toAminoMsg(message: _71.QueryHistoricalInfoResponse): _71.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _71.QueryHistoricalInfoResponseProtoMsg): _71.QueryHistoricalInfoResponse;
                toProto(message: _71.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _71.QueryHistoricalInfoResponse): _71.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _71.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _71.QueryPoolRequest;
                fromPartial(_: Partial<_71.QueryPoolRequest>): _71.QueryPoolRequest;
                fromAmino(_: _71.QueryPoolRequestAmino): _71.QueryPoolRequest;
                toAmino(_: _71.QueryPoolRequest): _71.QueryPoolRequestAmino;
                fromAminoMsg(object: _71.QueryPoolRequestAminoMsg): _71.QueryPoolRequest;
                toAminoMsg(message: _71.QueryPoolRequest): _71.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _71.QueryPoolRequestProtoMsg): _71.QueryPoolRequest;
                toProto(message: _71.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _71.QueryPoolRequest): _71.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _71.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryPoolResponse;
                fromPartial(object: Partial<_71.QueryPoolResponse>): _71.QueryPoolResponse;
                fromAmino(object: _71.QueryPoolResponseAmino): _71.QueryPoolResponse;
                toAmino(message: _71.QueryPoolResponse): _71.QueryPoolResponseAmino;
                fromAminoMsg(object: _71.QueryPoolResponseAminoMsg): _71.QueryPoolResponse;
                toAminoMsg(message: _71.QueryPoolResponse): _71.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _71.QueryPoolResponseProtoMsg): _71.QueryPoolResponse;
                toProto(message: _71.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _71.QueryPoolResponse): _71.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _71.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _71.QueryParamsRequest;
                fromPartial(_: Partial<_71.QueryParamsRequest>): _71.QueryParamsRequest;
                fromAmino(_: _71.QueryParamsRequestAmino): _71.QueryParamsRequest;
                toAmino(_: _71.QueryParamsRequest): _71.QueryParamsRequestAmino;
                fromAminoMsg(object: _71.QueryParamsRequestAminoMsg): _71.QueryParamsRequest;
                toAminoMsg(message: _71.QueryParamsRequest): _71.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _71.QueryParamsRequestProtoMsg): _71.QueryParamsRequest;
                toProto(message: _71.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _71.QueryParamsRequest): _71.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _71.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryParamsResponse;
                fromPartial(object: Partial<_71.QueryParamsResponse>): _71.QueryParamsResponse;
                fromAmino(object: _71.QueryParamsResponseAmino): _71.QueryParamsResponse;
                toAmino(message: _71.QueryParamsResponse): _71.QueryParamsResponseAmino;
                fromAminoMsg(object: _71.QueryParamsResponseAminoMsg): _71.QueryParamsResponse;
                toAminoMsg(message: _71.QueryParamsResponse): _71.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _71.QueryParamsResponseProtoMsg): _71.QueryParamsResponse;
                toProto(message: _71.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _71.QueryParamsResponse): _71.QueryParamsResponseProtoMsg;
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
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _70.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.LastValidatorPower;
                fromPartial(object: Partial<_70.LastValidatorPower>): _70.LastValidatorPower;
                fromAmino(object: _70.LastValidatorPowerAmino): _70.LastValidatorPower;
                toAmino(message: _70.LastValidatorPower): _70.LastValidatorPowerAmino;
                fromAminoMsg(object: _70.LastValidatorPowerAminoMsg): _70.LastValidatorPower;
                toAminoMsg(message: _70.LastValidatorPower): _70.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _70.LastValidatorPowerProtoMsg): _70.LastValidatorPower;
                toProto(message: _70.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _70.LastValidatorPower): _70.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _69.AuthorizationType;
            authorizationTypeToJSON(object: _69.AuthorizationType): string;
            AuthorizationType: typeof _69.AuthorizationType;
            AuthorizationTypeSDKType: typeof _69.AuthorizationType;
            AuthorizationTypeAmino: typeof _69.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _69.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.StakeAuthorization;
                fromPartial(object: Partial<_69.StakeAuthorization>): _69.StakeAuthorization;
                fromAmino(object: _69.StakeAuthorizationAmino): _69.StakeAuthorization;
                toAmino(message: _69.StakeAuthorization): _69.StakeAuthorizationAmino;
                fromAminoMsg(object: _69.StakeAuthorizationAminoMsg): _69.StakeAuthorization;
                toAminoMsg(message: _69.StakeAuthorization): _69.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _69.StakeAuthorizationProtoMsg): _69.StakeAuthorization;
                toProto(message: _69.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _69.StakeAuthorization): _69.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _69.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.StakeAuthorization_Validators;
                fromPartial(object: Partial<_69.StakeAuthorization_Validators>): _69.StakeAuthorization_Validators;
                fromAmino(object: _69.StakeAuthorization_ValidatorsAmino): _69.StakeAuthorization_Validators;
                toAmino(message: _69.StakeAuthorization_Validators): _69.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _69.StakeAuthorization_ValidatorsAminoMsg): _69.StakeAuthorization_Validators;
                toAminoMsg(message: _69.StakeAuthorization_Validators): _69.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _69.StakeAuthorization_ValidatorsProtoMsg): _69.StakeAuthorization_Validators;
                toProto(message: _69.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _69.StakeAuthorization_Validators): _69.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _74.SignMode;
                signModeToJSON(object: _74.SignMode): string;
                SignMode: typeof _74.SignMode;
                SignModeSDKType: typeof _74.SignMode;
                SignModeAmino: typeof _74.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _74.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _74.SignatureDescriptors;
                    fromPartial(object: Partial<_74.SignatureDescriptors>): _74.SignatureDescriptors;
                    fromAmino(object: _74.SignatureDescriptorsAmino): _74.SignatureDescriptors;
                    toAmino(message: _74.SignatureDescriptors): _74.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _74.SignatureDescriptorsAminoMsg): _74.SignatureDescriptors;
                    toAminoMsg(message: _74.SignatureDescriptors): _74.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _74.SignatureDescriptorsProtoMsg): _74.SignatureDescriptors;
                    toProto(message: _74.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _74.SignatureDescriptors): _74.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _74.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _74.SignatureDescriptor;
                    fromPartial(object: Partial<_74.SignatureDescriptor>): _74.SignatureDescriptor;
                    fromAmino(object: _74.SignatureDescriptorAmino): _74.SignatureDescriptor;
                    toAmino(message: _74.SignatureDescriptor): _74.SignatureDescriptorAmino;
                    fromAminoMsg(object: _74.SignatureDescriptorAminoMsg): _74.SignatureDescriptor;
                    toAminoMsg(message: _74.SignatureDescriptor): _74.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _74.SignatureDescriptorProtoMsg): _74.SignatureDescriptor;
                    toProto(message: _74.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _74.SignatureDescriptor): _74.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _74.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _74.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_74.SignatureDescriptor_Data>): _74.SignatureDescriptor_Data;
                    fromAmino(object: _74.SignatureDescriptor_DataAmino): _74.SignatureDescriptor_Data;
                    toAmino(message: _74.SignatureDescriptor_Data): _74.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _74.SignatureDescriptor_DataAminoMsg): _74.SignatureDescriptor_Data;
                    toAminoMsg(message: _74.SignatureDescriptor_Data): _74.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _74.SignatureDescriptor_DataProtoMsg): _74.SignatureDescriptor_Data;
                    toProto(message: _74.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _74.SignatureDescriptor_Data): _74.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _74.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _74.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_74.SignatureDescriptor_Data_Single>): _74.SignatureDescriptor_Data_Single;
                    fromAmino(object: _74.SignatureDescriptor_Data_SingleAmino): _74.SignatureDescriptor_Data_Single;
                    toAmino(message: _74.SignatureDescriptor_Data_Single): _74.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _74.SignatureDescriptor_Data_SingleAminoMsg): _74.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _74.SignatureDescriptor_Data_Single): _74.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _74.SignatureDescriptor_Data_SingleProtoMsg): _74.SignatureDescriptor_Data_Single;
                    toProto(message: _74.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _74.SignatureDescriptor_Data_Single): _74.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _74.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _74.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_74.SignatureDescriptor_Data_Multi>): _74.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _74.SignatureDescriptor_Data_MultiAmino): _74.SignatureDescriptor_Data_Multi;
                    toAmino(message: _74.SignatureDescriptor_Data_Multi): _74.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _74.SignatureDescriptor_Data_MultiAminoMsg): _74.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _74.SignatureDescriptor_Data_Multi): _74.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _74.SignatureDescriptor_Data_MultiProtoMsg): _74.SignatureDescriptor_Data_Multi;
                    toProto(message: _74.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _74.SignatureDescriptor_Data_Multi): _74.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _173.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _75.SimulateRequest): Promise<_75.SimulateResponse>;
                getTx(request: _75.GetTxRequest): Promise<_75.GetTxResponse>;
                broadcastTx(request: _75.BroadcastTxRequest): Promise<_75.BroadcastTxResponse>;
                getTxsEvent(request: _75.GetTxsEventRequest): Promise<_75.GetTxsEventResponse>;
                getBlockWithTxs(request: _75.GetBlockWithTxsRequest): Promise<_75.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _158.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _76.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.Tx;
                fromPartial(object: Partial<_76.Tx>): _76.Tx;
                fromAmino(object: _76.TxAmino): _76.Tx;
                toAmino(message: _76.Tx): _76.TxAmino;
                fromAminoMsg(object: _76.TxAminoMsg): _76.Tx;
                toAminoMsg(message: _76.Tx): _76.TxAminoMsg;
                fromProtoMsg(message: _76.TxProtoMsg): _76.Tx;
                toProto(message: _76.Tx): Uint8Array;
                toProtoMsg(message: _76.Tx): _76.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _76.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.TxRaw;
                fromPartial(object: Partial<_76.TxRaw>): _76.TxRaw;
                fromAmino(object: _76.TxRawAmino): _76.TxRaw;
                toAmino(message: _76.TxRaw): _76.TxRawAmino;
                fromAminoMsg(object: _76.TxRawAminoMsg): _76.TxRaw;
                toAminoMsg(message: _76.TxRaw): _76.TxRawAminoMsg;
                fromProtoMsg(message: _76.TxRawProtoMsg): _76.TxRaw;
                toProto(message: _76.TxRaw): Uint8Array;
                toProtoMsg(message: _76.TxRaw): _76.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _76.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.SignDoc;
                fromPartial(object: Partial<_76.SignDoc>): _76.SignDoc;
                fromAmino(object: _76.SignDocAmino): _76.SignDoc;
                toAmino(message: _76.SignDoc): _76.SignDocAmino;
                fromAminoMsg(object: _76.SignDocAminoMsg): _76.SignDoc;
                toAminoMsg(message: _76.SignDoc): _76.SignDocAminoMsg;
                fromProtoMsg(message: _76.SignDocProtoMsg): _76.SignDoc;
                toProto(message: _76.SignDoc): Uint8Array;
                toProtoMsg(message: _76.SignDoc): _76.SignDocProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _76.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.TxBody;
                fromPartial(object: Partial<_76.TxBody>): _76.TxBody;
                fromAmino(object: _76.TxBodyAmino): _76.TxBody;
                toAmino(message: _76.TxBody): _76.TxBodyAmino;
                fromAminoMsg(object: _76.TxBodyAminoMsg): _76.TxBody;
                toAminoMsg(message: _76.TxBody): _76.TxBodyAminoMsg;
                fromProtoMsg(message: _76.TxBodyProtoMsg): _76.TxBody;
                toProto(message: _76.TxBody): Uint8Array;
                toProtoMsg(message: _76.TxBody): _76.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _76.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.AuthInfo;
                fromPartial(object: Partial<_76.AuthInfo>): _76.AuthInfo;
                fromAmino(object: _76.AuthInfoAmino): _76.AuthInfo;
                toAmino(message: _76.AuthInfo): _76.AuthInfoAmino;
                fromAminoMsg(object: _76.AuthInfoAminoMsg): _76.AuthInfo;
                toAminoMsg(message: _76.AuthInfo): _76.AuthInfoAminoMsg;
                fromProtoMsg(message: _76.AuthInfoProtoMsg): _76.AuthInfo;
                toProto(message: _76.AuthInfo): Uint8Array;
                toProtoMsg(message: _76.AuthInfo): _76.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _76.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.SignerInfo;
                fromPartial(object: Partial<_76.SignerInfo>): _76.SignerInfo;
                fromAmino(object: _76.SignerInfoAmino): _76.SignerInfo;
                toAmino(message: _76.SignerInfo): _76.SignerInfoAmino;
                fromAminoMsg(object: _76.SignerInfoAminoMsg): _76.SignerInfo;
                toAminoMsg(message: _76.SignerInfo): _76.SignerInfoAminoMsg;
                fromProtoMsg(message: _76.SignerInfoProtoMsg): _76.SignerInfo;
                toProto(message: _76.SignerInfo): Uint8Array;
                toProtoMsg(message: _76.SignerInfo): _76.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _76.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.ModeInfo;
                fromPartial(object: Partial<_76.ModeInfo>): _76.ModeInfo;
                fromAmino(object: _76.ModeInfoAmino): _76.ModeInfo;
                toAmino(message: _76.ModeInfo): _76.ModeInfoAmino;
                fromAminoMsg(object: _76.ModeInfoAminoMsg): _76.ModeInfo;
                toAminoMsg(message: _76.ModeInfo): _76.ModeInfoAminoMsg;
                fromProtoMsg(message: _76.ModeInfoProtoMsg): _76.ModeInfo;
                toProto(message: _76.ModeInfo): Uint8Array;
                toProtoMsg(message: _76.ModeInfo): _76.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _76.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.ModeInfo_Single;
                fromPartial(object: Partial<_76.ModeInfo_Single>): _76.ModeInfo_Single;
                fromAmino(object: _76.ModeInfo_SingleAmino): _76.ModeInfo_Single;
                toAmino(message: _76.ModeInfo_Single): _76.ModeInfo_SingleAmino;
                fromAminoMsg(object: _76.ModeInfo_SingleAminoMsg): _76.ModeInfo_Single;
                toAminoMsg(message: _76.ModeInfo_Single): _76.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _76.ModeInfo_SingleProtoMsg): _76.ModeInfo_Single;
                toProto(message: _76.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _76.ModeInfo_Single): _76.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _76.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.ModeInfo_Multi;
                fromPartial(object: Partial<_76.ModeInfo_Multi>): _76.ModeInfo_Multi;
                fromAmino(object: _76.ModeInfo_MultiAmino): _76.ModeInfo_Multi;
                toAmino(message: _76.ModeInfo_Multi): _76.ModeInfo_MultiAmino;
                fromAminoMsg(object: _76.ModeInfo_MultiAminoMsg): _76.ModeInfo_Multi;
                toAminoMsg(message: _76.ModeInfo_Multi): _76.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _76.ModeInfo_MultiProtoMsg): _76.ModeInfo_Multi;
                toProto(message: _76.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _76.ModeInfo_Multi): _76.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _76.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.Fee;
                fromPartial(object: Partial<_76.Fee>): _76.Fee;
                fromAmino(object: _76.FeeAmino): _76.Fee;
                toAmino(message: _76.Fee): _76.FeeAmino;
                fromAminoMsg(object: _76.FeeAminoMsg): _76.Fee;
                toAminoMsg(message: _76.Fee): _76.FeeAminoMsg;
                fromProtoMsg(message: _76.FeeProtoMsg): _76.Fee;
                toProto(message: _76.Fee): Uint8Array;
                toProtoMsg(message: _76.Fee): _76.FeeProtoMsg;
            };
            orderByFromJSON(object: any): _75.OrderBy;
            orderByToJSON(object: _75.OrderBy): string;
            broadcastModeFromJSON(object: any): _75.BroadcastMode;
            broadcastModeToJSON(object: _75.BroadcastMode): string;
            OrderBy: typeof _75.OrderBy;
            OrderBySDKType: typeof _75.OrderBy;
            OrderByAmino: typeof _75.OrderBy;
            BroadcastMode: typeof _75.BroadcastMode;
            BroadcastModeSDKType: typeof _75.BroadcastMode;
            BroadcastModeAmino: typeof _75.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _75.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.GetTxsEventRequest;
                fromPartial(object: Partial<_75.GetTxsEventRequest>): _75.GetTxsEventRequest;
                fromAmino(object: _75.GetTxsEventRequestAmino): _75.GetTxsEventRequest;
                toAmino(message: _75.GetTxsEventRequest): _75.GetTxsEventRequestAmino;
                fromAminoMsg(object: _75.GetTxsEventRequestAminoMsg): _75.GetTxsEventRequest;
                toAminoMsg(message: _75.GetTxsEventRequest): _75.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _75.GetTxsEventRequestProtoMsg): _75.GetTxsEventRequest;
                toProto(message: _75.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _75.GetTxsEventRequest): _75.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _75.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.GetTxsEventResponse;
                fromPartial(object: Partial<_75.GetTxsEventResponse>): _75.GetTxsEventResponse;
                fromAmino(object: _75.GetTxsEventResponseAmino): _75.GetTxsEventResponse;
                toAmino(message: _75.GetTxsEventResponse): _75.GetTxsEventResponseAmino;
                fromAminoMsg(object: _75.GetTxsEventResponseAminoMsg): _75.GetTxsEventResponse;
                toAminoMsg(message: _75.GetTxsEventResponse): _75.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _75.GetTxsEventResponseProtoMsg): _75.GetTxsEventResponse;
                toProto(message: _75.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _75.GetTxsEventResponse): _75.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _75.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.BroadcastTxRequest;
                fromPartial(object: Partial<_75.BroadcastTxRequest>): _75.BroadcastTxRequest;
                fromAmino(object: _75.BroadcastTxRequestAmino): _75.BroadcastTxRequest;
                toAmino(message: _75.BroadcastTxRequest): _75.BroadcastTxRequestAmino;
                fromAminoMsg(object: _75.BroadcastTxRequestAminoMsg): _75.BroadcastTxRequest;
                toAminoMsg(message: _75.BroadcastTxRequest): _75.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _75.BroadcastTxRequestProtoMsg): _75.BroadcastTxRequest;
                toProto(message: _75.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _75.BroadcastTxRequest): _75.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _75.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.BroadcastTxResponse;
                fromPartial(object: Partial<_75.BroadcastTxResponse>): _75.BroadcastTxResponse;
                fromAmino(object: _75.BroadcastTxResponseAmino): _75.BroadcastTxResponse;
                toAmino(message: _75.BroadcastTxResponse): _75.BroadcastTxResponseAmino;
                fromAminoMsg(object: _75.BroadcastTxResponseAminoMsg): _75.BroadcastTxResponse;
                toAminoMsg(message: _75.BroadcastTxResponse): _75.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _75.BroadcastTxResponseProtoMsg): _75.BroadcastTxResponse;
                toProto(message: _75.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _75.BroadcastTxResponse): _75.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _75.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.SimulateRequest;
                fromPartial(object: Partial<_75.SimulateRequest>): _75.SimulateRequest;
                fromAmino(object: _75.SimulateRequestAmino): _75.SimulateRequest;
                toAmino(message: _75.SimulateRequest): _75.SimulateRequestAmino;
                fromAminoMsg(object: _75.SimulateRequestAminoMsg): _75.SimulateRequest;
                toAminoMsg(message: _75.SimulateRequest): _75.SimulateRequestAminoMsg;
                fromProtoMsg(message: _75.SimulateRequestProtoMsg): _75.SimulateRequest;
                toProto(message: _75.SimulateRequest): Uint8Array;
                toProtoMsg(message: _75.SimulateRequest): _75.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _75.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.SimulateResponse;
                fromPartial(object: Partial<_75.SimulateResponse>): _75.SimulateResponse;
                fromAmino(object: _75.SimulateResponseAmino): _75.SimulateResponse;
                toAmino(message: _75.SimulateResponse): _75.SimulateResponseAmino;
                fromAminoMsg(object: _75.SimulateResponseAminoMsg): _75.SimulateResponse;
                toAminoMsg(message: _75.SimulateResponse): _75.SimulateResponseAminoMsg;
                fromProtoMsg(message: _75.SimulateResponseProtoMsg): _75.SimulateResponse;
                toProto(message: _75.SimulateResponse): Uint8Array;
                toProtoMsg(message: _75.SimulateResponse): _75.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _75.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.GetTxRequest;
                fromPartial(object: Partial<_75.GetTxRequest>): _75.GetTxRequest;
                fromAmino(object: _75.GetTxRequestAmino): _75.GetTxRequest;
                toAmino(message: _75.GetTxRequest): _75.GetTxRequestAmino;
                fromAminoMsg(object: _75.GetTxRequestAminoMsg): _75.GetTxRequest;
                toAminoMsg(message: _75.GetTxRequest): _75.GetTxRequestAminoMsg;
                fromProtoMsg(message: _75.GetTxRequestProtoMsg): _75.GetTxRequest;
                toProto(message: _75.GetTxRequest): Uint8Array;
                toProtoMsg(message: _75.GetTxRequest): _75.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _75.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.GetTxResponse;
                fromPartial(object: Partial<_75.GetTxResponse>): _75.GetTxResponse;
                fromAmino(object: _75.GetTxResponseAmino): _75.GetTxResponse;
                toAmino(message: _75.GetTxResponse): _75.GetTxResponseAmino;
                fromAminoMsg(object: _75.GetTxResponseAminoMsg): _75.GetTxResponse;
                toAminoMsg(message: _75.GetTxResponse): _75.GetTxResponseAminoMsg;
                fromProtoMsg(message: _75.GetTxResponseProtoMsg): _75.GetTxResponse;
                toProto(message: _75.GetTxResponse): Uint8Array;
                toProtoMsg(message: _75.GetTxResponse): _75.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _75.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_75.GetBlockWithTxsRequest>): _75.GetBlockWithTxsRequest;
                fromAmino(object: _75.GetBlockWithTxsRequestAmino): _75.GetBlockWithTxsRequest;
                toAmino(message: _75.GetBlockWithTxsRequest): _75.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _75.GetBlockWithTxsRequestAminoMsg): _75.GetBlockWithTxsRequest;
                toAminoMsg(message: _75.GetBlockWithTxsRequest): _75.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _75.GetBlockWithTxsRequestProtoMsg): _75.GetBlockWithTxsRequest;
                toProto(message: _75.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _75.GetBlockWithTxsRequest): _75.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _75.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_75.GetBlockWithTxsResponse>): _75.GetBlockWithTxsResponse;
                fromAmino(object: _75.GetBlockWithTxsResponseAmino): _75.GetBlockWithTxsResponse;
                toAmino(message: _75.GetBlockWithTxsResponse): _75.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _75.GetBlockWithTxsResponseAminoMsg): _75.GetBlockWithTxsResponse;
                toAminoMsg(message: _75.GetBlockWithTxsResponse): _75.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _75.GetBlockWithTxsResponseProtoMsg): _75.GetBlockWithTxsResponse;
                toProto(message: _75.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _75.GetBlockWithTxsResponse): _75.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _184.MsgClientImpl;
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
                    v1beta1: _175.MsgClientImpl;
                };
                bank: {
                    v1beta1: _176.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _177.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _178.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _179.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _180.MsgClientImpl;
                };
                gov: {
                    v1beta1: _181.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _182.MsgClientImpl;
                };
                staking: {
                    v1beta1: _183.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _184.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _29.QueryAccountsRequest): Promise<_29.QueryAccountsResponse>;
                        account(request: _29.QueryAccountRequest): Promise<_29.QueryAccountResponse>;
                        params(request?: _29.QueryParamsRequest): Promise<_29.QueryParamsResponse>;
                        moduleAccountByName(request: _29.QueryModuleAccountByNameRequest): Promise<_29.QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _33.QueryGrantsRequest): Promise<_33.QueryGrantsResponse>;
                        granterGrants(request: _33.QueryGranterGrantsRequest): Promise<_33.QueryGranterGrantsResponse>;
                        granteeGrants(request: _33.QueryGranteeGrantsRequest): Promise<_33.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _12.QueryBalanceRequest): Promise<_12.QueryBalanceResponse>;
                        allBalances(request: _12.QueryAllBalancesRequest): Promise<_12.QueryAllBalancesResponse>;
                        spendableBalances(request: _12.QuerySpendableBalancesRequest): Promise<_12.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _12.QueryTotalSupplyRequest): Promise<_12.QueryTotalSupplyResponse>;
                        supplyOf(request: _12.QuerySupplyOfRequest): Promise<_12.QuerySupplyOfResponse>;
                        params(request?: _12.QueryParamsRequest): Promise<_12.QueryParamsResponse>;
                        denomMetadata(request: _12.QueryDenomMetadataRequest): Promise<_12.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _12.QueryDenomsMetadataRequest): Promise<_12.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _18.ConfigRequest): Promise<_18.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _24.GetNodeInfoRequest): Promise<_24.GetNodeInfoResponse>;
                            getSyncing(request?: _24.GetSyncingRequest): Promise<_24.GetSyncingResponse>;
                            getLatestBlock(request?: _24.GetLatestBlockRequest): Promise<_24.GetLatestBlockResponse>;
                            getBlockByHeight(request: _24.GetBlockByHeightRequest): Promise<_24.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _24.GetLatestValidatorSetRequest): Promise<_24.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _24.GetValidatorSetByHeightRequest): Promise<_24.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _45.QueryParamsRequest): Promise<_45.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _45.QueryValidatorOutstandingRewardsRequest): Promise<_45.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _45.QueryValidatorCommissionRequest): Promise<_45.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _45.QueryValidatorSlashesRequest): Promise<_45.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _45.QueryDelegationRewardsRequest): Promise<_45.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _45.QueryDelegationTotalRewardsRequest): Promise<_45.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _45.QueryDelegatorValidatorsRequest): Promise<_45.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _45.QueryDelegatorWithdrawAddressRequest): Promise<_45.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _45.QueryCommunityPoolRequest): Promise<_45.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _49.QueryEvidenceRequest): Promise<_49.QueryEvidenceResponse>;
                        allEvidence(request?: _49.QueryAllEvidenceRequest): Promise<_49.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _53.QueryAllowanceRequest): Promise<_53.QueryAllowanceResponse>;
                        allowances(request: _53.QueryAllowancesRequest): Promise<_53.QueryAllowancesResponse>;
                        allowancesByGranter(request: _53.QueryAllowancesByGranterRequest): Promise<_53.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _58.QueryProposalRequest): Promise<_58.QueryProposalResponse>;
                        proposals(request: _58.QueryProposalsRequest): Promise<_58.QueryProposalsResponse>;
                        vote(request: _58.QueryVoteRequest): Promise<_58.QueryVoteResponse>;
                        votes(request: _58.QueryVotesRequest): Promise<_58.QueryVotesResponse>;
                        params(request: _58.QueryParamsRequest): Promise<_58.QueryParamsResponse>;
                        deposit(request: _58.QueryDepositRequest): Promise<_58.QueryDepositResponse>;
                        deposits(request: _58.QueryDepositsRequest): Promise<_58.QueryDepositsResponse>;
                        tallyResult(request: _58.QueryTallyResultRequest): Promise<_58.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _62.QueryParamsRequest): Promise<_62.QueryParamsResponse>;
                        inflation(request?: _62.QueryInflationRequest): Promise<_62.QueryInflationResponse>;
                        annualProvisions(request?: _62.QueryAnnualProvisionsRequest): Promise<_62.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _64.QueryParamsRequest): Promise<_64.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _66.QueryParamsRequest): Promise<_66.QueryParamsResponse>;
                        signingInfo(request: _66.QuerySigningInfoRequest): Promise<_66.QuerySigningInfoResponse>;
                        signingInfos(request?: _66.QuerySigningInfosRequest): Promise<_66.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _71.QueryValidatorsRequest): Promise<_71.QueryValidatorsResponse>;
                        validator(request: _71.QueryValidatorRequest): Promise<_71.QueryValidatorResponse>;
                        validatorDelegations(request: _71.QueryValidatorDelegationsRequest): Promise<_71.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _71.QueryValidatorUnbondingDelegationsRequest): Promise<_71.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _71.QueryDelegationRequest): Promise<_71.QueryDelegationResponse>;
                        unbondingDelegation(request: _71.QueryUnbondingDelegationRequest): Promise<_71.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _71.QueryDelegatorDelegationsRequest): Promise<_71.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _71.QueryDelegatorUnbondingDelegationsRequest): Promise<_71.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _71.QueryRedelegationsRequest): Promise<_71.QueryRedelegationsResponse>;
                        delegatorValidators(request: _71.QueryDelegatorValidatorsRequest): Promise<_71.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _71.QueryDelegatorValidatorRequest): Promise<_71.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _71.QueryHistoricalInfoRequest): Promise<_71.QueryHistoricalInfoResponse>;
                        pool(request?: _71.QueryPoolRequest): Promise<_71.QueryPoolResponse>;
                        params(request?: _71.QueryParamsRequest): Promise<_71.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _75.SimulateRequest): Promise<_75.SimulateResponse>;
                        getTx(request: _75.GetTxRequest): Promise<_75.GetTxResponse>;
                        broadcastTx(request: _75.BroadcastTxRequest): Promise<_75.BroadcastTxResponse>;
                        getTxsEvent(request: _75.GetTxsEventRequest): Promise<_75.GetTxsEventResponse>;
                        getBlockWithTxs(request: _75.GetBlockWithTxsRequest): Promise<_75.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _26.QueryCurrentPlanRequest): Promise<_26.QueryCurrentPlanResponse>;
                        appliedPlan(request: _26.QueryAppliedPlanRequest): Promise<_26.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _26.QueryUpgradedConsensusStateRequest): Promise<_26.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _26.QueryModuleVersionsRequest): Promise<_26.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _145.LCDQueryClient;
                };
                authz: {
                    v1beta1: _146.LCDQueryClient;
                };
                bank: {
                    v1beta1: _147.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _148.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _149.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _150.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _151.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _152.LCDQueryClient;
                };
                gov: {
                    v1beta1: _153.LCDQueryClient;
                };
                mint: {
                    v1beta1: _154.LCDQueryClient;
                };
                params: {
                    v1beta1: _155.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _156.LCDQueryClient;
                };
                staking: {
                    v1beta1: _157.LCDQueryClient;
                };
                tx: {
                    v1beta1: _158.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _159.LCDQueryClient;
                };
            };
        }>;
    };
}
