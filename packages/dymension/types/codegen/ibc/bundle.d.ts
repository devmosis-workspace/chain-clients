import * as _142 from "./core/channel/v1/channel";
import * as _143 from "./core/client/v1/client";
export declare namespace ibc {
    namespace core {
        namespace channel {
            const v1: {
                stateFromJSON(object: any): _142.State;
                stateToJSON(object: _142.State): string;
                orderFromJSON(object: any): _142.Order;
                orderToJSON(object: _142.Order): string;
                State: typeof _142.State;
                StateSDKType: typeof _142.State;
                StateAmino: typeof _142.State;
                Order: typeof _142.Order;
                OrderSDKType: typeof _142.Order;
                OrderAmino: typeof _142.Order;
                Channel: {
                    typeUrl: string;
                    encode(message: _142.Channel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _142.Channel;
                    fromPartial(object: Partial<_142.Channel>): _142.Channel;
                    fromAmino(object: _142.ChannelAmino): _142.Channel;
                    toAmino(message: _142.Channel): _142.ChannelAmino;
                    fromAminoMsg(object: _142.ChannelAminoMsg): _142.Channel;
                    toAminoMsg(message: _142.Channel): _142.ChannelAminoMsg;
                    fromProtoMsg(message: _142.ChannelProtoMsg): _142.Channel;
                    toProto(message: _142.Channel): Uint8Array;
                    toProtoMsg(message: _142.Channel): _142.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    encode(message: _142.IdentifiedChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _142.IdentifiedChannel;
                    fromPartial(object: Partial<_142.IdentifiedChannel>): _142.IdentifiedChannel;
                    fromAmino(object: _142.IdentifiedChannelAmino): _142.IdentifiedChannel;
                    toAmino(message: _142.IdentifiedChannel): _142.IdentifiedChannelAmino;
                    fromAminoMsg(object: _142.IdentifiedChannelAminoMsg): _142.IdentifiedChannel;
                    toAminoMsg(message: _142.IdentifiedChannel): _142.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _142.IdentifiedChannelProtoMsg): _142.IdentifiedChannel;
                    toProto(message: _142.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _142.IdentifiedChannel): _142.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _142.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _142.Counterparty;
                    fromPartial(object: Partial<_142.Counterparty>): _142.Counterparty;
                    fromAmino(object: _142.CounterpartyAmino): _142.Counterparty;
                    toAmino(message: _142.Counterparty): _142.CounterpartyAmino;
                    fromAminoMsg(object: _142.CounterpartyAminoMsg): _142.Counterparty;
                    toAminoMsg(message: _142.Counterparty): _142.CounterpartyAminoMsg;
                    fromProtoMsg(message: _142.CounterpartyProtoMsg): _142.Counterparty;
                    toProto(message: _142.Counterparty): Uint8Array;
                    toProtoMsg(message: _142.Counterparty): _142.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    encode(message: _142.Packet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _142.Packet;
                    fromPartial(object: Partial<_142.Packet>): _142.Packet;
                    fromAmino(object: _142.PacketAmino): _142.Packet;
                    toAmino(message: _142.Packet): _142.PacketAmino;
                    fromAminoMsg(object: _142.PacketAminoMsg): _142.Packet;
                    toAminoMsg(message: _142.Packet): _142.PacketAminoMsg;
                    fromProtoMsg(message: _142.PacketProtoMsg): _142.Packet;
                    toProto(message: _142.Packet): Uint8Array;
                    toProtoMsg(message: _142.Packet): _142.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    encode(message: _142.PacketState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _142.PacketState;
                    fromPartial(object: Partial<_142.PacketState>): _142.PacketState;
                    fromAmino(object: _142.PacketStateAmino): _142.PacketState;
                    toAmino(message: _142.PacketState): _142.PacketStateAmino;
                    fromAminoMsg(object: _142.PacketStateAminoMsg): _142.PacketState;
                    toAminoMsg(message: _142.PacketState): _142.PacketStateAminoMsg;
                    fromProtoMsg(message: _142.PacketStateProtoMsg): _142.PacketState;
                    toProto(message: _142.PacketState): Uint8Array;
                    toProtoMsg(message: _142.PacketState): _142.PacketStateProtoMsg;
                };
                PacketId: {
                    typeUrl: string;
                    encode(message: _142.PacketId, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _142.PacketId;
                    fromPartial(object: Partial<_142.PacketId>): _142.PacketId;
                    fromAmino(object: _142.PacketIdAmino): _142.PacketId;
                    toAmino(message: _142.PacketId): _142.PacketIdAmino;
                    fromAminoMsg(object: _142.PacketIdAminoMsg): _142.PacketId;
                    toAminoMsg(message: _142.PacketId): _142.PacketIdAminoMsg;
                    fromProtoMsg(message: _142.PacketIdProtoMsg): _142.PacketId;
                    toProto(message: _142.PacketId): Uint8Array;
                    toProtoMsg(message: _142.PacketId): _142.PacketIdProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    encode(message: _142.Acknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _142.Acknowledgement;
                    fromPartial(object: Partial<_142.Acknowledgement>): _142.Acknowledgement;
                    fromAmino(object: _142.AcknowledgementAmino): _142.Acknowledgement;
                    toAmino(message: _142.Acknowledgement): _142.AcknowledgementAmino;
                    fromAminoMsg(object: _142.AcknowledgementAminoMsg): _142.Acknowledgement;
                    toAminoMsg(message: _142.Acknowledgement): _142.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _142.AcknowledgementProtoMsg): _142.Acknowledgement;
                    toProto(message: _142.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _142.Acknowledgement): _142.AcknowledgementProtoMsg;
                };
                Timeout: {
                    typeUrl: string;
                    encode(message: _142.Timeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _142.Timeout;
                    fromPartial(object: Partial<_142.Timeout>): _142.Timeout;
                    fromAmino(object: _142.TimeoutAmino): _142.Timeout;
                    toAmino(message: _142.Timeout): _142.TimeoutAmino;
                    fromAminoMsg(object: _142.TimeoutAminoMsg): _142.Timeout;
                    toAminoMsg(message: _142.Timeout): _142.TimeoutAminoMsg;
                    fromProtoMsg(message: _142.TimeoutProtoMsg): _142.Timeout;
                    toProto(message: _142.Timeout): Uint8Array;
                    toProtoMsg(message: _142.Timeout): _142.TimeoutProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _142.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _142.Params;
                    fromPartial(object: Partial<_142.Params>): _142.Params;
                    fromAmino(object: _142.ParamsAmino): _142.Params;
                    toAmino(message: _142.Params): _142.ParamsAmino;
                    fromAminoMsg(object: _142.ParamsAminoMsg): _142.Params;
                    toAminoMsg(message: _142.Params): _142.ParamsAminoMsg;
                    fromProtoMsg(message: _142.ParamsProtoMsg): _142.Params;
                    toProto(message: _142.Params): Uint8Array;
                    toProtoMsg(message: _142.Params): _142.ParamsProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                IdentifiedClientState: {
                    typeUrl: string;
                    encode(message: _143.IdentifiedClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _143.IdentifiedClientState;
                    fromPartial(object: Partial<_143.IdentifiedClientState>): _143.IdentifiedClientState;
                    fromAmino(object: _143.IdentifiedClientStateAmino): _143.IdentifiedClientState;
                    toAmino(message: _143.IdentifiedClientState): _143.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _143.IdentifiedClientStateAminoMsg): _143.IdentifiedClientState;
                    toAminoMsg(message: _143.IdentifiedClientState): _143.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _143.IdentifiedClientStateProtoMsg): _143.IdentifiedClientState;
                    toProto(message: _143.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _143.IdentifiedClientState): _143.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    encode(message: _143.ConsensusStateWithHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _143.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_143.ConsensusStateWithHeight>): _143.ConsensusStateWithHeight;
                    fromAmino(object: _143.ConsensusStateWithHeightAmino): _143.ConsensusStateWithHeight;
                    toAmino(message: _143.ConsensusStateWithHeight): _143.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _143.ConsensusStateWithHeightAminoMsg): _143.ConsensusStateWithHeight;
                    toAminoMsg(message: _143.ConsensusStateWithHeight): _143.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _143.ConsensusStateWithHeightProtoMsg): _143.ConsensusStateWithHeight;
                    toProto(message: _143.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _143.ConsensusStateWithHeight): _143.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    encode(message: _143.ClientConsensusStates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _143.ClientConsensusStates;
                    fromPartial(object: Partial<_143.ClientConsensusStates>): _143.ClientConsensusStates;
                    fromAmino(object: _143.ClientConsensusStatesAmino): _143.ClientConsensusStates;
                    toAmino(message: _143.ClientConsensusStates): _143.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _143.ClientConsensusStatesAminoMsg): _143.ClientConsensusStates;
                    toAminoMsg(message: _143.ClientConsensusStates): _143.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _143.ClientConsensusStatesProtoMsg): _143.ClientConsensusStates;
                    toProto(message: _143.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _143.ClientConsensusStates): _143.ClientConsensusStatesProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    encode(message: _143.Height, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _143.Height;
                    fromPartial(object: Partial<_143.Height>): _143.Height;
                    fromAmino(object: _143.HeightAmino): _143.Height;
                    toAmino(message: _143.Height): _143.HeightAmino;
                    fromAminoMsg(object: _143.HeightAminoMsg): _143.Height;
                    toAminoMsg(message: _143.Height): _143.HeightAminoMsg;
                    fromProtoMsg(message: _143.HeightProtoMsg): _143.Height;
                    toProto(message: _143.Height): Uint8Array;
                    toProtoMsg(message: _143.Height): _143.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _143.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _143.Params;
                    fromPartial(object: Partial<_143.Params>): _143.Params;
                    fromAmino(object: _143.ParamsAmino): _143.Params;
                    toAmino(message: _143.Params): _143.ParamsAmino;
                    fromAminoMsg(object: _143.ParamsAminoMsg): _143.Params;
                    toAminoMsg(message: _143.Params): _143.ParamsAminoMsg;
                    fromProtoMsg(message: _143.ParamsProtoMsg): _143.Params;
                    toProto(message: _143.Params): Uint8Array;
                    toProtoMsg(message: _143.Params): _143.ParamsProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    encode(message: _143.ClientUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _143.ClientUpdateProposal;
                    fromPartial(object: Partial<_143.ClientUpdateProposal>): _143.ClientUpdateProposal;
                    fromAmino(object: _143.ClientUpdateProposalAmino): _143.ClientUpdateProposal;
                    toAmino(message: _143.ClientUpdateProposal): _143.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _143.ClientUpdateProposalAminoMsg): _143.ClientUpdateProposal;
                    toAminoMsg(message: _143.ClientUpdateProposal): _143.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _143.ClientUpdateProposalProtoMsg): _143.ClientUpdateProposal;
                    toProto(message: _143.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _143.ClientUpdateProposal): _143.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    encode(message: _143.UpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _143.UpgradeProposal;
                    fromPartial(object: Partial<_143.UpgradeProposal>): _143.UpgradeProposal;
                    fromAmino(object: _143.UpgradeProposalAmino): _143.UpgradeProposal;
                    toAmino(message: _143.UpgradeProposal): _143.UpgradeProposalAmino;
                    fromAminoMsg(object: _143.UpgradeProposalAminoMsg): _143.UpgradeProposal;
                    toAminoMsg(message: _143.UpgradeProposal): _143.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _143.UpgradeProposalProtoMsg): _143.UpgradeProposal;
                    toProto(message: _143.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _143.UpgradeProposal): _143.UpgradeProposalProtoMsg;
                };
            };
        }
    }
}
