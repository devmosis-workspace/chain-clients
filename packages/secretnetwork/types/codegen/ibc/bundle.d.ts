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
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
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
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
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
                        toAmino: ({ portId, channelId, relayer, payee }: _101.MsgRegisterPayee) => {
                            port_id: string;
                            channel_id: string;
                            relayer: string;
                            payee: string;
                        };
                        fromAmino: ({ port_id, channel_id, relayer, payee }: {
                            port_id: string;
                            channel_id: string;
                            relayer: string;
                            payee: string;
                        }) => _101.MsgRegisterPayee;
                    };
                    "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, relayer, counterpartyPayee }: _101.MsgRegisterCounterpartyPayee) => {
                            port_id: string;
                            channel_id: string;
                            relayer: string;
                            counterparty_payee: string;
                        };
                        fromAmino: ({ port_id, channel_id, relayer, counterparty_payee }: {
                            port_id: string;
                            channel_id: string;
                            relayer: string;
                            counterparty_payee: string;
                        }) => _101.MsgRegisterCounterpartyPayee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFee": {
                        aminoType: string;
                        toAmino: ({ fee, sourcePortId, sourceChannelId, signer, relayers }: _101.MsgPayPacketFee) => {
                            fee: {
                                recv_fee: {
                                    denom: string;
                                    amount: string;
                                }[];
                                ack_fee: {
                                    denom: string;
                                    amount: string;
                                }[];
                                timeout_fee: {
                                    denom: string;
                                    amount: string;
                                }[];
                            };
                            source_port_id: string;
                            source_channel_id: string;
                            signer: string;
                            relayers: string[];
                        };
                        fromAmino: ({ fee, source_port_id, source_channel_id, signer, relayers }: {
                            fee: {
                                recv_fee: {
                                    denom: string;
                                    amount: string;
                                }[];
                                ack_fee: {
                                    denom: string;
                                    amount: string;
                                }[];
                                timeout_fee: {
                                    denom: string;
                                    amount: string;
                                }[];
                            };
                            source_port_id: string;
                            source_channel_id: string;
                            signer: string;
                            relayers: string[];
                        }) => _101.MsgPayPacketFee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFeeAsync": {
                        aminoType: string;
                        toAmino: ({ packetId, packetFee }: _101.MsgPayPacketFeeAsync) => {
                            packet_id: {
                                port_id: string;
                                channel_id: string;
                                sequence: string;
                            };
                            packet_fee: {
                                fee: {
                                    recv_fee: {
                                        denom: string;
                                        amount: string;
                                    }[];
                                    ack_fee: {
                                        denom: string;
                                        amount: string;
                                    }[];
                                    timeout_fee: {
                                        denom: string;
                                        amount: string;
                                    }[];
                                };
                                refund_address: string;
                                relayers: string[];
                            };
                        };
                        fromAmino: ({ packet_id, packet_fee }: {
                            packet_id: {
                                port_id: string;
                                channel_id: string;
                                sequence: string;
                            };
                            packet_fee: {
                                fee: {
                                    recv_fee: {
                                        denom: string;
                                        amount: string;
                                    }[];
                                    ack_fee: {
                                        denom: string;
                                        amount: string;
                                    }[];
                                    timeout_fee: {
                                        denom: string;
                                        amount: string;
                                    }[];
                                };
                                refund_address: string;
                                relayers: string[];
                            };
                        }) => _101.MsgPayPacketFeeAsync;
                    };
                };
                MsgRegisterPayee: {
                    encode(message: _101.MsgRegisterPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _101.MsgRegisterPayee;
                    fromPartial(object: Partial<_101.MsgRegisterPayee>): _101.MsgRegisterPayee;
                };
                MsgRegisterPayeeResponse: {
                    encode(_: _101.MsgRegisterPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _101.MsgRegisterPayeeResponse;
                    fromPartial(_: Partial<_101.MsgRegisterPayeeResponse>): _101.MsgRegisterPayeeResponse;
                };
                MsgRegisterCounterpartyPayee: {
                    encode(message: _101.MsgRegisterCounterpartyPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _101.MsgRegisterCounterpartyPayee;
                    fromPartial(object: Partial<_101.MsgRegisterCounterpartyPayee>): _101.MsgRegisterCounterpartyPayee;
                };
                MsgRegisterCounterpartyPayeeResponse: {
                    encode(_: _101.MsgRegisterCounterpartyPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _101.MsgRegisterCounterpartyPayeeResponse;
                    fromPartial(_: Partial<_101.MsgRegisterCounterpartyPayeeResponse>): _101.MsgRegisterCounterpartyPayeeResponse;
                };
                MsgPayPacketFee: {
                    encode(message: _101.MsgPayPacketFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _101.MsgPayPacketFee;
                    fromPartial(object: Partial<_101.MsgPayPacketFee>): _101.MsgPayPacketFee;
                };
                MsgPayPacketFeeResponse: {
                    encode(_: _101.MsgPayPacketFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _101.MsgPayPacketFeeResponse;
                    fromPartial(_: Partial<_101.MsgPayPacketFeeResponse>): _101.MsgPayPacketFeeResponse;
                };
                MsgPayPacketFeeAsync: {
                    encode(message: _101.MsgPayPacketFeeAsync, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _101.MsgPayPacketFeeAsync;
                    fromPartial(object: Partial<_101.MsgPayPacketFeeAsync>): _101.MsgPayPacketFeeAsync;
                };
                MsgPayPacketFeeAsyncResponse: {
                    encode(_: _101.MsgPayPacketFeeAsyncResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _101.MsgPayPacketFeeAsyncResponse;
                    fromPartial(_: Partial<_101.MsgPayPacketFeeAsyncResponse>): _101.MsgPayPacketFeeAsyncResponse;
                };
                QueryIncentivizedPacketsRequest: {
                    encode(message: _100.QueryIncentivizedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _100.QueryIncentivizedPacketsRequest;
                    fromPartial(object: Partial<_100.QueryIncentivizedPacketsRequest>): _100.QueryIncentivizedPacketsRequest;
                };
                QueryIncentivizedPacketsResponse: {
                    encode(message: _100.QueryIncentivizedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _100.QueryIncentivizedPacketsResponse;
                    fromPartial(object: Partial<_100.QueryIncentivizedPacketsResponse>): _100.QueryIncentivizedPacketsResponse;
                };
                QueryIncentivizedPacketRequest: {
                    encode(message: _100.QueryIncentivizedPacketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _100.QueryIncentivizedPacketRequest;
                    fromPartial(object: Partial<_100.QueryIncentivizedPacketRequest>): _100.QueryIncentivizedPacketRequest;
                };
                QueryIncentivizedPacketResponse: {
                    encode(message: _100.QueryIncentivizedPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _100.QueryIncentivizedPacketResponse;
                    fromPartial(object: Partial<_100.QueryIncentivizedPacketResponse>): _100.QueryIncentivizedPacketResponse;
                };
                QueryIncentivizedPacketsForChannelRequest: {
                    encode(message: _100.QueryIncentivizedPacketsForChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _100.QueryIncentivizedPacketsForChannelRequest;
                    fromPartial(object: Partial<_100.QueryIncentivizedPacketsForChannelRequest>): _100.QueryIncentivizedPacketsForChannelRequest;
                };
                QueryIncentivizedPacketsForChannelResponse: {
                    encode(message: _100.QueryIncentivizedPacketsForChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _100.QueryIncentivizedPacketsForChannelResponse;
                    fromPartial(object: Partial<_100.QueryIncentivizedPacketsForChannelResponse>): _100.QueryIncentivizedPacketsForChannelResponse;
                };
                QueryTotalRecvFeesRequest: {
                    encode(message: _100.QueryTotalRecvFeesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _100.QueryTotalRecvFeesRequest;
                    fromPartial(object: Partial<_100.QueryTotalRecvFeesRequest>): _100.QueryTotalRecvFeesRequest;
                };
                QueryTotalRecvFeesResponse: {
                    encode(message: _100.QueryTotalRecvFeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _100.QueryTotalRecvFeesResponse;
                    fromPartial(object: Partial<_100.QueryTotalRecvFeesResponse>): _100.QueryTotalRecvFeesResponse;
                };
                QueryTotalAckFeesRequest: {
                    encode(message: _100.QueryTotalAckFeesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _100.QueryTotalAckFeesRequest;
                    fromPartial(object: Partial<_100.QueryTotalAckFeesRequest>): _100.QueryTotalAckFeesRequest;
                };
                QueryTotalAckFeesResponse: {
                    encode(message: _100.QueryTotalAckFeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _100.QueryTotalAckFeesResponse;
                    fromPartial(object: Partial<_100.QueryTotalAckFeesResponse>): _100.QueryTotalAckFeesResponse;
                };
                QueryTotalTimeoutFeesRequest: {
                    encode(message: _100.QueryTotalTimeoutFeesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _100.QueryTotalTimeoutFeesRequest;
                    fromPartial(object: Partial<_100.QueryTotalTimeoutFeesRequest>): _100.QueryTotalTimeoutFeesRequest;
                };
                QueryTotalTimeoutFeesResponse: {
                    encode(message: _100.QueryTotalTimeoutFeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _100.QueryTotalTimeoutFeesResponse;
                    fromPartial(object: Partial<_100.QueryTotalTimeoutFeesResponse>): _100.QueryTotalTimeoutFeesResponse;
                };
                QueryPayeeRequest: {
                    encode(message: _100.QueryPayeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _100.QueryPayeeRequest;
                    fromPartial(object: Partial<_100.QueryPayeeRequest>): _100.QueryPayeeRequest;
                };
                QueryPayeeResponse: {
                    encode(message: _100.QueryPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _100.QueryPayeeResponse;
                    fromPartial(object: Partial<_100.QueryPayeeResponse>): _100.QueryPayeeResponse;
                };
                QueryCounterpartyPayeeRequest: {
                    encode(message: _100.QueryCounterpartyPayeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _100.QueryCounterpartyPayeeRequest;
                    fromPartial(object: Partial<_100.QueryCounterpartyPayeeRequest>): _100.QueryCounterpartyPayeeRequest;
                };
                QueryCounterpartyPayeeResponse: {
                    encode(message: _100.QueryCounterpartyPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _100.QueryCounterpartyPayeeResponse;
                    fromPartial(object: Partial<_100.QueryCounterpartyPayeeResponse>): _100.QueryCounterpartyPayeeResponse;
                };
                QueryFeeEnabledChannelsRequest: {
                    encode(message: _100.QueryFeeEnabledChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _100.QueryFeeEnabledChannelsRequest;
                    fromPartial(object: Partial<_100.QueryFeeEnabledChannelsRequest>): _100.QueryFeeEnabledChannelsRequest;
                };
                QueryFeeEnabledChannelsResponse: {
                    encode(message: _100.QueryFeeEnabledChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _100.QueryFeeEnabledChannelsResponse;
                    fromPartial(object: Partial<_100.QueryFeeEnabledChannelsResponse>): _100.QueryFeeEnabledChannelsResponse;
                };
                QueryFeeEnabledChannelRequest: {
                    encode(message: _100.QueryFeeEnabledChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _100.QueryFeeEnabledChannelRequest;
                    fromPartial(object: Partial<_100.QueryFeeEnabledChannelRequest>): _100.QueryFeeEnabledChannelRequest;
                };
                QueryFeeEnabledChannelResponse: {
                    encode(message: _100.QueryFeeEnabledChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _100.QueryFeeEnabledChannelResponse;
                    fromPartial(object: Partial<_100.QueryFeeEnabledChannelResponse>): _100.QueryFeeEnabledChannelResponse;
                };
                Metadata: {
                    encode(message: _99.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _99.Metadata;
                    fromPartial(object: Partial<_99.Metadata>): _99.Metadata;
                };
                GenesisState: {
                    encode(message: _98.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _98.GenesisState;
                    fromPartial(object: Partial<_98.GenesisState>): _98.GenesisState;
                };
                FeeEnabledChannel: {
                    encode(message: _98.FeeEnabledChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _98.FeeEnabledChannel;
                    fromPartial(object: Partial<_98.FeeEnabledChannel>): _98.FeeEnabledChannel;
                };
                RegisteredPayee: {
                    encode(message: _98.RegisteredPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _98.RegisteredPayee;
                    fromPartial(object: Partial<_98.RegisteredPayee>): _98.RegisteredPayee;
                };
                RegisteredCounterpartyPayee: {
                    encode(message: _98.RegisteredCounterpartyPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _98.RegisteredCounterpartyPayee;
                    fromPartial(object: Partial<_98.RegisteredCounterpartyPayee>): _98.RegisteredCounterpartyPayee;
                };
                ForwardRelayerAddress: {
                    encode(message: _98.ForwardRelayerAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _98.ForwardRelayerAddress;
                    fromPartial(object: Partial<_98.ForwardRelayerAddress>): _98.ForwardRelayerAddress;
                };
                Fee: {
                    encode(message: _97.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _97.Fee;
                    fromPartial(object: Partial<_97.Fee>): _97.Fee;
                };
                PacketFee: {
                    encode(message: _97.PacketFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _97.PacketFee;
                    fromPartial(object: Partial<_97.PacketFee>): _97.PacketFee;
                };
                PacketFees: {
                    encode(message: _97.PacketFees, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _97.PacketFees;
                    fromPartial(object: Partial<_97.PacketFees>): _97.PacketFees;
                };
                IdentifiedPacketFees: {
                    encode(message: _97.IdentifiedPacketFees, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _97.IdentifiedPacketFees;
                    fromPartial(object: Partial<_97.IdentifiedPacketFees>): _97.IdentifiedPacketFees;
                };
                IncentivizedAcknowledgement: {
                    encode(message: _96.IncentivizedAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _96.IncentivizedAcknowledgement;
                    fromPartial(object: Partial<_96.IncentivizedAcknowledgement>): _96.IncentivizedAcknowledgement;
                };
            };
        }
        namespace interchain_accounts {
            namespace controller {
                const v1: {
                    QueryClientImpl: typeof _254.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        interchainAccount(request: _103.QueryInterchainAccountRequest): Promise<_103.QueryInterchainAccountResponse>;
                        params(request?: _103.QueryParamsRequest): Promise<_103.QueryParamsResponse>;
                    };
                    LCDQueryClient: typeof _247.LCDQueryClient;
                    QueryInterchainAccountRequest: {
                        encode(message: _103.QueryInterchainAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        fromJSON(object: any): _103.QueryInterchainAccountRequest;
                        fromPartial(object: Partial<_103.QueryInterchainAccountRequest>): _103.QueryInterchainAccountRequest;
                    };
                    QueryInterchainAccountResponse: {
                        encode(message: _103.QueryInterchainAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        fromJSON(object: any): _103.QueryInterchainAccountResponse;
                        fromPartial(object: Partial<_103.QueryInterchainAccountResponse>): _103.QueryInterchainAccountResponse;
                    };
                    QueryParamsRequest: {
                        encode(_: _103.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        fromJSON(_: any): _103.QueryParamsRequest;
                        fromPartial(_: Partial<_103.QueryParamsRequest>): _103.QueryParamsRequest;
                    };
                    QueryParamsResponse: {
                        encode(message: _103.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        fromJSON(object: any): _103.QueryParamsResponse;
                        fromPartial(object: Partial<_103.QueryParamsResponse>): _103.QueryParamsResponse;
                    };
                    Params: {
                        encode(message: _102.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        fromJSON(object: any): _102.Params;
                        fromPartial(object: Partial<_102.Params>): _102.Params;
                    };
                };
            }
            namespace host {
                const v1: {
                    QueryClientImpl: typeof _255.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        params(request?: _105.QueryParamsRequest): Promise<_105.QueryParamsResponse>;
                    };
                    LCDQueryClient: typeof _248.LCDQueryClient;
                    QueryParamsRequest: {
                        encode(_: _105.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        fromJSON(_: any): _105.QueryParamsRequest;
                        fromPartial(_: Partial<_105.QueryParamsRequest>): _105.QueryParamsRequest;
                    };
                    QueryParamsResponse: {
                        encode(message: _105.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        fromJSON(object: any): _105.QueryParamsResponse;
                        fromPartial(object: Partial<_105.QueryParamsResponse>): _105.QueryParamsResponse;
                    };
                    Params: {
                        encode(message: _104.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        fromJSON(object: any): _104.Params;
                        fromPartial(object: Partial<_104.Params>): _104.Params;
                    };
                };
            }
            const v1: {
                typeFromJSON(object: any): _109.Type;
                typeToJSON(object: _109.Type): string;
                Type: typeof _109.Type;
                TypeSDKType: typeof _109.Type;
                InterchainAccountPacketData: {
                    encode(message: _109.InterchainAccountPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _109.InterchainAccountPacketData;
                    fromPartial(object: Partial<_109.InterchainAccountPacketData>): _109.InterchainAccountPacketData;
                };
                CosmosTx: {
                    encode(message: _109.CosmosTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _109.CosmosTx;
                    fromPartial(object: Partial<_109.CosmosTx>): _109.CosmosTx;
                };
                Metadata: {
                    encode(message: _108.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.Metadata;
                    fromPartial(object: Partial<_108.Metadata>): _108.Metadata;
                };
                GenesisState: {
                    encode(message: _107.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _107.GenesisState;
                    fromPartial(object: Partial<_107.GenesisState>): _107.GenesisState;
                };
                ControllerGenesisState: {
                    encode(message: _107.ControllerGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _107.ControllerGenesisState;
                    fromPartial(object: Partial<_107.ControllerGenesisState>): _107.ControllerGenesisState;
                };
                HostGenesisState: {
                    encode(message: _107.HostGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _107.HostGenesisState;
                    fromPartial(object: Partial<_107.HostGenesisState>): _107.HostGenesisState;
                };
                ActiveChannel: {
                    encode(message: _107.ActiveChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _107.ActiveChannel;
                    fromPartial(object: Partial<_107.ActiveChannel>): _107.ActiveChannel;
                };
                RegisteredInterchainAccount: {
                    encode(message: _107.RegisteredInterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _107.RegisteredInterchainAccount;
                    fromPartial(object: Partial<_107.RegisteredInterchainAccount>): _107.RegisteredInterchainAccount;
                };
                InterchainAccount: {
                    encode(message: _106.InterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _106.InterchainAccount;
                    fromPartial(object: Partial<_106.InterchainAccount>): _106.InterchainAccount;
                };
            };
        }
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _261.MsgClientImpl;
                QueryClientImpl: typeof _256.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _111.QueryDenomTraceRequest): Promise<_111.QueryDenomTraceResponse>;
                    denomTraces(request?: _111.QueryDenomTracesRequest): Promise<_111.QueryDenomTracesResponse>;
                    params(request?: _111.QueryParamsRequest): Promise<_111.QueryParamsResponse>;
                    denomHash(request: _111.QueryDenomHashRequest): Promise<_111.QueryDenomHashResponse>;
                    escrowAddress(request: _111.QueryEscrowAddressRequest): Promise<_111.QueryEscrowAddressResponse>;
                };
                LCDQueryClient: typeof _249.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
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
                        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp, memo }: _113.MsgTransfer) => {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("../helpers").AminoHeight;
                            timeout_timestamp: string;
                            memo: string;
                        };
                        fromAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp, memo }: {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("../helpers").AminoHeight;
                            timeout_timestamp: string;
                            memo: string;
                        }) => _113.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _113.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _113.MsgTransfer;
                    fromPartial(object: Partial<_113.MsgTransfer>): _113.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(message: _113.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _113.MsgTransferResponse;
                    fromPartial(object: Partial<_113.MsgTransferResponse>): _113.MsgTransferResponse;
                };
                DenomTrace: {
                    encode(message: _112.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _112.DenomTrace;
                    fromPartial(object: Partial<_112.DenomTrace>): _112.DenomTrace;
                };
                Params: {
                    encode(message: _112.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _112.Params;
                    fromPartial(object: Partial<_112.Params>): _112.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _111.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_111.QueryDenomTraceRequest>): _111.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _111.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_111.QueryDenomTraceResponse>): _111.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _111.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_111.QueryDenomTracesRequest>): _111.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _111.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_111.QueryDenomTracesResponse>): _111.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _111.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _111.QueryParamsRequest;
                    fromPartial(_: Partial<_111.QueryParamsRequest>): _111.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _111.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.QueryParamsResponse;
                    fromPartial(object: Partial<_111.QueryParamsResponse>): _111.QueryParamsResponse;
                };
                QueryDenomHashRequest: {
                    encode(message: _111.QueryDenomHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.QueryDenomHashRequest;
                    fromPartial(object: Partial<_111.QueryDenomHashRequest>): _111.QueryDenomHashRequest;
                };
                QueryDenomHashResponse: {
                    encode(message: _111.QueryDenomHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.QueryDenomHashResponse;
                    fromPartial(object: Partial<_111.QueryDenomHashResponse>): _111.QueryDenomHashResponse;
                };
                QueryEscrowAddressRequest: {
                    encode(message: _111.QueryEscrowAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.QueryEscrowAddressRequest;
                    fromPartial(object: Partial<_111.QueryEscrowAddressRequest>): _111.QueryEscrowAddressRequest;
                };
                QueryEscrowAddressResponse: {
                    encode(message: _111.QueryEscrowAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.QueryEscrowAddressResponse;
                    fromPartial(object: Partial<_111.QueryEscrowAddressResponse>): _111.QueryEscrowAddressResponse;
                };
                GenesisState: {
                    encode(message: _110.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _110.GenesisState;
                    fromPartial(object: Partial<_110.GenesisState>): _110.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _114.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _114.FungibleTokenPacketData;
                    fromPartial(object: Partial<_114.FungibleTokenPacketData>): _114.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _262.MsgClientImpl;
                QueryClientImpl: typeof _257.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
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
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
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
                        toAmino: ({ portId, channel, signer }: _118.MsgChannelOpenInit) => {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel, signer }: {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        }) => _118.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: _118.MsgChannelOpenTry) => {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, previous_channel_id, channel, counterparty_version, proof_init, proof_height, signer }: {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _118.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: _118.MsgChannelOpenAck) => {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, counterparty_channel_id, counterparty_version, proof_try, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _118.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: _118.MsgChannelOpenConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_ack, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _118.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, signer }: _118.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _118.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: _118.MsgChannelCloseConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_init, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _118.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proofCommitment, proofHeight, signer }: _118.MsgRecvPacket) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_commitment, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _118.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: _118.MsgTimeout) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _118.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: _118.MsgTimeoutOnClose) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_close, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _118.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: _118.MsgAcknowledgement) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, acknowledgement, proof_acked, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _118.MsgAcknowledgement;
                    };
                };
                responseResultTypeFromJSON(object: any): _118.ResponseResultType;
                responseResultTypeToJSON(object: _118.ResponseResultType): string;
                ResponseResultType: typeof _118.ResponseResultType;
                ResponseResultTypeSDKType: typeof _118.ResponseResultType;
                MsgChannelOpenInit: {
                    encode(message: _118.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _118.MsgChannelOpenInit;
                    fromPartial(object: Partial<_118.MsgChannelOpenInit>): _118.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(message: _118.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _118.MsgChannelOpenInitResponse;
                    fromPartial(object: Partial<_118.MsgChannelOpenInitResponse>): _118.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _118.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _118.MsgChannelOpenTry;
                    fromPartial(object: Partial<_118.MsgChannelOpenTry>): _118.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(message: _118.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _118.MsgChannelOpenTryResponse;
                    fromPartial(object: Partial<_118.MsgChannelOpenTryResponse>): _118.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _118.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _118.MsgChannelOpenAck;
                    fromPartial(object: Partial<_118.MsgChannelOpenAck>): _118.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _118.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _118.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_118.MsgChannelOpenAckResponse>): _118.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _118.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _118.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_118.MsgChannelOpenConfirm>): _118.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _118.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _118.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_118.MsgChannelOpenConfirmResponse>): _118.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _118.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _118.MsgChannelCloseInit;
                    fromPartial(object: Partial<_118.MsgChannelCloseInit>): _118.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _118.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _118.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_118.MsgChannelCloseInitResponse>): _118.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _118.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _118.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_118.MsgChannelCloseConfirm>): _118.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _118.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _118.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_118.MsgChannelCloseConfirmResponse>): _118.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _118.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _118.MsgRecvPacket;
                    fromPartial(object: Partial<_118.MsgRecvPacket>): _118.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(message: _118.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _118.MsgRecvPacketResponse;
                    fromPartial(object: Partial<_118.MsgRecvPacketResponse>): _118.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _118.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _118.MsgTimeout;
                    fromPartial(object: Partial<_118.MsgTimeout>): _118.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(message: _118.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _118.MsgTimeoutResponse;
                    fromPartial(object: Partial<_118.MsgTimeoutResponse>): _118.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _118.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _118.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_118.MsgTimeoutOnClose>): _118.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(message: _118.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _118.MsgTimeoutOnCloseResponse;
                    fromPartial(object: Partial<_118.MsgTimeoutOnCloseResponse>): _118.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _118.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _118.MsgAcknowledgement;
                    fromPartial(object: Partial<_118.MsgAcknowledgement>): _118.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(message: _118.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _118.MsgAcknowledgementResponse;
                    fromPartial(object: Partial<_118.MsgAcknowledgementResponse>): _118.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _117.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.QueryChannelRequest;
                    fromPartial(object: Partial<_117.QueryChannelRequest>): _117.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _117.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.QueryChannelResponse;
                    fromPartial(object: Partial<_117.QueryChannelResponse>): _117.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _117.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.QueryChannelsRequest;
                    fromPartial(object: Partial<_117.QueryChannelsRequest>): _117.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _117.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.QueryChannelsResponse;
                    fromPartial(object: Partial<_117.QueryChannelsResponse>): _117.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _117.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.QueryConnectionChannelsRequest;
                    fromPartial(object: Partial<_117.QueryConnectionChannelsRequest>): _117.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _117.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.QueryConnectionChannelsResponse;
                    fromPartial(object: Partial<_117.QueryConnectionChannelsResponse>): _117.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _117.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.QueryChannelClientStateRequest;
                    fromPartial(object: Partial<_117.QueryChannelClientStateRequest>): _117.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _117.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.QueryChannelClientStateResponse;
                    fromPartial(object: Partial<_117.QueryChannelClientStateResponse>): _117.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _117.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.QueryChannelConsensusStateRequest;
                    fromPartial(object: Partial<_117.QueryChannelConsensusStateRequest>): _117.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _117.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.QueryChannelConsensusStateResponse;
                    fromPartial(object: Partial<_117.QueryChannelConsensusStateResponse>): _117.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _117.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.QueryPacketCommitmentRequest;
                    fromPartial(object: Partial<_117.QueryPacketCommitmentRequest>): _117.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _117.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.QueryPacketCommitmentResponse;
                    fromPartial(object: Partial<_117.QueryPacketCommitmentResponse>): _117.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _117.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.QueryPacketCommitmentsRequest;
                    fromPartial(object: Partial<_117.QueryPacketCommitmentsRequest>): _117.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _117.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.QueryPacketCommitmentsResponse;
                    fromPartial(object: Partial<_117.QueryPacketCommitmentsResponse>): _117.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _117.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.QueryPacketReceiptRequest;
                    fromPartial(object: Partial<_117.QueryPacketReceiptRequest>): _117.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _117.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.QueryPacketReceiptResponse;
                    fromPartial(object: Partial<_117.QueryPacketReceiptResponse>): _117.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _117.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.QueryPacketAcknowledgementRequest;
                    fromPartial(object: Partial<_117.QueryPacketAcknowledgementRequest>): _117.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _117.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.QueryPacketAcknowledgementResponse;
                    fromPartial(object: Partial<_117.QueryPacketAcknowledgementResponse>): _117.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _117.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: Partial<_117.QueryPacketAcknowledgementsRequest>): _117.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _117.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: Partial<_117.QueryPacketAcknowledgementsResponse>): _117.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _117.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.QueryUnreceivedPacketsRequest;
                    fromPartial(object: Partial<_117.QueryUnreceivedPacketsRequest>): _117.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _117.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.QueryUnreceivedPacketsResponse;
                    fromPartial(object: Partial<_117.QueryUnreceivedPacketsResponse>): _117.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _117.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.QueryUnreceivedAcksRequest;
                    fromPartial(object: Partial<_117.QueryUnreceivedAcksRequest>): _117.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _117.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.QueryUnreceivedAcksResponse;
                    fromPartial(object: Partial<_117.QueryUnreceivedAcksResponse>): _117.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _117.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.QueryNextSequenceReceiveRequest;
                    fromPartial(object: Partial<_117.QueryNextSequenceReceiveRequest>): _117.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _117.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.QueryNextSequenceReceiveResponse;
                    fromPartial(object: Partial<_117.QueryNextSequenceReceiveResponse>): _117.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _116.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _116.GenesisState;
                    fromPartial(object: Partial<_116.GenesisState>): _116.GenesisState;
                };
                PacketSequence: {
                    encode(message: _116.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _116.PacketSequence;
                    fromPartial(object: Partial<_116.PacketSequence>): _116.PacketSequence;
                };
                stateFromJSON(object: any): _115.State;
                stateToJSON(object: _115.State): string;
                orderFromJSON(object: any): _115.Order;
                orderToJSON(object: _115.Order): string;
                State: typeof _115.State;
                StateSDKType: typeof _115.State;
                Order: typeof _115.Order;
                OrderSDKType: typeof _115.Order;
                Channel: {
                    encode(message: _115.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.Channel;
                    fromPartial(object: Partial<_115.Channel>): _115.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _115.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.IdentifiedChannel;
                    fromPartial(object: Partial<_115.IdentifiedChannel>): _115.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _115.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.Counterparty;
                    fromPartial(object: Partial<_115.Counterparty>): _115.Counterparty;
                };
                Packet: {
                    encode(message: _115.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.Packet;
                    fromPartial(object: Partial<_115.Packet>): _115.Packet;
                };
                PacketState: {
                    encode(message: _115.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.PacketState;
                    fromPartial(object: Partial<_115.PacketState>): _115.PacketState;
                };
                PacketId: {
                    encode(message: _115.PacketId, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.PacketId;
                    fromPartial(object: Partial<_115.PacketId>): _115.PacketId;
                };
                Acknowledgement: {
                    encode(message: _115.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.Acknowledgement;
                    fromPartial(object: Partial<_115.Acknowledgement>): _115.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _263.MsgClientImpl;
                QueryClientImpl: typeof _258.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
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
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
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
                        toAmino: ({ clientState, consensusState, signer }: _122.MsgCreateClient) => {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_state, consensus_state, signer }: {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _122.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ clientId, header, signer }: _122.MsgUpdateClient) => {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, header, signer }: {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _122.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer }: _122.MsgUpgradeClient) => {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        };
                        fromAmino: ({ client_id, client_state, consensus_state, proof_upgrade_client, proof_upgrade_consensus_state, signer }: {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        }) => _122.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ clientId, misbehaviour, signer }: _122.MsgSubmitMisbehaviour) => {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, misbehaviour, signer }: {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _122.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _122.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _122.MsgCreateClient;
                    fromPartial(object: Partial<_122.MsgCreateClient>): _122.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _122.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _122.MsgCreateClientResponse;
                    fromPartial(_: Partial<_122.MsgCreateClientResponse>): _122.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _122.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _122.MsgUpdateClient;
                    fromPartial(object: Partial<_122.MsgUpdateClient>): _122.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _122.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _122.MsgUpdateClientResponse;
                    fromPartial(_: Partial<_122.MsgUpdateClientResponse>): _122.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _122.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _122.MsgUpgradeClient;
                    fromPartial(object: Partial<_122.MsgUpgradeClient>): _122.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _122.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _122.MsgUpgradeClientResponse;
                    fromPartial(_: Partial<_122.MsgUpgradeClientResponse>): _122.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _122.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _122.MsgSubmitMisbehaviour;
                    fromPartial(object: Partial<_122.MsgSubmitMisbehaviour>): _122.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _122.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _122.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: Partial<_122.MsgSubmitMisbehaviourResponse>): _122.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _121.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryClientStateRequest;
                    fromPartial(object: Partial<_121.QueryClientStateRequest>): _121.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _121.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryClientStateResponse;
                    fromPartial(object: Partial<_121.QueryClientStateResponse>): _121.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _121.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryClientStatesRequest;
                    fromPartial(object: Partial<_121.QueryClientStatesRequest>): _121.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _121.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryClientStatesResponse;
                    fromPartial(object: Partial<_121.QueryClientStatesResponse>): _121.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _121.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_121.QueryConsensusStateRequest>): _121.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _121.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_121.QueryConsensusStateResponse>): _121.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _121.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_121.QueryConsensusStatesRequest>): _121.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _121.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_121.QueryConsensusStatesResponse>): _121.QueryConsensusStatesResponse;
                };
                QueryConsensusStateHeightsRequest: {
                    encode(message: _121.QueryConsensusStateHeightsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryConsensusStateHeightsRequest;
                    fromPartial(object: Partial<_121.QueryConsensusStateHeightsRequest>): _121.QueryConsensusStateHeightsRequest;
                };
                QueryConsensusStateHeightsResponse: {
                    encode(message: _121.QueryConsensusStateHeightsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryConsensusStateHeightsResponse;
                    fromPartial(object: Partial<_121.QueryConsensusStateHeightsResponse>): _121.QueryConsensusStateHeightsResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _121.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryClientStatusRequest;
                    fromPartial(object: Partial<_121.QueryClientStatusRequest>): _121.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _121.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryClientStatusResponse;
                    fromPartial(object: Partial<_121.QueryClientStatusResponse>): _121.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _121.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _121.QueryClientParamsRequest;
                    fromPartial(_: Partial<_121.QueryClientParamsRequest>): _121.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _121.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryClientParamsResponse;
                    fromPartial(object: Partial<_121.QueryClientParamsResponse>): _121.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _121.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _121.QueryUpgradedClientStateRequest;
                    fromPartial(_: Partial<_121.QueryUpgradedClientStateRequest>): _121.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _121.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryUpgradedClientStateResponse;
                    fromPartial(object: Partial<_121.QueryUpgradedClientStateResponse>): _121.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _121.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _121.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: Partial<_121.QueryUpgradedConsensusStateRequest>): _121.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _121.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: Partial<_121.QueryUpgradedConsensusStateResponse>): _121.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _120.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _120.GenesisState;
                    fromPartial(object: Partial<_120.GenesisState>): _120.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _120.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _120.GenesisMetadata;
                    fromPartial(object: Partial<_120.GenesisMetadata>): _120.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _120.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _120.IdentifiedGenesisMetadata;
                    fromPartial(object: Partial<_120.IdentifiedGenesisMetadata>): _120.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _119.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _119.IdentifiedClientState;
                    fromPartial(object: Partial<_119.IdentifiedClientState>): _119.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _119.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _119.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_119.ConsensusStateWithHeight>): _119.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _119.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _119.ClientConsensusStates;
                    fromPartial(object: Partial<_119.ClientConsensusStates>): _119.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _119.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _119.ClientUpdateProposal;
                    fromPartial(object: Partial<_119.ClientUpdateProposal>): _119.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _119.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _119.UpgradeProposal;
                    fromPartial(object: Partial<_119.UpgradeProposal>): _119.UpgradeProposal;
                };
                Height: {
                    encode(message: _119.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _119.Height;
                    fromPartial(object: Partial<_119.Height>): _119.Height;
                };
                Params: {
                    encode(message: _119.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _119.Params;
                    fromPartial(object: Partial<_119.Params>): _119.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _123.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _123.MerkleRoot;
                    fromPartial(object: Partial<_123.MerkleRoot>): _123.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _123.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _123.MerklePrefix;
                    fromPartial(object: Partial<_123.MerklePrefix>): _123.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _123.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _123.MerklePath;
                    fromPartial(object: Partial<_123.MerklePath>): _123.MerklePath;
                };
                MerkleProof: {
                    encode(message: _123.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _123.MerkleProof;
                    fromPartial(object: Partial<_123.MerkleProof>): _123.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _264.MsgClientImpl;
                QueryClientImpl: typeof _259.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _126.QueryConnectionRequest): Promise<_126.QueryConnectionResponse>;
                    connections(request?: _126.QueryConnectionsRequest): Promise<_126.QueryConnectionsResponse>;
                    clientConnections(request: _126.QueryClientConnectionsRequest): Promise<_126.QueryClientConnectionsResponse>;
                    connectionClientState(request: _126.QueryConnectionClientStateRequest): Promise<_126.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _126.QueryConnectionConsensusStateRequest): Promise<_126.QueryConnectionConsensusStateResponse>;
                };
                LCDQueryClient: typeof _252.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
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
                        toAmino: ({ clientId, counterparty, version, delayPeriod, signer }: _127.MsgConnectionOpenInit) => {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        };
                        fromAmino: ({ client_id, counterparty, version, delay_period, signer }: {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        }) => _127.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer }: _127.MsgConnectionOpenTry) => {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: import("../helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ client_id, previous_connection_id, client_state, counterparty, delay_period, counterparty_versions, proof_height, proof_init, proof_client, proof_consensus, consensus_height, signer }: {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: import("../helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _127.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer }: _127.MsgConnectionOpenAck) => {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: import("../helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, counterparty_connection_id, version, client_state, proof_height, proof_try, proof_client, proof_consensus, consensus_height, signer }: {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: import("../helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _127.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connectionId, proofAck, proofHeight, signer }: _127.MsgConnectionOpenConfirm) => {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, proof_ack, proof_height, signer }: {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _127.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _127.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _127.MsgConnectionOpenInit;
                    fromPartial(object: Partial<_127.MsgConnectionOpenInit>): _127.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _127.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _127.MsgConnectionOpenInitResponse;
                    fromPartial(_: Partial<_127.MsgConnectionOpenInitResponse>): _127.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _127.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _127.MsgConnectionOpenTry;
                    fromPartial(object: Partial<_127.MsgConnectionOpenTry>): _127.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _127.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _127.MsgConnectionOpenTryResponse;
                    fromPartial(_: Partial<_127.MsgConnectionOpenTryResponse>): _127.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _127.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _127.MsgConnectionOpenAck;
                    fromPartial(object: Partial<_127.MsgConnectionOpenAck>): _127.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _127.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _127.MsgConnectionOpenAckResponse;
                    fromPartial(_: Partial<_127.MsgConnectionOpenAckResponse>): _127.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _127.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _127.MsgConnectionOpenConfirm;
                    fromPartial(object: Partial<_127.MsgConnectionOpenConfirm>): _127.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _127.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _127.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: Partial<_127.MsgConnectionOpenConfirmResponse>): _127.MsgConnectionOpenConfirmResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _126.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _126.QueryConnectionRequest;
                    fromPartial(object: Partial<_126.QueryConnectionRequest>): _126.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _126.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _126.QueryConnectionResponse;
                    fromPartial(object: Partial<_126.QueryConnectionResponse>): _126.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _126.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _126.QueryConnectionsRequest;
                    fromPartial(object: Partial<_126.QueryConnectionsRequest>): _126.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _126.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _126.QueryConnectionsResponse;
                    fromPartial(object: Partial<_126.QueryConnectionsResponse>): _126.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _126.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _126.QueryClientConnectionsRequest;
                    fromPartial(object: Partial<_126.QueryClientConnectionsRequest>): _126.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _126.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _126.QueryClientConnectionsResponse;
                    fromPartial(object: Partial<_126.QueryClientConnectionsResponse>): _126.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _126.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _126.QueryConnectionClientStateRequest;
                    fromPartial(object: Partial<_126.QueryConnectionClientStateRequest>): _126.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _126.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _126.QueryConnectionClientStateResponse;
                    fromPartial(object: Partial<_126.QueryConnectionClientStateResponse>): _126.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _126.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _126.QueryConnectionConsensusStateRequest;
                    fromPartial(object: Partial<_126.QueryConnectionConsensusStateRequest>): _126.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _126.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _126.QueryConnectionConsensusStateResponse;
                    fromPartial(object: Partial<_126.QueryConnectionConsensusStateResponse>): _126.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _125.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _125.GenesisState;
                    fromPartial(object: Partial<_125.GenesisState>): _125.GenesisState;
                };
                stateFromJSON(object: any): _124.State;
                stateToJSON(object: _124.State): string;
                State: typeof _124.State;
                StateSDKType: typeof _124.State;
                ConnectionEnd: {
                    encode(message: _124.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _124.ConnectionEnd;
                    fromPartial(object: Partial<_124.ConnectionEnd>): _124.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _124.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _124.IdentifiedConnection;
                    fromPartial(object: Partial<_124.IdentifiedConnection>): _124.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _124.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _124.Counterparty;
                    fromPartial(object: Partial<_124.Counterparty>): _124.Counterparty;
                };
                ClientPaths: {
                    encode(message: _124.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _124.ClientPaths;
                    fromPartial(object: Partial<_124.ClientPaths>): _124.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _124.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _124.ConnectionPaths;
                    fromPartial(object: Partial<_124.ConnectionPaths>): _124.ConnectionPaths;
                };
                Version: {
                    encode(message: _124.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _124.Version;
                    fromPartial(object: Partial<_124.Version>): _124.Version;
                };
                Params: {
                    encode(message: _124.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _124.Params;
                    fromPartial(object: Partial<_124.Params>): _124.Params;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _128.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _128.GenesisState;
                    fromPartial(object: Partial<_128.GenesisState>): _128.GenesisState;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _129.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _129.ClientState;
                    fromPartial(object: Partial<_129.ClientState>): _129.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _130.DataType;
                dataTypeToJSON(object: _130.DataType): string;
                DataType: typeof _130.DataType;
                DataTypeSDKType: typeof _130.DataType;
                ClientState: {
                    encode(message: _130.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _130.ClientState;
                    fromPartial(object: Partial<_130.ClientState>): _130.ClientState;
                };
                ConsensusState: {
                    encode(message: _130.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _130.ConsensusState;
                    fromPartial(object: Partial<_130.ConsensusState>): _130.ConsensusState;
                };
                Header: {
                    encode(message: _130.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _130.Header;
                    fromPartial(object: Partial<_130.Header>): _130.Header;
                };
                Misbehaviour: {
                    encode(message: _130.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _130.Misbehaviour;
                    fromPartial(object: Partial<_130.Misbehaviour>): _130.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _130.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _130.SignatureAndData;
                    fromPartial(object: Partial<_130.SignatureAndData>): _130.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _130.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _130.TimestampedSignatureData;
                    fromPartial(object: Partial<_130.TimestampedSignatureData>): _130.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _130.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _130.SignBytes;
                    fromPartial(object: Partial<_130.SignBytes>): _130.SignBytes;
                };
                HeaderData: {
                    encode(message: _130.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _130.HeaderData;
                    fromPartial(object: Partial<_130.HeaderData>): _130.HeaderData;
                };
                ClientStateData: {
                    encode(message: _130.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _130.ClientStateData;
                    fromPartial(object: Partial<_130.ClientStateData>): _130.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _130.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _130.ConsensusStateData;
                    fromPartial(object: Partial<_130.ConsensusStateData>): _130.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _130.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _130.ConnectionStateData;
                    fromPartial(object: Partial<_130.ConnectionStateData>): _130.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _130.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _130.ChannelStateData;
                    fromPartial(object: Partial<_130.ChannelStateData>): _130.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _130.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _130.PacketCommitmentData;
                    fromPartial(object: Partial<_130.PacketCommitmentData>): _130.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _130.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _130.PacketAcknowledgementData;
                    fromPartial(object: Partial<_130.PacketAcknowledgementData>): _130.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _130.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _130.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_130.PacketReceiptAbsenceData>): _130.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _130.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _130.NextSequenceRecvData;
                    fromPartial(object: Partial<_130.NextSequenceRecvData>): _130.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _131.DataType;
                dataTypeToJSON(object: _131.DataType): string;
                DataType: typeof _131.DataType;
                DataTypeSDKType: typeof _131.DataType;
                ClientState: {
                    encode(message: _131.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _131.ClientState;
                    fromPartial(object: Partial<_131.ClientState>): _131.ClientState;
                };
                ConsensusState: {
                    encode(message: _131.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _131.ConsensusState;
                    fromPartial(object: Partial<_131.ConsensusState>): _131.ConsensusState;
                };
                Header: {
                    encode(message: _131.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _131.Header;
                    fromPartial(object: Partial<_131.Header>): _131.Header;
                };
                Misbehaviour: {
                    encode(message: _131.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _131.Misbehaviour;
                    fromPartial(object: Partial<_131.Misbehaviour>): _131.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _131.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _131.SignatureAndData;
                    fromPartial(object: Partial<_131.SignatureAndData>): _131.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _131.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _131.TimestampedSignatureData;
                    fromPartial(object: Partial<_131.TimestampedSignatureData>): _131.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _131.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _131.SignBytes;
                    fromPartial(object: Partial<_131.SignBytes>): _131.SignBytes;
                };
                HeaderData: {
                    encode(message: _131.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _131.HeaderData;
                    fromPartial(object: Partial<_131.HeaderData>): _131.HeaderData;
                };
                ClientStateData: {
                    encode(message: _131.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _131.ClientStateData;
                    fromPartial(object: Partial<_131.ClientStateData>): _131.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _131.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _131.ConsensusStateData;
                    fromPartial(object: Partial<_131.ConsensusStateData>): _131.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _131.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _131.ConnectionStateData;
                    fromPartial(object: Partial<_131.ConnectionStateData>): _131.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _131.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _131.ChannelStateData;
                    fromPartial(object: Partial<_131.ChannelStateData>): _131.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _131.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _131.PacketCommitmentData;
                    fromPartial(object: Partial<_131.PacketCommitmentData>): _131.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _131.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _131.PacketAcknowledgementData;
                    fromPartial(object: Partial<_131.PacketAcknowledgementData>): _131.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _131.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _131.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_131.PacketReceiptAbsenceData>): _131.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _131.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _131.NextSequenceRecvData;
                    fromPartial(object: Partial<_131.NextSequenceRecvData>): _131.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _132.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _132.ClientState;
                    fromPartial(object: Partial<_132.ClientState>): _132.ClientState;
                };
                ConsensusState: {
                    encode(message: _132.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _132.ConsensusState;
                    fromPartial(object: Partial<_132.ConsensusState>): _132.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _132.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _132.Misbehaviour;
                    fromPartial(object: Partial<_132.Misbehaviour>): _132.Misbehaviour;
                };
                Header: {
                    encode(message: _132.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _132.Header;
                    fromPartial(object: Partial<_132.Header>): _132.Header;
                };
                Fraction: {
                    encode(message: _132.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _132.Fraction;
                    fromPartial(object: Partial<_132.Fraction>): _132.Fraction;
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
