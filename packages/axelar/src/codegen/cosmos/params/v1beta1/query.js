import { ParamChange } from "./params";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseQueryParamsRequest() {
    return {
        subspace: "",
        key: ""
    };
}
export const QueryParamsRequest = {
    typeUrl: "/cosmos.params.v1beta1.QueryParamsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.subspace !== "") {
            writer.uint32(10).string(message.subspace);
        }
        if (message.key !== "") {
            writer.uint32(18).string(message.key);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            subspace: isSet(object.subspace) ? String(object.subspace) : "",
            key: isSet(object.key) ? String(object.key) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseQueryParamsRequest();
        message.subspace = object.subspace ?? "";
        message.key = object.key ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsRequest();
        if (object.subspace !== undefined && object.subspace !== null) {
            message.subspace = object.subspace;
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subspace = message.subspace;
        obj.key = message.key;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryParamsRequest",
            value: QueryParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.params.v1beta1.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        param: ParamChange.fromPartial({})
    };
}
export const QueryParamsResponse = {
    typeUrl: "/cosmos.params.v1beta1.QueryParamsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.param !== undefined) {
            ParamChange.encode(message.param, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            param: isSet(object.param) ? ParamChange.fromJSON(object.param) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.param = object.param !== undefined && object.param !== null ? ParamChange.fromPartial(object.param) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.param !== undefined && object.param !== null) {
            message.param = ParamChange.fromAmino(object.param);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.param = message.param ? ParamChange.toAmino(message.param) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryParamsResponse",
            value: QueryParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.params.v1beta1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map