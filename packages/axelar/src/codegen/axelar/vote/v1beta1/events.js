import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseVoted() {
    return {
        module: "",
        action: "",
        poll: "",
        voter: "",
        state: ""
    };
}
export const Voted = {
    typeUrl: "/axelar.vote.v1beta1.Voted",
    encode(message, writer = BinaryWriter.create()) {
        if (message.module !== "") {
            writer.uint32(10).string(message.module);
        }
        if (message.action !== "") {
            writer.uint32(18).string(message.action);
        }
        if (message.poll !== "") {
            writer.uint32(26).string(message.poll);
        }
        if (message.voter !== "") {
            writer.uint32(34).string(message.voter);
        }
        if (message.state !== "") {
            writer.uint32(42).string(message.state);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            module: isSet(object.module) ? String(object.module) : "",
            action: isSet(object.action) ? String(object.action) : "",
            poll: isSet(object.poll) ? String(object.poll) : "",
            voter: isSet(object.voter) ? String(object.voter) : "",
            state: isSet(object.state) ? String(object.state) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseVoted();
        message.module = object.module ?? "";
        message.action = object.action ?? "";
        message.poll = object.poll ?? "";
        message.voter = object.voter ?? "";
        message.state = object.state ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseVoted();
        if (object.module !== undefined && object.module !== null) {
            message.module = object.module;
        }
        if (object.action !== undefined && object.action !== null) {
            message.action = object.action;
        }
        if (object.poll !== undefined && object.poll !== null) {
            message.poll = object.poll;
        }
        if (object.voter !== undefined && object.voter !== null) {
            message.voter = object.voter;
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.module = message.module;
        obj.action = message.action;
        obj.poll = message.poll;
        obj.voter = message.voter;
        obj.state = message.state;
        return obj;
    },
    fromAminoMsg(object) {
        return Voted.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Voted.decode(message.value);
    },
    toProto(message) {
        return Voted.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.vote.v1beta1.Voted",
            value: Voted.encode(message).finish()
        };
    }
};
//# sourceMappingURL=events.js.map