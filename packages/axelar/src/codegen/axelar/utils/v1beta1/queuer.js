import { BinaryWriter } from "../../../binary";
import { isSet, isObject, bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseQueueState_ItemsEntry() {
    return {
        key: "",
        value: undefined
    };
}
export const QueueState_ItemsEntry = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            Item.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? Item.fromJSON(object.value) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseQueueState_ItemsEntry();
        message.key = object.key ?? "";
        message.value = object.value !== undefined && object.value !== null ? Item.fromPartial(object.value) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueueState_ItemsEntry();
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = Item.fromAmino(object.value);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value ? Item.toAmino(message.value) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueueState_ItemsEntry.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueueState_ItemsEntry.decode(message.value);
    },
    toProto(message) {
        return QueueState_ItemsEntry.encode(message).finish();
    }
};
function createBaseQueueState() {
    return {
        items: {}
    };
}
export const QueueState = {
    typeUrl: "/axelar.utils.v1beta1.QueueState",
    encode(message, writer = BinaryWriter.create()) {
        Object.entries(message.items).forEach(([key, value]) => {
            QueueState_ItemsEntry.encode({
                key: key,
                value
            }, writer.uint32(10).fork()).ldelim();
        });
        return writer;
    },
    fromJSON(object) {
        return {
            items: isObject(object.items) ? Object.entries(object.items).reduce((acc, [key, value]) => {
                acc[key] = Item.fromJSON(value);
                return acc;
            }, {}) : {}
        };
    },
    fromPartial(object) {
        const message = createBaseQueueState();
        message.items = Object.entries(object.items ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = Item.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueueState();
        message.items = Object.entries(object.items ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = Item.fromAmino(value);
            }
            return acc;
        }, {});
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.items = {};
        if (message.items) {
            Object.entries(message.items).forEach(([k, v]) => {
                obj.items[k] = Item.toAmino(v);
            });
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueueState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueueState.decode(message.value);
    },
    toProto(message) {
        return QueueState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.utils.v1beta1.QueueState",
            value: QueueState.encode(message).finish()
        };
    }
};
function createBaseQueueState_Item() {
    return {
        key: new Uint8Array(),
        value: new Uint8Array()
    };
}
export const QueueState_Item = {
    typeUrl: "/axelar.utils.v1beta1.Item",
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
        const message = createBaseQueueState_Item();
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueueState_Item();
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
        return QueueState_Item.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueueState_Item.decode(message.value);
    },
    toProto(message) {
        return QueueState_Item.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.utils.v1beta1.Item",
            value: QueueState_Item.encode(message).finish()
        };
    }
};
//# sourceMappingURL=queuer.js.map