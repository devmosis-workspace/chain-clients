import { Minter, Params } from "./mint";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseGenesisState() {
    return {
        minter: Minter.fromPartial({}),
        params: Params.fromPartial({})
    };
}
export const GenesisState = {
    typeUrl: "/cosmos.mint.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.minter !== undefined) {
            Minter.encode(message.minter, writer.uint32(10).fork()).ldelim();
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            minter: isSet(object.minter) ? Minter.fromJSON(object.minter) : undefined,
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.minter = object.minter !== undefined && object.minter !== null ? Minter.fromPartial(object.minter) : undefined;
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.minter !== undefined && object.minter !== null) {
            message.minter = Minter.fromAmino(object.minter);
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.minter = message.minter ? Minter.toAmino(message.minter) : undefined;
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
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
            typeUrl: "/cosmos.mint.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map