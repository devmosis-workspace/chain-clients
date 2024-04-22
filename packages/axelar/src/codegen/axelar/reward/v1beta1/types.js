import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBasePool() {
    return {
        name: "",
        rewards: []
    };
}
export const Pool = {
    typeUrl: "/axelar.reward.v1beta1.Pool",
    encode(message, writer = BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.rewards) {
            Pool_Reward.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            rewards: Array.isArray(object?.rewards) ? object.rewards.map((e) => Pool_Reward.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBasePool();
        message.name = object.name ?? "";
        message.rewards = object.rewards?.map(e => Pool_Reward.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBasePool();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        message.rewards = object.rewards?.map(e => Pool_Reward.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => e ? Pool_Reward.toAmino(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Pool.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Pool.decode(message.value);
    },
    toProto(message) {
        return Pool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.reward.v1beta1.Pool",
            value: Pool.encode(message).finish()
        };
    }
};
function createBasePool_Reward() {
    return {
        validator: new Uint8Array(),
        coins: []
    };
}
export const Pool_Reward = {
    typeUrl: "/axelar.reward.v1beta1.Reward",
    encode(message, writer = BinaryWriter.create()) {
        if (message.validator.length !== 0) {
            writer.uint32(10).bytes(message.validator);
        }
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            validator: isSet(object.validator) ? bytesFromBase64(object.validator) : new Uint8Array(),
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBasePool_Reward();
        message.validator = object.validator ?? new Uint8Array();
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBasePool_Reward();
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = bytesFromBase64(object.validator);
        }
        message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator = message.validator ? base64FromBytes(message.validator) : undefined;
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Pool_Reward.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Pool_Reward.decode(message.value);
    },
    toProto(message) {
        return Pool_Reward.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.reward.v1beta1.Reward",
            value: Pool_Reward.encode(message).finish()
        };
    }
};
function createBaseRefund() {
    return {
        payer: new Uint8Array(),
        fees: []
    };
}
export const Refund = {
    typeUrl: "/axelar.reward.v1beta1.Refund",
    encode(message, writer = BinaryWriter.create()) {
        if (message.payer.length !== 0) {
            writer.uint32(10).bytes(message.payer);
        }
        for (const v of message.fees) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            payer: isSet(object.payer) ? bytesFromBase64(object.payer) : new Uint8Array(),
            fees: Array.isArray(object?.fees) ? object.fees.map((e) => Coin.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseRefund();
        message.payer = object.payer ?? new Uint8Array();
        message.fees = object.fees?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseRefund();
        if (object.payer !== undefined && object.payer !== null) {
            message.payer = bytesFromBase64(object.payer);
        }
        message.fees = object.fees?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.payer = message.payer ? base64FromBytes(message.payer) : undefined;
        if (message.fees) {
            obj.fees = message.fees.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.fees = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Refund.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Refund.decode(message.value);
    },
    toProto(message) {
        return Refund.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.reward.v1beta1.Refund",
            value: Refund.encode(message).finish()
        };
    }
};
//# sourceMappingURL=types.js.map