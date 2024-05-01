import * as _96 from "./applications/fee/v1/ack";
import * as _97 from "./applications/fee/v1/fee";
import * as _98 from "./applications/fee/v1/genesis";
import * as _99 from "./applications/fee/v1/metadata";
import * as _100 from "./applications/fee/v1/query";
import * as _101 from "./applications/fee/v1/tx";
import * as _102 from "./applications/interchain_accounts/controller/v1/controller";
import * as _103 from "./applications/interchain_accounts/controller/v1/query";
import * as _104 from "./applications/interchain_accounts/host/v1/host";
import * as _105 from "./applications/interchain_accounts/host/v1/query";
import * as _106 from "./applications/interchain_accounts/v1/account";
import * as _107 from "./applications/interchain_accounts/v1/genesis";
import * as _108 from "./applications/interchain_accounts/v1/metadata";
import * as _109 from "./applications/interchain_accounts/v1/packet";
import * as _110 from "./applications/transfer/v1/genesis";
import * as _111 from "./applications/transfer/v1/query";
import * as _112 from "./applications/transfer/v1/transfer";
import * as _113 from "./applications/transfer/v1/tx";
import * as _114 from "./applications/transfer/v2/packet";
import * as _115 from "./core/channel/v1/channel";
import * as _116 from "./core/channel/v1/genesis";
import * as _117 from "./core/channel/v1/query";
import * as _118 from "./core/channel/v1/tx";
import * as _119 from "./core/client/v1/client";
import * as _120 from "./core/client/v1/genesis";
import * as _121 from "./core/client/v1/query";
import * as _122 from "./core/client/v1/tx";
import * as _123 from "./core/commitment/v1/commitment";
import * as _124 from "./core/connection/v1/connection";
import * as _125 from "./core/connection/v1/genesis";
import * as _126 from "./core/connection/v1/query";
import * as _127 from "./core/connection/v1/tx";
import * as _128 from "./core/types/v1/genesis";
import * as _129 from "./lightclients/localhost/v1/localhost";
import * as _130 from "./lightclients/solomachine/v1/solomachine";
import * as _131 from "./lightclients/solomachine/v2/solomachine";
import * as _132 from "./lightclients/tendermint/v1/tendermint";
import * as _246 from "./applications/fee/v1/query.lcd";
import * as _247 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _248 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _249 from "./applications/transfer/v1/query.lcd";
import * as _250 from "./core/channel/v1/query.lcd";
import * as _251 from "./core/client/v1/query.lcd";
import * as _252 from "./core/connection/v1/query.lcd";
import * as _253 from "./applications/fee/v1/query.rpc.Query";
import * as _254 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _255 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _256 from "./applications/transfer/v1/query.rpc.Query";
import * as _257 from "./core/channel/v1/query.rpc.Query";
import * as _258 from "./core/client/v1/query.rpc.Query";
import * as _259 from "./core/connection/v1/query.rpc.Query";
import * as _260 from "./applications/fee/v1/tx.rpc.msg";
import * as _261 from "./applications/transfer/v1/tx.rpc.msg";
import * as _262 from "./core/channel/v1/tx.rpc.msg";
import * as _263 from "./core/client/v1/tx.rpc.msg";
import * as _264 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace fee {
            const v1: {
                MsgClientImpl: typeof _260.MsgClientImpl;
                QueryClientImpl: typeof _253.QueryClientImpl;
                createRpcQueryExtension: (base: QueryClient) => {
                    incentivizedPackets(request: _100.QueryIncentivizedPacketsRequest): Promise<_100.QueryIncentivizedPacketsResponse>;
                    incentivizedPacket(request: _100.QueryIncentivizedPacketRequest): Promise<_100.QueryIncentivizedPacketResponse>;
                    incentivizedPacketsForChannel(request: _100.QueryIncentivizedPacketsForChannelRequest): Promise<_100.QueryIncentivizedPacketsForChannelResponse>;
                    totalRecvFees(request: _100.QueryTotalRecvFeesRequest): Promise<_100.QueryTotalRecvFeesResponse>;
                    totalAckFees(request: _100.QueryTotalAckFeesRequest): Promise<_100.QueryTotalAckFeesResponse>;
                    totalTimeoutFees(request: _100.QueryTotalTimeoutFeesRequest): Promise<_100.QueryTotalTimeoutFeesResponse>;
                    payee(request: _100.QueryPayeeRequest): Promise<_100.QueryPayeeResponse>;
                    counterpartyPayee(request: _100.QueryCounterpartyPayeeRequest): Promise<_100.QueryCounterpartyPayeeResponse>;
                    feeEnabledChannels(request: _100.QueryFeeEnabledChannelsRequest): Promise<_100.QueryFeeEnabledChannelsResponse>;
                    feeEnabledChannel(request: _100.QueryFeeEnabledChannelRequest): Promise<_100.QueryFeeEnabledChannelResponse>;
                };
                LCDQueryClient: typeof _246.LCDQueryClient;
                registry: readonly [string, GeneratedType][];
                load: (protoRegistry: Registry) => void;
                MessageComposer: {
                    encoded: {
                        registerPayee(value: _101.MsgRegisterPayee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        registerCounterpartyPayee(value: _101.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        payPacketFee(value: _101.MsgPayPacketFee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        payPacketFeeAsync(value: _101.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        registerPayee(value: _101.MsgRegisterPayee): {
                            typeUrl: string;
                            value: _101.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: _101.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: _101.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: _101.MsgPayPacketFee): {
                            typeUrl: string;
                            value: _101.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: _101.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: _101.MsgPayPacketFeeAsync;
                        };
                    };
                    fromJSON: {
                        registerPayee(value: any): {
                            typeUrl: string;
                            value: _101.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: any): {
                            typeUrl: string;
                            value: _101.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: any): {
                            typeUrl: string;
                            value: _101.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: any): {
                            typeUrl: string;
                            value: _101.MsgPayPacketFeeAsync;
                        };
                    };
                    fromPartial: {
                        registerPayee(value: _101.MsgRegisterPayee): {
                            typeUrl: string;
                            value: _101.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: _101.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: _101.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: _101.MsgPayPacketFee): {
                            typeUrl: string;
                            value: _101.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: _101.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: _101.MsgPayPacketFeeAsync;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.fee.v1.MsgRegisterPayee": {
                        aminoType: string;
                        toAmino: (message: _101.MsgRegisterPayee) => _101.MsgRegisterPayeeAmino;
                        fromAmino: (object: _101.MsgRegisterPayeeAmino) => _101.MsgRegisterPayee;
                    };
                    "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee": {
                        aminoType: string;
                        toAmino: (message: _101.MsgRegisterCounterpartyPayee) => _101.MsgRegisterCounterpartyPayeeAmino;
                        fromAmino: (object: _101.MsgRegisterCounterpartyPayeeAmino) => _101.MsgRegisterCounterpartyPayee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFee": {
                        aminoType: string;
                        toAmino: (message: _101.MsgPayPacketFee) => _101.MsgPayPacketFeeAmino;
                        fromAmino: (object: _101.MsgPayPacketFeeAmino) => _101.MsgPayPacketFee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFeeAsync": {
                        aminoType: string;
                        toAmino: (message: _101.MsgPayPacketFeeAsync) => _101.MsgPayPacketFeeAsyncAmino;
                        fromAmino: (object: _101.MsgPayPacketFeeAsyncAmino) => _101.MsgPayPacketFeeAsync;
                    };
                };
                MsgRegisterPayee: {
                    typeUrl: string;
                    encode(message: _101.MsgRegisterPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _101.MsgRegisterPayee;
                    fromPartial(object: Partial<_101.MsgRegisterPayee>): _101.MsgRegisterPayee;
                    fromAmino(object: _101.MsgRegisterPayeeAmino): _101.MsgRegisterPayee;
                    toAmino(message: _101.MsgRegisterPayee): _101.MsgRegisterPayeeAmino;
                    fromAminoMsg(object: _101.MsgRegisterPayeeAminoMsg): _101.MsgRegisterPayee;
                    toAminoMsg(message: _101.MsgRegisterPayee): _101.MsgRegisterPayeeAminoMsg;
                    fromProtoMsg(message: _101.MsgRegisterPayeeProtoMsg): _101.MsgRegisterPayee;
                    toProto(message: _101.MsgRegisterPayee): Uint8Array;
                    toProtoMsg(message: _101.MsgRegisterPayee): _101.MsgRegisterPayeeProtoMsg;
                };
                MsgRegisterPayeeResponse: {
                    typeUrl: string;
                    encode(_: _101.MsgRegisterPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _101.MsgRegisterPayeeResponse;
                    fromPartial(_: Partial<_101.MsgRegisterPayeeResponse>): _101.MsgRegisterPayeeResponse;
                    fromAmino(_: _101.MsgRegisterPayeeResponseAmino): _101.MsgRegisterPayeeResponse;
                    toAmino(_: _101.MsgRegisterPayeeResponse): _101.MsgRegisterPayeeResponseAmino;
                    fromAminoMsg(object: _101.MsgRegisterPayeeResponseAminoMsg): _101.MsgRegisterPayeeResponse;
                    toAminoMsg(message: _101.MsgRegisterPayeeResponse): _101.MsgRegisterPayeeResponseAminoMsg;
                    fromProtoMsg(message: _101.MsgRegisterPayeeResponseProtoMsg): _101.MsgRegisterPayeeResponse;
                    toProto(message: _101.MsgRegisterPayeeResponse): Uint8Array;
                    toProtoMsg(message: _101.MsgRegisterPayeeResponse): _101.MsgRegisterPayeeResponseProtoMsg;
                };
                MsgRegisterCounterpartyPayee: {
                    typeUrl: string;
                    encode(message: _101.MsgRegisterCounterpartyPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _101.MsgRegisterCounterpartyPayee;
                    fromPartial(object: Partial<_101.MsgRegisterCounterpartyPayee>): _101.MsgRegisterCounterpartyPayee;
                    fromAmino(object: _101.MsgRegisterCounterpartyPayeeAmino): _101.MsgRegisterCounterpartyPayee;
                    toAmino(message: _101.MsgRegisterCounterpartyPayee): _101.MsgRegisterCounterpartyPayeeAmino;
                    fromAminoMsg(object: _101.MsgRegisterCounterpartyPayeeAminoMsg): _101.MsgRegisterCounterpartyPayee;
                    toAminoMsg(message: _101.MsgRegisterCounterpartyPayee): _101.MsgRegisterCounterpartyPayeeAminoMsg;
                    fromProtoMsg(message: _101.MsgRegisterCounterpartyPayeeProtoMsg): _101.MsgRegisterCounterpartyPayee;
                    toProto(message: _101.MsgRegisterCounterpartyPayee): Uint8Array;
                    toProtoMsg(message: _101.MsgRegisterCounterpartyPayee): _101.MsgRegisterCounterpartyPayeeProtoMsg;
                };
                MsgRegisterCounterpartyPayeeResponse: {
                    typeUrl: string;
                    encode(_: _101.MsgRegisterCounterpartyPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _101.MsgRegisterCounterpartyPayeeResponse;
                    fromPartial(_: Partial<_101.MsgRegisterCounterpartyPayeeResponse>): _101.MsgRegisterCounterpartyPayeeResponse;
                    fromAmino(_: _101.MsgRegisterCounterpartyPayeeResponseAmino): _101.MsgRegisterCounterpartyPayeeResponse;
                    toAmino(_: _101.MsgRegisterCounterpartyPayeeResponse): _101.MsgRegisterCounterpartyPayeeResponseAmino;
                    fromAminoMsg(object: _101.MsgRegisterCounterpartyPayeeResponseAminoMsg): _101.MsgRegisterCounterpartyPayeeResponse;
                    toAminoMsg(message: _101.MsgRegisterCounterpartyPayeeResponse): _101.MsgRegisterCounterpartyPayeeResponseAminoMsg;
                    fromProtoMsg(message: _101.MsgRegisterCounterpartyPayeeResponseProtoMsg): _101.MsgRegisterCounterpartyPayeeResponse;
                    toProto(message: _101.MsgRegisterCounterpartyPayeeResponse): Uint8Array;
                    toProtoMsg(message: _101.MsgRegisterCounterpartyPayeeResponse): _101.MsgRegisterCounterpartyPayeeResponseProtoMsg;
                };
                MsgPayPacketFee: {
                    typeUrl: string;
                    encode(message: _101.MsgPayPacketFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _101.MsgPayPacketFee;
                    fromPartial(object: Partial<_101.MsgPayPacketFee>): _101.MsgPayPacketFee;
                    fromAmino(object: _101.MsgPayPacketFeeAmino): _101.MsgPayPacketFee;
                    toAmino(message: _101.MsgPayPacketFee): _101.MsgPayPacketFeeAmino;
                    fromAminoMsg(object: _101.MsgPayPacketFeeAminoMsg): _101.MsgPayPacketFee;
                    toAminoMsg(message: _101.MsgPayPacketFee): _101.MsgPayPacketFeeAminoMsg;
                    fromProtoMsg(message: _101.MsgPayPacketFeeProtoMsg): _101.MsgPayPacketFee;
                    toProto(message: _101.MsgPayPacketFee): Uint8Array;
                    toProtoMsg(message: _101.MsgPayPacketFee): _101.MsgPayPacketFeeProtoMsg;
                };
                MsgPayPacketFeeResponse: {
                    typeUrl: string;
                    encode(_: _101.MsgPayPacketFeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _101.MsgPayPacketFeeResponse;
                    fromPartial(_: Partial<_101.MsgPayPacketFeeResponse>): _101.MsgPayPacketFeeResponse;
                    fromAmino(_: _101.MsgPayPacketFeeResponseAmino): _101.MsgPayPacketFeeResponse;
                    toAmino(_: _101.MsgPayPacketFeeResponse): _101.MsgPayPacketFeeResponseAmino;
                    fromAminoMsg(object: _101.MsgPayPacketFeeResponseAminoMsg): _101.MsgPayPacketFeeResponse;
                    toAminoMsg(message: _101.MsgPayPacketFeeResponse): _101.MsgPayPacketFeeResponseAminoMsg;
                    fromProtoMsg(message: _101.MsgPayPacketFeeResponseProtoMsg): _101.MsgPayPacketFeeResponse;
                    toProto(message: _101.MsgPayPacketFeeResponse): Uint8Array;
                    toProtoMsg(message: _101.MsgPayPacketFeeResponse): _101.MsgPayPacketFeeResponseProtoMsg;
                };
                MsgPayPacketFeeAsync: {
                    typeUrl: string;
                    encode(message: _101.MsgPayPacketFeeAsync, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _101.MsgPayPacketFeeAsync;
                    fromPartial(object: Partial<_101.MsgPayPacketFeeAsync>): _101.MsgPayPacketFeeAsync;
                    fromAmino(object: _101.MsgPayPacketFeeAsyncAmino): _101.MsgPayPacketFeeAsync;
                    toAmino(message: _101.MsgPayPacketFeeAsync): _101.MsgPayPacketFeeAsyncAmino;
                    fromAminoMsg(object: _101.MsgPayPacketFeeAsyncAminoMsg): _101.MsgPayPacketFeeAsync;
                    toAminoMsg(message: _101.MsgPayPacketFeeAsync): _101.MsgPayPacketFeeAsyncAminoMsg;
                    fromProtoMsg(message: _101.MsgPayPacketFeeAsyncProtoMsg): _101.MsgPayPacketFeeAsync;
                    toProto(message: _101.MsgPayPacketFeeAsync): Uint8Array;
                    toProtoMsg(message: _101.MsgPayPacketFeeAsync): _101.MsgPayPacketFeeAsyncProtoMsg;
                };
                MsgPayPacketFeeAsyncResponse: {
                    typeUrl: string;
                    encode(_: _101.MsgPayPacketFeeAsyncResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _101.MsgPayPacketFeeAsyncResponse;
                    fromPartial(_: Partial<_101.MsgPayPacketFeeAsyncResponse>): _101.MsgPayPacketFeeAsyncResponse;
                    fromAmino(_: _101.MsgPayPacketFeeAsyncResponseAmino): _101.MsgPayPacketFeeAsyncResponse;
                    toAmino(_: _101.MsgPayPacketFeeAsyncResponse): _101.MsgPayPacketFeeAsyncResponseAmino;
                    fromAminoMsg(object: _101.MsgPayPacketFeeAsyncResponseAminoMsg): _101.MsgPayPacketFeeAsyncResponse;
                    toAminoMsg(message: _101.MsgPayPacketFeeAsyncResponse): _101.MsgPayPacketFeeAsyncResponseAminoMsg;
                    fromProtoMsg(message: _101.MsgPayPacketFeeAsyncResponseProtoMsg): _101.MsgPayPacketFeeAsyncResponse;
                    toProto(message: _101.MsgPayPacketFeeAsyncResponse): Uint8Array;
                    toProtoMsg(message: _101.MsgPayPacketFeeAsyncResponse): _101.MsgPayPacketFeeAsyncResponseProtoMsg;
                };
                QueryIncentivizedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _100.QueryIncentivizedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.QueryIncentivizedPacketsRequest;
                    fromPartial(object: Partial<_100.QueryIncentivizedPacketsRequest>): _100.QueryIncentivizedPacketsRequest;
                    fromAmino(object: _100.QueryIncentivizedPacketsRequestAmino): _100.QueryIncentivizedPacketsRequest;
                    toAmino(message: _100.QueryIncentivizedPacketsRequest): _100.QueryIncentivizedPacketsRequestAmino;
                    fromAminoMsg(object: _100.QueryIncentivizedPacketsRequestAminoMsg): _100.QueryIncentivizedPacketsRequest;
                    toAminoMsg(message: _100.QueryIncentivizedPacketsRequest): _100.QueryIncentivizedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _100.QueryIncentivizedPacketsRequestProtoMsg): _100.QueryIncentivizedPacketsRequest;
                    toProto(message: _100.QueryIncentivizedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _100.QueryIncentivizedPacketsRequest): _100.QueryIncentivizedPacketsRequestProtoMsg;
                };
                QueryIncentivizedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _100.QueryIncentivizedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.QueryIncentivizedPacketsResponse;
                    fromPartial(object: Partial<_100.QueryIncentivizedPacketsResponse>): _100.QueryIncentivizedPacketsResponse;
                    fromAmino(object: _100.QueryIncentivizedPacketsResponseAmino): _100.QueryIncentivizedPacketsResponse;
                    toAmino(message: _100.QueryIncentivizedPacketsResponse): _100.QueryIncentivizedPacketsResponseAmino;
                    fromAminoMsg(object: _100.QueryIncentivizedPacketsResponseAminoMsg): _100.QueryIncentivizedPacketsResponse;
                    toAminoMsg(message: _100.QueryIncentivizedPacketsResponse): _100.QueryIncentivizedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _100.QueryIncentivizedPacketsResponseProtoMsg): _100.QueryIncentivizedPacketsResponse;
                    toProto(message: _100.QueryIncentivizedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _100.QueryIncentivizedPacketsResponse): _100.QueryIncentivizedPacketsResponseProtoMsg;
                };
                QueryIncentivizedPacketRequest: {
                    typeUrl: string;
                    encode(message: _100.QueryIncentivizedPacketRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.QueryIncentivizedPacketRequest;
                    fromPartial(object: Partial<_100.QueryIncentivizedPacketRequest>): _100.QueryIncentivizedPacketRequest;
                    fromAmino(object: _100.QueryIncentivizedPacketRequestAmino): _100.QueryIncentivizedPacketRequest;
                    toAmino(message: _100.QueryIncentivizedPacketRequest): _100.QueryIncentivizedPacketRequestAmino;
                    fromAminoMsg(object: _100.QueryIncentivizedPacketRequestAminoMsg): _100.QueryIncentivizedPacketRequest;
                    toAminoMsg(message: _100.QueryIncentivizedPacketRequest): _100.QueryIncentivizedPacketRequestAminoMsg;
                    fromProtoMsg(message: _100.QueryIncentivizedPacketRequestProtoMsg): _100.QueryIncentivizedPacketRequest;
                    toProto(message: _100.QueryIncentivizedPacketRequest): Uint8Array;
                    toProtoMsg(message: _100.QueryIncentivizedPacketRequest): _100.QueryIncentivizedPacketRequestProtoMsg;
                };
                QueryIncentivizedPacketResponse: {
                    typeUrl: string;
                    encode(message: _100.QueryIncentivizedPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.QueryIncentivizedPacketResponse;
                    fromPartial(object: Partial<_100.QueryIncentivizedPacketResponse>): _100.QueryIncentivizedPacketResponse;
                    fromAmino(object: _100.QueryIncentivizedPacketResponseAmino): _100.QueryIncentivizedPacketResponse;
                    toAmino(message: _100.QueryIncentivizedPacketResponse): _100.QueryIncentivizedPacketResponseAmino;
                    fromAminoMsg(object: _100.QueryIncentivizedPacketResponseAminoMsg): _100.QueryIncentivizedPacketResponse;
                    toAminoMsg(message: _100.QueryIncentivizedPacketResponse): _100.QueryIncentivizedPacketResponseAminoMsg;
                    fromProtoMsg(message: _100.QueryIncentivizedPacketResponseProtoMsg): _100.QueryIncentivizedPacketResponse;
                    toProto(message: _100.QueryIncentivizedPacketResponse): Uint8Array;
                    toProtoMsg(message: _100.QueryIncentivizedPacketResponse): _100.QueryIncentivizedPacketResponseProtoMsg;
                };
                QueryIncentivizedPacketsForChannelRequest: {
                    typeUrl: string;
                    encode(message: _100.QueryIncentivizedPacketsForChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.QueryIncentivizedPacketsForChannelRequest;
                    fromPartial(object: Partial<_100.QueryIncentivizedPacketsForChannelRequest>): _100.QueryIncentivizedPacketsForChannelRequest;
                    fromAmino(object: _100.QueryIncentivizedPacketsForChannelRequestAmino): _100.QueryIncentivizedPacketsForChannelRequest;
                    toAmino(message: _100.QueryIncentivizedPacketsForChannelRequest): _100.QueryIncentivizedPacketsForChannelRequestAmino;
                    fromAminoMsg(object: _100.QueryIncentivizedPacketsForChannelRequestAminoMsg): _100.QueryIncentivizedPacketsForChannelRequest;
                    toAminoMsg(message: _100.QueryIncentivizedPacketsForChannelRequest): _100.QueryIncentivizedPacketsForChannelRequestAminoMsg;
                    fromProtoMsg(message: _100.QueryIncentivizedPacketsForChannelRequestProtoMsg): _100.QueryIncentivizedPacketsForChannelRequest;
                    toProto(message: _100.QueryIncentivizedPacketsForChannelRequest): Uint8Array;
                    toProtoMsg(message: _100.QueryIncentivizedPacketsForChannelRequest): _100.QueryIncentivizedPacketsForChannelRequestProtoMsg;
                };
                QueryIncentivizedPacketsForChannelResponse: {
                    typeUrl: string;
                    encode(message: _100.QueryIncentivizedPacketsForChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.QueryIncentivizedPacketsForChannelResponse;
                    fromPartial(object: Partial<_100.QueryIncentivizedPacketsForChannelResponse>): _100.QueryIncentivizedPacketsForChannelResponse;
                    fromAmino(object: _100.QueryIncentivizedPacketsForChannelResponseAmino): _100.QueryIncentivizedPacketsForChannelResponse;
                    toAmino(message: _100.QueryIncentivizedPacketsForChannelResponse): _100.QueryIncentivizedPacketsForChannelResponseAmino;
                    fromAminoMsg(object: _100.QueryIncentivizedPacketsForChannelResponseAminoMsg): _100.QueryIncentivizedPacketsForChannelResponse;
                    toAminoMsg(message: _100.QueryIncentivizedPacketsForChannelResponse): _100.QueryIncentivizedPacketsForChannelResponseAminoMsg;
                    fromProtoMsg(message: _100.QueryIncentivizedPacketsForChannelResponseProtoMsg): _100.QueryIncentivizedPacketsForChannelResponse;
                    toProto(message: _100.QueryIncentivizedPacketsForChannelResponse): Uint8Array;
                    toProtoMsg(message: _100.QueryIncentivizedPacketsForChannelResponse): _100.QueryIncentivizedPacketsForChannelResponseProtoMsg;
                };
                QueryTotalRecvFeesRequest: {
                    typeUrl: string;
                    encode(message: _100.QueryTotalRecvFeesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.QueryTotalRecvFeesRequest;
                    fromPartial(object: Partial<_100.QueryTotalRecvFeesRequest>): _100.QueryTotalRecvFeesRequest;
                    fromAmino(object: _100.QueryTotalRecvFeesRequestAmino): _100.QueryTotalRecvFeesRequest;
                    toAmino(message: _100.QueryTotalRecvFeesRequest): _100.QueryTotalRecvFeesRequestAmino;
                    fromAminoMsg(object: _100.QueryTotalRecvFeesRequestAminoMsg): _100.QueryTotalRecvFeesRequest;
                    toAminoMsg(message: _100.QueryTotalRecvFeesRequest): _100.QueryTotalRecvFeesRequestAminoMsg;
                    fromProtoMsg(message: _100.QueryTotalRecvFeesRequestProtoMsg): _100.QueryTotalRecvFeesRequest;
                    toProto(message: _100.QueryTotalRecvFeesRequest): Uint8Array;
                    toProtoMsg(message: _100.QueryTotalRecvFeesRequest): _100.QueryTotalRecvFeesRequestProtoMsg;
                };
                QueryTotalRecvFeesResponse: {
                    typeUrl: string;
                    encode(message: _100.QueryTotalRecvFeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.QueryTotalRecvFeesResponse;
                    fromPartial(object: Partial<_100.QueryTotalRecvFeesResponse>): _100.QueryTotalRecvFeesResponse;
                    fromAmino(object: _100.QueryTotalRecvFeesResponseAmino): _100.QueryTotalRecvFeesResponse;
                    toAmino(message: _100.QueryTotalRecvFeesResponse): _100.QueryTotalRecvFeesResponseAmino;
                    fromAminoMsg(object: _100.QueryTotalRecvFeesResponseAminoMsg): _100.QueryTotalRecvFeesResponse;
                    toAminoMsg(message: _100.QueryTotalRecvFeesResponse): _100.QueryTotalRecvFeesResponseAminoMsg;
                    fromProtoMsg(message: _100.QueryTotalRecvFeesResponseProtoMsg): _100.QueryTotalRecvFeesResponse;
                    toProto(message: _100.QueryTotalRecvFeesResponse): Uint8Array;
                    toProtoMsg(message: _100.QueryTotalRecvFeesResponse): _100.QueryTotalRecvFeesResponseProtoMsg;
                };
                QueryTotalAckFeesRequest: {
                    typeUrl: string;
                    encode(message: _100.QueryTotalAckFeesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.QueryTotalAckFeesRequest;
                    fromPartial(object: Partial<_100.QueryTotalAckFeesRequest>): _100.QueryTotalAckFeesRequest;
                    fromAmino(object: _100.QueryTotalAckFeesRequestAmino): _100.QueryTotalAckFeesRequest;
                    toAmino(message: _100.QueryTotalAckFeesRequest): _100.QueryTotalAckFeesRequestAmino;
                    fromAminoMsg(object: _100.QueryTotalAckFeesRequestAminoMsg): _100.QueryTotalAckFeesRequest;
                    toAminoMsg(message: _100.QueryTotalAckFeesRequest): _100.QueryTotalAckFeesRequestAminoMsg;
                    fromProtoMsg(message: _100.QueryTotalAckFeesRequestProtoMsg): _100.QueryTotalAckFeesRequest;
                    toProto(message: _100.QueryTotalAckFeesRequest): Uint8Array;
                    toProtoMsg(message: _100.QueryTotalAckFeesRequest): _100.QueryTotalAckFeesRequestProtoMsg;
                };
                QueryTotalAckFeesResponse: {
                    typeUrl: string;
                    encode(message: _100.QueryTotalAckFeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.QueryTotalAckFeesResponse;
                    fromPartial(object: Partial<_100.QueryTotalAckFeesResponse>): _100.QueryTotalAckFeesResponse;
                    fromAmino(object: _100.QueryTotalAckFeesResponseAmino): _100.QueryTotalAckFeesResponse;
                    toAmino(message: _100.QueryTotalAckFeesResponse): _100.QueryTotalAckFeesResponseAmino;
                    fromAminoMsg(object: _100.QueryTotalAckFeesResponseAminoMsg): _100.QueryTotalAckFeesResponse;
                    toAminoMsg(message: _100.QueryTotalAckFeesResponse): _100.QueryTotalAckFeesResponseAminoMsg;
                    fromProtoMsg(message: _100.QueryTotalAckFeesResponseProtoMsg): _100.QueryTotalAckFeesResponse;
                    toProto(message: _100.QueryTotalAckFeesResponse): Uint8Array;
                    toProtoMsg(message: _100.QueryTotalAckFeesResponse): _100.QueryTotalAckFeesResponseProtoMsg;
                };
                QueryTotalTimeoutFeesRequest: {
                    typeUrl: string;
                    encode(message: _100.QueryTotalTimeoutFeesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.QueryTotalTimeoutFeesRequest;
                    fromPartial(object: Partial<_100.QueryTotalTimeoutFeesRequest>): _100.QueryTotalTimeoutFeesRequest;
                    fromAmino(object: _100.QueryTotalTimeoutFeesRequestAmino): _100.QueryTotalTimeoutFeesRequest;
                    toAmino(message: _100.QueryTotalTimeoutFeesRequest): _100.QueryTotalTimeoutFeesRequestAmino;
                    fromAminoMsg(object: _100.QueryTotalTimeoutFeesRequestAminoMsg): _100.QueryTotalTimeoutFeesRequest;
                    toAminoMsg(message: _100.QueryTotalTimeoutFeesRequest): _100.QueryTotalTimeoutFeesRequestAminoMsg;
                    fromProtoMsg(message: _100.QueryTotalTimeoutFeesRequestProtoMsg): _100.QueryTotalTimeoutFeesRequest;
                    toProto(message: _100.QueryTotalTimeoutFeesRequest): Uint8Array;
                    toProtoMsg(message: _100.QueryTotalTimeoutFeesRequest): _100.QueryTotalTimeoutFeesRequestProtoMsg;
                };
                QueryTotalTimeoutFeesResponse: {
                    typeUrl: string;
                    encode(message: _100.QueryTotalTimeoutFeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.QueryTotalTimeoutFeesResponse;
                    fromPartial(object: Partial<_100.QueryTotalTimeoutFeesResponse>): _100.QueryTotalTimeoutFeesResponse;
                    fromAmino(object: _100.QueryTotalTimeoutFeesResponseAmino): _100.QueryTotalTimeoutFeesResponse;
                    toAmino(message: _100.QueryTotalTimeoutFeesResponse): _100.QueryTotalTimeoutFeesResponseAmino;
                    fromAminoMsg(object: _100.QueryTotalTimeoutFeesResponseAminoMsg): _100.QueryTotalTimeoutFeesResponse;
                    toAminoMsg(message: _100.QueryTotalTimeoutFeesResponse): _100.QueryTotalTimeoutFeesResponseAminoMsg;
                    fromProtoMsg(message: _100.QueryTotalTimeoutFeesResponseProtoMsg): _100.QueryTotalTimeoutFeesResponse;
                    toProto(message: _100.QueryTotalTimeoutFeesResponse): Uint8Array;
                    toProtoMsg(message: _100.QueryTotalTimeoutFeesResponse): _100.QueryTotalTimeoutFeesResponseProtoMsg;
                };
                QueryPayeeRequest: {
                    typeUrl: string;
                    encode(message: _100.QueryPayeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.QueryPayeeRequest;
                    fromPartial(object: Partial<_100.QueryPayeeRequest>): _100.QueryPayeeRequest;
                    fromAmino(object: _100.QueryPayeeRequestAmino): _100.QueryPayeeRequest;
                    toAmino(message: _100.QueryPayeeRequest): _100.QueryPayeeRequestAmino;
                    fromAminoMsg(object: _100.QueryPayeeRequestAminoMsg): _100.QueryPayeeRequest;
                    toAminoMsg(message: _100.QueryPayeeRequest): _100.QueryPayeeRequestAminoMsg;
                    fromProtoMsg(message: _100.QueryPayeeRequestProtoMsg): _100.QueryPayeeRequest;
                    toProto(message: _100.QueryPayeeRequest): Uint8Array;
                    toProtoMsg(message: _100.QueryPayeeRequest): _100.QueryPayeeRequestProtoMsg;
                };
                QueryPayeeResponse: {
                    typeUrl: string;
                    encode(message: _100.QueryPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.QueryPayeeResponse;
                    fromPartial(object: Partial<_100.QueryPayeeResponse>): _100.QueryPayeeResponse;
                    fromAmino(object: _100.QueryPayeeResponseAmino): _100.QueryPayeeResponse;
                    toAmino(message: _100.QueryPayeeResponse): _100.QueryPayeeResponseAmino;
                    fromAminoMsg(object: _100.QueryPayeeResponseAminoMsg): _100.QueryPayeeResponse;
                    toAminoMsg(message: _100.QueryPayeeResponse): _100.QueryPayeeResponseAminoMsg;
                    fromProtoMsg(message: _100.QueryPayeeResponseProtoMsg): _100.QueryPayeeResponse;
                    toProto(message: _100.QueryPayeeResponse): Uint8Array;
                    toProtoMsg(message: _100.QueryPayeeResponse): _100.QueryPayeeResponseProtoMsg;
                };
                QueryCounterpartyPayeeRequest: {
                    typeUrl: string;
                    encode(message: _100.QueryCounterpartyPayeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.QueryCounterpartyPayeeRequest;
                    fromPartial(object: Partial<_100.QueryCounterpartyPayeeRequest>): _100.QueryCounterpartyPayeeRequest;
                    fromAmino(object: _100.QueryCounterpartyPayeeRequestAmino): _100.QueryCounterpartyPayeeRequest;
                    toAmino(message: _100.QueryCounterpartyPayeeRequest): _100.QueryCounterpartyPayeeRequestAmino;
                    fromAminoMsg(object: _100.QueryCounterpartyPayeeRequestAminoMsg): _100.QueryCounterpartyPayeeRequest;
                    toAminoMsg(message: _100.QueryCounterpartyPayeeRequest): _100.QueryCounterpartyPayeeRequestAminoMsg;
                    fromProtoMsg(message: _100.QueryCounterpartyPayeeRequestProtoMsg): _100.QueryCounterpartyPayeeRequest;
                    toProto(message: _100.QueryCounterpartyPayeeRequest): Uint8Array;
                    toProtoMsg(message: _100.QueryCounterpartyPayeeRequest): _100.QueryCounterpartyPayeeRequestProtoMsg;
                };
                QueryCounterpartyPayeeResponse: {
                    typeUrl: string;
                    encode(message: _100.QueryCounterpartyPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.QueryCounterpartyPayeeResponse;
                    fromPartial(object: Partial<_100.QueryCounterpartyPayeeResponse>): _100.QueryCounterpartyPayeeResponse;
                    fromAmino(object: _100.QueryCounterpartyPayeeResponseAmino): _100.QueryCounterpartyPayeeResponse;
                    toAmino(message: _100.QueryCounterpartyPayeeResponse): _100.QueryCounterpartyPayeeResponseAmino;
                    fromAminoMsg(object: _100.QueryCounterpartyPayeeResponseAminoMsg): _100.QueryCounterpartyPayeeResponse;
                    toAminoMsg(message: _100.QueryCounterpartyPayeeResponse): _100.QueryCounterpartyPayeeResponseAminoMsg;
                    fromProtoMsg(message: _100.QueryCounterpartyPayeeResponseProtoMsg): _100.QueryCounterpartyPayeeResponse;
                    toProto(message: _100.QueryCounterpartyPayeeResponse): Uint8Array;
                    toProtoMsg(message: _100.QueryCounterpartyPayeeResponse): _100.QueryCounterpartyPayeeResponseProtoMsg;
                };
                QueryFeeEnabledChannelsRequest: {
                    typeUrl: string;
                    encode(message: _100.QueryFeeEnabledChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.QueryFeeEnabledChannelsRequest;
                    fromPartial(object: Partial<_100.QueryFeeEnabledChannelsRequest>): _100.QueryFeeEnabledChannelsRequest;
                    fromAmino(object: _100.QueryFeeEnabledChannelsRequestAmino): _100.QueryFeeEnabledChannelsRequest;
                    toAmino(message: _100.QueryFeeEnabledChannelsRequest): _100.QueryFeeEnabledChannelsRequestAmino;
                    fromAminoMsg(object: _100.QueryFeeEnabledChannelsRequestAminoMsg): _100.QueryFeeEnabledChannelsRequest;
                    toAminoMsg(message: _100.QueryFeeEnabledChannelsRequest): _100.QueryFeeEnabledChannelsRequestAminoMsg;
                    fromProtoMsg(message: _100.QueryFeeEnabledChannelsRequestProtoMsg): _100.QueryFeeEnabledChannelsRequest;
                    toProto(message: _100.QueryFeeEnabledChannelsRequest): Uint8Array;
                    toProtoMsg(message: _100.QueryFeeEnabledChannelsRequest): _100.QueryFeeEnabledChannelsRequestProtoMsg;
                };
                QueryFeeEnabledChannelsResponse: {
                    typeUrl: string;
                    encode(message: _100.QueryFeeEnabledChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.QueryFeeEnabledChannelsResponse;
                    fromPartial(object: Partial<_100.QueryFeeEnabledChannelsResponse>): _100.QueryFeeEnabledChannelsResponse;
                    fromAmino(object: _100.QueryFeeEnabledChannelsResponseAmino): _100.QueryFeeEnabledChannelsResponse;
                    toAmino(message: _100.QueryFeeEnabledChannelsResponse): _100.QueryFeeEnabledChannelsResponseAmino;
                    fromAminoMsg(object: _100.QueryFeeEnabledChannelsResponseAminoMsg): _100.QueryFeeEnabledChannelsResponse;
                    toAminoMsg(message: _100.QueryFeeEnabledChannelsResponse): _100.QueryFeeEnabledChannelsResponseAminoMsg;
                    fromProtoMsg(message: _100.QueryFeeEnabledChannelsResponseProtoMsg): _100.QueryFeeEnabledChannelsResponse;
                    toProto(message: _100.QueryFeeEnabledChannelsResponse): Uint8Array;
                    toProtoMsg(message: _100.QueryFeeEnabledChannelsResponse): _100.QueryFeeEnabledChannelsResponseProtoMsg;
                };
                QueryFeeEnabledChannelRequest: {
                    typeUrl: string;
                    encode(message: _100.QueryFeeEnabledChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.QueryFeeEnabledChannelRequest;
                    fromPartial(object: Partial<_100.QueryFeeEnabledChannelRequest>): _100.QueryFeeEnabledChannelRequest;
                    fromAmino(object: _100.QueryFeeEnabledChannelRequestAmino): _100.QueryFeeEnabledChannelRequest;
                    toAmino(message: _100.QueryFeeEnabledChannelRequest): _100.QueryFeeEnabledChannelRequestAmino;
                    fromAminoMsg(object: _100.QueryFeeEnabledChannelRequestAminoMsg): _100.QueryFeeEnabledChannelRequest;
                    toAminoMsg(message: _100.QueryFeeEnabledChannelRequest): _100.QueryFeeEnabledChannelRequestAminoMsg;
                    fromProtoMsg(message: _100.QueryFeeEnabledChannelRequestProtoMsg): _100.QueryFeeEnabledChannelRequest;
                    toProto(message: _100.QueryFeeEnabledChannelRequest): Uint8Array;
                    toProtoMsg(message: _100.QueryFeeEnabledChannelRequest): _100.QueryFeeEnabledChannelRequestProtoMsg;
                };
                QueryFeeEnabledChannelResponse: {
                    typeUrl: string;
                    encode(message: _100.QueryFeeEnabledChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.QueryFeeEnabledChannelResponse;
                    fromPartial(object: Partial<_100.QueryFeeEnabledChannelResponse>): _100.QueryFeeEnabledChannelResponse;
                    fromAmino(object: _100.QueryFeeEnabledChannelResponseAmino): _100.QueryFeeEnabledChannelResponse;
                    toAmino(message: _100.QueryFeeEnabledChannelResponse): _100.QueryFeeEnabledChannelResponseAmino;
                    fromAminoMsg(object: _100.QueryFeeEnabledChannelResponseAminoMsg): _100.QueryFeeEnabledChannelResponse;
                    toAminoMsg(message: _100.QueryFeeEnabledChannelResponse): _100.QueryFeeEnabledChannelResponseAminoMsg;
                    fromProtoMsg(message: _100.QueryFeeEnabledChannelResponseProtoMsg): _100.QueryFeeEnabledChannelResponse;
                    toProto(message: _100.QueryFeeEnabledChannelResponse): Uint8Array;
                    toProtoMsg(message: _100.QueryFeeEnabledChannelResponse): _100.QueryFeeEnabledChannelResponseProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _99.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _99.Metadata;
                    fromPartial(object: Partial<_99.Metadata>): _99.Metadata;
                    fromAmino(object: _99.MetadataAmino): _99.Metadata;
                    toAmino(message: _99.Metadata): _99.MetadataAmino;
                    fromAminoMsg(object: _99.MetadataAminoMsg): _99.Metadata;
                    toAminoMsg(message: _99.Metadata): _99.MetadataAminoMsg;
                    fromProtoMsg(message: _99.MetadataProtoMsg): _99.Metadata;
                    toProto(message: _99.Metadata): Uint8Array;
                    toProtoMsg(message: _99.Metadata): _99.MetadataProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _98.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _98.GenesisState;
                    fromPartial(object: Partial<_98.GenesisState>): _98.GenesisState;
                    fromAmino(object: _98.GenesisStateAmino): _98.GenesisState;
                    toAmino(message: _98.GenesisState): _98.GenesisStateAmino;
                    fromAminoMsg(object: _98.GenesisStateAminoMsg): _98.GenesisState;
                    toAminoMsg(message: _98.GenesisState): _98.GenesisStateAminoMsg;
                    fromProtoMsg(message: _98.GenesisStateProtoMsg): _98.GenesisState;
                    toProto(message: _98.GenesisState): Uint8Array;
                    toProtoMsg(message: _98.GenesisState): _98.GenesisStateProtoMsg;
                };
                FeeEnabledChannel: {
                    typeUrl: string;
                    encode(message: _98.FeeEnabledChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _98.FeeEnabledChannel;
                    fromPartial(object: Partial<_98.FeeEnabledChannel>): _98.FeeEnabledChannel;
                    fromAmino(object: _98.FeeEnabledChannelAmino): _98.FeeEnabledChannel;
                    toAmino(message: _98.FeeEnabledChannel): _98.FeeEnabledChannelAmino;
                    fromAminoMsg(object: _98.FeeEnabledChannelAminoMsg): _98.FeeEnabledChannel;
                    toAminoMsg(message: _98.FeeEnabledChannel): _98.FeeEnabledChannelAminoMsg;
                    fromProtoMsg(message: _98.FeeEnabledChannelProtoMsg): _98.FeeEnabledChannel;
                    toProto(message: _98.FeeEnabledChannel): Uint8Array;
                    toProtoMsg(message: _98.FeeEnabledChannel): _98.FeeEnabledChannelProtoMsg;
                };
                RegisteredPayee: {
                    typeUrl: string;
                    encode(message: _98.RegisteredPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _98.RegisteredPayee;
                    fromPartial(object: Partial<_98.RegisteredPayee>): _98.RegisteredPayee;
                    fromAmino(object: _98.RegisteredPayeeAmino): _98.RegisteredPayee;
                    toAmino(message: _98.RegisteredPayee): _98.RegisteredPayeeAmino;
                    fromAminoMsg(object: _98.RegisteredPayeeAminoMsg): _98.RegisteredPayee;
                    toAminoMsg(message: _98.RegisteredPayee): _98.RegisteredPayeeAminoMsg;
                    fromProtoMsg(message: _98.RegisteredPayeeProtoMsg): _98.RegisteredPayee;
                    toProto(message: _98.RegisteredPayee): Uint8Array;
                    toProtoMsg(message: _98.RegisteredPayee): _98.RegisteredPayeeProtoMsg;
                };
                RegisteredCounterpartyPayee: {
                    typeUrl: string;
                    encode(message: _98.RegisteredCounterpartyPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _98.RegisteredCounterpartyPayee;
                    fromPartial(object: Partial<_98.RegisteredCounterpartyPayee>): _98.RegisteredCounterpartyPayee;
                    fromAmino(object: _98.RegisteredCounterpartyPayeeAmino): _98.RegisteredCounterpartyPayee;
                    toAmino(message: _98.RegisteredCounterpartyPayee): _98.RegisteredCounterpartyPayeeAmino;
                    fromAminoMsg(object: _98.RegisteredCounterpartyPayeeAminoMsg): _98.RegisteredCounterpartyPayee;
                    toAminoMsg(message: _98.RegisteredCounterpartyPayee): _98.RegisteredCounterpartyPayeeAminoMsg;
                    fromProtoMsg(message: _98.RegisteredCounterpartyPayeeProtoMsg): _98.RegisteredCounterpartyPayee;
                    toProto(message: _98.RegisteredCounterpartyPayee): Uint8Array;
                    toProtoMsg(message: _98.RegisteredCounterpartyPayee): _98.RegisteredCounterpartyPayeeProtoMsg;
                };
                ForwardRelayerAddress: {
                    typeUrl: string;
                    encode(message: _98.ForwardRelayerAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _98.ForwardRelayerAddress;
                    fromPartial(object: Partial<_98.ForwardRelayerAddress>): _98.ForwardRelayerAddress;
                    fromAmino(object: _98.ForwardRelayerAddressAmino): _98.ForwardRelayerAddress;
                    toAmino(message: _98.ForwardRelayerAddress): _98.ForwardRelayerAddressAmino;
                    fromAminoMsg(object: _98.ForwardRelayerAddressAminoMsg): _98.ForwardRelayerAddress;
                    toAminoMsg(message: _98.ForwardRelayerAddress): _98.ForwardRelayerAddressAminoMsg;
                    fromProtoMsg(message: _98.ForwardRelayerAddressProtoMsg): _98.ForwardRelayerAddress;
                    toProto(message: _98.ForwardRelayerAddress): Uint8Array;
                    toProtoMsg(message: _98.ForwardRelayerAddress): _98.ForwardRelayerAddressProtoMsg;
                };
                Fee: {
                    typeUrl: string;
                    encode(message: _97.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _97.Fee;
                    fromPartial(object: Partial<_97.Fee>): _97.Fee;
                    fromAmino(object: _97.FeeAmino): _97.Fee;
                    toAmino(message: _97.Fee): _97.FeeAmino;
                    fromAminoMsg(object: _97.FeeAminoMsg): _97.Fee;
                    toAminoMsg(message: _97.Fee): _97.FeeAminoMsg;
                    fromProtoMsg(message: _97.FeeProtoMsg): _97.Fee;
                    toProto(message: _97.Fee): Uint8Array;
                    toProtoMsg(message: _97.Fee): _97.FeeProtoMsg;
                };
                PacketFee: {
                    typeUrl: string;
                    encode(message: _97.PacketFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _97.PacketFee;
                    fromPartial(object: Partial<_97.PacketFee>): _97.PacketFee;
                    fromAmino(object: _97.PacketFeeAmino): _97.PacketFee;
                    toAmino(message: _97.PacketFee): _97.PacketFeeAmino;
                    fromAminoMsg(object: _97.PacketFeeAminoMsg): _97.PacketFee;
                    toAminoMsg(message: _97.PacketFee): _97.PacketFeeAminoMsg;
                    fromProtoMsg(message: _97.PacketFeeProtoMsg): _97.PacketFee;
                    toProto(message: _97.PacketFee): Uint8Array;
                    toProtoMsg(message: _97.PacketFee): _97.PacketFeeProtoMsg;
                };
                PacketFees: {
                    typeUrl: string;
                    encode(message: _97.PacketFees, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _97.PacketFees;
                    fromPartial(object: Partial<_97.PacketFees>): _97.PacketFees;
                    fromAmino(object: _97.PacketFeesAmino): _97.PacketFees;
                    toAmino(message: _97.PacketFees): _97.PacketFeesAmino;
                    fromAminoMsg(object: _97.PacketFeesAminoMsg): _97.PacketFees;
                    toAminoMsg(message: _97.PacketFees): _97.PacketFeesAminoMsg;
                    fromProtoMsg(message: _97.PacketFeesProtoMsg): _97.PacketFees;
                    toProto(message: _97.PacketFees): Uint8Array;
                    toProtoMsg(message: _97.PacketFees): _97.PacketFeesProtoMsg;
                };
                IdentifiedPacketFees: {
                    typeUrl: string;
                    encode(message: _97.IdentifiedPacketFees, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _97.IdentifiedPacketFees;
                    fromPartial(object: Partial<_97.IdentifiedPacketFees>): _97.IdentifiedPacketFees;
                    fromAmino(object: _97.IdentifiedPacketFeesAmino): _97.IdentifiedPacketFees;
                    toAmino(message: _97.IdentifiedPacketFees): _97.IdentifiedPacketFeesAmino;
                    fromAminoMsg(object: _97.IdentifiedPacketFeesAminoMsg): _97.IdentifiedPacketFees;
                    toAminoMsg(message: _97.IdentifiedPacketFees): _97.IdentifiedPacketFeesAminoMsg;
                    fromProtoMsg(message: _97.IdentifiedPacketFeesProtoMsg): _97.IdentifiedPacketFees;
                    toProto(message: _97.IdentifiedPacketFees): Uint8Array;
                    toProtoMsg(message: _97.IdentifiedPacketFees): _97.IdentifiedPacketFeesProtoMsg;
                };
                IncentivizedAcknowledgement: {
                    typeUrl: string;
                    encode(message: _96.IncentivizedAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _96.IncentivizedAcknowledgement;
                    fromPartial(object: Partial<_96.IncentivizedAcknowledgement>): _96.IncentivizedAcknowledgement;
                    fromAmino(object: _96.IncentivizedAcknowledgementAmino): _96.IncentivizedAcknowledgement;
                    toAmino(message: _96.IncentivizedAcknowledgement): _96.IncentivizedAcknowledgementAmino;
                    fromAminoMsg(object: _96.IncentivizedAcknowledgementAminoMsg): _96.IncentivizedAcknowledgement;
                    toAminoMsg(message: _96.IncentivizedAcknowledgement): _96.IncentivizedAcknowledgementAminoMsg;
                    fromProtoMsg(message: _96.IncentivizedAcknowledgementProtoMsg): _96.IncentivizedAcknowledgement;
                    toProto(message: _96.IncentivizedAcknowledgement): Uint8Array;
                    toProtoMsg(message: _96.IncentivizedAcknowledgement): _96.IncentivizedAcknowledgementProtoMsg;
                };
            };
        }
        namespace interchain_accounts {
            namespace controller {
                const v1: {
                    QueryClientImpl: typeof _254.QueryClientImpl;
                    createRpcQueryExtension: (base: QueryClient) => {
                        interchainAccount(request: _103.QueryInterchainAccountRequest): Promise<_103.QueryInterchainAccountResponse>;
                        params(request?: _103.QueryParamsRequest): Promise<_103.QueryParamsResponse>;
                    };
                    LCDQueryClient: typeof _247.LCDQueryClient;
                    QueryInterchainAccountRequest: {
                        typeUrl: string;
                        encode(message: _103.QueryInterchainAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _103.QueryInterchainAccountRequest;
                        fromPartial(object: Partial<_103.QueryInterchainAccountRequest>): _103.QueryInterchainAccountRequest;
                        fromAmino(object: _103.QueryInterchainAccountRequestAmino): _103.QueryInterchainAccountRequest;
                        toAmino(message: _103.QueryInterchainAccountRequest): _103.QueryInterchainAccountRequestAmino;
                        fromAminoMsg(object: _103.QueryInterchainAccountRequestAminoMsg): _103.QueryInterchainAccountRequest;
                        toAminoMsg(message: _103.QueryInterchainAccountRequest): _103.QueryInterchainAccountRequestAminoMsg;
                        fromProtoMsg(message: _103.QueryInterchainAccountRequestProtoMsg): _103.QueryInterchainAccountRequest;
                        toProto(message: _103.QueryInterchainAccountRequest): Uint8Array;
                        toProtoMsg(message: _103.QueryInterchainAccountRequest): _103.QueryInterchainAccountRequestProtoMsg;
                    };
                    QueryInterchainAccountResponse: {
                        typeUrl: string;
                        encode(message: _103.QueryInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _103.QueryInterchainAccountResponse;
                        fromPartial(object: Partial<_103.QueryInterchainAccountResponse>): _103.QueryInterchainAccountResponse;
                        fromAmino(object: _103.QueryInterchainAccountResponseAmino): _103.QueryInterchainAccountResponse;
                        toAmino(message: _103.QueryInterchainAccountResponse): _103.QueryInterchainAccountResponseAmino;
                        fromAminoMsg(object: _103.QueryInterchainAccountResponseAminoMsg): _103.QueryInterchainAccountResponse;
                        toAminoMsg(message: _103.QueryInterchainAccountResponse): _103.QueryInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _103.QueryInterchainAccountResponseProtoMsg): _103.QueryInterchainAccountResponse;
                        toProto(message: _103.QueryInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _103.QueryInterchainAccountResponse): _103.QueryInterchainAccountResponseProtoMsg;
                    };
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _103.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(_: any): _103.QueryParamsRequest;
                        fromPartial(_: Partial<_103.QueryParamsRequest>): _103.QueryParamsRequest;
                        fromAmino(_: _103.QueryParamsRequestAmino): _103.QueryParamsRequest;
                        toAmino(_: _103.QueryParamsRequest): _103.QueryParamsRequestAmino;
                        fromAminoMsg(object: _103.QueryParamsRequestAminoMsg): _103.QueryParamsRequest;
                        toAminoMsg(message: _103.QueryParamsRequest): _103.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _103.QueryParamsRequestProtoMsg): _103.QueryParamsRequest;
                        toProto(message: _103.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _103.QueryParamsRequest): _103.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        encode(message: _103.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _103.QueryParamsResponse;
                        fromPartial(object: Partial<_103.QueryParamsResponse>): _103.QueryParamsResponse;
                        fromAmino(object: _103.QueryParamsResponseAmino): _103.QueryParamsResponse;
                        toAmino(message: _103.QueryParamsResponse): _103.QueryParamsResponseAmino;
                        fromAminoMsg(object: _103.QueryParamsResponseAminoMsg): _103.QueryParamsResponse;
                        toAminoMsg(message: _103.QueryParamsResponse): _103.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _103.QueryParamsResponseProtoMsg): _103.QueryParamsResponse;
                        toProto(message: _103.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _103.QueryParamsResponse): _103.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _102.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _102.Params;
                        fromPartial(object: Partial<_102.Params>): _102.Params;
                        fromAmino(object: _102.ParamsAmino): _102.Params;
                        toAmino(message: _102.Params): _102.ParamsAmino;
                        fromAminoMsg(object: _102.ParamsAminoMsg): _102.Params;
                        toAminoMsg(message: _102.Params): _102.ParamsAminoMsg;
                        fromProtoMsg(message: _102.ParamsProtoMsg): _102.Params;
                        toProto(message: _102.Params): Uint8Array;
                        toProtoMsg(message: _102.Params): _102.ParamsProtoMsg;
                    };
                };
            }
            namespace host {
                const v1: {
                    QueryClientImpl: typeof _255.QueryClientImpl;
                    createRpcQueryExtension: (base: QueryClient) => {
                        params(request?: _105.QueryParamsRequest): Promise<_105.QueryParamsResponse>;
                    };
                    LCDQueryClient: typeof _248.LCDQueryClient;
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _105.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(_: any): _105.QueryParamsRequest;
                        fromPartial(_: Partial<_105.QueryParamsRequest>): _105.QueryParamsRequest;
                        fromAmino(_: _105.QueryParamsRequestAmino): _105.QueryParamsRequest;
                        toAmino(_: _105.QueryParamsRequest): _105.QueryParamsRequestAmino;
                        fromAminoMsg(object: _105.QueryParamsRequestAminoMsg): _105.QueryParamsRequest;
                        toAminoMsg(message: _105.QueryParamsRequest): _105.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _105.QueryParamsRequestProtoMsg): _105.QueryParamsRequest;
                        toProto(message: _105.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _105.QueryParamsRequest): _105.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        encode(message: _105.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _105.QueryParamsResponse;
                        fromPartial(object: Partial<_105.QueryParamsResponse>): _105.QueryParamsResponse;
                        fromAmino(object: _105.QueryParamsResponseAmino): _105.QueryParamsResponse;
                        toAmino(message: _105.QueryParamsResponse): _105.QueryParamsResponseAmino;
                        fromAminoMsg(object: _105.QueryParamsResponseAminoMsg): _105.QueryParamsResponse;
                        toAminoMsg(message: _105.QueryParamsResponse): _105.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _105.QueryParamsResponseProtoMsg): _105.QueryParamsResponse;
                        toProto(message: _105.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _105.QueryParamsResponse): _105.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _104.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _104.Params;
                        fromPartial(object: Partial<_104.Params>): _104.Params;
                        fromAmino(object: _104.ParamsAmino): _104.Params;
                        toAmino(message: _104.Params): _104.ParamsAmino;
                        fromAminoMsg(object: _104.ParamsAminoMsg): _104.Params;
                        toAminoMsg(message: _104.Params): _104.ParamsAminoMsg;
                        fromProtoMsg(message: _104.ParamsProtoMsg): _104.Params;
                        toProto(message: _104.Params): Uint8Array;
                        toProtoMsg(message: _104.Params): _104.ParamsProtoMsg;
                    };
                };
            }
            const v1: {
                typeFromJSON(object: any): _109.Type;
                typeToJSON(object: _109.Type): string;
                Type: typeof _109.Type;
                TypeSDKType: typeof _109.Type;
                TypeAmino: typeof _109.Type;
                InterchainAccountPacketData: {
                    typeUrl: string;
                    encode(message: _109.InterchainAccountPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _109.InterchainAccountPacketData;
                    fromPartial(object: Partial<_109.InterchainAccountPacketData>): _109.InterchainAccountPacketData;
                    fromAmino(object: _109.InterchainAccountPacketDataAmino): _109.InterchainAccountPacketData;
                    toAmino(message: _109.InterchainAccountPacketData): _109.InterchainAccountPacketDataAmino;
                    fromAminoMsg(object: _109.InterchainAccountPacketDataAminoMsg): _109.InterchainAccountPacketData;
                    toAminoMsg(message: _109.InterchainAccountPacketData): _109.InterchainAccountPacketDataAminoMsg;
                    fromProtoMsg(message: _109.InterchainAccountPacketDataProtoMsg): _109.InterchainAccountPacketData;
                    toProto(message: _109.InterchainAccountPacketData): Uint8Array;
                    toProtoMsg(message: _109.InterchainAccountPacketData): _109.InterchainAccountPacketDataProtoMsg;
                };
                CosmosTx: {
                    typeUrl: string;
                    encode(message: _109.CosmosTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _109.CosmosTx;
                    fromPartial(object: Partial<_109.CosmosTx>): _109.CosmosTx;
                    fromAmino(object: _109.CosmosTxAmino): _109.CosmosTx;
                    toAmino(message: _109.CosmosTx): _109.CosmosTxAmino;
                    fromAminoMsg(object: _109.CosmosTxAminoMsg): _109.CosmosTx;
                    toAminoMsg(message: _109.CosmosTx): _109.CosmosTxAminoMsg;
                    fromProtoMsg(message: _109.CosmosTxProtoMsg): _109.CosmosTx;
                    toProto(message: _109.CosmosTx): Uint8Array;
                    toProtoMsg(message: _109.CosmosTx): _109.CosmosTxProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _108.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.Metadata;
                    fromPartial(object: Partial<_108.Metadata>): _108.Metadata;
                    fromAmino(object: _108.MetadataAmino): _108.Metadata;
                    toAmino(message: _108.Metadata): _108.MetadataAmino;
                    fromAminoMsg(object: _108.MetadataAminoMsg): _108.Metadata;
                    toAminoMsg(message: _108.Metadata): _108.MetadataAminoMsg;
                    fromProtoMsg(message: _108.MetadataProtoMsg): _108.Metadata;
                    toProto(message: _108.Metadata): Uint8Array;
                    toProtoMsg(message: _108.Metadata): _108.MetadataProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _107.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _107.GenesisState;
                    fromPartial(object: Partial<_107.GenesisState>): _107.GenesisState;
                    fromAmino(object: _107.GenesisStateAmino): _107.GenesisState;
                    toAmino(message: _107.GenesisState): _107.GenesisStateAmino;
                    fromAminoMsg(object: _107.GenesisStateAminoMsg): _107.GenesisState;
                    toAminoMsg(message: _107.GenesisState): _107.GenesisStateAminoMsg;
                    fromProtoMsg(message: _107.GenesisStateProtoMsg): _107.GenesisState;
                    toProto(message: _107.GenesisState): Uint8Array;
                    toProtoMsg(message: _107.GenesisState): _107.GenesisStateProtoMsg;
                };
                ControllerGenesisState: {
                    typeUrl: string;
                    encode(message: _107.ControllerGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _107.ControllerGenesisState;
                    fromPartial(object: Partial<_107.ControllerGenesisState>): _107.ControllerGenesisState;
                    fromAmino(object: _107.ControllerGenesisStateAmino): _107.ControllerGenesisState;
                    toAmino(message: _107.ControllerGenesisState): _107.ControllerGenesisStateAmino;
                    fromAminoMsg(object: _107.ControllerGenesisStateAminoMsg): _107.ControllerGenesisState;
                    toAminoMsg(message: _107.ControllerGenesisState): _107.ControllerGenesisStateAminoMsg;
                    fromProtoMsg(message: _107.ControllerGenesisStateProtoMsg): _107.ControllerGenesisState;
                    toProto(message: _107.ControllerGenesisState): Uint8Array;
                    toProtoMsg(message: _107.ControllerGenesisState): _107.ControllerGenesisStateProtoMsg;
                };
                HostGenesisState: {
                    typeUrl: string;
                    encode(message: _107.HostGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _107.HostGenesisState;
                    fromPartial(object: Partial<_107.HostGenesisState>): _107.HostGenesisState;
                    fromAmino(object: _107.HostGenesisStateAmino): _107.HostGenesisState;
                    toAmino(message: _107.HostGenesisState): _107.HostGenesisStateAmino;
                    fromAminoMsg(object: _107.HostGenesisStateAminoMsg): _107.HostGenesisState;
                    toAminoMsg(message: _107.HostGenesisState): _107.HostGenesisStateAminoMsg;
                    fromProtoMsg(message: _107.HostGenesisStateProtoMsg): _107.HostGenesisState;
                    toProto(message: _107.HostGenesisState): Uint8Array;
                    toProtoMsg(message: _107.HostGenesisState): _107.HostGenesisStateProtoMsg;
                };
                ActiveChannel: {
                    typeUrl: string;
                    encode(message: _107.ActiveChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _107.ActiveChannel;
                    fromPartial(object: Partial<_107.ActiveChannel>): _107.ActiveChannel;
                    fromAmino(object: _107.ActiveChannelAmino): _107.ActiveChannel;
                    toAmino(message: _107.ActiveChannel): _107.ActiveChannelAmino;
                    fromAminoMsg(object: _107.ActiveChannelAminoMsg): _107.ActiveChannel;
                    toAminoMsg(message: _107.ActiveChannel): _107.ActiveChannelAminoMsg;
                    fromProtoMsg(message: _107.ActiveChannelProtoMsg): _107.ActiveChannel;
                    toProto(message: _107.ActiveChannel): Uint8Array;
                    toProtoMsg(message: _107.ActiveChannel): _107.ActiveChannelProtoMsg;
                };
                RegisteredInterchainAccount: {
                    typeUrl: string;
                    encode(message: _107.RegisteredInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _107.RegisteredInterchainAccount;
                    fromPartial(object: Partial<_107.RegisteredInterchainAccount>): _107.RegisteredInterchainAccount;
                    fromAmino(object: _107.RegisteredInterchainAccountAmino): _107.RegisteredInterchainAccount;
                    toAmino(message: _107.RegisteredInterchainAccount): _107.RegisteredInterchainAccountAmino;
                    fromAminoMsg(object: _107.RegisteredInterchainAccountAminoMsg): _107.RegisteredInterchainAccount;
                    toAminoMsg(message: _107.RegisteredInterchainAccount): _107.RegisteredInterchainAccountAminoMsg;
                    fromProtoMsg(message: _107.RegisteredInterchainAccountProtoMsg): _107.RegisteredInterchainAccount;
                    toProto(message: _107.RegisteredInterchainAccount): Uint8Array;
                    toProtoMsg(message: _107.RegisteredInterchainAccount): _107.RegisteredInterchainAccountProtoMsg;
                };
                InterchainAccount: {
                    typeUrl: string;
                    encode(message: _106.InterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _106.InterchainAccount;
                    fromPartial(object: Partial<_106.InterchainAccount>): _106.InterchainAccount;
                    fromAmino(object: _106.InterchainAccountAmino): _106.InterchainAccount;
                    toAmino(message: _106.InterchainAccount): _106.InterchainAccountAmino;
                    fromAminoMsg(object: _106.InterchainAccountAminoMsg): _106.InterchainAccount;
                    toAminoMsg(message: _106.InterchainAccount): _106.InterchainAccountAminoMsg;
                    fromProtoMsg(message: _106.InterchainAccountProtoMsg): _106.InterchainAccount;
                    toProto(message: _106.InterchainAccount): Uint8Array;
                    toProtoMsg(message: _106.InterchainAccount): _106.InterchainAccountProtoMsg;
                };
            };
        }
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _261.MsgClientImpl;
                QueryClientImpl: typeof _256.QueryClientImpl;
                createRpcQueryExtension: (base: QueryClient) => {
                    denomTrace(request: _111.QueryDenomTraceRequest): Promise<_111.QueryDenomTraceResponse>;
                    denomTraces(request?: _111.QueryDenomTracesRequest): Promise<_111.QueryDenomTracesResponse>;
                    params(request?: _111.QueryParamsRequest): Promise<_111.QueryParamsResponse>;
                    denomHash(request: _111.QueryDenomHashRequest): Promise<_111.QueryDenomHashResponse>;
                    escrowAddress(request: _111.QueryEscrowAddressRequest): Promise<_111.QueryEscrowAddressResponse>;
                };
                LCDQueryClient: typeof _249.LCDQueryClient;
                registry: readonly [string, GeneratedType][];
                load: (protoRegistry: Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _113.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _113.MsgTransfer): {
                            typeUrl: string;
                            value: _113.MsgTransfer;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _113.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _113.MsgTransfer): {
                            typeUrl: string;
                            value: _113.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _113.MsgTransfer) => _113.MsgTransferAmino;
                        fromAmino: (object: _113.MsgTransferAmino) => _113.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    encode(message: _113.MsgTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _113.MsgTransfer;
                    fromPartial(object: Partial<_113.MsgTransfer>): _113.MsgTransfer;
                    fromAmino(object: _113.MsgTransferAmino): _113.MsgTransfer;
                    toAmino(message: _113.MsgTransfer): _113.MsgTransferAmino;
                    fromAminoMsg(object: _113.MsgTransferAminoMsg): _113.MsgTransfer;
                    toAminoMsg(message: _113.MsgTransfer): _113.MsgTransferAminoMsg;
                    fromProtoMsg(message: _113.MsgTransferProtoMsg): _113.MsgTransfer;
                    toProto(message: _113.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _113.MsgTransfer): _113.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    encode(message: _113.MsgTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _113.MsgTransferResponse;
                    fromPartial(object: Partial<_113.MsgTransferResponse>): _113.MsgTransferResponse;
                    fromAmino(object: _113.MsgTransferResponseAmino): _113.MsgTransferResponse;
                    toAmino(message: _113.MsgTransferResponse): _113.MsgTransferResponseAmino;
                    fromAminoMsg(object: _113.MsgTransferResponseAminoMsg): _113.MsgTransferResponse;
                    toAminoMsg(message: _113.MsgTransferResponse): _113.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _113.MsgTransferResponseProtoMsg): _113.MsgTransferResponse;
                    toProto(message: _113.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _113.MsgTransferResponse): _113.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    encode(message: _112.DenomTrace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _112.DenomTrace;
                    fromPartial(object: Partial<_112.DenomTrace>): _112.DenomTrace;
                    fromAmino(object: _112.DenomTraceAmino): _112.DenomTrace;
                    toAmino(message: _112.DenomTrace): _112.DenomTraceAmino;
                    fromAminoMsg(object: _112.DenomTraceAminoMsg): _112.DenomTrace;
                    toAminoMsg(message: _112.DenomTrace): _112.DenomTraceAminoMsg;
                    fromProtoMsg(message: _112.DenomTraceProtoMsg): _112.DenomTrace;
                    toProto(message: _112.DenomTrace): Uint8Array;
                    toProtoMsg(message: _112.DenomTrace): _112.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _112.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _112.Params;
                    fromPartial(object: Partial<_112.Params>): _112.Params;
                    fromAmino(object: _112.ParamsAmino): _112.Params;
                    toAmino(message: _112.Params): _112.ParamsAmino;
                    fromAminoMsg(object: _112.ParamsAminoMsg): _112.Params;
                    toAminoMsg(message: _112.Params): _112.ParamsAminoMsg;
                    fromProtoMsg(message: _112.ParamsProtoMsg): _112.Params;
                    toProto(message: _112.Params): Uint8Array;
                    toProtoMsg(message: _112.Params): _112.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    encode(message: _111.QueryDenomTraceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _111.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_111.QueryDenomTraceRequest>): _111.QueryDenomTraceRequest;
                    fromAmino(object: _111.QueryDenomTraceRequestAmino): _111.QueryDenomTraceRequest;
                    toAmino(message: _111.QueryDenomTraceRequest): _111.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _111.QueryDenomTraceRequestAminoMsg): _111.QueryDenomTraceRequest;
                    toAminoMsg(message: _111.QueryDenomTraceRequest): _111.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryDenomTraceRequestProtoMsg): _111.QueryDenomTraceRequest;
                    toProto(message: _111.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryDenomTraceRequest): _111.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    encode(message: _111.QueryDenomTraceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _111.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_111.QueryDenomTraceResponse>): _111.QueryDenomTraceResponse;
                    fromAmino(object: _111.QueryDenomTraceResponseAmino): _111.QueryDenomTraceResponse;
                    toAmino(message: _111.QueryDenomTraceResponse): _111.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _111.QueryDenomTraceResponseAminoMsg): _111.QueryDenomTraceResponse;
                    toAminoMsg(message: _111.QueryDenomTraceResponse): _111.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryDenomTraceResponseProtoMsg): _111.QueryDenomTraceResponse;
                    toProto(message: _111.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryDenomTraceResponse): _111.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    encode(message: _111.QueryDenomTracesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _111.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_111.QueryDenomTracesRequest>): _111.QueryDenomTracesRequest;
                    fromAmino(object: _111.QueryDenomTracesRequestAmino): _111.QueryDenomTracesRequest;
                    toAmino(message: _111.QueryDenomTracesRequest): _111.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _111.QueryDenomTracesRequestAminoMsg): _111.QueryDenomTracesRequest;
                    toAminoMsg(message: _111.QueryDenomTracesRequest): _111.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryDenomTracesRequestProtoMsg): _111.QueryDenomTracesRequest;
                    toProto(message: _111.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryDenomTracesRequest): _111.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    encode(message: _111.QueryDenomTracesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _111.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_111.QueryDenomTracesResponse>): _111.QueryDenomTracesResponse;
                    fromAmino(object: _111.QueryDenomTracesResponseAmino): _111.QueryDenomTracesResponse;
                    toAmino(message: _111.QueryDenomTracesResponse): _111.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _111.QueryDenomTracesResponseAminoMsg): _111.QueryDenomTracesResponse;
                    toAminoMsg(message: _111.QueryDenomTracesResponse): _111.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryDenomTracesResponseProtoMsg): _111.QueryDenomTracesResponse;
                    toProto(message: _111.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryDenomTracesResponse): _111.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _111.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _111.QueryParamsRequest;
                    fromPartial(_: Partial<_111.QueryParamsRequest>): _111.QueryParamsRequest;
                    fromAmino(_: _111.QueryParamsRequestAmino): _111.QueryParamsRequest;
                    toAmino(_: _111.QueryParamsRequest): _111.QueryParamsRequestAmino;
                    fromAminoMsg(object: _111.QueryParamsRequestAminoMsg): _111.QueryParamsRequest;
                    toAminoMsg(message: _111.QueryParamsRequest): _111.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryParamsRequestProtoMsg): _111.QueryParamsRequest;
                    toProto(message: _111.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryParamsRequest): _111.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    encode(message: _111.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _111.QueryParamsResponse;
                    fromPartial(object: Partial<_111.QueryParamsResponse>): _111.QueryParamsResponse;
                    fromAmino(object: _111.QueryParamsResponseAmino): _111.QueryParamsResponse;
                    toAmino(message: _111.QueryParamsResponse): _111.QueryParamsResponseAmino;
                    fromAminoMsg(object: _111.QueryParamsResponseAminoMsg): _111.QueryParamsResponse;
                    toAminoMsg(message: _111.QueryParamsResponse): _111.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryParamsResponseProtoMsg): _111.QueryParamsResponse;
                    toProto(message: _111.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryParamsResponse): _111.QueryParamsResponseProtoMsg;
                };
                QueryDenomHashRequest: {
                    typeUrl: string;
                    encode(message: _111.QueryDenomHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _111.QueryDenomHashRequest;
                    fromPartial(object: Partial<_111.QueryDenomHashRequest>): _111.QueryDenomHashRequest;
                    fromAmino(object: _111.QueryDenomHashRequestAmino): _111.QueryDenomHashRequest;
                    toAmino(message: _111.QueryDenomHashRequest): _111.QueryDenomHashRequestAmino;
                    fromAminoMsg(object: _111.QueryDenomHashRequestAminoMsg): _111.QueryDenomHashRequest;
                    toAminoMsg(message: _111.QueryDenomHashRequest): _111.QueryDenomHashRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryDenomHashRequestProtoMsg): _111.QueryDenomHashRequest;
                    toProto(message: _111.QueryDenomHashRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryDenomHashRequest): _111.QueryDenomHashRequestProtoMsg;
                };
                QueryDenomHashResponse: {
                    typeUrl: string;
                    encode(message: _111.QueryDenomHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _111.QueryDenomHashResponse;
                    fromPartial(object: Partial<_111.QueryDenomHashResponse>): _111.QueryDenomHashResponse;
                    fromAmino(object: _111.QueryDenomHashResponseAmino): _111.QueryDenomHashResponse;
                    toAmino(message: _111.QueryDenomHashResponse): _111.QueryDenomHashResponseAmino;
                    fromAminoMsg(object: _111.QueryDenomHashResponseAminoMsg): _111.QueryDenomHashResponse;
                    toAminoMsg(message: _111.QueryDenomHashResponse): _111.QueryDenomHashResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryDenomHashResponseProtoMsg): _111.QueryDenomHashResponse;
                    toProto(message: _111.QueryDenomHashResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryDenomHashResponse): _111.QueryDenomHashResponseProtoMsg;
                };
                QueryEscrowAddressRequest: {
                    typeUrl: string;
                    encode(message: _111.QueryEscrowAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _111.QueryEscrowAddressRequest;
                    fromPartial(object: Partial<_111.QueryEscrowAddressRequest>): _111.QueryEscrowAddressRequest;
                    fromAmino(object: _111.QueryEscrowAddressRequestAmino): _111.QueryEscrowAddressRequest;
                    toAmino(message: _111.QueryEscrowAddressRequest): _111.QueryEscrowAddressRequestAmino;
                    fromAminoMsg(object: _111.QueryEscrowAddressRequestAminoMsg): _111.QueryEscrowAddressRequest;
                    toAminoMsg(message: _111.QueryEscrowAddressRequest): _111.QueryEscrowAddressRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryEscrowAddressRequestProtoMsg): _111.QueryEscrowAddressRequest;
                    toProto(message: _111.QueryEscrowAddressRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryEscrowAddressRequest): _111.QueryEscrowAddressRequestProtoMsg;
                };
                QueryEscrowAddressResponse: {
                    typeUrl: string;
                    encode(message: _111.QueryEscrowAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _111.QueryEscrowAddressResponse;
                    fromPartial(object: Partial<_111.QueryEscrowAddressResponse>): _111.QueryEscrowAddressResponse;
                    fromAmino(object: _111.QueryEscrowAddressResponseAmino): _111.QueryEscrowAddressResponse;
                    toAmino(message: _111.QueryEscrowAddressResponse): _111.QueryEscrowAddressResponseAmino;
                    fromAminoMsg(object: _111.QueryEscrowAddressResponseAminoMsg): _111.QueryEscrowAddressResponse;
                    toAminoMsg(message: _111.QueryEscrowAddressResponse): _111.QueryEscrowAddressResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryEscrowAddressResponseProtoMsg): _111.QueryEscrowAddressResponse;
                    toProto(message: _111.QueryEscrowAddressResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryEscrowAddressResponse): _111.QueryEscrowAddressResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _110.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _110.GenesisState;
                    fromPartial(object: Partial<_110.GenesisState>): _110.GenesisState;
                    fromAmino(object: _110.GenesisStateAmino): _110.GenesisState;
                    toAmino(message: _110.GenesisState): _110.GenesisStateAmino;
                    fromAminoMsg(object: _110.GenesisStateAminoMsg): _110.GenesisState;
                    toAminoMsg(message: _110.GenesisState): _110.GenesisStateAminoMsg;
                    fromProtoMsg(message: _110.GenesisStateProtoMsg): _110.GenesisState;
                    toProto(message: _110.GenesisState): Uint8Array;
                    toProtoMsg(message: _110.GenesisState): _110.GenesisStateProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    typeUrl: string;
                    encode(message: _114.FungibleTokenPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _114.FungibleTokenPacketData;
                    fromPartial(object: Partial<_114.FungibleTokenPacketData>): _114.FungibleTokenPacketData;
                    fromAmino(object: _114.FungibleTokenPacketDataAmino): _114.FungibleTokenPacketData;
                    toAmino(message: _114.FungibleTokenPacketData): _114.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _114.FungibleTokenPacketDataAminoMsg): _114.FungibleTokenPacketData;
                    toAminoMsg(message: _114.FungibleTokenPacketData): _114.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _114.FungibleTokenPacketDataProtoMsg): _114.FungibleTokenPacketData;
                    toProto(message: _114.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _114.FungibleTokenPacketData): _114.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _262.MsgClientImpl;
                QueryClientImpl: typeof _257.QueryClientImpl;
                createRpcQueryExtension: (base: QueryClient) => {
                    channel(request: _117.QueryChannelRequest): Promise<_117.QueryChannelResponse>;
                    channels(request?: _117.QueryChannelsRequest): Promise<_117.QueryChannelsResponse>;
                    connectionChannels(request: _117.QueryConnectionChannelsRequest): Promise<_117.QueryConnectionChannelsResponse>;
                    channelClientState(request: _117.QueryChannelClientStateRequest): Promise<_117.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _117.QueryChannelConsensusStateRequest): Promise<_117.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _117.QueryPacketCommitmentRequest): Promise<_117.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _117.QueryPacketCommitmentsRequest): Promise<_117.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _117.QueryPacketReceiptRequest): Promise<_117.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _117.QueryPacketAcknowledgementRequest): Promise<_117.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _117.QueryPacketAcknowledgementsRequest): Promise<_117.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _117.QueryUnreceivedPacketsRequest): Promise<_117.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _117.QueryUnreceivedAcksRequest): Promise<_117.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _117.QueryNextSequenceReceiveRequest): Promise<_117.QueryNextSequenceReceiveResponse>;
                };
                LCDQueryClient: typeof _250.LCDQueryClient;
                registry: readonly [string, GeneratedType][];
                load: (protoRegistry: Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _118.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _118.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _118.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _118.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _118.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _118.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _118.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _118.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _118.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _118.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _118.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _118.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _118.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _118.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _118.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _118.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _118.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _118.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _118.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _118.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _118.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _118.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _118.MsgRecvPacket): {
                            typeUrl: string;
                            value: _118.MsgRecvPacket;
                        };
                        timeout(value: _118.MsgTimeout): {
                            typeUrl: string;
                            value: _118.MsgTimeout;
                        };
                        timeoutOnClose(value: _118.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _118.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _118.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _118.MsgAcknowledgement;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _118.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _118.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _118.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _118.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _118.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _118.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _118.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _118.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _118.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _118.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _118.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _118.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _118.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _118.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _118.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _118.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _118.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _118.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _118.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _118.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _118.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _118.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _118.MsgRecvPacket): {
                            typeUrl: string;
                            value: _118.MsgRecvPacket;
                        };
                        timeout(value: _118.MsgTimeout): {
                            typeUrl: string;
                            value: _118.MsgTimeout;
                        };
                        timeoutOnClose(value: _118.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _118.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _118.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _118.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _118.MsgChannelOpenInit) => _118.MsgChannelOpenInitAmino;
                        fromAmino: (object: _118.MsgChannelOpenInitAmino) => _118.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _118.MsgChannelOpenTry) => _118.MsgChannelOpenTryAmino;
                        fromAmino: (object: _118.MsgChannelOpenTryAmino) => _118.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _118.MsgChannelOpenAck) => _118.MsgChannelOpenAckAmino;
                        fromAmino: (object: _118.MsgChannelOpenAckAmino) => _118.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _118.MsgChannelOpenConfirm) => _118.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _118.MsgChannelOpenConfirmAmino) => _118.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _118.MsgChannelCloseInit) => _118.MsgChannelCloseInitAmino;
                        fromAmino: (object: _118.MsgChannelCloseInitAmino) => _118.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _118.MsgChannelCloseConfirm) => _118.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _118.MsgChannelCloseConfirmAmino) => _118.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _118.MsgRecvPacket) => _118.MsgRecvPacketAmino;
                        fromAmino: (object: _118.MsgRecvPacketAmino) => _118.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _118.MsgTimeout) => _118.MsgTimeoutAmino;
                        fromAmino: (object: _118.MsgTimeoutAmino) => _118.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _118.MsgTimeoutOnClose) => _118.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _118.MsgTimeoutOnCloseAmino) => _118.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _118.MsgAcknowledgement) => _118.MsgAcknowledgementAmino;
                        fromAmino: (object: _118.MsgAcknowledgementAmino) => _118.MsgAcknowledgement;
                    };
                };
                responseResultTypeFromJSON(object: any): _118.ResponseResultType;
                responseResultTypeToJSON(object: _118.ResponseResultType): string;
                ResponseResultType: typeof _118.ResponseResultType;
                ResponseResultTypeSDKType: typeof _118.ResponseResultType;
                ResponseResultTypeAmino: typeof _118.ResponseResultType;
                MsgChannelOpenInit: {
                    typeUrl: string;
                    encode(message: _118.MsgChannelOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.MsgChannelOpenInit;
                    fromPartial(object: Partial<_118.MsgChannelOpenInit>): _118.MsgChannelOpenInit;
                    fromAmino(object: _118.MsgChannelOpenInitAmino): _118.MsgChannelOpenInit;
                    toAmino(message: _118.MsgChannelOpenInit): _118.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _118.MsgChannelOpenInitAminoMsg): _118.MsgChannelOpenInit;
                    toAminoMsg(message: _118.MsgChannelOpenInit): _118.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _118.MsgChannelOpenInitProtoMsg): _118.MsgChannelOpenInit;
                    toProto(message: _118.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _118.MsgChannelOpenInit): _118.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    encode(message: _118.MsgChannelOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.MsgChannelOpenInitResponse;
                    fromPartial(object: Partial<_118.MsgChannelOpenInitResponse>): _118.MsgChannelOpenInitResponse;
                    fromAmino(object: _118.MsgChannelOpenInitResponseAmino): _118.MsgChannelOpenInitResponse;
                    toAmino(message: _118.MsgChannelOpenInitResponse): _118.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _118.MsgChannelOpenInitResponseAminoMsg): _118.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _118.MsgChannelOpenInitResponse): _118.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _118.MsgChannelOpenInitResponseProtoMsg): _118.MsgChannelOpenInitResponse;
                    toProto(message: _118.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _118.MsgChannelOpenInitResponse): _118.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    encode(message: _118.MsgChannelOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.MsgChannelOpenTry;
                    fromPartial(object: Partial<_118.MsgChannelOpenTry>): _118.MsgChannelOpenTry;
                    fromAmino(object: _118.MsgChannelOpenTryAmino): _118.MsgChannelOpenTry;
                    toAmino(message: _118.MsgChannelOpenTry): _118.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _118.MsgChannelOpenTryAminoMsg): _118.MsgChannelOpenTry;
                    toAminoMsg(message: _118.MsgChannelOpenTry): _118.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _118.MsgChannelOpenTryProtoMsg): _118.MsgChannelOpenTry;
                    toProto(message: _118.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _118.MsgChannelOpenTry): _118.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    encode(message: _118.MsgChannelOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.MsgChannelOpenTryResponse;
                    fromPartial(object: Partial<_118.MsgChannelOpenTryResponse>): _118.MsgChannelOpenTryResponse;
                    fromAmino(object: _118.MsgChannelOpenTryResponseAmino): _118.MsgChannelOpenTryResponse;
                    toAmino(message: _118.MsgChannelOpenTryResponse): _118.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _118.MsgChannelOpenTryResponseAminoMsg): _118.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _118.MsgChannelOpenTryResponse): _118.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _118.MsgChannelOpenTryResponseProtoMsg): _118.MsgChannelOpenTryResponse;
                    toProto(message: _118.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _118.MsgChannelOpenTryResponse): _118.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    encode(message: _118.MsgChannelOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.MsgChannelOpenAck;
                    fromPartial(object: Partial<_118.MsgChannelOpenAck>): _118.MsgChannelOpenAck;
                    fromAmino(object: _118.MsgChannelOpenAckAmino): _118.MsgChannelOpenAck;
                    toAmino(message: _118.MsgChannelOpenAck): _118.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _118.MsgChannelOpenAckAminoMsg): _118.MsgChannelOpenAck;
                    toAminoMsg(message: _118.MsgChannelOpenAck): _118.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _118.MsgChannelOpenAckProtoMsg): _118.MsgChannelOpenAck;
                    toProto(message: _118.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _118.MsgChannelOpenAck): _118.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _118.MsgChannelOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _118.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_118.MsgChannelOpenAckResponse>): _118.MsgChannelOpenAckResponse;
                    fromAmino(_: _118.MsgChannelOpenAckResponseAmino): _118.MsgChannelOpenAckResponse;
                    toAmino(_: _118.MsgChannelOpenAckResponse): _118.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _118.MsgChannelOpenAckResponseAminoMsg): _118.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _118.MsgChannelOpenAckResponse): _118.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _118.MsgChannelOpenAckResponseProtoMsg): _118.MsgChannelOpenAckResponse;
                    toProto(message: _118.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _118.MsgChannelOpenAckResponse): _118.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    encode(message: _118.MsgChannelOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_118.MsgChannelOpenConfirm>): _118.MsgChannelOpenConfirm;
                    fromAmino(object: _118.MsgChannelOpenConfirmAmino): _118.MsgChannelOpenConfirm;
                    toAmino(message: _118.MsgChannelOpenConfirm): _118.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _118.MsgChannelOpenConfirmAminoMsg): _118.MsgChannelOpenConfirm;
                    toAminoMsg(message: _118.MsgChannelOpenConfirm): _118.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _118.MsgChannelOpenConfirmProtoMsg): _118.MsgChannelOpenConfirm;
                    toProto(message: _118.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _118.MsgChannelOpenConfirm): _118.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _118.MsgChannelOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _118.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_118.MsgChannelOpenConfirmResponse>): _118.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _118.MsgChannelOpenConfirmResponseAmino): _118.MsgChannelOpenConfirmResponse;
                    toAmino(_: _118.MsgChannelOpenConfirmResponse): _118.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _118.MsgChannelOpenConfirmResponseAminoMsg): _118.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _118.MsgChannelOpenConfirmResponse): _118.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _118.MsgChannelOpenConfirmResponseProtoMsg): _118.MsgChannelOpenConfirmResponse;
                    toProto(message: _118.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _118.MsgChannelOpenConfirmResponse): _118.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    encode(message: _118.MsgChannelCloseInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.MsgChannelCloseInit;
                    fromPartial(object: Partial<_118.MsgChannelCloseInit>): _118.MsgChannelCloseInit;
                    fromAmino(object: _118.MsgChannelCloseInitAmino): _118.MsgChannelCloseInit;
                    toAmino(message: _118.MsgChannelCloseInit): _118.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _118.MsgChannelCloseInitAminoMsg): _118.MsgChannelCloseInit;
                    toAminoMsg(message: _118.MsgChannelCloseInit): _118.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _118.MsgChannelCloseInitProtoMsg): _118.MsgChannelCloseInit;
                    toProto(message: _118.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _118.MsgChannelCloseInit): _118.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    encode(_: _118.MsgChannelCloseInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _118.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_118.MsgChannelCloseInitResponse>): _118.MsgChannelCloseInitResponse;
                    fromAmino(_: _118.MsgChannelCloseInitResponseAmino): _118.MsgChannelCloseInitResponse;
                    toAmino(_: _118.MsgChannelCloseInitResponse): _118.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _118.MsgChannelCloseInitResponseAminoMsg): _118.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _118.MsgChannelCloseInitResponse): _118.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _118.MsgChannelCloseInitResponseProtoMsg): _118.MsgChannelCloseInitResponse;
                    toProto(message: _118.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _118.MsgChannelCloseInitResponse): _118.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    encode(message: _118.MsgChannelCloseConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_118.MsgChannelCloseConfirm>): _118.MsgChannelCloseConfirm;
                    fromAmino(object: _118.MsgChannelCloseConfirmAmino): _118.MsgChannelCloseConfirm;
                    toAmino(message: _118.MsgChannelCloseConfirm): _118.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _118.MsgChannelCloseConfirmAminoMsg): _118.MsgChannelCloseConfirm;
                    toAminoMsg(message: _118.MsgChannelCloseConfirm): _118.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _118.MsgChannelCloseConfirmProtoMsg): _118.MsgChannelCloseConfirm;
                    toProto(message: _118.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _118.MsgChannelCloseConfirm): _118.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    encode(_: _118.MsgChannelCloseConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _118.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_118.MsgChannelCloseConfirmResponse>): _118.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _118.MsgChannelCloseConfirmResponseAmino): _118.MsgChannelCloseConfirmResponse;
                    toAmino(_: _118.MsgChannelCloseConfirmResponse): _118.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _118.MsgChannelCloseConfirmResponseAminoMsg): _118.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _118.MsgChannelCloseConfirmResponse): _118.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _118.MsgChannelCloseConfirmResponseProtoMsg): _118.MsgChannelCloseConfirmResponse;
                    toProto(message: _118.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _118.MsgChannelCloseConfirmResponse): _118.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    encode(message: _118.MsgRecvPacket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.MsgRecvPacket;
                    fromPartial(object: Partial<_118.MsgRecvPacket>): _118.MsgRecvPacket;
                    fromAmino(object: _118.MsgRecvPacketAmino): _118.MsgRecvPacket;
                    toAmino(message: _118.MsgRecvPacket): _118.MsgRecvPacketAmino;
                    fromAminoMsg(object: _118.MsgRecvPacketAminoMsg): _118.MsgRecvPacket;
                    toAminoMsg(message: _118.MsgRecvPacket): _118.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _118.MsgRecvPacketProtoMsg): _118.MsgRecvPacket;
                    toProto(message: _118.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _118.MsgRecvPacket): _118.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    encode(message: _118.MsgRecvPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.MsgRecvPacketResponse;
                    fromPartial(object: Partial<_118.MsgRecvPacketResponse>): _118.MsgRecvPacketResponse;
                    fromAmino(object: _118.MsgRecvPacketResponseAmino): _118.MsgRecvPacketResponse;
                    toAmino(message: _118.MsgRecvPacketResponse): _118.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _118.MsgRecvPacketResponseAminoMsg): _118.MsgRecvPacketResponse;
                    toAminoMsg(message: _118.MsgRecvPacketResponse): _118.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _118.MsgRecvPacketResponseProtoMsg): _118.MsgRecvPacketResponse;
                    toProto(message: _118.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _118.MsgRecvPacketResponse): _118.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    encode(message: _118.MsgTimeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.MsgTimeout;
                    fromPartial(object: Partial<_118.MsgTimeout>): _118.MsgTimeout;
                    fromAmino(object: _118.MsgTimeoutAmino): _118.MsgTimeout;
                    toAmino(message: _118.MsgTimeout): _118.MsgTimeoutAmino;
                    fromAminoMsg(object: _118.MsgTimeoutAminoMsg): _118.MsgTimeout;
                    toAminoMsg(message: _118.MsgTimeout): _118.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _118.MsgTimeoutProtoMsg): _118.MsgTimeout;
                    toProto(message: _118.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _118.MsgTimeout): _118.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    encode(message: _118.MsgTimeoutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.MsgTimeoutResponse;
                    fromPartial(object: Partial<_118.MsgTimeoutResponse>): _118.MsgTimeoutResponse;
                    fromAmino(object: _118.MsgTimeoutResponseAmino): _118.MsgTimeoutResponse;
                    toAmino(message: _118.MsgTimeoutResponse): _118.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _118.MsgTimeoutResponseAminoMsg): _118.MsgTimeoutResponse;
                    toAminoMsg(message: _118.MsgTimeoutResponse): _118.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _118.MsgTimeoutResponseProtoMsg): _118.MsgTimeoutResponse;
                    toProto(message: _118.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _118.MsgTimeoutResponse): _118.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    encode(message: _118.MsgTimeoutOnClose, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_118.MsgTimeoutOnClose>): _118.MsgTimeoutOnClose;
                    fromAmino(object: _118.MsgTimeoutOnCloseAmino): _118.MsgTimeoutOnClose;
                    toAmino(message: _118.MsgTimeoutOnClose): _118.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _118.MsgTimeoutOnCloseAminoMsg): _118.MsgTimeoutOnClose;
                    toAminoMsg(message: _118.MsgTimeoutOnClose): _118.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _118.MsgTimeoutOnCloseProtoMsg): _118.MsgTimeoutOnClose;
                    toProto(message: _118.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _118.MsgTimeoutOnClose): _118.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    encode(message: _118.MsgTimeoutOnCloseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.MsgTimeoutOnCloseResponse;
                    fromPartial(object: Partial<_118.MsgTimeoutOnCloseResponse>): _118.MsgTimeoutOnCloseResponse;
                    fromAmino(object: _118.MsgTimeoutOnCloseResponseAmino): _118.MsgTimeoutOnCloseResponse;
                    toAmino(message: _118.MsgTimeoutOnCloseResponse): _118.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _118.MsgTimeoutOnCloseResponseAminoMsg): _118.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _118.MsgTimeoutOnCloseResponse): _118.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _118.MsgTimeoutOnCloseResponseProtoMsg): _118.MsgTimeoutOnCloseResponse;
                    toProto(message: _118.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _118.MsgTimeoutOnCloseResponse): _118.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    encode(message: _118.MsgAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.MsgAcknowledgement;
                    fromPartial(object: Partial<_118.MsgAcknowledgement>): _118.MsgAcknowledgement;
                    fromAmino(object: _118.MsgAcknowledgementAmino): _118.MsgAcknowledgement;
                    toAmino(message: _118.MsgAcknowledgement): _118.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _118.MsgAcknowledgementAminoMsg): _118.MsgAcknowledgement;
                    toAminoMsg(message: _118.MsgAcknowledgement): _118.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _118.MsgAcknowledgementProtoMsg): _118.MsgAcknowledgement;
                    toProto(message: _118.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _118.MsgAcknowledgement): _118.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _118.MsgAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.MsgAcknowledgementResponse;
                    fromPartial(object: Partial<_118.MsgAcknowledgementResponse>): _118.MsgAcknowledgementResponse;
                    fromAmino(object: _118.MsgAcknowledgementResponseAmino): _118.MsgAcknowledgementResponse;
                    toAmino(message: _118.MsgAcknowledgementResponse): _118.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _118.MsgAcknowledgementResponseAminoMsg): _118.MsgAcknowledgementResponse;
                    toAminoMsg(message: _118.MsgAcknowledgementResponse): _118.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _118.MsgAcknowledgementResponseProtoMsg): _118.MsgAcknowledgementResponse;
                    toProto(message: _118.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _118.MsgAcknowledgementResponse): _118.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    encode(message: _117.QueryChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.QueryChannelRequest;
                    fromPartial(object: Partial<_117.QueryChannelRequest>): _117.QueryChannelRequest;
                    fromAmino(object: _117.QueryChannelRequestAmino): _117.QueryChannelRequest;
                    toAmino(message: _117.QueryChannelRequest): _117.QueryChannelRequestAmino;
                    fromAminoMsg(object: _117.QueryChannelRequestAminoMsg): _117.QueryChannelRequest;
                    toAminoMsg(message: _117.QueryChannelRequest): _117.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _117.QueryChannelRequestProtoMsg): _117.QueryChannelRequest;
                    toProto(message: _117.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _117.QueryChannelRequest): _117.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    encode(message: _117.QueryChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.QueryChannelResponse;
                    fromPartial(object: Partial<_117.QueryChannelResponse>): _117.QueryChannelResponse;
                    fromAmino(object: _117.QueryChannelResponseAmino): _117.QueryChannelResponse;
                    toAmino(message: _117.QueryChannelResponse): _117.QueryChannelResponseAmino;
                    fromAminoMsg(object: _117.QueryChannelResponseAminoMsg): _117.QueryChannelResponse;
                    toAminoMsg(message: _117.QueryChannelResponse): _117.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _117.QueryChannelResponseProtoMsg): _117.QueryChannelResponse;
                    toProto(message: _117.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _117.QueryChannelResponse): _117.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    encode(message: _117.QueryChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.QueryChannelsRequest;
                    fromPartial(object: Partial<_117.QueryChannelsRequest>): _117.QueryChannelsRequest;
                    fromAmino(object: _117.QueryChannelsRequestAmino): _117.QueryChannelsRequest;
                    toAmino(message: _117.QueryChannelsRequest): _117.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _117.QueryChannelsRequestAminoMsg): _117.QueryChannelsRequest;
                    toAminoMsg(message: _117.QueryChannelsRequest): _117.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _117.QueryChannelsRequestProtoMsg): _117.QueryChannelsRequest;
                    toProto(message: _117.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _117.QueryChannelsRequest): _117.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    encode(message: _117.QueryChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.QueryChannelsResponse;
                    fromPartial(object: Partial<_117.QueryChannelsResponse>): _117.QueryChannelsResponse;
                    fromAmino(object: _117.QueryChannelsResponseAmino): _117.QueryChannelsResponse;
                    toAmino(message: _117.QueryChannelsResponse): _117.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _117.QueryChannelsResponseAminoMsg): _117.QueryChannelsResponse;
                    toAminoMsg(message: _117.QueryChannelsResponse): _117.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _117.QueryChannelsResponseProtoMsg): _117.QueryChannelsResponse;
                    toProto(message: _117.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _117.QueryChannelsResponse): _117.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    encode(message: _117.QueryConnectionChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.QueryConnectionChannelsRequest;
                    fromPartial(object: Partial<_117.QueryConnectionChannelsRequest>): _117.QueryConnectionChannelsRequest;
                    fromAmino(object: _117.QueryConnectionChannelsRequestAmino): _117.QueryConnectionChannelsRequest;
                    toAmino(message: _117.QueryConnectionChannelsRequest): _117.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _117.QueryConnectionChannelsRequestAminoMsg): _117.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _117.QueryConnectionChannelsRequest): _117.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _117.QueryConnectionChannelsRequestProtoMsg): _117.QueryConnectionChannelsRequest;
                    toProto(message: _117.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _117.QueryConnectionChannelsRequest): _117.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    encode(message: _117.QueryConnectionChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.QueryConnectionChannelsResponse;
                    fromPartial(object: Partial<_117.QueryConnectionChannelsResponse>): _117.QueryConnectionChannelsResponse;
                    fromAmino(object: _117.QueryConnectionChannelsResponseAmino): _117.QueryConnectionChannelsResponse;
                    toAmino(message: _117.QueryConnectionChannelsResponse): _117.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _117.QueryConnectionChannelsResponseAminoMsg): _117.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _117.QueryConnectionChannelsResponse): _117.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _117.QueryConnectionChannelsResponseProtoMsg): _117.QueryConnectionChannelsResponse;
                    toProto(message: _117.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _117.QueryConnectionChannelsResponse): _117.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    encode(message: _117.QueryChannelClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.QueryChannelClientStateRequest;
                    fromPartial(object: Partial<_117.QueryChannelClientStateRequest>): _117.QueryChannelClientStateRequest;
                    fromAmino(object: _117.QueryChannelClientStateRequestAmino): _117.QueryChannelClientStateRequest;
                    toAmino(message: _117.QueryChannelClientStateRequest): _117.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _117.QueryChannelClientStateRequestAminoMsg): _117.QueryChannelClientStateRequest;
                    toAminoMsg(message: _117.QueryChannelClientStateRequest): _117.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _117.QueryChannelClientStateRequestProtoMsg): _117.QueryChannelClientStateRequest;
                    toProto(message: _117.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _117.QueryChannelClientStateRequest): _117.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    encode(message: _117.QueryChannelClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.QueryChannelClientStateResponse;
                    fromPartial(object: Partial<_117.QueryChannelClientStateResponse>): _117.QueryChannelClientStateResponse;
                    fromAmino(object: _117.QueryChannelClientStateResponseAmino): _117.QueryChannelClientStateResponse;
                    toAmino(message: _117.QueryChannelClientStateResponse): _117.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _117.QueryChannelClientStateResponseAminoMsg): _117.QueryChannelClientStateResponse;
                    toAminoMsg(message: _117.QueryChannelClientStateResponse): _117.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _117.QueryChannelClientStateResponseProtoMsg): _117.QueryChannelClientStateResponse;
                    toProto(message: _117.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _117.QueryChannelClientStateResponse): _117.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _117.QueryChannelConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.QueryChannelConsensusStateRequest;
                    fromPartial(object: Partial<_117.QueryChannelConsensusStateRequest>): _117.QueryChannelConsensusStateRequest;
                    fromAmino(object: _117.QueryChannelConsensusStateRequestAmino): _117.QueryChannelConsensusStateRequest;
                    toAmino(message: _117.QueryChannelConsensusStateRequest): _117.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _117.QueryChannelConsensusStateRequestAminoMsg): _117.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _117.QueryChannelConsensusStateRequest): _117.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _117.QueryChannelConsensusStateRequestProtoMsg): _117.QueryChannelConsensusStateRequest;
                    toProto(message: _117.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _117.QueryChannelConsensusStateRequest): _117.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _117.QueryChannelConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.QueryChannelConsensusStateResponse;
                    fromPartial(object: Partial<_117.QueryChannelConsensusStateResponse>): _117.QueryChannelConsensusStateResponse;
                    fromAmino(object: _117.QueryChannelConsensusStateResponseAmino): _117.QueryChannelConsensusStateResponse;
                    toAmino(message: _117.QueryChannelConsensusStateResponse): _117.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _117.QueryChannelConsensusStateResponseAminoMsg): _117.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _117.QueryChannelConsensusStateResponse): _117.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _117.QueryChannelConsensusStateResponseProtoMsg): _117.QueryChannelConsensusStateResponse;
                    toProto(message: _117.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _117.QueryChannelConsensusStateResponse): _117.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    encode(message: _117.QueryPacketCommitmentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.QueryPacketCommitmentRequest;
                    fromPartial(object: Partial<_117.QueryPacketCommitmentRequest>): _117.QueryPacketCommitmentRequest;
                    fromAmino(object: _117.QueryPacketCommitmentRequestAmino): _117.QueryPacketCommitmentRequest;
                    toAmino(message: _117.QueryPacketCommitmentRequest): _117.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _117.QueryPacketCommitmentRequestAminoMsg): _117.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _117.QueryPacketCommitmentRequest): _117.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _117.QueryPacketCommitmentRequestProtoMsg): _117.QueryPacketCommitmentRequest;
                    toProto(message: _117.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _117.QueryPacketCommitmentRequest): _117.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    encode(message: _117.QueryPacketCommitmentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.QueryPacketCommitmentResponse;
                    fromPartial(object: Partial<_117.QueryPacketCommitmentResponse>): _117.QueryPacketCommitmentResponse;
                    fromAmino(object: _117.QueryPacketCommitmentResponseAmino): _117.QueryPacketCommitmentResponse;
                    toAmino(message: _117.QueryPacketCommitmentResponse): _117.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _117.QueryPacketCommitmentResponseAminoMsg): _117.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _117.QueryPacketCommitmentResponse): _117.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _117.QueryPacketCommitmentResponseProtoMsg): _117.QueryPacketCommitmentResponse;
                    toProto(message: _117.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _117.QueryPacketCommitmentResponse): _117.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    encode(message: _117.QueryPacketCommitmentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.QueryPacketCommitmentsRequest;
                    fromPartial(object: Partial<_117.QueryPacketCommitmentsRequest>): _117.QueryPacketCommitmentsRequest;
                    fromAmino(object: _117.QueryPacketCommitmentsRequestAmino): _117.QueryPacketCommitmentsRequest;
                    toAmino(message: _117.QueryPacketCommitmentsRequest): _117.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _117.QueryPacketCommitmentsRequestAminoMsg): _117.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _117.QueryPacketCommitmentsRequest): _117.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _117.QueryPacketCommitmentsRequestProtoMsg): _117.QueryPacketCommitmentsRequest;
                    toProto(message: _117.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _117.QueryPacketCommitmentsRequest): _117.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    encode(message: _117.QueryPacketCommitmentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.QueryPacketCommitmentsResponse;
                    fromPartial(object: Partial<_117.QueryPacketCommitmentsResponse>): _117.QueryPacketCommitmentsResponse;
                    fromAmino(object: _117.QueryPacketCommitmentsResponseAmino): _117.QueryPacketCommitmentsResponse;
                    toAmino(message: _117.QueryPacketCommitmentsResponse): _117.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _117.QueryPacketCommitmentsResponseAminoMsg): _117.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _117.QueryPacketCommitmentsResponse): _117.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _117.QueryPacketCommitmentsResponseProtoMsg): _117.QueryPacketCommitmentsResponse;
                    toProto(message: _117.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _117.QueryPacketCommitmentsResponse): _117.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    encode(message: _117.QueryPacketReceiptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.QueryPacketReceiptRequest;
                    fromPartial(object: Partial<_117.QueryPacketReceiptRequest>): _117.QueryPacketReceiptRequest;
                    fromAmino(object: _117.QueryPacketReceiptRequestAmino): _117.QueryPacketReceiptRequest;
                    toAmino(message: _117.QueryPacketReceiptRequest): _117.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _117.QueryPacketReceiptRequestAminoMsg): _117.QueryPacketReceiptRequest;
                    toAminoMsg(message: _117.QueryPacketReceiptRequest): _117.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _117.QueryPacketReceiptRequestProtoMsg): _117.QueryPacketReceiptRequest;
                    toProto(message: _117.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _117.QueryPacketReceiptRequest): _117.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    encode(message: _117.QueryPacketReceiptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.QueryPacketReceiptResponse;
                    fromPartial(object: Partial<_117.QueryPacketReceiptResponse>): _117.QueryPacketReceiptResponse;
                    fromAmino(object: _117.QueryPacketReceiptResponseAmino): _117.QueryPacketReceiptResponse;
                    toAmino(message: _117.QueryPacketReceiptResponse): _117.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _117.QueryPacketReceiptResponseAminoMsg): _117.QueryPacketReceiptResponse;
                    toAminoMsg(message: _117.QueryPacketReceiptResponse): _117.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _117.QueryPacketReceiptResponseProtoMsg): _117.QueryPacketReceiptResponse;
                    toProto(message: _117.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _117.QueryPacketReceiptResponse): _117.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    encode(message: _117.QueryPacketAcknowledgementRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.QueryPacketAcknowledgementRequest;
                    fromPartial(object: Partial<_117.QueryPacketAcknowledgementRequest>): _117.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _117.QueryPacketAcknowledgementRequestAmino): _117.QueryPacketAcknowledgementRequest;
                    toAmino(message: _117.QueryPacketAcknowledgementRequest): _117.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _117.QueryPacketAcknowledgementRequestAminoMsg): _117.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _117.QueryPacketAcknowledgementRequest): _117.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _117.QueryPacketAcknowledgementRequestProtoMsg): _117.QueryPacketAcknowledgementRequest;
                    toProto(message: _117.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _117.QueryPacketAcknowledgementRequest): _117.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _117.QueryPacketAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.QueryPacketAcknowledgementResponse;
                    fromPartial(object: Partial<_117.QueryPacketAcknowledgementResponse>): _117.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _117.QueryPacketAcknowledgementResponseAmino): _117.QueryPacketAcknowledgementResponse;
                    toAmino(message: _117.QueryPacketAcknowledgementResponse): _117.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _117.QueryPacketAcknowledgementResponseAminoMsg): _117.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _117.QueryPacketAcknowledgementResponse): _117.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _117.QueryPacketAcknowledgementResponseProtoMsg): _117.QueryPacketAcknowledgementResponse;
                    toProto(message: _117.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _117.QueryPacketAcknowledgementResponse): _117.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    encode(message: _117.QueryPacketAcknowledgementsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: Partial<_117.QueryPacketAcknowledgementsRequest>): _117.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _117.QueryPacketAcknowledgementsRequestAmino): _117.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _117.QueryPacketAcknowledgementsRequest): _117.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _117.QueryPacketAcknowledgementsRequestAminoMsg): _117.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _117.QueryPacketAcknowledgementsRequest): _117.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _117.QueryPacketAcknowledgementsRequestProtoMsg): _117.QueryPacketAcknowledgementsRequest;
                    toProto(message: _117.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _117.QueryPacketAcknowledgementsRequest): _117.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    encode(message: _117.QueryPacketAcknowledgementsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: Partial<_117.QueryPacketAcknowledgementsResponse>): _117.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _117.QueryPacketAcknowledgementsResponseAmino): _117.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _117.QueryPacketAcknowledgementsResponse): _117.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _117.QueryPacketAcknowledgementsResponseAminoMsg): _117.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _117.QueryPacketAcknowledgementsResponse): _117.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _117.QueryPacketAcknowledgementsResponseProtoMsg): _117.QueryPacketAcknowledgementsResponse;
                    toProto(message: _117.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _117.QueryPacketAcknowledgementsResponse): _117.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _117.QueryUnreceivedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.QueryUnreceivedPacketsRequest;
                    fromPartial(object: Partial<_117.QueryUnreceivedPacketsRequest>): _117.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _117.QueryUnreceivedPacketsRequestAmino): _117.QueryUnreceivedPacketsRequest;
                    toAmino(message: _117.QueryUnreceivedPacketsRequest): _117.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _117.QueryUnreceivedPacketsRequestAminoMsg): _117.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _117.QueryUnreceivedPacketsRequest): _117.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _117.QueryUnreceivedPacketsRequestProtoMsg): _117.QueryUnreceivedPacketsRequest;
                    toProto(message: _117.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _117.QueryUnreceivedPacketsRequest): _117.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _117.QueryUnreceivedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.QueryUnreceivedPacketsResponse;
                    fromPartial(object: Partial<_117.QueryUnreceivedPacketsResponse>): _117.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _117.QueryUnreceivedPacketsResponseAmino): _117.QueryUnreceivedPacketsResponse;
                    toAmino(message: _117.QueryUnreceivedPacketsResponse): _117.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _117.QueryUnreceivedPacketsResponseAminoMsg): _117.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _117.QueryUnreceivedPacketsResponse): _117.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _117.QueryUnreceivedPacketsResponseProtoMsg): _117.QueryUnreceivedPacketsResponse;
                    toProto(message: _117.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _117.QueryUnreceivedPacketsResponse): _117.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    encode(message: _117.QueryUnreceivedAcksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.QueryUnreceivedAcksRequest;
                    fromPartial(object: Partial<_117.QueryUnreceivedAcksRequest>): _117.QueryUnreceivedAcksRequest;
                    fromAmino(object: _117.QueryUnreceivedAcksRequestAmino): _117.QueryUnreceivedAcksRequest;
                    toAmino(message: _117.QueryUnreceivedAcksRequest): _117.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _117.QueryUnreceivedAcksRequestAminoMsg): _117.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _117.QueryUnreceivedAcksRequest): _117.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _117.QueryUnreceivedAcksRequestProtoMsg): _117.QueryUnreceivedAcksRequest;
                    toProto(message: _117.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _117.QueryUnreceivedAcksRequest): _117.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    encode(message: _117.QueryUnreceivedAcksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.QueryUnreceivedAcksResponse;
                    fromPartial(object: Partial<_117.QueryUnreceivedAcksResponse>): _117.QueryUnreceivedAcksResponse;
                    fromAmino(object: _117.QueryUnreceivedAcksResponseAmino): _117.QueryUnreceivedAcksResponse;
                    toAmino(message: _117.QueryUnreceivedAcksResponse): _117.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _117.QueryUnreceivedAcksResponseAminoMsg): _117.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _117.QueryUnreceivedAcksResponse): _117.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _117.QueryUnreceivedAcksResponseProtoMsg): _117.QueryUnreceivedAcksResponse;
                    toProto(message: _117.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _117.QueryUnreceivedAcksResponse): _117.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    encode(message: _117.QueryNextSequenceReceiveRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.QueryNextSequenceReceiveRequest;
                    fromPartial(object: Partial<_117.QueryNextSequenceReceiveRequest>): _117.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _117.QueryNextSequenceReceiveRequestAmino): _117.QueryNextSequenceReceiveRequest;
                    toAmino(message: _117.QueryNextSequenceReceiveRequest): _117.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _117.QueryNextSequenceReceiveRequestAminoMsg): _117.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _117.QueryNextSequenceReceiveRequest): _117.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _117.QueryNextSequenceReceiveRequestProtoMsg): _117.QueryNextSequenceReceiveRequest;
                    toProto(message: _117.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _117.QueryNextSequenceReceiveRequest): _117.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    encode(message: _117.QueryNextSequenceReceiveResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.QueryNextSequenceReceiveResponse;
                    fromPartial(object: Partial<_117.QueryNextSequenceReceiveResponse>): _117.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _117.QueryNextSequenceReceiveResponseAmino): _117.QueryNextSequenceReceiveResponse;
                    toAmino(message: _117.QueryNextSequenceReceiveResponse): _117.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _117.QueryNextSequenceReceiveResponseAminoMsg): _117.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _117.QueryNextSequenceReceiveResponse): _117.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _117.QueryNextSequenceReceiveResponseProtoMsg): _117.QueryNextSequenceReceiveResponse;
                    toProto(message: _117.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _117.QueryNextSequenceReceiveResponse): _117.QueryNextSequenceReceiveResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _116.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _116.GenesisState;
                    fromPartial(object: Partial<_116.GenesisState>): _116.GenesisState;
                    fromAmino(object: _116.GenesisStateAmino): _116.GenesisState;
                    toAmino(message: _116.GenesisState): _116.GenesisStateAmino;
                    fromAminoMsg(object: _116.GenesisStateAminoMsg): _116.GenesisState;
                    toAminoMsg(message: _116.GenesisState): _116.GenesisStateAminoMsg;
                    fromProtoMsg(message: _116.GenesisStateProtoMsg): _116.GenesisState;
                    toProto(message: _116.GenesisState): Uint8Array;
                    toProtoMsg(message: _116.GenesisState): _116.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    typeUrl: string;
                    encode(message: _116.PacketSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _116.PacketSequence;
                    fromPartial(object: Partial<_116.PacketSequence>): _116.PacketSequence;
                    fromAmino(object: _116.PacketSequenceAmino): _116.PacketSequence;
                    toAmino(message: _116.PacketSequence): _116.PacketSequenceAmino;
                    fromAminoMsg(object: _116.PacketSequenceAminoMsg): _116.PacketSequence;
                    toAminoMsg(message: _116.PacketSequence): _116.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _116.PacketSequenceProtoMsg): _116.PacketSequence;
                    toProto(message: _116.PacketSequence): Uint8Array;
                    toProtoMsg(message: _116.PacketSequence): _116.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _115.State;
                stateToJSON(object: _115.State): string;
                orderFromJSON(object: any): _115.Order;
                orderToJSON(object: _115.Order): string;
                State: typeof _115.State;
                StateSDKType: typeof _115.State;
                StateAmino: typeof _115.State;
                Order: typeof _115.Order;
                OrderSDKType: typeof _115.Order;
                OrderAmino: typeof _115.Order;
                Channel: {
                    typeUrl: string;
                    encode(message: _115.Channel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.Channel;
                    fromPartial(object: Partial<_115.Channel>): _115.Channel;
                    fromAmino(object: _115.ChannelAmino): _115.Channel;
                    toAmino(message: _115.Channel): _115.ChannelAmino;
                    fromAminoMsg(object: _115.ChannelAminoMsg): _115.Channel;
                    toAminoMsg(message: _115.Channel): _115.ChannelAminoMsg;
                    fromProtoMsg(message: _115.ChannelProtoMsg): _115.Channel;
                    toProto(message: _115.Channel): Uint8Array;
                    toProtoMsg(message: _115.Channel): _115.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    encode(message: _115.IdentifiedChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.IdentifiedChannel;
                    fromPartial(object: Partial<_115.IdentifiedChannel>): _115.IdentifiedChannel;
                    fromAmino(object: _115.IdentifiedChannelAmino): _115.IdentifiedChannel;
                    toAmino(message: _115.IdentifiedChannel): _115.IdentifiedChannelAmino;
                    fromAminoMsg(object: _115.IdentifiedChannelAminoMsg): _115.IdentifiedChannel;
                    toAminoMsg(message: _115.IdentifiedChannel): _115.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _115.IdentifiedChannelProtoMsg): _115.IdentifiedChannel;
                    toProto(message: _115.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _115.IdentifiedChannel): _115.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _115.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.Counterparty;
                    fromPartial(object: Partial<_115.Counterparty>): _115.Counterparty;
                    fromAmino(object: _115.CounterpartyAmino): _115.Counterparty;
                    toAmino(message: _115.Counterparty): _115.CounterpartyAmino;
                    fromAminoMsg(object: _115.CounterpartyAminoMsg): _115.Counterparty;
                    toAminoMsg(message: _115.Counterparty): _115.CounterpartyAminoMsg;
                    fromProtoMsg(message: _115.CounterpartyProtoMsg): _115.Counterparty;
                    toProto(message: _115.Counterparty): Uint8Array;
                    toProtoMsg(message: _115.Counterparty): _115.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    encode(message: _115.Packet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.Packet;
                    fromPartial(object: Partial<_115.Packet>): _115.Packet;
                    fromAmino(object: _115.PacketAmino): _115.Packet;
                    toAmino(message: _115.Packet): _115.PacketAmino;
                    fromAminoMsg(object: _115.PacketAminoMsg): _115.Packet;
                    toAminoMsg(message: _115.Packet): _115.PacketAminoMsg;
                    fromProtoMsg(message: _115.PacketProtoMsg): _115.Packet;
                    toProto(message: _115.Packet): Uint8Array;
                    toProtoMsg(message: _115.Packet): _115.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    encode(message: _115.PacketState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.PacketState;
                    fromPartial(object: Partial<_115.PacketState>): _115.PacketState;
                    fromAmino(object: _115.PacketStateAmino): _115.PacketState;
                    toAmino(message: _115.PacketState): _115.PacketStateAmino;
                    fromAminoMsg(object: _115.PacketStateAminoMsg): _115.PacketState;
                    toAminoMsg(message: _115.PacketState): _115.PacketStateAminoMsg;
                    fromProtoMsg(message: _115.PacketStateProtoMsg): _115.PacketState;
                    toProto(message: _115.PacketState): Uint8Array;
                    toProtoMsg(message: _115.PacketState): _115.PacketStateProtoMsg;
                };
                PacketId: {
                    typeUrl: string;
                    encode(message: _115.PacketId, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.PacketId;
                    fromPartial(object: Partial<_115.PacketId>): _115.PacketId;
                    fromAmino(object: _115.PacketIdAmino): _115.PacketId;
                    toAmino(message: _115.PacketId): _115.PacketIdAmino;
                    fromAminoMsg(object: _115.PacketIdAminoMsg): _115.PacketId;
                    toAminoMsg(message: _115.PacketId): _115.PacketIdAminoMsg;
                    fromProtoMsg(message: _115.PacketIdProtoMsg): _115.PacketId;
                    toProto(message: _115.PacketId): Uint8Array;
                    toProtoMsg(message: _115.PacketId): _115.PacketIdProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    encode(message: _115.Acknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.Acknowledgement;
                    fromPartial(object: Partial<_115.Acknowledgement>): _115.Acknowledgement;
                    fromAmino(object: _115.AcknowledgementAmino): _115.Acknowledgement;
                    toAmino(message: _115.Acknowledgement): _115.AcknowledgementAmino;
                    fromAminoMsg(object: _115.AcknowledgementAminoMsg): _115.Acknowledgement;
                    toAminoMsg(message: _115.Acknowledgement): _115.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _115.AcknowledgementProtoMsg): _115.Acknowledgement;
                    toProto(message: _115.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _115.Acknowledgement): _115.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _263.MsgClientImpl;
                QueryClientImpl: typeof _258.QueryClientImpl;
                createRpcQueryExtension: (base: QueryClient) => {
                    clientState(request: _121.QueryClientStateRequest): Promise<_121.QueryClientStateResponse>;
                    clientStates(request?: _121.QueryClientStatesRequest): Promise<_121.QueryClientStatesResponse>;
                    consensusState(request: _121.QueryConsensusStateRequest): Promise<_121.QueryConsensusStateResponse>;
                    consensusStates(request: _121.QueryConsensusStatesRequest): Promise<_121.QueryConsensusStatesResponse>;
                    consensusStateHeights(request: _121.QueryConsensusStateHeightsRequest): Promise<_121.QueryConsensusStateHeightsResponse>;
                    clientStatus(request: _121.QueryClientStatusRequest): Promise<_121.QueryClientStatusResponse>;
                    clientParams(request?: _121.QueryClientParamsRequest): Promise<_121.QueryClientParamsResponse>;
                    upgradedClientState(request?: _121.QueryUpgradedClientStateRequest): Promise<_121.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _121.QueryUpgradedConsensusStateRequest): Promise<_121.QueryUpgradedConsensusStateResponse>;
                };
                LCDQueryClient: typeof _251.LCDQueryClient;
                registry: readonly [string, GeneratedType][];
                load: (protoRegistry: Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _122.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _122.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _122.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _122.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _122.MsgCreateClient): {
                            typeUrl: string;
                            value: _122.MsgCreateClient;
                        };
                        updateClient(value: _122.MsgUpdateClient): {
                            typeUrl: string;
                            value: _122.MsgUpdateClient;
                        };
                        upgradeClient(value: _122.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _122.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _122.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _122.MsgSubmitMisbehaviour;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _122.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _122.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _122.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _122.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _122.MsgCreateClient): {
                            typeUrl: string;
                            value: _122.MsgCreateClient;
                        };
                        updateClient(value: _122.MsgUpdateClient): {
                            typeUrl: string;
                            value: _122.MsgUpdateClient;
                        };
                        upgradeClient(value: _122.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _122.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _122.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _122.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _122.MsgCreateClient) => _122.MsgCreateClientAmino;
                        fromAmino: (object: _122.MsgCreateClientAmino) => _122.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _122.MsgUpdateClient) => _122.MsgUpdateClientAmino;
                        fromAmino: (object: _122.MsgUpdateClientAmino) => _122.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _122.MsgUpgradeClient) => _122.MsgUpgradeClientAmino;
                        fromAmino: (object: _122.MsgUpgradeClientAmino) => _122.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _122.MsgSubmitMisbehaviour) => _122.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _122.MsgSubmitMisbehaviourAmino) => _122.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    encode(message: _122.MsgCreateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.MsgCreateClient;
                    fromPartial(object: Partial<_122.MsgCreateClient>): _122.MsgCreateClient;
                    fromAmino(object: _122.MsgCreateClientAmino): _122.MsgCreateClient;
                    toAmino(message: _122.MsgCreateClient): _122.MsgCreateClientAmino;
                    fromAminoMsg(object: _122.MsgCreateClientAminoMsg): _122.MsgCreateClient;
                    toAminoMsg(message: _122.MsgCreateClient): _122.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _122.MsgCreateClientProtoMsg): _122.MsgCreateClient;
                    toProto(message: _122.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _122.MsgCreateClient): _122.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    encode(_: _122.MsgCreateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _122.MsgCreateClientResponse;
                    fromPartial(_: Partial<_122.MsgCreateClientResponse>): _122.MsgCreateClientResponse;
                    fromAmino(_: _122.MsgCreateClientResponseAmino): _122.MsgCreateClientResponse;
                    toAmino(_: _122.MsgCreateClientResponse): _122.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _122.MsgCreateClientResponseAminoMsg): _122.MsgCreateClientResponse;
                    toAminoMsg(message: _122.MsgCreateClientResponse): _122.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _122.MsgCreateClientResponseProtoMsg): _122.MsgCreateClientResponse;
                    toProto(message: _122.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _122.MsgCreateClientResponse): _122.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    encode(message: _122.MsgUpdateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.MsgUpdateClient;
                    fromPartial(object: Partial<_122.MsgUpdateClient>): _122.MsgUpdateClient;
                    fromAmino(object: _122.MsgUpdateClientAmino): _122.MsgUpdateClient;
                    toAmino(message: _122.MsgUpdateClient): _122.MsgUpdateClientAmino;
                    fromAminoMsg(object: _122.MsgUpdateClientAminoMsg): _122.MsgUpdateClient;
                    toAminoMsg(message: _122.MsgUpdateClient): _122.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _122.MsgUpdateClientProtoMsg): _122.MsgUpdateClient;
                    toProto(message: _122.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _122.MsgUpdateClient): _122.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    encode(_: _122.MsgUpdateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _122.MsgUpdateClientResponse;
                    fromPartial(_: Partial<_122.MsgUpdateClientResponse>): _122.MsgUpdateClientResponse;
                    fromAmino(_: _122.MsgUpdateClientResponseAmino): _122.MsgUpdateClientResponse;
                    toAmino(_: _122.MsgUpdateClientResponse): _122.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _122.MsgUpdateClientResponseAminoMsg): _122.MsgUpdateClientResponse;
                    toAminoMsg(message: _122.MsgUpdateClientResponse): _122.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _122.MsgUpdateClientResponseProtoMsg): _122.MsgUpdateClientResponse;
                    toProto(message: _122.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _122.MsgUpdateClientResponse): _122.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    encode(message: _122.MsgUpgradeClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.MsgUpgradeClient;
                    fromPartial(object: Partial<_122.MsgUpgradeClient>): _122.MsgUpgradeClient;
                    fromAmino(object: _122.MsgUpgradeClientAmino): _122.MsgUpgradeClient;
                    toAmino(message: _122.MsgUpgradeClient): _122.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _122.MsgUpgradeClientAminoMsg): _122.MsgUpgradeClient;
                    toAminoMsg(message: _122.MsgUpgradeClient): _122.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _122.MsgUpgradeClientProtoMsg): _122.MsgUpgradeClient;
                    toProto(message: _122.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _122.MsgUpgradeClient): _122.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    encode(_: _122.MsgUpgradeClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _122.MsgUpgradeClientResponse;
                    fromPartial(_: Partial<_122.MsgUpgradeClientResponse>): _122.MsgUpgradeClientResponse;
                    fromAmino(_: _122.MsgUpgradeClientResponseAmino): _122.MsgUpgradeClientResponse;
                    toAmino(_: _122.MsgUpgradeClientResponse): _122.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _122.MsgUpgradeClientResponseAminoMsg): _122.MsgUpgradeClientResponse;
                    toAminoMsg(message: _122.MsgUpgradeClientResponse): _122.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _122.MsgUpgradeClientResponseProtoMsg): _122.MsgUpgradeClientResponse;
                    toProto(message: _122.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _122.MsgUpgradeClientResponse): _122.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    encode(message: _122.MsgSubmitMisbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.MsgSubmitMisbehaviour;
                    fromPartial(object: Partial<_122.MsgSubmitMisbehaviour>): _122.MsgSubmitMisbehaviour;
                    fromAmino(object: _122.MsgSubmitMisbehaviourAmino): _122.MsgSubmitMisbehaviour;
                    toAmino(message: _122.MsgSubmitMisbehaviour): _122.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _122.MsgSubmitMisbehaviourAminoMsg): _122.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _122.MsgSubmitMisbehaviour): _122.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _122.MsgSubmitMisbehaviourProtoMsg): _122.MsgSubmitMisbehaviour;
                    toProto(message: _122.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _122.MsgSubmitMisbehaviour): _122.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    encode(_: _122.MsgSubmitMisbehaviourResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _122.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: Partial<_122.MsgSubmitMisbehaviourResponse>): _122.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _122.MsgSubmitMisbehaviourResponseAmino): _122.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _122.MsgSubmitMisbehaviourResponse): _122.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _122.MsgSubmitMisbehaviourResponseAminoMsg): _122.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _122.MsgSubmitMisbehaviourResponse): _122.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _122.MsgSubmitMisbehaviourResponseProtoMsg): _122.MsgSubmitMisbehaviourResponse;
                    toProto(message: _122.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _122.MsgSubmitMisbehaviourResponse): _122.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    encode(message: _121.QueryClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryClientStateRequest;
                    fromPartial(object: Partial<_121.QueryClientStateRequest>): _121.QueryClientStateRequest;
                    fromAmino(object: _121.QueryClientStateRequestAmino): _121.QueryClientStateRequest;
                    toAmino(message: _121.QueryClientStateRequest): _121.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _121.QueryClientStateRequestAminoMsg): _121.QueryClientStateRequest;
                    toAminoMsg(message: _121.QueryClientStateRequest): _121.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _121.QueryClientStateRequestProtoMsg): _121.QueryClientStateRequest;
                    toProto(message: _121.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _121.QueryClientStateRequest): _121.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    encode(message: _121.QueryClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryClientStateResponse;
                    fromPartial(object: Partial<_121.QueryClientStateResponse>): _121.QueryClientStateResponse;
                    fromAmino(object: _121.QueryClientStateResponseAmino): _121.QueryClientStateResponse;
                    toAmino(message: _121.QueryClientStateResponse): _121.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _121.QueryClientStateResponseAminoMsg): _121.QueryClientStateResponse;
                    toAminoMsg(message: _121.QueryClientStateResponse): _121.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _121.QueryClientStateResponseProtoMsg): _121.QueryClientStateResponse;
                    toProto(message: _121.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _121.QueryClientStateResponse): _121.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    encode(message: _121.QueryClientStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryClientStatesRequest;
                    fromPartial(object: Partial<_121.QueryClientStatesRequest>): _121.QueryClientStatesRequest;
                    fromAmino(object: _121.QueryClientStatesRequestAmino): _121.QueryClientStatesRequest;
                    toAmino(message: _121.QueryClientStatesRequest): _121.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _121.QueryClientStatesRequestAminoMsg): _121.QueryClientStatesRequest;
                    toAminoMsg(message: _121.QueryClientStatesRequest): _121.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _121.QueryClientStatesRequestProtoMsg): _121.QueryClientStatesRequest;
                    toProto(message: _121.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _121.QueryClientStatesRequest): _121.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    encode(message: _121.QueryClientStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryClientStatesResponse;
                    fromPartial(object: Partial<_121.QueryClientStatesResponse>): _121.QueryClientStatesResponse;
                    fromAmino(object: _121.QueryClientStatesResponseAmino): _121.QueryClientStatesResponse;
                    toAmino(message: _121.QueryClientStatesResponse): _121.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _121.QueryClientStatesResponseAminoMsg): _121.QueryClientStatesResponse;
                    toAminoMsg(message: _121.QueryClientStatesResponse): _121.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _121.QueryClientStatesResponseProtoMsg): _121.QueryClientStatesResponse;
                    toProto(message: _121.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _121.QueryClientStatesResponse): _121.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _121.QueryConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_121.QueryConsensusStateRequest>): _121.QueryConsensusStateRequest;
                    fromAmino(object: _121.QueryConsensusStateRequestAmino): _121.QueryConsensusStateRequest;
                    toAmino(message: _121.QueryConsensusStateRequest): _121.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _121.QueryConsensusStateRequestAminoMsg): _121.QueryConsensusStateRequest;
                    toAminoMsg(message: _121.QueryConsensusStateRequest): _121.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _121.QueryConsensusStateRequestProtoMsg): _121.QueryConsensusStateRequest;
                    toProto(message: _121.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _121.QueryConsensusStateRequest): _121.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _121.QueryConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_121.QueryConsensusStateResponse>): _121.QueryConsensusStateResponse;
                    fromAmino(object: _121.QueryConsensusStateResponseAmino): _121.QueryConsensusStateResponse;
                    toAmino(message: _121.QueryConsensusStateResponse): _121.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _121.QueryConsensusStateResponseAminoMsg): _121.QueryConsensusStateResponse;
                    toAminoMsg(message: _121.QueryConsensusStateResponse): _121.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _121.QueryConsensusStateResponseProtoMsg): _121.QueryConsensusStateResponse;
                    toProto(message: _121.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _121.QueryConsensusStateResponse): _121.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    encode(message: _121.QueryConsensusStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_121.QueryConsensusStatesRequest>): _121.QueryConsensusStatesRequest;
                    fromAmino(object: _121.QueryConsensusStatesRequestAmino): _121.QueryConsensusStatesRequest;
                    toAmino(message: _121.QueryConsensusStatesRequest): _121.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _121.QueryConsensusStatesRequestAminoMsg): _121.QueryConsensusStatesRequest;
                    toAminoMsg(message: _121.QueryConsensusStatesRequest): _121.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _121.QueryConsensusStatesRequestProtoMsg): _121.QueryConsensusStatesRequest;
                    toProto(message: _121.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _121.QueryConsensusStatesRequest): _121.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    encode(message: _121.QueryConsensusStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_121.QueryConsensusStatesResponse>): _121.QueryConsensusStatesResponse;
                    fromAmino(object: _121.QueryConsensusStatesResponseAmino): _121.QueryConsensusStatesResponse;
                    toAmino(message: _121.QueryConsensusStatesResponse): _121.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _121.QueryConsensusStatesResponseAminoMsg): _121.QueryConsensusStatesResponse;
                    toAminoMsg(message: _121.QueryConsensusStatesResponse): _121.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _121.QueryConsensusStatesResponseProtoMsg): _121.QueryConsensusStatesResponse;
                    toProto(message: _121.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _121.QueryConsensusStatesResponse): _121.QueryConsensusStatesResponseProtoMsg;
                };
                QueryConsensusStateHeightsRequest: {
                    typeUrl: string;
                    encode(message: _121.QueryConsensusStateHeightsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryConsensusStateHeightsRequest;
                    fromPartial(object: Partial<_121.QueryConsensusStateHeightsRequest>): _121.QueryConsensusStateHeightsRequest;
                    fromAmino(object: _121.QueryConsensusStateHeightsRequestAmino): _121.QueryConsensusStateHeightsRequest;
                    toAmino(message: _121.QueryConsensusStateHeightsRequest): _121.QueryConsensusStateHeightsRequestAmino;
                    fromAminoMsg(object: _121.QueryConsensusStateHeightsRequestAminoMsg): _121.QueryConsensusStateHeightsRequest;
                    toAminoMsg(message: _121.QueryConsensusStateHeightsRequest): _121.QueryConsensusStateHeightsRequestAminoMsg;
                    fromProtoMsg(message: _121.QueryConsensusStateHeightsRequestProtoMsg): _121.QueryConsensusStateHeightsRequest;
                    toProto(message: _121.QueryConsensusStateHeightsRequest): Uint8Array;
                    toProtoMsg(message: _121.QueryConsensusStateHeightsRequest): _121.QueryConsensusStateHeightsRequestProtoMsg;
                };
                QueryConsensusStateHeightsResponse: {
                    typeUrl: string;
                    encode(message: _121.QueryConsensusStateHeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryConsensusStateHeightsResponse;
                    fromPartial(object: Partial<_121.QueryConsensusStateHeightsResponse>): _121.QueryConsensusStateHeightsResponse;
                    fromAmino(object: _121.QueryConsensusStateHeightsResponseAmino): _121.QueryConsensusStateHeightsResponse;
                    toAmino(message: _121.QueryConsensusStateHeightsResponse): _121.QueryConsensusStateHeightsResponseAmino;
                    fromAminoMsg(object: _121.QueryConsensusStateHeightsResponseAminoMsg): _121.QueryConsensusStateHeightsResponse;
                    toAminoMsg(message: _121.QueryConsensusStateHeightsResponse): _121.QueryConsensusStateHeightsResponseAminoMsg;
                    fromProtoMsg(message: _121.QueryConsensusStateHeightsResponseProtoMsg): _121.QueryConsensusStateHeightsResponse;
                    toProto(message: _121.QueryConsensusStateHeightsResponse): Uint8Array;
                    toProtoMsg(message: _121.QueryConsensusStateHeightsResponse): _121.QueryConsensusStateHeightsResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    encode(message: _121.QueryClientStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryClientStatusRequest;
                    fromPartial(object: Partial<_121.QueryClientStatusRequest>): _121.QueryClientStatusRequest;
                    fromAmino(object: _121.QueryClientStatusRequestAmino): _121.QueryClientStatusRequest;
                    toAmino(message: _121.QueryClientStatusRequest): _121.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _121.QueryClientStatusRequestAminoMsg): _121.QueryClientStatusRequest;
                    toAminoMsg(message: _121.QueryClientStatusRequest): _121.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _121.QueryClientStatusRequestProtoMsg): _121.QueryClientStatusRequest;
                    toProto(message: _121.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _121.QueryClientStatusRequest): _121.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    encode(message: _121.QueryClientStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryClientStatusResponse;
                    fromPartial(object: Partial<_121.QueryClientStatusResponse>): _121.QueryClientStatusResponse;
                    fromAmino(object: _121.QueryClientStatusResponseAmino): _121.QueryClientStatusResponse;
                    toAmino(message: _121.QueryClientStatusResponse): _121.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _121.QueryClientStatusResponseAminoMsg): _121.QueryClientStatusResponse;
                    toAminoMsg(message: _121.QueryClientStatusResponse): _121.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _121.QueryClientStatusResponseProtoMsg): _121.QueryClientStatusResponse;
                    toProto(message: _121.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _121.QueryClientStatusResponse): _121.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    encode(_: _121.QueryClientParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _121.QueryClientParamsRequest;
                    fromPartial(_: Partial<_121.QueryClientParamsRequest>): _121.QueryClientParamsRequest;
                    fromAmino(_: _121.QueryClientParamsRequestAmino): _121.QueryClientParamsRequest;
                    toAmino(_: _121.QueryClientParamsRequest): _121.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _121.QueryClientParamsRequestAminoMsg): _121.QueryClientParamsRequest;
                    toAminoMsg(message: _121.QueryClientParamsRequest): _121.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _121.QueryClientParamsRequestProtoMsg): _121.QueryClientParamsRequest;
                    toProto(message: _121.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _121.QueryClientParamsRequest): _121.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    encode(message: _121.QueryClientParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryClientParamsResponse;
                    fromPartial(object: Partial<_121.QueryClientParamsResponse>): _121.QueryClientParamsResponse;
                    fromAmino(object: _121.QueryClientParamsResponseAmino): _121.QueryClientParamsResponse;
                    toAmino(message: _121.QueryClientParamsResponse): _121.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _121.QueryClientParamsResponseAminoMsg): _121.QueryClientParamsResponse;
                    toAminoMsg(message: _121.QueryClientParamsResponse): _121.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _121.QueryClientParamsResponseProtoMsg): _121.QueryClientParamsResponse;
                    toProto(message: _121.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _121.QueryClientParamsResponse): _121.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    encode(_: _121.QueryUpgradedClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _121.QueryUpgradedClientStateRequest;
                    fromPartial(_: Partial<_121.QueryUpgradedClientStateRequest>): _121.QueryUpgradedClientStateRequest;
                    fromAmino(_: _121.QueryUpgradedClientStateRequestAmino): _121.QueryUpgradedClientStateRequest;
                    toAmino(_: _121.QueryUpgradedClientStateRequest): _121.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _121.QueryUpgradedClientStateRequestAminoMsg): _121.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _121.QueryUpgradedClientStateRequest): _121.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _121.QueryUpgradedClientStateRequestProtoMsg): _121.QueryUpgradedClientStateRequest;
                    toProto(message: _121.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _121.QueryUpgradedClientStateRequest): _121.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    encode(message: _121.QueryUpgradedClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryUpgradedClientStateResponse;
                    fromPartial(object: Partial<_121.QueryUpgradedClientStateResponse>): _121.QueryUpgradedClientStateResponse;
                    fromAmino(object: _121.QueryUpgradedClientStateResponseAmino): _121.QueryUpgradedClientStateResponse;
                    toAmino(message: _121.QueryUpgradedClientStateResponse): _121.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _121.QueryUpgradedClientStateResponseAminoMsg): _121.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _121.QueryUpgradedClientStateResponse): _121.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _121.QueryUpgradedClientStateResponseProtoMsg): _121.QueryUpgradedClientStateResponse;
                    toProto(message: _121.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _121.QueryUpgradedClientStateResponse): _121.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    encode(_: _121.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _121.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: Partial<_121.QueryUpgradedConsensusStateRequest>): _121.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _121.QueryUpgradedConsensusStateRequestAmino): _121.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _121.QueryUpgradedConsensusStateRequest): _121.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _121.QueryUpgradedConsensusStateRequestAminoMsg): _121.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _121.QueryUpgradedConsensusStateRequest): _121.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _121.QueryUpgradedConsensusStateRequestProtoMsg): _121.QueryUpgradedConsensusStateRequest;
                    toProto(message: _121.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _121.QueryUpgradedConsensusStateRequest): _121.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _121.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: Partial<_121.QueryUpgradedConsensusStateResponse>): _121.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _121.QueryUpgradedConsensusStateResponseAmino): _121.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _121.QueryUpgradedConsensusStateResponse): _121.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _121.QueryUpgradedConsensusStateResponseAminoMsg): _121.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _121.QueryUpgradedConsensusStateResponse): _121.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _121.QueryUpgradedConsensusStateResponseProtoMsg): _121.QueryUpgradedConsensusStateResponse;
                    toProto(message: _121.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _121.QueryUpgradedConsensusStateResponse): _121.QueryUpgradedConsensusStateResponseProtoMsg;
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
                GenesisMetadata: {
                    typeUrl: string;
                    encode(message: _120.GenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _120.GenesisMetadata;
                    fromPartial(object: Partial<_120.GenesisMetadata>): _120.GenesisMetadata;
                    fromAmino(object: _120.GenesisMetadataAmino): _120.GenesisMetadata;
                    toAmino(message: _120.GenesisMetadata): _120.GenesisMetadataAmino;
                    fromAminoMsg(object: _120.GenesisMetadataAminoMsg): _120.GenesisMetadata;
                    toAminoMsg(message: _120.GenesisMetadata): _120.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _120.GenesisMetadataProtoMsg): _120.GenesisMetadata;
                    toProto(message: _120.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _120.GenesisMetadata): _120.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    encode(message: _120.IdentifiedGenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _120.IdentifiedGenesisMetadata;
                    fromPartial(object: Partial<_120.IdentifiedGenesisMetadata>): _120.IdentifiedGenesisMetadata;
                    fromAmino(object: _120.IdentifiedGenesisMetadataAmino): _120.IdentifiedGenesisMetadata;
                    toAmino(message: _120.IdentifiedGenesisMetadata): _120.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _120.IdentifiedGenesisMetadataAminoMsg): _120.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _120.IdentifiedGenesisMetadata): _120.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _120.IdentifiedGenesisMetadataProtoMsg): _120.IdentifiedGenesisMetadata;
                    toProto(message: _120.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _120.IdentifiedGenesisMetadata): _120.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    encode(message: _119.IdentifiedClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.IdentifiedClientState;
                    fromPartial(object: Partial<_119.IdentifiedClientState>): _119.IdentifiedClientState;
                    fromAmino(object: _119.IdentifiedClientStateAmino): _119.IdentifiedClientState;
                    toAmino(message: _119.IdentifiedClientState): _119.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _119.IdentifiedClientStateAminoMsg): _119.IdentifiedClientState;
                    toAminoMsg(message: _119.IdentifiedClientState): _119.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _119.IdentifiedClientStateProtoMsg): _119.IdentifiedClientState;
                    toProto(message: _119.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _119.IdentifiedClientState): _119.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    encode(message: _119.ConsensusStateWithHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_119.ConsensusStateWithHeight>): _119.ConsensusStateWithHeight;
                    fromAmino(object: _119.ConsensusStateWithHeightAmino): _119.ConsensusStateWithHeight;
                    toAmino(message: _119.ConsensusStateWithHeight): _119.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _119.ConsensusStateWithHeightAminoMsg): _119.ConsensusStateWithHeight;
                    toAminoMsg(message: _119.ConsensusStateWithHeight): _119.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _119.ConsensusStateWithHeightProtoMsg): _119.ConsensusStateWithHeight;
                    toProto(message: _119.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _119.ConsensusStateWithHeight): _119.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    encode(message: _119.ClientConsensusStates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.ClientConsensusStates;
                    fromPartial(object: Partial<_119.ClientConsensusStates>): _119.ClientConsensusStates;
                    fromAmino(object: _119.ClientConsensusStatesAmino): _119.ClientConsensusStates;
                    toAmino(message: _119.ClientConsensusStates): _119.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _119.ClientConsensusStatesAminoMsg): _119.ClientConsensusStates;
                    toAminoMsg(message: _119.ClientConsensusStates): _119.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _119.ClientConsensusStatesProtoMsg): _119.ClientConsensusStates;
                    toProto(message: _119.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _119.ClientConsensusStates): _119.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    encode(message: _119.ClientUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.ClientUpdateProposal;
                    fromPartial(object: Partial<_119.ClientUpdateProposal>): _119.ClientUpdateProposal;
                    fromAmino(object: _119.ClientUpdateProposalAmino): _119.ClientUpdateProposal;
                    toAmino(message: _119.ClientUpdateProposal): _119.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _119.ClientUpdateProposalAminoMsg): _119.ClientUpdateProposal;
                    toAminoMsg(message: _119.ClientUpdateProposal): _119.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _119.ClientUpdateProposalProtoMsg): _119.ClientUpdateProposal;
                    toProto(message: _119.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _119.ClientUpdateProposal): _119.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    encode(message: _119.UpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.UpgradeProposal;
                    fromPartial(object: Partial<_119.UpgradeProposal>): _119.UpgradeProposal;
                    fromAmino(object: _119.UpgradeProposalAmino): _119.UpgradeProposal;
                    toAmino(message: _119.UpgradeProposal): _119.UpgradeProposalAmino;
                    fromAminoMsg(object: _119.UpgradeProposalAminoMsg): _119.UpgradeProposal;
                    toAminoMsg(message: _119.UpgradeProposal): _119.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _119.UpgradeProposalProtoMsg): _119.UpgradeProposal;
                    toProto(message: _119.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _119.UpgradeProposal): _119.UpgradeProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    encode(message: _119.Height, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.Height;
                    fromPartial(object: Partial<_119.Height>): _119.Height;
                    fromAmino(object: _119.HeightAmino): _119.Height;
                    toAmino(message: _119.Height): _119.HeightAmino;
                    fromAminoMsg(object: _119.HeightAminoMsg): _119.Height;
                    toAminoMsg(message: _119.Height): _119.HeightAminoMsg;
                    fromProtoMsg(message: _119.HeightProtoMsg): _119.Height;
                    toProto(message: _119.Height): Uint8Array;
                    toProtoMsg(message: _119.Height): _119.HeightProtoMsg;
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
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    typeUrl: string;
                    encode(message: _123.MerkleRoot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.MerkleRoot;
                    fromPartial(object: Partial<_123.MerkleRoot>): _123.MerkleRoot;
                    fromAmino(object: _123.MerkleRootAmino): _123.MerkleRoot;
                    toAmino(message: _123.MerkleRoot): _123.MerkleRootAmino;
                    fromAminoMsg(object: _123.MerkleRootAminoMsg): _123.MerkleRoot;
                    toAminoMsg(message: _123.MerkleRoot): _123.MerkleRootAminoMsg;
                    fromProtoMsg(message: _123.MerkleRootProtoMsg): _123.MerkleRoot;
                    toProto(message: _123.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _123.MerkleRoot): _123.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    encode(message: _123.MerklePrefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.MerklePrefix;
                    fromPartial(object: Partial<_123.MerklePrefix>): _123.MerklePrefix;
                    fromAmino(object: _123.MerklePrefixAmino): _123.MerklePrefix;
                    toAmino(message: _123.MerklePrefix): _123.MerklePrefixAmino;
                    fromAminoMsg(object: _123.MerklePrefixAminoMsg): _123.MerklePrefix;
                    toAminoMsg(message: _123.MerklePrefix): _123.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _123.MerklePrefixProtoMsg): _123.MerklePrefix;
                    toProto(message: _123.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _123.MerklePrefix): _123.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    encode(message: _123.MerklePath, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.MerklePath;
                    fromPartial(object: Partial<_123.MerklePath>): _123.MerklePath;
                    fromAmino(object: _123.MerklePathAmino): _123.MerklePath;
                    toAmino(message: _123.MerklePath): _123.MerklePathAmino;
                    fromAminoMsg(object: _123.MerklePathAminoMsg): _123.MerklePath;
                    toAminoMsg(message: _123.MerklePath): _123.MerklePathAminoMsg;
                    fromProtoMsg(message: _123.MerklePathProtoMsg): _123.MerklePath;
                    toProto(message: _123.MerklePath): Uint8Array;
                    toProtoMsg(message: _123.MerklePath): _123.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    encode(message: _123.MerkleProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.MerkleProof;
                    fromPartial(object: Partial<_123.MerkleProof>): _123.MerkleProof;
                    fromAmino(object: _123.MerkleProofAmino): _123.MerkleProof;
                    toAmino(message: _123.MerkleProof): _123.MerkleProofAmino;
                    fromAminoMsg(object: _123.MerkleProofAminoMsg): _123.MerkleProof;
                    toAminoMsg(message: _123.MerkleProof): _123.MerkleProofAminoMsg;
                    fromProtoMsg(message: _123.MerkleProofProtoMsg): _123.MerkleProof;
                    toProto(message: _123.MerkleProof): Uint8Array;
                    toProtoMsg(message: _123.MerkleProof): _123.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _264.MsgClientImpl;
                QueryClientImpl: typeof _259.QueryClientImpl;
                createRpcQueryExtension: (base: QueryClient) => {
                    connection(request: _126.QueryConnectionRequest): Promise<_126.QueryConnectionResponse>;
                    connections(request?: _126.QueryConnectionsRequest): Promise<_126.QueryConnectionsResponse>;
                    clientConnections(request: _126.QueryClientConnectionsRequest): Promise<_126.QueryClientConnectionsResponse>;
                    connectionClientState(request: _126.QueryConnectionClientStateRequest): Promise<_126.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _126.QueryConnectionConsensusStateRequest): Promise<_126.QueryConnectionConsensusStateResponse>;
                };
                LCDQueryClient: typeof _252.LCDQueryClient;
                registry: readonly [string, GeneratedType][];
                load: (protoRegistry: Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _127.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _127.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _127.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _127.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _127.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _127.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _127.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _127.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _127.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _127.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _127.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _127.MsgConnectionOpenConfirm;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _127.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _127.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _127.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _127.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _127.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _127.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _127.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _127.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _127.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _127.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _127.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _127.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _127.MsgConnectionOpenInit) => _127.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _127.MsgConnectionOpenInitAmino) => _127.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _127.MsgConnectionOpenTry) => _127.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _127.MsgConnectionOpenTryAmino) => _127.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _127.MsgConnectionOpenAck) => _127.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _127.MsgConnectionOpenAckAmino) => _127.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _127.MsgConnectionOpenConfirm) => _127.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _127.MsgConnectionOpenConfirmAmino) => _127.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    encode(message: _127.MsgConnectionOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _127.MsgConnectionOpenInit;
                    fromPartial(object: Partial<_127.MsgConnectionOpenInit>): _127.MsgConnectionOpenInit;
                    fromAmino(object: _127.MsgConnectionOpenInitAmino): _127.MsgConnectionOpenInit;
                    toAmino(message: _127.MsgConnectionOpenInit): _127.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _127.MsgConnectionOpenInitAminoMsg): _127.MsgConnectionOpenInit;
                    toAminoMsg(message: _127.MsgConnectionOpenInit): _127.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _127.MsgConnectionOpenInitProtoMsg): _127.MsgConnectionOpenInit;
                    toProto(message: _127.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _127.MsgConnectionOpenInit): _127.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _127.MsgConnectionOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _127.MsgConnectionOpenInitResponse;
                    fromPartial(_: Partial<_127.MsgConnectionOpenInitResponse>): _127.MsgConnectionOpenInitResponse;
                    fromAmino(_: _127.MsgConnectionOpenInitResponseAmino): _127.MsgConnectionOpenInitResponse;
                    toAmino(_: _127.MsgConnectionOpenInitResponse): _127.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _127.MsgConnectionOpenInitResponseAminoMsg): _127.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _127.MsgConnectionOpenInitResponse): _127.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _127.MsgConnectionOpenInitResponseProtoMsg): _127.MsgConnectionOpenInitResponse;
                    toProto(message: _127.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _127.MsgConnectionOpenInitResponse): _127.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    encode(message: _127.MsgConnectionOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _127.MsgConnectionOpenTry;
                    fromPartial(object: Partial<_127.MsgConnectionOpenTry>): _127.MsgConnectionOpenTry;
                    fromAmino(object: _127.MsgConnectionOpenTryAmino): _127.MsgConnectionOpenTry;
                    toAmino(message: _127.MsgConnectionOpenTry): _127.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _127.MsgConnectionOpenTryAminoMsg): _127.MsgConnectionOpenTry;
                    toAminoMsg(message: _127.MsgConnectionOpenTry): _127.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _127.MsgConnectionOpenTryProtoMsg): _127.MsgConnectionOpenTry;
                    toProto(message: _127.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _127.MsgConnectionOpenTry): _127.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _127.MsgConnectionOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _127.MsgConnectionOpenTryResponse;
                    fromPartial(_: Partial<_127.MsgConnectionOpenTryResponse>): _127.MsgConnectionOpenTryResponse;
                    fromAmino(_: _127.MsgConnectionOpenTryResponseAmino): _127.MsgConnectionOpenTryResponse;
                    toAmino(_: _127.MsgConnectionOpenTryResponse): _127.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _127.MsgConnectionOpenTryResponseAminoMsg): _127.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _127.MsgConnectionOpenTryResponse): _127.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _127.MsgConnectionOpenTryResponseProtoMsg): _127.MsgConnectionOpenTryResponse;
                    toProto(message: _127.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _127.MsgConnectionOpenTryResponse): _127.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    encode(message: _127.MsgConnectionOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _127.MsgConnectionOpenAck;
                    fromPartial(object: Partial<_127.MsgConnectionOpenAck>): _127.MsgConnectionOpenAck;
                    fromAmino(object: _127.MsgConnectionOpenAckAmino): _127.MsgConnectionOpenAck;
                    toAmino(message: _127.MsgConnectionOpenAck): _127.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _127.MsgConnectionOpenAckAminoMsg): _127.MsgConnectionOpenAck;
                    toAminoMsg(message: _127.MsgConnectionOpenAck): _127.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _127.MsgConnectionOpenAckProtoMsg): _127.MsgConnectionOpenAck;
                    toProto(message: _127.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _127.MsgConnectionOpenAck): _127.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _127.MsgConnectionOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _127.MsgConnectionOpenAckResponse;
                    fromPartial(_: Partial<_127.MsgConnectionOpenAckResponse>): _127.MsgConnectionOpenAckResponse;
                    fromAmino(_: _127.MsgConnectionOpenAckResponseAmino): _127.MsgConnectionOpenAckResponse;
                    toAmino(_: _127.MsgConnectionOpenAckResponse): _127.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _127.MsgConnectionOpenAckResponseAminoMsg): _127.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _127.MsgConnectionOpenAckResponse): _127.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _127.MsgConnectionOpenAckResponseProtoMsg): _127.MsgConnectionOpenAckResponse;
                    toProto(message: _127.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _127.MsgConnectionOpenAckResponse): _127.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    encode(message: _127.MsgConnectionOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _127.MsgConnectionOpenConfirm;
                    fromPartial(object: Partial<_127.MsgConnectionOpenConfirm>): _127.MsgConnectionOpenConfirm;
                    fromAmino(object: _127.MsgConnectionOpenConfirmAmino): _127.MsgConnectionOpenConfirm;
                    toAmino(message: _127.MsgConnectionOpenConfirm): _127.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _127.MsgConnectionOpenConfirmAminoMsg): _127.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _127.MsgConnectionOpenConfirm): _127.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _127.MsgConnectionOpenConfirmProtoMsg): _127.MsgConnectionOpenConfirm;
                    toProto(message: _127.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _127.MsgConnectionOpenConfirm): _127.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _127.MsgConnectionOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _127.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: Partial<_127.MsgConnectionOpenConfirmResponse>): _127.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _127.MsgConnectionOpenConfirmResponseAmino): _127.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _127.MsgConnectionOpenConfirmResponse): _127.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _127.MsgConnectionOpenConfirmResponseAminoMsg): _127.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _127.MsgConnectionOpenConfirmResponse): _127.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _127.MsgConnectionOpenConfirmResponseProtoMsg): _127.MsgConnectionOpenConfirmResponse;
                    toProto(message: _127.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _127.MsgConnectionOpenConfirmResponse): _127.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    encode(message: _126.QueryConnectionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _126.QueryConnectionRequest;
                    fromPartial(object: Partial<_126.QueryConnectionRequest>): _126.QueryConnectionRequest;
                    fromAmino(object: _126.QueryConnectionRequestAmino): _126.QueryConnectionRequest;
                    toAmino(message: _126.QueryConnectionRequest): _126.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _126.QueryConnectionRequestAminoMsg): _126.QueryConnectionRequest;
                    toAminoMsg(message: _126.QueryConnectionRequest): _126.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _126.QueryConnectionRequestProtoMsg): _126.QueryConnectionRequest;
                    toProto(message: _126.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _126.QueryConnectionRequest): _126.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    encode(message: _126.QueryConnectionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _126.QueryConnectionResponse;
                    fromPartial(object: Partial<_126.QueryConnectionResponse>): _126.QueryConnectionResponse;
                    fromAmino(object: _126.QueryConnectionResponseAmino): _126.QueryConnectionResponse;
                    toAmino(message: _126.QueryConnectionResponse): _126.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _126.QueryConnectionResponseAminoMsg): _126.QueryConnectionResponse;
                    toAminoMsg(message: _126.QueryConnectionResponse): _126.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _126.QueryConnectionResponseProtoMsg): _126.QueryConnectionResponse;
                    toProto(message: _126.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _126.QueryConnectionResponse): _126.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _126.QueryConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _126.QueryConnectionsRequest;
                    fromPartial(object: Partial<_126.QueryConnectionsRequest>): _126.QueryConnectionsRequest;
                    fromAmino(object: _126.QueryConnectionsRequestAmino): _126.QueryConnectionsRequest;
                    toAmino(message: _126.QueryConnectionsRequest): _126.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _126.QueryConnectionsRequestAminoMsg): _126.QueryConnectionsRequest;
                    toAminoMsg(message: _126.QueryConnectionsRequest): _126.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _126.QueryConnectionsRequestProtoMsg): _126.QueryConnectionsRequest;
                    toProto(message: _126.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _126.QueryConnectionsRequest): _126.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _126.QueryConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _126.QueryConnectionsResponse;
                    fromPartial(object: Partial<_126.QueryConnectionsResponse>): _126.QueryConnectionsResponse;
                    fromAmino(object: _126.QueryConnectionsResponseAmino): _126.QueryConnectionsResponse;
                    toAmino(message: _126.QueryConnectionsResponse): _126.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _126.QueryConnectionsResponseAminoMsg): _126.QueryConnectionsResponse;
                    toAminoMsg(message: _126.QueryConnectionsResponse): _126.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _126.QueryConnectionsResponseProtoMsg): _126.QueryConnectionsResponse;
                    toProto(message: _126.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _126.QueryConnectionsResponse): _126.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _126.QueryClientConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _126.QueryClientConnectionsRequest;
                    fromPartial(object: Partial<_126.QueryClientConnectionsRequest>): _126.QueryClientConnectionsRequest;
                    fromAmino(object: _126.QueryClientConnectionsRequestAmino): _126.QueryClientConnectionsRequest;
                    toAmino(message: _126.QueryClientConnectionsRequest): _126.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _126.QueryClientConnectionsRequestAminoMsg): _126.QueryClientConnectionsRequest;
                    toAminoMsg(message: _126.QueryClientConnectionsRequest): _126.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _126.QueryClientConnectionsRequestProtoMsg): _126.QueryClientConnectionsRequest;
                    toProto(message: _126.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _126.QueryClientConnectionsRequest): _126.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _126.QueryClientConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _126.QueryClientConnectionsResponse;
                    fromPartial(object: Partial<_126.QueryClientConnectionsResponse>): _126.QueryClientConnectionsResponse;
                    fromAmino(object: _126.QueryClientConnectionsResponseAmino): _126.QueryClientConnectionsResponse;
                    toAmino(message: _126.QueryClientConnectionsResponse): _126.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _126.QueryClientConnectionsResponseAminoMsg): _126.QueryClientConnectionsResponse;
                    toAminoMsg(message: _126.QueryClientConnectionsResponse): _126.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _126.QueryClientConnectionsResponseProtoMsg): _126.QueryClientConnectionsResponse;
                    toProto(message: _126.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _126.QueryClientConnectionsResponse): _126.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    encode(message: _126.QueryConnectionClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _126.QueryConnectionClientStateRequest;
                    fromPartial(object: Partial<_126.QueryConnectionClientStateRequest>): _126.QueryConnectionClientStateRequest;
                    fromAmino(object: _126.QueryConnectionClientStateRequestAmino): _126.QueryConnectionClientStateRequest;
                    toAmino(message: _126.QueryConnectionClientStateRequest): _126.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _126.QueryConnectionClientStateRequestAminoMsg): _126.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _126.QueryConnectionClientStateRequest): _126.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _126.QueryConnectionClientStateRequestProtoMsg): _126.QueryConnectionClientStateRequest;
                    toProto(message: _126.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _126.QueryConnectionClientStateRequest): _126.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    encode(message: _126.QueryConnectionClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _126.QueryConnectionClientStateResponse;
                    fromPartial(object: Partial<_126.QueryConnectionClientStateResponse>): _126.QueryConnectionClientStateResponse;
                    fromAmino(object: _126.QueryConnectionClientStateResponseAmino): _126.QueryConnectionClientStateResponse;
                    toAmino(message: _126.QueryConnectionClientStateResponse): _126.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _126.QueryConnectionClientStateResponseAminoMsg): _126.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _126.QueryConnectionClientStateResponse): _126.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _126.QueryConnectionClientStateResponseProtoMsg): _126.QueryConnectionClientStateResponse;
                    toProto(message: _126.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _126.QueryConnectionClientStateResponse): _126.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _126.QueryConnectionConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _126.QueryConnectionConsensusStateRequest;
                    fromPartial(object: Partial<_126.QueryConnectionConsensusStateRequest>): _126.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _126.QueryConnectionConsensusStateRequestAmino): _126.QueryConnectionConsensusStateRequest;
                    toAmino(message: _126.QueryConnectionConsensusStateRequest): _126.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _126.QueryConnectionConsensusStateRequestAminoMsg): _126.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _126.QueryConnectionConsensusStateRequest): _126.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _126.QueryConnectionConsensusStateRequestProtoMsg): _126.QueryConnectionConsensusStateRequest;
                    toProto(message: _126.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _126.QueryConnectionConsensusStateRequest): _126.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _126.QueryConnectionConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _126.QueryConnectionConsensusStateResponse;
                    fromPartial(object: Partial<_126.QueryConnectionConsensusStateResponse>): _126.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _126.QueryConnectionConsensusStateResponseAmino): _126.QueryConnectionConsensusStateResponse;
                    toAmino(message: _126.QueryConnectionConsensusStateResponse): _126.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _126.QueryConnectionConsensusStateResponseAminoMsg): _126.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _126.QueryConnectionConsensusStateResponse): _126.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _126.QueryConnectionConsensusStateResponseProtoMsg): _126.QueryConnectionConsensusStateResponse;
                    toProto(message: _126.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _126.QueryConnectionConsensusStateResponse): _126.QueryConnectionConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _125.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.GenesisState;
                    fromPartial(object: Partial<_125.GenesisState>): _125.GenesisState;
                    fromAmino(object: _125.GenesisStateAmino): _125.GenesisState;
                    toAmino(message: _125.GenesisState): _125.GenesisStateAmino;
                    fromAminoMsg(object: _125.GenesisStateAminoMsg): _125.GenesisState;
                    toAminoMsg(message: _125.GenesisState): _125.GenesisStateAminoMsg;
                    fromProtoMsg(message: _125.GenesisStateProtoMsg): _125.GenesisState;
                    toProto(message: _125.GenesisState): Uint8Array;
                    toProtoMsg(message: _125.GenesisState): _125.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _124.State;
                stateToJSON(object: _124.State): string;
                State: typeof _124.State;
                StateSDKType: typeof _124.State;
                StateAmino: typeof _124.State;
                ConnectionEnd: {
                    typeUrl: string;
                    encode(message: _124.ConnectionEnd, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _124.ConnectionEnd;
                    fromPartial(object: Partial<_124.ConnectionEnd>): _124.ConnectionEnd;
                    fromAmino(object: _124.ConnectionEndAmino): _124.ConnectionEnd;
                    toAmino(message: _124.ConnectionEnd): _124.ConnectionEndAmino;
                    fromAminoMsg(object: _124.ConnectionEndAminoMsg): _124.ConnectionEnd;
                    toAminoMsg(message: _124.ConnectionEnd): _124.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _124.ConnectionEndProtoMsg): _124.ConnectionEnd;
                    toProto(message: _124.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _124.ConnectionEnd): _124.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    encode(message: _124.IdentifiedConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _124.IdentifiedConnection;
                    fromPartial(object: Partial<_124.IdentifiedConnection>): _124.IdentifiedConnection;
                    fromAmino(object: _124.IdentifiedConnectionAmino): _124.IdentifiedConnection;
                    toAmino(message: _124.IdentifiedConnection): _124.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _124.IdentifiedConnectionAminoMsg): _124.IdentifiedConnection;
                    toAminoMsg(message: _124.IdentifiedConnection): _124.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _124.IdentifiedConnectionProtoMsg): _124.IdentifiedConnection;
                    toProto(message: _124.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _124.IdentifiedConnection): _124.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _124.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _124.Counterparty;
                    fromPartial(object: Partial<_124.Counterparty>): _124.Counterparty;
                    fromAmino(object: _124.CounterpartyAmino): _124.Counterparty;
                    toAmino(message: _124.Counterparty): _124.CounterpartyAmino;
                    fromAminoMsg(object: _124.CounterpartyAminoMsg): _124.Counterparty;
                    toAminoMsg(message: _124.Counterparty): _124.CounterpartyAminoMsg;
                    fromProtoMsg(message: _124.CounterpartyProtoMsg): _124.Counterparty;
                    toProto(message: _124.Counterparty): Uint8Array;
                    toProtoMsg(message: _124.Counterparty): _124.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    encode(message: _124.ClientPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _124.ClientPaths;
                    fromPartial(object: Partial<_124.ClientPaths>): _124.ClientPaths;
                    fromAmino(object: _124.ClientPathsAmino): _124.ClientPaths;
                    toAmino(message: _124.ClientPaths): _124.ClientPathsAmino;
                    fromAminoMsg(object: _124.ClientPathsAminoMsg): _124.ClientPaths;
                    toAminoMsg(message: _124.ClientPaths): _124.ClientPathsAminoMsg;
                    fromProtoMsg(message: _124.ClientPathsProtoMsg): _124.ClientPaths;
                    toProto(message: _124.ClientPaths): Uint8Array;
                    toProtoMsg(message: _124.ClientPaths): _124.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    encode(message: _124.ConnectionPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _124.ConnectionPaths;
                    fromPartial(object: Partial<_124.ConnectionPaths>): _124.ConnectionPaths;
                    fromAmino(object: _124.ConnectionPathsAmino): _124.ConnectionPaths;
                    toAmino(message: _124.ConnectionPaths): _124.ConnectionPathsAmino;
                    fromAminoMsg(object: _124.ConnectionPathsAminoMsg): _124.ConnectionPaths;
                    toAminoMsg(message: _124.ConnectionPaths): _124.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _124.ConnectionPathsProtoMsg): _124.ConnectionPaths;
                    toProto(message: _124.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _124.ConnectionPaths): _124.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    encode(message: _124.Version, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _124.Version;
                    fromPartial(object: Partial<_124.Version>): _124.Version;
                    fromAmino(object: _124.VersionAmino): _124.Version;
                    toAmino(message: _124.Version): _124.VersionAmino;
                    fromAminoMsg(object: _124.VersionAminoMsg): _124.Version;
                    toAminoMsg(message: _124.Version): _124.VersionAminoMsg;
                    fromProtoMsg(message: _124.VersionProtoMsg): _124.Version;
                    toProto(message: _124.Version): Uint8Array;
                    toProtoMsg(message: _124.Version): _124.VersionProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _124.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _124.Params;
                    fromPartial(object: Partial<_124.Params>): _124.Params;
                    fromAmino(object: _124.ParamsAmino): _124.Params;
                    toAmino(message: _124.Params): _124.ParamsAmino;
                    fromAminoMsg(object: _124.ParamsAminoMsg): _124.Params;
                    toAminoMsg(message: _124.Params): _124.ParamsAminoMsg;
                    fromProtoMsg(message: _124.ParamsProtoMsg): _124.Params;
                    toProto(message: _124.Params): Uint8Array;
                    toProtoMsg(message: _124.Params): _124.ParamsProtoMsg;
                };
            };
        }
        namespace types {
            const v1: {
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
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _129.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _129.ClientState;
                    fromPartial(object: Partial<_129.ClientState>): _129.ClientState;
                    fromAmino(object: _129.ClientStateAmino): _129.ClientState;
                    toAmino(message: _129.ClientState): _129.ClientStateAmino;
                    fromAminoMsg(object: _129.ClientStateAminoMsg): _129.ClientState;
                    toAminoMsg(message: _129.ClientState): _129.ClientStateAminoMsg;
                    fromProtoMsg(message: _129.ClientStateProtoMsg): _129.ClientState;
                    toProto(message: _129.ClientState): Uint8Array;
                    toProtoMsg(message: _129.ClientState): _129.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _130.DataType;
                dataTypeToJSON(object: _130.DataType): string;
                DataType: typeof _130.DataType;
                DataTypeSDKType: typeof _130.DataType;
                DataTypeAmino: typeof _130.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _130.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.ClientState;
                    fromPartial(object: Partial<_130.ClientState>): _130.ClientState;
                    fromAmino(object: _130.ClientStateAmino): _130.ClientState;
                    toAmino(message: _130.ClientState): _130.ClientStateAmino;
                    fromAminoMsg(object: _130.ClientStateAminoMsg): _130.ClientState;
                    toAminoMsg(message: _130.ClientState): _130.ClientStateAminoMsg;
                    fromProtoMsg(message: _130.ClientStateProtoMsg): _130.ClientState;
                    toProto(message: _130.ClientState): Uint8Array;
                    toProtoMsg(message: _130.ClientState): _130.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _130.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.ConsensusState;
                    fromPartial(object: Partial<_130.ConsensusState>): _130.ConsensusState;
                    fromAmino(object: _130.ConsensusStateAmino): _130.ConsensusState;
                    toAmino(message: _130.ConsensusState): _130.ConsensusStateAmino;
                    fromAminoMsg(object: _130.ConsensusStateAminoMsg): _130.ConsensusState;
                    toAminoMsg(message: _130.ConsensusState): _130.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _130.ConsensusStateProtoMsg): _130.ConsensusState;
                    toProto(message: _130.ConsensusState): Uint8Array;
                    toProtoMsg(message: _130.ConsensusState): _130.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _130.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.Header;
                    fromPartial(object: Partial<_130.Header>): _130.Header;
                    fromAmino(object: _130.HeaderAmino): _130.Header;
                    toAmino(message: _130.Header): _130.HeaderAmino;
                    fromAminoMsg(object: _130.HeaderAminoMsg): _130.Header;
                    toAminoMsg(message: _130.Header): _130.HeaderAminoMsg;
                    fromProtoMsg(message: _130.HeaderProtoMsg): _130.Header;
                    toProto(message: _130.Header): Uint8Array;
                    toProtoMsg(message: _130.Header): _130.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _130.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.Misbehaviour;
                    fromPartial(object: Partial<_130.Misbehaviour>): _130.Misbehaviour;
                    fromAmino(object: _130.MisbehaviourAmino): _130.Misbehaviour;
                    toAmino(message: _130.Misbehaviour): _130.MisbehaviourAmino;
                    fromAminoMsg(object: _130.MisbehaviourAminoMsg): _130.Misbehaviour;
                    toAminoMsg(message: _130.Misbehaviour): _130.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _130.MisbehaviourProtoMsg): _130.Misbehaviour;
                    toProto(message: _130.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _130.Misbehaviour): _130.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _130.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.SignatureAndData;
                    fromPartial(object: Partial<_130.SignatureAndData>): _130.SignatureAndData;
                    fromAmino(object: _130.SignatureAndDataAmino): _130.SignatureAndData;
                    toAmino(message: _130.SignatureAndData): _130.SignatureAndDataAmino;
                    fromAminoMsg(object: _130.SignatureAndDataAminoMsg): _130.SignatureAndData;
                    toAminoMsg(message: _130.SignatureAndData): _130.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _130.SignatureAndDataProtoMsg): _130.SignatureAndData;
                    toProto(message: _130.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _130.SignatureAndData): _130.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _130.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.TimestampedSignatureData;
                    fromPartial(object: Partial<_130.TimestampedSignatureData>): _130.TimestampedSignatureData;
                    fromAmino(object: _130.TimestampedSignatureDataAmino): _130.TimestampedSignatureData;
                    toAmino(message: _130.TimestampedSignatureData): _130.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _130.TimestampedSignatureDataAminoMsg): _130.TimestampedSignatureData;
                    toAminoMsg(message: _130.TimestampedSignatureData): _130.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _130.TimestampedSignatureDataProtoMsg): _130.TimestampedSignatureData;
                    toProto(message: _130.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _130.TimestampedSignatureData): _130.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _130.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.SignBytes;
                    fromPartial(object: Partial<_130.SignBytes>): _130.SignBytes;
                    fromAmino(object: _130.SignBytesAmino): _130.SignBytes;
                    toAmino(message: _130.SignBytes): _130.SignBytesAmino;
                    fromAminoMsg(object: _130.SignBytesAminoMsg): _130.SignBytes;
                    toAminoMsg(message: _130.SignBytes): _130.SignBytesAminoMsg;
                    fromProtoMsg(message: _130.SignBytesProtoMsg): _130.SignBytes;
                    toProto(message: _130.SignBytes): Uint8Array;
                    toProtoMsg(message: _130.SignBytes): _130.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _130.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.HeaderData;
                    fromPartial(object: Partial<_130.HeaderData>): _130.HeaderData;
                    fromAmino(object: _130.HeaderDataAmino): _130.HeaderData;
                    toAmino(message: _130.HeaderData): _130.HeaderDataAmino;
                    fromAminoMsg(object: _130.HeaderDataAminoMsg): _130.HeaderData;
                    toAminoMsg(message: _130.HeaderData): _130.HeaderDataAminoMsg;
                    fromProtoMsg(message: _130.HeaderDataProtoMsg): _130.HeaderData;
                    toProto(message: _130.HeaderData): Uint8Array;
                    toProtoMsg(message: _130.HeaderData): _130.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _130.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.ClientStateData;
                    fromPartial(object: Partial<_130.ClientStateData>): _130.ClientStateData;
                    fromAmino(object: _130.ClientStateDataAmino): _130.ClientStateData;
                    toAmino(message: _130.ClientStateData): _130.ClientStateDataAmino;
                    fromAminoMsg(object: _130.ClientStateDataAminoMsg): _130.ClientStateData;
                    toAminoMsg(message: _130.ClientStateData): _130.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _130.ClientStateDataProtoMsg): _130.ClientStateData;
                    toProto(message: _130.ClientStateData): Uint8Array;
                    toProtoMsg(message: _130.ClientStateData): _130.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _130.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.ConsensusStateData;
                    fromPartial(object: Partial<_130.ConsensusStateData>): _130.ConsensusStateData;
                    fromAmino(object: _130.ConsensusStateDataAmino): _130.ConsensusStateData;
                    toAmino(message: _130.ConsensusStateData): _130.ConsensusStateDataAmino;
                    fromAminoMsg(object: _130.ConsensusStateDataAminoMsg): _130.ConsensusStateData;
                    toAminoMsg(message: _130.ConsensusStateData): _130.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _130.ConsensusStateDataProtoMsg): _130.ConsensusStateData;
                    toProto(message: _130.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _130.ConsensusStateData): _130.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _130.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.ConnectionStateData;
                    fromPartial(object: Partial<_130.ConnectionStateData>): _130.ConnectionStateData;
                    fromAmino(object: _130.ConnectionStateDataAmino): _130.ConnectionStateData;
                    toAmino(message: _130.ConnectionStateData): _130.ConnectionStateDataAmino;
                    fromAminoMsg(object: _130.ConnectionStateDataAminoMsg): _130.ConnectionStateData;
                    toAminoMsg(message: _130.ConnectionStateData): _130.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _130.ConnectionStateDataProtoMsg): _130.ConnectionStateData;
                    toProto(message: _130.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _130.ConnectionStateData): _130.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _130.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.ChannelStateData;
                    fromPartial(object: Partial<_130.ChannelStateData>): _130.ChannelStateData;
                    fromAmino(object: _130.ChannelStateDataAmino): _130.ChannelStateData;
                    toAmino(message: _130.ChannelStateData): _130.ChannelStateDataAmino;
                    fromAminoMsg(object: _130.ChannelStateDataAminoMsg): _130.ChannelStateData;
                    toAminoMsg(message: _130.ChannelStateData): _130.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _130.ChannelStateDataProtoMsg): _130.ChannelStateData;
                    toProto(message: _130.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _130.ChannelStateData): _130.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _130.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.PacketCommitmentData;
                    fromPartial(object: Partial<_130.PacketCommitmentData>): _130.PacketCommitmentData;
                    fromAmino(object: _130.PacketCommitmentDataAmino): _130.PacketCommitmentData;
                    toAmino(message: _130.PacketCommitmentData): _130.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _130.PacketCommitmentDataAminoMsg): _130.PacketCommitmentData;
                    toAminoMsg(message: _130.PacketCommitmentData): _130.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _130.PacketCommitmentDataProtoMsg): _130.PacketCommitmentData;
                    toProto(message: _130.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _130.PacketCommitmentData): _130.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _130.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.PacketAcknowledgementData;
                    fromPartial(object: Partial<_130.PacketAcknowledgementData>): _130.PacketAcknowledgementData;
                    fromAmino(object: _130.PacketAcknowledgementDataAmino): _130.PacketAcknowledgementData;
                    toAmino(message: _130.PacketAcknowledgementData): _130.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _130.PacketAcknowledgementDataAminoMsg): _130.PacketAcknowledgementData;
                    toAminoMsg(message: _130.PacketAcknowledgementData): _130.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _130.PacketAcknowledgementDataProtoMsg): _130.PacketAcknowledgementData;
                    toProto(message: _130.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _130.PacketAcknowledgementData): _130.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _130.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_130.PacketReceiptAbsenceData>): _130.PacketReceiptAbsenceData;
                    fromAmino(object: _130.PacketReceiptAbsenceDataAmino): _130.PacketReceiptAbsenceData;
                    toAmino(message: _130.PacketReceiptAbsenceData): _130.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _130.PacketReceiptAbsenceDataAminoMsg): _130.PacketReceiptAbsenceData;
                    toAminoMsg(message: _130.PacketReceiptAbsenceData): _130.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _130.PacketReceiptAbsenceDataProtoMsg): _130.PacketReceiptAbsenceData;
                    toProto(message: _130.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _130.PacketReceiptAbsenceData): _130.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _130.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.NextSequenceRecvData;
                    fromPartial(object: Partial<_130.NextSequenceRecvData>): _130.NextSequenceRecvData;
                    fromAmino(object: _130.NextSequenceRecvDataAmino): _130.NextSequenceRecvData;
                    toAmino(message: _130.NextSequenceRecvData): _130.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _130.NextSequenceRecvDataAminoMsg): _130.NextSequenceRecvData;
                    toAminoMsg(message: _130.NextSequenceRecvData): _130.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _130.NextSequenceRecvDataProtoMsg): _130.NextSequenceRecvData;
                    toProto(message: _130.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _130.NextSequenceRecvData): _130.NextSequenceRecvDataProtoMsg;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _131.DataType;
                dataTypeToJSON(object: _131.DataType): string;
                DataType: typeof _131.DataType;
                DataTypeSDKType: typeof _131.DataType;
                DataTypeAmino: typeof _131.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _131.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.ClientState;
                    fromPartial(object: Partial<_131.ClientState>): _131.ClientState;
                    fromAmino(object: _131.ClientStateAmino): _131.ClientState;
                    toAmino(message: _131.ClientState): _131.ClientStateAmino;
                    fromAminoMsg(object: _131.ClientStateAminoMsg): _131.ClientState;
                    toAminoMsg(message: _131.ClientState): _131.ClientStateAminoMsg;
                    fromProtoMsg(message: _131.ClientStateProtoMsg): _131.ClientState;
                    toProto(message: _131.ClientState): Uint8Array;
                    toProtoMsg(message: _131.ClientState): _131.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _131.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.ConsensusState;
                    fromPartial(object: Partial<_131.ConsensusState>): _131.ConsensusState;
                    fromAmino(object: _131.ConsensusStateAmino): _131.ConsensusState;
                    toAmino(message: _131.ConsensusState): _131.ConsensusStateAmino;
                    fromAminoMsg(object: _131.ConsensusStateAminoMsg): _131.ConsensusState;
                    toAminoMsg(message: _131.ConsensusState): _131.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _131.ConsensusStateProtoMsg): _131.ConsensusState;
                    toProto(message: _131.ConsensusState): Uint8Array;
                    toProtoMsg(message: _131.ConsensusState): _131.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _131.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.Header;
                    fromPartial(object: Partial<_131.Header>): _131.Header;
                    fromAmino(object: _131.HeaderAmino): _131.Header;
                    toAmino(message: _131.Header): _131.HeaderAmino;
                    fromAminoMsg(object: _131.HeaderAminoMsg): _131.Header;
                    toAminoMsg(message: _131.Header): _131.HeaderAminoMsg;
                    fromProtoMsg(message: _131.HeaderProtoMsg): _131.Header;
                    toProto(message: _131.Header): Uint8Array;
                    toProtoMsg(message: _131.Header): _131.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _131.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.Misbehaviour;
                    fromPartial(object: Partial<_131.Misbehaviour>): _131.Misbehaviour;
                    fromAmino(object: _131.MisbehaviourAmino): _131.Misbehaviour;
                    toAmino(message: _131.Misbehaviour): _131.MisbehaviourAmino;
                    fromAminoMsg(object: _131.MisbehaviourAminoMsg): _131.Misbehaviour;
                    toAminoMsg(message: _131.Misbehaviour): _131.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _131.MisbehaviourProtoMsg): _131.Misbehaviour;
                    toProto(message: _131.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _131.Misbehaviour): _131.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _131.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.SignatureAndData;
                    fromPartial(object: Partial<_131.SignatureAndData>): _131.SignatureAndData;
                    fromAmino(object: _131.SignatureAndDataAmino): _131.SignatureAndData;
                    toAmino(message: _131.SignatureAndData): _131.SignatureAndDataAmino;
                    fromAminoMsg(object: _131.SignatureAndDataAminoMsg): _131.SignatureAndData;
                    toAminoMsg(message: _131.SignatureAndData): _131.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _131.SignatureAndDataProtoMsg): _131.SignatureAndData;
                    toProto(message: _131.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _131.SignatureAndData): _131.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _131.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.TimestampedSignatureData;
                    fromPartial(object: Partial<_131.TimestampedSignatureData>): _131.TimestampedSignatureData;
                    fromAmino(object: _131.TimestampedSignatureDataAmino): _131.TimestampedSignatureData;
                    toAmino(message: _131.TimestampedSignatureData): _131.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _131.TimestampedSignatureDataAminoMsg): _131.TimestampedSignatureData;
                    toAminoMsg(message: _131.TimestampedSignatureData): _131.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _131.TimestampedSignatureDataProtoMsg): _131.TimestampedSignatureData;
                    toProto(message: _131.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _131.TimestampedSignatureData): _131.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _131.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.SignBytes;
                    fromPartial(object: Partial<_131.SignBytes>): _131.SignBytes;
                    fromAmino(object: _131.SignBytesAmino): _131.SignBytes;
                    toAmino(message: _131.SignBytes): _131.SignBytesAmino;
                    fromAminoMsg(object: _131.SignBytesAminoMsg): _131.SignBytes;
                    toAminoMsg(message: _131.SignBytes): _131.SignBytesAminoMsg;
                    fromProtoMsg(message: _131.SignBytesProtoMsg): _131.SignBytes;
                    toProto(message: _131.SignBytes): Uint8Array;
                    toProtoMsg(message: _131.SignBytes): _131.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _131.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.HeaderData;
                    fromPartial(object: Partial<_131.HeaderData>): _131.HeaderData;
                    fromAmino(object: _131.HeaderDataAmino): _131.HeaderData;
                    toAmino(message: _131.HeaderData): _131.HeaderDataAmino;
                    fromAminoMsg(object: _131.HeaderDataAminoMsg): _131.HeaderData;
                    toAminoMsg(message: _131.HeaderData): _131.HeaderDataAminoMsg;
                    fromProtoMsg(message: _131.HeaderDataProtoMsg): _131.HeaderData;
                    toProto(message: _131.HeaderData): Uint8Array;
                    toProtoMsg(message: _131.HeaderData): _131.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _131.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.ClientStateData;
                    fromPartial(object: Partial<_131.ClientStateData>): _131.ClientStateData;
                    fromAmino(object: _131.ClientStateDataAmino): _131.ClientStateData;
                    toAmino(message: _131.ClientStateData): _131.ClientStateDataAmino;
                    fromAminoMsg(object: _131.ClientStateDataAminoMsg): _131.ClientStateData;
                    toAminoMsg(message: _131.ClientStateData): _131.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _131.ClientStateDataProtoMsg): _131.ClientStateData;
                    toProto(message: _131.ClientStateData): Uint8Array;
                    toProtoMsg(message: _131.ClientStateData): _131.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _131.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.ConsensusStateData;
                    fromPartial(object: Partial<_131.ConsensusStateData>): _131.ConsensusStateData;
                    fromAmino(object: _131.ConsensusStateDataAmino): _131.ConsensusStateData;
                    toAmino(message: _131.ConsensusStateData): _131.ConsensusStateDataAmino;
                    fromAminoMsg(object: _131.ConsensusStateDataAminoMsg): _131.ConsensusStateData;
                    toAminoMsg(message: _131.ConsensusStateData): _131.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _131.ConsensusStateDataProtoMsg): _131.ConsensusStateData;
                    toProto(message: _131.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _131.ConsensusStateData): _131.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _131.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.ConnectionStateData;
                    fromPartial(object: Partial<_131.ConnectionStateData>): _131.ConnectionStateData;
                    fromAmino(object: _131.ConnectionStateDataAmino): _131.ConnectionStateData;
                    toAmino(message: _131.ConnectionStateData): _131.ConnectionStateDataAmino;
                    fromAminoMsg(object: _131.ConnectionStateDataAminoMsg): _131.ConnectionStateData;
                    toAminoMsg(message: _131.ConnectionStateData): _131.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _131.ConnectionStateDataProtoMsg): _131.ConnectionStateData;
                    toProto(message: _131.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _131.ConnectionStateData): _131.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _131.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.ChannelStateData;
                    fromPartial(object: Partial<_131.ChannelStateData>): _131.ChannelStateData;
                    fromAmino(object: _131.ChannelStateDataAmino): _131.ChannelStateData;
                    toAmino(message: _131.ChannelStateData): _131.ChannelStateDataAmino;
                    fromAminoMsg(object: _131.ChannelStateDataAminoMsg): _131.ChannelStateData;
                    toAminoMsg(message: _131.ChannelStateData): _131.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _131.ChannelStateDataProtoMsg): _131.ChannelStateData;
                    toProto(message: _131.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _131.ChannelStateData): _131.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _131.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.PacketCommitmentData;
                    fromPartial(object: Partial<_131.PacketCommitmentData>): _131.PacketCommitmentData;
                    fromAmino(object: _131.PacketCommitmentDataAmino): _131.PacketCommitmentData;
                    toAmino(message: _131.PacketCommitmentData): _131.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _131.PacketCommitmentDataAminoMsg): _131.PacketCommitmentData;
                    toAminoMsg(message: _131.PacketCommitmentData): _131.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _131.PacketCommitmentDataProtoMsg): _131.PacketCommitmentData;
                    toProto(message: _131.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _131.PacketCommitmentData): _131.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _131.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.PacketAcknowledgementData;
                    fromPartial(object: Partial<_131.PacketAcknowledgementData>): _131.PacketAcknowledgementData;
                    fromAmino(object: _131.PacketAcknowledgementDataAmino): _131.PacketAcknowledgementData;
                    toAmino(message: _131.PacketAcknowledgementData): _131.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _131.PacketAcknowledgementDataAminoMsg): _131.PacketAcknowledgementData;
                    toAminoMsg(message: _131.PacketAcknowledgementData): _131.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _131.PacketAcknowledgementDataProtoMsg): _131.PacketAcknowledgementData;
                    toProto(message: _131.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _131.PacketAcknowledgementData): _131.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _131.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_131.PacketReceiptAbsenceData>): _131.PacketReceiptAbsenceData;
                    fromAmino(object: _131.PacketReceiptAbsenceDataAmino): _131.PacketReceiptAbsenceData;
                    toAmino(message: _131.PacketReceiptAbsenceData): _131.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _131.PacketReceiptAbsenceDataAminoMsg): _131.PacketReceiptAbsenceData;
                    toAminoMsg(message: _131.PacketReceiptAbsenceData): _131.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _131.PacketReceiptAbsenceDataProtoMsg): _131.PacketReceiptAbsenceData;
                    toProto(message: _131.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _131.PacketReceiptAbsenceData): _131.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _131.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.NextSequenceRecvData;
                    fromPartial(object: Partial<_131.NextSequenceRecvData>): _131.NextSequenceRecvData;
                    fromAmino(object: _131.NextSequenceRecvDataAmino): _131.NextSequenceRecvData;
                    toAmino(message: _131.NextSequenceRecvData): _131.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _131.NextSequenceRecvDataAminoMsg): _131.NextSequenceRecvData;
                    toAminoMsg(message: _131.NextSequenceRecvData): _131.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _131.NextSequenceRecvDataProtoMsg): _131.NextSequenceRecvData;
                    toProto(message: _131.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _131.NextSequenceRecvData): _131.NextSequenceRecvDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _132.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _132.ClientState;
                    fromPartial(object: Partial<_132.ClientState>): _132.ClientState;
                    fromAmino(object: _132.ClientStateAmino): _132.ClientState;
                    toAmino(message: _132.ClientState): _132.ClientStateAmino;
                    fromAminoMsg(object: _132.ClientStateAminoMsg): _132.ClientState;
                    toAminoMsg(message: _132.ClientState): _132.ClientStateAminoMsg;
                    fromProtoMsg(message: _132.ClientStateProtoMsg): _132.ClientState;
                    toProto(message: _132.ClientState): Uint8Array;
                    toProtoMsg(message: _132.ClientState): _132.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _132.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _132.ConsensusState;
                    fromPartial(object: Partial<_132.ConsensusState>): _132.ConsensusState;
                    fromAmino(object: _132.ConsensusStateAmino): _132.ConsensusState;
                    toAmino(message: _132.ConsensusState): _132.ConsensusStateAmino;
                    fromAminoMsg(object: _132.ConsensusStateAminoMsg): _132.ConsensusState;
                    toAminoMsg(message: _132.ConsensusState): _132.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _132.ConsensusStateProtoMsg): _132.ConsensusState;
                    toProto(message: _132.ConsensusState): Uint8Array;
                    toProtoMsg(message: _132.ConsensusState): _132.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _132.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _132.Misbehaviour;
                    fromPartial(object: Partial<_132.Misbehaviour>): _132.Misbehaviour;
                    fromAmino(object: _132.MisbehaviourAmino): _132.Misbehaviour;
                    toAmino(message: _132.Misbehaviour): _132.MisbehaviourAmino;
                    fromAminoMsg(object: _132.MisbehaviourAminoMsg): _132.Misbehaviour;
                    toAminoMsg(message: _132.Misbehaviour): _132.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _132.MisbehaviourProtoMsg): _132.Misbehaviour;
                    toProto(message: _132.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _132.Misbehaviour): _132.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _132.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _132.Header;
                    fromPartial(object: Partial<_132.Header>): _132.Header;
                    fromAmino(object: _132.HeaderAmino): _132.Header;
                    toAmino(message: _132.Header): _132.HeaderAmino;
                    fromAminoMsg(object: _132.HeaderAminoMsg): _132.Header;
                    toAminoMsg(message: _132.Header): _132.HeaderAminoMsg;
                    fromProtoMsg(message: _132.HeaderProtoMsg): _132.Header;
                    toProto(message: _132.Header): Uint8Array;
                    toProtoMsg(message: _132.Header): _132.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    encode(message: _132.Fraction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _132.Fraction;
                    fromPartial(object: Partial<_132.Fraction>): _132.Fraction;
                    fromAmino(object: _132.FractionAmino): _132.Fraction;
                    toAmino(message: _132.Fraction): _132.FractionAmino;
                    fromAminoMsg(object: _132.FractionAminoMsg): _132.Fraction;
                    toAminoMsg(message: _132.Fraction): _132.FractionAminoMsg;
                    fromProtoMsg(message: _132.FractionProtoMsg): _132.Fraction;
                    toProto(message: _132.Fraction): Uint8Array;
                    toProtoMsg(message: _132.Fraction): _132.FractionProtoMsg;
                };
            };
        }
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            ibc: {
                applications: {
                    fee: {
                        v1: _260.MsgClientImpl;
                    };
                    transfer: {
                        v1: _261.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _262.MsgClientImpl;
                    };
                    client: {
                        v1: _263.MsgClientImpl;
                    };
                    connection: {
                        v1: _264.MsgClientImpl;
                    };
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: any;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                        foundationTax(request?: import("../cosmos/distribution/v1beta1/query").QueryFoundationTaxRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryFoundationTaxResponse>;
                        restakeThreshold(request?: import("../cosmos/distribution/v1beta1/query").QueryRestakeThresholdRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryRestakeThresholdResponse>;
                        restakingEntries(request: import("../cosmos/distribution/v1beta1/query").QueryRestakeEntriesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryRestakingEntriesResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                    };
                };
            };
            ibc: {
                applications: {
                    fee: {
                        v1: {
                            incentivizedPackets(request: _100.QueryIncentivizedPacketsRequest): Promise<_100.QueryIncentivizedPacketsResponse>;
                            incentivizedPacket(request: _100.QueryIncentivizedPacketRequest): Promise<_100.QueryIncentivizedPacketResponse>;
                            incentivizedPacketsForChannel(request: _100.QueryIncentivizedPacketsForChannelRequest): Promise<_100.QueryIncentivizedPacketsForChannelResponse>;
                            totalRecvFees(request: _100.QueryTotalRecvFeesRequest): Promise<_100.QueryTotalRecvFeesResponse>;
                            totalAckFees(request: _100.QueryTotalAckFeesRequest): Promise<_100.QueryTotalAckFeesResponse>;
                            totalTimeoutFees(request: _100.QueryTotalTimeoutFeesRequest): Promise<_100.QueryTotalTimeoutFeesResponse>;
                            payee(request: _100.QueryPayeeRequest): Promise<_100.QueryPayeeResponse>;
                            counterpartyPayee(request: _100.QueryCounterpartyPayeeRequest): Promise<_100.QueryCounterpartyPayeeResponse>;
                            feeEnabledChannels(request: _100.QueryFeeEnabledChannelsRequest): Promise<_100.QueryFeeEnabledChannelsResponse>;
                            feeEnabledChannel(request: _100.QueryFeeEnabledChannelRequest): Promise<_100.QueryFeeEnabledChannelResponse>;
                        };
                    };
                    interchain_accounts: {
                        controller: {
                            v1: {
                                interchainAccount(request: _103.QueryInterchainAccountRequest): Promise<_103.QueryInterchainAccountResponse>;
                                params(request?: _103.QueryParamsRequest): Promise<_103.QueryParamsResponse>;
                            };
                        };
                        host: {
                            v1: {
                                params(request?: _105.QueryParamsRequest): Promise<_105.QueryParamsResponse>;
                            };
                        };
                    };
                    transfer: {
                        v1: {
                            denomTrace(request: _111.QueryDenomTraceRequest): Promise<_111.QueryDenomTraceResponse>;
                            denomTraces(request?: _111.QueryDenomTracesRequest): Promise<_111.QueryDenomTracesResponse>;
                            params(request?: _111.QueryParamsRequest): Promise<_111.QueryParamsResponse>;
                            denomHash(request: _111.QueryDenomHashRequest): Promise<_111.QueryDenomHashResponse>;
                            escrowAddress(request: _111.QueryEscrowAddressRequest): Promise<_111.QueryEscrowAddressResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _117.QueryChannelRequest): Promise<_117.QueryChannelResponse>;
                            channels(request?: _117.QueryChannelsRequest): Promise<_117.QueryChannelsResponse>;
                            connectionChannels(request: _117.QueryConnectionChannelsRequest): Promise<_117.QueryConnectionChannelsResponse>;
                            channelClientState(request: _117.QueryChannelClientStateRequest): Promise<_117.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _117.QueryChannelConsensusStateRequest): Promise<_117.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _117.QueryPacketCommitmentRequest): Promise<_117.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _117.QueryPacketCommitmentsRequest): Promise<_117.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _117.QueryPacketReceiptRequest): Promise<_117.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _117.QueryPacketAcknowledgementRequest): Promise<_117.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _117.QueryPacketAcknowledgementsRequest): Promise<_117.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _117.QueryUnreceivedPacketsRequest): Promise<_117.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _117.QueryUnreceivedAcksRequest): Promise<_117.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _117.QueryNextSequenceReceiveRequest): Promise<_117.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _121.QueryClientStateRequest): Promise<_121.QueryClientStateResponse>;
                            clientStates(request?: _121.QueryClientStatesRequest): Promise<_121.QueryClientStatesResponse>;
                            consensusState(request: _121.QueryConsensusStateRequest): Promise<_121.QueryConsensusStateResponse>;
                            consensusStates(request: _121.QueryConsensusStatesRequest): Promise<_121.QueryConsensusStatesResponse>;
                            consensusStateHeights(request: _121.QueryConsensusStateHeightsRequest): Promise<_121.QueryConsensusStateHeightsResponse>;
                            clientStatus(request: _121.QueryClientStatusRequest): Promise<_121.QueryClientStatusResponse>;
                            clientParams(request?: _121.QueryClientParamsRequest): Promise<_121.QueryClientParamsResponse>;
                            upgradedClientState(request?: _121.QueryUpgradedClientStateRequest): Promise<_121.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _121.QueryUpgradedConsensusStateRequest): Promise<_121.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _126.QueryConnectionRequest): Promise<_126.QueryConnectionResponse>;
                            connections(request?: _126.QueryConnectionsRequest): Promise<_126.QueryConnectionsResponse>;
                            clientConnections(request: _126.QueryClientConnectionsRequest): Promise<_126.QueryClientConnectionsResponse>;
                            connectionClientState(request: _126.QueryConnectionClientStateRequest): Promise<_126.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _126.QueryConnectionConsensusStateRequest): Promise<_126.QueryConnectionConsensusStateResponse>;
                        };
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: import("../cosmos/base/node/v1beta1/query.lcd").LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.lcd").LCDQueryClient;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            ibc: {
                applications: {
                    fee: {
                        v1: _246.LCDQueryClient;
                    };
                    interchain_accounts: {
                        controller: {
                            v1: _247.LCDQueryClient;
                        };
                        host: {
                            v1: _248.LCDQueryClient;
                        };
                    };
                    transfer: {
                        v1: _249.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _250.LCDQueryClient;
                    };
                    client: {
                        v1: _251.LCDQueryClient;
                    };
                    connection: {
                        v1: _252.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
