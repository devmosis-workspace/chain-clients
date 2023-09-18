import * as _125 from "./applications/fee/v1/ack";
import * as _126 from "./applications/fee/v1/fee";
import * as _127 from "./applications/fee/v1/genesis";
import * as _128 from "./applications/fee/v1/metadata";
import * as _129 from "./applications/fee/v1/query";
import * as _130 from "./applications/fee/v1/tx";
import * as _131 from "./applications/interchain_accounts/controller/v1/controller";
import * as _132 from "./applications/interchain_accounts/controller/v1/query";
import * as _133 from "./applications/interchain_accounts/host/v1/host";
import * as _134 from "./applications/interchain_accounts/host/v1/query";
import * as _135 from "./applications/interchain_accounts/v1/account";
import * as _136 from "./applications/interchain_accounts/v1/genesis";
import * as _137 from "./applications/interchain_accounts/v1/metadata";
import * as _138 from "./applications/interchain_accounts/v1/packet";
import * as _139 from "./applications/transfer/v1/genesis";
import * as _140 from "./applications/transfer/v1/query";
import * as _141 from "./applications/transfer/v1/transfer";
import * as _142 from "./applications/transfer/v1/tx";
import * as _143 from "./applications/transfer/v2/packet";
import * as _144 from "./core/channel/v1/channel";
import * as _145 from "./core/channel/v1/genesis";
import * as _146 from "./core/channel/v1/query";
import * as _147 from "./core/channel/v1/tx";
import * as _148 from "./core/client/v1/client";
import * as _149 from "./core/client/v1/genesis";
import * as _150 from "./core/client/v1/query";
import * as _151 from "./core/client/v1/tx";
import * as _152 from "./core/commitment/v1/commitment";
import * as _153 from "./core/connection/v1/connection";
import * as _154 from "./core/connection/v1/genesis";
import * as _155 from "./core/connection/v1/query";
import * as _156 from "./core/connection/v1/tx";
import * as _157 from "./core/types/v1/genesis";
import * as _158 from "./lightclients/localhost/v1/localhost";
import * as _159 from "./lightclients/solomachine/v1/solomachine";
import * as _160 from "./lightclients/solomachine/v2/solomachine";
import * as _161 from "./lightclients/tendermint/v1/tendermint";
import * as _276 from "./applications/fee/v1/query.lcd";
import * as _277 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _278 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _279 from "./applications/transfer/v1/query.lcd";
import * as _280 from "./core/channel/v1/query.lcd";
import * as _281 from "./core/client/v1/query.lcd";
import * as _282 from "./core/connection/v1/query.lcd";
import * as _283 from "./applications/fee/v1/query.rpc.Query";
import * as _284 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _285 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _286 from "./applications/transfer/v1/query.rpc.Query";
import * as _287 from "./core/channel/v1/query.rpc.Query";
import * as _288 from "./core/client/v1/query.rpc.Query";
import * as _289 from "./core/connection/v1/query.rpc.Query";
import * as _290 from "./applications/fee/v1/tx.rpc.msg";
import * as _291 from "./applications/transfer/v1/tx.rpc.msg";
import * as _292 from "./core/channel/v1/tx.rpc.msg";
import * as _293 from "./core/client/v1/tx.rpc.msg";
import * as _294 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace fee {
            const v1: {
                MsgClientImpl: typeof _290.MsgClientImpl;
                QueryClientImpl: typeof _283.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    incentivizedPackets(request: _129.QueryIncentivizedPacketsRequest): Promise<_129.QueryIncentivizedPacketsResponse>;
                    incentivizedPacket(request: _129.QueryIncentivizedPacketRequest): Promise<_129.QueryIncentivizedPacketResponse>;
                    incentivizedPacketsForChannel(request: _129.QueryIncentivizedPacketsForChannelRequest): Promise<_129.QueryIncentivizedPacketsForChannelResponse>;
                    totalRecvFees(request: _129.QueryTotalRecvFeesRequest): Promise<_129.QueryTotalRecvFeesResponse>;
                    totalAckFees(request: _129.QueryTotalAckFeesRequest): Promise<_129.QueryTotalAckFeesResponse>;
                    totalTimeoutFees(request: _129.QueryTotalTimeoutFeesRequest): Promise<_129.QueryTotalTimeoutFeesResponse>;
                    payee(request: _129.QueryPayeeRequest): Promise<_129.QueryPayeeResponse>;
                    counterpartyPayee(request: _129.QueryCounterpartyPayeeRequest): Promise<_129.QueryCounterpartyPayeeResponse>;
                    feeEnabledChannels(request: _129.QueryFeeEnabledChannelsRequest): Promise<_129.QueryFeeEnabledChannelsResponse>;
                    feeEnabledChannel(request: _129.QueryFeeEnabledChannelRequest): Promise<_129.QueryFeeEnabledChannelResponse>;
                };
                LCDQueryClient: typeof _276.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        registerPayee(value: _130.MsgRegisterPayee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        registerCounterpartyPayee(value: _130.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        payPacketFee(value: _130.MsgPayPacketFee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        payPacketFeeAsync(value: _130.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        registerPayee(value: _130.MsgRegisterPayee): {
                            typeUrl: string;
                            value: _130.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: _130.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: _130.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: _130.MsgPayPacketFee): {
                            typeUrl: string;
                            value: _130.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: _130.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: _130.MsgPayPacketFeeAsync;
                        };
                    };
                    fromJSON: {
                        registerPayee(value: any): {
                            typeUrl: string;
                            value: _130.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: any): {
                            typeUrl: string;
                            value: _130.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: any): {
                            typeUrl: string;
                            value: _130.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: any): {
                            typeUrl: string;
                            value: _130.MsgPayPacketFeeAsync;
                        };
                    };
                    fromPartial: {
                        registerPayee(value: _130.MsgRegisterPayee): {
                            typeUrl: string;
                            value: _130.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: _130.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: _130.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: _130.MsgPayPacketFee): {
                            typeUrl: string;
                            value: _130.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: _130.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: _130.MsgPayPacketFeeAsync;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.fee.v1.MsgRegisterPayee": {
                        aminoType: string;
                        toAmino: (message: _130.MsgRegisterPayee) => _130.MsgRegisterPayeeAmino;
                        fromAmino: (object: _130.MsgRegisterPayeeAmino) => _130.MsgRegisterPayee;
                    };
                    "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee": {
                        aminoType: string;
                        toAmino: (message: _130.MsgRegisterCounterpartyPayee) => _130.MsgRegisterCounterpartyPayeeAmino;
                        fromAmino: (object: _130.MsgRegisterCounterpartyPayeeAmino) => _130.MsgRegisterCounterpartyPayee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFee": {
                        aminoType: string;
                        toAmino: (message: _130.MsgPayPacketFee) => _130.MsgPayPacketFeeAmino;
                        fromAmino: (object: _130.MsgPayPacketFeeAmino) => _130.MsgPayPacketFee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFeeAsync": {
                        aminoType: string;
                        toAmino: (message: _130.MsgPayPacketFeeAsync) => _130.MsgPayPacketFeeAsyncAmino;
                        fromAmino: (object: _130.MsgPayPacketFeeAsyncAmino) => _130.MsgPayPacketFeeAsync;
                    };
                };
                MsgRegisterPayee: {
                    typeUrl: string;
                    encode(message: _130.MsgRegisterPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.MsgRegisterPayee;
                    fromPartial(object: Partial<_130.MsgRegisterPayee>): _130.MsgRegisterPayee;
                    fromAmino(object: _130.MsgRegisterPayeeAmino): _130.MsgRegisterPayee;
                    toAmino(message: _130.MsgRegisterPayee): _130.MsgRegisterPayeeAmino;
                    fromAminoMsg(object: _130.MsgRegisterPayeeAminoMsg): _130.MsgRegisterPayee;
                    toAminoMsg(message: _130.MsgRegisterPayee): _130.MsgRegisterPayeeAminoMsg;
                    fromProtoMsg(message: _130.MsgRegisterPayeeProtoMsg): _130.MsgRegisterPayee;
                    toProto(message: _130.MsgRegisterPayee): Uint8Array;
                    toProtoMsg(message: _130.MsgRegisterPayee): _130.MsgRegisterPayeeProtoMsg;
                };
                MsgRegisterPayeeResponse: {
                    typeUrl: string;
                    encode(_: _130.MsgRegisterPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _130.MsgRegisterPayeeResponse;
                    fromPartial(_: Partial<_130.MsgRegisterPayeeResponse>): _130.MsgRegisterPayeeResponse;
                    fromAmino(_: _130.MsgRegisterPayeeResponseAmino): _130.MsgRegisterPayeeResponse;
                    toAmino(_: _130.MsgRegisterPayeeResponse): _130.MsgRegisterPayeeResponseAmino;
                    fromAminoMsg(object: _130.MsgRegisterPayeeResponseAminoMsg): _130.MsgRegisterPayeeResponse;
                    toAminoMsg(message: _130.MsgRegisterPayeeResponse): _130.MsgRegisterPayeeResponseAminoMsg;
                    fromProtoMsg(message: _130.MsgRegisterPayeeResponseProtoMsg): _130.MsgRegisterPayeeResponse;
                    toProto(message: _130.MsgRegisterPayeeResponse): Uint8Array;
                    toProtoMsg(message: _130.MsgRegisterPayeeResponse): _130.MsgRegisterPayeeResponseProtoMsg;
                };
                MsgRegisterCounterpartyPayee: {
                    typeUrl: string;
                    encode(message: _130.MsgRegisterCounterpartyPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.MsgRegisterCounterpartyPayee;
                    fromPartial(object: Partial<_130.MsgRegisterCounterpartyPayee>): _130.MsgRegisterCounterpartyPayee;
                    fromAmino(object: _130.MsgRegisterCounterpartyPayeeAmino): _130.MsgRegisterCounterpartyPayee;
                    toAmino(message: _130.MsgRegisterCounterpartyPayee): _130.MsgRegisterCounterpartyPayeeAmino;
                    fromAminoMsg(object: _130.MsgRegisterCounterpartyPayeeAminoMsg): _130.MsgRegisterCounterpartyPayee;
                    toAminoMsg(message: _130.MsgRegisterCounterpartyPayee): _130.MsgRegisterCounterpartyPayeeAminoMsg;
                    fromProtoMsg(message: _130.MsgRegisterCounterpartyPayeeProtoMsg): _130.MsgRegisterCounterpartyPayee;
                    toProto(message: _130.MsgRegisterCounterpartyPayee): Uint8Array;
                    toProtoMsg(message: _130.MsgRegisterCounterpartyPayee): _130.MsgRegisterCounterpartyPayeeProtoMsg;
                };
                MsgRegisterCounterpartyPayeeResponse: {
                    typeUrl: string;
                    encode(_: _130.MsgRegisterCounterpartyPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _130.MsgRegisterCounterpartyPayeeResponse;
                    fromPartial(_: Partial<_130.MsgRegisterCounterpartyPayeeResponse>): _130.MsgRegisterCounterpartyPayeeResponse;
                    fromAmino(_: _130.MsgRegisterCounterpartyPayeeResponseAmino): _130.MsgRegisterCounterpartyPayeeResponse;
                    toAmino(_: _130.MsgRegisterCounterpartyPayeeResponse): _130.MsgRegisterCounterpartyPayeeResponseAmino;
                    fromAminoMsg(object: _130.MsgRegisterCounterpartyPayeeResponseAminoMsg): _130.MsgRegisterCounterpartyPayeeResponse;
                    toAminoMsg(message: _130.MsgRegisterCounterpartyPayeeResponse): _130.MsgRegisterCounterpartyPayeeResponseAminoMsg;
                    fromProtoMsg(message: _130.MsgRegisterCounterpartyPayeeResponseProtoMsg): _130.MsgRegisterCounterpartyPayeeResponse;
                    toProto(message: _130.MsgRegisterCounterpartyPayeeResponse): Uint8Array;
                    toProtoMsg(message: _130.MsgRegisterCounterpartyPayeeResponse): _130.MsgRegisterCounterpartyPayeeResponseProtoMsg;
                };
                MsgPayPacketFee: {
                    typeUrl: string;
                    encode(message: _130.MsgPayPacketFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.MsgPayPacketFee;
                    fromPartial(object: Partial<_130.MsgPayPacketFee>): _130.MsgPayPacketFee;
                    fromAmino(object: _130.MsgPayPacketFeeAmino): _130.MsgPayPacketFee;
                    toAmino(message: _130.MsgPayPacketFee): _130.MsgPayPacketFeeAmino;
                    fromAminoMsg(object: _130.MsgPayPacketFeeAminoMsg): _130.MsgPayPacketFee;
                    toAminoMsg(message: _130.MsgPayPacketFee): _130.MsgPayPacketFeeAminoMsg;
                    fromProtoMsg(message: _130.MsgPayPacketFeeProtoMsg): _130.MsgPayPacketFee;
                    toProto(message: _130.MsgPayPacketFee): Uint8Array;
                    toProtoMsg(message: _130.MsgPayPacketFee): _130.MsgPayPacketFeeProtoMsg;
                };
                MsgPayPacketFeeResponse: {
                    typeUrl: string;
                    encode(_: _130.MsgPayPacketFeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _130.MsgPayPacketFeeResponse;
                    fromPartial(_: Partial<_130.MsgPayPacketFeeResponse>): _130.MsgPayPacketFeeResponse;
                    fromAmino(_: _130.MsgPayPacketFeeResponseAmino): _130.MsgPayPacketFeeResponse;
                    toAmino(_: _130.MsgPayPacketFeeResponse): _130.MsgPayPacketFeeResponseAmino;
                    fromAminoMsg(object: _130.MsgPayPacketFeeResponseAminoMsg): _130.MsgPayPacketFeeResponse;
                    toAminoMsg(message: _130.MsgPayPacketFeeResponse): _130.MsgPayPacketFeeResponseAminoMsg;
                    fromProtoMsg(message: _130.MsgPayPacketFeeResponseProtoMsg): _130.MsgPayPacketFeeResponse;
                    toProto(message: _130.MsgPayPacketFeeResponse): Uint8Array;
                    toProtoMsg(message: _130.MsgPayPacketFeeResponse): _130.MsgPayPacketFeeResponseProtoMsg;
                };
                MsgPayPacketFeeAsync: {
                    typeUrl: string;
                    encode(message: _130.MsgPayPacketFeeAsync, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.MsgPayPacketFeeAsync;
                    fromPartial(object: Partial<_130.MsgPayPacketFeeAsync>): _130.MsgPayPacketFeeAsync;
                    fromAmino(object: _130.MsgPayPacketFeeAsyncAmino): _130.MsgPayPacketFeeAsync;
                    toAmino(message: _130.MsgPayPacketFeeAsync): _130.MsgPayPacketFeeAsyncAmino;
                    fromAminoMsg(object: _130.MsgPayPacketFeeAsyncAminoMsg): _130.MsgPayPacketFeeAsync;
                    toAminoMsg(message: _130.MsgPayPacketFeeAsync): _130.MsgPayPacketFeeAsyncAminoMsg;
                    fromProtoMsg(message: _130.MsgPayPacketFeeAsyncProtoMsg): _130.MsgPayPacketFeeAsync;
                    toProto(message: _130.MsgPayPacketFeeAsync): Uint8Array;
                    toProtoMsg(message: _130.MsgPayPacketFeeAsync): _130.MsgPayPacketFeeAsyncProtoMsg;
                };
                MsgPayPacketFeeAsyncResponse: {
                    typeUrl: string;
                    encode(_: _130.MsgPayPacketFeeAsyncResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _130.MsgPayPacketFeeAsyncResponse;
                    fromPartial(_: Partial<_130.MsgPayPacketFeeAsyncResponse>): _130.MsgPayPacketFeeAsyncResponse;
                    fromAmino(_: _130.MsgPayPacketFeeAsyncResponseAmino): _130.MsgPayPacketFeeAsyncResponse;
                    toAmino(_: _130.MsgPayPacketFeeAsyncResponse): _130.MsgPayPacketFeeAsyncResponseAmino;
                    fromAminoMsg(object: _130.MsgPayPacketFeeAsyncResponseAminoMsg): _130.MsgPayPacketFeeAsyncResponse;
                    toAminoMsg(message: _130.MsgPayPacketFeeAsyncResponse): _130.MsgPayPacketFeeAsyncResponseAminoMsg;
                    fromProtoMsg(message: _130.MsgPayPacketFeeAsyncResponseProtoMsg): _130.MsgPayPacketFeeAsyncResponse;
                    toProto(message: _130.MsgPayPacketFeeAsyncResponse): Uint8Array;
                    toProtoMsg(message: _130.MsgPayPacketFeeAsyncResponse): _130.MsgPayPacketFeeAsyncResponseProtoMsg;
                };
                QueryIncentivizedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _129.QueryIncentivizedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _129.QueryIncentivizedPacketsRequest;
                    fromPartial(object: Partial<_129.QueryIncentivizedPacketsRequest>): _129.QueryIncentivizedPacketsRequest;
                    fromAmino(object: _129.QueryIncentivizedPacketsRequestAmino): _129.QueryIncentivizedPacketsRequest;
                    toAmino(message: _129.QueryIncentivizedPacketsRequest): _129.QueryIncentivizedPacketsRequestAmino;
                    fromAminoMsg(object: _129.QueryIncentivizedPacketsRequestAminoMsg): _129.QueryIncentivizedPacketsRequest;
                    toAminoMsg(message: _129.QueryIncentivizedPacketsRequest): _129.QueryIncentivizedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _129.QueryIncentivizedPacketsRequestProtoMsg): _129.QueryIncentivizedPacketsRequest;
                    toProto(message: _129.QueryIncentivizedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _129.QueryIncentivizedPacketsRequest): _129.QueryIncentivizedPacketsRequestProtoMsg;
                };
                QueryIncentivizedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _129.QueryIncentivizedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _129.QueryIncentivizedPacketsResponse;
                    fromPartial(object: Partial<_129.QueryIncentivizedPacketsResponse>): _129.QueryIncentivizedPacketsResponse;
                    fromAmino(object: _129.QueryIncentivizedPacketsResponseAmino): _129.QueryIncentivizedPacketsResponse;
                    toAmino(message: _129.QueryIncentivizedPacketsResponse): _129.QueryIncentivizedPacketsResponseAmino;
                    fromAminoMsg(object: _129.QueryIncentivizedPacketsResponseAminoMsg): _129.QueryIncentivizedPacketsResponse;
                    toAminoMsg(message: _129.QueryIncentivizedPacketsResponse): _129.QueryIncentivizedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _129.QueryIncentivizedPacketsResponseProtoMsg): _129.QueryIncentivizedPacketsResponse;
                    toProto(message: _129.QueryIncentivizedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _129.QueryIncentivizedPacketsResponse): _129.QueryIncentivizedPacketsResponseProtoMsg;
                };
                QueryIncentivizedPacketRequest: {
                    typeUrl: string;
                    encode(message: _129.QueryIncentivizedPacketRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _129.QueryIncentivizedPacketRequest;
                    fromPartial(object: Partial<_129.QueryIncentivizedPacketRequest>): _129.QueryIncentivizedPacketRequest;
                    fromAmino(object: _129.QueryIncentivizedPacketRequestAmino): _129.QueryIncentivizedPacketRequest;
                    toAmino(message: _129.QueryIncentivizedPacketRequest): _129.QueryIncentivizedPacketRequestAmino;
                    fromAminoMsg(object: _129.QueryIncentivizedPacketRequestAminoMsg): _129.QueryIncentivizedPacketRequest;
                    toAminoMsg(message: _129.QueryIncentivizedPacketRequest): _129.QueryIncentivizedPacketRequestAminoMsg;
                    fromProtoMsg(message: _129.QueryIncentivizedPacketRequestProtoMsg): _129.QueryIncentivizedPacketRequest;
                    toProto(message: _129.QueryIncentivizedPacketRequest): Uint8Array;
                    toProtoMsg(message: _129.QueryIncentivizedPacketRequest): _129.QueryIncentivizedPacketRequestProtoMsg;
                };
                QueryIncentivizedPacketResponse: {
                    typeUrl: string;
                    encode(message: _129.QueryIncentivizedPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _129.QueryIncentivizedPacketResponse;
                    fromPartial(object: Partial<_129.QueryIncentivizedPacketResponse>): _129.QueryIncentivizedPacketResponse;
                    fromAmino(object: _129.QueryIncentivizedPacketResponseAmino): _129.QueryIncentivizedPacketResponse;
                    toAmino(message: _129.QueryIncentivizedPacketResponse): _129.QueryIncentivizedPacketResponseAmino;
                    fromAminoMsg(object: _129.QueryIncentivizedPacketResponseAminoMsg): _129.QueryIncentivizedPacketResponse;
                    toAminoMsg(message: _129.QueryIncentivizedPacketResponse): _129.QueryIncentivizedPacketResponseAminoMsg;
                    fromProtoMsg(message: _129.QueryIncentivizedPacketResponseProtoMsg): _129.QueryIncentivizedPacketResponse;
                    toProto(message: _129.QueryIncentivizedPacketResponse): Uint8Array;
                    toProtoMsg(message: _129.QueryIncentivizedPacketResponse): _129.QueryIncentivizedPacketResponseProtoMsg;
                };
                QueryIncentivizedPacketsForChannelRequest: {
                    typeUrl: string;
                    encode(message: _129.QueryIncentivizedPacketsForChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _129.QueryIncentivizedPacketsForChannelRequest;
                    fromPartial(object: Partial<_129.QueryIncentivizedPacketsForChannelRequest>): _129.QueryIncentivizedPacketsForChannelRequest;
                    fromAmino(object: _129.QueryIncentivizedPacketsForChannelRequestAmino): _129.QueryIncentivizedPacketsForChannelRequest;
                    toAmino(message: _129.QueryIncentivizedPacketsForChannelRequest): _129.QueryIncentivizedPacketsForChannelRequestAmino;
                    fromAminoMsg(object: _129.QueryIncentivizedPacketsForChannelRequestAminoMsg): _129.QueryIncentivizedPacketsForChannelRequest;
                    toAminoMsg(message: _129.QueryIncentivizedPacketsForChannelRequest): _129.QueryIncentivizedPacketsForChannelRequestAminoMsg;
                    fromProtoMsg(message: _129.QueryIncentivizedPacketsForChannelRequestProtoMsg): _129.QueryIncentivizedPacketsForChannelRequest;
                    toProto(message: _129.QueryIncentivizedPacketsForChannelRequest): Uint8Array;
                    toProtoMsg(message: _129.QueryIncentivizedPacketsForChannelRequest): _129.QueryIncentivizedPacketsForChannelRequestProtoMsg;
                };
                QueryIncentivizedPacketsForChannelResponse: {
                    typeUrl: string;
                    encode(message: _129.QueryIncentivizedPacketsForChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _129.QueryIncentivizedPacketsForChannelResponse;
                    fromPartial(object: Partial<_129.QueryIncentivizedPacketsForChannelResponse>): _129.QueryIncentivizedPacketsForChannelResponse;
                    fromAmino(object: _129.QueryIncentivizedPacketsForChannelResponseAmino): _129.QueryIncentivizedPacketsForChannelResponse;
                    toAmino(message: _129.QueryIncentivizedPacketsForChannelResponse): _129.QueryIncentivizedPacketsForChannelResponseAmino;
                    fromAminoMsg(object: _129.QueryIncentivizedPacketsForChannelResponseAminoMsg): _129.QueryIncentivizedPacketsForChannelResponse;
                    toAminoMsg(message: _129.QueryIncentivizedPacketsForChannelResponse): _129.QueryIncentivizedPacketsForChannelResponseAminoMsg;
                    fromProtoMsg(message: _129.QueryIncentivizedPacketsForChannelResponseProtoMsg): _129.QueryIncentivizedPacketsForChannelResponse;
                    toProto(message: _129.QueryIncentivizedPacketsForChannelResponse): Uint8Array;
                    toProtoMsg(message: _129.QueryIncentivizedPacketsForChannelResponse): _129.QueryIncentivizedPacketsForChannelResponseProtoMsg;
                };
                QueryTotalRecvFeesRequest: {
                    typeUrl: string;
                    encode(message: _129.QueryTotalRecvFeesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _129.QueryTotalRecvFeesRequest;
                    fromPartial(object: Partial<_129.QueryTotalRecvFeesRequest>): _129.QueryTotalRecvFeesRequest;
                    fromAmino(object: _129.QueryTotalRecvFeesRequestAmino): _129.QueryTotalRecvFeesRequest;
                    toAmino(message: _129.QueryTotalRecvFeesRequest): _129.QueryTotalRecvFeesRequestAmino;
                    fromAminoMsg(object: _129.QueryTotalRecvFeesRequestAminoMsg): _129.QueryTotalRecvFeesRequest;
                    toAminoMsg(message: _129.QueryTotalRecvFeesRequest): _129.QueryTotalRecvFeesRequestAminoMsg;
                    fromProtoMsg(message: _129.QueryTotalRecvFeesRequestProtoMsg): _129.QueryTotalRecvFeesRequest;
                    toProto(message: _129.QueryTotalRecvFeesRequest): Uint8Array;
                    toProtoMsg(message: _129.QueryTotalRecvFeesRequest): _129.QueryTotalRecvFeesRequestProtoMsg;
                };
                QueryTotalRecvFeesResponse: {
                    typeUrl: string;
                    encode(message: _129.QueryTotalRecvFeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _129.QueryTotalRecvFeesResponse;
                    fromPartial(object: Partial<_129.QueryTotalRecvFeesResponse>): _129.QueryTotalRecvFeesResponse;
                    fromAmino(object: _129.QueryTotalRecvFeesResponseAmino): _129.QueryTotalRecvFeesResponse;
                    toAmino(message: _129.QueryTotalRecvFeesResponse): _129.QueryTotalRecvFeesResponseAmino;
                    fromAminoMsg(object: _129.QueryTotalRecvFeesResponseAminoMsg): _129.QueryTotalRecvFeesResponse;
                    toAminoMsg(message: _129.QueryTotalRecvFeesResponse): _129.QueryTotalRecvFeesResponseAminoMsg;
                    fromProtoMsg(message: _129.QueryTotalRecvFeesResponseProtoMsg): _129.QueryTotalRecvFeesResponse;
                    toProto(message: _129.QueryTotalRecvFeesResponse): Uint8Array;
                    toProtoMsg(message: _129.QueryTotalRecvFeesResponse): _129.QueryTotalRecvFeesResponseProtoMsg;
                };
                QueryTotalAckFeesRequest: {
                    typeUrl: string;
                    encode(message: _129.QueryTotalAckFeesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _129.QueryTotalAckFeesRequest;
                    fromPartial(object: Partial<_129.QueryTotalAckFeesRequest>): _129.QueryTotalAckFeesRequest;
                    fromAmino(object: _129.QueryTotalAckFeesRequestAmino): _129.QueryTotalAckFeesRequest;
                    toAmino(message: _129.QueryTotalAckFeesRequest): _129.QueryTotalAckFeesRequestAmino;
                    fromAminoMsg(object: _129.QueryTotalAckFeesRequestAminoMsg): _129.QueryTotalAckFeesRequest;
                    toAminoMsg(message: _129.QueryTotalAckFeesRequest): _129.QueryTotalAckFeesRequestAminoMsg;
                    fromProtoMsg(message: _129.QueryTotalAckFeesRequestProtoMsg): _129.QueryTotalAckFeesRequest;
                    toProto(message: _129.QueryTotalAckFeesRequest): Uint8Array;
                    toProtoMsg(message: _129.QueryTotalAckFeesRequest): _129.QueryTotalAckFeesRequestProtoMsg;
                };
                QueryTotalAckFeesResponse: {
                    typeUrl: string;
                    encode(message: _129.QueryTotalAckFeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _129.QueryTotalAckFeesResponse;
                    fromPartial(object: Partial<_129.QueryTotalAckFeesResponse>): _129.QueryTotalAckFeesResponse;
                    fromAmino(object: _129.QueryTotalAckFeesResponseAmino): _129.QueryTotalAckFeesResponse;
                    toAmino(message: _129.QueryTotalAckFeesResponse): _129.QueryTotalAckFeesResponseAmino;
                    fromAminoMsg(object: _129.QueryTotalAckFeesResponseAminoMsg): _129.QueryTotalAckFeesResponse;
                    toAminoMsg(message: _129.QueryTotalAckFeesResponse): _129.QueryTotalAckFeesResponseAminoMsg;
                    fromProtoMsg(message: _129.QueryTotalAckFeesResponseProtoMsg): _129.QueryTotalAckFeesResponse;
                    toProto(message: _129.QueryTotalAckFeesResponse): Uint8Array;
                    toProtoMsg(message: _129.QueryTotalAckFeesResponse): _129.QueryTotalAckFeesResponseProtoMsg;
                };
                QueryTotalTimeoutFeesRequest: {
                    typeUrl: string;
                    encode(message: _129.QueryTotalTimeoutFeesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _129.QueryTotalTimeoutFeesRequest;
                    fromPartial(object: Partial<_129.QueryTotalTimeoutFeesRequest>): _129.QueryTotalTimeoutFeesRequest;
                    fromAmino(object: _129.QueryTotalTimeoutFeesRequestAmino): _129.QueryTotalTimeoutFeesRequest;
                    toAmino(message: _129.QueryTotalTimeoutFeesRequest): _129.QueryTotalTimeoutFeesRequestAmino;
                    fromAminoMsg(object: _129.QueryTotalTimeoutFeesRequestAminoMsg): _129.QueryTotalTimeoutFeesRequest;
                    toAminoMsg(message: _129.QueryTotalTimeoutFeesRequest): _129.QueryTotalTimeoutFeesRequestAminoMsg;
                    fromProtoMsg(message: _129.QueryTotalTimeoutFeesRequestProtoMsg): _129.QueryTotalTimeoutFeesRequest;
                    toProto(message: _129.QueryTotalTimeoutFeesRequest): Uint8Array;
                    toProtoMsg(message: _129.QueryTotalTimeoutFeesRequest): _129.QueryTotalTimeoutFeesRequestProtoMsg;
                };
                QueryTotalTimeoutFeesResponse: {
                    typeUrl: string;
                    encode(message: _129.QueryTotalTimeoutFeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _129.QueryTotalTimeoutFeesResponse;
                    fromPartial(object: Partial<_129.QueryTotalTimeoutFeesResponse>): _129.QueryTotalTimeoutFeesResponse;
                    fromAmino(object: _129.QueryTotalTimeoutFeesResponseAmino): _129.QueryTotalTimeoutFeesResponse;
                    toAmino(message: _129.QueryTotalTimeoutFeesResponse): _129.QueryTotalTimeoutFeesResponseAmino;
                    fromAminoMsg(object: _129.QueryTotalTimeoutFeesResponseAminoMsg): _129.QueryTotalTimeoutFeesResponse;
                    toAminoMsg(message: _129.QueryTotalTimeoutFeesResponse): _129.QueryTotalTimeoutFeesResponseAminoMsg;
                    fromProtoMsg(message: _129.QueryTotalTimeoutFeesResponseProtoMsg): _129.QueryTotalTimeoutFeesResponse;
                    toProto(message: _129.QueryTotalTimeoutFeesResponse): Uint8Array;
                    toProtoMsg(message: _129.QueryTotalTimeoutFeesResponse): _129.QueryTotalTimeoutFeesResponseProtoMsg;
                };
                QueryPayeeRequest: {
                    typeUrl: string;
                    encode(message: _129.QueryPayeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _129.QueryPayeeRequest;
                    fromPartial(object: Partial<_129.QueryPayeeRequest>): _129.QueryPayeeRequest;
                    fromAmino(object: _129.QueryPayeeRequestAmino): _129.QueryPayeeRequest;
                    toAmino(message: _129.QueryPayeeRequest): _129.QueryPayeeRequestAmino;
                    fromAminoMsg(object: _129.QueryPayeeRequestAminoMsg): _129.QueryPayeeRequest;
                    toAminoMsg(message: _129.QueryPayeeRequest): _129.QueryPayeeRequestAminoMsg;
                    fromProtoMsg(message: _129.QueryPayeeRequestProtoMsg): _129.QueryPayeeRequest;
                    toProto(message: _129.QueryPayeeRequest): Uint8Array;
                    toProtoMsg(message: _129.QueryPayeeRequest): _129.QueryPayeeRequestProtoMsg;
                };
                QueryPayeeResponse: {
                    typeUrl: string;
                    encode(message: _129.QueryPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _129.QueryPayeeResponse;
                    fromPartial(object: Partial<_129.QueryPayeeResponse>): _129.QueryPayeeResponse;
                    fromAmino(object: _129.QueryPayeeResponseAmino): _129.QueryPayeeResponse;
                    toAmino(message: _129.QueryPayeeResponse): _129.QueryPayeeResponseAmino;
                    fromAminoMsg(object: _129.QueryPayeeResponseAminoMsg): _129.QueryPayeeResponse;
                    toAminoMsg(message: _129.QueryPayeeResponse): _129.QueryPayeeResponseAminoMsg;
                    fromProtoMsg(message: _129.QueryPayeeResponseProtoMsg): _129.QueryPayeeResponse;
                    toProto(message: _129.QueryPayeeResponse): Uint8Array;
                    toProtoMsg(message: _129.QueryPayeeResponse): _129.QueryPayeeResponseProtoMsg;
                };
                QueryCounterpartyPayeeRequest: {
                    typeUrl: string;
                    encode(message: _129.QueryCounterpartyPayeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _129.QueryCounterpartyPayeeRequest;
                    fromPartial(object: Partial<_129.QueryCounterpartyPayeeRequest>): _129.QueryCounterpartyPayeeRequest;
                    fromAmino(object: _129.QueryCounterpartyPayeeRequestAmino): _129.QueryCounterpartyPayeeRequest;
                    toAmino(message: _129.QueryCounterpartyPayeeRequest): _129.QueryCounterpartyPayeeRequestAmino;
                    fromAminoMsg(object: _129.QueryCounterpartyPayeeRequestAminoMsg): _129.QueryCounterpartyPayeeRequest;
                    toAminoMsg(message: _129.QueryCounterpartyPayeeRequest): _129.QueryCounterpartyPayeeRequestAminoMsg;
                    fromProtoMsg(message: _129.QueryCounterpartyPayeeRequestProtoMsg): _129.QueryCounterpartyPayeeRequest;
                    toProto(message: _129.QueryCounterpartyPayeeRequest): Uint8Array;
                    toProtoMsg(message: _129.QueryCounterpartyPayeeRequest): _129.QueryCounterpartyPayeeRequestProtoMsg;
                };
                QueryCounterpartyPayeeResponse: {
                    typeUrl: string;
                    encode(message: _129.QueryCounterpartyPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _129.QueryCounterpartyPayeeResponse;
                    fromPartial(object: Partial<_129.QueryCounterpartyPayeeResponse>): _129.QueryCounterpartyPayeeResponse;
                    fromAmino(object: _129.QueryCounterpartyPayeeResponseAmino): _129.QueryCounterpartyPayeeResponse;
                    toAmino(message: _129.QueryCounterpartyPayeeResponse): _129.QueryCounterpartyPayeeResponseAmino;
                    fromAminoMsg(object: _129.QueryCounterpartyPayeeResponseAminoMsg): _129.QueryCounterpartyPayeeResponse;
                    toAminoMsg(message: _129.QueryCounterpartyPayeeResponse): _129.QueryCounterpartyPayeeResponseAminoMsg;
                    fromProtoMsg(message: _129.QueryCounterpartyPayeeResponseProtoMsg): _129.QueryCounterpartyPayeeResponse;
                    toProto(message: _129.QueryCounterpartyPayeeResponse): Uint8Array;
                    toProtoMsg(message: _129.QueryCounterpartyPayeeResponse): _129.QueryCounterpartyPayeeResponseProtoMsg;
                };
                QueryFeeEnabledChannelsRequest: {
                    typeUrl: string;
                    encode(message: _129.QueryFeeEnabledChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _129.QueryFeeEnabledChannelsRequest;
                    fromPartial(object: Partial<_129.QueryFeeEnabledChannelsRequest>): _129.QueryFeeEnabledChannelsRequest;
                    fromAmino(object: _129.QueryFeeEnabledChannelsRequestAmino): _129.QueryFeeEnabledChannelsRequest;
                    toAmino(message: _129.QueryFeeEnabledChannelsRequest): _129.QueryFeeEnabledChannelsRequestAmino;
                    fromAminoMsg(object: _129.QueryFeeEnabledChannelsRequestAminoMsg): _129.QueryFeeEnabledChannelsRequest;
                    toAminoMsg(message: _129.QueryFeeEnabledChannelsRequest): _129.QueryFeeEnabledChannelsRequestAminoMsg;
                    fromProtoMsg(message: _129.QueryFeeEnabledChannelsRequestProtoMsg): _129.QueryFeeEnabledChannelsRequest;
                    toProto(message: _129.QueryFeeEnabledChannelsRequest): Uint8Array;
                    toProtoMsg(message: _129.QueryFeeEnabledChannelsRequest): _129.QueryFeeEnabledChannelsRequestProtoMsg;
                };
                QueryFeeEnabledChannelsResponse: {
                    typeUrl: string;
                    encode(message: _129.QueryFeeEnabledChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _129.QueryFeeEnabledChannelsResponse;
                    fromPartial(object: Partial<_129.QueryFeeEnabledChannelsResponse>): _129.QueryFeeEnabledChannelsResponse;
                    fromAmino(object: _129.QueryFeeEnabledChannelsResponseAmino): _129.QueryFeeEnabledChannelsResponse;
                    toAmino(message: _129.QueryFeeEnabledChannelsResponse): _129.QueryFeeEnabledChannelsResponseAmino;
                    fromAminoMsg(object: _129.QueryFeeEnabledChannelsResponseAminoMsg): _129.QueryFeeEnabledChannelsResponse;
                    toAminoMsg(message: _129.QueryFeeEnabledChannelsResponse): _129.QueryFeeEnabledChannelsResponseAminoMsg;
                    fromProtoMsg(message: _129.QueryFeeEnabledChannelsResponseProtoMsg): _129.QueryFeeEnabledChannelsResponse;
                    toProto(message: _129.QueryFeeEnabledChannelsResponse): Uint8Array;
                    toProtoMsg(message: _129.QueryFeeEnabledChannelsResponse): _129.QueryFeeEnabledChannelsResponseProtoMsg;
                };
                QueryFeeEnabledChannelRequest: {
                    typeUrl: string;
                    encode(message: _129.QueryFeeEnabledChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _129.QueryFeeEnabledChannelRequest;
                    fromPartial(object: Partial<_129.QueryFeeEnabledChannelRequest>): _129.QueryFeeEnabledChannelRequest;
                    fromAmino(object: _129.QueryFeeEnabledChannelRequestAmino): _129.QueryFeeEnabledChannelRequest;
                    toAmino(message: _129.QueryFeeEnabledChannelRequest): _129.QueryFeeEnabledChannelRequestAmino;
                    fromAminoMsg(object: _129.QueryFeeEnabledChannelRequestAminoMsg): _129.QueryFeeEnabledChannelRequest;
                    toAminoMsg(message: _129.QueryFeeEnabledChannelRequest): _129.QueryFeeEnabledChannelRequestAminoMsg;
                    fromProtoMsg(message: _129.QueryFeeEnabledChannelRequestProtoMsg): _129.QueryFeeEnabledChannelRequest;
                    toProto(message: _129.QueryFeeEnabledChannelRequest): Uint8Array;
                    toProtoMsg(message: _129.QueryFeeEnabledChannelRequest): _129.QueryFeeEnabledChannelRequestProtoMsg;
                };
                QueryFeeEnabledChannelResponse: {
                    typeUrl: string;
                    encode(message: _129.QueryFeeEnabledChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _129.QueryFeeEnabledChannelResponse;
                    fromPartial(object: Partial<_129.QueryFeeEnabledChannelResponse>): _129.QueryFeeEnabledChannelResponse;
                    fromAmino(object: _129.QueryFeeEnabledChannelResponseAmino): _129.QueryFeeEnabledChannelResponse;
                    toAmino(message: _129.QueryFeeEnabledChannelResponse): _129.QueryFeeEnabledChannelResponseAmino;
                    fromAminoMsg(object: _129.QueryFeeEnabledChannelResponseAminoMsg): _129.QueryFeeEnabledChannelResponse;
                    toAminoMsg(message: _129.QueryFeeEnabledChannelResponse): _129.QueryFeeEnabledChannelResponseAminoMsg;
                    fromProtoMsg(message: _129.QueryFeeEnabledChannelResponseProtoMsg): _129.QueryFeeEnabledChannelResponse;
                    toProto(message: _129.QueryFeeEnabledChannelResponse): Uint8Array;
                    toProtoMsg(message: _129.QueryFeeEnabledChannelResponse): _129.QueryFeeEnabledChannelResponseProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _128.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _128.Metadata;
                    fromPartial(object: Partial<_128.Metadata>): _128.Metadata;
                    fromAmino(object: _128.MetadataAmino): _128.Metadata;
                    toAmino(message: _128.Metadata): _128.MetadataAmino;
                    fromAminoMsg(object: _128.MetadataAminoMsg): _128.Metadata;
                    toAminoMsg(message: _128.Metadata): _128.MetadataAminoMsg;
                    fromProtoMsg(message: _128.MetadataProtoMsg): _128.Metadata;
                    toProto(message: _128.Metadata): Uint8Array;
                    toProtoMsg(message: _128.Metadata): _128.MetadataProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _127.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _127.GenesisState;
                    fromPartial(object: Partial<_127.GenesisState>): _127.GenesisState;
                    fromAmino(object: _127.GenesisStateAmino): _127.GenesisState;
                    toAmino(message: _127.GenesisState): _127.GenesisStateAmino;
                    fromAminoMsg(object: _127.GenesisStateAminoMsg): _127.GenesisState;
                    toAminoMsg(message: _127.GenesisState): _127.GenesisStateAminoMsg;
                    fromProtoMsg(message: _127.GenesisStateProtoMsg): _127.GenesisState;
                    toProto(message: _127.GenesisState): Uint8Array;
                    toProtoMsg(message: _127.GenesisState): _127.GenesisStateProtoMsg;
                };
                FeeEnabledChannel: {
                    typeUrl: string;
                    encode(message: _127.FeeEnabledChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _127.FeeEnabledChannel;
                    fromPartial(object: Partial<_127.FeeEnabledChannel>): _127.FeeEnabledChannel;
                    fromAmino(object: _127.FeeEnabledChannelAmino): _127.FeeEnabledChannel;
                    toAmino(message: _127.FeeEnabledChannel): _127.FeeEnabledChannelAmino;
                    fromAminoMsg(object: _127.FeeEnabledChannelAminoMsg): _127.FeeEnabledChannel;
                    toAminoMsg(message: _127.FeeEnabledChannel): _127.FeeEnabledChannelAminoMsg;
                    fromProtoMsg(message: _127.FeeEnabledChannelProtoMsg): _127.FeeEnabledChannel;
                    toProto(message: _127.FeeEnabledChannel): Uint8Array;
                    toProtoMsg(message: _127.FeeEnabledChannel): _127.FeeEnabledChannelProtoMsg;
                };
                RegisteredPayee: {
                    typeUrl: string;
                    encode(message: _127.RegisteredPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _127.RegisteredPayee;
                    fromPartial(object: Partial<_127.RegisteredPayee>): _127.RegisteredPayee;
                    fromAmino(object: _127.RegisteredPayeeAmino): _127.RegisteredPayee;
                    toAmino(message: _127.RegisteredPayee): _127.RegisteredPayeeAmino;
                    fromAminoMsg(object: _127.RegisteredPayeeAminoMsg): _127.RegisteredPayee;
                    toAminoMsg(message: _127.RegisteredPayee): _127.RegisteredPayeeAminoMsg;
                    fromProtoMsg(message: _127.RegisteredPayeeProtoMsg): _127.RegisteredPayee;
                    toProto(message: _127.RegisteredPayee): Uint8Array;
                    toProtoMsg(message: _127.RegisteredPayee): _127.RegisteredPayeeProtoMsg;
                };
                RegisteredCounterpartyPayee: {
                    typeUrl: string;
                    encode(message: _127.RegisteredCounterpartyPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _127.RegisteredCounterpartyPayee;
                    fromPartial(object: Partial<_127.RegisteredCounterpartyPayee>): _127.RegisteredCounterpartyPayee;
                    fromAmino(object: _127.RegisteredCounterpartyPayeeAmino): _127.RegisteredCounterpartyPayee;
                    toAmino(message: _127.RegisteredCounterpartyPayee): _127.RegisteredCounterpartyPayeeAmino;
                    fromAminoMsg(object: _127.RegisteredCounterpartyPayeeAminoMsg): _127.RegisteredCounterpartyPayee;
                    toAminoMsg(message: _127.RegisteredCounterpartyPayee): _127.RegisteredCounterpartyPayeeAminoMsg;
                    fromProtoMsg(message: _127.RegisteredCounterpartyPayeeProtoMsg): _127.RegisteredCounterpartyPayee;
                    toProto(message: _127.RegisteredCounterpartyPayee): Uint8Array;
                    toProtoMsg(message: _127.RegisteredCounterpartyPayee): _127.RegisteredCounterpartyPayeeProtoMsg;
                };
                ForwardRelayerAddress: {
                    typeUrl: string;
                    encode(message: _127.ForwardRelayerAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _127.ForwardRelayerAddress;
                    fromPartial(object: Partial<_127.ForwardRelayerAddress>): _127.ForwardRelayerAddress;
                    fromAmino(object: _127.ForwardRelayerAddressAmino): _127.ForwardRelayerAddress;
                    toAmino(message: _127.ForwardRelayerAddress): _127.ForwardRelayerAddressAmino;
                    fromAminoMsg(object: _127.ForwardRelayerAddressAminoMsg): _127.ForwardRelayerAddress;
                    toAminoMsg(message: _127.ForwardRelayerAddress): _127.ForwardRelayerAddressAminoMsg;
                    fromProtoMsg(message: _127.ForwardRelayerAddressProtoMsg): _127.ForwardRelayerAddress;
                    toProto(message: _127.ForwardRelayerAddress): Uint8Array;
                    toProtoMsg(message: _127.ForwardRelayerAddress): _127.ForwardRelayerAddressProtoMsg;
                };
                Fee: {
                    typeUrl: string;
                    encode(message: _126.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _126.Fee;
                    fromPartial(object: Partial<_126.Fee>): _126.Fee;
                    fromAmino(object: _126.FeeAmino): _126.Fee;
                    toAmino(message: _126.Fee): _126.FeeAmino;
                    fromAminoMsg(object: _126.FeeAminoMsg): _126.Fee;
                    toAminoMsg(message: _126.Fee): _126.FeeAminoMsg;
                    fromProtoMsg(message: _126.FeeProtoMsg): _126.Fee;
                    toProto(message: _126.Fee): Uint8Array;
                    toProtoMsg(message: _126.Fee): _126.FeeProtoMsg;
                };
                PacketFee: {
                    typeUrl: string;
                    encode(message: _126.PacketFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _126.PacketFee;
                    fromPartial(object: Partial<_126.PacketFee>): _126.PacketFee;
                    fromAmino(object: _126.PacketFeeAmino): _126.PacketFee;
                    toAmino(message: _126.PacketFee): _126.PacketFeeAmino;
                    fromAminoMsg(object: _126.PacketFeeAminoMsg): _126.PacketFee;
                    toAminoMsg(message: _126.PacketFee): _126.PacketFeeAminoMsg;
                    fromProtoMsg(message: _126.PacketFeeProtoMsg): _126.PacketFee;
                    toProto(message: _126.PacketFee): Uint8Array;
                    toProtoMsg(message: _126.PacketFee): _126.PacketFeeProtoMsg;
                };
                PacketFees: {
                    typeUrl: string;
                    encode(message: _126.PacketFees, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _126.PacketFees;
                    fromPartial(object: Partial<_126.PacketFees>): _126.PacketFees;
                    fromAmino(object: _126.PacketFeesAmino): _126.PacketFees;
                    toAmino(message: _126.PacketFees): _126.PacketFeesAmino;
                    fromAminoMsg(object: _126.PacketFeesAminoMsg): _126.PacketFees;
                    toAminoMsg(message: _126.PacketFees): _126.PacketFeesAminoMsg;
                    fromProtoMsg(message: _126.PacketFeesProtoMsg): _126.PacketFees;
                    toProto(message: _126.PacketFees): Uint8Array;
                    toProtoMsg(message: _126.PacketFees): _126.PacketFeesProtoMsg;
                };
                IdentifiedPacketFees: {
                    typeUrl: string;
                    encode(message: _126.IdentifiedPacketFees, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _126.IdentifiedPacketFees;
                    fromPartial(object: Partial<_126.IdentifiedPacketFees>): _126.IdentifiedPacketFees;
                    fromAmino(object: _126.IdentifiedPacketFeesAmino): _126.IdentifiedPacketFees;
                    toAmino(message: _126.IdentifiedPacketFees): _126.IdentifiedPacketFeesAmino;
                    fromAminoMsg(object: _126.IdentifiedPacketFeesAminoMsg): _126.IdentifiedPacketFees;
                    toAminoMsg(message: _126.IdentifiedPacketFees): _126.IdentifiedPacketFeesAminoMsg;
                    fromProtoMsg(message: _126.IdentifiedPacketFeesProtoMsg): _126.IdentifiedPacketFees;
                    toProto(message: _126.IdentifiedPacketFees): Uint8Array;
                    toProtoMsg(message: _126.IdentifiedPacketFees): _126.IdentifiedPacketFeesProtoMsg;
                };
                IncentivizedAcknowledgement: {
                    typeUrl: string;
                    encode(message: _125.IncentivizedAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.IncentivizedAcknowledgement;
                    fromPartial(object: Partial<_125.IncentivizedAcknowledgement>): _125.IncentivizedAcknowledgement;
                    fromAmino(object: _125.IncentivizedAcknowledgementAmino): _125.IncentivizedAcknowledgement;
                    toAmino(message: _125.IncentivizedAcknowledgement): _125.IncentivizedAcknowledgementAmino;
                    fromAminoMsg(object: _125.IncentivizedAcknowledgementAminoMsg): _125.IncentivizedAcknowledgement;
                    toAminoMsg(message: _125.IncentivizedAcknowledgement): _125.IncentivizedAcknowledgementAminoMsg;
                    fromProtoMsg(message: _125.IncentivizedAcknowledgementProtoMsg): _125.IncentivizedAcknowledgement;
                    toProto(message: _125.IncentivizedAcknowledgement): Uint8Array;
                    toProtoMsg(message: _125.IncentivizedAcknowledgement): _125.IncentivizedAcknowledgementProtoMsg;
                };
            };
        }
        namespace interchain_accounts {
            namespace controller {
                const v1: {
                    QueryClientImpl: typeof _284.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        interchainAccount(request: _132.QueryInterchainAccountRequest): Promise<_132.QueryInterchainAccountResponse>;
                        params(request?: _132.QueryParamsRequest): Promise<_132.QueryParamsResponse>;
                    };
                    LCDQueryClient: typeof _277.LCDQueryClient;
                    QueryInterchainAccountRequest: {
                        typeUrl: string;
                        encode(message: _132.QueryInterchainAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _132.QueryInterchainAccountRequest;
                        fromPartial(object: Partial<_132.QueryInterchainAccountRequest>): _132.QueryInterchainAccountRequest;
                        fromAmino(object: _132.QueryInterchainAccountRequestAmino): _132.QueryInterchainAccountRequest;
                        toAmino(message: _132.QueryInterchainAccountRequest): _132.QueryInterchainAccountRequestAmino;
                        fromAminoMsg(object: _132.QueryInterchainAccountRequestAminoMsg): _132.QueryInterchainAccountRequest;
                        toAminoMsg(message: _132.QueryInterchainAccountRequest): _132.QueryInterchainAccountRequestAminoMsg;
                        fromProtoMsg(message: _132.QueryInterchainAccountRequestProtoMsg): _132.QueryInterchainAccountRequest;
                        toProto(message: _132.QueryInterchainAccountRequest): Uint8Array;
                        toProtoMsg(message: _132.QueryInterchainAccountRequest): _132.QueryInterchainAccountRequestProtoMsg;
                    };
                    QueryInterchainAccountResponse: {
                        typeUrl: string;
                        encode(message: _132.QueryInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _132.QueryInterchainAccountResponse;
                        fromPartial(object: Partial<_132.QueryInterchainAccountResponse>): _132.QueryInterchainAccountResponse;
                        fromAmino(object: _132.QueryInterchainAccountResponseAmino): _132.QueryInterchainAccountResponse;
                        toAmino(message: _132.QueryInterchainAccountResponse): _132.QueryInterchainAccountResponseAmino;
                        fromAminoMsg(object: _132.QueryInterchainAccountResponseAminoMsg): _132.QueryInterchainAccountResponse;
                        toAminoMsg(message: _132.QueryInterchainAccountResponse): _132.QueryInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _132.QueryInterchainAccountResponseProtoMsg): _132.QueryInterchainAccountResponse;
                        toProto(message: _132.QueryInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _132.QueryInterchainAccountResponse): _132.QueryInterchainAccountResponseProtoMsg;
                    };
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _132.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(_: any): _132.QueryParamsRequest;
                        fromPartial(_: Partial<_132.QueryParamsRequest>): _132.QueryParamsRequest;
                        fromAmino(_: _132.QueryParamsRequestAmino): _132.QueryParamsRequest;
                        toAmino(_: _132.QueryParamsRequest): _132.QueryParamsRequestAmino;
                        fromAminoMsg(object: _132.QueryParamsRequestAminoMsg): _132.QueryParamsRequest;
                        toAminoMsg(message: _132.QueryParamsRequest): _132.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _132.QueryParamsRequestProtoMsg): _132.QueryParamsRequest;
                        toProto(message: _132.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _132.QueryParamsRequest): _132.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        encode(message: _132.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _132.QueryParamsResponse;
                        fromPartial(object: Partial<_132.QueryParamsResponse>): _132.QueryParamsResponse;
                        fromAmino(object: _132.QueryParamsResponseAmino): _132.QueryParamsResponse;
                        toAmino(message: _132.QueryParamsResponse): _132.QueryParamsResponseAmino;
                        fromAminoMsg(object: _132.QueryParamsResponseAminoMsg): _132.QueryParamsResponse;
                        toAminoMsg(message: _132.QueryParamsResponse): _132.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _132.QueryParamsResponseProtoMsg): _132.QueryParamsResponse;
                        toProto(message: _132.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _132.QueryParamsResponse): _132.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _131.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _131.Params;
                        fromPartial(object: Partial<_131.Params>): _131.Params;
                        fromAmino(object: _131.ParamsAmino): _131.Params;
                        toAmino(message: _131.Params): _131.ParamsAmino;
                        fromAminoMsg(object: _131.ParamsAminoMsg): _131.Params;
                        toAminoMsg(message: _131.Params): _131.ParamsAminoMsg;
                        fromProtoMsg(message: _131.ParamsProtoMsg): _131.Params;
                        toProto(message: _131.Params): Uint8Array;
                        toProtoMsg(message: _131.Params): _131.ParamsProtoMsg;
                    };
                };
            }
            namespace host {
                const v1: {
                    QueryClientImpl: typeof _285.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        params(request?: _134.QueryParamsRequest): Promise<_134.QueryParamsResponse>;
                    };
                    LCDQueryClient: typeof _278.LCDQueryClient;
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _134.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(_: any): _134.QueryParamsRequest;
                        fromPartial(_: Partial<_134.QueryParamsRequest>): _134.QueryParamsRequest;
                        fromAmino(_: _134.QueryParamsRequestAmino): _134.QueryParamsRequest;
                        toAmino(_: _134.QueryParamsRequest): _134.QueryParamsRequestAmino;
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
                    Params: {
                        typeUrl: string;
                        encode(message: _133.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _133.Params;
                        fromPartial(object: Partial<_133.Params>): _133.Params;
                        fromAmino(object: _133.ParamsAmino): _133.Params;
                        toAmino(message: _133.Params): _133.ParamsAmino;
                        fromAminoMsg(object: _133.ParamsAminoMsg): _133.Params;
                        toAminoMsg(message: _133.Params): _133.ParamsAminoMsg;
                        fromProtoMsg(message: _133.ParamsProtoMsg): _133.Params;
                        toProto(message: _133.Params): Uint8Array;
                        toProtoMsg(message: _133.Params): _133.ParamsProtoMsg;
                    };
                };
            }
            const v1: {
                typeFromJSON(object: any): _138.Type;
                typeToJSON(object: _138.Type): string;
                Type: typeof _138.Type;
                TypeSDKType: typeof _138.Type;
                TypeAmino: typeof _138.Type;
                InterchainAccountPacketData: {
                    typeUrl: string;
                    encode(message: _138.InterchainAccountPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _138.InterchainAccountPacketData;
                    fromPartial(object: Partial<_138.InterchainAccountPacketData>): _138.InterchainAccountPacketData;
                    fromAmino(object: _138.InterchainAccountPacketDataAmino): _138.InterchainAccountPacketData;
                    toAmino(message: _138.InterchainAccountPacketData): _138.InterchainAccountPacketDataAmino;
                    fromAminoMsg(object: _138.InterchainAccountPacketDataAminoMsg): _138.InterchainAccountPacketData;
                    toAminoMsg(message: _138.InterchainAccountPacketData): _138.InterchainAccountPacketDataAminoMsg;
                    fromProtoMsg(message: _138.InterchainAccountPacketDataProtoMsg): _138.InterchainAccountPacketData;
                    toProto(message: _138.InterchainAccountPacketData): Uint8Array;
                    toProtoMsg(message: _138.InterchainAccountPacketData): _138.InterchainAccountPacketDataProtoMsg;
                };
                CosmosTx: {
                    typeUrl: string;
                    encode(message: _138.CosmosTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _138.CosmosTx;
                    fromPartial(object: Partial<_138.CosmosTx>): _138.CosmosTx;
                    fromAmino(object: _138.CosmosTxAmino): _138.CosmosTx;
                    toAmino(message: _138.CosmosTx): _138.CosmosTxAmino;
                    fromAminoMsg(object: _138.CosmosTxAminoMsg): _138.CosmosTx;
                    toAminoMsg(message: _138.CosmosTx): _138.CosmosTxAminoMsg;
                    fromProtoMsg(message: _138.CosmosTxProtoMsg): _138.CosmosTx;
                    toProto(message: _138.CosmosTx): Uint8Array;
                    toProtoMsg(message: _138.CosmosTx): _138.CosmosTxProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _137.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _137.Metadata;
                    fromPartial(object: Partial<_137.Metadata>): _137.Metadata;
                    fromAmino(object: _137.MetadataAmino): _137.Metadata;
                    toAmino(message: _137.Metadata): _137.MetadataAmino;
                    fromAminoMsg(object: _137.MetadataAminoMsg): _137.Metadata;
                    toAminoMsg(message: _137.Metadata): _137.MetadataAminoMsg;
                    fromProtoMsg(message: _137.MetadataProtoMsg): _137.Metadata;
                    toProto(message: _137.Metadata): Uint8Array;
                    toProtoMsg(message: _137.Metadata): _137.MetadataProtoMsg;
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
                ControllerGenesisState: {
                    typeUrl: string;
                    encode(message: _136.ControllerGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _136.ControllerGenesisState;
                    fromPartial(object: Partial<_136.ControllerGenesisState>): _136.ControllerGenesisState;
                    fromAmino(object: _136.ControllerGenesisStateAmino): _136.ControllerGenesisState;
                    toAmino(message: _136.ControllerGenesisState): _136.ControllerGenesisStateAmino;
                    fromAminoMsg(object: _136.ControllerGenesisStateAminoMsg): _136.ControllerGenesisState;
                    toAminoMsg(message: _136.ControllerGenesisState): _136.ControllerGenesisStateAminoMsg;
                    fromProtoMsg(message: _136.ControllerGenesisStateProtoMsg): _136.ControllerGenesisState;
                    toProto(message: _136.ControllerGenesisState): Uint8Array;
                    toProtoMsg(message: _136.ControllerGenesisState): _136.ControllerGenesisStateProtoMsg;
                };
                HostGenesisState: {
                    typeUrl: string;
                    encode(message: _136.HostGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _136.HostGenesisState;
                    fromPartial(object: Partial<_136.HostGenesisState>): _136.HostGenesisState;
                    fromAmino(object: _136.HostGenesisStateAmino): _136.HostGenesisState;
                    toAmino(message: _136.HostGenesisState): _136.HostGenesisStateAmino;
                    fromAminoMsg(object: _136.HostGenesisStateAminoMsg): _136.HostGenesisState;
                    toAminoMsg(message: _136.HostGenesisState): _136.HostGenesisStateAminoMsg;
                    fromProtoMsg(message: _136.HostGenesisStateProtoMsg): _136.HostGenesisState;
                    toProto(message: _136.HostGenesisState): Uint8Array;
                    toProtoMsg(message: _136.HostGenesisState): _136.HostGenesisStateProtoMsg;
                };
                ActiveChannel: {
                    typeUrl: string;
                    encode(message: _136.ActiveChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _136.ActiveChannel;
                    fromPartial(object: Partial<_136.ActiveChannel>): _136.ActiveChannel;
                    fromAmino(object: _136.ActiveChannelAmino): _136.ActiveChannel;
                    toAmino(message: _136.ActiveChannel): _136.ActiveChannelAmino;
                    fromAminoMsg(object: _136.ActiveChannelAminoMsg): _136.ActiveChannel;
                    toAminoMsg(message: _136.ActiveChannel): _136.ActiveChannelAminoMsg;
                    fromProtoMsg(message: _136.ActiveChannelProtoMsg): _136.ActiveChannel;
                    toProto(message: _136.ActiveChannel): Uint8Array;
                    toProtoMsg(message: _136.ActiveChannel): _136.ActiveChannelProtoMsg;
                };
                RegisteredInterchainAccount: {
                    typeUrl: string;
                    encode(message: _136.RegisteredInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _136.RegisteredInterchainAccount;
                    fromPartial(object: Partial<_136.RegisteredInterchainAccount>): _136.RegisteredInterchainAccount;
                    fromAmino(object: _136.RegisteredInterchainAccountAmino): _136.RegisteredInterchainAccount;
                    toAmino(message: _136.RegisteredInterchainAccount): _136.RegisteredInterchainAccountAmino;
                    fromAminoMsg(object: _136.RegisteredInterchainAccountAminoMsg): _136.RegisteredInterchainAccount;
                    toAminoMsg(message: _136.RegisteredInterchainAccount): _136.RegisteredInterchainAccountAminoMsg;
                    fromProtoMsg(message: _136.RegisteredInterchainAccountProtoMsg): _136.RegisteredInterchainAccount;
                    toProto(message: _136.RegisteredInterchainAccount): Uint8Array;
                    toProtoMsg(message: _136.RegisteredInterchainAccount): _136.RegisteredInterchainAccountProtoMsg;
                };
                InterchainAccount: {
                    typeUrl: string;
                    encode(message: _135.InterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _135.InterchainAccount;
                    fromPartial(object: Partial<_135.InterchainAccount>): _135.InterchainAccount;
                    fromAmino(object: _135.InterchainAccountAmino): _135.InterchainAccount;
                    toAmino(message: _135.InterchainAccount): _135.InterchainAccountAmino;
                    fromAminoMsg(object: _135.InterchainAccountAminoMsg): _135.InterchainAccount;
                    toAminoMsg(message: _135.InterchainAccount): _135.InterchainAccountAminoMsg;
                    fromProtoMsg(message: _135.InterchainAccountProtoMsg): _135.InterchainAccount;
                    toProto(message: _135.InterchainAccount): Uint8Array;
                    toProtoMsg(message: _135.InterchainAccount): _135.InterchainAccountProtoMsg;
                };
            };
        }
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _291.MsgClientImpl;
                QueryClientImpl: typeof _286.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _140.QueryDenomTraceRequest): Promise<_140.QueryDenomTraceResponse>;
                    denomTraces(request?: _140.QueryDenomTracesRequest): Promise<_140.QueryDenomTracesResponse>;
                    params(request?: _140.QueryParamsRequest): Promise<_140.QueryParamsResponse>;
                    denomHash(request: _140.QueryDenomHashRequest): Promise<_140.QueryDenomHashResponse>;
                    escrowAddress(request: _140.QueryEscrowAddressRequest): Promise<_140.QueryEscrowAddressResponse>;
                };
                LCDQueryClient: typeof _279.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _142.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _142.MsgTransfer): {
                            typeUrl: string;
                            value: _142.MsgTransfer;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _142.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _142.MsgTransfer): {
                            typeUrl: string;
                            value: _142.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _142.MsgTransfer) => _142.MsgTransferAmino;
                        fromAmino: (object: _142.MsgTransferAmino) => _142.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    encode(message: _142.MsgTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _142.MsgTransfer;
                    fromPartial(object: Partial<_142.MsgTransfer>): _142.MsgTransfer;
                    fromAmino(object: _142.MsgTransferAmino): _142.MsgTransfer;
                    toAmino(message: _142.MsgTransfer): _142.MsgTransferAmino;
                    fromAminoMsg(object: _142.MsgTransferAminoMsg): _142.MsgTransfer;
                    toAminoMsg(message: _142.MsgTransfer): _142.MsgTransferAminoMsg;
                    fromProtoMsg(message: _142.MsgTransferProtoMsg): _142.MsgTransfer;
                    toProto(message: _142.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _142.MsgTransfer): _142.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    encode(message: _142.MsgTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _142.MsgTransferResponse;
                    fromPartial(object: Partial<_142.MsgTransferResponse>): _142.MsgTransferResponse;
                    fromAmino(object: _142.MsgTransferResponseAmino): _142.MsgTransferResponse;
                    toAmino(message: _142.MsgTransferResponse): _142.MsgTransferResponseAmino;
                    fromAminoMsg(object: _142.MsgTransferResponseAminoMsg): _142.MsgTransferResponse;
                    toAminoMsg(message: _142.MsgTransferResponse): _142.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _142.MsgTransferResponseProtoMsg): _142.MsgTransferResponse;
                    toProto(message: _142.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _142.MsgTransferResponse): _142.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    encode(message: _141.DenomTrace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _141.DenomTrace;
                    fromPartial(object: Partial<_141.DenomTrace>): _141.DenomTrace;
                    fromAmino(object: _141.DenomTraceAmino): _141.DenomTrace;
                    toAmino(message: _141.DenomTrace): _141.DenomTraceAmino;
                    fromAminoMsg(object: _141.DenomTraceAminoMsg): _141.DenomTrace;
                    toAminoMsg(message: _141.DenomTrace): _141.DenomTraceAminoMsg;
                    fromProtoMsg(message: _141.DenomTraceProtoMsg): _141.DenomTrace;
                    toProto(message: _141.DenomTrace): Uint8Array;
                    toProtoMsg(message: _141.DenomTrace): _141.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _141.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _141.Params;
                    fromPartial(object: Partial<_141.Params>): _141.Params;
                    fromAmino(object: _141.ParamsAmino): _141.Params;
                    toAmino(message: _141.Params): _141.ParamsAmino;
                    fromAminoMsg(object: _141.ParamsAminoMsg): _141.Params;
                    toAminoMsg(message: _141.Params): _141.ParamsAminoMsg;
                    fromProtoMsg(message: _141.ParamsProtoMsg): _141.Params;
                    toProto(message: _141.Params): Uint8Array;
                    toProtoMsg(message: _141.Params): _141.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    encode(message: _140.QueryDenomTraceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _140.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_140.QueryDenomTraceRequest>): _140.QueryDenomTraceRequest;
                    fromAmino(object: _140.QueryDenomTraceRequestAmino): _140.QueryDenomTraceRequest;
                    toAmino(message: _140.QueryDenomTraceRequest): _140.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _140.QueryDenomTraceRequestAminoMsg): _140.QueryDenomTraceRequest;
                    toAminoMsg(message: _140.QueryDenomTraceRequest): _140.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _140.QueryDenomTraceRequestProtoMsg): _140.QueryDenomTraceRequest;
                    toProto(message: _140.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _140.QueryDenomTraceRequest): _140.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    encode(message: _140.QueryDenomTraceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _140.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_140.QueryDenomTraceResponse>): _140.QueryDenomTraceResponse;
                    fromAmino(object: _140.QueryDenomTraceResponseAmino): _140.QueryDenomTraceResponse;
                    toAmino(message: _140.QueryDenomTraceResponse): _140.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _140.QueryDenomTraceResponseAminoMsg): _140.QueryDenomTraceResponse;
                    toAminoMsg(message: _140.QueryDenomTraceResponse): _140.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _140.QueryDenomTraceResponseProtoMsg): _140.QueryDenomTraceResponse;
                    toProto(message: _140.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _140.QueryDenomTraceResponse): _140.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    encode(message: _140.QueryDenomTracesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _140.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_140.QueryDenomTracesRequest>): _140.QueryDenomTracesRequest;
                    fromAmino(object: _140.QueryDenomTracesRequestAmino): _140.QueryDenomTracesRequest;
                    toAmino(message: _140.QueryDenomTracesRequest): _140.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _140.QueryDenomTracesRequestAminoMsg): _140.QueryDenomTracesRequest;
                    toAminoMsg(message: _140.QueryDenomTracesRequest): _140.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _140.QueryDenomTracesRequestProtoMsg): _140.QueryDenomTracesRequest;
                    toProto(message: _140.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _140.QueryDenomTracesRequest): _140.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    encode(message: _140.QueryDenomTracesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _140.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_140.QueryDenomTracesResponse>): _140.QueryDenomTracesResponse;
                    fromAmino(object: _140.QueryDenomTracesResponseAmino): _140.QueryDenomTracesResponse;
                    toAmino(message: _140.QueryDenomTracesResponse): _140.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _140.QueryDenomTracesResponseAminoMsg): _140.QueryDenomTracesResponse;
                    toAminoMsg(message: _140.QueryDenomTracesResponse): _140.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _140.QueryDenomTracesResponseProtoMsg): _140.QueryDenomTracesResponse;
                    toProto(message: _140.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _140.QueryDenomTracesResponse): _140.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _140.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _140.QueryParamsRequest;
                    fromPartial(_: Partial<_140.QueryParamsRequest>): _140.QueryParamsRequest;
                    fromAmino(_: _140.QueryParamsRequestAmino): _140.QueryParamsRequest;
                    toAmino(_: _140.QueryParamsRequest): _140.QueryParamsRequestAmino;
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
                QueryDenomHashRequest: {
                    typeUrl: string;
                    encode(message: _140.QueryDenomHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _140.QueryDenomHashRequest;
                    fromPartial(object: Partial<_140.QueryDenomHashRequest>): _140.QueryDenomHashRequest;
                    fromAmino(object: _140.QueryDenomHashRequestAmino): _140.QueryDenomHashRequest;
                    toAmino(message: _140.QueryDenomHashRequest): _140.QueryDenomHashRequestAmino;
                    fromAminoMsg(object: _140.QueryDenomHashRequestAminoMsg): _140.QueryDenomHashRequest;
                    toAminoMsg(message: _140.QueryDenomHashRequest): _140.QueryDenomHashRequestAminoMsg;
                    fromProtoMsg(message: _140.QueryDenomHashRequestProtoMsg): _140.QueryDenomHashRequest;
                    toProto(message: _140.QueryDenomHashRequest): Uint8Array;
                    toProtoMsg(message: _140.QueryDenomHashRequest): _140.QueryDenomHashRequestProtoMsg;
                };
                QueryDenomHashResponse: {
                    typeUrl: string;
                    encode(message: _140.QueryDenomHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _140.QueryDenomHashResponse;
                    fromPartial(object: Partial<_140.QueryDenomHashResponse>): _140.QueryDenomHashResponse;
                    fromAmino(object: _140.QueryDenomHashResponseAmino): _140.QueryDenomHashResponse;
                    toAmino(message: _140.QueryDenomHashResponse): _140.QueryDenomHashResponseAmino;
                    fromAminoMsg(object: _140.QueryDenomHashResponseAminoMsg): _140.QueryDenomHashResponse;
                    toAminoMsg(message: _140.QueryDenomHashResponse): _140.QueryDenomHashResponseAminoMsg;
                    fromProtoMsg(message: _140.QueryDenomHashResponseProtoMsg): _140.QueryDenomHashResponse;
                    toProto(message: _140.QueryDenomHashResponse): Uint8Array;
                    toProtoMsg(message: _140.QueryDenomHashResponse): _140.QueryDenomHashResponseProtoMsg;
                };
                QueryEscrowAddressRequest: {
                    typeUrl: string;
                    encode(message: _140.QueryEscrowAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _140.QueryEscrowAddressRequest;
                    fromPartial(object: Partial<_140.QueryEscrowAddressRequest>): _140.QueryEscrowAddressRequest;
                    fromAmino(object: _140.QueryEscrowAddressRequestAmino): _140.QueryEscrowAddressRequest;
                    toAmino(message: _140.QueryEscrowAddressRequest): _140.QueryEscrowAddressRequestAmino;
                    fromAminoMsg(object: _140.QueryEscrowAddressRequestAminoMsg): _140.QueryEscrowAddressRequest;
                    toAminoMsg(message: _140.QueryEscrowAddressRequest): _140.QueryEscrowAddressRequestAminoMsg;
                    fromProtoMsg(message: _140.QueryEscrowAddressRequestProtoMsg): _140.QueryEscrowAddressRequest;
                    toProto(message: _140.QueryEscrowAddressRequest): Uint8Array;
                    toProtoMsg(message: _140.QueryEscrowAddressRequest): _140.QueryEscrowAddressRequestProtoMsg;
                };
                QueryEscrowAddressResponse: {
                    typeUrl: string;
                    encode(message: _140.QueryEscrowAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _140.QueryEscrowAddressResponse;
                    fromPartial(object: Partial<_140.QueryEscrowAddressResponse>): _140.QueryEscrowAddressResponse;
                    fromAmino(object: _140.QueryEscrowAddressResponseAmino): _140.QueryEscrowAddressResponse;
                    toAmino(message: _140.QueryEscrowAddressResponse): _140.QueryEscrowAddressResponseAmino;
                    fromAminoMsg(object: _140.QueryEscrowAddressResponseAminoMsg): _140.QueryEscrowAddressResponse;
                    toAminoMsg(message: _140.QueryEscrowAddressResponse): _140.QueryEscrowAddressResponseAminoMsg;
                    fromProtoMsg(message: _140.QueryEscrowAddressResponseProtoMsg): _140.QueryEscrowAddressResponse;
                    toProto(message: _140.QueryEscrowAddressResponse): Uint8Array;
                    toProtoMsg(message: _140.QueryEscrowAddressResponse): _140.QueryEscrowAddressResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _139.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _139.GenesisState;
                    fromPartial(object: Partial<_139.GenesisState>): _139.GenesisState;
                    fromAmino(object: _139.GenesisStateAmino): _139.GenesisState;
                    toAmino(message: _139.GenesisState): _139.GenesisStateAmino;
                    fromAminoMsg(object: _139.GenesisStateAminoMsg): _139.GenesisState;
                    toAminoMsg(message: _139.GenesisState): _139.GenesisStateAminoMsg;
                    fromProtoMsg(message: _139.GenesisStateProtoMsg): _139.GenesisState;
                    toProto(message: _139.GenesisState): Uint8Array;
                    toProtoMsg(message: _139.GenesisState): _139.GenesisStateProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    typeUrl: string;
                    encode(message: _143.FungibleTokenPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _143.FungibleTokenPacketData;
                    fromPartial(object: Partial<_143.FungibleTokenPacketData>): _143.FungibleTokenPacketData;
                    fromAmino(object: _143.FungibleTokenPacketDataAmino): _143.FungibleTokenPacketData;
                    toAmino(message: _143.FungibleTokenPacketData): _143.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _143.FungibleTokenPacketDataAminoMsg): _143.FungibleTokenPacketData;
                    toAminoMsg(message: _143.FungibleTokenPacketData): _143.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _143.FungibleTokenPacketDataProtoMsg): _143.FungibleTokenPacketData;
                    toProto(message: _143.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _143.FungibleTokenPacketData): _143.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _292.MsgClientImpl;
                QueryClientImpl: typeof _287.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _146.QueryChannelRequest): Promise<_146.QueryChannelResponse>;
                    channels(request?: _146.QueryChannelsRequest): Promise<_146.QueryChannelsResponse>;
                    connectionChannels(request: _146.QueryConnectionChannelsRequest): Promise<_146.QueryConnectionChannelsResponse>;
                    channelClientState(request: _146.QueryChannelClientStateRequest): Promise<_146.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _146.QueryChannelConsensusStateRequest): Promise<_146.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _146.QueryPacketCommitmentRequest): Promise<_146.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _146.QueryPacketCommitmentsRequest): Promise<_146.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _146.QueryPacketReceiptRequest): Promise<_146.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _146.QueryPacketAcknowledgementRequest): Promise<_146.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _146.QueryPacketAcknowledgementsRequest): Promise<_146.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _146.QueryUnreceivedPacketsRequest): Promise<_146.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _146.QueryUnreceivedAcksRequest): Promise<_146.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _146.QueryNextSequenceReceiveRequest): Promise<_146.QueryNextSequenceReceiveResponse>;
                };
                LCDQueryClient: typeof _280.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _147.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _147.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _147.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _147.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _147.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _147.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _147.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _147.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _147.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _147.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _147.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _147.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _147.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _147.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _147.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _147.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _147.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _147.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _147.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _147.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _147.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _147.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _147.MsgRecvPacket): {
                            typeUrl: string;
                            value: _147.MsgRecvPacket;
                        };
                        timeout(value: _147.MsgTimeout): {
                            typeUrl: string;
                            value: _147.MsgTimeout;
                        };
                        timeoutOnClose(value: _147.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _147.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _147.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _147.MsgAcknowledgement;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _147.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _147.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _147.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _147.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _147.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _147.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _147.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _147.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _147.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _147.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _147.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _147.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _147.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _147.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _147.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _147.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _147.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _147.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _147.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _147.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _147.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _147.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _147.MsgRecvPacket): {
                            typeUrl: string;
                            value: _147.MsgRecvPacket;
                        };
                        timeout(value: _147.MsgTimeout): {
                            typeUrl: string;
                            value: _147.MsgTimeout;
                        };
                        timeoutOnClose(value: _147.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _147.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _147.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _147.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _147.MsgChannelOpenInit) => _147.MsgChannelOpenInitAmino;
                        fromAmino: (object: _147.MsgChannelOpenInitAmino) => _147.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _147.MsgChannelOpenTry) => _147.MsgChannelOpenTryAmino;
                        fromAmino: (object: _147.MsgChannelOpenTryAmino) => _147.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _147.MsgChannelOpenAck) => _147.MsgChannelOpenAckAmino;
                        fromAmino: (object: _147.MsgChannelOpenAckAmino) => _147.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _147.MsgChannelOpenConfirm) => _147.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _147.MsgChannelOpenConfirmAmino) => _147.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _147.MsgChannelCloseInit) => _147.MsgChannelCloseInitAmino;
                        fromAmino: (object: _147.MsgChannelCloseInitAmino) => _147.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _147.MsgChannelCloseConfirm) => _147.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _147.MsgChannelCloseConfirmAmino) => _147.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _147.MsgRecvPacket) => _147.MsgRecvPacketAmino;
                        fromAmino: (object: _147.MsgRecvPacketAmino) => _147.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _147.MsgTimeout) => _147.MsgTimeoutAmino;
                        fromAmino: (object: _147.MsgTimeoutAmino) => _147.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _147.MsgTimeoutOnClose) => _147.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _147.MsgTimeoutOnCloseAmino) => _147.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _147.MsgAcknowledgement) => _147.MsgAcknowledgementAmino;
                        fromAmino: (object: _147.MsgAcknowledgementAmino) => _147.MsgAcknowledgement;
                    };
                };
                responseResultTypeFromJSON(object: any): _147.ResponseResultType;
                responseResultTypeToJSON(object: _147.ResponseResultType): string;
                ResponseResultType: typeof _147.ResponseResultType;
                ResponseResultTypeSDKType: typeof _147.ResponseResultType;
                ResponseResultTypeAmino: typeof _147.ResponseResultType;
                MsgChannelOpenInit: {
                    typeUrl: string;
                    encode(message: _147.MsgChannelOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _147.MsgChannelOpenInit;
                    fromPartial(object: Partial<_147.MsgChannelOpenInit>): _147.MsgChannelOpenInit;
                    fromAmino(object: _147.MsgChannelOpenInitAmino): _147.MsgChannelOpenInit;
                    toAmino(message: _147.MsgChannelOpenInit): _147.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _147.MsgChannelOpenInitAminoMsg): _147.MsgChannelOpenInit;
                    toAminoMsg(message: _147.MsgChannelOpenInit): _147.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _147.MsgChannelOpenInitProtoMsg): _147.MsgChannelOpenInit;
                    toProto(message: _147.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _147.MsgChannelOpenInit): _147.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    encode(message: _147.MsgChannelOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _147.MsgChannelOpenInitResponse;
                    fromPartial(object: Partial<_147.MsgChannelOpenInitResponse>): _147.MsgChannelOpenInitResponse;
                    fromAmino(object: _147.MsgChannelOpenInitResponseAmino): _147.MsgChannelOpenInitResponse;
                    toAmino(message: _147.MsgChannelOpenInitResponse): _147.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _147.MsgChannelOpenInitResponseAminoMsg): _147.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _147.MsgChannelOpenInitResponse): _147.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _147.MsgChannelOpenInitResponseProtoMsg): _147.MsgChannelOpenInitResponse;
                    toProto(message: _147.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _147.MsgChannelOpenInitResponse): _147.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    encode(message: _147.MsgChannelOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _147.MsgChannelOpenTry;
                    fromPartial(object: Partial<_147.MsgChannelOpenTry>): _147.MsgChannelOpenTry;
                    fromAmino(object: _147.MsgChannelOpenTryAmino): _147.MsgChannelOpenTry;
                    toAmino(message: _147.MsgChannelOpenTry): _147.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _147.MsgChannelOpenTryAminoMsg): _147.MsgChannelOpenTry;
                    toAminoMsg(message: _147.MsgChannelOpenTry): _147.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _147.MsgChannelOpenTryProtoMsg): _147.MsgChannelOpenTry;
                    toProto(message: _147.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _147.MsgChannelOpenTry): _147.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    encode(message: _147.MsgChannelOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _147.MsgChannelOpenTryResponse;
                    fromPartial(object: Partial<_147.MsgChannelOpenTryResponse>): _147.MsgChannelOpenTryResponse;
                    fromAmino(object: _147.MsgChannelOpenTryResponseAmino): _147.MsgChannelOpenTryResponse;
                    toAmino(message: _147.MsgChannelOpenTryResponse): _147.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _147.MsgChannelOpenTryResponseAminoMsg): _147.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _147.MsgChannelOpenTryResponse): _147.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _147.MsgChannelOpenTryResponseProtoMsg): _147.MsgChannelOpenTryResponse;
                    toProto(message: _147.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _147.MsgChannelOpenTryResponse): _147.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    encode(message: _147.MsgChannelOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _147.MsgChannelOpenAck;
                    fromPartial(object: Partial<_147.MsgChannelOpenAck>): _147.MsgChannelOpenAck;
                    fromAmino(object: _147.MsgChannelOpenAckAmino): _147.MsgChannelOpenAck;
                    toAmino(message: _147.MsgChannelOpenAck): _147.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _147.MsgChannelOpenAckAminoMsg): _147.MsgChannelOpenAck;
                    toAminoMsg(message: _147.MsgChannelOpenAck): _147.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _147.MsgChannelOpenAckProtoMsg): _147.MsgChannelOpenAck;
                    toProto(message: _147.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _147.MsgChannelOpenAck): _147.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _147.MsgChannelOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _147.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_147.MsgChannelOpenAckResponse>): _147.MsgChannelOpenAckResponse;
                    fromAmino(_: _147.MsgChannelOpenAckResponseAmino): _147.MsgChannelOpenAckResponse;
                    toAmino(_: _147.MsgChannelOpenAckResponse): _147.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _147.MsgChannelOpenAckResponseAminoMsg): _147.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _147.MsgChannelOpenAckResponse): _147.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _147.MsgChannelOpenAckResponseProtoMsg): _147.MsgChannelOpenAckResponse;
                    toProto(message: _147.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _147.MsgChannelOpenAckResponse): _147.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    encode(message: _147.MsgChannelOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _147.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_147.MsgChannelOpenConfirm>): _147.MsgChannelOpenConfirm;
                    fromAmino(object: _147.MsgChannelOpenConfirmAmino): _147.MsgChannelOpenConfirm;
                    toAmino(message: _147.MsgChannelOpenConfirm): _147.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _147.MsgChannelOpenConfirmAminoMsg): _147.MsgChannelOpenConfirm;
                    toAminoMsg(message: _147.MsgChannelOpenConfirm): _147.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _147.MsgChannelOpenConfirmProtoMsg): _147.MsgChannelOpenConfirm;
                    toProto(message: _147.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _147.MsgChannelOpenConfirm): _147.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _147.MsgChannelOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _147.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_147.MsgChannelOpenConfirmResponse>): _147.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _147.MsgChannelOpenConfirmResponseAmino): _147.MsgChannelOpenConfirmResponse;
                    toAmino(_: _147.MsgChannelOpenConfirmResponse): _147.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _147.MsgChannelOpenConfirmResponseAminoMsg): _147.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _147.MsgChannelOpenConfirmResponse): _147.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _147.MsgChannelOpenConfirmResponseProtoMsg): _147.MsgChannelOpenConfirmResponse;
                    toProto(message: _147.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _147.MsgChannelOpenConfirmResponse): _147.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    encode(message: _147.MsgChannelCloseInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _147.MsgChannelCloseInit;
                    fromPartial(object: Partial<_147.MsgChannelCloseInit>): _147.MsgChannelCloseInit;
                    fromAmino(object: _147.MsgChannelCloseInitAmino): _147.MsgChannelCloseInit;
                    toAmino(message: _147.MsgChannelCloseInit): _147.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _147.MsgChannelCloseInitAminoMsg): _147.MsgChannelCloseInit;
                    toAminoMsg(message: _147.MsgChannelCloseInit): _147.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _147.MsgChannelCloseInitProtoMsg): _147.MsgChannelCloseInit;
                    toProto(message: _147.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _147.MsgChannelCloseInit): _147.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    encode(_: _147.MsgChannelCloseInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _147.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_147.MsgChannelCloseInitResponse>): _147.MsgChannelCloseInitResponse;
                    fromAmino(_: _147.MsgChannelCloseInitResponseAmino): _147.MsgChannelCloseInitResponse;
                    toAmino(_: _147.MsgChannelCloseInitResponse): _147.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _147.MsgChannelCloseInitResponseAminoMsg): _147.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _147.MsgChannelCloseInitResponse): _147.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _147.MsgChannelCloseInitResponseProtoMsg): _147.MsgChannelCloseInitResponse;
                    toProto(message: _147.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _147.MsgChannelCloseInitResponse): _147.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    encode(message: _147.MsgChannelCloseConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _147.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_147.MsgChannelCloseConfirm>): _147.MsgChannelCloseConfirm;
                    fromAmino(object: _147.MsgChannelCloseConfirmAmino): _147.MsgChannelCloseConfirm;
                    toAmino(message: _147.MsgChannelCloseConfirm): _147.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _147.MsgChannelCloseConfirmAminoMsg): _147.MsgChannelCloseConfirm;
                    toAminoMsg(message: _147.MsgChannelCloseConfirm): _147.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _147.MsgChannelCloseConfirmProtoMsg): _147.MsgChannelCloseConfirm;
                    toProto(message: _147.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _147.MsgChannelCloseConfirm): _147.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    encode(_: _147.MsgChannelCloseConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _147.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_147.MsgChannelCloseConfirmResponse>): _147.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _147.MsgChannelCloseConfirmResponseAmino): _147.MsgChannelCloseConfirmResponse;
                    toAmino(_: _147.MsgChannelCloseConfirmResponse): _147.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _147.MsgChannelCloseConfirmResponseAminoMsg): _147.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _147.MsgChannelCloseConfirmResponse): _147.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _147.MsgChannelCloseConfirmResponseProtoMsg): _147.MsgChannelCloseConfirmResponse;
                    toProto(message: _147.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _147.MsgChannelCloseConfirmResponse): _147.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    encode(message: _147.MsgRecvPacket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _147.MsgRecvPacket;
                    fromPartial(object: Partial<_147.MsgRecvPacket>): _147.MsgRecvPacket;
                    fromAmino(object: _147.MsgRecvPacketAmino): _147.MsgRecvPacket;
                    toAmino(message: _147.MsgRecvPacket): _147.MsgRecvPacketAmino;
                    fromAminoMsg(object: _147.MsgRecvPacketAminoMsg): _147.MsgRecvPacket;
                    toAminoMsg(message: _147.MsgRecvPacket): _147.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _147.MsgRecvPacketProtoMsg): _147.MsgRecvPacket;
                    toProto(message: _147.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _147.MsgRecvPacket): _147.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    encode(message: _147.MsgRecvPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _147.MsgRecvPacketResponse;
                    fromPartial(object: Partial<_147.MsgRecvPacketResponse>): _147.MsgRecvPacketResponse;
                    fromAmino(object: _147.MsgRecvPacketResponseAmino): _147.MsgRecvPacketResponse;
                    toAmino(message: _147.MsgRecvPacketResponse): _147.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _147.MsgRecvPacketResponseAminoMsg): _147.MsgRecvPacketResponse;
                    toAminoMsg(message: _147.MsgRecvPacketResponse): _147.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _147.MsgRecvPacketResponseProtoMsg): _147.MsgRecvPacketResponse;
                    toProto(message: _147.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _147.MsgRecvPacketResponse): _147.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    encode(message: _147.MsgTimeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _147.MsgTimeout;
                    fromPartial(object: Partial<_147.MsgTimeout>): _147.MsgTimeout;
                    fromAmino(object: _147.MsgTimeoutAmino): _147.MsgTimeout;
                    toAmino(message: _147.MsgTimeout): _147.MsgTimeoutAmino;
                    fromAminoMsg(object: _147.MsgTimeoutAminoMsg): _147.MsgTimeout;
                    toAminoMsg(message: _147.MsgTimeout): _147.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _147.MsgTimeoutProtoMsg): _147.MsgTimeout;
                    toProto(message: _147.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _147.MsgTimeout): _147.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    encode(message: _147.MsgTimeoutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _147.MsgTimeoutResponse;
                    fromPartial(object: Partial<_147.MsgTimeoutResponse>): _147.MsgTimeoutResponse;
                    fromAmino(object: _147.MsgTimeoutResponseAmino): _147.MsgTimeoutResponse;
                    toAmino(message: _147.MsgTimeoutResponse): _147.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _147.MsgTimeoutResponseAminoMsg): _147.MsgTimeoutResponse;
                    toAminoMsg(message: _147.MsgTimeoutResponse): _147.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _147.MsgTimeoutResponseProtoMsg): _147.MsgTimeoutResponse;
                    toProto(message: _147.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _147.MsgTimeoutResponse): _147.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    encode(message: _147.MsgTimeoutOnClose, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _147.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_147.MsgTimeoutOnClose>): _147.MsgTimeoutOnClose;
                    fromAmino(object: _147.MsgTimeoutOnCloseAmino): _147.MsgTimeoutOnClose;
                    toAmino(message: _147.MsgTimeoutOnClose): _147.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _147.MsgTimeoutOnCloseAminoMsg): _147.MsgTimeoutOnClose;
                    toAminoMsg(message: _147.MsgTimeoutOnClose): _147.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _147.MsgTimeoutOnCloseProtoMsg): _147.MsgTimeoutOnClose;
                    toProto(message: _147.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _147.MsgTimeoutOnClose): _147.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    encode(message: _147.MsgTimeoutOnCloseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _147.MsgTimeoutOnCloseResponse;
                    fromPartial(object: Partial<_147.MsgTimeoutOnCloseResponse>): _147.MsgTimeoutOnCloseResponse;
                    fromAmino(object: _147.MsgTimeoutOnCloseResponseAmino): _147.MsgTimeoutOnCloseResponse;
                    toAmino(message: _147.MsgTimeoutOnCloseResponse): _147.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _147.MsgTimeoutOnCloseResponseAminoMsg): _147.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _147.MsgTimeoutOnCloseResponse): _147.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _147.MsgTimeoutOnCloseResponseProtoMsg): _147.MsgTimeoutOnCloseResponse;
                    toProto(message: _147.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _147.MsgTimeoutOnCloseResponse): _147.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    encode(message: _147.MsgAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _147.MsgAcknowledgement;
                    fromPartial(object: Partial<_147.MsgAcknowledgement>): _147.MsgAcknowledgement;
                    fromAmino(object: _147.MsgAcknowledgementAmino): _147.MsgAcknowledgement;
                    toAmino(message: _147.MsgAcknowledgement): _147.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _147.MsgAcknowledgementAminoMsg): _147.MsgAcknowledgement;
                    toAminoMsg(message: _147.MsgAcknowledgement): _147.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _147.MsgAcknowledgementProtoMsg): _147.MsgAcknowledgement;
                    toProto(message: _147.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _147.MsgAcknowledgement): _147.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _147.MsgAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _147.MsgAcknowledgementResponse;
                    fromPartial(object: Partial<_147.MsgAcknowledgementResponse>): _147.MsgAcknowledgementResponse;
                    fromAmino(object: _147.MsgAcknowledgementResponseAmino): _147.MsgAcknowledgementResponse;
                    toAmino(message: _147.MsgAcknowledgementResponse): _147.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _147.MsgAcknowledgementResponseAminoMsg): _147.MsgAcknowledgementResponse;
                    toAminoMsg(message: _147.MsgAcknowledgementResponse): _147.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _147.MsgAcknowledgementResponseProtoMsg): _147.MsgAcknowledgementResponse;
                    toProto(message: _147.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _147.MsgAcknowledgementResponse): _147.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    encode(message: _146.QueryChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _146.QueryChannelRequest;
                    fromPartial(object: Partial<_146.QueryChannelRequest>): _146.QueryChannelRequest;
                    fromAmino(object: _146.QueryChannelRequestAmino): _146.QueryChannelRequest;
                    toAmino(message: _146.QueryChannelRequest): _146.QueryChannelRequestAmino;
                    fromAminoMsg(object: _146.QueryChannelRequestAminoMsg): _146.QueryChannelRequest;
                    toAminoMsg(message: _146.QueryChannelRequest): _146.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _146.QueryChannelRequestProtoMsg): _146.QueryChannelRequest;
                    toProto(message: _146.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _146.QueryChannelRequest): _146.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    encode(message: _146.QueryChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _146.QueryChannelResponse;
                    fromPartial(object: Partial<_146.QueryChannelResponse>): _146.QueryChannelResponse;
                    fromAmino(object: _146.QueryChannelResponseAmino): _146.QueryChannelResponse;
                    toAmino(message: _146.QueryChannelResponse): _146.QueryChannelResponseAmino;
                    fromAminoMsg(object: _146.QueryChannelResponseAminoMsg): _146.QueryChannelResponse;
                    toAminoMsg(message: _146.QueryChannelResponse): _146.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _146.QueryChannelResponseProtoMsg): _146.QueryChannelResponse;
                    toProto(message: _146.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _146.QueryChannelResponse): _146.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    encode(message: _146.QueryChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _146.QueryChannelsRequest;
                    fromPartial(object: Partial<_146.QueryChannelsRequest>): _146.QueryChannelsRequest;
                    fromAmino(object: _146.QueryChannelsRequestAmino): _146.QueryChannelsRequest;
                    toAmino(message: _146.QueryChannelsRequest): _146.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _146.QueryChannelsRequestAminoMsg): _146.QueryChannelsRequest;
                    toAminoMsg(message: _146.QueryChannelsRequest): _146.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _146.QueryChannelsRequestProtoMsg): _146.QueryChannelsRequest;
                    toProto(message: _146.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _146.QueryChannelsRequest): _146.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    encode(message: _146.QueryChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _146.QueryChannelsResponse;
                    fromPartial(object: Partial<_146.QueryChannelsResponse>): _146.QueryChannelsResponse;
                    fromAmino(object: _146.QueryChannelsResponseAmino): _146.QueryChannelsResponse;
                    toAmino(message: _146.QueryChannelsResponse): _146.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _146.QueryChannelsResponseAminoMsg): _146.QueryChannelsResponse;
                    toAminoMsg(message: _146.QueryChannelsResponse): _146.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _146.QueryChannelsResponseProtoMsg): _146.QueryChannelsResponse;
                    toProto(message: _146.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _146.QueryChannelsResponse): _146.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    encode(message: _146.QueryConnectionChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _146.QueryConnectionChannelsRequest;
                    fromPartial(object: Partial<_146.QueryConnectionChannelsRequest>): _146.QueryConnectionChannelsRequest;
                    fromAmino(object: _146.QueryConnectionChannelsRequestAmino): _146.QueryConnectionChannelsRequest;
                    toAmino(message: _146.QueryConnectionChannelsRequest): _146.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _146.QueryConnectionChannelsRequestAminoMsg): _146.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _146.QueryConnectionChannelsRequest): _146.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _146.QueryConnectionChannelsRequestProtoMsg): _146.QueryConnectionChannelsRequest;
                    toProto(message: _146.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _146.QueryConnectionChannelsRequest): _146.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    encode(message: _146.QueryConnectionChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _146.QueryConnectionChannelsResponse;
                    fromPartial(object: Partial<_146.QueryConnectionChannelsResponse>): _146.QueryConnectionChannelsResponse;
                    fromAmino(object: _146.QueryConnectionChannelsResponseAmino): _146.QueryConnectionChannelsResponse;
                    toAmino(message: _146.QueryConnectionChannelsResponse): _146.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _146.QueryConnectionChannelsResponseAminoMsg): _146.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _146.QueryConnectionChannelsResponse): _146.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _146.QueryConnectionChannelsResponseProtoMsg): _146.QueryConnectionChannelsResponse;
                    toProto(message: _146.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _146.QueryConnectionChannelsResponse): _146.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    encode(message: _146.QueryChannelClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _146.QueryChannelClientStateRequest;
                    fromPartial(object: Partial<_146.QueryChannelClientStateRequest>): _146.QueryChannelClientStateRequest;
                    fromAmino(object: _146.QueryChannelClientStateRequestAmino): _146.QueryChannelClientStateRequest;
                    toAmino(message: _146.QueryChannelClientStateRequest): _146.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _146.QueryChannelClientStateRequestAminoMsg): _146.QueryChannelClientStateRequest;
                    toAminoMsg(message: _146.QueryChannelClientStateRequest): _146.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _146.QueryChannelClientStateRequestProtoMsg): _146.QueryChannelClientStateRequest;
                    toProto(message: _146.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _146.QueryChannelClientStateRequest): _146.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    encode(message: _146.QueryChannelClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _146.QueryChannelClientStateResponse;
                    fromPartial(object: Partial<_146.QueryChannelClientStateResponse>): _146.QueryChannelClientStateResponse;
                    fromAmino(object: _146.QueryChannelClientStateResponseAmino): _146.QueryChannelClientStateResponse;
                    toAmino(message: _146.QueryChannelClientStateResponse): _146.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _146.QueryChannelClientStateResponseAminoMsg): _146.QueryChannelClientStateResponse;
                    toAminoMsg(message: _146.QueryChannelClientStateResponse): _146.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _146.QueryChannelClientStateResponseProtoMsg): _146.QueryChannelClientStateResponse;
                    toProto(message: _146.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _146.QueryChannelClientStateResponse): _146.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _146.QueryChannelConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _146.QueryChannelConsensusStateRequest;
                    fromPartial(object: Partial<_146.QueryChannelConsensusStateRequest>): _146.QueryChannelConsensusStateRequest;
                    fromAmino(object: _146.QueryChannelConsensusStateRequestAmino): _146.QueryChannelConsensusStateRequest;
                    toAmino(message: _146.QueryChannelConsensusStateRequest): _146.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _146.QueryChannelConsensusStateRequestAminoMsg): _146.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _146.QueryChannelConsensusStateRequest): _146.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _146.QueryChannelConsensusStateRequestProtoMsg): _146.QueryChannelConsensusStateRequest;
                    toProto(message: _146.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _146.QueryChannelConsensusStateRequest): _146.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _146.QueryChannelConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _146.QueryChannelConsensusStateResponse;
                    fromPartial(object: Partial<_146.QueryChannelConsensusStateResponse>): _146.QueryChannelConsensusStateResponse;
                    fromAmino(object: _146.QueryChannelConsensusStateResponseAmino): _146.QueryChannelConsensusStateResponse;
                    toAmino(message: _146.QueryChannelConsensusStateResponse): _146.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _146.QueryChannelConsensusStateResponseAminoMsg): _146.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _146.QueryChannelConsensusStateResponse): _146.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _146.QueryChannelConsensusStateResponseProtoMsg): _146.QueryChannelConsensusStateResponse;
                    toProto(message: _146.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _146.QueryChannelConsensusStateResponse): _146.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    encode(message: _146.QueryPacketCommitmentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _146.QueryPacketCommitmentRequest;
                    fromPartial(object: Partial<_146.QueryPacketCommitmentRequest>): _146.QueryPacketCommitmentRequest;
                    fromAmino(object: _146.QueryPacketCommitmentRequestAmino): _146.QueryPacketCommitmentRequest;
                    toAmino(message: _146.QueryPacketCommitmentRequest): _146.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _146.QueryPacketCommitmentRequestAminoMsg): _146.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _146.QueryPacketCommitmentRequest): _146.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _146.QueryPacketCommitmentRequestProtoMsg): _146.QueryPacketCommitmentRequest;
                    toProto(message: _146.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _146.QueryPacketCommitmentRequest): _146.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    encode(message: _146.QueryPacketCommitmentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _146.QueryPacketCommitmentResponse;
                    fromPartial(object: Partial<_146.QueryPacketCommitmentResponse>): _146.QueryPacketCommitmentResponse;
                    fromAmino(object: _146.QueryPacketCommitmentResponseAmino): _146.QueryPacketCommitmentResponse;
                    toAmino(message: _146.QueryPacketCommitmentResponse): _146.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _146.QueryPacketCommitmentResponseAminoMsg): _146.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _146.QueryPacketCommitmentResponse): _146.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _146.QueryPacketCommitmentResponseProtoMsg): _146.QueryPacketCommitmentResponse;
                    toProto(message: _146.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _146.QueryPacketCommitmentResponse): _146.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    encode(message: _146.QueryPacketCommitmentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _146.QueryPacketCommitmentsRequest;
                    fromPartial(object: Partial<_146.QueryPacketCommitmentsRequest>): _146.QueryPacketCommitmentsRequest;
                    fromAmino(object: _146.QueryPacketCommitmentsRequestAmino): _146.QueryPacketCommitmentsRequest;
                    toAmino(message: _146.QueryPacketCommitmentsRequest): _146.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _146.QueryPacketCommitmentsRequestAminoMsg): _146.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _146.QueryPacketCommitmentsRequest): _146.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _146.QueryPacketCommitmentsRequestProtoMsg): _146.QueryPacketCommitmentsRequest;
                    toProto(message: _146.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _146.QueryPacketCommitmentsRequest): _146.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    encode(message: _146.QueryPacketCommitmentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _146.QueryPacketCommitmentsResponse;
                    fromPartial(object: Partial<_146.QueryPacketCommitmentsResponse>): _146.QueryPacketCommitmentsResponse;
                    fromAmino(object: _146.QueryPacketCommitmentsResponseAmino): _146.QueryPacketCommitmentsResponse;
                    toAmino(message: _146.QueryPacketCommitmentsResponse): _146.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _146.QueryPacketCommitmentsResponseAminoMsg): _146.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _146.QueryPacketCommitmentsResponse): _146.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _146.QueryPacketCommitmentsResponseProtoMsg): _146.QueryPacketCommitmentsResponse;
                    toProto(message: _146.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _146.QueryPacketCommitmentsResponse): _146.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    encode(message: _146.QueryPacketReceiptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _146.QueryPacketReceiptRequest;
                    fromPartial(object: Partial<_146.QueryPacketReceiptRequest>): _146.QueryPacketReceiptRequest;
                    fromAmino(object: _146.QueryPacketReceiptRequestAmino): _146.QueryPacketReceiptRequest;
                    toAmino(message: _146.QueryPacketReceiptRequest): _146.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _146.QueryPacketReceiptRequestAminoMsg): _146.QueryPacketReceiptRequest;
                    toAminoMsg(message: _146.QueryPacketReceiptRequest): _146.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _146.QueryPacketReceiptRequestProtoMsg): _146.QueryPacketReceiptRequest;
                    toProto(message: _146.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _146.QueryPacketReceiptRequest): _146.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    encode(message: _146.QueryPacketReceiptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _146.QueryPacketReceiptResponse;
                    fromPartial(object: Partial<_146.QueryPacketReceiptResponse>): _146.QueryPacketReceiptResponse;
                    fromAmino(object: _146.QueryPacketReceiptResponseAmino): _146.QueryPacketReceiptResponse;
                    toAmino(message: _146.QueryPacketReceiptResponse): _146.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _146.QueryPacketReceiptResponseAminoMsg): _146.QueryPacketReceiptResponse;
                    toAminoMsg(message: _146.QueryPacketReceiptResponse): _146.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _146.QueryPacketReceiptResponseProtoMsg): _146.QueryPacketReceiptResponse;
                    toProto(message: _146.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _146.QueryPacketReceiptResponse): _146.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    encode(message: _146.QueryPacketAcknowledgementRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _146.QueryPacketAcknowledgementRequest;
                    fromPartial(object: Partial<_146.QueryPacketAcknowledgementRequest>): _146.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _146.QueryPacketAcknowledgementRequestAmino): _146.QueryPacketAcknowledgementRequest;
                    toAmino(message: _146.QueryPacketAcknowledgementRequest): _146.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _146.QueryPacketAcknowledgementRequestAminoMsg): _146.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _146.QueryPacketAcknowledgementRequest): _146.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _146.QueryPacketAcknowledgementRequestProtoMsg): _146.QueryPacketAcknowledgementRequest;
                    toProto(message: _146.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _146.QueryPacketAcknowledgementRequest): _146.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _146.QueryPacketAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _146.QueryPacketAcknowledgementResponse;
                    fromPartial(object: Partial<_146.QueryPacketAcknowledgementResponse>): _146.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _146.QueryPacketAcknowledgementResponseAmino): _146.QueryPacketAcknowledgementResponse;
                    toAmino(message: _146.QueryPacketAcknowledgementResponse): _146.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _146.QueryPacketAcknowledgementResponseAminoMsg): _146.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _146.QueryPacketAcknowledgementResponse): _146.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _146.QueryPacketAcknowledgementResponseProtoMsg): _146.QueryPacketAcknowledgementResponse;
                    toProto(message: _146.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _146.QueryPacketAcknowledgementResponse): _146.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    encode(message: _146.QueryPacketAcknowledgementsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _146.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: Partial<_146.QueryPacketAcknowledgementsRequest>): _146.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _146.QueryPacketAcknowledgementsRequestAmino): _146.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _146.QueryPacketAcknowledgementsRequest): _146.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _146.QueryPacketAcknowledgementsRequestAminoMsg): _146.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _146.QueryPacketAcknowledgementsRequest): _146.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _146.QueryPacketAcknowledgementsRequestProtoMsg): _146.QueryPacketAcknowledgementsRequest;
                    toProto(message: _146.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _146.QueryPacketAcknowledgementsRequest): _146.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    encode(message: _146.QueryPacketAcknowledgementsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _146.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: Partial<_146.QueryPacketAcknowledgementsResponse>): _146.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _146.QueryPacketAcknowledgementsResponseAmino): _146.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _146.QueryPacketAcknowledgementsResponse): _146.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _146.QueryPacketAcknowledgementsResponseAminoMsg): _146.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _146.QueryPacketAcknowledgementsResponse): _146.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _146.QueryPacketAcknowledgementsResponseProtoMsg): _146.QueryPacketAcknowledgementsResponse;
                    toProto(message: _146.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _146.QueryPacketAcknowledgementsResponse): _146.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _146.QueryUnreceivedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _146.QueryUnreceivedPacketsRequest;
                    fromPartial(object: Partial<_146.QueryUnreceivedPacketsRequest>): _146.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _146.QueryUnreceivedPacketsRequestAmino): _146.QueryUnreceivedPacketsRequest;
                    toAmino(message: _146.QueryUnreceivedPacketsRequest): _146.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _146.QueryUnreceivedPacketsRequestAminoMsg): _146.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _146.QueryUnreceivedPacketsRequest): _146.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _146.QueryUnreceivedPacketsRequestProtoMsg): _146.QueryUnreceivedPacketsRequest;
                    toProto(message: _146.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _146.QueryUnreceivedPacketsRequest): _146.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _146.QueryUnreceivedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _146.QueryUnreceivedPacketsResponse;
                    fromPartial(object: Partial<_146.QueryUnreceivedPacketsResponse>): _146.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _146.QueryUnreceivedPacketsResponseAmino): _146.QueryUnreceivedPacketsResponse;
                    toAmino(message: _146.QueryUnreceivedPacketsResponse): _146.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _146.QueryUnreceivedPacketsResponseAminoMsg): _146.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _146.QueryUnreceivedPacketsResponse): _146.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _146.QueryUnreceivedPacketsResponseProtoMsg): _146.QueryUnreceivedPacketsResponse;
                    toProto(message: _146.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _146.QueryUnreceivedPacketsResponse): _146.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    encode(message: _146.QueryUnreceivedAcksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _146.QueryUnreceivedAcksRequest;
                    fromPartial(object: Partial<_146.QueryUnreceivedAcksRequest>): _146.QueryUnreceivedAcksRequest;
                    fromAmino(object: _146.QueryUnreceivedAcksRequestAmino): _146.QueryUnreceivedAcksRequest;
                    toAmino(message: _146.QueryUnreceivedAcksRequest): _146.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _146.QueryUnreceivedAcksRequestAminoMsg): _146.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _146.QueryUnreceivedAcksRequest): _146.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _146.QueryUnreceivedAcksRequestProtoMsg): _146.QueryUnreceivedAcksRequest;
                    toProto(message: _146.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _146.QueryUnreceivedAcksRequest): _146.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    encode(message: _146.QueryUnreceivedAcksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _146.QueryUnreceivedAcksResponse;
                    fromPartial(object: Partial<_146.QueryUnreceivedAcksResponse>): _146.QueryUnreceivedAcksResponse;
                    fromAmino(object: _146.QueryUnreceivedAcksResponseAmino): _146.QueryUnreceivedAcksResponse;
                    toAmino(message: _146.QueryUnreceivedAcksResponse): _146.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _146.QueryUnreceivedAcksResponseAminoMsg): _146.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _146.QueryUnreceivedAcksResponse): _146.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _146.QueryUnreceivedAcksResponseProtoMsg): _146.QueryUnreceivedAcksResponse;
                    toProto(message: _146.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _146.QueryUnreceivedAcksResponse): _146.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    encode(message: _146.QueryNextSequenceReceiveRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _146.QueryNextSequenceReceiveRequest;
                    fromPartial(object: Partial<_146.QueryNextSequenceReceiveRequest>): _146.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _146.QueryNextSequenceReceiveRequestAmino): _146.QueryNextSequenceReceiveRequest;
                    toAmino(message: _146.QueryNextSequenceReceiveRequest): _146.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _146.QueryNextSequenceReceiveRequestAminoMsg): _146.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _146.QueryNextSequenceReceiveRequest): _146.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _146.QueryNextSequenceReceiveRequestProtoMsg): _146.QueryNextSequenceReceiveRequest;
                    toProto(message: _146.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _146.QueryNextSequenceReceiveRequest): _146.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    encode(message: _146.QueryNextSequenceReceiveResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _146.QueryNextSequenceReceiveResponse;
                    fromPartial(object: Partial<_146.QueryNextSequenceReceiveResponse>): _146.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _146.QueryNextSequenceReceiveResponseAmino): _146.QueryNextSequenceReceiveResponse;
                    toAmino(message: _146.QueryNextSequenceReceiveResponse): _146.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _146.QueryNextSequenceReceiveResponseAminoMsg): _146.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _146.QueryNextSequenceReceiveResponse): _146.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _146.QueryNextSequenceReceiveResponseProtoMsg): _146.QueryNextSequenceReceiveResponse;
                    toProto(message: _146.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _146.QueryNextSequenceReceiveResponse): _146.QueryNextSequenceReceiveResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _145.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _145.GenesisState;
                    fromPartial(object: Partial<_145.GenesisState>): _145.GenesisState;
                    fromAmino(object: _145.GenesisStateAmino): _145.GenesisState;
                    toAmino(message: _145.GenesisState): _145.GenesisStateAmino;
                    fromAminoMsg(object: _145.GenesisStateAminoMsg): _145.GenesisState;
                    toAminoMsg(message: _145.GenesisState): _145.GenesisStateAminoMsg;
                    fromProtoMsg(message: _145.GenesisStateProtoMsg): _145.GenesisState;
                    toProto(message: _145.GenesisState): Uint8Array;
                    toProtoMsg(message: _145.GenesisState): _145.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    typeUrl: string;
                    encode(message: _145.PacketSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _145.PacketSequence;
                    fromPartial(object: Partial<_145.PacketSequence>): _145.PacketSequence;
                    fromAmino(object: _145.PacketSequenceAmino): _145.PacketSequence;
                    toAmino(message: _145.PacketSequence): _145.PacketSequenceAmino;
                    fromAminoMsg(object: _145.PacketSequenceAminoMsg): _145.PacketSequence;
                    toAminoMsg(message: _145.PacketSequence): _145.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _145.PacketSequenceProtoMsg): _145.PacketSequence;
                    toProto(message: _145.PacketSequence): Uint8Array;
                    toProtoMsg(message: _145.PacketSequence): _145.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _144.State;
                stateToJSON(object: _144.State): string;
                orderFromJSON(object: any): _144.Order;
                orderToJSON(object: _144.Order): string;
                State: typeof _144.State;
                StateSDKType: typeof _144.State;
                StateAmino: typeof _144.State;
                Order: typeof _144.Order;
                OrderSDKType: typeof _144.Order;
                OrderAmino: typeof _144.Order;
                Channel: {
                    typeUrl: string;
                    encode(message: _144.Channel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _144.Channel;
                    fromPartial(object: Partial<_144.Channel>): _144.Channel;
                    fromAmino(object: _144.ChannelAmino): _144.Channel;
                    toAmino(message: _144.Channel): _144.ChannelAmino;
                    fromAminoMsg(object: _144.ChannelAminoMsg): _144.Channel;
                    toAminoMsg(message: _144.Channel): _144.ChannelAminoMsg;
                    fromProtoMsg(message: _144.ChannelProtoMsg): _144.Channel;
                    toProto(message: _144.Channel): Uint8Array;
                    toProtoMsg(message: _144.Channel): _144.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    encode(message: _144.IdentifiedChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _144.IdentifiedChannel;
                    fromPartial(object: Partial<_144.IdentifiedChannel>): _144.IdentifiedChannel;
                    fromAmino(object: _144.IdentifiedChannelAmino): _144.IdentifiedChannel;
                    toAmino(message: _144.IdentifiedChannel): _144.IdentifiedChannelAmino;
                    fromAminoMsg(object: _144.IdentifiedChannelAminoMsg): _144.IdentifiedChannel;
                    toAminoMsg(message: _144.IdentifiedChannel): _144.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _144.IdentifiedChannelProtoMsg): _144.IdentifiedChannel;
                    toProto(message: _144.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _144.IdentifiedChannel): _144.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _144.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _144.Counterparty;
                    fromPartial(object: Partial<_144.Counterparty>): _144.Counterparty;
                    fromAmino(object: _144.CounterpartyAmino): _144.Counterparty;
                    toAmino(message: _144.Counterparty): _144.CounterpartyAmino;
                    fromAminoMsg(object: _144.CounterpartyAminoMsg): _144.Counterparty;
                    toAminoMsg(message: _144.Counterparty): _144.CounterpartyAminoMsg;
                    fromProtoMsg(message: _144.CounterpartyProtoMsg): _144.Counterparty;
                    toProto(message: _144.Counterparty): Uint8Array;
                    toProtoMsg(message: _144.Counterparty): _144.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    encode(message: _144.Packet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _144.Packet;
                    fromPartial(object: Partial<_144.Packet>): _144.Packet;
                    fromAmino(object: _144.PacketAmino): _144.Packet;
                    toAmino(message: _144.Packet): _144.PacketAmino;
                    fromAminoMsg(object: _144.PacketAminoMsg): _144.Packet;
                    toAminoMsg(message: _144.Packet): _144.PacketAminoMsg;
                    fromProtoMsg(message: _144.PacketProtoMsg): _144.Packet;
                    toProto(message: _144.Packet): Uint8Array;
                    toProtoMsg(message: _144.Packet): _144.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    encode(message: _144.PacketState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _144.PacketState;
                    fromPartial(object: Partial<_144.PacketState>): _144.PacketState;
                    fromAmino(object: _144.PacketStateAmino): _144.PacketState;
                    toAmino(message: _144.PacketState): _144.PacketStateAmino;
                    fromAminoMsg(object: _144.PacketStateAminoMsg): _144.PacketState;
                    toAminoMsg(message: _144.PacketState): _144.PacketStateAminoMsg;
                    fromProtoMsg(message: _144.PacketStateProtoMsg): _144.PacketState;
                    toProto(message: _144.PacketState): Uint8Array;
                    toProtoMsg(message: _144.PacketState): _144.PacketStateProtoMsg;
                };
                PacketId: {
                    typeUrl: string;
                    encode(message: _144.PacketId, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _144.PacketId;
                    fromPartial(object: Partial<_144.PacketId>): _144.PacketId;
                    fromAmino(object: _144.PacketIdAmino): _144.PacketId;
                    toAmino(message: _144.PacketId): _144.PacketIdAmino;
                    fromAminoMsg(object: _144.PacketIdAminoMsg): _144.PacketId;
                    toAminoMsg(message: _144.PacketId): _144.PacketIdAminoMsg;
                    fromProtoMsg(message: _144.PacketIdProtoMsg): _144.PacketId;
                    toProto(message: _144.PacketId): Uint8Array;
                    toProtoMsg(message: _144.PacketId): _144.PacketIdProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    encode(message: _144.Acknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _144.Acknowledgement;
                    fromPartial(object: Partial<_144.Acknowledgement>): _144.Acknowledgement;
                    fromAmino(object: _144.AcknowledgementAmino): _144.Acknowledgement;
                    toAmino(message: _144.Acknowledgement): _144.AcknowledgementAmino;
                    fromAminoMsg(object: _144.AcknowledgementAminoMsg): _144.Acknowledgement;
                    toAminoMsg(message: _144.Acknowledgement): _144.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _144.AcknowledgementProtoMsg): _144.Acknowledgement;
                    toProto(message: _144.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _144.Acknowledgement): _144.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _293.MsgClientImpl;
                QueryClientImpl: typeof _288.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _150.QueryClientStateRequest): Promise<_150.QueryClientStateResponse>;
                    clientStates(request?: _150.QueryClientStatesRequest): Promise<_150.QueryClientStatesResponse>;
                    consensusState(request: _150.QueryConsensusStateRequest): Promise<_150.QueryConsensusStateResponse>;
                    consensusStates(request: _150.QueryConsensusStatesRequest): Promise<_150.QueryConsensusStatesResponse>;
                    consensusStateHeights(request: _150.QueryConsensusStateHeightsRequest): Promise<_150.QueryConsensusStateHeightsResponse>;
                    clientStatus(request: _150.QueryClientStatusRequest): Promise<_150.QueryClientStatusResponse>;
                    clientParams(request?: _150.QueryClientParamsRequest): Promise<_150.QueryClientParamsResponse>;
                    upgradedClientState(request?: _150.QueryUpgradedClientStateRequest): Promise<_150.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _150.QueryUpgradedConsensusStateRequest): Promise<_150.QueryUpgradedConsensusStateResponse>;
                };
                LCDQueryClient: typeof _281.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _151.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _151.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _151.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _151.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _151.MsgCreateClient): {
                            typeUrl: string;
                            value: _151.MsgCreateClient;
                        };
                        updateClient(value: _151.MsgUpdateClient): {
                            typeUrl: string;
                            value: _151.MsgUpdateClient;
                        };
                        upgradeClient(value: _151.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _151.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _151.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _151.MsgSubmitMisbehaviour;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _151.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _151.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _151.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _151.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _151.MsgCreateClient): {
                            typeUrl: string;
                            value: _151.MsgCreateClient;
                        };
                        updateClient(value: _151.MsgUpdateClient): {
                            typeUrl: string;
                            value: _151.MsgUpdateClient;
                        };
                        upgradeClient(value: _151.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _151.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _151.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _151.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _151.MsgCreateClient) => _151.MsgCreateClientAmino;
                        fromAmino: (object: _151.MsgCreateClientAmino) => _151.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _151.MsgUpdateClient) => _151.MsgUpdateClientAmino;
                        fromAmino: (object: _151.MsgUpdateClientAmino) => _151.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _151.MsgUpgradeClient) => _151.MsgUpgradeClientAmino;
                        fromAmino: (object: _151.MsgUpgradeClientAmino) => _151.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _151.MsgSubmitMisbehaviour) => _151.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _151.MsgSubmitMisbehaviourAmino) => _151.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    encode(message: _151.MsgCreateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _151.MsgCreateClient;
                    fromPartial(object: Partial<_151.MsgCreateClient>): _151.MsgCreateClient;
                    fromAmino(object: _151.MsgCreateClientAmino): _151.MsgCreateClient;
                    toAmino(message: _151.MsgCreateClient): _151.MsgCreateClientAmino;
                    fromAminoMsg(object: _151.MsgCreateClientAminoMsg): _151.MsgCreateClient;
                    toAminoMsg(message: _151.MsgCreateClient): _151.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _151.MsgCreateClientProtoMsg): _151.MsgCreateClient;
                    toProto(message: _151.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _151.MsgCreateClient): _151.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    encode(_: _151.MsgCreateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _151.MsgCreateClientResponse;
                    fromPartial(_: Partial<_151.MsgCreateClientResponse>): _151.MsgCreateClientResponse;
                    fromAmino(_: _151.MsgCreateClientResponseAmino): _151.MsgCreateClientResponse;
                    toAmino(_: _151.MsgCreateClientResponse): _151.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _151.MsgCreateClientResponseAminoMsg): _151.MsgCreateClientResponse;
                    toAminoMsg(message: _151.MsgCreateClientResponse): _151.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _151.MsgCreateClientResponseProtoMsg): _151.MsgCreateClientResponse;
                    toProto(message: _151.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _151.MsgCreateClientResponse): _151.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    encode(message: _151.MsgUpdateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _151.MsgUpdateClient;
                    fromPartial(object: Partial<_151.MsgUpdateClient>): _151.MsgUpdateClient;
                    fromAmino(object: _151.MsgUpdateClientAmino): _151.MsgUpdateClient;
                    toAmino(message: _151.MsgUpdateClient): _151.MsgUpdateClientAmino;
                    fromAminoMsg(object: _151.MsgUpdateClientAminoMsg): _151.MsgUpdateClient;
                    toAminoMsg(message: _151.MsgUpdateClient): _151.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _151.MsgUpdateClientProtoMsg): _151.MsgUpdateClient;
                    toProto(message: _151.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _151.MsgUpdateClient): _151.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    encode(_: _151.MsgUpdateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _151.MsgUpdateClientResponse;
                    fromPartial(_: Partial<_151.MsgUpdateClientResponse>): _151.MsgUpdateClientResponse;
                    fromAmino(_: _151.MsgUpdateClientResponseAmino): _151.MsgUpdateClientResponse;
                    toAmino(_: _151.MsgUpdateClientResponse): _151.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _151.MsgUpdateClientResponseAminoMsg): _151.MsgUpdateClientResponse;
                    toAminoMsg(message: _151.MsgUpdateClientResponse): _151.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _151.MsgUpdateClientResponseProtoMsg): _151.MsgUpdateClientResponse;
                    toProto(message: _151.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _151.MsgUpdateClientResponse): _151.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    encode(message: _151.MsgUpgradeClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _151.MsgUpgradeClient;
                    fromPartial(object: Partial<_151.MsgUpgradeClient>): _151.MsgUpgradeClient;
                    fromAmino(object: _151.MsgUpgradeClientAmino): _151.MsgUpgradeClient;
                    toAmino(message: _151.MsgUpgradeClient): _151.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _151.MsgUpgradeClientAminoMsg): _151.MsgUpgradeClient;
                    toAminoMsg(message: _151.MsgUpgradeClient): _151.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _151.MsgUpgradeClientProtoMsg): _151.MsgUpgradeClient;
                    toProto(message: _151.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _151.MsgUpgradeClient): _151.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    encode(_: _151.MsgUpgradeClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _151.MsgUpgradeClientResponse;
                    fromPartial(_: Partial<_151.MsgUpgradeClientResponse>): _151.MsgUpgradeClientResponse;
                    fromAmino(_: _151.MsgUpgradeClientResponseAmino): _151.MsgUpgradeClientResponse;
                    toAmino(_: _151.MsgUpgradeClientResponse): _151.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _151.MsgUpgradeClientResponseAminoMsg): _151.MsgUpgradeClientResponse;
                    toAminoMsg(message: _151.MsgUpgradeClientResponse): _151.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _151.MsgUpgradeClientResponseProtoMsg): _151.MsgUpgradeClientResponse;
                    toProto(message: _151.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _151.MsgUpgradeClientResponse): _151.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    encode(message: _151.MsgSubmitMisbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _151.MsgSubmitMisbehaviour;
                    fromPartial(object: Partial<_151.MsgSubmitMisbehaviour>): _151.MsgSubmitMisbehaviour;
                    fromAmino(object: _151.MsgSubmitMisbehaviourAmino): _151.MsgSubmitMisbehaviour;
                    toAmino(message: _151.MsgSubmitMisbehaviour): _151.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _151.MsgSubmitMisbehaviourAminoMsg): _151.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _151.MsgSubmitMisbehaviour): _151.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _151.MsgSubmitMisbehaviourProtoMsg): _151.MsgSubmitMisbehaviour;
                    toProto(message: _151.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _151.MsgSubmitMisbehaviour): _151.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    encode(_: _151.MsgSubmitMisbehaviourResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _151.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: Partial<_151.MsgSubmitMisbehaviourResponse>): _151.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _151.MsgSubmitMisbehaviourResponseAmino): _151.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _151.MsgSubmitMisbehaviourResponse): _151.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _151.MsgSubmitMisbehaviourResponseAminoMsg): _151.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _151.MsgSubmitMisbehaviourResponse): _151.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _151.MsgSubmitMisbehaviourResponseProtoMsg): _151.MsgSubmitMisbehaviourResponse;
                    toProto(message: _151.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _151.MsgSubmitMisbehaviourResponse): _151.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    encode(message: _150.QueryClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _150.QueryClientStateRequest;
                    fromPartial(object: Partial<_150.QueryClientStateRequest>): _150.QueryClientStateRequest;
                    fromAmino(object: _150.QueryClientStateRequestAmino): _150.QueryClientStateRequest;
                    toAmino(message: _150.QueryClientStateRequest): _150.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _150.QueryClientStateRequestAminoMsg): _150.QueryClientStateRequest;
                    toAminoMsg(message: _150.QueryClientStateRequest): _150.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _150.QueryClientStateRequestProtoMsg): _150.QueryClientStateRequest;
                    toProto(message: _150.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _150.QueryClientStateRequest): _150.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    encode(message: _150.QueryClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _150.QueryClientStateResponse;
                    fromPartial(object: Partial<_150.QueryClientStateResponse>): _150.QueryClientStateResponse;
                    fromAmino(object: _150.QueryClientStateResponseAmino): _150.QueryClientStateResponse;
                    toAmino(message: _150.QueryClientStateResponse): _150.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _150.QueryClientStateResponseAminoMsg): _150.QueryClientStateResponse;
                    toAminoMsg(message: _150.QueryClientStateResponse): _150.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _150.QueryClientStateResponseProtoMsg): _150.QueryClientStateResponse;
                    toProto(message: _150.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _150.QueryClientStateResponse): _150.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    encode(message: _150.QueryClientStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _150.QueryClientStatesRequest;
                    fromPartial(object: Partial<_150.QueryClientStatesRequest>): _150.QueryClientStatesRequest;
                    fromAmino(object: _150.QueryClientStatesRequestAmino): _150.QueryClientStatesRequest;
                    toAmino(message: _150.QueryClientStatesRequest): _150.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _150.QueryClientStatesRequestAminoMsg): _150.QueryClientStatesRequest;
                    toAminoMsg(message: _150.QueryClientStatesRequest): _150.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _150.QueryClientStatesRequestProtoMsg): _150.QueryClientStatesRequest;
                    toProto(message: _150.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _150.QueryClientStatesRequest): _150.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    encode(message: _150.QueryClientStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _150.QueryClientStatesResponse;
                    fromPartial(object: Partial<_150.QueryClientStatesResponse>): _150.QueryClientStatesResponse;
                    fromAmino(object: _150.QueryClientStatesResponseAmino): _150.QueryClientStatesResponse;
                    toAmino(message: _150.QueryClientStatesResponse): _150.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _150.QueryClientStatesResponseAminoMsg): _150.QueryClientStatesResponse;
                    toAminoMsg(message: _150.QueryClientStatesResponse): _150.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _150.QueryClientStatesResponseProtoMsg): _150.QueryClientStatesResponse;
                    toProto(message: _150.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _150.QueryClientStatesResponse): _150.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _150.QueryConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _150.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_150.QueryConsensusStateRequest>): _150.QueryConsensusStateRequest;
                    fromAmino(object: _150.QueryConsensusStateRequestAmino): _150.QueryConsensusStateRequest;
                    toAmino(message: _150.QueryConsensusStateRequest): _150.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _150.QueryConsensusStateRequestAminoMsg): _150.QueryConsensusStateRequest;
                    toAminoMsg(message: _150.QueryConsensusStateRequest): _150.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _150.QueryConsensusStateRequestProtoMsg): _150.QueryConsensusStateRequest;
                    toProto(message: _150.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _150.QueryConsensusStateRequest): _150.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _150.QueryConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _150.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_150.QueryConsensusStateResponse>): _150.QueryConsensusStateResponse;
                    fromAmino(object: _150.QueryConsensusStateResponseAmino): _150.QueryConsensusStateResponse;
                    toAmino(message: _150.QueryConsensusStateResponse): _150.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _150.QueryConsensusStateResponseAminoMsg): _150.QueryConsensusStateResponse;
                    toAminoMsg(message: _150.QueryConsensusStateResponse): _150.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _150.QueryConsensusStateResponseProtoMsg): _150.QueryConsensusStateResponse;
                    toProto(message: _150.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _150.QueryConsensusStateResponse): _150.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    encode(message: _150.QueryConsensusStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _150.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_150.QueryConsensusStatesRequest>): _150.QueryConsensusStatesRequest;
                    fromAmino(object: _150.QueryConsensusStatesRequestAmino): _150.QueryConsensusStatesRequest;
                    toAmino(message: _150.QueryConsensusStatesRequest): _150.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _150.QueryConsensusStatesRequestAminoMsg): _150.QueryConsensusStatesRequest;
                    toAminoMsg(message: _150.QueryConsensusStatesRequest): _150.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _150.QueryConsensusStatesRequestProtoMsg): _150.QueryConsensusStatesRequest;
                    toProto(message: _150.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _150.QueryConsensusStatesRequest): _150.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    encode(message: _150.QueryConsensusStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _150.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_150.QueryConsensusStatesResponse>): _150.QueryConsensusStatesResponse;
                    fromAmino(object: _150.QueryConsensusStatesResponseAmino): _150.QueryConsensusStatesResponse;
                    toAmino(message: _150.QueryConsensusStatesResponse): _150.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _150.QueryConsensusStatesResponseAminoMsg): _150.QueryConsensusStatesResponse;
                    toAminoMsg(message: _150.QueryConsensusStatesResponse): _150.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _150.QueryConsensusStatesResponseProtoMsg): _150.QueryConsensusStatesResponse;
                    toProto(message: _150.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _150.QueryConsensusStatesResponse): _150.QueryConsensusStatesResponseProtoMsg;
                };
                QueryConsensusStateHeightsRequest: {
                    typeUrl: string;
                    encode(message: _150.QueryConsensusStateHeightsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _150.QueryConsensusStateHeightsRequest;
                    fromPartial(object: Partial<_150.QueryConsensusStateHeightsRequest>): _150.QueryConsensusStateHeightsRequest;
                    fromAmino(object: _150.QueryConsensusStateHeightsRequestAmino): _150.QueryConsensusStateHeightsRequest;
                    toAmino(message: _150.QueryConsensusStateHeightsRequest): _150.QueryConsensusStateHeightsRequestAmino;
                    fromAminoMsg(object: _150.QueryConsensusStateHeightsRequestAminoMsg): _150.QueryConsensusStateHeightsRequest;
                    toAminoMsg(message: _150.QueryConsensusStateHeightsRequest): _150.QueryConsensusStateHeightsRequestAminoMsg;
                    fromProtoMsg(message: _150.QueryConsensusStateHeightsRequestProtoMsg): _150.QueryConsensusStateHeightsRequest;
                    toProto(message: _150.QueryConsensusStateHeightsRequest): Uint8Array;
                    toProtoMsg(message: _150.QueryConsensusStateHeightsRequest): _150.QueryConsensusStateHeightsRequestProtoMsg;
                };
                QueryConsensusStateHeightsResponse: {
                    typeUrl: string;
                    encode(message: _150.QueryConsensusStateHeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _150.QueryConsensusStateHeightsResponse;
                    fromPartial(object: Partial<_150.QueryConsensusStateHeightsResponse>): _150.QueryConsensusStateHeightsResponse;
                    fromAmino(object: _150.QueryConsensusStateHeightsResponseAmino): _150.QueryConsensusStateHeightsResponse;
                    toAmino(message: _150.QueryConsensusStateHeightsResponse): _150.QueryConsensusStateHeightsResponseAmino;
                    fromAminoMsg(object: _150.QueryConsensusStateHeightsResponseAminoMsg): _150.QueryConsensusStateHeightsResponse;
                    toAminoMsg(message: _150.QueryConsensusStateHeightsResponse): _150.QueryConsensusStateHeightsResponseAminoMsg;
                    fromProtoMsg(message: _150.QueryConsensusStateHeightsResponseProtoMsg): _150.QueryConsensusStateHeightsResponse;
                    toProto(message: _150.QueryConsensusStateHeightsResponse): Uint8Array;
                    toProtoMsg(message: _150.QueryConsensusStateHeightsResponse): _150.QueryConsensusStateHeightsResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    encode(message: _150.QueryClientStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _150.QueryClientStatusRequest;
                    fromPartial(object: Partial<_150.QueryClientStatusRequest>): _150.QueryClientStatusRequest;
                    fromAmino(object: _150.QueryClientStatusRequestAmino): _150.QueryClientStatusRequest;
                    toAmino(message: _150.QueryClientStatusRequest): _150.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _150.QueryClientStatusRequestAminoMsg): _150.QueryClientStatusRequest;
                    toAminoMsg(message: _150.QueryClientStatusRequest): _150.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _150.QueryClientStatusRequestProtoMsg): _150.QueryClientStatusRequest;
                    toProto(message: _150.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _150.QueryClientStatusRequest): _150.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    encode(message: _150.QueryClientStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _150.QueryClientStatusResponse;
                    fromPartial(object: Partial<_150.QueryClientStatusResponse>): _150.QueryClientStatusResponse;
                    fromAmino(object: _150.QueryClientStatusResponseAmino): _150.QueryClientStatusResponse;
                    toAmino(message: _150.QueryClientStatusResponse): _150.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _150.QueryClientStatusResponseAminoMsg): _150.QueryClientStatusResponse;
                    toAminoMsg(message: _150.QueryClientStatusResponse): _150.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _150.QueryClientStatusResponseProtoMsg): _150.QueryClientStatusResponse;
                    toProto(message: _150.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _150.QueryClientStatusResponse): _150.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    encode(_: _150.QueryClientParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _150.QueryClientParamsRequest;
                    fromPartial(_: Partial<_150.QueryClientParamsRequest>): _150.QueryClientParamsRequest;
                    fromAmino(_: _150.QueryClientParamsRequestAmino): _150.QueryClientParamsRequest;
                    toAmino(_: _150.QueryClientParamsRequest): _150.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _150.QueryClientParamsRequestAminoMsg): _150.QueryClientParamsRequest;
                    toAminoMsg(message: _150.QueryClientParamsRequest): _150.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _150.QueryClientParamsRequestProtoMsg): _150.QueryClientParamsRequest;
                    toProto(message: _150.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _150.QueryClientParamsRequest): _150.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    encode(message: _150.QueryClientParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _150.QueryClientParamsResponse;
                    fromPartial(object: Partial<_150.QueryClientParamsResponse>): _150.QueryClientParamsResponse;
                    fromAmino(object: _150.QueryClientParamsResponseAmino): _150.QueryClientParamsResponse;
                    toAmino(message: _150.QueryClientParamsResponse): _150.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _150.QueryClientParamsResponseAminoMsg): _150.QueryClientParamsResponse;
                    toAminoMsg(message: _150.QueryClientParamsResponse): _150.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _150.QueryClientParamsResponseProtoMsg): _150.QueryClientParamsResponse;
                    toProto(message: _150.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _150.QueryClientParamsResponse): _150.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    encode(_: _150.QueryUpgradedClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _150.QueryUpgradedClientStateRequest;
                    fromPartial(_: Partial<_150.QueryUpgradedClientStateRequest>): _150.QueryUpgradedClientStateRequest;
                    fromAmino(_: _150.QueryUpgradedClientStateRequestAmino): _150.QueryUpgradedClientStateRequest;
                    toAmino(_: _150.QueryUpgradedClientStateRequest): _150.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _150.QueryUpgradedClientStateRequestAminoMsg): _150.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _150.QueryUpgradedClientStateRequest): _150.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _150.QueryUpgradedClientStateRequestProtoMsg): _150.QueryUpgradedClientStateRequest;
                    toProto(message: _150.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _150.QueryUpgradedClientStateRequest): _150.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    encode(message: _150.QueryUpgradedClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _150.QueryUpgradedClientStateResponse;
                    fromPartial(object: Partial<_150.QueryUpgradedClientStateResponse>): _150.QueryUpgradedClientStateResponse;
                    fromAmino(object: _150.QueryUpgradedClientStateResponseAmino): _150.QueryUpgradedClientStateResponse;
                    toAmino(message: _150.QueryUpgradedClientStateResponse): _150.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _150.QueryUpgradedClientStateResponseAminoMsg): _150.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _150.QueryUpgradedClientStateResponse): _150.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _150.QueryUpgradedClientStateResponseProtoMsg): _150.QueryUpgradedClientStateResponse;
                    toProto(message: _150.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _150.QueryUpgradedClientStateResponse): _150.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    encode(_: _150.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _150.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: Partial<_150.QueryUpgradedConsensusStateRequest>): _150.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _150.QueryUpgradedConsensusStateRequestAmino): _150.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _150.QueryUpgradedConsensusStateRequest): _150.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _150.QueryUpgradedConsensusStateRequestAminoMsg): _150.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _150.QueryUpgradedConsensusStateRequest): _150.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _150.QueryUpgradedConsensusStateRequestProtoMsg): _150.QueryUpgradedConsensusStateRequest;
                    toProto(message: _150.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _150.QueryUpgradedConsensusStateRequest): _150.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _150.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _150.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: Partial<_150.QueryUpgradedConsensusStateResponse>): _150.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _150.QueryUpgradedConsensusStateResponseAmino): _150.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _150.QueryUpgradedConsensusStateResponse): _150.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _150.QueryUpgradedConsensusStateResponseAminoMsg): _150.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _150.QueryUpgradedConsensusStateResponse): _150.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _150.QueryUpgradedConsensusStateResponseProtoMsg): _150.QueryUpgradedConsensusStateResponse;
                    toProto(message: _150.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _150.QueryUpgradedConsensusStateResponse): _150.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _149.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _149.GenesisState;
                    fromPartial(object: Partial<_149.GenesisState>): _149.GenesisState;
                    fromAmino(object: _149.GenesisStateAmino): _149.GenesisState;
                    toAmino(message: _149.GenesisState): _149.GenesisStateAmino;
                    fromAminoMsg(object: _149.GenesisStateAminoMsg): _149.GenesisState;
                    toAminoMsg(message: _149.GenesisState): _149.GenesisStateAminoMsg;
                    fromProtoMsg(message: _149.GenesisStateProtoMsg): _149.GenesisState;
                    toProto(message: _149.GenesisState): Uint8Array;
                    toProtoMsg(message: _149.GenesisState): _149.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    typeUrl: string;
                    encode(message: _149.GenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _149.GenesisMetadata;
                    fromPartial(object: Partial<_149.GenesisMetadata>): _149.GenesisMetadata;
                    fromAmino(object: _149.GenesisMetadataAmino): _149.GenesisMetadata;
                    toAmino(message: _149.GenesisMetadata): _149.GenesisMetadataAmino;
                    fromAminoMsg(object: _149.GenesisMetadataAminoMsg): _149.GenesisMetadata;
                    toAminoMsg(message: _149.GenesisMetadata): _149.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _149.GenesisMetadataProtoMsg): _149.GenesisMetadata;
                    toProto(message: _149.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _149.GenesisMetadata): _149.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    encode(message: _149.IdentifiedGenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _149.IdentifiedGenesisMetadata;
                    fromPartial(object: Partial<_149.IdentifiedGenesisMetadata>): _149.IdentifiedGenesisMetadata;
                    fromAmino(object: _149.IdentifiedGenesisMetadataAmino): _149.IdentifiedGenesisMetadata;
                    toAmino(message: _149.IdentifiedGenesisMetadata): _149.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _149.IdentifiedGenesisMetadataAminoMsg): _149.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _149.IdentifiedGenesisMetadata): _149.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _149.IdentifiedGenesisMetadataProtoMsg): _149.IdentifiedGenesisMetadata;
                    toProto(message: _149.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _149.IdentifiedGenesisMetadata): _149.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    encode(message: _148.IdentifiedClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _148.IdentifiedClientState;
                    fromPartial(object: Partial<_148.IdentifiedClientState>): _148.IdentifiedClientState;
                    fromAmino(object: _148.IdentifiedClientStateAmino): _148.IdentifiedClientState;
                    toAmino(message: _148.IdentifiedClientState): _148.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _148.IdentifiedClientStateAminoMsg): _148.IdentifiedClientState;
                    toAminoMsg(message: _148.IdentifiedClientState): _148.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _148.IdentifiedClientStateProtoMsg): _148.IdentifiedClientState;
                    toProto(message: _148.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _148.IdentifiedClientState): _148.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    encode(message: _148.ConsensusStateWithHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _148.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_148.ConsensusStateWithHeight>): _148.ConsensusStateWithHeight;
                    fromAmino(object: _148.ConsensusStateWithHeightAmino): _148.ConsensusStateWithHeight;
                    toAmino(message: _148.ConsensusStateWithHeight): _148.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _148.ConsensusStateWithHeightAminoMsg): _148.ConsensusStateWithHeight;
                    toAminoMsg(message: _148.ConsensusStateWithHeight): _148.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _148.ConsensusStateWithHeightProtoMsg): _148.ConsensusStateWithHeight;
                    toProto(message: _148.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _148.ConsensusStateWithHeight): _148.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    encode(message: _148.ClientConsensusStates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _148.ClientConsensusStates;
                    fromPartial(object: Partial<_148.ClientConsensusStates>): _148.ClientConsensusStates;
                    fromAmino(object: _148.ClientConsensusStatesAmino): _148.ClientConsensusStates;
                    toAmino(message: _148.ClientConsensusStates): _148.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _148.ClientConsensusStatesAminoMsg): _148.ClientConsensusStates;
                    toAminoMsg(message: _148.ClientConsensusStates): _148.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _148.ClientConsensusStatesProtoMsg): _148.ClientConsensusStates;
                    toProto(message: _148.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _148.ClientConsensusStates): _148.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    encode(message: _148.ClientUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _148.ClientUpdateProposal;
                    fromPartial(object: Partial<_148.ClientUpdateProposal>): _148.ClientUpdateProposal;
                    fromAmino(object: _148.ClientUpdateProposalAmino): _148.ClientUpdateProposal;
                    toAmino(message: _148.ClientUpdateProposal): _148.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _148.ClientUpdateProposalAminoMsg): _148.ClientUpdateProposal;
                    toAminoMsg(message: _148.ClientUpdateProposal): _148.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _148.ClientUpdateProposalProtoMsg): _148.ClientUpdateProposal;
                    toProto(message: _148.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _148.ClientUpdateProposal): _148.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    encode(message: _148.UpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _148.UpgradeProposal;
                    fromPartial(object: Partial<_148.UpgradeProposal>): _148.UpgradeProposal;
                    fromAmino(object: _148.UpgradeProposalAmino): _148.UpgradeProposal;
                    toAmino(message: _148.UpgradeProposal): _148.UpgradeProposalAmino;
                    fromAminoMsg(object: _148.UpgradeProposalAminoMsg): _148.UpgradeProposal;
                    toAminoMsg(message: _148.UpgradeProposal): _148.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _148.UpgradeProposalProtoMsg): _148.UpgradeProposal;
                    toProto(message: _148.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _148.UpgradeProposal): _148.UpgradeProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    encode(message: _148.Height, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _148.Height;
                    fromPartial(object: Partial<_148.Height>): _148.Height;
                    fromAmino(object: _148.HeightAmino): _148.Height;
                    toAmino(message: _148.Height): _148.HeightAmino;
                    fromAminoMsg(object: _148.HeightAminoMsg): _148.Height;
                    toAminoMsg(message: _148.Height): _148.HeightAminoMsg;
                    fromProtoMsg(message: _148.HeightProtoMsg): _148.Height;
                    toProto(message: _148.Height): Uint8Array;
                    toProtoMsg(message: _148.Height): _148.HeightProtoMsg;
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
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    typeUrl: string;
                    encode(message: _152.MerkleRoot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _152.MerkleRoot;
                    fromPartial(object: Partial<_152.MerkleRoot>): _152.MerkleRoot;
                    fromAmino(object: _152.MerkleRootAmino): _152.MerkleRoot;
                    toAmino(message: _152.MerkleRoot): _152.MerkleRootAmino;
                    fromAminoMsg(object: _152.MerkleRootAminoMsg): _152.MerkleRoot;
                    toAminoMsg(message: _152.MerkleRoot): _152.MerkleRootAminoMsg;
                    fromProtoMsg(message: _152.MerkleRootProtoMsg): _152.MerkleRoot;
                    toProto(message: _152.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _152.MerkleRoot): _152.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    encode(message: _152.MerklePrefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _152.MerklePrefix;
                    fromPartial(object: Partial<_152.MerklePrefix>): _152.MerklePrefix;
                    fromAmino(object: _152.MerklePrefixAmino): _152.MerklePrefix;
                    toAmino(message: _152.MerklePrefix): _152.MerklePrefixAmino;
                    fromAminoMsg(object: _152.MerklePrefixAminoMsg): _152.MerklePrefix;
                    toAminoMsg(message: _152.MerklePrefix): _152.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _152.MerklePrefixProtoMsg): _152.MerklePrefix;
                    toProto(message: _152.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _152.MerklePrefix): _152.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    encode(message: _152.MerklePath, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _152.MerklePath;
                    fromPartial(object: Partial<_152.MerklePath>): _152.MerklePath;
                    fromAmino(object: _152.MerklePathAmino): _152.MerklePath;
                    toAmino(message: _152.MerklePath): _152.MerklePathAmino;
                    fromAminoMsg(object: _152.MerklePathAminoMsg): _152.MerklePath;
                    toAminoMsg(message: _152.MerklePath): _152.MerklePathAminoMsg;
                    fromProtoMsg(message: _152.MerklePathProtoMsg): _152.MerklePath;
                    toProto(message: _152.MerklePath): Uint8Array;
                    toProtoMsg(message: _152.MerklePath): _152.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    encode(message: _152.MerkleProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _152.MerkleProof;
                    fromPartial(object: Partial<_152.MerkleProof>): _152.MerkleProof;
                    fromAmino(object: _152.MerkleProofAmino): _152.MerkleProof;
                    toAmino(message: _152.MerkleProof): _152.MerkleProofAmino;
                    fromAminoMsg(object: _152.MerkleProofAminoMsg): _152.MerkleProof;
                    toAminoMsg(message: _152.MerkleProof): _152.MerkleProofAminoMsg;
                    fromProtoMsg(message: _152.MerkleProofProtoMsg): _152.MerkleProof;
                    toProto(message: _152.MerkleProof): Uint8Array;
                    toProtoMsg(message: _152.MerkleProof): _152.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _294.MsgClientImpl;
                QueryClientImpl: typeof _289.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _155.QueryConnectionRequest): Promise<_155.QueryConnectionResponse>;
                    connections(request?: _155.QueryConnectionsRequest): Promise<_155.QueryConnectionsResponse>;
                    clientConnections(request: _155.QueryClientConnectionsRequest): Promise<_155.QueryClientConnectionsResponse>;
                    connectionClientState(request: _155.QueryConnectionClientStateRequest): Promise<_155.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _155.QueryConnectionConsensusStateRequest): Promise<_155.QueryConnectionConsensusStateResponse>;
                };
                LCDQueryClient: typeof _282.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _156.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _156.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _156.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _156.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _156.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _156.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _156.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _156.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _156.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _156.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _156.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _156.MsgConnectionOpenConfirm;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _156.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _156.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _156.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _156.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _156.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _156.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _156.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _156.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _156.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _156.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _156.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _156.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _156.MsgConnectionOpenInit) => _156.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _156.MsgConnectionOpenInitAmino) => _156.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _156.MsgConnectionOpenTry) => _156.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _156.MsgConnectionOpenTryAmino) => _156.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _156.MsgConnectionOpenAck) => _156.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _156.MsgConnectionOpenAckAmino) => _156.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _156.MsgConnectionOpenConfirm) => _156.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _156.MsgConnectionOpenConfirmAmino) => _156.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    encode(message: _156.MsgConnectionOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _156.MsgConnectionOpenInit;
                    fromPartial(object: Partial<_156.MsgConnectionOpenInit>): _156.MsgConnectionOpenInit;
                    fromAmino(object: _156.MsgConnectionOpenInitAmino): _156.MsgConnectionOpenInit;
                    toAmino(message: _156.MsgConnectionOpenInit): _156.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _156.MsgConnectionOpenInitAminoMsg): _156.MsgConnectionOpenInit;
                    toAminoMsg(message: _156.MsgConnectionOpenInit): _156.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _156.MsgConnectionOpenInitProtoMsg): _156.MsgConnectionOpenInit;
                    toProto(message: _156.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _156.MsgConnectionOpenInit): _156.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _156.MsgConnectionOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _156.MsgConnectionOpenInitResponse;
                    fromPartial(_: Partial<_156.MsgConnectionOpenInitResponse>): _156.MsgConnectionOpenInitResponse;
                    fromAmino(_: _156.MsgConnectionOpenInitResponseAmino): _156.MsgConnectionOpenInitResponse;
                    toAmino(_: _156.MsgConnectionOpenInitResponse): _156.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _156.MsgConnectionOpenInitResponseAminoMsg): _156.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _156.MsgConnectionOpenInitResponse): _156.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _156.MsgConnectionOpenInitResponseProtoMsg): _156.MsgConnectionOpenInitResponse;
                    toProto(message: _156.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _156.MsgConnectionOpenInitResponse): _156.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    encode(message: _156.MsgConnectionOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _156.MsgConnectionOpenTry;
                    fromPartial(object: Partial<_156.MsgConnectionOpenTry>): _156.MsgConnectionOpenTry;
                    fromAmino(object: _156.MsgConnectionOpenTryAmino): _156.MsgConnectionOpenTry;
                    toAmino(message: _156.MsgConnectionOpenTry): _156.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _156.MsgConnectionOpenTryAminoMsg): _156.MsgConnectionOpenTry;
                    toAminoMsg(message: _156.MsgConnectionOpenTry): _156.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _156.MsgConnectionOpenTryProtoMsg): _156.MsgConnectionOpenTry;
                    toProto(message: _156.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _156.MsgConnectionOpenTry): _156.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _156.MsgConnectionOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _156.MsgConnectionOpenTryResponse;
                    fromPartial(_: Partial<_156.MsgConnectionOpenTryResponse>): _156.MsgConnectionOpenTryResponse;
                    fromAmino(_: _156.MsgConnectionOpenTryResponseAmino): _156.MsgConnectionOpenTryResponse;
                    toAmino(_: _156.MsgConnectionOpenTryResponse): _156.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _156.MsgConnectionOpenTryResponseAminoMsg): _156.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _156.MsgConnectionOpenTryResponse): _156.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _156.MsgConnectionOpenTryResponseProtoMsg): _156.MsgConnectionOpenTryResponse;
                    toProto(message: _156.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _156.MsgConnectionOpenTryResponse): _156.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    encode(message: _156.MsgConnectionOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _156.MsgConnectionOpenAck;
                    fromPartial(object: Partial<_156.MsgConnectionOpenAck>): _156.MsgConnectionOpenAck;
                    fromAmino(object: _156.MsgConnectionOpenAckAmino): _156.MsgConnectionOpenAck;
                    toAmino(message: _156.MsgConnectionOpenAck): _156.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _156.MsgConnectionOpenAckAminoMsg): _156.MsgConnectionOpenAck;
                    toAminoMsg(message: _156.MsgConnectionOpenAck): _156.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _156.MsgConnectionOpenAckProtoMsg): _156.MsgConnectionOpenAck;
                    toProto(message: _156.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _156.MsgConnectionOpenAck): _156.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _156.MsgConnectionOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _156.MsgConnectionOpenAckResponse;
                    fromPartial(_: Partial<_156.MsgConnectionOpenAckResponse>): _156.MsgConnectionOpenAckResponse;
                    fromAmino(_: _156.MsgConnectionOpenAckResponseAmino): _156.MsgConnectionOpenAckResponse;
                    toAmino(_: _156.MsgConnectionOpenAckResponse): _156.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _156.MsgConnectionOpenAckResponseAminoMsg): _156.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _156.MsgConnectionOpenAckResponse): _156.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _156.MsgConnectionOpenAckResponseProtoMsg): _156.MsgConnectionOpenAckResponse;
                    toProto(message: _156.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _156.MsgConnectionOpenAckResponse): _156.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    encode(message: _156.MsgConnectionOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _156.MsgConnectionOpenConfirm;
                    fromPartial(object: Partial<_156.MsgConnectionOpenConfirm>): _156.MsgConnectionOpenConfirm;
                    fromAmino(object: _156.MsgConnectionOpenConfirmAmino): _156.MsgConnectionOpenConfirm;
                    toAmino(message: _156.MsgConnectionOpenConfirm): _156.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _156.MsgConnectionOpenConfirmAminoMsg): _156.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _156.MsgConnectionOpenConfirm): _156.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _156.MsgConnectionOpenConfirmProtoMsg): _156.MsgConnectionOpenConfirm;
                    toProto(message: _156.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _156.MsgConnectionOpenConfirm): _156.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _156.MsgConnectionOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _156.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: Partial<_156.MsgConnectionOpenConfirmResponse>): _156.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _156.MsgConnectionOpenConfirmResponseAmino): _156.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _156.MsgConnectionOpenConfirmResponse): _156.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _156.MsgConnectionOpenConfirmResponseAminoMsg): _156.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _156.MsgConnectionOpenConfirmResponse): _156.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _156.MsgConnectionOpenConfirmResponseProtoMsg): _156.MsgConnectionOpenConfirmResponse;
                    toProto(message: _156.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _156.MsgConnectionOpenConfirmResponse): _156.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    encode(message: _155.QueryConnectionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _155.QueryConnectionRequest;
                    fromPartial(object: Partial<_155.QueryConnectionRequest>): _155.QueryConnectionRequest;
                    fromAmino(object: _155.QueryConnectionRequestAmino): _155.QueryConnectionRequest;
                    toAmino(message: _155.QueryConnectionRequest): _155.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _155.QueryConnectionRequestAminoMsg): _155.QueryConnectionRequest;
                    toAminoMsg(message: _155.QueryConnectionRequest): _155.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _155.QueryConnectionRequestProtoMsg): _155.QueryConnectionRequest;
                    toProto(message: _155.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _155.QueryConnectionRequest): _155.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    encode(message: _155.QueryConnectionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _155.QueryConnectionResponse;
                    fromPartial(object: Partial<_155.QueryConnectionResponse>): _155.QueryConnectionResponse;
                    fromAmino(object: _155.QueryConnectionResponseAmino): _155.QueryConnectionResponse;
                    toAmino(message: _155.QueryConnectionResponse): _155.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _155.QueryConnectionResponseAminoMsg): _155.QueryConnectionResponse;
                    toAminoMsg(message: _155.QueryConnectionResponse): _155.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _155.QueryConnectionResponseProtoMsg): _155.QueryConnectionResponse;
                    toProto(message: _155.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _155.QueryConnectionResponse): _155.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _155.QueryConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _155.QueryConnectionsRequest;
                    fromPartial(object: Partial<_155.QueryConnectionsRequest>): _155.QueryConnectionsRequest;
                    fromAmino(object: _155.QueryConnectionsRequestAmino): _155.QueryConnectionsRequest;
                    toAmino(message: _155.QueryConnectionsRequest): _155.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _155.QueryConnectionsRequestAminoMsg): _155.QueryConnectionsRequest;
                    toAminoMsg(message: _155.QueryConnectionsRequest): _155.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _155.QueryConnectionsRequestProtoMsg): _155.QueryConnectionsRequest;
                    toProto(message: _155.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _155.QueryConnectionsRequest): _155.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _155.QueryConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _155.QueryConnectionsResponse;
                    fromPartial(object: Partial<_155.QueryConnectionsResponse>): _155.QueryConnectionsResponse;
                    fromAmino(object: _155.QueryConnectionsResponseAmino): _155.QueryConnectionsResponse;
                    toAmino(message: _155.QueryConnectionsResponse): _155.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _155.QueryConnectionsResponseAminoMsg): _155.QueryConnectionsResponse;
                    toAminoMsg(message: _155.QueryConnectionsResponse): _155.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _155.QueryConnectionsResponseProtoMsg): _155.QueryConnectionsResponse;
                    toProto(message: _155.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _155.QueryConnectionsResponse): _155.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _155.QueryClientConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _155.QueryClientConnectionsRequest;
                    fromPartial(object: Partial<_155.QueryClientConnectionsRequest>): _155.QueryClientConnectionsRequest;
                    fromAmino(object: _155.QueryClientConnectionsRequestAmino): _155.QueryClientConnectionsRequest;
                    toAmino(message: _155.QueryClientConnectionsRequest): _155.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _155.QueryClientConnectionsRequestAminoMsg): _155.QueryClientConnectionsRequest;
                    toAminoMsg(message: _155.QueryClientConnectionsRequest): _155.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _155.QueryClientConnectionsRequestProtoMsg): _155.QueryClientConnectionsRequest;
                    toProto(message: _155.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _155.QueryClientConnectionsRequest): _155.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _155.QueryClientConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _155.QueryClientConnectionsResponse;
                    fromPartial(object: Partial<_155.QueryClientConnectionsResponse>): _155.QueryClientConnectionsResponse;
                    fromAmino(object: _155.QueryClientConnectionsResponseAmino): _155.QueryClientConnectionsResponse;
                    toAmino(message: _155.QueryClientConnectionsResponse): _155.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _155.QueryClientConnectionsResponseAminoMsg): _155.QueryClientConnectionsResponse;
                    toAminoMsg(message: _155.QueryClientConnectionsResponse): _155.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _155.QueryClientConnectionsResponseProtoMsg): _155.QueryClientConnectionsResponse;
                    toProto(message: _155.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _155.QueryClientConnectionsResponse): _155.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    encode(message: _155.QueryConnectionClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _155.QueryConnectionClientStateRequest;
                    fromPartial(object: Partial<_155.QueryConnectionClientStateRequest>): _155.QueryConnectionClientStateRequest;
                    fromAmino(object: _155.QueryConnectionClientStateRequestAmino): _155.QueryConnectionClientStateRequest;
                    toAmino(message: _155.QueryConnectionClientStateRequest): _155.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _155.QueryConnectionClientStateRequestAminoMsg): _155.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _155.QueryConnectionClientStateRequest): _155.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _155.QueryConnectionClientStateRequestProtoMsg): _155.QueryConnectionClientStateRequest;
                    toProto(message: _155.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _155.QueryConnectionClientStateRequest): _155.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    encode(message: _155.QueryConnectionClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _155.QueryConnectionClientStateResponse;
                    fromPartial(object: Partial<_155.QueryConnectionClientStateResponse>): _155.QueryConnectionClientStateResponse;
                    fromAmino(object: _155.QueryConnectionClientStateResponseAmino): _155.QueryConnectionClientStateResponse;
                    toAmino(message: _155.QueryConnectionClientStateResponse): _155.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _155.QueryConnectionClientStateResponseAminoMsg): _155.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _155.QueryConnectionClientStateResponse): _155.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _155.QueryConnectionClientStateResponseProtoMsg): _155.QueryConnectionClientStateResponse;
                    toProto(message: _155.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _155.QueryConnectionClientStateResponse): _155.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _155.QueryConnectionConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _155.QueryConnectionConsensusStateRequest;
                    fromPartial(object: Partial<_155.QueryConnectionConsensusStateRequest>): _155.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _155.QueryConnectionConsensusStateRequestAmino): _155.QueryConnectionConsensusStateRequest;
                    toAmino(message: _155.QueryConnectionConsensusStateRequest): _155.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _155.QueryConnectionConsensusStateRequestAminoMsg): _155.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _155.QueryConnectionConsensusStateRequest): _155.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _155.QueryConnectionConsensusStateRequestProtoMsg): _155.QueryConnectionConsensusStateRequest;
                    toProto(message: _155.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _155.QueryConnectionConsensusStateRequest): _155.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _155.QueryConnectionConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _155.QueryConnectionConsensusStateResponse;
                    fromPartial(object: Partial<_155.QueryConnectionConsensusStateResponse>): _155.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _155.QueryConnectionConsensusStateResponseAmino): _155.QueryConnectionConsensusStateResponse;
                    toAmino(message: _155.QueryConnectionConsensusStateResponse): _155.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _155.QueryConnectionConsensusStateResponseAminoMsg): _155.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _155.QueryConnectionConsensusStateResponse): _155.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _155.QueryConnectionConsensusStateResponseProtoMsg): _155.QueryConnectionConsensusStateResponse;
                    toProto(message: _155.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _155.QueryConnectionConsensusStateResponse): _155.QueryConnectionConsensusStateResponseProtoMsg;
                };
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
                stateFromJSON(object: any): _153.State;
                stateToJSON(object: _153.State): string;
                State: typeof _153.State;
                StateSDKType: typeof _153.State;
                StateAmino: typeof _153.State;
                ConnectionEnd: {
                    typeUrl: string;
                    encode(message: _153.ConnectionEnd, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _153.ConnectionEnd;
                    fromPartial(object: Partial<_153.ConnectionEnd>): _153.ConnectionEnd;
                    fromAmino(object: _153.ConnectionEndAmino): _153.ConnectionEnd;
                    toAmino(message: _153.ConnectionEnd): _153.ConnectionEndAmino;
                    fromAminoMsg(object: _153.ConnectionEndAminoMsg): _153.ConnectionEnd;
                    toAminoMsg(message: _153.ConnectionEnd): _153.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _153.ConnectionEndProtoMsg): _153.ConnectionEnd;
                    toProto(message: _153.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _153.ConnectionEnd): _153.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    encode(message: _153.IdentifiedConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _153.IdentifiedConnection;
                    fromPartial(object: Partial<_153.IdentifiedConnection>): _153.IdentifiedConnection;
                    fromAmino(object: _153.IdentifiedConnectionAmino): _153.IdentifiedConnection;
                    toAmino(message: _153.IdentifiedConnection): _153.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _153.IdentifiedConnectionAminoMsg): _153.IdentifiedConnection;
                    toAminoMsg(message: _153.IdentifiedConnection): _153.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _153.IdentifiedConnectionProtoMsg): _153.IdentifiedConnection;
                    toProto(message: _153.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _153.IdentifiedConnection): _153.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _153.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _153.Counterparty;
                    fromPartial(object: Partial<_153.Counterparty>): _153.Counterparty;
                    fromAmino(object: _153.CounterpartyAmino): _153.Counterparty;
                    toAmino(message: _153.Counterparty): _153.CounterpartyAmino;
                    fromAminoMsg(object: _153.CounterpartyAminoMsg): _153.Counterparty;
                    toAminoMsg(message: _153.Counterparty): _153.CounterpartyAminoMsg;
                    fromProtoMsg(message: _153.CounterpartyProtoMsg): _153.Counterparty;
                    toProto(message: _153.Counterparty): Uint8Array;
                    toProtoMsg(message: _153.Counterparty): _153.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    encode(message: _153.ClientPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _153.ClientPaths;
                    fromPartial(object: Partial<_153.ClientPaths>): _153.ClientPaths;
                    fromAmino(object: _153.ClientPathsAmino): _153.ClientPaths;
                    toAmino(message: _153.ClientPaths): _153.ClientPathsAmino;
                    fromAminoMsg(object: _153.ClientPathsAminoMsg): _153.ClientPaths;
                    toAminoMsg(message: _153.ClientPaths): _153.ClientPathsAminoMsg;
                    fromProtoMsg(message: _153.ClientPathsProtoMsg): _153.ClientPaths;
                    toProto(message: _153.ClientPaths): Uint8Array;
                    toProtoMsg(message: _153.ClientPaths): _153.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    encode(message: _153.ConnectionPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _153.ConnectionPaths;
                    fromPartial(object: Partial<_153.ConnectionPaths>): _153.ConnectionPaths;
                    fromAmino(object: _153.ConnectionPathsAmino): _153.ConnectionPaths;
                    toAmino(message: _153.ConnectionPaths): _153.ConnectionPathsAmino;
                    fromAminoMsg(object: _153.ConnectionPathsAminoMsg): _153.ConnectionPaths;
                    toAminoMsg(message: _153.ConnectionPaths): _153.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _153.ConnectionPathsProtoMsg): _153.ConnectionPaths;
                    toProto(message: _153.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _153.ConnectionPaths): _153.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    encode(message: _153.Version, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _153.Version;
                    fromPartial(object: Partial<_153.Version>): _153.Version;
                    fromAmino(object: _153.VersionAmino): _153.Version;
                    toAmino(message: _153.Version): _153.VersionAmino;
                    fromAminoMsg(object: _153.VersionAminoMsg): _153.Version;
                    toAminoMsg(message: _153.Version): _153.VersionAminoMsg;
                    fromProtoMsg(message: _153.VersionProtoMsg): _153.Version;
                    toProto(message: _153.Version): Uint8Array;
                    toProtoMsg(message: _153.Version): _153.VersionProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _153.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _153.Params;
                    fromPartial(object: Partial<_153.Params>): _153.Params;
                    fromAmino(object: _153.ParamsAmino): _153.Params;
                    toAmino(message: _153.Params): _153.ParamsAmino;
                    fromAminoMsg(object: _153.ParamsAminoMsg): _153.Params;
                    toAminoMsg(message: _153.Params): _153.ParamsAminoMsg;
                    fromProtoMsg(message: _153.ParamsProtoMsg): _153.Params;
                    toProto(message: _153.Params): Uint8Array;
                    toProtoMsg(message: _153.Params): _153.ParamsProtoMsg;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    typeUrl: string;
                    encode(message: _157.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _157.GenesisState;
                    fromPartial(object: Partial<_157.GenesisState>): _157.GenesisState;
                    fromAmino(object: _157.GenesisStateAmino): _157.GenesisState;
                    toAmino(message: _157.GenesisState): _157.GenesisStateAmino;
                    fromAminoMsg(object: _157.GenesisStateAminoMsg): _157.GenesisState;
                    toAminoMsg(message: _157.GenesisState): _157.GenesisStateAminoMsg;
                    fromProtoMsg(message: _157.GenesisStateProtoMsg): _157.GenesisState;
                    toProto(message: _157.GenesisState): Uint8Array;
                    toProtoMsg(message: _157.GenesisState): _157.GenesisStateProtoMsg;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _158.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _158.ClientState;
                    fromPartial(object: Partial<_158.ClientState>): _158.ClientState;
                    fromAmino(object: _158.ClientStateAmino): _158.ClientState;
                    toAmino(message: _158.ClientState): _158.ClientStateAmino;
                    fromAminoMsg(object: _158.ClientStateAminoMsg): _158.ClientState;
                    toAminoMsg(message: _158.ClientState): _158.ClientStateAminoMsg;
                    fromProtoMsg(message: _158.ClientStateProtoMsg): _158.ClientState;
                    toProto(message: _158.ClientState): Uint8Array;
                    toProtoMsg(message: _158.ClientState): _158.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _159.DataType;
                dataTypeToJSON(object: _159.DataType): string;
                DataType: typeof _159.DataType;
                DataTypeSDKType: typeof _159.DataType;
                DataTypeAmino: typeof _159.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _159.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _159.ClientState;
                    fromPartial(object: Partial<_159.ClientState>): _159.ClientState;
                    fromAmino(object: _159.ClientStateAmino): _159.ClientState;
                    toAmino(message: _159.ClientState): _159.ClientStateAmino;
                    fromAminoMsg(object: _159.ClientStateAminoMsg): _159.ClientState;
                    toAminoMsg(message: _159.ClientState): _159.ClientStateAminoMsg;
                    fromProtoMsg(message: _159.ClientStateProtoMsg): _159.ClientState;
                    toProto(message: _159.ClientState): Uint8Array;
                    toProtoMsg(message: _159.ClientState): _159.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _159.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _159.ConsensusState;
                    fromPartial(object: Partial<_159.ConsensusState>): _159.ConsensusState;
                    fromAmino(object: _159.ConsensusStateAmino): _159.ConsensusState;
                    toAmino(message: _159.ConsensusState): _159.ConsensusStateAmino;
                    fromAminoMsg(object: _159.ConsensusStateAminoMsg): _159.ConsensusState;
                    toAminoMsg(message: _159.ConsensusState): _159.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _159.ConsensusStateProtoMsg): _159.ConsensusState;
                    toProto(message: _159.ConsensusState): Uint8Array;
                    toProtoMsg(message: _159.ConsensusState): _159.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _159.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _159.Header;
                    fromPartial(object: Partial<_159.Header>): _159.Header;
                    fromAmino(object: _159.HeaderAmino): _159.Header;
                    toAmino(message: _159.Header): _159.HeaderAmino;
                    fromAminoMsg(object: _159.HeaderAminoMsg): _159.Header;
                    toAminoMsg(message: _159.Header): _159.HeaderAminoMsg;
                    fromProtoMsg(message: _159.HeaderProtoMsg): _159.Header;
                    toProto(message: _159.Header): Uint8Array;
                    toProtoMsg(message: _159.Header): _159.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _159.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _159.Misbehaviour;
                    fromPartial(object: Partial<_159.Misbehaviour>): _159.Misbehaviour;
                    fromAmino(object: _159.MisbehaviourAmino): _159.Misbehaviour;
                    toAmino(message: _159.Misbehaviour): _159.MisbehaviourAmino;
                    fromAminoMsg(object: _159.MisbehaviourAminoMsg): _159.Misbehaviour;
                    toAminoMsg(message: _159.Misbehaviour): _159.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _159.MisbehaviourProtoMsg): _159.Misbehaviour;
                    toProto(message: _159.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _159.Misbehaviour): _159.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _159.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _159.SignatureAndData;
                    fromPartial(object: Partial<_159.SignatureAndData>): _159.SignatureAndData;
                    fromAmino(object: _159.SignatureAndDataAmino): _159.SignatureAndData;
                    toAmino(message: _159.SignatureAndData): _159.SignatureAndDataAmino;
                    fromAminoMsg(object: _159.SignatureAndDataAminoMsg): _159.SignatureAndData;
                    toAminoMsg(message: _159.SignatureAndData): _159.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _159.SignatureAndDataProtoMsg): _159.SignatureAndData;
                    toProto(message: _159.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _159.SignatureAndData): _159.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _159.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _159.TimestampedSignatureData;
                    fromPartial(object: Partial<_159.TimestampedSignatureData>): _159.TimestampedSignatureData;
                    fromAmino(object: _159.TimestampedSignatureDataAmino): _159.TimestampedSignatureData;
                    toAmino(message: _159.TimestampedSignatureData): _159.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _159.TimestampedSignatureDataAminoMsg): _159.TimestampedSignatureData;
                    toAminoMsg(message: _159.TimestampedSignatureData): _159.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _159.TimestampedSignatureDataProtoMsg): _159.TimestampedSignatureData;
                    toProto(message: _159.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _159.TimestampedSignatureData): _159.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _159.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _159.SignBytes;
                    fromPartial(object: Partial<_159.SignBytes>): _159.SignBytes;
                    fromAmino(object: _159.SignBytesAmino): _159.SignBytes;
                    toAmino(message: _159.SignBytes): _159.SignBytesAmino;
                    fromAminoMsg(object: _159.SignBytesAminoMsg): _159.SignBytes;
                    toAminoMsg(message: _159.SignBytes): _159.SignBytesAminoMsg;
                    fromProtoMsg(message: _159.SignBytesProtoMsg): _159.SignBytes;
                    toProto(message: _159.SignBytes): Uint8Array;
                    toProtoMsg(message: _159.SignBytes): _159.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _159.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _159.HeaderData;
                    fromPartial(object: Partial<_159.HeaderData>): _159.HeaderData;
                    fromAmino(object: _159.HeaderDataAmino): _159.HeaderData;
                    toAmino(message: _159.HeaderData): _159.HeaderDataAmino;
                    fromAminoMsg(object: _159.HeaderDataAminoMsg): _159.HeaderData;
                    toAminoMsg(message: _159.HeaderData): _159.HeaderDataAminoMsg;
                    fromProtoMsg(message: _159.HeaderDataProtoMsg): _159.HeaderData;
                    toProto(message: _159.HeaderData): Uint8Array;
                    toProtoMsg(message: _159.HeaderData): _159.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _159.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _159.ClientStateData;
                    fromPartial(object: Partial<_159.ClientStateData>): _159.ClientStateData;
                    fromAmino(object: _159.ClientStateDataAmino): _159.ClientStateData;
                    toAmino(message: _159.ClientStateData): _159.ClientStateDataAmino;
                    fromAminoMsg(object: _159.ClientStateDataAminoMsg): _159.ClientStateData;
                    toAminoMsg(message: _159.ClientStateData): _159.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _159.ClientStateDataProtoMsg): _159.ClientStateData;
                    toProto(message: _159.ClientStateData): Uint8Array;
                    toProtoMsg(message: _159.ClientStateData): _159.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _159.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _159.ConsensusStateData;
                    fromPartial(object: Partial<_159.ConsensusStateData>): _159.ConsensusStateData;
                    fromAmino(object: _159.ConsensusStateDataAmino): _159.ConsensusStateData;
                    toAmino(message: _159.ConsensusStateData): _159.ConsensusStateDataAmino;
                    fromAminoMsg(object: _159.ConsensusStateDataAminoMsg): _159.ConsensusStateData;
                    toAminoMsg(message: _159.ConsensusStateData): _159.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _159.ConsensusStateDataProtoMsg): _159.ConsensusStateData;
                    toProto(message: _159.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _159.ConsensusStateData): _159.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _159.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _159.ConnectionStateData;
                    fromPartial(object: Partial<_159.ConnectionStateData>): _159.ConnectionStateData;
                    fromAmino(object: _159.ConnectionStateDataAmino): _159.ConnectionStateData;
                    toAmino(message: _159.ConnectionStateData): _159.ConnectionStateDataAmino;
                    fromAminoMsg(object: _159.ConnectionStateDataAminoMsg): _159.ConnectionStateData;
                    toAminoMsg(message: _159.ConnectionStateData): _159.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _159.ConnectionStateDataProtoMsg): _159.ConnectionStateData;
                    toProto(message: _159.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _159.ConnectionStateData): _159.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _159.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _159.ChannelStateData;
                    fromPartial(object: Partial<_159.ChannelStateData>): _159.ChannelStateData;
                    fromAmino(object: _159.ChannelStateDataAmino): _159.ChannelStateData;
                    toAmino(message: _159.ChannelStateData): _159.ChannelStateDataAmino;
                    fromAminoMsg(object: _159.ChannelStateDataAminoMsg): _159.ChannelStateData;
                    toAminoMsg(message: _159.ChannelStateData): _159.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _159.ChannelStateDataProtoMsg): _159.ChannelStateData;
                    toProto(message: _159.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _159.ChannelStateData): _159.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _159.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _159.PacketCommitmentData;
                    fromPartial(object: Partial<_159.PacketCommitmentData>): _159.PacketCommitmentData;
                    fromAmino(object: _159.PacketCommitmentDataAmino): _159.PacketCommitmentData;
                    toAmino(message: _159.PacketCommitmentData): _159.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _159.PacketCommitmentDataAminoMsg): _159.PacketCommitmentData;
                    toAminoMsg(message: _159.PacketCommitmentData): _159.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _159.PacketCommitmentDataProtoMsg): _159.PacketCommitmentData;
                    toProto(message: _159.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _159.PacketCommitmentData): _159.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _159.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _159.PacketAcknowledgementData;
                    fromPartial(object: Partial<_159.PacketAcknowledgementData>): _159.PacketAcknowledgementData;
                    fromAmino(object: _159.PacketAcknowledgementDataAmino): _159.PacketAcknowledgementData;
                    toAmino(message: _159.PacketAcknowledgementData): _159.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _159.PacketAcknowledgementDataAminoMsg): _159.PacketAcknowledgementData;
                    toAminoMsg(message: _159.PacketAcknowledgementData): _159.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _159.PacketAcknowledgementDataProtoMsg): _159.PacketAcknowledgementData;
                    toProto(message: _159.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _159.PacketAcknowledgementData): _159.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _159.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _159.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_159.PacketReceiptAbsenceData>): _159.PacketReceiptAbsenceData;
                    fromAmino(object: _159.PacketReceiptAbsenceDataAmino): _159.PacketReceiptAbsenceData;
                    toAmino(message: _159.PacketReceiptAbsenceData): _159.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _159.PacketReceiptAbsenceDataAminoMsg): _159.PacketReceiptAbsenceData;
                    toAminoMsg(message: _159.PacketReceiptAbsenceData): _159.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _159.PacketReceiptAbsenceDataProtoMsg): _159.PacketReceiptAbsenceData;
                    toProto(message: _159.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _159.PacketReceiptAbsenceData): _159.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _159.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _159.NextSequenceRecvData;
                    fromPartial(object: Partial<_159.NextSequenceRecvData>): _159.NextSequenceRecvData;
                    fromAmino(object: _159.NextSequenceRecvDataAmino): _159.NextSequenceRecvData;
                    toAmino(message: _159.NextSequenceRecvData): _159.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _159.NextSequenceRecvDataAminoMsg): _159.NextSequenceRecvData;
                    toAminoMsg(message: _159.NextSequenceRecvData): _159.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _159.NextSequenceRecvDataProtoMsg): _159.NextSequenceRecvData;
                    toProto(message: _159.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _159.NextSequenceRecvData): _159.NextSequenceRecvDataProtoMsg;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _160.DataType;
                dataTypeToJSON(object: _160.DataType): string;
                DataType: typeof _160.DataType;
                DataTypeSDKType: typeof _160.DataType;
                DataTypeAmino: typeof _160.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _160.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _160.ClientState;
                    fromPartial(object: Partial<_160.ClientState>): _160.ClientState;
                    fromAmino(object: _160.ClientStateAmino): _160.ClientState;
                    toAmino(message: _160.ClientState): _160.ClientStateAmino;
                    fromAminoMsg(object: _160.ClientStateAminoMsg): _160.ClientState;
                    toAminoMsg(message: _160.ClientState): _160.ClientStateAminoMsg;
                    fromProtoMsg(message: _160.ClientStateProtoMsg): _160.ClientState;
                    toProto(message: _160.ClientState): Uint8Array;
                    toProtoMsg(message: _160.ClientState): _160.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _160.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _160.ConsensusState;
                    fromPartial(object: Partial<_160.ConsensusState>): _160.ConsensusState;
                    fromAmino(object: _160.ConsensusStateAmino): _160.ConsensusState;
                    toAmino(message: _160.ConsensusState): _160.ConsensusStateAmino;
                    fromAminoMsg(object: _160.ConsensusStateAminoMsg): _160.ConsensusState;
                    toAminoMsg(message: _160.ConsensusState): _160.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _160.ConsensusStateProtoMsg): _160.ConsensusState;
                    toProto(message: _160.ConsensusState): Uint8Array;
                    toProtoMsg(message: _160.ConsensusState): _160.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _160.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _160.Header;
                    fromPartial(object: Partial<_160.Header>): _160.Header;
                    fromAmino(object: _160.HeaderAmino): _160.Header;
                    toAmino(message: _160.Header): _160.HeaderAmino;
                    fromAminoMsg(object: _160.HeaderAminoMsg): _160.Header;
                    toAminoMsg(message: _160.Header): _160.HeaderAminoMsg;
                    fromProtoMsg(message: _160.HeaderProtoMsg): _160.Header;
                    toProto(message: _160.Header): Uint8Array;
                    toProtoMsg(message: _160.Header): _160.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _160.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _160.Misbehaviour;
                    fromPartial(object: Partial<_160.Misbehaviour>): _160.Misbehaviour;
                    fromAmino(object: _160.MisbehaviourAmino): _160.Misbehaviour;
                    toAmino(message: _160.Misbehaviour): _160.MisbehaviourAmino;
                    fromAminoMsg(object: _160.MisbehaviourAminoMsg): _160.Misbehaviour;
                    toAminoMsg(message: _160.Misbehaviour): _160.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _160.MisbehaviourProtoMsg): _160.Misbehaviour;
                    toProto(message: _160.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _160.Misbehaviour): _160.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _160.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _160.SignatureAndData;
                    fromPartial(object: Partial<_160.SignatureAndData>): _160.SignatureAndData;
                    fromAmino(object: _160.SignatureAndDataAmino): _160.SignatureAndData;
                    toAmino(message: _160.SignatureAndData): _160.SignatureAndDataAmino;
                    fromAminoMsg(object: _160.SignatureAndDataAminoMsg): _160.SignatureAndData;
                    toAminoMsg(message: _160.SignatureAndData): _160.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _160.SignatureAndDataProtoMsg): _160.SignatureAndData;
                    toProto(message: _160.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _160.SignatureAndData): _160.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _160.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _160.TimestampedSignatureData;
                    fromPartial(object: Partial<_160.TimestampedSignatureData>): _160.TimestampedSignatureData;
                    fromAmino(object: _160.TimestampedSignatureDataAmino): _160.TimestampedSignatureData;
                    toAmino(message: _160.TimestampedSignatureData): _160.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _160.TimestampedSignatureDataAminoMsg): _160.TimestampedSignatureData;
                    toAminoMsg(message: _160.TimestampedSignatureData): _160.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _160.TimestampedSignatureDataProtoMsg): _160.TimestampedSignatureData;
                    toProto(message: _160.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _160.TimestampedSignatureData): _160.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _160.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _160.SignBytes;
                    fromPartial(object: Partial<_160.SignBytes>): _160.SignBytes;
                    fromAmino(object: _160.SignBytesAmino): _160.SignBytes;
                    toAmino(message: _160.SignBytes): _160.SignBytesAmino;
                    fromAminoMsg(object: _160.SignBytesAminoMsg): _160.SignBytes;
                    toAminoMsg(message: _160.SignBytes): _160.SignBytesAminoMsg;
                    fromProtoMsg(message: _160.SignBytesProtoMsg): _160.SignBytes;
                    toProto(message: _160.SignBytes): Uint8Array;
                    toProtoMsg(message: _160.SignBytes): _160.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _160.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _160.HeaderData;
                    fromPartial(object: Partial<_160.HeaderData>): _160.HeaderData;
                    fromAmino(object: _160.HeaderDataAmino): _160.HeaderData;
                    toAmino(message: _160.HeaderData): _160.HeaderDataAmino;
                    fromAminoMsg(object: _160.HeaderDataAminoMsg): _160.HeaderData;
                    toAminoMsg(message: _160.HeaderData): _160.HeaderDataAminoMsg;
                    fromProtoMsg(message: _160.HeaderDataProtoMsg): _160.HeaderData;
                    toProto(message: _160.HeaderData): Uint8Array;
                    toProtoMsg(message: _160.HeaderData): _160.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _160.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _160.ClientStateData;
                    fromPartial(object: Partial<_160.ClientStateData>): _160.ClientStateData;
                    fromAmino(object: _160.ClientStateDataAmino): _160.ClientStateData;
                    toAmino(message: _160.ClientStateData): _160.ClientStateDataAmino;
                    fromAminoMsg(object: _160.ClientStateDataAminoMsg): _160.ClientStateData;
                    toAminoMsg(message: _160.ClientStateData): _160.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _160.ClientStateDataProtoMsg): _160.ClientStateData;
                    toProto(message: _160.ClientStateData): Uint8Array;
                    toProtoMsg(message: _160.ClientStateData): _160.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _160.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _160.ConsensusStateData;
                    fromPartial(object: Partial<_160.ConsensusStateData>): _160.ConsensusStateData;
                    fromAmino(object: _160.ConsensusStateDataAmino): _160.ConsensusStateData;
                    toAmino(message: _160.ConsensusStateData): _160.ConsensusStateDataAmino;
                    fromAminoMsg(object: _160.ConsensusStateDataAminoMsg): _160.ConsensusStateData;
                    toAminoMsg(message: _160.ConsensusStateData): _160.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _160.ConsensusStateDataProtoMsg): _160.ConsensusStateData;
                    toProto(message: _160.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _160.ConsensusStateData): _160.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _160.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _160.ConnectionStateData;
                    fromPartial(object: Partial<_160.ConnectionStateData>): _160.ConnectionStateData;
                    fromAmino(object: _160.ConnectionStateDataAmino): _160.ConnectionStateData;
                    toAmino(message: _160.ConnectionStateData): _160.ConnectionStateDataAmino;
                    fromAminoMsg(object: _160.ConnectionStateDataAminoMsg): _160.ConnectionStateData;
                    toAminoMsg(message: _160.ConnectionStateData): _160.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _160.ConnectionStateDataProtoMsg): _160.ConnectionStateData;
                    toProto(message: _160.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _160.ConnectionStateData): _160.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _160.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _160.ChannelStateData;
                    fromPartial(object: Partial<_160.ChannelStateData>): _160.ChannelStateData;
                    fromAmino(object: _160.ChannelStateDataAmino): _160.ChannelStateData;
                    toAmino(message: _160.ChannelStateData): _160.ChannelStateDataAmino;
                    fromAminoMsg(object: _160.ChannelStateDataAminoMsg): _160.ChannelStateData;
                    toAminoMsg(message: _160.ChannelStateData): _160.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _160.ChannelStateDataProtoMsg): _160.ChannelStateData;
                    toProto(message: _160.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _160.ChannelStateData): _160.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _160.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _160.PacketCommitmentData;
                    fromPartial(object: Partial<_160.PacketCommitmentData>): _160.PacketCommitmentData;
                    fromAmino(object: _160.PacketCommitmentDataAmino): _160.PacketCommitmentData;
                    toAmino(message: _160.PacketCommitmentData): _160.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _160.PacketCommitmentDataAminoMsg): _160.PacketCommitmentData;
                    toAminoMsg(message: _160.PacketCommitmentData): _160.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _160.PacketCommitmentDataProtoMsg): _160.PacketCommitmentData;
                    toProto(message: _160.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _160.PacketCommitmentData): _160.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _160.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _160.PacketAcknowledgementData;
                    fromPartial(object: Partial<_160.PacketAcknowledgementData>): _160.PacketAcknowledgementData;
                    fromAmino(object: _160.PacketAcknowledgementDataAmino): _160.PacketAcknowledgementData;
                    toAmino(message: _160.PacketAcknowledgementData): _160.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _160.PacketAcknowledgementDataAminoMsg): _160.PacketAcknowledgementData;
                    toAminoMsg(message: _160.PacketAcknowledgementData): _160.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _160.PacketAcknowledgementDataProtoMsg): _160.PacketAcknowledgementData;
                    toProto(message: _160.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _160.PacketAcknowledgementData): _160.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _160.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _160.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_160.PacketReceiptAbsenceData>): _160.PacketReceiptAbsenceData;
                    fromAmino(object: _160.PacketReceiptAbsenceDataAmino): _160.PacketReceiptAbsenceData;
                    toAmino(message: _160.PacketReceiptAbsenceData): _160.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _160.PacketReceiptAbsenceDataAminoMsg): _160.PacketReceiptAbsenceData;
                    toAminoMsg(message: _160.PacketReceiptAbsenceData): _160.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _160.PacketReceiptAbsenceDataProtoMsg): _160.PacketReceiptAbsenceData;
                    toProto(message: _160.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _160.PacketReceiptAbsenceData): _160.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _160.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _160.NextSequenceRecvData;
                    fromPartial(object: Partial<_160.NextSequenceRecvData>): _160.NextSequenceRecvData;
                    fromAmino(object: _160.NextSequenceRecvDataAmino): _160.NextSequenceRecvData;
                    toAmino(message: _160.NextSequenceRecvData): _160.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _160.NextSequenceRecvDataAminoMsg): _160.NextSequenceRecvData;
                    toAminoMsg(message: _160.NextSequenceRecvData): _160.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _160.NextSequenceRecvDataProtoMsg): _160.NextSequenceRecvData;
                    toProto(message: _160.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _160.NextSequenceRecvData): _160.NextSequenceRecvDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _161.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _161.ClientState;
                    fromPartial(object: Partial<_161.ClientState>): _161.ClientState;
                    fromAmino(object: _161.ClientStateAmino): _161.ClientState;
                    toAmino(message: _161.ClientState): _161.ClientStateAmino;
                    fromAminoMsg(object: _161.ClientStateAminoMsg): _161.ClientState;
                    toAminoMsg(message: _161.ClientState): _161.ClientStateAminoMsg;
                    fromProtoMsg(message: _161.ClientStateProtoMsg): _161.ClientState;
                    toProto(message: _161.ClientState): Uint8Array;
                    toProtoMsg(message: _161.ClientState): _161.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _161.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _161.ConsensusState;
                    fromPartial(object: Partial<_161.ConsensusState>): _161.ConsensusState;
                    fromAmino(object: _161.ConsensusStateAmino): _161.ConsensusState;
                    toAmino(message: _161.ConsensusState): _161.ConsensusStateAmino;
                    fromAminoMsg(object: _161.ConsensusStateAminoMsg): _161.ConsensusState;
                    toAminoMsg(message: _161.ConsensusState): _161.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _161.ConsensusStateProtoMsg): _161.ConsensusState;
                    toProto(message: _161.ConsensusState): Uint8Array;
                    toProtoMsg(message: _161.ConsensusState): _161.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _161.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _161.Misbehaviour;
                    fromPartial(object: Partial<_161.Misbehaviour>): _161.Misbehaviour;
                    fromAmino(object: _161.MisbehaviourAmino): _161.Misbehaviour;
                    toAmino(message: _161.Misbehaviour): _161.MisbehaviourAmino;
                    fromAminoMsg(object: _161.MisbehaviourAminoMsg): _161.Misbehaviour;
                    toAminoMsg(message: _161.Misbehaviour): _161.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _161.MisbehaviourProtoMsg): _161.Misbehaviour;
                    toProto(message: _161.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _161.Misbehaviour): _161.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _161.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _161.Header;
                    fromPartial(object: Partial<_161.Header>): _161.Header;
                    fromAmino(object: _161.HeaderAmino): _161.Header;
                    toAmino(message: _161.Header): _161.HeaderAmino;
                    fromAminoMsg(object: _161.HeaderAminoMsg): _161.Header;
                    toAminoMsg(message: _161.Header): _161.HeaderAminoMsg;
                    fromProtoMsg(message: _161.HeaderProtoMsg): _161.Header;
                    toProto(message: _161.Header): Uint8Array;
                    toProtoMsg(message: _161.Header): _161.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    encode(message: _161.Fraction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _161.Fraction;
                    fromPartial(object: Partial<_161.Fraction>): _161.Fraction;
                    fromAmino(object: _161.FractionAmino): _161.Fraction;
                    toAmino(message: _161.Fraction): _161.FractionAmino;
                    fromAminoMsg(object: _161.FractionAminoMsg): _161.Fraction;
                    toAminoMsg(message: _161.Fraction): _161.FractionAminoMsg;
                    fromProtoMsg(message: _161.FractionProtoMsg): _161.Fraction;
                    toProto(message: _161.Fraction): Uint8Array;
                    toProtoMsg(message: _161.Fraction): _161.FractionProtoMsg;
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
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            ibc: {
                applications: {
                    fee: {
                        v1: _290.MsgClientImpl;
                    };
                    transfer: {
                        v1: _291.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _292.MsgClientImpl;
                    };
                    client: {
                        v1: _293.MsgClientImpl;
                    };
                    connection: {
                        v1: _294.MsgClientImpl;
                    };
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        accountAddressByID(request: import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
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
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
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
                            aBCIQuery(request: import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryResponse>;
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
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
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
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                        groups(request?: import("../cosmos/group/v1/query").QueryGroupsRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
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
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            ibc: {
                applications: {
                    fee: {
                        v1: {
                            incentivizedPackets(request: _129.QueryIncentivizedPacketsRequest): Promise<_129.QueryIncentivizedPacketsResponse>;
                            incentivizedPacket(request: _129.QueryIncentivizedPacketRequest): Promise<_129.QueryIncentivizedPacketResponse>;
                            incentivizedPacketsForChannel(request: _129.QueryIncentivizedPacketsForChannelRequest): Promise<_129.QueryIncentivizedPacketsForChannelResponse>;
                            totalRecvFees(request: _129.QueryTotalRecvFeesRequest): Promise<_129.QueryTotalRecvFeesResponse>;
                            totalAckFees(request: _129.QueryTotalAckFeesRequest): Promise<_129.QueryTotalAckFeesResponse>;
                            totalTimeoutFees(request: _129.QueryTotalTimeoutFeesRequest): Promise<_129.QueryTotalTimeoutFeesResponse>;
                            payee(request: _129.QueryPayeeRequest): Promise<_129.QueryPayeeResponse>;
                            counterpartyPayee(request: _129.QueryCounterpartyPayeeRequest): Promise<_129.QueryCounterpartyPayeeResponse>;
                            feeEnabledChannels(request: _129.QueryFeeEnabledChannelsRequest): Promise<_129.QueryFeeEnabledChannelsResponse>;
                            feeEnabledChannel(request: _129.QueryFeeEnabledChannelRequest): Promise<_129.QueryFeeEnabledChannelResponse>;
                        };
                    };
                    interchain_accounts: {
                        controller: {
                            v1: {
                                interchainAccount(request: _132.QueryInterchainAccountRequest): Promise<_132.QueryInterchainAccountResponse>;
                                params(request?: _132.QueryParamsRequest): Promise<_132.QueryParamsResponse>;
                            };
                        };
                        host: {
                            v1: {
                                params(request?: _134.QueryParamsRequest): Promise<_134.QueryParamsResponse>;
                            };
                        };
                    };
                    transfer: {
                        v1: {
                            denomTrace(request: _140.QueryDenomTraceRequest): Promise<_140.QueryDenomTraceResponse>;
                            denomTraces(request?: _140.QueryDenomTracesRequest): Promise<_140.QueryDenomTracesResponse>;
                            params(request?: _140.QueryParamsRequest): Promise<_140.QueryParamsResponse>;
                            denomHash(request: _140.QueryDenomHashRequest): Promise<_140.QueryDenomHashResponse>;
                            escrowAddress(request: _140.QueryEscrowAddressRequest): Promise<_140.QueryEscrowAddressResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _146.QueryChannelRequest): Promise<_146.QueryChannelResponse>;
                            channels(request?: _146.QueryChannelsRequest): Promise<_146.QueryChannelsResponse>;
                            connectionChannels(request: _146.QueryConnectionChannelsRequest): Promise<_146.QueryConnectionChannelsResponse>;
                            channelClientState(request: _146.QueryChannelClientStateRequest): Promise<_146.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _146.QueryChannelConsensusStateRequest): Promise<_146.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _146.QueryPacketCommitmentRequest): Promise<_146.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _146.QueryPacketCommitmentsRequest): Promise<_146.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _146.QueryPacketReceiptRequest): Promise<_146.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _146.QueryPacketAcknowledgementRequest): Promise<_146.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _146.QueryPacketAcknowledgementsRequest): Promise<_146.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _146.QueryUnreceivedPacketsRequest): Promise<_146.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _146.QueryUnreceivedAcksRequest): Promise<_146.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _146.QueryNextSequenceReceiveRequest): Promise<_146.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _150.QueryClientStateRequest): Promise<_150.QueryClientStateResponse>;
                            clientStates(request?: _150.QueryClientStatesRequest): Promise<_150.QueryClientStatesResponse>;
                            consensusState(request: _150.QueryConsensusStateRequest): Promise<_150.QueryConsensusStateResponse>;
                            consensusStates(request: _150.QueryConsensusStatesRequest): Promise<_150.QueryConsensusStatesResponse>;
                            consensusStateHeights(request: _150.QueryConsensusStateHeightsRequest): Promise<_150.QueryConsensusStateHeightsResponse>;
                            clientStatus(request: _150.QueryClientStatusRequest): Promise<_150.QueryClientStatusResponse>;
                            clientParams(request?: _150.QueryClientParamsRequest): Promise<_150.QueryClientParamsResponse>;
                            upgradedClientState(request?: _150.QueryUpgradedClientStateRequest): Promise<_150.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _150.QueryUpgradedConsensusStateRequest): Promise<_150.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _155.QueryConnectionRequest): Promise<_155.QueryConnectionResponse>;
                            connections(request?: _155.QueryConnectionsRequest): Promise<_155.QueryConnectionsResponse>;
                            clientConnections(request: _155.QueryClientConnectionsRequest): Promise<_155.QueryClientConnectionsResponse>;
                            connectionClientState(request: _155.QueryConnectionClientStateRequest): Promise<_155.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _155.QueryConnectionConsensusStateRequest): Promise<_155.QueryConnectionConsensusStateResponse>;
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
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                group: {
                    v1: import("../cosmos/group/v1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.lcd").LCDQueryClient;
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
                        v1: _276.LCDQueryClient;
                    };
                    interchain_accounts: {
                        controller: {
                            v1: _277.LCDQueryClient;
                        };
                        host: {
                            v1: _278.LCDQueryClient;
                        };
                    };
                    transfer: {
                        v1: _279.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _280.LCDQueryClient;
                    };
                    client: {
                        v1: _281.LCDQueryClient;
                    };
                    connection: {
                        v1: _282.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
