import { GenesisState as GenesisState1 } from "../../client/v1/genesis";
import { GenesisState as GenesisState2 } from "../../connection/v1/genesis";
import { GenesisState as GenesisState3 } from "../../channel/v1/genesis";
import { BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
function createBaseGenesisState() {
    return {
        clientGenesis: GenesisState1.fromPartial({}),
        connectionGenesis: GenesisState2.fromPartial({}),
        channelGenesis: GenesisState3.fromPartial({})
    };
}
export const GenesisState = {
    typeUrl: "/ibc.core.types.v1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.clientGenesis !== undefined) {
            GenesisState1.encode(message.clientGenesis, writer.uint32(10).fork()).ldelim();
        }
        if (message.connectionGenesis !== undefined) {
            GenesisState2.encode(message.connectionGenesis, writer.uint32(18).fork()).ldelim();
        }
        if (message.channelGenesis !== undefined) {
            GenesisState3.encode(message.channelGenesis, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            clientGenesis: isSet(object.clientGenesis) ? GenesisState1.fromJSON(object.clientGenesis) : undefined,
            connectionGenesis: isSet(object.connectionGenesis) ? GenesisState2.fromJSON(object.connectionGenesis) : undefined,
            channelGenesis: isSet(object.channelGenesis) ? GenesisState3.fromJSON(object.channelGenesis) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.clientGenesis = object.clientGenesis !== undefined && object.clientGenesis !== null ? GenesisState1.fromPartial(object.clientGenesis) : undefined;
        message.connectionGenesis = object.connectionGenesis !== undefined && object.connectionGenesis !== null ? GenesisState2.fromPartial(object.connectionGenesis) : undefined;
        message.channelGenesis = object.channelGenesis !== undefined && object.channelGenesis !== null ? GenesisState3.fromPartial(object.channelGenesis) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.client_genesis !== undefined && object.client_genesis !== null) {
            message.clientGenesis = GenesisState1.fromAmino(object.client_genesis);
        }
        if (object.connection_genesis !== undefined && object.connection_genesis !== null) {
            message.connectionGenesis = GenesisState2.fromAmino(object.connection_genesis);
        }
        if (object.channel_genesis !== undefined && object.channel_genesis !== null) {
            message.channelGenesis = GenesisState3.fromAmino(object.channel_genesis);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_genesis = message.clientGenesis ? GenesisState1.toAmino(message.clientGenesis) : undefined;
        obj.connection_genesis = message.connectionGenesis ? GenesisState2.toAmino(message.connectionGenesis) : undefined;
        obj.channel_genesis = message.channelGenesis ? GenesisState3.toAmino(message.channelGenesis) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisState",
            value: GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.types.v1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map