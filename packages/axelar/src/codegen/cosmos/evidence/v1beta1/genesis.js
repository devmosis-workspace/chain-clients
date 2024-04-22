import { Any } from "../../../google/protobuf/any";
import { BinaryWriter } from "../../../binary";
function createBaseGenesisState() {
    return {
        evidence: []
    };
}
export const GenesisState = {
    typeUrl: "/cosmos.evidence.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.evidence) {
            Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            evidence: Array.isArray(object?.evidence) ? object.evidence.map((e) => Any.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.evidence = object.evidence?.map(e => Any.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.evidence = object.evidence?.map(e => Any.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.evidence) {
            obj.evidence = message.evidence.map(e => e ? Any.toAmino(e) : undefined);
        }
        else {
            obj.evidence = [];
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
            typeUrl: "/cosmos.evidence.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map