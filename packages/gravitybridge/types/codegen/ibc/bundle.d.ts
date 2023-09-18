import * as _87 from "./applications/transfer/v1/query";
import * as _88 from "./applications/transfer/v1/transfer";
import * as _89 from "./core/channel/v1/channel";
import * as _90 from "./core/channel/v1/tx";
import * as _91 from "./core/client/v1/client";
import * as _92 from "./core/client/v1/query";
import * as _93 from "./core/commitment/v1/commitment";
import * as _94 from "./lightclients/tendermint/v1/tendermint";
import * as _187 from "./applications/transfer/v1/query.lcd";
import * as _188 from "./core/client/v1/query.lcd";
import * as _189 from "./applications/transfer/v1/query.rpc.Query";
import * as _190 from "./core/client/v1/query.rpc.Query";
import * as _191 from "./core/channel/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                QueryClientImpl: typeof _189.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _87.QueryDenomTraceRequest): Promise<_87.QueryDenomTraceResponse>;
                    denomTraces(request?: _87.QueryDenomTracesRequest): Promise<_87.QueryDenomTracesResponse>;
                    params(request?: _87.QueryParamsRequest): Promise<_87.QueryParamsResponse>;
                    denomHash(request: _87.QueryDenomHashRequest): Promise<_87.QueryDenomHashResponse>;
                    escrowAddress(request: _87.QueryEscrowAddressRequest): Promise<_87.QueryEscrowAddressResponse>;
                };
                LCDQueryClient: typeof _187.LCDQueryClient;
                DenomTrace: {
                    typeUrl: string;
                    encode(message: _88.DenomTrace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _88.DenomTrace;
                    fromPartial(object: Partial<_88.DenomTrace>): _88.DenomTrace;
                    fromAmino(object: _88.DenomTraceAmino): _88.DenomTrace;
                    toAmino(message: _88.DenomTrace): _88.DenomTraceAmino;
                    fromAminoMsg(object: _88.DenomTraceAminoMsg): _88.DenomTrace;
                    toAminoMsg(message: _88.DenomTrace): _88.DenomTraceAminoMsg;
                    fromProtoMsg(message: _88.DenomTraceProtoMsg): _88.DenomTrace;
                    toProto(message: _88.DenomTrace): Uint8Array;
                    toProtoMsg(message: _88.DenomTrace): _88.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _88.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _88.Params;
                    fromPartial(object: Partial<_88.Params>): _88.Params;
                    fromAmino(object: _88.ParamsAmino): _88.Params;
                    toAmino(message: _88.Params): _88.ParamsAmino;
                    fromAminoMsg(object: _88.ParamsAminoMsg): _88.Params;
                    toAminoMsg(message: _88.Params): _88.ParamsAminoMsg;
                    fromProtoMsg(message: _88.ParamsProtoMsg): _88.Params;
                    toProto(message: _88.Params): Uint8Array;
                    toProtoMsg(message: _88.Params): _88.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    encode(message: _87.QueryDenomTraceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_87.QueryDenomTraceRequest>): _87.QueryDenomTraceRequest;
                    fromAmino(object: _87.QueryDenomTraceRequestAmino): _87.QueryDenomTraceRequest;
                    toAmino(message: _87.QueryDenomTraceRequest): _87.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _87.QueryDenomTraceRequestAminoMsg): _87.QueryDenomTraceRequest;
                    toAminoMsg(message: _87.QueryDenomTraceRequest): _87.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _87.QueryDenomTraceRequestProtoMsg): _87.QueryDenomTraceRequest;
                    toProto(message: _87.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _87.QueryDenomTraceRequest): _87.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    encode(message: _87.QueryDenomTraceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_87.QueryDenomTraceResponse>): _87.QueryDenomTraceResponse;
                    fromAmino(object: _87.QueryDenomTraceResponseAmino): _87.QueryDenomTraceResponse;
                    toAmino(message: _87.QueryDenomTraceResponse): _87.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _87.QueryDenomTraceResponseAminoMsg): _87.QueryDenomTraceResponse;
                    toAminoMsg(message: _87.QueryDenomTraceResponse): _87.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _87.QueryDenomTraceResponseProtoMsg): _87.QueryDenomTraceResponse;
                    toProto(message: _87.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _87.QueryDenomTraceResponse): _87.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    encode(message: _87.QueryDenomTracesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_87.QueryDenomTracesRequest>): _87.QueryDenomTracesRequest;
                    fromAmino(object: _87.QueryDenomTracesRequestAmino): _87.QueryDenomTracesRequest;
                    toAmino(message: _87.QueryDenomTracesRequest): _87.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _87.QueryDenomTracesRequestAminoMsg): _87.QueryDenomTracesRequest;
                    toAminoMsg(message: _87.QueryDenomTracesRequest): _87.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _87.QueryDenomTracesRequestProtoMsg): _87.QueryDenomTracesRequest;
                    toProto(message: _87.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _87.QueryDenomTracesRequest): _87.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    encode(message: _87.QueryDenomTracesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_87.QueryDenomTracesResponse>): _87.QueryDenomTracesResponse;
                    fromAmino(object: _87.QueryDenomTracesResponseAmino): _87.QueryDenomTracesResponse;
                    toAmino(message: _87.QueryDenomTracesResponse): _87.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _87.QueryDenomTracesResponseAminoMsg): _87.QueryDenomTracesResponse;
                    toAminoMsg(message: _87.QueryDenomTracesResponse): _87.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _87.QueryDenomTracesResponseProtoMsg): _87.QueryDenomTracesResponse;
                    toProto(message: _87.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _87.QueryDenomTracesResponse): _87.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _87.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _87.QueryParamsRequest;
                    fromPartial(_: Partial<_87.QueryParamsRequest>): _87.QueryParamsRequest;
                    fromAmino(_: _87.QueryParamsRequestAmino): _87.QueryParamsRequest;
                    toAmino(_: _87.QueryParamsRequest): _87.QueryParamsRequestAmino;
                    fromAminoMsg(object: _87.QueryParamsRequestAminoMsg): _87.QueryParamsRequest;
                    toAminoMsg(message: _87.QueryParamsRequest): _87.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _87.QueryParamsRequestProtoMsg): _87.QueryParamsRequest;
                    toProto(message: _87.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _87.QueryParamsRequest): _87.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    encode(message: _87.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.QueryParamsResponse;
                    fromPartial(object: Partial<_87.QueryParamsResponse>): _87.QueryParamsResponse;
                    fromAmino(object: _87.QueryParamsResponseAmino): _87.QueryParamsResponse;
                    toAmino(message: _87.QueryParamsResponse): _87.QueryParamsResponseAmino;
                    fromAminoMsg(object: _87.QueryParamsResponseAminoMsg): _87.QueryParamsResponse;
                    toAminoMsg(message: _87.QueryParamsResponse): _87.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _87.QueryParamsResponseProtoMsg): _87.QueryParamsResponse;
                    toProto(message: _87.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _87.QueryParamsResponse): _87.QueryParamsResponseProtoMsg;
                };
                QueryDenomHashRequest: {
                    typeUrl: string;
                    encode(message: _87.QueryDenomHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.QueryDenomHashRequest;
                    fromPartial(object: Partial<_87.QueryDenomHashRequest>): _87.QueryDenomHashRequest;
                    fromAmino(object: _87.QueryDenomHashRequestAmino): _87.QueryDenomHashRequest;
                    toAmino(message: _87.QueryDenomHashRequest): _87.QueryDenomHashRequestAmino;
                    fromAminoMsg(object: _87.QueryDenomHashRequestAminoMsg): _87.QueryDenomHashRequest;
                    toAminoMsg(message: _87.QueryDenomHashRequest): _87.QueryDenomHashRequestAminoMsg;
                    fromProtoMsg(message: _87.QueryDenomHashRequestProtoMsg): _87.QueryDenomHashRequest;
                    toProto(message: _87.QueryDenomHashRequest): Uint8Array;
                    toProtoMsg(message: _87.QueryDenomHashRequest): _87.QueryDenomHashRequestProtoMsg;
                };
                QueryDenomHashResponse: {
                    typeUrl: string;
                    encode(message: _87.QueryDenomHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.QueryDenomHashResponse;
                    fromPartial(object: Partial<_87.QueryDenomHashResponse>): _87.QueryDenomHashResponse;
                    fromAmino(object: _87.QueryDenomHashResponseAmino): _87.QueryDenomHashResponse;
                    toAmino(message: _87.QueryDenomHashResponse): _87.QueryDenomHashResponseAmino;
                    fromAminoMsg(object: _87.QueryDenomHashResponseAminoMsg): _87.QueryDenomHashResponse;
                    toAminoMsg(message: _87.QueryDenomHashResponse): _87.QueryDenomHashResponseAminoMsg;
                    fromProtoMsg(message: _87.QueryDenomHashResponseProtoMsg): _87.QueryDenomHashResponse;
                    toProto(message: _87.QueryDenomHashResponse): Uint8Array;
                    toProtoMsg(message: _87.QueryDenomHashResponse): _87.QueryDenomHashResponseProtoMsg;
                };
                QueryEscrowAddressRequest: {
                    typeUrl: string;
                    encode(message: _87.QueryEscrowAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.QueryEscrowAddressRequest;
                    fromPartial(object: Partial<_87.QueryEscrowAddressRequest>): _87.QueryEscrowAddressRequest;
                    fromAmino(object: _87.QueryEscrowAddressRequestAmino): _87.QueryEscrowAddressRequest;
                    toAmino(message: _87.QueryEscrowAddressRequest): _87.QueryEscrowAddressRequestAmino;
                    fromAminoMsg(object: _87.QueryEscrowAddressRequestAminoMsg): _87.QueryEscrowAddressRequest;
                    toAminoMsg(message: _87.QueryEscrowAddressRequest): _87.QueryEscrowAddressRequestAminoMsg;
                    fromProtoMsg(message: _87.QueryEscrowAddressRequestProtoMsg): _87.QueryEscrowAddressRequest;
                    toProto(message: _87.QueryEscrowAddressRequest): Uint8Array;
                    toProtoMsg(message: _87.QueryEscrowAddressRequest): _87.QueryEscrowAddressRequestProtoMsg;
                };
                QueryEscrowAddressResponse: {
                    typeUrl: string;
                    encode(message: _87.QueryEscrowAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.QueryEscrowAddressResponse;
                    fromPartial(object: Partial<_87.QueryEscrowAddressResponse>): _87.QueryEscrowAddressResponse;
                    fromAmino(object: _87.QueryEscrowAddressResponseAmino): _87.QueryEscrowAddressResponse;
                    toAmino(message: _87.QueryEscrowAddressResponse): _87.QueryEscrowAddressResponseAmino;
                    fromAminoMsg(object: _87.QueryEscrowAddressResponseAminoMsg): _87.QueryEscrowAddressResponse;
                    toAminoMsg(message: _87.QueryEscrowAddressResponse): _87.QueryEscrowAddressResponseAminoMsg;
                    fromProtoMsg(message: _87.QueryEscrowAddressResponseProtoMsg): _87.QueryEscrowAddressResponse;
                    toProto(message: _87.QueryEscrowAddressResponse): Uint8Array;
                    toProtoMsg(message: _87.QueryEscrowAddressResponse): _87.QueryEscrowAddressResponseProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _191.MsgClientImpl;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _90.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _90.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _90.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _90.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _90.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _90.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _90.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _90.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _90.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _90.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _90.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _90.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _90.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _90.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _90.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _90.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _90.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _90.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _90.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _90.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _90.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _90.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _90.MsgRecvPacket): {
                            typeUrl: string;
                            value: _90.MsgRecvPacket;
                        };
                        timeout(value: _90.MsgTimeout): {
                            typeUrl: string;
                            value: _90.MsgTimeout;
                        };
                        timeoutOnClose(value: _90.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _90.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _90.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _90.MsgAcknowledgement;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _90.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _90.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _90.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _90.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _90.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _90.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _90.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _90.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _90.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _90.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _90.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _90.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _90.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _90.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _90.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _90.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _90.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _90.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _90.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _90.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _90.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _90.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _90.MsgRecvPacket): {
                            typeUrl: string;
                            value: _90.MsgRecvPacket;
                        };
                        timeout(value: _90.MsgTimeout): {
                            typeUrl: string;
                            value: _90.MsgTimeout;
                        };
                        timeoutOnClose(value: _90.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _90.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _90.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _90.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _90.MsgChannelOpenInit) => _90.MsgChannelOpenInitAmino;
                        fromAmino: (object: _90.MsgChannelOpenInitAmino) => _90.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _90.MsgChannelOpenTry) => _90.MsgChannelOpenTryAmino;
                        fromAmino: (object: _90.MsgChannelOpenTryAmino) => _90.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _90.MsgChannelOpenAck) => _90.MsgChannelOpenAckAmino;
                        fromAmino: (object: _90.MsgChannelOpenAckAmino) => _90.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _90.MsgChannelOpenConfirm) => _90.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _90.MsgChannelOpenConfirmAmino) => _90.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _90.MsgChannelCloseInit) => _90.MsgChannelCloseInitAmino;
                        fromAmino: (object: _90.MsgChannelCloseInitAmino) => _90.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _90.MsgChannelCloseConfirm) => _90.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _90.MsgChannelCloseConfirmAmino) => _90.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _90.MsgRecvPacket) => _90.MsgRecvPacketAmino;
                        fromAmino: (object: _90.MsgRecvPacketAmino) => _90.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _90.MsgTimeout) => _90.MsgTimeoutAmino;
                        fromAmino: (object: _90.MsgTimeoutAmino) => _90.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _90.MsgTimeoutOnClose) => _90.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _90.MsgTimeoutOnCloseAmino) => _90.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _90.MsgAcknowledgement) => _90.MsgAcknowledgementAmino;
                        fromAmino: (object: _90.MsgAcknowledgementAmino) => _90.MsgAcknowledgement;
                    };
                };
                responseResultTypeFromJSON(object: any): _90.ResponseResultType;
                responseResultTypeToJSON(object: _90.ResponseResultType): string;
                ResponseResultType: typeof _90.ResponseResultType;
                ResponseResultTypeSDKType: typeof _90.ResponseResultType;
                ResponseResultTypeAmino: typeof _90.ResponseResultType;
                MsgChannelOpenInit: {
                    typeUrl: string;
                    encode(message: _90.MsgChannelOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.MsgChannelOpenInit;
                    fromPartial(object: Partial<_90.MsgChannelOpenInit>): _90.MsgChannelOpenInit;
                    fromAmino(object: _90.MsgChannelOpenInitAmino): _90.MsgChannelOpenInit;
                    toAmino(message: _90.MsgChannelOpenInit): _90.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _90.MsgChannelOpenInitAminoMsg): _90.MsgChannelOpenInit;
                    toAminoMsg(message: _90.MsgChannelOpenInit): _90.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _90.MsgChannelOpenInitProtoMsg): _90.MsgChannelOpenInit;
                    toProto(message: _90.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _90.MsgChannelOpenInit): _90.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    encode(message: _90.MsgChannelOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.MsgChannelOpenInitResponse;
                    fromPartial(object: Partial<_90.MsgChannelOpenInitResponse>): _90.MsgChannelOpenInitResponse;
                    fromAmino(object: _90.MsgChannelOpenInitResponseAmino): _90.MsgChannelOpenInitResponse;
                    toAmino(message: _90.MsgChannelOpenInitResponse): _90.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _90.MsgChannelOpenInitResponseAminoMsg): _90.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _90.MsgChannelOpenInitResponse): _90.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _90.MsgChannelOpenInitResponseProtoMsg): _90.MsgChannelOpenInitResponse;
                    toProto(message: _90.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _90.MsgChannelOpenInitResponse): _90.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    encode(message: _90.MsgChannelOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.MsgChannelOpenTry;
                    fromPartial(object: Partial<_90.MsgChannelOpenTry>): _90.MsgChannelOpenTry;
                    fromAmino(object: _90.MsgChannelOpenTryAmino): _90.MsgChannelOpenTry;
                    toAmino(message: _90.MsgChannelOpenTry): _90.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _90.MsgChannelOpenTryAminoMsg): _90.MsgChannelOpenTry;
                    toAminoMsg(message: _90.MsgChannelOpenTry): _90.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _90.MsgChannelOpenTryProtoMsg): _90.MsgChannelOpenTry;
                    toProto(message: _90.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _90.MsgChannelOpenTry): _90.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    encode(message: _90.MsgChannelOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.MsgChannelOpenTryResponse;
                    fromPartial(object: Partial<_90.MsgChannelOpenTryResponse>): _90.MsgChannelOpenTryResponse;
                    fromAmino(object: _90.MsgChannelOpenTryResponseAmino): _90.MsgChannelOpenTryResponse;
                    toAmino(message: _90.MsgChannelOpenTryResponse): _90.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _90.MsgChannelOpenTryResponseAminoMsg): _90.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _90.MsgChannelOpenTryResponse): _90.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _90.MsgChannelOpenTryResponseProtoMsg): _90.MsgChannelOpenTryResponse;
                    toProto(message: _90.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _90.MsgChannelOpenTryResponse): _90.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    encode(message: _90.MsgChannelOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.MsgChannelOpenAck;
                    fromPartial(object: Partial<_90.MsgChannelOpenAck>): _90.MsgChannelOpenAck;
                    fromAmino(object: _90.MsgChannelOpenAckAmino): _90.MsgChannelOpenAck;
                    toAmino(message: _90.MsgChannelOpenAck): _90.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _90.MsgChannelOpenAckAminoMsg): _90.MsgChannelOpenAck;
                    toAminoMsg(message: _90.MsgChannelOpenAck): _90.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _90.MsgChannelOpenAckProtoMsg): _90.MsgChannelOpenAck;
                    toProto(message: _90.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _90.MsgChannelOpenAck): _90.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _90.MsgChannelOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _90.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_90.MsgChannelOpenAckResponse>): _90.MsgChannelOpenAckResponse;
                    fromAmino(_: _90.MsgChannelOpenAckResponseAmino): _90.MsgChannelOpenAckResponse;
                    toAmino(_: _90.MsgChannelOpenAckResponse): _90.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _90.MsgChannelOpenAckResponseAminoMsg): _90.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _90.MsgChannelOpenAckResponse): _90.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _90.MsgChannelOpenAckResponseProtoMsg): _90.MsgChannelOpenAckResponse;
                    toProto(message: _90.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _90.MsgChannelOpenAckResponse): _90.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    encode(message: _90.MsgChannelOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_90.MsgChannelOpenConfirm>): _90.MsgChannelOpenConfirm;
                    fromAmino(object: _90.MsgChannelOpenConfirmAmino): _90.MsgChannelOpenConfirm;
                    toAmino(message: _90.MsgChannelOpenConfirm): _90.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _90.MsgChannelOpenConfirmAminoMsg): _90.MsgChannelOpenConfirm;
                    toAminoMsg(message: _90.MsgChannelOpenConfirm): _90.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _90.MsgChannelOpenConfirmProtoMsg): _90.MsgChannelOpenConfirm;
                    toProto(message: _90.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _90.MsgChannelOpenConfirm): _90.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _90.MsgChannelOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _90.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_90.MsgChannelOpenConfirmResponse>): _90.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _90.MsgChannelOpenConfirmResponseAmino): _90.MsgChannelOpenConfirmResponse;
                    toAmino(_: _90.MsgChannelOpenConfirmResponse): _90.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _90.MsgChannelOpenConfirmResponseAminoMsg): _90.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _90.MsgChannelOpenConfirmResponse): _90.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _90.MsgChannelOpenConfirmResponseProtoMsg): _90.MsgChannelOpenConfirmResponse;
                    toProto(message: _90.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _90.MsgChannelOpenConfirmResponse): _90.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    encode(message: _90.MsgChannelCloseInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.MsgChannelCloseInit;
                    fromPartial(object: Partial<_90.MsgChannelCloseInit>): _90.MsgChannelCloseInit;
                    fromAmino(object: _90.MsgChannelCloseInitAmino): _90.MsgChannelCloseInit;
                    toAmino(message: _90.MsgChannelCloseInit): _90.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _90.MsgChannelCloseInitAminoMsg): _90.MsgChannelCloseInit;
                    toAminoMsg(message: _90.MsgChannelCloseInit): _90.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _90.MsgChannelCloseInitProtoMsg): _90.MsgChannelCloseInit;
                    toProto(message: _90.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _90.MsgChannelCloseInit): _90.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    encode(_: _90.MsgChannelCloseInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _90.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_90.MsgChannelCloseInitResponse>): _90.MsgChannelCloseInitResponse;
                    fromAmino(_: _90.MsgChannelCloseInitResponseAmino): _90.MsgChannelCloseInitResponse;
                    toAmino(_: _90.MsgChannelCloseInitResponse): _90.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _90.MsgChannelCloseInitResponseAminoMsg): _90.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _90.MsgChannelCloseInitResponse): _90.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _90.MsgChannelCloseInitResponseProtoMsg): _90.MsgChannelCloseInitResponse;
                    toProto(message: _90.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _90.MsgChannelCloseInitResponse): _90.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    encode(message: _90.MsgChannelCloseConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_90.MsgChannelCloseConfirm>): _90.MsgChannelCloseConfirm;
                    fromAmino(object: _90.MsgChannelCloseConfirmAmino): _90.MsgChannelCloseConfirm;
                    toAmino(message: _90.MsgChannelCloseConfirm): _90.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _90.MsgChannelCloseConfirmAminoMsg): _90.MsgChannelCloseConfirm;
                    toAminoMsg(message: _90.MsgChannelCloseConfirm): _90.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _90.MsgChannelCloseConfirmProtoMsg): _90.MsgChannelCloseConfirm;
                    toProto(message: _90.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _90.MsgChannelCloseConfirm): _90.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    encode(_: _90.MsgChannelCloseConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _90.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_90.MsgChannelCloseConfirmResponse>): _90.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _90.MsgChannelCloseConfirmResponseAmino): _90.MsgChannelCloseConfirmResponse;
                    toAmino(_: _90.MsgChannelCloseConfirmResponse): _90.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _90.MsgChannelCloseConfirmResponseAminoMsg): _90.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _90.MsgChannelCloseConfirmResponse): _90.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _90.MsgChannelCloseConfirmResponseProtoMsg): _90.MsgChannelCloseConfirmResponse;
                    toProto(message: _90.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _90.MsgChannelCloseConfirmResponse): _90.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    encode(message: _90.MsgRecvPacket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.MsgRecvPacket;
                    fromPartial(object: Partial<_90.MsgRecvPacket>): _90.MsgRecvPacket;
                    fromAmino(object: _90.MsgRecvPacketAmino): _90.MsgRecvPacket;
                    toAmino(message: _90.MsgRecvPacket): _90.MsgRecvPacketAmino;
                    fromAminoMsg(object: _90.MsgRecvPacketAminoMsg): _90.MsgRecvPacket;
                    toAminoMsg(message: _90.MsgRecvPacket): _90.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _90.MsgRecvPacketProtoMsg): _90.MsgRecvPacket;
                    toProto(message: _90.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _90.MsgRecvPacket): _90.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    encode(message: _90.MsgRecvPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.MsgRecvPacketResponse;
                    fromPartial(object: Partial<_90.MsgRecvPacketResponse>): _90.MsgRecvPacketResponse;
                    fromAmino(object: _90.MsgRecvPacketResponseAmino): _90.MsgRecvPacketResponse;
                    toAmino(message: _90.MsgRecvPacketResponse): _90.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _90.MsgRecvPacketResponseAminoMsg): _90.MsgRecvPacketResponse;
                    toAminoMsg(message: _90.MsgRecvPacketResponse): _90.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _90.MsgRecvPacketResponseProtoMsg): _90.MsgRecvPacketResponse;
                    toProto(message: _90.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _90.MsgRecvPacketResponse): _90.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    encode(message: _90.MsgTimeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.MsgTimeout;
                    fromPartial(object: Partial<_90.MsgTimeout>): _90.MsgTimeout;
                    fromAmino(object: _90.MsgTimeoutAmino): _90.MsgTimeout;
                    toAmino(message: _90.MsgTimeout): _90.MsgTimeoutAmino;
                    fromAminoMsg(object: _90.MsgTimeoutAminoMsg): _90.MsgTimeout;
                    toAminoMsg(message: _90.MsgTimeout): _90.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _90.MsgTimeoutProtoMsg): _90.MsgTimeout;
                    toProto(message: _90.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _90.MsgTimeout): _90.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    encode(message: _90.MsgTimeoutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.MsgTimeoutResponse;
                    fromPartial(object: Partial<_90.MsgTimeoutResponse>): _90.MsgTimeoutResponse;
                    fromAmino(object: _90.MsgTimeoutResponseAmino): _90.MsgTimeoutResponse;
                    toAmino(message: _90.MsgTimeoutResponse): _90.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _90.MsgTimeoutResponseAminoMsg): _90.MsgTimeoutResponse;
                    toAminoMsg(message: _90.MsgTimeoutResponse): _90.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _90.MsgTimeoutResponseProtoMsg): _90.MsgTimeoutResponse;
                    toProto(message: _90.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _90.MsgTimeoutResponse): _90.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    encode(message: _90.MsgTimeoutOnClose, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_90.MsgTimeoutOnClose>): _90.MsgTimeoutOnClose;
                    fromAmino(object: _90.MsgTimeoutOnCloseAmino): _90.MsgTimeoutOnClose;
                    toAmino(message: _90.MsgTimeoutOnClose): _90.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _90.MsgTimeoutOnCloseAminoMsg): _90.MsgTimeoutOnClose;
                    toAminoMsg(message: _90.MsgTimeoutOnClose): _90.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _90.MsgTimeoutOnCloseProtoMsg): _90.MsgTimeoutOnClose;
                    toProto(message: _90.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _90.MsgTimeoutOnClose): _90.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    encode(message: _90.MsgTimeoutOnCloseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.MsgTimeoutOnCloseResponse;
                    fromPartial(object: Partial<_90.MsgTimeoutOnCloseResponse>): _90.MsgTimeoutOnCloseResponse;
                    fromAmino(object: _90.MsgTimeoutOnCloseResponseAmino): _90.MsgTimeoutOnCloseResponse;
                    toAmino(message: _90.MsgTimeoutOnCloseResponse): _90.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _90.MsgTimeoutOnCloseResponseAminoMsg): _90.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _90.MsgTimeoutOnCloseResponse): _90.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _90.MsgTimeoutOnCloseResponseProtoMsg): _90.MsgTimeoutOnCloseResponse;
                    toProto(message: _90.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _90.MsgTimeoutOnCloseResponse): _90.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    encode(message: _90.MsgAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.MsgAcknowledgement;
                    fromPartial(object: Partial<_90.MsgAcknowledgement>): _90.MsgAcknowledgement;
                    fromAmino(object: _90.MsgAcknowledgementAmino): _90.MsgAcknowledgement;
                    toAmino(message: _90.MsgAcknowledgement): _90.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _90.MsgAcknowledgementAminoMsg): _90.MsgAcknowledgement;
                    toAminoMsg(message: _90.MsgAcknowledgement): _90.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _90.MsgAcknowledgementProtoMsg): _90.MsgAcknowledgement;
                    toProto(message: _90.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _90.MsgAcknowledgement): _90.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _90.MsgAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.MsgAcknowledgementResponse;
                    fromPartial(object: Partial<_90.MsgAcknowledgementResponse>): _90.MsgAcknowledgementResponse;
                    fromAmino(object: _90.MsgAcknowledgementResponseAmino): _90.MsgAcknowledgementResponse;
                    toAmino(message: _90.MsgAcknowledgementResponse): _90.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _90.MsgAcknowledgementResponseAminoMsg): _90.MsgAcknowledgementResponse;
                    toAminoMsg(message: _90.MsgAcknowledgementResponse): _90.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _90.MsgAcknowledgementResponseProtoMsg): _90.MsgAcknowledgementResponse;
                    toProto(message: _90.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _90.MsgAcknowledgementResponse): _90.MsgAcknowledgementResponseProtoMsg;
                };
                stateFromJSON(object: any): _89.State;
                stateToJSON(object: _89.State): string;
                orderFromJSON(object: any): _89.Order;
                orderToJSON(object: _89.Order): string;
                State: typeof _89.State;
                StateSDKType: typeof _89.State;
                StateAmino: typeof _89.State;
                Order: typeof _89.Order;
                OrderSDKType: typeof _89.Order;
                OrderAmino: typeof _89.Order;
                Channel: {
                    typeUrl: string;
                    encode(message: _89.Channel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _89.Channel;
                    fromPartial(object: Partial<_89.Channel>): _89.Channel;
                    fromAmino(object: _89.ChannelAmino): _89.Channel;
                    toAmino(message: _89.Channel): _89.ChannelAmino;
                    fromAminoMsg(object: _89.ChannelAminoMsg): _89.Channel;
                    toAminoMsg(message: _89.Channel): _89.ChannelAminoMsg;
                    fromProtoMsg(message: _89.ChannelProtoMsg): _89.Channel;
                    toProto(message: _89.Channel): Uint8Array;
                    toProtoMsg(message: _89.Channel): _89.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    encode(message: _89.IdentifiedChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _89.IdentifiedChannel;
                    fromPartial(object: Partial<_89.IdentifiedChannel>): _89.IdentifiedChannel;
                    fromAmino(object: _89.IdentifiedChannelAmino): _89.IdentifiedChannel;
                    toAmino(message: _89.IdentifiedChannel): _89.IdentifiedChannelAmino;
                    fromAminoMsg(object: _89.IdentifiedChannelAminoMsg): _89.IdentifiedChannel;
                    toAminoMsg(message: _89.IdentifiedChannel): _89.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _89.IdentifiedChannelProtoMsg): _89.IdentifiedChannel;
                    toProto(message: _89.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _89.IdentifiedChannel): _89.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _89.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _89.Counterparty;
                    fromPartial(object: Partial<_89.Counterparty>): _89.Counterparty;
                    fromAmino(object: _89.CounterpartyAmino): _89.Counterparty;
                    toAmino(message: _89.Counterparty): _89.CounterpartyAmino;
                    fromAminoMsg(object: _89.CounterpartyAminoMsg): _89.Counterparty;
                    toAminoMsg(message: _89.Counterparty): _89.CounterpartyAminoMsg;
                    fromProtoMsg(message: _89.CounterpartyProtoMsg): _89.Counterparty;
                    toProto(message: _89.Counterparty): Uint8Array;
                    toProtoMsg(message: _89.Counterparty): _89.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    encode(message: _89.Packet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _89.Packet;
                    fromPartial(object: Partial<_89.Packet>): _89.Packet;
                    fromAmino(object: _89.PacketAmino): _89.Packet;
                    toAmino(message: _89.Packet): _89.PacketAmino;
                    fromAminoMsg(object: _89.PacketAminoMsg): _89.Packet;
                    toAminoMsg(message: _89.Packet): _89.PacketAminoMsg;
                    fromProtoMsg(message: _89.PacketProtoMsg): _89.Packet;
                    toProto(message: _89.Packet): Uint8Array;
                    toProtoMsg(message: _89.Packet): _89.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    encode(message: _89.PacketState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _89.PacketState;
                    fromPartial(object: Partial<_89.PacketState>): _89.PacketState;
                    fromAmino(object: _89.PacketStateAmino): _89.PacketState;
                    toAmino(message: _89.PacketState): _89.PacketStateAmino;
                    fromAminoMsg(object: _89.PacketStateAminoMsg): _89.PacketState;
                    toAminoMsg(message: _89.PacketState): _89.PacketStateAminoMsg;
                    fromProtoMsg(message: _89.PacketStateProtoMsg): _89.PacketState;
                    toProto(message: _89.PacketState): Uint8Array;
                    toProtoMsg(message: _89.PacketState): _89.PacketStateProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    encode(message: _89.Acknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _89.Acknowledgement;
                    fromPartial(object: Partial<_89.Acknowledgement>): _89.Acknowledgement;
                    fromAmino(object: _89.AcknowledgementAmino): _89.Acknowledgement;
                    toAmino(message: _89.Acknowledgement): _89.AcknowledgementAmino;
                    fromAminoMsg(object: _89.AcknowledgementAminoMsg): _89.Acknowledgement;
                    toAminoMsg(message: _89.Acknowledgement): _89.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _89.AcknowledgementProtoMsg): _89.Acknowledgement;
                    toProto(message: _89.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _89.Acknowledgement): _89.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                QueryClientImpl: typeof _190.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _92.QueryClientStateRequest): Promise<_92.QueryClientStateResponse>;
                    clientStates(request?: _92.QueryClientStatesRequest): Promise<_92.QueryClientStatesResponse>;
                    consensusState(request: _92.QueryConsensusStateRequest): Promise<_92.QueryConsensusStateResponse>;
                    consensusStates(request: _92.QueryConsensusStatesRequest): Promise<_92.QueryConsensusStatesResponse>;
                    consensusStateHeights(request: _92.QueryConsensusStateHeightsRequest): Promise<_92.QueryConsensusStateHeightsResponse>;
                    clientStatus(request: _92.QueryClientStatusRequest): Promise<_92.QueryClientStatusResponse>;
                    clientParams(request?: _92.QueryClientParamsRequest): Promise<_92.QueryClientParamsResponse>;
                    upgradedClientState(request?: _92.QueryUpgradedClientStateRequest): Promise<_92.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _92.QueryUpgradedConsensusStateRequest): Promise<_92.QueryUpgradedConsensusStateResponse>;
                };
                LCDQueryClient: typeof _188.LCDQueryClient;
                QueryClientStateRequest: {
                    typeUrl: string;
                    encode(message: _92.QueryClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _92.QueryClientStateRequest;
                    fromPartial(object: Partial<_92.QueryClientStateRequest>): _92.QueryClientStateRequest;
                    fromAmino(object: _92.QueryClientStateRequestAmino): _92.QueryClientStateRequest;
                    toAmino(message: _92.QueryClientStateRequest): _92.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _92.QueryClientStateRequestAminoMsg): _92.QueryClientStateRequest;
                    toAminoMsg(message: _92.QueryClientStateRequest): _92.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _92.QueryClientStateRequestProtoMsg): _92.QueryClientStateRequest;
                    toProto(message: _92.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _92.QueryClientStateRequest): _92.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    encode(message: _92.QueryClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _92.QueryClientStateResponse;
                    fromPartial(object: Partial<_92.QueryClientStateResponse>): _92.QueryClientStateResponse;
                    fromAmino(object: _92.QueryClientStateResponseAmino): _92.QueryClientStateResponse;
                    toAmino(message: _92.QueryClientStateResponse): _92.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _92.QueryClientStateResponseAminoMsg): _92.QueryClientStateResponse;
                    toAminoMsg(message: _92.QueryClientStateResponse): _92.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _92.QueryClientStateResponseProtoMsg): _92.QueryClientStateResponse;
                    toProto(message: _92.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _92.QueryClientStateResponse): _92.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    encode(message: _92.QueryClientStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _92.QueryClientStatesRequest;
                    fromPartial(object: Partial<_92.QueryClientStatesRequest>): _92.QueryClientStatesRequest;
                    fromAmino(object: _92.QueryClientStatesRequestAmino): _92.QueryClientStatesRequest;
                    toAmino(message: _92.QueryClientStatesRequest): _92.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _92.QueryClientStatesRequestAminoMsg): _92.QueryClientStatesRequest;
                    toAminoMsg(message: _92.QueryClientStatesRequest): _92.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _92.QueryClientStatesRequestProtoMsg): _92.QueryClientStatesRequest;
                    toProto(message: _92.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _92.QueryClientStatesRequest): _92.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    encode(message: _92.QueryClientStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _92.QueryClientStatesResponse;
                    fromPartial(object: Partial<_92.QueryClientStatesResponse>): _92.QueryClientStatesResponse;
                    fromAmino(object: _92.QueryClientStatesResponseAmino): _92.QueryClientStatesResponse;
                    toAmino(message: _92.QueryClientStatesResponse): _92.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _92.QueryClientStatesResponseAminoMsg): _92.QueryClientStatesResponse;
                    toAminoMsg(message: _92.QueryClientStatesResponse): _92.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _92.QueryClientStatesResponseProtoMsg): _92.QueryClientStatesResponse;
                    toProto(message: _92.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _92.QueryClientStatesResponse): _92.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _92.QueryConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _92.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_92.QueryConsensusStateRequest>): _92.QueryConsensusStateRequest;
                    fromAmino(object: _92.QueryConsensusStateRequestAmino): _92.QueryConsensusStateRequest;
                    toAmino(message: _92.QueryConsensusStateRequest): _92.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _92.QueryConsensusStateRequestAminoMsg): _92.QueryConsensusStateRequest;
                    toAminoMsg(message: _92.QueryConsensusStateRequest): _92.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _92.QueryConsensusStateRequestProtoMsg): _92.QueryConsensusStateRequest;
                    toProto(message: _92.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _92.QueryConsensusStateRequest): _92.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _92.QueryConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _92.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_92.QueryConsensusStateResponse>): _92.QueryConsensusStateResponse;
                    fromAmino(object: _92.QueryConsensusStateResponseAmino): _92.QueryConsensusStateResponse;
                    toAmino(message: _92.QueryConsensusStateResponse): _92.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _92.QueryConsensusStateResponseAminoMsg): _92.QueryConsensusStateResponse;
                    toAminoMsg(message: _92.QueryConsensusStateResponse): _92.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _92.QueryConsensusStateResponseProtoMsg): _92.QueryConsensusStateResponse;
                    toProto(message: _92.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _92.QueryConsensusStateResponse): _92.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    encode(message: _92.QueryConsensusStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _92.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_92.QueryConsensusStatesRequest>): _92.QueryConsensusStatesRequest;
                    fromAmino(object: _92.QueryConsensusStatesRequestAmino): _92.QueryConsensusStatesRequest;
                    toAmino(message: _92.QueryConsensusStatesRequest): _92.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _92.QueryConsensusStatesRequestAminoMsg): _92.QueryConsensusStatesRequest;
                    toAminoMsg(message: _92.QueryConsensusStatesRequest): _92.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _92.QueryConsensusStatesRequestProtoMsg): _92.QueryConsensusStatesRequest;
                    toProto(message: _92.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _92.QueryConsensusStatesRequest): _92.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    encode(message: _92.QueryConsensusStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _92.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_92.QueryConsensusStatesResponse>): _92.QueryConsensusStatesResponse;
                    fromAmino(object: _92.QueryConsensusStatesResponseAmino): _92.QueryConsensusStatesResponse;
                    toAmino(message: _92.QueryConsensusStatesResponse): _92.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _92.QueryConsensusStatesResponseAminoMsg): _92.QueryConsensusStatesResponse;
                    toAminoMsg(message: _92.QueryConsensusStatesResponse): _92.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _92.QueryConsensusStatesResponseProtoMsg): _92.QueryConsensusStatesResponse;
                    toProto(message: _92.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _92.QueryConsensusStatesResponse): _92.QueryConsensusStatesResponseProtoMsg;
                };
                QueryConsensusStateHeightsRequest: {
                    typeUrl: string;
                    encode(message: _92.QueryConsensusStateHeightsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _92.QueryConsensusStateHeightsRequest;
                    fromPartial(object: Partial<_92.QueryConsensusStateHeightsRequest>): _92.QueryConsensusStateHeightsRequest;
                    fromAmino(object: _92.QueryConsensusStateHeightsRequestAmino): _92.QueryConsensusStateHeightsRequest;
                    toAmino(message: _92.QueryConsensusStateHeightsRequest): _92.QueryConsensusStateHeightsRequestAmino;
                    fromAminoMsg(object: _92.QueryConsensusStateHeightsRequestAminoMsg): _92.QueryConsensusStateHeightsRequest;
                    toAminoMsg(message: _92.QueryConsensusStateHeightsRequest): _92.QueryConsensusStateHeightsRequestAminoMsg;
                    fromProtoMsg(message: _92.QueryConsensusStateHeightsRequestProtoMsg): _92.QueryConsensusStateHeightsRequest;
                    toProto(message: _92.QueryConsensusStateHeightsRequest): Uint8Array;
                    toProtoMsg(message: _92.QueryConsensusStateHeightsRequest): _92.QueryConsensusStateHeightsRequestProtoMsg;
                };
                QueryConsensusStateHeightsResponse: {
                    typeUrl: string;
                    encode(message: _92.QueryConsensusStateHeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _92.QueryConsensusStateHeightsResponse;
                    fromPartial(object: Partial<_92.QueryConsensusStateHeightsResponse>): _92.QueryConsensusStateHeightsResponse;
                    fromAmino(object: _92.QueryConsensusStateHeightsResponseAmino): _92.QueryConsensusStateHeightsResponse;
                    toAmino(message: _92.QueryConsensusStateHeightsResponse): _92.QueryConsensusStateHeightsResponseAmino;
                    fromAminoMsg(object: _92.QueryConsensusStateHeightsResponseAminoMsg): _92.QueryConsensusStateHeightsResponse;
                    toAminoMsg(message: _92.QueryConsensusStateHeightsResponse): _92.QueryConsensusStateHeightsResponseAminoMsg;
                    fromProtoMsg(message: _92.QueryConsensusStateHeightsResponseProtoMsg): _92.QueryConsensusStateHeightsResponse;
                    toProto(message: _92.QueryConsensusStateHeightsResponse): Uint8Array;
                    toProtoMsg(message: _92.QueryConsensusStateHeightsResponse): _92.QueryConsensusStateHeightsResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    encode(message: _92.QueryClientStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _92.QueryClientStatusRequest;
                    fromPartial(object: Partial<_92.QueryClientStatusRequest>): _92.QueryClientStatusRequest;
                    fromAmino(object: _92.QueryClientStatusRequestAmino): _92.QueryClientStatusRequest;
                    toAmino(message: _92.QueryClientStatusRequest): _92.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _92.QueryClientStatusRequestAminoMsg): _92.QueryClientStatusRequest;
                    toAminoMsg(message: _92.QueryClientStatusRequest): _92.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _92.QueryClientStatusRequestProtoMsg): _92.QueryClientStatusRequest;
                    toProto(message: _92.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _92.QueryClientStatusRequest): _92.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    encode(message: _92.QueryClientStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _92.QueryClientStatusResponse;
                    fromPartial(object: Partial<_92.QueryClientStatusResponse>): _92.QueryClientStatusResponse;
                    fromAmino(object: _92.QueryClientStatusResponseAmino): _92.QueryClientStatusResponse;
                    toAmino(message: _92.QueryClientStatusResponse): _92.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _92.QueryClientStatusResponseAminoMsg): _92.QueryClientStatusResponse;
                    toAminoMsg(message: _92.QueryClientStatusResponse): _92.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _92.QueryClientStatusResponseProtoMsg): _92.QueryClientStatusResponse;
                    toProto(message: _92.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _92.QueryClientStatusResponse): _92.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    encode(_: _92.QueryClientParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _92.QueryClientParamsRequest;
                    fromPartial(_: Partial<_92.QueryClientParamsRequest>): _92.QueryClientParamsRequest;
                    fromAmino(_: _92.QueryClientParamsRequestAmino): _92.QueryClientParamsRequest;
                    toAmino(_: _92.QueryClientParamsRequest): _92.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _92.QueryClientParamsRequestAminoMsg): _92.QueryClientParamsRequest;
                    toAminoMsg(message: _92.QueryClientParamsRequest): _92.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _92.QueryClientParamsRequestProtoMsg): _92.QueryClientParamsRequest;
                    toProto(message: _92.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _92.QueryClientParamsRequest): _92.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    encode(message: _92.QueryClientParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _92.QueryClientParamsResponse;
                    fromPartial(object: Partial<_92.QueryClientParamsResponse>): _92.QueryClientParamsResponse;
                    fromAmino(object: _92.QueryClientParamsResponseAmino): _92.QueryClientParamsResponse;
                    toAmino(message: _92.QueryClientParamsResponse): _92.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _92.QueryClientParamsResponseAminoMsg): _92.QueryClientParamsResponse;
                    toAminoMsg(message: _92.QueryClientParamsResponse): _92.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _92.QueryClientParamsResponseProtoMsg): _92.QueryClientParamsResponse;
                    toProto(message: _92.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _92.QueryClientParamsResponse): _92.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    encode(_: _92.QueryUpgradedClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _92.QueryUpgradedClientStateRequest;
                    fromPartial(_: Partial<_92.QueryUpgradedClientStateRequest>): _92.QueryUpgradedClientStateRequest;
                    fromAmino(_: _92.QueryUpgradedClientStateRequestAmino): _92.QueryUpgradedClientStateRequest;
                    toAmino(_: _92.QueryUpgradedClientStateRequest): _92.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _92.QueryUpgradedClientStateRequestAminoMsg): _92.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _92.QueryUpgradedClientStateRequest): _92.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _92.QueryUpgradedClientStateRequestProtoMsg): _92.QueryUpgradedClientStateRequest;
                    toProto(message: _92.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _92.QueryUpgradedClientStateRequest): _92.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    encode(message: _92.QueryUpgradedClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _92.QueryUpgradedClientStateResponse;
                    fromPartial(object: Partial<_92.QueryUpgradedClientStateResponse>): _92.QueryUpgradedClientStateResponse;
                    fromAmino(object: _92.QueryUpgradedClientStateResponseAmino): _92.QueryUpgradedClientStateResponse;
                    toAmino(message: _92.QueryUpgradedClientStateResponse): _92.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _92.QueryUpgradedClientStateResponseAminoMsg): _92.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _92.QueryUpgradedClientStateResponse): _92.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _92.QueryUpgradedClientStateResponseProtoMsg): _92.QueryUpgradedClientStateResponse;
                    toProto(message: _92.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _92.QueryUpgradedClientStateResponse): _92.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    encode(_: _92.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _92.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: Partial<_92.QueryUpgradedConsensusStateRequest>): _92.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _92.QueryUpgradedConsensusStateRequestAmino): _92.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _92.QueryUpgradedConsensusStateRequest): _92.QueryUpgradedConsensusStateRequestAmino;
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
                IdentifiedClientState: {
                    typeUrl: string;
                    encode(message: _91.IdentifiedClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _91.IdentifiedClientState;
                    fromPartial(object: Partial<_91.IdentifiedClientState>): _91.IdentifiedClientState;
                    fromAmino(object: _91.IdentifiedClientStateAmino): _91.IdentifiedClientState;
                    toAmino(message: _91.IdentifiedClientState): _91.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _91.IdentifiedClientStateAminoMsg): _91.IdentifiedClientState;
                    toAminoMsg(message: _91.IdentifiedClientState): _91.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _91.IdentifiedClientStateProtoMsg): _91.IdentifiedClientState;
                    toProto(message: _91.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _91.IdentifiedClientState): _91.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    encode(message: _91.ConsensusStateWithHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _91.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_91.ConsensusStateWithHeight>): _91.ConsensusStateWithHeight;
                    fromAmino(object: _91.ConsensusStateWithHeightAmino): _91.ConsensusStateWithHeight;
                    toAmino(message: _91.ConsensusStateWithHeight): _91.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _91.ConsensusStateWithHeightAminoMsg): _91.ConsensusStateWithHeight;
                    toAminoMsg(message: _91.ConsensusStateWithHeight): _91.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _91.ConsensusStateWithHeightProtoMsg): _91.ConsensusStateWithHeight;
                    toProto(message: _91.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _91.ConsensusStateWithHeight): _91.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    encode(message: _91.ClientConsensusStates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _91.ClientConsensusStates;
                    fromPartial(object: Partial<_91.ClientConsensusStates>): _91.ClientConsensusStates;
                    fromAmino(object: _91.ClientConsensusStatesAmino): _91.ClientConsensusStates;
                    toAmino(message: _91.ClientConsensusStates): _91.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _91.ClientConsensusStatesAminoMsg): _91.ClientConsensusStates;
                    toAminoMsg(message: _91.ClientConsensusStates): _91.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _91.ClientConsensusStatesProtoMsg): _91.ClientConsensusStates;
                    toProto(message: _91.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _91.ClientConsensusStates): _91.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    encode(message: _91.ClientUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _91.ClientUpdateProposal;
                    fromPartial(object: Partial<_91.ClientUpdateProposal>): _91.ClientUpdateProposal;
                    fromAmino(object: _91.ClientUpdateProposalAmino): _91.ClientUpdateProposal;
                    toAmino(message: _91.ClientUpdateProposal): _91.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _91.ClientUpdateProposalAminoMsg): _91.ClientUpdateProposal;
                    toAminoMsg(message: _91.ClientUpdateProposal): _91.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _91.ClientUpdateProposalProtoMsg): _91.ClientUpdateProposal;
                    toProto(message: _91.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _91.ClientUpdateProposal): _91.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    encode(message: _91.UpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _91.UpgradeProposal;
                    fromPartial(object: Partial<_91.UpgradeProposal>): _91.UpgradeProposal;
                    fromAmino(object: _91.UpgradeProposalAmino): _91.UpgradeProposal;
                    toAmino(message: _91.UpgradeProposal): _91.UpgradeProposalAmino;
                    fromAminoMsg(object: _91.UpgradeProposalAminoMsg): _91.UpgradeProposal;
                    toAminoMsg(message: _91.UpgradeProposal): _91.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _91.UpgradeProposalProtoMsg): _91.UpgradeProposal;
                    toProto(message: _91.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _91.UpgradeProposal): _91.UpgradeProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    encode(message: _91.Height, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _91.Height;
                    fromPartial(object: Partial<_91.Height>): _91.Height;
                    fromAmino(object: _91.HeightAmino): _91.Height;
                    toAmino(message: _91.Height): _91.HeightAmino;
                    fromAminoMsg(object: _91.HeightAminoMsg): _91.Height;
                    toAminoMsg(message: _91.Height): _91.HeightAminoMsg;
                    fromProtoMsg(message: _91.HeightProtoMsg): _91.Height;
                    toProto(message: _91.Height): Uint8Array;
                    toProtoMsg(message: _91.Height): _91.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _91.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _91.Params;
                    fromPartial(object: Partial<_91.Params>): _91.Params;
                    fromAmino(object: _91.ParamsAmino): _91.Params;
                    toAmino(message: _91.Params): _91.ParamsAmino;
                    fromAminoMsg(object: _91.ParamsAminoMsg): _91.Params;
                    toAminoMsg(message: _91.Params): _91.ParamsAminoMsg;
                    fromProtoMsg(message: _91.ParamsProtoMsg): _91.Params;
                    toProto(message: _91.Params): Uint8Array;
                    toProtoMsg(message: _91.Params): _91.ParamsProtoMsg;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    typeUrl: string;
                    encode(message: _93.MerkleRoot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.MerkleRoot;
                    fromPartial(object: Partial<_93.MerkleRoot>): _93.MerkleRoot;
                    fromAmino(object: _93.MerkleRootAmino): _93.MerkleRoot;
                    toAmino(message: _93.MerkleRoot): _93.MerkleRootAmino;
                    fromAminoMsg(object: _93.MerkleRootAminoMsg): _93.MerkleRoot;
                    toAminoMsg(message: _93.MerkleRoot): _93.MerkleRootAminoMsg;
                    fromProtoMsg(message: _93.MerkleRootProtoMsg): _93.MerkleRoot;
                    toProto(message: _93.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _93.MerkleRoot): _93.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    encode(message: _93.MerklePrefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.MerklePrefix;
                    fromPartial(object: Partial<_93.MerklePrefix>): _93.MerklePrefix;
                    fromAmino(object: _93.MerklePrefixAmino): _93.MerklePrefix;
                    toAmino(message: _93.MerklePrefix): _93.MerklePrefixAmino;
                    fromAminoMsg(object: _93.MerklePrefixAminoMsg): _93.MerklePrefix;
                    toAminoMsg(message: _93.MerklePrefix): _93.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _93.MerklePrefixProtoMsg): _93.MerklePrefix;
                    toProto(message: _93.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _93.MerklePrefix): _93.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    encode(message: _93.MerklePath, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.MerklePath;
                    fromPartial(object: Partial<_93.MerklePath>): _93.MerklePath;
                    fromAmino(object: _93.MerklePathAmino): _93.MerklePath;
                    toAmino(message: _93.MerklePath): _93.MerklePathAmino;
                    fromAminoMsg(object: _93.MerklePathAminoMsg): _93.MerklePath;
                    toAminoMsg(message: _93.MerklePath): _93.MerklePathAminoMsg;
                    fromProtoMsg(message: _93.MerklePathProtoMsg): _93.MerklePath;
                    toProto(message: _93.MerklePath): Uint8Array;
                    toProtoMsg(message: _93.MerklePath): _93.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    encode(message: _93.MerkleProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.MerkleProof;
                    fromPartial(object: Partial<_93.MerkleProof>): _93.MerkleProof;
                    fromAmino(object: _93.MerkleProofAmino): _93.MerkleProof;
                    toAmino(message: _93.MerkleProof): _93.MerkleProofAmino;
                    fromAminoMsg(object: _93.MerkleProofAminoMsg): _93.MerkleProof;
                    toAminoMsg(message: _93.MerkleProof): _93.MerkleProofAminoMsg;
                    fromProtoMsg(message: _93.MerkleProofProtoMsg): _93.MerkleProof;
                    toProto(message: _93.MerkleProof): Uint8Array;
                    toProtoMsg(message: _93.MerkleProof): _93.MerkleProofProtoMsg;
                };
            };
        }
    }
    namespace lightclients {
        namespace tendermint {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _94.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _94.ClientState;
                    fromPartial(object: Partial<_94.ClientState>): _94.ClientState;
                    fromAmino(object: _94.ClientStateAmino): _94.ClientState;
                    toAmino(message: _94.ClientState): _94.ClientStateAmino;
                    fromAminoMsg(object: _94.ClientStateAminoMsg): _94.ClientState;
                    toAminoMsg(message: _94.ClientState): _94.ClientStateAminoMsg;
                    fromProtoMsg(message: _94.ClientStateProtoMsg): _94.ClientState;
                    toProto(message: _94.ClientState): Uint8Array;
                    toProtoMsg(message: _94.ClientState): _94.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _94.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _94.ConsensusState;
                    fromPartial(object: Partial<_94.ConsensusState>): _94.ConsensusState;
                    fromAmino(object: _94.ConsensusStateAmino): _94.ConsensusState;
                    toAmino(message: _94.ConsensusState): _94.ConsensusStateAmino;
                    fromAminoMsg(object: _94.ConsensusStateAminoMsg): _94.ConsensusState;
                    toAminoMsg(message: _94.ConsensusState): _94.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _94.ConsensusStateProtoMsg): _94.ConsensusState;
                    toProto(message: _94.ConsensusState): Uint8Array;
                    toProtoMsg(message: _94.ConsensusState): _94.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _94.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _94.Misbehaviour;
                    fromPartial(object: Partial<_94.Misbehaviour>): _94.Misbehaviour;
                    fromAmino(object: _94.MisbehaviourAmino): _94.Misbehaviour;
                    toAmino(message: _94.Misbehaviour): _94.MisbehaviourAmino;
                    fromAminoMsg(object: _94.MisbehaviourAminoMsg): _94.Misbehaviour;
                    toAminoMsg(message: _94.Misbehaviour): _94.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _94.MisbehaviourProtoMsg): _94.Misbehaviour;
                    toProto(message: _94.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _94.Misbehaviour): _94.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _94.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _94.Header;
                    fromPartial(object: Partial<_94.Header>): _94.Header;
                    fromAmino(object: _94.HeaderAmino): _94.Header;
                    toAmino(message: _94.Header): _94.HeaderAmino;
                    fromAminoMsg(object: _94.HeaderAminoMsg): _94.Header;
                    toAminoMsg(message: _94.Header): _94.HeaderAminoMsg;
                    fromProtoMsg(message: _94.HeaderProtoMsg): _94.Header;
                    toProto(message: _94.Header): Uint8Array;
                    toProtoMsg(message: _94.Header): _94.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    encode(message: _94.Fraction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _94.Fraction;
                    fromPartial(object: Partial<_94.Fraction>): _94.Fraction;
                    fromAmino(object: _94.FractionAmino): _94.Fraction;
                    toAmino(message: _94.Fraction): _94.FractionAmino;
                    fromAminoMsg(object: _94.FractionAminoMsg): _94.Fraction;
                    toAminoMsg(message: _94.Fraction): _94.FractionAminoMsg;
                    fromProtoMsg(message: _94.FractionProtoMsg): _94.Fraction;
                    toProto(message: _94.Fraction): Uint8Array;
                    toProtoMsg(message: _94.Fraction): _94.FractionProtoMsg;
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
                core: {
                    channel: {
                        v1: _191.MsgClientImpl;
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
                    transfer: {
                        v1: {
                            denomTrace(request: _87.QueryDenomTraceRequest): Promise<_87.QueryDenomTraceResponse>;
                            denomTraces(request?: _87.QueryDenomTracesRequest): Promise<_87.QueryDenomTracesResponse>;
                            params(request?: _87.QueryParamsRequest): Promise<_87.QueryParamsResponse>;
                            denomHash(request: _87.QueryDenomHashRequest): Promise<_87.QueryDenomHashResponse>;
                            escrowAddress(request: _87.QueryEscrowAddressRequest): Promise<_87.QueryEscrowAddressResponse>;
                        };
                    };
                };
                core: {
                    client: {
                        v1: {
                            clientState(request: _92.QueryClientStateRequest): Promise<_92.QueryClientStateResponse>;
                            clientStates(request?: _92.QueryClientStatesRequest): Promise<_92.QueryClientStatesResponse>;
                            consensusState(request: _92.QueryConsensusStateRequest): Promise<_92.QueryConsensusStateResponse>;
                            consensusStates(request: _92.QueryConsensusStatesRequest): Promise<_92.QueryConsensusStatesResponse>;
                            consensusStateHeights(request: _92.QueryConsensusStateHeightsRequest): Promise<_92.QueryConsensusStateHeightsResponse>;
                            clientStatus(request: _92.QueryClientStatusRequest): Promise<_92.QueryClientStatusResponse>;
                            clientParams(request?: _92.QueryClientParamsRequest): Promise<_92.QueryClientParamsResponse>;
                            upgradedClientState(request?: _92.QueryUpgradedClientStateRequest): Promise<_92.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _92.QueryUpgradedConsensusStateRequest): Promise<_92.QueryUpgradedConsensusStateResponse>;
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
                    transfer: {
                        v1: _187.LCDQueryClient;
                    };
                };
                core: {
                    client: {
                        v1: _188.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
