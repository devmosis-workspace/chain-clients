import { LegacyAminoPubKey } from "../../../cosmos/crypto/multisig/keys";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseUpdateGovernanceKeyRequest() {
    return {
        sender: new Uint8Array(),
        governanceKey: LegacyAminoPubKey.fromPartial({})
    };
}
export const UpdateGovernanceKeyRequest = {
    typeUrl: "/axelar.permission.v1beta1.UpdateGovernanceKeyRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.governanceKey !== undefined) {
            LegacyAminoPubKey.encode(message.governanceKey, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            governanceKey: isSet(object.governanceKey) ? LegacyAminoPubKey.fromJSON(object.governanceKey) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseUpdateGovernanceKeyRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.governanceKey = object.governanceKey !== undefined && object.governanceKey !== null ? LegacyAminoPubKey.fromPartial(object.governanceKey) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseUpdateGovernanceKeyRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.governance_key !== undefined && object.governance_key !== null) {
            message.governanceKey = LegacyAminoPubKey.fromAmino(object.governance_key);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.governance_key = message.governanceKey ? LegacyAminoPubKey.toAmino(message.governanceKey) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return UpdateGovernanceKeyRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return UpdateGovernanceKeyRequest.decode(message.value);
    },
    toProto(message) {
        return UpdateGovernanceKeyRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.permission.v1beta1.UpdateGovernanceKeyRequest",
            value: UpdateGovernanceKeyRequest.encode(message).finish()
        };
    }
};
function createBaseUpdateGovernanceKeyResponse() {
    return {};
}
export const UpdateGovernanceKeyResponse = {
    typeUrl: "/axelar.permission.v1beta1.UpdateGovernanceKeyResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseUpdateGovernanceKeyResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseUpdateGovernanceKeyResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return UpdateGovernanceKeyResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return UpdateGovernanceKeyResponse.decode(message.value);
    },
    toProto(message) {
        return UpdateGovernanceKeyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.permission.v1beta1.UpdateGovernanceKeyResponse",
            value: UpdateGovernanceKeyResponse.encode(message).finish()
        };
    }
};
function createBaseRegisterControllerRequest() {
    return {
        sender: new Uint8Array(),
        controller: new Uint8Array()
    };
}
export const RegisterControllerRequest = {
    typeUrl: "/axelar.permission.v1beta1.RegisterControllerRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.controller.length !== 0) {
            writer.uint32(18).bytes(message.controller);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            controller: isSet(object.controller) ? bytesFromBase64(object.controller) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseRegisterControllerRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.controller = object.controller ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseRegisterControllerRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.controller !== undefined && object.controller !== null) {
            message.controller = bytesFromBase64(object.controller);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.controller = message.controller ? base64FromBytes(message.controller) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return RegisterControllerRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RegisterControllerRequest.decode(message.value);
    },
    toProto(message) {
        return RegisterControllerRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.permission.v1beta1.RegisterControllerRequest",
            value: RegisterControllerRequest.encode(message).finish()
        };
    }
};
function createBaseRegisterControllerResponse() {
    return {};
}
export const RegisterControllerResponse = {
    typeUrl: "/axelar.permission.v1beta1.RegisterControllerResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseRegisterControllerResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseRegisterControllerResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return RegisterControllerResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RegisterControllerResponse.decode(message.value);
    },
    toProto(message) {
        return RegisterControllerResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.permission.v1beta1.RegisterControllerResponse",
            value: RegisterControllerResponse.encode(message).finish()
        };
    }
};
function createBaseDeregisterControllerRequest() {
    return {
        sender: new Uint8Array(),
        controller: new Uint8Array()
    };
}
export const DeregisterControllerRequest = {
    typeUrl: "/axelar.permission.v1beta1.DeregisterControllerRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.controller.length !== 0) {
            writer.uint32(18).bytes(message.controller);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            controller: isSet(object.controller) ? bytesFromBase64(object.controller) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseDeregisterControllerRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.controller = object.controller ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseDeregisterControllerRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.controller !== undefined && object.controller !== null) {
            message.controller = bytesFromBase64(object.controller);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.controller = message.controller ? base64FromBytes(message.controller) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return DeregisterControllerRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DeregisterControllerRequest.decode(message.value);
    },
    toProto(message) {
        return DeregisterControllerRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.permission.v1beta1.DeregisterControllerRequest",
            value: DeregisterControllerRequest.encode(message).finish()
        };
    }
};
function createBaseDeregisterControllerResponse() {
    return {};
}
export const DeregisterControllerResponse = {
    typeUrl: "/axelar.permission.v1beta1.DeregisterControllerResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseDeregisterControllerResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseDeregisterControllerResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return DeregisterControllerResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DeregisterControllerResponse.decode(message.value);
    },
    toProto(message) {
        return DeregisterControllerResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.permission.v1beta1.DeregisterControllerResponse",
            value: DeregisterControllerResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map