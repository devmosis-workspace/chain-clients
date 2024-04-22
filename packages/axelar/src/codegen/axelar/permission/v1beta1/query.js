import { LegacyAminoPubKey } from "../../../cosmos/crypto/multisig/keys";
import { Params } from "./params";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseQueryGovernanceKeyRequest() {
    return {};
}
export const QueryGovernanceKeyRequest = {
    typeUrl: "/axelar.permission.v1beta1.QueryGovernanceKeyRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseQueryGovernanceKeyRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryGovernanceKeyRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGovernanceKeyRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGovernanceKeyRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGovernanceKeyRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.permission.v1beta1.QueryGovernanceKeyRequest",
            value: QueryGovernanceKeyRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGovernanceKeyResponse() {
    return {
        governanceKey: LegacyAminoPubKey.fromPartial({})
    };
}
export const QueryGovernanceKeyResponse = {
    typeUrl: "/axelar.permission.v1beta1.QueryGovernanceKeyResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.governanceKey !== undefined) {
            LegacyAminoPubKey.encode(message.governanceKey, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            governanceKey: isSet(object.governanceKey) ? LegacyAminoPubKey.fromJSON(object.governanceKey) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseQueryGovernanceKeyResponse();
        message.governanceKey = object.governanceKey !== undefined && object.governanceKey !== null ? LegacyAminoPubKey.fromPartial(object.governanceKey) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGovernanceKeyResponse();
        if (object.governance_key !== undefined && object.governance_key !== null) {
            message.governanceKey = LegacyAminoPubKey.fromAmino(object.governance_key);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.governance_key = message.governanceKey ? LegacyAminoPubKey.toAmino(message.governanceKey) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGovernanceKeyResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGovernanceKeyResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGovernanceKeyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.permission.v1beta1.QueryGovernanceKeyResponse",
            value: QueryGovernanceKeyResponse.encode(message).finish()
        };
    }
};
function createBaseParamsRequest() {
    return {};
}
export const ParamsRequest = {
    typeUrl: "/axelar.permission.v1beta1.ParamsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
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
            typeUrl: "/axelar.permission.v1beta1.ParamsRequest",
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
    typeUrl: "/axelar.permission.v1beta1.ParamsResponse",
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
            typeUrl: "/axelar.permission.v1beta1.ParamsResponse",
            value: ParamsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map