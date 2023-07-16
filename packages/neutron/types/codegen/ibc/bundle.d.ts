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
import * as _245 from "./applications/fee/v1/query.rpc.Query";
import * as _246 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _247 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _248 from "./applications/transfer/v1/query.rpc.Query";
import * as _249 from "./core/channel/v1/query.rpc.Query";
import * as _250 from "./core/client/v1/query.rpc.Query";
import * as _251 from "./core/connection/v1/query.rpc.Query";
import * as _252 from "./applications/fee/v1/tx.rpc.msg";
import * as _253 from "./applications/transfer/v1/tx.rpc.msg";
import * as _254 from "./core/channel/v1/tx.rpc.msg";
import * as _255 from "./core/client/v1/tx.rpc.msg";
import * as _256 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace fee {
            const v1: {
                MsgClientImpl: typeof _252.MsgClientImpl;
                QueryClientImpl: typeof _245.QueryClientImpl;
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
                        toAmino: ({ portId, channelId, relayer, payee }: _105.MsgRegisterPayee) => {
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
                        }) => _105.MsgRegisterPayee;
                    };
                    "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, relayer, counterpartyPayee }: _105.MsgRegisterCounterpartyPayee) => {
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
                        }) => _105.MsgRegisterCounterpartyPayee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFee": {
                        aminoType: string;
                        toAmino: ({ fee, sourcePortId, sourceChannelId, signer, relayers }: _105.MsgPayPacketFee) => {
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
                        }) => _105.MsgPayPacketFee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFeeAsync": {
                        aminoType: string;
                        toAmino: ({ packetId, packetFee }: _105.MsgPayPacketFeeAsync) => {
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
                        }) => _105.MsgPayPacketFeeAsync;
                    };
                };
                MsgRegisterPayee: {
                    encode(message: _105.MsgRegisterPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _105.MsgRegisterPayee;
                    fromPartial(object: Partial<_105.MsgRegisterPayee>): _105.MsgRegisterPayee;
                };
                MsgRegisterPayeeResponse: {
                    encode(_: _105.MsgRegisterPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _105.MsgRegisterPayeeResponse;
                    fromPartial(_: Partial<_105.MsgRegisterPayeeResponse>): _105.MsgRegisterPayeeResponse;
                };
                MsgRegisterCounterpartyPayee: {
                    encode(message: _105.MsgRegisterCounterpartyPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _105.MsgRegisterCounterpartyPayee;
                    fromPartial(object: Partial<_105.MsgRegisterCounterpartyPayee>): _105.MsgRegisterCounterpartyPayee;
                };
                MsgRegisterCounterpartyPayeeResponse: {
                    encode(_: _105.MsgRegisterCounterpartyPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _105.MsgRegisterCounterpartyPayeeResponse;
                    fromPartial(_: Partial<_105.MsgRegisterCounterpartyPayeeResponse>): _105.MsgRegisterCounterpartyPayeeResponse;
                };
                MsgPayPacketFee: {
                    encode(message: _105.MsgPayPacketFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _105.MsgPayPacketFee;
                    fromPartial(object: Partial<_105.MsgPayPacketFee>): _105.MsgPayPacketFee;
                };
                MsgPayPacketFeeResponse: {
                    encode(_: _105.MsgPayPacketFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _105.MsgPayPacketFeeResponse;
                    fromPartial(_: Partial<_105.MsgPayPacketFeeResponse>): _105.MsgPayPacketFeeResponse;
                };
                MsgPayPacketFeeAsync: {
                    encode(message: _105.MsgPayPacketFeeAsync, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _105.MsgPayPacketFeeAsync;
                    fromPartial(object: Partial<_105.MsgPayPacketFeeAsync>): _105.MsgPayPacketFeeAsync;
                };
                MsgPayPacketFeeAsyncResponse: {
                    encode(_: _105.MsgPayPacketFeeAsyncResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _105.MsgPayPacketFeeAsyncResponse;
                    fromPartial(_: Partial<_105.MsgPayPacketFeeAsyncResponse>): _105.MsgPayPacketFeeAsyncResponse;
                };
                QueryIncentivizedPacketsRequest: {
                    encode(message: _104.QueryIncentivizedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryIncentivizedPacketsRequest;
                    fromPartial(object: Partial<_104.QueryIncentivizedPacketsRequest>): _104.QueryIncentivizedPacketsRequest;
                };
                QueryIncentivizedPacketsResponse: {
                    encode(message: _104.QueryIncentivizedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryIncentivizedPacketsResponse;
                    fromPartial(object: Partial<_104.QueryIncentivizedPacketsResponse>): _104.QueryIncentivizedPacketsResponse;
                };
                QueryIncentivizedPacketRequest: {
                    encode(message: _104.QueryIncentivizedPacketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryIncentivizedPacketRequest;
                    fromPartial(object: Partial<_104.QueryIncentivizedPacketRequest>): _104.QueryIncentivizedPacketRequest;
                };
                QueryIncentivizedPacketResponse: {
                    encode(message: _104.QueryIncentivizedPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryIncentivizedPacketResponse;
                    fromPartial(object: Partial<_104.QueryIncentivizedPacketResponse>): _104.QueryIncentivizedPacketResponse;
                };
                QueryIncentivizedPacketsForChannelRequest: {
                    encode(message: _104.QueryIncentivizedPacketsForChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryIncentivizedPacketsForChannelRequest;
                    fromPartial(object: Partial<_104.QueryIncentivizedPacketsForChannelRequest>): _104.QueryIncentivizedPacketsForChannelRequest;
                };
                QueryIncentivizedPacketsForChannelResponse: {
                    encode(message: _104.QueryIncentivizedPacketsForChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryIncentivizedPacketsForChannelResponse;
                    fromPartial(object: Partial<_104.QueryIncentivizedPacketsForChannelResponse>): _104.QueryIncentivizedPacketsForChannelResponse;
                };
                QueryTotalRecvFeesRequest: {
                    encode(message: _104.QueryTotalRecvFeesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryTotalRecvFeesRequest;
                    fromPartial(object: Partial<_104.QueryTotalRecvFeesRequest>): _104.QueryTotalRecvFeesRequest;
                };
                QueryTotalRecvFeesResponse: {
                    encode(message: _104.QueryTotalRecvFeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryTotalRecvFeesResponse;
                    fromPartial(object: Partial<_104.QueryTotalRecvFeesResponse>): _104.QueryTotalRecvFeesResponse;
                };
                QueryTotalAckFeesRequest: {
                    encode(message: _104.QueryTotalAckFeesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryTotalAckFeesRequest;
                    fromPartial(object: Partial<_104.QueryTotalAckFeesRequest>): _104.QueryTotalAckFeesRequest;
                };
                QueryTotalAckFeesResponse: {
                    encode(message: _104.QueryTotalAckFeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryTotalAckFeesResponse;
                    fromPartial(object: Partial<_104.QueryTotalAckFeesResponse>): _104.QueryTotalAckFeesResponse;
                };
                QueryTotalTimeoutFeesRequest: {
                    encode(message: _104.QueryTotalTimeoutFeesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryTotalTimeoutFeesRequest;
                    fromPartial(object: Partial<_104.QueryTotalTimeoutFeesRequest>): _104.QueryTotalTimeoutFeesRequest;
                };
                QueryTotalTimeoutFeesResponse: {
                    encode(message: _104.QueryTotalTimeoutFeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryTotalTimeoutFeesResponse;
                    fromPartial(object: Partial<_104.QueryTotalTimeoutFeesResponse>): _104.QueryTotalTimeoutFeesResponse;
                };
                QueryPayeeRequest: {
                    encode(message: _104.QueryPayeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryPayeeRequest;
                    fromPartial(object: Partial<_104.QueryPayeeRequest>): _104.QueryPayeeRequest;
                };
                QueryPayeeResponse: {
                    encode(message: _104.QueryPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryPayeeResponse;
                    fromPartial(object: Partial<_104.QueryPayeeResponse>): _104.QueryPayeeResponse;
                };
                QueryCounterpartyPayeeRequest: {
                    encode(message: _104.QueryCounterpartyPayeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryCounterpartyPayeeRequest;
                    fromPartial(object: Partial<_104.QueryCounterpartyPayeeRequest>): _104.QueryCounterpartyPayeeRequest;
                };
                QueryCounterpartyPayeeResponse: {
                    encode(message: _104.QueryCounterpartyPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryCounterpartyPayeeResponse;
                    fromPartial(object: Partial<_104.QueryCounterpartyPayeeResponse>): _104.QueryCounterpartyPayeeResponse;
                };
                QueryFeeEnabledChannelsRequest: {
                    encode(message: _104.QueryFeeEnabledChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryFeeEnabledChannelsRequest;
                    fromPartial(object: Partial<_104.QueryFeeEnabledChannelsRequest>): _104.QueryFeeEnabledChannelsRequest;
                };
                QueryFeeEnabledChannelsResponse: {
                    encode(message: _104.QueryFeeEnabledChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryFeeEnabledChannelsResponse;
                    fromPartial(object: Partial<_104.QueryFeeEnabledChannelsResponse>): _104.QueryFeeEnabledChannelsResponse;
                };
                QueryFeeEnabledChannelRequest: {
                    encode(message: _104.QueryFeeEnabledChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryFeeEnabledChannelRequest;
                    fromPartial(object: Partial<_104.QueryFeeEnabledChannelRequest>): _104.QueryFeeEnabledChannelRequest;
                };
                QueryFeeEnabledChannelResponse: {
                    encode(message: _104.QueryFeeEnabledChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryFeeEnabledChannelResponse;
                    fromPartial(object: Partial<_104.QueryFeeEnabledChannelResponse>): _104.QueryFeeEnabledChannelResponse;
                };
                Metadata: {
                    encode(message: _103.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _103.Metadata;
                    fromPartial(object: Partial<_103.Metadata>): _103.Metadata;
                };
                GenesisState: {
                    encode(message: _102.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _102.GenesisState;
                    fromPartial(object: Partial<_102.GenesisState>): _102.GenesisState;
                };
                FeeEnabledChannel: {
                    encode(message: _102.FeeEnabledChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _102.FeeEnabledChannel;
                    fromPartial(object: Partial<_102.FeeEnabledChannel>): _102.FeeEnabledChannel;
                };
                RegisteredPayee: {
                    encode(message: _102.RegisteredPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _102.RegisteredPayee;
                    fromPartial(object: Partial<_102.RegisteredPayee>): _102.RegisteredPayee;
                };
                RegisteredCounterpartyPayee: {
                    encode(message: _102.RegisteredCounterpartyPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _102.RegisteredCounterpartyPayee;
                    fromPartial(object: Partial<_102.RegisteredCounterpartyPayee>): _102.RegisteredCounterpartyPayee;
                };
                ForwardRelayerAddress: {
                    encode(message: _102.ForwardRelayerAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _102.ForwardRelayerAddress;
                    fromPartial(object: Partial<_102.ForwardRelayerAddress>): _102.ForwardRelayerAddress;
                };
                Fee: {
                    encode(message: _101.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _101.Fee;
                    fromPartial(object: Partial<_101.Fee>): _101.Fee;
                };
                PacketFee: {
                    encode(message: _101.PacketFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _101.PacketFee;
                    fromPartial(object: Partial<_101.PacketFee>): _101.PacketFee;
                };
                PacketFees: {
                    encode(message: _101.PacketFees, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _101.PacketFees;
                    fromPartial(object: Partial<_101.PacketFees>): _101.PacketFees;
                };
                IdentifiedPacketFees: {
                    encode(message: _101.IdentifiedPacketFees, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _101.IdentifiedPacketFees;
                    fromPartial(object: Partial<_101.IdentifiedPacketFees>): _101.IdentifiedPacketFees;
                };
                IncentivizedAcknowledgement: {
                    encode(message: _100.IncentivizedAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _100.IncentivizedAcknowledgement;
                    fromPartial(object: Partial<_100.IncentivizedAcknowledgement>): _100.IncentivizedAcknowledgement;
                };
            };
        }
        namespace interchain_accounts {
            namespace controller {
                const v1: {
                    QueryClientImpl: typeof _246.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        interchainAccount(request: _107.QueryInterchainAccountRequest): Promise<_107.QueryInterchainAccountResponse>;
                        params(request?: _107.QueryParamsRequest): Promise<_107.QueryParamsResponse>;
                    };
                    QueryInterchainAccountRequest: {
                        encode(message: _107.QueryInterchainAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        fromJSON(object: any): _107.QueryInterchainAccountRequest;
                        fromPartial(object: Partial<_107.QueryInterchainAccountRequest>): _107.QueryInterchainAccountRequest;
                    };
                    QueryInterchainAccountResponse: {
                        encode(message: _107.QueryInterchainAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        fromJSON(object: any): _107.QueryInterchainAccountResponse;
                        fromPartial(object: Partial<_107.QueryInterchainAccountResponse>): _107.QueryInterchainAccountResponse;
                    };
                    QueryParamsRequest: {
                        encode(_: _107.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        fromJSON(_: any): _107.QueryParamsRequest;
                        fromPartial(_: Partial<_107.QueryParamsRequest>): _107.QueryParamsRequest;
                    };
                    QueryParamsResponse: {
                        encode(message: _107.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        fromJSON(object: any): _107.QueryParamsResponse;
                        fromPartial(object: Partial<_107.QueryParamsResponse>): _107.QueryParamsResponse;
                    };
                    Params: {
                        encode(message: _106.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        fromJSON(object: any): _106.Params;
                        fromPartial(object: Partial<_106.Params>): _106.Params;
                    };
                };
            }
            namespace host {
                const v1: {
                    QueryClientImpl: typeof _247.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        params(request?: _109.QueryParamsRequest): Promise<_109.QueryParamsResponse>;
                    };
                    QueryParamsRequest: {
                        encode(_: _109.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        fromJSON(_: any): _109.QueryParamsRequest;
                        fromPartial(_: Partial<_109.QueryParamsRequest>): _109.QueryParamsRequest;
                    };
                    QueryParamsResponse: {
                        encode(message: _109.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        fromJSON(object: any): _109.QueryParamsResponse;
                        fromPartial(object: Partial<_109.QueryParamsResponse>): _109.QueryParamsResponse;
                    };
                    Params: {
                        encode(message: _108.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        fromJSON(object: any): _108.Params;
                        fromPartial(object: Partial<_108.Params>): _108.Params;
                    };
                };
            }
            const v1: {
                typeFromJSON(object: any): _113.Type;
                typeToJSON(object: _113.Type): string;
                Type: typeof _113.Type;
                TypeSDKType: typeof _113.Type;
                InterchainAccountPacketData: {
                    encode(message: _113.InterchainAccountPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _113.InterchainAccountPacketData;
                    fromPartial(object: Partial<_113.InterchainAccountPacketData>): _113.InterchainAccountPacketData;
                };
                CosmosTx: {
                    encode(message: _113.CosmosTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _113.CosmosTx;
                    fromPartial(object: Partial<_113.CosmosTx>): _113.CosmosTx;
                };
                Metadata: {
                    encode(message: _112.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _112.Metadata;
                    fromPartial(object: Partial<_112.Metadata>): _112.Metadata;
                };
                GenesisState: {
                    encode(message: _111.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.GenesisState;
                    fromPartial(object: Partial<_111.GenesisState>): _111.GenesisState;
                };
                ControllerGenesisState: {
                    encode(message: _111.ControllerGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.ControllerGenesisState;
                    fromPartial(object: Partial<_111.ControllerGenesisState>): _111.ControllerGenesisState;
                };
                HostGenesisState: {
                    encode(message: _111.HostGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.HostGenesisState;
                    fromPartial(object: Partial<_111.HostGenesisState>): _111.HostGenesisState;
                };
                ActiveChannel: {
                    encode(message: _111.ActiveChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.ActiveChannel;
                    fromPartial(object: Partial<_111.ActiveChannel>): _111.ActiveChannel;
                };
                RegisteredInterchainAccount: {
                    encode(message: _111.RegisteredInterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.RegisteredInterchainAccount;
                    fromPartial(object: Partial<_111.RegisteredInterchainAccount>): _111.RegisteredInterchainAccount;
                };
                InterchainAccount: {
                    encode(message: _110.InterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _110.InterchainAccount;
                    fromPartial(object: Partial<_110.InterchainAccount>): _110.InterchainAccount;
                };
            };
        }
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _253.MsgClientImpl;
                QueryClientImpl: typeof _248.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _115.QueryDenomTraceRequest): Promise<_115.QueryDenomTraceResponse>;
                    denomTraces(request?: _115.QueryDenomTracesRequest): Promise<_115.QueryDenomTracesResponse>;
                    params(request?: _115.QueryParamsRequest): Promise<_115.QueryParamsResponse>;
                    denomHash(request: _115.QueryDenomHashRequest): Promise<_115.QueryDenomHashResponse>;
                    escrowAddress(request: _115.QueryEscrowAddressRequest): Promise<_115.QueryEscrowAddressResponse>;
                };
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
                        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp, memo }: _117.MsgTransfer) => {
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
                        }) => _117.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _117.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.MsgTransfer;
                    fromPartial(object: Partial<_117.MsgTransfer>): _117.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(message: _117.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.MsgTransferResponse;
                    fromPartial(object: Partial<_117.MsgTransferResponse>): _117.MsgTransferResponse;
                };
                DenomTrace: {
                    encode(message: _116.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _116.DenomTrace;
                    fromPartial(object: Partial<_116.DenomTrace>): _116.DenomTrace;
                };
                Params: {
                    encode(message: _116.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _116.Params;
                    fromPartial(object: Partial<_116.Params>): _116.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _115.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_115.QueryDenomTraceRequest>): _115.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _115.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_115.QueryDenomTraceResponse>): _115.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _115.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_115.QueryDenomTracesRequest>): _115.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _115.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_115.QueryDenomTracesResponse>): _115.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _115.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _115.QueryParamsRequest;
                    fromPartial(_: Partial<_115.QueryParamsRequest>): _115.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _115.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.QueryParamsResponse;
                    fromPartial(object: Partial<_115.QueryParamsResponse>): _115.QueryParamsResponse;
                };
                QueryDenomHashRequest: {
                    encode(message: _115.QueryDenomHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.QueryDenomHashRequest;
                    fromPartial(object: Partial<_115.QueryDenomHashRequest>): _115.QueryDenomHashRequest;
                };
                QueryDenomHashResponse: {
                    encode(message: _115.QueryDenomHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.QueryDenomHashResponse;
                    fromPartial(object: Partial<_115.QueryDenomHashResponse>): _115.QueryDenomHashResponse;
                };
                QueryEscrowAddressRequest: {
                    encode(message: _115.QueryEscrowAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.QueryEscrowAddressRequest;
                    fromPartial(object: Partial<_115.QueryEscrowAddressRequest>): _115.QueryEscrowAddressRequest;
                };
                QueryEscrowAddressResponse: {
                    encode(message: _115.QueryEscrowAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.QueryEscrowAddressResponse;
                    fromPartial(object: Partial<_115.QueryEscrowAddressResponse>): _115.QueryEscrowAddressResponse;
                };
                GenesisState: {
                    encode(message: _114.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _114.GenesisState;
                    fromPartial(object: Partial<_114.GenesisState>): _114.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _118.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _118.FungibleTokenPacketData;
                    fromPartial(object: Partial<_118.FungibleTokenPacketData>): _118.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _254.MsgClientImpl;
                QueryClientImpl: typeof _249.QueryClientImpl;
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
                        toAmino: ({ portId, channel, signer }: _122.MsgChannelOpenInit) => {
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
                        }) => _122.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: _122.MsgChannelOpenTry) => {
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
                        }) => _122.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: _122.MsgChannelOpenAck) => {
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
                        }) => _122.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: _122.MsgChannelOpenConfirm) => {
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
                        }) => _122.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, signer }: _122.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _122.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: _122.MsgChannelCloseConfirm) => {
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
                        }) => _122.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proofCommitment, proofHeight, signer }: _122.MsgRecvPacket) => {
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
                        }) => _122.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: _122.MsgTimeout) => {
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
                        }) => _122.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: _122.MsgTimeoutOnClose) => {
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
                        }) => _122.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: _122.MsgAcknowledgement) => {
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
                        }) => _122.MsgAcknowledgement;
                    };
                };
                responseResultTypeFromJSON(object: any): _122.ResponseResultType;
                responseResultTypeToJSON(object: _122.ResponseResultType): string;
                ResponseResultType: typeof _122.ResponseResultType;
                ResponseResultTypeSDKType: typeof _122.ResponseResultType;
                MsgChannelOpenInit: {
                    encode(message: _122.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _122.MsgChannelOpenInit;
                    fromPartial(object: Partial<_122.MsgChannelOpenInit>): _122.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(message: _122.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _122.MsgChannelOpenInitResponse;
                    fromPartial(object: Partial<_122.MsgChannelOpenInitResponse>): _122.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _122.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _122.MsgChannelOpenTry;
                    fromPartial(object: Partial<_122.MsgChannelOpenTry>): _122.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(message: _122.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _122.MsgChannelOpenTryResponse;
                    fromPartial(object: Partial<_122.MsgChannelOpenTryResponse>): _122.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _122.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _122.MsgChannelOpenAck;
                    fromPartial(object: Partial<_122.MsgChannelOpenAck>): _122.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _122.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _122.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_122.MsgChannelOpenAckResponse>): _122.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _122.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _122.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_122.MsgChannelOpenConfirm>): _122.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _122.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _122.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_122.MsgChannelOpenConfirmResponse>): _122.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _122.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _122.MsgChannelCloseInit;
                    fromPartial(object: Partial<_122.MsgChannelCloseInit>): _122.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _122.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _122.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_122.MsgChannelCloseInitResponse>): _122.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _122.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _122.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_122.MsgChannelCloseConfirm>): _122.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _122.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _122.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_122.MsgChannelCloseConfirmResponse>): _122.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _122.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _122.MsgRecvPacket;
                    fromPartial(object: Partial<_122.MsgRecvPacket>): _122.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(message: _122.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _122.MsgRecvPacketResponse;
                    fromPartial(object: Partial<_122.MsgRecvPacketResponse>): _122.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _122.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _122.MsgTimeout;
                    fromPartial(object: Partial<_122.MsgTimeout>): _122.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(message: _122.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _122.MsgTimeoutResponse;
                    fromPartial(object: Partial<_122.MsgTimeoutResponse>): _122.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _122.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _122.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_122.MsgTimeoutOnClose>): _122.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(message: _122.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _122.MsgTimeoutOnCloseResponse;
                    fromPartial(object: Partial<_122.MsgTimeoutOnCloseResponse>): _122.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _122.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _122.MsgAcknowledgement;
                    fromPartial(object: Partial<_122.MsgAcknowledgement>): _122.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(message: _122.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _122.MsgAcknowledgementResponse;
                    fromPartial(object: Partial<_122.MsgAcknowledgementResponse>): _122.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _121.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryChannelRequest;
                    fromPartial(object: Partial<_121.QueryChannelRequest>): _121.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _121.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryChannelResponse;
                    fromPartial(object: Partial<_121.QueryChannelResponse>): _121.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _121.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryChannelsRequest;
                    fromPartial(object: Partial<_121.QueryChannelsRequest>): _121.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _121.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryChannelsResponse;
                    fromPartial(object: Partial<_121.QueryChannelsResponse>): _121.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _121.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryConnectionChannelsRequest;
                    fromPartial(object: Partial<_121.QueryConnectionChannelsRequest>): _121.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _121.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryConnectionChannelsResponse;
                    fromPartial(object: Partial<_121.QueryConnectionChannelsResponse>): _121.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _121.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryChannelClientStateRequest;
                    fromPartial(object: Partial<_121.QueryChannelClientStateRequest>): _121.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _121.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryChannelClientStateResponse;
                    fromPartial(object: Partial<_121.QueryChannelClientStateResponse>): _121.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _121.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryChannelConsensusStateRequest;
                    fromPartial(object: Partial<_121.QueryChannelConsensusStateRequest>): _121.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _121.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryChannelConsensusStateResponse;
                    fromPartial(object: Partial<_121.QueryChannelConsensusStateResponse>): _121.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _121.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryPacketCommitmentRequest;
                    fromPartial(object: Partial<_121.QueryPacketCommitmentRequest>): _121.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _121.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryPacketCommitmentResponse;
                    fromPartial(object: Partial<_121.QueryPacketCommitmentResponse>): _121.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _121.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryPacketCommitmentsRequest;
                    fromPartial(object: Partial<_121.QueryPacketCommitmentsRequest>): _121.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _121.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryPacketCommitmentsResponse;
                    fromPartial(object: Partial<_121.QueryPacketCommitmentsResponse>): _121.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _121.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryPacketReceiptRequest;
                    fromPartial(object: Partial<_121.QueryPacketReceiptRequest>): _121.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _121.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryPacketReceiptResponse;
                    fromPartial(object: Partial<_121.QueryPacketReceiptResponse>): _121.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _121.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryPacketAcknowledgementRequest;
                    fromPartial(object: Partial<_121.QueryPacketAcknowledgementRequest>): _121.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _121.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryPacketAcknowledgementResponse;
                    fromPartial(object: Partial<_121.QueryPacketAcknowledgementResponse>): _121.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _121.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: Partial<_121.QueryPacketAcknowledgementsRequest>): _121.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _121.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: Partial<_121.QueryPacketAcknowledgementsResponse>): _121.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _121.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryUnreceivedPacketsRequest;
                    fromPartial(object: Partial<_121.QueryUnreceivedPacketsRequest>): _121.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _121.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryUnreceivedPacketsResponse;
                    fromPartial(object: Partial<_121.QueryUnreceivedPacketsResponse>): _121.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _121.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryUnreceivedAcksRequest;
                    fromPartial(object: Partial<_121.QueryUnreceivedAcksRequest>): _121.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _121.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryUnreceivedAcksResponse;
                    fromPartial(object: Partial<_121.QueryUnreceivedAcksResponse>): _121.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _121.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryNextSequenceReceiveRequest;
                    fromPartial(object: Partial<_121.QueryNextSequenceReceiveRequest>): _121.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _121.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.QueryNextSequenceReceiveResponse;
                    fromPartial(object: Partial<_121.QueryNextSequenceReceiveResponse>): _121.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _120.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _120.GenesisState;
                    fromPartial(object: Partial<_120.GenesisState>): _120.GenesisState;
                };
                PacketSequence: {
                    encode(message: _120.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _120.PacketSequence;
                    fromPartial(object: Partial<_120.PacketSequence>): _120.PacketSequence;
                };
                stateFromJSON(object: any): _119.State;
                stateToJSON(object: _119.State): string;
                orderFromJSON(object: any): _119.Order;
                orderToJSON(object: _119.Order): string;
                State: typeof _119.State;
                StateSDKType: typeof _119.State;
                Order: typeof _119.Order;
                OrderSDKType: typeof _119.Order;
                Channel: {
                    encode(message: _119.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _119.Channel;
                    fromPartial(object: Partial<_119.Channel>): _119.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _119.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _119.IdentifiedChannel;
                    fromPartial(object: Partial<_119.IdentifiedChannel>): _119.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _119.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _119.Counterparty;
                    fromPartial(object: Partial<_119.Counterparty>): _119.Counterparty;
                };
                Packet: {
                    encode(message: _119.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _119.Packet;
                    fromPartial(object: Partial<_119.Packet>): _119.Packet;
                };
                PacketState: {
                    encode(message: _119.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _119.PacketState;
                    fromPartial(object: Partial<_119.PacketState>): _119.PacketState;
                };
                PacketId: {
                    encode(message: _119.PacketId, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _119.PacketId;
                    fromPartial(object: Partial<_119.PacketId>): _119.PacketId;
                };
                Acknowledgement: {
                    encode(message: _119.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _119.Acknowledgement;
                    fromPartial(object: Partial<_119.Acknowledgement>): _119.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _255.MsgClientImpl;
                QueryClientImpl: typeof _250.QueryClientImpl;
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
                        toAmino: ({ clientState, consensusState, signer }: _126.MsgCreateClient) => {
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
                        }) => _126.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ clientId, header, signer }: _126.MsgUpdateClient) => {
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
                        }) => _126.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer }: _126.MsgUpgradeClient) => {
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
                        }) => _126.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ clientId, misbehaviour, signer }: _126.MsgSubmitMisbehaviour) => {
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
                        }) => _126.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _126.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _126.MsgCreateClient;
                    fromPartial(object: Partial<_126.MsgCreateClient>): _126.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _126.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _126.MsgCreateClientResponse;
                    fromPartial(_: Partial<_126.MsgCreateClientResponse>): _126.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _126.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _126.MsgUpdateClient;
                    fromPartial(object: Partial<_126.MsgUpdateClient>): _126.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _126.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _126.MsgUpdateClientResponse;
                    fromPartial(_: Partial<_126.MsgUpdateClientResponse>): _126.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _126.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _126.MsgUpgradeClient;
                    fromPartial(object: Partial<_126.MsgUpgradeClient>): _126.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _126.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _126.MsgUpgradeClientResponse;
                    fromPartial(_: Partial<_126.MsgUpgradeClientResponse>): _126.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _126.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _126.MsgSubmitMisbehaviour;
                    fromPartial(object: Partial<_126.MsgSubmitMisbehaviour>): _126.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _126.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _126.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: Partial<_126.MsgSubmitMisbehaviourResponse>): _126.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _125.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _125.QueryClientStateRequest;
                    fromPartial(object: Partial<_125.QueryClientStateRequest>): _125.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _125.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _125.QueryClientStateResponse;
                    fromPartial(object: Partial<_125.QueryClientStateResponse>): _125.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _125.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _125.QueryClientStatesRequest;
                    fromPartial(object: Partial<_125.QueryClientStatesRequest>): _125.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _125.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _125.QueryClientStatesResponse;
                    fromPartial(object: Partial<_125.QueryClientStatesResponse>): _125.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _125.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _125.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_125.QueryConsensusStateRequest>): _125.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _125.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _125.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_125.QueryConsensusStateResponse>): _125.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _125.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _125.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_125.QueryConsensusStatesRequest>): _125.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _125.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _125.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_125.QueryConsensusStatesResponse>): _125.QueryConsensusStatesResponse;
                };
                QueryConsensusStateHeightsRequest: {
                    encode(message: _125.QueryConsensusStateHeightsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _125.QueryConsensusStateHeightsRequest;
                    fromPartial(object: Partial<_125.QueryConsensusStateHeightsRequest>): _125.QueryConsensusStateHeightsRequest;
                };
                QueryConsensusStateHeightsResponse: {
                    encode(message: _125.QueryConsensusStateHeightsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _125.QueryConsensusStateHeightsResponse;
                    fromPartial(object: Partial<_125.QueryConsensusStateHeightsResponse>): _125.QueryConsensusStateHeightsResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _125.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _125.QueryClientStatusRequest;
                    fromPartial(object: Partial<_125.QueryClientStatusRequest>): _125.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _125.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _125.QueryClientStatusResponse;
                    fromPartial(object: Partial<_125.QueryClientStatusResponse>): _125.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _125.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _125.QueryClientParamsRequest;
                    fromPartial(_: Partial<_125.QueryClientParamsRequest>): _125.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _125.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _125.QueryClientParamsResponse;
                    fromPartial(object: Partial<_125.QueryClientParamsResponse>): _125.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _125.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _125.QueryUpgradedClientStateRequest;
                    fromPartial(_: Partial<_125.QueryUpgradedClientStateRequest>): _125.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _125.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _125.QueryUpgradedClientStateResponse;
                    fromPartial(object: Partial<_125.QueryUpgradedClientStateResponse>): _125.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _125.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _125.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: Partial<_125.QueryUpgradedConsensusStateRequest>): _125.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _125.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _125.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: Partial<_125.QueryUpgradedConsensusStateResponse>): _125.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _124.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _124.GenesisState;
                    fromPartial(object: Partial<_124.GenesisState>): _124.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _124.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _124.GenesisMetadata;
                    fromPartial(object: Partial<_124.GenesisMetadata>): _124.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _124.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _124.IdentifiedGenesisMetadata;
                    fromPartial(object: Partial<_124.IdentifiedGenesisMetadata>): _124.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _123.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _123.IdentifiedClientState;
                    fromPartial(object: Partial<_123.IdentifiedClientState>): _123.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _123.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _123.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_123.ConsensusStateWithHeight>): _123.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _123.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _123.ClientConsensusStates;
                    fromPartial(object: Partial<_123.ClientConsensusStates>): _123.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _123.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _123.ClientUpdateProposal;
                    fromPartial(object: Partial<_123.ClientUpdateProposal>): _123.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _123.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _123.UpgradeProposal;
                    fromPartial(object: Partial<_123.UpgradeProposal>): _123.UpgradeProposal;
                };
                Height: {
                    encode(message: _123.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _123.Height;
                    fromPartial(object: Partial<_123.Height>): _123.Height;
                };
                Params: {
                    encode(message: _123.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _123.Params;
                    fromPartial(object: Partial<_123.Params>): _123.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _127.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _127.MerkleRoot;
                    fromPartial(object: Partial<_127.MerkleRoot>): _127.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _127.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _127.MerklePrefix;
                    fromPartial(object: Partial<_127.MerklePrefix>): _127.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _127.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _127.MerklePath;
                    fromPartial(object: Partial<_127.MerklePath>): _127.MerklePath;
                };
                MerkleProof: {
                    encode(message: _127.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _127.MerkleProof;
                    fromPartial(object: Partial<_127.MerkleProof>): _127.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _256.MsgClientImpl;
                QueryClientImpl: typeof _251.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _130.QueryConnectionRequest): Promise<_130.QueryConnectionResponse>;
                    connections(request?: _130.QueryConnectionsRequest): Promise<_130.QueryConnectionsResponse>;
                    clientConnections(request: _130.QueryClientConnectionsRequest): Promise<_130.QueryClientConnectionsResponse>;
                    connectionClientState(request: _130.QueryConnectionClientStateRequest): Promise<_130.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _130.QueryConnectionConsensusStateRequest): Promise<_130.QueryConnectionConsensusStateResponse>;
                };
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
                        toAmino: ({ clientId, counterparty, version, delayPeriod, signer }: _131.MsgConnectionOpenInit) => {
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
                        }) => _131.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer }: _131.MsgConnectionOpenTry) => {
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
                        }) => _131.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer }: _131.MsgConnectionOpenAck) => {
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
                        }) => _131.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connectionId, proofAck, proofHeight, signer }: _131.MsgConnectionOpenConfirm) => {
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
                        }) => _131.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _131.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _131.MsgConnectionOpenInit;
                    fromPartial(object: Partial<_131.MsgConnectionOpenInit>): _131.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _131.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _131.MsgConnectionOpenInitResponse;
                    fromPartial(_: Partial<_131.MsgConnectionOpenInitResponse>): _131.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _131.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _131.MsgConnectionOpenTry;
                    fromPartial(object: Partial<_131.MsgConnectionOpenTry>): _131.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _131.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _131.MsgConnectionOpenTryResponse;
                    fromPartial(_: Partial<_131.MsgConnectionOpenTryResponse>): _131.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _131.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _131.MsgConnectionOpenAck;
                    fromPartial(object: Partial<_131.MsgConnectionOpenAck>): _131.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _131.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _131.MsgConnectionOpenAckResponse;
                    fromPartial(_: Partial<_131.MsgConnectionOpenAckResponse>): _131.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _131.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _131.MsgConnectionOpenConfirm;
                    fromPartial(object: Partial<_131.MsgConnectionOpenConfirm>): _131.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _131.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _131.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: Partial<_131.MsgConnectionOpenConfirmResponse>): _131.MsgConnectionOpenConfirmResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _130.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _130.QueryConnectionRequest;
                    fromPartial(object: Partial<_130.QueryConnectionRequest>): _130.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _130.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _130.QueryConnectionResponse;
                    fromPartial(object: Partial<_130.QueryConnectionResponse>): _130.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _130.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _130.QueryConnectionsRequest;
                    fromPartial(object: Partial<_130.QueryConnectionsRequest>): _130.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _130.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _130.QueryConnectionsResponse;
                    fromPartial(object: Partial<_130.QueryConnectionsResponse>): _130.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _130.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _130.QueryClientConnectionsRequest;
                    fromPartial(object: Partial<_130.QueryClientConnectionsRequest>): _130.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _130.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _130.QueryClientConnectionsResponse;
                    fromPartial(object: Partial<_130.QueryClientConnectionsResponse>): _130.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _130.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _130.QueryConnectionClientStateRequest;
                    fromPartial(object: Partial<_130.QueryConnectionClientStateRequest>): _130.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _130.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _130.QueryConnectionClientStateResponse;
                    fromPartial(object: Partial<_130.QueryConnectionClientStateResponse>): _130.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _130.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _130.QueryConnectionConsensusStateRequest;
                    fromPartial(object: Partial<_130.QueryConnectionConsensusStateRequest>): _130.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _130.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _130.QueryConnectionConsensusStateResponse;
                    fromPartial(object: Partial<_130.QueryConnectionConsensusStateResponse>): _130.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _129.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _129.GenesisState;
                    fromPartial(object: Partial<_129.GenesisState>): _129.GenesisState;
                };
                stateFromJSON(object: any): _128.State;
                stateToJSON(object: _128.State): string;
                State: typeof _128.State;
                StateSDKType: typeof _128.State;
                ConnectionEnd: {
                    encode(message: _128.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _128.ConnectionEnd;
                    fromPartial(object: Partial<_128.ConnectionEnd>): _128.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _128.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _128.IdentifiedConnection;
                    fromPartial(object: Partial<_128.IdentifiedConnection>): _128.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _128.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _128.Counterparty;
                    fromPartial(object: Partial<_128.Counterparty>): _128.Counterparty;
                };
                ClientPaths: {
                    encode(message: _128.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _128.ClientPaths;
                    fromPartial(object: Partial<_128.ClientPaths>): _128.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _128.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _128.ConnectionPaths;
                    fromPartial(object: Partial<_128.ConnectionPaths>): _128.ConnectionPaths;
                };
                Version: {
                    encode(message: _128.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _128.Version;
                    fromPartial(object: Partial<_128.Version>): _128.Version;
                };
                Params: {
                    encode(message: _128.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _128.Params;
                    fromPartial(object: Partial<_128.Params>): _128.Params;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _132.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _132.GenesisState;
                    fromPartial(object: Partial<_132.GenesisState>): _132.GenesisState;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _133.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _133.ClientState;
                    fromPartial(object: Partial<_133.ClientState>): _133.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _134.DataType;
                dataTypeToJSON(object: _134.DataType): string;
                DataType: typeof _134.DataType;
                DataTypeSDKType: typeof _134.DataType;
                ClientState: {
                    encode(message: _134.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _134.ClientState;
                    fromPartial(object: Partial<_134.ClientState>): _134.ClientState;
                };
                ConsensusState: {
                    encode(message: _134.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _134.ConsensusState;
                    fromPartial(object: Partial<_134.ConsensusState>): _134.ConsensusState;
                };
                Header: {
                    encode(message: _134.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _134.Header;
                    fromPartial(object: Partial<_134.Header>): _134.Header;
                };
                Misbehaviour: {
                    encode(message: _134.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _134.Misbehaviour;
                    fromPartial(object: Partial<_134.Misbehaviour>): _134.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _134.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _134.SignatureAndData;
                    fromPartial(object: Partial<_134.SignatureAndData>): _134.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _134.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _134.TimestampedSignatureData;
                    fromPartial(object: Partial<_134.TimestampedSignatureData>): _134.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _134.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _134.SignBytes;
                    fromPartial(object: Partial<_134.SignBytes>): _134.SignBytes;
                };
                HeaderData: {
                    encode(message: _134.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _134.HeaderData;
                    fromPartial(object: Partial<_134.HeaderData>): _134.HeaderData;
                };
                ClientStateData: {
                    encode(message: _134.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _134.ClientStateData;
                    fromPartial(object: Partial<_134.ClientStateData>): _134.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _134.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _134.ConsensusStateData;
                    fromPartial(object: Partial<_134.ConsensusStateData>): _134.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _134.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _134.ConnectionStateData;
                    fromPartial(object: Partial<_134.ConnectionStateData>): _134.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _134.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _134.ChannelStateData;
                    fromPartial(object: Partial<_134.ChannelStateData>): _134.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _134.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _134.PacketCommitmentData;
                    fromPartial(object: Partial<_134.PacketCommitmentData>): _134.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _134.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _134.PacketAcknowledgementData;
                    fromPartial(object: Partial<_134.PacketAcknowledgementData>): _134.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _134.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _134.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_134.PacketReceiptAbsenceData>): _134.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _134.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _134.NextSequenceRecvData;
                    fromPartial(object: Partial<_134.NextSequenceRecvData>): _134.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _135.DataType;
                dataTypeToJSON(object: _135.DataType): string;
                DataType: typeof _135.DataType;
                DataTypeSDKType: typeof _135.DataType;
                ClientState: {
                    encode(message: _135.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _135.ClientState;
                    fromPartial(object: Partial<_135.ClientState>): _135.ClientState;
                };
                ConsensusState: {
                    encode(message: _135.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _135.ConsensusState;
                    fromPartial(object: Partial<_135.ConsensusState>): _135.ConsensusState;
                };
                Header: {
                    encode(message: _135.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _135.Header;
                    fromPartial(object: Partial<_135.Header>): _135.Header;
                };
                Misbehaviour: {
                    encode(message: _135.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _135.Misbehaviour;
                    fromPartial(object: Partial<_135.Misbehaviour>): _135.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _135.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _135.SignatureAndData;
                    fromPartial(object: Partial<_135.SignatureAndData>): _135.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _135.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _135.TimestampedSignatureData;
                    fromPartial(object: Partial<_135.TimestampedSignatureData>): _135.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _135.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _135.SignBytes;
                    fromPartial(object: Partial<_135.SignBytes>): _135.SignBytes;
                };
                HeaderData: {
                    encode(message: _135.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _135.HeaderData;
                    fromPartial(object: Partial<_135.HeaderData>): _135.HeaderData;
                };
                ClientStateData: {
                    encode(message: _135.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _135.ClientStateData;
                    fromPartial(object: Partial<_135.ClientStateData>): _135.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _135.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _135.ConsensusStateData;
                    fromPartial(object: Partial<_135.ConsensusStateData>): _135.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _135.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _135.ConnectionStateData;
                    fromPartial(object: Partial<_135.ConnectionStateData>): _135.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _135.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _135.ChannelStateData;
                    fromPartial(object: Partial<_135.ChannelStateData>): _135.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _135.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _135.PacketCommitmentData;
                    fromPartial(object: Partial<_135.PacketCommitmentData>): _135.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _135.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _135.PacketAcknowledgementData;
                    fromPartial(object: Partial<_135.PacketAcknowledgementData>): _135.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _135.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _135.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_135.PacketReceiptAbsenceData>): _135.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _135.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _135.NextSequenceRecvData;
                    fromPartial(object: Partial<_135.NextSequenceRecvData>): _135.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _136.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _136.ClientState;
                    fromPartial(object: Partial<_136.ClientState>): _136.ClientState;
                };
                ConsensusState: {
                    encode(message: _136.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _136.ConsensusState;
                    fromPartial(object: Partial<_136.ConsensusState>): _136.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _136.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _136.Misbehaviour;
                    fromPartial(object: Partial<_136.Misbehaviour>): _136.Misbehaviour;
                };
                Header: {
                    encode(message: _136.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _136.Header;
                    fromPartial(object: Partial<_136.Header>): _136.Header;
                };
                Fraction: {
                    encode(message: _136.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _136.Fraction;
                    fromPartial(object: Partial<_136.Fraction>): _136.Fraction;
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
                        v1: _252.MsgClientImpl;
                    };
                    transfer: {
                        v1: _253.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _254.MsgClientImpl;
                    };
                    client: {
                        v1: _255.MsgClientImpl;
                    };
                    connection: {
                        v1: _256.MsgClientImpl;
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
    };
}
