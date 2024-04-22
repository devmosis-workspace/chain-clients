import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Grant, GrantAuthorization } from "./authz";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseQueryGrantsRequest() {
    return {
        granter: "",
        grantee: "",
        msgTypeUrl: "",
        pagination: undefined
    };
}
export const QueryGrantsRequest = {
    typeUrl: "/cosmos.authz.v1beta1.QueryGrantsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.msgTypeUrl !== "") {
            writer.uint32(26).string(message.msgTypeUrl);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            granter: isSet(object.granter) ? String(object.granter) : "",
            grantee: isSet(object.grantee) ? String(object.grantee) : "",
            msgTypeUrl: isSet(object.msgTypeUrl) ? String(object.msgTypeUrl) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseQueryGrantsRequest();
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        message.msgTypeUrl = object.msgTypeUrl ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGrantsRequest();
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        if (object.msg_type_url !== undefined && object.msg_type_url !== null) {
            message.msgTypeUrl = object.msg_type_url;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        obj.msg_type_url = message.msgTypeUrl;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGrantsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGrantsRequest",
            value: QueryGrantsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGrantsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGrantsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.QueryGrantsRequest",
            value: QueryGrantsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGrantsResponse() {
    return {
        grants: [],
        pagination: undefined
    };
}
export const QueryGrantsResponse = {
    typeUrl: "/cosmos.authz.v1beta1.QueryGrantsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.grants) {
            Grant.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            grants: Array.isArray(object?.grants) ? object.grants.map((e) => Grant.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseQueryGrantsResponse();
        message.grants = object.grants?.map(e => Grant.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGrantsResponse();
        message.grants = object.grants?.map(e => Grant.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.grants) {
            obj.grants = message.grants.map(e => e ? Grant.toAmino(e) : undefined);
        }
        else {
            obj.grants = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGrantsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGrantsResponse",
            value: QueryGrantsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGrantsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGrantsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.QueryGrantsResponse",
            value: QueryGrantsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGranterGrantsRequest() {
    return {
        granter: "",
        pagination: undefined
    };
}
export const QueryGranterGrantsRequest = {
    typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            granter: isSet(object.granter) ? String(object.granter) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseQueryGranterGrantsRequest();
        message.granter = object.granter ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGranterGrantsRequest();
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGranterGrantsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGranterGrantsRequest",
            value: QueryGranterGrantsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGranterGrantsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGranterGrantsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsRequest",
            value: QueryGranterGrantsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGranterGrantsResponse() {
    return {
        grants: [],
        pagination: undefined
    };
}
export const QueryGranterGrantsResponse = {
    typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.grants) {
            GrantAuthorization.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            grants: Array.isArray(object?.grants) ? object.grants.map((e) => GrantAuthorization.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseQueryGranterGrantsResponse();
        message.grants = object.grants?.map(e => GrantAuthorization.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGranterGrantsResponse();
        message.grants = object.grants?.map(e => GrantAuthorization.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.grants) {
            obj.grants = message.grants.map(e => e ? GrantAuthorization.toAmino(e) : undefined);
        }
        else {
            obj.grants = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGranterGrantsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGranterGrantsResponse",
            value: QueryGranterGrantsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGranterGrantsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGranterGrantsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsResponse",
            value: QueryGranterGrantsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGranteeGrantsRequest() {
    return {
        grantee: "",
        pagination: undefined
    };
}
export const QueryGranteeGrantsRequest = {
    typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.grantee !== "") {
            writer.uint32(10).string(message.grantee);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            grantee: isSet(object.grantee) ? String(object.grantee) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseQueryGranteeGrantsRequest();
        message.grantee = object.grantee ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGranteeGrantsRequest();
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.grantee = message.grantee;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGranteeGrantsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGranteeGrantsRequest",
            value: QueryGranteeGrantsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGranteeGrantsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGranteeGrantsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsRequest",
            value: QueryGranteeGrantsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGranteeGrantsResponse() {
    return {
        grants: [],
        pagination: undefined
    };
}
export const QueryGranteeGrantsResponse = {
    typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.grants) {
            GrantAuthorization.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            grants: Array.isArray(object?.grants) ? object.grants.map((e) => GrantAuthorization.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseQueryGranteeGrantsResponse();
        message.grants = object.grants?.map(e => GrantAuthorization.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGranteeGrantsResponse();
        message.grants = object.grants?.map(e => GrantAuthorization.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.grants) {
            obj.grants = message.grants.map(e => e ? GrantAuthorization.toAmino(e) : undefined);
        }
        else {
            obj.grants = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGranteeGrantsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGranteeGrantsResponse",
            value: QueryGranteeGrantsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGranteeGrantsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGranteeGrantsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsResponse",
            value: QueryGranteeGrantsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map