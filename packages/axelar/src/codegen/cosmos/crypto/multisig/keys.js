import { Any } from "../../../google/protobuf/any";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseLegacyAminoPubKey() {
    return {
        threshold: 0,
        publicKeys: []
    };
}
export const LegacyAminoPubKey = {
    typeUrl: "/cosmos.crypto.multisig.LegacyAminoPubKey",
    encode(message, writer = BinaryWriter.create()) {
        if (message.threshold !== 0) {
            writer.uint32(8).uint32(message.threshold);
        }
        for (const v of message.publicKeys) {
            Any.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            threshold: isSet(object.threshold) ? Number(object.threshold) : 0,
            publicKeys: Array.isArray(object?.publicKeys) ? object.publicKeys.map((e) => Any.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseLegacyAminoPubKey();
        message.threshold = object.threshold ?? 0;
        message.publicKeys = object.publicKeys?.map(e => Any.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseLegacyAminoPubKey();
        if (object.threshold !== undefined && object.threshold !== null) {
            message.threshold = object.threshold;
        }
        message.publicKeys = object.public_keys?.map(e => Any.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.threshold = message.threshold;
        if (message.publicKeys) {
            obj.public_keys = message.publicKeys.map(e => e ? Any.toAmino(e) : undefined);
        }
        else {
            obj.public_keys = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return LegacyAminoPubKey.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/LegacyAminoPubKey",
            value: LegacyAminoPubKey.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return LegacyAminoPubKey.decode(message.value);
    },
    toProto(message) {
        return LegacyAminoPubKey.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.multisig.LegacyAminoPubKey",
            value: LegacyAminoPubKey.encode(message).finish()
        };
    }
};
//# sourceMappingURL=keys.js.map