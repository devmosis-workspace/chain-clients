import { FeeInfo } from "../exported/v1beta1/types";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Duration } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseRegisterChainMaintainerRequest() {
    return {
        sender: new Uint8Array(),
        chains: []
    };
}
export const RegisterChainMaintainerRequest = {
    typeUrl: "/axelar.nexus.v1beta1.RegisterChainMaintainerRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        for (const v of message.chains) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chains: Array.isArray(object?.chains) ? object.chains.map((e) => String(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseRegisterChainMaintainerRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.chains = object.chains?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseRegisterChainMaintainerRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        message.chains = object.chains?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        if (message.chains) {
            obj.chains = message.chains.map(e => e);
        }
        else {
            obj.chains = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return RegisterChainMaintainerRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RegisterChainMaintainerRequest.decode(message.value);
    },
    toProto(message) {
        return RegisterChainMaintainerRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.RegisterChainMaintainerRequest",
            value: RegisterChainMaintainerRequest.encode(message).finish()
        };
    }
};
function createBaseRegisterChainMaintainerResponse() {
    return {};
}
export const RegisterChainMaintainerResponse = {
    typeUrl: "/axelar.nexus.v1beta1.RegisterChainMaintainerResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseRegisterChainMaintainerResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseRegisterChainMaintainerResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return RegisterChainMaintainerResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RegisterChainMaintainerResponse.decode(message.value);
    },
    toProto(message) {
        return RegisterChainMaintainerResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.RegisterChainMaintainerResponse",
            value: RegisterChainMaintainerResponse.encode(message).finish()
        };
    }
};
function createBaseDeregisterChainMaintainerRequest() {
    return {
        sender: new Uint8Array(),
        chains: []
    };
}
export const DeregisterChainMaintainerRequest = {
    typeUrl: "/axelar.nexus.v1beta1.DeregisterChainMaintainerRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        for (const v of message.chains) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chains: Array.isArray(object?.chains) ? object.chains.map((e) => String(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseDeregisterChainMaintainerRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.chains = object.chains?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseDeregisterChainMaintainerRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        message.chains = object.chains?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        if (message.chains) {
            obj.chains = message.chains.map(e => e);
        }
        else {
            obj.chains = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return DeregisterChainMaintainerRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DeregisterChainMaintainerRequest.decode(message.value);
    },
    toProto(message) {
        return DeregisterChainMaintainerRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.DeregisterChainMaintainerRequest",
            value: DeregisterChainMaintainerRequest.encode(message).finish()
        };
    }
};
function createBaseDeregisterChainMaintainerResponse() {
    return {};
}
export const DeregisterChainMaintainerResponse = {
    typeUrl: "/axelar.nexus.v1beta1.DeregisterChainMaintainerResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseDeregisterChainMaintainerResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseDeregisterChainMaintainerResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return DeregisterChainMaintainerResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DeregisterChainMaintainerResponse.decode(message.value);
    },
    toProto(message) {
        return DeregisterChainMaintainerResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.DeregisterChainMaintainerResponse",
            value: DeregisterChainMaintainerResponse.encode(message).finish()
        };
    }
};
function createBaseActivateChainRequest() {
    return {
        sender: new Uint8Array(),
        chains: []
    };
}
export const ActivateChainRequest = {
    typeUrl: "/axelar.nexus.v1beta1.ActivateChainRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        for (const v of message.chains) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chains: Array.isArray(object?.chains) ? object.chains.map((e) => String(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseActivateChainRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.chains = object.chains?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseActivateChainRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        message.chains = object.chains?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        if (message.chains) {
            obj.chains = message.chains.map(e => e);
        }
        else {
            obj.chains = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ActivateChainRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ActivateChainRequest.decode(message.value);
    },
    toProto(message) {
        return ActivateChainRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.ActivateChainRequest",
            value: ActivateChainRequest.encode(message).finish()
        };
    }
};
function createBaseActivateChainResponse() {
    return {};
}
export const ActivateChainResponse = {
    typeUrl: "/axelar.nexus.v1beta1.ActivateChainResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseActivateChainResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseActivateChainResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return ActivateChainResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ActivateChainResponse.decode(message.value);
    },
    toProto(message) {
        return ActivateChainResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.ActivateChainResponse",
            value: ActivateChainResponse.encode(message).finish()
        };
    }
};
function createBaseDeactivateChainRequest() {
    return {
        sender: new Uint8Array(),
        chains: []
    };
}
export const DeactivateChainRequest = {
    typeUrl: "/axelar.nexus.v1beta1.DeactivateChainRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        for (const v of message.chains) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chains: Array.isArray(object?.chains) ? object.chains.map((e) => String(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseDeactivateChainRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.chains = object.chains?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseDeactivateChainRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        message.chains = object.chains?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        if (message.chains) {
            obj.chains = message.chains.map(e => e);
        }
        else {
            obj.chains = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return DeactivateChainRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DeactivateChainRequest.decode(message.value);
    },
    toProto(message) {
        return DeactivateChainRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.DeactivateChainRequest",
            value: DeactivateChainRequest.encode(message).finish()
        };
    }
};
function createBaseDeactivateChainResponse() {
    return {};
}
export const DeactivateChainResponse = {
    typeUrl: "/axelar.nexus.v1beta1.DeactivateChainResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseDeactivateChainResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseDeactivateChainResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return DeactivateChainResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DeactivateChainResponse.decode(message.value);
    },
    toProto(message) {
        return DeactivateChainResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.DeactivateChainResponse",
            value: DeactivateChainResponse.encode(message).finish()
        };
    }
};
function createBaseRegisterAssetFeeRequest() {
    return {
        sender: new Uint8Array(),
        feeInfo: FeeInfo.fromPartial({})
    };
}
export const RegisterAssetFeeRequest = {
    typeUrl: "/axelar.nexus.v1beta1.RegisterAssetFeeRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.feeInfo !== undefined) {
            FeeInfo.encode(message.feeInfo, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            feeInfo: isSet(object.feeInfo) ? FeeInfo.fromJSON(object.feeInfo) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseRegisterAssetFeeRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.feeInfo = object.feeInfo !== undefined && object.feeInfo !== null ? FeeInfo.fromPartial(object.feeInfo) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseRegisterAssetFeeRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.fee_info !== undefined && object.fee_info !== null) {
            message.feeInfo = FeeInfo.fromAmino(object.fee_info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.fee_info = message.feeInfo ? FeeInfo.toAmino(message.feeInfo) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return RegisterAssetFeeRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RegisterAssetFeeRequest.decode(message.value);
    },
    toProto(message) {
        return RegisterAssetFeeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.RegisterAssetFeeRequest",
            value: RegisterAssetFeeRequest.encode(message).finish()
        };
    }
};
function createBaseRegisterAssetFeeResponse() {
    return {};
}
export const RegisterAssetFeeResponse = {
    typeUrl: "/axelar.nexus.v1beta1.RegisterAssetFeeResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseRegisterAssetFeeResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseRegisterAssetFeeResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return RegisterAssetFeeResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RegisterAssetFeeResponse.decode(message.value);
    },
    toProto(message) {
        return RegisterAssetFeeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.RegisterAssetFeeResponse",
            value: RegisterAssetFeeResponse.encode(message).finish()
        };
    }
};
function createBaseSetTransferRateLimitRequest() {
    return {
        sender: new Uint8Array(),
        chain: "",
        limit: Coin.fromPartial({}),
        window: Duration.fromPartial({})
    };
}
export const SetTransferRateLimitRequest = {
    typeUrl: "/axelar.nexus.v1beta1.SetTransferRateLimitRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.limit !== undefined) {
            Coin.encode(message.limit, writer.uint32(26).fork()).ldelim();
        }
        if (message.window !== undefined) {
            Duration.encode(message.window, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            limit: isSet(object.limit) ? Coin.fromJSON(object.limit) : undefined,
            window: isSet(object.window) ? Duration.fromJSON(object.window) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseSetTransferRateLimitRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.chain = object.chain ?? "";
        message.limit = object.limit !== undefined && object.limit !== null ? Coin.fromPartial(object.limit) : undefined;
        message.window = object.window !== undefined && object.window !== null ? Duration.fromPartial(object.window) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSetTransferRateLimitRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
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
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.chain = message.chain;
        obj.limit = message.limit ? Coin.toAmino(message.limit) : undefined;
        obj.window = message.window ? Duration.toAmino(message.window) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SetTransferRateLimitRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SetTransferRateLimitRequest.decode(message.value);
    },
    toProto(message) {
        return SetTransferRateLimitRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.SetTransferRateLimitRequest",
            value: SetTransferRateLimitRequest.encode(message).finish()
        };
    }
};
function createBaseSetTransferRateLimitResponse() {
    return {};
}
export const SetTransferRateLimitResponse = {
    typeUrl: "/axelar.nexus.v1beta1.SetTransferRateLimitResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseSetTransferRateLimitResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseSetTransferRateLimitResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return SetTransferRateLimitResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SetTransferRateLimitResponse.decode(message.value);
    },
    toProto(message) {
        return SetTransferRateLimitResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.SetTransferRateLimitResponse",
            value: SetTransferRateLimitResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map