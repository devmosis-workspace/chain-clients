import { CapabilityOwners } from "./capability";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseGenesisOwners() {
    return {
        index: BigInt(0),
        indexOwners: CapabilityOwners.fromPartial({})
    };
}
export const GenesisOwners = {
    typeUrl: "/cosmos.capability.v1beta1.GenesisOwners",
    encode(message, writer = BinaryWriter.create()) {
        if (message.index !== BigInt(0)) {
            writer.uint32(8).uint64(message.index);
        }
        if (message.indexOwners !== undefined) {
            CapabilityOwners.encode(message.indexOwners, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            index: isSet(object.index) ? BigInt(object.index.toString()) : BigInt(0),
            indexOwners: isSet(object.indexOwners) ? CapabilityOwners.fromJSON(object.indexOwners) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseGenesisOwners();
        message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
        message.indexOwners = object.indexOwners !== undefined && object.indexOwners !== null ? CapabilityOwners.fromPartial(object.indexOwners) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisOwners();
        if (object.index !== undefined && object.index !== null) {
            message.index = BigInt(object.index);
        }
        if (object.index_owners !== undefined && object.index_owners !== null) {
            message.indexOwners = CapabilityOwners.fromAmino(object.index_owners);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.index = message.index ? message.index.toString() : undefined;
        obj.index_owners = message.indexOwners ? CapabilityOwners.toAmino(message.indexOwners) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisOwners.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisOwners",
            value: GenesisOwners.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenesisOwners.decode(message.value);
    },
    toProto(message) {
        return GenesisOwners.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.capability.v1beta1.GenesisOwners",
            value: GenesisOwners.encode(message).finish()
        };
    }
};
function createBaseGenesisState() {
    return {
        index: BigInt(0),
        owners: []
    };
}
export const GenesisState = {
    typeUrl: "/cosmos.capability.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.index !== BigInt(0)) {
            writer.uint32(8).uint64(message.index);
        }
        for (const v of message.owners) {
            GenesisOwners.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            index: isSet(object.index) ? BigInt(object.index.toString()) : BigInt(0),
            owners: Array.isArray(object?.owners) ? object.owners.map((e) => GenesisOwners.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
        message.owners = object.owners?.map(e => GenesisOwners.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.index !== undefined && object.index !== null) {
            message.index = BigInt(object.index);
        }
        message.owners = object.owners?.map(e => GenesisOwners.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.index = message.index ? message.index.toString() : undefined;
        if (message.owners) {
            obj.owners = message.owners.map(e => e ? GenesisOwners.toAmino(e) : undefined);
        }
        else {
            obj.owners = [];
        }
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
            typeUrl: "/cosmos.capability.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map