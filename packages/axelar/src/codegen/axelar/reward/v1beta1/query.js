import { Params } from "./params";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseInflationRateRequest() {
    return {
        validator: ""
    };
}
export const InflationRateRequest = {
    typeUrl: "/axelar.reward.v1beta1.InflationRateRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.validator !== "") {
            writer.uint32(10).string(message.validator);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            validator: isSet(object.validator) ? String(object.validator) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseInflationRateRequest();
        message.validator = object.validator ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseInflationRateRequest();
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = object.validator;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator = message.validator;
        return obj;
    },
    fromAminoMsg(object) {
        return InflationRateRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return InflationRateRequest.decode(message.value);
    },
    toProto(message) {
        return InflationRateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.reward.v1beta1.InflationRateRequest",
            value: InflationRateRequest.encode(message).finish()
        };
    }
};
function createBaseInflationRateResponse() {
    return {
        inflationRate: new Uint8Array()
    };
}
export const InflationRateResponse = {
    typeUrl: "/axelar.reward.v1beta1.InflationRateResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.inflationRate.length !== 0) {
            writer.uint32(10).bytes(message.inflationRate);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            inflationRate: isSet(object.inflationRate) ? bytesFromBase64(object.inflationRate) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseInflationRateResponse();
        message.inflationRate = object.inflationRate ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseInflationRateResponse();
        if (object.inflation_rate !== undefined && object.inflation_rate !== null) {
            message.inflationRate = bytesFromBase64(object.inflation_rate);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.inflation_rate = message.inflationRate ? base64FromBytes(message.inflationRate) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return InflationRateResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return InflationRateResponse.decode(message.value);
    },
    toProto(message) {
        return InflationRateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.reward.v1beta1.InflationRateResponse",
            value: InflationRateResponse.encode(message).finish()
        };
    }
};
function createBaseParamsRequest() {
    return {};
}
export const ParamsRequest = {
    typeUrl: "/axelar.reward.v1beta1.ParamsRequest",
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
            typeUrl: "/axelar.reward.v1beta1.ParamsRequest",
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
    typeUrl: "/axelar.reward.v1beta1.ParamsResponse",
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
            typeUrl: "/axelar.reward.v1beta1.ParamsResponse",
            value: ParamsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map