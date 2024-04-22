import { BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
function createBaseFungibleTokenPacketData() {
    return {
        denom: "",
        amount: "",
        sender: "",
        receiver: "",
        memo: ""
    };
}
export const FungibleTokenPacketData = {
    typeUrl: "/ibc.applications.transfer.v2.FungibleTokenPacketData",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        if (message.receiver !== "") {
            writer.uint32(34).string(message.receiver);
        }
        if (message.memo !== "") {
            writer.uint32(42).string(message.memo);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            denom: isSet(object.denom) ? String(object.denom) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
            sender: isSet(object.sender) ? String(object.sender) : "",
            receiver: isSet(object.receiver) ? String(object.receiver) : "",
            memo: isSet(object.memo) ? String(object.memo) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseFungibleTokenPacketData();
        message.denom = object.denom ?? "";
        message.amount = object.amount ?? "";
        message.sender = object.sender ?? "";
        message.receiver = object.receiver ?? "";
        message.memo = object.memo ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseFungibleTokenPacketData();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = object.receiver;
        }
        if (object.memo !== undefined && object.memo !== null) {
            message.memo = object.memo;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.amount = message.amount;
        obj.sender = message.sender;
        obj.receiver = message.receiver;
        obj.memo = message.memo;
        return obj;
    },
    fromAminoMsg(object) {
        return FungibleTokenPacketData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/FungibleTokenPacketData",
            value: FungibleTokenPacketData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return FungibleTokenPacketData.decode(message.value);
    },
    toProto(message) {
        return FungibleTokenPacketData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v2.FungibleTokenPacketData",
            value: FungibleTokenPacketData.encode(message).finish()
        };
    }
};
//# sourceMappingURL=packet.js.map