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
                Order: typeof _116.Order;
                OrderSDKType: typeof _116.Order;
                Channel: {
                    encode(message: _116.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _116.Channel;
                    fromPartial(object: Partial<_116.Channel>): _116.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _116.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _116.IdentifiedChannel;
                    fromPartial(object: Partial<_116.IdentifiedChannel>): _116.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _116.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _116.Counterparty;
                    fromPartial(object: Partial<_116.Counterparty>): _116.Counterparty;
                };
                Packet: {
                    encode(message: _116.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _116.Packet;
                    fromPartial(object: Partial<_116.Packet>): _116.Packet;
                };
                PacketState: {
                    encode(message: _116.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _116.PacketState;
                    fromPartial(object: Partial<_116.PacketState>): _116.PacketState;
                };
                Acknowledgement: {
                    encode(message: _116.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _116.Acknowledgement;
                    fromPartial(object: Partial<_116.Acknowledgement>): _116.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                IdentifiedClientState: {
                    encode(message: _117.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.IdentifiedClientState;
                    fromPartial(object: Partial<_117.IdentifiedClientState>): _117.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _117.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_117.ConsensusStateWithHeight>): _117.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _117.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.ClientConsensusStates;
                    fromPartial(object: Partial<_117.ClientConsensusStates>): _117.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _117.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.ClientUpdateProposal;
                    fromPartial(object: Partial<_117.ClientUpdateProposal>): _117.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _117.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.UpgradeProposal;
                    fromPartial(object: Partial<_117.UpgradeProposal>): _117.UpgradeProposal;
                };
                Height: {
                    encode(message: _117.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.Height;
                    fromPartial(object: Partial<_117.Height>): _117.Height;
                };
                Params: {
                    encode(message: _117.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.Params;
                    fromPartial(object: Partial<_117.Params>): _117.Params;
                };
            };
        }
    }
}
