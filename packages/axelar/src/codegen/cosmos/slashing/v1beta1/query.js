import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Params, ValidatorSigningInfo } from "./slashing";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/cosmos.slashing.v1beta1.QueryParamsRequest",
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
            typeUrl: "/cosmos.slashing.v1beta1.QueryParamsRequest",
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
    typeUrl: "/cosmos.slashing.v1beta1.QueryParamsResponse",
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
            typeUrl: "/cosmos.slashing.v1beta1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySigningInfoRequest() {
    return {
        consAddress: ""
    };
}
export const QuerySigningInfoRequest = {
    typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfoRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.consAddress !== "") {
            writer.uint32(10).string(message.consAddress);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            consAddress: isSet(object.consAddress) ? String(object.consAddress) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseQuerySigningInfoRequest();
        message.consAddress = object.consAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySigningInfoRequest();
        if (object.cons_address !== undefined && object.cons_address !== null) {
            message.consAddress = object.cons_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.cons_address = message.consAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySigningInfoRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QuerySigningInfoRequest",
            value: QuerySigningInfoRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QuerySigningInfoRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySigningInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfoRequest",
            value: QuerySigningInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySigningInfoResponse() {
    return {
        valSigningInfo: ValidatorSigningInfo.fromPartial({})
    };
}
export const QuerySigningInfoResponse = {
    typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfoResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.valSigningInfo !== undefined) {
            ValidatorSigningInfo.encode(message.valSigningInfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            valSigningInfo: isSet(object.valSigningInfo) ? ValidatorSigningInfo.fromJSON(object.valSigningInfo) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseQuerySigningInfoResponse();
        message.valSigningInfo = object.valSigningInfo !== undefined && object.valSigningInfo !== null ? ValidatorSigningInfo.fromPartial(object.valSigningInfo) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySigningInfoResponse();
        if (object.val_signing_info !== undefined && object.val_signing_info !== null) {
            message.valSigningInfo = ValidatorSigningInfo.fromAmino(object.val_signing_info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.val_signing_info = message.valSigningInfo ? ValidatorSigningInfo.toAmino(message.valSigningInfo) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySigningInfoResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QuerySigningInfoResponse",
            value: QuerySigningInfoResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QuerySigningInfoResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySigningInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfoResponse",
            value: QuerySigningInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySigningInfosRequest() {
    return {
        pagination: undefined
    };
}
export const QuerySigningInfosRequest = {
    typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfosRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseQuerySigningInfosRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySigningInfosRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySigningInfosRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QuerySigningInfosRequest",
            value: QuerySigningInfosRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QuerySigningInfosRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySigningInfosRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfosRequest",
            value: QuerySigningInfosRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySigningInfosResponse() {
    return {
        info: [],
        pagination: undefined
    };
}
export const QuerySigningInfosResponse = {
    typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfosResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.info) {
            ValidatorSigningInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            info: Array.isArray(object?.info) ? object.info.map((e) => ValidatorSigningInfo.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseQuerySigningInfosResponse();
        message.info = object.info?.map(e => ValidatorSigningInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySigningInfosResponse();
        message.info = object.info?.map(e => ValidatorSigningInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.info) {
            obj.info = message.info.map(e => e ? ValidatorSigningInfo.toAmino(e) : undefined);
        }
        else {
            obj.info = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySigningInfosResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QuerySigningInfosResponse",
            value: QuerySigningInfosResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QuerySigningInfosResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySigningInfosResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfosResponse",
            value: QuerySigningInfosResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map