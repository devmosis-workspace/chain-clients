import { IdentifiedClientState, ClientConsensusStates, Params } from "./client";
import { BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
function createBaseGenesisState() {
    return {
        clients: [],
        clientsConsensus: [],
        clientsMetadata: [],
        params: Params.fromPartial({}),
        createLocalhost: false,
        nextClientSequence: BigInt(0)
    };
}
export const GenesisState = {
    typeUrl: "/ibc.core.client.v1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.clients) {
            IdentifiedClientState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.clientsConsensus) {
            ClientConsensusStates.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.clientsMetadata) {
            IdentifiedGenesisMetadata.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(34).fork()).ldelim();
        }
        if (message.createLocalhost === true) {
            writer.uint32(40).bool(message.createLocalhost);
        }
        if (message.nextClientSequence !== BigInt(0)) {
            writer.uint32(48).uint64(message.nextClientSequence);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            clients: Array.isArray(object?.clients) ? object.clients.map((e) => IdentifiedClientState.fromJSON(e)) : [],
            clientsConsensus: Array.isArray(object?.clientsConsensus) ? object.clientsConsensus.map((e) => ClientConsensusStates.fromJSON(e)) : [],
            clientsMetadata: Array.isArray(object?.clientsMetadata) ? object.clientsMetadata.map((e) => IdentifiedGenesisMetadata.fromJSON(e)) : [],
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            createLocalhost: isSet(object.createLocalhost) ? Boolean(object.createLocalhost) : false,
            nextClientSequence: isSet(object.nextClientSequence) ? BigInt(object.nextClientSequence.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.clients = object.clients?.map(e => IdentifiedClientState.fromPartial(e)) || [];
        message.clientsConsensus = object.clientsConsensus?.map(e => ClientConsensusStates.fromPartial(e)) || [];
        message.clientsMetadata = object.clientsMetadata?.map(e => IdentifiedGenesisMetadata.fromPartial(e)) || [];
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.createLocalhost = object.createLocalhost ?? false;
        message.nextClientSequence = object.nextClientSequence !== undefined && object.nextClientSequence !== null ? BigInt(object.nextClientSequence.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.clients = object.clients?.map(e => IdentifiedClientState.fromAmino(e)) || [];
        message.clientsConsensus = object.clients_consensus?.map(e => ClientConsensusStates.fromAmino(e)) || [];
        message.clientsMetadata = object.clients_metadata?.map(e => IdentifiedGenesisMetadata.fromAmino(e)) || [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        if (object.create_localhost !== undefined && object.create_localhost !== null) {
            message.createLocalhost = object.create_localhost;
        }
        if (object.next_client_sequence !== undefined && object.next_client_sequence !== null) {
            message.nextClientSequence = BigInt(object.next_client_sequence);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.clients) {
            obj.clients = message.clients.map(e => e ? IdentifiedClientState.toAmino(e) : undefined);
        }
        else {
            obj.clients = [];
        }
        if (message.clientsConsensus) {
            obj.clients_consensus = message.clientsConsensus.map(e => e ? ClientConsensusStates.toAmino(e) : undefined);
        }
        else {
            obj.clients_consensus = [];
        }
        if (message.clientsMetadata) {
            obj.clients_metadata = message.clientsMetadata.map(e => e ? IdentifiedGenesisMetadata.toAmino(e) : undefined);
        }
        else {
            obj.clients_metadata = [];
        }
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        obj.create_localhost = message.createLocalhost;
        obj.next_client_sequence = message.nextClientSequence ? message.nextClientSequence.toString() : undefined;
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
            typeUrl: "/ibc.core.client.v1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
function createBaseGenesisMetadata() {
    return {
        key: new Uint8Array(),
        value: new Uint8Array()
    };
}
export const GenesisMetadata = {
    typeUrl: "/ibc.core.client.v1.GenesisMetadata",
    encode(message, writer = BinaryWriter.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
            value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseGenesisMetadata();
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisMetadata();
        if (object.key !== undefined && object.key !== null) {
            message.key = bytesFromBase64(object.key);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = bytesFromBase64(object.value);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key ? base64FromBytes(message.key) : undefined;
        obj.value = message.value ? base64FromBytes(message.value) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisMetadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisMetadata",
            value: GenesisMetadata.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenesisMetadata.decode(message.value);
    },
    toProto(message) {
        return GenesisMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.GenesisMetadata",
            value: GenesisMetadata.encode(message).finish()
        };
    }
};
function createBaseIdentifiedGenesisMetadata() {
    return {
        clientId: "",
        clientMetadata: []
    };
}
export const IdentifiedGenesisMetadata = {
    typeUrl: "/ibc.core.client.v1.IdentifiedGenesisMetadata",
    encode(message, writer = BinaryWriter.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        for (const v of message.clientMetadata) {
            GenesisMetadata.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            clientMetadata: Array.isArray(object?.clientMetadata) ? object.clientMetadata.map((e) => GenesisMetadata.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseIdentifiedGenesisMetadata();
        message.clientId = object.clientId ?? "";
        message.clientMetadata = object.clientMetadata?.map(e => GenesisMetadata.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseIdentifiedGenesisMetadata();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.clientId = object.client_id;
        }
        message.clientMetadata = object.client_metadata?.map(e => GenesisMetadata.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.clientId;
        if (message.clientMetadata) {
            obj.client_metadata = message.clientMetadata.map(e => e ? GenesisMetadata.toAmino(e) : undefined);
        }
        else {
            obj.client_metadata = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return IdentifiedGenesisMetadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/IdentifiedGenesisMetadata",
            value: IdentifiedGenesisMetadata.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return IdentifiedGenesisMetadata.decode(message.value);
    },
    toProto(message) {
        return IdentifiedGenesisMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.IdentifiedGenesisMetadata",
            value: IdentifiedGenesisMetadata.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map