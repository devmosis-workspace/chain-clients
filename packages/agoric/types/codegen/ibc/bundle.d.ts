import * as _130 from "./core/channel/v1/channel";
import * as _131 from "./core/client/v1/client";
export declare namespace ibc {
    namespace core {
        namespace channel {
            const v1: {
                stateFromJSON(object: any): _130.State;
                stateToJSON(object: _130.State): string;
                orderFromJSON(object: any): _130.Order;
                orderToJSON(object: _130.Order): string;
                State: typeof _130.State;
                StateSDKType: typeof _130.State;
                StateAmino: typeof _130.State;
                Order: typeof _130.Order;
                OrderSDKType: typeof _130.Order;
                OrderAmino: typeof _130.Order;
                Channel: {
                    typeUrl: string;
                    encode(message: _130.Channel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.Channel;
                    fromPartial(object: Partial<_130.Channel>): _130.Channel;
                    fromAmino(object: _130.ChannelAmino): _130.Channel;
                    toAmino(message: _130.Channel): _130.ChannelAmino;
                    fromAminoMsg(object: _130.ChannelAminoMsg): _130.Channel;
                    toAminoMsg(message: _130.Channel): _130.ChannelAminoMsg;
                    fromProtoMsg(message: _130.ChannelProtoMsg): _130.Channel;
                    toProto(message: _130.Channel): Uint8Array;
                    toProtoMsg(message: _130.Channel): _130.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    encode(message: _130.IdentifiedChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.IdentifiedChannel;
                    fromPartial(object: Partial<_130.IdentifiedChannel>): _130.IdentifiedChannel;
                    fromAmino(object: _130.IdentifiedChannelAmino): _130.IdentifiedChannel;
                    toAmino(message: _130.IdentifiedChannel): _130.IdentifiedChannelAmino;
                    fromAminoMsg(object: _130.IdentifiedChannelAminoMsg): _130.IdentifiedChannel;
                    toAminoMsg(message: _130.IdentifiedChannel): _130.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _130.IdentifiedChannelProtoMsg): _130.IdentifiedChannel;
                    toProto(message: _130.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _130.IdentifiedChannel): _130.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _130.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.Counterparty;
                    fromPartial(object: Partial<_130.Counterparty>): _130.Counterparty;
                    fromAmino(object: _130.CounterpartyAmino): _130.Counterparty;
                    toAmino(message: _130.Counterparty): _130.CounterpartyAmino;
                    fromAminoMsg(object: _130.CounterpartyAminoMsg): _130.Counterparty;
                    toAminoMsg(message: _130.Counterparty): _130.CounterpartyAminoMsg;
                    fromProtoMsg(message: _130.CounterpartyProtoMsg): _130.Counterparty;
                    toProto(message: _130.Counterparty): Uint8Array;
                    toProtoMsg(message: _130.Counterparty): _130.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    encode(message: _130.Packet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.Packet;
                    fromPartial(object: Partial<_130.Packet>): _130.Packet;
                    fromAmino(object: _130.PacketAmino): _130.Packet;
                    toAmino(message: _130.Packet): _130.PacketAmino;
                    fromAminoMsg(object: _130.PacketAminoMsg): _130.Packet;
                    toAminoMsg(message: _130.Packet): _130.PacketAminoMsg;
                    fromProtoMsg(message: _130.PacketProtoMsg): _130.Packet;
                    toProto(message: _130.Packet): Uint8Array;
                    toProtoMsg(message: _130.Packet): _130.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    encode(message: _130.PacketState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.PacketState;
                    fromPartial(object: Partial<_130.PacketState>): _130.PacketState;
                    fromAmino(object: _130.PacketStateAmino): _130.PacketState;
                    toAmino(message: _130.PacketState): _130.PacketStateAmino;
                    fromAminoMsg(object: _130.PacketStateAminoMsg): _130.PacketState;
                    toAminoMsg(message: _130.PacketState): _130.PacketStateAminoMsg;
                    fromProtoMsg(message: _130.PacketStateProtoMsg): _130.PacketState;
                    toProto(message: _130.PacketState): Uint8Array;
                    toProtoMsg(message: _130.PacketState): _130.PacketStateProtoMsg;
                };
                PacketId: {
                    typeUrl: string;
                    encode(message: _130.PacketId, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.PacketId;
                    fromPartial(object: Partial<_130.PacketId>): _130.PacketId;
                    fromAmino(object: _130.PacketIdAmino): _130.PacketId;
                    toAmino(message: _130.PacketId): _130.PacketIdAmino;
                    fromAminoMsg(object: _130.PacketIdAminoMsg): _130.PacketId;
                    toAminoMsg(message: _130.PacketId): _130.PacketIdAminoMsg;
                    fromProtoMsg(message: _130.PacketIdProtoMsg): _130.PacketId;
                    toProto(message: _130.PacketId): Uint8Array;
                    toProtoMsg(message: _130.PacketId): _130.PacketIdProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    encode(message: _130.Acknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.Acknowledgement;
                    fromPartial(object: Partial<_130.Acknowledgement>): _130.Acknowledgement;
                    fromAmino(object: _130.AcknowledgementAmino): _130.Acknowledgement;
                    toAmino(message: _130.Acknowledgement): _130.AcknowledgementAmino;
                    fromAminoMsg(object: _130.AcknowledgementAminoMsg): _130.Acknowledgement;
                    toAminoMsg(message: _130.Acknowledgement): _130.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _130.AcknowledgementProtoMsg): _130.Acknowledgement;
                    toProto(message: _130.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _130.Acknowledgement): _130.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                IdentifiedClientState: {
                    typeUrl: string;
                    encode(message: _131.IdentifiedClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.IdentifiedClientState;
                    fromPartial(object: Partial<_131.IdentifiedClientState>): _131.IdentifiedClientState;
                    fromAmino(object: _131.IdentifiedClientStateAmino): _131.IdentifiedClientState;
                    toAmino(message: _131.IdentifiedClientState): _131.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _131.IdentifiedClientStateAminoMsg): _131.IdentifiedClientState;
                    toAminoMsg(message: _131.IdentifiedClientState): _131.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _131.IdentifiedClientStateProtoMsg): _131.IdentifiedClientState;
                    toProto(message: _131.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _131.IdentifiedClientState): _131.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    encode(message: _131.ConsensusStateWithHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_131.ConsensusStateWithHeight>): _131.ConsensusStateWithHeight;
                    fromAmino(object: _131.ConsensusStateWithHeightAmino): _131.ConsensusStateWithHeight;
                    toAmino(message: _131.ConsensusStateWithHeight): _131.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _131.ConsensusStateWithHeightAminoMsg): _131.ConsensusStateWithHeight;
                    toAminoMsg(message: _131.ConsensusStateWithHeight): _131.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _131.ConsensusStateWithHeightProtoMsg): _131.ConsensusStateWithHeight;
                    toProto(message: _131.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _131.ConsensusStateWithHeight): _131.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    encode(message: _131.ClientConsensusStates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.ClientConsensusStates;
                    fromPartial(object: Partial<_131.ClientConsensusStates>): _131.ClientConsensusStates;
                    fromAmino(object: _131.ClientConsensusStatesAmino): _131.ClientConsensusStates;
                    toAmino(message: _131.ClientConsensusStates): _131.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _131.ClientConsensusStatesAminoMsg): _131.ClientConsensusStates;
                    toAminoMsg(message: _131.ClientConsensusStates): _131.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _131.ClientConsensusStatesProtoMsg): _131.ClientConsensusStates;
                    toProto(message: _131.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _131.ClientConsensusStates): _131.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    encode(message: _131.ClientUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.ClientUpdateProposal;
                    fromPartial(object: Partial<_131.ClientUpdateProposal>): _131.ClientUpdateProposal;
                    fromAmino(object: _131.ClientUpdateProposalAmino): _131.ClientUpdateProposal;
                    toAmino(message: _131.ClientUpdateProposal): _131.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _131.ClientUpdateProposalAminoMsg): _131.ClientUpdateProposal;
                    toAminoMsg(message: _131.ClientUpdateProposal): _131.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _131.ClientUpdateProposalProtoMsg): _131.ClientUpdateProposal;
                    toProto(message: _131.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _131.ClientUpdateProposal): _131.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    encode(message: _131.UpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.UpgradeProposal;
                    fromPartial(object: Partial<_131.UpgradeProposal>): _131.UpgradeProposal;
                    fromAmino(object: _131.UpgradeProposalAmino): _131.UpgradeProposal;
                    toAmino(message: _131.UpgradeProposal): _131.UpgradeProposalAmino;
                    fromAminoMsg(object: _131.UpgradeProposalAminoMsg): _131.UpgradeProposal;
                    toAminoMsg(message: _131.UpgradeProposal): _131.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _131.UpgradeProposalProtoMsg): _131.UpgradeProposal;
                    toProto(message: _131.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _131.UpgradeProposal): _131.UpgradeProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    encode(message: _131.Height, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.Height;
                    fromPartial(object: Partial<_131.Height>): _131.Height;
                    fromAmino(object: _131.HeightAmino): _131.Height;
                    toAmino(message: _131.Height): _131.HeightAmino;
                    fromAminoMsg(object: _131.HeightAminoMsg): _131.Height;
                    toAminoMsg(message: _131.Height): _131.HeightAminoMsg;
                    fromProtoMsg(message: _131.HeightProtoMsg): _131.Height;
                    toProto(message: _131.Height): Uint8Array;
                    toProtoMsg(message: _131.Height): _131.HeightProtoMsg;
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
    }
}
