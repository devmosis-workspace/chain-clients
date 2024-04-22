import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Duration } from "../../../google/protobuf/duration";
import { CrossChainAddress, WasmMessage } from "../exported/v1beta1/types";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseFeeDeducted() {
    return {
        transferId: BigInt(0),
        recipientChain: "",
        recipientAddress: "",
        amount: Coin.fromPartial({}),
        fee: Coin.fromPartial({})
    };
}
export const FeeDeducted = {
    typeUrl: "/axelar.nexus.v1beta1.FeeDeducted",
    encode(message, writer = BinaryWriter.create()) {
        if (message.transferId !== BigInt(0)) {
            writer.uint32(8).uint64(message.transferId);
        }
        if (message.recipientChain !== "") {
            writer.uint32(18).string(message.recipientChain);
        }
        if (message.recipientAddress !== "") {
            writer.uint32(26).string(message.recipientAddress);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
        }
        if (message.fee !== undefined) {
            Coin.encode(message.fee, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            transferId: isSet(object.transferId) ? BigInt(object.transferId.toString()) : BigInt(0),
            recipientChain: isSet(object.recipientChain) ? String(object.recipientChain) : "",
            recipientAddress: isSet(object.recipientAddress) ? String(object.recipientAddress) : "",
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
            fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseFeeDeducted();
        message.transferId = object.transferId !== undefined && object.transferId !== null ? BigInt(object.transferId.toString()) : BigInt(0);
        message.recipientChain = object.recipientChain ?? "";
        message.recipientAddress = object.recipientAddress ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseFeeDeducted();
        if (object.transfer_id !== undefined && object.transfer_id !== null) {
            message.transferId = BigInt(object.transfer_id);
        }
        if (object.recipient_chain !== undefined && object.recipient_chain !== null) {
            message.recipientChain = object.recipient_chain;
        }
        if (object.recipient_address !== undefined && object.recipient_address !== null) {
            message.recipientAddress = object.recipient_address;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromAmino(object.amount);
        }
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = Coin.fromAmino(object.fee);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.transfer_id = message.transferId ? message.transferId.toString() : undefined;
        obj.recipient_chain = message.recipientChain;
        obj.recipient_address = message.recipientAddress;
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        obj.fee = message.fee ? Coin.toAmino(message.fee) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return FeeDeducted.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return FeeDeducted.decode(message.value);
    },
    toProto(message) {
        return FeeDeducted.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.FeeDeducted",
            value: FeeDeducted.encode(message).finish()
        };
    }
};
function createBaseInsufficientFee() {
    return {
        transferId: BigInt(0),
        recipientChain: "",
        recipientAddress: "",
        amount: Coin.fromPartial({}),
        fee: Coin.fromPartial({})
    };
}
export const InsufficientFee = {
    typeUrl: "/axelar.nexus.v1beta1.InsufficientFee",
    encode(message, writer = BinaryWriter.create()) {
        if (message.transferId !== BigInt(0)) {
            writer.uint32(8).uint64(message.transferId);
        }
        if (message.recipientChain !== "") {
            writer.uint32(18).string(message.recipientChain);
        }
        if (message.recipientAddress !== "") {
            writer.uint32(26).string(message.recipientAddress);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
        }
        if (message.fee !== undefined) {
            Coin.encode(message.fee, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            transferId: isSet(object.transferId) ? BigInt(object.transferId.toString()) : BigInt(0),
            recipientChain: isSet(object.recipientChain) ? String(object.recipientChain) : "",
            recipientAddress: isSet(object.recipientAddress) ? String(object.recipientAddress) : "",
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
            fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseInsufficientFee();
        message.transferId = object.transferId !== undefined && object.transferId !== null ? BigInt(object.transferId.toString()) : BigInt(0);
        message.recipientChain = object.recipientChain ?? "";
        message.recipientAddress = object.recipientAddress ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseInsufficientFee();
        if (object.transfer_id !== undefined && object.transfer_id !== null) {
            message.transferId = BigInt(object.transfer_id);
        }
        if (object.recipient_chain !== undefined && object.recipient_chain !== null) {
            message.recipientChain = object.recipient_chain;
        }
        if (object.recipient_address !== undefined && object.recipient_address !== null) {
            message.recipientAddress = object.recipient_address;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromAmino(object.amount);
        }
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = Coin.fromAmino(object.fee);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.transfer_id = message.transferId ? message.transferId.toString() : undefined;
        obj.recipient_chain = message.recipientChain;
        obj.recipient_address = message.recipientAddress;
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        obj.fee = message.fee ? Coin.toAmino(message.fee) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return InsufficientFee.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return InsufficientFee.decode(message.value);
    },
    toProto(message) {
        return InsufficientFee.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.InsufficientFee",
            value: InsufficientFee.encode(message).finish()
        };
    }
};
function createBaseRateLimitUpdated() {
    return {
        chain: "",
        limit: Coin.fromPartial({}),
        window: Duration.fromPartial({})
    };
}
export const RateLimitUpdated = {
    typeUrl: "/axelar.nexus.v1beta1.RateLimitUpdated",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.limit !== undefined) {
            Coin.encode(message.limit, writer.uint32(18).fork()).ldelim();
        }
        if (message.window !== undefined) {
            Duration.encode(message.window, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : "",
            limit: isSet(object.limit) ? Coin.fromJSON(object.limit) : undefined,
            window: isSet(object.window) ? Duration.fromJSON(object.window) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseRateLimitUpdated();
        message.chain = object.chain ?? "";
        message.limit = object.limit !== undefined && object.limit !== null ? Coin.fromPartial(object.limit) : undefined;
        message.window = object.window !== undefined && object.window !== null ? Duration.fromPartial(object.window) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseRateLimitUpdated();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = Coin.fromAmino(object.limit);
        }
        if (object.window !== undefined && object.window !== null) {
            message.window = Duration.fromAmino(object.window);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain;
        obj.limit = message.limit ? Coin.toAmino(message.limit) : undefined;
        obj.window = message.window ? Duration.toAmino(message.window) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return RateLimitUpdated.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RateLimitUpdated.decode(message.value);
    },
    toProto(message) {
        return RateLimitUpdated.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.RateLimitUpdated",
            value: RateLimitUpdated.encode(message).finish()
        };
    }
};
function createBaseMessageReceived() {
    return {
        id: "",
        payloadHash: new Uint8Array(),
        sender: CrossChainAddress.fromPartial({}),
        recipient: CrossChainAddress.fromPartial({})
    };
}
export const MessageReceived = {
    typeUrl: "/axelar.nexus.v1beta1.MessageReceived",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.payloadHash.length !== 0) {
            writer.uint32(18).bytes(message.payloadHash);
        }
        if (message.sender !== undefined) {
            CrossChainAddress.encode(message.sender, writer.uint32(26).fork()).ldelim();
        }
        if (message.recipient !== undefined) {
            CrossChainAddress.encode(message.recipient, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : "",
            payloadHash: isSet(object.payloadHash) ? bytesFromBase64(object.payloadHash) : new Uint8Array(),
            sender: isSet(object.sender) ? CrossChainAddress.fromJSON(object.sender) : undefined,
            recipient: isSet(object.recipient) ? CrossChainAddress.fromJSON(object.recipient) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseMessageReceived();
        message.id = object.id ?? "";
        message.payloadHash = object.payloadHash ?? new Uint8Array();
        message.sender = object.sender !== undefined && object.sender !== null ? CrossChainAddress.fromPartial(object.sender) : undefined;
        message.recipient = object.recipient !== undefined && object.recipient !== null ? CrossChainAddress.fromPartial(object.recipient) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMessageReceived();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.payload_hash !== undefined && object.payload_hash !== null) {
            message.payloadHash = bytesFromBase64(object.payload_hash);
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = CrossChainAddress.fromAmino(object.sender);
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = CrossChainAddress.fromAmino(object.recipient);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        obj.payload_hash = message.payloadHash ? base64FromBytes(message.payloadHash) : undefined;
        obj.sender = message.sender ? CrossChainAddress.toAmino(message.sender) : undefined;
        obj.recipient = message.recipient ? CrossChainAddress.toAmino(message.recipient) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MessageReceived.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MessageReceived.decode(message.value);
    },
    toProto(message) {
        return MessageReceived.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.MessageReceived",
            value: MessageReceived.encode(message).finish()
        };
    }
};
function createBaseMessageProcessing() {
    return {
        id: ""
    };
}
export const MessageProcessing = {
    typeUrl: "/axelar.nexus.v1beta1.MessageProcessing",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseMessageProcessing();
        message.id = object.id ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMessageProcessing();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        return obj;
    },
    fromAminoMsg(object) {
        return MessageProcessing.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MessageProcessing.decode(message.value);
    },
    toProto(message) {
        return MessageProcessing.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.MessageProcessing",
            value: MessageProcessing.encode(message).finish()
        };
    }
};
function createBaseMessageExecuted() {
    return {
        id: ""
    };
}
export const MessageExecuted = {
    typeUrl: "/axelar.nexus.v1beta1.MessageExecuted",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseMessageExecuted();
        message.id = object.id ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMessageExecuted();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        return obj;
    },
    fromAminoMsg(object) {
        return MessageExecuted.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MessageExecuted.decode(message.value);
    },
    toProto(message) {
        return MessageExecuted.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.MessageExecuted",
            value: MessageExecuted.encode(message).finish()
        };
    }
};
function createBaseMessageFailed() {
    return {
        id: ""
    };
}
export const MessageFailed = {
    typeUrl: "/axelar.nexus.v1beta1.MessageFailed",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseMessageFailed();
        message.id = object.id ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMessageFailed();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        return obj;
    },
    fromAminoMsg(object) {
        return MessageFailed.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MessageFailed.decode(message.value);
    },
    toProto(message) {
        return MessageFailed.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.MessageFailed",
            value: MessageFailed.encode(message).finish()
        };
    }
};
function createBaseWasmMessageRouted() {
    return {
        message: WasmMessage.fromPartial({})
    };
}
export const WasmMessageRouted = {
    typeUrl: "/axelar.nexus.v1beta1.WasmMessageRouted",
    encode(message, writer = BinaryWriter.create()) {
        if (message.message !== undefined) {
            WasmMessage.encode(message.message, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            message: isSet(object.message) ? WasmMessage.fromJSON(object.message) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseWasmMessageRouted();
        message.message = object.message !== undefined && object.message !== null ? WasmMessage.fromPartial(object.message) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseWasmMessageRouted();
        if (object.message !== undefined && object.message !== null) {
            message.message = WasmMessage.fromAmino(object.message);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.message = message.message ? WasmMessage.toAmino(message.message) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return WasmMessageRouted.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return WasmMessageRouted.decode(message.value);
    },
    toProto(message) {
        return WasmMessageRouted.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.WasmMessageRouted",
            value: WasmMessageRouted.encode(message).finish()
        };
    }
};
//# sourceMappingURL=events.js.map