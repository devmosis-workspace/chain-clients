import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
export var IBCTransfer_Status;
(function (IBCTransfer_Status) {
    IBCTransfer_Status[IBCTransfer_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    IBCTransfer_Status[IBCTransfer_Status["STATUS_PENDING"] = 1] = "STATUS_PENDING";
    IBCTransfer_Status[IBCTransfer_Status["STATUS_COMPLETED"] = 2] = "STATUS_COMPLETED";
    IBCTransfer_Status[IBCTransfer_Status["STATUS_FAILED"] = 3] = "STATUS_FAILED";
    IBCTransfer_Status[IBCTransfer_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(IBCTransfer_Status || (IBCTransfer_Status = {}));
export const IBCTransfer_StatusSDKType = IBCTransfer_Status;
export const IBCTransfer_StatusAmino = IBCTransfer_Status;
export function iBCTransfer_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return IBCTransfer_Status.STATUS_UNSPECIFIED;
        case 1:
        case "STATUS_PENDING":
            return IBCTransfer_Status.STATUS_PENDING;
        case 2:
        case "STATUS_COMPLETED":
            return IBCTransfer_Status.STATUS_COMPLETED;
        case 3:
        case "STATUS_FAILED":
            return IBCTransfer_Status.STATUS_FAILED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return IBCTransfer_Status.UNRECOGNIZED;
    }
}
export function iBCTransfer_StatusToJSON(object) {
    switch (object) {
        case IBCTransfer_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case IBCTransfer_Status.STATUS_PENDING:
            return "STATUS_PENDING";
        case IBCTransfer_Status.STATUS_COMPLETED:
            return "STATUS_COMPLETED";
        case IBCTransfer_Status.STATUS_FAILED:
            return "STATUS_FAILED";
        case IBCTransfer_Status.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseIBCTransfer() {
    return {
        sender: new Uint8Array(),
        receiver: "",
        token: Coin.fromPartial({}),
        portId: "",
        channelId: "",
        sequence: BigInt(0),
        id: BigInt(0),
        status: 0
    };
}
export const IBCTransfer = {
    typeUrl: "/axelar.axelarnet.v1beta1.IBCTransfer",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        if (message.token !== undefined) {
            Coin.encode(message.token, writer.uint32(26).fork()).ldelim();
        }
        if (message.portId !== "") {
            writer.uint32(34).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(42).string(message.channelId);
        }
        if (message.sequence !== BigInt(0)) {
            writer.uint32(48).uint64(message.sequence);
        }
        if (message.id !== BigInt(0)) {
            writer.uint32(56).uint64(message.id);
        }
        if (message.status !== 0) {
            writer.uint32(64).int32(message.status);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            receiver: isSet(object.receiver) ? String(object.receiver) : "",
            token: isSet(object.token) ? Coin.fromJSON(object.token) : undefined,
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0),
            id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
            status: isSet(object.status) ? iBCTransfer_StatusFromJSON(object.status) : -1
        };
    },
    fromPartial(object) {
        const message = createBaseIBCTransfer();
        message.sender = object.sender ?? new Uint8Array();
        message.receiver = object.receiver ?? "";
        message.token = object.token !== undefined && object.token !== null ? Coin.fromPartial(object.token) : undefined;
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.status = object.status ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseIBCTransfer();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = object.receiver;
        }
        if (object.token !== undefined && object.token !== null) {
            message.token = Coin.fromAmino(object.token);
        }
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = iBCTransfer_StatusFromJSON(object.status);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.receiver = message.receiver;
        obj.token = message.token ? Coin.toAmino(message.token) : undefined;
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.id = message.id ? message.id.toString() : undefined;
        obj.status = message.status;
        return obj;
    },
    fromAminoMsg(object) {
        return IBCTransfer.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return IBCTransfer.decode(message.value);
    },
    toProto(message) {
        return IBCTransfer.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.IBCTransfer",
            value: IBCTransfer.encode(message).finish()
        };
    }
};
function createBaseCosmosChain() {
    return {
        name: "",
        ibcPath: "",
        assets: [],
        addrPrefix: ""
    };
}
export const CosmosChain = {
    typeUrl: "/axelar.axelarnet.v1beta1.CosmosChain",
    encode(message, writer = BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.ibcPath !== "") {
            writer.uint32(18).string(message.ibcPath);
        }
        for (const v of message.assets) {
            Asset.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.addrPrefix !== "") {
            writer.uint32(34).string(message.addrPrefix);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            ibcPath: isSet(object.ibcPath) ? String(object.ibcPath) : "",
            assets: Array.isArray(object?.assets) ? object.assets.map((e) => Asset.fromJSON(e)) : [],
            addrPrefix: isSet(object.addrPrefix) ? String(object.addrPrefix) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseCosmosChain();
        message.name = object.name ?? "";
        message.ibcPath = object.ibcPath ?? "";
        message.assets = object.assets?.map(e => Asset.fromPartial(e)) || [];
        message.addrPrefix = object.addrPrefix ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseCosmosChain();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.ibc_path !== undefined && object.ibc_path !== null) {
            message.ibcPath = object.ibc_path;
        }
        message.assets = object.assets?.map(e => Asset.fromAmino(e)) || [];
        if (object.addr_prefix !== undefined && object.addr_prefix !== null) {
            message.addrPrefix = object.addr_prefix;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.ibc_path = message.ibcPath;
        if (message.assets) {
            obj.assets = message.assets.map(e => e ? Asset.toAmino(e) : undefined);
        }
        else {
            obj.assets = [];
        }
        obj.addr_prefix = message.addrPrefix;
        return obj;
    },
    fromAminoMsg(object) {
        return CosmosChain.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CosmosChain.decode(message.value);
    },
    toProto(message) {
        return CosmosChain.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.CosmosChain",
            value: CosmosChain.encode(message).finish()
        };
    }
};
function createBaseAsset() {
    return {
        denom: "",
        minAmount: new Uint8Array()
    };
}
export const Asset = {
    typeUrl: "/axelar.axelarnet.v1beta1.Asset",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.minAmount.length !== 0) {
            writer.uint32(18).bytes(message.minAmount);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            denom: isSet(object.denom) ? String(object.denom) : "",
            minAmount: isSet(object.minAmount) ? bytesFromBase64(object.minAmount) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseAsset();
        message.denom = object.denom ?? "";
        message.minAmount = object.minAmount ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseAsset();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.min_amount !== undefined && object.min_amount !== null) {
            message.minAmount = bytesFromBase64(object.min_amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.min_amount = message.minAmount ? base64FromBytes(message.minAmount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Asset.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Asset.decode(message.value);
    },
    toProto(message) {
        return Asset.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.Asset",
            value: Asset.encode(message).finish()
        };
    }
};
function createBaseFee() {
    return {
        amount: Coin.fromPartial({}),
        recipient: new Uint8Array(),
        refundRecipient: new Uint8Array()
    };
}
export const Fee = {
    typeUrl: "/axelar.axelarnet.v1beta1.Fee",
    encode(message, writer = BinaryWriter.create()) {
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
        }
        if (message.recipient.length !== 0) {
            writer.uint32(18).bytes(message.recipient);
        }
        if (message.refundRecipient.length !== 0) {
            writer.uint32(26).bytes(message.refundRecipient);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
            recipient: isSet(object.recipient) ? bytesFromBase64(object.recipient) : new Uint8Array(),
            refundRecipient: isSet(object.refundRecipient) ? bytesFromBase64(object.refundRecipient) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseFee();
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        message.recipient = object.recipient ?? new Uint8Array();
        message.refundRecipient = object.refundRecipient ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseFee();
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromAmino(object.amount);
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = bytesFromBase64(object.recipient);
        }
        if (object.refund_recipient !== undefined && object.refund_recipient !== null) {
            message.refundRecipient = bytesFromBase64(object.refund_recipient);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        obj.recipient = message.recipient ? base64FromBytes(message.recipient) : undefined;
        obj.refund_recipient = message.refundRecipient ? base64FromBytes(message.refundRecipient) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Fee.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Fee.decode(message.value);
    },
    toProto(message) {
        return Fee.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.Fee",
            value: Fee.encode(message).finish()
        };
    }
};
//# sourceMappingURL=types.js.map