import * as _89 from "./applications/interchain_accounts/controller/v1/controller";
import * as _90 from "./applications/interchain_accounts/controller/v1/query";
import * as _91 from "./applications/interchain_accounts/host/v1/host";
import * as _92 from "./applications/interchain_accounts/host/v1/query";
import * as _93 from "./applications/interchain_accounts/v1/account";
import * as _94 from "./applications/interchain_accounts/v1/genesis";
import * as _95 from "./applications/interchain_accounts/v1/metadata";
import * as _96 from "./applications/interchain_accounts/v1/packet";
import * as _97 from "./applications/transfer/v1/genesis";
import * as _98 from "./applications/transfer/v1/query";
import * as _99 from "./applications/transfer/v1/transfer";
import * as _100 from "./applications/transfer/v1/tx";
import * as _101 from "./applications/transfer/v2/packet";
import * as _102 from "./core/channel/v1/channel";
import * as _103 from "./core/channel/v1/genesis";
import * as _104 from "./core/channel/v1/query";
import * as _105 from "./core/channel/v1/tx";
import * as _106 from "./core/client/v1/client";
import * as _107 from "./core/client/v1/genesis";
import * as _108 from "./core/client/v1/query";
import * as _109 from "./core/client/v1/tx";
import * as _110 from "./core/commitment/v1/commitment";
import * as _111 from "./core/connection/v1/connection";
import * as _112 from "./core/connection/v1/genesis";
import * as _113 from "./core/connection/v1/query";
import * as _114 from "./core/connection/v1/tx";
import * as _115 from "./core/types/v1/genesis";
import * as _116 from "./lightclients/localhost/v1/localhost";
import * as _117 from "./lightclients/solomachine/v1/solomachine";
import * as _118 from "./lightclients/solomachine/v2/solomachine";
import * as _119 from "./lightclients/tendermint/v1/tendermint";
import * as _189 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _190 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _191 from "./applications/transfer/v1/query.rpc.Query";
import * as _192 from "./core/channel/v1/query.rpc.Query";
import * as _193 from "./core/client/v1/query.rpc.Query";
import * as _194 from "./core/connection/v1/query.rpc.Query";
import * as _195 from "./applications/transfer/v1/tx.rpc.msg";
import * as _196 from "./core/channel/v1/tx.rpc.msg";
import * as _197 from "./core/client/v1/tx.rpc.msg";
import * as _198 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace interchain_accounts {
            namespace controller {
                const v1: {
                    QueryClientImpl: typeof _189.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        interchainAccount(request: _90.QueryInterchainAccountRequest): Promise<_90.QueryInterchainAccountResponse>;
                        params(request?: _90.QueryParamsRequest): Promise<_90.QueryParamsResponse>;
                    };
                    QueryInterchainAccountRequest: {
                        encode(message: _90.QueryInterchainAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        fromJSON(object: any): _90.QueryInterchainAccountRequest;
                        fromPartial(object: Partial<_90.QueryInterchainAccountRequest>): _90.QueryInterchainAccountRequest;
                    };
                    QueryInterchainAccountResponse: {
                        encode(message: _90.QueryInterchainAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        fromJSON(object: any): _90.QueryInterchainAccountResponse;
                        fromPartial(object: Partial<_90.QueryInterchainAccountResponse>): _90.QueryInterchainAccountResponse;
                    };
                    QueryParamsRequest: {
                        encode(_: _90.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        fromJSON(_: any): _90.QueryParamsRequest;
                        fromPartial(_: Partial<_90.QueryParamsRequest>): _90.QueryParamsRequest;
                    };
                    QueryParamsResponse: {
                        encode(message: _90.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        fromJSON(object: any): _90.QueryParamsResponse;
                        fromPartial(object: Partial<_90.QueryParamsResponse>): _90.QueryParamsResponse;
                    };
                    Params: {
                        encode(message: _89.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        fromJSON(object: any): _89.Params;
                        fromPartial(object: Partial<_89.Params>): _89.Params;
                    };
                };
            }
            namespace host {
                const v1: {
                    QueryClientImpl: typeof _190.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        params(request?: _92.QueryParamsRequest): Promise<_92.QueryParamsResponse>;
                    };
                    QueryParamsRequest: {
                        encode(_: _92.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        fromJSON(_: any): _92.QueryParamsRequest;
                        fromPartial(_: Partial<_92.QueryParamsRequest>): _92.QueryParamsRequest;
                    };
                    QueryParamsResponse: {
                        encode(message: _92.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        fromJSON(object: any): _92.QueryParamsResponse;
                        fromPartial(object: Partial<_92.QueryParamsResponse>): _92.QueryParamsResponse;
                    };
                    Params: {
                        encode(message: _91.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        fromJSON(object: any): _91.Params;
                        fromPartial(object: Partial<_91.Params>): _91.Params;
                    };
                };
            }
            const v1: {
                typeFromJSON(object: any): _96.Type;
                typeToJSON(object: _96.Type): string;
                Type: typeof _96.Type;
                TypeSDKType: typeof _96.Type;
                InterchainAccountPacketData: {
                    encode(message: _96.InterchainAccountPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _96.InterchainAccountPacketData;
                    fromPartial(object: Partial<_96.InterchainAccountPacketData>): _96.InterchainAccountPacketData;
                };
                CosmosTx: {
                    encode(message: _96.CosmosTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _96.CosmosTx;
                    fromPartial(object: Partial<_96.CosmosTx>): _96.CosmosTx;
                };
                Metadata: {
                    encode(message: _95.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _95.Metadata;
                    fromPartial(object: Partial<_95.Metadata>): _95.Metadata;
                };
                GenesisState: {
                    encode(message: _94.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _94.GenesisState;
                    fromPartial(object: Partial<_94.GenesisState>): _94.GenesisState;
                };
                ControllerGenesisState: {
                    encode(message: _94.ControllerGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _94.ControllerGenesisState;
                    fromPartial(object: Partial<_94.ControllerGenesisState>): _94.ControllerGenesisState;
                };
                HostGenesisState: {
                    encode(message: _94.HostGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _94.HostGenesisState;
                    fromPartial(object: Partial<_94.HostGenesisState>): _94.HostGenesisState;
                };
                ActiveChannel: {
                    encode(message: _94.ActiveChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _94.ActiveChannel;
                    fromPartial(object: Partial<_94.ActiveChannel>): _94.ActiveChannel;
                };
                RegisteredInterchainAccount: {
                    encode(message: _94.RegisteredInterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _94.RegisteredInterchainAccount;
                    fromPartial(object: Partial<_94.RegisteredInterchainAccount>): _94.RegisteredInterchainAccount;
                };
                InterchainAccount: {
                    encode(message: _93.InterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _93.InterchainAccount;
                    fromPartial(object: Partial<_93.InterchainAccount>): _93.InterchainAccount;
                };
            };
        }
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _195.MsgClientImpl;
                QueryClientImpl: typeof _191.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _98.QueryDenomTraceRequest): Promise<_98.QueryDenomTraceResponse>;
                    denomTraces(request?: _98.QueryDenomTracesRequest): Promise<_98.QueryDenomTracesResponse>;
                    params(request?: _98.QueryParamsRequest): Promise<_98.QueryParamsResponse>;
                    denomHash(request: _98.QueryDenomHashRequest): Promise<_98.QueryDenomHashResponse>;
                    escrowAddress(request: _98.QueryEscrowAddressRequest): Promise<_98.QueryEscrowAddressResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _100.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _100.MsgTransfer): {
                            typeUrl: string;
                            value: _100.MsgTransfer;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _100.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _100.MsgTransfer): {
                            typeUrl: string;
                            value: _100.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp, memo }: _100.MsgTransfer) => {
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
                        }) => _100.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _100.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _100.MsgTransfer;
                    fromPartial(object: Partial<_100.MsgTransfer>): _100.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(message: _100.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _100.MsgTransferResponse;
                    fromPartial(object: Partial<_100.MsgTransferResponse>): _100.MsgTransferResponse;
                };
                DenomTrace: {
                    encode(message: _99.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _99.DenomTrace;
                    fromPartial(object: Partial<_99.DenomTrace>): _99.DenomTrace;
                };
                Params: {
                    encode(message: _99.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _99.Params;
                    fromPartial(object: Partial<_99.Params>): _99.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _98.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _98.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_98.QueryDenomTraceRequest>): _98.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _98.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _98.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_98.QueryDenomTraceResponse>): _98.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _98.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _98.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_98.QueryDenomTracesRequest>): _98.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _98.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _98.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_98.QueryDenomTracesResponse>): _98.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _98.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _98.QueryParamsRequest;
                    fromPartial(_: Partial<_98.QueryParamsRequest>): _98.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _98.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _98.QueryParamsResponse;
                    fromPartial(object: Partial<_98.QueryParamsResponse>): _98.QueryParamsResponse;
                };
                QueryDenomHashRequest: {
                    encode(message: _98.QueryDenomHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _98.QueryDenomHashRequest;
                    fromPartial(object: Partial<_98.QueryDenomHashRequest>): _98.QueryDenomHashRequest;
                };
                QueryDenomHashResponse: {
                    encode(message: _98.QueryDenomHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _98.QueryDenomHashResponse;
                    fromPartial(object: Partial<_98.QueryDenomHashResponse>): _98.QueryDenomHashResponse;
                };
                QueryEscrowAddressRequest: {
                    encode(message: _98.QueryEscrowAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _98.QueryEscrowAddressRequest;
                    fromPartial(object: Partial<_98.QueryEscrowAddressRequest>): _98.QueryEscrowAddressRequest;
                };
                QueryEscrowAddressResponse: {
                    encode(message: _98.QueryEscrowAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _98.QueryEscrowAddressResponse;
                    fromPartial(object: Partial<_98.QueryEscrowAddressResponse>): _98.QueryEscrowAddressResponse;
                };
                GenesisState: {
                    encode(message: _97.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _97.GenesisState;
                    fromPartial(object: Partial<_97.GenesisState>): _97.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _101.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _101.FungibleTokenPacketData;
                    fromPartial(object: Partial<_101.FungibleTokenPacketData>): _101.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _196.MsgClientImpl;
                QueryClientImpl: typeof _192.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _104.QueryChannelRequest): Promise<_104.QueryChannelResponse>;
                    channels(request?: _104.QueryChannelsRequest): Promise<_104.QueryChannelsResponse>;
                    connectionChannels(request: _104.QueryConnectionChannelsRequest): Promise<_104.QueryConnectionChannelsResponse>;
                    channelClientState(request: _104.QueryChannelClientStateRequest): Promise<_104.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _104.QueryChannelConsensusStateRequest): Promise<_104.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _104.QueryPacketCommitmentRequest): Promise<_104.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _104.QueryPacketCommitmentsRequest): Promise<_104.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _104.QueryPacketReceiptRequest): Promise<_104.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _104.QueryPacketAcknowledgementRequest): Promise<_104.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _104.QueryPacketAcknowledgementsRequest): Promise<_104.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _104.QueryUnreceivedPacketsRequest): Promise<_104.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _104.QueryUnreceivedAcksRequest): Promise<_104.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _104.QueryNextSequenceReceiveRequest): Promise<_104.QueryNextSequenceReceiveResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _105.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _105.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _105.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _105.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _105.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _105.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _105.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _105.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _105.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _105.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _105.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _105.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _105.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _105.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _105.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _105.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _105.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _105.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _105.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _105.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _105.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _105.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _105.MsgRecvPacket): {
                            typeUrl: string;
                            value: _105.MsgRecvPacket;
                        };
                        timeout(value: _105.MsgTimeout): {
                            typeUrl: string;
                            value: _105.MsgTimeout;
                        };
                        timeoutOnClose(value: _105.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _105.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _105.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _105.MsgAcknowledgement;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _105.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _105.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _105.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _105.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _105.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _105.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _105.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _105.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _105.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _105.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _105.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _105.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _105.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _105.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _105.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _105.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _105.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _105.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _105.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _105.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _105.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _105.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _105.MsgRecvPacket): {
                            typeUrl: string;
                            value: _105.MsgRecvPacket;
                        };
                        timeout(value: _105.MsgTimeout): {
                            typeUrl: string;
                            value: _105.MsgTimeout;
                        };
                        timeoutOnClose(value: _105.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _105.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _105.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _105.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: ({ portId, channel, signer }: _105.MsgChannelOpenInit) => {
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
                        }) => _105.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: _105.MsgChannelOpenTry) => {
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
                        }) => _105.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: _105.MsgChannelOpenAck) => {
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
                        }) => _105.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: _105.MsgChannelOpenConfirm) => {
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
                        }) => _105.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, signer }: _105.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _105.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: _105.MsgChannelCloseConfirm) => {
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
                        }) => _105.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proofCommitment, proofHeight, signer }: _105.MsgRecvPacket) => {
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
                        }) => _105.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: _105.MsgTimeout) => {
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
                        }) => _105.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: _105.MsgTimeoutOnClose) => {
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
                        }) => _105.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: _105.MsgAcknowledgement) => {
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
                        }) => _105.MsgAcknowledgement;
                    };
                };
                responseResultTypeFromJSON(object: any): _105.ResponseResultType;
                responseResultTypeToJSON(object: _105.ResponseResultType): string;
                ResponseResultType: typeof _105.ResponseResultType;
                ResponseResultTypeSDKType: typeof _105.ResponseResultType;
                MsgChannelOpenInit: {
                    encode(message: _105.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _105.MsgChannelOpenInit;
                    fromPartial(object: Partial<_105.MsgChannelOpenInit>): _105.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(message: _105.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _105.MsgChannelOpenInitResponse;
                    fromPartial(object: Partial<_105.MsgChannelOpenInitResponse>): _105.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _105.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _105.MsgChannelOpenTry;
                    fromPartial(object: Partial<_105.MsgChannelOpenTry>): _105.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(message: _105.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _105.MsgChannelOpenTryResponse;
                    fromPartial(object: Partial<_105.MsgChannelOpenTryResponse>): _105.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _105.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _105.MsgChannelOpenAck;
                    fromPartial(object: Partial<_105.MsgChannelOpenAck>): _105.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _105.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _105.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_105.MsgChannelOpenAckResponse>): _105.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _105.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _105.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_105.MsgChannelOpenConfirm>): _105.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _105.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _105.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_105.MsgChannelOpenConfirmResponse>): _105.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _105.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _105.MsgChannelCloseInit;
                    fromPartial(object: Partial<_105.MsgChannelCloseInit>): _105.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _105.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _105.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_105.MsgChannelCloseInitResponse>): _105.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _105.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _105.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_105.MsgChannelCloseConfirm>): _105.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _105.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _105.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_105.MsgChannelCloseConfirmResponse>): _105.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _105.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _105.MsgRecvPacket;
                    fromPartial(object: Partial<_105.MsgRecvPacket>): _105.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(message: _105.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _105.MsgRecvPacketResponse;
                    fromPartial(object: Partial<_105.MsgRecvPacketResponse>): _105.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _105.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _105.MsgTimeout;
                    fromPartial(object: Partial<_105.MsgTimeout>): _105.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(message: _105.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _105.MsgTimeoutResponse;
                    fromPartial(object: Partial<_105.MsgTimeoutResponse>): _105.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _105.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _105.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_105.MsgTimeoutOnClose>): _105.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(message: _105.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _105.MsgTimeoutOnCloseResponse;
                    fromPartial(object: Partial<_105.MsgTimeoutOnCloseResponse>): _105.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _105.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _105.MsgAcknowledgement;
                    fromPartial(object: Partial<_105.MsgAcknowledgement>): _105.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(message: _105.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _105.MsgAcknowledgementResponse;
                    fromPartial(object: Partial<_105.MsgAcknowledgementResponse>): _105.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _104.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryChannelRequest;
                    fromPartial(object: Partial<_104.QueryChannelRequest>): _104.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _104.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryChannelResponse;
                    fromPartial(object: Partial<_104.QueryChannelResponse>): _104.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _104.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryChannelsRequest;
                    fromPartial(object: Partial<_104.QueryChannelsRequest>): _104.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _104.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryChannelsResponse;
                    fromPartial(object: Partial<_104.QueryChannelsResponse>): _104.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _104.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryConnectionChannelsRequest;
                    fromPartial(object: Partial<_104.QueryConnectionChannelsRequest>): _104.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _104.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryConnectionChannelsResponse;
                    fromPartial(object: Partial<_104.QueryConnectionChannelsResponse>): _104.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _104.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryChannelClientStateRequest;
                    fromPartial(object: Partial<_104.QueryChannelClientStateRequest>): _104.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _104.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryChannelClientStateResponse;
                    fromPartial(object: Partial<_104.QueryChannelClientStateResponse>): _104.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _104.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryChannelConsensusStateRequest;
                    fromPartial(object: Partial<_104.QueryChannelConsensusStateRequest>): _104.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _104.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryChannelConsensusStateResponse;
                    fromPartial(object: Partial<_104.QueryChannelConsensusStateResponse>): _104.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _104.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryPacketCommitmentRequest;
                    fromPartial(object: Partial<_104.QueryPacketCommitmentRequest>): _104.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _104.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryPacketCommitmentResponse;
                    fromPartial(object: Partial<_104.QueryPacketCommitmentResponse>): _104.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _104.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryPacketCommitmentsRequest;
                    fromPartial(object: Partial<_104.QueryPacketCommitmentsRequest>): _104.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _104.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryPacketCommitmentsResponse;
                    fromPartial(object: Partial<_104.QueryPacketCommitmentsResponse>): _104.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _104.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryPacketReceiptRequest;
                    fromPartial(object: Partial<_104.QueryPacketReceiptRequest>): _104.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _104.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryPacketReceiptResponse;
                    fromPartial(object: Partial<_104.QueryPacketReceiptResponse>): _104.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _104.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryPacketAcknowledgementRequest;
                    fromPartial(object: Partial<_104.QueryPacketAcknowledgementRequest>): _104.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _104.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryPacketAcknowledgementResponse;
                    fromPartial(object: Partial<_104.QueryPacketAcknowledgementResponse>): _104.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _104.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: Partial<_104.QueryPacketAcknowledgementsRequest>): _104.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _104.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: Partial<_104.QueryPacketAcknowledgementsResponse>): _104.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _104.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryUnreceivedPacketsRequest;
                    fromPartial(object: Partial<_104.QueryUnreceivedPacketsRequest>): _104.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _104.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryUnreceivedPacketsResponse;
                    fromPartial(object: Partial<_104.QueryUnreceivedPacketsResponse>): _104.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _104.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryUnreceivedAcksRequest;
                    fromPartial(object: Partial<_104.QueryUnreceivedAcksRequest>): _104.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _104.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryUnreceivedAcksResponse;
                    fromPartial(object: Partial<_104.QueryUnreceivedAcksResponse>): _104.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _104.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryNextSequenceReceiveRequest;
                    fromPartial(object: Partial<_104.QueryNextSequenceReceiveRequest>): _104.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _104.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.QueryNextSequenceReceiveResponse;
                    fromPartial(object: Partial<_104.QueryNextSequenceReceiveResponse>): _104.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _103.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _103.GenesisState;
                    fromPartial(object: Partial<_103.GenesisState>): _103.GenesisState;
                };
                PacketSequence: {
                    encode(message: _103.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _103.PacketSequence;
                    fromPartial(object: Partial<_103.PacketSequence>): _103.PacketSequence;
                };
                stateFromJSON(object: any): _102.State;
                stateToJSON(object: _102.State): string;
                orderFromJSON(object: any): _102.Order;
                orderToJSON(object: _102.Order): string;
                State: typeof _102.State;
                StateSDKType: typeof _102.State;
                Order: typeof _102.Order;
                OrderSDKType: typeof _102.Order;
                Channel: {
                    encode(message: _102.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _102.Channel;
                    fromPartial(object: Partial<_102.Channel>): _102.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _102.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _102.IdentifiedChannel;
                    fromPartial(object: Partial<_102.IdentifiedChannel>): _102.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _102.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _102.Counterparty;
                    fromPartial(object: Partial<_102.Counterparty>): _102.Counterparty;
                };
                Packet: {
                    encode(message: _102.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _102.Packet;
                    fromPartial(object: Partial<_102.Packet>): _102.Packet;
                };
                PacketState: {
                    encode(message: _102.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _102.PacketState;
                    fromPartial(object: Partial<_102.PacketState>): _102.PacketState;
                };
                PacketId: {
                    encode(message: _102.PacketId, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _102.PacketId;
                    fromPartial(object: Partial<_102.PacketId>): _102.PacketId;
                };
                Acknowledgement: {
                    encode(message: _102.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _102.Acknowledgement;
                    fromPartial(object: Partial<_102.Acknowledgement>): _102.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _197.MsgClientImpl;
                QueryClientImpl: typeof _193.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _108.QueryClientStateRequest): Promise<_108.QueryClientStateResponse>;
                    clientStates(request?: _108.QueryClientStatesRequest): Promise<_108.QueryClientStatesResponse>;
                    consensusState(request: _108.QueryConsensusStateRequest): Promise<_108.QueryConsensusStateResponse>;
                    consensusStates(request: _108.QueryConsensusStatesRequest): Promise<_108.QueryConsensusStatesResponse>;
                    consensusStateHeights(request: _108.QueryConsensusStateHeightsRequest): Promise<_108.QueryConsensusStateHeightsResponse>;
                    clientStatus(request: _108.QueryClientStatusRequest): Promise<_108.QueryClientStatusResponse>;
                    clientParams(request?: _108.QueryClientParamsRequest): Promise<_108.QueryClientParamsResponse>;
                    upgradedClientState(request?: _108.QueryUpgradedClientStateRequest): Promise<_108.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _108.QueryUpgradedConsensusStateRequest): Promise<_108.QueryUpgradedConsensusStateResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _109.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _109.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _109.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _109.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _109.MsgCreateClient): {
                            typeUrl: string;
                            value: _109.MsgCreateClient;
                        };
                        updateClient(value: _109.MsgUpdateClient): {
                            typeUrl: string;
                            value: _109.MsgUpdateClient;
                        };
                        upgradeClient(value: _109.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _109.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _109.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _109.MsgSubmitMisbehaviour;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _109.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _109.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _109.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _109.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _109.MsgCreateClient): {
                            typeUrl: string;
                            value: _109.MsgCreateClient;
                        };
                        updateClient(value: _109.MsgUpdateClient): {
                            typeUrl: string;
                            value: _109.MsgUpdateClient;
                        };
                        upgradeClient(value: _109.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _109.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _109.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _109.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: ({ clientState, consensusState, signer }: _109.MsgCreateClient) => {
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
                        }) => _109.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ clientId, header, signer }: _109.MsgUpdateClient) => {
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
                        }) => _109.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer }: _109.MsgUpgradeClient) => {
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
                        }) => _109.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ clientId, misbehaviour, signer }: _109.MsgSubmitMisbehaviour) => {
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
                        }) => _109.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _109.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _109.MsgCreateClient;
                    fromPartial(object: Partial<_109.MsgCreateClient>): _109.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _109.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _109.MsgCreateClientResponse;
                    fromPartial(_: Partial<_109.MsgCreateClientResponse>): _109.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _109.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _109.MsgUpdateClient;
                    fromPartial(object: Partial<_109.MsgUpdateClient>): _109.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _109.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _109.MsgUpdateClientResponse;
                    fromPartial(_: Partial<_109.MsgUpdateClientResponse>): _109.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _109.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _109.MsgUpgradeClient;
                    fromPartial(object: Partial<_109.MsgUpgradeClient>): _109.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _109.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _109.MsgUpgradeClientResponse;
                    fromPartial(_: Partial<_109.MsgUpgradeClientResponse>): _109.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _109.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _109.MsgSubmitMisbehaviour;
                    fromPartial(object: Partial<_109.MsgSubmitMisbehaviour>): _109.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _109.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _109.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: Partial<_109.MsgSubmitMisbehaviourResponse>): _109.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _108.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryClientStateRequest;
                    fromPartial(object: Partial<_108.QueryClientStateRequest>): _108.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _108.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryClientStateResponse;
                    fromPartial(object: Partial<_108.QueryClientStateResponse>): _108.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _108.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryClientStatesRequest;
                    fromPartial(object: Partial<_108.QueryClientStatesRequest>): _108.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _108.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryClientStatesResponse;
                    fromPartial(object: Partial<_108.QueryClientStatesResponse>): _108.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _108.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_108.QueryConsensusStateRequest>): _108.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _108.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_108.QueryConsensusStateResponse>): _108.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _108.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_108.QueryConsensusStatesRequest>): _108.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _108.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_108.QueryConsensusStatesResponse>): _108.QueryConsensusStatesResponse;
                };
                QueryConsensusStateHeightsRequest: {
                    encode(message: _108.QueryConsensusStateHeightsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryConsensusStateHeightsRequest;
                    fromPartial(object: Partial<_108.QueryConsensusStateHeightsRequest>): _108.QueryConsensusStateHeightsRequest;
                };
                QueryConsensusStateHeightsResponse: {
                    encode(message: _108.QueryConsensusStateHeightsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryConsensusStateHeightsResponse;
                    fromPartial(object: Partial<_108.QueryConsensusStateHeightsResponse>): _108.QueryConsensusStateHeightsResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _108.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryClientStatusRequest;
                    fromPartial(object: Partial<_108.QueryClientStatusRequest>): _108.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _108.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryClientStatusResponse;
                    fromPartial(object: Partial<_108.QueryClientStatusResponse>): _108.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _108.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _108.QueryClientParamsRequest;
                    fromPartial(_: Partial<_108.QueryClientParamsRequest>): _108.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _108.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryClientParamsResponse;
                    fromPartial(object: Partial<_108.QueryClientParamsResponse>): _108.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _108.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _108.QueryUpgradedClientStateRequest;
                    fromPartial(_: Partial<_108.QueryUpgradedClientStateRequest>): _108.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _108.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryUpgradedClientStateResponse;
                    fromPartial(object: Partial<_108.QueryUpgradedClientStateResponse>): _108.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _108.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _108.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: Partial<_108.QueryUpgradedConsensusStateRequest>): _108.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _108.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: Partial<_108.QueryUpgradedConsensusStateResponse>): _108.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _107.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _107.GenesisState;
                    fromPartial(object: Partial<_107.GenesisState>): _107.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _107.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _107.GenesisMetadata;
                    fromPartial(object: Partial<_107.GenesisMetadata>): _107.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _107.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _107.IdentifiedGenesisMetadata;
                    fromPartial(object: Partial<_107.IdentifiedGenesisMetadata>): _107.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _106.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _106.IdentifiedClientState;
                    fromPartial(object: Partial<_106.IdentifiedClientState>): _106.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _106.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _106.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_106.ConsensusStateWithHeight>): _106.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _106.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _106.ClientConsensusStates;
                    fromPartial(object: Partial<_106.ClientConsensusStates>): _106.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _106.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _106.ClientUpdateProposal;
                    fromPartial(object: Partial<_106.ClientUpdateProposal>): _106.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _106.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _106.UpgradeProposal;
                    fromPartial(object: Partial<_106.UpgradeProposal>): _106.UpgradeProposal;
                };
                Height: {
                    encode(message: _106.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _106.Height;
                    fromPartial(object: Partial<_106.Height>): _106.Height;
                };
                Params: {
                    encode(message: _106.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _106.Params;
                    fromPartial(object: Partial<_106.Params>): _106.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _110.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _110.MerkleRoot;
                    fromPartial(object: Partial<_110.MerkleRoot>): _110.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _110.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _110.MerklePrefix;
                    fromPartial(object: Partial<_110.MerklePrefix>): _110.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _110.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _110.MerklePath;
                    fromPartial(object: Partial<_110.MerklePath>): _110.MerklePath;
                };
                MerkleProof: {
                    encode(message: _110.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _110.MerkleProof;
                    fromPartial(object: Partial<_110.MerkleProof>): _110.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _198.MsgClientImpl;
                QueryClientImpl: typeof _194.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _113.QueryConnectionRequest): Promise<_113.QueryConnectionResponse>;
                    connections(request?: _113.QueryConnectionsRequest): Promise<_113.QueryConnectionsResponse>;
                    clientConnections(request: _113.QueryClientConnectionsRequest): Promise<_113.QueryClientConnectionsResponse>;
                    connectionClientState(request: _113.QueryConnectionClientStateRequest): Promise<_113.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _113.QueryConnectionConsensusStateRequest): Promise<_113.QueryConnectionConsensusStateResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _114.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _114.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _114.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _114.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _114.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _114.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _114.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _114.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _114.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _114.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _114.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _114.MsgConnectionOpenConfirm;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _114.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _114.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _114.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _114.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _114.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _114.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _114.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _114.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _114.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _114.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _114.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _114.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: ({ clientId, counterparty, version, delayPeriod, signer }: _114.MsgConnectionOpenInit) => {
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
                        }) => _114.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer }: _114.MsgConnectionOpenTry) => {
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
                        }) => _114.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer }: _114.MsgConnectionOpenAck) => {
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
                        }) => _114.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connectionId, proofAck, proofHeight, signer }: _114.MsgConnectionOpenConfirm) => {
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
                        }) => _114.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _114.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _114.MsgConnectionOpenInit;
                    fromPartial(object: Partial<_114.MsgConnectionOpenInit>): _114.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _114.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _114.MsgConnectionOpenInitResponse;
                    fromPartial(_: Partial<_114.MsgConnectionOpenInitResponse>): _114.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _114.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _114.MsgConnectionOpenTry;
                    fromPartial(object: Partial<_114.MsgConnectionOpenTry>): _114.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _114.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _114.MsgConnectionOpenTryResponse;
                    fromPartial(_: Partial<_114.MsgConnectionOpenTryResponse>): _114.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _114.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _114.MsgConnectionOpenAck;
                    fromPartial(object: Partial<_114.MsgConnectionOpenAck>): _114.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _114.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _114.MsgConnectionOpenAckResponse;
                    fromPartial(_: Partial<_114.MsgConnectionOpenAckResponse>): _114.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _114.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _114.MsgConnectionOpenConfirm;
                    fromPartial(object: Partial<_114.MsgConnectionOpenConfirm>): _114.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _114.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _114.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: Partial<_114.MsgConnectionOpenConfirmResponse>): _114.MsgConnectionOpenConfirmResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _113.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _113.QueryConnectionRequest;
                    fromPartial(object: Partial<_113.QueryConnectionRequest>): _113.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _113.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _113.QueryConnectionResponse;
                    fromPartial(object: Partial<_113.QueryConnectionResponse>): _113.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _113.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _113.QueryConnectionsRequest;
                    fromPartial(object: Partial<_113.QueryConnectionsRequest>): _113.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _113.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _113.QueryConnectionsResponse;
                    fromPartial(object: Partial<_113.QueryConnectionsResponse>): _113.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _113.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _113.QueryClientConnectionsRequest;
                    fromPartial(object: Partial<_113.QueryClientConnectionsRequest>): _113.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _113.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _113.QueryClientConnectionsResponse;
                    fromPartial(object: Partial<_113.QueryClientConnectionsResponse>): _113.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _113.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _113.QueryConnectionClientStateRequest;
                    fromPartial(object: Partial<_113.QueryConnectionClientStateRequest>): _113.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _113.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _113.QueryConnectionClientStateResponse;
                    fromPartial(object: Partial<_113.QueryConnectionClientStateResponse>): _113.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _113.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _113.QueryConnectionConsensusStateRequest;
                    fromPartial(object: Partial<_113.QueryConnectionConsensusStateRequest>): _113.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _113.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _113.QueryConnectionConsensusStateResponse;
                    fromPartial(object: Partial<_113.QueryConnectionConsensusStateResponse>): _113.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _112.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _112.GenesisState;
                    fromPartial(object: Partial<_112.GenesisState>): _112.GenesisState;
                };
                stateFromJSON(object: any): _111.State;
                stateToJSON(object: _111.State): string;
                State: typeof _111.State;
                StateSDKType: typeof _111.State;
                ConnectionEnd: {
                    encode(message: _111.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.ConnectionEnd;
                    fromPartial(object: Partial<_111.ConnectionEnd>): _111.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _111.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.IdentifiedConnection;
                    fromPartial(object: Partial<_111.IdentifiedConnection>): _111.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _111.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.Counterparty;
                    fromPartial(object: Partial<_111.Counterparty>): _111.Counterparty;
                };
                ClientPaths: {
                    encode(message: _111.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.ClientPaths;
                    fromPartial(object: Partial<_111.ClientPaths>): _111.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _111.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.ConnectionPaths;
                    fromPartial(object: Partial<_111.ConnectionPaths>): _111.ConnectionPaths;
                };
                Version: {
                    encode(message: _111.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.Version;
                    fromPartial(object: Partial<_111.Version>): _111.Version;
                };
                Params: {
                    encode(message: _111.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.Params;
                    fromPartial(object: Partial<_111.Params>): _111.Params;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _115.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.GenesisState;
                    fromPartial(object: Partial<_115.GenesisState>): _115.GenesisState;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _116.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _116.ClientState;
                    fromPartial(object: Partial<_116.ClientState>): _116.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _117.DataType;
                dataTypeToJSON(object: _117.DataType): string;
                DataType: typeof _117.DataType;
                DataTypeSDKType: typeof _117.DataType;
                ClientState: {
                    encode(message: _117.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.ClientState;
                    fromPartial(object: Partial<_117.ClientState>): _117.ClientState;
                };
                ConsensusState: {
                    encode(message: _117.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.ConsensusState;
                    fromPartial(object: Partial<_117.ConsensusState>): _117.ConsensusState;
                };
                Header: {
                    encode(message: _117.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.Header;
                    fromPartial(object: Partial<_117.Header>): _117.Header;
                };
                Misbehaviour: {
                    encode(message: _117.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.Misbehaviour;
                    fromPartial(object: Partial<_117.Misbehaviour>): _117.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _117.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.SignatureAndData;
                    fromPartial(object: Partial<_117.SignatureAndData>): _117.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _117.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.TimestampedSignatureData;
                    fromPartial(object: Partial<_117.TimestampedSignatureData>): _117.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _117.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.SignBytes;
                    fromPartial(object: Partial<_117.SignBytes>): _117.SignBytes;
                };
                HeaderData: {
                    encode(message: _117.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.HeaderData;
                    fromPartial(object: Partial<_117.HeaderData>): _117.HeaderData;
                };
                ClientStateData: {
                    encode(message: _117.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.ClientStateData;
                    fromPartial(object: Partial<_117.ClientStateData>): _117.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _117.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.ConsensusStateData;
                    fromPartial(object: Partial<_117.ConsensusStateData>): _117.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _117.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.ConnectionStateData;
                    fromPartial(object: Partial<_117.ConnectionStateData>): _117.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _117.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.ChannelStateData;
                    fromPartial(object: Partial<_117.ChannelStateData>): _117.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _117.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.PacketCommitmentData;
                    fromPartial(object: Partial<_117.PacketCommitmentData>): _117.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _117.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.PacketAcknowledgementData;
                    fromPartial(object: Partial<_117.PacketAcknowledgementData>): _117.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _117.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_117.PacketReceiptAbsenceData>): _117.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _117.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.NextSequenceRecvData;
                    fromPartial(object: Partial<_117.NextSequenceRecvData>): _117.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _118.DataType;
                dataTypeToJSON(object: _118.DataType): string;
                DataType: typeof _118.DataType;
                DataTypeSDKType: typeof _118.DataType;
                ClientState: {
                    encode(message: _118.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _118.ClientState;
                    fromPartial(object: Partial<_118.ClientState>): _118.ClientState;
                };
                ConsensusState: {
                    encode(message: _118.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _118.ConsensusState;
                    fromPartial(object: Partial<_118.ConsensusState>): _118.ConsensusState;
                };
                Header: {
                    encode(message: _118.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _118.Header;
                    fromPartial(object: Partial<_118.Header>): _118.Header;
                };
                Misbehaviour: {
                    encode(message: _118.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _118.Misbehaviour;
                    fromPartial(object: Partial<_118.Misbehaviour>): _118.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _118.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _118.SignatureAndData;
                    fromPartial(object: Partial<_118.SignatureAndData>): _118.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _118.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _118.TimestampedSignatureData;
                    fromPartial(object: Partial<_118.TimestampedSignatureData>): _118.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _118.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _118.SignBytes;
                    fromPartial(object: Partial<_118.SignBytes>): _118.SignBytes;
                };
                HeaderData: {
                    encode(message: _118.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _118.HeaderData;
                    fromPartial(object: Partial<_118.HeaderData>): _118.HeaderData;
                };
                ClientStateData: {
                    encode(message: _118.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _118.ClientStateData;
                    fromPartial(object: Partial<_118.ClientStateData>): _118.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _118.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _118.ConsensusStateData;
                    fromPartial(object: Partial<_118.ConsensusStateData>): _118.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _118.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _118.ConnectionStateData;
                    fromPartial(object: Partial<_118.ConnectionStateData>): _118.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _118.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _118.ChannelStateData;
                    fromPartial(object: Partial<_118.ChannelStateData>): _118.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _118.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _118.PacketCommitmentData;
                    fromPartial(object: Partial<_118.PacketCommitmentData>): _118.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _118.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _118.PacketAcknowledgementData;
                    fromPartial(object: Partial<_118.PacketAcknowledgementData>): _118.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _118.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _118.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_118.PacketReceiptAbsenceData>): _118.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _118.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _118.NextSequenceRecvData;
                    fromPartial(object: Partial<_118.NextSequenceRecvData>): _118.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _119.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _119.ClientState;
                    fromPartial(object: Partial<_119.ClientState>): _119.ClientState;
                };
                ConsensusState: {
                    encode(message: _119.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _119.ConsensusState;
                    fromPartial(object: Partial<_119.ConsensusState>): _119.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _119.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _119.Misbehaviour;
                    fromPartial(object: Partial<_119.Misbehaviour>): _119.Misbehaviour;
                };
                Header: {
                    encode(message: _119.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _119.Header;
                    fromPartial(object: Partial<_119.Header>): _119.Header;
                };
                Fraction: {
                    encode(message: _119.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _119.Fraction;
                    fromPartial(object: Partial<_119.Fraction>): _119.Fraction;
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
                    transfer: {
                        v1: _195.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _196.MsgClientImpl;
                    };
                    client: {
                        v1: _197.MsgClientImpl;
                    };
                    connection: {
                        v1: _198.MsgClientImpl;
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
                    interchain_accounts: {
                        controller: {
                            v1: {
                                interchainAccount(request: _90.QueryInterchainAccountRequest): Promise<_90.QueryInterchainAccountResponse>;
                                params(request?: _90.QueryParamsRequest): Promise<_90.QueryParamsResponse>;
                            };
                        };
                        host: {
                            v1: {
                                params(request?: _92.QueryParamsRequest): Promise<_92.QueryParamsResponse>;
                            };
                        };
                    };
                    transfer: {
                        v1: {
                            denomTrace(request: _98.QueryDenomTraceRequest): Promise<_98.QueryDenomTraceResponse>;
                            denomTraces(request?: _98.QueryDenomTracesRequest): Promise<_98.QueryDenomTracesResponse>;
                            params(request?: _98.QueryParamsRequest): Promise<_98.QueryParamsResponse>;
                            denomHash(request: _98.QueryDenomHashRequest): Promise<_98.QueryDenomHashResponse>;
                            escrowAddress(request: _98.QueryEscrowAddressRequest): Promise<_98.QueryEscrowAddressResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _104.QueryChannelRequest): Promise<_104.QueryChannelResponse>;
                            channels(request?: _104.QueryChannelsRequest): Promise<_104.QueryChannelsResponse>;
                            connectionChannels(request: _104.QueryConnectionChannelsRequest): Promise<_104.QueryConnectionChannelsResponse>;
                            channelClientState(request: _104.QueryChannelClientStateRequest): Promise<_104.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _104.QueryChannelConsensusStateRequest): Promise<_104.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _104.QueryPacketCommitmentRequest): Promise<_104.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _104.QueryPacketCommitmentsRequest): Promise<_104.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _104.QueryPacketReceiptRequest): Promise<_104.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _104.QueryPacketAcknowledgementRequest): Promise<_104.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _104.QueryPacketAcknowledgementsRequest): Promise<_104.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _104.QueryUnreceivedPacketsRequest): Promise<_104.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _104.QueryUnreceivedAcksRequest): Promise<_104.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _104.QueryNextSequenceReceiveRequest): Promise<_104.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _108.QueryClientStateRequest): Promise<_108.QueryClientStateResponse>;
                            clientStates(request?: _108.QueryClientStatesRequest): Promise<_108.QueryClientStatesResponse>;
                            consensusState(request: _108.QueryConsensusStateRequest): Promise<_108.QueryConsensusStateResponse>;
                            consensusStates(request: _108.QueryConsensusStatesRequest): Promise<_108.QueryConsensusStatesResponse>;
                            consensusStateHeights(request: _108.QueryConsensusStateHeightsRequest): Promise<_108.QueryConsensusStateHeightsResponse>;
                            clientStatus(request: _108.QueryClientStatusRequest): Promise<_108.QueryClientStatusResponse>;
                            clientParams(request?: _108.QueryClientParamsRequest): Promise<_108.QueryClientParamsResponse>;
                            upgradedClientState(request?: _108.QueryUpgradedClientStateRequest): Promise<_108.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _108.QueryUpgradedConsensusStateRequest): Promise<_108.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _113.QueryConnectionRequest): Promise<_113.QueryConnectionResponse>;
                            connections(request?: _113.QueryConnectionsRequest): Promise<_113.QueryConnectionsResponse>;
                            clientConnections(request: _113.QueryClientConnectionsRequest): Promise<_113.QueryClientConnectionsResponse>;
                            connectionClientState(request: _113.QueryConnectionClientStateRequest): Promise<_113.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _113.QueryConnectionConsensusStateRequest): Promise<_113.QueryConnectionConsensusStateResponse>;
                        };
                    };
                };
            };
        }>;
    };
}
