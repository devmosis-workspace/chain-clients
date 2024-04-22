import { BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
function createBaseConfigRequest() {
    return {};
}
export const ConfigRequest = {
    typeUrl: "/cosmos.base.node.v1beta1.ConfigRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseConfigRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseConfigRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return ConfigRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConfigRequest",
            value: ConfigRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ConfigRequest.decode(message.value);
    },
    toProto(message) {
        return ConfigRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.node.v1beta1.ConfigRequest",
            value: ConfigRequest.encode(message).finish()
        };
    }
};
function createBaseConfigResponse() {
    return {
        minimumGasPrice: ""
    };
}
export const ConfigResponse = {
    typeUrl: "/cosmos.base.node.v1beta1.ConfigResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.minimumGasPrice !== "") {
            writer.uint32(10).string(message.minimumGasPrice);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            minimumGasPrice: isSet(object.minimumGasPrice) ? String(object.minimumGasPrice) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseConfigResponse();
        message.minimumGasPrice = object.minimumGasPrice ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseConfigResponse();
        if (object.minimum_gas_price !== undefined && object.minimum_gas_price !== null) {
            message.minimumGasPrice = object.minimum_gas_price;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.minimum_gas_price = message.minimumGasPrice;
        return obj;
    },
    fromAminoMsg(object) {
        return ConfigResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConfigResponse",
            value: ConfigResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ConfigResponse.decode(message.value);
    },
    toProto(message) {
        return ConfigResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.node.v1beta1.ConfigResponse",
            value: ConfigResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map