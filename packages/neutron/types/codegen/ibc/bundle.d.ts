import * as _187 from "./applications/fee/v1/ack";
import * as _188 from "./applications/fee/v1/fee";
import * as _189 from "./applications/fee/v1/genesis";
import * as _190 from "./applications/fee/v1/metadata";
import * as _191 from "./applications/fee/v1/query";
import * as _192 from "./applications/fee/v1/tx";
import * as _193 from "./applications/interchain_accounts/controller/v1/controller";
import * as _194 from "./applications/interchain_accounts/controller/v1/query";
import * as _195 from "./applications/interchain_accounts/controller/v1/tx";
import * as _196 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _197 from "./applications/interchain_accounts/host/v1/host";
import * as _198 from "./applications/interchain_accounts/host/v1/query";
import * as _199 from "./applications/interchain_accounts/v1/account";
import * as _200 from "./applications/interchain_accounts/v1/metadata";
import * as _201 from "./applications/interchain_accounts/v1/packet";
import * as _202 from "./applications/transfer/v1/authz";
import * as _203 from "./applications/transfer/v1/genesis";
import * as _204 from "./applications/transfer/v1/query";
import * as _205 from "./applications/transfer/v1/transfer";
import * as _206 from "./applications/transfer/v1/tx";
import * as _207 from "./applications/transfer/v2/packet";
import * as _208 from "./core/channel/v1/channel";
import * as _209 from "./core/channel/v1/genesis";
import * as _210 from "./core/channel/v1/query";
import * as _211 from "./core/channel/v1/tx";
import * as _212 from "./core/client/v1/client";
import * as _213 from "./core/client/v1/genesis";
import * as _214 from "./core/client/v1/query";
import * as _215 from "./core/client/v1/tx";
import * as _216 from "./core/commitment/v1/commitment";
import * as _217 from "./core/connection/v1/connection";
import * as _218 from "./core/connection/v1/genesis";
import * as _219 from "./core/connection/v1/query";
import * as _220 from "./core/connection/v1/tx";
import * as _221 from "./core/types/v1/genesis";
import * as _222 from "./lightclients/localhost/v2/localhost";
import * as _223 from "./lightclients/solomachine/v2/solomachine";
import * as _224 from "./lightclients/solomachine/v3/solomachine";
import * as _225 from "./lightclients/tendermint/v1/tendermint";
import * as _390 from "./applications/fee/v1/query.lcd";
import * as _391 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _392 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _393 from "./applications/transfer/v1/query.lcd";
import * as _394 from "./core/channel/v1/query.lcd";
import * as _395 from "./core/client/v1/query.lcd";
import * as _396 from "./core/connection/v1/query.lcd";
import * as _397 from "./applications/fee/v1/query.rpc.Query";
import * as _398 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _399 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _400 from "./applications/transfer/v1/query.rpc.Query";
import * as _401 from "./core/channel/v1/query.rpc.Query";
import * as _402 from "./core/client/v1/query.rpc.Query";
import * as _403 from "./core/connection/v1/query.rpc.Query";
import * as _404 from "./applications/fee/v1/tx.rpc.msg";
import * as _405 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _406 from "./applications/transfer/v1/tx.rpc.msg";
import * as _407 from "./core/channel/v1/tx.rpc.msg";
import * as _408 from "./core/client/v1/tx.rpc.msg";
import * as _409 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace fee {
            const v1: {
                MsgClientImpl: typeof _404.MsgClientImpl;
                QueryClientImpl: typeof _397.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    incentivizedPackets(request: _191.QueryIncentivizedPacketsRequest): Promise<_191.QueryIncentivizedPacketsResponse>;
                    incentivizedPacket(request: _191.QueryIncentivizedPacketRequest): Promise<_191.QueryIncentivizedPacketResponse>;
                    incentivizedPacketsForChannel(request: _191.QueryIncentivizedPacketsForChannelRequest): Promise<_191.QueryIncentivizedPacketsForChannelResponse>;
                    totalRecvFees(request: _191.QueryTotalRecvFeesRequest): Promise<_191.QueryTotalRecvFeesResponse>;
                    totalAckFees(request: _191.QueryTotalAckFeesRequest): Promise<_191.QueryTotalAckFeesResponse>;
                    totalTimeoutFees(request: _191.QueryTotalTimeoutFeesRequest): Promise<_191.QueryTotalTimeoutFeesResponse>;
                    payee(request: _191.QueryPayeeRequest): Promise<_191.QueryPayeeResponse>;
                    counterpartyPayee(request: _191.QueryCounterpartyPayeeRequest): Promise<_191.QueryCounterpartyPayeeResponse>;
                    feeEnabledChannels(request: _191.QueryFeeEnabledChannelsRequest): Promise<_191.QueryFeeEnabledChannelsResponse>;
                    feeEnabledChannel(request: _191.QueryFeeEnabledChannelRequest): Promise<_191.QueryFeeEnabledChannelResponse>;
                };
                LCDQueryClient: typeof _390.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        registerPayee(value: _192.MsgRegisterPayee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        registerCounterpartyPayee(value: _192.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        payPacketFee(value: _192.MsgPayPacketFee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        payPacketFeeAsync(value: _192.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        registerPayee(value: _192.MsgRegisterPayee): {
                            typeUrl: string;
                            value: _192.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: _192.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: _192.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: _192.MsgPayPacketFee): {
                            typeUrl: string;
                            value: _192.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: _192.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: _192.MsgPayPacketFeeAsync;
                        };
                    };
                    fromJSON: {
                        registerPayee(value: any): {
                            typeUrl: string;
                            value: _192.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: any): {
                            typeUrl: string;
                            value: _192.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: any): {
                            typeUrl: string;
                            value: _192.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: any): {
                            typeUrl: string;
                            value: _192.MsgPayPacketFeeAsync;
                        };
                    };
                    fromPartial: {
                        registerPayee(value: _192.MsgRegisterPayee): {
                            typeUrl: string;
                            value: _192.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: _192.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: _192.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: _192.MsgPayPacketFee): {
                            typeUrl: string;
                            value: _192.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: _192.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: _192.MsgPayPacketFeeAsync;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.fee.v1.MsgRegisterPayee": {
                        aminoType: string;
                        toAmino: (message: _192.MsgRegisterPayee) => _192.MsgRegisterPayeeAmino;
                        fromAmino: (object: _192.MsgRegisterPayeeAmino) => _192.MsgRegisterPayee;
                    };
                    "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee": {
                        aminoType: string;
                        toAmino: (message: _192.MsgRegisterCounterpartyPayee) => _192.MsgRegisterCounterpartyPayeeAmino;
                        fromAmino: (object: _192.MsgRegisterCounterpartyPayeeAmino) => _192.MsgRegisterCounterpartyPayee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFee": {
                        aminoType: string;
                        toAmino: (message: _192.MsgPayPacketFee) => _192.MsgPayPacketFeeAmino;
                        fromAmino: (object: _192.MsgPayPacketFeeAmino) => _192.MsgPayPacketFee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFeeAsync": {
                        aminoType: string;
                        toAmino: (message: _192.MsgPayPacketFeeAsync) => _192.MsgPayPacketFeeAsyncAmino;
                        fromAmino: (object: _192.MsgPayPacketFeeAsyncAmino) => _192.MsgPayPacketFeeAsync;
                    };
                };
                MsgRegisterPayee: {
                    typeUrl: string;
                    encode(message: _192.MsgRegisterPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _192.MsgRegisterPayee;
                    fromPartial(object: Partial<_192.MsgRegisterPayee>): _192.MsgRegisterPayee;
                    fromAmino(object: _192.MsgRegisterPayeeAmino): _192.MsgRegisterPayee;
                    toAmino(message: _192.MsgRegisterPayee): _192.MsgRegisterPayeeAmino;
                    fromAminoMsg(object: _192.MsgRegisterPayeeAminoMsg): _192.MsgRegisterPayee;
                    toAminoMsg(message: _192.MsgRegisterPayee): _192.MsgRegisterPayeeAminoMsg;
                    fromProtoMsg(message: _192.MsgRegisterPayeeProtoMsg): _192.MsgRegisterPayee;
                    toProto(message: _192.MsgRegisterPayee): Uint8Array;
                    toProtoMsg(message: _192.MsgRegisterPayee): _192.MsgRegisterPayeeProtoMsg;
                };
                MsgRegisterPayeeResponse: {
                    typeUrl: string;
                    encode(_: _192.MsgRegisterPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _192.MsgRegisterPayeeResponse;
                    fromPartial(_: Partial<_192.MsgRegisterPayeeResponse>): _192.MsgRegisterPayeeResponse;
                    fromAmino(_: _192.MsgRegisterPayeeResponseAmino): _192.MsgRegisterPayeeResponse;
                    toAmino(_: _192.MsgRegisterPayeeResponse): _192.MsgRegisterPayeeResponseAmino;
                    fromAminoMsg(object: _192.MsgRegisterPayeeResponseAminoMsg): _192.MsgRegisterPayeeResponse;
                    toAminoMsg(message: _192.MsgRegisterPayeeResponse): _192.MsgRegisterPayeeResponseAminoMsg;
                    fromProtoMsg(message: _192.MsgRegisterPayeeResponseProtoMsg): _192.MsgRegisterPayeeResponse;
                    toProto(message: _192.MsgRegisterPayeeResponse): Uint8Array;
                    toProtoMsg(message: _192.MsgRegisterPayeeResponse): _192.MsgRegisterPayeeResponseProtoMsg;
                };
                MsgRegisterCounterpartyPayee: {
                    typeUrl: string;
                    encode(message: _192.MsgRegisterCounterpartyPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _192.MsgRegisterCounterpartyPayee;
                    fromPartial(object: Partial<_192.MsgRegisterCounterpartyPayee>): _192.MsgRegisterCounterpartyPayee;
                    fromAmino(object: _192.MsgRegisterCounterpartyPayeeAmino): _192.MsgRegisterCounterpartyPayee;
                    toAmino(message: _192.MsgRegisterCounterpartyPayee): _192.MsgRegisterCounterpartyPayeeAmino;
                    fromAminoMsg(object: _192.MsgRegisterCounterpartyPayeeAminoMsg): _192.MsgRegisterCounterpartyPayee;
                    toAminoMsg(message: _192.MsgRegisterCounterpartyPayee): _192.MsgRegisterCounterpartyPayeeAminoMsg;
                    fromProtoMsg(message: _192.MsgRegisterCounterpartyPayeeProtoMsg): _192.MsgRegisterCounterpartyPayee;
                    toProto(message: _192.MsgRegisterCounterpartyPayee): Uint8Array;
                    toProtoMsg(message: _192.MsgRegisterCounterpartyPayee): _192.MsgRegisterCounterpartyPayeeProtoMsg;
                };
                MsgRegisterCounterpartyPayeeResponse: {
                    typeUrl: string;
                    encode(_: _192.MsgRegisterCounterpartyPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _192.MsgRegisterCounterpartyPayeeResponse;
                    fromPartial(_: Partial<_192.MsgRegisterCounterpartyPayeeResponse>): _192.MsgRegisterCounterpartyPayeeResponse;
                    fromAmino(_: _192.MsgRegisterCounterpartyPayeeResponseAmino): _192.MsgRegisterCounterpartyPayeeResponse;
                    toAmino(_: _192.MsgRegisterCounterpartyPayeeResponse): _192.MsgRegisterCounterpartyPayeeResponseAmino;
                    fromAminoMsg(object: _192.MsgRegisterCounterpartyPayeeResponseAminoMsg): _192.MsgRegisterCounterpartyPayeeResponse;
                    toAminoMsg(message: _192.MsgRegisterCounterpartyPayeeResponse): _192.MsgRegisterCounterpartyPayeeResponseAminoMsg;
                    fromProtoMsg(message: _192.MsgRegisterCounterpartyPayeeResponseProtoMsg): _192.MsgRegisterCounterpartyPayeeResponse;
                    toProto(message: _192.MsgRegisterCounterpartyPayeeResponse): Uint8Array;
                    toProtoMsg(message: _192.MsgRegisterCounterpartyPayeeResponse): _192.MsgRegisterCounterpartyPayeeResponseProtoMsg;
                };
                MsgPayPacketFee: {
                    typeUrl: string;
                    encode(message: _192.MsgPayPacketFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _192.MsgPayPacketFee;
                    fromPartial(object: Partial<_192.MsgPayPacketFee>): _192.MsgPayPacketFee;
                    fromAmino(object: _192.MsgPayPacketFeeAmino): _192.MsgPayPacketFee;
                    toAmino(message: _192.MsgPayPacketFee): _192.MsgPayPacketFeeAmino;
                    fromAminoMsg(object: _192.MsgPayPacketFeeAminoMsg): _192.MsgPayPacketFee;
                    toAminoMsg(message: _192.MsgPayPacketFee): _192.MsgPayPacketFeeAminoMsg;
                    fromProtoMsg(message: _192.MsgPayPacketFeeProtoMsg): _192.MsgPayPacketFee;
                    toProto(message: _192.MsgPayPacketFee): Uint8Array;
                    toProtoMsg(message: _192.MsgPayPacketFee): _192.MsgPayPacketFeeProtoMsg;
                };
                MsgPayPacketFeeResponse: {
                    typeUrl: string;
                    encode(_: _192.MsgPayPacketFeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _192.MsgPayPacketFeeResponse;
                    fromPartial(_: Partial<_192.MsgPayPacketFeeResponse>): _192.MsgPayPacketFeeResponse;
                    fromAmino(_: _192.MsgPayPacketFeeResponseAmino): _192.MsgPayPacketFeeResponse;
                    toAmino(_: _192.MsgPayPacketFeeResponse): _192.MsgPayPacketFeeResponseAmino;
                    fromAminoMsg(object: _192.MsgPayPacketFeeResponseAminoMsg): _192.MsgPayPacketFeeResponse;
                    toAminoMsg(message: _192.MsgPayPacketFeeResponse): _192.MsgPayPacketFeeResponseAminoMsg;
                    fromProtoMsg(message: _192.MsgPayPacketFeeResponseProtoMsg): _192.MsgPayPacketFeeResponse;
                    toProto(message: _192.MsgPayPacketFeeResponse): Uint8Array;
                    toProtoMsg(message: _192.MsgPayPacketFeeResponse): _192.MsgPayPacketFeeResponseProtoMsg;
                };
                MsgPayPacketFeeAsync: {
                    typeUrl: string;
                    encode(message: _192.MsgPayPacketFeeAsync, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _192.MsgPayPacketFeeAsync;
                    fromPartial(object: Partial<_192.MsgPayPacketFeeAsync>): _192.MsgPayPacketFeeAsync;
                    fromAmino(object: _192.MsgPayPacketFeeAsyncAmino): _192.MsgPayPacketFeeAsync;
                    toAmino(message: _192.MsgPayPacketFeeAsync): _192.MsgPayPacketFeeAsyncAmino;
                    fromAminoMsg(object: _192.MsgPayPacketFeeAsyncAminoMsg): _192.MsgPayPacketFeeAsync;
                    toAminoMsg(message: _192.MsgPayPacketFeeAsync): _192.MsgPayPacketFeeAsyncAminoMsg;
                    fromProtoMsg(message: _192.MsgPayPacketFeeAsyncProtoMsg): _192.MsgPayPacketFeeAsync;
                    toProto(message: _192.MsgPayPacketFeeAsync): Uint8Array;
                    toProtoMsg(message: _192.MsgPayPacketFeeAsync): _192.MsgPayPacketFeeAsyncProtoMsg;
                };
                MsgPayPacketFeeAsyncResponse: {
                    typeUrl: string;
                    encode(_: _192.MsgPayPacketFeeAsyncResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _192.MsgPayPacketFeeAsyncResponse;
                    fromPartial(_: Partial<_192.MsgPayPacketFeeAsyncResponse>): _192.MsgPayPacketFeeAsyncResponse;
                    fromAmino(_: _192.MsgPayPacketFeeAsyncResponseAmino): _192.MsgPayPacketFeeAsyncResponse;
                    toAmino(_: _192.MsgPayPacketFeeAsyncResponse): _192.MsgPayPacketFeeAsyncResponseAmino;
                    fromAminoMsg(object: _192.MsgPayPacketFeeAsyncResponseAminoMsg): _192.MsgPayPacketFeeAsyncResponse;
                    toAminoMsg(message: _192.MsgPayPacketFeeAsyncResponse): _192.MsgPayPacketFeeAsyncResponseAminoMsg;
                    fromProtoMsg(message: _192.MsgPayPacketFeeAsyncResponseProtoMsg): _192.MsgPayPacketFeeAsyncResponse;
                    toProto(message: _192.MsgPayPacketFeeAsyncResponse): Uint8Array;
                    toProtoMsg(message: _192.MsgPayPacketFeeAsyncResponse): _192.MsgPayPacketFeeAsyncResponseProtoMsg;
                };
                QueryIncentivizedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _191.QueryIncentivizedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.QueryIncentivizedPacketsRequest;
                    fromPartial(object: Partial<_191.QueryIncentivizedPacketsRequest>): _191.QueryIncentivizedPacketsRequest;
                    fromAmino(object: _191.QueryIncentivizedPacketsRequestAmino): _191.QueryIncentivizedPacketsRequest;
                    toAmino(message: _191.QueryIncentivizedPacketsRequest): _191.QueryIncentivizedPacketsRequestAmino;
                    fromAminoMsg(object: _191.QueryIncentivizedPacketsRequestAminoMsg): _191.QueryIncentivizedPacketsRequest;
                    toAminoMsg(message: _191.QueryIncentivizedPacketsRequest): _191.QueryIncentivizedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _191.QueryIncentivizedPacketsRequestProtoMsg): _191.QueryIncentivizedPacketsRequest;
                    toProto(message: _191.QueryIncentivizedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _191.QueryIncentivizedPacketsRequest): _191.QueryIncentivizedPacketsRequestProtoMsg;
                };
                QueryIncentivizedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _191.QueryIncentivizedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.QueryIncentivizedPacketsResponse;
                    fromPartial(object: Partial<_191.QueryIncentivizedPacketsResponse>): _191.QueryIncentivizedPacketsResponse;
                    fromAmino(object: _191.QueryIncentivizedPacketsResponseAmino): _191.QueryIncentivizedPacketsResponse;
                    toAmino(message: _191.QueryIncentivizedPacketsResponse): _191.QueryIncentivizedPacketsResponseAmino;
                    fromAminoMsg(object: _191.QueryIncentivizedPacketsResponseAminoMsg): _191.QueryIncentivizedPacketsResponse;
                    toAminoMsg(message: _191.QueryIncentivizedPacketsResponse): _191.QueryIncentivizedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _191.QueryIncentivizedPacketsResponseProtoMsg): _191.QueryIncentivizedPacketsResponse;
                    toProto(message: _191.QueryIncentivizedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _191.QueryIncentivizedPacketsResponse): _191.QueryIncentivizedPacketsResponseProtoMsg;
                };
                QueryIncentivizedPacketRequest: {
                    typeUrl: string;
                    encode(message: _191.QueryIncentivizedPacketRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.QueryIncentivizedPacketRequest;
                    fromPartial(object: Partial<_191.QueryIncentivizedPacketRequest>): _191.QueryIncentivizedPacketRequest;
                    fromAmino(object: _191.QueryIncentivizedPacketRequestAmino): _191.QueryIncentivizedPacketRequest;
                    toAmino(message: _191.QueryIncentivizedPacketRequest): _191.QueryIncentivizedPacketRequestAmino;
                    fromAminoMsg(object: _191.QueryIncentivizedPacketRequestAminoMsg): _191.QueryIncentivizedPacketRequest;
                    toAminoMsg(message: _191.QueryIncentivizedPacketRequest): _191.QueryIncentivizedPacketRequestAminoMsg;
                    fromProtoMsg(message: _191.QueryIncentivizedPacketRequestProtoMsg): _191.QueryIncentivizedPacketRequest;
                    toProto(message: _191.QueryIncentivizedPacketRequest): Uint8Array;
                    toProtoMsg(message: _191.QueryIncentivizedPacketRequest): _191.QueryIncentivizedPacketRequestProtoMsg;
                };
                QueryIncentivizedPacketResponse: {
                    typeUrl: string;
                    encode(message: _191.QueryIncentivizedPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.QueryIncentivizedPacketResponse;
                    fromPartial(object: Partial<_191.QueryIncentivizedPacketResponse>): _191.QueryIncentivizedPacketResponse;
                    fromAmino(object: _191.QueryIncentivizedPacketResponseAmino): _191.QueryIncentivizedPacketResponse;
                    toAmino(message: _191.QueryIncentivizedPacketResponse): _191.QueryIncentivizedPacketResponseAmino;
                    fromAminoMsg(object: _191.QueryIncentivizedPacketResponseAminoMsg): _191.QueryIncentivizedPacketResponse;
                    toAminoMsg(message: _191.QueryIncentivizedPacketResponse): _191.QueryIncentivizedPacketResponseAminoMsg;
                    fromProtoMsg(message: _191.QueryIncentivizedPacketResponseProtoMsg): _191.QueryIncentivizedPacketResponse;
                    toProto(message: _191.QueryIncentivizedPacketResponse): Uint8Array;
                    toProtoMsg(message: _191.QueryIncentivizedPacketResponse): _191.QueryIncentivizedPacketResponseProtoMsg;
                };
                QueryIncentivizedPacketsForChannelRequest: {
                    typeUrl: string;
                    encode(message: _191.QueryIncentivizedPacketsForChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.QueryIncentivizedPacketsForChannelRequest;
                    fromPartial(object: Partial<_191.QueryIncentivizedPacketsForChannelRequest>): _191.QueryIncentivizedPacketsForChannelRequest;
                    fromAmino(object: _191.QueryIncentivizedPacketsForChannelRequestAmino): _191.QueryIncentivizedPacketsForChannelRequest;
                    toAmino(message: _191.QueryIncentivizedPacketsForChannelRequest): _191.QueryIncentivizedPacketsForChannelRequestAmino;
                    fromAminoMsg(object: _191.QueryIncentivizedPacketsForChannelRequestAminoMsg): _191.QueryIncentivizedPacketsForChannelRequest;
                    toAminoMsg(message: _191.QueryIncentivizedPacketsForChannelRequest): _191.QueryIncentivizedPacketsForChannelRequestAminoMsg;
                    fromProtoMsg(message: _191.QueryIncentivizedPacketsForChannelRequestProtoMsg): _191.QueryIncentivizedPacketsForChannelRequest;
                    toProto(message: _191.QueryIncentivizedPacketsForChannelRequest): Uint8Array;
                    toProtoMsg(message: _191.QueryIncentivizedPacketsForChannelRequest): _191.QueryIncentivizedPacketsForChannelRequestProtoMsg;
                };
                QueryIncentivizedPacketsForChannelResponse: {
                    typeUrl: string;
                    encode(message: _191.QueryIncentivizedPacketsForChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.QueryIncentivizedPacketsForChannelResponse;
                    fromPartial(object: Partial<_191.QueryIncentivizedPacketsForChannelResponse>): _191.QueryIncentivizedPacketsForChannelResponse;
                    fromAmino(object: _191.QueryIncentivizedPacketsForChannelResponseAmino): _191.QueryIncentivizedPacketsForChannelResponse;
                    toAmino(message: _191.QueryIncentivizedPacketsForChannelResponse): _191.QueryIncentivizedPacketsForChannelResponseAmino;
                    fromAminoMsg(object: _191.QueryIncentivizedPacketsForChannelResponseAminoMsg): _191.QueryIncentivizedPacketsForChannelResponse;
                    toAminoMsg(message: _191.QueryIncentivizedPacketsForChannelResponse): _191.QueryIncentivizedPacketsForChannelResponseAminoMsg;
                    fromProtoMsg(message: _191.QueryIncentivizedPacketsForChannelResponseProtoMsg): _191.QueryIncentivizedPacketsForChannelResponse;
                    toProto(message: _191.QueryIncentivizedPacketsForChannelResponse): Uint8Array;
                    toProtoMsg(message: _191.QueryIncentivizedPacketsForChannelResponse): _191.QueryIncentivizedPacketsForChannelResponseProtoMsg;
                };
                QueryTotalRecvFeesRequest: {
                    typeUrl: string;
                    encode(message: _191.QueryTotalRecvFeesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.QueryTotalRecvFeesRequest;
                    fromPartial(object: Partial<_191.QueryTotalRecvFeesRequest>): _191.QueryTotalRecvFeesRequest;
                    fromAmino(object: _191.QueryTotalRecvFeesRequestAmino): _191.QueryTotalRecvFeesRequest;
                    toAmino(message: _191.QueryTotalRecvFeesRequest): _191.QueryTotalRecvFeesRequestAmino;
                    fromAminoMsg(object: _191.QueryTotalRecvFeesRequestAminoMsg): _191.QueryTotalRecvFeesRequest;
                    toAminoMsg(message: _191.QueryTotalRecvFeesRequest): _191.QueryTotalRecvFeesRequestAminoMsg;
                    fromProtoMsg(message: _191.QueryTotalRecvFeesRequestProtoMsg): _191.QueryTotalRecvFeesRequest;
                    toProto(message: _191.QueryTotalRecvFeesRequest): Uint8Array;
                    toProtoMsg(message: _191.QueryTotalRecvFeesRequest): _191.QueryTotalRecvFeesRequestProtoMsg;
                };
                QueryTotalRecvFeesResponse: {
                    typeUrl: string;
                    encode(message: _191.QueryTotalRecvFeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.QueryTotalRecvFeesResponse;
                    fromPartial(object: Partial<_191.QueryTotalRecvFeesResponse>): _191.QueryTotalRecvFeesResponse;
                    fromAmino(object: _191.QueryTotalRecvFeesResponseAmino): _191.QueryTotalRecvFeesResponse;
                    toAmino(message: _191.QueryTotalRecvFeesResponse): _191.QueryTotalRecvFeesResponseAmino;
                    fromAminoMsg(object: _191.QueryTotalRecvFeesResponseAminoMsg): _191.QueryTotalRecvFeesResponse;
                    toAminoMsg(message: _191.QueryTotalRecvFeesResponse): _191.QueryTotalRecvFeesResponseAminoMsg;
                    fromProtoMsg(message: _191.QueryTotalRecvFeesResponseProtoMsg): _191.QueryTotalRecvFeesResponse;
                    toProto(message: _191.QueryTotalRecvFeesResponse): Uint8Array;
                    toProtoMsg(message: _191.QueryTotalRecvFeesResponse): _191.QueryTotalRecvFeesResponseProtoMsg;
                };
                QueryTotalAckFeesRequest: {
                    typeUrl: string;
                    encode(message: _191.QueryTotalAckFeesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.QueryTotalAckFeesRequest;
                    fromPartial(object: Partial<_191.QueryTotalAckFeesRequest>): _191.QueryTotalAckFeesRequest;
                    fromAmino(object: _191.QueryTotalAckFeesRequestAmino): _191.QueryTotalAckFeesRequest;
                    toAmino(message: _191.QueryTotalAckFeesRequest): _191.QueryTotalAckFeesRequestAmino;
                    fromAminoMsg(object: _191.QueryTotalAckFeesRequestAminoMsg): _191.QueryTotalAckFeesRequest;
                    toAminoMsg(message: _191.QueryTotalAckFeesRequest): _191.QueryTotalAckFeesRequestAminoMsg;
                    fromProtoMsg(message: _191.QueryTotalAckFeesRequestProtoMsg): _191.QueryTotalAckFeesRequest;
                    toProto(message: _191.QueryTotalAckFeesRequest): Uint8Array;
                    toProtoMsg(message: _191.QueryTotalAckFeesRequest): _191.QueryTotalAckFeesRequestProtoMsg;
                };
                QueryTotalAckFeesResponse: {
                    typeUrl: string;
                    encode(message: _191.QueryTotalAckFeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.QueryTotalAckFeesResponse;
                    fromPartial(object: Partial<_191.QueryTotalAckFeesResponse>): _191.QueryTotalAckFeesResponse;
                    fromAmino(object: _191.QueryTotalAckFeesResponseAmino): _191.QueryTotalAckFeesResponse;
                    toAmino(message: _191.QueryTotalAckFeesResponse): _191.QueryTotalAckFeesResponseAmino;
                    fromAminoMsg(object: _191.QueryTotalAckFeesResponseAminoMsg): _191.QueryTotalAckFeesResponse;
                    toAminoMsg(message: _191.QueryTotalAckFeesResponse): _191.QueryTotalAckFeesResponseAminoMsg;
                    fromProtoMsg(message: _191.QueryTotalAckFeesResponseProtoMsg): _191.QueryTotalAckFeesResponse;
                    toProto(message: _191.QueryTotalAckFeesResponse): Uint8Array;
                    toProtoMsg(message: _191.QueryTotalAckFeesResponse): _191.QueryTotalAckFeesResponseProtoMsg;
                };
                QueryTotalTimeoutFeesRequest: {
                    typeUrl: string;
                    encode(message: _191.QueryTotalTimeoutFeesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.QueryTotalTimeoutFeesRequest;
                    fromPartial(object: Partial<_191.QueryTotalTimeoutFeesRequest>): _191.QueryTotalTimeoutFeesRequest;
                    fromAmino(object: _191.QueryTotalTimeoutFeesRequestAmino): _191.QueryTotalTimeoutFeesRequest;
                    toAmino(message: _191.QueryTotalTimeoutFeesRequest): _191.QueryTotalTimeoutFeesRequestAmino;
                    fromAminoMsg(object: _191.QueryTotalTimeoutFeesRequestAminoMsg): _191.QueryTotalTimeoutFeesRequest;
                    toAminoMsg(message: _191.QueryTotalTimeoutFeesRequest): _191.QueryTotalTimeoutFeesRequestAminoMsg;
                    fromProtoMsg(message: _191.QueryTotalTimeoutFeesRequestProtoMsg): _191.QueryTotalTimeoutFeesRequest;
                    toProto(message: _191.QueryTotalTimeoutFeesRequest): Uint8Array;
                    toProtoMsg(message: _191.QueryTotalTimeoutFeesRequest): _191.QueryTotalTimeoutFeesRequestProtoMsg;
                };
                QueryTotalTimeoutFeesResponse: {
                    typeUrl: string;
                    encode(message: _191.QueryTotalTimeoutFeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.QueryTotalTimeoutFeesResponse;
                    fromPartial(object: Partial<_191.QueryTotalTimeoutFeesResponse>): _191.QueryTotalTimeoutFeesResponse;
                    fromAmino(object: _191.QueryTotalTimeoutFeesResponseAmino): _191.QueryTotalTimeoutFeesResponse;
                    toAmino(message: _191.QueryTotalTimeoutFeesResponse): _191.QueryTotalTimeoutFeesResponseAmino;
                    fromAminoMsg(object: _191.QueryTotalTimeoutFeesResponseAminoMsg): _191.QueryTotalTimeoutFeesResponse;
                    toAminoMsg(message: _191.QueryTotalTimeoutFeesResponse): _191.QueryTotalTimeoutFeesResponseAminoMsg;
                    fromProtoMsg(message: _191.QueryTotalTimeoutFeesResponseProtoMsg): _191.QueryTotalTimeoutFeesResponse;
                    toProto(message: _191.QueryTotalTimeoutFeesResponse): Uint8Array;
                    toProtoMsg(message: _191.QueryTotalTimeoutFeesResponse): _191.QueryTotalTimeoutFeesResponseProtoMsg;
                };
                QueryPayeeRequest: {
                    typeUrl: string;
                    encode(message: _191.QueryPayeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.QueryPayeeRequest;
                    fromPartial(object: Partial<_191.QueryPayeeRequest>): _191.QueryPayeeRequest;
                    fromAmino(object: _191.QueryPayeeRequestAmino): _191.QueryPayeeRequest;
                    toAmino(message: _191.QueryPayeeRequest): _191.QueryPayeeRequestAmino;
                    fromAminoMsg(object: _191.QueryPayeeRequestAminoMsg): _191.QueryPayeeRequest;
                    toAminoMsg(message: _191.QueryPayeeRequest): _191.QueryPayeeRequestAminoMsg;
                    fromProtoMsg(message: _191.QueryPayeeRequestProtoMsg): _191.QueryPayeeRequest;
                    toProto(message: _191.QueryPayeeRequest): Uint8Array;
                    toProtoMsg(message: _191.QueryPayeeRequest): _191.QueryPayeeRequestProtoMsg;
                };
                QueryPayeeResponse: {
                    typeUrl: string;
                    encode(message: _191.QueryPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.QueryPayeeResponse;
                    fromPartial(object: Partial<_191.QueryPayeeResponse>): _191.QueryPayeeResponse;
                    fromAmino(object: _191.QueryPayeeResponseAmino): _191.QueryPayeeResponse;
                    toAmino(message: _191.QueryPayeeResponse): _191.QueryPayeeResponseAmino;
                    fromAminoMsg(object: _191.QueryPayeeResponseAminoMsg): _191.QueryPayeeResponse;
                    toAminoMsg(message: _191.QueryPayeeResponse): _191.QueryPayeeResponseAminoMsg;
                    fromProtoMsg(message: _191.QueryPayeeResponseProtoMsg): _191.QueryPayeeResponse;
                    toProto(message: _191.QueryPayeeResponse): Uint8Array;
                    toProtoMsg(message: _191.QueryPayeeResponse): _191.QueryPayeeResponseProtoMsg;
                };
                QueryCounterpartyPayeeRequest: {
                    typeUrl: string;
                    encode(message: _191.QueryCounterpartyPayeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.QueryCounterpartyPayeeRequest;
                    fromPartial(object: Partial<_191.QueryCounterpartyPayeeRequest>): _191.QueryCounterpartyPayeeRequest;
                    fromAmino(object: _191.QueryCounterpartyPayeeRequestAmino): _191.QueryCounterpartyPayeeRequest;
                    toAmino(message: _191.QueryCounterpartyPayeeRequest): _191.QueryCounterpartyPayeeRequestAmino;
                    fromAminoMsg(object: _191.QueryCounterpartyPayeeRequestAminoMsg): _191.QueryCounterpartyPayeeRequest;
                    toAminoMsg(message: _191.QueryCounterpartyPayeeRequest): _191.QueryCounterpartyPayeeRequestAminoMsg;
                    fromProtoMsg(message: _191.QueryCounterpartyPayeeRequestProtoMsg): _191.QueryCounterpartyPayeeRequest;
                    toProto(message: _191.QueryCounterpartyPayeeRequest): Uint8Array;
                    toProtoMsg(message: _191.QueryCounterpartyPayeeRequest): _191.QueryCounterpartyPayeeRequestProtoMsg;
                };
                QueryCounterpartyPayeeResponse: {
                    typeUrl: string;
                    encode(message: _191.QueryCounterpartyPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.QueryCounterpartyPayeeResponse;
                    fromPartial(object: Partial<_191.QueryCounterpartyPayeeResponse>): _191.QueryCounterpartyPayeeResponse;
                    fromAmino(object: _191.QueryCounterpartyPayeeResponseAmino): _191.QueryCounterpartyPayeeResponse;
                    toAmino(message: _191.QueryCounterpartyPayeeResponse): _191.QueryCounterpartyPayeeResponseAmino;
                    fromAminoMsg(object: _191.QueryCounterpartyPayeeResponseAminoMsg): _191.QueryCounterpartyPayeeResponse;
                    toAminoMsg(message: _191.QueryCounterpartyPayeeResponse): _191.QueryCounterpartyPayeeResponseAminoMsg;
                    fromProtoMsg(message: _191.QueryCounterpartyPayeeResponseProtoMsg): _191.QueryCounterpartyPayeeResponse;
                    toProto(message: _191.QueryCounterpartyPayeeResponse): Uint8Array;
                    toProtoMsg(message: _191.QueryCounterpartyPayeeResponse): _191.QueryCounterpartyPayeeResponseProtoMsg;
                };
                QueryFeeEnabledChannelsRequest: {
                    typeUrl: string;
                    encode(message: _191.QueryFeeEnabledChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.QueryFeeEnabledChannelsRequest;
                    fromPartial(object: Partial<_191.QueryFeeEnabledChannelsRequest>): _191.QueryFeeEnabledChannelsRequest;
                    fromAmino(object: _191.QueryFeeEnabledChannelsRequestAmino): _191.QueryFeeEnabledChannelsRequest;
                    toAmino(message: _191.QueryFeeEnabledChannelsRequest): _191.QueryFeeEnabledChannelsRequestAmino;
                    fromAminoMsg(object: _191.QueryFeeEnabledChannelsRequestAminoMsg): _191.QueryFeeEnabledChannelsRequest;
                    toAminoMsg(message: _191.QueryFeeEnabledChannelsRequest): _191.QueryFeeEnabledChannelsRequestAminoMsg;
                    fromProtoMsg(message: _191.QueryFeeEnabledChannelsRequestProtoMsg): _191.QueryFeeEnabledChannelsRequest;
                    toProto(message: _191.QueryFeeEnabledChannelsRequest): Uint8Array;
                    toProtoMsg(message: _191.QueryFeeEnabledChannelsRequest): _191.QueryFeeEnabledChannelsRequestProtoMsg;
                };
                QueryFeeEnabledChannelsResponse: {
                    typeUrl: string;
                    encode(message: _191.QueryFeeEnabledChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.QueryFeeEnabledChannelsResponse;
                    fromPartial(object: Partial<_191.QueryFeeEnabledChannelsResponse>): _191.QueryFeeEnabledChannelsResponse;
                    fromAmino(object: _191.QueryFeeEnabledChannelsResponseAmino): _191.QueryFeeEnabledChannelsResponse;
                    toAmino(message: _191.QueryFeeEnabledChannelsResponse): _191.QueryFeeEnabledChannelsResponseAmino;
                    fromAminoMsg(object: _191.QueryFeeEnabledChannelsResponseAminoMsg): _191.QueryFeeEnabledChannelsResponse;
                    toAminoMsg(message: _191.QueryFeeEnabledChannelsResponse): _191.QueryFeeEnabledChannelsResponseAminoMsg;
                    fromProtoMsg(message: _191.QueryFeeEnabledChannelsResponseProtoMsg): _191.QueryFeeEnabledChannelsResponse;
                    toProto(message: _191.QueryFeeEnabledChannelsResponse): Uint8Array;
                    toProtoMsg(message: _191.QueryFeeEnabledChannelsResponse): _191.QueryFeeEnabledChannelsResponseProtoMsg;
                };
                QueryFeeEnabledChannelRequest: {
                    typeUrl: string;
                    encode(message: _191.QueryFeeEnabledChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.QueryFeeEnabledChannelRequest;
                    fromPartial(object: Partial<_191.QueryFeeEnabledChannelRequest>): _191.QueryFeeEnabledChannelRequest;
                    fromAmino(object: _191.QueryFeeEnabledChannelRequestAmino): _191.QueryFeeEnabledChannelRequest;
                    toAmino(message: _191.QueryFeeEnabledChannelRequest): _191.QueryFeeEnabledChannelRequestAmino;
                    fromAminoMsg(object: _191.QueryFeeEnabledChannelRequestAminoMsg): _191.QueryFeeEnabledChannelRequest;
                    toAminoMsg(message: _191.QueryFeeEnabledChannelRequest): _191.QueryFeeEnabledChannelRequestAminoMsg;
                    fromProtoMsg(message: _191.QueryFeeEnabledChannelRequestProtoMsg): _191.QueryFeeEnabledChannelRequest;
                    toProto(message: _191.QueryFeeEnabledChannelRequest): Uint8Array;
                    toProtoMsg(message: _191.QueryFeeEnabledChannelRequest): _191.QueryFeeEnabledChannelRequestProtoMsg;
                };
                QueryFeeEnabledChannelResponse: {
                    typeUrl: string;
                    encode(message: _191.QueryFeeEnabledChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.QueryFeeEnabledChannelResponse;
                    fromPartial(object: Partial<_191.QueryFeeEnabledChannelResponse>): _191.QueryFeeEnabledChannelResponse;
                    fromAmino(object: _191.QueryFeeEnabledChannelResponseAmino): _191.QueryFeeEnabledChannelResponse;
                    toAmino(message: _191.QueryFeeEnabledChannelResponse): _191.QueryFeeEnabledChannelResponseAmino;
                    fromAminoMsg(object: _191.QueryFeeEnabledChannelResponseAminoMsg): _191.QueryFeeEnabledChannelResponse;
                    toAminoMsg(message: _191.QueryFeeEnabledChannelResponse): _191.QueryFeeEnabledChannelResponseAminoMsg;
                    fromProtoMsg(message: _191.QueryFeeEnabledChannelResponseProtoMsg): _191.QueryFeeEnabledChannelResponse;
                    toProto(message: _191.QueryFeeEnabledChannelResponse): Uint8Array;
                    toProtoMsg(message: _191.QueryFeeEnabledChannelResponse): _191.QueryFeeEnabledChannelResponseProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _190.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _190.Metadata;
                    fromPartial(object: Partial<_190.Metadata>): _190.Metadata;
                    fromAmino(object: _190.MetadataAmino): _190.Metadata;
                    toAmino(message: _190.Metadata): _190.MetadataAmino;
                    fromAminoMsg(object: _190.MetadataAminoMsg): _190.Metadata;
                    toAminoMsg(message: _190.Metadata): _190.MetadataAminoMsg;
                    fromProtoMsg(message: _190.MetadataProtoMsg): _190.Metadata;
                    toProto(message: _190.Metadata): Uint8Array;
                    toProtoMsg(message: _190.Metadata): _190.MetadataProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _189.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _189.GenesisState;
                    fromPartial(object: Partial<_189.GenesisState>): _189.GenesisState;
                    fromAmino(object: _189.GenesisStateAmino): _189.GenesisState;
                    toAmino(message: _189.GenesisState): _189.GenesisStateAmino;
                    fromAminoMsg(object: _189.GenesisStateAminoMsg): _189.GenesisState;
                    toAminoMsg(message: _189.GenesisState): _189.GenesisStateAminoMsg;
                    fromProtoMsg(message: _189.GenesisStateProtoMsg): _189.GenesisState;
                    toProto(message: _189.GenesisState): Uint8Array;
                    toProtoMsg(message: _189.GenesisState): _189.GenesisStateProtoMsg;
                };
                FeeEnabledChannel: {
                    typeUrl: string;
                    encode(message: _189.FeeEnabledChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _189.FeeEnabledChannel;
                    fromPartial(object: Partial<_189.FeeEnabledChannel>): _189.FeeEnabledChannel;
                    fromAmino(object: _189.FeeEnabledChannelAmino): _189.FeeEnabledChannel;
                    toAmino(message: _189.FeeEnabledChannel): _189.FeeEnabledChannelAmino;
                    fromAminoMsg(object: _189.FeeEnabledChannelAminoMsg): _189.FeeEnabledChannel;
                    toAminoMsg(message: _189.FeeEnabledChannel): _189.FeeEnabledChannelAminoMsg;
                    fromProtoMsg(message: _189.FeeEnabledChannelProtoMsg): _189.FeeEnabledChannel;
                    toProto(message: _189.FeeEnabledChannel): Uint8Array;
                    toProtoMsg(message: _189.FeeEnabledChannel): _189.FeeEnabledChannelProtoMsg;
                };
                RegisteredPayee: {
                    typeUrl: string;
                    encode(message: _189.RegisteredPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _189.RegisteredPayee;
                    fromPartial(object: Partial<_189.RegisteredPayee>): _189.RegisteredPayee;
                    fromAmino(object: _189.RegisteredPayeeAmino): _189.RegisteredPayee;
                    toAmino(message: _189.RegisteredPayee): _189.RegisteredPayeeAmino;
                    fromAminoMsg(object: _189.RegisteredPayeeAminoMsg): _189.RegisteredPayee;
                    toAminoMsg(message: _189.RegisteredPayee): _189.RegisteredPayeeAminoMsg;
                    fromProtoMsg(message: _189.RegisteredPayeeProtoMsg): _189.RegisteredPayee;
                    toProto(message: _189.RegisteredPayee): Uint8Array;
                    toProtoMsg(message: _189.RegisteredPayee): _189.RegisteredPayeeProtoMsg;
                };
                RegisteredCounterpartyPayee: {
                    typeUrl: string;
                    encode(message: _189.RegisteredCounterpartyPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _189.RegisteredCounterpartyPayee;
                    fromPartial(object: Partial<_189.RegisteredCounterpartyPayee>): _189.RegisteredCounterpartyPayee;
                    fromAmino(object: _189.RegisteredCounterpartyPayeeAmino): _189.RegisteredCounterpartyPayee;
                    toAmino(message: _189.RegisteredCounterpartyPayee): _189.RegisteredCounterpartyPayeeAmino;
                    fromAminoMsg(object: _189.RegisteredCounterpartyPayeeAminoMsg): _189.RegisteredCounterpartyPayee;
                    toAminoMsg(message: _189.RegisteredCounterpartyPayee): _189.RegisteredCounterpartyPayeeAminoMsg;
                    fromProtoMsg(message: _189.RegisteredCounterpartyPayeeProtoMsg): _189.RegisteredCounterpartyPayee;
                    toProto(message: _189.RegisteredCounterpartyPayee): Uint8Array;
                    toProtoMsg(message: _189.RegisteredCounterpartyPayee): _189.RegisteredCounterpartyPayeeProtoMsg;
                };
                ForwardRelayerAddress: {
                    typeUrl: string;
                    encode(message: _189.ForwardRelayerAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _189.ForwardRelayerAddress;
                    fromPartial(object: Partial<_189.ForwardRelayerAddress>): _189.ForwardRelayerAddress;
                    fromAmino(object: _189.ForwardRelayerAddressAmino): _189.ForwardRelayerAddress;
                    toAmino(message: _189.ForwardRelayerAddress): _189.ForwardRelayerAddressAmino;
                    fromAminoMsg(object: _189.ForwardRelayerAddressAminoMsg): _189.ForwardRelayerAddress;
                    toAminoMsg(message: _189.ForwardRelayerAddress): _189.ForwardRelayerAddressAminoMsg;
                    fromProtoMsg(message: _189.ForwardRelayerAddressProtoMsg): _189.ForwardRelayerAddress;
                    toProto(message: _189.ForwardRelayerAddress): Uint8Array;
                    toProtoMsg(message: _189.ForwardRelayerAddress): _189.ForwardRelayerAddressProtoMsg;
                };
                Fee: {
                    typeUrl: string;
                    encode(message: _188.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _188.Fee;
                    fromPartial(object: Partial<_188.Fee>): _188.Fee;
                    fromAmino(object: _188.FeeAmino): _188.Fee;
                    toAmino(message: _188.Fee): _188.FeeAmino;
                    fromAminoMsg(object: _188.FeeAminoMsg): _188.Fee;
                    toAminoMsg(message: _188.Fee): _188.FeeAminoMsg;
                    fromProtoMsg(message: _188.FeeProtoMsg): _188.Fee;
                    toProto(message: _188.Fee): Uint8Array;
                    toProtoMsg(message: _188.Fee): _188.FeeProtoMsg;
                };
                PacketFee: {
                    typeUrl: string;
                    encode(message: _188.PacketFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _188.PacketFee;
                    fromPartial(object: Partial<_188.PacketFee>): _188.PacketFee;
                    fromAmino(object: _188.PacketFeeAmino): _188.PacketFee;
                    toAmino(message: _188.PacketFee): _188.PacketFeeAmino;
                    fromAminoMsg(object: _188.PacketFeeAminoMsg): _188.PacketFee;
                    toAminoMsg(message: _188.PacketFee): _188.PacketFeeAminoMsg;
                    fromProtoMsg(message: _188.PacketFeeProtoMsg): _188.PacketFee;
                    toProto(message: _188.PacketFee): Uint8Array;
                    toProtoMsg(message: _188.PacketFee): _188.PacketFeeProtoMsg;
                };
                PacketFees: {
                    typeUrl: string;
                    encode(message: _188.PacketFees, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _188.PacketFees;
                    fromPartial(object: Partial<_188.PacketFees>): _188.PacketFees;
                    fromAmino(object: _188.PacketFeesAmino): _188.PacketFees;
                    toAmino(message: _188.PacketFees): _188.PacketFeesAmino;
                    fromAminoMsg(object: _188.PacketFeesAminoMsg): _188.PacketFees;
                    toAminoMsg(message: _188.PacketFees): _188.PacketFeesAminoMsg;
                    fromProtoMsg(message: _188.PacketFeesProtoMsg): _188.PacketFees;
                    toProto(message: _188.PacketFees): Uint8Array;
                    toProtoMsg(message: _188.PacketFees): _188.PacketFeesProtoMsg;
                };
                IdentifiedPacketFees: {
                    typeUrl: string;
                    encode(message: _188.IdentifiedPacketFees, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _188.IdentifiedPacketFees;
                    fromPartial(object: Partial<_188.IdentifiedPacketFees>): _188.IdentifiedPacketFees;
                    fromAmino(object: _188.IdentifiedPacketFeesAmino): _188.IdentifiedPacketFees;
                    toAmino(message: _188.IdentifiedPacketFees): _188.IdentifiedPacketFeesAmino;
                    fromAminoMsg(object: _188.IdentifiedPacketFeesAminoMsg): _188.IdentifiedPacketFees;
                    toAminoMsg(message: _188.IdentifiedPacketFees): _188.IdentifiedPacketFeesAminoMsg;
                    fromProtoMsg(message: _188.IdentifiedPacketFeesProtoMsg): _188.IdentifiedPacketFees;
                    toProto(message: _188.IdentifiedPacketFees): Uint8Array;
                    toProtoMsg(message: _188.IdentifiedPacketFees): _188.IdentifiedPacketFeesProtoMsg;
                };
                IncentivizedAcknowledgement: {
                    typeUrl: string;
                    encode(message: _187.IncentivizedAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _187.IncentivizedAcknowledgement;
                    fromPartial(object: Partial<_187.IncentivizedAcknowledgement>): _187.IncentivizedAcknowledgement;
                    fromAmino(object: _187.IncentivizedAcknowledgementAmino): _187.IncentivizedAcknowledgement;
                    toAmino(message: _187.IncentivizedAcknowledgement): _187.IncentivizedAcknowledgementAmino;
                    fromAminoMsg(object: _187.IncentivizedAcknowledgementAminoMsg): _187.IncentivizedAcknowledgement;
                    toAminoMsg(message: _187.IncentivizedAcknowledgement): _187.IncentivizedAcknowledgementAminoMsg;
                    fromProtoMsg(message: _187.IncentivizedAcknowledgementProtoMsg): _187.IncentivizedAcknowledgement;
                    toProto(message: _187.IncentivizedAcknowledgement): Uint8Array;
                    toProtoMsg(message: _187.IncentivizedAcknowledgement): _187.IncentivizedAcknowledgementProtoMsg;
                };
            };
        }
        namespace interchain_accounts {
            namespace controller {
                const v1: {
                    MsgClientImpl: typeof _405.MsgClientImpl;
                    QueryClientImpl: typeof _398.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        interchainAccount(request: _194.QueryInterchainAccountRequest): Promise<_194.QueryInterchainAccountResponse>;
                        params(request?: _194.QueryParamsRequest): Promise<_194.QueryParamsResponse>;
                    };
                    LCDQueryClient: typeof _391.LCDQueryClient;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            registerInterchainAccount(value: _195.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            sendTx(value: _195.MsgSendTx): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            registerInterchainAccount(value: _195.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: _195.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: _195.MsgSendTx): {
                                typeUrl: string;
                                value: _195.MsgSendTx;
                            };
                        };
                        fromJSON: {
                            registerInterchainAccount(value: any): {
                                typeUrl: string;
                                value: _195.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: any): {
                                typeUrl: string;
                                value: _195.MsgSendTx;
                            };
                        };
                        fromPartial: {
                            registerInterchainAccount(value: _195.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: _195.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: _195.MsgSendTx): {
                                typeUrl: string;
                                value: _195.MsgSendTx;
                            };
                        };
                    };
                    AminoConverter: {
                        "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount": {
                            aminoType: string;
                            toAmino: (message: _195.MsgRegisterInterchainAccount) => _195.MsgRegisterInterchainAccountAmino;
                            fromAmino: (object: _195.MsgRegisterInterchainAccountAmino) => _195.MsgRegisterInterchainAccount;
                        };
                        "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx": {
                            aminoType: string;
                            toAmino: (message: _195.MsgSendTx) => _195.MsgSendTxAmino;
                            fromAmino: (object: _195.MsgSendTxAmino) => _195.MsgSendTx;
                        };
                    };
                    MsgRegisterInterchainAccount: {
                        typeUrl: string;
                        encode(message: _195.MsgRegisterInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _195.MsgRegisterInterchainAccount;
                        fromPartial(object: Partial<_195.MsgRegisterInterchainAccount>): _195.MsgRegisterInterchainAccount;
                        fromAmino(object: _195.MsgRegisterInterchainAccountAmino): _195.MsgRegisterInterchainAccount;
                        toAmino(message: _195.MsgRegisterInterchainAccount): _195.MsgRegisterInterchainAccountAmino;
                        fromAminoMsg(object: _195.MsgRegisterInterchainAccountAminoMsg): _195.MsgRegisterInterchainAccount;
                        toAminoMsg(message: _195.MsgRegisterInterchainAccount): _195.MsgRegisterInterchainAccountAminoMsg;
                        fromProtoMsg(message: _195.MsgRegisterInterchainAccountProtoMsg): _195.MsgRegisterInterchainAccount;
                        toProto(message: _195.MsgRegisterInterchainAccount): Uint8Array;
                        toProtoMsg(message: _195.MsgRegisterInterchainAccount): _195.MsgRegisterInterchainAccountProtoMsg;
                    };
                    MsgRegisterInterchainAccountResponse: {
                        typeUrl: string;
                        encode(message: _195.MsgRegisterInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _195.MsgRegisterInterchainAccountResponse;
                        fromPartial(object: Partial<_195.MsgRegisterInterchainAccountResponse>): _195.MsgRegisterInterchainAccountResponse;
                        fromAmino(object: _195.MsgRegisterInterchainAccountResponseAmino): _195.MsgRegisterInterchainAccountResponse;
                        toAmino(message: _195.MsgRegisterInterchainAccountResponse): _195.MsgRegisterInterchainAccountResponseAmino;
                        fromAminoMsg(object: _195.MsgRegisterInterchainAccountResponseAminoMsg): _195.MsgRegisterInterchainAccountResponse;
                        toAminoMsg(message: _195.MsgRegisterInterchainAccountResponse): _195.MsgRegisterInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _195.MsgRegisterInterchainAccountResponseProtoMsg): _195.MsgRegisterInterchainAccountResponse;
                        toProto(message: _195.MsgRegisterInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _195.MsgRegisterInterchainAccountResponse): _195.MsgRegisterInterchainAccountResponseProtoMsg;
                    };
                    MsgSendTx: {
                        typeUrl: string;
                        encode(message: _195.MsgSendTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _195.MsgSendTx;
                        fromPartial(object: Partial<_195.MsgSendTx>): _195.MsgSendTx;
                        fromAmino(object: _195.MsgSendTxAmino): _195.MsgSendTx;
                        toAmino(message: _195.MsgSendTx): _195.MsgSendTxAmino;
                        fromAminoMsg(object: _195.MsgSendTxAminoMsg): _195.MsgSendTx;
                        toAminoMsg(message: _195.MsgSendTx): _195.MsgSendTxAminoMsg;
                        fromProtoMsg(message: _195.MsgSendTxProtoMsg): _195.MsgSendTx;
                        toProto(message: _195.MsgSendTx): Uint8Array;
                        toProtoMsg(message: _195.MsgSendTx): _195.MsgSendTxProtoMsg;
                    };
                    MsgSendTxResponse: {
                        typeUrl: string;
                        encode(message: _195.MsgSendTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _195.MsgSendTxResponse;
                        fromPartial(object: Partial<_195.MsgSendTxResponse>): _195.MsgSendTxResponse;
                        fromAmino(object: _195.MsgSendTxResponseAmino): _195.MsgSendTxResponse;
                        toAmino(message: _195.MsgSendTxResponse): _195.MsgSendTxResponseAmino;
                        fromAminoMsg(object: _195.MsgSendTxResponseAminoMsg): _195.MsgSendTxResponse;
                        toAminoMsg(message: _195.MsgSendTxResponse): _195.MsgSendTxResponseAminoMsg;
                        fromProtoMsg(message: _195.MsgSendTxResponseProtoMsg): _195.MsgSendTxResponse;
                        toProto(message: _195.MsgSendTxResponse): Uint8Array;
                        toProtoMsg(message: _195.MsgSendTxResponse): _195.MsgSendTxResponseProtoMsg;
                    };
                    QueryInterchainAccountRequest: {
                        typeUrl: string;
                        encode(message: _194.QueryInterchainAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _194.QueryInterchainAccountRequest;
                        fromPartial(object: Partial<_194.QueryInterchainAccountRequest>): _194.QueryInterchainAccountRequest;
                        fromAmino(object: _194.QueryInterchainAccountRequestAmino): _194.QueryInterchainAccountRequest;
                        toAmino(message: _194.QueryInterchainAccountRequest): _194.QueryInterchainAccountRequestAmino;
                        fromAminoMsg(object: _194.QueryInterchainAccountRequestAminoMsg): _194.QueryInterchainAccountRequest;
                        toAminoMsg(message: _194.QueryInterchainAccountRequest): _194.QueryInterchainAccountRequestAminoMsg;
                        fromProtoMsg(message: _194.QueryInterchainAccountRequestProtoMsg): _194.QueryInterchainAccountRequest;
                        toProto(message: _194.QueryInterchainAccountRequest): Uint8Array;
                        toProtoMsg(message: _194.QueryInterchainAccountRequest): _194.QueryInterchainAccountRequestProtoMsg;
                    };
                    QueryInterchainAccountResponse: {
                        typeUrl: string;
                        encode(message: _194.QueryInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _194.QueryInterchainAccountResponse;
                        fromPartial(object: Partial<_194.QueryInterchainAccountResponse>): _194.QueryInterchainAccountResponse;
                        fromAmino(object: _194.QueryInterchainAccountResponseAmino): _194.QueryInterchainAccountResponse;
                        toAmino(message: _194.QueryInterchainAccountResponse): _194.QueryInterchainAccountResponseAmino;
                        fromAminoMsg(object: _194.QueryInterchainAccountResponseAminoMsg): _194.QueryInterchainAccountResponse;
                        toAminoMsg(message: _194.QueryInterchainAccountResponse): _194.QueryInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _194.QueryInterchainAccountResponseProtoMsg): _194.QueryInterchainAccountResponse;
                        toProto(message: _194.QueryInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _194.QueryInterchainAccountResponse): _194.QueryInterchainAccountResponseProtoMsg;
                    };
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _194.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(_: any): _194.QueryParamsRequest;
                        fromPartial(_: Partial<_194.QueryParamsRequest>): _194.QueryParamsRequest;
                        fromAmino(_: _194.QueryParamsRequestAmino): _194.QueryParamsRequest;
                        toAmino(_: _194.QueryParamsRequest): _194.QueryParamsRequestAmino;
                        fromAminoMsg(object: _194.QueryParamsRequestAminoMsg): _194.QueryParamsRequest;
                        toAminoMsg(message: _194.QueryParamsRequest): _194.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _194.QueryParamsRequestProtoMsg): _194.QueryParamsRequest;
                        toProto(message: _194.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _194.QueryParamsRequest): _194.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        encode(message: _194.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _194.QueryParamsResponse;
                        fromPartial(object: Partial<_194.QueryParamsResponse>): _194.QueryParamsResponse;
                        fromAmino(object: _194.QueryParamsResponseAmino): _194.QueryParamsResponse;
                        toAmino(message: _194.QueryParamsResponse): _194.QueryParamsResponseAmino;
                        fromAminoMsg(object: _194.QueryParamsResponseAminoMsg): _194.QueryParamsResponse;
                        toAminoMsg(message: _194.QueryParamsResponse): _194.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _194.QueryParamsResponseProtoMsg): _194.QueryParamsResponse;
                        toProto(message: _194.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _194.QueryParamsResponse): _194.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _193.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _193.Params;
                        fromPartial(object: Partial<_193.Params>): _193.Params;
                        fromAmino(object: _193.ParamsAmino): _193.Params;
                        toAmino(message: _193.Params): _193.ParamsAmino;
                        fromAminoMsg(object: _193.ParamsAminoMsg): _193.Params;
                        toAminoMsg(message: _193.Params): _193.ParamsAminoMsg;
                        fromProtoMsg(message: _193.ParamsProtoMsg): _193.Params;
                        toProto(message: _193.Params): Uint8Array;
                        toProtoMsg(message: _193.Params): _193.ParamsProtoMsg;
                    };
                };
            }
            namespace genesis {
                const v1: {
                    GenesisState: {
                        typeUrl: string;
                        encode(message: _196.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _196.GenesisState;
                        fromPartial(object: Partial<_196.GenesisState>): _196.GenesisState;
                        fromAmino(object: _196.GenesisStateAmino): _196.GenesisState;
                        toAmino(message: _196.GenesisState): _196.GenesisStateAmino;
                        fromAminoMsg(object: _196.GenesisStateAminoMsg): _196.GenesisState;
                        toAminoMsg(message: _196.GenesisState): _196.GenesisStateAminoMsg;
                        fromProtoMsg(message: _196.GenesisStateProtoMsg): _196.GenesisState;
                        toProto(message: _196.GenesisState): Uint8Array;
                        toProtoMsg(message: _196.GenesisState): _196.GenesisStateProtoMsg;
                    };
                    ControllerGenesisState: {
                        typeUrl: string;
                        encode(message: _196.ControllerGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _196.ControllerGenesisState;
                        fromPartial(object: Partial<_196.ControllerGenesisState>): _196.ControllerGenesisState;
                        fromAmino(object: _196.ControllerGenesisStateAmino): _196.ControllerGenesisState;
                        toAmino(message: _196.ControllerGenesisState): _196.ControllerGenesisStateAmino;
                        fromAminoMsg(object: _196.ControllerGenesisStateAminoMsg): _196.ControllerGenesisState;
                        toAminoMsg(message: _196.ControllerGenesisState): _196.ControllerGenesisStateAminoMsg;
                        fromProtoMsg(message: _196.ControllerGenesisStateProtoMsg): _196.ControllerGenesisState;
                        toProto(message: _196.ControllerGenesisState): Uint8Array;
                        toProtoMsg(message: _196.ControllerGenesisState): _196.ControllerGenesisStateProtoMsg;
                    };
                    HostGenesisState: {
                        typeUrl: string;
                        encode(message: _196.HostGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _196.HostGenesisState;
                        fromPartial(object: Partial<_196.HostGenesisState>): _196.HostGenesisState;
                        fromAmino(object: _196.HostGenesisStateAmino): _196.HostGenesisState;
                        toAmino(message: _196.HostGenesisState): _196.HostGenesisStateAmino;
                        fromAminoMsg(object: _196.HostGenesisStateAminoMsg): _196.HostGenesisState;
                        toAminoMsg(message: _196.HostGenesisState): _196.HostGenesisStateAminoMsg;
                        fromProtoMsg(message: _196.HostGenesisStateProtoMsg): _196.HostGenesisState;
                        toProto(message: _196.HostGenesisState): Uint8Array;
                        toProtoMsg(message: _196.HostGenesisState): _196.HostGenesisStateProtoMsg;
                    };
                    ActiveChannel: {
                        typeUrl: string;
                        encode(message: _196.ActiveChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _196.ActiveChannel;
                        fromPartial(object: Partial<_196.ActiveChannel>): _196.ActiveChannel;
                        fromAmino(object: _196.ActiveChannelAmino): _196.ActiveChannel;
                        toAmino(message: _196.ActiveChannel): _196.ActiveChannelAmino;
                        fromAminoMsg(object: _196.ActiveChannelAminoMsg): _196.ActiveChannel;
                        toAminoMsg(message: _196.ActiveChannel): _196.ActiveChannelAminoMsg;
                        fromProtoMsg(message: _196.ActiveChannelProtoMsg): _196.ActiveChannel;
                        toProto(message: _196.ActiveChannel): Uint8Array;
                        toProtoMsg(message: _196.ActiveChannel): _196.ActiveChannelProtoMsg;
                    };
                    RegisteredInterchainAccount: {
                        typeUrl: string;
                        encode(message: _196.RegisteredInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _196.RegisteredInterchainAccount;
                        fromPartial(object: Partial<_196.RegisteredInterchainAccount>): _196.RegisteredInterchainAccount;
                        fromAmino(object: _196.RegisteredInterchainAccountAmino): _196.RegisteredInterchainAccount;
                        toAmino(message: _196.RegisteredInterchainAccount): _196.RegisteredInterchainAccountAmino;
                        fromAminoMsg(object: _196.RegisteredInterchainAccountAminoMsg): _196.RegisteredInterchainAccount;
                        toAminoMsg(message: _196.RegisteredInterchainAccount): _196.RegisteredInterchainAccountAminoMsg;
                        fromProtoMsg(message: _196.RegisteredInterchainAccountProtoMsg): _196.RegisteredInterchainAccount;
                        toProto(message: _196.RegisteredInterchainAccount): Uint8Array;
                        toProtoMsg(message: _196.RegisteredInterchainAccount): _196.RegisteredInterchainAccountProtoMsg;
                    };
                };
            }
            namespace host {
                const v1: {
                    QueryClientImpl: typeof _399.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        params(request?: _198.QueryParamsRequest): Promise<_198.QueryParamsResponse>;
                    };
                    LCDQueryClient: typeof _392.LCDQueryClient;
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _198.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(_: any): _198.QueryParamsRequest;
                        fromPartial(_: Partial<_198.QueryParamsRequest>): _198.QueryParamsRequest;
                        fromAmino(_: _198.QueryParamsRequestAmino): _198.QueryParamsRequest;
                        toAmino(_: _198.QueryParamsRequest): _198.QueryParamsRequestAmino;
                        fromAminoMsg(object: _198.QueryParamsRequestAminoMsg): _198.QueryParamsRequest;
                        toAminoMsg(message: _198.QueryParamsRequest): _198.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _198.QueryParamsRequestProtoMsg): _198.QueryParamsRequest;
                        toProto(message: _198.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _198.QueryParamsRequest): _198.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        encode(message: _198.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _198.QueryParamsResponse;
                        fromPartial(object: Partial<_198.QueryParamsResponse>): _198.QueryParamsResponse;
                        fromAmino(object: _198.QueryParamsResponseAmino): _198.QueryParamsResponse;
                        toAmino(message: _198.QueryParamsResponse): _198.QueryParamsResponseAmino;
                        fromAminoMsg(object: _198.QueryParamsResponseAminoMsg): _198.QueryParamsResponse;
                        toAminoMsg(message: _198.QueryParamsResponse): _198.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _198.QueryParamsResponseProtoMsg): _198.QueryParamsResponse;
                        toProto(message: _198.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _198.QueryParamsResponse): _198.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _197.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _197.Params;
                        fromPartial(object: Partial<_197.Params>): _197.Params;
                        fromAmino(object: _197.ParamsAmino): _197.Params;
                        toAmino(message: _197.Params): _197.ParamsAmino;
                        fromAminoMsg(object: _197.ParamsAminoMsg): _197.Params;
                        toAminoMsg(message: _197.Params): _197.ParamsAminoMsg;
                        fromProtoMsg(message: _197.ParamsProtoMsg): _197.Params;
                        toProto(message: _197.Params): Uint8Array;
                        toProtoMsg(message: _197.Params): _197.ParamsProtoMsg;
                    };
                };
            }
            const v1: {
                typeFromJSON(object: any): _201.Type;
                typeToJSON(object: _201.Type): string;
                Type: typeof _201.Type;
                TypeSDKType: typeof _201.Type;
                TypeAmino: typeof _201.Type;
                InterchainAccountPacketData: {
                    typeUrl: string;
                    encode(message: _201.InterchainAccountPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _201.InterchainAccountPacketData;
                    fromPartial(object: Partial<_201.InterchainAccountPacketData>): _201.InterchainAccountPacketData;
                    fromAmino(object: _201.InterchainAccountPacketDataAmino): _201.InterchainAccountPacketData;
                    toAmino(message: _201.InterchainAccountPacketData): _201.InterchainAccountPacketDataAmino;
                    fromAminoMsg(object: _201.InterchainAccountPacketDataAminoMsg): _201.InterchainAccountPacketData;
                    toAminoMsg(message: _201.InterchainAccountPacketData): _201.InterchainAccountPacketDataAminoMsg;
                    fromProtoMsg(message: _201.InterchainAccountPacketDataProtoMsg): _201.InterchainAccountPacketData;
                    toProto(message: _201.InterchainAccountPacketData): Uint8Array;
                    toProtoMsg(message: _201.InterchainAccountPacketData): _201.InterchainAccountPacketDataProtoMsg;
                };
                CosmosTx: {
                    typeUrl: string;
                    encode(message: _201.CosmosTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _201.CosmosTx;
                    fromPartial(object: Partial<_201.CosmosTx>): _201.CosmosTx;
                    fromAmino(object: _201.CosmosTxAmino): _201.CosmosTx;
                    toAmino(message: _201.CosmosTx): _201.CosmosTxAmino;
                    fromAminoMsg(object: _201.CosmosTxAminoMsg): _201.CosmosTx;
                    toAminoMsg(message: _201.CosmosTx): _201.CosmosTxAminoMsg;
                    fromProtoMsg(message: _201.CosmosTxProtoMsg): _201.CosmosTx;
                    toProto(message: _201.CosmosTx): Uint8Array;
                    toProtoMsg(message: _201.CosmosTx): _201.CosmosTxProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _200.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _200.Metadata;
                    fromPartial(object: Partial<_200.Metadata>): _200.Metadata;
                    fromAmino(object: _200.MetadataAmino): _200.Metadata;
                    toAmino(message: _200.Metadata): _200.MetadataAmino;
                    fromAminoMsg(object: _200.MetadataAminoMsg): _200.Metadata;
                    toAminoMsg(message: _200.Metadata): _200.MetadataAminoMsg;
                    fromProtoMsg(message: _200.MetadataProtoMsg): _200.Metadata;
                    toProto(message: _200.Metadata): Uint8Array;
                    toProtoMsg(message: _200.Metadata): _200.MetadataProtoMsg;
                };
                InterchainAccount: {
                    typeUrl: string;
                    encode(message: _199.InterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _199.InterchainAccount;
                    fromPartial(object: Partial<_199.InterchainAccount>): _199.InterchainAccount;
                    fromAmino(object: _199.InterchainAccountAmino): _199.InterchainAccount;
                    toAmino(message: _199.InterchainAccount): _199.InterchainAccountAmino;
                    fromAminoMsg(object: _199.InterchainAccountAminoMsg): _199.InterchainAccount;
                    toAminoMsg(message: _199.InterchainAccount): _199.InterchainAccountAminoMsg;
                    fromProtoMsg(message: _199.InterchainAccountProtoMsg): _199.InterchainAccount;
                    toProto(message: _199.InterchainAccount): Uint8Array;
                    toProtoMsg(message: _199.InterchainAccount): _199.InterchainAccountProtoMsg;
                };
            };
        }
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _406.MsgClientImpl;
                QueryClientImpl: typeof _400.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTraces(request?: _204.QueryDenomTracesRequest): Promise<_204.QueryDenomTracesResponse>;
                    denomTrace(request: _204.QueryDenomTraceRequest): Promise<_204.QueryDenomTraceResponse>;
                    params(request?: _204.QueryParamsRequest): Promise<_204.QueryParamsResponse>;
                    denomHash(request: _204.QueryDenomHashRequest): Promise<_204.QueryDenomHashResponse>;
                    escrowAddress(request: _204.QueryEscrowAddressRequest): Promise<_204.QueryEscrowAddressResponse>;
                    totalEscrowForDenom(request: _204.QueryTotalEscrowForDenomRequest): Promise<_204.QueryTotalEscrowForDenomResponse>;
                };
                LCDQueryClient: typeof _393.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _206.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _206.MsgTransfer): {
                            typeUrl: string;
                            value: _206.MsgTransfer;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _206.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _206.MsgTransfer): {
                            typeUrl: string;
                            value: _206.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _206.MsgTransfer) => _206.MsgTransferAmino;
                        fromAmino: (object: _206.MsgTransferAmino) => _206.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    encode(message: _206.MsgTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _206.MsgTransfer;
                    fromPartial(object: Partial<_206.MsgTransfer>): _206.MsgTransfer;
                    fromAmino(object: _206.MsgTransferAmino): _206.MsgTransfer;
                    toAmino(message: _206.MsgTransfer): _206.MsgTransferAmino;
                    fromAminoMsg(object: _206.MsgTransferAminoMsg): _206.MsgTransfer;
                    toAminoMsg(message: _206.MsgTransfer): _206.MsgTransferAminoMsg;
                    fromProtoMsg(message: _206.MsgTransferProtoMsg): _206.MsgTransfer;
                    toProto(message: _206.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _206.MsgTransfer): _206.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    encode(message: _206.MsgTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _206.MsgTransferResponse;
                    fromPartial(object: Partial<_206.MsgTransferResponse>): _206.MsgTransferResponse;
                    fromAmino(object: _206.MsgTransferResponseAmino): _206.MsgTransferResponse;
                    toAmino(message: _206.MsgTransferResponse): _206.MsgTransferResponseAmino;
                    fromAminoMsg(object: _206.MsgTransferResponseAminoMsg): _206.MsgTransferResponse;
                    toAminoMsg(message: _206.MsgTransferResponse): _206.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _206.MsgTransferResponseProtoMsg): _206.MsgTransferResponse;
                    toProto(message: _206.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _206.MsgTransferResponse): _206.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    encode(message: _205.DenomTrace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _205.DenomTrace;
                    fromPartial(object: Partial<_205.DenomTrace>): _205.DenomTrace;
                    fromAmino(object: _205.DenomTraceAmino): _205.DenomTrace;
                    toAmino(message: _205.DenomTrace): _205.DenomTraceAmino;
                    fromAminoMsg(object: _205.DenomTraceAminoMsg): _205.DenomTrace;
                    toAminoMsg(message: _205.DenomTrace): _205.DenomTraceAminoMsg;
                    fromProtoMsg(message: _205.DenomTraceProtoMsg): _205.DenomTrace;
                    toProto(message: _205.DenomTrace): Uint8Array;
                    toProtoMsg(message: _205.DenomTrace): _205.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _205.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _205.Params;
                    fromPartial(object: Partial<_205.Params>): _205.Params;
                    fromAmino(object: _205.ParamsAmino): _205.Params;
                    toAmino(message: _205.Params): _205.ParamsAmino;
                    fromAminoMsg(object: _205.ParamsAminoMsg): _205.Params;
                    toAminoMsg(message: _205.Params): _205.ParamsAminoMsg;
                    fromProtoMsg(message: _205.ParamsProtoMsg): _205.Params;
                    toProto(message: _205.Params): Uint8Array;
                    toProtoMsg(message: _205.Params): _205.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    encode(message: _204.QueryDenomTraceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _204.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_204.QueryDenomTraceRequest>): _204.QueryDenomTraceRequest;
                    fromAmino(object: _204.QueryDenomTraceRequestAmino): _204.QueryDenomTraceRequest;
                    toAmino(message: _204.QueryDenomTraceRequest): _204.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _204.QueryDenomTraceRequestAminoMsg): _204.QueryDenomTraceRequest;
                    toAminoMsg(message: _204.QueryDenomTraceRequest): _204.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _204.QueryDenomTraceRequestProtoMsg): _204.QueryDenomTraceRequest;
                    toProto(message: _204.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _204.QueryDenomTraceRequest): _204.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    encode(message: _204.QueryDenomTraceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _204.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_204.QueryDenomTraceResponse>): _204.QueryDenomTraceResponse;
                    fromAmino(object: _204.QueryDenomTraceResponseAmino): _204.QueryDenomTraceResponse;
                    toAmino(message: _204.QueryDenomTraceResponse): _204.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _204.QueryDenomTraceResponseAminoMsg): _204.QueryDenomTraceResponse;
                    toAminoMsg(message: _204.QueryDenomTraceResponse): _204.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _204.QueryDenomTraceResponseProtoMsg): _204.QueryDenomTraceResponse;
                    toProto(message: _204.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _204.QueryDenomTraceResponse): _204.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    encode(message: _204.QueryDenomTracesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _204.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_204.QueryDenomTracesRequest>): _204.QueryDenomTracesRequest;
                    fromAmino(object: _204.QueryDenomTracesRequestAmino): _204.QueryDenomTracesRequest;
                    toAmino(message: _204.QueryDenomTracesRequest): _204.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _204.QueryDenomTracesRequestAminoMsg): _204.QueryDenomTracesRequest;
                    toAminoMsg(message: _204.QueryDenomTracesRequest): _204.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _204.QueryDenomTracesRequestProtoMsg): _204.QueryDenomTracesRequest;
                    toProto(message: _204.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _204.QueryDenomTracesRequest): _204.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    encode(message: _204.QueryDenomTracesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _204.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_204.QueryDenomTracesResponse>): _204.QueryDenomTracesResponse;
                    fromAmino(object: _204.QueryDenomTracesResponseAmino): _204.QueryDenomTracesResponse;
                    toAmino(message: _204.QueryDenomTracesResponse): _204.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _204.QueryDenomTracesResponseAminoMsg): _204.QueryDenomTracesResponse;
                    toAminoMsg(message: _204.QueryDenomTracesResponse): _204.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _204.QueryDenomTracesResponseProtoMsg): _204.QueryDenomTracesResponse;
                    toProto(message: _204.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _204.QueryDenomTracesResponse): _204.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _204.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _204.QueryParamsRequest;
                    fromPartial(_: Partial<_204.QueryParamsRequest>): _204.QueryParamsRequest;
                    fromAmino(_: _204.QueryParamsRequestAmino): _204.QueryParamsRequest;
                    toAmino(_: _204.QueryParamsRequest): _204.QueryParamsRequestAmino;
                    fromAminoMsg(object: _204.QueryParamsRequestAminoMsg): _204.QueryParamsRequest;
                    toAminoMsg(message: _204.QueryParamsRequest): _204.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _204.QueryParamsRequestProtoMsg): _204.QueryParamsRequest;
                    toProto(message: _204.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _204.QueryParamsRequest): _204.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    encode(message: _204.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _204.QueryParamsResponse;
                    fromPartial(object: Partial<_204.QueryParamsResponse>): _204.QueryParamsResponse;
                    fromAmino(object: _204.QueryParamsResponseAmino): _204.QueryParamsResponse;
                    toAmino(message: _204.QueryParamsResponse): _204.QueryParamsResponseAmino;
                    fromAminoMsg(object: _204.QueryParamsResponseAminoMsg): _204.QueryParamsResponse;
                    toAminoMsg(message: _204.QueryParamsResponse): _204.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _204.QueryParamsResponseProtoMsg): _204.QueryParamsResponse;
                    toProto(message: _204.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _204.QueryParamsResponse): _204.QueryParamsResponseProtoMsg;
                };
                QueryDenomHashRequest: {
                    typeUrl: string;
                    encode(message: _204.QueryDenomHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _204.QueryDenomHashRequest;
                    fromPartial(object: Partial<_204.QueryDenomHashRequest>): _204.QueryDenomHashRequest;
                    fromAmino(object: _204.QueryDenomHashRequestAmino): _204.QueryDenomHashRequest;
                    toAmino(message: _204.QueryDenomHashRequest): _204.QueryDenomHashRequestAmino;
                    fromAminoMsg(object: _204.QueryDenomHashRequestAminoMsg): _204.QueryDenomHashRequest;
                    toAminoMsg(message: _204.QueryDenomHashRequest): _204.QueryDenomHashRequestAminoMsg;
                    fromProtoMsg(message: _204.QueryDenomHashRequestProtoMsg): _204.QueryDenomHashRequest;
                    toProto(message: _204.QueryDenomHashRequest): Uint8Array;
                    toProtoMsg(message: _204.QueryDenomHashRequest): _204.QueryDenomHashRequestProtoMsg;
                };
                QueryDenomHashResponse: {
                    typeUrl: string;
                    encode(message: _204.QueryDenomHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _204.QueryDenomHashResponse;
                    fromPartial(object: Partial<_204.QueryDenomHashResponse>): _204.QueryDenomHashResponse;
                    fromAmino(object: _204.QueryDenomHashResponseAmino): _204.QueryDenomHashResponse;
                    toAmino(message: _204.QueryDenomHashResponse): _204.QueryDenomHashResponseAmino;
                    fromAminoMsg(object: _204.QueryDenomHashResponseAminoMsg): _204.QueryDenomHashResponse;
                    toAminoMsg(message: _204.QueryDenomHashResponse): _204.QueryDenomHashResponseAminoMsg;
                    fromProtoMsg(message: _204.QueryDenomHashResponseProtoMsg): _204.QueryDenomHashResponse;
                    toProto(message: _204.QueryDenomHashResponse): Uint8Array;
                    toProtoMsg(message: _204.QueryDenomHashResponse): _204.QueryDenomHashResponseProtoMsg;
                };
                QueryEscrowAddressRequest: {
                    typeUrl: string;
                    encode(message: _204.QueryEscrowAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _204.QueryEscrowAddressRequest;
                    fromPartial(object: Partial<_204.QueryEscrowAddressRequest>): _204.QueryEscrowAddressRequest;
                    fromAmino(object: _204.QueryEscrowAddressRequestAmino): _204.QueryEscrowAddressRequest;
                    toAmino(message: _204.QueryEscrowAddressRequest): _204.QueryEscrowAddressRequestAmino;
                    fromAminoMsg(object: _204.QueryEscrowAddressRequestAminoMsg): _204.QueryEscrowAddressRequest;
                    toAminoMsg(message: _204.QueryEscrowAddressRequest): _204.QueryEscrowAddressRequestAminoMsg;
                    fromProtoMsg(message: _204.QueryEscrowAddressRequestProtoMsg): _204.QueryEscrowAddressRequest;
                    toProto(message: _204.QueryEscrowAddressRequest): Uint8Array;
                    toProtoMsg(message: _204.QueryEscrowAddressRequest): _204.QueryEscrowAddressRequestProtoMsg;
                };
                QueryEscrowAddressResponse: {
                    typeUrl: string;
                    encode(message: _204.QueryEscrowAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _204.QueryEscrowAddressResponse;
                    fromPartial(object: Partial<_204.QueryEscrowAddressResponse>): _204.QueryEscrowAddressResponse;
                    fromAmino(object: _204.QueryEscrowAddressResponseAmino): _204.QueryEscrowAddressResponse;
                    toAmino(message: _204.QueryEscrowAddressResponse): _204.QueryEscrowAddressResponseAmino;
                    fromAminoMsg(object: _204.QueryEscrowAddressResponseAminoMsg): _204.QueryEscrowAddressResponse;
                    toAminoMsg(message: _204.QueryEscrowAddressResponse): _204.QueryEscrowAddressResponseAminoMsg;
                    fromProtoMsg(message: _204.QueryEscrowAddressResponseProtoMsg): _204.QueryEscrowAddressResponse;
                    toProto(message: _204.QueryEscrowAddressResponse): Uint8Array;
                    toProtoMsg(message: _204.QueryEscrowAddressResponse): _204.QueryEscrowAddressResponseProtoMsg;
                };
                QueryTotalEscrowForDenomRequest: {
                    typeUrl: string;
                    encode(message: _204.QueryTotalEscrowForDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _204.QueryTotalEscrowForDenomRequest;
                    fromPartial(object: Partial<_204.QueryTotalEscrowForDenomRequest>): _204.QueryTotalEscrowForDenomRequest;
                    fromAmino(object: _204.QueryTotalEscrowForDenomRequestAmino): _204.QueryTotalEscrowForDenomRequest;
                    toAmino(message: _204.QueryTotalEscrowForDenomRequest): _204.QueryTotalEscrowForDenomRequestAmino;
                    fromAminoMsg(object: _204.QueryTotalEscrowForDenomRequestAminoMsg): _204.QueryTotalEscrowForDenomRequest;
                    toAminoMsg(message: _204.QueryTotalEscrowForDenomRequest): _204.QueryTotalEscrowForDenomRequestAminoMsg;
                    fromProtoMsg(message: _204.QueryTotalEscrowForDenomRequestProtoMsg): _204.QueryTotalEscrowForDenomRequest;
                    toProto(message: _204.QueryTotalEscrowForDenomRequest): Uint8Array;
                    toProtoMsg(message: _204.QueryTotalEscrowForDenomRequest): _204.QueryTotalEscrowForDenomRequestProtoMsg;
                };
                QueryTotalEscrowForDenomResponse: {
                    typeUrl: string;
                    encode(message: _204.QueryTotalEscrowForDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _204.QueryTotalEscrowForDenomResponse;
                    fromPartial(object: Partial<_204.QueryTotalEscrowForDenomResponse>): _204.QueryTotalEscrowForDenomResponse;
                    fromAmino(object: _204.QueryTotalEscrowForDenomResponseAmino): _204.QueryTotalEscrowForDenomResponse;
                    toAmino(message: _204.QueryTotalEscrowForDenomResponse): _204.QueryTotalEscrowForDenomResponseAmino;
                    fromAminoMsg(object: _204.QueryTotalEscrowForDenomResponseAminoMsg): _204.QueryTotalEscrowForDenomResponse;
                    toAminoMsg(message: _204.QueryTotalEscrowForDenomResponse): _204.QueryTotalEscrowForDenomResponseAminoMsg;
                    fromProtoMsg(message: _204.QueryTotalEscrowForDenomResponseProtoMsg): _204.QueryTotalEscrowForDenomResponse;
                    toProto(message: _204.QueryTotalEscrowForDenomResponse): Uint8Array;
                    toProtoMsg(message: _204.QueryTotalEscrowForDenomResponse): _204.QueryTotalEscrowForDenomResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _203.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _203.GenesisState;
                    fromPartial(object: Partial<_203.GenesisState>): _203.GenesisState;
                    fromAmino(object: _203.GenesisStateAmino): _203.GenesisState;
                    toAmino(message: _203.GenesisState): _203.GenesisStateAmino;
                    fromAminoMsg(object: _203.GenesisStateAminoMsg): _203.GenesisState;
                    toAminoMsg(message: _203.GenesisState): _203.GenesisStateAminoMsg;
                    fromProtoMsg(message: _203.GenesisStateProtoMsg): _203.GenesisState;
                    toProto(message: _203.GenesisState): Uint8Array;
                    toProtoMsg(message: _203.GenesisState): _203.GenesisStateProtoMsg;
                };
                Allocation: {
                    typeUrl: string;
                    encode(message: _202.Allocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _202.Allocation;
                    fromPartial(object: Partial<_202.Allocation>): _202.Allocation;
                    fromAmino(object: _202.AllocationAmino): _202.Allocation;
                    toAmino(message: _202.Allocation): _202.AllocationAmino;
                    fromAminoMsg(object: _202.AllocationAminoMsg): _202.Allocation;
                    toAminoMsg(message: _202.Allocation): _202.AllocationAminoMsg;
                    fromProtoMsg(message: _202.AllocationProtoMsg): _202.Allocation;
                    toProto(message: _202.Allocation): Uint8Array;
                    toProtoMsg(message: _202.Allocation): _202.AllocationProtoMsg;
                };
                TransferAuthorization: {
                    typeUrl: string;
                    encode(message: _202.TransferAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _202.TransferAuthorization;
                    fromPartial(object: Partial<_202.TransferAuthorization>): _202.TransferAuthorization;
                    fromAmino(object: _202.TransferAuthorizationAmino): _202.TransferAuthorization;
                    toAmino(message: _202.TransferAuthorization): _202.TransferAuthorizationAmino;
                    fromAminoMsg(object: _202.TransferAuthorizationAminoMsg): _202.TransferAuthorization;
                    toAminoMsg(message: _202.TransferAuthorization): _202.TransferAuthorizationAminoMsg;
                    fromProtoMsg(message: _202.TransferAuthorizationProtoMsg): _202.TransferAuthorization;
                    toProto(message: _202.TransferAuthorization): Uint8Array;
                    toProtoMsg(message: _202.TransferAuthorization): _202.TransferAuthorizationProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    typeUrl: string;
                    encode(message: _207.FungibleTokenPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _207.FungibleTokenPacketData;
                    fromPartial(object: Partial<_207.FungibleTokenPacketData>): _207.FungibleTokenPacketData;
                    fromAmino(object: _207.FungibleTokenPacketDataAmino): _207.FungibleTokenPacketData;
                    toAmino(message: _207.FungibleTokenPacketData): _207.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _207.FungibleTokenPacketDataAminoMsg): _207.FungibleTokenPacketData;
                    toAminoMsg(message: _207.FungibleTokenPacketData): _207.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _207.FungibleTokenPacketDataProtoMsg): _207.FungibleTokenPacketData;
                    toProto(message: _207.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _207.FungibleTokenPacketData): _207.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _407.MsgClientImpl;
                QueryClientImpl: typeof _401.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _210.QueryChannelRequest): Promise<_210.QueryChannelResponse>;
                    channels(request?: _210.QueryChannelsRequest): Promise<_210.QueryChannelsResponse>;
                    connectionChannels(request: _210.QueryConnectionChannelsRequest): Promise<_210.QueryConnectionChannelsResponse>;
                    channelClientState(request: _210.QueryChannelClientStateRequest): Promise<_210.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _210.QueryChannelConsensusStateRequest): Promise<_210.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _210.QueryPacketCommitmentRequest): Promise<_210.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _210.QueryPacketCommitmentsRequest): Promise<_210.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _210.QueryPacketReceiptRequest): Promise<_210.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _210.QueryPacketAcknowledgementRequest): Promise<_210.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _210.QueryPacketAcknowledgementsRequest): Promise<_210.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _210.QueryUnreceivedPacketsRequest): Promise<_210.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _210.QueryUnreceivedAcksRequest): Promise<_210.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _210.QueryNextSequenceReceiveRequest): Promise<_210.QueryNextSequenceReceiveResponse>;
                };
                LCDQueryClient: typeof _394.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _211.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _211.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _211.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _211.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _211.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _211.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _211.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _211.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _211.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _211.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _211.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _211.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _211.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _211.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _211.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _211.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _211.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _211.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _211.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _211.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _211.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _211.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _211.MsgRecvPacket): {
                            typeUrl: string;
                            value: _211.MsgRecvPacket;
                        };
                        timeout(value: _211.MsgTimeout): {
                            typeUrl: string;
                            value: _211.MsgTimeout;
                        };
                        timeoutOnClose(value: _211.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _211.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _211.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _211.MsgAcknowledgement;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _211.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _211.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _211.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _211.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _211.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _211.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _211.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _211.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _211.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _211.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _211.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _211.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _211.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _211.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _211.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _211.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _211.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _211.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _211.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _211.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _211.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _211.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _211.MsgRecvPacket): {
                            typeUrl: string;
                            value: _211.MsgRecvPacket;
                        };
                        timeout(value: _211.MsgTimeout): {
                            typeUrl: string;
                            value: _211.MsgTimeout;
                        };
                        timeoutOnClose(value: _211.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _211.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _211.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _211.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _211.MsgChannelOpenInit) => _211.MsgChannelOpenInitAmino;
                        fromAmino: (object: _211.MsgChannelOpenInitAmino) => _211.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _211.MsgChannelOpenTry) => _211.MsgChannelOpenTryAmino;
                        fromAmino: (object: _211.MsgChannelOpenTryAmino) => _211.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _211.MsgChannelOpenAck) => _211.MsgChannelOpenAckAmino;
                        fromAmino: (object: _211.MsgChannelOpenAckAmino) => _211.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _211.MsgChannelOpenConfirm) => _211.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _211.MsgChannelOpenConfirmAmino) => _211.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _211.MsgChannelCloseInit) => _211.MsgChannelCloseInitAmino;
                        fromAmino: (object: _211.MsgChannelCloseInitAmino) => _211.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _211.MsgChannelCloseConfirm) => _211.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _211.MsgChannelCloseConfirmAmino) => _211.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _211.MsgRecvPacket) => _211.MsgRecvPacketAmino;
                        fromAmino: (object: _211.MsgRecvPacketAmino) => _211.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _211.MsgTimeout) => _211.MsgTimeoutAmino;
                        fromAmino: (object: _211.MsgTimeoutAmino) => _211.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _211.MsgTimeoutOnClose) => _211.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _211.MsgTimeoutOnCloseAmino) => _211.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _211.MsgAcknowledgement) => _211.MsgAcknowledgementAmino;
                        fromAmino: (object: _211.MsgAcknowledgementAmino) => _211.MsgAcknowledgement;
                    };
                };
                responseResultTypeFromJSON(object: any): _211.ResponseResultType;
                responseResultTypeToJSON(object: _211.ResponseResultType): string;
                ResponseResultType: typeof _211.ResponseResultType;
                ResponseResultTypeSDKType: typeof _211.ResponseResultType;
                ResponseResultTypeAmino: typeof _211.ResponseResultType;
                MsgChannelOpenInit: {
                    typeUrl: string;
                    encode(message: _211.MsgChannelOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _211.MsgChannelOpenInit;
                    fromPartial(object: Partial<_211.MsgChannelOpenInit>): _211.MsgChannelOpenInit;
                    fromAmino(object: _211.MsgChannelOpenInitAmino): _211.MsgChannelOpenInit;
                    toAmino(message: _211.MsgChannelOpenInit): _211.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _211.MsgChannelOpenInitAminoMsg): _211.MsgChannelOpenInit;
                    toAminoMsg(message: _211.MsgChannelOpenInit): _211.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _211.MsgChannelOpenInitProtoMsg): _211.MsgChannelOpenInit;
                    toProto(message: _211.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _211.MsgChannelOpenInit): _211.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    encode(message: _211.MsgChannelOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _211.MsgChannelOpenInitResponse;
                    fromPartial(object: Partial<_211.MsgChannelOpenInitResponse>): _211.MsgChannelOpenInitResponse;
                    fromAmino(object: _211.MsgChannelOpenInitResponseAmino): _211.MsgChannelOpenInitResponse;
                    toAmino(message: _211.MsgChannelOpenInitResponse): _211.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _211.MsgChannelOpenInitResponseAminoMsg): _211.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _211.MsgChannelOpenInitResponse): _211.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _211.MsgChannelOpenInitResponseProtoMsg): _211.MsgChannelOpenInitResponse;
                    toProto(message: _211.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _211.MsgChannelOpenInitResponse): _211.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    encode(message: _211.MsgChannelOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _211.MsgChannelOpenTry;
                    fromPartial(object: Partial<_211.MsgChannelOpenTry>): _211.MsgChannelOpenTry;
                    fromAmino(object: _211.MsgChannelOpenTryAmino): _211.MsgChannelOpenTry;
                    toAmino(message: _211.MsgChannelOpenTry): _211.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _211.MsgChannelOpenTryAminoMsg): _211.MsgChannelOpenTry;
                    toAminoMsg(message: _211.MsgChannelOpenTry): _211.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _211.MsgChannelOpenTryProtoMsg): _211.MsgChannelOpenTry;
                    toProto(message: _211.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _211.MsgChannelOpenTry): _211.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    encode(message: _211.MsgChannelOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _211.MsgChannelOpenTryResponse;
                    fromPartial(object: Partial<_211.MsgChannelOpenTryResponse>): _211.MsgChannelOpenTryResponse;
                    fromAmino(object: _211.MsgChannelOpenTryResponseAmino): _211.MsgChannelOpenTryResponse;
                    toAmino(message: _211.MsgChannelOpenTryResponse): _211.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _211.MsgChannelOpenTryResponseAminoMsg): _211.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _211.MsgChannelOpenTryResponse): _211.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _211.MsgChannelOpenTryResponseProtoMsg): _211.MsgChannelOpenTryResponse;
                    toProto(message: _211.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _211.MsgChannelOpenTryResponse): _211.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    encode(message: _211.MsgChannelOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _211.MsgChannelOpenAck;
                    fromPartial(object: Partial<_211.MsgChannelOpenAck>): _211.MsgChannelOpenAck;
                    fromAmino(object: _211.MsgChannelOpenAckAmino): _211.MsgChannelOpenAck;
                    toAmino(message: _211.MsgChannelOpenAck): _211.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _211.MsgChannelOpenAckAminoMsg): _211.MsgChannelOpenAck;
                    toAminoMsg(message: _211.MsgChannelOpenAck): _211.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _211.MsgChannelOpenAckProtoMsg): _211.MsgChannelOpenAck;
                    toProto(message: _211.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _211.MsgChannelOpenAck): _211.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _211.MsgChannelOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _211.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_211.MsgChannelOpenAckResponse>): _211.MsgChannelOpenAckResponse;
                    fromAmino(_: _211.MsgChannelOpenAckResponseAmino): _211.MsgChannelOpenAckResponse;
                    toAmino(_: _211.MsgChannelOpenAckResponse): _211.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _211.MsgChannelOpenAckResponseAminoMsg): _211.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _211.MsgChannelOpenAckResponse): _211.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _211.MsgChannelOpenAckResponseProtoMsg): _211.MsgChannelOpenAckResponse;
                    toProto(message: _211.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _211.MsgChannelOpenAckResponse): _211.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    encode(message: _211.MsgChannelOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _211.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_211.MsgChannelOpenConfirm>): _211.MsgChannelOpenConfirm;
                    fromAmino(object: _211.MsgChannelOpenConfirmAmino): _211.MsgChannelOpenConfirm;
                    toAmino(message: _211.MsgChannelOpenConfirm): _211.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _211.MsgChannelOpenConfirmAminoMsg): _211.MsgChannelOpenConfirm;
                    toAminoMsg(message: _211.MsgChannelOpenConfirm): _211.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _211.MsgChannelOpenConfirmProtoMsg): _211.MsgChannelOpenConfirm;
                    toProto(message: _211.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _211.MsgChannelOpenConfirm): _211.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _211.MsgChannelOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _211.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_211.MsgChannelOpenConfirmResponse>): _211.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _211.MsgChannelOpenConfirmResponseAmino): _211.MsgChannelOpenConfirmResponse;
                    toAmino(_: _211.MsgChannelOpenConfirmResponse): _211.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _211.MsgChannelOpenConfirmResponseAminoMsg): _211.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _211.MsgChannelOpenConfirmResponse): _211.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _211.MsgChannelOpenConfirmResponseProtoMsg): _211.MsgChannelOpenConfirmResponse;
                    toProto(message: _211.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _211.MsgChannelOpenConfirmResponse): _211.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    encode(message: _211.MsgChannelCloseInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _211.MsgChannelCloseInit;
                    fromPartial(object: Partial<_211.MsgChannelCloseInit>): _211.MsgChannelCloseInit;
                    fromAmino(object: _211.MsgChannelCloseInitAmino): _211.MsgChannelCloseInit;
                    toAmino(message: _211.MsgChannelCloseInit): _211.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _211.MsgChannelCloseInitAminoMsg): _211.MsgChannelCloseInit;
                    toAminoMsg(message: _211.MsgChannelCloseInit): _211.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _211.MsgChannelCloseInitProtoMsg): _211.MsgChannelCloseInit;
                    toProto(message: _211.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _211.MsgChannelCloseInit): _211.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    encode(_: _211.MsgChannelCloseInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _211.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_211.MsgChannelCloseInitResponse>): _211.MsgChannelCloseInitResponse;
                    fromAmino(_: _211.MsgChannelCloseInitResponseAmino): _211.MsgChannelCloseInitResponse;
                    toAmino(_: _211.MsgChannelCloseInitResponse): _211.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _211.MsgChannelCloseInitResponseAminoMsg): _211.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _211.MsgChannelCloseInitResponse): _211.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _211.MsgChannelCloseInitResponseProtoMsg): _211.MsgChannelCloseInitResponse;
                    toProto(message: _211.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _211.MsgChannelCloseInitResponse): _211.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    encode(message: _211.MsgChannelCloseConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _211.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_211.MsgChannelCloseConfirm>): _211.MsgChannelCloseConfirm;
                    fromAmino(object: _211.MsgChannelCloseConfirmAmino): _211.MsgChannelCloseConfirm;
                    toAmino(message: _211.MsgChannelCloseConfirm): _211.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _211.MsgChannelCloseConfirmAminoMsg): _211.MsgChannelCloseConfirm;
                    toAminoMsg(message: _211.MsgChannelCloseConfirm): _211.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _211.MsgChannelCloseConfirmProtoMsg): _211.MsgChannelCloseConfirm;
                    toProto(message: _211.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _211.MsgChannelCloseConfirm): _211.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    encode(_: _211.MsgChannelCloseConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _211.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_211.MsgChannelCloseConfirmResponse>): _211.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _211.MsgChannelCloseConfirmResponseAmino): _211.MsgChannelCloseConfirmResponse;
                    toAmino(_: _211.MsgChannelCloseConfirmResponse): _211.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _211.MsgChannelCloseConfirmResponseAminoMsg): _211.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _211.MsgChannelCloseConfirmResponse): _211.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _211.MsgChannelCloseConfirmResponseProtoMsg): _211.MsgChannelCloseConfirmResponse;
                    toProto(message: _211.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _211.MsgChannelCloseConfirmResponse): _211.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    encode(message: _211.MsgRecvPacket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _211.MsgRecvPacket;
                    fromPartial(object: Partial<_211.MsgRecvPacket>): _211.MsgRecvPacket;
                    fromAmino(object: _211.MsgRecvPacketAmino): _211.MsgRecvPacket;
                    toAmino(message: _211.MsgRecvPacket): _211.MsgRecvPacketAmino;
                    fromAminoMsg(object: _211.MsgRecvPacketAminoMsg): _211.MsgRecvPacket;
                    toAminoMsg(message: _211.MsgRecvPacket): _211.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _211.MsgRecvPacketProtoMsg): _211.MsgRecvPacket;
                    toProto(message: _211.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _211.MsgRecvPacket): _211.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    encode(message: _211.MsgRecvPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _211.MsgRecvPacketResponse;
                    fromPartial(object: Partial<_211.MsgRecvPacketResponse>): _211.MsgRecvPacketResponse;
                    fromAmino(object: _211.MsgRecvPacketResponseAmino): _211.MsgRecvPacketResponse;
                    toAmino(message: _211.MsgRecvPacketResponse): _211.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _211.MsgRecvPacketResponseAminoMsg): _211.MsgRecvPacketResponse;
                    toAminoMsg(message: _211.MsgRecvPacketResponse): _211.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _211.MsgRecvPacketResponseProtoMsg): _211.MsgRecvPacketResponse;
                    toProto(message: _211.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _211.MsgRecvPacketResponse): _211.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    encode(message: _211.MsgTimeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _211.MsgTimeout;
                    fromPartial(object: Partial<_211.MsgTimeout>): _211.MsgTimeout;
                    fromAmino(object: _211.MsgTimeoutAmino): _211.MsgTimeout;
                    toAmino(message: _211.MsgTimeout): _211.MsgTimeoutAmino;
                    fromAminoMsg(object: _211.MsgTimeoutAminoMsg): _211.MsgTimeout;
                    toAminoMsg(message: _211.MsgTimeout): _211.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _211.MsgTimeoutProtoMsg): _211.MsgTimeout;
                    toProto(message: _211.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _211.MsgTimeout): _211.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    encode(message: _211.MsgTimeoutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _211.MsgTimeoutResponse;
                    fromPartial(object: Partial<_211.MsgTimeoutResponse>): _211.MsgTimeoutResponse;
                    fromAmino(object: _211.MsgTimeoutResponseAmino): _211.MsgTimeoutResponse;
                    toAmino(message: _211.MsgTimeoutResponse): _211.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _211.MsgTimeoutResponseAminoMsg): _211.MsgTimeoutResponse;
                    toAminoMsg(message: _211.MsgTimeoutResponse): _211.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _211.MsgTimeoutResponseProtoMsg): _211.MsgTimeoutResponse;
                    toProto(message: _211.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _211.MsgTimeoutResponse): _211.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    encode(message: _211.MsgTimeoutOnClose, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _211.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_211.MsgTimeoutOnClose>): _211.MsgTimeoutOnClose;
                    fromAmino(object: _211.MsgTimeoutOnCloseAmino): _211.MsgTimeoutOnClose;
                    toAmino(message: _211.MsgTimeoutOnClose): _211.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _211.MsgTimeoutOnCloseAminoMsg): _211.MsgTimeoutOnClose;
                    toAminoMsg(message: _211.MsgTimeoutOnClose): _211.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _211.MsgTimeoutOnCloseProtoMsg): _211.MsgTimeoutOnClose;
                    toProto(message: _211.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _211.MsgTimeoutOnClose): _211.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    encode(message: _211.MsgTimeoutOnCloseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _211.MsgTimeoutOnCloseResponse;
                    fromPartial(object: Partial<_211.MsgTimeoutOnCloseResponse>): _211.MsgTimeoutOnCloseResponse;
                    fromAmino(object: _211.MsgTimeoutOnCloseResponseAmino): _211.MsgTimeoutOnCloseResponse;
                    toAmino(message: _211.MsgTimeoutOnCloseResponse): _211.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _211.MsgTimeoutOnCloseResponseAminoMsg): _211.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _211.MsgTimeoutOnCloseResponse): _211.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _211.MsgTimeoutOnCloseResponseProtoMsg): _211.MsgTimeoutOnCloseResponse;
                    toProto(message: _211.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _211.MsgTimeoutOnCloseResponse): _211.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    encode(message: _211.MsgAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _211.MsgAcknowledgement;
                    fromPartial(object: Partial<_211.MsgAcknowledgement>): _211.MsgAcknowledgement;
                    fromAmino(object: _211.MsgAcknowledgementAmino): _211.MsgAcknowledgement;
                    toAmino(message: _211.MsgAcknowledgement): _211.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _211.MsgAcknowledgementAminoMsg): _211.MsgAcknowledgement;
                    toAminoMsg(message: _211.MsgAcknowledgement): _211.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _211.MsgAcknowledgementProtoMsg): _211.MsgAcknowledgement;
                    toProto(message: _211.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _211.MsgAcknowledgement): _211.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _211.MsgAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _211.MsgAcknowledgementResponse;
                    fromPartial(object: Partial<_211.MsgAcknowledgementResponse>): _211.MsgAcknowledgementResponse;
                    fromAmino(object: _211.MsgAcknowledgementResponseAmino): _211.MsgAcknowledgementResponse;
                    toAmino(message: _211.MsgAcknowledgementResponse): _211.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _211.MsgAcknowledgementResponseAminoMsg): _211.MsgAcknowledgementResponse;
                    toAminoMsg(message: _211.MsgAcknowledgementResponse): _211.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _211.MsgAcknowledgementResponseProtoMsg): _211.MsgAcknowledgementResponse;
                    toProto(message: _211.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _211.MsgAcknowledgementResponse): _211.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    encode(message: _210.QueryChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _210.QueryChannelRequest;
                    fromPartial(object: Partial<_210.QueryChannelRequest>): _210.QueryChannelRequest;
                    fromAmino(object: _210.QueryChannelRequestAmino): _210.QueryChannelRequest;
                    toAmino(message: _210.QueryChannelRequest): _210.QueryChannelRequestAmino;
                    fromAminoMsg(object: _210.QueryChannelRequestAminoMsg): _210.QueryChannelRequest;
                    toAminoMsg(message: _210.QueryChannelRequest): _210.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _210.QueryChannelRequestProtoMsg): _210.QueryChannelRequest;
                    toProto(message: _210.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _210.QueryChannelRequest): _210.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    encode(message: _210.QueryChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _210.QueryChannelResponse;
                    fromPartial(object: Partial<_210.QueryChannelResponse>): _210.QueryChannelResponse;
                    fromAmino(object: _210.QueryChannelResponseAmino): _210.QueryChannelResponse;
                    toAmino(message: _210.QueryChannelResponse): _210.QueryChannelResponseAmino;
                    fromAminoMsg(object: _210.QueryChannelResponseAminoMsg): _210.QueryChannelResponse;
                    toAminoMsg(message: _210.QueryChannelResponse): _210.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _210.QueryChannelResponseProtoMsg): _210.QueryChannelResponse;
                    toProto(message: _210.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _210.QueryChannelResponse): _210.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    encode(message: _210.QueryChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _210.QueryChannelsRequest;
                    fromPartial(object: Partial<_210.QueryChannelsRequest>): _210.QueryChannelsRequest;
                    fromAmino(object: _210.QueryChannelsRequestAmino): _210.QueryChannelsRequest;
                    toAmino(message: _210.QueryChannelsRequest): _210.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _210.QueryChannelsRequestAminoMsg): _210.QueryChannelsRequest;
                    toAminoMsg(message: _210.QueryChannelsRequest): _210.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _210.QueryChannelsRequestProtoMsg): _210.QueryChannelsRequest;
                    toProto(message: _210.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _210.QueryChannelsRequest): _210.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    encode(message: _210.QueryChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _210.QueryChannelsResponse;
                    fromPartial(object: Partial<_210.QueryChannelsResponse>): _210.QueryChannelsResponse;
                    fromAmino(object: _210.QueryChannelsResponseAmino): _210.QueryChannelsResponse;
                    toAmino(message: _210.QueryChannelsResponse): _210.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _210.QueryChannelsResponseAminoMsg): _210.QueryChannelsResponse;
                    toAminoMsg(message: _210.QueryChannelsResponse): _210.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _210.QueryChannelsResponseProtoMsg): _210.QueryChannelsResponse;
                    toProto(message: _210.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _210.QueryChannelsResponse): _210.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    encode(message: _210.QueryConnectionChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _210.QueryConnectionChannelsRequest;
                    fromPartial(object: Partial<_210.QueryConnectionChannelsRequest>): _210.QueryConnectionChannelsRequest;
                    fromAmino(object: _210.QueryConnectionChannelsRequestAmino): _210.QueryConnectionChannelsRequest;
                    toAmino(message: _210.QueryConnectionChannelsRequest): _210.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _210.QueryConnectionChannelsRequestAminoMsg): _210.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _210.QueryConnectionChannelsRequest): _210.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _210.QueryConnectionChannelsRequestProtoMsg): _210.QueryConnectionChannelsRequest;
                    toProto(message: _210.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _210.QueryConnectionChannelsRequest): _210.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    encode(message: _210.QueryConnectionChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _210.QueryConnectionChannelsResponse;
                    fromPartial(object: Partial<_210.QueryConnectionChannelsResponse>): _210.QueryConnectionChannelsResponse;
                    fromAmino(object: _210.QueryConnectionChannelsResponseAmino): _210.QueryConnectionChannelsResponse;
                    toAmino(message: _210.QueryConnectionChannelsResponse): _210.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _210.QueryConnectionChannelsResponseAminoMsg): _210.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _210.QueryConnectionChannelsResponse): _210.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _210.QueryConnectionChannelsResponseProtoMsg): _210.QueryConnectionChannelsResponse;
                    toProto(message: _210.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _210.QueryConnectionChannelsResponse): _210.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    encode(message: _210.QueryChannelClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _210.QueryChannelClientStateRequest;
                    fromPartial(object: Partial<_210.QueryChannelClientStateRequest>): _210.QueryChannelClientStateRequest;
                    fromAmino(object: _210.QueryChannelClientStateRequestAmino): _210.QueryChannelClientStateRequest;
                    toAmino(message: _210.QueryChannelClientStateRequest): _210.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _210.QueryChannelClientStateRequestAminoMsg): _210.QueryChannelClientStateRequest;
                    toAminoMsg(message: _210.QueryChannelClientStateRequest): _210.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _210.QueryChannelClientStateRequestProtoMsg): _210.QueryChannelClientStateRequest;
                    toProto(message: _210.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _210.QueryChannelClientStateRequest): _210.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    encode(message: _210.QueryChannelClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _210.QueryChannelClientStateResponse;
                    fromPartial(object: Partial<_210.QueryChannelClientStateResponse>): _210.QueryChannelClientStateResponse;
                    fromAmino(object: _210.QueryChannelClientStateResponseAmino): _210.QueryChannelClientStateResponse;
                    toAmino(message: _210.QueryChannelClientStateResponse): _210.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _210.QueryChannelClientStateResponseAminoMsg): _210.QueryChannelClientStateResponse;
                    toAminoMsg(message: _210.QueryChannelClientStateResponse): _210.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _210.QueryChannelClientStateResponseProtoMsg): _210.QueryChannelClientStateResponse;
                    toProto(message: _210.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _210.QueryChannelClientStateResponse): _210.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _210.QueryChannelConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _210.QueryChannelConsensusStateRequest;
                    fromPartial(object: Partial<_210.QueryChannelConsensusStateRequest>): _210.QueryChannelConsensusStateRequest;
                    fromAmino(object: _210.QueryChannelConsensusStateRequestAmino): _210.QueryChannelConsensusStateRequest;
                    toAmino(message: _210.QueryChannelConsensusStateRequest): _210.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _210.QueryChannelConsensusStateRequestAminoMsg): _210.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _210.QueryChannelConsensusStateRequest): _210.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _210.QueryChannelConsensusStateRequestProtoMsg): _210.QueryChannelConsensusStateRequest;
                    toProto(message: _210.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _210.QueryChannelConsensusStateRequest): _210.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _210.QueryChannelConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _210.QueryChannelConsensusStateResponse;
                    fromPartial(object: Partial<_210.QueryChannelConsensusStateResponse>): _210.QueryChannelConsensusStateResponse;
                    fromAmino(object: _210.QueryChannelConsensusStateResponseAmino): _210.QueryChannelConsensusStateResponse;
                    toAmino(message: _210.QueryChannelConsensusStateResponse): _210.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _210.QueryChannelConsensusStateResponseAminoMsg): _210.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _210.QueryChannelConsensusStateResponse): _210.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _210.QueryChannelConsensusStateResponseProtoMsg): _210.QueryChannelConsensusStateResponse;
                    toProto(message: _210.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _210.QueryChannelConsensusStateResponse): _210.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    encode(message: _210.QueryPacketCommitmentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _210.QueryPacketCommitmentRequest;
                    fromPartial(object: Partial<_210.QueryPacketCommitmentRequest>): _210.QueryPacketCommitmentRequest;
                    fromAmino(object: _210.QueryPacketCommitmentRequestAmino): _210.QueryPacketCommitmentRequest;
                    toAmino(message: _210.QueryPacketCommitmentRequest): _210.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _210.QueryPacketCommitmentRequestAminoMsg): _210.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _210.QueryPacketCommitmentRequest): _210.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _210.QueryPacketCommitmentRequestProtoMsg): _210.QueryPacketCommitmentRequest;
                    toProto(message: _210.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _210.QueryPacketCommitmentRequest): _210.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    encode(message: _210.QueryPacketCommitmentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _210.QueryPacketCommitmentResponse;
                    fromPartial(object: Partial<_210.QueryPacketCommitmentResponse>): _210.QueryPacketCommitmentResponse;
                    fromAmino(object: _210.QueryPacketCommitmentResponseAmino): _210.QueryPacketCommitmentResponse;
                    toAmino(message: _210.QueryPacketCommitmentResponse): _210.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _210.QueryPacketCommitmentResponseAminoMsg): _210.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _210.QueryPacketCommitmentResponse): _210.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _210.QueryPacketCommitmentResponseProtoMsg): _210.QueryPacketCommitmentResponse;
                    toProto(message: _210.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _210.QueryPacketCommitmentResponse): _210.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    encode(message: _210.QueryPacketCommitmentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _210.QueryPacketCommitmentsRequest;
                    fromPartial(object: Partial<_210.QueryPacketCommitmentsRequest>): _210.QueryPacketCommitmentsRequest;
                    fromAmino(object: _210.QueryPacketCommitmentsRequestAmino): _210.QueryPacketCommitmentsRequest;
                    toAmino(message: _210.QueryPacketCommitmentsRequest): _210.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _210.QueryPacketCommitmentsRequestAminoMsg): _210.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _210.QueryPacketCommitmentsRequest): _210.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _210.QueryPacketCommitmentsRequestProtoMsg): _210.QueryPacketCommitmentsRequest;
                    toProto(message: _210.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _210.QueryPacketCommitmentsRequest): _210.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    encode(message: _210.QueryPacketCommitmentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _210.QueryPacketCommitmentsResponse;
                    fromPartial(object: Partial<_210.QueryPacketCommitmentsResponse>): _210.QueryPacketCommitmentsResponse;
                    fromAmino(object: _210.QueryPacketCommitmentsResponseAmino): _210.QueryPacketCommitmentsResponse;
                    toAmino(message: _210.QueryPacketCommitmentsResponse): _210.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _210.QueryPacketCommitmentsResponseAminoMsg): _210.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _210.QueryPacketCommitmentsResponse): _210.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _210.QueryPacketCommitmentsResponseProtoMsg): _210.QueryPacketCommitmentsResponse;
                    toProto(message: _210.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _210.QueryPacketCommitmentsResponse): _210.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    encode(message: _210.QueryPacketReceiptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _210.QueryPacketReceiptRequest;
                    fromPartial(object: Partial<_210.QueryPacketReceiptRequest>): _210.QueryPacketReceiptRequest;
                    fromAmino(object: _210.QueryPacketReceiptRequestAmino): _210.QueryPacketReceiptRequest;
                    toAmino(message: _210.QueryPacketReceiptRequest): _210.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _210.QueryPacketReceiptRequestAminoMsg): _210.QueryPacketReceiptRequest;
                    toAminoMsg(message: _210.QueryPacketReceiptRequest): _210.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _210.QueryPacketReceiptRequestProtoMsg): _210.QueryPacketReceiptRequest;
                    toProto(message: _210.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _210.QueryPacketReceiptRequest): _210.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    encode(message: _210.QueryPacketReceiptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _210.QueryPacketReceiptResponse;
                    fromPartial(object: Partial<_210.QueryPacketReceiptResponse>): _210.QueryPacketReceiptResponse;
                    fromAmino(object: _210.QueryPacketReceiptResponseAmino): _210.QueryPacketReceiptResponse;
                    toAmino(message: _210.QueryPacketReceiptResponse): _210.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _210.QueryPacketReceiptResponseAminoMsg): _210.QueryPacketReceiptResponse;
                    toAminoMsg(message: _210.QueryPacketReceiptResponse): _210.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _210.QueryPacketReceiptResponseProtoMsg): _210.QueryPacketReceiptResponse;
                    toProto(message: _210.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _210.QueryPacketReceiptResponse): _210.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    encode(message: _210.QueryPacketAcknowledgementRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _210.QueryPacketAcknowledgementRequest;
                    fromPartial(object: Partial<_210.QueryPacketAcknowledgementRequest>): _210.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _210.QueryPacketAcknowledgementRequestAmino): _210.QueryPacketAcknowledgementRequest;
                    toAmino(message: _210.QueryPacketAcknowledgementRequest): _210.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _210.QueryPacketAcknowledgementRequestAminoMsg): _210.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _210.QueryPacketAcknowledgementRequest): _210.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _210.QueryPacketAcknowledgementRequestProtoMsg): _210.QueryPacketAcknowledgementRequest;
                    toProto(message: _210.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _210.QueryPacketAcknowledgementRequest): _210.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _210.QueryPacketAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _210.QueryPacketAcknowledgementResponse;
                    fromPartial(object: Partial<_210.QueryPacketAcknowledgementResponse>): _210.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _210.QueryPacketAcknowledgementResponseAmino): _210.QueryPacketAcknowledgementResponse;
                    toAmino(message: _210.QueryPacketAcknowledgementResponse): _210.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _210.QueryPacketAcknowledgementResponseAminoMsg): _210.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _210.QueryPacketAcknowledgementResponse): _210.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _210.QueryPacketAcknowledgementResponseProtoMsg): _210.QueryPacketAcknowledgementResponse;
                    toProto(message: _210.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _210.QueryPacketAcknowledgementResponse): _210.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    encode(message: _210.QueryPacketAcknowledgementsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _210.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: Partial<_210.QueryPacketAcknowledgementsRequest>): _210.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _210.QueryPacketAcknowledgementsRequestAmino): _210.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _210.QueryPacketAcknowledgementsRequest): _210.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _210.QueryPacketAcknowledgementsRequestAminoMsg): _210.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _210.QueryPacketAcknowledgementsRequest): _210.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _210.QueryPacketAcknowledgementsRequestProtoMsg): _210.QueryPacketAcknowledgementsRequest;
                    toProto(message: _210.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _210.QueryPacketAcknowledgementsRequest): _210.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    encode(message: _210.QueryPacketAcknowledgementsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _210.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: Partial<_210.QueryPacketAcknowledgementsResponse>): _210.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _210.QueryPacketAcknowledgementsResponseAmino): _210.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _210.QueryPacketAcknowledgementsResponse): _210.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _210.QueryPacketAcknowledgementsResponseAminoMsg): _210.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _210.QueryPacketAcknowledgementsResponse): _210.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _210.QueryPacketAcknowledgementsResponseProtoMsg): _210.QueryPacketAcknowledgementsResponse;
                    toProto(message: _210.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _210.QueryPacketAcknowledgementsResponse): _210.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _210.QueryUnreceivedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _210.QueryUnreceivedPacketsRequest;
                    fromPartial(object: Partial<_210.QueryUnreceivedPacketsRequest>): _210.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _210.QueryUnreceivedPacketsRequestAmino): _210.QueryUnreceivedPacketsRequest;
                    toAmino(message: _210.QueryUnreceivedPacketsRequest): _210.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _210.QueryUnreceivedPacketsRequestAminoMsg): _210.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _210.QueryUnreceivedPacketsRequest): _210.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _210.QueryUnreceivedPacketsRequestProtoMsg): _210.QueryUnreceivedPacketsRequest;
                    toProto(message: _210.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _210.QueryUnreceivedPacketsRequest): _210.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _210.QueryUnreceivedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _210.QueryUnreceivedPacketsResponse;
                    fromPartial(object: Partial<_210.QueryUnreceivedPacketsResponse>): _210.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _210.QueryUnreceivedPacketsResponseAmino): _210.QueryUnreceivedPacketsResponse;
                    toAmino(message: _210.QueryUnreceivedPacketsResponse): _210.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _210.QueryUnreceivedPacketsResponseAminoMsg): _210.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _210.QueryUnreceivedPacketsResponse): _210.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _210.QueryUnreceivedPacketsResponseProtoMsg): _210.QueryUnreceivedPacketsResponse;
                    toProto(message: _210.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _210.QueryUnreceivedPacketsResponse): _210.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    encode(message: _210.QueryUnreceivedAcksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _210.QueryUnreceivedAcksRequest;
                    fromPartial(object: Partial<_210.QueryUnreceivedAcksRequest>): _210.QueryUnreceivedAcksRequest;
                    fromAmino(object: _210.QueryUnreceivedAcksRequestAmino): _210.QueryUnreceivedAcksRequest;
                    toAmino(message: _210.QueryUnreceivedAcksRequest): _210.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _210.QueryUnreceivedAcksRequestAminoMsg): _210.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _210.QueryUnreceivedAcksRequest): _210.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _210.QueryUnreceivedAcksRequestProtoMsg): _210.QueryUnreceivedAcksRequest;
                    toProto(message: _210.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _210.QueryUnreceivedAcksRequest): _210.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    encode(message: _210.QueryUnreceivedAcksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _210.QueryUnreceivedAcksResponse;
                    fromPartial(object: Partial<_210.QueryUnreceivedAcksResponse>): _210.QueryUnreceivedAcksResponse;
                    fromAmino(object: _210.QueryUnreceivedAcksResponseAmino): _210.QueryUnreceivedAcksResponse;
                    toAmino(message: _210.QueryUnreceivedAcksResponse): _210.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _210.QueryUnreceivedAcksResponseAminoMsg): _210.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _210.QueryUnreceivedAcksResponse): _210.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _210.QueryUnreceivedAcksResponseProtoMsg): _210.QueryUnreceivedAcksResponse;
                    toProto(message: _210.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _210.QueryUnreceivedAcksResponse): _210.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    encode(message: _210.QueryNextSequenceReceiveRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _210.QueryNextSequenceReceiveRequest;
                    fromPartial(object: Partial<_210.QueryNextSequenceReceiveRequest>): _210.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _210.QueryNextSequenceReceiveRequestAmino): _210.QueryNextSequenceReceiveRequest;
                    toAmino(message: _210.QueryNextSequenceReceiveRequest): _210.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _210.QueryNextSequenceReceiveRequestAminoMsg): _210.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _210.QueryNextSequenceReceiveRequest): _210.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _210.QueryNextSequenceReceiveRequestProtoMsg): _210.QueryNextSequenceReceiveRequest;
                    toProto(message: _210.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _210.QueryNextSequenceReceiveRequest): _210.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    encode(message: _210.QueryNextSequenceReceiveResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _210.QueryNextSequenceReceiveResponse;
                    fromPartial(object: Partial<_210.QueryNextSequenceReceiveResponse>): _210.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _210.QueryNextSequenceReceiveResponseAmino): _210.QueryNextSequenceReceiveResponse;
                    toAmino(message: _210.QueryNextSequenceReceiveResponse): _210.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _210.QueryNextSequenceReceiveResponseAminoMsg): _210.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _210.QueryNextSequenceReceiveResponse): _210.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _210.QueryNextSequenceReceiveResponseProtoMsg): _210.QueryNextSequenceReceiveResponse;
                    toProto(message: _210.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _210.QueryNextSequenceReceiveResponse): _210.QueryNextSequenceReceiveResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _209.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _209.GenesisState;
                    fromPartial(object: Partial<_209.GenesisState>): _209.GenesisState;
                    fromAmino(object: _209.GenesisStateAmino): _209.GenesisState;
                    toAmino(message: _209.GenesisState): _209.GenesisStateAmino;
                    fromAminoMsg(object: _209.GenesisStateAminoMsg): _209.GenesisState;
                    toAminoMsg(message: _209.GenesisState): _209.GenesisStateAminoMsg;
                    fromProtoMsg(message: _209.GenesisStateProtoMsg): _209.GenesisState;
                    toProto(message: _209.GenesisState): Uint8Array;
                    toProtoMsg(message: _209.GenesisState): _209.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    typeUrl: string;
                    encode(message: _209.PacketSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _209.PacketSequence;
                    fromPartial(object: Partial<_209.PacketSequence>): _209.PacketSequence;
                    fromAmino(object: _209.PacketSequenceAmino): _209.PacketSequence;
                    toAmino(message: _209.PacketSequence): _209.PacketSequenceAmino;
                    fromAminoMsg(object: _209.PacketSequenceAminoMsg): _209.PacketSequence;
                    toAminoMsg(message: _209.PacketSequence): _209.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _209.PacketSequenceProtoMsg): _209.PacketSequence;
                    toProto(message: _209.PacketSequence): Uint8Array;
                    toProtoMsg(message: _209.PacketSequence): _209.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _208.State;
                stateToJSON(object: _208.State): string;
                orderFromJSON(object: any): _208.Order;
                orderToJSON(object: _208.Order): string;
                State: typeof _208.State;
                StateSDKType: typeof _208.State;
                StateAmino: typeof _208.State;
                Order: typeof _208.Order;
                OrderSDKType: typeof _208.Order;
                OrderAmino: typeof _208.Order;
                Channel: {
                    typeUrl: string;
                    encode(message: _208.Channel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _208.Channel;
                    fromPartial(object: Partial<_208.Channel>): _208.Channel;
                    fromAmino(object: _208.ChannelAmino): _208.Channel;
                    toAmino(message: _208.Channel): _208.ChannelAmino;
                    fromAminoMsg(object: _208.ChannelAminoMsg): _208.Channel;
                    toAminoMsg(message: _208.Channel): _208.ChannelAminoMsg;
                    fromProtoMsg(message: _208.ChannelProtoMsg): _208.Channel;
                    toProto(message: _208.Channel): Uint8Array;
                    toProtoMsg(message: _208.Channel): _208.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    encode(message: _208.IdentifiedChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _208.IdentifiedChannel;
                    fromPartial(object: Partial<_208.IdentifiedChannel>): _208.IdentifiedChannel;
                    fromAmino(object: _208.IdentifiedChannelAmino): _208.IdentifiedChannel;
                    toAmino(message: _208.IdentifiedChannel): _208.IdentifiedChannelAmino;
                    fromAminoMsg(object: _208.IdentifiedChannelAminoMsg): _208.IdentifiedChannel;
                    toAminoMsg(message: _208.IdentifiedChannel): _208.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _208.IdentifiedChannelProtoMsg): _208.IdentifiedChannel;
                    toProto(message: _208.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _208.IdentifiedChannel): _208.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _208.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _208.Counterparty;
                    fromPartial(object: Partial<_208.Counterparty>): _208.Counterparty;
                    fromAmino(object: _208.CounterpartyAmino): _208.Counterparty;
                    toAmino(message: _208.Counterparty): _208.CounterpartyAmino;
                    fromAminoMsg(object: _208.CounterpartyAminoMsg): _208.Counterparty;
                    toAminoMsg(message: _208.Counterparty): _208.CounterpartyAminoMsg;
                    fromProtoMsg(message: _208.CounterpartyProtoMsg): _208.Counterparty;
                    toProto(message: _208.Counterparty): Uint8Array;
                    toProtoMsg(message: _208.Counterparty): _208.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    encode(message: _208.Packet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _208.Packet;
                    fromPartial(object: Partial<_208.Packet>): _208.Packet;
                    fromAmino(object: _208.PacketAmino): _208.Packet;
                    toAmino(message: _208.Packet): _208.PacketAmino;
                    fromAminoMsg(object: _208.PacketAminoMsg): _208.Packet;
                    toAminoMsg(message: _208.Packet): _208.PacketAminoMsg;
                    fromProtoMsg(message: _208.PacketProtoMsg): _208.Packet;
                    toProto(message: _208.Packet): Uint8Array;
                    toProtoMsg(message: _208.Packet): _208.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    encode(message: _208.PacketState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _208.PacketState;
                    fromPartial(object: Partial<_208.PacketState>): _208.PacketState;
                    fromAmino(object: _208.PacketStateAmino): _208.PacketState;
                    toAmino(message: _208.PacketState): _208.PacketStateAmino;
                    fromAminoMsg(object: _208.PacketStateAminoMsg): _208.PacketState;
                    toAminoMsg(message: _208.PacketState): _208.PacketStateAminoMsg;
                    fromProtoMsg(message: _208.PacketStateProtoMsg): _208.PacketState;
                    toProto(message: _208.PacketState): Uint8Array;
                    toProtoMsg(message: _208.PacketState): _208.PacketStateProtoMsg;
                };
                PacketId: {
                    typeUrl: string;
                    encode(message: _208.PacketId, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _208.PacketId;
                    fromPartial(object: Partial<_208.PacketId>): _208.PacketId;
                    fromAmino(object: _208.PacketIdAmino): _208.PacketId;
                    toAmino(message: _208.PacketId): _208.PacketIdAmino;
                    fromAminoMsg(object: _208.PacketIdAminoMsg): _208.PacketId;
                    toAminoMsg(message: _208.PacketId): _208.PacketIdAminoMsg;
                    fromProtoMsg(message: _208.PacketIdProtoMsg): _208.PacketId;
                    toProto(message: _208.PacketId): Uint8Array;
                    toProtoMsg(message: _208.PacketId): _208.PacketIdProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    encode(message: _208.Acknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _208.Acknowledgement;
                    fromPartial(object: Partial<_208.Acknowledgement>): _208.Acknowledgement;
                    fromAmino(object: _208.AcknowledgementAmino): _208.Acknowledgement;
                    toAmino(message: _208.Acknowledgement): _208.AcknowledgementAmino;
                    fromAminoMsg(object: _208.AcknowledgementAminoMsg): _208.Acknowledgement;
                    toAminoMsg(message: _208.Acknowledgement): _208.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _208.AcknowledgementProtoMsg): _208.Acknowledgement;
                    toProto(message: _208.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _208.Acknowledgement): _208.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _408.MsgClientImpl;
                QueryClientImpl: typeof _402.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _214.QueryClientStateRequest): Promise<_214.QueryClientStateResponse>;
                    clientStates(request?: _214.QueryClientStatesRequest): Promise<_214.QueryClientStatesResponse>;
                    consensusState(request: _214.QueryConsensusStateRequest): Promise<_214.QueryConsensusStateResponse>;
                    consensusStates(request: _214.QueryConsensusStatesRequest): Promise<_214.QueryConsensusStatesResponse>;
                    consensusStateHeights(request: _214.QueryConsensusStateHeightsRequest): Promise<_214.QueryConsensusStateHeightsResponse>;
                    clientStatus(request: _214.QueryClientStatusRequest): Promise<_214.QueryClientStatusResponse>;
                    clientParams(request?: _214.QueryClientParamsRequest): Promise<_214.QueryClientParamsResponse>;
                    upgradedClientState(request?: _214.QueryUpgradedClientStateRequest): Promise<_214.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _214.QueryUpgradedConsensusStateRequest): Promise<_214.QueryUpgradedConsensusStateResponse>;
                };
                LCDQueryClient: typeof _395.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _215.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _215.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _215.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _215.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _215.MsgCreateClient): {
                            typeUrl: string;
                            value: _215.MsgCreateClient;
                        };
                        updateClient(value: _215.MsgUpdateClient): {
                            typeUrl: string;
                            value: _215.MsgUpdateClient;
                        };
                        upgradeClient(value: _215.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _215.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _215.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _215.MsgSubmitMisbehaviour;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _215.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _215.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _215.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _215.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _215.MsgCreateClient): {
                            typeUrl: string;
                            value: _215.MsgCreateClient;
                        };
                        updateClient(value: _215.MsgUpdateClient): {
                            typeUrl: string;
                            value: _215.MsgUpdateClient;
                        };
                        upgradeClient(value: _215.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _215.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _215.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _215.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _215.MsgCreateClient) => _215.MsgCreateClientAmino;
                        fromAmino: (object: _215.MsgCreateClientAmino) => _215.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _215.MsgUpdateClient) => _215.MsgUpdateClientAmino;
                        fromAmino: (object: _215.MsgUpdateClientAmino) => _215.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _215.MsgUpgradeClient) => _215.MsgUpgradeClientAmino;
                        fromAmino: (object: _215.MsgUpgradeClientAmino) => _215.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _215.MsgSubmitMisbehaviour) => _215.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _215.MsgSubmitMisbehaviourAmino) => _215.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    encode(message: _215.MsgCreateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _215.MsgCreateClient;
                    fromPartial(object: Partial<_215.MsgCreateClient>): _215.MsgCreateClient;
                    fromAmino(object: _215.MsgCreateClientAmino): _215.MsgCreateClient;
                    toAmino(message: _215.MsgCreateClient): _215.MsgCreateClientAmino;
                    fromAminoMsg(object: _215.MsgCreateClientAminoMsg): _215.MsgCreateClient;
                    toAminoMsg(message: _215.MsgCreateClient): _215.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _215.MsgCreateClientProtoMsg): _215.MsgCreateClient;
                    toProto(message: _215.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _215.MsgCreateClient): _215.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    encode(_: _215.MsgCreateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _215.MsgCreateClientResponse;
                    fromPartial(_: Partial<_215.MsgCreateClientResponse>): _215.MsgCreateClientResponse;
                    fromAmino(_: _215.MsgCreateClientResponseAmino): _215.MsgCreateClientResponse;
                    toAmino(_: _215.MsgCreateClientResponse): _215.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _215.MsgCreateClientResponseAminoMsg): _215.MsgCreateClientResponse;
                    toAminoMsg(message: _215.MsgCreateClientResponse): _215.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _215.MsgCreateClientResponseProtoMsg): _215.MsgCreateClientResponse;
                    toProto(message: _215.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _215.MsgCreateClientResponse): _215.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    encode(message: _215.MsgUpdateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _215.MsgUpdateClient;
                    fromPartial(object: Partial<_215.MsgUpdateClient>): _215.MsgUpdateClient;
                    fromAmino(object: _215.MsgUpdateClientAmino): _215.MsgUpdateClient;
                    toAmino(message: _215.MsgUpdateClient): _215.MsgUpdateClientAmino;
                    fromAminoMsg(object: _215.MsgUpdateClientAminoMsg): _215.MsgUpdateClient;
                    toAminoMsg(message: _215.MsgUpdateClient): _215.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _215.MsgUpdateClientProtoMsg): _215.MsgUpdateClient;
                    toProto(message: _215.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _215.MsgUpdateClient): _215.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    encode(_: _215.MsgUpdateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _215.MsgUpdateClientResponse;
                    fromPartial(_: Partial<_215.MsgUpdateClientResponse>): _215.MsgUpdateClientResponse;
                    fromAmino(_: _215.MsgUpdateClientResponseAmino): _215.MsgUpdateClientResponse;
                    toAmino(_: _215.MsgUpdateClientResponse): _215.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _215.MsgUpdateClientResponseAminoMsg): _215.MsgUpdateClientResponse;
                    toAminoMsg(message: _215.MsgUpdateClientResponse): _215.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _215.MsgUpdateClientResponseProtoMsg): _215.MsgUpdateClientResponse;
                    toProto(message: _215.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _215.MsgUpdateClientResponse): _215.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    encode(message: _215.MsgUpgradeClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _215.MsgUpgradeClient;
                    fromPartial(object: Partial<_215.MsgUpgradeClient>): _215.MsgUpgradeClient;
                    fromAmino(object: _215.MsgUpgradeClientAmino): _215.MsgUpgradeClient;
                    toAmino(message: _215.MsgUpgradeClient): _215.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _215.MsgUpgradeClientAminoMsg): _215.MsgUpgradeClient;
                    toAminoMsg(message: _215.MsgUpgradeClient): _215.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _215.MsgUpgradeClientProtoMsg): _215.MsgUpgradeClient;
                    toProto(message: _215.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _215.MsgUpgradeClient): _215.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    encode(_: _215.MsgUpgradeClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _215.MsgUpgradeClientResponse;
                    fromPartial(_: Partial<_215.MsgUpgradeClientResponse>): _215.MsgUpgradeClientResponse;
                    fromAmino(_: _215.MsgUpgradeClientResponseAmino): _215.MsgUpgradeClientResponse;
                    toAmino(_: _215.MsgUpgradeClientResponse): _215.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _215.MsgUpgradeClientResponseAminoMsg): _215.MsgUpgradeClientResponse;
                    toAminoMsg(message: _215.MsgUpgradeClientResponse): _215.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _215.MsgUpgradeClientResponseProtoMsg): _215.MsgUpgradeClientResponse;
                    toProto(message: _215.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _215.MsgUpgradeClientResponse): _215.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    encode(message: _215.MsgSubmitMisbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _215.MsgSubmitMisbehaviour;
                    fromPartial(object: Partial<_215.MsgSubmitMisbehaviour>): _215.MsgSubmitMisbehaviour;
                    fromAmino(object: _215.MsgSubmitMisbehaviourAmino): _215.MsgSubmitMisbehaviour;
                    toAmino(message: _215.MsgSubmitMisbehaviour): _215.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _215.MsgSubmitMisbehaviourAminoMsg): _215.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _215.MsgSubmitMisbehaviour): _215.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _215.MsgSubmitMisbehaviourProtoMsg): _215.MsgSubmitMisbehaviour;
                    toProto(message: _215.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _215.MsgSubmitMisbehaviour): _215.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    encode(_: _215.MsgSubmitMisbehaviourResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _215.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: Partial<_215.MsgSubmitMisbehaviourResponse>): _215.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _215.MsgSubmitMisbehaviourResponseAmino): _215.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _215.MsgSubmitMisbehaviourResponse): _215.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _215.MsgSubmitMisbehaviourResponseAminoMsg): _215.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _215.MsgSubmitMisbehaviourResponse): _215.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _215.MsgSubmitMisbehaviourResponseProtoMsg): _215.MsgSubmitMisbehaviourResponse;
                    toProto(message: _215.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _215.MsgSubmitMisbehaviourResponse): _215.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    encode(message: _214.QueryClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _214.QueryClientStateRequest;
                    fromPartial(object: Partial<_214.QueryClientStateRequest>): _214.QueryClientStateRequest;
                    fromAmino(object: _214.QueryClientStateRequestAmino): _214.QueryClientStateRequest;
                    toAmino(message: _214.QueryClientStateRequest): _214.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _214.QueryClientStateRequestAminoMsg): _214.QueryClientStateRequest;
                    toAminoMsg(message: _214.QueryClientStateRequest): _214.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _214.QueryClientStateRequestProtoMsg): _214.QueryClientStateRequest;
                    toProto(message: _214.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _214.QueryClientStateRequest): _214.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    encode(message: _214.QueryClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _214.QueryClientStateResponse;
                    fromPartial(object: Partial<_214.QueryClientStateResponse>): _214.QueryClientStateResponse;
                    fromAmino(object: _214.QueryClientStateResponseAmino): _214.QueryClientStateResponse;
                    toAmino(message: _214.QueryClientStateResponse): _214.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _214.QueryClientStateResponseAminoMsg): _214.QueryClientStateResponse;
                    toAminoMsg(message: _214.QueryClientStateResponse): _214.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _214.QueryClientStateResponseProtoMsg): _214.QueryClientStateResponse;
                    toProto(message: _214.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _214.QueryClientStateResponse): _214.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    encode(message: _214.QueryClientStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _214.QueryClientStatesRequest;
                    fromPartial(object: Partial<_214.QueryClientStatesRequest>): _214.QueryClientStatesRequest;
                    fromAmino(object: _214.QueryClientStatesRequestAmino): _214.QueryClientStatesRequest;
                    toAmino(message: _214.QueryClientStatesRequest): _214.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _214.QueryClientStatesRequestAminoMsg): _214.QueryClientStatesRequest;
                    toAminoMsg(message: _214.QueryClientStatesRequest): _214.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _214.QueryClientStatesRequestProtoMsg): _214.QueryClientStatesRequest;
                    toProto(message: _214.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _214.QueryClientStatesRequest): _214.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    encode(message: _214.QueryClientStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _214.QueryClientStatesResponse;
                    fromPartial(object: Partial<_214.QueryClientStatesResponse>): _214.QueryClientStatesResponse;
                    fromAmino(object: _214.QueryClientStatesResponseAmino): _214.QueryClientStatesResponse;
                    toAmino(message: _214.QueryClientStatesResponse): _214.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _214.QueryClientStatesResponseAminoMsg): _214.QueryClientStatesResponse;
                    toAminoMsg(message: _214.QueryClientStatesResponse): _214.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _214.QueryClientStatesResponseProtoMsg): _214.QueryClientStatesResponse;
                    toProto(message: _214.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _214.QueryClientStatesResponse): _214.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _214.QueryConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _214.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_214.QueryConsensusStateRequest>): _214.QueryConsensusStateRequest;
                    fromAmino(object: _214.QueryConsensusStateRequestAmino): _214.QueryConsensusStateRequest;
                    toAmino(message: _214.QueryConsensusStateRequest): _214.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _214.QueryConsensusStateRequestAminoMsg): _214.QueryConsensusStateRequest;
                    toAminoMsg(message: _214.QueryConsensusStateRequest): _214.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _214.QueryConsensusStateRequestProtoMsg): _214.QueryConsensusStateRequest;
                    toProto(message: _214.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _214.QueryConsensusStateRequest): _214.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _214.QueryConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _214.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_214.QueryConsensusStateResponse>): _214.QueryConsensusStateResponse;
                    fromAmino(object: _214.QueryConsensusStateResponseAmino): _214.QueryConsensusStateResponse;
                    toAmino(message: _214.QueryConsensusStateResponse): _214.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _214.QueryConsensusStateResponseAminoMsg): _214.QueryConsensusStateResponse;
                    toAminoMsg(message: _214.QueryConsensusStateResponse): _214.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _214.QueryConsensusStateResponseProtoMsg): _214.QueryConsensusStateResponse;
                    toProto(message: _214.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _214.QueryConsensusStateResponse): _214.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    encode(message: _214.QueryConsensusStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _214.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_214.QueryConsensusStatesRequest>): _214.QueryConsensusStatesRequest;
                    fromAmino(object: _214.QueryConsensusStatesRequestAmino): _214.QueryConsensusStatesRequest;
                    toAmino(message: _214.QueryConsensusStatesRequest): _214.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _214.QueryConsensusStatesRequestAminoMsg): _214.QueryConsensusStatesRequest;
                    toAminoMsg(message: _214.QueryConsensusStatesRequest): _214.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _214.QueryConsensusStatesRequestProtoMsg): _214.QueryConsensusStatesRequest;
                    toProto(message: _214.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _214.QueryConsensusStatesRequest): _214.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    encode(message: _214.QueryConsensusStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _214.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_214.QueryConsensusStatesResponse>): _214.QueryConsensusStatesResponse;
                    fromAmino(object: _214.QueryConsensusStatesResponseAmino): _214.QueryConsensusStatesResponse;
                    toAmino(message: _214.QueryConsensusStatesResponse): _214.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _214.QueryConsensusStatesResponseAminoMsg): _214.QueryConsensusStatesResponse;
                    toAminoMsg(message: _214.QueryConsensusStatesResponse): _214.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _214.QueryConsensusStatesResponseProtoMsg): _214.QueryConsensusStatesResponse;
                    toProto(message: _214.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _214.QueryConsensusStatesResponse): _214.QueryConsensusStatesResponseProtoMsg;
                };
                QueryConsensusStateHeightsRequest: {
                    typeUrl: string;
                    encode(message: _214.QueryConsensusStateHeightsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _214.QueryConsensusStateHeightsRequest;
                    fromPartial(object: Partial<_214.QueryConsensusStateHeightsRequest>): _214.QueryConsensusStateHeightsRequest;
                    fromAmino(object: _214.QueryConsensusStateHeightsRequestAmino): _214.QueryConsensusStateHeightsRequest;
                    toAmino(message: _214.QueryConsensusStateHeightsRequest): _214.QueryConsensusStateHeightsRequestAmino;
                    fromAminoMsg(object: _214.QueryConsensusStateHeightsRequestAminoMsg): _214.QueryConsensusStateHeightsRequest;
                    toAminoMsg(message: _214.QueryConsensusStateHeightsRequest): _214.QueryConsensusStateHeightsRequestAminoMsg;
                    fromProtoMsg(message: _214.QueryConsensusStateHeightsRequestProtoMsg): _214.QueryConsensusStateHeightsRequest;
                    toProto(message: _214.QueryConsensusStateHeightsRequest): Uint8Array;
                    toProtoMsg(message: _214.QueryConsensusStateHeightsRequest): _214.QueryConsensusStateHeightsRequestProtoMsg;
                };
                QueryConsensusStateHeightsResponse: {
                    typeUrl: string;
                    encode(message: _214.QueryConsensusStateHeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _214.QueryConsensusStateHeightsResponse;
                    fromPartial(object: Partial<_214.QueryConsensusStateHeightsResponse>): _214.QueryConsensusStateHeightsResponse;
                    fromAmino(object: _214.QueryConsensusStateHeightsResponseAmino): _214.QueryConsensusStateHeightsResponse;
                    toAmino(message: _214.QueryConsensusStateHeightsResponse): _214.QueryConsensusStateHeightsResponseAmino;
                    fromAminoMsg(object: _214.QueryConsensusStateHeightsResponseAminoMsg): _214.QueryConsensusStateHeightsResponse;
                    toAminoMsg(message: _214.QueryConsensusStateHeightsResponse): _214.QueryConsensusStateHeightsResponseAminoMsg;
                    fromProtoMsg(message: _214.QueryConsensusStateHeightsResponseProtoMsg): _214.QueryConsensusStateHeightsResponse;
                    toProto(message: _214.QueryConsensusStateHeightsResponse): Uint8Array;
                    toProtoMsg(message: _214.QueryConsensusStateHeightsResponse): _214.QueryConsensusStateHeightsResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    encode(message: _214.QueryClientStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _214.QueryClientStatusRequest;
                    fromPartial(object: Partial<_214.QueryClientStatusRequest>): _214.QueryClientStatusRequest;
                    fromAmino(object: _214.QueryClientStatusRequestAmino): _214.QueryClientStatusRequest;
                    toAmino(message: _214.QueryClientStatusRequest): _214.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _214.QueryClientStatusRequestAminoMsg): _214.QueryClientStatusRequest;
                    toAminoMsg(message: _214.QueryClientStatusRequest): _214.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _214.QueryClientStatusRequestProtoMsg): _214.QueryClientStatusRequest;
                    toProto(message: _214.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _214.QueryClientStatusRequest): _214.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    encode(message: _214.QueryClientStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _214.QueryClientStatusResponse;
                    fromPartial(object: Partial<_214.QueryClientStatusResponse>): _214.QueryClientStatusResponse;
                    fromAmino(object: _214.QueryClientStatusResponseAmino): _214.QueryClientStatusResponse;
                    toAmino(message: _214.QueryClientStatusResponse): _214.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _214.QueryClientStatusResponseAminoMsg): _214.QueryClientStatusResponse;
                    toAminoMsg(message: _214.QueryClientStatusResponse): _214.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _214.QueryClientStatusResponseProtoMsg): _214.QueryClientStatusResponse;
                    toProto(message: _214.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _214.QueryClientStatusResponse): _214.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    encode(_: _214.QueryClientParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _214.QueryClientParamsRequest;
                    fromPartial(_: Partial<_214.QueryClientParamsRequest>): _214.QueryClientParamsRequest;
                    fromAmino(_: _214.QueryClientParamsRequestAmino): _214.QueryClientParamsRequest;
                    toAmino(_: _214.QueryClientParamsRequest): _214.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _214.QueryClientParamsRequestAminoMsg): _214.QueryClientParamsRequest;
                    toAminoMsg(message: _214.QueryClientParamsRequest): _214.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _214.QueryClientParamsRequestProtoMsg): _214.QueryClientParamsRequest;
                    toProto(message: _214.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _214.QueryClientParamsRequest): _214.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    encode(message: _214.QueryClientParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _214.QueryClientParamsResponse;
                    fromPartial(object: Partial<_214.QueryClientParamsResponse>): _214.QueryClientParamsResponse;
                    fromAmino(object: _214.QueryClientParamsResponseAmino): _214.QueryClientParamsResponse;
                    toAmino(message: _214.QueryClientParamsResponse): _214.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _214.QueryClientParamsResponseAminoMsg): _214.QueryClientParamsResponse;
                    toAminoMsg(message: _214.QueryClientParamsResponse): _214.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _214.QueryClientParamsResponseProtoMsg): _214.QueryClientParamsResponse;
                    toProto(message: _214.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _214.QueryClientParamsResponse): _214.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    encode(_: _214.QueryUpgradedClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _214.QueryUpgradedClientStateRequest;
                    fromPartial(_: Partial<_214.QueryUpgradedClientStateRequest>): _214.QueryUpgradedClientStateRequest;
                    fromAmino(_: _214.QueryUpgradedClientStateRequestAmino): _214.QueryUpgradedClientStateRequest;
                    toAmino(_: _214.QueryUpgradedClientStateRequest): _214.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _214.QueryUpgradedClientStateRequestAminoMsg): _214.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _214.QueryUpgradedClientStateRequest): _214.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _214.QueryUpgradedClientStateRequestProtoMsg): _214.QueryUpgradedClientStateRequest;
                    toProto(message: _214.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _214.QueryUpgradedClientStateRequest): _214.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    encode(message: _214.QueryUpgradedClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _214.QueryUpgradedClientStateResponse;
                    fromPartial(object: Partial<_214.QueryUpgradedClientStateResponse>): _214.QueryUpgradedClientStateResponse;
                    fromAmino(object: _214.QueryUpgradedClientStateResponseAmino): _214.QueryUpgradedClientStateResponse;
                    toAmino(message: _214.QueryUpgradedClientStateResponse): _214.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _214.QueryUpgradedClientStateResponseAminoMsg): _214.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _214.QueryUpgradedClientStateResponse): _214.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _214.QueryUpgradedClientStateResponseProtoMsg): _214.QueryUpgradedClientStateResponse;
                    toProto(message: _214.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _214.QueryUpgradedClientStateResponse): _214.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    encode(_: _214.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _214.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: Partial<_214.QueryUpgradedConsensusStateRequest>): _214.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _214.QueryUpgradedConsensusStateRequestAmino): _214.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _214.QueryUpgradedConsensusStateRequest): _214.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _214.QueryUpgradedConsensusStateRequestAminoMsg): _214.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _214.QueryUpgradedConsensusStateRequest): _214.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _214.QueryUpgradedConsensusStateRequestProtoMsg): _214.QueryUpgradedConsensusStateRequest;
                    toProto(message: _214.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _214.QueryUpgradedConsensusStateRequest): _214.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _214.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _214.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: Partial<_214.QueryUpgradedConsensusStateResponse>): _214.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _214.QueryUpgradedConsensusStateResponseAmino): _214.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _214.QueryUpgradedConsensusStateResponse): _214.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _214.QueryUpgradedConsensusStateResponseAminoMsg): _214.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _214.QueryUpgradedConsensusStateResponse): _214.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _214.QueryUpgradedConsensusStateResponseProtoMsg): _214.QueryUpgradedConsensusStateResponse;
                    toProto(message: _214.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _214.QueryUpgradedConsensusStateResponse): _214.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _213.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _213.GenesisState;
                    fromPartial(object: Partial<_213.GenesisState>): _213.GenesisState;
                    fromAmino(object: _213.GenesisStateAmino): _213.GenesisState;
                    toAmino(message: _213.GenesisState): _213.GenesisStateAmino;
                    fromAminoMsg(object: _213.GenesisStateAminoMsg): _213.GenesisState;
                    toAminoMsg(message: _213.GenesisState): _213.GenesisStateAminoMsg;
                    fromProtoMsg(message: _213.GenesisStateProtoMsg): _213.GenesisState;
                    toProto(message: _213.GenesisState): Uint8Array;
                    toProtoMsg(message: _213.GenesisState): _213.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    typeUrl: string;
                    encode(message: _213.GenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _213.GenesisMetadata;
                    fromPartial(object: Partial<_213.GenesisMetadata>): _213.GenesisMetadata;
                    fromAmino(object: _213.GenesisMetadataAmino): _213.GenesisMetadata;
                    toAmino(message: _213.GenesisMetadata): _213.GenesisMetadataAmino;
                    fromAminoMsg(object: _213.GenesisMetadataAminoMsg): _213.GenesisMetadata;
                    toAminoMsg(message: _213.GenesisMetadata): _213.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _213.GenesisMetadataProtoMsg): _213.GenesisMetadata;
                    toProto(message: _213.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _213.GenesisMetadata): _213.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    encode(message: _213.IdentifiedGenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _213.IdentifiedGenesisMetadata;
                    fromPartial(object: Partial<_213.IdentifiedGenesisMetadata>): _213.IdentifiedGenesisMetadata;
                    fromAmino(object: _213.IdentifiedGenesisMetadataAmino): _213.IdentifiedGenesisMetadata;
                    toAmino(message: _213.IdentifiedGenesisMetadata): _213.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _213.IdentifiedGenesisMetadataAminoMsg): _213.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _213.IdentifiedGenesisMetadata): _213.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _213.IdentifiedGenesisMetadataProtoMsg): _213.IdentifiedGenesisMetadata;
                    toProto(message: _213.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _213.IdentifiedGenesisMetadata): _213.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    encode(message: _212.IdentifiedClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _212.IdentifiedClientState;
                    fromPartial(object: Partial<_212.IdentifiedClientState>): _212.IdentifiedClientState;
                    fromAmino(object: _212.IdentifiedClientStateAmino): _212.IdentifiedClientState;
                    toAmino(message: _212.IdentifiedClientState): _212.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _212.IdentifiedClientStateAminoMsg): _212.IdentifiedClientState;
                    toAminoMsg(message: _212.IdentifiedClientState): _212.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _212.IdentifiedClientStateProtoMsg): _212.IdentifiedClientState;
                    toProto(message: _212.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _212.IdentifiedClientState): _212.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    encode(message: _212.ConsensusStateWithHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _212.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_212.ConsensusStateWithHeight>): _212.ConsensusStateWithHeight;
                    fromAmino(object: _212.ConsensusStateWithHeightAmino): _212.ConsensusStateWithHeight;
                    toAmino(message: _212.ConsensusStateWithHeight): _212.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _212.ConsensusStateWithHeightAminoMsg): _212.ConsensusStateWithHeight;
                    toAminoMsg(message: _212.ConsensusStateWithHeight): _212.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _212.ConsensusStateWithHeightProtoMsg): _212.ConsensusStateWithHeight;
                    toProto(message: _212.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _212.ConsensusStateWithHeight): _212.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    encode(message: _212.ClientConsensusStates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _212.ClientConsensusStates;
                    fromPartial(object: Partial<_212.ClientConsensusStates>): _212.ClientConsensusStates;
                    fromAmino(object: _212.ClientConsensusStatesAmino): _212.ClientConsensusStates;
                    toAmino(message: _212.ClientConsensusStates): _212.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _212.ClientConsensusStatesAminoMsg): _212.ClientConsensusStates;
                    toAminoMsg(message: _212.ClientConsensusStates): _212.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _212.ClientConsensusStatesProtoMsg): _212.ClientConsensusStates;
                    toProto(message: _212.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _212.ClientConsensusStates): _212.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    encode(message: _212.ClientUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _212.ClientUpdateProposal;
                    fromPartial(object: Partial<_212.ClientUpdateProposal>): _212.ClientUpdateProposal;
                    fromAmino(object: _212.ClientUpdateProposalAmino): _212.ClientUpdateProposal;
                    toAmino(message: _212.ClientUpdateProposal): _212.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _212.ClientUpdateProposalAminoMsg): _212.ClientUpdateProposal;
                    toAminoMsg(message: _212.ClientUpdateProposal): _212.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _212.ClientUpdateProposalProtoMsg): _212.ClientUpdateProposal;
                    toProto(message: _212.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _212.ClientUpdateProposal): _212.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    encode(message: _212.UpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _212.UpgradeProposal;
                    fromPartial(object: Partial<_212.UpgradeProposal>): _212.UpgradeProposal;
                    fromAmino(object: _212.UpgradeProposalAmino): _212.UpgradeProposal;
                    toAmino(message: _212.UpgradeProposal): _212.UpgradeProposalAmino;
                    fromAminoMsg(object: _212.UpgradeProposalAminoMsg): _212.UpgradeProposal;
                    toAminoMsg(message: _212.UpgradeProposal): _212.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _212.UpgradeProposalProtoMsg): _212.UpgradeProposal;
                    toProto(message: _212.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _212.UpgradeProposal): _212.UpgradeProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    encode(message: _212.Height, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _212.Height;
                    fromPartial(object: Partial<_212.Height>): _212.Height;
                    fromAmino(object: _212.HeightAmino): _212.Height;
                    toAmino(message: _212.Height): _212.HeightAmino;
                    fromAminoMsg(object: _212.HeightAminoMsg): _212.Height;
                    toAminoMsg(message: _212.Height): _212.HeightAminoMsg;
                    fromProtoMsg(message: _212.HeightProtoMsg): _212.Height;
                    toProto(message: _212.Height): Uint8Array;
                    toProtoMsg(message: _212.Height): _212.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _212.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _212.Params;
                    fromPartial(object: Partial<_212.Params>): _212.Params;
                    fromAmino(object: _212.ParamsAmino): _212.Params;
                    toAmino(message: _212.Params): _212.ParamsAmino;
                    fromAminoMsg(object: _212.ParamsAminoMsg): _212.Params;
                    toAminoMsg(message: _212.Params): _212.ParamsAminoMsg;
                    fromProtoMsg(message: _212.ParamsProtoMsg): _212.Params;
                    toProto(message: _212.Params): Uint8Array;
                    toProtoMsg(message: _212.Params): _212.ParamsProtoMsg;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    typeUrl: string;
                    encode(message: _216.MerkleRoot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _216.MerkleRoot;
                    fromPartial(object: Partial<_216.MerkleRoot>): _216.MerkleRoot;
                    fromAmino(object: _216.MerkleRootAmino): _216.MerkleRoot;
                    toAmino(message: _216.MerkleRoot): _216.MerkleRootAmino;
                    fromAminoMsg(object: _216.MerkleRootAminoMsg): _216.MerkleRoot;
                    toAminoMsg(message: _216.MerkleRoot): _216.MerkleRootAminoMsg;
                    fromProtoMsg(message: _216.MerkleRootProtoMsg): _216.MerkleRoot;
                    toProto(message: _216.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _216.MerkleRoot): _216.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    encode(message: _216.MerklePrefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _216.MerklePrefix;
                    fromPartial(object: Partial<_216.MerklePrefix>): _216.MerklePrefix;
                    fromAmino(object: _216.MerklePrefixAmino): _216.MerklePrefix;
                    toAmino(message: _216.MerklePrefix): _216.MerklePrefixAmino;
                    fromAminoMsg(object: _216.MerklePrefixAminoMsg): _216.MerklePrefix;
                    toAminoMsg(message: _216.MerklePrefix): _216.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _216.MerklePrefixProtoMsg): _216.MerklePrefix;
                    toProto(message: _216.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _216.MerklePrefix): _216.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    encode(message: _216.MerklePath, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _216.MerklePath;
                    fromPartial(object: Partial<_216.MerklePath>): _216.MerklePath;
                    fromAmino(object: _216.MerklePathAmino): _216.MerklePath;
                    toAmino(message: _216.MerklePath): _216.MerklePathAmino;
                    fromAminoMsg(object: _216.MerklePathAminoMsg): _216.MerklePath;
                    toAminoMsg(message: _216.MerklePath): _216.MerklePathAminoMsg;
                    fromProtoMsg(message: _216.MerklePathProtoMsg): _216.MerklePath;
                    toProto(message: _216.MerklePath): Uint8Array;
                    toProtoMsg(message: _216.MerklePath): _216.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    encode(message: _216.MerkleProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _216.MerkleProof;
                    fromPartial(object: Partial<_216.MerkleProof>): _216.MerkleProof;
                    fromAmino(object: _216.MerkleProofAmino): _216.MerkleProof;
                    toAmino(message: _216.MerkleProof): _216.MerkleProofAmino;
                    fromAminoMsg(object: _216.MerkleProofAminoMsg): _216.MerkleProof;
                    toAminoMsg(message: _216.MerkleProof): _216.MerkleProofAminoMsg;
                    fromProtoMsg(message: _216.MerkleProofProtoMsg): _216.MerkleProof;
                    toProto(message: _216.MerkleProof): Uint8Array;
                    toProtoMsg(message: _216.MerkleProof): _216.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _409.MsgClientImpl;
                QueryClientImpl: typeof _403.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _219.QueryConnectionRequest): Promise<_219.QueryConnectionResponse>;
                    connections(request?: _219.QueryConnectionsRequest): Promise<_219.QueryConnectionsResponse>;
                    clientConnections(request: _219.QueryClientConnectionsRequest): Promise<_219.QueryClientConnectionsResponse>;
                    connectionClientState(request: _219.QueryConnectionClientStateRequest): Promise<_219.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _219.QueryConnectionConsensusStateRequest): Promise<_219.QueryConnectionConsensusStateResponse>;
                    connectionParams(request?: _219.QueryConnectionParamsRequest): Promise<_219.QueryConnectionParamsResponse>;
                };
                LCDQueryClient: typeof _396.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _220.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _220.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _220.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _220.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _220.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _220.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _220.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _220.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _220.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _220.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _220.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _220.MsgConnectionOpenConfirm;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _220.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _220.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _220.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _220.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _220.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _220.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _220.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _220.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _220.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _220.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _220.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _220.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _220.MsgConnectionOpenInit) => _220.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _220.MsgConnectionOpenInitAmino) => _220.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _220.MsgConnectionOpenTry) => _220.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _220.MsgConnectionOpenTryAmino) => _220.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _220.MsgConnectionOpenAck) => _220.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _220.MsgConnectionOpenAckAmino) => _220.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _220.MsgConnectionOpenConfirm) => _220.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _220.MsgConnectionOpenConfirmAmino) => _220.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    encode(message: _220.MsgConnectionOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _220.MsgConnectionOpenInit;
                    fromPartial(object: Partial<_220.MsgConnectionOpenInit>): _220.MsgConnectionOpenInit;
                    fromAmino(object: _220.MsgConnectionOpenInitAmino): _220.MsgConnectionOpenInit;
                    toAmino(message: _220.MsgConnectionOpenInit): _220.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _220.MsgConnectionOpenInitAminoMsg): _220.MsgConnectionOpenInit;
                    toAminoMsg(message: _220.MsgConnectionOpenInit): _220.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _220.MsgConnectionOpenInitProtoMsg): _220.MsgConnectionOpenInit;
                    toProto(message: _220.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _220.MsgConnectionOpenInit): _220.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _220.MsgConnectionOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _220.MsgConnectionOpenInitResponse;
                    fromPartial(_: Partial<_220.MsgConnectionOpenInitResponse>): _220.MsgConnectionOpenInitResponse;
                    fromAmino(_: _220.MsgConnectionOpenInitResponseAmino): _220.MsgConnectionOpenInitResponse;
                    toAmino(_: _220.MsgConnectionOpenInitResponse): _220.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _220.MsgConnectionOpenInitResponseAminoMsg): _220.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _220.MsgConnectionOpenInitResponse): _220.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _220.MsgConnectionOpenInitResponseProtoMsg): _220.MsgConnectionOpenInitResponse;
                    toProto(message: _220.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _220.MsgConnectionOpenInitResponse): _220.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    encode(message: _220.MsgConnectionOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _220.MsgConnectionOpenTry;
                    fromPartial(object: Partial<_220.MsgConnectionOpenTry>): _220.MsgConnectionOpenTry;
                    fromAmino(object: _220.MsgConnectionOpenTryAmino): _220.MsgConnectionOpenTry;
                    toAmino(message: _220.MsgConnectionOpenTry): _220.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _220.MsgConnectionOpenTryAminoMsg): _220.MsgConnectionOpenTry;
                    toAminoMsg(message: _220.MsgConnectionOpenTry): _220.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _220.MsgConnectionOpenTryProtoMsg): _220.MsgConnectionOpenTry;
                    toProto(message: _220.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _220.MsgConnectionOpenTry): _220.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _220.MsgConnectionOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _220.MsgConnectionOpenTryResponse;
                    fromPartial(_: Partial<_220.MsgConnectionOpenTryResponse>): _220.MsgConnectionOpenTryResponse;
                    fromAmino(_: _220.MsgConnectionOpenTryResponseAmino): _220.MsgConnectionOpenTryResponse;
                    toAmino(_: _220.MsgConnectionOpenTryResponse): _220.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _220.MsgConnectionOpenTryResponseAminoMsg): _220.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _220.MsgConnectionOpenTryResponse): _220.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _220.MsgConnectionOpenTryResponseProtoMsg): _220.MsgConnectionOpenTryResponse;
                    toProto(message: _220.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _220.MsgConnectionOpenTryResponse): _220.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    encode(message: _220.MsgConnectionOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _220.MsgConnectionOpenAck;
                    fromPartial(object: Partial<_220.MsgConnectionOpenAck>): _220.MsgConnectionOpenAck;
                    fromAmino(object: _220.MsgConnectionOpenAckAmino): _220.MsgConnectionOpenAck;
                    toAmino(message: _220.MsgConnectionOpenAck): _220.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _220.MsgConnectionOpenAckAminoMsg): _220.MsgConnectionOpenAck;
                    toAminoMsg(message: _220.MsgConnectionOpenAck): _220.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _220.MsgConnectionOpenAckProtoMsg): _220.MsgConnectionOpenAck;
                    toProto(message: _220.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _220.MsgConnectionOpenAck): _220.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _220.MsgConnectionOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _220.MsgConnectionOpenAckResponse;
                    fromPartial(_: Partial<_220.MsgConnectionOpenAckResponse>): _220.MsgConnectionOpenAckResponse;
                    fromAmino(_: _220.MsgConnectionOpenAckResponseAmino): _220.MsgConnectionOpenAckResponse;
                    toAmino(_: _220.MsgConnectionOpenAckResponse): _220.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _220.MsgConnectionOpenAckResponseAminoMsg): _220.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _220.MsgConnectionOpenAckResponse): _220.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _220.MsgConnectionOpenAckResponseProtoMsg): _220.MsgConnectionOpenAckResponse;
                    toProto(message: _220.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _220.MsgConnectionOpenAckResponse): _220.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    encode(message: _220.MsgConnectionOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _220.MsgConnectionOpenConfirm;
                    fromPartial(object: Partial<_220.MsgConnectionOpenConfirm>): _220.MsgConnectionOpenConfirm;
                    fromAmino(object: _220.MsgConnectionOpenConfirmAmino): _220.MsgConnectionOpenConfirm;
                    toAmino(message: _220.MsgConnectionOpenConfirm): _220.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _220.MsgConnectionOpenConfirmAminoMsg): _220.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _220.MsgConnectionOpenConfirm): _220.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _220.MsgConnectionOpenConfirmProtoMsg): _220.MsgConnectionOpenConfirm;
                    toProto(message: _220.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _220.MsgConnectionOpenConfirm): _220.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _220.MsgConnectionOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _220.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: Partial<_220.MsgConnectionOpenConfirmResponse>): _220.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _220.MsgConnectionOpenConfirmResponseAmino): _220.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _220.MsgConnectionOpenConfirmResponse): _220.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _220.MsgConnectionOpenConfirmResponseAminoMsg): _220.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _220.MsgConnectionOpenConfirmResponse): _220.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _220.MsgConnectionOpenConfirmResponseProtoMsg): _220.MsgConnectionOpenConfirmResponse;
                    toProto(message: _220.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _220.MsgConnectionOpenConfirmResponse): _220.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    encode(message: _219.QueryConnectionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _219.QueryConnectionRequest;
                    fromPartial(object: Partial<_219.QueryConnectionRequest>): _219.QueryConnectionRequest;
                    fromAmino(object: _219.QueryConnectionRequestAmino): _219.QueryConnectionRequest;
                    toAmino(message: _219.QueryConnectionRequest): _219.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _219.QueryConnectionRequestAminoMsg): _219.QueryConnectionRequest;
                    toAminoMsg(message: _219.QueryConnectionRequest): _219.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _219.QueryConnectionRequestProtoMsg): _219.QueryConnectionRequest;
                    toProto(message: _219.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _219.QueryConnectionRequest): _219.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    encode(message: _219.QueryConnectionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _219.QueryConnectionResponse;
                    fromPartial(object: Partial<_219.QueryConnectionResponse>): _219.QueryConnectionResponse;
                    fromAmino(object: _219.QueryConnectionResponseAmino): _219.QueryConnectionResponse;
                    toAmino(message: _219.QueryConnectionResponse): _219.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _219.QueryConnectionResponseAminoMsg): _219.QueryConnectionResponse;
                    toAminoMsg(message: _219.QueryConnectionResponse): _219.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _219.QueryConnectionResponseProtoMsg): _219.QueryConnectionResponse;
                    toProto(message: _219.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _219.QueryConnectionResponse): _219.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _219.QueryConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _219.QueryConnectionsRequest;
                    fromPartial(object: Partial<_219.QueryConnectionsRequest>): _219.QueryConnectionsRequest;
                    fromAmino(object: _219.QueryConnectionsRequestAmino): _219.QueryConnectionsRequest;
                    toAmino(message: _219.QueryConnectionsRequest): _219.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _219.QueryConnectionsRequestAminoMsg): _219.QueryConnectionsRequest;
                    toAminoMsg(message: _219.QueryConnectionsRequest): _219.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _219.QueryConnectionsRequestProtoMsg): _219.QueryConnectionsRequest;
                    toProto(message: _219.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _219.QueryConnectionsRequest): _219.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _219.QueryConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _219.QueryConnectionsResponse;
                    fromPartial(object: Partial<_219.QueryConnectionsResponse>): _219.QueryConnectionsResponse;
                    fromAmino(object: _219.QueryConnectionsResponseAmino): _219.QueryConnectionsResponse;
                    toAmino(message: _219.QueryConnectionsResponse): _219.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _219.QueryConnectionsResponseAminoMsg): _219.QueryConnectionsResponse;
                    toAminoMsg(message: _219.QueryConnectionsResponse): _219.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _219.QueryConnectionsResponseProtoMsg): _219.QueryConnectionsResponse;
                    toProto(message: _219.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _219.QueryConnectionsResponse): _219.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _219.QueryClientConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _219.QueryClientConnectionsRequest;
                    fromPartial(object: Partial<_219.QueryClientConnectionsRequest>): _219.QueryClientConnectionsRequest;
                    fromAmino(object: _219.QueryClientConnectionsRequestAmino): _219.QueryClientConnectionsRequest;
                    toAmino(message: _219.QueryClientConnectionsRequest): _219.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _219.QueryClientConnectionsRequestAminoMsg): _219.QueryClientConnectionsRequest;
                    toAminoMsg(message: _219.QueryClientConnectionsRequest): _219.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _219.QueryClientConnectionsRequestProtoMsg): _219.QueryClientConnectionsRequest;
                    toProto(message: _219.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _219.QueryClientConnectionsRequest): _219.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _219.QueryClientConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _219.QueryClientConnectionsResponse;
                    fromPartial(object: Partial<_219.QueryClientConnectionsResponse>): _219.QueryClientConnectionsResponse;
                    fromAmino(object: _219.QueryClientConnectionsResponseAmino): _219.QueryClientConnectionsResponse;
                    toAmino(message: _219.QueryClientConnectionsResponse): _219.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _219.QueryClientConnectionsResponseAminoMsg): _219.QueryClientConnectionsResponse;
                    toAminoMsg(message: _219.QueryClientConnectionsResponse): _219.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _219.QueryClientConnectionsResponseProtoMsg): _219.QueryClientConnectionsResponse;
                    toProto(message: _219.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _219.QueryClientConnectionsResponse): _219.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    encode(message: _219.QueryConnectionClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _219.QueryConnectionClientStateRequest;
                    fromPartial(object: Partial<_219.QueryConnectionClientStateRequest>): _219.QueryConnectionClientStateRequest;
                    fromAmino(object: _219.QueryConnectionClientStateRequestAmino): _219.QueryConnectionClientStateRequest;
                    toAmino(message: _219.QueryConnectionClientStateRequest): _219.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _219.QueryConnectionClientStateRequestAminoMsg): _219.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _219.QueryConnectionClientStateRequest): _219.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _219.QueryConnectionClientStateRequestProtoMsg): _219.QueryConnectionClientStateRequest;
                    toProto(message: _219.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _219.QueryConnectionClientStateRequest): _219.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    encode(message: _219.QueryConnectionClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _219.QueryConnectionClientStateResponse;
                    fromPartial(object: Partial<_219.QueryConnectionClientStateResponse>): _219.QueryConnectionClientStateResponse;
                    fromAmino(object: _219.QueryConnectionClientStateResponseAmino): _219.QueryConnectionClientStateResponse;
                    toAmino(message: _219.QueryConnectionClientStateResponse): _219.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _219.QueryConnectionClientStateResponseAminoMsg): _219.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _219.QueryConnectionClientStateResponse): _219.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _219.QueryConnectionClientStateResponseProtoMsg): _219.QueryConnectionClientStateResponse;
                    toProto(message: _219.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _219.QueryConnectionClientStateResponse): _219.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _219.QueryConnectionConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _219.QueryConnectionConsensusStateRequest;
                    fromPartial(object: Partial<_219.QueryConnectionConsensusStateRequest>): _219.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _219.QueryConnectionConsensusStateRequestAmino): _219.QueryConnectionConsensusStateRequest;
                    toAmino(message: _219.QueryConnectionConsensusStateRequest): _219.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _219.QueryConnectionConsensusStateRequestAminoMsg): _219.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _219.QueryConnectionConsensusStateRequest): _219.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _219.QueryConnectionConsensusStateRequestProtoMsg): _219.QueryConnectionConsensusStateRequest;
                    toProto(message: _219.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _219.QueryConnectionConsensusStateRequest): _219.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _219.QueryConnectionConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _219.QueryConnectionConsensusStateResponse;
                    fromPartial(object: Partial<_219.QueryConnectionConsensusStateResponse>): _219.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _219.QueryConnectionConsensusStateResponseAmino): _219.QueryConnectionConsensusStateResponse;
                    toAmino(message: _219.QueryConnectionConsensusStateResponse): _219.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _219.QueryConnectionConsensusStateResponseAminoMsg): _219.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _219.QueryConnectionConsensusStateResponse): _219.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _219.QueryConnectionConsensusStateResponseProtoMsg): _219.QueryConnectionConsensusStateResponse;
                    toProto(message: _219.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _219.QueryConnectionConsensusStateResponse): _219.QueryConnectionConsensusStateResponseProtoMsg;
                };
                QueryConnectionParamsRequest: {
                    typeUrl: string;
                    encode(_: _219.QueryConnectionParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _219.QueryConnectionParamsRequest;
                    fromPartial(_: Partial<_219.QueryConnectionParamsRequest>): _219.QueryConnectionParamsRequest;
                    fromAmino(_: _219.QueryConnectionParamsRequestAmino): _219.QueryConnectionParamsRequest;
                    toAmino(_: _219.QueryConnectionParamsRequest): _219.QueryConnectionParamsRequestAmino;
                    fromAminoMsg(object: _219.QueryConnectionParamsRequestAminoMsg): _219.QueryConnectionParamsRequest;
                    toAminoMsg(message: _219.QueryConnectionParamsRequest): _219.QueryConnectionParamsRequestAminoMsg;
                    fromProtoMsg(message: _219.QueryConnectionParamsRequestProtoMsg): _219.QueryConnectionParamsRequest;
                    toProto(message: _219.QueryConnectionParamsRequest): Uint8Array;
                    toProtoMsg(message: _219.QueryConnectionParamsRequest): _219.QueryConnectionParamsRequestProtoMsg;
                };
                QueryConnectionParamsResponse: {
                    typeUrl: string;
                    encode(message: _219.QueryConnectionParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _219.QueryConnectionParamsResponse;
                    fromPartial(object: Partial<_219.QueryConnectionParamsResponse>): _219.QueryConnectionParamsResponse;
                    fromAmino(object: _219.QueryConnectionParamsResponseAmino): _219.QueryConnectionParamsResponse;
                    toAmino(message: _219.QueryConnectionParamsResponse): _219.QueryConnectionParamsResponseAmino;
                    fromAminoMsg(object: _219.QueryConnectionParamsResponseAminoMsg): _219.QueryConnectionParamsResponse;
                    toAminoMsg(message: _219.QueryConnectionParamsResponse): _219.QueryConnectionParamsResponseAminoMsg;
                    fromProtoMsg(message: _219.QueryConnectionParamsResponseProtoMsg): _219.QueryConnectionParamsResponse;
                    toProto(message: _219.QueryConnectionParamsResponse): Uint8Array;
                    toProtoMsg(message: _219.QueryConnectionParamsResponse): _219.QueryConnectionParamsResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _218.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _218.GenesisState;
                    fromPartial(object: Partial<_218.GenesisState>): _218.GenesisState;
                    fromAmino(object: _218.GenesisStateAmino): _218.GenesisState;
                    toAmino(message: _218.GenesisState): _218.GenesisStateAmino;
                    fromAminoMsg(object: _218.GenesisStateAminoMsg): _218.GenesisState;
                    toAminoMsg(message: _218.GenesisState): _218.GenesisStateAminoMsg;
                    fromProtoMsg(message: _218.GenesisStateProtoMsg): _218.GenesisState;
                    toProto(message: _218.GenesisState): Uint8Array;
                    toProtoMsg(message: _218.GenesisState): _218.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _217.State;
                stateToJSON(object: _217.State): string;
                State: typeof _217.State;
                StateSDKType: typeof _217.State;
                StateAmino: typeof _217.State;
                ConnectionEnd: {
                    typeUrl: string;
                    encode(message: _217.ConnectionEnd, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _217.ConnectionEnd;
                    fromPartial(object: Partial<_217.ConnectionEnd>): _217.ConnectionEnd;
                    fromAmino(object: _217.ConnectionEndAmino): _217.ConnectionEnd;
                    toAmino(message: _217.ConnectionEnd): _217.ConnectionEndAmino;
                    fromAminoMsg(object: _217.ConnectionEndAminoMsg): _217.ConnectionEnd;
                    toAminoMsg(message: _217.ConnectionEnd): _217.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _217.ConnectionEndProtoMsg): _217.ConnectionEnd;
                    toProto(message: _217.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _217.ConnectionEnd): _217.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    encode(message: _217.IdentifiedConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _217.IdentifiedConnection;
                    fromPartial(object: Partial<_217.IdentifiedConnection>): _217.IdentifiedConnection;
                    fromAmino(object: _217.IdentifiedConnectionAmino): _217.IdentifiedConnection;
                    toAmino(message: _217.IdentifiedConnection): _217.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _217.IdentifiedConnectionAminoMsg): _217.IdentifiedConnection;
                    toAminoMsg(message: _217.IdentifiedConnection): _217.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _217.IdentifiedConnectionProtoMsg): _217.IdentifiedConnection;
                    toProto(message: _217.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _217.IdentifiedConnection): _217.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _217.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _217.Counterparty;
                    fromPartial(object: Partial<_217.Counterparty>): _217.Counterparty;
                    fromAmino(object: _217.CounterpartyAmino): _217.Counterparty;
                    toAmino(message: _217.Counterparty): _217.CounterpartyAmino;
                    fromAminoMsg(object: _217.CounterpartyAminoMsg): _217.Counterparty;
                    toAminoMsg(message: _217.Counterparty): _217.CounterpartyAminoMsg;
                    fromProtoMsg(message: _217.CounterpartyProtoMsg): _217.Counterparty;
                    toProto(message: _217.Counterparty): Uint8Array;
                    toProtoMsg(message: _217.Counterparty): _217.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    encode(message: _217.ClientPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _217.ClientPaths;
                    fromPartial(object: Partial<_217.ClientPaths>): _217.ClientPaths;
                    fromAmino(object: _217.ClientPathsAmino): _217.ClientPaths;
                    toAmino(message: _217.ClientPaths): _217.ClientPathsAmino;
                    fromAminoMsg(object: _217.ClientPathsAminoMsg): _217.ClientPaths;
                    toAminoMsg(message: _217.ClientPaths): _217.ClientPathsAminoMsg;
                    fromProtoMsg(message: _217.ClientPathsProtoMsg): _217.ClientPaths;
                    toProto(message: _217.ClientPaths): Uint8Array;
                    toProtoMsg(message: _217.ClientPaths): _217.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    encode(message: _217.ConnectionPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _217.ConnectionPaths;
                    fromPartial(object: Partial<_217.ConnectionPaths>): _217.ConnectionPaths;
                    fromAmino(object: _217.ConnectionPathsAmino): _217.ConnectionPaths;
                    toAmino(message: _217.ConnectionPaths): _217.ConnectionPathsAmino;
                    fromAminoMsg(object: _217.ConnectionPathsAminoMsg): _217.ConnectionPaths;
                    toAminoMsg(message: _217.ConnectionPaths): _217.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _217.ConnectionPathsProtoMsg): _217.ConnectionPaths;
                    toProto(message: _217.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _217.ConnectionPaths): _217.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    encode(message: _217.Version, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _217.Version;
                    fromPartial(object: Partial<_217.Version>): _217.Version;
                    fromAmino(object: _217.VersionAmino): _217.Version;
                    toAmino(message: _217.Version): _217.VersionAmino;
                    fromAminoMsg(object: _217.VersionAminoMsg): _217.Version;
                    toAminoMsg(message: _217.Version): _217.VersionAminoMsg;
                    fromProtoMsg(message: _217.VersionProtoMsg): _217.Version;
                    toProto(message: _217.Version): Uint8Array;
                    toProtoMsg(message: _217.Version): _217.VersionProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _217.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _217.Params;
                    fromPartial(object: Partial<_217.Params>): _217.Params;
                    fromAmino(object: _217.ParamsAmino): _217.Params;
                    toAmino(message: _217.Params): _217.ParamsAmino;
                    fromAminoMsg(object: _217.ParamsAminoMsg): _217.Params;
                    toAminoMsg(message: _217.Params): _217.ParamsAminoMsg;
                    fromProtoMsg(message: _217.ParamsProtoMsg): _217.Params;
                    toProto(message: _217.Params): Uint8Array;
                    toProtoMsg(message: _217.Params): _217.ParamsProtoMsg;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    typeUrl: string;
                    encode(message: _221.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _221.GenesisState;
                    fromPartial(object: Partial<_221.GenesisState>): _221.GenesisState;
                    fromAmino(object: _221.GenesisStateAmino): _221.GenesisState;
                    toAmino(message: _221.GenesisState): _221.GenesisStateAmino;
                    fromAminoMsg(object: _221.GenesisStateAminoMsg): _221.GenesisState;
                    toAminoMsg(message: _221.GenesisState): _221.GenesisStateAminoMsg;
                    fromProtoMsg(message: _221.GenesisStateProtoMsg): _221.GenesisState;
                    toProto(message: _221.GenesisState): Uint8Array;
                    toProtoMsg(message: _221.GenesisState): _221.GenesisStateProtoMsg;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v2: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _222.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _222.ClientState;
                    fromPartial(object: Partial<_222.ClientState>): _222.ClientState;
                    fromAmino(object: _222.ClientStateAmino): _222.ClientState;
                    toAmino(message: _222.ClientState): _222.ClientStateAmino;
                    fromAminoMsg(object: _222.ClientStateAminoMsg): _222.ClientState;
                    toAminoMsg(message: _222.ClientState): _222.ClientStateAminoMsg;
                    fromProtoMsg(message: _222.ClientStateProtoMsg): _222.ClientState;
                    toProto(message: _222.ClientState): Uint8Array;
                    toProtoMsg(message: _222.ClientState): _222.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v2: {
                dataTypeFromJSON(object: any): _223.DataType;
                dataTypeToJSON(object: _223.DataType): string;
                DataType: typeof _223.DataType;
                DataTypeSDKType: typeof _223.DataType;
                DataTypeAmino: typeof _223.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _223.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _223.ClientState;
                    fromPartial(object: Partial<_223.ClientState>): _223.ClientState;
                    fromAmino(object: _223.ClientStateAmino): _223.ClientState;
                    toAmino(message: _223.ClientState): _223.ClientStateAmino;
                    fromAminoMsg(object: _223.ClientStateAminoMsg): _223.ClientState;
                    toAminoMsg(message: _223.ClientState): _223.ClientStateAminoMsg;
                    fromProtoMsg(message: _223.ClientStateProtoMsg): _223.ClientState;
                    toProto(message: _223.ClientState): Uint8Array;
                    toProtoMsg(message: _223.ClientState): _223.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _223.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _223.ConsensusState;
                    fromPartial(object: Partial<_223.ConsensusState>): _223.ConsensusState;
                    fromAmino(object: _223.ConsensusStateAmino): _223.ConsensusState;
                    toAmino(message: _223.ConsensusState): _223.ConsensusStateAmino;
                    fromAminoMsg(object: _223.ConsensusStateAminoMsg): _223.ConsensusState;
                    toAminoMsg(message: _223.ConsensusState): _223.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _223.ConsensusStateProtoMsg): _223.ConsensusState;
                    toProto(message: _223.ConsensusState): Uint8Array;
                    toProtoMsg(message: _223.ConsensusState): _223.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _223.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _223.Header;
                    fromPartial(object: Partial<_223.Header>): _223.Header;
                    fromAmino(object: _223.HeaderAmino): _223.Header;
                    toAmino(message: _223.Header): _223.HeaderAmino;
                    fromAminoMsg(object: _223.HeaderAminoMsg): _223.Header;
                    toAminoMsg(message: _223.Header): _223.HeaderAminoMsg;
                    fromProtoMsg(message: _223.HeaderProtoMsg): _223.Header;
                    toProto(message: _223.Header): Uint8Array;
                    toProtoMsg(message: _223.Header): _223.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _223.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _223.Misbehaviour;
                    fromPartial(object: Partial<_223.Misbehaviour>): _223.Misbehaviour;
                    fromAmino(object: _223.MisbehaviourAmino): _223.Misbehaviour;
                    toAmino(message: _223.Misbehaviour): _223.MisbehaviourAmino;
                    fromAminoMsg(object: _223.MisbehaviourAminoMsg): _223.Misbehaviour;
                    toAminoMsg(message: _223.Misbehaviour): _223.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _223.MisbehaviourProtoMsg): _223.Misbehaviour;
                    toProto(message: _223.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _223.Misbehaviour): _223.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _223.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _223.SignatureAndData;
                    fromPartial(object: Partial<_223.SignatureAndData>): _223.SignatureAndData;
                    fromAmino(object: _223.SignatureAndDataAmino): _223.SignatureAndData;
                    toAmino(message: _223.SignatureAndData): _223.SignatureAndDataAmino;
                    fromAminoMsg(object: _223.SignatureAndDataAminoMsg): _223.SignatureAndData;
                    toAminoMsg(message: _223.SignatureAndData): _223.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _223.SignatureAndDataProtoMsg): _223.SignatureAndData;
                    toProto(message: _223.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _223.SignatureAndData): _223.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _223.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _223.TimestampedSignatureData;
                    fromPartial(object: Partial<_223.TimestampedSignatureData>): _223.TimestampedSignatureData;
                    fromAmino(object: _223.TimestampedSignatureDataAmino): _223.TimestampedSignatureData;
                    toAmino(message: _223.TimestampedSignatureData): _223.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _223.TimestampedSignatureDataAminoMsg): _223.TimestampedSignatureData;
                    toAminoMsg(message: _223.TimestampedSignatureData): _223.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _223.TimestampedSignatureDataProtoMsg): _223.TimestampedSignatureData;
                    toProto(message: _223.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _223.TimestampedSignatureData): _223.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _223.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _223.SignBytes;
                    fromPartial(object: Partial<_223.SignBytes>): _223.SignBytes;
                    fromAmino(object: _223.SignBytesAmino): _223.SignBytes;
                    toAmino(message: _223.SignBytes): _223.SignBytesAmino;
                    fromAminoMsg(object: _223.SignBytesAminoMsg): _223.SignBytes;
                    toAminoMsg(message: _223.SignBytes): _223.SignBytesAminoMsg;
                    fromProtoMsg(message: _223.SignBytesProtoMsg): _223.SignBytes;
                    toProto(message: _223.SignBytes): Uint8Array;
                    toProtoMsg(message: _223.SignBytes): _223.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _223.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _223.HeaderData;
                    fromPartial(object: Partial<_223.HeaderData>): _223.HeaderData;
                    fromAmino(object: _223.HeaderDataAmino): _223.HeaderData;
                    toAmino(message: _223.HeaderData): _223.HeaderDataAmino;
                    fromAminoMsg(object: _223.HeaderDataAminoMsg): _223.HeaderData;
                    toAminoMsg(message: _223.HeaderData): _223.HeaderDataAminoMsg;
                    fromProtoMsg(message: _223.HeaderDataProtoMsg): _223.HeaderData;
                    toProto(message: _223.HeaderData): Uint8Array;
                    toProtoMsg(message: _223.HeaderData): _223.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _223.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _223.ClientStateData;
                    fromPartial(object: Partial<_223.ClientStateData>): _223.ClientStateData;
                    fromAmino(object: _223.ClientStateDataAmino): _223.ClientStateData;
                    toAmino(message: _223.ClientStateData): _223.ClientStateDataAmino;
                    fromAminoMsg(object: _223.ClientStateDataAminoMsg): _223.ClientStateData;
                    toAminoMsg(message: _223.ClientStateData): _223.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _223.ClientStateDataProtoMsg): _223.ClientStateData;
                    toProto(message: _223.ClientStateData): Uint8Array;
                    toProtoMsg(message: _223.ClientStateData): _223.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _223.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _223.ConsensusStateData;
                    fromPartial(object: Partial<_223.ConsensusStateData>): _223.ConsensusStateData;
                    fromAmino(object: _223.ConsensusStateDataAmino): _223.ConsensusStateData;
                    toAmino(message: _223.ConsensusStateData): _223.ConsensusStateDataAmino;
                    fromAminoMsg(object: _223.ConsensusStateDataAminoMsg): _223.ConsensusStateData;
                    toAminoMsg(message: _223.ConsensusStateData): _223.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _223.ConsensusStateDataProtoMsg): _223.ConsensusStateData;
                    toProto(message: _223.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _223.ConsensusStateData): _223.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _223.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _223.ConnectionStateData;
                    fromPartial(object: Partial<_223.ConnectionStateData>): _223.ConnectionStateData;
                    fromAmino(object: _223.ConnectionStateDataAmino): _223.ConnectionStateData;
                    toAmino(message: _223.ConnectionStateData): _223.ConnectionStateDataAmino;
                    fromAminoMsg(object: _223.ConnectionStateDataAminoMsg): _223.ConnectionStateData;
                    toAminoMsg(message: _223.ConnectionStateData): _223.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _223.ConnectionStateDataProtoMsg): _223.ConnectionStateData;
                    toProto(message: _223.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _223.ConnectionStateData): _223.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _223.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _223.ChannelStateData;
                    fromPartial(object: Partial<_223.ChannelStateData>): _223.ChannelStateData;
                    fromAmino(object: _223.ChannelStateDataAmino): _223.ChannelStateData;
                    toAmino(message: _223.ChannelStateData): _223.ChannelStateDataAmino;
                    fromAminoMsg(object: _223.ChannelStateDataAminoMsg): _223.ChannelStateData;
                    toAminoMsg(message: _223.ChannelStateData): _223.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _223.ChannelStateDataProtoMsg): _223.ChannelStateData;
                    toProto(message: _223.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _223.ChannelStateData): _223.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _223.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _223.PacketCommitmentData;
                    fromPartial(object: Partial<_223.PacketCommitmentData>): _223.PacketCommitmentData;
                    fromAmino(object: _223.PacketCommitmentDataAmino): _223.PacketCommitmentData;
                    toAmino(message: _223.PacketCommitmentData): _223.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _223.PacketCommitmentDataAminoMsg): _223.PacketCommitmentData;
                    toAminoMsg(message: _223.PacketCommitmentData): _223.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _223.PacketCommitmentDataProtoMsg): _223.PacketCommitmentData;
                    toProto(message: _223.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _223.PacketCommitmentData): _223.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _223.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _223.PacketAcknowledgementData;
                    fromPartial(object: Partial<_223.PacketAcknowledgementData>): _223.PacketAcknowledgementData;
                    fromAmino(object: _223.PacketAcknowledgementDataAmino): _223.PacketAcknowledgementData;
                    toAmino(message: _223.PacketAcknowledgementData): _223.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _223.PacketAcknowledgementDataAminoMsg): _223.PacketAcknowledgementData;
                    toAminoMsg(message: _223.PacketAcknowledgementData): _223.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _223.PacketAcknowledgementDataProtoMsg): _223.PacketAcknowledgementData;
                    toProto(message: _223.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _223.PacketAcknowledgementData): _223.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _223.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _223.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_223.PacketReceiptAbsenceData>): _223.PacketReceiptAbsenceData;
                    fromAmino(object: _223.PacketReceiptAbsenceDataAmino): _223.PacketReceiptAbsenceData;
                    toAmino(message: _223.PacketReceiptAbsenceData): _223.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _223.PacketReceiptAbsenceDataAminoMsg): _223.PacketReceiptAbsenceData;
                    toAminoMsg(message: _223.PacketReceiptAbsenceData): _223.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _223.PacketReceiptAbsenceDataProtoMsg): _223.PacketReceiptAbsenceData;
                    toProto(message: _223.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _223.PacketReceiptAbsenceData): _223.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _223.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _223.NextSequenceRecvData;
                    fromPartial(object: Partial<_223.NextSequenceRecvData>): _223.NextSequenceRecvData;
                    fromAmino(object: _223.NextSequenceRecvDataAmino): _223.NextSequenceRecvData;
                    toAmino(message: _223.NextSequenceRecvData): _223.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _223.NextSequenceRecvDataAminoMsg): _223.NextSequenceRecvData;
                    toAminoMsg(message: _223.NextSequenceRecvData): _223.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _223.NextSequenceRecvDataProtoMsg): _223.NextSequenceRecvData;
                    toProto(message: _223.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _223.NextSequenceRecvData): _223.NextSequenceRecvDataProtoMsg;
                };
            };
            const v3: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _224.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _224.ClientState;
                    fromPartial(object: Partial<_224.ClientState>): _224.ClientState;
                    fromAmino(object: _224.ClientStateAmino): _224.ClientState;
                    toAmino(message: _224.ClientState): _224.ClientStateAmino;
                    fromAminoMsg(object: _224.ClientStateAminoMsg): _224.ClientState;
                    toAminoMsg(message: _224.ClientState): _224.ClientStateAminoMsg;
                    fromProtoMsg(message: _224.ClientStateProtoMsg): _224.ClientState;
                    toProto(message: _224.ClientState): Uint8Array;
                    toProtoMsg(message: _224.ClientState): _224.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _224.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _224.ConsensusState;
                    fromPartial(object: Partial<_224.ConsensusState>): _224.ConsensusState;
                    fromAmino(object: _224.ConsensusStateAmino): _224.ConsensusState;
                    toAmino(message: _224.ConsensusState): _224.ConsensusStateAmino;
                    fromAminoMsg(object: _224.ConsensusStateAminoMsg): _224.ConsensusState;
                    toAminoMsg(message: _224.ConsensusState): _224.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _224.ConsensusStateProtoMsg): _224.ConsensusState;
                    toProto(message: _224.ConsensusState): Uint8Array;
                    toProtoMsg(message: _224.ConsensusState): _224.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _224.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _224.Header;
                    fromPartial(object: Partial<_224.Header>): _224.Header;
                    fromAmino(object: _224.HeaderAmino): _224.Header;
                    toAmino(message: _224.Header): _224.HeaderAmino;
                    fromAminoMsg(object: _224.HeaderAminoMsg): _224.Header;
                    toAminoMsg(message: _224.Header): _224.HeaderAminoMsg;
                    fromProtoMsg(message: _224.HeaderProtoMsg): _224.Header;
                    toProto(message: _224.Header): Uint8Array;
                    toProtoMsg(message: _224.Header): _224.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _224.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _224.Misbehaviour;
                    fromPartial(object: Partial<_224.Misbehaviour>): _224.Misbehaviour;
                    fromAmino(object: _224.MisbehaviourAmino): _224.Misbehaviour;
                    toAmino(message: _224.Misbehaviour): _224.MisbehaviourAmino;
                    fromAminoMsg(object: _224.MisbehaviourAminoMsg): _224.Misbehaviour;
                    toAminoMsg(message: _224.Misbehaviour): _224.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _224.MisbehaviourProtoMsg): _224.Misbehaviour;
                    toProto(message: _224.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _224.Misbehaviour): _224.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _224.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _224.SignatureAndData;
                    fromPartial(object: Partial<_224.SignatureAndData>): _224.SignatureAndData;
                    fromAmino(object: _224.SignatureAndDataAmino): _224.SignatureAndData;
                    toAmino(message: _224.SignatureAndData): _224.SignatureAndDataAmino;
                    fromAminoMsg(object: _224.SignatureAndDataAminoMsg): _224.SignatureAndData;
                    toAminoMsg(message: _224.SignatureAndData): _224.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _224.SignatureAndDataProtoMsg): _224.SignatureAndData;
                    toProto(message: _224.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _224.SignatureAndData): _224.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _224.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _224.TimestampedSignatureData;
                    fromPartial(object: Partial<_224.TimestampedSignatureData>): _224.TimestampedSignatureData;
                    fromAmino(object: _224.TimestampedSignatureDataAmino): _224.TimestampedSignatureData;
                    toAmino(message: _224.TimestampedSignatureData): _224.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _224.TimestampedSignatureDataAminoMsg): _224.TimestampedSignatureData;
                    toAminoMsg(message: _224.TimestampedSignatureData): _224.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _224.TimestampedSignatureDataProtoMsg): _224.TimestampedSignatureData;
                    toProto(message: _224.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _224.TimestampedSignatureData): _224.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _224.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _224.SignBytes;
                    fromPartial(object: Partial<_224.SignBytes>): _224.SignBytes;
                    fromAmino(object: _224.SignBytesAmino): _224.SignBytes;
                    toAmino(message: _224.SignBytes): _224.SignBytesAmino;
                    fromAminoMsg(object: _224.SignBytesAminoMsg): _224.SignBytes;
                    toAminoMsg(message: _224.SignBytes): _224.SignBytesAminoMsg;
                    fromProtoMsg(message: _224.SignBytesProtoMsg): _224.SignBytes;
                    toProto(message: _224.SignBytes): Uint8Array;
                    toProtoMsg(message: _224.SignBytes): _224.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _224.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _224.HeaderData;
                    fromPartial(object: Partial<_224.HeaderData>): _224.HeaderData;
                    fromAmino(object: _224.HeaderDataAmino): _224.HeaderData;
                    toAmino(message: _224.HeaderData): _224.HeaderDataAmino;
                    fromAminoMsg(object: _224.HeaderDataAminoMsg): _224.HeaderData;
                    toAminoMsg(message: _224.HeaderData): _224.HeaderDataAminoMsg;
                    fromProtoMsg(message: _224.HeaderDataProtoMsg): _224.HeaderData;
                    toProto(message: _224.HeaderData): Uint8Array;
                    toProtoMsg(message: _224.HeaderData): _224.HeaderDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _225.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _225.ClientState;
                    fromPartial(object: Partial<_225.ClientState>): _225.ClientState;
                    fromAmino(object: _225.ClientStateAmino): _225.ClientState;
                    toAmino(message: _225.ClientState): _225.ClientStateAmino;
                    fromAminoMsg(object: _225.ClientStateAminoMsg): _225.ClientState;
                    toAminoMsg(message: _225.ClientState): _225.ClientStateAminoMsg;
                    fromProtoMsg(message: _225.ClientStateProtoMsg): _225.ClientState;
                    toProto(message: _225.ClientState): Uint8Array;
                    toProtoMsg(message: _225.ClientState): _225.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _225.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _225.ConsensusState;
                    fromPartial(object: Partial<_225.ConsensusState>): _225.ConsensusState;
                    fromAmino(object: _225.ConsensusStateAmino): _225.ConsensusState;
                    toAmino(message: _225.ConsensusState): _225.ConsensusStateAmino;
                    fromAminoMsg(object: _225.ConsensusStateAminoMsg): _225.ConsensusState;
                    toAminoMsg(message: _225.ConsensusState): _225.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _225.ConsensusStateProtoMsg): _225.ConsensusState;
                    toProto(message: _225.ConsensusState): Uint8Array;
                    toProtoMsg(message: _225.ConsensusState): _225.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _225.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _225.Misbehaviour;
                    fromPartial(object: Partial<_225.Misbehaviour>): _225.Misbehaviour;
                    fromAmino(object: _225.MisbehaviourAmino): _225.Misbehaviour;
                    toAmino(message: _225.Misbehaviour): _225.MisbehaviourAmino;
                    fromAminoMsg(object: _225.MisbehaviourAminoMsg): _225.Misbehaviour;
                    toAminoMsg(message: _225.Misbehaviour): _225.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _225.MisbehaviourProtoMsg): _225.Misbehaviour;
                    toProto(message: _225.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _225.Misbehaviour): _225.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _225.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _225.Header;
                    fromPartial(object: Partial<_225.Header>): _225.Header;
                    fromAmino(object: _225.HeaderAmino): _225.Header;
                    toAmino(message: _225.Header): _225.HeaderAmino;
                    fromAminoMsg(object: _225.HeaderAminoMsg): _225.Header;
                    toAminoMsg(message: _225.Header): _225.HeaderAminoMsg;
                    fromProtoMsg(message: _225.HeaderProtoMsg): _225.Header;
                    toProto(message: _225.Header): Uint8Array;
                    toProtoMsg(message: _225.Header): _225.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    encode(message: _225.Fraction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _225.Fraction;
                    fromPartial(object: Partial<_225.Fraction>): _225.Fraction;
                    fromAmino(object: _225.FractionAmino): _225.Fraction;
                    toAmino(message: _225.Fraction): _225.FractionAmino;
                    fromAminoMsg(object: _225.FractionAminoMsg): _225.Fraction;
                    toAminoMsg(message: _225.Fraction): _225.FractionAminoMsg;
                    fromProtoMsg(message: _225.FractionProtoMsg): _225.Fraction;
                    toProto(message: _225.Fraction): Uint8Array;
                    toProtoMsg(message: _225.Fraction): _225.FractionProtoMsg;
                };
            };
        }
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                consensus: {
                    v1: import("../cosmos/consensus/v1/tx.rpc.msg").MsgClientImpl;
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
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/tx.rpc.msg").MsgClientImpl;
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
                        v1: _404.MsgClientImpl;
                    };
                    interchain_accounts: {
                        controller: {
                            v1: _405.MsgClientImpl;
                        };
                    };
                    transfer: {
                        v1: _406.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _407.MsgClientImpl;
                    };
                    client: {
                        v1: _408.MsgClientImpl;
                    };
                    connection: {
                        v1: _409.MsgClientImpl;
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
                        accountInfo(request: import("../cosmos/auth/v1beta1/query").QueryAccountInfoRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: import("../cosmos/autocli/v1/query").AppOptionsRequest): Promise<import("../cosmos/autocli/v1/query").AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalanceByDenomRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                        sendEnabled(request: import("../cosmos/bank/v1beta1/query").QuerySendEnabledRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySendEnabledResponse>;
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
                consensus: {
                    v1: {
                        params(request?: import("../cosmos/consensus/v1/query").QueryParamsRequest): Promise<import("../cosmos/consensus/v1/query").QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorDistributionInfo(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoResponse>;
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
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: import("../cosmos/orm/query/v1alpha1/query").GetRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").GetResponse>;
                            list(request: import("../cosmos/orm/query/v1alpha1/query").ListRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").ListResponse>;
                        };
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
                        txDecode(request: import("../cosmos/tx/v1beta1/service").TxDecodeRequest): Promise<import("../cosmos/tx/v1beta1/service").TxDecodeResponse>;
                        txEncode(request: import("../cosmos/tx/v1beta1/service").TxEncodeRequest): Promise<import("../cosmos/tx/v1beta1/service").TxEncodeResponse>;
                        txEncodeAmino(request: import("../cosmos/tx/v1beta1/service").TxEncodeAminoRequest): Promise<import("../cosmos/tx/v1beta1/service").TxEncodeAminoResponse>;
                        txDecodeAmino(request: import("../cosmos/tx/v1beta1/service").TxDecodeAminoRequest): Promise<import("../cosmos/tx/v1beta1/service").TxDecodeAminoResponse>;
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
                            incentivizedPackets(request: _191.QueryIncentivizedPacketsRequest): Promise<_191.QueryIncentivizedPacketsResponse>;
                            incentivizedPacket(request: _191.QueryIncentivizedPacketRequest): Promise<_191.QueryIncentivizedPacketResponse>;
                            incentivizedPacketsForChannel(request: _191.QueryIncentivizedPacketsForChannelRequest): Promise<_191.QueryIncentivizedPacketsForChannelResponse>;
                            totalRecvFees(request: _191.QueryTotalRecvFeesRequest): Promise<_191.QueryTotalRecvFeesResponse>;
                            totalAckFees(request: _191.QueryTotalAckFeesRequest): Promise<_191.QueryTotalAckFeesResponse>;
                            totalTimeoutFees(request: _191.QueryTotalTimeoutFeesRequest): Promise<_191.QueryTotalTimeoutFeesResponse>;
                            payee(request: _191.QueryPayeeRequest): Promise<_191.QueryPayeeResponse>;
                            counterpartyPayee(request: _191.QueryCounterpartyPayeeRequest): Promise<_191.QueryCounterpartyPayeeResponse>;
                            feeEnabledChannels(request: _191.QueryFeeEnabledChannelsRequest): Promise<_191.QueryFeeEnabledChannelsResponse>;
                            feeEnabledChannel(request: _191.QueryFeeEnabledChannelRequest): Promise<_191.QueryFeeEnabledChannelResponse>;
                        };
                    };
                    interchain_accounts: {
                        controller: {
                            v1: {
                                interchainAccount(request: _194.QueryInterchainAccountRequest): Promise<_194.QueryInterchainAccountResponse>;
                                params(request?: _194.QueryParamsRequest): Promise<_194.QueryParamsResponse>;
                            };
                        };
                        host: {
                            v1: {
                                params(request?: _198.QueryParamsRequest): Promise<_198.QueryParamsResponse>;
                            };
                        };
                    };
                    transfer: {
                        v1: {
                            denomTraces(request?: _204.QueryDenomTracesRequest): Promise<_204.QueryDenomTracesResponse>;
                            denomTrace(request: _204.QueryDenomTraceRequest): Promise<_204.QueryDenomTraceResponse>;
                            params(request?: _204.QueryParamsRequest): Promise<_204.QueryParamsResponse>;
                            denomHash(request: _204.QueryDenomHashRequest): Promise<_204.QueryDenomHashResponse>;
                            escrowAddress(request: _204.QueryEscrowAddressRequest): Promise<_204.QueryEscrowAddressResponse>;
                            totalEscrowForDenom(request: _204.QueryTotalEscrowForDenomRequest): Promise<_204.QueryTotalEscrowForDenomResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _210.QueryChannelRequest): Promise<_210.QueryChannelResponse>;
                            channels(request?: _210.QueryChannelsRequest): Promise<_210.QueryChannelsResponse>;
                            connectionChannels(request: _210.QueryConnectionChannelsRequest): Promise<_210.QueryConnectionChannelsResponse>;
                            channelClientState(request: _210.QueryChannelClientStateRequest): Promise<_210.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _210.QueryChannelConsensusStateRequest): Promise<_210.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _210.QueryPacketCommitmentRequest): Promise<_210.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _210.QueryPacketCommitmentsRequest): Promise<_210.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _210.QueryPacketReceiptRequest): Promise<_210.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _210.QueryPacketAcknowledgementRequest): Promise<_210.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _210.QueryPacketAcknowledgementsRequest): Promise<_210.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _210.QueryUnreceivedPacketsRequest): Promise<_210.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _210.QueryUnreceivedAcksRequest): Promise<_210.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _210.QueryNextSequenceReceiveRequest): Promise<_210.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _214.QueryClientStateRequest): Promise<_214.QueryClientStateResponse>;
                            clientStates(request?: _214.QueryClientStatesRequest): Promise<_214.QueryClientStatesResponse>;
                            consensusState(request: _214.QueryConsensusStateRequest): Promise<_214.QueryConsensusStateResponse>;
                            consensusStates(request: _214.QueryConsensusStatesRequest): Promise<_214.QueryConsensusStatesResponse>;
                            consensusStateHeights(request: _214.QueryConsensusStateHeightsRequest): Promise<_214.QueryConsensusStateHeightsResponse>;
                            clientStatus(request: _214.QueryClientStatusRequest): Promise<_214.QueryClientStatusResponse>;
                            clientParams(request?: _214.QueryClientParamsRequest): Promise<_214.QueryClientParamsResponse>;
                            upgradedClientState(request?: _214.QueryUpgradedClientStateRequest): Promise<_214.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _214.QueryUpgradedConsensusStateRequest): Promise<_214.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _219.QueryConnectionRequest): Promise<_219.QueryConnectionResponse>;
                            connections(request?: _219.QueryConnectionsRequest): Promise<_219.QueryConnectionsResponse>;
                            clientConnections(request: _219.QueryClientConnectionsRequest): Promise<_219.QueryClientConnectionsResponse>;
                            connectionClientState(request: _219.QueryConnectionClientStateRequest): Promise<_219.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _219.QueryConnectionConsensusStateRequest): Promise<_219.QueryConnectionConsensusStateResponse>;
                            connectionParams(request?: _219.QueryConnectionParamsRequest): Promise<_219.QueryConnectionParamsResponse>;
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
                consensus: {
                    v1: import("../cosmos/consensus/v1/query.lcd").LCDQueryClient;
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
                        v1: _390.LCDQueryClient;
                    };
                    interchain_accounts: {
                        controller: {
                            v1: _391.LCDQueryClient;
                        };
                        host: {
                            v1: _392.LCDQueryClient;
                        };
                    };
                    transfer: {
                        v1: _393.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _394.LCDQueryClient;
                    };
                    client: {
                        v1: _395.LCDQueryClient;
                    };
                    connection: {
                        v1: _396.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
