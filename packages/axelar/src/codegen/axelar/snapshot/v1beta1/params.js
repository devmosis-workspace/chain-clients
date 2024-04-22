import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseParams() {
    return {
        minProxyBalance: BigInt(0)
    };
}
export const Params = {
    typeUrl: "/axelar.snapshot.v1beta1.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.minProxyBalance !== BigInt(0)) {
            writer.uint32(8).int64(message.minProxyBalance);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            minProxyBalance: isSet(object.minProxyBalance) ? BigInt(object.minProxyBalance.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.minProxyBalance = object.minProxyBalance !== undefined && object.minProxyBalance !== null ? BigInt(object.minProxyBalance.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.min_proxy_balance !== undefined && object.min_proxy_balance !== null) {
            message.minProxyBalance = BigInt(object.min_proxy_balance);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.min_proxy_balance = message.minProxyBalance ? message.minProxyBalance.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.snapshot.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=params.js.map