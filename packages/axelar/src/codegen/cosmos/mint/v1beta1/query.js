import { Params } from "./mint";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/cosmos.mint.v1beta1.QueryParamsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
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
            typeUrl: "/cosmos.mint.v1beta1.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const QueryParamsResponse = {
    typeUrl: "/cosmos.mint.v1beta1.QueryParamsResponse",
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
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
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
            typeUrl: "/cosmos.mint.v1beta1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryInflationRequest() {
    return {};
}
export const QueryInflationRequest = {
    typeUrl: "/cosmos.mint.v1beta1.QueryInflationRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseQueryInflationRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryInflationRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryInflationRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryInflationRequest",
            value: QueryInflationRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryInflationRequest.decode(message.value);
    },
    toProto(message) {
        return QueryInflationRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.mint.v1beta1.QueryInflationRequest",
            value: QueryInflationRequest.encode(message).finish()
        };
    }
};
function createBaseQueryInflationResponse() {
    return {
        inflation: new Uint8Array()
    };
}
export const QueryInflationResponse = {
    typeUrl: "/cosmos.mint.v1beta1.QueryInflationResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.inflation.length !== 0) {
            writer.uint32(10).bytes(message.inflation);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            inflation: isSet(object.inflation) ? bytesFromBase64(object.inflation) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseQueryInflationResponse();
        message.inflation = object.inflation ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryInflationResponse();
        if (object.inflation !== undefined && object.inflation !== null) {
            message.inflation = bytesFromBase64(object.inflation);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.inflation = message.inflation ? base64FromBytes(message.inflation) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryInflationResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryInflationResponse",
            value: QueryInflationResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryInflationResponse.decode(message.value);
    },
    toProto(message) {
        return QueryInflationResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.mint.v1beta1.QueryInflationResponse",
            value: QueryInflationResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAnnualProvisionsRequest() {
    return {};
}
export const QueryAnnualProvisionsRequest = {
    typeUrl: "/cosmos.mint.v1beta1.QueryAnnualProvisionsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseQueryAnnualProvisionsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryAnnualProvisionsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAnnualProvisionsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAnnualProvisionsRequest",
            value: QueryAnnualProvisionsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryAnnualProvisionsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAnnualProvisionsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.mint.v1beta1.QueryAnnualProvisionsRequest",
            value: QueryAnnualProvisionsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAnnualProvisionsResponse() {
    return {
        annualProvisions: new Uint8Array()
    };
}
export const QueryAnnualProvisionsResponse = {
    typeUrl: "/cosmos.mint.v1beta1.QueryAnnualProvisionsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.annualProvisions.length !== 0) {
            writer.uint32(10).bytes(message.annualProvisions);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            annualProvisions: isSet(object.annualProvisions) ? bytesFromBase64(object.annualProvisions) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseQueryAnnualProvisionsResponse();
        message.annualProvisions = object.annualProvisions ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAnnualProvisionsResponse();
        if (object.annual_provisions !== undefined && object.annual_provisions !== null) {
            message.annualProvisions = bytesFromBase64(object.annual_provisions);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.annual_provisions = message.annualProvisions ? base64FromBytes(message.annualProvisions) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAnnualProvisionsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAnnualProvisionsResponse",
            value: QueryAnnualProvisionsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryAnnualProvisionsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAnnualProvisionsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.mint.v1beta1.QueryAnnualProvisionsResponse",
            value: QueryAnnualProvisionsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map