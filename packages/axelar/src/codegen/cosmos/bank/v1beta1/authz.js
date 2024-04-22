import { Coin } from "../../base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
function createBaseSendAuthorization() {
    return {
        $typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
        spendLimit: []
    };
}
export const SendAuthorization = {
    typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.spendLimit) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            spendLimit: Array.isArray(object?.spendLimit) ? object.spendLimit.map((e) => Coin.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseSendAuthorization();
        message.spendLimit = object.spendLimit?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseSendAuthorization();
        message.spendLimit = object.spend_limit?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.spendLimit) {
            obj.spend_limit = message.spendLimit.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.spend_limit = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return SendAuthorization.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SendAuthorization",
            value: SendAuthorization.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SendAuthorization.decode(message.value);
    },
    toProto(message) {
        return SendAuthorization.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
            value: SendAuthorization.encode(message).finish()
        };
    }
};
//# sourceMappingURL=authz.js.map