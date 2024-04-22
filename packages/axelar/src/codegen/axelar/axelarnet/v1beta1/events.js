import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseIBCTransferSent() {
    return {
        id: BigInt(0),
        receipient: "",
        asset: Coin.fromPartial({}),
        sequence: BigInt(0),
        portId: "",
        channelId: "",
        recipient: ""
    };
}
export const IBCTransferSent = {
    typeUrl: "/axelar.axelarnet.v1beta1.IBCTransferSent",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.receipient !== "") {
            writer.uint32(18).string(message.receipient);
        }
        if (message.asset !== undefined) {
            Coin.encode(message.asset, writer.uint32(26).fork()).ldelim();
        }
        if (message.sequence !== BigInt(0)) {
            writer.uint32(32).uint64(message.sequence);
        }
        if (message.portId !== "") {
            writer.uint32(42).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(50).string(message.channelId);
        }
        if (message.recipient !== "") {
            writer.uint32(58).string(message.recipient);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
            receipient: isSet(object.receipient) ? String(object.receipient) : "",
            asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined,
            sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0),
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            recipient: isSet(object.recipient) ? String(object.recipient) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseIBCTransferSent();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.receipient = object.receipient ?? "";
        message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.recipient = object.recipient ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseIBCTransferSent();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.receipient !== undefined && object.receipient !== null) {
            message.receipient = object.receipient;
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = Coin.fromAmino(object.asset);
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? message.id.toString() : undefined;
        obj.receipient = message.receipient;
        obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        obj.recipient = message.recipient;
        return obj;
    },
    fromAminoMsg(object) {
        return IBCTransferSent.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return IBCTransferSent.decode(message.value);
    },
    toProto(message) {
        return IBCTransferSent.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.IBCTransferSent",
            value: IBCTransferSent.encode(message).finish()
        };
    }
};
function createBaseIBCTransferCompleted() {
    return {
        id: BigInt(0),
        sequence: BigInt(0),
        portId: "",
        channelId: ""
    };
}
export const IBCTransferCompleted = {
    typeUrl: "/axelar.axelarnet.v1beta1.IBCTransferCompleted",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.sequence !== BigInt(0)) {
            writer.uint32(16).uint64(message.sequence);
        }
        if (message.portId !== "") {
            writer.uint32(26).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(34).string(message.channelId);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
            sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0),
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseIBCTransferCompleted();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseIBCTransferCompleted();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? message.id.toString() : undefined;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        return obj;
    },
    fromAminoMsg(object) {
        return IBCTransferCompleted.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return IBCTransferCompleted.decode(message.value);
    },
    toProto(message) {
        return IBCTransferCompleted.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.IBCTransferCompleted",
            value: IBCTransferCompleted.encode(message).finish()
        };
    }
};
function createBaseIBCTransferFailed() {
    return {
        id: BigInt(0),
        sequence: BigInt(0),
        portId: "",
        channelId: ""
    };
}
export const IBCTransferFailed = {
    typeUrl: "/axelar.axelarnet.v1beta1.IBCTransferFailed",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.sequence !== BigInt(0)) {
            writer.uint32(16).uint64(message.sequence);
        }
        if (message.portId !== "") {
            writer.uint32(26).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(34).string(message.channelId);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
            sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0),
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseIBCTransferFailed();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseIBCTransferFailed();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? message.id.toString() : undefined;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        return obj;
    },
    fromAminoMsg(object) {
        return IBCTransferFailed.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return IBCTransferFailed.decode(message.value);
    },
    toProto(message) {
        return IBCTransferFailed.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.IBCTransferFailed",
            value: IBCTransferFailed.encode(message).finish()
        };
    }
};
function createBaseIBCTransferRetried() {
    return {
        id: BigInt(0),
        receipient: "",
        asset: Coin.fromPartial({}),
        sequence: BigInt(0),
        portId: "",
        channelId: "",
        recipient: ""
    };
}
export const IBCTransferRetried = {
    typeUrl: "/axelar.axelarnet.v1beta1.IBCTransferRetried",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.receipient !== "") {
            writer.uint32(18).string(message.receipient);
        }
        if (message.asset !== undefined) {
            Coin.encode(message.asset, writer.uint32(26).fork()).ldelim();
        }
        if (message.sequence !== BigInt(0)) {
            writer.uint32(32).uint64(message.sequence);
        }
        if (message.portId !== "") {
            writer.uint32(42).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(50).string(message.channelId);
        }
        if (message.recipient !== "") {
            writer.uint32(58).string(message.recipient);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
            receipient: isSet(object.receipient) ? String(object.receipient) : "",
            asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined,
            sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0),
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            recipient: isSet(object.recipient) ? String(object.recipient) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseIBCTransferRetried();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.receipient = object.receipient ?? "";
        message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.recipient = object.recipient ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseIBCTransferRetried();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.receipient !== undefined && object.receipient !== null) {
            message.receipient = object.receipient;
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = Coin.fromAmino(object.asset);
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? message.id.toString() : undefined;
        obj.receipient = message.receipient;
        obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        obj.recipient = message.recipient;
        return obj;
    },
    fromAminoMsg(object) {
        return IBCTransferRetried.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return IBCTransferRetried.decode(message.value);
    },
    toProto(message) {
        return IBCTransferRetried.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.IBCTransferRetried",
            value: IBCTransferRetried.encode(message).finish()
        };
    }
};
function createBaseAxelarTransferCompleted() {
    return {
        id: BigInt(0),
        receipient: "",
        asset: Coin.fromPartial({}),
        recipient: ""
    };
}
export const AxelarTransferCompleted = {
    typeUrl: "/axelar.axelarnet.v1beta1.AxelarTransferCompleted",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.receipient !== "") {
            writer.uint32(18).string(message.receipient);
        }
        if (message.asset !== undefined) {
            Coin.encode(message.asset, writer.uint32(26).fork()).ldelim();
        }
        if (message.recipient !== "") {
            writer.uint32(34).string(message.recipient);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
            receipient: isSet(object.receipient) ? String(object.receipient) : "",
            asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined,
            recipient: isSet(object.recipient) ? String(object.recipient) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseAxelarTransferCompleted();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.receipient = object.receipient ?? "";
        message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
        message.recipient = object.recipient ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseAxelarTransferCompleted();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.receipient !== undefined && object.receipient !== null) {
            message.receipient = object.receipient;
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = Coin.fromAmino(object.asset);
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? message.id.toString() : undefined;
        obj.receipient = message.receipient;
        obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
        obj.recipient = message.recipient;
        return obj;
    },
    fromAminoMsg(object) {
        return AxelarTransferCompleted.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return AxelarTransferCompleted.decode(message.value);
    },
    toProto(message) {
        return AxelarTransferCompleted.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.AxelarTransferCompleted",
            value: AxelarTransferCompleted.encode(message).finish()
        };
    }
};
function createBaseFeeCollected() {
    return {
        collector: new Uint8Array(),
        fee: Coin.fromPartial({})
    };
}
export const FeeCollected = {
    typeUrl: "/axelar.axelarnet.v1beta1.FeeCollected",
    encode(message, writer = BinaryWriter.create()) {
        if (message.collector.length !== 0) {
            writer.uint32(10).bytes(message.collector);
        }
        if (message.fee !== undefined) {
            Coin.encode(message.fee, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            collector: isSet(object.collector) ? bytesFromBase64(object.collector) : new Uint8Array(),
            fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseFeeCollected();
        message.collector = object.collector ?? new Uint8Array();
        message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseFeeCollected();
        if (object.collector !== undefined && object.collector !== null) {
            message.collector = bytesFromBase64(object.collector);
        }
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = Coin.fromAmino(object.fee);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.collector = message.collector ? base64FromBytes(message.collector) : undefined;
        obj.fee = message.fee ? Coin.toAmino(message.fee) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return FeeCollected.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return FeeCollected.decode(message.value);
    },
    toProto(message) {
        return FeeCollected.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.FeeCollected",
            value: FeeCollected.encode(message).finish()
        };
    }
};
function createBaseFeePaid() {
    return {
        messageId: "",
        recipient: new Uint8Array(),
        fee: Coin.fromPartial({}),
        refundRecipient: "",
        asset: ""
    };
}
export const FeePaid = {
    typeUrl: "/axelar.axelarnet.v1beta1.FeePaid",
    encode(message, writer = BinaryWriter.create()) {
        if (message.messageId !== "") {
            writer.uint32(10).string(message.messageId);
        }
        if (message.recipient.length !== 0) {
            writer.uint32(18).bytes(message.recipient);
        }
        if (message.fee !== undefined) {
            Coin.encode(message.fee, writer.uint32(26).fork()).ldelim();
        }
        if (message.refundRecipient !== "") {
            writer.uint32(34).string(message.refundRecipient);
        }
        if (message.asset !== "") {
            writer.uint32(42).string(message.asset);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            messageId: isSet(object.messageId) ? String(object.messageId) : "",
            recipient: isSet(object.recipient) ? bytesFromBase64(object.recipient) : new Uint8Array(),
            fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined,
            refundRecipient: isSet(object.refundRecipient) ? String(object.refundRecipient) : "",
            asset: isSet(object.asset) ? String(object.asset) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseFeePaid();
        message.messageId = object.messageId ?? "";
        message.recipient = object.recipient ?? new Uint8Array();
        message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
        message.refundRecipient = object.refundRecipient ?? "";
        message.asset = object.asset ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseFeePaid();
        if (object.message_id !== undefined && object.message_id !== null) {
            message.messageId = object.message_id;
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = bytesFromBase64(object.recipient);
        }
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = Coin.fromAmino(object.fee);
        }
        if (object.refund_recipient !== undefined && object.refund_recipient !== null) {
            message.refundRecipient = object.refund_recipient;
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = object.asset;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.message_id = message.messageId;
        obj.recipient = message.recipient ? base64FromBytes(message.recipient) : undefined;
        obj.fee = message.fee ? Coin.toAmino(message.fee) : undefined;
        obj.refund_recipient = message.refundRecipient;
        obj.asset = message.asset;
        return obj;
    },
    fromAminoMsg(object) {
        return FeePaid.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return FeePaid.decode(message.value);
    },
    toProto(message) {
        return FeePaid.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.FeePaid",
            value: FeePaid.encode(message).finish()
        };
    }
};
function createBaseContractCallSubmitted() {
    return {
        messageId: "",
        sender: "",
        sourceChain: "",
        destinationChain: "",
        contractAddress: "",
        payload: new Uint8Array(),
        payloadHash: new Uint8Array()
    };
}
export const ContractCallSubmitted = {
    typeUrl: "/axelar.axelarnet.v1beta1.ContractCallSubmitted",
    encode(message, writer = BinaryWriter.create()) {
        if (message.messageId !== "") {
            writer.uint32(10).string(message.messageId);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        if (message.sourceChain !== "") {
            writer.uint32(26).string(message.sourceChain);
        }
        if (message.destinationChain !== "") {
            writer.uint32(34).string(message.destinationChain);
        }
        if (message.contractAddress !== "") {
            writer.uint32(42).string(message.contractAddress);
        }
        if (message.payload.length !== 0) {
            writer.uint32(50).bytes(message.payload);
        }
        if (message.payloadHash.length !== 0) {
            writer.uint32(58).bytes(message.payloadHash);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            messageId: isSet(object.messageId) ? String(object.messageId) : "",
            sender: isSet(object.sender) ? String(object.sender) : "",
            sourceChain: isSet(object.sourceChain) ? String(object.sourceChain) : "",
            destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(),
            payloadHash: isSet(object.payloadHash) ? bytesFromBase64(object.payloadHash) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseContractCallSubmitted();
        message.messageId = object.messageId ?? "";
        message.sender = object.sender ?? "";
        message.sourceChain = object.sourceChain ?? "";
        message.destinationChain = object.destinationChain ?? "";
        message.contractAddress = object.contractAddress ?? "";
        message.payload = object.payload ?? new Uint8Array();
        message.payloadHash = object.payloadHash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseContractCallSubmitted();
        if (object.message_id !== undefined && object.message_id !== null) {
            message.messageId = object.message_id;
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.source_chain !== undefined && object.source_chain !== null) {
            message.sourceChain = object.source_chain;
        }
        if (object.destination_chain !== undefined && object.destination_chain !== null) {
            message.destinationChain = object.destination_chain;
        }
        if (object.contract_address !== undefined && object.contract_address !== null) {
            message.contractAddress = object.contract_address;
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = bytesFromBase64(object.payload);
        }
        if (object.payload_hash !== undefined && object.payload_hash !== null) {
            message.payloadHash = bytesFromBase64(object.payload_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.message_id = message.messageId;
        obj.sender = message.sender;
        obj.source_chain = message.sourceChain;
        obj.destination_chain = message.destinationChain;
        obj.contract_address = message.contractAddress;
        obj.payload = message.payload ? base64FromBytes(message.payload) : undefined;
        obj.payload_hash = message.payloadHash ? base64FromBytes(message.payloadHash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ContractCallSubmitted.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ContractCallSubmitted.decode(message.value);
    },
    toProto(message) {
        return ContractCallSubmitted.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.ContractCallSubmitted",
            value: ContractCallSubmitted.encode(message).finish()
        };
    }
};
function createBaseContractCallWithTokenSubmitted() {
    return {
        messageId: "",
        sender: "",
        sourceChain: "",
        destinationChain: "",
        contractAddress: "",
        payload: new Uint8Array(),
        payloadHash: new Uint8Array(),
        asset: Coin.fromPartial({})
    };
}
export const ContractCallWithTokenSubmitted = {
    typeUrl: "/axelar.axelarnet.v1beta1.ContractCallWithTokenSubmitted",
    encode(message, writer = BinaryWriter.create()) {
        if (message.messageId !== "") {
            writer.uint32(10).string(message.messageId);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        if (message.sourceChain !== "") {
            writer.uint32(26).string(message.sourceChain);
        }
        if (message.destinationChain !== "") {
            writer.uint32(34).string(message.destinationChain);
        }
        if (message.contractAddress !== "") {
            writer.uint32(42).string(message.contractAddress);
        }
        if (message.payload.length !== 0) {
            writer.uint32(50).bytes(message.payload);
        }
        if (message.payloadHash.length !== 0) {
            writer.uint32(58).bytes(message.payloadHash);
        }
        if (message.asset !== undefined) {
            Coin.encode(message.asset, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            messageId: isSet(object.messageId) ? String(object.messageId) : "",
            sender: isSet(object.sender) ? String(object.sender) : "",
            sourceChain: isSet(object.sourceChain) ? String(object.sourceChain) : "",
            destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(),
            payloadHash: isSet(object.payloadHash) ? bytesFromBase64(object.payloadHash) : new Uint8Array(),
            asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseContractCallWithTokenSubmitted();
        message.messageId = object.messageId ?? "";
        message.sender = object.sender ?? "";
        message.sourceChain = object.sourceChain ?? "";
        message.destinationChain = object.destinationChain ?? "";
        message.contractAddress = object.contractAddress ?? "";
        message.payload = object.payload ?? new Uint8Array();
        message.payloadHash = object.payloadHash ?? new Uint8Array();
        message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseContractCallWithTokenSubmitted();
        if (object.message_id !== undefined && object.message_id !== null) {
            message.messageId = object.message_id;
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.source_chain !== undefined && object.source_chain !== null) {
            message.sourceChain = object.source_chain;
        }
        if (object.destination_chain !== undefined && object.destination_chain !== null) {
            message.destinationChain = object.destination_chain;
        }
        if (object.contract_address !== undefined && object.contract_address !== null) {
            message.contractAddress = object.contract_address;
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = bytesFromBase64(object.payload);
        }
        if (object.payload_hash !== undefined && object.payload_hash !== null) {
            message.payloadHash = bytesFromBase64(object.payload_hash);
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = Coin.fromAmino(object.asset);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.message_id = message.messageId;
        obj.sender = message.sender;
        obj.source_chain = message.sourceChain;
        obj.destination_chain = message.destinationChain;
        obj.contract_address = message.contractAddress;
        obj.payload = message.payload ? base64FromBytes(message.payload) : undefined;
        obj.payload_hash = message.payloadHash ? base64FromBytes(message.payloadHash) : undefined;
        obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ContractCallWithTokenSubmitted.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ContractCallWithTokenSubmitted.decode(message.value);
    },
    toProto(message) {
        return ContractCallWithTokenSubmitted.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.ContractCallWithTokenSubmitted",
            value: ContractCallWithTokenSubmitted.encode(message).finish()
        };
    }
};
function createBaseTokenSent() {
    return {
        transferId: BigInt(0),
        sender: "",
        sourceChain: "",
        destinationChain: "",
        destinationAddress: "",
        asset: Coin.fromPartial({})
    };
}
export const TokenSent = {
    typeUrl: "/axelar.axelarnet.v1beta1.TokenSent",
    encode(message, writer = BinaryWriter.create()) {
        if (message.transferId !== BigInt(0)) {
            writer.uint32(8).uint64(message.transferId);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        if (message.sourceChain !== "") {
            writer.uint32(26).string(message.sourceChain);
        }
        if (message.destinationChain !== "") {
            writer.uint32(34).string(message.destinationChain);
        }
        if (message.destinationAddress !== "") {
            writer.uint32(42).string(message.destinationAddress);
        }
        if (message.asset !== undefined) {
            Coin.encode(message.asset, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            transferId: isSet(object.transferId) ? BigInt(object.transferId.toString()) : BigInt(0),
            sender: isSet(object.sender) ? String(object.sender) : "",
            sourceChain: isSet(object.sourceChain) ? String(object.sourceChain) : "",
            destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
            destinationAddress: isSet(object.destinationAddress) ? String(object.destinationAddress) : "",
            asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseTokenSent();
        message.transferId = object.transferId !== undefined && object.transferId !== null ? BigInt(object.transferId.toString()) : BigInt(0);
        message.sender = object.sender ?? "";
        message.sourceChain = object.sourceChain ?? "";
        message.destinationChain = object.destinationChain ?? "";
        message.destinationAddress = object.destinationAddress ?? "";
        message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseTokenSent();
        if (object.transfer_id !== undefined && object.transfer_id !== null) {
            message.transferId = BigInt(object.transfer_id);
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.source_chain !== undefined && object.source_chain !== null) {
            message.sourceChain = object.source_chain;
        }
        if (object.destination_chain !== undefined && object.destination_chain !== null) {
            message.destinationChain = object.destination_chain;
        }
        if (object.destination_address !== undefined && object.destination_address !== null) {
            message.destinationAddress = object.destination_address;
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = Coin.fromAmino(object.asset);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.transfer_id = message.transferId ? message.transferId.toString() : undefined;
        obj.sender = message.sender;
        obj.source_chain = message.sourceChain;
        obj.destination_chain = message.destinationChain;
        obj.destination_address = message.destinationAddress;
        obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return TokenSent.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TokenSent.decode(message.value);
    },
    toProto(message) {
        return TokenSent.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.TokenSent",
            value: TokenSent.encode(message).finish()
        };
    }
};
//# sourceMappingURL=events.js.map