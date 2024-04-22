import { Timestamp } from "../../../google/protobuf/timestamp";
import { Any } from "../../../google/protobuf/any";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
function createBasePlan() {
    return {
        name: "",
        time: Timestamp.fromPartial({}),
        height: BigInt(0),
        info: "",
        upgradedClientState: undefined
    };
}
export const Plan = {
    typeUrl: "/cosmos.upgrade.v1beta1.Plan",
    encode(message, writer = BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.time !== undefined) {
            Timestamp.encode(message.time, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(24).int64(message.height);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        if (message.upgradedClientState !== undefined) {
            Any.encode(message.upgradedClientState, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            info: isSet(object.info) ? String(object.info) : "",
            upgradedClientState: isSet(object.upgradedClientState) ? Any.fromJSON(object.upgradedClientState) : undefined
        };
    },
    fromPartial(object) {
        const message = createBasePlan();
        message.name = object.name ?? "";
        message.time = object.time !== undefined && object.time !== null ? Timestamp.fromPartial(object.time) : undefined;
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.info = object.info ?? "";
        message.upgradedClientState = object.upgradedClientState !== undefined && object.upgradedClientState !== null ? Any.fromPartial(object.upgradedClientState) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBasePlan();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = Timestamp.fromAmino(object.time);
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = object.info;
        }
        if (object.upgraded_client_state !== undefined && object.upgraded_client_state !== null) {
            message.upgradedClientState = Any.fromAmino(object.upgraded_client_state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.time = message.time ? Timestamp.toAmino(message.time) : undefined;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.info = message.info;
        obj.upgraded_client_state = message.upgradedClientState ? Any.toAmino(message.upgradedClientState) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Plan.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Plan",
            value: Plan.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Plan.decode(message.value);
    },
    toProto(message) {
        return Plan.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.Plan",
            value: Plan.encode(message).finish()
        };
    }
};
function createBaseSoftwareUpgradeProposal() {
    return {
        title: "",
        description: "",
        plan: Plan.fromPartial({})
    };
}
export const SoftwareUpgradeProposal = {
    typeUrl: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.plan !== undefined) {
            Plan.encode(message.plan, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            plan: isSet(object.plan) ? Plan.fromJSON(object.plan) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseSoftwareUpgradeProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.plan = object.plan !== undefined && object.plan !== null ? Plan.fromPartial(object.plan) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSoftwareUpgradeProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.plan !== undefined && object.plan !== null) {
            message.plan = Plan.fromAmino(object.plan);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.plan = message.plan ? Plan.toAmino(message.plan) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SoftwareUpgradeProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SoftwareUpgradeProposal",
            value: SoftwareUpgradeProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SoftwareUpgradeProposal.decode(message.value);
    },
    toProto(message) {
        return SoftwareUpgradeProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
            value: SoftwareUpgradeProposal.encode(message).finish()
        };
    }
};
function createBaseCancelSoftwareUpgradeProposal() {
    return {
        title: "",
        description: ""
    };
}
export const CancelSoftwareUpgradeProposal = {
    typeUrl: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseCancelSoftwareUpgradeProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseCancelSoftwareUpgradeProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        return obj;
    },
    fromAminoMsg(object) {
        return CancelSoftwareUpgradeProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CancelSoftwareUpgradeProposal",
            value: CancelSoftwareUpgradeProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return CancelSoftwareUpgradeProposal.decode(message.value);
    },
    toProto(message) {
        return CancelSoftwareUpgradeProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal",
            value: CancelSoftwareUpgradeProposal.encode(message).finish()
        };
    }
};
function createBaseModuleVersion() {
    return {
        name: "",
        version: BigInt(0)
    };
}
export const ModuleVersion = {
    typeUrl: "/cosmos.upgrade.v1beta1.ModuleVersion",
    encode(message, writer = BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.version !== BigInt(0)) {
            writer.uint32(16).uint64(message.version);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            version: isSet(object.version) ? BigInt(object.version.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseModuleVersion();
        message.name = object.name ?? "";
        message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseModuleVersion();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = BigInt(object.version);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.version = message.version ? message.version.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ModuleVersion.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ModuleVersion",
            value: ModuleVersion.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ModuleVersion.decode(message.value);
    },
    toProto(message) {
        return ModuleVersion.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.ModuleVersion",
            value: ModuleVersion.encode(message).finish()
        };
    }
};
//# sourceMappingURL=upgrade.js.map