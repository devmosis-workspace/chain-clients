import { BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseGenesisState() {
    return {
        genTxs: []
    };
}
export const GenesisState = {
    typeUrl: "/cosmos.genutil.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.genTxs) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            genTxs: Array.isArray(object?.genTxs) ? object.genTxs.map((e) => bytesFromBase64(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.genTxs = object.genTxs?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.genTxs = object.gen_txs?.map(e => bytesFromBase64(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.genTxs) {
            obj.gen_txs = message.genTxs.map(e => base64FromBytes(e));
        }
        else {
            obj.gen_txs = [];
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
            typeUrl: "/cosmos.genutil.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map