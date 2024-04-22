import { BinaryWriter } from "../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../helpers";
function createBasePublicKey() {
    return {
        ed25519: undefined,
        secp256k1: undefined
    };
}
export const PublicKey = {
    typeUrl: "/tendermint.crypto.PublicKey",
    encode(message, writer = BinaryWriter.create()) {
        if (message.ed25519 !== undefined) {
            writer.uint32(10).bytes(message.ed25519);
        }
        if (message.secp256k1 !== undefined) {
            writer.uint32(18).bytes(message.secp256k1);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            ed25519: isSet(object.ed25519) ? bytesFromBase64(object.ed25519) : undefined,
            secp256k1: isSet(object.secp256k1) ? bytesFromBase64(object.secp256k1) : undefined
        };
    },
    fromPartial(object) {
        const message = createBasePublicKey();
        message.ed25519 = object.ed25519 ?? undefined;
        message.secp256k1 = object.secp256k1 ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBasePublicKey();
        if (object.ed25519 !== undefined && object.ed25519 !== null) {
            message.ed25519 = bytesFromBase64(object.ed25519);
        }
        if (object.secp256k1 !== undefined && object.secp256k1 !== null) {
            message.secp256k1 = bytesFromBase64(object.secp256k1);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.ed25519 = message.ed25519 ? base64FromBytes(message.ed25519) : undefined;
        obj.secp256k1 = message.secp256k1 ? base64FromBytes(message.secp256k1) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PublicKey.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PublicKey.decode(message.value);
    },
    toProto(message) {
        return PublicKey.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.crypto.PublicKey",
            value: PublicKey.encode(message).finish()
        };
    }
};
//# sourceMappingURL=keys.js.map