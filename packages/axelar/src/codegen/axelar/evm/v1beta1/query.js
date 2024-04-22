import { Event, BurnerInfo, TokenDetails, batchedCommandsStatusFromJSON, depositStatusFromJSON } from "./types";
import { Params } from "./params";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, isObject } from "../../../helpers";
export var ChainStatus;
(function (ChainStatus) {
    ChainStatus[ChainStatus["CHAIN_STATUS_UNSPECIFIED"] = 0] = "CHAIN_STATUS_UNSPECIFIED";
    ChainStatus[ChainStatus["CHAIN_STATUS_ACTIVATED"] = 1] = "CHAIN_STATUS_ACTIVATED";
    ChainStatus[ChainStatus["CHAIN_STATUS_DEACTIVATED"] = 2] = "CHAIN_STATUS_DEACTIVATED";
    ChainStatus[ChainStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ChainStatus || (ChainStatus = {}));
export const ChainStatusSDKType = ChainStatus;
export const ChainStatusAmino = ChainStatus;
export function chainStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "CHAIN_STATUS_UNSPECIFIED":
            return ChainStatus.CHAIN_STATUS_UNSPECIFIED;
        case 1:
        case "CHAIN_STATUS_ACTIVATED":
            return ChainStatus.CHAIN_STATUS_ACTIVATED;
        case 2:
        case "CHAIN_STATUS_DEACTIVATED":
            return ChainStatus.CHAIN_STATUS_DEACTIVATED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ChainStatus.UNRECOGNIZED;
    }
}
export function chainStatusToJSON(object) {
    switch (object) {
        case ChainStatus.CHAIN_STATUS_UNSPECIFIED:
            return "CHAIN_STATUS_UNSPECIFIED";
        case ChainStatus.CHAIN_STATUS_ACTIVATED:
            return "CHAIN_STATUS_ACTIVATED";
        case ChainStatus.CHAIN_STATUS_DEACTIVATED:
            return "CHAIN_STATUS_DEACTIVATED";
        case ChainStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export var TokenType;
(function (TokenType) {
    TokenType[TokenType["TOKEN_TYPE_UNSPECIFIED"] = 0] = "TOKEN_TYPE_UNSPECIFIED";
    TokenType[TokenType["TOKEN_TYPE_INTERNAL"] = 1] = "TOKEN_TYPE_INTERNAL";
    TokenType[TokenType["TOKEN_TYPE_EXTERNAL"] = 2] = "TOKEN_TYPE_EXTERNAL";
    TokenType[TokenType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(TokenType || (TokenType = {}));
export const TokenTypeSDKType = TokenType;
export const TokenTypeAmino = TokenType;
export function tokenTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "TOKEN_TYPE_UNSPECIFIED":
            return TokenType.TOKEN_TYPE_UNSPECIFIED;
        case 1:
        case "TOKEN_TYPE_INTERNAL":
            return TokenType.TOKEN_TYPE_INTERNAL;
        case 2:
        case "TOKEN_TYPE_EXTERNAL":
            return TokenType.TOKEN_TYPE_EXTERNAL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return TokenType.UNRECOGNIZED;
    }
}
export function tokenTypeToJSON(object) {
    switch (object) {
        case TokenType.TOKEN_TYPE_UNSPECIFIED:
            return "TOKEN_TYPE_UNSPECIFIED";
        case TokenType.TOKEN_TYPE_INTERNAL:
            return "TOKEN_TYPE_INTERNAL";
        case TokenType.TOKEN_TYPE_EXTERNAL:
            return "TOKEN_TYPE_EXTERNAL";
        case TokenType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseDepositQueryParams() {
    return {
        address: "",
        asset: "",
        chain: ""
    };
}
export const DepositQueryParams = {
    typeUrl: "/axelar.evm.v1beta1.DepositQueryParams",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.asset !== "") {
            writer.uint32(18).string(message.asset);
        }
        if (message.chain !== "") {
            writer.uint32(26).string(message.chain);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            address: isSet(object.address) ? String(object.address) : "",
            asset: isSet(object.asset) ? String(object.asset) : "",
            chain: isSet(object.chain) ? String(object.chain) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseDepositQueryParams();
        message.address = object.address ?? "";
        message.asset = object.asset ?? "";
        message.chain = object.chain ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseDepositQueryParams();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = object.asset;
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.asset = message.asset;
        obj.chain = message.chain;
        return obj;
    },
    fromAminoMsg(object) {
        return DepositQueryParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DepositQueryParams.decode(message.value);
    },
    toProto(message) {
        return DepositQueryParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.DepositQueryParams",
            value: DepositQueryParams.encode(message).finish()
        };
    }
};
function createBaseBatchedCommandsRequest() {
    return {
        chain: "",
        id: ""
    };
}
export const BatchedCommandsRequest = {
    typeUrl: "/axelar.evm.v1beta1.BatchedCommandsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : "",
            id: isSet(object.id) ? String(object.id) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseBatchedCommandsRequest();
        message.chain = object.chain ?? "";
        message.id = object.id ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseBatchedCommandsRequest();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain;
        obj.id = message.id;
        return obj;
    },
    fromAminoMsg(object) {
        return BatchedCommandsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BatchedCommandsRequest.decode(message.value);
    },
    toProto(message) {
        return BatchedCommandsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.BatchedCommandsRequest",
            value: BatchedCommandsRequest.encode(message).finish()
        };
    }
};
function createBaseBatchedCommandsResponse() {
    return {
        id: "",
        data: "",
        status: 0,
        keyId: "",
        executeData: "",
        prevBatchedCommandsId: "",
        commandIds: [],
        proof: undefined
    };
}
export const BatchedCommandsResponse = {
    typeUrl: "/axelar.evm.v1beta1.BatchedCommandsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.data !== "") {
            writer.uint32(18).string(message.data);
        }
        if (message.status !== 0) {
            writer.uint32(24).int32(message.status);
        }
        if (message.keyId !== "") {
            writer.uint32(34).string(message.keyId);
        }
        if (message.executeData !== "") {
            writer.uint32(50).string(message.executeData);
        }
        if (message.prevBatchedCommandsId !== "") {
            writer.uint32(58).string(message.prevBatchedCommandsId);
        }
        for (const v of message.commandIds) {
            writer.uint32(66).string(v);
        }
        if (message.proof !== undefined) {
            Proof.encode(message.proof, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : "",
            data: isSet(object.data) ? String(object.data) : "",
            status: isSet(object.status) ? batchedCommandsStatusFromJSON(object.status) : -1,
            keyId: isSet(object.keyId) ? String(object.keyId) : "",
            executeData: isSet(object.executeData) ? String(object.executeData) : "",
            prevBatchedCommandsId: isSet(object.prevBatchedCommandsId) ? String(object.prevBatchedCommandsId) : "",
            commandIds: Array.isArray(object?.commandIds) ? object.commandIds.map((e) => String(e)) : [],
            proof: isSet(object.proof) ? Proof.fromJSON(object.proof) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseBatchedCommandsResponse();
        message.id = object.id ?? "";
        message.data = object.data ?? "";
        message.status = object.status ?? 0;
        message.keyId = object.keyId ?? "";
        message.executeData = object.executeData ?? "";
        message.prevBatchedCommandsId = object.prevBatchedCommandsId ?? "";
        message.commandIds = object.commandIds?.map(e => e) || [];
        message.proof = object.proof !== undefined && object.proof !== null ? Proof.fromPartial(object.proof) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseBatchedCommandsResponse();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = batchedCommandsStatusFromJSON(object.status);
        }
        if (object.key_id !== undefined && object.key_id !== null) {
            message.keyId = object.key_id;
        }
        if (object.execute_data !== undefined && object.execute_data !== null) {
            message.executeData = object.execute_data;
        }
        if (object.prev_batched_commands_id !== undefined && object.prev_batched_commands_id !== null) {
            message.prevBatchedCommandsId = object.prev_batched_commands_id;
        }
        message.commandIds = object.command_ids?.map(e => e) || [];
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = Proof.fromAmino(object.proof);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        obj.data = message.data;
        obj.status = message.status;
        obj.key_id = message.keyId;
        obj.execute_data = message.executeData;
        obj.prev_batched_commands_id = message.prevBatchedCommandsId;
        if (message.commandIds) {
            obj.command_ids = message.commandIds.map(e => e);
        }
        else {
            obj.command_ids = [];
        }
        obj.proof = message.proof ? Proof.toAmino(message.proof) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return BatchedCommandsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BatchedCommandsResponse.decode(message.value);
    },
    toProto(message) {
        return BatchedCommandsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.BatchedCommandsResponse",
            value: BatchedCommandsResponse.encode(message).finish()
        };
    }
};
function createBaseKeyAddressRequest() {
    return {
        chain: "",
        keyId: ""
    };
}
export const KeyAddressRequest = {
    typeUrl: "/axelar.evm.v1beta1.KeyAddressRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.keyId !== "") {
            writer.uint32(34).string(message.keyId);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : "",
            keyId: isSet(object.keyId) ? String(object.keyId) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseKeyAddressRequest();
        message.chain = object.chain ?? "";
        message.keyId = object.keyId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseKeyAddressRequest();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.key_id !== undefined && object.key_id !== null) {
            message.keyId = object.key_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain;
        obj.key_id = message.keyId;
        return obj;
    },
    fromAminoMsg(object) {
        return KeyAddressRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return KeyAddressRequest.decode(message.value);
    },
    toProto(message) {
        return KeyAddressRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.KeyAddressRequest",
            value: KeyAddressRequest.encode(message).finish()
        };
    }
};
function createBaseKeyAddressResponse() {
    return {
        keyId: "",
        addresses: [],
        threshold: ""
    };
}
export const KeyAddressResponse = {
    typeUrl: "/axelar.evm.v1beta1.KeyAddressResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        for (const v of message.addresses) {
            KeyAddressResponse_WeightedAddress.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.threshold !== "") {
            writer.uint32(26).string(message.threshold);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            keyId: isSet(object.keyId) ? String(object.keyId) : "",
            addresses: Array.isArray(object?.addresses) ? object.addresses.map((e) => KeyAddressResponse_WeightedAddress.fromJSON(e)) : [],
            threshold: isSet(object.threshold) ? String(object.threshold) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseKeyAddressResponse();
        message.keyId = object.keyId ?? "";
        message.addresses = object.addresses?.map(e => KeyAddressResponse_WeightedAddress.fromPartial(e)) || [];
        message.threshold = object.threshold ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseKeyAddressResponse();
        if (object.key_id !== undefined && object.key_id !== null) {
            message.keyId = object.key_id;
        }
        message.addresses = object.addresses?.map(e => KeyAddressResponse_WeightedAddress.fromAmino(e)) || [];
        if (object.threshold !== undefined && object.threshold !== null) {
            message.threshold = object.threshold;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key_id = message.keyId;
        if (message.addresses) {
            obj.addresses = message.addresses.map(e => e ? KeyAddressResponse_WeightedAddress.toAmino(e) : undefined);
        }
        else {
            obj.addresses = [];
        }
        obj.threshold = message.threshold;
        return obj;
    },
    fromAminoMsg(object) {
        return KeyAddressResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return KeyAddressResponse.decode(message.value);
    },
    toProto(message) {
        return KeyAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.KeyAddressResponse",
            value: KeyAddressResponse.encode(message).finish()
        };
    }
};
function createBaseKeyAddressResponse_WeightedAddress() {
    return {
        address: "",
        weight: ""
    };
}
export const KeyAddressResponse_WeightedAddress = {
    typeUrl: "/axelar.evm.v1beta1.WeightedAddress",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.weight !== "") {
            writer.uint32(18).string(message.weight);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            address: isSet(object.address) ? String(object.address) : "",
            weight: isSet(object.weight) ? String(object.weight) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseKeyAddressResponse_WeightedAddress();
        message.address = object.address ?? "";
        message.weight = object.weight ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseKeyAddressResponse_WeightedAddress();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.weight !== undefined && object.weight !== null) {
            message.weight = object.weight;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.weight = message.weight;
        return obj;
    },
    fromAminoMsg(object) {
        return KeyAddressResponse_WeightedAddress.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return KeyAddressResponse_WeightedAddress.decode(message.value);
    },
    toProto(message) {
        return KeyAddressResponse_WeightedAddress.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.WeightedAddress",
            value: KeyAddressResponse_WeightedAddress.encode(message).finish()
        };
    }
};
function createBaseQueryTokenAddressResponse() {
    return {
        address: "",
        confirmed: false
    };
}
export const QueryTokenAddressResponse = {
    typeUrl: "/axelar.evm.v1beta1.QueryTokenAddressResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.confirmed === true) {
            writer.uint32(16).bool(message.confirmed);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            address: isSet(object.address) ? String(object.address) : "",
            confirmed: isSet(object.confirmed) ? Boolean(object.confirmed) : false
        };
    },
    fromPartial(object) {
        const message = createBaseQueryTokenAddressResponse();
        message.address = object.address ?? "";
        message.confirmed = object.confirmed ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTokenAddressResponse();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.confirmed !== undefined && object.confirmed !== null) {
            message.confirmed = object.confirmed;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.confirmed = message.confirmed;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTokenAddressResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryTokenAddressResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTokenAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.QueryTokenAddressResponse",
            value: QueryTokenAddressResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDepositStateParams() {
    return {
        txId: new Uint8Array(),
        burnerAddress: new Uint8Array()
    };
}
export const QueryDepositStateParams = {
    typeUrl: "/axelar.evm.v1beta1.QueryDepositStateParams",
    encode(message, writer = BinaryWriter.create()) {
        if (message.txId.length !== 0) {
            writer.uint32(10).bytes(message.txId);
        }
        if (message.burnerAddress.length !== 0) {
            writer.uint32(18).bytes(message.burnerAddress);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
            burnerAddress: isSet(object.burnerAddress) ? bytesFromBase64(object.burnerAddress) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseQueryDepositStateParams();
        message.txId = object.txId ?? new Uint8Array();
        message.burnerAddress = object.burnerAddress ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDepositStateParams();
        if (object.tx_id !== undefined && object.tx_id !== null) {
            message.txId = bytesFromBase64(object.tx_id);
        }
        if (object.burner_address !== undefined && object.burner_address !== null) {
            message.burnerAddress = bytesFromBase64(object.burner_address);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tx_id = message.txId ? base64FromBytes(message.txId) : undefined;
        obj.burner_address = message.burnerAddress ? base64FromBytes(message.burnerAddress) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDepositStateParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDepositStateParams.decode(message.value);
    },
    toProto(message) {
        return QueryDepositStateParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.QueryDepositStateParams",
            value: QueryDepositStateParams.encode(message).finish()
        };
    }
};
function createBaseDepositStateRequest() {
    return {
        chain: "",
        params: undefined
    };
}
export const DepositStateRequest = {
    typeUrl: "/axelar.evm.v1beta1.DepositStateRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.params !== undefined) {
            QueryDepositStateParams.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : "",
            params: isSet(object.params) ? QueryDepositStateParams.fromJSON(object.params) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseDepositStateRequest();
        message.chain = object.chain ?? "";
        message.params = object.params !== undefined && object.params !== null ? QueryDepositStateParams.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseDepositStateRequest();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = QueryDepositStateParams.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain;
        obj.params = message.params ? QueryDepositStateParams.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return DepositStateRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DepositStateRequest.decode(message.value);
    },
    toProto(message) {
        return DepositStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.DepositStateRequest",
            value: DepositStateRequest.encode(message).finish()
        };
    }
};
function createBaseDepositStateResponse() {
    return {
        status: 0
    };
}
export const DepositStateResponse = {
    typeUrl: "/axelar.evm.v1beta1.DepositStateResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.status !== 0) {
            writer.uint32(16).int32(message.status);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            status: isSet(object.status) ? depositStatusFromJSON(object.status) : -1
        };
    },
    fromPartial(object) {
        const message = createBaseDepositStateResponse();
        message.status = object.status ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseDepositStateResponse();
        if (object.status !== undefined && object.status !== null) {
            message.status = depositStatusFromJSON(object.status);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.status = message.status;
        return obj;
    },
    fromAminoMsg(object) {
        return DepositStateResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DepositStateResponse.decode(message.value);
    },
    toProto(message) {
        return DepositStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.DepositStateResponse",
            value: DepositStateResponse.encode(message).finish()
        };
    }
};
function createBaseEventRequest() {
    return {
        chain: "",
        eventId: ""
    };
}
export const EventRequest = {
    typeUrl: "/axelar.evm.v1beta1.EventRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.eventId !== "") {
            writer.uint32(18).string(message.eventId);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : "",
            eventId: isSet(object.eventId) ? String(object.eventId) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseEventRequest();
        message.chain = object.chain ?? "";
        message.eventId = object.eventId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventRequest();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.event_id !== undefined && object.event_id !== null) {
            message.eventId = object.event_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain;
        obj.event_id = message.eventId;
        return obj;
    },
    fromAminoMsg(object) {
        return EventRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventRequest.decode(message.value);
    },
    toProto(message) {
        return EventRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.EventRequest",
            value: EventRequest.encode(message).finish()
        };
    }
};
function createBaseEventResponse() {
    return {
        event: undefined
    };
}
export const EventResponse = {
    typeUrl: "/axelar.evm.v1beta1.EventResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.event !== undefined) {
            Event.encode(message.event, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            event: isSet(object.event) ? Event.fromJSON(object.event) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseEventResponse();
        message.event = object.event !== undefined && object.event !== null ? Event.fromPartial(object.event) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventResponse();
        if (object.event !== undefined && object.event !== null) {
            message.event = Event.fromAmino(object.event);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.event = message.event ? Event.toAmino(message.event) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventResponse.decode(message.value);
    },
    toProto(message) {
        return EventResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.EventResponse",
            value: EventResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBurnerAddressResponse() {
    return {
        address: ""
    };
}
export const QueryBurnerAddressResponse = {
    typeUrl: "/axelar.evm.v1beta1.QueryBurnerAddressResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            address: isSet(object.address) ? String(object.address) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseQueryBurnerAddressResponse();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBurnerAddressResponse();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBurnerAddressResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBurnerAddressResponse.decode(message.value);
    },
    toProto(message) {
        return QueryBurnerAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.QueryBurnerAddressResponse",
            value: QueryBurnerAddressResponse.encode(message).finish()
        };
    }
};
function createBaseChainsRequest() {
    return {
        status: 0
    };
}
export const ChainsRequest = {
    typeUrl: "/axelar.evm.v1beta1.ChainsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            status: isSet(object.status) ? chainStatusFromJSON(object.status) : -1
        };
    },
    fromPartial(object) {
        const message = createBaseChainsRequest();
        message.status = object.status ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseChainsRequest();
        if (object.status !== undefined && object.status !== null) {
            message.status = chainStatusFromJSON(object.status);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.status = message.status;
        return obj;
    },
    fromAminoMsg(object) {
        return ChainsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ChainsRequest.decode(message.value);
    },
    toProto(message) {
        return ChainsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.ChainsRequest",
            value: ChainsRequest.encode(message).finish()
        };
    }
};
function createBaseChainsResponse() {
    return {
        chains: []
    };
}
export const ChainsResponse = {
    typeUrl: "/axelar.evm.v1beta1.ChainsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.chains) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chains: Array.isArray(object?.chains) ? object.chains.map((e) => String(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseChainsResponse();
        message.chains = object.chains?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseChainsResponse();
        message.chains = object.chains?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.chains) {
            obj.chains = message.chains.map(e => e);
        }
        else {
            obj.chains = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ChainsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ChainsResponse.decode(message.value);
    },
    toProto(message) {
        return ChainsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.ChainsResponse",
            value: ChainsResponse.encode(message).finish()
        };
    }
};
function createBaseCommandRequest() {
    return {
        chain: "",
        id: ""
    };
}
export const CommandRequest = {
    typeUrl: "/axelar.evm.v1beta1.CommandRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : "",
            id: isSet(object.id) ? String(object.id) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseCommandRequest();
        message.chain = object.chain ?? "";
        message.id = object.id ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseCommandRequest();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain;
        obj.id = message.id;
        return obj;
    },
    fromAminoMsg(object) {
        return CommandRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CommandRequest.decode(message.value);
    },
    toProto(message) {
        return CommandRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.CommandRequest",
            value: CommandRequest.encode(message).finish()
        };
    }
};
function createBaseCommandResponse_ParamsEntry() {
    return {
        key: "",
        value: ""
    };
}
export const CommandResponse_ParamsEntry = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? String(object.value) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseCommandResponse_ParamsEntry();
        message.key = object.key ?? "";
        message.value = object.value ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseCommandResponse_ParamsEntry();
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value;
        return obj;
    },
    fromAminoMsg(object) {
        return CommandResponse_ParamsEntry.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CommandResponse_ParamsEntry.decode(message.value);
    },
    toProto(message) {
        return CommandResponse_ParamsEntry.encode(message).finish();
    }
};
function createBaseCommandResponse() {
    return {
        id: "",
        type: "",
        params: {},
        keyId: "",
        maxGasCost: 0
    };
}
export const CommandResponse = {
    typeUrl: "/axelar.evm.v1beta1.CommandResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.type !== "") {
            writer.uint32(18).string(message.type);
        }
        Object.entries(message.params).forEach(([key, value]) => {
            CommandResponse_ParamsEntry.encode({
                key: key,
                value
            }, writer.uint32(26).fork()).ldelim();
        });
        if (message.keyId !== "") {
            writer.uint32(34).string(message.keyId);
        }
        if (message.maxGasCost !== 0) {
            writer.uint32(40).uint32(message.maxGasCost);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : "",
            type: isSet(object.type) ? String(object.type) : "",
            params: isObject(object.params) ? Object.entries(object.params).reduce((acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            }, {}) : {},
            keyId: isSet(object.keyId) ? String(object.keyId) : "",
            maxGasCost: isSet(object.maxGasCost) ? Number(object.maxGasCost) : 0
        };
    },
    fromPartial(object) {
        const message = createBaseCommandResponse();
        message.id = object.id ?? "";
        message.type = object.type ?? "";
        message.params = Object.entries(object.params ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.keyId = object.keyId ?? "";
        message.maxGasCost = object.maxGasCost ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseCommandResponse();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        message.params = Object.entries(object.params ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        if (object.key_id !== undefined && object.key_id !== null) {
            message.keyId = object.key_id;
        }
        if (object.max_gas_cost !== undefined && object.max_gas_cost !== null) {
            message.maxGasCost = object.max_gas_cost;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        obj.type = message.type;
        obj.params = {};
        if (message.params) {
            Object.entries(message.params).forEach(([k, v]) => {
                obj.params[k] = v;
            });
        }
        obj.key_id = message.keyId;
        obj.max_gas_cost = message.maxGasCost;
        return obj;
    },
    fromAminoMsg(object) {
        return CommandResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CommandResponse.decode(message.value);
    },
    toProto(message) {
        return CommandResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.CommandResponse",
            value: CommandResponse.encode(message).finish()
        };
    }
};
function createBasePendingCommandsRequest() {
    return {
        chain: ""
    };
}
export const PendingCommandsRequest = {
    typeUrl: "/axelar.evm.v1beta1.PendingCommandsRequest",
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
        const message = createBasePendingCommandsRequest();
        message.chain = object.chain ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBasePendingCommandsRequest();
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
        return PendingCommandsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PendingCommandsRequest.decode(message.value);
    },
    toProto(message) {
        return PendingCommandsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.PendingCommandsRequest",
            value: PendingCommandsRequest.encode(message).finish()
        };
    }
};
function createBasePendingCommandsResponse() {
    return {
        commands: []
    };
}
export const PendingCommandsResponse = {
    typeUrl: "/axelar.evm.v1beta1.PendingCommandsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.commands) {
            QueryCommandResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            commands: Array.isArray(object?.commands) ? object.commands.map((e) => QueryCommandResponse.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBasePendingCommandsResponse();
        message.commands = object.commands?.map(e => QueryCommandResponse.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBasePendingCommandsResponse();
        message.commands = object.commands?.map(e => QueryCommandResponse.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.commands) {
            obj.commands = message.commands.map(e => e ? QueryCommandResponse.toAmino(e) : undefined);
        }
        else {
            obj.commands = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return PendingCommandsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PendingCommandsResponse.decode(message.value);
    },
    toProto(message) {
        return PendingCommandsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.PendingCommandsResponse",
            value: PendingCommandsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCommandResponse_ParamsEntry() {
    return {
        key: "",
        value: ""
    };
}
export const QueryCommandResponse_ParamsEntry = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? String(object.value) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseQueryCommandResponse_ParamsEntry();
        message.key = object.key ?? "";
        message.value = object.value ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCommandResponse_ParamsEntry();
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCommandResponse_ParamsEntry.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryCommandResponse_ParamsEntry.decode(message.value);
    },
    toProto(message) {
        return QueryCommandResponse_ParamsEntry.encode(message).finish();
    }
};
function createBaseQueryCommandResponse() {
    return {
        id: "",
        type: "",
        params: {},
        keyId: "",
        maxGasCost: 0
    };
}
export const QueryCommandResponse = {
    typeUrl: "/axelar.evm.v1beta1.QueryCommandResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.type !== "") {
            writer.uint32(18).string(message.type);
        }
        Object.entries(message.params).forEach(([key, value]) => {
            QueryCommandResponse_ParamsEntry.encode({
                key: key,
                value
            }, writer.uint32(26).fork()).ldelim();
        });
        if (message.keyId !== "") {
            writer.uint32(34).string(message.keyId);
        }
        if (message.maxGasCost !== 0) {
            writer.uint32(40).uint32(message.maxGasCost);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : "",
            type: isSet(object.type) ? String(object.type) : "",
            params: isObject(object.params) ? Object.entries(object.params).reduce((acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            }, {}) : {},
            keyId: isSet(object.keyId) ? String(object.keyId) : "",
            maxGasCost: isSet(object.maxGasCost) ? Number(object.maxGasCost) : 0
        };
    },
    fromPartial(object) {
        const message = createBaseQueryCommandResponse();
        message.id = object.id ?? "";
        message.type = object.type ?? "";
        message.params = Object.entries(object.params ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.keyId = object.keyId ?? "";
        message.maxGasCost = object.maxGasCost ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCommandResponse();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        message.params = Object.entries(object.params ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        if (object.key_id !== undefined && object.key_id !== null) {
            message.keyId = object.key_id;
        }
        if (object.max_gas_cost !== undefined && object.max_gas_cost !== null) {
            message.maxGasCost = object.max_gas_cost;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        obj.type = message.type;
        obj.params = {};
        if (message.params) {
            Object.entries(message.params).forEach(([k, v]) => {
                obj.params[k] = v;
            });
        }
        obj.key_id = message.keyId;
        obj.max_gas_cost = message.maxGasCost;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCommandResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryCommandResponse.decode(message.value);
    },
    toProto(message) {
        return QueryCommandResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.QueryCommandResponse",
            value: QueryCommandResponse.encode(message).finish()
        };
    }
};
function createBaseBurnerInfoRequest() {
    return {
        address: new Uint8Array()
    };
}
export const BurnerInfoRequest = {
    typeUrl: "/axelar.evm.v1beta1.BurnerInfoRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address.length !== 0) {
            writer.uint32(10).bytes(message.address);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseBurnerInfoRequest();
        message.address = object.address ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseBurnerInfoRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = bytesFromBase64(object.address);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address ? base64FromBytes(message.address) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return BurnerInfoRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BurnerInfoRequest.decode(message.value);
    },
    toProto(message) {
        return BurnerInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.BurnerInfoRequest",
            value: BurnerInfoRequest.encode(message).finish()
        };
    }
};
function createBaseBurnerInfoResponse() {
    return {
        chain: "",
        burnerInfo: undefined
    };
}
export const BurnerInfoResponse = {
    typeUrl: "/axelar.evm.v1beta1.BurnerInfoResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.burnerInfo !== undefined) {
            BurnerInfo.encode(message.burnerInfo, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : "",
            burnerInfo: isSet(object.burnerInfo) ? BurnerInfo.fromJSON(object.burnerInfo) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseBurnerInfoResponse();
        message.chain = object.chain ?? "";
        message.burnerInfo = object.burnerInfo !== undefined && object.burnerInfo !== null ? BurnerInfo.fromPartial(object.burnerInfo) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseBurnerInfoResponse();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.burner_info !== undefined && object.burner_info !== null) {
            message.burnerInfo = BurnerInfo.fromAmino(object.burner_info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain;
        obj.burner_info = message.burnerInfo ? BurnerInfo.toAmino(message.burnerInfo) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return BurnerInfoResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BurnerInfoResponse.decode(message.value);
    },
    toProto(message) {
        return BurnerInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.BurnerInfoResponse",
            value: BurnerInfoResponse.encode(message).finish()
        };
    }
};
function createBaseConfirmationHeightRequest() {
    return {
        chain: ""
    };
}
export const ConfirmationHeightRequest = {
    typeUrl: "/axelar.evm.v1beta1.ConfirmationHeightRequest",
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
        const message = createBaseConfirmationHeightRequest();
        message.chain = object.chain ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseConfirmationHeightRequest();
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
        return ConfirmationHeightRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ConfirmationHeightRequest.decode(message.value);
    },
    toProto(message) {
        return ConfirmationHeightRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.ConfirmationHeightRequest",
            value: ConfirmationHeightRequest.encode(message).finish()
        };
    }
};
function createBaseConfirmationHeightResponse() {
    return {
        height: BigInt(0)
    };
}
export const ConfirmationHeightResponse = {
    typeUrl: "/axelar.evm.v1beta1.ConfirmationHeightResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).uint64(message.height);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseConfirmationHeightResponse();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseConfirmationHeightResponse();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ConfirmationHeightResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ConfirmationHeightResponse.decode(message.value);
    },
    toProto(message) {
        return ConfirmationHeightResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.ConfirmationHeightResponse",
            value: ConfirmationHeightResponse.encode(message).finish()
        };
    }
};
function createBaseGatewayAddressRequest() {
    return {
        chain: ""
    };
}
export const GatewayAddressRequest = {
    typeUrl: "/axelar.evm.v1beta1.GatewayAddressRequest",
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
        const message = createBaseGatewayAddressRequest();
        message.chain = object.chain ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseGatewayAddressRequest();
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
        return GatewayAddressRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GatewayAddressRequest.decode(message.value);
    },
    toProto(message) {
        return GatewayAddressRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.GatewayAddressRequest",
            value: GatewayAddressRequest.encode(message).finish()
        };
    }
};
function createBaseGatewayAddressResponse() {
    return {
        address: ""
    };
}
export const GatewayAddressResponse = {
    typeUrl: "/axelar.evm.v1beta1.GatewayAddressResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            address: isSet(object.address) ? String(object.address) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseGatewayAddressResponse();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseGatewayAddressResponse();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return GatewayAddressResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GatewayAddressResponse.decode(message.value);
    },
    toProto(message) {
        return GatewayAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.GatewayAddressResponse",
            value: GatewayAddressResponse.encode(message).finish()
        };
    }
};
function createBaseBytecodeRequest() {
    return {
        chain: "",
        contract: ""
    };
}
export const BytecodeRequest = {
    typeUrl: "/axelar.evm.v1beta1.BytecodeRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.contract !== "") {
            writer.uint32(18).string(message.contract);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : "",
            contract: isSet(object.contract) ? String(object.contract) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseBytecodeRequest();
        message.chain = object.chain ?? "";
        message.contract = object.contract ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseBytecodeRequest();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = object.contract;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain;
        obj.contract = message.contract;
        return obj;
    },
    fromAminoMsg(object) {
        return BytecodeRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BytecodeRequest.decode(message.value);
    },
    toProto(message) {
        return BytecodeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.BytecodeRequest",
            value: BytecodeRequest.encode(message).finish()
        };
    }
};
function createBaseBytecodeResponse() {
    return {
        bytecode: ""
    };
}
export const BytecodeResponse = {
    typeUrl: "/axelar.evm.v1beta1.BytecodeResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.bytecode !== "") {
            writer.uint32(10).string(message.bytecode);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            bytecode: isSet(object.bytecode) ? String(object.bytecode) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseBytecodeResponse();
        message.bytecode = object.bytecode ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseBytecodeResponse();
        if (object.bytecode !== undefined && object.bytecode !== null) {
            message.bytecode = object.bytecode;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.bytecode = message.bytecode;
        return obj;
    },
    fromAminoMsg(object) {
        return BytecodeResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BytecodeResponse.decode(message.value);
    },
    toProto(message) {
        return BytecodeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.BytecodeResponse",
            value: BytecodeResponse.encode(message).finish()
        };
    }
};
function createBaseERC20TokensRequest() {
    return {
        chain: "",
        type: 0
    };
}
export const ERC20TokensRequest = {
    typeUrl: "/axelar.evm.v1beta1.ERC20TokensRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : "",
            type: isSet(object.type) ? tokenTypeFromJSON(object.type) : -1
        };
    },
    fromPartial(object) {
        const message = createBaseERC20TokensRequest();
        message.chain = object.chain ?? "";
        message.type = object.type ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseERC20TokensRequest();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = tokenTypeFromJSON(object.type);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain;
        obj.type = message.type;
        return obj;
    },
    fromAminoMsg(object) {
        return ERC20TokensRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ERC20TokensRequest.decode(message.value);
    },
    toProto(message) {
        return ERC20TokensRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.ERC20TokensRequest",
            value: ERC20TokensRequest.encode(message).finish()
        };
    }
};
function createBaseERC20TokensResponse() {
    return {
        tokens: []
    };
}
export const ERC20TokensResponse = {
    typeUrl: "/axelar.evm.v1beta1.ERC20TokensResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.tokens) {
            ERC20TokensResponse_Token.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            tokens: Array.isArray(object?.tokens) ? object.tokens.map((e) => ERC20TokensResponse_Token.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseERC20TokensResponse();
        message.tokens = object.tokens?.map(e => ERC20TokensResponse_Token.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseERC20TokensResponse();
        message.tokens = object.tokens?.map(e => ERC20TokensResponse_Token.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.tokens) {
            obj.tokens = message.tokens.map(e => e ? ERC20TokensResponse_Token.toAmino(e) : undefined);
        }
        else {
            obj.tokens = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ERC20TokensResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ERC20TokensResponse.decode(message.value);
    },
    toProto(message) {
        return ERC20TokensResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.ERC20TokensResponse",
            value: ERC20TokensResponse.encode(message).finish()
        };
    }
};
function createBaseERC20TokensResponse_Token() {
    return {
        asset: "",
        symbol: ""
    };
}
export const ERC20TokensResponse_Token = {
    typeUrl: "/axelar.evm.v1beta1.Token",
    encode(message, writer = BinaryWriter.create()) {
        if (message.asset !== "") {
            writer.uint32(10).string(message.asset);
        }
        if (message.symbol !== "") {
            writer.uint32(18).string(message.symbol);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            asset: isSet(object.asset) ? String(object.asset) : "",
            symbol: isSet(object.symbol) ? String(object.symbol) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseERC20TokensResponse_Token();
        message.asset = object.asset ?? "";
        message.symbol = object.symbol ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseERC20TokensResponse_Token();
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = object.asset;
        }
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = object.symbol;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.asset = message.asset;
        obj.symbol = message.symbol;
        return obj;
    },
    fromAminoMsg(object) {
        return ERC20TokensResponse_Token.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ERC20TokensResponse_Token.decode(message.value);
    },
    toProto(message) {
        return ERC20TokensResponse_Token.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.Token",
            value: ERC20TokensResponse_Token.encode(message).finish()
        };
    }
};
function createBaseTokenInfoRequest() {
    return {
        chain: "",
        asset: undefined,
        symbol: undefined,
        address: undefined
    };
}
export const TokenInfoRequest = {
    typeUrl: "/axelar.evm.v1beta1.TokenInfoRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.asset !== undefined) {
            writer.uint32(18).string(message.asset);
        }
        if (message.symbol !== undefined) {
            writer.uint32(26).string(message.symbol);
        }
        if (message.address !== undefined) {
            writer.uint32(34).string(message.address);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : "",
            asset: isSet(object.asset) ? String(object.asset) : undefined,
            symbol: isSet(object.symbol) ? String(object.symbol) : undefined,
            address: isSet(object.address) ? String(object.address) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseTokenInfoRequest();
        message.chain = object.chain ?? "";
        message.asset = object.asset ?? undefined;
        message.symbol = object.symbol ?? undefined;
        message.address = object.address ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseTokenInfoRequest();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = object.asset;
        }
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = object.symbol;
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain;
        obj.asset = message.asset;
        obj.symbol = message.symbol;
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return TokenInfoRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TokenInfoRequest.decode(message.value);
    },
    toProto(message) {
        return TokenInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.TokenInfoRequest",
            value: TokenInfoRequest.encode(message).finish()
        };
    }
};
function createBaseTokenInfoResponse() {
    return {
        asset: "",
        details: TokenDetails.fromPartial({}),
        address: "",
        confirmed: false,
        isExternal: false,
        burnerCodeHash: ""
    };
}
export const TokenInfoResponse = {
    typeUrl: "/axelar.evm.v1beta1.TokenInfoResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.asset !== "") {
            writer.uint32(10).string(message.asset);
        }
        if (message.details !== undefined) {
            TokenDetails.encode(message.details, writer.uint32(18).fork()).ldelim();
        }
        if (message.address !== "") {
            writer.uint32(26).string(message.address);
        }
        if (message.confirmed === true) {
            writer.uint32(32).bool(message.confirmed);
        }
        if (message.isExternal === true) {
            writer.uint32(40).bool(message.isExternal);
        }
        if (message.burnerCodeHash !== "") {
            writer.uint32(50).string(message.burnerCodeHash);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            asset: isSet(object.asset) ? String(object.asset) : "",
            details: isSet(object.details) ? TokenDetails.fromJSON(object.details) : undefined,
            address: isSet(object.address) ? String(object.address) : "",
            confirmed: isSet(object.confirmed) ? Boolean(object.confirmed) : false,
            isExternal: isSet(object.isExternal) ? Boolean(object.isExternal) : false,
            burnerCodeHash: isSet(object.burnerCodeHash) ? String(object.burnerCodeHash) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseTokenInfoResponse();
        message.asset = object.asset ?? "";
        message.details = object.details !== undefined && object.details !== null ? TokenDetails.fromPartial(object.details) : undefined;
        message.address = object.address ?? "";
        message.confirmed = object.confirmed ?? false;
        message.isExternal = object.isExternal ?? false;
        message.burnerCodeHash = object.burnerCodeHash ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseTokenInfoResponse();
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = object.asset;
        }
        if (object.details !== undefined && object.details !== null) {
            message.details = TokenDetails.fromAmino(object.details);
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.confirmed !== undefined && object.confirmed !== null) {
            message.confirmed = object.confirmed;
        }
        if (object.is_external !== undefined && object.is_external !== null) {
            message.isExternal = object.is_external;
        }
        if (object.burner_code_hash !== undefined && object.burner_code_hash !== null) {
            message.burnerCodeHash = object.burner_code_hash;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.asset = message.asset;
        obj.details = message.details ? TokenDetails.toAmino(message.details) : undefined;
        obj.address = message.address;
        obj.confirmed = message.confirmed;
        obj.is_external = message.isExternal;
        obj.burner_code_hash = message.burnerCodeHash;
        return obj;
    },
    fromAminoMsg(object) {
        return TokenInfoResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TokenInfoResponse.decode(message.value);
    },
    toProto(message) {
        return TokenInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.TokenInfoResponse",
            value: TokenInfoResponse.encode(message).finish()
        };
    }
};
function createBaseProof() {
    return {
        addresses: [],
        weights: [],
        threshold: "",
        signatures: []
    };
}
export const Proof = {
    typeUrl: "/axelar.evm.v1beta1.Proof",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.addresses) {
            writer.uint32(10).string(v);
        }
        for (const v of message.weights) {
            writer.uint32(18).string(v);
        }
        if (message.threshold !== "") {
            writer.uint32(26).string(message.threshold);
        }
        for (const v of message.signatures) {
            writer.uint32(34).string(v);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            addresses: Array.isArray(object?.addresses) ? object.addresses.map((e) => String(e)) : [],
            weights: Array.isArray(object?.weights) ? object.weights.map((e) => String(e)) : [],
            threshold: isSet(object.threshold) ? String(object.threshold) : "",
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => String(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseProof();
        message.addresses = object.addresses?.map(e => e) || [];
        message.weights = object.weights?.map(e => e) || [];
        message.threshold = object.threshold ?? "";
        message.signatures = object.signatures?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseProof();
        message.addresses = object.addresses?.map(e => e) || [];
        message.weights = object.weights?.map(e => e) || [];
        if (object.threshold !== undefined && object.threshold !== null) {
            message.threshold = object.threshold;
        }
        message.signatures = object.signatures?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.addresses) {
            obj.addresses = message.addresses.map(e => e);
        }
        else {
            obj.addresses = [];
        }
        if (message.weights) {
            obj.weights = message.weights.map(e => e);
        }
        else {
            obj.weights = [];
        }
        obj.threshold = message.threshold;
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => e);
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Proof.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Proof.decode(message.value);
    },
    toProto(message) {
        return Proof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.Proof",
            value: Proof.encode(message).finish()
        };
    }
};
function createBaseParamsRequest() {
    return {
        chain: ""
    };
}
export const ParamsRequest = {
    typeUrl: "/axelar.evm.v1beta1.ParamsRequest",
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
        const message = createBaseParamsRequest();
        message.chain = object.chain ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseParamsRequest();
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
        return ParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ParamsRequest.decode(message.value);
    },
    toProto(message) {
        return ParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.ParamsRequest",
            value: ParamsRequest.encode(message).finish()
        };
    }
};
function createBaseParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const ParamsResponse = {
    typeUrl: "/axelar.evm.v1beta1.ParamsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ParamsResponse.decode(message.value);
    },
    toProto(message) {
        return ParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.ParamsResponse",
            value: ParamsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map