import { Grant } from "./feegrant";
import { BinaryWriter } from "../../../binary";
function createBaseGenesisState() {
    return {
        allowances: []
    };
}
export const GenesisState = {
    typeUrl: "/cosmos.feegrant.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.allowances) {
            Grant.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            allowances: Array.isArray(object?.allowances) ? object.allowances.map((e) => Grant.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.allowances = object.allowances?.map(e => Grant.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.allowances = object.allowances?.map(e => Grant.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.allowances) {
            obj.allowances = message.allowances.map(e => e ? Grant.toAmino(e) : undefined);
        }
        else {
            obj.allowances = [];
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
            typeUrl: "/cosmos.feegrant.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map