import * as _100 from "./applications/fee/v1/ack";
import * as _101 from "./applications/fee/v1/fee";
import * as _102 from "./applications/fee/v1/genesis";
import * as _103 from "./applications/fee/v1/metadata";
import * as _104 from "./applications/fee/v1/query";
import * as _105 from "./applications/fee/v1/tx";
import * as _106 from "./applications/interchain_accounts/controller/v1/controller";
import * as _107 from "./applications/interchain_accounts/controller/v1/query";
import * as _108 from "./applications/interchain_accounts/host/v1/host";
import * as _109 from "./applications/interchain_accounts/host/v1/query";
import * as _110 from "./applications/interchain_accounts/v1/account";
import * as _111 from "./applications/interchain_accounts/v1/genesis";
import * as _112 from "./applications/interchain_accounts/v1/metadata";
import * as _113 from "./applications/interchain_accounts/v1/packet";
import * as _114 from "./applications/transfer/v1/genesis";
import * as _115 from "./applications/transfer/v1/query";
import * as _116 from "./applications/transfer/v1/transfer";
import * as _117 from "./applications/transfer/v1/tx";
import * as _118 from "./applications/transfer/v2/packet";
import * as _119 from "./core/channel/v1/channel";
import * as _120 from "./core/channel/v1/genesis";
import * as _121 from "./core/channel/v1/query";
import * as _122 from "./core/channel/v1/tx";
import * as _123 from "./core/client/v1/client";
import * as _124 from "./core/client/v1/genesis";
import * as _125 from "./core/client/v1/query";
import * as _126 from "./core/client/v1/tx";
import * as _127 from "./core/commitment/v1/commitment";
import * as _128 from "./core/connection/v1/connection";
import * as _129 from "./core/connection/v1/genesis";
import * as _130 from "./core/connection/v1/query";
import * as _131 from "./core/connection/v1/tx";
import * as _132 from "./core/types/v1/genesis";
import * as _133 from "./lightclients/localhost/v1/localhost";
import * as _134 from "./lightclients/solomachine/v1/solomachine";
import * as _135 from "./lightclients/solomachine/v2/solomachine";
import * as _136 from "./lightclients/tendermint/v1/tendermint";
import * as _267 from "./applications/fee/v1/query.lcd";
import * as _268 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _269 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _270 from "./applications/transfer/v1/query.lcd";
import * as _271 from "./core/channel/v1/query.lcd";
import * as _272 from "./core/client/v1/query.lcd";
import * as _273 from "./core/connection/v1/query.lcd";
import * as _274 from "./applications/fee/v1/query.rpc.Query";
import * as _275 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _276 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _277 from "./applications/transfer/v1/query.rpc.Query";
import * as _278 from "./core/channel/v1/query.rpc.Query";
import * as _279 from "./core/client/v1/query.rpc.Query";
import * as _280 from "./core/connection/v1/query.rpc.Query";
import * as _281 from "./applications/fee/v1/tx.rpc.msg";
import * as _282 from "./applications/transfer/v1/tx.rpc.msg";
import * as _283 from "./core/channel/v1/tx.rpc.msg";
import * as _284 from "./core/client/v1/tx.rpc.msg";
import * as _285 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace fee {
            const v1: {
                MsgClientImpl: typeof _281.MsgClientImpl;
                QueryClientImpl: typeof _274.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    incentivizedPackets(request: _104.QueryIncentivizedPacketsRequest): Promise<_104.QueryIncentivizedPacketsResponse>;
                    incentivizedPacket(request: _104.QueryIncentivizedPacketRequest): Promise<_104.QueryIncentivizedPacketResponse>;
                    incentivizedPacketsForChannel(request: _104.QueryIncentivizedPacketsForChannelRequest): Promise<_104.QueryIncentivizedPacketsForChannelResponse>;
                    totalRecvFees(request: _104.QueryTotalRecvFeesRequest): Promise<_104.QueryTotalRecvFeesResponse>;
                    totalAckFees(request: _104.QueryTotalAckFeesRequest): Promise<_104.QueryTotalAckFeesResponse>;
                    totalTimeoutFees(request: _104.QueryTotalTimeoutFeesRequest): Promise<_104.QueryTotalTimeoutFeesResponse>;
                    payee(request: _104.QueryPayeeRequest): Promise<_104.QueryPayeeResponse>;
                    counterpartyPayee(request: _104.QueryCounterpartyPayeeRequest): Promise<_104.QueryCounterpartyPayeeResponse>;
                    feeEnabledChannels(request: _104.QueryFeeEnabledChannelsRequest): Promise<_104.QueryFeeEnabledChannelsResponse>;
                    feeEnabledChannel(request: _104.QueryFeeEnabledChannelRequest): Promise<_104.QueryFeeEnabledChannelResponse>;
                };
                LCDQueryClient: typeof _267.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        registerPayee(value: _105.MsgRegisterPayee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        registerCounterpartyPayee(value: _105.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        payPacketFee(value: _105.MsgPayPacketFee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        payPacketFeeAsync(value: _105.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        registerPayee(value: _105.MsgRegisterPayee): {
                            typeUrl: string;
                            value: _105.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: _105.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: _105.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: _105.MsgPayPacketFee): {
                            typeUrl: string;
                            value: _105.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: _105.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: _105.MsgPayPacketFeeAsync;
                        };
                    };
                    fromJSON: {
                        registerPayee(value: any): {
                            typeUrl: string;
                            value: _105.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: any): {
                            typeUrl: string;
                            value: _105.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: any): {
                            typeUrl: string;
                            value: _105.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: any): {
                            typeUrl: string;
                            value: _105.MsgPayPacketFeeAsync;
                        };
                    };
                    fromPartial: {
                        registerPayee(value: _105.MsgRegisterPayee): {
                            typeUrl: string;
                            value: _105.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: _105.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: _105.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: _105.MsgPayPacketFee): {
                            typeUrl: string;
                            value: _105.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: _105.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: _105.MsgPayPacketFeeAsync;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.fee.v1.MsgRegisterPayee": {
                        aminoType: string;
                        toAmino: (message: _105.MsgRegisterPayee) => _105.MsgRegisterPayeeAmino;
                        fromAmino: (object: _105.MsgRegisterPayeeAmino) => _105.MsgRegisterPayee;
                    };
                    "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee": {
                        aminoType: string;
                        toAmino: (message: _105.MsgRegisterCounterpartyPayee) => _105.MsgRegisterCounterpartyPayeeAmino;
                        fromAmino: (object: _105.MsgRegisterCounterpartyPayeeAmino) => _105.MsgRegisterCounterpartyPayee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFee": {
                        aminoType: string;
                        toAmino: (message: _105.MsgPayPacketFee) => _105.MsgPayPacketFeeAmino;
                        fromAmino: (object: _105.MsgPayPacketFeeAmino) => _105.MsgPayPacketFee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFeeAsync": {
                        aminoType: string;
                        toAmino: (message: _105.MsgPayPacketFeeAsync) => _105.MsgPayPacketFeeAsyncAmino;
                        fromAmino: (object: _105.MsgPayPacketFeeAsyncAmino) => _105.MsgPayPacketFeeAsync;
                    };
                };
                MsgRegisterPayee: {
                    typeUrl: string;
                    encode(message: _105.MsgRegisterPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.MsgRegisterPayee;
                    fromPartial(object: Partial<_105.MsgRegisterPayee>): _105.MsgRegisterPayee;
                    fromAmino(object: _105.MsgRegisterPayeeAmino): _105.MsgRegisterPayee;
                    toAmino(message: _105.MsgRegisterPayee): _105.MsgRegisterPayeeAmino;
                    fromAminoMsg(object: _105.MsgRegisterPayeeAminoMsg): _105.MsgRegisterPayee;
                    toAminoMsg(message: _105.MsgRegisterPayee): _105.MsgRegisterPayeeAminoMsg;
                    fromProtoMsg(message: _105.MsgRegisterPayeeProtoMsg): _105.MsgRegisterPayee;
                    toProto(message: _105.MsgRegisterPayee): Uint8Array;
                    toProtoMsg(message: _105.MsgRegisterPayee): _105.MsgRegisterPayeeProtoMsg;
                };
                MsgRegisterPayeeResponse: {
                    typeUrl: string;
                    encode(_: _105.MsgRegisterPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _105.MsgRegisterPayeeResponse;
                    fromPartial(_: Partial<_105.MsgRegisterPayeeResponse>): _105.MsgRegisterPayeeResponse;
                    fromAmino(_: _105.MsgRegisterPayeeResponseAmino): _105.MsgRegisterPayeeResponse;
                    toAmino(_: _105.MsgRegisterPayeeResponse): _105.MsgRegisterPayeeResponseAmino;
                    fromAminoMsg(object: _105.MsgRegisterPayeeResponseAminoMsg): _105.MsgRegisterPayeeResponse;
                    toAminoMsg(message: _105.MsgRegisterPayeeResponse): _105.MsgRegisterPayeeResponseAminoMsg;
                    fromProtoMsg(message: _105.MsgRegisterPayeeResponseProtoMsg): _105.MsgRegisterPayeeResponse;
                    toProto(message: _105.MsgRegisterPayeeResponse): Uint8Array;
                    toProtoMsg(message: _105.MsgRegisterPayeeResponse): _105.MsgRegisterPayeeResponseProtoMsg;
                };
                MsgRegisterCounterpartyPayee: {
                    typeUrl: string;
                    encode(message: _105.MsgRegisterCounterpartyPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.MsgRegisterCounterpartyPayee;
                    fromPartial(object: Partial<_105.MsgRegisterCounterpartyPayee>): _105.MsgRegisterCounterpartyPayee;
                    fromAmino(object: _105.MsgRegisterCounterpartyPayeeAmino): _105.MsgRegisterCounterpartyPayee;
                    toAmino(message: _105.MsgRegisterCounterpartyPayee): _105.MsgRegisterCounterpartyPayeeAmino;
                    fromAminoMsg(object: _105.MsgRegisterCounterpartyPayeeAminoMsg): _105.MsgRegisterCounterpartyPayee;
                    toAminoMsg(message: _105.MsgRegisterCounterpartyPayee): _105.MsgRegisterCounterpartyPayeeAminoMsg;
                    fromProtoMsg(message: _105.MsgRegisterCounterpartyPayeeProtoMsg): _105.MsgRegisterCounterpartyPayee;
                    toProto(message: _105.MsgRegisterCounterpartyPayee): Uint8Array;
                    toProtoMsg(message: _105.MsgRegisterCounterpartyPayee): _105.MsgRegisterCounterpartyPayeeProtoMsg;
                };
                MsgRegisterCounterpartyPayeeResponse: {
                    typeUrl: string;
                    encode(_: _105.MsgRegisterCounterpartyPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _105.MsgRegisterCounterpartyPayeeResponse;
                    fromPartial(_: Partial<_105.MsgRegisterCounterpartyPayeeResponse>): _105.MsgRegisterCounterpartyPayeeResponse;
                    fromAmino(_: _105.MsgRegisterCounterpartyPayeeResponseAmino): _105.MsgRegisterCounterpartyPayeeResponse;
                    toAmino(_: _105.MsgRegisterCounterpartyPayeeResponse): _105.MsgRegisterCounterpartyPayeeResponseAmino;
                    fromAminoMsg(object: _105.MsgRegisterCounterpartyPayeeResponseAminoMsg): _105.MsgRegisterCounterpartyPayeeResponse;
                    toAminoMsg(message: _105.MsgRegisterCounterpartyPayeeResponse): _105.MsgRegisterCounterpartyPayeeResponseAminoMsg;
                    fromProtoMsg(message: _105.MsgRegisterCounterpartyPayeeResponseProtoMsg): _105.MsgRegisterCounterpartyPayeeResponse;
                    toProto(message: _105.MsgRegisterCounterpartyPayeeResponse): Uint8Array;
                    toProtoMsg(message: _105.MsgRegisterCounterpartyPayeeResponse): _105.MsgRegisterCounterpartyPayeeResponseProtoMsg;
                };
                MsgPayPacketFee: {
                    typeUrl: string;
                    encode(message: _105.MsgPayPacketFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.MsgPayPacketFee;
                    fromPartial(object: Partial<_105.MsgPayPacketFee>): _105.MsgPayPacketFee;
                    fromAmino(object: _105.MsgPayPacketFeeAmino): _105.MsgPayPacketFee;
                    toAmino(message: _105.MsgPayPacketFee): _105.MsgPayPacketFeeAmino;
                    fromAminoMsg(object: _105.MsgPayPacketFeeAminoMsg): _105.MsgPayPacketFee;
                    toAminoMsg(message: _105.MsgPayPacketFee): _105.MsgPayPacketFeeAminoMsg;
                    fromProtoMsg(message: _105.MsgPayPacketFeeProtoMsg): _105.MsgPayPacketFee;
                    toProto(message: _105.MsgPayPacketFee): Uint8Array;
                    toProtoMsg(message: _105.MsgPayPacketFee): _105.MsgPayPacketFeeProtoMsg;
                };
                MsgPayPacketFeeResponse: {
                    typeUrl: string;
                    encode(_: _105.MsgPayPacketFeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _105.MsgPayPacketFeeResponse;
                    fromPartial(_: Partial<_105.MsgPayPacketFeeResponse>): _105.MsgPayPacketFeeResponse;
                    fromAmino(_: _105.MsgPayPacketFeeResponseAmino): _105.MsgPayPacketFeeResponse;
                    toAmino(_: _105.MsgPayPacketFeeResponse): _105.MsgPayPacketFeeResponseAmino;
                    fromAminoMsg(object: _105.MsgPayPacketFeeResponseAminoMsg): _105.MsgPayPacketFeeResponse;
                    toAminoMsg(message: _105.MsgPayPacketFeeResponse): _105.MsgPayPacketFeeResponseAminoMsg;
                    fromProtoMsg(message: _105.MsgPayPacketFeeResponseProtoMsg): _105.MsgPayPacketFeeResponse;
                    toProto(message: _105.MsgPayPacketFeeResponse): Uint8Array;
                    toProtoMsg(message: _105.MsgPayPacketFeeResponse): _105.MsgPayPacketFeeResponseProtoMsg;
                };
                MsgPayPacketFeeAsync: {
                    typeUrl: string;
                    encode(message: _105.MsgPayPacketFeeAsync, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.MsgPayPacketFeeAsync;
                    fromPartial(object: Partial<_105.MsgPayPacketFeeAsync>): _105.MsgPayPacketFeeAsync;
                    fromAmino(object: _105.MsgPayPacketFeeAsyncAmino): _105.MsgPayPacketFeeAsync;
                    toAmino(message: _105.MsgPayPacketFeeAsync): _105.MsgPayPacketFeeAsyncAmino;
                    fromAminoMsg(object: _105.MsgPayPacketFeeAsyncAminoMsg): _105.MsgPayPacketFeeAsync;
                    toAminoMsg(message: _105.MsgPayPacketFeeAsync): _105.MsgPayPacketFeeAsyncAminoMsg;
                    fromProtoMsg(message: _105.MsgPayPacketFeeAsyncProtoMsg): _105.MsgPayPacketFeeAsync;
                    toProto(message: _105.MsgPayPacketFeeAsync): Uint8Array;
                    toProtoMsg(message: _105.MsgPayPacketFeeAsync): _105.MsgPayPacketFeeAsyncProtoMsg;
                };
                MsgPayPacketFeeAsyncResponse: {
                    typeUrl: string;
                    encode(_: _105.MsgPayPacketFeeAsyncResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _105.MsgPayPacketFeeAsyncResponse;
                    fromPartial(_: Partial<_105.MsgPayPacketFeeAsyncResponse>): _105.MsgPayPacketFeeAsyncResponse;
                    fromAmino(_: _105.MsgPayPacketFeeAsyncResponseAmino): _105.MsgPayPacketFeeAsyncResponse;
                    toAmino(_: _105.MsgPayPacketFeeAsyncResponse): _105.MsgPayPacketFeeAsyncResponseAmino;
                    fromAminoMsg(object: _105.MsgPayPacketFeeAsyncResponseAminoMsg): _105.MsgPayPacketFeeAsyncResponse;
                    toAminoMsg(message: _105.MsgPayPacketFeeAsyncResponse): _105.MsgPayPacketFeeAsyncResponseAminoMsg;
                    fromProtoMsg(message: _105.MsgPayPacketFeeAsyncResponseProtoMsg): _105.MsgPayPacketFeeAsyncResponse;
                    toProto(message: _105.MsgPayPacketFeeAsyncResponse): Uint8Array;
                    toProtoMsg(message: _105.MsgPayPacketFeeAsyncResponse): _105.MsgPayPacketFeeAsyncResponseProtoMsg;
                };
                QueryIncentivizedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _104.QueryIncentivizedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryIncentivizedPacketsRequest;
                    fromPartial(object: Partial<_104.QueryIncentivizedPacketsRequest>): _104.QueryIncentivizedPacketsRequest;
                    fromAmino(object: _104.QueryIncentivizedPacketsRequestAmino): _104.QueryIncentivizedPacketsRequest;
                    toAmino(message: _104.QueryIncentivizedPacketsRequest): _104.QueryIncentivizedPacketsRequestAmino;
                    fromAminoMsg(object: _104.QueryIncentivizedPacketsRequestAminoMsg): _104.QueryIncentivizedPacketsRequest;
                    toAminoMsg(message: _104.QueryIncentivizedPacketsRequest): _104.QueryIncentivizedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _104.QueryIncentivizedPacketsRequestProtoMsg): _104.QueryIncentivizedPacketsRequest;
                    toProto(message: _104.QueryIncentivizedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _104.QueryIncentivizedPacketsRequest): _104.QueryIncentivizedPacketsRequestProtoMsg;
                };
                QueryIncentivizedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _104.QueryIncentivizedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryIncentivizedPacketsResponse;
                    fromPartial(object: Partial<_104.QueryIncentivizedPacketsResponse>): _104.QueryIncentivizedPacketsResponse;
                    fromAmino(object: _104.QueryIncentivizedPacketsResponseAmino): _104.QueryIncentivizedPacketsResponse;
                    toAmino(message: _104.QueryIncentivizedPacketsResponse): _104.QueryIncentivizedPacketsResponseAmino;
                    fromAminoMsg(object: _104.QueryIncentivizedPacketsResponseAminoMsg): _104.QueryIncentivizedPacketsResponse;
                    toAminoMsg(message: _104.QueryIncentivizedPacketsResponse): _104.QueryIncentivizedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _104.QueryIncentivizedPacketsResponseProtoMsg): _104.QueryIncentivizedPacketsResponse;
                    toProto(message: _104.QueryIncentivizedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _104.QueryIncentivizedPacketsResponse): _104.QueryIncentivizedPacketsResponseProtoMsg;
                };
                QueryIncentivizedPacketRequest: {
                    typeUrl: string;
                    encode(message: _104.QueryIncentivizedPacketRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryIncentivizedPacketRequest;
                    fromPartial(object: Partial<_104.QueryIncentivizedPacketRequest>): _104.QueryIncentivizedPacketRequest;
                    fromAmino(object: _104.QueryIncentivizedPacketRequestAmino): _104.QueryIncentivizedPacketRequest;
                    toAmino(message: _104.QueryIncentivizedPacketRequest): _104.QueryIncentivizedPacketRequestAmino;
                    fromAminoMsg(object: _104.QueryIncentivizedPacketRequestAminoMsg): _104.QueryIncentivizedPacketRequest;
                    toAminoMsg(message: _104.QueryIncentivizedPacketRequest): _104.QueryIncentivizedPacketRequestAminoMsg;
                    fromProtoMsg(message: _104.QueryIncentivizedPacketRequestProtoMsg): _104.QueryIncentivizedPacketRequest;
                    toProto(message: _104.QueryIncentivizedPacketRequest): Uint8Array;
                    toProtoMsg(message: _104.QueryIncentivizedPacketRequest): _104.QueryIncentivizedPacketRequestProtoMsg;
                };
                QueryIncentivizedPacketResponse: {
                    typeUrl: string;
                    encode(message: _104.QueryIncentivizedPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryIncentivizedPacketResponse;
                    fromPartial(object: Partial<_104.QueryIncentivizedPacketResponse>): _104.QueryIncentivizedPacketResponse;
                    fromAmino(object: _104.QueryIncentivizedPacketResponseAmino): _104.QueryIncentivizedPacketResponse;
                    toAmino(message: _104.QueryIncentivizedPacketResponse): _104.QueryIncentivizedPacketResponseAmino;
                    fromAminoMsg(object: _104.QueryIncentivizedPacketResponseAminoMsg): _104.QueryIncentivizedPacketResponse;
                    toAminoMsg(message: _104.QueryIncentivizedPacketResponse): _104.QueryIncentivizedPacketResponseAminoMsg;
                    fromProtoMsg(message: _104.QueryIncentivizedPacketResponseProtoMsg): _104.QueryIncentivizedPacketResponse;
                    toProto(message: _104.QueryIncentivizedPacketResponse): Uint8Array;
                    toProtoMsg(message: _104.QueryIncentivizedPacketResponse): _104.QueryIncentivizedPacketResponseProtoMsg;
                };
                QueryIncentivizedPacketsForChannelRequest: {
                    typeUrl: string;
                    encode(message: _104.QueryIncentivizedPacketsForChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryIncentivizedPacketsForChannelRequest;
                    fromPartial(object: Partial<_104.QueryIncentivizedPacketsForChannelRequest>): _104.QueryIncentivizedPacketsForChannelRequest;
                    fromAmino(object: _104.QueryIncentivizedPacketsForChannelRequestAmino): _104.QueryIncentivizedPacketsForChannelRequest;
                    toAmino(message: _104.QueryIncentivizedPacketsForChannelRequest): _104.QueryIncentivizedPacketsForChannelRequestAmino;
                    fromAminoMsg(object: _104.QueryIncentivizedPacketsForChannelRequestAminoMsg): _104.QueryIncentivizedPacketsForChannelRequest;
                    toAminoMsg(message: _104.QueryIncentivizedPacketsForChannelRequest): _104.QueryIncentivizedPacketsForChannelRequestAminoMsg;
                    fromProtoMsg(message: _104.QueryIncentivizedPacketsForChannelRequestProtoMsg): _104.QueryIncentivizedPacketsForChannelRequest;
                    toProto(message: _104.QueryIncentivizedPacketsForChannelRequest): Uint8Array;
                    toProtoMsg(message: _104.QueryIncentivizedPacketsForChannelRequest): _104.QueryIncentivizedPacketsForChannelRequestProtoMsg;
                };
                QueryIncentivizedPacketsForChannelResponse: {
                    typeUrl: string;
                    encode(message: _104.QueryIncentivizedPacketsForChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryIncentivizedPacketsForChannelResponse;
                    fromPartial(object: Partial<_104.QueryIncentivizedPacketsForChannelResponse>): _104.QueryIncentivizedPacketsForChannelResponse;
                    fromAmino(object: _104.QueryIncentivizedPacketsForChannelResponseAmino): _104.QueryIncentivizedPacketsForChannelResponse;
                    toAmino(message: _104.QueryIncentivizedPacketsForChannelResponse): _104.QueryIncentivizedPacketsForChannelResponseAmino;
                    fromAminoMsg(object: _104.QueryIncentivizedPacketsForChannelResponseAminoMsg): _104.QueryIncentivizedPacketsForChannelResponse;
                    toAminoMsg(message: _104.QueryIncentivizedPacketsForChannelResponse): _104.QueryIncentivizedPacketsForChannelResponseAminoMsg;
                    fromProtoMsg(message: _104.QueryIncentivizedPacketsForChannelResponseProtoMsg): _104.QueryIncentivizedPacketsForChannelResponse;
                    toProto(message: _104.QueryIncentivizedPacketsForChannelResponse): Uint8Array;
                    toProtoMsg(message: _104.QueryIncentivizedPacketsForChannelResponse): _104.QueryIncentivizedPacketsForChannelResponseProtoMsg;
                };
                QueryTotalRecvFeesRequest: {
                    typeUrl: string;
                    encode(message: _104.QueryTotalRecvFeesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryTotalRecvFeesRequest;
                    fromPartial(object: Partial<_104.QueryTotalRecvFeesRequest>): _104.QueryTotalRecvFeesRequest;
                    fromAmino(object: _104.QueryTotalRecvFeesRequestAmino): _104.QueryTotalRecvFeesRequest;
                    toAmino(message: _104.QueryTotalRecvFeesRequest): _104.QueryTotalRecvFeesRequestAmino;
                    fromAminoMsg(object: _104.QueryTotalRecvFeesRequestAminoMsg): _104.QueryTotalRecvFeesRequest;
                    toAminoMsg(message: _104.QueryTotalRecvFeesRequest): _104.QueryTotalRecvFeesRequestAminoMsg;
                    fromProtoMsg(message: _104.QueryTotalRecvFeesRequestProtoMsg): _104.QueryTotalRecvFeesRequest;
                    toProto(message: _104.QueryTotalRecvFeesRequest): Uint8Array;
                    toProtoMsg(message: _104.QueryTotalRecvFeesRequest): _104.QueryTotalRecvFeesRequestProtoMsg;
                };
                QueryTotalRecvFeesResponse: {
                    typeUrl: string;
                    encode(message: _104.QueryTotalRecvFeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryTotalRecvFeesResponse;
                    fromPartial(object: Partial<_104.QueryTotalRecvFeesResponse>): _104.QueryTotalRecvFeesResponse;
                    fromAmino(object: _104.QueryTotalRecvFeesResponseAmino): _104.QueryTotalRecvFeesResponse;
                    toAmino(message: _104.QueryTotalRecvFeesResponse): _104.QueryTotalRecvFeesResponseAmino;
                    fromAminoMsg(object: _104.QueryTotalRecvFeesResponseAminoMsg): _104.QueryTotalRecvFeesResponse;
                    toAminoMsg(message: _104.QueryTotalRecvFeesResponse): _104.QueryTotalRecvFeesResponseAminoMsg;
                    fromProtoMsg(message: _104.QueryTotalRecvFeesResponseProtoMsg): _104.QueryTotalRecvFeesResponse;
                    toProto(message: _104.QueryTotalRecvFeesResponse): Uint8Array;
                    toProtoMsg(message: _104.QueryTotalRecvFeesResponse): _104.QueryTotalRecvFeesResponseProtoMsg;
                };
                QueryTotalAckFeesRequest: {
                    typeUrl: string;
                    encode(message: _104.QueryTotalAckFeesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryTotalAckFeesRequest;
                    fromPartial(object: Partial<_104.QueryTotalAckFeesRequest>): _104.QueryTotalAckFeesRequest;
                    fromAmino(object: _104.QueryTotalAckFeesRequestAmino): _104.QueryTotalAckFeesRequest;
                    toAmino(message: _104.QueryTotalAckFeesRequest): _104.QueryTotalAckFeesRequestAmino;
                    fromAminoMsg(object: _104.QueryTotalAckFeesRequestAminoMsg): _104.QueryTotalAckFeesRequest;
                    toAminoMsg(message: _104.QueryTotalAckFeesRequest): _104.QueryTotalAckFeesRequestAminoMsg;
                    fromProtoMsg(message: _104.QueryTotalAckFeesRequestProtoMsg): _104.QueryTotalAckFeesRequest;
                    toProto(message: _104.QueryTotalAckFeesRequest): Uint8Array;
                    toProtoMsg(message: _104.QueryTotalAckFeesRequest): _104.QueryTotalAckFeesRequestProtoMsg;
                };
                QueryTotalAckFeesResponse: {
                    typeUrl: string;
                    encode(message: _104.QueryTotalAckFeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryTotalAckFeesResponse;
                    fromPartial(object: Partial<_104.QueryTotalAckFeesResponse>): _104.QueryTotalAckFeesResponse;
                    fromAmino(object: _104.QueryTotalAckFeesResponseAmino): _104.QueryTotalAckFeesResponse;
                    toAmino(message: _104.QueryTotalAckFeesResponse): _104.QueryTotalAckFeesResponseAmino;
                    fromAminoMsg(object: _104.QueryTotalAckFeesResponseAminoMsg): _104.QueryTotalAckFeesResponse;
                    toAminoMsg(message: _104.QueryTotalAckFeesResponse): _104.QueryTotalAckFeesResponseAminoMsg;
                    fromProtoMsg(message: _104.QueryTotalAckFeesResponseProtoMsg): _104.QueryTotalAckFeesResponse;
                    toProto(message: _104.QueryTotalAckFeesResponse): Uint8Array;
                    toProtoMsg(message: _104.QueryTotalAckFeesResponse): _104.QueryTotalAckFeesResponseProtoMsg;
                };
                QueryTotalTimeoutFeesRequest: {
                    typeUrl: string;
                    encode(message: _104.QueryTotalTimeoutFeesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryTotalTimeoutFeesRequest;
                    fromPartial(object: Partial<_104.QueryTotalTimeoutFeesRequest>): _104.QueryTotalTimeoutFeesRequest;
                    fromAmino(object: _104.QueryTotalTimeoutFeesRequestAmino): _104.QueryTotalTimeoutFeesRequest;
                    toAmino(message: _104.QueryTotalTimeoutFeesRequest): _104.QueryTotalTimeoutFeesRequestAmino;
                    fromAminoMsg(object: _104.QueryTotalTimeoutFeesRequestAminoMsg): _104.QueryTotalTimeoutFeesRequest;
                    toAminoMsg(message: _104.QueryTotalTimeoutFeesRequest): _104.QueryTotalTimeoutFeesRequestAminoMsg;
                    fromProtoMsg(message: _104.QueryTotalTimeoutFeesRequestProtoMsg): _104.QueryTotalTimeoutFeesRequest;
                    toProto(message: _104.QueryTotalTimeoutFeesRequest): Uint8Array;
                    toProtoMsg(message: _104.QueryTotalTimeoutFeesRequest): _104.QueryTotalTimeoutFeesRequestProtoMsg;
                };
                QueryTotalTimeoutFeesResponse: {
                    typeUrl: string;
                    encode(message: _104.QueryTotalTimeoutFeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryTotalTimeoutFeesResponse;
                    fromPartial(object: Partial<_104.QueryTotalTimeoutFeesResponse>): _104.QueryTotalTimeoutFeesResponse;
                    fromAmino(object: _104.QueryTotalTimeoutFeesResponseAmino): _104.QueryTotalTimeoutFeesResponse;
                    toAmino(message: _104.QueryTotalTimeoutFeesResponse): _104.QueryTotalTimeoutFeesResponseAmino;
                    fromAminoMsg(object: _104.QueryTotalTimeoutFeesResponseAminoMsg): _104.QueryTotalTimeoutFeesResponse;
                    toAminoMsg(message: _104.QueryTotalTimeoutFeesResponse): _104.QueryTotalTimeoutFeesResponseAminoMsg;
                    fromProtoMsg(message: _104.QueryTotalTimeoutFeesResponseProtoMsg): _104.QueryTotalTimeoutFeesResponse;
                    toProto(message: _104.QueryTotalTimeoutFeesResponse): Uint8Array;
                    toProtoMsg(message: _104.QueryTotalTimeoutFeesResponse): _104.QueryTotalTimeoutFeesResponseProtoMsg;
                };
                QueryPayeeRequest: {
                    typeUrl: string;
                    encode(message: _104.QueryPayeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryPayeeRequest;
                    fromPartial(object: Partial<_104.QueryPayeeRequest>): _104.QueryPayeeRequest;
                    fromAmino(object: _104.QueryPayeeRequestAmino): _104.QueryPayeeRequest;
                    toAmino(message: _104.QueryPayeeRequest): _104.QueryPayeeRequestAmino;
                    fromAminoMsg(object: _104.QueryPayeeRequestAminoMsg): _104.QueryPayeeRequest;
                    toAminoMsg(message: _104.QueryPayeeRequest): _104.QueryPayeeRequestAminoMsg;
                    fromProtoMsg(message: _104.QueryPayeeRequestProtoMsg): _104.QueryPayeeRequest;
                    toProto(message: _104.QueryPayeeRequest): Uint8Array;
                    toProtoMsg(message: _104.QueryPayeeRequest): _104.QueryPayeeRequestProtoMsg;
                };
                QueryPayeeResponse: {
                    typeUrl: string;
                    encode(message: _104.QueryPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryPayeeResponse;
                    fromPartial(object: Partial<_104.QueryPayeeResponse>): _104.QueryPayeeResponse;
                    fromAmino(object: _104.QueryPayeeResponseAmino): _104.QueryPayeeResponse;
                    toAmino(message: _104.QueryPayeeResponse): _104.QueryPayeeResponseAmino;
                    fromAminoMsg(object: _104.QueryPayeeResponseAminoMsg): _104.QueryPayeeResponse;
                    toAminoMsg(message: _104.QueryPayeeResponse): _104.QueryPayeeResponseAminoMsg;
                    fromProtoMsg(message: _104.QueryPayeeResponseProtoMsg): _104.QueryPayeeResponse;
                    toProto(message: _104.QueryPayeeResponse): Uint8Array;
                    toProtoMsg(message: _104.QueryPayeeResponse): _104.QueryPayeeResponseProtoMsg;
                };
                QueryCounterpartyPayeeRequest: {
                    typeUrl: string;
                    encode(message: _104.QueryCounterpartyPayeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryCounterpartyPayeeRequest;
                    fromPartial(object: Partial<_104.QueryCounterpartyPayeeRequest>): _104.QueryCounterpartyPayeeRequest;
                    fromAmino(object: _104.QueryCounterpartyPayeeRequestAmino): _104.QueryCounterpartyPayeeRequest;
                    toAmino(message: _104.QueryCounterpartyPayeeRequest): _104.QueryCounterpartyPayeeRequestAmino;
                    fromAminoMsg(object: _104.QueryCounterpartyPayeeRequestAminoMsg): _104.QueryCounterpartyPayeeRequest;
                    toAminoMsg(message: _104.QueryCounterpartyPayeeRequest): _104.QueryCounterpartyPayeeRequestAminoMsg;
                    fromProtoMsg(message: _104.QueryCounterpartyPayeeRequestProtoMsg): _104.QueryCounterpartyPayeeRequest;
                    toProto(message: _104.QueryCounterpartyPayeeRequest): Uint8Array;
                    toProtoMsg(message: _104.QueryCounterpartyPayeeRequest): _104.QueryCounterpartyPayeeRequestProtoMsg;
                };
                QueryCounterpartyPayeeResponse: {
                    typeUrl: string;
                    encode(message: _104.QueryCounterpartyPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryCounterpartyPayeeResponse;
                    fromPartial(object: Partial<_104.QueryCounterpartyPayeeResponse>): _104.QueryCounterpartyPayeeResponse;
                    fromAmino(object: _104.QueryCounterpartyPayeeResponseAmino): _104.QueryCounterpartyPayeeResponse;
                    toAmino(message: _104.QueryCounterpartyPayeeResponse): _104.QueryCounterpartyPayeeResponseAmino;
                    fromAminoMsg(object: _104.QueryCounterpartyPayeeResponseAminoMsg): _104.QueryCounterpartyPayeeResponse;
                    toAminoMsg(message: _104.QueryCounterpartyPayeeResponse): _104.QueryCounterpartyPayeeResponseAminoMsg;
                    fromProtoMsg(message: _104.QueryCounterpartyPayeeResponseProtoMsg): _104.QueryCounterpartyPayeeResponse;
                    toProto(message: _104.QueryCounterpartyPayeeResponse): Uint8Array;
                    toProtoMsg(message: _104.QueryCounterpartyPayeeResponse): _104.QueryCounterpartyPayeeResponseProtoMsg;
                };
                QueryFeeEnabledChannelsRequest: {
                    typeUrl: string;
                    encode(message: _104.QueryFeeEnabledChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryFeeEnabledChannelsRequest;
                    fromPartial(object: Partial<_104.QueryFeeEnabledChannelsRequest>): _104.QueryFeeEnabledChannelsRequest;
                    fromAmino(object: _104.QueryFeeEnabledChannelsRequestAmino): _104.QueryFeeEnabledChannelsRequest;
                    toAmino(message: _104.QueryFeeEnabledChannelsRequest): _104.QueryFeeEnabledChannelsRequestAmino;
                    fromAminoMsg(object: _104.QueryFeeEnabledChannelsRequestAminoMsg): _104.QueryFeeEnabledChannelsRequest;
                    toAminoMsg(message: _104.QueryFeeEnabledChannelsRequest): _104.QueryFeeEnabledChannelsRequestAminoMsg;
                    fromProtoMsg(message: _104.QueryFeeEnabledChannelsRequestProtoMsg): _104.QueryFeeEnabledChannelsRequest;
                    toProto(message: _104.QueryFeeEnabledChannelsRequest): Uint8Array;
                    toProtoMsg(message: _104.QueryFeeEnabledChannelsRequest): _104.QueryFeeEnabledChannelsRequestProtoMsg;
                };
                QueryFeeEnabledChannelsResponse: {
                    typeUrl: string;
                    encode(message: _104.QueryFeeEnabledChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryFeeEnabledChannelsResponse;
                    fromPartial(object: Partial<_104.QueryFeeEnabledChannelsResponse>): _104.QueryFeeEnabledChannelsResponse;
                    fromAmino(object: _104.QueryFeeEnabledChannelsResponseAmino): _104.QueryFeeEnabledChannelsResponse;
                    toAmino(message: _104.QueryFeeEnabledChannelsResponse): _104.QueryFeeEnabledChannelsResponseAmino;
                    fromAminoMsg(object: _104.QueryFeeEnabledChannelsResponseAminoMsg): _104.QueryFeeEnabledChannelsResponse;
                    toAminoMsg(message: _104.QueryFeeEnabledChannelsResponse): _104.QueryFeeEnabledChannelsResponseAminoMsg;
                    fromProtoMsg(message: _104.QueryFeeEnabledChannelsResponseProtoMsg): _104.QueryFeeEnabledChannelsResponse;
                    toProto(message: _104.QueryFeeEnabledChannelsResponse): Uint8Array;
                    toProtoMsg(message: _104.QueryFeeEnabledChannelsResponse): _104.QueryFeeEnabledChannelsResponseProtoMsg;
                };
                QueryFeeEnabledChannelRequest: {
                    typeUrl: string;
                    encode(message: _104.QueryFeeEnabledChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryFeeEnabledChannelRequest;
                    fromPartial(object: Partial<_104.QueryFeeEnabledChannelRequest>): _104.QueryFeeEnabledChannelRequest;
                    fromAmino(object: _104.QueryFeeEnabledChannelRequestAmino): _104.QueryFeeEnabledChannelRequest;
                    toAmino(message: _104.QueryFeeEnabledChannelRequest): _104.QueryFeeEnabledChannelRequestAmino;
                    fromAminoMsg(object: _104.QueryFeeEnabledChannelRequestAminoMsg): _104.QueryFeeEnabledChannelRequest;
                    toAminoMsg(message: _104.QueryFeeEnabledChannelRequest): _104.QueryFeeEnabledChannelRequestAminoMsg;
                    fromProtoMsg(message: _104.QueryFeeEnabledChannelRequestProtoMsg): _104.QueryFeeEnabledChannelRequest;
                    toProto(message: _104.QueryFeeEnabledChannelRequest): Uint8Array;
                    toProtoMsg(message: _104.QueryFeeEnabledChannelRequest): _104.QueryFeeEnabledChannelRequestProtoMsg;
                };
                QueryFeeEnabledChannelResponse: {
                    typeUrl: string;
                    encode(message: _104.QueryFeeEnabledChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryFeeEnabledChannelResponse;
                    fromPartial(object: Partial<_104.QueryFeeEnabledChannelResponse>): _104.QueryFeeEnabledChannelResponse;
                    fromAmino(object: _104.QueryFeeEnabledChannelResponseAmino): _104.QueryFeeEnabledChannelResponse;
                    toAmino(message: _104.QueryFeeEnabledChannelResponse): _104.QueryFeeEnabledChannelResponseAmino;
                    fromAminoMsg(object: _104.QueryFeeEnabledChannelResponseAminoMsg): _104.QueryFeeEnabledChannelResponse;
                    toAminoMsg(message: _104.QueryFeeEnabledChannelResponse): _104.QueryFeeEnabledChannelResponseAminoMsg;
                    fromProtoMsg(message: _104.QueryFeeEnabledChannelResponseProtoMsg): _104.QueryFeeEnabledChannelResponse;
                    toProto(message: _104.QueryFeeEnabledChannelResponse): Uint8Array;
                    toProtoMsg(message: _104.QueryFeeEnabledChannelResponse): _104.QueryFeeEnabledChannelResponseProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _103.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _103.Metadata;
                    fromPartial(object: Partial<_103.Metadata>): _103.Metadata;
                    fromAmino(object: _103.MetadataAmino): _103.Metadata;
                    toAmino(message: _103.Metadata): _103.MetadataAmino;
                    fromAminoMsg(object: _103.MetadataAminoMsg): _103.Metadata;
                    toAminoMsg(message: _103.Metadata): _103.MetadataAminoMsg;
                    fromProtoMsg(message: _103.MetadataProtoMsg): _103.Metadata;
                    toProto(message: _103.Metadata): Uint8Array;
                    toProtoMsg(message: _103.Metadata): _103.MetadataProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _102.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _102.GenesisState;
                    fromPartial(object: Partial<_102.GenesisState>): _102.GenesisState;
                    fromAmino(object: _102.GenesisStateAmino): _102.GenesisState;
                    toAmino(message: _102.GenesisState): _102.GenesisStateAmino;
                    fromAminoMsg(object: _102.GenesisStateAminoMsg): _102.GenesisState;
                    toAminoMsg(message: _102.GenesisState): _102.GenesisStateAminoMsg;
                    fromProtoMsg(message: _102.GenesisStateProtoMsg): _102.GenesisState;
                    toProto(message: _102.GenesisState): Uint8Array;
                    toProtoMsg(message: _102.GenesisState): _102.GenesisStateProtoMsg;
                };
                FeeEnabledChannel: {
                    typeUrl: string;
                    encode(message: _102.FeeEnabledChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _102.FeeEnabledChannel;
                    fromPartial(object: Partial<_102.FeeEnabledChannel>): _102.FeeEnabledChannel;
                    fromAmino(object: _102.FeeEnabledChannelAmino): _102.FeeEnabledChannel;
                    toAmino(message: _102.FeeEnabledChannel): _102.FeeEnabledChannelAmino;
                    fromAminoMsg(object: _102.FeeEnabledChannelAminoMsg): _102.FeeEnabledChannel;
                    toAminoMsg(message: _102.FeeEnabledChannel): _102.FeeEnabledChannelAminoMsg;
                    fromProtoMsg(message: _102.FeeEnabledChannelProtoMsg): _102.FeeEnabledChannel;
                    toProto(message: _102.FeeEnabledChannel): Uint8Array;
                    toProtoMsg(message: _102.FeeEnabledChannel): _102.FeeEnabledChannelProtoMsg;
                };
                RegisteredPayee: {
                    typeUrl: string;
                    encode(message: _102.RegisteredPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _102.RegisteredPayee;
                    fromPartial(object: Partial<_102.RegisteredPayee>): _102.RegisteredPayee;
                    fromAmino(object: _102.RegisteredPayeeAmino): _102.RegisteredPayee;
                    toAmino(message: _102.RegisteredPayee): _102.RegisteredPayeeAmino;
                    fromAminoMsg(object: _102.RegisteredPayeeAminoMsg): _102.RegisteredPayee;
                    toAminoMsg(message: _102.RegisteredPayee): _102.RegisteredPayeeAminoMsg;
                    fromProtoMsg(message: _102.RegisteredPayeeProtoMsg): _102.RegisteredPayee;
                    toProto(message: _102.RegisteredPayee): Uint8Array;
                    toProtoMsg(message: _102.RegisteredPayee): _102.RegisteredPayeeProtoMsg;
                };
                RegisteredCounterpartyPayee: {
                    typeUrl: string;
                    encode(message: _102.RegisteredCounterpartyPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _102.RegisteredCounterpartyPayee;
                    fromPartial(object: Partial<_102.RegisteredCounterpartyPayee>): _102.RegisteredCounterpartyPayee;
                    fromAmino(object: _102.RegisteredCounterpartyPayeeAmino): _102.RegisteredCounterpartyPayee;
                    toAmino(message: _102.RegisteredCounterpartyPayee): _102.RegisteredCounterpartyPayeeAmino;
                    fromAminoMsg(object: _102.RegisteredCounterpartyPayeeAminoMsg): _102.RegisteredCounterpartyPayee;
                    toAminoMsg(message: _102.RegisteredCounterpartyPayee): _102.RegisteredCounterpartyPayeeAminoMsg;
                    fromProtoMsg(message: _102.RegisteredCounterpartyPayeeProtoMsg): _102.RegisteredCounterpartyPayee;
                    toProto(message: _102.RegisteredCounterpartyPayee): Uint8Array;
                    toProtoMsg(message: _102.RegisteredCounterpartyPayee): _102.RegisteredCounterpartyPayeeProtoMsg;
                };
                ForwardRelayerAddress: {
                    typeUrl: string;
                    encode(message: _102.ForwardRelayerAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _102.ForwardRelayerAddress;
                    fromPartial(object: Partial<_102.ForwardRelayerAddress>): _102.ForwardRelayerAddress;
                    fromAmino(object: _102.ForwardRelayerAddressAmino): _102.ForwardRelayerAddress;
                    toAmino(message: _102.ForwardRelayerAddress): _102.ForwardRelayerAddressAmino;
                    fromAminoMsg(object: _102.ForwardRelayerAddressAminoMsg): _102.ForwardRelayerAddress;
                    toAminoMsg(message: _102.ForwardRelayerAddress): _102.ForwardRelayerAddressAminoMsg;
                    fromProtoMsg(message: _102.ForwardRelayerAddressProtoMsg): _102.ForwardRelayerAddress;
                    toProto(message: _102.ForwardRelayerAddress): Uint8Array;
                    toProtoMsg(message: _102.ForwardRelayerAddress): _102.ForwardRelayerAddressProtoMsg;
                };
                Fee: {
                    typeUrl: string;
                    encode(message: _101.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _101.Fee;
                    fromPartial(object: Partial<_101.Fee>): _101.Fee;
                    fromAmino(object: _101.FeeAmino): _101.Fee;
                    toAmino(message: _101.Fee): _101.FeeAmino;
                    fromAminoMsg(object: _101.FeeAminoMsg): _101.Fee;
                    toAminoMsg(message: _101.Fee): _101.FeeAminoMsg;
                    fromProtoMsg(message: _101.FeeProtoMsg): _101.Fee;
                    toProto(message: _101.Fee): Uint8Array;
                    toProtoMsg(message: _101.Fee): _101.FeeProtoMsg;
                };
                PacketFee: {
                    typeUrl: string;
                    encode(message: _101.PacketFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _101.PacketFee;
                    fromPartial(object: Partial<_101.PacketFee>): _101.PacketFee;
                    fromAmino(object: _101.PacketFeeAmino): _101.PacketFee;
                    toAmino(message: _101.PacketFee): _101.PacketFeeAmino;
                    fromAminoMsg(object: _101.PacketFeeAminoMsg): _101.PacketFee;
                    toAminoMsg(message: _101.PacketFee): _101.PacketFeeAminoMsg;
                    fromProtoMsg(message: _101.PacketFeeProtoMsg): _101.PacketFee;
                    toProto(message: _101.PacketFee): Uint8Array;
                    toProtoMsg(message: _101.PacketFee): _101.PacketFeeProtoMsg;
                };
                PacketFees: {
                    typeUrl: string;
                    encode(message: _101.PacketFees, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _101.PacketFees;
                    fromPartial(object: Partial<_101.PacketFees>): _101.PacketFees;
                    fromAmino(object: _101.PacketFeesAmino): _101.PacketFees;
                    toAmino(message: _101.PacketFees): _101.PacketFeesAmino;
                    fromAminoMsg(object: _101.PacketFeesAminoMsg): _101.PacketFees;
                    toAminoMsg(message: _101.PacketFees): _101.PacketFeesAminoMsg;
                    fromProtoMsg(message: _101.PacketFeesProtoMsg): _101.PacketFees;
                    toProto(message: _101.PacketFees): Uint8Array;
                    toProtoMsg(message: _101.PacketFees): _101.PacketFeesProtoMsg;
                };
                IdentifiedPacketFees: {
                    typeUrl: string;
                    encode(message: _101.IdentifiedPacketFees, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _101.IdentifiedPacketFees;
                    fromPartial(object: Partial<_101.IdentifiedPacketFees>): _101.IdentifiedPacketFees;
                    fromAmino(object: _101.IdentifiedPacketFeesAmino): _101.IdentifiedPacketFees;
                    toAmino(message: _101.IdentifiedPacketFees): _101.IdentifiedPacketFeesAmino;
                    fromAminoMsg(object: _101.IdentifiedPacketFeesAminoMsg): _101.IdentifiedPacketFees;
                    toAminoMsg(message: _101.IdentifiedPacketFees): _101.IdentifiedPacketFeesAminoMsg;
                    fromProtoMsg(message: _101.IdentifiedPacketFeesProtoMsg): _101.IdentifiedPacketFees;
                    toProto(message: _101.IdentifiedPacketFees): Uint8Array;
                    toProtoMsg(message: _101.IdentifiedPacketFees): _101.IdentifiedPacketFeesProtoMsg;
                };
                IncentivizedAcknowledgement: {
                    typeUrl: string;
                    encode(message: _100.IncentivizedAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.IncentivizedAcknowledgement;
                    fromPartial(object: Partial<_100.IncentivizedAcknowledgement>): _100.IncentivizedAcknowledgement;
                    fromAmino(object: _100.IncentivizedAcknowledgementAmino): _100.IncentivizedAcknowledgement;
                    toAmino(message: _100.IncentivizedAcknowledgement): _100.IncentivizedAcknowledgementAmino;
                    fromAminoMsg(object: _100.IncentivizedAcknowledgementAminoMsg): _100.IncentivizedAcknowledgement;
                    toAminoMsg(message: _100.IncentivizedAcknowledgement): _100.IncentivizedAcknowledgementAminoMsg;
                    fromProtoMsg(message: _100.IncentivizedAcknowledgementProtoMsg): _100.IncentivizedAcknowledgement;
                    toProto(message: _100.IncentivizedAcknowledgement): Uint8Array;
                    toProtoMsg(message: _100.IncentivizedAcknowledgement): _100.IncentivizedAcknowledgementProtoMsg;
                };
            };
        }
        namespace interchain_accounts {
            namespace controller {
                const v1: {
                    QueryClientImpl: typeof _275.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        interchainAccount(request: _107.QueryInterchainAccountRequest): Promise<_107.QueryInterchainAccountResponse>;
                        params(request?: _107.QueryParamsRequest): Promise<_107.QueryParamsResponse>;
                    };
                    LCDQueryClient: typeof _268.LCDQueryClient;
                    QueryInterchainAccountRequest: {
                        typeUrl: string;
                        encode(message: _107.QueryInterchainAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _107.QueryInterchainAccountRequest;
                        fromPartial(object: Partial<_107.QueryInterchainAccountRequest>): _107.QueryInterchainAccountRequest;
                        fromAmino(object: _107.QueryInterchainAccountRequestAmino): _107.QueryInterchainAccountRequest;
                        toAmino(message: _107.QueryInterchainAccountRequest): _107.QueryInterchainAccountRequestAmino;
                        fromAminoMsg(object: _107.QueryInterchainAccountRequestAminoMsg): _107.QueryInterchainAccountRequest;
                        toAminoMsg(message: _107.QueryInterchainAccountRequest): _107.QueryInterchainAccountRequestAminoMsg;
                        fromProtoMsg(message: _107.QueryInterchainAccountRequestProtoMsg): _107.QueryInterchainAccountRequest;
                        toProto(message: _107.QueryInterchainAccountRequest): Uint8Array;
                        toProtoMsg(message: _107.QueryInterchainAccountRequest): _107.QueryInterchainAccountRequestProtoMsg;
                    };
                    QueryInterchainAccountResponse: {
                        typeUrl: string;
                        encode(message: _107.QueryInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _107.QueryInterchainAccountResponse;
                        fromPartial(object: Partial<_107.QueryInterchainAccountResponse>): _107.QueryInterchainAccountResponse;
                        fromAmino(object: _107.QueryInterchainAccountResponseAmino): _107.QueryInterchainAccountResponse;
                        toAmino(message: _107.QueryInterchainAccountResponse): _107.QueryInterchainAccountResponseAmino;
                        fromAminoMsg(object: _107.QueryInterchainAccountResponseAminoMsg): _107.QueryInterchainAccountResponse;
                        toAminoMsg(message: _107.QueryInterchainAccountResponse): _107.QueryInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _107.QueryInterchainAccountResponseProtoMsg): _107.QueryInterchainAccountResponse;
                        toProto(message: _107.QueryInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _107.QueryInterchainAccountResponse): _107.QueryInterchainAccountResponseProtoMsg;
                    };
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _107.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(_: any): _107.QueryParamsRequest;
                        fromPartial(_: Partial<_107.QueryParamsRequest>): _107.QueryParamsRequest;
                        fromAmino(_: _107.QueryParamsRequestAmino): _107.QueryParamsRequest;
                        toAmino(_: _107.QueryParamsRequest): _107.QueryParamsRequestAmino;
                        fromAminoMsg(object: _107.QueryParamsRequestAminoMsg): _107.QueryParamsRequest;
                        toAminoMsg(message: _107.QueryParamsRequest): _107.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _107.QueryParamsRequestProtoMsg): _107.QueryParamsRequest;
                        toProto(message: _107.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _107.QueryParamsRequest): _107.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        encode(message: _107.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _107.QueryParamsResponse;
                        fromPartial(object: Partial<_107.QueryParamsResponse>): _107.QueryParamsResponse;
                        fromAmino(object: _107.QueryParamsResponseAmino): _107.QueryParamsResponse;
                        toAmino(message: _107.QueryParamsResponse): _107.QueryParamsResponseAmino;
                        fromAminoMsg(object: _107.QueryParamsResponseAminoMsg): _107.QueryParamsResponse;
                        toAminoMsg(message: _107.QueryParamsResponse): _107.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _107.QueryParamsResponseProtoMsg): _107.QueryParamsResponse;
                        toProto(message: _107.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _107.QueryParamsResponse): _107.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _106.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _106.Params;
                        fromPartial(object: Partial<_106.Params>): _106.Params;
                        fromAmino(object: _106.ParamsAmino): _106.Params;
                        toAmino(message: _106.Params): _106.ParamsAmino;
                        fromAminoMsg(object: _106.ParamsAminoMsg): _106.Params;
                        toAminoMsg(message: _106.Params): _106.ParamsAminoMsg;
                        fromProtoMsg(message: _106.ParamsProtoMsg): _106.Params;
                        toProto(message: _106.Params): Uint8Array;
                        toProtoMsg(message: _106.Params): _106.ParamsProtoMsg;
                    };
                };
            }
            namespace host {
                const v1: {
                    QueryClientImpl: typeof _276.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        params(request?: _109.QueryParamsRequest): Promise<_109.QueryParamsResponse>;
                    };
                    LCDQueryClient: typeof _269.LCDQueryClient;
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _109.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(_: any): _109.QueryParamsRequest;
                        fromPartial(_: Partial<_109.QueryParamsRequest>): _109.QueryParamsRequest;
                        fromAmino(_: _109.QueryParamsRequestAmino): _109.QueryParamsRequest;
                        toAmino(_: _109.QueryParamsRequest): _109.QueryParamsRequestAmino;
                        fromAminoMsg(object: _109.QueryParamsRequestAminoMsg): _109.QueryParamsRequest;
                        toAminoMsg(message: _109.QueryParamsRequest): _109.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _109.QueryParamsRequestProtoMsg): _109.QueryParamsRequest;
                        toProto(message: _109.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _109.QueryParamsRequest): _109.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        encode(message: _109.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _109.QueryParamsResponse;
                        fromPartial(object: Partial<_109.QueryParamsResponse>): _109.QueryParamsResponse;
                        fromAmino(object: _109.QueryParamsResponseAmino): _109.QueryParamsResponse;
                        toAmino(message: _109.QueryParamsResponse): _109.QueryParamsResponseAmino;
                        fromAminoMsg(object: _109.QueryParamsResponseAminoMsg): _109.QueryParamsResponse;
                        toAminoMsg(message: _109.QueryParamsResponse): _109.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _109.QueryParamsResponseProtoMsg): _109.QueryParamsResponse;
                        toProto(message: _109.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _109.QueryParamsResponse): _109.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _108.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _108.Params;
                        fromPartial(object: Partial<_108.Params>): _108.Params;
                        fromAmino(object: _108.ParamsAmino): _108.Params;
                        toAmino(message: _108.Params): _108.ParamsAmino;
                        fromAminoMsg(object: _108.ParamsAminoMsg): _108.Params;
                        toAminoMsg(message: _108.Params): _108.ParamsAminoMsg;
                        fromProtoMsg(message: _108.ParamsProtoMsg): _108.Params;
                        toProto(message: _108.Params): Uint8Array;
                        toProtoMsg(message: _108.Params): _108.ParamsProtoMsg;
                    };
                };
            }
            const v1: {
                typeFromJSON(object: any): _113.Type;
                typeToJSON(object: _113.Type): string;
                Type: typeof _113.Type;
                TypeSDKType: typeof _113.Type;
                TypeAmino: typeof _113.Type;
                InterchainAccountPacketData: {
                    typeUrl: string;
                    encode(message: _113.InterchainAccountPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _113.InterchainAccountPacketData;
                    fromPartial(object: Partial<_113.InterchainAccountPacketData>): _113.InterchainAccountPacketData;
                    fromAmino(object: _113.InterchainAccountPacketDataAmino): _113.InterchainAccountPacketData;
                    toAmino(message: _113.InterchainAccountPacketData): _113.InterchainAccountPacketDataAmino;
                    fromAminoMsg(object: _113.InterchainAccountPacketDataAminoMsg): _113.InterchainAccountPacketData;
                    toAminoMsg(message: _113.InterchainAccountPacketData): _113.InterchainAccountPacketDataAminoMsg;
                    fromProtoMsg(message: _113.InterchainAccountPacketDataProtoMsg): _113.InterchainAccountPacketData;
                    toProto(message: _113.InterchainAccountPacketData): Uint8Array;
                    toProtoMsg(message: _113.InterchainAccountPacketData): _113.InterchainAccountPacketDataProtoMsg;
                };
                CosmosTx: {
                    typeUrl: string;
                    encode(message: _113.CosmosTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _113.CosmosTx;
                    fromPartial(object: Partial<_113.CosmosTx>): _113.CosmosTx;
                    fromAmino(object: _113.CosmosTxAmino): _113.CosmosTx;
                    toAmino(message: _113.CosmosTx): _113.CosmosTxAmino;
                    fromAminoMsg(object: _113.CosmosTxAminoMsg): _113.CosmosTx;
                    toAminoMsg(message: _113.CosmosTx): _113.CosmosTxAminoMsg;
                    fromProtoMsg(message: _113.CosmosTxProtoMsg): _113.CosmosTx;
                    toProto(message: _113.CosmosTx): Uint8Array;
                    toProtoMsg(message: _113.CosmosTx): _113.CosmosTxProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _112.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _112.Metadata;
                    fromPartial(object: Partial<_112.Metadata>): _112.Metadata;
                    fromAmino(object: _112.MetadataAmino): _112.Metadata;
                    toAmino(message: _112.Metadata): _112.MetadataAmino;
                    fromAminoMsg(object: _112.MetadataAminoMsg): _112.Metadata;
                    toAminoMsg(message: _112.Metadata): _112.MetadataAminoMsg;
                    fromProtoMsg(message: _112.MetadataProtoMsg): _112.Metadata;
                    toProto(message: _112.Metadata): Uint8Array;
                    toProtoMsg(message: _112.Metadata): _112.MetadataProtoMsg;
                };
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
                ControllerGenesisState: {
                    typeUrl: string;
                    encode(message: _111.ControllerGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _111.ControllerGenesisState;
                    fromPartial(object: Partial<_111.ControllerGenesisState>): _111.ControllerGenesisState;
                    fromAmino(object: _111.ControllerGenesisStateAmino): _111.ControllerGenesisState;
                    toAmino(message: _111.ControllerGenesisState): _111.ControllerGenesisStateAmino;
                    fromAminoMsg(object: _111.ControllerGenesisStateAminoMsg): _111.ControllerGenesisState;
                    toAminoMsg(message: _111.ControllerGenesisState): _111.ControllerGenesisStateAminoMsg;
                    fromProtoMsg(message: _111.ControllerGenesisStateProtoMsg): _111.ControllerGenesisState;
                    toProto(message: _111.ControllerGenesisState): Uint8Array;
                    toProtoMsg(message: _111.ControllerGenesisState): _111.ControllerGenesisStateProtoMsg;
                };
                HostGenesisState: {
                    typeUrl: string;
                    encode(message: _111.HostGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _111.HostGenesisState;
                    fromPartial(object: Partial<_111.HostGenesisState>): _111.HostGenesisState;
                    fromAmino(object: _111.HostGenesisStateAmino): _111.HostGenesisState;
                    toAmino(message: _111.HostGenesisState): _111.HostGenesisStateAmino;
                    fromAminoMsg(object: _111.HostGenesisStateAminoMsg): _111.HostGenesisState;
                    toAminoMsg(message: _111.HostGenesisState): _111.HostGenesisStateAminoMsg;
                    fromProtoMsg(message: _111.HostGenesisStateProtoMsg): _111.HostGenesisState;
                    toProto(message: _111.HostGenesisState): Uint8Array;
                    toProtoMsg(message: _111.HostGenesisState): _111.HostGenesisStateProtoMsg;
                };
                ActiveChannel: {
                    typeUrl: string;
                    encode(message: _111.ActiveChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _111.ActiveChannel;
                    fromPartial(object: Partial<_111.ActiveChannel>): _111.ActiveChannel;
                    fromAmino(object: _111.ActiveChannelAmino): _111.ActiveChannel;
                    toAmino(message: _111.ActiveChannel): _111.ActiveChannelAmino;
                    fromAminoMsg(object: _111.ActiveChannelAminoMsg): _111.ActiveChannel;
                    toAminoMsg(message: _111.ActiveChannel): _111.ActiveChannelAminoMsg;
                    fromProtoMsg(message: _111.ActiveChannelProtoMsg): _111.ActiveChannel;
                    toProto(message: _111.ActiveChannel): Uint8Array;
                    toProtoMsg(message: _111.ActiveChannel): _111.ActiveChannelProtoMsg;
                };
                RegisteredInterchainAccount: {
                    typeUrl: string;
                    encode(message: _111.RegisteredInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _111.RegisteredInterchainAccount;
                    fromPartial(object: Partial<_111.RegisteredInterchainAccount>): _111.RegisteredInterchainAccount;
                    fromAmino(object: _111.RegisteredInterchainAccountAmino): _111.RegisteredInterchainAccount;
                    toAmino(message: _111.RegisteredInterchainAccount): _111.RegisteredInterchainAccountAmino;
                    fromAminoMsg(object: _111.RegisteredInterchainAccountAminoMsg): _111.RegisteredInterchainAccount;
                    toAminoMsg(message: _111.RegisteredInterchainAccount): _111.RegisteredInterchainAccountAminoMsg;
                    fromProtoMsg(message: _111.RegisteredInterchainAccountProtoMsg): _111.RegisteredInterchainAccount;
                    toProto(message: _111.RegisteredInterchainAccount): Uint8Array;
                    toProtoMsg(message: _111.RegisteredInterchainAccount): _111.RegisteredInterchainAccountProtoMsg;
                };
                InterchainAccount: {
                    typeUrl: string;
                    encode(message: _110.InterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _110.InterchainAccount;
                    fromPartial(object: Partial<_110.InterchainAccount>): _110.InterchainAccount;
                    fromAmino(object: _110.InterchainAccountAmino): _110.InterchainAccount;
                    toAmino(message: _110.InterchainAccount): _110.InterchainAccountAmino;
                    fromAminoMsg(object: _110.InterchainAccountAminoMsg): _110.InterchainAccount;
                    toAminoMsg(message: _110.InterchainAccount): _110.InterchainAccountAminoMsg;
                    fromProtoMsg(message: _110.InterchainAccountProtoMsg): _110.InterchainAccount;
                    toProto(message: _110.InterchainAccount): Uint8Array;
                    toProtoMsg(message: _110.InterchainAccount): _110.InterchainAccountProtoMsg;
                };
            };
        }
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _282.MsgClientImpl;
                QueryClientImpl: typeof _277.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _115.QueryDenomTraceRequest): Promise<_115.QueryDenomTraceResponse>;
                    denomTraces(request?: _115.QueryDenomTracesRequest): Promise<_115.QueryDenomTracesResponse>;
                    params(request?: _115.QueryParamsRequest): Promise<_115.QueryParamsResponse>;
                    denomHash(request: _115.QueryDenomHashRequest): Promise<_115.QueryDenomHashResponse>;
                    escrowAddress(request: _115.QueryEscrowAddressRequest): Promise<_115.QueryEscrowAddressResponse>;
                };
                LCDQueryClient: typeof _270.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _117.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _117.MsgTransfer): {
                            typeUrl: string;
                            value: _117.MsgTransfer;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _117.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _117.MsgTransfer): {
                            typeUrl: string;
                            value: _117.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _117.MsgTransfer) => _117.MsgTransferAmino;
                        fromAmino: (object: _117.MsgTransferAmino) => _117.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    encode(message: _117.MsgTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.MsgTransfer;
                    fromPartial(object: Partial<_117.MsgTransfer>): _117.MsgTransfer;
                    fromAmino(object: _117.MsgTransferAmino): _117.MsgTransfer;
                    toAmino(message: _117.MsgTransfer): _117.MsgTransferAmino;
                    fromAminoMsg(object: _117.MsgTransferAminoMsg): _117.MsgTransfer;
                    toAminoMsg(message: _117.MsgTransfer): _117.MsgTransferAminoMsg;
                    fromProtoMsg(message: _117.MsgTransferProtoMsg): _117.MsgTransfer;
                    toProto(message: _117.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _117.MsgTransfer): _117.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    encode(message: _117.MsgTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.MsgTransferResponse;
                    fromPartial(object: Partial<_117.MsgTransferResponse>): _117.MsgTransferResponse;
                    fromAmino(object: _117.MsgTransferResponseAmino): _117.MsgTransferResponse;
                    toAmino(message: _117.MsgTransferResponse): _117.MsgTransferResponseAmino;
                    fromAminoMsg(object: _117.MsgTransferResponseAminoMsg): _117.MsgTransferResponse;
                    toAminoMsg(message: _117.MsgTransferResponse): _117.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _117.MsgTransferResponseProtoMsg): _117.MsgTransferResponse;
                    toProto(message: _117.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _117.MsgTransferResponse): _117.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    encode(message: _116.DenomTrace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _116.DenomTrace;
                    fromPartial(object: Partial<_116.DenomTrace>): _116.DenomTrace;
                    fromAmino(object: _116.DenomTraceAmino): _116.DenomTrace;
                    toAmino(message: _116.DenomTrace): _116.DenomTraceAmino;
                    fromAminoMsg(object: _116.DenomTraceAminoMsg): _116.DenomTrace;
                    toAminoMsg(message: _116.DenomTrace): _116.DenomTraceAminoMsg;
                    fromProtoMsg(message: _116.DenomTraceProtoMsg): _116.DenomTrace;
                    toProto(message: _116.DenomTrace): Uint8Array;
                    toProtoMsg(message: _116.DenomTrace): _116.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _116.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _116.Params;
                    fromPartial(object: Partial<_116.Params>): _116.Params;
                    fromAmino(object: _116.ParamsAmino): _116.Params;
                    toAmino(message: _116.Params): _116.ParamsAmino;
                    fromAminoMsg(object: _116.ParamsAminoMsg): _116.Params;
                    toAminoMsg(message: _116.Params): _116.ParamsAminoMsg;
                    fromProtoMsg(message: _116.ParamsProtoMsg): _116.Params;
                    toProto(message: _116.Params): Uint8Array;
                    toProtoMsg(message: _116.Params): _116.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    encode(message: _115.QueryDenomTraceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_115.QueryDenomTraceRequest>): _115.QueryDenomTraceRequest;
                    fromAmino(object: _115.QueryDenomTraceRequestAmino): _115.QueryDenomTraceRequest;
                    toAmino(message: _115.QueryDenomTraceRequest): _115.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _115.QueryDenomTraceRequestAminoMsg): _115.QueryDenomTraceRequest;
                    toAminoMsg(message: _115.QueryDenomTraceRequest): _115.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _115.QueryDenomTraceRequestProtoMsg): _115.QueryDenomTraceRequest;
                    toProto(message: _115.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _115.QueryDenomTraceRequest): _115.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    encode(message: _115.QueryDenomTraceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_115.QueryDenomTraceResponse>): _115.QueryDenomTraceResponse;
                    fromAmino(object: _115.QueryDenomTraceResponseAmino): _115.QueryDenomTraceResponse;
                    toAmino(message: _115.QueryDenomTraceResponse): _115.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _115.QueryDenomTraceResponseAminoMsg): _115.QueryDenomTraceResponse;
                    toAminoMsg(message: _115.QueryDenomTraceResponse): _115.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _115.QueryDenomTraceResponseProtoMsg): _115.QueryDenomTraceResponse;
                    toProto(message: _115.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _115.QueryDenomTraceResponse): _115.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    encode(message: _115.QueryDenomTracesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_115.QueryDenomTracesRequest>): _115.QueryDenomTracesRequest;
                    fromAmino(object: _115.QueryDenomTracesRequestAmino): _115.QueryDenomTracesRequest;
                    toAmino(message: _115.QueryDenomTracesRequest): _115.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _115.QueryDenomTracesRequestAminoMsg): _115.QueryDenomTracesRequest;
                    toAminoMsg(message: _115.QueryDenomTracesRequest): _115.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _115.QueryDenomTracesRequestProtoMsg): _115.QueryDenomTracesRequest;
                    toProto(message: _115.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _115.QueryDenomTracesRequest): _115.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    encode(message: _115.QueryDenomTracesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_115.QueryDenomTracesResponse>): _115.QueryDenomTracesResponse;
                    fromAmino(object: _115.QueryDenomTracesResponseAmino): _115.QueryDenomTracesResponse;
                    toAmino(message: _115.QueryDenomTracesResponse): _115.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _115.QueryDenomTracesResponseAminoMsg): _115.QueryDenomTracesResponse;
                    toAminoMsg(message: _115.QueryDenomTracesResponse): _115.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _115.QueryDenomTracesResponseProtoMsg): _115.QueryDenomTracesResponse;
                    toProto(message: _115.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _115.QueryDenomTracesResponse): _115.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _115.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _115.QueryParamsRequest;
                    fromPartial(_: Partial<_115.QueryParamsRequest>): _115.QueryParamsRequest;
                    fromAmino(_: _115.QueryParamsRequestAmino): _115.QueryParamsRequest;
                    toAmino(_: _115.QueryParamsRequest): _115.QueryParamsRequestAmino;
                    fromAminoMsg(object: _115.QueryParamsRequestAminoMsg): _115.QueryParamsRequest;
                    toAminoMsg(message: _115.QueryParamsRequest): _115.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _115.QueryParamsRequestProtoMsg): _115.QueryParamsRequest;
                    toProto(message: _115.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _115.QueryParamsRequest): _115.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    encode(message: _115.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.QueryParamsResponse;
                    fromPartial(object: Partial<_115.QueryParamsResponse>): _115.QueryParamsResponse;
                    fromAmino(object: _115.QueryParamsResponseAmino): _115.QueryParamsResponse;
                    toAmino(message: _115.QueryParamsResponse): _115.QueryParamsResponseAmino;
                    fromAminoMsg(object: _115.QueryParamsResponseAminoMsg): _115.QueryParamsResponse;
                    toAminoMsg(message: _115.QueryParamsResponse): _115.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _115.QueryParamsResponseProtoMsg): _115.QueryParamsResponse;
                    toProto(message: _115.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _115.QueryParamsResponse): _115.QueryParamsResponseProtoMsg;
                };
                QueryDenomHashRequest: {
                    typeUrl: string;
                    encode(message: _115.QueryDenomHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.QueryDenomHashRequest;
                    fromPartial(object: Partial<_115.QueryDenomHashRequest>): _115.QueryDenomHashRequest;
                    fromAmino(object: _115.QueryDenomHashRequestAmino): _115.QueryDenomHashRequest;
                    toAmino(message: _115.QueryDenomHashRequest): _115.QueryDenomHashRequestAmino;
                    fromAminoMsg(object: _115.QueryDenomHashRequestAminoMsg): _115.QueryDenomHashRequest;
                    toAminoMsg(message: _115.QueryDenomHashRequest): _115.QueryDenomHashRequestAminoMsg;
                    fromProtoMsg(message: _115.QueryDenomHashRequestProtoMsg): _115.QueryDenomHashRequest;
                    toProto(message: _115.QueryDenomHashRequest): Uint8Array;
                    toProtoMsg(message: _115.QueryDenomHashRequest): _115.QueryDenomHashRequestProtoMsg;
                };
                QueryDenomHashResponse: {
                    typeUrl: string;
                    encode(message: _115.QueryDenomHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.QueryDenomHashResponse;
                    fromPartial(object: Partial<_115.QueryDenomHashResponse>): _115.QueryDenomHashResponse;
                    fromAmino(object: _115.QueryDenomHashResponseAmino): _115.QueryDenomHashResponse;
                    toAmino(message: _115.QueryDenomHashResponse): _115.QueryDenomHashResponseAmino;
                    fromAminoMsg(object: _115.QueryDenomHashResponseAminoMsg): _115.QueryDenomHashResponse;
                    toAminoMsg(message: _115.QueryDenomHashResponse): _115.QueryDenomHashResponseAminoMsg;
                    fromProtoMsg(message: _115.QueryDenomHashResponseProtoMsg): _115.QueryDenomHashResponse;
                    toProto(message: _115.QueryDenomHashResponse): Uint8Array;
                    toProtoMsg(message: _115.QueryDenomHashResponse): _115.QueryDenomHashResponseProtoMsg;
                };
                QueryEscrowAddressRequest: {
                    typeUrl: string;
                    encode(message: _115.QueryEscrowAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.QueryEscrowAddressRequest;
                    fromPartial(object: Partial<_115.QueryEscrowAddressRequest>): _115.QueryEscrowAddressRequest;
                    fromAmino(object: _115.QueryEscrowAddressRequestAmino): _115.QueryEscrowAddressRequest;
                    toAmino(message: _115.QueryEscrowAddressRequest): _115.QueryEscrowAddressRequestAmino;
                    fromAminoMsg(object: _115.QueryEscrowAddressRequestAminoMsg): _115.QueryEscrowAddressRequest;
                    toAminoMsg(message: _115.QueryEscrowAddressRequest): _115.QueryEscrowAddressRequestAminoMsg;
                    fromProtoMsg(message: _115.QueryEscrowAddressRequestProtoMsg): _115.QueryEscrowAddressRequest;
                    toProto(message: _115.QueryEscrowAddressRequest): Uint8Array;
                    toProtoMsg(message: _115.QueryEscrowAddressRequest): _115.QueryEscrowAddressRequestProtoMsg;
                };
                QueryEscrowAddressResponse: {
                    typeUrl: string;
                    encode(message: _115.QueryEscrowAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.QueryEscrowAddressResponse;
                    fromPartial(object: Partial<_115.QueryEscrowAddressResponse>): _115.QueryEscrowAddressResponse;
                    fromAmino(object: _115.QueryEscrowAddressResponseAmino): _115.QueryEscrowAddressResponse;
                    toAmino(message: _115.QueryEscrowAddressResponse): _115.QueryEscrowAddressResponseAmino;
                    fromAminoMsg(object: _115.QueryEscrowAddressResponseAminoMsg): _115.QueryEscrowAddressResponse;
                    toAminoMsg(message: _115.QueryEscrowAddressResponse): _115.QueryEscrowAddressResponseAminoMsg;
                    fromProtoMsg(message: _115.QueryEscrowAddressResponseProtoMsg): _115.QueryEscrowAddressResponse;
                    toProto(message: _115.QueryEscrowAddressResponse): Uint8Array;
                    toProtoMsg(message: _115.QueryEscrowAddressResponse): _115.QueryEscrowAddressResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _114.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _114.GenesisState;
                    fromPartial(object: Partial<_114.GenesisState>): _114.GenesisState;
                    fromAmino(object: _114.GenesisStateAmino): _114.GenesisState;
                    toAmino(message: _114.GenesisState): _114.GenesisStateAmino;
                    fromAminoMsg(object: _114.GenesisStateAminoMsg): _114.GenesisState;
                    toAminoMsg(message: _114.GenesisState): _114.GenesisStateAminoMsg;
                    fromProtoMsg(message: _114.GenesisStateProtoMsg): _114.GenesisState;
                    toProto(message: _114.GenesisState): Uint8Array;
                    toProtoMsg(message: _114.GenesisState): _114.GenesisStateProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    typeUrl: string;
                    encode(message: _118.FungibleTokenPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.FungibleTokenPacketData;
                    fromPartial(object: Partial<_118.FungibleTokenPacketData>): _118.FungibleTokenPacketData;
                    fromAmino(object: _118.FungibleTokenPacketDataAmino): _118.FungibleTokenPacketData;
                    toAmino(message: _118.FungibleTokenPacketData): _118.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _118.FungibleTokenPacketDataAminoMsg): _118.FungibleTokenPacketData;
                    toAminoMsg(message: _118.FungibleTokenPacketData): _118.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _118.FungibleTokenPacketDataProtoMsg): _118.FungibleTokenPacketData;
                    toProto(message: _118.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _118.FungibleTokenPacketData): _118.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _283.MsgClientImpl;
                QueryClientImpl: typeof _278.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _121.QueryChannelRequest): Promise<_121.QueryChannelResponse>;
                    channels(request?: _121.QueryChannelsRequest): Promise<_121.QueryChannelsResponse>;
                    connectionChannels(request: _121.QueryConnectionChannelsRequest): Promise<_121.QueryConnectionChannelsResponse>;
                    channelClientState(request: _121.QueryChannelClientStateRequest): Promise<_121.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _121.QueryChannelConsensusStateRequest): Promise<_121.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _121.QueryPacketCommitmentRequest): Promise<_121.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _121.QueryPacketCommitmentsRequest): Promise<_121.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _121.QueryPacketReceiptRequest): Promise<_121.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _121.QueryPacketAcknowledgementRequest): Promise<_121.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _121.QueryPacketAcknowledgementsRequest): Promise<_121.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _121.QueryUnreceivedPacketsRequest): Promise<_121.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _121.QueryUnreceivedAcksRequest): Promise<_121.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _121.QueryNextSequenceReceiveRequest): Promise<_121.QueryNextSequenceReceiveResponse>;
                };
                LCDQueryClient: typeof _271.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _122.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _122.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _122.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _122.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _122.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _122.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _122.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _122.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _122.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _122.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _122.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _122.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _122.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _122.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _122.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _122.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _122.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _122.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _122.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _122.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _122.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _122.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _122.MsgRecvPacket): {
                            typeUrl: string;
                            value: _122.MsgRecvPacket;
                        };
                        timeout(value: _122.MsgTimeout): {
                            typeUrl: string;
                            value: _122.MsgTimeout;
                        };
                        timeoutOnClose(value: _122.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _122.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _122.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _122.MsgAcknowledgement;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _122.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _122.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _122.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _122.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _122.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _122.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _122.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _122.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _122.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _122.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _122.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _122.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _122.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _122.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _122.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _122.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _122.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _122.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _122.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _122.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _122.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _122.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _122.MsgRecvPacket): {
                            typeUrl: string;
                            value: _122.MsgRecvPacket;
                        };
                        timeout(value: _122.MsgTimeout): {
                            typeUrl: string;
                            value: _122.MsgTimeout;
                        };
                        timeoutOnClose(value: _122.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _122.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _122.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _122.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _122.MsgChannelOpenInit) => _122.MsgChannelOpenInitAmino;
                        fromAmino: (object: _122.MsgChannelOpenInitAmino) => _122.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _122.MsgChannelOpenTry) => _122.MsgChannelOpenTryAmino;
                        fromAmino: (object: _122.MsgChannelOpenTryAmino) => _122.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _122.MsgChannelOpenAck) => _122.MsgChannelOpenAckAmino;
                        fromAmino: (object: _122.MsgChannelOpenAckAmino) => _122.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _122.MsgChannelOpenConfirm) => _122.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _122.MsgChannelOpenConfirmAmino) => _122.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _122.MsgChannelCloseInit) => _122.MsgChannelCloseInitAmino;
                        fromAmino: (object: _122.MsgChannelCloseInitAmino) => _122.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _122.MsgChannelCloseConfirm) => _122.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _122.MsgChannelCloseConfirmAmino) => _122.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _122.MsgRecvPacket) => _122.MsgRecvPacketAmino;
                        fromAmino: (object: _122.MsgRecvPacketAmino) => _122.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _122.MsgTimeout) => _122.MsgTimeoutAmino;
                        fromAmino: (object: _122.MsgTimeoutAmino) => _122.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _122.MsgTimeoutOnClose) => _122.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _122.MsgTimeoutOnCloseAmino) => _122.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _122.MsgAcknowledgement) => _122.MsgAcknowledgementAmino;
                        fromAmino: (object: _122.MsgAcknowledgementAmino) => _122.MsgAcknowledgement;
                    };
                };
                responseResultTypeFromJSON(object: any): _122.ResponseResultType;
                responseResultTypeToJSON(object: _122.ResponseResultType): string;
                ResponseResultType: typeof _122.ResponseResultType;
                ResponseResultTypeSDKType: typeof _122.ResponseResultType;
                ResponseResultTypeAmino: typeof _122.ResponseResultType;
                MsgChannelOpenInit: {
                    typeUrl: string;
                    encode(message: _122.MsgChannelOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.MsgChannelOpenInit;
                    fromPartial(object: Partial<_122.MsgChannelOpenInit>): _122.MsgChannelOpenInit;
                    fromAmino(object: _122.MsgChannelOpenInitAmino): _122.MsgChannelOpenInit;
                    toAmino(message: _122.MsgChannelOpenInit): _122.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _122.MsgChannelOpenInitAminoMsg): _122.MsgChannelOpenInit;
                    toAminoMsg(message: _122.MsgChannelOpenInit): _122.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _122.MsgChannelOpenInitProtoMsg): _122.MsgChannelOpenInit;
                    toProto(message: _122.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _122.MsgChannelOpenInit): _122.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    encode(message: _122.MsgChannelOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.MsgChannelOpenInitResponse;
                    fromPartial(object: Partial<_122.MsgChannelOpenInitResponse>): _122.MsgChannelOpenInitResponse;
                    fromAmino(object: _122.MsgChannelOpenInitResponseAmino): _122.MsgChannelOpenInitResponse;
                    toAmino(message: _122.MsgChannelOpenInitResponse): _122.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _122.MsgChannelOpenInitResponseAminoMsg): _122.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _122.MsgChannelOpenInitResponse): _122.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _122.MsgChannelOpenInitResponseProtoMsg): _122.MsgChannelOpenInitResponse;
                    toProto(message: _122.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _122.MsgChannelOpenInitResponse): _122.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    encode(message: _122.MsgChannelOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.MsgChannelOpenTry;
                    fromPartial(object: Partial<_122.MsgChannelOpenTry>): _122.MsgChannelOpenTry;
                    fromAmino(object: _122.MsgChannelOpenTryAmino): _122.MsgChannelOpenTry;
                    toAmino(message: _122.MsgChannelOpenTry): _122.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _122.MsgChannelOpenTryAminoMsg): _122.MsgChannelOpenTry;
                    toAminoMsg(message: _122.MsgChannelOpenTry): _122.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _122.MsgChannelOpenTryProtoMsg): _122.MsgChannelOpenTry;
                    toProto(message: _122.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _122.MsgChannelOpenTry): _122.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    encode(message: _122.MsgChannelOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.MsgChannelOpenTryResponse;
                    fromPartial(object: Partial<_122.MsgChannelOpenTryResponse>): _122.MsgChannelOpenTryResponse;
                    fromAmino(object: _122.MsgChannelOpenTryResponseAmino): _122.MsgChannelOpenTryResponse;
                    toAmino(message: _122.MsgChannelOpenTryResponse): _122.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _122.MsgChannelOpenTryResponseAminoMsg): _122.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _122.MsgChannelOpenTryResponse): _122.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _122.MsgChannelOpenTryResponseProtoMsg): _122.MsgChannelOpenTryResponse;
                    toProto(message: _122.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _122.MsgChannelOpenTryResponse): _122.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    encode(message: _122.MsgChannelOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.MsgChannelOpenAck;
                    fromPartial(object: Partial<_122.MsgChannelOpenAck>): _122.MsgChannelOpenAck;
                    fromAmino(object: _122.MsgChannelOpenAckAmino): _122.MsgChannelOpenAck;
                    toAmino(message: _122.MsgChannelOpenAck): _122.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _122.MsgChannelOpenAckAminoMsg): _122.MsgChannelOpenAck;
                    toAminoMsg(message: _122.MsgChannelOpenAck): _122.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _122.MsgChannelOpenAckProtoMsg): _122.MsgChannelOpenAck;
                    toProto(message: _122.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _122.MsgChannelOpenAck): _122.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _122.MsgChannelOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _122.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_122.MsgChannelOpenAckResponse>): _122.MsgChannelOpenAckResponse;
                    fromAmino(_: _122.MsgChannelOpenAckResponseAmino): _122.MsgChannelOpenAckResponse;
                    toAmino(_: _122.MsgChannelOpenAckResponse): _122.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _122.MsgChannelOpenAckResponseAminoMsg): _122.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _122.MsgChannelOpenAckResponse): _122.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _122.MsgChannelOpenAckResponseProtoMsg): _122.MsgChannelOpenAckResponse;
                    toProto(message: _122.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _122.MsgChannelOpenAckResponse): _122.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    encode(message: _122.MsgChannelOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_122.MsgChannelOpenConfirm>): _122.MsgChannelOpenConfirm;
                    fromAmino(object: _122.MsgChannelOpenConfirmAmino): _122.MsgChannelOpenConfirm;
                    toAmino(message: _122.MsgChannelOpenConfirm): _122.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _122.MsgChannelOpenConfirmAminoMsg): _122.MsgChannelOpenConfirm;
                    toAminoMsg(message: _122.MsgChannelOpenConfirm): _122.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _122.MsgChannelOpenConfirmProtoMsg): _122.MsgChannelOpenConfirm;
                    toProto(message: _122.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _122.MsgChannelOpenConfirm): _122.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _122.MsgChannelOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _122.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_122.MsgChannelOpenConfirmResponse>): _122.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _122.MsgChannelOpenConfirmResponseAmino): _122.MsgChannelOpenConfirmResponse;
                    toAmino(_: _122.MsgChannelOpenConfirmResponse): _122.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _122.MsgChannelOpenConfirmResponseAminoMsg): _122.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _122.MsgChannelOpenConfirmResponse): _122.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _122.MsgChannelOpenConfirmResponseProtoMsg): _122.MsgChannelOpenConfirmResponse;
                    toProto(message: _122.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _122.MsgChannelOpenConfirmResponse): _122.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    encode(message: _122.MsgChannelCloseInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.MsgChannelCloseInit;
                    fromPartial(object: Partial<_122.MsgChannelCloseInit>): _122.MsgChannelCloseInit;
                    fromAmino(object: _122.MsgChannelCloseInitAmino): _122.MsgChannelCloseInit;
                    toAmino(message: _122.MsgChannelCloseInit): _122.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _122.MsgChannelCloseInitAminoMsg): _122.MsgChannelCloseInit;
                    toAminoMsg(message: _122.MsgChannelCloseInit): _122.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _122.MsgChannelCloseInitProtoMsg): _122.MsgChannelCloseInit;
                    toProto(message: _122.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _122.MsgChannelCloseInit): _122.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    encode(_: _122.MsgChannelCloseInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _122.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_122.MsgChannelCloseInitResponse>): _122.MsgChannelCloseInitResponse;
                    fromAmino(_: _122.MsgChannelCloseInitResponseAmino): _122.MsgChannelCloseInitResponse;
                    toAmino(_: _122.MsgChannelCloseInitResponse): _122.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _122.MsgChannelCloseInitResponseAminoMsg): _122.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _122.MsgChannelCloseInitResponse): _122.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _122.MsgChannelCloseInitResponseProtoMsg): _122.MsgChannelCloseInitResponse;
                    toProto(message: _122.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _122.MsgChannelCloseInitResponse): _122.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    encode(message: _122.MsgChannelCloseConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_122.MsgChannelCloseConfirm>): _122.MsgChannelCloseConfirm;
                    fromAmino(object: _122.MsgChannelCloseConfirmAmino): _122.MsgChannelCloseConfirm;
                    toAmino(message: _122.MsgChannelCloseConfirm): _122.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _122.MsgChannelCloseConfirmAminoMsg): _122.MsgChannelCloseConfirm;
                    toAminoMsg(message: _122.MsgChannelCloseConfirm): _122.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _122.MsgChannelCloseConfirmProtoMsg): _122.MsgChannelCloseConfirm;
                    toProto(message: _122.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _122.MsgChannelCloseConfirm): _122.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    encode(_: _122.MsgChannelCloseConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _122.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_122.MsgChannelCloseConfirmResponse>): _122.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _122.MsgChannelCloseConfirmResponseAmino): _122.MsgChannelCloseConfirmResponse;
                    toAmino(_: _122.MsgChannelCloseConfirmResponse): _122.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _122.MsgChannelCloseConfirmResponseAminoMsg): _122.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _122.MsgChannelCloseConfirmResponse): _122.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _122.MsgChannelCloseConfirmResponseProtoMsg): _122.MsgChannelCloseConfirmResponse;
                    toProto(message: _122.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _122.MsgChannelCloseConfirmResponse): _122.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    encode(message: _122.MsgRecvPacket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.MsgRecvPacket;
                    fromPartial(object: Partial<_122.MsgRecvPacket>): _122.MsgRecvPacket;
                    fromAmino(object: _122.MsgRecvPacketAmino): _122.MsgRecvPacket;
                    toAmino(message: _122.MsgRecvPacket): _122.MsgRecvPacketAmino;
                    fromAminoMsg(object: _122.MsgRecvPacketAminoMsg): _122.MsgRecvPacket;
                    toAminoMsg(message: _122.MsgRecvPacket): _122.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _122.MsgRecvPacketProtoMsg): _122.MsgRecvPacket;
                    toProto(message: _122.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _122.MsgRecvPacket): _122.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    encode(message: _122.MsgRecvPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.MsgRecvPacketResponse;
                    fromPartial(object: Partial<_122.MsgRecvPacketResponse>): _122.MsgRecvPacketResponse;
                    fromAmino(object: _122.MsgRecvPacketResponseAmino): _122.MsgRecvPacketResponse;
                    toAmino(message: _122.MsgRecvPacketResponse): _122.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _122.MsgRecvPacketResponseAminoMsg): _122.MsgRecvPacketResponse;
                    toAminoMsg(message: _122.MsgRecvPacketResponse): _122.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _122.MsgRecvPacketResponseProtoMsg): _122.MsgRecvPacketResponse;
                    toProto(message: _122.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _122.MsgRecvPacketResponse): _122.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    encode(message: _122.MsgTimeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.MsgTimeout;
                    fromPartial(object: Partial<_122.MsgTimeout>): _122.MsgTimeout;
                    fromAmino(object: _122.MsgTimeoutAmino): _122.MsgTimeout;
                    toAmino(message: _122.MsgTimeout): _122.MsgTimeoutAmino;
                    fromAminoMsg(object: _122.MsgTimeoutAminoMsg): _122.MsgTimeout;
                    toAminoMsg(message: _122.MsgTimeout): _122.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _122.MsgTimeoutProtoMsg): _122.MsgTimeout;
                    toProto(message: _122.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _122.MsgTimeout): _122.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    encode(message: _122.MsgTimeoutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.MsgTimeoutResponse;
                    fromPartial(object: Partial<_122.MsgTimeoutResponse>): _122.MsgTimeoutResponse;
                    fromAmino(object: _122.MsgTimeoutResponseAmino): _122.MsgTimeoutResponse;
                    toAmino(message: _122.MsgTimeoutResponse): _122.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _122.MsgTimeoutResponseAminoMsg): _122.MsgTimeoutResponse;
                    toAminoMsg(message: _122.MsgTimeoutResponse): _122.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _122.MsgTimeoutResponseProtoMsg): _122.MsgTimeoutResponse;
                    toProto(message: _122.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _122.MsgTimeoutResponse): _122.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    encode(message: _122.MsgTimeoutOnClose, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_122.MsgTimeoutOnClose>): _122.MsgTimeoutOnClose;
                    fromAmino(object: _122.MsgTimeoutOnCloseAmino): _122.MsgTimeoutOnClose;
                    toAmino(message: _122.MsgTimeoutOnClose): _122.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _122.MsgTimeoutOnCloseAminoMsg): _122.MsgTimeoutOnClose;
                    toAminoMsg(message: _122.MsgTimeoutOnClose): _122.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _122.MsgTimeoutOnCloseProtoMsg): _122.MsgTimeoutOnClose;
                    toProto(message: _122.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _122.MsgTimeoutOnClose): _122.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    encode(message: _122.MsgTimeoutOnCloseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.MsgTimeoutOnCloseResponse;
                    fromPartial(object: Partial<_122.MsgTimeoutOnCloseResponse>): _122.MsgTimeoutOnCloseResponse;
                    fromAmino(object: _122.MsgTimeoutOnCloseResponseAmino): _122.MsgTimeoutOnCloseResponse;
                    toAmino(message: _122.MsgTimeoutOnCloseResponse): _122.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _122.MsgTimeoutOnCloseResponseAminoMsg): _122.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _122.MsgTimeoutOnCloseResponse): _122.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _122.MsgTimeoutOnCloseResponseProtoMsg): _122.MsgTimeoutOnCloseResponse;
                    toProto(message: _122.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _122.MsgTimeoutOnCloseResponse): _122.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    encode(message: _122.MsgAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.MsgAcknowledgement;
                    fromPartial(object: Partial<_122.MsgAcknowledgement>): _122.MsgAcknowledgement;
                    fromAmino(object: _122.MsgAcknowledgementAmino): _122.MsgAcknowledgement;
                    toAmino(message: _122.MsgAcknowledgement): _122.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _122.MsgAcknowledgementAminoMsg): _122.MsgAcknowledgement;
                    toAminoMsg(message: _122.MsgAcknowledgement): _122.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _122.MsgAcknowledgementProtoMsg): _122.MsgAcknowledgement;
                    toProto(message: _122.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _122.MsgAcknowledgement): _122.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _122.MsgAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.MsgAcknowledgementResponse;
                    fromPartial(object: Partial<_122.MsgAcknowledgementResponse>): _122.MsgAcknowledgementResponse;
                    fromAmino(object: _122.MsgAcknowledgementResponseAmino): _122.MsgAcknowledgementResponse;
                    toAmino(message: _122.MsgAcknowledgementResponse): _122.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _122.MsgAcknowledgementResponseAminoMsg): _122.MsgAcknowledgementResponse;
                    toAminoMsg(message: _122.MsgAcknowledgementResponse): _122.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _122.MsgAcknowledgementResponseProtoMsg): _122.MsgAcknowledgementResponse;
                    toProto(message: _122.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _122.MsgAcknowledgementResponse): _122.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    encode(message: _121.QueryChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryChannelRequest;
                    fromPartial(object: Partial<_121.QueryChannelRequest>): _121.QueryChannelRequest;
                    fromAmino(object: _121.QueryChannelRequestAmino): _121.QueryChannelRequest;
                    toAmino(message: _121.QueryChannelRequest): _121.QueryChannelRequestAmino;
                    fromAminoMsg(object: _121.QueryChannelRequestAminoMsg): _121.QueryChannelRequest;
                    toAminoMsg(message: _121.QueryChannelRequest): _121.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _121.QueryChannelRequestProtoMsg): _121.QueryChannelRequest;
                    toProto(message: _121.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _121.QueryChannelRequest): _121.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    encode(message: _121.QueryChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryChannelResponse;
                    fromPartial(object: Partial<_121.QueryChannelResponse>): _121.QueryChannelResponse;
                    fromAmino(object: _121.QueryChannelResponseAmino): _121.QueryChannelResponse;
                    toAmino(message: _121.QueryChannelResponse): _121.QueryChannelResponseAmino;
                    fromAminoMsg(object: _121.QueryChannelResponseAminoMsg): _121.QueryChannelResponse;
                    toAminoMsg(message: _121.QueryChannelResponse): _121.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _121.QueryChannelResponseProtoMsg): _121.QueryChannelResponse;
                    toProto(message: _121.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _121.QueryChannelResponse): _121.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    encode(message: _121.QueryChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryChannelsRequest;
                    fromPartial(object: Partial<_121.QueryChannelsRequest>): _121.QueryChannelsRequest;
                    fromAmino(object: _121.QueryChannelsRequestAmino): _121.QueryChannelsRequest;
                    toAmino(message: _121.QueryChannelsRequest): _121.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _121.QueryChannelsRequestAminoMsg): _121.QueryChannelsRequest;
                    toAminoMsg(message: _121.QueryChannelsRequest): _121.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _121.QueryChannelsRequestProtoMsg): _121.QueryChannelsRequest;
                    toProto(message: _121.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _121.QueryChannelsRequest): _121.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    encode(message: _121.QueryChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryChannelsResponse;
                    fromPartial(object: Partial<_121.QueryChannelsResponse>): _121.QueryChannelsResponse;
                    fromAmino(object: _121.QueryChannelsResponseAmino): _121.QueryChannelsResponse;
                    toAmino(message: _121.QueryChannelsResponse): _121.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _121.QueryChannelsResponseAminoMsg): _121.QueryChannelsResponse;
                    toAminoMsg(message: _121.QueryChannelsResponse): _121.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _121.QueryChannelsResponseProtoMsg): _121.QueryChannelsResponse;
                    toProto(message: _121.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _121.QueryChannelsResponse): _121.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    encode(message: _121.QueryConnectionChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryConnectionChannelsRequest;
                    fromPartial(object: Partial<_121.QueryConnectionChannelsRequest>): _121.QueryConnectionChannelsRequest;
                    fromAmino(object: _121.QueryConnectionChannelsRequestAmino): _121.QueryConnectionChannelsRequest;
                    toAmino(message: _121.QueryConnectionChannelsRequest): _121.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _121.QueryConnectionChannelsRequestAminoMsg): _121.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _121.QueryConnectionChannelsRequest): _121.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _121.QueryConnectionChannelsRequestProtoMsg): _121.QueryConnectionChannelsRequest;
                    toProto(message: _121.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _121.QueryConnectionChannelsRequest): _121.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    encode(message: _121.QueryConnectionChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryConnectionChannelsResponse;
                    fromPartial(object: Partial<_121.QueryConnectionChannelsResponse>): _121.QueryConnectionChannelsResponse;
                    fromAmino(object: _121.QueryConnectionChannelsResponseAmino): _121.QueryConnectionChannelsResponse;
                    toAmino(message: _121.QueryConnectionChannelsResponse): _121.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _121.QueryConnectionChannelsResponseAminoMsg): _121.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _121.QueryConnectionChannelsResponse): _121.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _121.QueryConnectionChannelsResponseProtoMsg): _121.QueryConnectionChannelsResponse;
                    toProto(message: _121.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _121.QueryConnectionChannelsResponse): _121.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    encode(message: _121.QueryChannelClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryChannelClientStateRequest;
                    fromPartial(object: Partial<_121.QueryChannelClientStateRequest>): _121.QueryChannelClientStateRequest;
                    fromAmino(object: _121.QueryChannelClientStateRequestAmino): _121.QueryChannelClientStateRequest;
                    toAmino(message: _121.QueryChannelClientStateRequest): _121.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _121.QueryChannelClientStateRequestAminoMsg): _121.QueryChannelClientStateRequest;
                    toAminoMsg(message: _121.QueryChannelClientStateRequest): _121.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _121.QueryChannelClientStateRequestProtoMsg): _121.QueryChannelClientStateRequest;
                    toProto(message: _121.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _121.QueryChannelClientStateRequest): _121.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    encode(message: _121.QueryChannelClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryChannelClientStateResponse;
                    fromPartial(object: Partial<_121.QueryChannelClientStateResponse>): _121.QueryChannelClientStateResponse;
                    fromAmino(object: _121.QueryChannelClientStateResponseAmino): _121.QueryChannelClientStateResponse;
                    toAmino(message: _121.QueryChannelClientStateResponse): _121.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _121.QueryChannelClientStateResponseAminoMsg): _121.QueryChannelClientStateResponse;
                    toAminoMsg(message: _121.QueryChannelClientStateResponse): _121.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _121.QueryChannelClientStateResponseProtoMsg): _121.QueryChannelClientStateResponse;
                    toProto(message: _121.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _121.QueryChannelClientStateResponse): _121.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _121.QueryChannelConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryChannelConsensusStateRequest;
                    fromPartial(object: Partial<_121.QueryChannelConsensusStateRequest>): _121.QueryChannelConsensusStateRequest;
                    fromAmino(object: _121.QueryChannelConsensusStateRequestAmino): _121.QueryChannelConsensusStateRequest;
                    toAmino(message: _121.QueryChannelConsensusStateRequest): _121.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _121.QueryChannelConsensusStateRequestAminoMsg): _121.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _121.QueryChannelConsensusStateRequest): _121.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _121.QueryChannelConsensusStateRequestProtoMsg): _121.QueryChannelConsensusStateRequest;
                    toProto(message: _121.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _121.QueryChannelConsensusStateRequest): _121.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _121.QueryChannelConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryChannelConsensusStateResponse;
                    fromPartial(object: Partial<_121.QueryChannelConsensusStateResponse>): _121.QueryChannelConsensusStateResponse;
                    fromAmino(object: _121.QueryChannelConsensusStateResponseAmino): _121.QueryChannelConsensusStateResponse;
                    toAmino(message: _121.QueryChannelConsensusStateResponse): _121.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _121.QueryChannelConsensusStateResponseAminoMsg): _121.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _121.QueryChannelConsensusStateResponse): _121.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _121.QueryChannelConsensusStateResponseProtoMsg): _121.QueryChannelConsensusStateResponse;
                    toProto(message: _121.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _121.QueryChannelConsensusStateResponse): _121.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    encode(message: _121.QueryPacketCommitmentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryPacketCommitmentRequest;
                    fromPartial(object: Partial<_121.QueryPacketCommitmentRequest>): _121.QueryPacketCommitmentRequest;
                    fromAmino(object: _121.QueryPacketCommitmentRequestAmino): _121.QueryPacketCommitmentRequest;
                    toAmino(message: _121.QueryPacketCommitmentRequest): _121.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _121.QueryPacketCommitmentRequestAminoMsg): _121.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _121.QueryPacketCommitmentRequest): _121.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _121.QueryPacketCommitmentRequestProtoMsg): _121.QueryPacketCommitmentRequest;
                    toProto(message: _121.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _121.QueryPacketCommitmentRequest): _121.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    encode(message: _121.QueryPacketCommitmentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryPacketCommitmentResponse;
                    fromPartial(object: Partial<_121.QueryPacketCommitmentResponse>): _121.QueryPacketCommitmentResponse;
                    fromAmino(object: _121.QueryPacketCommitmentResponseAmino): _121.QueryPacketCommitmentResponse;
                    toAmino(message: _121.QueryPacketCommitmentResponse): _121.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _121.QueryPacketCommitmentResponseAminoMsg): _121.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _121.QueryPacketCommitmentResponse): _121.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _121.QueryPacketCommitmentResponseProtoMsg): _121.QueryPacketCommitmentResponse;
                    toProto(message: _121.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _121.QueryPacketCommitmentResponse): _121.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    encode(message: _121.QueryPacketCommitmentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryPacketCommitmentsRequest;
                    fromPartial(object: Partial<_121.QueryPacketCommitmentsRequest>): _121.QueryPacketCommitmentsRequest;
                    fromAmino(object: _121.QueryPacketCommitmentsRequestAmino): _121.QueryPacketCommitmentsRequest;
                    toAmino(message: _121.QueryPacketCommitmentsRequest): _121.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _121.QueryPacketCommitmentsRequestAminoMsg): _121.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _121.QueryPacketCommitmentsRequest): _121.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _121.QueryPacketCommitmentsRequestProtoMsg): _121.QueryPacketCommitmentsRequest;
                    toProto(message: _121.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _121.QueryPacketCommitmentsRequest): _121.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    encode(message: _121.QueryPacketCommitmentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryPacketCommitmentsResponse;
                    fromPartial(object: Partial<_121.QueryPacketCommitmentsResponse>): _121.QueryPacketCommitmentsResponse;
                    fromAmino(object: _121.QueryPacketCommitmentsResponseAmino): _121.QueryPacketCommitmentsResponse;
                    toAmino(message: _121.QueryPacketCommitmentsResponse): _121.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _121.QueryPacketCommitmentsResponseAminoMsg): _121.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _121.QueryPacketCommitmentsResponse): _121.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _121.QueryPacketCommitmentsResponseProtoMsg): _121.QueryPacketCommitmentsResponse;
                    toProto(message: _121.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _121.QueryPacketCommitmentsResponse): _121.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    encode(message: _121.QueryPacketReceiptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryPacketReceiptRequest;
                    fromPartial(object: Partial<_121.QueryPacketReceiptRequest>): _121.QueryPacketReceiptRequest;
                    fromAmino(object: _121.QueryPacketReceiptRequestAmino): _121.QueryPacketReceiptRequest;
                    toAmino(message: _121.QueryPacketReceiptRequest): _121.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _121.QueryPacketReceiptRequestAminoMsg): _121.QueryPacketReceiptRequest;
                    toAminoMsg(message: _121.QueryPacketReceiptRequest): _121.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _121.QueryPacketReceiptRequestProtoMsg): _121.QueryPacketReceiptRequest;
                    toProto(message: _121.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _121.QueryPacketReceiptRequest): _121.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    encode(message: _121.QueryPacketReceiptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryPacketReceiptResponse;
                    fromPartial(object: Partial<_121.QueryPacketReceiptResponse>): _121.QueryPacketReceiptResponse;
                    fromAmino(object: _121.QueryPacketReceiptResponseAmino): _121.QueryPacketReceiptResponse;
                    toAmino(message: _121.QueryPacketReceiptResponse): _121.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _121.QueryPacketReceiptResponseAminoMsg): _121.QueryPacketReceiptResponse;
                    toAminoMsg(message: _121.QueryPacketReceiptResponse): _121.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _121.QueryPacketReceiptResponseProtoMsg): _121.QueryPacketReceiptResponse;
                    toProto(message: _121.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _121.QueryPacketReceiptResponse): _121.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    encode(message: _121.QueryPacketAcknowledgementRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryPacketAcknowledgementRequest;
                    fromPartial(object: Partial<_121.QueryPacketAcknowledgementRequest>): _121.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _121.QueryPacketAcknowledgementRequestAmino): _121.QueryPacketAcknowledgementRequest;
                    toAmino(message: _121.QueryPacketAcknowledgementRequest): _121.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _121.QueryPacketAcknowledgementRequestAminoMsg): _121.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _121.QueryPacketAcknowledgementRequest): _121.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _121.QueryPacketAcknowledgementRequestProtoMsg): _121.QueryPacketAcknowledgementRequest;
                    toProto(message: _121.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _121.QueryPacketAcknowledgementRequest): _121.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _121.QueryPacketAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryPacketAcknowledgementResponse;
                    fromPartial(object: Partial<_121.QueryPacketAcknowledgementResponse>): _121.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _121.QueryPacketAcknowledgementResponseAmino): _121.QueryPacketAcknowledgementResponse;
                    toAmino(message: _121.QueryPacketAcknowledgementResponse): _121.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _121.QueryPacketAcknowledgementResponseAminoMsg): _121.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _121.QueryPacketAcknowledgementResponse): _121.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _121.QueryPacketAcknowledgementResponseProtoMsg): _121.QueryPacketAcknowledgementResponse;
                    toProto(message: _121.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _121.QueryPacketAcknowledgementResponse): _121.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    encode(message: _121.QueryPacketAcknowledgementsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: Partial<_121.QueryPacketAcknowledgementsRequest>): _121.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _121.QueryPacketAcknowledgementsRequestAmino): _121.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _121.QueryPacketAcknowledgementsRequest): _121.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _121.QueryPacketAcknowledgementsRequestAminoMsg): _121.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _121.QueryPacketAcknowledgementsRequest): _121.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _121.QueryPacketAcknowledgementsRequestProtoMsg): _121.QueryPacketAcknowledgementsRequest;
                    toProto(message: _121.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _121.QueryPacketAcknowledgementsRequest): _121.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    encode(message: _121.QueryPacketAcknowledgementsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: Partial<_121.QueryPacketAcknowledgementsResponse>): _121.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _121.QueryPacketAcknowledgementsResponseAmino): _121.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _121.QueryPacketAcknowledgementsResponse): _121.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _121.QueryPacketAcknowledgementsResponseAminoMsg): _121.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _121.QueryPacketAcknowledgementsResponse): _121.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _121.QueryPacketAcknowledgementsResponseProtoMsg): _121.QueryPacketAcknowledgementsResponse;
                    toProto(message: _121.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _121.QueryPacketAcknowledgementsResponse): _121.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _121.QueryUnreceivedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryUnreceivedPacketsRequest;
                    fromPartial(object: Partial<_121.QueryUnreceivedPacketsRequest>): _121.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _121.QueryUnreceivedPacketsRequestAmino): _121.QueryUnreceivedPacketsRequest;
                    toAmino(message: _121.QueryUnreceivedPacketsRequest): _121.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _121.QueryUnreceivedPacketsRequestAminoMsg): _121.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _121.QueryUnreceivedPacketsRequest): _121.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _121.QueryUnreceivedPacketsRequestProtoMsg): _121.QueryUnreceivedPacketsRequest;
                    toProto(message: _121.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _121.QueryUnreceivedPacketsRequest): _121.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _121.QueryUnreceivedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryUnreceivedPacketsResponse;
                    fromPartial(object: Partial<_121.QueryUnreceivedPacketsResponse>): _121.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _121.QueryUnreceivedPacketsResponseAmino): _121.QueryUnreceivedPacketsResponse;
                    toAmino(message: _121.QueryUnreceivedPacketsResponse): _121.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _121.QueryUnreceivedPacketsResponseAminoMsg): _121.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _121.QueryUnreceivedPacketsResponse): _121.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _121.QueryUnreceivedPacketsResponseProtoMsg): _121.QueryUnreceivedPacketsResponse;
                    toProto(message: _121.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _121.QueryUnreceivedPacketsResponse): _121.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    encode(message: _121.QueryUnreceivedAcksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryUnreceivedAcksRequest;
                    fromPartial(object: Partial<_121.QueryUnreceivedAcksRequest>): _121.QueryUnreceivedAcksRequest;
                    fromAmino(object: _121.QueryUnreceivedAcksRequestAmino): _121.QueryUnreceivedAcksRequest;
                    toAmino(message: _121.QueryUnreceivedAcksRequest): _121.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _121.QueryUnreceivedAcksRequestAminoMsg): _121.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _121.QueryUnreceivedAcksRequest): _121.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _121.QueryUnreceivedAcksRequestProtoMsg): _121.QueryUnreceivedAcksRequest;
                    toProto(message: _121.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _121.QueryUnreceivedAcksRequest): _121.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    encode(message: _121.QueryUnreceivedAcksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryUnreceivedAcksResponse;
                    fromPartial(object: Partial<_121.QueryUnreceivedAcksResponse>): _121.QueryUnreceivedAcksResponse;
                    fromAmino(object: _121.QueryUnreceivedAcksResponseAmino): _121.QueryUnreceivedAcksResponse;
                    toAmino(message: _121.QueryUnreceivedAcksResponse): _121.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _121.QueryUnreceivedAcksResponseAminoMsg): _121.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _121.QueryUnreceivedAcksResponse): _121.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _121.QueryUnreceivedAcksResponseProtoMsg): _121.QueryUnreceivedAcksResponse;
                    toProto(message: _121.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _121.QueryUnreceivedAcksResponse): _121.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    encode(message: _121.QueryNextSequenceReceiveRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryNextSequenceReceiveRequest;
                    fromPartial(object: Partial<_121.QueryNextSequenceReceiveRequest>): _121.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _121.QueryNextSequenceReceiveRequestAmino): _121.QueryNextSequenceReceiveRequest;
                    toAmino(message: _121.QueryNextSequenceReceiveRequest): _121.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _121.QueryNextSequenceReceiveRequestAminoMsg): _121.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _121.QueryNextSequenceReceiveRequest): _121.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _121.QueryNextSequenceReceiveRequestProtoMsg): _121.QueryNextSequenceReceiveRequest;
                    toProto(message: _121.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _121.QueryNextSequenceReceiveRequest): _121.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    encode(message: _121.QueryNextSequenceReceiveResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.QueryNextSequenceReceiveResponse;
                    fromPartial(object: Partial<_121.QueryNextSequenceReceiveResponse>): _121.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _121.QueryNextSequenceReceiveResponseAmino): _121.QueryNextSequenceReceiveResponse;
                    toAmino(message: _121.QueryNextSequenceReceiveResponse): _121.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _121.QueryNextSequenceReceiveResponseAminoMsg): _121.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _121.QueryNextSequenceReceiveResponse): _121.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _121.QueryNextSequenceReceiveResponseProtoMsg): _121.QueryNextSequenceReceiveResponse;
                    toProto(message: _121.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _121.QueryNextSequenceReceiveResponse): _121.QueryNextSequenceReceiveResponseProtoMsg;
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
                PacketSequence: {
                    typeUrl: string;
                    encode(message: _120.PacketSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _120.PacketSequence;
                    fromPartial(object: Partial<_120.PacketSequence>): _120.PacketSequence;
                    fromAmino(object: _120.PacketSequenceAmino): _120.PacketSequence;
                    toAmino(message: _120.PacketSequence): _120.PacketSequenceAmino;
                    fromAminoMsg(object: _120.PacketSequenceAminoMsg): _120.PacketSequence;
                    toAminoMsg(message: _120.PacketSequence): _120.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _120.PacketSequenceProtoMsg): _120.PacketSequence;
                    toProto(message: _120.PacketSequence): Uint8Array;
                    toProtoMsg(message: _120.PacketSequence): _120.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _119.State;
                stateToJSON(object: _119.State): string;
                orderFromJSON(object: any): _119.Order;
                orderToJSON(object: _119.Order): string;
                State: typeof _119.State;
                StateSDKType: typeof _119.State;
                StateAmino: typeof _119.State;
                Order: typeof _119.Order;
                OrderSDKType: typeof _119.Order;
                OrderAmino: typeof _119.Order;
                Channel: {
                    typeUrl: string;
                    encode(message: _119.Channel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.Channel;
                    fromPartial(object: Partial<_119.Channel>): _119.Channel;
                    fromAmino(object: _119.ChannelAmino): _119.Channel;
                    toAmino(message: _119.Channel): _119.ChannelAmino;
                    fromAminoMsg(object: _119.ChannelAminoMsg): _119.Channel;
                    toAminoMsg(message: _119.Channel): _119.ChannelAminoMsg;
                    fromProtoMsg(message: _119.ChannelProtoMsg): _119.Channel;
                    toProto(message: _119.Channel): Uint8Array;
                    toProtoMsg(message: _119.Channel): _119.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    encode(message: _119.IdentifiedChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.IdentifiedChannel;
                    fromPartial(object: Partial<_119.IdentifiedChannel>): _119.IdentifiedChannel;
                    fromAmino(object: _119.IdentifiedChannelAmino): _119.IdentifiedChannel;
                    toAmino(message: _119.IdentifiedChannel): _119.IdentifiedChannelAmino;
                    fromAminoMsg(object: _119.IdentifiedChannelAminoMsg): _119.IdentifiedChannel;
                    toAminoMsg(message: _119.IdentifiedChannel): _119.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _119.IdentifiedChannelProtoMsg): _119.IdentifiedChannel;
                    toProto(message: _119.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _119.IdentifiedChannel): _119.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _119.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.Counterparty;
                    fromPartial(object: Partial<_119.Counterparty>): _119.Counterparty;
                    fromAmino(object: _119.CounterpartyAmino): _119.Counterparty;
                    toAmino(message: _119.Counterparty): _119.CounterpartyAmino;
                    fromAminoMsg(object: _119.CounterpartyAminoMsg): _119.Counterparty;
                    toAminoMsg(message: _119.Counterparty): _119.CounterpartyAminoMsg;
                    fromProtoMsg(message: _119.CounterpartyProtoMsg): _119.Counterparty;
                    toProto(message: _119.Counterparty): Uint8Array;
                    toProtoMsg(message: _119.Counterparty): _119.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    encode(message: _119.Packet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.Packet;
                    fromPartial(object: Partial<_119.Packet>): _119.Packet;
                    fromAmino(object: _119.PacketAmino): _119.Packet;
                    toAmino(message: _119.Packet): _119.PacketAmino;
                    fromAminoMsg(object: _119.PacketAminoMsg): _119.Packet;
                    toAminoMsg(message: _119.Packet): _119.PacketAminoMsg;
                    fromProtoMsg(message: _119.PacketProtoMsg): _119.Packet;
                    toProto(message: _119.Packet): Uint8Array;
                    toProtoMsg(message: _119.Packet): _119.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    encode(message: _119.PacketState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.PacketState;
                    fromPartial(object: Partial<_119.PacketState>): _119.PacketState;
                    fromAmino(object: _119.PacketStateAmino): _119.PacketState;
                    toAmino(message: _119.PacketState): _119.PacketStateAmino;
                    fromAminoMsg(object: _119.PacketStateAminoMsg): _119.PacketState;
                    toAminoMsg(message: _119.PacketState): _119.PacketStateAminoMsg;
                    fromProtoMsg(message: _119.PacketStateProtoMsg): _119.PacketState;
                    toProto(message: _119.PacketState): Uint8Array;
                    toProtoMsg(message: _119.PacketState): _119.PacketStateProtoMsg;
                };
                PacketId: {
                    typeUrl: string;
                    encode(message: _119.PacketId, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.PacketId;
                    fromPartial(object: Partial<_119.PacketId>): _119.PacketId;
                    fromAmino(object: _119.PacketIdAmino): _119.PacketId;
                    toAmino(message: _119.PacketId): _119.PacketIdAmino;
                    fromAminoMsg(object: _119.PacketIdAminoMsg): _119.PacketId;
                    toAminoMsg(message: _119.PacketId): _119.PacketIdAminoMsg;
                    fromProtoMsg(message: _119.PacketIdProtoMsg): _119.PacketId;
                    toProto(message: _119.PacketId): Uint8Array;
                    toProtoMsg(message: _119.PacketId): _119.PacketIdProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    encode(message: _119.Acknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.Acknowledgement;
                    fromPartial(object: Partial<_119.Acknowledgement>): _119.Acknowledgement;
                    fromAmino(object: _119.AcknowledgementAmino): _119.Acknowledgement;
                    toAmino(message: _119.Acknowledgement): _119.AcknowledgementAmino;
                    fromAminoMsg(object: _119.AcknowledgementAminoMsg): _119.Acknowledgement;
                    toAminoMsg(message: _119.Acknowledgement): _119.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _119.AcknowledgementProtoMsg): _119.Acknowledgement;
                    toProto(message: _119.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _119.Acknowledgement): _119.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _284.MsgClientImpl;
                QueryClientImpl: typeof _279.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _125.QueryClientStateRequest): Promise<_125.QueryClientStateResponse>;
                    clientStates(request?: _125.QueryClientStatesRequest): Promise<_125.QueryClientStatesResponse>;
                    consensusState(request: _125.QueryConsensusStateRequest): Promise<_125.QueryConsensusStateResponse>;
                    consensusStates(request: _125.QueryConsensusStatesRequest): Promise<_125.QueryConsensusStatesResponse>;
                    consensusStateHeights(request: _125.QueryConsensusStateHeightsRequest): Promise<_125.QueryConsensusStateHeightsResponse>;
                    clientStatus(request: _125.QueryClientStatusRequest): Promise<_125.QueryClientStatusResponse>;
                    clientParams(request?: _125.QueryClientParamsRequest): Promise<_125.QueryClientParamsResponse>;
                    upgradedClientState(request?: _125.QueryUpgradedClientStateRequest): Promise<_125.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _125.QueryUpgradedConsensusStateRequest): Promise<_125.QueryUpgradedConsensusStateResponse>;
                };
                LCDQueryClient: typeof _272.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _126.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _126.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _126.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _126.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _126.MsgCreateClient): {
                            typeUrl: string;
                            value: _126.MsgCreateClient;
                        };
                        updateClient(value: _126.MsgUpdateClient): {
                            typeUrl: string;
                            value: _126.MsgUpdateClient;
                        };
                        upgradeClient(value: _126.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _126.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _126.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _126.MsgSubmitMisbehaviour;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _126.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _126.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _126.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _126.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _126.MsgCreateClient): {
                            typeUrl: string;
                            value: _126.MsgCreateClient;
                        };
                        updateClient(value: _126.MsgUpdateClient): {
                            typeUrl: string;
                            value: _126.MsgUpdateClient;
                        };
                        upgradeClient(value: _126.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _126.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _126.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _126.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _126.MsgCreateClient) => _126.MsgCreateClientAmino;
                        fromAmino: (object: _126.MsgCreateClientAmino) => _126.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _126.MsgUpdateClient) => _126.MsgUpdateClientAmino;
                        fromAmino: (object: _126.MsgUpdateClientAmino) => _126.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _126.MsgUpgradeClient) => _126.MsgUpgradeClientAmino;
                        fromAmino: (object: _126.MsgUpgradeClientAmino) => _126.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _126.MsgSubmitMisbehaviour) => _126.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _126.MsgSubmitMisbehaviourAmino) => _126.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    encode(message: _126.MsgCreateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _126.MsgCreateClient;
                    fromPartial(object: Partial<_126.MsgCreateClient>): _126.MsgCreateClient;
                    fromAmino(object: _126.MsgCreateClientAmino): _126.MsgCreateClient;
                    toAmino(message: _126.MsgCreateClient): _126.MsgCreateClientAmino;
                    fromAminoMsg(object: _126.MsgCreateClientAminoMsg): _126.MsgCreateClient;
                    toAminoMsg(message: _126.MsgCreateClient): _126.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _126.MsgCreateClientProtoMsg): _126.MsgCreateClient;
                    toProto(message: _126.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _126.MsgCreateClient): _126.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    encode(_: _126.MsgCreateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _126.MsgCreateClientResponse;
                    fromPartial(_: Partial<_126.MsgCreateClientResponse>): _126.MsgCreateClientResponse;
                    fromAmino(_: _126.MsgCreateClientResponseAmino): _126.MsgCreateClientResponse;
                    toAmino(_: _126.MsgCreateClientResponse): _126.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _126.MsgCreateClientResponseAminoMsg): _126.MsgCreateClientResponse;
                    toAminoMsg(message: _126.MsgCreateClientResponse): _126.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _126.MsgCreateClientResponseProtoMsg): _126.MsgCreateClientResponse;
                    toProto(message: _126.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _126.MsgCreateClientResponse): _126.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    encode(message: _126.MsgUpdateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _126.MsgUpdateClient;
                    fromPartial(object: Partial<_126.MsgUpdateClient>): _126.MsgUpdateClient;
                    fromAmino(object: _126.MsgUpdateClientAmino): _126.MsgUpdateClient;
                    toAmino(message: _126.MsgUpdateClient): _126.MsgUpdateClientAmino;
                    fromAminoMsg(object: _126.MsgUpdateClientAminoMsg): _126.MsgUpdateClient;
                    toAminoMsg(message: _126.MsgUpdateClient): _126.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _126.MsgUpdateClientProtoMsg): _126.MsgUpdateClient;
                    toProto(message: _126.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _126.MsgUpdateClient): _126.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    encode(_: _126.MsgUpdateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _126.MsgUpdateClientResponse;
                    fromPartial(_: Partial<_126.MsgUpdateClientResponse>): _126.MsgUpdateClientResponse;
                    fromAmino(_: _126.MsgUpdateClientResponseAmino): _126.MsgUpdateClientResponse;
                    toAmino(_: _126.MsgUpdateClientResponse): _126.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _126.MsgUpdateClientResponseAminoMsg): _126.MsgUpdateClientResponse;
                    toAminoMsg(message: _126.MsgUpdateClientResponse): _126.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _126.MsgUpdateClientResponseProtoMsg): _126.MsgUpdateClientResponse;
                    toProto(message: _126.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _126.MsgUpdateClientResponse): _126.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    encode(message: _126.MsgUpgradeClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _126.MsgUpgradeClient;
                    fromPartial(object: Partial<_126.MsgUpgradeClient>): _126.MsgUpgradeClient;
                    fromAmino(object: _126.MsgUpgradeClientAmino): _126.MsgUpgradeClient;
                    toAmino(message: _126.MsgUpgradeClient): _126.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _126.MsgUpgradeClientAminoMsg): _126.MsgUpgradeClient;
                    toAminoMsg(message: _126.MsgUpgradeClient): _126.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _126.MsgUpgradeClientProtoMsg): _126.MsgUpgradeClient;
                    toProto(message: _126.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _126.MsgUpgradeClient): _126.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    encode(_: _126.MsgUpgradeClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _126.MsgUpgradeClientResponse;
                    fromPartial(_: Partial<_126.MsgUpgradeClientResponse>): _126.MsgUpgradeClientResponse;
                    fromAmino(_: _126.MsgUpgradeClientResponseAmino): _126.MsgUpgradeClientResponse;
                    toAmino(_: _126.MsgUpgradeClientResponse): _126.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _126.MsgUpgradeClientResponseAminoMsg): _126.MsgUpgradeClientResponse;
                    toAminoMsg(message: _126.MsgUpgradeClientResponse): _126.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _126.MsgUpgradeClientResponseProtoMsg): _126.MsgUpgradeClientResponse;
                    toProto(message: _126.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _126.MsgUpgradeClientResponse): _126.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    encode(message: _126.MsgSubmitMisbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _126.MsgSubmitMisbehaviour;
                    fromPartial(object: Partial<_126.MsgSubmitMisbehaviour>): _126.MsgSubmitMisbehaviour;
                    fromAmino(object: _126.MsgSubmitMisbehaviourAmino): _126.MsgSubmitMisbehaviour;
                    toAmino(message: _126.MsgSubmitMisbehaviour): _126.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _126.MsgSubmitMisbehaviourAminoMsg): _126.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _126.MsgSubmitMisbehaviour): _126.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _126.MsgSubmitMisbehaviourProtoMsg): _126.MsgSubmitMisbehaviour;
                    toProto(message: _126.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _126.MsgSubmitMisbehaviour): _126.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    encode(_: _126.MsgSubmitMisbehaviourResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _126.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: Partial<_126.MsgSubmitMisbehaviourResponse>): _126.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _126.MsgSubmitMisbehaviourResponseAmino): _126.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _126.MsgSubmitMisbehaviourResponse): _126.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _126.MsgSubmitMisbehaviourResponseAminoMsg): _126.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _126.MsgSubmitMisbehaviourResponse): _126.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _126.MsgSubmitMisbehaviourResponseProtoMsg): _126.MsgSubmitMisbehaviourResponse;
                    toProto(message: _126.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _126.MsgSubmitMisbehaviourResponse): _126.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    encode(message: _125.QueryClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.QueryClientStateRequest;
                    fromPartial(object: Partial<_125.QueryClientStateRequest>): _125.QueryClientStateRequest;
                    fromAmino(object: _125.QueryClientStateRequestAmino): _125.QueryClientStateRequest;
                    toAmino(message: _125.QueryClientStateRequest): _125.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _125.QueryClientStateRequestAminoMsg): _125.QueryClientStateRequest;
                    toAminoMsg(message: _125.QueryClientStateRequest): _125.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _125.QueryClientStateRequestProtoMsg): _125.QueryClientStateRequest;
                    toProto(message: _125.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _125.QueryClientStateRequest): _125.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    encode(message: _125.QueryClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.QueryClientStateResponse;
                    fromPartial(object: Partial<_125.QueryClientStateResponse>): _125.QueryClientStateResponse;
                    fromAmino(object: _125.QueryClientStateResponseAmino): _125.QueryClientStateResponse;
                    toAmino(message: _125.QueryClientStateResponse): _125.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _125.QueryClientStateResponseAminoMsg): _125.QueryClientStateResponse;
                    toAminoMsg(message: _125.QueryClientStateResponse): _125.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _125.QueryClientStateResponseProtoMsg): _125.QueryClientStateResponse;
                    toProto(message: _125.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _125.QueryClientStateResponse): _125.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    encode(message: _125.QueryClientStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.QueryClientStatesRequest;
                    fromPartial(object: Partial<_125.QueryClientStatesRequest>): _125.QueryClientStatesRequest;
                    fromAmino(object: _125.QueryClientStatesRequestAmino): _125.QueryClientStatesRequest;
                    toAmino(message: _125.QueryClientStatesRequest): _125.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _125.QueryClientStatesRequestAminoMsg): _125.QueryClientStatesRequest;
                    toAminoMsg(message: _125.QueryClientStatesRequest): _125.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _125.QueryClientStatesRequestProtoMsg): _125.QueryClientStatesRequest;
                    toProto(message: _125.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _125.QueryClientStatesRequest): _125.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    encode(message: _125.QueryClientStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.QueryClientStatesResponse;
                    fromPartial(object: Partial<_125.QueryClientStatesResponse>): _125.QueryClientStatesResponse;
                    fromAmino(object: _125.QueryClientStatesResponseAmino): _125.QueryClientStatesResponse;
                    toAmino(message: _125.QueryClientStatesResponse): _125.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _125.QueryClientStatesResponseAminoMsg): _125.QueryClientStatesResponse;
                    toAminoMsg(message: _125.QueryClientStatesResponse): _125.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _125.QueryClientStatesResponseProtoMsg): _125.QueryClientStatesResponse;
                    toProto(message: _125.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _125.QueryClientStatesResponse): _125.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _125.QueryConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_125.QueryConsensusStateRequest>): _125.QueryConsensusStateRequest;
                    fromAmino(object: _125.QueryConsensusStateRequestAmino): _125.QueryConsensusStateRequest;
                    toAmino(message: _125.QueryConsensusStateRequest): _125.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _125.QueryConsensusStateRequestAminoMsg): _125.QueryConsensusStateRequest;
                    toAminoMsg(message: _125.QueryConsensusStateRequest): _125.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _125.QueryConsensusStateRequestProtoMsg): _125.QueryConsensusStateRequest;
                    toProto(message: _125.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _125.QueryConsensusStateRequest): _125.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _125.QueryConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_125.QueryConsensusStateResponse>): _125.QueryConsensusStateResponse;
                    fromAmino(object: _125.QueryConsensusStateResponseAmino): _125.QueryConsensusStateResponse;
                    toAmino(message: _125.QueryConsensusStateResponse): _125.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _125.QueryConsensusStateResponseAminoMsg): _125.QueryConsensusStateResponse;
                    toAminoMsg(message: _125.QueryConsensusStateResponse): _125.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _125.QueryConsensusStateResponseProtoMsg): _125.QueryConsensusStateResponse;
                    toProto(message: _125.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _125.QueryConsensusStateResponse): _125.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    encode(message: _125.QueryConsensusStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_125.QueryConsensusStatesRequest>): _125.QueryConsensusStatesRequest;
                    fromAmino(object: _125.QueryConsensusStatesRequestAmino): _125.QueryConsensusStatesRequest;
                    toAmino(message: _125.QueryConsensusStatesRequest): _125.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _125.QueryConsensusStatesRequestAminoMsg): _125.QueryConsensusStatesRequest;
                    toAminoMsg(message: _125.QueryConsensusStatesRequest): _125.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _125.QueryConsensusStatesRequestProtoMsg): _125.QueryConsensusStatesRequest;
                    toProto(message: _125.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _125.QueryConsensusStatesRequest): _125.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    encode(message: _125.QueryConsensusStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_125.QueryConsensusStatesResponse>): _125.QueryConsensusStatesResponse;
                    fromAmino(object: _125.QueryConsensusStatesResponseAmino): _125.QueryConsensusStatesResponse;
                    toAmino(message: _125.QueryConsensusStatesResponse): _125.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _125.QueryConsensusStatesResponseAminoMsg): _125.QueryConsensusStatesResponse;
                    toAminoMsg(message: _125.QueryConsensusStatesResponse): _125.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _125.QueryConsensusStatesResponseProtoMsg): _125.QueryConsensusStatesResponse;
                    toProto(message: _125.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _125.QueryConsensusStatesResponse): _125.QueryConsensusStatesResponseProtoMsg;
                };
                QueryConsensusStateHeightsRequest: {
                    typeUrl: string;
                    encode(message: _125.QueryConsensusStateHeightsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.QueryConsensusStateHeightsRequest;
                    fromPartial(object: Partial<_125.QueryConsensusStateHeightsRequest>): _125.QueryConsensusStateHeightsRequest;
                    fromAmino(object: _125.QueryConsensusStateHeightsRequestAmino): _125.QueryConsensusStateHeightsRequest;
                    toAmino(message: _125.QueryConsensusStateHeightsRequest): _125.QueryConsensusStateHeightsRequestAmino;
                    fromAminoMsg(object: _125.QueryConsensusStateHeightsRequestAminoMsg): _125.QueryConsensusStateHeightsRequest;
                    toAminoMsg(message: _125.QueryConsensusStateHeightsRequest): _125.QueryConsensusStateHeightsRequestAminoMsg;
                    fromProtoMsg(message: _125.QueryConsensusStateHeightsRequestProtoMsg): _125.QueryConsensusStateHeightsRequest;
                    toProto(message: _125.QueryConsensusStateHeightsRequest): Uint8Array;
                    toProtoMsg(message: _125.QueryConsensusStateHeightsRequest): _125.QueryConsensusStateHeightsRequestProtoMsg;
                };
                QueryConsensusStateHeightsResponse: {
                    typeUrl: string;
                    encode(message: _125.QueryConsensusStateHeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.QueryConsensusStateHeightsResponse;
                    fromPartial(object: Partial<_125.QueryConsensusStateHeightsResponse>): _125.QueryConsensusStateHeightsResponse;
                    fromAmino(object: _125.QueryConsensusStateHeightsResponseAmino): _125.QueryConsensusStateHeightsResponse;
                    toAmino(message: _125.QueryConsensusStateHeightsResponse): _125.QueryConsensusStateHeightsResponseAmino;
                    fromAminoMsg(object: _125.QueryConsensusStateHeightsResponseAminoMsg): _125.QueryConsensusStateHeightsResponse;
                    toAminoMsg(message: _125.QueryConsensusStateHeightsResponse): _125.QueryConsensusStateHeightsResponseAminoMsg;
                    fromProtoMsg(message: _125.QueryConsensusStateHeightsResponseProtoMsg): _125.QueryConsensusStateHeightsResponse;
                    toProto(message: _125.QueryConsensusStateHeightsResponse): Uint8Array;
                    toProtoMsg(message: _125.QueryConsensusStateHeightsResponse): _125.QueryConsensusStateHeightsResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    encode(message: _125.QueryClientStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.QueryClientStatusRequest;
                    fromPartial(object: Partial<_125.QueryClientStatusRequest>): _125.QueryClientStatusRequest;
                    fromAmino(object: _125.QueryClientStatusRequestAmino): _125.QueryClientStatusRequest;
                    toAmino(message: _125.QueryClientStatusRequest): _125.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _125.QueryClientStatusRequestAminoMsg): _125.QueryClientStatusRequest;
                    toAminoMsg(message: _125.QueryClientStatusRequest): _125.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _125.QueryClientStatusRequestProtoMsg): _125.QueryClientStatusRequest;
                    toProto(message: _125.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _125.QueryClientStatusRequest): _125.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    encode(message: _125.QueryClientStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.QueryClientStatusResponse;
                    fromPartial(object: Partial<_125.QueryClientStatusResponse>): _125.QueryClientStatusResponse;
                    fromAmino(object: _125.QueryClientStatusResponseAmino): _125.QueryClientStatusResponse;
                    toAmino(message: _125.QueryClientStatusResponse): _125.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _125.QueryClientStatusResponseAminoMsg): _125.QueryClientStatusResponse;
                    toAminoMsg(message: _125.QueryClientStatusResponse): _125.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _125.QueryClientStatusResponseProtoMsg): _125.QueryClientStatusResponse;
                    toProto(message: _125.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _125.QueryClientStatusResponse): _125.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    encode(_: _125.QueryClientParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _125.QueryClientParamsRequest;
                    fromPartial(_: Partial<_125.QueryClientParamsRequest>): _125.QueryClientParamsRequest;
                    fromAmino(_: _125.QueryClientParamsRequestAmino): _125.QueryClientParamsRequest;
                    toAmino(_: _125.QueryClientParamsRequest): _125.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _125.QueryClientParamsRequestAminoMsg): _125.QueryClientParamsRequest;
                    toAminoMsg(message: _125.QueryClientParamsRequest): _125.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _125.QueryClientParamsRequestProtoMsg): _125.QueryClientParamsRequest;
                    toProto(message: _125.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _125.QueryClientParamsRequest): _125.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    encode(message: _125.QueryClientParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.QueryClientParamsResponse;
                    fromPartial(object: Partial<_125.QueryClientParamsResponse>): _125.QueryClientParamsResponse;
                    fromAmino(object: _125.QueryClientParamsResponseAmino): _125.QueryClientParamsResponse;
                    toAmino(message: _125.QueryClientParamsResponse): _125.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _125.QueryClientParamsResponseAminoMsg): _125.QueryClientParamsResponse;
                    toAminoMsg(message: _125.QueryClientParamsResponse): _125.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _125.QueryClientParamsResponseProtoMsg): _125.QueryClientParamsResponse;
                    toProto(message: _125.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _125.QueryClientParamsResponse): _125.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    encode(_: _125.QueryUpgradedClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _125.QueryUpgradedClientStateRequest;
                    fromPartial(_: Partial<_125.QueryUpgradedClientStateRequest>): _125.QueryUpgradedClientStateRequest;
                    fromAmino(_: _125.QueryUpgradedClientStateRequestAmino): _125.QueryUpgradedClientStateRequest;
                    toAmino(_: _125.QueryUpgradedClientStateRequest): _125.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _125.QueryUpgradedClientStateRequestAminoMsg): _125.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _125.QueryUpgradedClientStateRequest): _125.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _125.QueryUpgradedClientStateRequestProtoMsg): _125.QueryUpgradedClientStateRequest;
                    toProto(message: _125.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _125.QueryUpgradedClientStateRequest): _125.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    encode(message: _125.QueryUpgradedClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.QueryUpgradedClientStateResponse;
                    fromPartial(object: Partial<_125.QueryUpgradedClientStateResponse>): _125.QueryUpgradedClientStateResponse;
                    fromAmino(object: _125.QueryUpgradedClientStateResponseAmino): _125.QueryUpgradedClientStateResponse;
                    toAmino(message: _125.QueryUpgradedClientStateResponse): _125.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _125.QueryUpgradedClientStateResponseAminoMsg): _125.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _125.QueryUpgradedClientStateResponse): _125.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _125.QueryUpgradedClientStateResponseProtoMsg): _125.QueryUpgradedClientStateResponse;
                    toProto(message: _125.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _125.QueryUpgradedClientStateResponse): _125.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    encode(_: _125.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _125.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: Partial<_125.QueryUpgradedConsensusStateRequest>): _125.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _125.QueryUpgradedConsensusStateRequestAmino): _125.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _125.QueryUpgradedConsensusStateRequest): _125.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _125.QueryUpgradedConsensusStateRequestAminoMsg): _125.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _125.QueryUpgradedConsensusStateRequest): _125.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _125.QueryUpgradedConsensusStateRequestProtoMsg): _125.QueryUpgradedConsensusStateRequest;
                    toProto(message: _125.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _125.QueryUpgradedConsensusStateRequest): _125.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _125.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: Partial<_125.QueryUpgradedConsensusStateResponse>): _125.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _125.QueryUpgradedConsensusStateResponseAmino): _125.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _125.QueryUpgradedConsensusStateResponse): _125.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _125.QueryUpgradedConsensusStateResponseAminoMsg): _125.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _125.QueryUpgradedConsensusStateResponse): _125.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _125.QueryUpgradedConsensusStateResponseProtoMsg): _125.QueryUpgradedConsensusStateResponse;
                    toProto(message: _125.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _125.QueryUpgradedConsensusStateResponse): _125.QueryUpgradedConsensusStateResponseProtoMsg;
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
                GenesisMetadata: {
                    typeUrl: string;
                    encode(message: _124.GenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _124.GenesisMetadata;
                    fromPartial(object: Partial<_124.GenesisMetadata>): _124.GenesisMetadata;
                    fromAmino(object: _124.GenesisMetadataAmino): _124.GenesisMetadata;
                    toAmino(message: _124.GenesisMetadata): _124.GenesisMetadataAmino;
                    fromAminoMsg(object: _124.GenesisMetadataAminoMsg): _124.GenesisMetadata;
                    toAminoMsg(message: _124.GenesisMetadata): _124.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _124.GenesisMetadataProtoMsg): _124.GenesisMetadata;
                    toProto(message: _124.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _124.GenesisMetadata): _124.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    encode(message: _124.IdentifiedGenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _124.IdentifiedGenesisMetadata;
                    fromPartial(object: Partial<_124.IdentifiedGenesisMetadata>): _124.IdentifiedGenesisMetadata;
                    fromAmino(object: _124.IdentifiedGenesisMetadataAmino): _124.IdentifiedGenesisMetadata;
                    toAmino(message: _124.IdentifiedGenesisMetadata): _124.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _124.IdentifiedGenesisMetadataAminoMsg): _124.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _124.IdentifiedGenesisMetadata): _124.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _124.IdentifiedGenesisMetadataProtoMsg): _124.IdentifiedGenesisMetadata;
                    toProto(message: _124.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _124.IdentifiedGenesisMetadata): _124.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    encode(message: _123.IdentifiedClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.IdentifiedClientState;
                    fromPartial(object: Partial<_123.IdentifiedClientState>): _123.IdentifiedClientState;
                    fromAmino(object: _123.IdentifiedClientStateAmino): _123.IdentifiedClientState;
                    toAmino(message: _123.IdentifiedClientState): _123.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _123.IdentifiedClientStateAminoMsg): _123.IdentifiedClientState;
                    toAminoMsg(message: _123.IdentifiedClientState): _123.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _123.IdentifiedClientStateProtoMsg): _123.IdentifiedClientState;
                    toProto(message: _123.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _123.IdentifiedClientState): _123.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    encode(message: _123.ConsensusStateWithHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_123.ConsensusStateWithHeight>): _123.ConsensusStateWithHeight;
                    fromAmino(object: _123.ConsensusStateWithHeightAmino): _123.ConsensusStateWithHeight;
                    toAmino(message: _123.ConsensusStateWithHeight): _123.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _123.ConsensusStateWithHeightAminoMsg): _123.ConsensusStateWithHeight;
                    toAminoMsg(message: _123.ConsensusStateWithHeight): _123.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _123.ConsensusStateWithHeightProtoMsg): _123.ConsensusStateWithHeight;
                    toProto(message: _123.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _123.ConsensusStateWithHeight): _123.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    encode(message: _123.ClientConsensusStates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.ClientConsensusStates;
                    fromPartial(object: Partial<_123.ClientConsensusStates>): _123.ClientConsensusStates;
                    fromAmino(object: _123.ClientConsensusStatesAmino): _123.ClientConsensusStates;
                    toAmino(message: _123.ClientConsensusStates): _123.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _123.ClientConsensusStatesAminoMsg): _123.ClientConsensusStates;
                    toAminoMsg(message: _123.ClientConsensusStates): _123.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _123.ClientConsensusStatesProtoMsg): _123.ClientConsensusStates;
                    toProto(message: _123.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _123.ClientConsensusStates): _123.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    encode(message: _123.ClientUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.ClientUpdateProposal;
                    fromPartial(object: Partial<_123.ClientUpdateProposal>): _123.ClientUpdateProposal;
                    fromAmino(object: _123.ClientUpdateProposalAmino): _123.ClientUpdateProposal;
                    toAmino(message: _123.ClientUpdateProposal): _123.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _123.ClientUpdateProposalAminoMsg): _123.ClientUpdateProposal;
                    toAminoMsg(message: _123.ClientUpdateProposal): _123.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _123.ClientUpdateProposalProtoMsg): _123.ClientUpdateProposal;
                    toProto(message: _123.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _123.ClientUpdateProposal): _123.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    encode(message: _123.UpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.UpgradeProposal;
                    fromPartial(object: Partial<_123.UpgradeProposal>): _123.UpgradeProposal;
                    fromAmino(object: _123.UpgradeProposalAmino): _123.UpgradeProposal;
                    toAmino(message: _123.UpgradeProposal): _123.UpgradeProposalAmino;
                    fromAminoMsg(object: _123.UpgradeProposalAminoMsg): _123.UpgradeProposal;
                    toAminoMsg(message: _123.UpgradeProposal): _123.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _123.UpgradeProposalProtoMsg): _123.UpgradeProposal;
                    toProto(message: _123.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _123.UpgradeProposal): _123.UpgradeProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    encode(message: _123.Height, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.Height;
                    fromPartial(object: Partial<_123.Height>): _123.Height;
                    fromAmino(object: _123.HeightAmino): _123.Height;
                    toAmino(message: _123.Height): _123.HeightAmino;
                    fromAminoMsg(object: _123.HeightAminoMsg): _123.Height;
                    toAminoMsg(message: _123.Height): _123.HeightAminoMsg;
                    fromProtoMsg(message: _123.HeightProtoMsg): _123.Height;
                    toProto(message: _123.Height): Uint8Array;
                    toProtoMsg(message: _123.Height): _123.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _123.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.Params;
                    fromPartial(object: Partial<_123.Params>): _123.Params;
                    fromAmino(object: _123.ParamsAmino): _123.Params;
                    toAmino(message: _123.Params): _123.ParamsAmino;
                    fromAminoMsg(object: _123.ParamsAminoMsg): _123.Params;
                    toAminoMsg(message: _123.Params): _123.ParamsAminoMsg;
                    fromProtoMsg(message: _123.ParamsProtoMsg): _123.Params;
                    toProto(message: _123.Params): Uint8Array;
                    toProtoMsg(message: _123.Params): _123.ParamsProtoMsg;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    typeUrl: string;
                    encode(message: _127.MerkleRoot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _127.MerkleRoot;
                    fromPartial(object: Partial<_127.MerkleRoot>): _127.MerkleRoot;
                    fromAmino(object: _127.MerkleRootAmino): _127.MerkleRoot;
                    toAmino(message: _127.MerkleRoot): _127.MerkleRootAmino;
                    fromAminoMsg(object: _127.MerkleRootAminoMsg): _127.MerkleRoot;
                    toAminoMsg(message: _127.MerkleRoot): _127.MerkleRootAminoMsg;
                    fromProtoMsg(message: _127.MerkleRootProtoMsg): _127.MerkleRoot;
                    toProto(message: _127.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _127.MerkleRoot): _127.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    encode(message: _127.MerklePrefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _127.MerklePrefix;
                    fromPartial(object: Partial<_127.MerklePrefix>): _127.MerklePrefix;
                    fromAmino(object: _127.MerklePrefixAmino): _127.MerklePrefix;
                    toAmino(message: _127.MerklePrefix): _127.MerklePrefixAmino;
                    fromAminoMsg(object: _127.MerklePrefixAminoMsg): _127.MerklePrefix;
                    toAminoMsg(message: _127.MerklePrefix): _127.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _127.MerklePrefixProtoMsg): _127.MerklePrefix;
                    toProto(message: _127.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _127.MerklePrefix): _127.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    encode(message: _127.MerklePath, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _127.MerklePath;
                    fromPartial(object: Partial<_127.MerklePath>): _127.MerklePath;
                    fromAmino(object: _127.MerklePathAmino): _127.MerklePath;
                    toAmino(message: _127.MerklePath): _127.MerklePathAmino;
                    fromAminoMsg(object: _127.MerklePathAminoMsg): _127.MerklePath;
                    toAminoMsg(message: _127.MerklePath): _127.MerklePathAminoMsg;
                    fromProtoMsg(message: _127.MerklePathProtoMsg): _127.MerklePath;
                    toProto(message: _127.MerklePath): Uint8Array;
                    toProtoMsg(message: _127.MerklePath): _127.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    encode(message: _127.MerkleProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _127.MerkleProof;
                    fromPartial(object: Partial<_127.MerkleProof>): _127.MerkleProof;
                    fromAmino(object: _127.MerkleProofAmino): _127.MerkleProof;
                    toAmino(message: _127.MerkleProof): _127.MerkleProofAmino;
                    fromAminoMsg(object: _127.MerkleProofAminoMsg): _127.MerkleProof;
                    toAminoMsg(message: _127.MerkleProof): _127.MerkleProofAminoMsg;
                    fromProtoMsg(message: _127.MerkleProofProtoMsg): _127.MerkleProof;
                    toProto(message: _127.MerkleProof): Uint8Array;
                    toProtoMsg(message: _127.MerkleProof): _127.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _285.MsgClientImpl;
                QueryClientImpl: typeof _280.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _130.QueryConnectionRequest): Promise<_130.QueryConnectionResponse>;
                    connections(request?: _130.QueryConnectionsRequest): Promise<_130.QueryConnectionsResponse>;
                    clientConnections(request: _130.QueryClientConnectionsRequest): Promise<_130.QueryClientConnectionsResponse>;
                    connectionClientState(request: _130.QueryConnectionClientStateRequest): Promise<_130.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _130.QueryConnectionConsensusStateRequest): Promise<_130.QueryConnectionConsensusStateResponse>;
                };
                LCDQueryClient: typeof _273.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _131.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _131.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _131.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _131.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _131.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _131.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _131.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _131.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _131.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _131.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _131.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _131.MsgConnectionOpenConfirm;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _131.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _131.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _131.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _131.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _131.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _131.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _131.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _131.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _131.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _131.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _131.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _131.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _131.MsgConnectionOpenInit) => _131.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _131.MsgConnectionOpenInitAmino) => _131.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _131.MsgConnectionOpenTry) => _131.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _131.MsgConnectionOpenTryAmino) => _131.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _131.MsgConnectionOpenAck) => _131.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _131.MsgConnectionOpenAckAmino) => _131.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _131.MsgConnectionOpenConfirm) => _131.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _131.MsgConnectionOpenConfirmAmino) => _131.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    encode(message: _131.MsgConnectionOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.MsgConnectionOpenInit;
                    fromPartial(object: Partial<_131.MsgConnectionOpenInit>): _131.MsgConnectionOpenInit;
                    fromAmino(object: _131.MsgConnectionOpenInitAmino): _131.MsgConnectionOpenInit;
                    toAmino(message: _131.MsgConnectionOpenInit): _131.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _131.MsgConnectionOpenInitAminoMsg): _131.MsgConnectionOpenInit;
                    toAminoMsg(message: _131.MsgConnectionOpenInit): _131.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _131.MsgConnectionOpenInitProtoMsg): _131.MsgConnectionOpenInit;
                    toProto(message: _131.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _131.MsgConnectionOpenInit): _131.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _131.MsgConnectionOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _131.MsgConnectionOpenInitResponse;
                    fromPartial(_: Partial<_131.MsgConnectionOpenInitResponse>): _131.MsgConnectionOpenInitResponse;
                    fromAmino(_: _131.MsgConnectionOpenInitResponseAmino): _131.MsgConnectionOpenInitResponse;
                    toAmino(_: _131.MsgConnectionOpenInitResponse): _131.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _131.MsgConnectionOpenInitResponseAminoMsg): _131.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _131.MsgConnectionOpenInitResponse): _131.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _131.MsgConnectionOpenInitResponseProtoMsg): _131.MsgConnectionOpenInitResponse;
                    toProto(message: _131.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _131.MsgConnectionOpenInitResponse): _131.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    encode(message: _131.MsgConnectionOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.MsgConnectionOpenTry;
                    fromPartial(object: Partial<_131.MsgConnectionOpenTry>): _131.MsgConnectionOpenTry;
                    fromAmino(object: _131.MsgConnectionOpenTryAmino): _131.MsgConnectionOpenTry;
                    toAmino(message: _131.MsgConnectionOpenTry): _131.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _131.MsgConnectionOpenTryAminoMsg): _131.MsgConnectionOpenTry;
                    toAminoMsg(message: _131.MsgConnectionOpenTry): _131.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _131.MsgConnectionOpenTryProtoMsg): _131.MsgConnectionOpenTry;
                    toProto(message: _131.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _131.MsgConnectionOpenTry): _131.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _131.MsgConnectionOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _131.MsgConnectionOpenTryResponse;
                    fromPartial(_: Partial<_131.MsgConnectionOpenTryResponse>): _131.MsgConnectionOpenTryResponse;
                    fromAmino(_: _131.MsgConnectionOpenTryResponseAmino): _131.MsgConnectionOpenTryResponse;
                    toAmino(_: _131.MsgConnectionOpenTryResponse): _131.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _131.MsgConnectionOpenTryResponseAminoMsg): _131.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _131.MsgConnectionOpenTryResponse): _131.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _131.MsgConnectionOpenTryResponseProtoMsg): _131.MsgConnectionOpenTryResponse;
                    toProto(message: _131.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _131.MsgConnectionOpenTryResponse): _131.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    encode(message: _131.MsgConnectionOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.MsgConnectionOpenAck;
                    fromPartial(object: Partial<_131.MsgConnectionOpenAck>): _131.MsgConnectionOpenAck;
                    fromAmino(object: _131.MsgConnectionOpenAckAmino): _131.MsgConnectionOpenAck;
                    toAmino(message: _131.MsgConnectionOpenAck): _131.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _131.MsgConnectionOpenAckAminoMsg): _131.MsgConnectionOpenAck;
                    toAminoMsg(message: _131.MsgConnectionOpenAck): _131.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _131.MsgConnectionOpenAckProtoMsg): _131.MsgConnectionOpenAck;
                    toProto(message: _131.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _131.MsgConnectionOpenAck): _131.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _131.MsgConnectionOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _131.MsgConnectionOpenAckResponse;
                    fromPartial(_: Partial<_131.MsgConnectionOpenAckResponse>): _131.MsgConnectionOpenAckResponse;
                    fromAmino(_: _131.MsgConnectionOpenAckResponseAmino): _131.MsgConnectionOpenAckResponse;
                    toAmino(_: _131.MsgConnectionOpenAckResponse): _131.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _131.MsgConnectionOpenAckResponseAminoMsg): _131.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _131.MsgConnectionOpenAckResponse): _131.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _131.MsgConnectionOpenAckResponseProtoMsg): _131.MsgConnectionOpenAckResponse;
                    toProto(message: _131.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _131.MsgConnectionOpenAckResponse): _131.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    encode(message: _131.MsgConnectionOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.MsgConnectionOpenConfirm;
                    fromPartial(object: Partial<_131.MsgConnectionOpenConfirm>): _131.MsgConnectionOpenConfirm;
                    fromAmino(object: _131.MsgConnectionOpenConfirmAmino): _131.MsgConnectionOpenConfirm;
                    toAmino(message: _131.MsgConnectionOpenConfirm): _131.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _131.MsgConnectionOpenConfirmAminoMsg): _131.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _131.MsgConnectionOpenConfirm): _131.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _131.MsgConnectionOpenConfirmProtoMsg): _131.MsgConnectionOpenConfirm;
                    toProto(message: _131.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _131.MsgConnectionOpenConfirm): _131.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _131.MsgConnectionOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _131.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: Partial<_131.MsgConnectionOpenConfirmResponse>): _131.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _131.MsgConnectionOpenConfirmResponseAmino): _131.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _131.MsgConnectionOpenConfirmResponse): _131.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _131.MsgConnectionOpenConfirmResponseAminoMsg): _131.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _131.MsgConnectionOpenConfirmResponse): _131.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _131.MsgConnectionOpenConfirmResponseProtoMsg): _131.MsgConnectionOpenConfirmResponse;
                    toProto(message: _131.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _131.MsgConnectionOpenConfirmResponse): _131.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    encode(message: _130.QueryConnectionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.QueryConnectionRequest;
                    fromPartial(object: Partial<_130.QueryConnectionRequest>): _130.QueryConnectionRequest;
                    fromAmino(object: _130.QueryConnectionRequestAmino): _130.QueryConnectionRequest;
                    toAmino(message: _130.QueryConnectionRequest): _130.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _130.QueryConnectionRequestAminoMsg): _130.QueryConnectionRequest;
                    toAminoMsg(message: _130.QueryConnectionRequest): _130.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _130.QueryConnectionRequestProtoMsg): _130.QueryConnectionRequest;
                    toProto(message: _130.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _130.QueryConnectionRequest): _130.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    encode(message: _130.QueryConnectionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.QueryConnectionResponse;
                    fromPartial(object: Partial<_130.QueryConnectionResponse>): _130.QueryConnectionResponse;
                    fromAmino(object: _130.QueryConnectionResponseAmino): _130.QueryConnectionResponse;
                    toAmino(message: _130.QueryConnectionResponse): _130.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _130.QueryConnectionResponseAminoMsg): _130.QueryConnectionResponse;
                    toAminoMsg(message: _130.QueryConnectionResponse): _130.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _130.QueryConnectionResponseProtoMsg): _130.QueryConnectionResponse;
                    toProto(message: _130.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _130.QueryConnectionResponse): _130.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _130.QueryConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.QueryConnectionsRequest;
                    fromPartial(object: Partial<_130.QueryConnectionsRequest>): _130.QueryConnectionsRequest;
                    fromAmino(object: _130.QueryConnectionsRequestAmino): _130.QueryConnectionsRequest;
                    toAmino(message: _130.QueryConnectionsRequest): _130.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _130.QueryConnectionsRequestAminoMsg): _130.QueryConnectionsRequest;
                    toAminoMsg(message: _130.QueryConnectionsRequest): _130.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _130.QueryConnectionsRequestProtoMsg): _130.QueryConnectionsRequest;
                    toProto(message: _130.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _130.QueryConnectionsRequest): _130.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _130.QueryConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.QueryConnectionsResponse;
                    fromPartial(object: Partial<_130.QueryConnectionsResponse>): _130.QueryConnectionsResponse;
                    fromAmino(object: _130.QueryConnectionsResponseAmino): _130.QueryConnectionsResponse;
                    toAmino(message: _130.QueryConnectionsResponse): _130.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _130.QueryConnectionsResponseAminoMsg): _130.QueryConnectionsResponse;
                    toAminoMsg(message: _130.QueryConnectionsResponse): _130.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _130.QueryConnectionsResponseProtoMsg): _130.QueryConnectionsResponse;
                    toProto(message: _130.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _130.QueryConnectionsResponse): _130.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _130.QueryClientConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.QueryClientConnectionsRequest;
                    fromPartial(object: Partial<_130.QueryClientConnectionsRequest>): _130.QueryClientConnectionsRequest;
                    fromAmino(object: _130.QueryClientConnectionsRequestAmino): _130.QueryClientConnectionsRequest;
                    toAmino(message: _130.QueryClientConnectionsRequest): _130.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _130.QueryClientConnectionsRequestAminoMsg): _130.QueryClientConnectionsRequest;
                    toAminoMsg(message: _130.QueryClientConnectionsRequest): _130.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _130.QueryClientConnectionsRequestProtoMsg): _130.QueryClientConnectionsRequest;
                    toProto(message: _130.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _130.QueryClientConnectionsRequest): _130.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _130.QueryClientConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.QueryClientConnectionsResponse;
                    fromPartial(object: Partial<_130.QueryClientConnectionsResponse>): _130.QueryClientConnectionsResponse;
                    fromAmino(object: _130.QueryClientConnectionsResponseAmino): _130.QueryClientConnectionsResponse;
                    toAmino(message: _130.QueryClientConnectionsResponse): _130.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _130.QueryClientConnectionsResponseAminoMsg): _130.QueryClientConnectionsResponse;
                    toAminoMsg(message: _130.QueryClientConnectionsResponse): _130.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _130.QueryClientConnectionsResponseProtoMsg): _130.QueryClientConnectionsResponse;
                    toProto(message: _130.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _130.QueryClientConnectionsResponse): _130.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    encode(message: _130.QueryConnectionClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.QueryConnectionClientStateRequest;
                    fromPartial(object: Partial<_130.QueryConnectionClientStateRequest>): _130.QueryConnectionClientStateRequest;
                    fromAmino(object: _130.QueryConnectionClientStateRequestAmino): _130.QueryConnectionClientStateRequest;
                    toAmino(message: _130.QueryConnectionClientStateRequest): _130.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _130.QueryConnectionClientStateRequestAminoMsg): _130.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _130.QueryConnectionClientStateRequest): _130.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _130.QueryConnectionClientStateRequestProtoMsg): _130.QueryConnectionClientStateRequest;
                    toProto(message: _130.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _130.QueryConnectionClientStateRequest): _130.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    encode(message: _130.QueryConnectionClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.QueryConnectionClientStateResponse;
                    fromPartial(object: Partial<_130.QueryConnectionClientStateResponse>): _130.QueryConnectionClientStateResponse;
                    fromAmino(object: _130.QueryConnectionClientStateResponseAmino): _130.QueryConnectionClientStateResponse;
                    toAmino(message: _130.QueryConnectionClientStateResponse): _130.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _130.QueryConnectionClientStateResponseAminoMsg): _130.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _130.QueryConnectionClientStateResponse): _130.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _130.QueryConnectionClientStateResponseProtoMsg): _130.QueryConnectionClientStateResponse;
                    toProto(message: _130.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _130.QueryConnectionClientStateResponse): _130.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _130.QueryConnectionConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.QueryConnectionConsensusStateRequest;
                    fromPartial(object: Partial<_130.QueryConnectionConsensusStateRequest>): _130.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _130.QueryConnectionConsensusStateRequestAmino): _130.QueryConnectionConsensusStateRequest;
                    toAmino(message: _130.QueryConnectionConsensusStateRequest): _130.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _130.QueryConnectionConsensusStateRequestAminoMsg): _130.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _130.QueryConnectionConsensusStateRequest): _130.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _130.QueryConnectionConsensusStateRequestProtoMsg): _130.QueryConnectionConsensusStateRequest;
                    toProto(message: _130.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _130.QueryConnectionConsensusStateRequest): _130.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _130.QueryConnectionConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.QueryConnectionConsensusStateResponse;
                    fromPartial(object: Partial<_130.QueryConnectionConsensusStateResponse>): _130.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _130.QueryConnectionConsensusStateResponseAmino): _130.QueryConnectionConsensusStateResponse;
                    toAmino(message: _130.QueryConnectionConsensusStateResponse): _130.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _130.QueryConnectionConsensusStateResponseAminoMsg): _130.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _130.QueryConnectionConsensusStateResponse): _130.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _130.QueryConnectionConsensusStateResponseProtoMsg): _130.QueryConnectionConsensusStateResponse;
                    toProto(message: _130.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _130.QueryConnectionConsensusStateResponse): _130.QueryConnectionConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _129.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _129.GenesisState;
                    fromPartial(object: Partial<_129.GenesisState>): _129.GenesisState;
                    fromAmino(object: _129.GenesisStateAmino): _129.GenesisState;
                    toAmino(message: _129.GenesisState): _129.GenesisStateAmino;
                    fromAminoMsg(object: _129.GenesisStateAminoMsg): _129.GenesisState;
                    toAminoMsg(message: _129.GenesisState): _129.GenesisStateAminoMsg;
                    fromProtoMsg(message: _129.GenesisStateProtoMsg): _129.GenesisState;
                    toProto(message: _129.GenesisState): Uint8Array;
                    toProtoMsg(message: _129.GenesisState): _129.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _128.State;
                stateToJSON(object: _128.State): string;
                State: typeof _128.State;
                StateSDKType: typeof _128.State;
                StateAmino: typeof _128.State;
                ConnectionEnd: {
                    typeUrl: string;
                    encode(message: _128.ConnectionEnd, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _128.ConnectionEnd;
                    fromPartial(object: Partial<_128.ConnectionEnd>): _128.ConnectionEnd;
                    fromAmino(object: _128.ConnectionEndAmino): _128.ConnectionEnd;
                    toAmino(message: _128.ConnectionEnd): _128.ConnectionEndAmino;
                    fromAminoMsg(object: _128.ConnectionEndAminoMsg): _128.ConnectionEnd;
                    toAminoMsg(message: _128.ConnectionEnd): _128.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _128.ConnectionEndProtoMsg): _128.ConnectionEnd;
                    toProto(message: _128.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _128.ConnectionEnd): _128.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    encode(message: _128.IdentifiedConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _128.IdentifiedConnection;
                    fromPartial(object: Partial<_128.IdentifiedConnection>): _128.IdentifiedConnection;
                    fromAmino(object: _128.IdentifiedConnectionAmino): _128.IdentifiedConnection;
                    toAmino(message: _128.IdentifiedConnection): _128.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _128.IdentifiedConnectionAminoMsg): _128.IdentifiedConnection;
                    toAminoMsg(message: _128.IdentifiedConnection): _128.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _128.IdentifiedConnectionProtoMsg): _128.IdentifiedConnection;
                    toProto(message: _128.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _128.IdentifiedConnection): _128.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _128.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _128.Counterparty;
                    fromPartial(object: Partial<_128.Counterparty>): _128.Counterparty;
                    fromAmino(object: _128.CounterpartyAmino): _128.Counterparty;
                    toAmino(message: _128.Counterparty): _128.CounterpartyAmino;
                    fromAminoMsg(object: _128.CounterpartyAminoMsg): _128.Counterparty;
                    toAminoMsg(message: _128.Counterparty): _128.CounterpartyAminoMsg;
                    fromProtoMsg(message: _128.CounterpartyProtoMsg): _128.Counterparty;
                    toProto(message: _128.Counterparty): Uint8Array;
                    toProtoMsg(message: _128.Counterparty): _128.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    encode(message: _128.ClientPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _128.ClientPaths;
                    fromPartial(object: Partial<_128.ClientPaths>): _128.ClientPaths;
                    fromAmino(object: _128.ClientPathsAmino): _128.ClientPaths;
                    toAmino(message: _128.ClientPaths): _128.ClientPathsAmino;
                    fromAminoMsg(object: _128.ClientPathsAminoMsg): _128.ClientPaths;
                    toAminoMsg(message: _128.ClientPaths): _128.ClientPathsAminoMsg;
                    fromProtoMsg(message: _128.ClientPathsProtoMsg): _128.ClientPaths;
                    toProto(message: _128.ClientPaths): Uint8Array;
                    toProtoMsg(message: _128.ClientPaths): _128.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    encode(message: _128.ConnectionPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _128.ConnectionPaths;
                    fromPartial(object: Partial<_128.ConnectionPaths>): _128.ConnectionPaths;
                    fromAmino(object: _128.ConnectionPathsAmino): _128.ConnectionPaths;
                    toAmino(message: _128.ConnectionPaths): _128.ConnectionPathsAmino;
                    fromAminoMsg(object: _128.ConnectionPathsAminoMsg): _128.ConnectionPaths;
                    toAminoMsg(message: _128.ConnectionPaths): _128.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _128.ConnectionPathsProtoMsg): _128.ConnectionPaths;
                    toProto(message: _128.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _128.ConnectionPaths): _128.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    encode(message: _128.Version, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _128.Version;
                    fromPartial(object: Partial<_128.Version>): _128.Version;
                    fromAmino(object: _128.VersionAmino): _128.Version;
                    toAmino(message: _128.Version): _128.VersionAmino;
                    fromAminoMsg(object: _128.VersionAminoMsg): _128.Version;
                    toAminoMsg(message: _128.Version): _128.VersionAminoMsg;
                    fromProtoMsg(message: _128.VersionProtoMsg): _128.Version;
                    toProto(message: _128.Version): Uint8Array;
                    toProtoMsg(message: _128.Version): _128.VersionProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _128.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _128.Params;
                    fromPartial(object: Partial<_128.Params>): _128.Params;
                    fromAmino(object: _128.ParamsAmino): _128.Params;
                    toAmino(message: _128.Params): _128.ParamsAmino;
                    fromAminoMsg(object: _128.ParamsAminoMsg): _128.Params;
                    toAminoMsg(message: _128.Params): _128.ParamsAminoMsg;
                    fromProtoMsg(message: _128.ParamsProtoMsg): _128.Params;
                    toProto(message: _128.Params): Uint8Array;
                    toProtoMsg(message: _128.Params): _128.ParamsProtoMsg;
                };
            };
        }
        namespace types {
            const v1: {
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
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _133.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _133.ClientState;
                    fromPartial(object: Partial<_133.ClientState>): _133.ClientState;
                    fromAmino(object: _133.ClientStateAmino): _133.ClientState;
                    toAmino(message: _133.ClientState): _133.ClientStateAmino;
                    fromAminoMsg(object: _133.ClientStateAminoMsg): _133.ClientState;
                    toAminoMsg(message: _133.ClientState): _133.ClientStateAminoMsg;
                    fromProtoMsg(message: _133.ClientStateProtoMsg): _133.ClientState;
                    toProto(message: _133.ClientState): Uint8Array;
                    toProtoMsg(message: _133.ClientState): _133.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _134.DataType;
                dataTypeToJSON(object: _134.DataType): string;
                DataType: typeof _134.DataType;
                DataTypeSDKType: typeof _134.DataType;
                DataTypeAmino: typeof _134.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _134.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _134.ClientState;
                    fromPartial(object: Partial<_134.ClientState>): _134.ClientState;
                    fromAmino(object: _134.ClientStateAmino): _134.ClientState;
                    toAmino(message: _134.ClientState): _134.ClientStateAmino;
                    fromAminoMsg(object: _134.ClientStateAminoMsg): _134.ClientState;
                    toAminoMsg(message: _134.ClientState): _134.ClientStateAminoMsg;
                    fromProtoMsg(message: _134.ClientStateProtoMsg): _134.ClientState;
                    toProto(message: _134.ClientState): Uint8Array;
                    toProtoMsg(message: _134.ClientState): _134.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _134.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _134.ConsensusState;
                    fromPartial(object: Partial<_134.ConsensusState>): _134.ConsensusState;
                    fromAmino(object: _134.ConsensusStateAmino): _134.ConsensusState;
                    toAmino(message: _134.ConsensusState): _134.ConsensusStateAmino;
                    fromAminoMsg(object: _134.ConsensusStateAminoMsg): _134.ConsensusState;
                    toAminoMsg(message: _134.ConsensusState): _134.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _134.ConsensusStateProtoMsg): _134.ConsensusState;
                    toProto(message: _134.ConsensusState): Uint8Array;
                    toProtoMsg(message: _134.ConsensusState): _134.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _134.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _134.Header;
                    fromPartial(object: Partial<_134.Header>): _134.Header;
                    fromAmino(object: _134.HeaderAmino): _134.Header;
                    toAmino(message: _134.Header): _134.HeaderAmino;
                    fromAminoMsg(object: _134.HeaderAminoMsg): _134.Header;
                    toAminoMsg(message: _134.Header): _134.HeaderAminoMsg;
                    fromProtoMsg(message: _134.HeaderProtoMsg): _134.Header;
                    toProto(message: _134.Header): Uint8Array;
                    toProtoMsg(message: _134.Header): _134.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _134.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _134.Misbehaviour;
                    fromPartial(object: Partial<_134.Misbehaviour>): _134.Misbehaviour;
                    fromAmino(object: _134.MisbehaviourAmino): _134.Misbehaviour;
                    toAmino(message: _134.Misbehaviour): _134.MisbehaviourAmino;
                    fromAminoMsg(object: _134.MisbehaviourAminoMsg): _134.Misbehaviour;
                    toAminoMsg(message: _134.Misbehaviour): _134.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _134.MisbehaviourProtoMsg): _134.Misbehaviour;
                    toProto(message: _134.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _134.Misbehaviour): _134.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _134.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _134.SignatureAndData;
                    fromPartial(object: Partial<_134.SignatureAndData>): _134.SignatureAndData;
                    fromAmino(object: _134.SignatureAndDataAmino): _134.SignatureAndData;
                    toAmino(message: _134.SignatureAndData): _134.SignatureAndDataAmino;
                    fromAminoMsg(object: _134.SignatureAndDataAminoMsg): _134.SignatureAndData;
                    toAminoMsg(message: _134.SignatureAndData): _134.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _134.SignatureAndDataProtoMsg): _134.SignatureAndData;
                    toProto(message: _134.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _134.SignatureAndData): _134.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _134.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _134.TimestampedSignatureData;
                    fromPartial(object: Partial<_134.TimestampedSignatureData>): _134.TimestampedSignatureData;
                    fromAmino(object: _134.TimestampedSignatureDataAmino): _134.TimestampedSignatureData;
                    toAmino(message: _134.TimestampedSignatureData): _134.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _134.TimestampedSignatureDataAminoMsg): _134.TimestampedSignatureData;
                    toAminoMsg(message: _134.TimestampedSignatureData): _134.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _134.TimestampedSignatureDataProtoMsg): _134.TimestampedSignatureData;
                    toProto(message: _134.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _134.TimestampedSignatureData): _134.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _134.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _134.SignBytes;
                    fromPartial(object: Partial<_134.SignBytes>): _134.SignBytes;
                    fromAmino(object: _134.SignBytesAmino): _134.SignBytes;
                    toAmino(message: _134.SignBytes): _134.SignBytesAmino;
                    fromAminoMsg(object: _134.SignBytesAminoMsg): _134.SignBytes;
                    toAminoMsg(message: _134.SignBytes): _134.SignBytesAminoMsg;
                    fromProtoMsg(message: _134.SignBytesProtoMsg): _134.SignBytes;
                    toProto(message: _134.SignBytes): Uint8Array;
                    toProtoMsg(message: _134.SignBytes): _134.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _134.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _134.HeaderData;
                    fromPartial(object: Partial<_134.HeaderData>): _134.HeaderData;
                    fromAmino(object: _134.HeaderDataAmino): _134.HeaderData;
                    toAmino(message: _134.HeaderData): _134.HeaderDataAmino;
                    fromAminoMsg(object: _134.HeaderDataAminoMsg): _134.HeaderData;
                    toAminoMsg(message: _134.HeaderData): _134.HeaderDataAminoMsg;
                    fromProtoMsg(message: _134.HeaderDataProtoMsg): _134.HeaderData;
                    toProto(message: _134.HeaderData): Uint8Array;
                    toProtoMsg(message: _134.HeaderData): _134.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _134.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _134.ClientStateData;
                    fromPartial(object: Partial<_134.ClientStateData>): _134.ClientStateData;
                    fromAmino(object: _134.ClientStateDataAmino): _134.ClientStateData;
                    toAmino(message: _134.ClientStateData): _134.ClientStateDataAmino;
                    fromAminoMsg(object: _134.ClientStateDataAminoMsg): _134.ClientStateData;
                    toAminoMsg(message: _134.ClientStateData): _134.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _134.ClientStateDataProtoMsg): _134.ClientStateData;
                    toProto(message: _134.ClientStateData): Uint8Array;
                    toProtoMsg(message: _134.ClientStateData): _134.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _134.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _134.ConsensusStateData;
                    fromPartial(object: Partial<_134.ConsensusStateData>): _134.ConsensusStateData;
                    fromAmino(object: _134.ConsensusStateDataAmino): _134.ConsensusStateData;
                    toAmino(message: _134.ConsensusStateData): _134.ConsensusStateDataAmino;
                    fromAminoMsg(object: _134.ConsensusStateDataAminoMsg): _134.ConsensusStateData;
                    toAminoMsg(message: _134.ConsensusStateData): _134.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _134.ConsensusStateDataProtoMsg): _134.ConsensusStateData;
                    toProto(message: _134.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _134.ConsensusStateData): _134.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _134.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _134.ConnectionStateData;
                    fromPartial(object: Partial<_134.ConnectionStateData>): _134.ConnectionStateData;
                    fromAmino(object: _134.ConnectionStateDataAmino): _134.ConnectionStateData;
                    toAmino(message: _134.ConnectionStateData): _134.ConnectionStateDataAmino;
                    fromAminoMsg(object: _134.ConnectionStateDataAminoMsg): _134.ConnectionStateData;
                    toAminoMsg(message: _134.ConnectionStateData): _134.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _134.ConnectionStateDataProtoMsg): _134.ConnectionStateData;
                    toProto(message: _134.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _134.ConnectionStateData): _134.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _134.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _134.ChannelStateData;
                    fromPartial(object: Partial<_134.ChannelStateData>): _134.ChannelStateData;
                    fromAmino(object: _134.ChannelStateDataAmino): _134.ChannelStateData;
                    toAmino(message: _134.ChannelStateData): _134.ChannelStateDataAmino;
                    fromAminoMsg(object: _134.ChannelStateDataAminoMsg): _134.ChannelStateData;
                    toAminoMsg(message: _134.ChannelStateData): _134.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _134.ChannelStateDataProtoMsg): _134.ChannelStateData;
                    toProto(message: _134.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _134.ChannelStateData): _134.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _134.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _134.PacketCommitmentData;
                    fromPartial(object: Partial<_134.PacketCommitmentData>): _134.PacketCommitmentData;
                    fromAmino(object: _134.PacketCommitmentDataAmino): _134.PacketCommitmentData;
                    toAmino(message: _134.PacketCommitmentData): _134.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _134.PacketCommitmentDataAminoMsg): _134.PacketCommitmentData;
                    toAminoMsg(message: _134.PacketCommitmentData): _134.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _134.PacketCommitmentDataProtoMsg): _134.PacketCommitmentData;
                    toProto(message: _134.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _134.PacketCommitmentData): _134.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _134.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _134.PacketAcknowledgementData;
                    fromPartial(object: Partial<_134.PacketAcknowledgementData>): _134.PacketAcknowledgementData;
                    fromAmino(object: _134.PacketAcknowledgementDataAmino): _134.PacketAcknowledgementData;
                    toAmino(message: _134.PacketAcknowledgementData): _134.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _134.PacketAcknowledgementDataAminoMsg): _134.PacketAcknowledgementData;
                    toAminoMsg(message: _134.PacketAcknowledgementData): _134.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _134.PacketAcknowledgementDataProtoMsg): _134.PacketAcknowledgementData;
                    toProto(message: _134.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _134.PacketAcknowledgementData): _134.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _134.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _134.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_134.PacketReceiptAbsenceData>): _134.PacketReceiptAbsenceData;
                    fromAmino(object: _134.PacketReceiptAbsenceDataAmino): _134.PacketReceiptAbsenceData;
                    toAmino(message: _134.PacketReceiptAbsenceData): _134.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _134.PacketReceiptAbsenceDataAminoMsg): _134.PacketReceiptAbsenceData;
                    toAminoMsg(message: _134.PacketReceiptAbsenceData): _134.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _134.PacketReceiptAbsenceDataProtoMsg): _134.PacketReceiptAbsenceData;
                    toProto(message: _134.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _134.PacketReceiptAbsenceData): _134.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _134.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _134.NextSequenceRecvData;
                    fromPartial(object: Partial<_134.NextSequenceRecvData>): _134.NextSequenceRecvData;
                    fromAmino(object: _134.NextSequenceRecvDataAmino): _134.NextSequenceRecvData;
                    toAmino(message: _134.NextSequenceRecvData): _134.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _134.NextSequenceRecvDataAminoMsg): _134.NextSequenceRecvData;
                    toAminoMsg(message: _134.NextSequenceRecvData): _134.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _134.NextSequenceRecvDataProtoMsg): _134.NextSequenceRecvData;
                    toProto(message: _134.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _134.NextSequenceRecvData): _134.NextSequenceRecvDataProtoMsg;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _135.DataType;
                dataTypeToJSON(object: _135.DataType): string;
                DataType: typeof _135.DataType;
                DataTypeSDKType: typeof _135.DataType;
                DataTypeAmino: typeof _135.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _135.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _135.ClientState;
                    fromPartial(object: Partial<_135.ClientState>): _135.ClientState;
                    fromAmino(object: _135.ClientStateAmino): _135.ClientState;
                    toAmino(message: _135.ClientState): _135.ClientStateAmino;
                    fromAminoMsg(object: _135.ClientStateAminoMsg): _135.ClientState;
                    toAminoMsg(message: _135.ClientState): _135.ClientStateAminoMsg;
                    fromProtoMsg(message: _135.ClientStateProtoMsg): _135.ClientState;
                    toProto(message: _135.ClientState): Uint8Array;
                    toProtoMsg(message: _135.ClientState): _135.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _135.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _135.ConsensusState;
                    fromPartial(object: Partial<_135.ConsensusState>): _135.ConsensusState;
                    fromAmino(object: _135.ConsensusStateAmino): _135.ConsensusState;
                    toAmino(message: _135.ConsensusState): _135.ConsensusStateAmino;
                    fromAminoMsg(object: _135.ConsensusStateAminoMsg): _135.ConsensusState;
                    toAminoMsg(message: _135.ConsensusState): _135.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _135.ConsensusStateProtoMsg): _135.ConsensusState;
                    toProto(message: _135.ConsensusState): Uint8Array;
                    toProtoMsg(message: _135.ConsensusState): _135.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _135.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _135.Header;
                    fromPartial(object: Partial<_135.Header>): _135.Header;
                    fromAmino(object: _135.HeaderAmino): _135.Header;
                    toAmino(message: _135.Header): _135.HeaderAmino;
                    fromAminoMsg(object: _135.HeaderAminoMsg): _135.Header;
                    toAminoMsg(message: _135.Header): _135.HeaderAminoMsg;
                    fromProtoMsg(message: _135.HeaderProtoMsg): _135.Header;
                    toProto(message: _135.Header): Uint8Array;
                    toProtoMsg(message: _135.Header): _135.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _135.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _135.Misbehaviour;
                    fromPartial(object: Partial<_135.Misbehaviour>): _135.Misbehaviour;
                    fromAmino(object: _135.MisbehaviourAmino): _135.Misbehaviour;
                    toAmino(message: _135.Misbehaviour): _135.MisbehaviourAmino;
                    fromAminoMsg(object: _135.MisbehaviourAminoMsg): _135.Misbehaviour;
                    toAminoMsg(message: _135.Misbehaviour): _135.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _135.MisbehaviourProtoMsg): _135.Misbehaviour;
                    toProto(message: _135.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _135.Misbehaviour): _135.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _135.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _135.SignatureAndData;
                    fromPartial(object: Partial<_135.SignatureAndData>): _135.SignatureAndData;
                    fromAmino(object: _135.SignatureAndDataAmino): _135.SignatureAndData;
                    toAmino(message: _135.SignatureAndData): _135.SignatureAndDataAmino;
                    fromAminoMsg(object: _135.SignatureAndDataAminoMsg): _135.SignatureAndData;
                    toAminoMsg(message: _135.SignatureAndData): _135.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _135.SignatureAndDataProtoMsg): _135.SignatureAndData;
                    toProto(message: _135.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _135.SignatureAndData): _135.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _135.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _135.TimestampedSignatureData;
                    fromPartial(object: Partial<_135.TimestampedSignatureData>): _135.TimestampedSignatureData;
                    fromAmino(object: _135.TimestampedSignatureDataAmino): _135.TimestampedSignatureData;
                    toAmino(message: _135.TimestampedSignatureData): _135.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _135.TimestampedSignatureDataAminoMsg): _135.TimestampedSignatureData;
                    toAminoMsg(message: _135.TimestampedSignatureData): _135.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _135.TimestampedSignatureDataProtoMsg): _135.TimestampedSignatureData;
                    toProto(message: _135.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _135.TimestampedSignatureData): _135.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _135.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _135.SignBytes;
                    fromPartial(object: Partial<_135.SignBytes>): _135.SignBytes;
                    fromAmino(object: _135.SignBytesAmino): _135.SignBytes;
                    toAmino(message: _135.SignBytes): _135.SignBytesAmino;
                    fromAminoMsg(object: _135.SignBytesAminoMsg): _135.SignBytes;
                    toAminoMsg(message: _135.SignBytes): _135.SignBytesAminoMsg;
                    fromProtoMsg(message: _135.SignBytesProtoMsg): _135.SignBytes;
                    toProto(message: _135.SignBytes): Uint8Array;
                    toProtoMsg(message: _135.SignBytes): _135.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _135.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _135.HeaderData;
                    fromPartial(object: Partial<_135.HeaderData>): _135.HeaderData;
                    fromAmino(object: _135.HeaderDataAmino): _135.HeaderData;
                    toAmino(message: _135.HeaderData): _135.HeaderDataAmino;
                    fromAminoMsg(object: _135.HeaderDataAminoMsg): _135.HeaderData;
                    toAminoMsg(message: _135.HeaderData): _135.HeaderDataAminoMsg;
                    fromProtoMsg(message: _135.HeaderDataProtoMsg): _135.HeaderData;
                    toProto(message: _135.HeaderData): Uint8Array;
                    toProtoMsg(message: _135.HeaderData): _135.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _135.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _135.ClientStateData;
                    fromPartial(object: Partial<_135.ClientStateData>): _135.ClientStateData;
                    fromAmino(object: _135.ClientStateDataAmino): _135.ClientStateData;
                    toAmino(message: _135.ClientStateData): _135.ClientStateDataAmino;
                    fromAminoMsg(object: _135.ClientStateDataAminoMsg): _135.ClientStateData;
                    toAminoMsg(message: _135.ClientStateData): _135.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _135.ClientStateDataProtoMsg): _135.ClientStateData;
                    toProto(message: _135.ClientStateData): Uint8Array;
                    toProtoMsg(message: _135.ClientStateData): _135.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _135.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _135.ConsensusStateData;
                    fromPartial(object: Partial<_135.ConsensusStateData>): _135.ConsensusStateData;
                    fromAmino(object: _135.ConsensusStateDataAmino): _135.ConsensusStateData;
                    toAmino(message: _135.ConsensusStateData): _135.ConsensusStateDataAmino;
                    fromAminoMsg(object: _135.ConsensusStateDataAminoMsg): _135.ConsensusStateData;
                    toAminoMsg(message: _135.ConsensusStateData): _135.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _135.ConsensusStateDataProtoMsg): _135.ConsensusStateData;
                    toProto(message: _135.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _135.ConsensusStateData): _135.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _135.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _135.ConnectionStateData;
                    fromPartial(object: Partial<_135.ConnectionStateData>): _135.ConnectionStateData;
                    fromAmino(object: _135.ConnectionStateDataAmino): _135.ConnectionStateData;
                    toAmino(message: _135.ConnectionStateData): _135.ConnectionStateDataAmino;
                    fromAminoMsg(object: _135.ConnectionStateDataAminoMsg): _135.ConnectionStateData;
                    toAminoMsg(message: _135.ConnectionStateData): _135.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _135.ConnectionStateDataProtoMsg): _135.ConnectionStateData;
                    toProto(message: _135.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _135.ConnectionStateData): _135.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _135.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _135.ChannelStateData;
                    fromPartial(object: Partial<_135.ChannelStateData>): _135.ChannelStateData;
                    fromAmino(object: _135.ChannelStateDataAmino): _135.ChannelStateData;
                    toAmino(message: _135.ChannelStateData): _135.ChannelStateDataAmino;
                    fromAminoMsg(object: _135.ChannelStateDataAminoMsg): _135.ChannelStateData;
                    toAminoMsg(message: _135.ChannelStateData): _135.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _135.ChannelStateDataProtoMsg): _135.ChannelStateData;
                    toProto(message: _135.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _135.ChannelStateData): _135.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _135.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _135.PacketCommitmentData;
                    fromPartial(object: Partial<_135.PacketCommitmentData>): _135.PacketCommitmentData;
                    fromAmino(object: _135.PacketCommitmentDataAmino): _135.PacketCommitmentData;
                    toAmino(message: _135.PacketCommitmentData): _135.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _135.PacketCommitmentDataAminoMsg): _135.PacketCommitmentData;
                    toAminoMsg(message: _135.PacketCommitmentData): _135.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _135.PacketCommitmentDataProtoMsg): _135.PacketCommitmentData;
                    toProto(message: _135.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _135.PacketCommitmentData): _135.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _135.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _135.PacketAcknowledgementData;
                    fromPartial(object: Partial<_135.PacketAcknowledgementData>): _135.PacketAcknowledgementData;
                    fromAmino(object: _135.PacketAcknowledgementDataAmino): _135.PacketAcknowledgementData;
                    toAmino(message: _135.PacketAcknowledgementData): _135.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _135.PacketAcknowledgementDataAminoMsg): _135.PacketAcknowledgementData;
                    toAminoMsg(message: _135.PacketAcknowledgementData): _135.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _135.PacketAcknowledgementDataProtoMsg): _135.PacketAcknowledgementData;
                    toProto(message: _135.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _135.PacketAcknowledgementData): _135.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _135.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _135.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_135.PacketReceiptAbsenceData>): _135.PacketReceiptAbsenceData;
                    fromAmino(object: _135.PacketReceiptAbsenceDataAmino): _135.PacketReceiptAbsenceData;
                    toAmino(message: _135.PacketReceiptAbsenceData): _135.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _135.PacketReceiptAbsenceDataAminoMsg): _135.PacketReceiptAbsenceData;
                    toAminoMsg(message: _135.PacketReceiptAbsenceData): _135.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _135.PacketReceiptAbsenceDataProtoMsg): _135.PacketReceiptAbsenceData;
                    toProto(message: _135.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _135.PacketReceiptAbsenceData): _135.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _135.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _135.NextSequenceRecvData;
                    fromPartial(object: Partial<_135.NextSequenceRecvData>): _135.NextSequenceRecvData;
                    fromAmino(object: _135.NextSequenceRecvDataAmino): _135.NextSequenceRecvData;
                    toAmino(message: _135.NextSequenceRecvData): _135.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _135.NextSequenceRecvDataAminoMsg): _135.NextSequenceRecvData;
                    toAminoMsg(message: _135.NextSequenceRecvData): _135.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _135.NextSequenceRecvDataProtoMsg): _135.NextSequenceRecvData;
                    toProto(message: _135.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _135.NextSequenceRecvData): _135.NextSequenceRecvDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _136.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _136.ClientState;
                    fromPartial(object: Partial<_136.ClientState>): _136.ClientState;
                    fromAmino(object: _136.ClientStateAmino): _136.ClientState;
                    toAmino(message: _136.ClientState): _136.ClientStateAmino;
                    fromAminoMsg(object: _136.ClientStateAminoMsg): _136.ClientState;
                    toAminoMsg(message: _136.ClientState): _136.ClientStateAminoMsg;
                    fromProtoMsg(message: _136.ClientStateProtoMsg): _136.ClientState;
                    toProto(message: _136.ClientState): Uint8Array;
                    toProtoMsg(message: _136.ClientState): _136.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _136.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _136.ConsensusState;
                    fromPartial(object: Partial<_136.ConsensusState>): _136.ConsensusState;
                    fromAmino(object: _136.ConsensusStateAmino): _136.ConsensusState;
                    toAmino(message: _136.ConsensusState): _136.ConsensusStateAmino;
                    fromAminoMsg(object: _136.ConsensusStateAminoMsg): _136.ConsensusState;
                    toAminoMsg(message: _136.ConsensusState): _136.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _136.ConsensusStateProtoMsg): _136.ConsensusState;
                    toProto(message: _136.ConsensusState): Uint8Array;
                    toProtoMsg(message: _136.ConsensusState): _136.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _136.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _136.Misbehaviour;
                    fromPartial(object: Partial<_136.Misbehaviour>): _136.Misbehaviour;
                    fromAmino(object: _136.MisbehaviourAmino): _136.Misbehaviour;
                    toAmino(message: _136.Misbehaviour): _136.MisbehaviourAmino;
                    fromAminoMsg(object: _136.MisbehaviourAminoMsg): _136.Misbehaviour;
                    toAminoMsg(message: _136.Misbehaviour): _136.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _136.MisbehaviourProtoMsg): _136.Misbehaviour;
                    toProto(message: _136.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _136.Misbehaviour): _136.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _136.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _136.Header;
                    fromPartial(object: Partial<_136.Header>): _136.Header;
                    fromAmino(object: _136.HeaderAmino): _136.Header;
                    toAmino(message: _136.Header): _136.HeaderAmino;
                    fromAminoMsg(object: _136.HeaderAminoMsg): _136.Header;
                    toAminoMsg(message: _136.Header): _136.HeaderAminoMsg;
                    fromProtoMsg(message: _136.HeaderProtoMsg): _136.Header;
                    toProto(message: _136.Header): Uint8Array;
                    toProtoMsg(message: _136.Header): _136.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    encode(message: _136.Fraction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _136.Fraction;
                    fromPartial(object: Partial<_136.Fraction>): _136.Fraction;
                    fromAmino(object: _136.FractionAmino): _136.Fraction;
                    toAmino(message: _136.Fraction): _136.FractionAmino;
                    fromAminoMsg(object: _136.FractionAminoMsg): _136.Fraction;
                    toAminoMsg(message: _136.Fraction): _136.FractionAminoMsg;
                    fromProtoMsg(message: _136.FractionProtoMsg): _136.Fraction;
                    toProto(message: _136.Fraction): Uint8Array;
                    toProtoMsg(message: _136.Fraction): _136.FractionProtoMsg;
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
                        v1: _281.MsgClientImpl;
                    };
                    transfer: {
                        v1: _282.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _283.MsgClientImpl;
                    };
                    client: {
                        v1: _284.MsgClientImpl;
                    };
                    connection: {
                        v1: _285.MsgClientImpl;
                    };
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
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
                            incentivizedPackets(request: _104.QueryIncentivizedPacketsRequest): Promise<_104.QueryIncentivizedPacketsResponse>;
                            incentivizedPacket(request: _104.QueryIncentivizedPacketRequest): Promise<_104.QueryIncentivizedPacketResponse>;
                            incentivizedPacketsForChannel(request: _104.QueryIncentivizedPacketsForChannelRequest): Promise<_104.QueryIncentivizedPacketsForChannelResponse>;
                            totalRecvFees(request: _104.QueryTotalRecvFeesRequest): Promise<_104.QueryTotalRecvFeesResponse>;
                            totalAckFees(request: _104.QueryTotalAckFeesRequest): Promise<_104.QueryTotalAckFeesResponse>;
                            totalTimeoutFees(request: _104.QueryTotalTimeoutFeesRequest): Promise<_104.QueryTotalTimeoutFeesResponse>;
                            payee(request: _104.QueryPayeeRequest): Promise<_104.QueryPayeeResponse>;
                            counterpartyPayee(request: _104.QueryCounterpartyPayeeRequest): Promise<_104.QueryCounterpartyPayeeResponse>;
                            feeEnabledChannels(request: _104.QueryFeeEnabledChannelsRequest): Promise<_104.QueryFeeEnabledChannelsResponse>;
                            feeEnabledChannel(request: _104.QueryFeeEnabledChannelRequest): Promise<_104.QueryFeeEnabledChannelResponse>;
                        };
                    };
                    interchain_accounts: {
                        controller: {
                            v1: {
                                interchainAccount(request: _107.QueryInterchainAccountRequest): Promise<_107.QueryInterchainAccountResponse>;
                                params(request?: _107.QueryParamsRequest): Promise<_107.QueryParamsResponse>;
                            };
                        };
                        host: {
                            v1: {
                                params(request?: _109.QueryParamsRequest): Promise<_109.QueryParamsResponse>;
                            };
                        };
                    };
                    transfer: {
                        v1: {
                            denomTrace(request: _115.QueryDenomTraceRequest): Promise<_115.QueryDenomTraceResponse>;
                            denomTraces(request?: _115.QueryDenomTracesRequest): Promise<_115.QueryDenomTracesResponse>;
                            params(request?: _115.QueryParamsRequest): Promise<_115.QueryParamsResponse>;
                            denomHash(request: _115.QueryDenomHashRequest): Promise<_115.QueryDenomHashResponse>;
                            escrowAddress(request: _115.QueryEscrowAddressRequest): Promise<_115.QueryEscrowAddressResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _121.QueryChannelRequest): Promise<_121.QueryChannelResponse>;
                            channels(request?: _121.QueryChannelsRequest): Promise<_121.QueryChannelsResponse>;
                            connectionChannels(request: _121.QueryConnectionChannelsRequest): Promise<_121.QueryConnectionChannelsResponse>;
                            channelClientState(request: _121.QueryChannelClientStateRequest): Promise<_121.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _121.QueryChannelConsensusStateRequest): Promise<_121.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _121.QueryPacketCommitmentRequest): Promise<_121.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _121.QueryPacketCommitmentsRequest): Promise<_121.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _121.QueryPacketReceiptRequest): Promise<_121.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _121.QueryPacketAcknowledgementRequest): Promise<_121.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _121.QueryPacketAcknowledgementsRequest): Promise<_121.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _121.QueryUnreceivedPacketsRequest): Promise<_121.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _121.QueryUnreceivedAcksRequest): Promise<_121.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _121.QueryNextSequenceReceiveRequest): Promise<_121.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _125.QueryClientStateRequest): Promise<_125.QueryClientStateResponse>;
                            clientStates(request?: _125.QueryClientStatesRequest): Promise<_125.QueryClientStatesResponse>;
                            consensusState(request: _125.QueryConsensusStateRequest): Promise<_125.QueryConsensusStateResponse>;
                            consensusStates(request: _125.QueryConsensusStatesRequest): Promise<_125.QueryConsensusStatesResponse>;
                            consensusStateHeights(request: _125.QueryConsensusStateHeightsRequest): Promise<_125.QueryConsensusStateHeightsResponse>;
                            clientStatus(request: _125.QueryClientStatusRequest): Promise<_125.QueryClientStatusResponse>;
                            clientParams(request?: _125.QueryClientParamsRequest): Promise<_125.QueryClientParamsResponse>;
                            upgradedClientState(request?: _125.QueryUpgradedClientStateRequest): Promise<_125.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _125.QueryUpgradedConsensusStateRequest): Promise<_125.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _130.QueryConnectionRequest): Promise<_130.QueryConnectionResponse>;
                            connections(request?: _130.QueryConnectionsRequest): Promise<_130.QueryConnectionsResponse>;
                            clientConnections(request: _130.QueryClientConnectionsRequest): Promise<_130.QueryClientConnectionsResponse>;
                            connectionClientState(request: _130.QueryConnectionClientStateRequest): Promise<_130.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _130.QueryConnectionConsensusStateRequest): Promise<_130.QueryConnectionConsensusStateResponse>;
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
                        v1: _267.LCDQueryClient;
                    };
                    interchain_accounts: {
                        controller: {
                            v1: _268.LCDQueryClient;
                        };
                        host: {
                            v1: _269.LCDQueryClient;
                        };
                    };
                    transfer: {
                        v1: _270.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _271.LCDQueryClient;
                    };
                    client: {
                        v1: _272.LCDQueryClient;
                    };
                    connection: {
                        v1: _273.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
