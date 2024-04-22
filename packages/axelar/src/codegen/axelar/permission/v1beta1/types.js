import { roleFromJSON } from "../exported/v1beta1/types";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseGovAccount() {
    return {
        address: new Uint8Array(),
        role: 0
    };
}
export const GovAccount = {
    typeUrl: "/axelar.permission.v1beta1.GovAccount",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address.length !== 0) {
            writer.uint32(10).bytes(message.address);
        }
        if (message.role !== 0) {
            writer.uint32(16).int32(message.role);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
            role: isSet(object.role) ? roleFromJSON(object.role) : -1
        };
    },
    fromPartial(object) {
        const message = createBaseGovAccount();
        message.address = object.address ?? new Uint8Array();
        message.role = object.role ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGovAccount();
        if (object.address !== undefined && object.address !== null) {
            message.address = bytesFromBase64(object.address);
        }
        if (object.role !== undefined && object.role !== null) {
            message.role = roleFromJSON(object.role);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address ? base64FromBytes(message.address) : undefined;
        obj.role = message.role;
        return obj;
    },
    fromAminoMsg(object) {
        return GovAccount.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GovAccount.decode(message.value);
    },
    toProto(message) {
        return GovAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.permission.v1beta1.GovAccount",
            value: GovAccount.encode(message).finish()
        };
    }
};
//# sourceMappingURL=types.js.map