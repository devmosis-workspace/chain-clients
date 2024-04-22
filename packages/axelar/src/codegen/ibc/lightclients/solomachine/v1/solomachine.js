import { Any } from "../../../../google/protobuf/any";
import { ConnectionEnd } from "../../../core/connection/v1/connection";
import { Channel } from "../../../core/channel/v1/channel";
import { BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
/**
 * DataType defines the type of solo machine proof being created. This is done
 * to preserve uniqueness of different data sign byte encodings.
 */
export var DataType;
(function (DataType) {
    /** DATA_TYPE_UNINITIALIZED_UNSPECIFIED - Default State */
    DataType[DataType["DATA_TYPE_UNINITIALIZED_UNSPECIFIED"] = 0] = "DATA_TYPE_UNINITIALIZED_UNSPECIFIED";
    /** DATA_TYPE_CLIENT_STATE - Data type for client state verification */
    DataType[DataType["DATA_TYPE_CLIENT_STATE"] = 1] = "DATA_TYPE_CLIENT_STATE";
    /** DATA_TYPE_CONSENSUS_STATE - Data type for consensus state verification */
    DataType[DataType["DATA_TYPE_CONSENSUS_STATE"] = 2] = "DATA_TYPE_CONSENSUS_STATE";
    /** DATA_TYPE_CONNECTION_STATE - Data type for connection state verification */
    DataType[DataType["DATA_TYPE_CONNECTION_STATE"] = 3] = "DATA_TYPE_CONNECTION_STATE";
    /** DATA_TYPE_CHANNEL_STATE - Data type for channel state verification */
    DataType[DataType["DATA_TYPE_CHANNEL_STATE"] = 4] = "DATA_TYPE_CHANNEL_STATE";
    /** DATA_TYPE_PACKET_COMMITMENT - Data type for packet commitment verification */
    DataType[DataType["DATA_TYPE_PACKET_COMMITMENT"] = 5] = "DATA_TYPE_PACKET_COMMITMENT";
    /** DATA_TYPE_PACKET_ACKNOWLEDGEMENT - Data type for packet acknowledgement verification */
    DataType[DataType["DATA_TYPE_PACKET_ACKNOWLEDGEMENT"] = 6] = "DATA_TYPE_PACKET_ACKNOWLEDGEMENT";
    /** DATA_TYPE_PACKET_RECEIPT_ABSENCE - Data type for packet receipt absence verification */
    DataType[DataType["DATA_TYPE_PACKET_RECEIPT_ABSENCE"] = 7] = "DATA_TYPE_PACKET_RECEIPT_ABSENCE";
    /** DATA_TYPE_NEXT_SEQUENCE_RECV - Data type for next sequence recv verification */
    DataType[DataType["DATA_TYPE_NEXT_SEQUENCE_RECV"] = 8] = "DATA_TYPE_NEXT_SEQUENCE_RECV";
    /** DATA_TYPE_HEADER - Data type for header verification */
    DataType[DataType["DATA_TYPE_HEADER"] = 9] = "DATA_TYPE_HEADER";
    DataType[DataType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(DataType || (DataType = {}));
export const DataTypeSDKType = DataType;
export const DataTypeAmino = DataType;
export function dataTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "DATA_TYPE_UNINITIALIZED_UNSPECIFIED":
            return DataType.DATA_TYPE_UNINITIALIZED_UNSPECIFIED;
        case 1:
        case "DATA_TYPE_CLIENT_STATE":
            return DataType.DATA_TYPE_CLIENT_STATE;
        case 2:
        case "DATA_TYPE_CONSENSUS_STATE":
            return DataType.DATA_TYPE_CONSENSUS_STATE;
        case 3:
        case "DATA_TYPE_CONNECTION_STATE":
            return DataType.DATA_TYPE_CONNECTION_STATE;
        case 4:
        case "DATA_TYPE_CHANNEL_STATE":
            return DataType.DATA_TYPE_CHANNEL_STATE;
        case 5:
        case "DATA_TYPE_PACKET_COMMITMENT":
            return DataType.DATA_TYPE_PACKET_COMMITMENT;
        case 6:
        case "DATA_TYPE_PACKET_ACKNOWLEDGEMENT":
            return DataType.DATA_TYPE_PACKET_ACKNOWLEDGEMENT;
        case 7:
        case "DATA_TYPE_PACKET_RECEIPT_ABSENCE":
            return DataType.DATA_TYPE_PACKET_RECEIPT_ABSENCE;
        case 8:
        case "DATA_TYPE_NEXT_SEQUENCE_RECV":
            return DataType.DATA_TYPE_NEXT_SEQUENCE_RECV;
        case 9:
        case "DATA_TYPE_HEADER":
            return DataType.DATA_TYPE_HEADER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return DataType.UNRECOGNIZED;
    }
}
export function dataTypeToJSON(object) {
    switch (object) {
        case DataType.DATA_TYPE_UNINITIALIZED_UNSPECIFIED:
            return "DATA_TYPE_UNINITIALIZED_UNSPECIFIED";
        case DataType.DATA_TYPE_CLIENT_STATE:
            return "DATA_TYPE_CLIENT_STATE";
        case DataType.DATA_TYPE_CONSENSUS_STATE:
            return "DATA_TYPE_CONSENSUS_STATE";
        case DataType.DATA_TYPE_CONNECTION_STATE:
            return "DATA_TYPE_CONNECTION_STATE";
        case DataType.DATA_TYPE_CHANNEL_STATE:
            return "DATA_TYPE_CHANNEL_STATE";
        case DataType.DATA_TYPE_PACKET_COMMITMENT:
            return "DATA_TYPE_PACKET_COMMITMENT";
        case DataType.DATA_TYPE_PACKET_ACKNOWLEDGEMENT:
            return "DATA_TYPE_PACKET_ACKNOWLEDGEMENT";
        case DataType.DATA_TYPE_PACKET_RECEIPT_ABSENCE:
            return "DATA_TYPE_PACKET_RECEIPT_ABSENCE";
        case DataType.DATA_TYPE_NEXT_SEQUENCE_RECV:
            return "DATA_TYPE_NEXT_SEQUENCE_RECV";
        case DataType.DATA_TYPE_HEADER:
            return "DATA_TYPE_HEADER";
        case DataType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseClientState() {
    return {
        sequence: BigInt(0),
        frozenSequence: BigInt(0),
        consensusState: undefined,
        allowUpdateAfterProposal: false
    };
}
export const ClientState = {
    typeUrl: "/ibc.lightclients.solomachine.v1.ClientState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sequence !== BigInt(0)) {
            writer.uint32(8).uint64(message.sequence);
        }
        if (message.frozenSequence !== BigInt(0)) {
            writer.uint32(16).uint64(message.frozenSequence);
        }
        if (message.consensusState !== undefined) {
            ConsensusState.encode(message.consensusState, writer.uint32(26).fork()).ldelim();
        }
        if (message.allowUpdateAfterProposal === true) {
            writer.uint32(32).bool(message.allowUpdateAfterProposal);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0),
            frozenSequence: isSet(object.frozenSequence) ? BigInt(object.frozenSequence.toString()) : BigInt(0),
            consensusState: isSet(object.consensusState) ? ConsensusState.fromJSON(object.consensusState) : undefined,
            allowUpdateAfterProposal: isSet(object.allowUpdateAfterProposal) ? Boolean(object.allowUpdateAfterProposal) : false
        };
    },
    fromPartial(object) {
        const message = createBaseClientState();
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        message.frozenSequence = object.frozenSequence !== undefined && object.frozenSequence !== null ? BigInt(object.frozenSequence.toString()) : BigInt(0);
        message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? ConsensusState.fromPartial(object.consensusState) : undefined;
        message.allowUpdateAfterProposal = object.allowUpdateAfterProposal ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseClientState();
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        if (object.frozen_sequence !== undefined && object.frozen_sequence !== null) {
            message.frozenSequence = BigInt(object.frozen_sequence);
        }
        if (object.consensus_state !== undefined && object.consensus_state !== null) {
            message.consensusState = ConsensusState.fromAmino(object.consensus_state);
        }
        if (object.allow_update_after_proposal !== undefined && object.allow_update_after_proposal !== null) {
            message.allowUpdateAfterProposal = object.allow_update_after_proposal;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.frozen_sequence = message.frozenSequence ? message.frozenSequence.toString() : undefined;
        obj.consensus_state = message.consensusState ? ConsensusState.toAmino(message.consensusState) : undefined;
        obj.allow_update_after_proposal = message.allowUpdateAfterProposal;
        return obj;
    },
    fromAminoMsg(object) {
        return ClientState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ClientState",
            value: ClientState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ClientState.decode(message.value);
    },
    toProto(message) {
        return ClientState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.ClientState",
            value: ClientState.encode(message).finish()
        };
    }
};
function createBaseConsensusState() {
    return {
        publicKey: undefined,
        diversifier: "",
        timestamp: BigInt(0)
    };
}
export const ConsensusState = {
    typeUrl: "/ibc.lightclients.solomachine.v1.ConsensusState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.publicKey !== undefined) {
            Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.diversifier !== "") {
            writer.uint32(18).string(message.diversifier);
        }
        if (message.timestamp !== BigInt(0)) {
            writer.uint32(24).uint64(message.timestamp);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            publicKey: isSet(object.publicKey) ? Any.fromJSON(object.publicKey) : undefined,
            diversifier: isSet(object.diversifier) ? String(object.diversifier) : "",
            timestamp: isSet(object.timestamp) ? BigInt(object.timestamp.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseConsensusState();
        message.publicKey = object.publicKey !== undefined && object.publicKey !== null ? Any.fromPartial(object.publicKey) : undefined;
        message.diversifier = object.diversifier ?? "";
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseConsensusState();
        if (object.public_key !== undefined && object.public_key !== null) {
            message.publicKey = Any.fromAmino(object.public_key);
        }
        if (object.diversifier !== undefined && object.diversifier !== null) {
            message.diversifier = object.diversifier;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = BigInt(object.timestamp);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.public_key = message.publicKey ? Any.toAmino(message.publicKey) : undefined;
        obj.diversifier = message.diversifier;
        obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ConsensusState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConsensusState",
            value: ConsensusState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ConsensusState.decode(message.value);
    },
    toProto(message) {
        return ConsensusState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.ConsensusState",
            value: ConsensusState.encode(message).finish()
        };
    }
};
function createBaseHeader() {
    return {
        sequence: BigInt(0),
        timestamp: BigInt(0),
        signature: new Uint8Array(),
        newPublicKey: undefined,
        newDiversifier: ""
    };
}
export const Header = {
    typeUrl: "/ibc.lightclients.solomachine.v1.Header",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sequence !== BigInt(0)) {
            writer.uint32(8).uint64(message.sequence);
        }
        if (message.timestamp !== BigInt(0)) {
            writer.uint32(16).uint64(message.timestamp);
        }
        if (message.signature.length !== 0) {
            writer.uint32(26).bytes(message.signature);
        }
        if (message.newPublicKey !== undefined) {
            Any.encode(message.newPublicKey, writer.uint32(34).fork()).ldelim();
        }
        if (message.newDiversifier !== "") {
            writer.uint32(42).string(message.newDiversifier);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0),
            timestamp: isSet(object.timestamp) ? BigInt(object.timestamp.toString()) : BigInt(0),
            signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
            newPublicKey: isSet(object.newPublicKey) ? Any.fromJSON(object.newPublicKey) : undefined,
            newDiversifier: isSet(object.newDiversifier) ? String(object.newDiversifier) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseHeader();
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
        message.signature = object.signature ?? new Uint8Array();
        message.newPublicKey = object.newPublicKey !== undefined && object.newPublicKey !== null ? Any.fromPartial(object.newPublicKey) : undefined;
        message.newDiversifier = object.newDiversifier ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseHeader();
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = BigInt(object.timestamp);
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = bytesFromBase64(object.signature);
        }
        if (object.new_public_key !== undefined && object.new_public_key !== null) {
            message.newPublicKey = Any.fromAmino(object.new_public_key);
        }
        if (object.new_diversifier !== undefined && object.new_diversifier !== null) {
            message.newDiversifier = object.new_diversifier;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
        obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
        obj.new_public_key = message.newPublicKey ? Any.toAmino(message.newPublicKey) : undefined;
        obj.new_diversifier = message.newDiversifier;
        return obj;
    },
    fromAminoMsg(object) {
        return Header.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Header",
            value: Header.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Header.decode(message.value);
    },
    toProto(message) {
        return Header.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.Header",
            value: Header.encode(message).finish()
        };
    }
};
function createBaseMisbehaviour() {
    return {
        clientId: "",
        sequence: BigInt(0),
        signatureOne: undefined,
        signatureTwo: undefined
    };
}
export const Misbehaviour = {
    typeUrl: "/ibc.lightclients.solomachine.v1.Misbehaviour",
    encode(message, writer = BinaryWriter.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.sequence !== BigInt(0)) {
            writer.uint32(16).uint64(message.sequence);
        }
        if (message.signatureOne !== undefined) {
            SignatureAndData.encode(message.signatureOne, writer.uint32(26).fork()).ldelim();
        }
        if (message.signatureTwo !== undefined) {
            SignatureAndData.encode(message.signatureTwo, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0),
            signatureOne: isSet(object.signatureOne) ? SignatureAndData.fromJSON(object.signatureOne) : undefined,
            signatureTwo: isSet(object.signatureTwo) ? SignatureAndData.fromJSON(object.signatureTwo) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseMisbehaviour();
        message.clientId = object.clientId ?? "";
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        message.signatureOne = object.signatureOne !== undefined && object.signatureOne !== null ? SignatureAndData.fromPartial(object.signatureOne) : undefined;
        message.signatureTwo = object.signatureTwo !== undefined && object.signatureTwo !== null ? SignatureAndData.fromPartial(object.signatureTwo) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMisbehaviour();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.clientId = object.client_id;
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        if (object.signature_one !== undefined && object.signature_one !== null) {
            message.signatureOne = SignatureAndData.fromAmino(object.signature_one);
        }
        if (object.signature_two !== undefined && object.signature_two !== null) {
            message.signatureTwo = SignatureAndData.fromAmino(object.signature_two);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.clientId;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.signature_one = message.signatureOne ? SignatureAndData.toAmino(message.signatureOne) : undefined;
        obj.signature_two = message.signatureTwo ? SignatureAndData.toAmino(message.signatureTwo) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Misbehaviour.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Misbehaviour",
            value: Misbehaviour.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Misbehaviour.decode(message.value);
    },
    toProto(message) {
        return Misbehaviour.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.Misbehaviour",
            value: Misbehaviour.encode(message).finish()
        };
    }
};
function createBaseSignatureAndData() {
    return {
        signature: new Uint8Array(),
        dataType: 0,
        data: new Uint8Array(),
        timestamp: BigInt(0)
    };
}
export const SignatureAndData = {
    typeUrl: "/ibc.lightclients.solomachine.v1.SignatureAndData",
    encode(message, writer = BinaryWriter.create()) {
        if (message.signature.length !== 0) {
            writer.uint32(10).bytes(message.signature);
        }
        if (message.dataType !== 0) {
            writer.uint32(16).int32(message.dataType);
        }
        if (message.data.length !== 0) {
            writer.uint32(26).bytes(message.data);
        }
        if (message.timestamp !== BigInt(0)) {
            writer.uint32(32).uint64(message.timestamp);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
            dataType: isSet(object.dataType) ? dataTypeFromJSON(object.dataType) : -1,
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
            timestamp: isSet(object.timestamp) ? BigInt(object.timestamp.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseSignatureAndData();
        message.signature = object.signature ?? new Uint8Array();
        message.dataType = object.dataType ?? 0;
        message.data = object.data ?? new Uint8Array();
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseSignatureAndData();
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = bytesFromBase64(object.signature);
        }
        if (object.data_type !== undefined && object.data_type !== null) {
            message.dataType = dataTypeFromJSON(object.data_type);
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = BigInt(object.timestamp);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
        obj.data_type = message.dataType;
        obj.data = message.data ? base64FromBytes(message.data) : undefined;
        obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SignatureAndData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SignatureAndData",
            value: SignatureAndData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SignatureAndData.decode(message.value);
    },
    toProto(message) {
        return SignatureAndData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.SignatureAndData",
            value: SignatureAndData.encode(message).finish()
        };
    }
};
function createBaseTimestampedSignatureData() {
    return {
        signatureData: new Uint8Array(),
        timestamp: BigInt(0)
    };
}
export const TimestampedSignatureData = {
    typeUrl: "/ibc.lightclients.solomachine.v1.TimestampedSignatureData",
    encode(message, writer = BinaryWriter.create()) {
        if (message.signatureData.length !== 0) {
            writer.uint32(10).bytes(message.signatureData);
        }
        if (message.timestamp !== BigInt(0)) {
            writer.uint32(16).uint64(message.timestamp);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            signatureData: isSet(object.signatureData) ? bytesFromBase64(object.signatureData) : new Uint8Array(),
            timestamp: isSet(object.timestamp) ? BigInt(object.timestamp.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseTimestampedSignatureData();
        message.signatureData = object.signatureData ?? new Uint8Array();
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseTimestampedSignatureData();
        if (object.signature_data !== undefined && object.signature_data !== null) {
            message.signatureData = bytesFromBase64(object.signature_data);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = BigInt(object.timestamp);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.signature_data = message.signatureData ? base64FromBytes(message.signatureData) : undefined;
        obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return TimestampedSignatureData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TimestampedSignatureData",
            value: TimestampedSignatureData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return TimestampedSignatureData.decode(message.value);
    },
    toProto(message) {
        return TimestampedSignatureData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.TimestampedSignatureData",
            value: TimestampedSignatureData.encode(message).finish()
        };
    }
};
function createBaseSignBytes() {
    return {
        sequence: BigInt(0),
        timestamp: BigInt(0),
        diversifier: "",
        dataType: 0,
        data: new Uint8Array()
    };
}
export const SignBytes = {
    typeUrl: "/ibc.lightclients.solomachine.v1.SignBytes",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sequence !== BigInt(0)) {
            writer.uint32(8).uint64(message.sequence);
        }
        if (message.timestamp !== BigInt(0)) {
            writer.uint32(16).uint64(message.timestamp);
        }
        if (message.diversifier !== "") {
            writer.uint32(26).string(message.diversifier);
        }
        if (message.dataType !== 0) {
            writer.uint32(32).int32(message.dataType);
        }
        if (message.data.length !== 0) {
            writer.uint32(42).bytes(message.data);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0),
            timestamp: isSet(object.timestamp) ? BigInt(object.timestamp.toString()) : BigInt(0),
            diversifier: isSet(object.diversifier) ? String(object.diversifier) : "",
            dataType: isSet(object.dataType) ? dataTypeFromJSON(object.dataType) : -1,
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseSignBytes();
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
        message.diversifier = object.diversifier ?? "";
        message.dataType = object.dataType ?? 0;
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseSignBytes();
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = BigInt(object.timestamp);
        }
        if (object.diversifier !== undefined && object.diversifier !== null) {
            message.diversifier = object.diversifier;
        }
        if (object.data_type !== undefined && object.data_type !== null) {
            message.dataType = dataTypeFromJSON(object.data_type);
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
        obj.diversifier = message.diversifier;
        obj.data_type = message.dataType;
        obj.data = message.data ? base64FromBytes(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SignBytes.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SignBytes",
            value: SignBytes.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SignBytes.decode(message.value);
    },
    toProto(message) {
        return SignBytes.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.SignBytes",
            value: SignBytes.encode(message).finish()
        };
    }
};
function createBaseHeaderData() {
    return {
        newPubKey: undefined,
        newDiversifier: ""
    };
}
export const HeaderData = {
    typeUrl: "/ibc.lightclients.solomachine.v1.HeaderData",
    encode(message, writer = BinaryWriter.create()) {
        if (message.newPubKey !== undefined) {
            Any.encode(message.newPubKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.newDiversifier !== "") {
            writer.uint32(18).string(message.newDiversifier);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            newPubKey: isSet(object.newPubKey) ? Any.fromJSON(object.newPubKey) : undefined,
            newDiversifier: isSet(object.newDiversifier) ? String(object.newDiversifier) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseHeaderData();
        message.newPubKey = object.newPubKey !== undefined && object.newPubKey !== null ? Any.fromPartial(object.newPubKey) : undefined;
        message.newDiversifier = object.newDiversifier ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseHeaderData();
        if (object.new_pub_key !== undefined && object.new_pub_key !== null) {
            message.newPubKey = Any.fromAmino(object.new_pub_key);
        }
        if (object.new_diversifier !== undefined && object.new_diversifier !== null) {
            message.newDiversifier = object.new_diversifier;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.new_pub_key = message.newPubKey ? Any.toAmino(message.newPubKey) : undefined;
        obj.new_diversifier = message.newDiversifier;
        return obj;
    },
    fromAminoMsg(object) {
        return HeaderData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/HeaderData",
            value: HeaderData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return HeaderData.decode(message.value);
    },
    toProto(message) {
        return HeaderData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.HeaderData",
            value: HeaderData.encode(message).finish()
        };
    }
};
function createBaseClientStateData() {
    return {
        path: new Uint8Array(),
        clientState: undefined
    };
}
export const ClientStateData = {
    typeUrl: "/ibc.lightclients.solomachine.v1.ClientStateData",
    encode(message, writer = BinaryWriter.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.clientState !== undefined) {
            Any.encode(message.clientState, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(),
            clientState: isSet(object.clientState) ? Any.fromJSON(object.clientState) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseClientStateData();
        message.path = object.path ?? new Uint8Array();
        message.clientState = object.clientState !== undefined && object.clientState !== null ? Any.fromPartial(object.clientState) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseClientStateData();
        if (object.path !== undefined && object.path !== null) {
            message.path = bytesFromBase64(object.path);
        }
        if (object.client_state !== undefined && object.client_state !== null) {
            message.clientState = Any.fromAmino(object.client_state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path ? base64FromBytes(message.path) : undefined;
        obj.client_state = message.clientState ? Any.toAmino(message.clientState) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ClientStateData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ClientStateData",
            value: ClientStateData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ClientStateData.decode(message.value);
    },
    toProto(message) {
        return ClientStateData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.ClientStateData",
            value: ClientStateData.encode(message).finish()
        };
    }
};
function createBaseConsensusStateData() {
    return {
        path: new Uint8Array(),
        consensusState: undefined
    };
}
export const ConsensusStateData = {
    typeUrl: "/ibc.lightclients.solomachine.v1.ConsensusStateData",
    encode(message, writer = BinaryWriter.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.consensusState !== undefined) {
            Any.encode(message.consensusState, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(),
            consensusState: isSet(object.consensusState) ? Any.fromJSON(object.consensusState) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseConsensusStateData();
        message.path = object.path ?? new Uint8Array();
        message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? Any.fromPartial(object.consensusState) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseConsensusStateData();
        if (object.path !== undefined && object.path !== null) {
            message.path = bytesFromBase64(object.path);
        }
        if (object.consensus_state !== undefined && object.consensus_state !== null) {
            message.consensusState = Any.fromAmino(object.consensus_state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path ? base64FromBytes(message.path) : undefined;
        obj.consensus_state = message.consensusState ? Any.toAmino(message.consensusState) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ConsensusStateData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConsensusStateData",
            value: ConsensusStateData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ConsensusStateData.decode(message.value);
    },
    toProto(message) {
        return ConsensusStateData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.ConsensusStateData",
            value: ConsensusStateData.encode(message).finish()
        };
    }
};
function createBaseConnectionStateData() {
    return {
        path: new Uint8Array(),
        connection: undefined
    };
}
export const ConnectionStateData = {
    typeUrl: "/ibc.lightclients.solomachine.v1.ConnectionStateData",
    encode(message, writer = BinaryWriter.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.connection !== undefined) {
            ConnectionEnd.encode(message.connection, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(),
            connection: isSet(object.connection) ? ConnectionEnd.fromJSON(object.connection) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseConnectionStateData();
        message.path = object.path ?? new Uint8Array();
        message.connection = object.connection !== undefined && object.connection !== null ? ConnectionEnd.fromPartial(object.connection) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseConnectionStateData();
        if (object.path !== undefined && object.path !== null) {
            message.path = bytesFromBase64(object.path);
        }
        if (object.connection !== undefined && object.connection !== null) {
            message.connection = ConnectionEnd.fromAmino(object.connection);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path ? base64FromBytes(message.path) : undefined;
        obj.connection = message.connection ? ConnectionEnd.toAmino(message.connection) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ConnectionStateData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConnectionStateData",
            value: ConnectionStateData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ConnectionStateData.decode(message.value);
    },
    toProto(message) {
        return ConnectionStateData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.ConnectionStateData",
            value: ConnectionStateData.encode(message).finish()
        };
    }
};
function createBaseChannelStateData() {
    return {
        path: new Uint8Array(),
        channel: undefined
    };
}
export const ChannelStateData = {
    typeUrl: "/ibc.lightclients.solomachine.v1.ChannelStateData",
    encode(message, writer = BinaryWriter.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.channel !== undefined) {
            Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(),
            channel: isSet(object.channel) ? Channel.fromJSON(object.channel) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseChannelStateData();
        message.path = object.path ?? new Uint8Array();
        message.channel = object.channel !== undefined && object.channel !== null ? Channel.fromPartial(object.channel) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseChannelStateData();
        if (object.path !== undefined && object.path !== null) {
            message.path = bytesFromBase64(object.path);
        }
        if (object.channel !== undefined && object.channel !== null) {
            message.channel = Channel.fromAmino(object.channel);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path ? base64FromBytes(message.path) : undefined;
        obj.channel = message.channel ? Channel.toAmino(message.channel) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ChannelStateData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ChannelStateData",
            value: ChannelStateData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ChannelStateData.decode(message.value);
    },
    toProto(message) {
        return ChannelStateData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.ChannelStateData",
            value: ChannelStateData.encode(message).finish()
        };
    }
};
function createBasePacketCommitmentData() {
    return {
        path: new Uint8Array(),
        commitment: new Uint8Array()
    };
}
export const PacketCommitmentData = {
    typeUrl: "/ibc.lightclients.solomachine.v1.PacketCommitmentData",
    encode(message, writer = BinaryWriter.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.commitment.length !== 0) {
            writer.uint32(18).bytes(message.commitment);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(),
            commitment: isSet(object.commitment) ? bytesFromBase64(object.commitment) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBasePacketCommitmentData();
        message.path = object.path ?? new Uint8Array();
        message.commitment = object.commitment ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBasePacketCommitmentData();
        if (object.path !== undefined && object.path !== null) {
            message.path = bytesFromBase64(object.path);
        }
        if (object.commitment !== undefined && object.commitment !== null) {
            message.commitment = bytesFromBase64(object.commitment);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path ? base64FromBytes(message.path) : undefined;
        obj.commitment = message.commitment ? base64FromBytes(message.commitment) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PacketCommitmentData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PacketCommitmentData",
            value: PacketCommitmentData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PacketCommitmentData.decode(message.value);
    },
    toProto(message) {
        return PacketCommitmentData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.PacketCommitmentData",
            value: PacketCommitmentData.encode(message).finish()
        };
    }
};
function createBasePacketAcknowledgementData() {
    return {
        path: new Uint8Array(),
        acknowledgement: new Uint8Array()
    };
}
export const PacketAcknowledgementData = {
    typeUrl: "/ibc.lightclients.solomachine.v1.PacketAcknowledgementData",
    encode(message, writer = BinaryWriter.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.acknowledgement.length !== 0) {
            writer.uint32(18).bytes(message.acknowledgement);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(),
            acknowledgement: isSet(object.acknowledgement) ? bytesFromBase64(object.acknowledgement) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBasePacketAcknowledgementData();
        message.path = object.path ?? new Uint8Array();
        message.acknowledgement = object.acknowledgement ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBasePacketAcknowledgementData();
        if (object.path !== undefined && object.path !== null) {
            message.path = bytesFromBase64(object.path);
        }
        if (object.acknowledgement !== undefined && object.acknowledgement !== null) {
            message.acknowledgement = bytesFromBase64(object.acknowledgement);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path ? base64FromBytes(message.path) : undefined;
        obj.acknowledgement = message.acknowledgement ? base64FromBytes(message.acknowledgement) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PacketAcknowledgementData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PacketAcknowledgementData",
            value: PacketAcknowledgementData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PacketAcknowledgementData.decode(message.value);
    },
    toProto(message) {
        return PacketAcknowledgementData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.PacketAcknowledgementData",
            value: PacketAcknowledgementData.encode(message).finish()
        };
    }
};
function createBasePacketReceiptAbsenceData() {
    return {
        path: new Uint8Array()
    };
}
export const PacketReceiptAbsenceData = {
    typeUrl: "/ibc.lightclients.solomachine.v1.PacketReceiptAbsenceData",
    encode(message, writer = BinaryWriter.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBasePacketReceiptAbsenceData();
        message.path = object.path ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBasePacketReceiptAbsenceData();
        if (object.path !== undefined && object.path !== null) {
            message.path = bytesFromBase64(object.path);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path ? base64FromBytes(message.path) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PacketReceiptAbsenceData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PacketReceiptAbsenceData",
            value: PacketReceiptAbsenceData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PacketReceiptAbsenceData.decode(message.value);
    },
    toProto(message) {
        return PacketReceiptAbsenceData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.PacketReceiptAbsenceData",
            value: PacketReceiptAbsenceData.encode(message).finish()
        };
    }
};
function createBaseNextSequenceRecvData() {
    return {
        path: new Uint8Array(),
        nextSeqRecv: BigInt(0)
    };
}
export const NextSequenceRecvData = {
    typeUrl: "/ibc.lightclients.solomachine.v1.NextSequenceRecvData",
    encode(message, writer = BinaryWriter.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.nextSeqRecv !== BigInt(0)) {
            writer.uint32(16).uint64(message.nextSeqRecv);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(),
            nextSeqRecv: isSet(object.nextSeqRecv) ? BigInt(object.nextSeqRecv.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseNextSequenceRecvData();
        message.path = object.path ?? new Uint8Array();
        message.nextSeqRecv = object.nextSeqRecv !== undefined && object.nextSeqRecv !== null ? BigInt(object.nextSeqRecv.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseNextSequenceRecvData();
        if (object.path !== undefined && object.path !== null) {
            message.path = bytesFromBase64(object.path);
        }
        if (object.next_seq_recv !== undefined && object.next_seq_recv !== null) {
            message.nextSeqRecv = BigInt(object.next_seq_recv);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path ? base64FromBytes(message.path) : undefined;
        obj.next_seq_recv = message.nextSeqRecv ? message.nextSeqRecv.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return NextSequenceRecvData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/NextSequenceRecvData",
            value: NextSequenceRecvData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return NextSequenceRecvData.decode(message.value);
    },
    toProto(message) {
        return NextSequenceRecvData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.NextSequenceRecvData",
            value: NextSequenceRecvData.encode(message).finish()
        };
    }
};
//# sourceMappingURL=solomachine.js.map