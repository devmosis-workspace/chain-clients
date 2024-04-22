import { Coin } from "../../base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseGenesisState() {
    return {
        constantFee: Coin.fromPartial({})
    };
}
export const GenesisState = {
    typeUrl: "/cosmos.crisis.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.constantFee !== undefined) {
            Coin.encode(message.constantFee, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            constantFee: isSet(object.constantFee) ? Coin.fromJSON(object.constantFee) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.constantFee = object.constantFee !== undefined && object.constantFee !== null ? Coin.fromPartial(object.constantFee) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.constant_fee !== undefined && object.constant_fee !== null) {
            message.constantFee = Coin.fromAmino(object.constant_fee);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.constant_fee = message.constantFee ? Coin.toAmino(message.constantFee) : undefined;
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
            typeUrl: "/cosmos.crisis.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map