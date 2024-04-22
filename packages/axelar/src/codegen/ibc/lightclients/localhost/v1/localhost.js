import { Height } from "../../../core/client/v1/client";
import { BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
function createBaseClientState() {
    return {
        chainId: "",
        height: Height.fromPartial({})
    };
}
export const ClientState = {
    typeUrl: "/ibc.lightclients.localhost.v1.ClientState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        if (message.height !== undefined) {
            Height.encode(message.height, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
            height: isSet(object.height) ? Height.fromJSON(object.height) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseClientState();
        message.chainId = object.chainId ?? "";
        message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseClientState();
        if (object.chain_id !== undefined && object.chain_id !== null) {
            message.chainId = object.chain_id;
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = Height.fromAmino(object.height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chainId;
        obj.height = message.height ? Height.toAmino(message.height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return ClientState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ClientState",
            value: ClientState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ClientState.decode(message.value);
    },
    toProto(message) {
        return ClientState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.localhost.v1.ClientState",
            value: ClientState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=localhost.js.map