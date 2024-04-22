import { PollParticipants } from "../../vote/exported/v1beta1/types";
import { TokenDetails } from "./types";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBasePollFailed() {
    return {
        txId: new Uint8Array(),
        chain: "",
        pollId: BigInt(0)
    };
}
export const PollFailed = {
    typeUrl: "/axelar.evm.v1beta1.PollFailed",
    encode(message, writer = BinaryWriter.create()) {
        if (message.txId.length !== 0) {
            writer.uint32(10).bytes(message.txId);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.pollId !== BigInt(0)) {
            writer.uint32(24).uint64(message.pollId);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            pollId: isSet(object.pollId) ? BigInt(object.pollId.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBasePollFailed();
        message.txId = object.txId ?? new Uint8Array();
        message.chain = object.chain ?? "";
        message.pollId = object.pollId !== undefined && object.pollId !== null ? BigInt(object.pollId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBasePollFailed();
        if (object.tx_id !== undefined && object.tx_id !== null) {
            message.txId = bytesFromBase64(object.tx_id);
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.poll_id !== undefined && object.poll_id !== null) {
            message.pollId = BigInt(object.poll_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tx_id = message.txId ? base64FromBytes(message.txId) : undefined;
        obj.chain = message.chain;
        obj.poll_id = message.pollId ? message.pollId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PollFailed.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PollFailed.decode(message.value);
    },
    toProto(message) {
        return PollFailed.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.PollFailed",
            value: PollFailed.encode(message).finish()
        };
    }
};
function createBasePollExpired() {
    return {
        txId: new Uint8Array(),
        chain: "",
        pollId: BigInt(0)
    };
}
export const PollExpired = {
    typeUrl: "/axelar.evm.v1beta1.PollExpired",
    encode(message, writer = BinaryWriter.create()) {
        if (message.txId.length !== 0) {
            writer.uint32(10).bytes(message.txId);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.pollId !== BigInt(0)) {
            writer.uint32(24).uint64(message.pollId);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            pollId: isSet(object.pollId) ? BigInt(object.pollId.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBasePollExpired();
        message.txId = object.txId ?? new Uint8Array();
        message.chain = object.chain ?? "";
        message.pollId = object.pollId !== undefined && object.pollId !== null ? BigInt(object.pollId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBasePollExpired();
        if (object.tx_id !== undefined && object.tx_id !== null) {
            message.txId = bytesFromBase64(object.tx_id);
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.poll_id !== undefined && object.poll_id !== null) {
            message.pollId = BigInt(object.poll_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tx_id = message.txId ? base64FromBytes(message.txId) : undefined;
        obj.chain = message.chain;
        obj.poll_id = message.pollId ? message.pollId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PollExpired.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PollExpired.decode(message.value);
    },
    toProto(message) {
        return PollExpired.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.PollExpired",
            value: PollExpired.encode(message).finish()
        };
    }
};
function createBasePollCompleted() {
    return {
        txId: new Uint8Array(),
        chain: "",
        pollId: BigInt(0)
    };
}
export const PollCompleted = {
    typeUrl: "/axelar.evm.v1beta1.PollCompleted",
    encode(message, writer = BinaryWriter.create()) {
        if (message.txId.length !== 0) {
            writer.uint32(10).bytes(message.txId);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.pollId !== BigInt(0)) {
            writer.uint32(24).uint64(message.pollId);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            pollId: isSet(object.pollId) ? BigInt(object.pollId.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBasePollCompleted();
        message.txId = object.txId ?? new Uint8Array();
        message.chain = object.chain ?? "";
        message.pollId = object.pollId !== undefined && object.pollId !== null ? BigInt(object.pollId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBasePollCompleted();
        if (object.tx_id !== undefined && object.tx_id !== null) {
            message.txId = bytesFromBase64(object.tx_id);
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.poll_id !== undefined && object.poll_id !== null) {
            message.pollId = BigInt(object.poll_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tx_id = message.txId ? base64FromBytes(message.txId) : undefined;
        obj.chain = message.chain;
        obj.poll_id = message.pollId ? message.pollId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PollCompleted.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PollCompleted.decode(message.value);
    },
    toProto(message) {
        return PollCompleted.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.PollCompleted",
            value: PollCompleted.encode(message).finish()
        };
    }
};
function createBaseNoEventsConfirmed() {
    return {
        txId: new Uint8Array(),
        chain: "",
        pollId: BigInt(0)
    };
}
export const NoEventsConfirmed = {
    typeUrl: "/axelar.evm.v1beta1.NoEventsConfirmed",
    encode(message, writer = BinaryWriter.create()) {
        if (message.txId.length !== 0) {
            writer.uint32(10).bytes(message.txId);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.pollId !== BigInt(0)) {
            writer.uint32(24).uint64(message.pollId);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            pollId: isSet(object.pollId) ? BigInt(object.pollId.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseNoEventsConfirmed();
        message.txId = object.txId ?? new Uint8Array();
        message.chain = object.chain ?? "";
        message.pollId = object.pollId !== undefined && object.pollId !== null ? BigInt(object.pollId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseNoEventsConfirmed();
        if (object.tx_id !== undefined && object.tx_id !== null) {
            message.txId = bytesFromBase64(object.tx_id);
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.poll_id !== undefined && object.poll_id !== null) {
            message.pollId = BigInt(object.poll_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tx_id = message.txId ? base64FromBytes(message.txId) : undefined;
        obj.chain = message.chain;
        obj.poll_id = message.pollId ? message.pollId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return NoEventsConfirmed.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return NoEventsConfirmed.decode(message.value);
    },
    toProto(message) {
        return NoEventsConfirmed.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.NoEventsConfirmed",
            value: NoEventsConfirmed.encode(message).finish()
        };
    }
};
function createBaseConfirmKeyTransferStarted() {
    return {
        chain: "",
        txId: new Uint8Array(),
        gatewayAddress: new Uint8Array(),
        confirmationHeight: BigInt(0),
        participants: PollParticipants.fromPartial({})
    };
}
export const ConfirmKeyTransferStarted = {
    typeUrl: "/axelar.evm.v1beta1.ConfirmKeyTransferStarted",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.txId.length !== 0) {
            writer.uint32(18).bytes(message.txId);
        }
        if (message.gatewayAddress.length !== 0) {
            writer.uint32(26).bytes(message.gatewayAddress);
        }
        if (message.confirmationHeight !== BigInt(0)) {
            writer.uint32(32).uint64(message.confirmationHeight);
        }
        if (message.participants !== undefined) {
            PollParticipants.encode(message.participants, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : "",
            txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
            gatewayAddress: isSet(object.gatewayAddress) ? bytesFromBase64(object.gatewayAddress) : new Uint8Array(),
            confirmationHeight: isSet(object.confirmationHeight) ? BigInt(object.confirmationHeight.toString()) : BigInt(0),
            participants: isSet(object.participants) ? PollParticipants.fromJSON(object.participants) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseConfirmKeyTransferStarted();
        message.chain = object.chain ?? "";
        message.txId = object.txId ?? new Uint8Array();
        message.gatewayAddress = object.gatewayAddress ?? new Uint8Array();
        message.confirmationHeight = object.confirmationHeight !== undefined && object.confirmationHeight !== null ? BigInt(object.confirmationHeight.toString()) : BigInt(0);
        message.participants = object.participants !== undefined && object.participants !== null ? PollParticipants.fromPartial(object.participants) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseConfirmKeyTransferStarted();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.tx_id !== undefined && object.tx_id !== null) {
            message.txId = bytesFromBase64(object.tx_id);
        }
        if (object.gateway_address !== undefined && object.gateway_address !== null) {
            message.gatewayAddress = bytesFromBase64(object.gateway_address);
        }
        if (object.confirmation_height !== undefined && object.confirmation_height !== null) {
            message.confirmationHeight = BigInt(object.confirmation_height);
        }
        if (object.participants !== undefined && object.participants !== null) {
            message.participants = PollParticipants.fromAmino(object.participants);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain;
        obj.tx_id = message.txId ? base64FromBytes(message.txId) : undefined;
        obj.gateway_address = message.gatewayAddress ? base64FromBytes(message.gatewayAddress) : undefined;
        obj.confirmation_height = message.confirmationHeight ? message.confirmationHeight.toString() : undefined;
        obj.participants = message.participants ? PollParticipants.toAmino(message.participants) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ConfirmKeyTransferStarted.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ConfirmKeyTransferStarted.decode(message.value);
    },
    toProto(message) {
        return ConfirmKeyTransferStarted.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.ConfirmKeyTransferStarted",
            value: ConfirmKeyTransferStarted.encode(message).finish()
        };
    }
};
function createBaseConfirmGatewayTxStarted() {
    return {
        txId: new Uint8Array(),
        chain: "",
        gatewayAddress: new Uint8Array(),
        confirmationHeight: BigInt(0),
        participants: PollParticipants.fromPartial({})
    };
}
export const ConfirmGatewayTxStarted = {
    typeUrl: "/axelar.evm.v1beta1.ConfirmGatewayTxStarted",
    encode(message, writer = BinaryWriter.create()) {
        if (message.txId.length !== 0) {
            writer.uint32(10).bytes(message.txId);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.gatewayAddress.length !== 0) {
            writer.uint32(26).bytes(message.gatewayAddress);
        }
        if (message.confirmationHeight !== BigInt(0)) {
            writer.uint32(32).uint64(message.confirmationHeight);
        }
        if (message.participants !== undefined) {
            PollParticipants.encode(message.participants, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            gatewayAddress: isSet(object.gatewayAddress) ? bytesFromBase64(object.gatewayAddress) : new Uint8Array(),
            confirmationHeight: isSet(object.confirmationHeight) ? BigInt(object.confirmationHeight.toString()) : BigInt(0),
            participants: isSet(object.participants) ? PollParticipants.fromJSON(object.participants) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseConfirmGatewayTxStarted();
        message.txId = object.txId ?? new Uint8Array();
        message.chain = object.chain ?? "";
        message.gatewayAddress = object.gatewayAddress ?? new Uint8Array();
        message.confirmationHeight = object.confirmationHeight !== undefined && object.confirmationHeight !== null ? BigInt(object.confirmationHeight.toString()) : BigInt(0);
        message.participants = object.participants !== undefined && object.participants !== null ? PollParticipants.fromPartial(object.participants) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseConfirmGatewayTxStarted();
        if (object.tx_id !== undefined && object.tx_id !== null) {
            message.txId = bytesFromBase64(object.tx_id);
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.gateway_address !== undefined && object.gateway_address !== null) {
            message.gatewayAddress = bytesFromBase64(object.gateway_address);
        }
        if (object.confirmation_height !== undefined && object.confirmation_height !== null) {
            message.confirmationHeight = BigInt(object.confirmation_height);
        }
        if (object.participants !== undefined && object.participants !== null) {
            message.participants = PollParticipants.fromAmino(object.participants);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tx_id = message.txId ? base64FromBytes(message.txId) : undefined;
        obj.chain = message.chain;
        obj.gateway_address = message.gatewayAddress ? base64FromBytes(message.gatewayAddress) : undefined;
        obj.confirmation_height = message.confirmationHeight ? message.confirmationHeight.toString() : undefined;
        obj.participants = message.participants ? PollParticipants.toAmino(message.participants) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ConfirmGatewayTxStarted.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ConfirmGatewayTxStarted.decode(message.value);
    },
    toProto(message) {
        return ConfirmGatewayTxStarted.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.ConfirmGatewayTxStarted",
            value: ConfirmGatewayTxStarted.encode(message).finish()
        };
    }
};
function createBasePollMapping() {
    return {
        txId: new Uint8Array(),
        pollId: BigInt(0)
    };
}
export const PollMapping = {
    typeUrl: "/axelar.evm.v1beta1.PollMapping",
    encode(message, writer = BinaryWriter.create()) {
        if (message.txId.length !== 0) {
            writer.uint32(10).bytes(message.txId);
        }
        if (message.pollId !== BigInt(0)) {
            writer.uint32(16).uint64(message.pollId);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
            pollId: isSet(object.pollId) ? BigInt(object.pollId.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBasePollMapping();
        message.txId = object.txId ?? new Uint8Array();
        message.pollId = object.pollId !== undefined && object.pollId !== null ? BigInt(object.pollId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBasePollMapping();
        if (object.tx_id !== undefined && object.tx_id !== null) {
            message.txId = bytesFromBase64(object.tx_id);
        }
        if (object.poll_id !== undefined && object.poll_id !== null) {
            message.pollId = BigInt(object.poll_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tx_id = message.txId ? base64FromBytes(message.txId) : undefined;
        obj.poll_id = message.pollId ? message.pollId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PollMapping.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PollMapping.decode(message.value);
    },
    toProto(message) {
        return PollMapping.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.PollMapping",
            value: PollMapping.encode(message).finish()
        };
    }
};
function createBaseConfirmGatewayTxsStarted() {
    return {
        pollMappings: [],
        chain: "",
        gatewayAddress: new Uint8Array(),
        confirmationHeight: BigInt(0),
        participants: []
    };
}
export const ConfirmGatewayTxsStarted = {
    typeUrl: "/axelar.evm.v1beta1.ConfirmGatewayTxsStarted",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.pollMappings) {
            PollMapping.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.gatewayAddress.length !== 0) {
            writer.uint32(26).bytes(message.gatewayAddress);
        }
        if (message.confirmationHeight !== BigInt(0)) {
            writer.uint32(32).uint64(message.confirmationHeight);
        }
        for (const v of message.participants) {
            writer.uint32(42).bytes(v);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            pollMappings: Array.isArray(object?.pollMappings) ? object.pollMappings.map((e) => PollMapping.fromJSON(e)) : [],
            chain: isSet(object.chain) ? String(object.chain) : "",
            gatewayAddress: isSet(object.gatewayAddress) ? bytesFromBase64(object.gatewayAddress) : new Uint8Array(),
            confirmationHeight: isSet(object.confirmationHeight) ? BigInt(object.confirmationHeight.toString()) : BigInt(0),
            participants: Array.isArray(object?.participants) ? object.participants.map((e) => bytesFromBase64(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseConfirmGatewayTxsStarted();
        message.pollMappings = object.pollMappings?.map(e => PollMapping.fromPartial(e)) || [];
        message.chain = object.chain ?? "";
        message.gatewayAddress = object.gatewayAddress ?? new Uint8Array();
        message.confirmationHeight = object.confirmationHeight !== undefined && object.confirmationHeight !== null ? BigInt(object.confirmationHeight.toString()) : BigInt(0);
        message.participants = object.participants?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseConfirmGatewayTxsStarted();
        message.pollMappings = object.poll_mappings?.map(e => PollMapping.fromAmino(e)) || [];
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.gateway_address !== undefined && object.gateway_address !== null) {
            message.gatewayAddress = bytesFromBase64(object.gateway_address);
        }
        if (object.confirmation_height !== undefined && object.confirmation_height !== null) {
            message.confirmationHeight = BigInt(object.confirmation_height);
        }
        message.participants = object.participants?.map(e => bytesFromBase64(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.pollMappings) {
            obj.poll_mappings = message.pollMappings.map(e => e ? PollMapping.toAmino(e) : undefined);
        }
        else {
            obj.poll_mappings = [];
        }
        obj.chain = message.chain;
        obj.gateway_address = message.gatewayAddress ? base64FromBytes(message.gatewayAddress) : undefined;
        obj.confirmation_height = message.confirmationHeight ? message.confirmationHeight.toString() : undefined;
        if (message.participants) {
            obj.participants = message.participants.map(e => base64FromBytes(e));
        }
        else {
            obj.participants = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ConfirmGatewayTxsStarted.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ConfirmGatewayTxsStarted.decode(message.value);
    },
    toProto(message) {
        return ConfirmGatewayTxsStarted.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.ConfirmGatewayTxsStarted",
            value: ConfirmGatewayTxsStarted.encode(message).finish()
        };
    }
};
function createBaseConfirmDepositStarted() {
    return {
        txId: new Uint8Array(),
        chain: "",
        depositAddress: new Uint8Array(),
        tokenAddress: new Uint8Array(),
        confirmationHeight: BigInt(0),
        participants: PollParticipants.fromPartial({}),
        asset: ""
    };
}
export const ConfirmDepositStarted = {
    typeUrl: "/axelar.evm.v1beta1.ConfirmDepositStarted",
    encode(message, writer = BinaryWriter.create()) {
        if (message.txId.length !== 0) {
            writer.uint32(10).bytes(message.txId);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.depositAddress.length !== 0) {
            writer.uint32(26).bytes(message.depositAddress);
        }
        if (message.tokenAddress.length !== 0) {
            writer.uint32(34).bytes(message.tokenAddress);
        }
        if (message.confirmationHeight !== BigInt(0)) {
            writer.uint32(40).uint64(message.confirmationHeight);
        }
        if (message.participants !== undefined) {
            PollParticipants.encode(message.participants, writer.uint32(50).fork()).ldelim();
        }
        if (message.asset !== "") {
            writer.uint32(58).string(message.asset);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            depositAddress: isSet(object.depositAddress) ? bytesFromBase64(object.depositAddress) : new Uint8Array(),
            tokenAddress: isSet(object.tokenAddress) ? bytesFromBase64(object.tokenAddress) : new Uint8Array(),
            confirmationHeight: isSet(object.confirmationHeight) ? BigInt(object.confirmationHeight.toString()) : BigInt(0),
            participants: isSet(object.participants) ? PollParticipants.fromJSON(object.participants) : undefined,
            asset: isSet(object.asset) ? String(object.asset) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseConfirmDepositStarted();
        message.txId = object.txId ?? new Uint8Array();
        message.chain = object.chain ?? "";
        message.depositAddress = object.depositAddress ?? new Uint8Array();
        message.tokenAddress = object.tokenAddress ?? new Uint8Array();
        message.confirmationHeight = object.confirmationHeight !== undefined && object.confirmationHeight !== null ? BigInt(object.confirmationHeight.toString()) : BigInt(0);
        message.participants = object.participants !== undefined && object.participants !== null ? PollParticipants.fromPartial(object.participants) : undefined;
        message.asset = object.asset ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseConfirmDepositStarted();
        if (object.tx_id !== undefined && object.tx_id !== null) {
            message.txId = bytesFromBase64(object.tx_id);
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.deposit_address !== undefined && object.deposit_address !== null) {
            message.depositAddress = bytesFromBase64(object.deposit_address);
        }
        if (object.token_address !== undefined && object.token_address !== null) {
            message.tokenAddress = bytesFromBase64(object.token_address);
        }
        if (object.confirmation_height !== undefined && object.confirmation_height !== null) {
            message.confirmationHeight = BigInt(object.confirmation_height);
        }
        if (object.participants !== undefined && object.participants !== null) {
            message.participants = PollParticipants.fromAmino(object.participants);
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = object.asset;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tx_id = message.txId ? base64FromBytes(message.txId) : undefined;
        obj.chain = message.chain;
        obj.deposit_address = message.depositAddress ? base64FromBytes(message.depositAddress) : undefined;
        obj.token_address = message.tokenAddress ? base64FromBytes(message.tokenAddress) : undefined;
        obj.confirmation_height = message.confirmationHeight ? message.confirmationHeight.toString() : undefined;
        obj.participants = message.participants ? PollParticipants.toAmino(message.participants) : undefined;
        obj.asset = message.asset;
        return obj;
    },
    fromAminoMsg(object) {
        return ConfirmDepositStarted.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ConfirmDepositStarted.decode(message.value);
    },
    toProto(message) {
        return ConfirmDepositStarted.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.ConfirmDepositStarted",
            value: ConfirmDepositStarted.encode(message).finish()
        };
    }
};
function createBaseConfirmTokenStarted() {
    return {
        txId: new Uint8Array(),
        chain: "",
        gatewayAddress: new Uint8Array(),
        tokenAddress: new Uint8Array(),
        tokenDetails: TokenDetails.fromPartial({}),
        confirmationHeight: BigInt(0),
        participants: PollParticipants.fromPartial({})
    };
}
export const ConfirmTokenStarted = {
    typeUrl: "/axelar.evm.v1beta1.ConfirmTokenStarted",
    encode(message, writer = BinaryWriter.create()) {
        if (message.txId.length !== 0) {
            writer.uint32(10).bytes(message.txId);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.gatewayAddress.length !== 0) {
            writer.uint32(26).bytes(message.gatewayAddress);
        }
        if (message.tokenAddress.length !== 0) {
            writer.uint32(34).bytes(message.tokenAddress);
        }
        if (message.tokenDetails !== undefined) {
            TokenDetails.encode(message.tokenDetails, writer.uint32(42).fork()).ldelim();
        }
        if (message.confirmationHeight !== BigInt(0)) {
            writer.uint32(48).uint64(message.confirmationHeight);
        }
        if (message.participants !== undefined) {
            PollParticipants.encode(message.participants, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            gatewayAddress: isSet(object.gatewayAddress) ? bytesFromBase64(object.gatewayAddress) : new Uint8Array(),
            tokenAddress: isSet(object.tokenAddress) ? bytesFromBase64(object.tokenAddress) : new Uint8Array(),
            tokenDetails: isSet(object.tokenDetails) ? TokenDetails.fromJSON(object.tokenDetails) : undefined,
            confirmationHeight: isSet(object.confirmationHeight) ? BigInt(object.confirmationHeight.toString()) : BigInt(0),
            participants: isSet(object.participants) ? PollParticipants.fromJSON(object.participants) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseConfirmTokenStarted();
        message.txId = object.txId ?? new Uint8Array();
        message.chain = object.chain ?? "";
        message.gatewayAddress = object.gatewayAddress ?? new Uint8Array();
        message.tokenAddress = object.tokenAddress ?? new Uint8Array();
        message.tokenDetails = object.tokenDetails !== undefined && object.tokenDetails !== null ? TokenDetails.fromPartial(object.tokenDetails) : undefined;
        message.confirmationHeight = object.confirmationHeight !== undefined && object.confirmationHeight !== null ? BigInt(object.confirmationHeight.toString()) : BigInt(0);
        message.participants = object.participants !== undefined && object.participants !== null ? PollParticipants.fromPartial(object.participants) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseConfirmTokenStarted();
        if (object.tx_id !== undefined && object.tx_id !== null) {
            message.txId = bytesFromBase64(object.tx_id);
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.gateway_address !== undefined && object.gateway_address !== null) {
            message.gatewayAddress = bytesFromBase64(object.gateway_address);
        }
        if (object.token_address !== undefined && object.token_address !== null) {
            message.tokenAddress = bytesFromBase64(object.token_address);
        }
        if (object.token_details !== undefined && object.token_details !== null) {
            message.tokenDetails = TokenDetails.fromAmino(object.token_details);
        }
        if (object.confirmation_height !== undefined && object.confirmation_height !== null) {
            message.confirmationHeight = BigInt(object.confirmation_height);
        }
        if (object.participants !== undefined && object.participants !== null) {
            message.participants = PollParticipants.fromAmino(object.participants);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tx_id = message.txId ? base64FromBytes(message.txId) : undefined;
        obj.chain = message.chain;
        obj.gateway_address = message.gatewayAddress ? base64FromBytes(message.gatewayAddress) : undefined;
        obj.token_address = message.tokenAddress ? base64FromBytes(message.tokenAddress) : undefined;
        obj.token_details = message.tokenDetails ? TokenDetails.toAmino(message.tokenDetails) : undefined;
        obj.confirmation_height = message.confirmationHeight ? message.confirmationHeight.toString() : undefined;
        obj.participants = message.participants ? PollParticipants.toAmino(message.participants) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ConfirmTokenStarted.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ConfirmTokenStarted.decode(message.value);
    },
    toProto(message) {
        return ConfirmTokenStarted.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.ConfirmTokenStarted",
            value: ConfirmTokenStarted.encode(message).finish()
        };
    }
};
function createBaseChainAdded() {
    return {
        chain: ""
    };
}
export const ChainAdded = {
    typeUrl: "/axelar.evm.v1beta1.ChainAdded",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseChainAdded();
        message.chain = object.chain ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseChainAdded();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain;
        return obj;
    },
    fromAminoMsg(object) {
        return ChainAdded.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ChainAdded.decode(message.value);
    },
    toProto(message) {
        return ChainAdded.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.ChainAdded",
            value: ChainAdded.encode(message).finish()
        };
    }
};
function createBaseCommandBatchSigned() {
    return {
        chain: "",
        commandBatchId: new Uint8Array()
    };
}
export const CommandBatchSigned = {
    typeUrl: "/axelar.evm.v1beta1.CommandBatchSigned",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.commandBatchId.length !== 0) {
            writer.uint32(26).bytes(message.commandBatchId);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : "",
            commandBatchId: isSet(object.commandBatchId) ? bytesFromBase64(object.commandBatchId) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseCommandBatchSigned();
        message.chain = object.chain ?? "";
        message.commandBatchId = object.commandBatchId ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseCommandBatchSigned();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.command_batch_id !== undefined && object.command_batch_id !== null) {
            message.commandBatchId = bytesFromBase64(object.command_batch_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain;
        obj.command_batch_id = message.commandBatchId ? base64FromBytes(message.commandBatchId) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return CommandBatchSigned.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CommandBatchSigned.decode(message.value);
    },
    toProto(message) {
        return CommandBatchSigned.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.CommandBatchSigned",
            value: CommandBatchSigned.encode(message).finish()
        };
    }
};
function createBaseCommandBatchAborted() {
    return {
        chain: "",
        commandBatchId: new Uint8Array()
    };
}
export const CommandBatchAborted = {
    typeUrl: "/axelar.evm.v1beta1.CommandBatchAborted",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.commandBatchId.length !== 0) {
            writer.uint32(26).bytes(message.commandBatchId);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : "",
            commandBatchId: isSet(object.commandBatchId) ? bytesFromBase64(object.commandBatchId) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseCommandBatchAborted();
        message.chain = object.chain ?? "";
        message.commandBatchId = object.commandBatchId ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseCommandBatchAborted();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.command_batch_id !== undefined && object.command_batch_id !== null) {
            message.commandBatchId = bytesFromBase64(object.command_batch_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain;
        obj.command_batch_id = message.commandBatchId ? base64FromBytes(message.commandBatchId) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return CommandBatchAborted.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CommandBatchAborted.decode(message.value);
    },
    toProto(message) {
        return CommandBatchAborted.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.CommandBatchAborted",
            value: CommandBatchAborted.encode(message).finish()
        };
    }
};
function createBaseEVMEventConfirmed() {
    return {
        chain: "",
        eventId: "",
        type: ""
    };
}
export const EVMEventConfirmed = {
    typeUrl: "/axelar.evm.v1beta1.EVMEventConfirmed",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.eventId !== "") {
            writer.uint32(18).string(message.eventId);
        }
        if (message.type !== "") {
            writer.uint32(26).string(message.type);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : "",
            eventId: isSet(object.eventId) ? String(object.eventId) : "",
            type: isSet(object.type) ? String(object.type) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseEVMEventConfirmed();
        message.chain = object.chain ?? "";
        message.eventId = object.eventId ?? "";
        message.type = object.type ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEVMEventConfirmed();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.event_id !== undefined && object.event_id !== null) {
            message.eventId = object.event_id;
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain;
        obj.event_id = message.eventId;
        obj.type = message.type;
        return obj;
    },
    fromAminoMsg(object) {
        return EVMEventConfirmed.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EVMEventConfirmed.decode(message.value);
    },
    toProto(message) {
        return EVMEventConfirmed.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.EVMEventConfirmed",
            value: EVMEventConfirmed.encode(message).finish()
        };
    }
};
function createBaseEVMEventCompleted() {
    return {
        chain: "",
        eventId: "",
        type: ""
    };
}
export const EVMEventCompleted = {
    typeUrl: "/axelar.evm.v1beta1.EVMEventCompleted",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.eventId !== "") {
            writer.uint32(18).string(message.eventId);
        }
        if (message.type !== "") {
            writer.uint32(26).string(message.type);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : "",
            eventId: isSet(object.eventId) ? String(object.eventId) : "",
            type: isSet(object.type) ? String(object.type) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseEVMEventCompleted();
        message.chain = object.chain ?? "";
        message.eventId = object.eventId ?? "";
        message.type = object.type ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEVMEventCompleted();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.event_id !== undefined && object.event_id !== null) {
            message.eventId = object.event_id;
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain;
        obj.event_id = message.eventId;
        obj.type = message.type;
        return obj;
    },
    fromAminoMsg(object) {
        return EVMEventCompleted.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EVMEventCompleted.decode(message.value);
    },
    toProto(message) {
        return EVMEventCompleted.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.EVMEventCompleted",
            value: EVMEventCompleted.encode(message).finish()
        };
    }
};
function createBaseEVMEventFailed() {
    return {
        chain: "",
        eventId: "",
        type: ""
    };
}
export const EVMEventFailed = {
    typeUrl: "/axelar.evm.v1beta1.EVMEventFailed",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.eventId !== "") {
            writer.uint32(18).string(message.eventId);
        }
        if (message.type !== "") {
            writer.uint32(26).string(message.type);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : "",
            eventId: isSet(object.eventId) ? String(object.eventId) : "",
            type: isSet(object.type) ? String(object.type) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseEVMEventFailed();
        message.chain = object.chain ?? "";
        message.eventId = object.eventId ?? "";
        message.type = object.type ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEVMEventFailed();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.event_id !== undefined && object.event_id !== null) {
            message.eventId = object.event_id;
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain;
        obj.event_id = message.eventId;
        obj.type = message.type;
        return obj;
    },
    fromAminoMsg(object) {
        return EVMEventFailed.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EVMEventFailed.decode(message.value);
    },
    toProto(message) {
        return EVMEventFailed.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.EVMEventFailed",
            value: EVMEventFailed.encode(message).finish()
        };
    }
};
function createBaseEVMEventRetryFailed() {
    return {
        chain: "",
        eventId: "",
        type: ""
    };
}
export const EVMEventRetryFailed = {
    typeUrl: "/axelar.evm.v1beta1.EVMEventRetryFailed",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.eventId !== "") {
            writer.uint32(18).string(message.eventId);
        }
        if (message.type !== "") {
            writer.uint32(26).string(message.type);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : "",
            eventId: isSet(object.eventId) ? String(object.eventId) : "",
            type: isSet(object.type) ? String(object.type) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseEVMEventRetryFailed();
        message.chain = object.chain ?? "";
        message.eventId = object.eventId ?? "";
        message.type = object.type ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEVMEventRetryFailed();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.event_id !== undefined && object.event_id !== null) {
            message.eventId = object.event_id;
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain;
        obj.event_id = message.eventId;
        obj.type = message.type;
        return obj;
    },
    fromAminoMsg(object) {
        return EVMEventRetryFailed.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EVMEventRetryFailed.decode(message.value);
    },
    toProto(message) {
        return EVMEventRetryFailed.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.EVMEventRetryFailed",
            value: EVMEventRetryFailed.encode(message).finish()
        };
    }
};
function createBaseContractCallApproved() {
    return {
        chain: "",
        eventId: "",
        commandId: new Uint8Array(),
        sender: "",
        destinationChain: "",
        contractAddress: "",
        payloadHash: new Uint8Array()
    };
}
export const ContractCallApproved = {
    typeUrl: "/axelar.evm.v1beta1.ContractCallApproved",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.eventId !== "") {
            writer.uint32(18).string(message.eventId);
        }
        if (message.commandId.length !== 0) {
            writer.uint32(26).bytes(message.commandId);
        }
        if (message.sender !== "") {
            writer.uint32(34).string(message.sender);
        }
        if (message.destinationChain !== "") {
            writer.uint32(42).string(message.destinationChain);
        }
        if (message.contractAddress !== "") {
            writer.uint32(50).string(message.contractAddress);
        }
        if (message.payloadHash.length !== 0) {
            writer.uint32(58).bytes(message.payloadHash);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : "",
            eventId: isSet(object.eventId) ? String(object.eventId) : "",
            commandId: isSet(object.commandId) ? bytesFromBase64(object.commandId) : new Uint8Array(),
            sender: isSet(object.sender) ? String(object.sender) : "",
            destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            payloadHash: isSet(object.payloadHash) ? bytesFromBase64(object.payloadHash) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseContractCallApproved();
        message.chain = object.chain ?? "";
        message.eventId = object.eventId ?? "";
        message.commandId = object.commandId ?? new Uint8Array();
        message.sender = object.sender ?? "";
        message.destinationChain = object.destinationChain ?? "";
        message.contractAddress = object.contractAddress ?? "";
        message.payloadHash = object.payloadHash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseContractCallApproved();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.event_id !== undefined && object.event_id !== null) {
            message.eventId = object.event_id;
        }
        if (object.command_id !== undefined && object.command_id !== null) {
            message.commandId = bytesFromBase64(object.command_id);
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.destination_chain !== undefined && object.destination_chain !== null) {
            message.destinationChain = object.destination_chain;
        }
        if (object.contract_address !== undefined && object.contract_address !== null) {
            message.contractAddress = object.contract_address;
        }
        if (object.payload_hash !== undefined && object.payload_hash !== null) {
            message.payloadHash = bytesFromBase64(object.payload_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain;
        obj.event_id = message.eventId;
        obj.command_id = message.commandId ? base64FromBytes(message.commandId) : undefined;
        obj.sender = message.sender;
        obj.destination_chain = message.destinationChain;
        obj.contract_address = message.contractAddress;
        obj.payload_hash = message.payloadHash ? base64FromBytes(message.payloadHash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ContractCallApproved.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ContractCallApproved.decode(message.value);
    },
    toProto(message) {
        return ContractCallApproved.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.ContractCallApproved",
            value: ContractCallApproved.encode(message).finish()
        };
    }
};
function createBaseContractCallFailed() {
    return {
        chain: "",
        msgId: ""
    };
}
export const ContractCallFailed = {
    typeUrl: "/axelar.evm.v1beta1.ContractCallFailed",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.msgId !== "") {
            writer.uint32(18).string(message.msgId);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : "",
            msgId: isSet(object.msgId) ? String(object.msgId) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseContractCallFailed();
        message.chain = object.chain ?? "";
        message.msgId = object.msgId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseContractCallFailed();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.msg_id !== undefined && object.msg_id !== null) {
            message.msgId = object.msg_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain;
        obj.msg_id = message.msgId;
        return obj;
    },
    fromAminoMsg(object) {
        return ContractCallFailed.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ContractCallFailed.decode(message.value);
    },
    toProto(message) {
        return ContractCallFailed.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.ContractCallFailed",
            value: ContractCallFailed.encode(message).finish()
        };
    }
};
function createBaseContractCallWithMintApproved() {
    return {
        chain: "",
        eventId: "",
        commandId: new Uint8Array(),
        sender: "",
        destinationChain: "",
        contractAddress: "",
        payloadHash: new Uint8Array(),
        asset: Coin.fromPartial({})
    };
}
export const ContractCallWithMintApproved = {
    typeUrl: "/axelar.evm.v1beta1.ContractCallWithMintApproved",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.eventId !== "") {
            writer.uint32(18).string(message.eventId);
        }
        if (message.commandId.length !== 0) {
            writer.uint32(26).bytes(message.commandId);
        }
        if (message.sender !== "") {
            writer.uint32(34).string(message.sender);
        }
        if (message.destinationChain !== "") {
            writer.uint32(42).string(message.destinationChain);
        }
        if (message.contractAddress !== "") {
            writer.uint32(50).string(message.contractAddress);
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
            chain: isSet(object.chain) ? String(object.chain) : "",
            eventId: isSet(object.eventId) ? String(object.eventId) : "",
            commandId: isSet(object.commandId) ? bytesFromBase64(object.commandId) : new Uint8Array(),
            sender: isSet(object.sender) ? String(object.sender) : "",
            destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            payloadHash: isSet(object.payloadHash) ? bytesFromBase64(object.payloadHash) : new Uint8Array(),
            asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseContractCallWithMintApproved();
        message.chain = object.chain ?? "";
        message.eventId = object.eventId ?? "";
        message.commandId = object.commandId ?? new Uint8Array();
        message.sender = object.sender ?? "";
        message.destinationChain = object.destinationChain ?? "";
        message.contractAddress = object.contractAddress ?? "";
        message.payloadHash = object.payloadHash ?? new Uint8Array();
        message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseContractCallWithMintApproved();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.event_id !== undefined && object.event_id !== null) {
            message.eventId = object.event_id;
        }
        if (object.command_id !== undefined && object.command_id !== null) {
            message.commandId = bytesFromBase64(object.command_id);
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.destination_chain !== undefined && object.destination_chain !== null) {
            message.destinationChain = object.destination_chain;
        }
        if (object.contract_address !== undefined && object.contract_address !== null) {
            message.contractAddress = object.contract_address;
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
        obj.chain = message.chain;
        obj.event_id = message.eventId;
        obj.command_id = message.commandId ? base64FromBytes(message.commandId) : undefined;
        obj.sender = message.sender;
        obj.destination_chain = message.destinationChain;
        obj.contract_address = message.contractAddress;
        obj.payload_hash = message.payloadHash ? base64FromBytes(message.payloadHash) : undefined;
        obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ContractCallWithMintApproved.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ContractCallWithMintApproved.decode(message.value);
    },
    toProto(message) {
        return ContractCallWithMintApproved.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.ContractCallWithMintApproved",
            value: ContractCallWithMintApproved.encode(message).finish()
        };
    }
};
function createBaseTokenSent() {
    return {
        chain: "",
        eventId: "",
        transferId: BigInt(0),
        sender: "",
        destinationChain: "",
        destinationAddress: "",
        asset: Coin.fromPartial({})
    };
}
export const TokenSent = {
    typeUrl: "/axelar.evm.v1beta1.TokenSent",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.eventId !== "") {
            writer.uint32(18).string(message.eventId);
        }
        if (message.transferId !== BigInt(0)) {
            writer.uint32(24).uint64(message.transferId);
        }
        if (message.sender !== "") {
            writer.uint32(34).string(message.sender);
        }
        if (message.destinationChain !== "") {
            writer.uint32(42).string(message.destinationChain);
        }
        if (message.destinationAddress !== "") {
            writer.uint32(50).string(message.destinationAddress);
        }
        if (message.asset !== undefined) {
            Coin.encode(message.asset, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : "",
            eventId: isSet(object.eventId) ? String(object.eventId) : "",
            transferId: isSet(object.transferId) ? BigInt(object.transferId.toString()) : BigInt(0),
            sender: isSet(object.sender) ? String(object.sender) : "",
            destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
            destinationAddress: isSet(object.destinationAddress) ? String(object.destinationAddress) : "",
            asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseTokenSent();
        message.chain = object.chain ?? "";
        message.eventId = object.eventId ?? "";
        message.transferId = object.transferId !== undefined && object.transferId !== null ? BigInt(object.transferId.toString()) : BigInt(0);
        message.sender = object.sender ?? "";
        message.destinationChain = object.destinationChain ?? "";
        message.destinationAddress = object.destinationAddress ?? "";
        message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseTokenSent();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.event_id !== undefined && object.event_id !== null) {
            message.eventId = object.event_id;
        }
        if (object.transfer_id !== undefined && object.transfer_id !== null) {
            message.transferId = BigInt(object.transfer_id);
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
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
        obj.chain = message.chain;
        obj.event_id = message.eventId;
        obj.transfer_id = message.transferId ? message.transferId.toString() : undefined;
        obj.sender = message.sender;
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
            typeUrl: "/axelar.evm.v1beta1.TokenSent",
            value: TokenSent.encode(message).finish()
        };
    }
};
function createBaseMintCommand() {
    return {
        chain: "",
        transferId: BigInt(0),
        commandId: new Uint8Array(),
        destinationChain: "",
        destinationAddress: "",
        asset: Coin.fromPartial({})
    };
}
export const MintCommand = {
    typeUrl: "/axelar.evm.v1beta1.MintCommand",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.transferId !== BigInt(0)) {
            writer.uint32(16).uint64(message.transferId);
        }
        if (message.commandId.length !== 0) {
            writer.uint32(26).bytes(message.commandId);
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
            chain: isSet(object.chain) ? String(object.chain) : "",
            transferId: isSet(object.transferId) ? BigInt(object.transferId.toString()) : BigInt(0),
            commandId: isSet(object.commandId) ? bytesFromBase64(object.commandId) : new Uint8Array(),
            destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
            destinationAddress: isSet(object.destinationAddress) ? String(object.destinationAddress) : "",
            asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseMintCommand();
        message.chain = object.chain ?? "";
        message.transferId = object.transferId !== undefined && object.transferId !== null ? BigInt(object.transferId.toString()) : BigInt(0);
        message.commandId = object.commandId ?? new Uint8Array();
        message.destinationChain = object.destinationChain ?? "";
        message.destinationAddress = object.destinationAddress ?? "";
        message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMintCommand();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.transfer_id !== undefined && object.transfer_id !== null) {
            message.transferId = BigInt(object.transfer_id);
        }
        if (object.command_id !== undefined && object.command_id !== null) {
            message.commandId = bytesFromBase64(object.command_id);
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
        obj.chain = message.chain;
        obj.transfer_id = message.transferId ? message.transferId.toString() : undefined;
        obj.command_id = message.commandId ? base64FromBytes(message.commandId) : undefined;
        obj.destination_chain = message.destinationChain;
        obj.destination_address = message.destinationAddress;
        obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MintCommand.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MintCommand.decode(message.value);
    },
    toProto(message) {
        return MintCommand.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.MintCommand",
            value: MintCommand.encode(message).finish()
        };
    }
};
function createBaseBurnCommand() {
    return {
        chain: "",
        commandId: new Uint8Array(),
        destinationChain: "",
        depositAddress: "",
        asset: ""
    };
}
export const BurnCommand = {
    typeUrl: "/axelar.evm.v1beta1.BurnCommand",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.commandId.length !== 0) {
            writer.uint32(18).bytes(message.commandId);
        }
        if (message.destinationChain !== "") {
            writer.uint32(26).string(message.destinationChain);
        }
        if (message.depositAddress !== "") {
            writer.uint32(34).string(message.depositAddress);
        }
        if (message.asset !== "") {
            writer.uint32(42).string(message.asset);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : "",
            commandId: isSet(object.commandId) ? bytesFromBase64(object.commandId) : new Uint8Array(),
            destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
            depositAddress: isSet(object.depositAddress) ? String(object.depositAddress) : "",
            asset: isSet(object.asset) ? String(object.asset) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseBurnCommand();
        message.chain = object.chain ?? "";
        message.commandId = object.commandId ?? new Uint8Array();
        message.destinationChain = object.destinationChain ?? "";
        message.depositAddress = object.depositAddress ?? "";
        message.asset = object.asset ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseBurnCommand();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.command_id !== undefined && object.command_id !== null) {
            message.commandId = bytesFromBase64(object.command_id);
        }
        if (object.destination_chain !== undefined && object.destination_chain !== null) {
            message.destinationChain = object.destination_chain;
        }
        if (object.deposit_address !== undefined && object.deposit_address !== null) {
            message.depositAddress = object.deposit_address;
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = object.asset;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain;
        obj.command_id = message.commandId ? base64FromBytes(message.commandId) : undefined;
        obj.destination_chain = message.destinationChain;
        obj.deposit_address = message.depositAddress;
        obj.asset = message.asset;
        return obj;
    },
    fromAminoMsg(object) {
        return BurnCommand.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BurnCommand.decode(message.value);
    },
    toProto(message) {
        return BurnCommand.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.BurnCommand",
            value: BurnCommand.encode(message).finish()
        };
    }
};
//# sourceMappingURL=events.js.map