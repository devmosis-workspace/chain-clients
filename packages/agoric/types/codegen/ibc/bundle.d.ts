import * as _116 from "./core/channel/v1/channel";
import * as _117 from "./core/client/v1/client";
export declare namespace ibc {
    namespace core {
        namespace channel {
            const v1: {
                stateFromJSON(object: any): _116.State;
                stateToJSON(object: _116.State): string;
                orderFromJSON(object: any): _116.Order;
                orderToJSON(object: _116.Order): string;
                State: typeof _116.State;
                StateSDKType: typeof _116.State;
                StateAmino: typeof _116.State;
                Order: typeof _116.Order;
                OrderSDKType: typeof _116.Order;
                OrderAmino: typeof _116.Order;
                Channel: {
                    typeUrl: string;
                    encode(message: _116.Channel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _116.Channel;
                    fromPartial(object: Partial<_116.Channel>): _116.Channel;
                    fromAmino(object: _116.ChannelAmino): _116.Channel;
                    toAmino(message: _116.Channel): _116.ChannelAmino;
                    fromAminoMsg(object: _116.ChannelAminoMsg): _116.Channel;
                    toAminoMsg(message: _116.Channel): _116.ChannelAminoMsg;
                    fromProtoMsg(message: _116.ChannelProtoMsg): _116.Channel;
                    toProto(message: _116.Channel): Uint8Array;
                    toProtoMsg(message: _116.Channel): _116.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    encode(message: _116.IdentifiedChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _116.IdentifiedChannel;
                    fromPartial(object: Partial<_116.IdentifiedChannel>): _116.IdentifiedChannel;
                    fromAmino(object: _116.IdentifiedChannelAmino): _116.IdentifiedChannel;
                    toAmino(message: _116.IdentifiedChannel): _116.IdentifiedChannelAmino;
                    fromAminoMsg(object: _116.IdentifiedChannelAminoMsg): _116.IdentifiedChannel;
                    toAminoMsg(message: _116.IdentifiedChannel): _116.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _116.IdentifiedChannelProtoMsg): _116.IdentifiedChannel;
                    toProto(message: _116.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _116.IdentifiedChannel): _116.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _116.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _116.Counterparty;
                    fromPartial(object: Partial<_116.Counterparty>): _116.Counterparty;
                    fromAmino(object: _116.CounterpartyAmino): _116.Counterparty;
                    toAmino(message: _116.Counterparty): _116.CounterpartyAmino;
                    fromAminoMsg(object: _116.CounterpartyAminoMsg): _116.Counterparty;
                    toAminoMsg(message: _116.Counterparty): _116.CounterpartyAminoMsg;
                    fromProtoMsg(message: _116.CounterpartyProtoMsg): _116.Counterparty;
                    toProto(message: _116.Counterparty): Uint8Array;
                    toProtoMsg(message: _116.Counterparty): _116.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    encode(message: _116.Packet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _116.Packet;
                    fromPartial(object: Partial<_116.Packet>): _116.Packet;
                    fromAmino(object: _116.PacketAmino): _116.Packet;
                    toAmino(message: _116.Packet): _116.PacketAmino;
                    fromAminoMsg(object: _116.PacketAminoMsg): _116.Packet;
                    toAminoMsg(message: _116.Packet): _116.PacketAminoMsg;
                    fromProtoMsg(message: _116.PacketProtoMsg): _116.Packet;
                    toProto(message: _116.Packet): Uint8Array;
                    toProtoMsg(message: _116.Packet): _116.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    encode(message: _116.PacketState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _116.PacketState;
                    fromPartial(object: Partial<_116.PacketState>): _116.PacketState;
                    fromAmino(object: _116.PacketStateAmino): _116.PacketState;
                    toAmino(message: _116.PacketState): _116.PacketStateAmino;
                    fromAminoMsg(object: _116.PacketStateAminoMsg): _116.PacketState;
                    toAminoMsg(message: _116.PacketState): _116.PacketStateAminoMsg;
                    fromProtoMsg(message: _116.PacketStateProtoMsg): _116.PacketState;
                    toProto(message: _116.PacketState): Uint8Array;
                    toProtoMsg(message: _116.PacketState): _116.PacketStateProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    encode(message: _116.Acknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _116.Acknowledgement;
                    fromPartial(object: Partial<_116.Acknowledgement>): _116.Acknowledgement;
                    fromAmino(object: _116.AcknowledgementAmino): _116.Acknowledgement;
                    toAmino(message: _116.Acknowledgement): _116.AcknowledgementAmino;
                    fromAminoMsg(object: _116.AcknowledgementAminoMsg): _116.Acknowledgement;
                    toAminoMsg(message: _116.Acknowledgement): _116.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _116.AcknowledgementProtoMsg): _116.Acknowledgement;
                    toProto(message: _116.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _116.Acknowledgement): _116.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                IdentifiedClientState: {
                    typeUrl: string;
                    encode(message: _117.IdentifiedClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.IdentifiedClientState;
                    fromPartial(object: Partial<_117.IdentifiedClientState>): _117.IdentifiedClientState;
                    fromAmino(object: _117.IdentifiedClientStateAmino): _117.IdentifiedClientState;
                    toAmino(message: _117.IdentifiedClientState): _117.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _117.IdentifiedClientStateAminoMsg): _117.IdentifiedClientState;
                    toAminoMsg(message: _117.IdentifiedClientState): _117.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _117.IdentifiedClientStateProtoMsg): _117.IdentifiedClientState;
                    toProto(message: _117.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _117.IdentifiedClientState): _117.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    encode(message: _117.ConsensusStateWithHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_117.ConsensusStateWithHeight>): _117.ConsensusStateWithHeight;
                    fromAmino(object: _117.ConsensusStateWithHeightAmino): _117.ConsensusStateWithHeight;
                    toAmino(message: _117.ConsensusStateWithHeight): _117.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _117.ConsensusStateWithHeightAminoMsg): _117.ConsensusStateWithHeight;
                    toAminoMsg(message: _117.ConsensusStateWithHeight): _117.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _117.ConsensusStateWithHeightProtoMsg): _117.ConsensusStateWithHeight;
                    toProto(message: _117.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _117.ConsensusStateWithHeight): _117.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    encode(message: _117.ClientConsensusStates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.ClientConsensusStates;
                    fromPartial(object: Partial<_117.ClientConsensusStates>): _117.ClientConsensusStates;
                    fromAmino(object: _117.ClientConsensusStatesAmino): _117.ClientConsensusStates;
                    toAmino(message: _117.ClientConsensusStates): _117.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _117.ClientConsensusStatesAminoMsg): _117.ClientConsensusStates;
                    toAminoMsg(message: _117.ClientConsensusStates): _117.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _117.ClientConsensusStatesProtoMsg): _117.ClientConsensusStates;
                    toProto(message: _117.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _117.ClientConsensusStates): _117.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    encode(message: _117.ClientUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.ClientUpdateProposal;
                    fromPartial(object: Partial<_117.ClientUpdateProposal>): _117.ClientUpdateProposal;
                    fromAmino(object: _117.ClientUpdateProposalAmino): _117.ClientUpdateProposal;
                    toAmino(message: _117.ClientUpdateProposal): _117.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _117.ClientUpdateProposalAminoMsg): _117.ClientUpdateProposal;
                    toAminoMsg(message: _117.ClientUpdateProposal): _117.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _117.ClientUpdateProposalProtoMsg): _117.ClientUpdateProposal;
                    toProto(message: _117.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _117.ClientUpdateProposal): _117.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    encode(message: _117.UpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.UpgradeProposal;
                    fromPartial(object: Partial<_117.UpgradeProposal>): _117.UpgradeProposal;
                    fromAmino(object: _117.UpgradeProposalAmino): _117.UpgradeProposal;
                    toAmino(message: _117.UpgradeProposal): _117.UpgradeProposalAmino;
                    fromAminoMsg(object: _117.UpgradeProposalAminoMsg): _117.UpgradeProposal;
                    toAminoMsg(message: _117.UpgradeProposal): _117.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _117.UpgradeProposalProtoMsg): _117.UpgradeProposal;
                    toProto(message: _117.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _117.UpgradeProposal): _117.UpgradeProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    encode(message: _117.Height, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.Height;
                    fromPartial(object: Partial<_117.Height>): _117.Height;
                    fromAmino(object: _117.HeightAmino): _117.Height;
                    toAmino(message: _117.Height): _117.HeightAmino;
                    fromAminoMsg(object: _117.HeightAminoMsg): _117.Height;
                    toAminoMsg(message: _117.Height): _117.HeightAminoMsg;
                    fromProtoMsg(message: _117.HeightProtoMsg): _117.Height;
                    toProto(message: _117.Height): Uint8Array;
                    toProtoMsg(message: _117.Height): _117.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _117.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.Params;
                    fromPartial(object: Partial<_117.Params>): _117.Params;
                    fromAmino(object: _117.ParamsAmino): _117.Params;
                    toAmino(message: _117.Params): _117.ParamsAmino;
                    fromAminoMsg(object: _117.ParamsAminoMsg): _117.Params;
                    toAminoMsg(message: _117.Params): _117.ParamsAminoMsg;
                    fromProtoMsg(message: _117.ParamsProtoMsg): _117.Params;
                    toProto(message: _117.Params): Uint8Array;
                    toProtoMsg(message: _117.Params): _117.ParamsProtoMsg;
                };
            };
        }
    }
}
