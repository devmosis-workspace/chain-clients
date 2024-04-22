import { GrantAuthorization } from "./authz";
import { BinaryWriter } from "../../../binary";
function createBaseGenesisState() {
    return {
        authorization: []
    };
}
export const GenesisState = {
    typeUrl: "/cosmos.authz.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.authorization) {
            GrantAuthorization.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            authorization: Array.isArray(object?.authorization) ? object.authorization.map((e) => GrantAuthorization.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.authorization = object.authorization?.map(e => GrantAuthorization.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.authorization = object.authorization?.map(e => GrantAuthorization.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.authorization) {
            obj.authorization = message.authorization.map(e => e ? GrantAuthorization.toAmino(e) : undefined);
        }
        else {
            obj.authorization = [];
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
            typeUrl: "/cosmos.authz.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map