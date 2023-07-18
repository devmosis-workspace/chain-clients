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
                        toAmino: ({ portId, channelId, relayer, payee }: _130.MsgRegisterPayee) => {
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
                        }) => _130.MsgRegisterPayee;
                    };
                    "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, relayer, counterpartyPayee }: _130.MsgRegisterCounterpartyPayee) => {
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
                        }) => _130.MsgRegisterCounterpartyPayee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFee": {
                        aminoType: string;
                        toAmino: ({ fee, sourcePortId, sourceChannelId, signer, relayers }: _130.MsgPayPacketFee) => {
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
                        }) => _130.MsgPayPacketFee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFeeAsync": {
                        aminoType: string;
                        toAmino: ({ packetId, packetFee }: _130.MsgPayPacketFeeAsync) => {
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
                        }) => _130.MsgPayPacketFeeAsync;
                    };
                };
                MsgRegisterPayee: {
                    encode(message: _130.MsgRegisterPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _130.MsgRegisterPayee;
                    fromPartial(object: Partial<_130.MsgRegisterPayee>): _130.MsgRegisterPayee;
                };
                MsgRegisterPayeeResponse: {
                    encode(_: _130.MsgRegisterPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _130.MsgRegisterPayeeResponse;
                    fromPartial(_: Partial<_130.MsgRegisterPayeeResponse>): _130.MsgRegisterPayeeResponse;
                };
                MsgRegisterCounterpartyPayee: {
                    encode(message: _130.MsgRegisterCounterpartyPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _130.MsgRegisterCounterpartyPayee;
                    fromPartial(object: Partial<_130.MsgRegisterCounterpartyPayee>): _130.MsgRegisterCounterpartyPayee;
                };
                MsgRegisterCounterpartyPayeeResponse: {
                    encode(_: _130.MsgRegisterCounterpartyPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _130.MsgRegisterCounterpartyPayeeResponse;
                    fromPartial(_: Partial<_130.MsgRegisterCounterpartyPayeeResponse>): _130.MsgRegisterCounterpartyPayeeResponse;
                };
                MsgPayPacketFee: {
                    encode(message: _130.MsgPayPacketFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _130.MsgPayPacketFee;
                    fromPartial(object: Partial<_130.MsgPayPacketFee>): _130.MsgPayPacketFee;
                };
                MsgPayPacketFeeResponse: {
                    encode(_: _130.MsgPayPacketFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _130.MsgPayPacketFeeResponse;
                    fromPartial(_: Partial<_130.MsgPayPacketFeeResponse>): _130.MsgPayPacketFeeResponse;
                };
                MsgPayPacketFeeAsync: {
                    encode(message: _130.MsgPayPacketFeeAsync, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _130.MsgPayPacketFeeAsync;
                    fromPartial(object: Partial<_130.MsgPayPacketFeeAsync>): _130.MsgPayPacketFeeAsync;
                };
                MsgPayPacketFeeAsyncResponse: {
                    encode(_: _130.MsgPayPacketFeeAsyncResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _130.MsgPayPacketFeeAsyncResponse;
                    fromPartial(_: Partial<_130.MsgPayPacketFeeAsyncResponse>): _130.MsgPayPacketFeeAsyncResponse;
                };
                QueryIncentivizedPacketsRequest: {
                    encode(message: _129.QueryIncentivizedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _129.QueryIncentivizedPacketsRequest;
                    fromPartial(object: Partial<_129.QueryIncentivizedPacketsRequest>): _129.QueryIncentivizedPacketsRequest;
                };
                QueryIncentivizedPacketsResponse: {
                    encode(message: _129.QueryIncentivizedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _129.QueryIncentivizedPacketsResponse;
                    fromPartial(object: Partial<_129.QueryIncentivizedPacketsResponse>): _129.QueryIncentivizedPacketsResponse;
                };
                QueryIncentivizedPacketRequest: {
                    encode(message: _129.QueryIncentivizedPacketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _129.QueryIncentivizedPacketRequest;
                    fromPartial(object: Partial<_129.QueryIncentivizedPacketRequest>): _129.QueryIncentivizedPacketRequest;
                };
                QueryIncentivizedPacketResponse: {
                    encode(message: _129.QueryIncentivizedPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _129.QueryIncentivizedPacketResponse;
                    fromPartial(object: Partial<_129.QueryIncentivizedPacketResponse>): _129.QueryIncentivizedPacketResponse;
                };
                QueryIncentivizedPacketsForChannelRequest: {
                    encode(message: _129.QueryIncentivizedPacketsForChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _129.QueryIncentivizedPacketsForChannelRequest;
                    fromPartial(object: Partial<_129.QueryIncentivizedPacketsForChannelRequest>): _129.QueryIncentivizedPacketsForChannelRequest;
                };
                QueryIncentivizedPacketsForChannelResponse: {
                    encode(message: _129.QueryIncentivizedPacketsForChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _129.QueryIncentivizedPacketsForChannelResponse;
                    fromPartial(object: Partial<_129.QueryIncentivizedPacketsForChannelResponse>): _129.QueryIncentivizedPacketsForChannelResponse;
                };
                QueryTotalRecvFeesRequest: {
                    encode(message: _129.QueryTotalRecvFeesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _129.QueryTotalRecvFeesRequest;
                    fromPartial(object: Partial<_129.QueryTotalRecvFeesRequest>): _129.QueryTotalRecvFeesRequest;
                };
                QueryTotalRecvFeesResponse: {
                    encode(message: _129.QueryTotalRecvFeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _129.QueryTotalRecvFeesResponse;
                    fromPartial(object: Partial<_129.QueryTotalRecvFeesResponse>): _129.QueryTotalRecvFeesResponse;
                };
                QueryTotalAckFeesRequest: {
                    encode(message: _129.QueryTotalAckFeesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _129.QueryTotalAckFeesRequest;
                    fromPartial(object: Partial<_129.QueryTotalAckFeesRequest>): _129.QueryTotalAckFeesRequest;
                };
                QueryTotalAckFeesResponse: {
                    encode(message: _129.QueryTotalAckFeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _129.QueryTotalAckFeesResponse;
                    fromPartial(object: Partial<_129.QueryTotalAckFeesResponse>): _129.QueryTotalAckFeesResponse;
                };
                QueryTotalTimeoutFeesRequest: {
                    encode(message: _129.QueryTotalTimeoutFeesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _129.QueryTotalTimeoutFeesRequest;
                    fromPartial(object: Partial<_129.QueryTotalTimeoutFeesRequest>): _129.QueryTotalTimeoutFeesRequest;
                };
                QueryTotalTimeoutFeesResponse: {
                    encode(message: _129.QueryTotalTimeoutFeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _129.QueryTotalTimeoutFeesResponse;
                    fromPartial(object: Partial<_129.QueryTotalTimeoutFeesResponse>): _129.QueryTotalTimeoutFeesResponse;
                };
                QueryPayeeRequest: {
                    encode(message: _129.QueryPayeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _129.QueryPayeeRequest;
                    fromPartial(object: Partial<_129.QueryPayeeRequest>): _129.QueryPayeeRequest;
                };
                QueryPayeeResponse: {
                    encode(message: _129.QueryPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _129.QueryPayeeResponse;
                    fromPartial(object: Partial<_129.QueryPayeeResponse>): _129.QueryPayeeResponse;
                };
                QueryCounterpartyPayeeRequest: {
                    encode(message: _129.QueryCounterpartyPayeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _129.QueryCounterpartyPayeeRequest;
                    fromPartial(object: Partial<_129.QueryCounterpartyPayeeRequest>): _129.QueryCounterpartyPayeeRequest;
                };
                QueryCounterpartyPayeeResponse: {
                    encode(message: _129.QueryCounterpartyPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _129.QueryCounterpartyPayeeResponse;
                    fromPartial(object: Partial<_129.QueryCounterpartyPayeeResponse>): _129.QueryCounterpartyPayeeResponse;
                };
                QueryFeeEnabledChannelsRequest: {
                    encode(message: _129.QueryFeeEnabledChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _129.QueryFeeEnabledChannelsRequest;
                    fromPartial(object: Partial<_129.QueryFeeEnabledChannelsRequest>): _129.QueryFeeEnabledChannelsRequest;
                };
                QueryFeeEnabledChannelsResponse: {
                    encode(message: _129.QueryFeeEnabledChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _129.QueryFeeEnabledChannelsResponse;
                    fromPartial(object: Partial<_129.QueryFeeEnabledChannelsResponse>): _129.QueryFeeEnabledChannelsResponse;
                };
                QueryFeeEnabledChannelRequest: {
                    encode(message: _129.QueryFeeEnabledChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _129.QueryFeeEnabledChannelRequest;
                    fromPartial(object: Partial<_129.QueryFeeEnabledChannelRequest>): _129.QueryFeeEnabledChannelRequest;
                };
                QueryFeeEnabledChannelResponse: {
                    encode(message: _129.QueryFeeEnabledChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _129.QueryFeeEnabledChannelResponse;
                    fromPartial(object: Partial<_129.QueryFeeEnabledChannelResponse>): _129.QueryFeeEnabledChannelResponse;
                };
                Metadata: {
                    encode(message: _128.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _128.Metadata;
                    fromPartial(object: Partial<_128.Metadata>): _128.Metadata;
                };
                GenesisState: {
                    encode(message: _127.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _127.GenesisState;
                    fromPartial(object: Partial<_127.GenesisState>): _127.GenesisState;
                };
                FeeEnabledChannel: {
                    encode(message: _127.FeeEnabledChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _127.FeeEnabledChannel;
                    fromPartial(object: Partial<_127.FeeEnabledChannel>): _127.FeeEnabledChannel;
                };
                RegisteredPayee: {
                    encode(message: _127.RegisteredPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _127.RegisteredPayee;
                    fromPartial(object: Partial<_127.RegisteredPayee>): _127.RegisteredPayee;
                };
                RegisteredCounterpartyPayee: {
                    encode(message: _127.RegisteredCounterpartyPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _127.RegisteredCounterpartyPayee;
                    fromPartial(object: Partial<_127.RegisteredCounterpartyPayee>): _127.RegisteredCounterpartyPayee;
                };
                ForwardRelayerAddress: {
                    encode(message: _127.ForwardRelayerAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _127.ForwardRelayerAddress;
                    fromPartial(object: Partial<_127.ForwardRelayerAddress>): _127.ForwardRelayerAddress;
                };
                Fee: {
                    encode(message: _126.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _126.Fee;
                    fromPartial(object: Partial<_126.Fee>): _126.Fee;
                };
                PacketFee: {
                    encode(message: _126.PacketFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _126.PacketFee;
                    fromPartial(object: Partial<_126.PacketFee>): _126.PacketFee;
                };
                PacketFees: {
                    encode(message: _126.PacketFees, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _126.PacketFees;
                    fromPartial(object: Partial<_126.PacketFees>): _126.PacketFees;
                };
                IdentifiedPacketFees: {
                    encode(message: _126.IdentifiedPacketFees, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _126.IdentifiedPacketFees;
                    fromPartial(object: Partial<_126.IdentifiedPacketFees>): _126.IdentifiedPacketFees;
                };
                IncentivizedAcknowledgement: {
                    encode(message: _125.IncentivizedAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _125.IncentivizedAcknowledgement;
                    fromPartial(object: Partial<_125.IncentivizedAcknowledgement>): _125.IncentivizedAcknowledgement;
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
                        encode(message: _132.QueryInterchainAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        fromJSON(object: any): _132.QueryInterchainAccountRequest;
                        fromPartial(object: Partial<_132.QueryInterchainAccountRequest>): _132.QueryInterchainAccountRequest;
                    };
                    QueryInterchainAccountResponse: {
                        encode(message: _132.QueryInterchainAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        fromJSON(object: any): _132.QueryInterchainAccountResponse;
                        fromPartial(object: Partial<_132.QueryInterchainAccountResponse>): _132.QueryInterchainAccountResponse;
                    };
                    QueryParamsRequest: {
                        encode(_: _132.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        fromJSON(_: any): _132.QueryParamsRequest;
                        fromPartial(_: Partial<_132.QueryParamsRequest>): _132.QueryParamsRequest;
                    };
                    QueryParamsResponse: {
                        encode(message: _132.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        fromJSON(object: any): _132.QueryParamsResponse;
                        fromPartial(object: Partial<_132.QueryParamsResponse>): _132.QueryParamsResponse;
                    };
                    Params: {
                        encode(message: _131.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        fromJSON(object: any): _131.Params;
                        fromPartial(object: Partial<_131.Params>): _131.Params;
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
                        encode(_: _134.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        fromJSON(_: any): _134.QueryParamsRequest;
                        fromPartial(_: Partial<_134.QueryParamsRequest>): _134.QueryParamsRequest;
                    };
                    QueryParamsResponse: {
                        encode(message: _134.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        fromJSON(object: any): _134.QueryParamsResponse;
                        fromPartial(object: Partial<_134.QueryParamsResponse>): _134.QueryParamsResponse;
                    };
                    Params: {
                        encode(message: _133.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        fromJSON(object: any): _133.Params;
                        fromPartial(object: Partial<_133.Params>): _133.Params;
                    };
                };
            }
            const v1: {
                typeFromJSON(object: any): _138.Type;
                typeToJSON(object: _138.Type): string;
                Type: typeof _138.Type;
                TypeSDKType: typeof _138.Type;
                InterchainAccountPacketData: {
                    encode(message: _138.InterchainAccountPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _138.InterchainAccountPacketData;
                    fromPartial(object: Partial<_138.InterchainAccountPacketData>): _138.InterchainAccountPacketData;
                };
                CosmosTx: {
                    encode(message: _138.CosmosTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _138.CosmosTx;
                    fromPartial(object: Partial<_138.CosmosTx>): _138.CosmosTx;
                };
                Metadata: {
                    encode(message: _137.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _137.Metadata;
                    fromPartial(object: Partial<_137.Metadata>): _137.Metadata;
                };
                GenesisState: {
                    encode(message: _136.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _136.GenesisState;
                    fromPartial(object: Partial<_136.GenesisState>): _136.GenesisState;
                };
                ControllerGenesisState: {
                    encode(message: _136.ControllerGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _136.ControllerGenesisState;
                    fromPartial(object: Partial<_136.ControllerGenesisState>): _136.ControllerGenesisState;
                };
                HostGenesisState: {
                    encode(message: _136.HostGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _136.HostGenesisState;
                    fromPartial(object: Partial<_136.HostGenesisState>): _136.HostGenesisState;
                };
                ActiveChannel: {
                    encode(message: _136.ActiveChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _136.ActiveChannel;
                    fromPartial(object: Partial<_136.ActiveChannel>): _136.ActiveChannel;
                };
                RegisteredInterchainAccount: {
                    encode(message: _136.RegisteredInterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _136.RegisteredInterchainAccount;
                    fromPartial(object: Partial<_136.RegisteredInterchainAccount>): _136.RegisteredInterchainAccount;
                };
                InterchainAccount: {
                    encode(message: _135.InterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _135.InterchainAccount;
                    fromPartial(object: Partial<_135.InterchainAccount>): _135.InterchainAccount;
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
                        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp, memo }: _142.MsgTransfer) => {
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
                        }) => _142.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _142.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _142.MsgTransfer;
                    fromPartial(object: Partial<_142.MsgTransfer>): _142.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(message: _142.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _142.MsgTransferResponse;
                    fromPartial(object: Partial<_142.MsgTransferResponse>): _142.MsgTransferResponse;
                };
                DenomTrace: {
                    encode(message: _141.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _141.DenomTrace;
                    fromPartial(object: Partial<_141.DenomTrace>): _141.DenomTrace;
                };
                Params: {
                    encode(message: _141.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _141.Params;
                    fromPartial(object: Partial<_141.Params>): _141.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _140.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _140.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_140.QueryDenomTraceRequest>): _140.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _140.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _140.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_140.QueryDenomTraceResponse>): _140.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _140.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _140.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_140.QueryDenomTracesRequest>): _140.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _140.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _140.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_140.QueryDenomTracesResponse>): _140.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _140.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _140.QueryParamsRequest;
                    fromPartial(_: Partial<_140.QueryParamsRequest>): _140.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _140.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _140.QueryParamsResponse;
                    fromPartial(object: Partial<_140.QueryParamsResponse>): _140.QueryParamsResponse;
                };
                QueryDenomHashRequest: {
                    encode(message: _140.QueryDenomHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _140.QueryDenomHashRequest;
                    fromPartial(object: Partial<_140.QueryDenomHashRequest>): _140.QueryDenomHashRequest;
                };
                QueryDenomHashResponse: {
                    encode(message: _140.QueryDenomHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _140.QueryDenomHashResponse;
                    fromPartial(object: Partial<_140.QueryDenomHashResponse>): _140.QueryDenomHashResponse;
                };
                QueryEscrowAddressRequest: {
                    encode(message: _140.QueryEscrowAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _140.QueryEscrowAddressRequest;
                    fromPartial(object: Partial<_140.QueryEscrowAddressRequest>): _140.QueryEscrowAddressRequest;
                };
                QueryEscrowAddressResponse: {
                    encode(message: _140.QueryEscrowAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _140.QueryEscrowAddressResponse;
                    fromPartial(object: Partial<_140.QueryEscrowAddressResponse>): _140.QueryEscrowAddressResponse;
                };
                GenesisState: {
                    encode(message: _139.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _139.GenesisState;
                    fromPartial(object: Partial<_139.GenesisState>): _139.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _143.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _143.FungibleTokenPacketData;
                    fromPartial(object: Partial<_143.FungibleTokenPacketData>): _143.FungibleTokenPacketData;
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
                        toAmino: ({ portId, channel, signer }: _147.MsgChannelOpenInit) => {
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
                        }) => _147.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: _147.MsgChannelOpenTry) => {
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
                        }) => _147.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: _147.MsgChannelOpenAck) => {
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
                        }) => _147.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: _147.MsgChannelOpenConfirm) => {
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
                        }) => _147.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, signer }: _147.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _147.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: _147.MsgChannelCloseConfirm) => {
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
                        }) => _147.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proofCommitment, proofHeight, signer }: _147.MsgRecvPacket) => {
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
                        }) => _147.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: _147.MsgTimeout) => {
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
                        }) => _147.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: _147.MsgTimeoutOnClose) => {
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
                        }) => _147.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: _147.MsgAcknowledgement) => {
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
                        }) => _147.MsgAcknowledgement;
                    };
                };
                responseResultTypeFromJSON(object: any): _147.ResponseResultType;
                responseResultTypeToJSON(object: _147.ResponseResultType): string;
                ResponseResultType: typeof _147.ResponseResultType;
                ResponseResultTypeSDKType: typeof _147.ResponseResultType;
                MsgChannelOpenInit: {
                    encode(message: _147.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _147.MsgChannelOpenInit;
                    fromPartial(object: Partial<_147.MsgChannelOpenInit>): _147.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(message: _147.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _147.MsgChannelOpenInitResponse;
                    fromPartial(object: Partial<_147.MsgChannelOpenInitResponse>): _147.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _147.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _147.MsgChannelOpenTry;
                    fromPartial(object: Partial<_147.MsgChannelOpenTry>): _147.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(message: _147.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _147.MsgChannelOpenTryResponse;
                    fromPartial(object: Partial<_147.MsgChannelOpenTryResponse>): _147.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _147.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _147.MsgChannelOpenAck;
                    fromPartial(object: Partial<_147.MsgChannelOpenAck>): _147.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _147.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _147.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_147.MsgChannelOpenAckResponse>): _147.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _147.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _147.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_147.MsgChannelOpenConfirm>): _147.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _147.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _147.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_147.MsgChannelOpenConfirmResponse>): _147.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _147.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _147.MsgChannelCloseInit;
                    fromPartial(object: Partial<_147.MsgChannelCloseInit>): _147.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _147.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _147.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_147.MsgChannelCloseInitResponse>): _147.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _147.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _147.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_147.MsgChannelCloseConfirm>): _147.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _147.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _147.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_147.MsgChannelCloseConfirmResponse>): _147.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _147.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _147.MsgRecvPacket;
                    fromPartial(object: Partial<_147.MsgRecvPacket>): _147.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(message: _147.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _147.MsgRecvPacketResponse;
                    fromPartial(object: Partial<_147.MsgRecvPacketResponse>): _147.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _147.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _147.MsgTimeout;
                    fromPartial(object: Partial<_147.MsgTimeout>): _147.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(message: _147.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _147.MsgTimeoutResponse;
                    fromPartial(object: Partial<_147.MsgTimeoutResponse>): _147.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _147.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _147.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_147.MsgTimeoutOnClose>): _147.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(message: _147.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _147.MsgTimeoutOnCloseResponse;
                    fromPartial(object: Partial<_147.MsgTimeoutOnCloseResponse>): _147.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _147.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _147.MsgAcknowledgement;
                    fromPartial(object: Partial<_147.MsgAcknowledgement>): _147.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(message: _147.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _147.MsgAcknowledgementResponse;
                    fromPartial(object: Partial<_147.MsgAcknowledgementResponse>): _147.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _146.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _146.QueryChannelRequest;
                    fromPartial(object: Partial<_146.QueryChannelRequest>): _146.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _146.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _146.QueryChannelResponse;
                    fromPartial(object: Partial<_146.QueryChannelResponse>): _146.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _146.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _146.QueryChannelsRequest;
                    fromPartial(object: Partial<_146.QueryChannelsRequest>): _146.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _146.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _146.QueryChannelsResponse;
                    fromPartial(object: Partial<_146.QueryChannelsResponse>): _146.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _146.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _146.QueryConnectionChannelsRequest;
                    fromPartial(object: Partial<_146.QueryConnectionChannelsRequest>): _146.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _146.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _146.QueryConnectionChannelsResponse;
                    fromPartial(object: Partial<_146.QueryConnectionChannelsResponse>): _146.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _146.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _146.QueryChannelClientStateRequest;
                    fromPartial(object: Partial<_146.QueryChannelClientStateRequest>): _146.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _146.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _146.QueryChannelClientStateResponse;
                    fromPartial(object: Partial<_146.QueryChannelClientStateResponse>): _146.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _146.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _146.QueryChannelConsensusStateRequest;
                    fromPartial(object: Partial<_146.QueryChannelConsensusStateRequest>): _146.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _146.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _146.QueryChannelConsensusStateResponse;
                    fromPartial(object: Partial<_146.QueryChannelConsensusStateResponse>): _146.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _146.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _146.QueryPacketCommitmentRequest;
                    fromPartial(object: Partial<_146.QueryPacketCommitmentRequest>): _146.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _146.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _146.QueryPacketCommitmentResponse;
                    fromPartial(object: Partial<_146.QueryPacketCommitmentResponse>): _146.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _146.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _146.QueryPacketCommitmentsRequest;
                    fromPartial(object: Partial<_146.QueryPacketCommitmentsRequest>): _146.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _146.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _146.QueryPacketCommitmentsResponse;
                    fromPartial(object: Partial<_146.QueryPacketCommitmentsResponse>): _146.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _146.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _146.QueryPacketReceiptRequest;
                    fromPartial(object: Partial<_146.QueryPacketReceiptRequest>): _146.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _146.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _146.QueryPacketReceiptResponse;
                    fromPartial(object: Partial<_146.QueryPacketReceiptResponse>): _146.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _146.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _146.QueryPacketAcknowledgementRequest;
                    fromPartial(object: Partial<_146.QueryPacketAcknowledgementRequest>): _146.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _146.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _146.QueryPacketAcknowledgementResponse;
                    fromPartial(object: Partial<_146.QueryPacketAcknowledgementResponse>): _146.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _146.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _146.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: Partial<_146.QueryPacketAcknowledgementsRequest>): _146.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _146.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _146.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: Partial<_146.QueryPacketAcknowledgementsResponse>): _146.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _146.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _146.QueryUnreceivedPacketsRequest;
                    fromPartial(object: Partial<_146.QueryUnreceivedPacketsRequest>): _146.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _146.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _146.QueryUnreceivedPacketsResponse;
                    fromPartial(object: Partial<_146.QueryUnreceivedPacketsResponse>): _146.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _146.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _146.QueryUnreceivedAcksRequest;
                    fromPartial(object: Partial<_146.QueryUnreceivedAcksRequest>): _146.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _146.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _146.QueryUnreceivedAcksResponse;
                    fromPartial(object: Partial<_146.QueryUnreceivedAcksResponse>): _146.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _146.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _146.QueryNextSequenceReceiveRequest;
                    fromPartial(object: Partial<_146.QueryNextSequenceReceiveRequest>): _146.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _146.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _146.QueryNextSequenceReceiveResponse;
                    fromPartial(object: Partial<_146.QueryNextSequenceReceiveResponse>): _146.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _145.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _145.GenesisState;
                    fromPartial(object: Partial<_145.GenesisState>): _145.GenesisState;
                };
                PacketSequence: {
                    encode(message: _145.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _145.PacketSequence;
                    fromPartial(object: Partial<_145.PacketSequence>): _145.PacketSequence;
                };
                stateFromJSON(object: any): _144.State;
                stateToJSON(object: _144.State): string;
                orderFromJSON(object: any): _144.Order;
                orderToJSON(object: _144.Order): string;
                State: typeof _144.State;
                StateSDKType: typeof _144.State;
                Order: typeof _144.Order;
                OrderSDKType: typeof _144.Order;
                Channel: {
                    encode(message: _144.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _144.Channel;
                    fromPartial(object: Partial<_144.Channel>): _144.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _144.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _144.IdentifiedChannel;
                    fromPartial(object: Partial<_144.IdentifiedChannel>): _144.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _144.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _144.Counterparty;
                    fromPartial(object: Partial<_144.Counterparty>): _144.Counterparty;
                };
                Packet: {
                    encode(message: _144.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _144.Packet;
                    fromPartial(object: Partial<_144.Packet>): _144.Packet;
                };
                PacketState: {
                    encode(message: _144.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _144.PacketState;
                    fromPartial(object: Partial<_144.PacketState>): _144.PacketState;
                };
                PacketId: {
                    encode(message: _144.PacketId, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _144.PacketId;
                    fromPartial(object: Partial<_144.PacketId>): _144.PacketId;
                };
                Acknowledgement: {
                    encode(message: _144.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _144.Acknowledgement;
                    fromPartial(object: Partial<_144.Acknowledgement>): _144.Acknowledgement;
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
                        toAmino: ({ clientState, consensusState, signer }: _151.MsgCreateClient) => {
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
                        }) => _151.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ clientId, header, signer }: _151.MsgUpdateClient) => {
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
                        }) => _151.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer }: _151.MsgUpgradeClient) => {
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
                        }) => _151.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ clientId, misbehaviour, signer }: _151.MsgSubmitMisbehaviour) => {
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
                        }) => _151.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _151.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _151.MsgCreateClient;
                    fromPartial(object: Partial<_151.MsgCreateClient>): _151.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _151.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _151.MsgCreateClientResponse;
                    fromPartial(_: Partial<_151.MsgCreateClientResponse>): _151.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _151.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _151.MsgUpdateClient;
                    fromPartial(object: Partial<_151.MsgUpdateClient>): _151.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _151.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _151.MsgUpdateClientResponse;
                    fromPartial(_: Partial<_151.MsgUpdateClientResponse>): _151.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _151.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _151.MsgUpgradeClient;
                    fromPartial(object: Partial<_151.MsgUpgradeClient>): _151.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _151.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _151.MsgUpgradeClientResponse;
                    fromPartial(_: Partial<_151.MsgUpgradeClientResponse>): _151.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _151.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _151.MsgSubmitMisbehaviour;
                    fromPartial(object: Partial<_151.MsgSubmitMisbehaviour>): _151.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _151.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _151.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: Partial<_151.MsgSubmitMisbehaviourResponse>): _151.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _150.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _150.QueryClientStateRequest;
                    fromPartial(object: Partial<_150.QueryClientStateRequest>): _150.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _150.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _150.QueryClientStateResponse;
                    fromPartial(object: Partial<_150.QueryClientStateResponse>): _150.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _150.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _150.QueryClientStatesRequest;
                    fromPartial(object: Partial<_150.QueryClientStatesRequest>): _150.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _150.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _150.QueryClientStatesResponse;
                    fromPartial(object: Partial<_150.QueryClientStatesResponse>): _150.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _150.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _150.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_150.QueryConsensusStateRequest>): _150.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _150.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _150.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_150.QueryConsensusStateResponse>): _150.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _150.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _150.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_150.QueryConsensusStatesRequest>): _150.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _150.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _150.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_150.QueryConsensusStatesResponse>): _150.QueryConsensusStatesResponse;
                };
                QueryConsensusStateHeightsRequest: {
                    encode(message: _150.QueryConsensusStateHeightsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _150.QueryConsensusStateHeightsRequest;
                    fromPartial(object: Partial<_150.QueryConsensusStateHeightsRequest>): _150.QueryConsensusStateHeightsRequest;
                };
                QueryConsensusStateHeightsResponse: {
                    encode(message: _150.QueryConsensusStateHeightsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _150.QueryConsensusStateHeightsResponse;
                    fromPartial(object: Partial<_150.QueryConsensusStateHeightsResponse>): _150.QueryConsensusStateHeightsResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _150.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _150.QueryClientStatusRequest;
                    fromPartial(object: Partial<_150.QueryClientStatusRequest>): _150.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _150.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _150.QueryClientStatusResponse;
                    fromPartial(object: Partial<_150.QueryClientStatusResponse>): _150.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _150.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _150.QueryClientParamsRequest;
                    fromPartial(_: Partial<_150.QueryClientParamsRequest>): _150.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _150.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _150.QueryClientParamsResponse;
                    fromPartial(object: Partial<_150.QueryClientParamsResponse>): _150.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _150.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _150.QueryUpgradedClientStateRequest;
                    fromPartial(_: Partial<_150.QueryUpgradedClientStateRequest>): _150.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _150.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _150.QueryUpgradedClientStateResponse;
                    fromPartial(object: Partial<_150.QueryUpgradedClientStateResponse>): _150.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _150.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _150.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: Partial<_150.QueryUpgradedConsensusStateRequest>): _150.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _150.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _150.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: Partial<_150.QueryUpgradedConsensusStateResponse>): _150.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _149.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _149.GenesisState;
                    fromPartial(object: Partial<_149.GenesisState>): _149.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _149.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _149.GenesisMetadata;
                    fromPartial(object: Partial<_149.GenesisMetadata>): _149.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _149.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _149.IdentifiedGenesisMetadata;
                    fromPartial(object: Partial<_149.IdentifiedGenesisMetadata>): _149.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _148.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _148.IdentifiedClientState;
                    fromPartial(object: Partial<_148.IdentifiedClientState>): _148.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _148.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _148.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_148.ConsensusStateWithHeight>): _148.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _148.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _148.ClientConsensusStates;
                    fromPartial(object: Partial<_148.ClientConsensusStates>): _148.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _148.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _148.ClientUpdateProposal;
                    fromPartial(object: Partial<_148.ClientUpdateProposal>): _148.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _148.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _148.UpgradeProposal;
                    fromPartial(object: Partial<_148.UpgradeProposal>): _148.UpgradeProposal;
                };
                Height: {
                    encode(message: _148.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _148.Height;
                    fromPartial(object: Partial<_148.Height>): _148.Height;
                };
                Params: {
                    encode(message: _148.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _148.Params;
                    fromPartial(object: Partial<_148.Params>): _148.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _152.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _152.MerkleRoot;
                    fromPartial(object: Partial<_152.MerkleRoot>): _152.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _152.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _152.MerklePrefix;
                    fromPartial(object: Partial<_152.MerklePrefix>): _152.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _152.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _152.MerklePath;
                    fromPartial(object: Partial<_152.MerklePath>): _152.MerklePath;
                };
                MerkleProof: {
                    encode(message: _152.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _152.MerkleProof;
                    fromPartial(object: Partial<_152.MerkleProof>): _152.MerkleProof;
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
                        toAmino: ({ clientId, counterparty, version, delayPeriod, signer }: _156.MsgConnectionOpenInit) => {
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
                        }) => _156.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer }: _156.MsgConnectionOpenTry) => {
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
                        }) => _156.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer }: _156.MsgConnectionOpenAck) => {
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
                        }) => _156.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connectionId, proofAck, proofHeight, signer }: _156.MsgConnectionOpenConfirm) => {
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
                        }) => _156.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _156.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _156.MsgConnectionOpenInit;
                    fromPartial(object: Partial<_156.MsgConnectionOpenInit>): _156.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _156.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _156.MsgConnectionOpenInitResponse;
                    fromPartial(_: Partial<_156.MsgConnectionOpenInitResponse>): _156.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _156.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _156.MsgConnectionOpenTry;
                    fromPartial(object: Partial<_156.MsgConnectionOpenTry>): _156.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _156.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _156.MsgConnectionOpenTryResponse;
                    fromPartial(_: Partial<_156.MsgConnectionOpenTryResponse>): _156.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _156.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _156.MsgConnectionOpenAck;
                    fromPartial(object: Partial<_156.MsgConnectionOpenAck>): _156.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _156.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _156.MsgConnectionOpenAckResponse;
                    fromPartial(_: Partial<_156.MsgConnectionOpenAckResponse>): _156.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _156.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _156.MsgConnectionOpenConfirm;
                    fromPartial(object: Partial<_156.MsgConnectionOpenConfirm>): _156.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _156.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _156.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: Partial<_156.MsgConnectionOpenConfirmResponse>): _156.MsgConnectionOpenConfirmResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _155.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _155.QueryConnectionRequest;
                    fromPartial(object: Partial<_155.QueryConnectionRequest>): _155.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _155.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _155.QueryConnectionResponse;
                    fromPartial(object: Partial<_155.QueryConnectionResponse>): _155.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _155.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _155.QueryConnectionsRequest;
                    fromPartial(object: Partial<_155.QueryConnectionsRequest>): _155.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _155.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _155.QueryConnectionsResponse;
                    fromPartial(object: Partial<_155.QueryConnectionsResponse>): _155.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _155.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _155.QueryClientConnectionsRequest;
                    fromPartial(object: Partial<_155.QueryClientConnectionsRequest>): _155.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _155.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _155.QueryClientConnectionsResponse;
                    fromPartial(object: Partial<_155.QueryClientConnectionsResponse>): _155.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _155.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _155.QueryConnectionClientStateRequest;
                    fromPartial(object: Partial<_155.QueryConnectionClientStateRequest>): _155.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _155.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _155.QueryConnectionClientStateResponse;
                    fromPartial(object: Partial<_155.QueryConnectionClientStateResponse>): _155.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _155.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _155.QueryConnectionConsensusStateRequest;
                    fromPartial(object: Partial<_155.QueryConnectionConsensusStateRequest>): _155.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _155.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _155.QueryConnectionConsensusStateResponse;
                    fromPartial(object: Partial<_155.QueryConnectionConsensusStateResponse>): _155.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _154.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _154.GenesisState;
                    fromPartial(object: Partial<_154.GenesisState>): _154.GenesisState;
                };
                stateFromJSON(object: any): _153.State;
                stateToJSON(object: _153.State): string;
                State: typeof _153.State;
                StateSDKType: typeof _153.State;
                ConnectionEnd: {
                    encode(message: _153.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _153.ConnectionEnd;
                    fromPartial(object: Partial<_153.ConnectionEnd>): _153.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _153.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _153.IdentifiedConnection;
                    fromPartial(object: Partial<_153.IdentifiedConnection>): _153.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _153.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _153.Counterparty;
                    fromPartial(object: Partial<_153.Counterparty>): _153.Counterparty;
                };
                ClientPaths: {
                    encode(message: _153.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _153.ClientPaths;
                    fromPartial(object: Partial<_153.ClientPaths>): _153.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _153.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _153.ConnectionPaths;
                    fromPartial(object: Partial<_153.ConnectionPaths>): _153.ConnectionPaths;
                };
                Version: {
                    encode(message: _153.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _153.Version;
                    fromPartial(object: Partial<_153.Version>): _153.Version;
                };
                Params: {
                    encode(message: _153.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _153.Params;
                    fromPartial(object: Partial<_153.Params>): _153.Params;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _157.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _157.GenesisState;
                    fromPartial(object: Partial<_157.GenesisState>): _157.GenesisState;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _158.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _158.ClientState;
                    fromPartial(object: Partial<_158.ClientState>): _158.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _159.DataType;
                dataTypeToJSON(object: _159.DataType): string;
                DataType: typeof _159.DataType;
                DataTypeSDKType: typeof _159.DataType;
                ClientState: {
                    encode(message: _159.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _159.ClientState;
                    fromPartial(object: Partial<_159.ClientState>): _159.ClientState;
                };
                ConsensusState: {
                    encode(message: _159.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _159.ConsensusState;
                    fromPartial(object: Partial<_159.ConsensusState>): _159.ConsensusState;
                };
                Header: {
                    encode(message: _159.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _159.Header;
                    fromPartial(object: Partial<_159.Header>): _159.Header;
                };
                Misbehaviour: {
                    encode(message: _159.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _159.Misbehaviour;
                    fromPartial(object: Partial<_159.Misbehaviour>): _159.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _159.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _159.SignatureAndData;
                    fromPartial(object: Partial<_159.SignatureAndData>): _159.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _159.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _159.TimestampedSignatureData;
                    fromPartial(object: Partial<_159.TimestampedSignatureData>): _159.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _159.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _159.SignBytes;
                    fromPartial(object: Partial<_159.SignBytes>): _159.SignBytes;
                };
                HeaderData: {
                    encode(message: _159.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _159.HeaderData;
                    fromPartial(object: Partial<_159.HeaderData>): _159.HeaderData;
                };
                ClientStateData: {
                    encode(message: _159.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _159.ClientStateData;
                    fromPartial(object: Partial<_159.ClientStateData>): _159.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _159.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _159.ConsensusStateData;
                    fromPartial(object: Partial<_159.ConsensusStateData>): _159.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _159.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _159.ConnectionStateData;
                    fromPartial(object: Partial<_159.ConnectionStateData>): _159.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _159.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _159.ChannelStateData;
                    fromPartial(object: Partial<_159.ChannelStateData>): _159.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _159.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _159.PacketCommitmentData;
                    fromPartial(object: Partial<_159.PacketCommitmentData>): _159.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _159.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _159.PacketAcknowledgementData;
                    fromPartial(object: Partial<_159.PacketAcknowledgementData>): _159.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _159.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _159.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_159.PacketReceiptAbsenceData>): _159.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _159.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _159.NextSequenceRecvData;
                    fromPartial(object: Partial<_159.NextSequenceRecvData>): _159.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _160.DataType;
                dataTypeToJSON(object: _160.DataType): string;
                DataType: typeof _160.DataType;
                DataTypeSDKType: typeof _160.DataType;
                ClientState: {
                    encode(message: _160.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _160.ClientState;
                    fromPartial(object: Partial<_160.ClientState>): _160.ClientState;
                };
                ConsensusState: {
                    encode(message: _160.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _160.ConsensusState;
                    fromPartial(object: Partial<_160.ConsensusState>): _160.ConsensusState;
                };
                Header: {
                    encode(message: _160.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _160.Header;
                    fromPartial(object: Partial<_160.Header>): _160.Header;
                };
                Misbehaviour: {
                    encode(message: _160.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _160.Misbehaviour;
                    fromPartial(object: Partial<_160.Misbehaviour>): _160.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _160.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _160.SignatureAndData;
                    fromPartial(object: Partial<_160.SignatureAndData>): _160.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _160.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _160.TimestampedSignatureData;
                    fromPartial(object: Partial<_160.TimestampedSignatureData>): _160.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _160.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _160.SignBytes;
                    fromPartial(object: Partial<_160.SignBytes>): _160.SignBytes;
                };
                HeaderData: {
                    encode(message: _160.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _160.HeaderData;
                    fromPartial(object: Partial<_160.HeaderData>): _160.HeaderData;
                };
                ClientStateData: {
                    encode(message: _160.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _160.ClientStateData;
                    fromPartial(object: Partial<_160.ClientStateData>): _160.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _160.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _160.ConsensusStateData;
                    fromPartial(object: Partial<_160.ConsensusStateData>): _160.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _160.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _160.ConnectionStateData;
                    fromPartial(object: Partial<_160.ConnectionStateData>): _160.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _160.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _160.ChannelStateData;
                    fromPartial(object: Partial<_160.ChannelStateData>): _160.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _160.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _160.PacketCommitmentData;
                    fromPartial(object: Partial<_160.PacketCommitmentData>): _160.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _160.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _160.PacketAcknowledgementData;
                    fromPartial(object: Partial<_160.PacketAcknowledgementData>): _160.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _160.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _160.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_160.PacketReceiptAbsenceData>): _160.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _160.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _160.NextSequenceRecvData;
                    fromPartial(object: Partial<_160.NextSequenceRecvData>): _160.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _161.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _161.ClientState;
                    fromPartial(object: Partial<_161.ClientState>): _161.ClientState;
                };
                ConsensusState: {
                    encode(message: _161.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _161.ConsensusState;
                    fromPartial(object: Partial<_161.ConsensusState>): _161.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _161.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _161.Misbehaviour;
                    fromPartial(object: Partial<_161.Misbehaviour>): _161.Misbehaviour;
                };
                Header: {
                    encode(message: _161.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _161.Header;
                    fromPartial(object: Partial<_161.Header>): _161.Header;
                };
                Fraction: {
                    encode(message: _161.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _161.Fraction;
                    fromPartial(object: Partial<_161.Fraction>): _161.Fraction;
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
