import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseCapability() {
    return {
        index: BigInt(0)
    };
}
export const Capability = {
    typeUrl: "/cosmos.capability.v1beta1.Capability",
    encode(message, writer = BinaryWriter.create()) {
        if (message.index !== BigInt(0)) {
            writer.uint32(8).uint64(message.index);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            index: isSet(object.index) ? BigInt(object.index.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseCapability();
        message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseCapability();
        if (object.index !== undefined && object.index !== null) {
            message.index = BigInt(object.index);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.index = message.index ? message.index.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Capability.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Capability",
            value: Capability.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Capability.decode(message.value);
    },
    toProto(message) {
        return Capability.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.capability.v1beta1.Capability",
            value: Capability.encode(message).finish()
        };
    }
};
function createBaseOwner() {
    return {
        module: "",
        name: ""
    };
}
export const Owner = {
    typeUrl: "/cosmos.capability.v1beta1.Owner",
    encode(message, writer = BinaryWriter.create()) {
        if (message.module !== "") {
            writer.uint32(10).string(message.module);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            module: isSet(object.module) ? String(object.module) : "",
            name: isSet(object.name) ? String(object.name) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseOwner();
        message.module = object.module ?? "";
        message.name = object.name ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseOwner();
        if (object.module !== undefined && object.module !== null) {
            message.module = object.module;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.module = message.module;
        obj.name = message.name;
        return obj;
    },
    fromAminoMsg(object) {
        return Owner.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Owner",
            value: Owner.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Owner.decode(message.value);
    },
    toProto(message) {
        return Owner.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.capability.v1beta1.Owner",
            value: Owner.encode(message).finish()
        };
    }
};
function createBaseCapabilityOwners() {
    return {
        owners: []
    };
}
export const CapabilityOwners = {
    typeUrl: "/cosmos.capability.v1beta1.CapabilityOwners",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.owners) {
            Owner.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            owners: Array.isArray(object?.owners) ? object.owners.map((e) => Owner.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseCapabilityOwners();
        message.owners = object.owners?.map(e => Owner.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseCapabilityOwners();
        message.owners = object.owners?.map(e => Owner.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.owners) {
            obj.owners = message.owners.map(e => e ? Owner.toAmino(e) : undefined);
        }
        else {
            obj.owners = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return CapabilityOwners.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CapabilityOwners",
            value: CapabilityOwners.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return CapabilityOwners.decode(message.value);
    },
    toProto(message) {
        return CapabilityOwners.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.capability.v1beta1.CapabilityOwners",
            value: CapabilityOwners.encode(message).finish()
        };
    }
};
//# sourceMappingURL=capability.js.map